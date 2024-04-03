import { d as db, l as lucia } from "../../../chunks/auth.js";
import { f as fail, r as redirect } from "../../../chunks/index.js";
import { generateId } from "lucia";
import { Argon2id } from "oslo/password";
const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    const username = formData.get("username");
    const password = formData.get("password");
    if (typeof username !== "string" || username.length < 3 || username.length > 31 || !/^[a-z0-9_-]+$/.test(username)) {
      return fail(400, {
        message: "Invalid username"
      });
    }
    if (typeof password !== "string" || password.length < 6 || password.length > 255) {
      return fail(400, {
        message: "Invalid password"
      });
    }
    const userId = generateId(15);
    const hashedPassword = await new Argon2id().hash(password);
    await db.execute({
      sql: "INSERT INTO user (id, username, hashed_password) VALUES (?, ?, ?)",
      args: [userId, username, hashedPassword]
    });
    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
    redirect(302, "/dashboard");
  }
};
export {
  actions
};
