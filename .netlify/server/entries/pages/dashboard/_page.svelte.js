import { c as create_ssr_component, e as escape, v as validate_component } from "../../../chunks/ssr.js";
import "devalue";
import "../../../chunks/client.js";
import { B as Button } from "../../../chunks/index3.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let user = data.session?.user.email;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<h1 data-svelte-h="svelte-101alym">Dashboard</h1> <p>Hello, ${escape(user)}</p> <form method="post">${validate_component(Button, "Button").$$render($$result, { type: "submit" }, {}, {
    default: () => {
      return `Sign Out`;
    }
  })}</form>`;
});
export {
  Page as default
};
