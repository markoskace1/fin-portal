function C(){}const ct=t=>t;function q(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function st(){return Object.create(null)}function L(t){t.forEach(B)}function M(t){return typeof t=="function"}function lt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function ot(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function at(t){return Object.keys(t).length===0}function j(t,...e){if(t==null){for(const i of e)i(void 0);return C}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function ut(t){let e;return j(t,n=>e=n)(),e}function ft(t,e,n){t.$$.on_destroy.push(j(e,n))}function _t(t,e,n,i){if(t){const r=A(t,e,n,i);return t[0](r)}}function A(t,e,n,i){return t[1]&&i?q(n.ctx.slice(),t[1](i(e))):n.ctx}function dt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],c=Math.max(e.dirty.length,r.length);for(let l=0;l<c;l+=1)o[l]=e.dirty[l]|r[l];return o}return e.dirty|r}return e.dirty}function ht(t,e,n,i,r,o){if(r){const c=A(e,n,i,o);t.p(c,r)}}function mt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function pt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function yt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function bt(t){return t&&M(t.destroy)?t.destroy:C}function gt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const F=["",!0,1,"true","contenteditable"];let y=!1;function xt(){y=!0}function wt(){y=!1}function H(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function I(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let a=0;a<e.length;a++){const u=e[a];u.claim_order!==void 0&&s.push(u)}e=s}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let s=0;s<e.length;s++){const a=e[s].claim_order,u=(r>0&&e[n[r]].claim_order<=a?r+1:H(1,r,T=>e[n[T]].claim_order,a))-1;i[s]=n[u]+1;const E=u+1;n[E]=s,r=Math.max(E,r)}const o=[],c=[];let l=e.length-1;for(let s=n[r]+1;s!=0;s=i[s-1]){for(o.push(e[s-1]);l>=s;l--)c.push(e[l]);l--}for(;l>=0;l--)c.push(e[l]);o.reverse(),c.sort((s,a)=>s.claim_order-a.claim_order);for(let s=0,a=0;s<c.length;s++){for(;a<o.length&&c[s].claim_order>=o[a].claim_order;)a++;const u=a<o.length?o[a]:null;t.insertBefore(c[s],u)}}function R(t,e){t.appendChild(e)}function z(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=O("style");return e.textContent="/* empty */",U(z(t),e),e.sheet}function U(t,e){return R(t.head||t,e),e.sheet}function W(t,e){if(y){for(I(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){y&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Et(t){t.parentNode&&t.parentNode.removeChild(t)}function Nt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function O(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function v(t){return document.createTextNode(t)}function Ct(){return v(" ")}function jt(){return v("")}function At(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function k(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const J=["width","height"];function K(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&J.indexOf(i)===-1?t[i]=e[i]:k(t,i,e[i])}function Ot(t,e){for(const n in e)k(t,n,e[n])}function Q(t,e){Object.keys(e).forEach(n=>{V(t,n,e[n])})}function V(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:k(t,e,n)}function St(t){return/-/.test(t)?Q:K}function Dt(t){return t.dataset.svelteH}function Pt(t){return Array.from(t.childNodes)}function X(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,i,r=!1){X(t);const o=(()=>{for(let c=t.claim_info.last_index;c<t.length;c++){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r||(t.claim_info.last_index=c),l}}for(let c=t.claim_info.last_index-1;c>=0;c--){const l=t[c];if(e(l)){const s=n(l);return s===void 0?t.splice(c,1):t[c]=s,r?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=c,l}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function D(t,e,n,i){return S(t,r=>r.nodeName===e,r=>{const o=[];for(let c=0;c<r.attributes.length;c++){const l=r.attributes[c];n[l.name]||o.push(l.name)}o.forEach(c=>r.removeAttribute(c))},()=>i(e))}function Tt(t,e,n){return D(t,e,n,O)}function qt(t,e,n){return D(t,e,n,G)}function Y(t,e){return S(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>v(e),!0)}function Bt(t){return Y(t," ")}function Z(t,e){e=""+e,t.data!==e&&(t.data=e)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Lt(t,e,n){~F.indexOf(n)?$(t,e):Z(t,e)}function Mt(t,e){t.value=e??""}function Ft(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function tt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function Ht(t,e){return new t(e)}let p;function b(t){p=t}function f(){if(!p)throw new Error("Function called outside component initialization");return p}function It(t){f().$$.on_mount.push(t)}function Rt(t){f().$$.after_update.push(t)}function zt(t){f().$$.on_destroy.push(t)}function Ut(){const t=f();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=tt(e,n,{cancelable:i});return r.slice().forEach(c=>{c.call(t,o)}),!o.defaultPrevented}return!0}}function Wt(t,e){return f().$$.context.set(t,e),e}function Gt(t){return f().$$.context.get(t)}function Jt(t){return f().$$.context.has(t)}function Kt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const h=[],N=[];let d=[];const x=[],P=Promise.resolve();let w=!1;function et(){w||(w=!0,P.then(it))}function Qt(){return et(),P}function nt(t){d.push(t)}function Vt(t){x.push(t)}const g=new Set;let _=0;function it(){if(_!==0)return;const t=p;do{try{for(;_<h.length;){const e=h[_];_++,b(e),rt(e.$$)}}catch(e){throw h.length=0,_=0,e}for(b(null),h.length=0,_=0;N.length;)N.pop()();for(let e=0;e<d.length;e+=1){const n=d[e];g.has(n)||(g.add(n),n())}d.length=0}while(h.length);for(;x.length;)x.pop()();w=!1,g.clear(),b(t)}function rt(t){if(t.fragment!==null){t.update(),L(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(nt)}}function Xt(t){const e=[],n=[];d.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),d=e}export{At as $,mt as A,dt as B,z as C,vt as D,L as E,M as F,nt as G,tt as H,ct as I,st as J,it as K,at as L,Xt as M,p as N,b as O,B as P,h as Q,et as R,xt as S,wt as T,zt as U,ut as V,yt as W,q as X,pt as Y,Kt as Z,St as _,Ct as a,K as a0,Mt as a1,Wt as a2,Jt as a3,Gt as a4,j as a5,Nt as a6,Lt as a7,Ut as a8,Vt as a9,gt as aa,G as ab,qt as ac,Ot as ad,ot as ae,Pt as b,Tt as c,Y as d,O as e,Et as f,Bt as g,W as h,kt as i,Z as j,ft as k,Dt as l,k as m,C as n,bt as o,jt as p,Rt as q,It as r,lt as s,v as t,Ft as u,N as v,Ht as w,Qt as x,_t as y,ht as z};