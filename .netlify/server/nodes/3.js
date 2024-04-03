import * as server from '../entries/pages/dashboard/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/dashboard/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/dashboard/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.s7rs46ln.js","_app/immutable/chunks/scheduler.CeKAjqpJ.js","_app/immutable/chunks/index.BYvPy9WV.js","_app/immutable/chunks/forms.DUb76a0T.js","_app/immutable/chunks/entry.BmhWhKuS.js","_app/immutable/chunks/index.DobFTQXU.js"];
export const stylesheets = [];
export const fonts = [];
