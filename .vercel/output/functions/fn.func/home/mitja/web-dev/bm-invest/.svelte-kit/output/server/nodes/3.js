import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.BPbRo-CK.js","_app/immutable/chunks/scheduler.CeKAjqpJ.js","_app/immutable/chunks/index.BYvPy9WV.js","_app/immutable/chunks/forms.CUpRI8DX.js","_app/immutable/chunks/entry.CDnrQrr2.js","_app/immutable/chunks/index.DCNEPnXL.js"];
export const stylesheets = [];
export const fonts = [];
