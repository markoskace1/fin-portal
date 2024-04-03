import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.D7NScJrf.js","_app/immutable/chunks/scheduler.CeKAjqpJ.js","_app/immutable/chunks/index.BYvPy9WV.js","_app/immutable/chunks/index.DobFTQXU.js","_app/immutable/chunks/entry.BmhWhKuS.js","_app/immutable/chunks/stores.BiiB3sLv.js","_app/immutable/chunks/forms.DUb76a0T.js"];
export const stylesheets = ["_app/immutable/assets/2.Crp_yK76.css"];
export const fonts = [];
