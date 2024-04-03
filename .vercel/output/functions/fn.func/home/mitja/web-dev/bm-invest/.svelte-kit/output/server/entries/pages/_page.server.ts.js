import "../../chunks/client.js";
import { p as parseRequest, m as mergeDefaults, a as mapErrors, r as replaceInvalidDefaults, b as zod, f as formSchema } from "../../chunks/formData.js";
import "just-clone";
import "ts-deepmerge";
import { r as redirect, f as fail } from "../../chunks/index.js";
import "devalue";
import "memoize-weak";
import { d as db, l as lucia } from "../../chunks/auth.js";
import { Argon2id } from "oslo/password";
async function superValidate(data, adapter, options) {
  if (data && "superFormValidationLibrary" in data) {
    options = adapter;
    adapter = data;
    data = void 0;
  }
  const validator = adapter;
  const defaults = options?.defaults ?? validator.defaults;
  const jsonSchema = validator.jsonSchema;
  const parsed = await parseRequest(data, jsonSchema, options);
  const addErrors = options?.errors ?? (options?.strict ? true : !!parsed.data);
  const parsedData = options?.strict ? parsed.data ?? {} : mergeDefaults(parsed.data, defaults);
  let status;
  if (!!parsed.data || addErrors) {
    status = await /* @__PURE__ */ validator.validate(parsedData);
  } else {
    status = { success: false, issues: [] };
  }
  const valid = status.success;
  const errors = valid || !addErrors ? {} : mapErrors(status.issues, validator.shape);
  const dataWithDefaults = valid ? status.data : replaceInvalidDefaults(options?.strict ? mergeDefaults(parsedData, defaults) : parsedData, defaults, jsonSchema, status.issues, options?.preprocessed);
  let outputData;
  if (jsonSchema.additionalProperties === false) {
    outputData = {};
    for (const key of Object.keys(jsonSchema.properties ?? {})) {
      if (key in dataWithDefaults)
        outputData[key] = dataWithDefaults[key];
    }
  } else {
    outputData = dataWithDefaults;
  }
  const output = {
    id: parsed.id ?? options?.id ?? validator.id,
    valid,
    posted: parsed.posted,
    errors,
    data: outputData
  };
  if (!parsed.posted) {
    output.constraints = validator.constraints;
    if (Object.keys(validator.shape).length) {
      output.shape = validator.shape;
    }
  }
  return output;
}
const load = async (event) => {
  if (event.locals.user)
    redirect(302, "/dashboard");
  return {
    form: await superValidate(zod(formSchema))
  };
};
const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    const existingUser = await db.execute({
      sql: "SELECT * FROM user WHERE username = ?",
      args: [username]
    });
    if (!existingUser) {
      return fail(400, {
        message: "Invalid username or password"
      });
    }
    const validPassword = await new Argon2id().verify(
      existingUser.rows[0].hashed_password,
      password
    );
    if (!validPassword) {
      return fail(400, {
        message: "Invalid username or password"
      });
    }
    const session = await lucia.createSession(existingUser.rows[0].id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
    redirect(302, "/dashboard");
  }
};
export {
  actions,
  load
};
