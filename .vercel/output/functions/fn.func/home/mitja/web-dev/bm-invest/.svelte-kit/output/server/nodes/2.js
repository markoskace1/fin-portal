import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.7AJ58-OZ.js","_app/immutable/chunks/scheduler.CeKAjqpJ.js","_app/immutable/chunks/index.BYvPy9WV.js","_app/immutable/chunks/index.DCNEPnXL.js","_app/immutable/chunks/entry.CDnrQrr2.js","_app/immutable/chunks/stores.CLBST8sU.js","_app/immutable/chunks/forms.CUpRI8DX.js"];
export const stylesheets = ["_app/immutable/assets/2.Crp_yK76.css"];
export const fonts = [];
