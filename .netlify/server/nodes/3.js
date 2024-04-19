import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.D_xdTt96.js","_app/immutable/chunks/scheduler.CZIi0ZVR.js","_app/immutable/chunks/index.ChoaK3ux.js","_app/immutable/chunks/index.D01wOi4F.js","_app/immutable/chunks/entry.YrUoEmpc.js"];
export const stylesheets = [];
export const fonts = [];
