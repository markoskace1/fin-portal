import * as server from '../entries/pages/signup/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/signup/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/signup/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.CkfxEt9J.js","_app/immutable/chunks/scheduler.CeKAjqpJ.js","_app/immutable/chunks/index.BYvPy9WV.js","_app/immutable/chunks/forms.CUpRI8DX.js","_app/immutable/chunks/entry.CDnrQrr2.js"];
export const stylesheets = [];
export const fonts = [];