var app=function(){"use strict";function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a,s;function i(t,e){t.appendChild(e)}function l(t,e,n){t.insertBefore(e,n||null)}function u(t){t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function g(){return d(" ")}function A(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function m(t){s=t}function p(t){(function(){if(!s)throw new Error("Function called outside component initialization");return s})().$$.on_mount.push(t)}const y=[],k=[],b=[],v=[],U=Promise.resolve();let j=!1;function B(t){b.push(t)}const w=new Set;let x=0;function R(){const t=s;do{for(;x<y.length;){const t=y[x];x++,m(t),Y(t.$$)}for(m(null),y.length=0,x=0;k.length;)k.pop()();for(let t=0;t<b.length;t+=1){const e=b[t];w.has(e)||(w.add(e),e())}b.length=0}while(y.length);for(;v.length;)v.pop()();j=!1,w.clear(),m(t)}function Y(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const W=new Set;function X(t,e){t&&t.i&&(W.delete(t),t.i(e))}function Z(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),undefined.c.push((()=>{W.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function E(t){t&&t.c()}function L(t,n,c,a){const{fragment:s,on_mount:i,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,c),a||B((()=>{const n=i.map(e).filter(r);l?l.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(B)}function S(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function C(t,e){-1===t.$$.dirty[0]&&(y.push(t),j||(j=!0,U.then(R)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function N(e,r,c,a,i,l,f,d=[-1]){const g=s;m(e);const A=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(g?g.$$.context:[])),callbacks:n(),dirty:d,skip_bound:!1,root:r.target||g.$$.root};f&&f(A.root);let h=!1;if(A.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return A.ctx&&i(A.ctx[t],A.ctx[t]=r)&&(!A.skip_bound&&A.bound[t]&&A.bound[t](r),h&&C(e,t)),n})):[],A.update(),h=!0,o(A.before_update),A.fragment=!!a&&a(A.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);A.fragment&&A.fragment.l(t),t.forEach(u)}else A.fragment&&A.fragment.c();r.intro&&X(e.$$.fragment),L(e,r.target,r.anchor,r.customElement),R()}m(g)}class I{$destroy(){S(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(e){let n,r,c,a,s,d,m,p,y,k;return{c(){n=f("div"),r=f("label"),r.textContent="python",c=g(),a=f("input"),s=g(),d=f("label"),d.textContent="Node js",m=g(),p=f("input"),h(r,"for","python_radio"),h(a,"type","radio"),h(a,"name","choice"),h(a,"id","python_radio"),a.value="python",h(d,"for","node_radio"),h(p,"type","radio"),h(p,"name","choice"),h(p,"id","node_radio"),p.value="nodejs",h(n,"class","svelte-bszn8b")},m(t,o){l(t,n,o),i(n,r),i(n,c),i(n,a),i(n,s),i(n,d),i(n,m),i(n,p),y||(k=[A(a,"click",e[0]),A(p,"click",e[0])],y=!0)},p:t,i:t,o:t,d(t){t&&u(n),y=!1,o(k)}}}function V(t){p((()=>{let t=document.getElementById("python_radio"),e=document.getElementById("node_radio");chrome.storage.local.get(["key"],(function(n){"python"===n?.key?.option?t.checked=!0:e.checked=!0}))}));return[t=>{let e=t.currentTarget.value;chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.tabs.sendMessage(t[0].id,{option:e},(function(t){console.log(t?.selected,t?.stop);let n={option:t?.selected||e,stop:t?.stop};chrome.storage.local.set({key:n},(function(){console.log("Value is set to "+n.option)}))}))}))}]}class G extends I{constructor(t){super(),N(this,t,V,q,c,{})}}function J(e){let n,o,r,c,a,s;return{c(){n=f("div"),o=f("label"),o.textContent="Stop Extension",r=g(),c=f("input"),h(o,"for","stop"),h(c,"type","checkbox"),h(c,"name","stop"),h(c,"id","stop"),h(n,"class","svelte-6ozmxk")},m(t,u){l(t,n,u),i(n,o),i(n,r),i(n,c),a||(s=A(c,"change",e[0]),a=!0)},p:t,i:t,o:t,d(t){t&&u(n),a=!1,s()}}}function z(){return!!document.getElementById("stop").checked}function M(t){let e=null,n={};p((()=>{let t=document.getElementById("stop");chrome.storage.local.get(["key"],(function(n){t.checked=n.key?.stop||!1,e=n?.key?.option||"nodejs",console.log(n?.key)}))}));return[()=>{chrome.tabs.query({active:!0,currentWindow:!0},(function(t){chrome.tabs.sendMessage(t[0].id,{option:e,stop:z()},(function(t){console.log(t),e=t?.selected,n={option:e,stop:z()},chrome.storage.local.set({key:n},(function(){console.log("Value is set to "+e)}))}))}))}]}class O extends I{constructor(t){super(),N(this,t,M,J,c,{})}}function T(t){let e,n,o,r,c,s,A,m,p,y,k,b,v,U,j,B;return v=new O({}),j=new G({}),{c(){var i,l;e=f("main"),n=f("h1"),o=d("Weclome packageinfo "),r=d(t[0]),c=g(),s=f("p"),s.textContent="you just need to select the package name and regarding infomation wil be\r\n    displayed automatically",A=g(),m=f("div"),p=f("a"),y=f("img"),b=g(),E(v.$$.fragment),U=g(),E(j.$$.fragment),h(n,"class","svelte-flmgf1"),h(s,"class","svelte-flmgf1"),i=y.src,l=k="\ndata:image/png;base64,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\n\n",a||(a=document.createElement("a")),a.href=l,i!==a.href&&h(y,"src","\ndata:image/png;base64,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\n\n"),h(y,"alt","github"),h(y,"class","svelte-flmgf1"),h(p,"href","https://github.com/HEGADE/PackageInfo"),h(p,"target","_blank"),h(m,"class","svelte-flmgf1")},m(t,a){l(t,e,a),i(e,n),i(n,o),i(n,r),i(e,c),i(e,s),i(e,A),i(e,m),i(m,p),i(p,y),i(e,b),L(v,e,null),i(e,U),L(j,e,null),B=!0},p(t,[e]){(!B||1&e)&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[0])},i(t){B||(X(v.$$.fragment,t),X(j.$$.fragment,t),B=!0)},o(t){Z(v.$$.fragment,t),Z(j.$$.fragment,t),B=!1},d(t){t&&u(e),S(v),S(j)}}}function K(t,e,n){let{name:o}=e;return t.$$set=t=>{"name"in t&&n(0,o=t.name)},[o]}return new class extends I{constructor(t){super(),N(this,t,K,T,c,{name:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map