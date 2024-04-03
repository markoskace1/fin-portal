import { r as redirect, f as fail } from "../../../chunks/index.js";
import { l as lucia } from "../../../chunks/auth.js";
const load = async (event) => {
  if (!event.locals.user)
    redirect(303, "/");
  return {
    username: event.locals.user.username
  };
};
const actions = {
  default: async (event) => {
    if (!event.locals.session) {
      return fail(401);
    }
    await lucia.invalidateSession(event.locals.session.id);
    const sessionCookie = lucia.createBlankSessionCookie();
    event.cookies.set(sessionCookie.name, sessionCookie.value, {
      path: ".",
      ...sessionCookie.attributes
    });
    redirect(302, "/");
  }
};
export {
  actions,
  load
};
