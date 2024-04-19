import { r as redirect } from "../../../chunks/index.js";
const load = async ({ locals: { safeGetSession } }) => {
  const { session } = await safeGetSession();
  if (!session) {
    throw redirect(303, "/");
  }
};
const actions = {
  default: async ({ locals: { supabase, safeGetSession } }) => {
    const { session } = await safeGetSession();
    if (session) {
      await supabase.auth.signOut();
      throw redirect(303, "/");
    }
  }
};
export {
  actions,
  load
};
