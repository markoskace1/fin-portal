import { c as create_ssr_component } from "../../../chunks/ssr.js";
import "devalue";
import "../../../chunks/client.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<h1 data-svelte-h="svelte-13vjqy4">Sign up</h1> <form method="post" data-svelte-h="svelte-81ngok"><label for="username">Username</label> <input name="username" id="username"><br> <label for="password">Password</label> <input type="password" name="password" id="password"><br> <button>Continue</button></form>`;
});
export {
  Page as default
};
