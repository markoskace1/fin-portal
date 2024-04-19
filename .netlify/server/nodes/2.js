import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.BwnI-i25.js","_app/immutable/chunks/scheduler.CZIi0ZVR.js","_app/immutable/chunks/index.ChoaK3ux.js","_app/immutable/chunks/index.D01wOi4F.js","_app/immutable/chunks/entry.YrUoEmpc.js","_app/immutable/chunks/_commonjsHelpers.CqkleIqs.js","_app/immutable/chunks/stores.C2eO1K4x.js"];
export const stylesheets = ["_app/immutable/assets/2.Crp_yK76.css"];
export const fonts = [];
