import{s as O,e as $,a as y,t as b,c as g,l as B,g as C,b as S,d as v,f as i,m as E,i as u,h as H,o as P}from"../chunks/scheduler.CeKAjqpJ.js";import{S as q,i as w,c as D,a as F,m as M,t as R,b as j,d as k}from"../chunks/index.BYvPy9WV.js";import{e as z}from"../chunks/forms.CUpRI8DX.js";import{B as A}from"../chunks/index.DCNEPnXL.js";function G(m){let e;return{c(){e=b("Sign Out")},l(n){e=v(n,"Sign Out")},m(n,s){u(n,e,s)},d(n){n&&i(e)}}}function I(m){let e,n="Dashboard",s,o,c,_,p,l,r,d,h,x;return r=new A({props:{type:"submit",$$slots:{default:[G]},$$scope:{ctx:m}}}),{c(){e=$("h1"),e.textContent=n,s=y(),o=$("p"),c=b("Hello, "),_=b(m[0]),p=y(),l=$("form"),D(r.$$.fragment),this.h()},l(t){e=g(t,"H1",{"data-svelte-h":!0}),B(e)!=="svelte-101alym"&&(e.textContent=n),s=C(t),o=g(t,"P",{});var a=S(o);c=v(a,"Hello, "),_=v(a,m[0]),a.forEach(i),p=C(t),l=g(t,"FORM",{method:!0});var f=S(l);F(r.$$.fragment,f),f.forEach(i),this.h()},h(){E(l,"method","post")},m(t,a){u(t,e,a),u(t,s,a),u(t,o,a),H(o,c),H(o,_),u(t,p,a),u(t,l,a),M(r,l,null),d=!0,h||(x=P(z.call(null,l)),h=!0)},p(t,[a]){const f={};a&4&&(f.$$scope={dirty:a,ctx:t}),r.$set(f)},i(t){d||(R(r.$$.fragment,t),d=!0)},o(t){j(r.$$.fragment,t),d=!1},d(t){t&&(i(e),i(s),i(o),i(p),i(l)),k(r),h=!1,x()}}}function J(m,e,n){let{data:s}=e,o=s.username;return m.$$set=c=>{"data"in c&&n(1,s=c.data)},[o,s]}class T extends q{constructor(e){super(),w(this,e,J,I,O,{data:1})}}export{T as component};