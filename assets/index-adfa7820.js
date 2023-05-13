(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Yr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},_t=[],Ee=()=>{},ss=()=>!1,ls=/^on[^a-z]/,Un=e=>ls.test(e),Wr=e=>e.startsWith("onUpdate:"),ne=Object.assign,Kr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},fs=Object.prototype.hasOwnProperty,$=(e,t)=>fs.call(e,t),M=Array.isArray,wt=e=>Bn(e)==="[object Map]",ji=e=>Bn(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",Vr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",zi=e=>G(e)&&L(e.then)&&L(e.catch),Di=Object.prototype.toString,Bn=e=>Di.call(e),cs=e=>Bn(e).slice(8,-1),$i=e=>Bn(e)==="[object Object]",Xr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,On=Yr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},us=/-(\w)/g,Re=Hn(e=>e.replace(us,(t,n)=>n?n.toUpperCase():"")),ds=/\B([A-Z])/g,It=Hn(e=>e.replace(ds,"-$1").toLowerCase()),Yn=Hn(e=>e.charAt(0).toUpperCase()+e.slice(1)),or=Hn(e=>e?`on${Yn(e)}`:""),Nn=(e,t)=>!Object.is(e,t),sr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Mn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},ms=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Fa;const br=()=>Fa||(Fa=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?vs(r):qr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(G(e))return e}}const ps=/;(?![^(]*\))/g,hs=/:([^]+)/,gs=new RegExp("\\/\\*.*?\\*\\/","gs");function vs(e){const t={};return e.replace(gs,"").split(ps).forEach(n=>{if(n){const r=n.split(hs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function lt(e){let t="";if(ee(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=lt(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const bs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",ys=Yr(bs);function Ui(e){return!!e||e===""}const he=e=>ee(e)?e:e==null?"":M(e)||G(e)&&(e.toString===Di||!L(e.toString))?JSON.stringify(e,Bi,2):String(e),Bi=(e,t)=>t&&t.__v_isRef?Bi(e,t.value):wt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:ji(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!M(t)&&!$i(t)?String(t):t;let xe;class xs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function _s(e,t=xe){t&&t.active&&t.effects.push(e)}function ws(){return xe}const Gr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Hi=e=>(e.w&Je)>0,Yi=e=>(e.n&Je)>0,ks=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},As=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Hi(a)&&!Yi(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},yr=new WeakMap;let jt=0,Je=1;const xr=30;let we;const ut=Symbol(""),_r=Symbol("");class Jr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,_s(this,r)}run(){if(!this.active)return this.fn();let t=we,n=qe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,qe=!0,Je=1<<++jt,jt<=xr?ks(this):Ra(this),this.fn()}finally{jt<=xr&&As(this),Je=1<<--jt,we=this.parent,qe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ra(this),this.onStop&&this.onStop(),this.active=!1)}}function Ra(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let qe=!0;const Wi=[];function Tt(){Wi.push(qe),qe=!1}function Nt(){const e=Wi.pop();qe=e===void 0?!0:e}function me(e,t,n){if(qe&&we){let r=yr.get(e);r||yr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Gr()),Ki(a)}}function Ki(e,t){let n=!1;jt<=xr?Yi(e)||(e.n|=Je,n=!Hi(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function $e(e,t,n,r,a,i){const o=yr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?Xr(n)&&s.push(o.get("length")):(s.push(o.get(ut)),wt(e)&&s.push(o.get(_r)));break;case"delete":M(e)||(s.push(o.get(ut)),wt(e)&&s.push(o.get(_r)));break;case"set":wt(e)&&s.push(o.get(ut));break}if(s.length===1)s[0]&&wr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);wr(Gr(l))}}function wr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&La(r);for(const r of n)r.computed||La(r)}function La(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Os=Yr("__proto__,__v_isRef,__isVue"),Vi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Vr)),Es=Zr(),Ps=Zr(!1,!0),Cs=Zr(!0),ja=Ss();function Ss(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Tt();const r=B(this)[t].apply(this,n);return Nt(),r}}),e}function Is(e){const t=B(this);return me(t,"has",e),t.hasOwnProperty(e)}function Zr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ks:Zi:t?Ji:Gi).get(r))return r;const o=M(r);if(!e){if(o&&$(ja,a))return Reflect.get(ja,a,i);if(a==="hasOwnProperty")return Is}const s=Reflect.get(r,a,i);return(Vr(a)?Vi.has(a):Os(a))||(e||me(r,"get",a),t)?s:fe(s)?o&&Xr(a)?s:s.value:G(s)?e?Qi(s):ta(s):s}}const Ts=Xi(),Ns=Xi(!0);function Xi(e=!1){return function(n,r,a,i){let o=n[r];if(Yt(o)&&fe(o)&&!fe(a))return!1;if(!e&&(!kr(a)&&!Yt(a)&&(o=B(o),a=B(a)),!M(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=M(n)&&Xr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Nn(a,o)&&$e(n,"set",r,a):$e(n,"add",r,a)),l}}function Ms(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&$e(e,"delete",t,void 0),r}function Fs(e,t){const n=Reflect.has(e,t);return(!Vr(t)||!Vi.has(t))&&me(e,"has",t),n}function Rs(e){return me(e,"iterate",M(e)?"length":ut),Reflect.ownKeys(e)}const qi={get:Es,set:Ts,deleteProperty:Ms,has:Fs,ownKeys:Rs},Ls={get:Cs,set(e,t){return!0},deleteProperty(e,t){return!0}},js=ne({},qi,{get:Ps,set:Ns}),Qr=e=>e,Wn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Wn(a),s=r?Qr:n?aa:ra;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function un(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function dn(e,t=!1){return e=e.__v_raw,!t&&me(B(e),"iterate",ut),Reflect.get(e,"size",e)}function za(e){e=B(e);const t=B(this);return Wn(t).has.call(t,e)||(t.add(e),$e(t,"add",e,e)),this}function Da(e,t){t=B(t);const n=B(this),{has:r,get:a}=Wn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Nn(t,o)&&$e(n,"set",e,t):$e(n,"add",e,t),this}function $a(e){const t=B(this),{has:n,get:r}=Wn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&$e(t,"delete",e,void 0),i}function Ua(){const e=B(this),t=e.size!==0,n=e.clear();return t&&$e(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?Qr:e?aa:ra;return!e&&me(s,"iterate",ut),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function pn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=wt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Qr:t?aa:ra;return!t&&me(i,"iterate",l?_r:ut),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function zs(){const e={get(i){return cn(this,i)},get size(){return dn(this)},has:un,add:za,set:Da,delete:$a,clear:Ua,forEach:mn(!1,!1)},t={get(i){return cn(this,i,!1,!0)},get size(){return dn(this)},has:un,add:za,set:Da,delete:$a,clear:Ua,forEach:mn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:mn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=pn(i,!1,!1),n[i]=pn(i,!0,!1),t[i]=pn(i,!1,!0),r[i]=pn(i,!0,!0)}),[e,n,t,r]}const[Ds,$s,Us,Bs]=zs();function ea(e,t){const n=t?e?Bs:Us:e?$s:Ds;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Hs={get:ea(!1,!1)},Ys={get:ea(!1,!0)},Ws={get:ea(!0,!1)},Gi=new WeakMap,Ji=new WeakMap,Zi=new WeakMap,Ks=new WeakMap;function Vs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Xs(e){return e.__v_skip||!Object.isExtensible(e)?0:Vs(cs(e))}function ta(e){return Yt(e)?e:na(e,!1,qi,Hs,Gi)}function qs(e){return na(e,!1,js,Ys,Ji)}function Qi(e){return na(e,!0,Ls,Ws,Zi)}function na(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Xs(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function kt(e){return Yt(e)?kt(e.__v_raw):!!(e&&e.__v_isReactive)}function Yt(e){return!!(e&&e.__v_isReadonly)}function kr(e){return!!(e&&e.__v_isShallow)}function eo(e){return kt(e)||Yt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function to(e){return Mn(e,"__v_skip",!0),e}const ra=e=>G(e)?ta(e):e,aa=e=>G(e)?Qi(e):e;function Gs(e){qe&&we&&(e=B(e),Ki(e.dep||(e.dep=Gr())))}function Js(e,t){e=B(e);const n=e.dep;n&&wr(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Zs(e){return fe(e)?e.value:e}const Qs={get:(e,t,n)=>Zs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function no(e){return kt(e)?e:new Proxy(e,Qs)}class el{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Jr(t,()=>{this._dirty||(this._dirty=!0,Js(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Gs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function tl(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new el(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Kn(i,t,n)}return a}function Pe(e,t,n,r){if(L(e)){const i=Ge(e,t,n,r);return i&&zi(i)&&i.catch(o=>{Kn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function Kn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}nl(e,n,a,r)}function nl(e,t,n,r=!0){console.error(e)}let Wt=!1,Ar=!1;const oe=[];let Ne=0;const At=[];let ze=null,ot=0;const ro=Promise.resolve();let ia=null;function rl(e){const t=ia||ro;return e?t.then(this?e.bind(this):e):t}function al(e){let t=Ne+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Kt(oe[r])<e?t=r+1:n=r}return t}function oa(e){(!oe.length||!oe.includes(e,Wt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?oe.push(e):oe.splice(al(e.id),0,e),ao())}function ao(){!Wt&&!Ar&&(Ar=!0,ia=ro.then(oo))}function il(e){const t=oe.indexOf(e);t>Ne&&oe.splice(t,1)}function ol(e){M(e)?At.push(...e):(!ze||!ze.includes(e,e.allowRecurse?ot+1:ot))&&At.push(e),ao()}function Ba(e,t=Wt?Ne+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function io(e){if(At.length){const t=[...new Set(At)];if(At.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>Kt(n)-Kt(r)),ot=0;ot<ze.length;ot++)ze[ot]();ze=null,ot=0}}const Kt=e=>e.id==null?1/0:e.id,sl=(e,t)=>{const n=Kt(e)-Kt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function oo(e){Ar=!1,Wt=!0,oe.sort(sl);const t=Ee;try{for(Ne=0;Ne<oe.length;Ne++){const n=oe[Ne];n&&n.active!==!1&&Ge(n,null,14)}}finally{Ne=0,oe.length=0,io(),Wt=!1,ia=null,(oe.length||At.length)&&oo()}}function ll(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||q;v&&(a=n.map(w=>ee(w)?w.trim():w)),m&&(a=n.map(ms))}let s,l=r[s=or(t)]||r[s=or(Re(t))];!l&&i&&(l=r[s=or(It(t))]),l&&Pe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(c,e,6,a)}}function so(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=so(c,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):ne(o,i),G(e)&&r.set(e,o),o)}function Vn(e,t){return!e||!Un(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,It(t))||$(e,t))}let ke=null,Xn=null;function Fn(e){const t=ke;return ke=e,Xn=e&&e.type.__scopeId||null,t}function sa(e){Xn=e}function la(){Xn=null}function fl(e,t=ke,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Qa(-1);const i=Fn(t);let o;try{o=e(...a)}finally{Fn(i),r._d&&Qa(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function lr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:w,ctx:j,inheritAttrs:N}=e;let D,k;const O=Fn(e);try{if(n.shapeFlag&4){const S=a||r;D=Te(d.call(S,S,m,i,w,v,j)),k=l}else{const S=t;D=Te(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),k=t.props?l:cl(l)}}catch(S){Ut.length=0,Kn(S,e,1),D=ce(Vt)}let F=D;if(k&&N!==!1){const S=Object.keys(k),{shapeFlag:H}=F;S.length&&H&7&&(o&&S.some(Wr)&&(k=ul(k,o)),F=Pt(F,k))}return n.dirs&&(F=Pt(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),D=F,Fn(O),D}const cl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Un(n))&&((t||(t={}))[n]=e[n]);return t},ul=(e,t)=>{const n={};for(const r in e)(!Wr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function dl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ha(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Vn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ha(r,o,c):!0:!!o;return!1}function Ha(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Vn(n,i))return!0}return!1}function ml({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const pl=e=>e.__isSuspense;function hl(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):ol(e)}const hn={};function En(e,t,n){return lo(e,t,n)}function lo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){var s;const l=ws()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(fe(e)?(c=()=>e.value,d=kr(e)):kt(e)?(c=()=>e,r=!0):M(e)?(m=!0,d=e.some(S=>kt(S)||kr(S)),c=()=>e.map(S=>{if(fe(S))return S.value;if(kt(S))return bt(S);if(L(S))return Ge(S,l,2)})):L(e)?t?c=()=>Ge(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Pe(e,l,3,[w])}:c=Ee,t&&r){const S=c;c=()=>bt(S())}let v,w=S=>{v=O.onStop=()=>{Ge(S,l,4)}},j;if(Gt)if(w=Ee,t?n&&Pe(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const S=pf();j=S.__watcherHandles||(S.__watcherHandles=[])}else return Ee;let N=m?new Array(e.length).fill(hn):hn;const D=()=>{if(O.active)if(t){const S=O.run();(r||d||(m?S.some((H,ae)=>Nn(H,N[ae])):Nn(S,N)))&&(v&&v(),Pe(t,l,3,[S,N===hn?void 0:m&&N[0]===hn?[]:N,w]),N=S)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>de(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>oa(D));const O=new Jr(c,k);t?n?D():N=O.run():a==="post"?de(O.run.bind(O),l&&l.suspense):O.run();const F=()=>{O.stop(),l&&l.scope&&Kr(l.scope.effects,O)};return j&&j.push(F),F}function gl(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?fo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=re;Ct(this);const s=lo(a,i.bind(r),n);return o?Ct(o):dt(),s}function fo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function bt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))bt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)bt(e[n],t);else if(ji(e)||wt(e))e.forEach(n=>{bt(n,t)});else if($i(e))for(const n in e)bt(e[n],t);return e}function rt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Tt(),Pe(l,n,8,[e.el,s,e,t]),Nt())}}function co(e,t){return L(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const Pn=e=>!!e.type.__asyncLoader,uo=e=>e.type.__isKeepAlive;function vl(e,t){mo(e,"a",t)}function bl(e,t){mo(e,"da",t)}function mo(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)uo(a.parent.vnode)&&yl(r,t,n,a),a=a.parent}}function yl(e,t,n,r){const a=qn(t,e,r,!0);po(()=>{Kr(r[t],a)},n)}function qn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Tt(),Ct(n);const s=Pe(t,n,e,o);return dt(),Nt(),s});return r?a.unshift(i):a.push(i),i}}const Ye=e=>(t,n=re)=>(!Gt||e==="sp")&&qn(e,(...r)=>t(...r),n),xl=Ye("bm"),_l=Ye("m"),wl=Ye("bu"),kl=Ye("u"),Al=Ye("bum"),po=Ye("um"),Ol=Ye("sp"),El=Ye("rtg"),Pl=Ye("rtc");function Cl(e,t=re){qn("ec",e,t)}const ho="components";function go(e,t){return Il(ho,e,!0,t)||e}const Sl=Symbol.for("v-ndc");function Il(e,t,n=!0,r=!1){const a=ke||re;if(a){const i=a.type;if(e===ho){const s=cf(i,!1);if(s&&(s===t||s===Re(t)||s===Yn(Re(t))))return i}const o=Ya(a[e]||i[e],t)||Ya(a.appContext[e],t);return!o&&r?i:o}}function Ya(e,t){return e&&(e[t]||e[Re(t)]||e[Yn(Re(t))])}function Tl(e,t,n,r){let a;const i=n&&n[r];if(M(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Or=e=>e?Po(e)?ma(e)||e.proxy:Or(e.parent):null,$t=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Or(e.parent),$root:e=>Or(e.root),$emit:e=>e.emit,$options:e=>fa(e),$forceUpdate:e=>e.f||(e.f=()=>oa(e.update)),$nextTick:e=>e.n||(e.n=rl.bind(e.proxy)),$watch:e=>gl.bind(e)}),fr=(e,t)=>e!==q&&!e.__isScriptSetup&&$(e,t),Nl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(fr(r,t))return o[t]=1,r[t];if(a!==q&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==q&&$(n,t))return o[t]=4,n[t];Er&&(o[t]=0)}}const d=$t[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return fr(a,t)?(a[t]=n,!0):r!==q&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&$(e,o)||fr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$($t,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Wa(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Er=!0;function Ml(e){const t=fa(e),n=e.proxy,r=e.ctx;Er=!1,t.beforeCreate&&Ka(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:w,updated:j,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:S,render:H,renderTracked:ae,renderTriggered:ie,errorCaptured:be,serverPrefetch:ve,expose:Le,inheritAttrs:Ft,components:on,directives:sn,filters:rr}=t;if(c&&Fl(c,r,null),o)for(const J in o){const W=o[J];L(W)&&(r[J]=W.bind(n))}if(a){const J=a.call(n,n);G(J)&&(e.data=ta(J))}if(Er=!0,i)for(const J in i){const W=i[J],tt=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Ee,ln=!L(W)&&L(W.set)?W.set.bind(n):Ee,nt=it({get:tt,set:ln});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>nt.value,set:Ce=>nt.value=Ce})}if(s)for(const J in s)vo(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(W=>{$l(W,J[W])})}d&&Ka(d,e,"c");function se(J,W){M(W)?W.forEach(tt=>J(tt.bind(n))):W&&J(W.bind(n))}if(se(xl,m),se(_l,v),se(wl,w),se(kl,j),se(vl,N),se(bl,D),se(Cl,be),se(Pl,ae),se(El,ie),se(Al,O),se(po,S),se(Ol,ve),M(Le))if(Le.length){const J=e.exposed||(e.exposed={});Le.forEach(W=>{Object.defineProperty(J,W,{get:()=>n[W],set:tt=>n[W]=tt})})}else e.exposed||(e.exposed={});H&&e.render===Ee&&(e.render=H),Ft!=null&&(e.inheritAttrs=Ft),on&&(e.components=on),sn&&(e.directives=sn)}function Fl(e,t,n=Ee){M(e)&&(e=Pr(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=Cn(a.from||r,a.default,!0):i=Cn(a.from||r):i=Cn(a),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ka(e,t,n){Pe(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function vo(e,t,n,r){const a=r.includes(".")?fo(n,r):()=>n[r];if(ee(e)){const i=t[e];L(i)&&En(a,i)}else if(L(e))En(a,e.bind(n));else if(G(e))if(M(e))e.forEach(i=>vo(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&En(a,i,e)}}function fa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Rn(l,c,o,!0)),Rn(l,t,o)),G(t)&&i.set(t,l),l}function Rn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Rn(e,i,n,!0),a&&a.forEach(o=>Rn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Rl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Rl={data:Va,props:Xa,emits:Xa,methods:zt,computed:zt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:zt,directives:zt,watch:jl,provide:Va,inject:Ll};function Va(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Ll(e,t){return zt(Pr(e),Pr(t))}function Pr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function zt(e,t){return e?ne(Object.create(null),e,t):t}function Xa(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ne(Object.create(null),Wa(e),Wa(t??{})):t}function jl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function bo(){return{app:null,config:{isNativeTag:ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zl=0;function Dl(e,t){return function(r,a=null){L(r)||(r=ne({},r)),a!=null&&!G(a)&&(a=null);const i=bo(),o=new Set;let s=!1;const l=i.app={_uid:zl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:hf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ce(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ma(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Ln=l;try{return c()}finally{Ln=null}}};return l}}let Ln=null;function $l(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Cn(e,t,n=!1){const r=re||ke;if(r||Ln){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ln._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Ul(e,t,n,r=!1){const a={},i={};Mn(i,Jn,1),e.propsDefaults=Object.create(null),yo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:qs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Bl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Vn(e.emitsOptions,v))continue;const w=t[v];if(l)if($(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const j=Re(v);a[j]=Cr(l,s,j,w,e,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{yo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=It(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Cr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&$e(e,"set","$attrs")}function yo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(On(l))continue;const c=t[l];let d;a&&$(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Vn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Cr(a,l,m,c[m],e,!$(c,m))}}return o}function Cr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ct(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===It(n))&&(r=!0))}return r}function xo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,w]=xo(m,t,!0);ne(o,v),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,_t),_t;if(M(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);qa(m)&&(o[m]=q)}else if(i)for(const d in i){const m=Re(d);if(qa(m)){const v=i[d],w=o[m]=M(v)||L(v)?{type:v}:ne({},v);if(w){const j=Za(Boolean,w.type),N=Za(String,w.type);w[0]=j>-1,w[1]=N<0||j<N,(j>-1||$(w,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function qa(e){return e[0]!=="$"}function Ga(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ja(e,t){return Ga(e)===Ga(t)}function Za(e,t){return M(t)?t.findIndex(n=>Ja(n,e)):L(t)&&Ja(t,e)?0:-1}const _o=e=>e[0]==="_"||e==="$stable",ca=e=>M(e)?e.map(Te):[Te(e)],Hl=(e,t,n)=>{if(t._n)return t;const r=fl((...a)=>ca(t(...a)),n);return r._c=!1,r},wo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(_o(a))continue;const i=e[a];if(L(i))t[a]=Hl(a,i,r);else if(i!=null){const o=ca(i);t[a]=()=>o}}},ko=(e,t)=>{const n=ca(t);e.slots.default=()=>n},Yl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Mn(t,"_",n)):wo(t,e.slots={})}else e.slots={},t&&ko(e,t);Mn(e.slots,Jn,1)},Wl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,wo(t,a)),o=t}else t&&(ko(e,t),o={default:1});if(i)for(const s in a)!_o(s)&&!(s in o)&&delete a[s]};function Sr(e,t,n,r,a=!1){if(M(e)){e.forEach((v,w)=>Sr(v,t&&(M(t)?t[w]:t),n,r,a));return}if(Pn(r)&&!a)return;const i=r.shapeFlag&4?ma(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ee(c)?(d[c]=null,$(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),L(l))Ge(l,s,12,[o,d]);else{const v=ee(l),w=fe(l);if(v||w){const j=()=>{if(e.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?M(N)&&Kr(N,i):M(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,de(j,n)):j()}}}const de=hl;function Kl(e){return Vl(e)}function Vl(e,t){const n=br();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:w=Ee,insertStaticContent:j}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Lt(f,u)&&(g=fn(f),Ce(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:P}=u;switch(b){case Gn:D(f,u,p,g);break;case Vt:k(f,u,p,g);break;case cr:f==null&&O(u,p,g,A);break;case _e:on(f,u,p,g,h,x,A,y,_);break;default:P&1?H(f,u,p,g,h,x,A,y,_):P&6?sn(f,u,p,g,h,x,A,y,_):(P&64||P&128)&&b.process(f,u,p,g,h,x,A,y,_,ht)}I!=null&&h&&Sr(I,f&&f.ref,x,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=j(f.children,u,p,g,f.el,f.anchor)},F=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},S=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},H=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?ae(u,p,g,h,x,A,y,_):ve(f,u,h,x,A,y,_)},ae=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:I,props:P,shapeFlag:T,transition:R,dirs:z}=f;if(_=f.el=o(f.type,x,P&&P.is,P),T&8?d(_,f.children):T&16&&be(f.children,_,null,g,h,x&&I!=="foreignObject",A,y),z&&rt(f,null,g,"created"),ie(_,f,f.scopeId,A,g),P){for(const Y in P)Y!=="value"&&!On(Y)&&i(_,Y,null,P[Y],x,f.children,g,h,je);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ie(b,g,f)}z&&rt(f,null,g,"beforeMount");const K=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;K&&R.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||K||z)&&de(()=>{b&&Ie(b,g,f),K&&R.enter(_),z&&rt(f,null,g,"mounted")},h)},ie=(f,u,p,g,h)=>{if(p&&w(f,p),g)for(let x=0;x<g.length;x++)w(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ie(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},be=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=y?Xe(f[b]):Te(f[b]);N(null,I,u,p,g,h,x,A,y)}},ve=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=u;_|=f.patchFlag&16;const P=f.props||q,T=u.props||q;let R;p&&at(p,!1),(R=T.onVnodeBeforeUpdate)&&Ie(R,p,u,f),I&&rt(u,f,p,"beforeUpdate"),p&&at(p,!0);const z=h&&u.type!=="foreignObject";if(b?Le(f.dynamicChildren,b,y,p,g,z,x):A||W(f,u,y,null,p,g,z,x,!1),_>0){if(_&16)Ft(y,u,P,T,p,g,h);else if(_&2&&P.class!==T.class&&i(y,"class",null,T.class,h),_&4&&i(y,"style",P.style,T.style,h),_&8){const K=u.dynamicProps;for(let Y=0;Y<K.length;Y++){const Q=K[Y],ye=P[Q],gt=T[Q];(gt!==ye||Q==="value")&&i(y,Q,ye,gt,h,f.children,p,g,je)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Ft(y,u,P,T,p,g,h);((R=T.onVnodeUpdated)||I)&&de(()=>{R&&Ie(R,p,u,f),I&&rt(u,f,p,"updated")},g)},Le=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],I=_.el&&(_.type===_e||!Lt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,I,null,g,h,x,A,!0)}},Ft=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==q)for(const y in p)!On(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,je);for(const y in g){if(On(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,je)}"value"in g&&i(f,"value",p.value,g.value)}},on=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,p,g),r(I,p,g),be(u.children,p,I,h,x,A,y,_)):P>0&&P&64&&T&&f.dynamicChildren?(Le(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&Ao(f,u,!0)):W(f,u,p,I,h,x,A,y,_)},sn=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):rr(u,p,g,h,x,A,_):Ca(f,u,_)},rr=(f,u,p,g,h,x,A)=>{const y=f.component=af(f,g,h);if(uo(f)&&(y.ctx.renderer=ht),of(y),y.asyncDep){if(h&&h.registerDep(y,se),!f.el){const _=y.subTree=ce(Vt);k(null,_,u,p)}return}se(y,f,u,p,h,x,A)},Ca=(f,u,p)=>{const g=u.component=f.component;if(dl(f,u,p))if(g.asyncDep&&!g.asyncResolved){J(g,u,p);return}else g.next=u,il(g.update),g.update();else u.el=f.el,g.vnode=u},se=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:P,u:T,parent:R,vnode:z}=f,K=I,Y;at(f,!1),I?(I.el=z.el,J(f,I,A)):I=z,P&&sr(P),(Y=I.props&&I.props.onVnodeBeforeUpdate)&&Ie(Y,R,I,z),at(f,!0);const Q=lr(f),ye=f.subTree;f.subTree=Q,N(ye,Q,m(ye.el),fn(ye),f,h,x),I.el=Q.el,K===null&&ml(f,Q.el),T&&de(T,h),(Y=I.props&&I.props.onVnodeUpdated)&&de(()=>Ie(Y,R,I,z),h)}else{let I;const{el:P,props:T}=u,{bm:R,m:z,parent:K}=f,Y=Pn(u);if(at(f,!1),R&&sr(R),!Y&&(I=T&&T.onVnodeBeforeMount)&&Ie(I,K,u),at(f,!0),P&&ir){const Q=()=>{f.subTree=lr(f),ir(P,f.subTree,f,h,null)};Y?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Q()):Q()}else{const Q=f.subTree=lr(f);N(null,Q,p,g,f,h,x),u.el=Q.el}if(z&&de(z,h),!Y&&(I=T&&T.onVnodeMounted)){const Q=u;de(()=>Ie(I,K,Q),h)}(u.shapeFlag&256||K&&Pn(K.vnode)&&K.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new Jr(y,()=>oa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,at(f,!0),b()},J=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Bl(f,u.props,g,p),Wl(f,u.children,p),Tt(),Ba(),Nt()},W=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){ln(b,P,p,g,h,x,A,y,_);return}else if(T&256){tt(b,P,p,g,h,x,A,y,_);return}}R&8?(I&16&&je(b,h,x),P!==b&&d(p,P)):I&16?R&16?ln(b,P,p,g,h,x,A,y,_):je(b,h,x,!0):(I&8&&d(p,""),R&16&&be(P,p,g,h,x,A,y,_))},tt=(f,u,p,g,h,x,A,y,_)=>{f=f||_t,u=u||_t;const b=f.length,I=u.length,P=Math.min(b,I);let T;for(T=0;T<P;T++){const R=u[T]=_?Xe(u[T]):Te(u[T]);N(f[T],R,p,null,h,x,A,y,_)}b>I?je(f,h,x,!0,!1,P):be(u,p,g,h,x,A,y,_,P)},ln=(f,u,p,g,h,x,A,y,_)=>{let b=0;const I=u.length;let P=f.length-1,T=I-1;for(;b<=P&&b<=T;){const R=f[b],z=u[b]=_?Xe(u[b]):Te(u[b]);if(Lt(R,z))N(R,z,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=T;){const R=f[P],z=u[T]=_?Xe(u[T]):Te(u[T]);if(Lt(R,z))N(R,z,p,null,h,x,A,y,_);else break;P--,T--}if(b>P){if(b<=T){const R=T+1,z=R<I?u[R].el:g;for(;b<=T;)N(null,u[b]=_?Xe(u[b]):Te(u[b]),p,z,h,x,A,y,_),b++}}else if(b>T)for(;b<=P;)Ce(f[b],h,x,!0),b++;else{const R=b,z=b,K=new Map;for(b=z;b<=T;b++){const pe=u[b]=_?Xe(u[b]):Te(u[b]);pe.key!=null&&K.set(pe.key,b)}let Y,Q=0;const ye=T-z+1;let gt=!1,Ta=0;const Rt=new Array(ye);for(b=0;b<ye;b++)Rt[b]=0;for(b=R;b<=P;b++){const pe=f[b];if(Q>=ye){Ce(pe,h,x,!0);continue}let Se;if(pe.key!=null)Se=K.get(pe.key);else for(Y=z;Y<=T;Y++)if(Rt[Y-z]===0&&Lt(pe,u[Y])){Se=Y;break}Se===void 0?Ce(pe,h,x,!0):(Rt[Se-z]=b+1,Se>=Ta?Ta=Se:gt=!0,N(pe,u[Se],p,null,h,x,A,y,_),Q++)}const Na=gt?Xl(Rt):_t;for(Y=Na.length-1,b=ye-1;b>=0;b--){const pe=z+b,Se=u[pe],Ma=pe+1<I?u[pe+1].el:g;Rt[b]===0?N(null,Se,p,Ma,h,x,A,y,_):gt&&(Y<0||b!==Na[Y]?nt(Se,p,Ma,2):Y--)}}},nt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){nt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,ht);return}if(A===_e){r(x,u,p);for(let P=0;P<_.length;P++)nt(_[P],u,p,g);r(f.anchor,u,p);return}if(A===cr){F(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),de(()=>y.enter(x),h);else{const{leave:P,delayLeave:T,afterLeave:R}=y,z=()=>r(x,u,p),K=()=>{P(x,()=>{z(),R&&R()})};T?T(x,z,K):K()}else r(x,u,p)},Ce=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:P,dirs:T}=f;if(y!=null&&Sr(y,null,p,f,!0),I&256){u.ctx.deactivate(f);return}const R=I&1&&T,z=!Pn(f);let K;if(z&&(K=A&&A.onVnodeBeforeUnmount)&&Ie(K,u,f),I&6)os(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}R&&rt(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,p,h,ht,g):b&&(x!==_e||P>0&&P&64)?je(b,u,p,!1,!0):(x===_e&&P&384||!h&&I&16)&&je(_,u,p),g&&Sa(f)}(z&&(K=A&&A.onVnodeUnmounted)||R)&&de(()=>{K&&Ie(K,u,f),R&&rt(f,null,u,"unmounted")},p)},Sa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===_e){is(p,g);return}if(u===cr){S(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},is=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},os=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&sr(g),h.stop(),x&&(x.active=!1,Ce(A,f,u,p)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},je=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Ce(f[A],u,p,g,h)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ia=(f,u,p)=>{f==null?u._vnode&&Ce(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Ba(),io(),u._vnode=f},ht={p:N,um:Ce,m:nt,r:Sa,mt:rr,mc:be,pc:W,pbc:Le,n:fn,o:e};let ar,ir;return t&&([ar,ir]=t(ht)),{render:Ia,hydrate:ar,createApp:Dl(Ia,ar)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ao(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Xe(a[i]),s.el=o.el),n||Ao(o,s)),s.type===Gn&&(s.el=o.el)}}function Xl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const ql=e=>e.__isTeleport,_e=Symbol.for("v-fgt"),Gn=Symbol.for("v-txt"),Vt=Symbol.for("v-cmt"),cr=Symbol.for("v-stc"),Ut=[];let Ae=null;function Ot(e=!1){Ut.push(Ae=e?null:[])}function Gl(){Ut.pop(),Ae=Ut[Ut.length-1]||null}let Xt=1;function Qa(e){Xt+=e}function Oo(e){return e.dynamicChildren=Xt>0?Ae||_t:null,Gl(),Xt>0&&Ae&&Ae.push(e),e}function qt(e,t,n,r,a,i){return Oo(U(e,t,n,r,a,i,!0))}function Jl(e,t,n,r,a){return Oo(ce(e,t,n,r,a,!0))}function Ir(e){return e?e.__v_isVNode===!0:!1}function Lt(e,t){return e.type===t.type&&e.key===t.key}const Jn="__vInternal",Eo=({key:e})=>e??null,Sn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||fe(e)||L(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function U(e,t=null,n=null,r=0,a=null,i=e===_e?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Eo(t),ref:t&&Sn(t),scopeId:Xn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ke};return s?(ua(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Xt>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const ce=Zl;function Zl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Sl)&&(e=Vt),Ir(e)){const s=Pt(e,t,!0);return n&&ua(s,n),Xt>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(uf(e)&&(e=e.__vccOpts),t){t=Ql(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=lt(s)),G(l)&&(eo(l)&&!M(l)&&(l=ne({},l)),t.style=qr(l))}const o=ee(e)?1:pl(e)?128:ql(e)?64:G(e)?4:L(e)?2:0;return U(e,t,n,r,a,o,i,!0)}function Ql(e){return e?eo(e)||Jn in e?ne({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?tf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Eo(s),ref:t&&t.ref?n&&a?M(a)?a.concat(Sn(t)):[a,Sn(t)]:Sn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==_e?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function ef(e=" ",t=0){return ce(Gn,null,e,t)}function Te(e){return e==null||typeof e=="boolean"?ce(Vt):M(e)?ce(_e,null,e.slice()):typeof e=="object"?Xe(e):ce(Gn,null,String(e))}function Xe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function ua(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ua(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Jn in t)?t._ctx=ke:a===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[ef(t)]):n=8);e.children=t,e.shapeFlag|=n}function tf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=lt([t.class,r.class]));else if(a==="style")t.style=qr([t.style,r.style]);else if(Un(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Pe(e,t,7,[n,r])}const nf=bo();let rf=0;function af(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||nf,i={uid:rf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new xs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:xo(r,a),emitsOptions:so(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ll.bind(null,i),e.ce&&e.ce(i),i}let re=null,da,vt,ei="__VUE_INSTANCE_SETTERS__";(vt=br()[ei])||(vt=br()[ei]=[]),vt.push(e=>re=e),da=e=>{vt.length>1?vt.forEach(t=>t(e)):vt[0](e)};const Ct=e=>{da(e),e.scope.on()},dt=()=>{re&&re.scope.off(),da(null)};function Po(e){return e.vnode.shapeFlag&4}let Gt=!1;function of(e,t=!1){Gt=t;const{props:n,children:r}=e.vnode,a=Po(e);Ul(e,n,a,t),Yl(e,r);const i=a?sf(e,t):void 0;return Gt=!1,i}function sf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=to(new Proxy(e.ctx,Nl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?ff(e):null;Ct(e),Tt();const i=Ge(r,e,0,[e.props,a]);if(Nt(),dt(),zi(i)){if(i.then(dt,dt),t)return i.then(o=>{ti(e,o,t)}).catch(o=>{Kn(o,e,0)});e.asyncDep=i}else ti(e,i,t)}else Co(e,t)}function ti(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=no(t)),Co(e,n)}let ni;function Co(e,t,n){const r=e.type;if(!e.render){if(!t&&ni&&!r.render){const a=r.template||fa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=ni(a,c)}}e.render=r.render||Ee}Ct(e),Tt(),Ml(e),Nt(),dt()}function lf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function ff(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return lf(e)},slots:e.slots,emit:e.emit,expose:t}}function ma(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(no(to(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}}))}function cf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function uf(e){return L(e)&&"__vccOpts"in e}const it=(e,t)=>tl(e,t,Gt);function df(e,t,n){const r=arguments.length;return r===2?G(t)&&!M(t)?Ir(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ir(n)&&(n=[n]),ce(e,t,n))}const mf=Symbol.for("v-scx"),pf=()=>Cn(mf),hf="3.3.1",gf="http://www.w3.org/2000/svg",st=typeof document<"u"?document:null,ri=st&&st.createElement("template"),vf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?st.createElementNS(gf,e):st.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>st.createTextNode(e),createComment:e=>st.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>st.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ri.innerHTML=r?`<svg>${e}</svg>`:e;const s=ri.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function bf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function yf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){if(t&&!ee(t))for(const i in t)n[i]==null&&Tr(r,i,"");for(const i in n)Tr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ai=/\s*!important$/;function Tr(e,t,n){if(M(n))n.forEach(r=>Tr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=xf(e,t);ai.test(n)?e.setProperty(It(r),n.replace(ai,""),"important"):e[r]=n}}const ii=["Webkit","Moz","ms"],ur={};function xf(e,t){const n=ur[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return ur[t]=r;r=Yn(r);for(let a=0;a<ii.length;a++){const i=ii[a]+r;if(i in e)return ur[t]=i}return t}const oi="http://www.w3.org/1999/xlink";function _f(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(oi,t.slice(6,t.length)):e.setAttributeNS(oi,t,n);else{const i=ys(t);n==null||i&&!Ui(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function wf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ui(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function kf(e,t,n,r){e.addEventListener(t,n,r)}function Af(e,t,n,r){e.removeEventListener(t,n,r)}function Of(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Ef(t);if(r){const c=i[t]=Sf(r,a);kf(e,s,c,l)}else o&&(Af(e,s,o,l),i[t]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function Ef(e){let t;if(si.test(e)){t={};let r;for(;r=e.match(si);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):It(e.slice(2)),t]}let dr=0;const Pf=Promise.resolve(),Cf=()=>dr||(Pf.then(()=>dr=0),dr=Date.now());function Sf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(If(r,n.value),t,5,[r])};return n.value=e,n.attached=Cf(),n}function If(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const li=/^on[a-z]/,Tf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?bf(e,r,a):t==="style"?yf(e,n,r):Un(t)?Wr(t)||Of(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Nf(e,t,r,a))?wf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),_f(e,t,r,a))};function Nf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&li.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||li.test(t)&&ee(n)?!1:t in e}const Mf=ne({patchProp:Tf},vf);let fi;function Ff(){return fi||(fi=Kl(Mf))}const Rf=(...e)=>{const t=Ff().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Lf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Lf(e){return ee(e)?document.querySelector(e):e}const jf={methods:{goToPage(e){window.open(e)}}};const pa=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},zf=e=>(sa("data-v-738f4928"),e=e(),la(),e),Df={class:"header"},$f=zf(()=>U("span",null,"Teacher Sheet",-1));function Uf(e,t,n,r,a,i){const o=go("font-awesome-icon");return Ot(),qt("div",Df,[$f,U("button",{class:"button",onClick:t[0]||(t[0]=s=>i.goToPage("https://github.com/thiagoarantes/teacherSheet"))},[ce(o,{icon:"fa-brands fa-github"})])])}const Bf=pa(jf,[["render",Uf],["__scopeId","data-v-738f4928"]]),Me={grammar:"G",vocabulary:"V",pronunciation:"P",fluency:"F"},Hf={props:{lines:Number,line:Number},data(){return{categories:Me,bGrammar:!1,bVocabulary:!1,bPronunciation:!1,bFluency:!1}},methods:{onClickButton(e,t){switch(e){case Me.grammar:this.bGrammar=!this.bGrammar;break;case Me.vocabulary:this.bVocabulary=!this.bVocabulary;break;case Me.pronunciation:this.bPronunciation=!this.bPronunciation;break;case Me.fluency:this.bFluency=!this.bFluency;break}t=!t,this.$emit("clicked",[e,t])},verifyLine(e){if(this.line===this.lines){const t=e.target.value!=="";this.$emit("new-line",t)}}}};const Zn=e=>(sa("data-v-22d84d30"),e=e(),la(),e),Yf={class:"line"},Wf=Zn(()=>U("div",null,"NOTE",-1)),Kf=Zn(()=>U("div",null,"CATEGORIES",-1)),Vf=Zn(()=>U("div",null,"HINTS",-1)),Xf=Zn(()=>U("input",{type:"text",class:"input"},null,-1));function qf(e,t,n,r,a,i){return Ot(),qt("div",Yf,[Wf,Kf,Vf,U("input",{type:"text",class:"input",onInput:t[0]||(t[0]=(...o)=>i.verifyLine&&i.verifyLine(...o))},null,32),U("button",{class:lt(["button",{clicked:a.bGrammar}]),onClick:t[1]||(t[1]=o=>i.onClickButton(a.categories.grammar,a.bGrammar))},he(a.categories.grammar),3),U("button",{class:lt(["button",{clicked:a.bVocabulary}]),onClick:t[2]||(t[2]=o=>i.onClickButton(a.categories.vocabulary,a.bVocabulary))},he(a.categories.vocabulary),3),U("button",{class:lt(["button",{clicked:a.bPronunciation}]),onClick:t[3]||(t[3]=o=>i.onClickButton(a.categories.pronunciation,a.bPronunciation))},he(a.categories.pronunciation),3),U("button",{class:lt(["button",{clicked:a.bFluency}]),onClick:t[4]||(t[4]=o=>i.onClickButton(a.categories.fluency,a.bFluency))},he(a.categories.fluency),3),Xf])}const Gf=pa(Hf,[["render",qf],["__scopeId","data-v-22d84d30"]]),Jf={components:{SheetLine:Gf},data(){return{categories:Me,lines:1,score:2.5,totalG:0,totalV:0,totalP:0,totalF:0}},methods:{addNewLine(e){e&&this.lines++},onChildClick([e,t]){switch(e){case Me.grammar:t?this.totalG++:this.totalG--;break;case Me.vocabulary:t?this.totalV++:this.totalV--;break;case Me.pronunciation:t?this.totalP++:this.totalP--;break;case Me.fluency:t?this.totalF++:this.totalF--;break}this.updateScore()},updateScore(){switch(this.totalG+this.totalV+this.totalP+this.totalF){case 0:this.score=2.5;break;case 1:case 2:this.score=2;break;case 3:case 4:this.score=1.5;break;case 5:case 6:this.score=1;break;case 7:case 8:this.score=.5;break;default:this.score=.25;break}}}};const Zf=e=>(sa("data-v-0b2f5c93"),e=e(),la(),e),Qf={class:"sheet"},ec={class:"score"},tc={class:"points"},nc={class:"point",title:"Grammar"},rc={class:"point",title:"Vocabulary"},ac={class:"point",title:"Pronunciation"},ic={class:"point",title:"Fluency"},oc=Zf(()=>U("div",{class:"title"},[U("div",null,"NOTE"),U("div",null,"CATEGORIES"),U("div",null,"HINTS")],-1));function sc(e,t,n,r,a,i){const o=go("SheetLine");return Ot(),qt("div",Qf,[U("div",ec,"Score: "+he(a.score),1),U("div",tc,[U("div",nc,[U("div",null,he(a.categories.grammar),1),U("div",null,he(a.totalG),1)]),U("div",rc,[U("div",null,he(a.categories.vocabulary),1),U("div",null,he(a.totalV),1)]),U("div",ac,[U("div",null,he(a.categories.pronunciation),1),U("div",null,he(a.totalP),1)]),U("div",ic,[U("div",null,he(a.categories.fluency),1),U("div",null,he(a.totalF),1)])]),oc,(Ot(!0),qt(_e,null,Tl(a.lines,s=>(Ot(),Jl(o,{lines:a.lines,line:s,key:s,onClicked:i.onChildClick,onNewLine:i.addNewLine},null,8,["lines","line","onClicked","onNewLine"]))),128))])}const lc=pa(Jf,[["render",sc],["__scopeId","data-v-0b2f5c93"]]),fc=co({__name:"App",setup(e){return(t,n)=>(Ot(),qt(_e,null,[ce(Bf),ce(lc)],64))}});function ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ci(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function jn(e){return jn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},jn(e)}function cc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ui(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function uc(e,t,n){return t&&ui(e.prototype,t),n&&ui(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ha(e,t){return mc(e)||hc(e,t)||So(e,t)||vc()}function nn(e){return dc(e)||pc(e)||So(e)||gc()}function dc(e){if(Array.isArray(e))return Nr(e)}function mc(e){if(Array.isArray(e))return e}function pc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function hc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function So(e,t){if(e){if(typeof e=="string")return Nr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Nr(e,t)}}function Nr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function gc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function vc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var di=function(){},ga={},Io={},To=null,No={mark:di,measure:di};try{typeof window<"u"&&(ga=window),typeof document<"u"&&(Io=document),typeof MutationObserver<"u"&&(To=MutationObserver),typeof performance<"u"&&(No=performance)}catch{}var bc=ga.navigator||{},mi=bc.userAgent,pi=mi===void 0?"":mi,Ze=ga,X=Io,hi=To,gn=No;Ze.document;var We=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Mo=~pi.indexOf("MSIE")||~pi.indexOf("Trident/"),vn,bn,yn,xn,_n,Ue="___FONT_AWESOME___",Mr=16,Fo="fa",Ro="svg-inline--fa",mt="data-fa-i2svg",Fr="data-fa-pseudo-element",yc="data-fa-pseudo-element-pending",va="data-prefix",ba="data-icon",gi="fontawesome-i2svg",xc="async",_c=["HTML","HEAD","STYLE","SCRIPT"],Lo=function(){try{return!0}catch{return!1}}(),V="classic",Z="sharp",ya=[V,Z];function rn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[V]}})}var Jt=rn((vn={},te(vn,V,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(vn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),vn)),Zt=rn((bn={},te(bn,V,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(bn,Z,{solid:"fass",regular:"fasr",light:"fasl"}),bn)),Qt=rn((yn={},te(yn,V,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(yn,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),yn)),wc=rn((xn={},te(xn,V,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(xn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xn)),kc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,jo="fa-layers-text",Ac=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Oc=rn((_n={},te(_n,V,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(_n,Z,{900:"fass",400:"fasr",300:"fasl"}),_n)),zo=[1,2,3,4,5,6,7,8,9,10],Ec=zo.concat([11,12,13,14,15,16,17,18,19,20]),Pc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ft={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},en=new Set;Object.keys(Zt[V]).map(en.add.bind(en));Object.keys(Zt[Z]).map(en.add.bind(en));var Cc=[].concat(ya,nn(en),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ft.GROUP,ft.SWAP_OPACITY,ft.PRIMARY,ft.SECONDARY]).concat(zo.map(function(e){return"".concat(e,"x")})).concat(Ec.map(function(e){return"w-".concat(e)})),Bt=Ze.FontAwesomeConfig||{};function Sc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ic(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Tc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Tc.forEach(function(e){var t=ha(e,2),n=t[0],r=t[1],a=Ic(Sc(n));a!=null&&(Bt[r]=a)})}var Do={styleDefault:"solid",familyDefault:"classic",cssPrefix:Fo,replacementClass:Ro,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Bt.familyPrefix&&(Bt.cssPrefix=Bt.familyPrefix);var St=E(E({},Do),Bt);St.autoReplaceSvg||(St.observeMutations=!1);var C={};Object.keys(Do).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){St[e]=n,Ht.forEach(function(r){return r(C)})},get:function(){return St[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){St.cssPrefix=t,Ht.forEach(function(n){return n(C)})},get:function(){return St.cssPrefix}});Ze.FontAwesomeConfig=C;var Ht=[];function Nc(e){return Ht.push(e),function(){Ht.splice(Ht.indexOf(e),1)}}var Ve=Mr,Fe={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Mc(e){if(!(!e||!We)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Fc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function tn(){for(var e=12,t="";e-- >0;)t+=Fc[Math.random()*62|0];return t}function Mt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function xa(e){return e.classList?Mt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function $o(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Rc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat($o(e[n]),'" ')},"").trim()}function Qn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function _a(e){return e.size!==Fe.size||e.x!==Fe.x||e.y!==Fe.y||e.rotate!==Fe.rotate||e.flipX||e.flipY}function Lc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function jc(e){var t=e.transform,n=e.width,r=n===void 0?Mr:n,a=e.height,i=a===void 0?Mr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Mo?l+="translate(".concat(t.x/Ve-r/2,"em, ").concat(t.y/Ve-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ve,"em), calc(-50% + ").concat(t.y/Ve,"em)) "):l+="translate(".concat(t.x/Ve,"em, ").concat(t.y/Ve,"em) "),l+="scale(".concat(t.size/Ve*(t.flipX?-1:1),", ").concat(t.size/Ve*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var zc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Uo(){var e=Fo,t=Ro,n=C.cssPrefix,r=C.replacementClass,a=zc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var vi=!1;function mr(){C.autoAddCss&&!vi&&(Mc(Uo()),vi=!0)}var Dc={mixout:function(){return{dom:{css:Uo,insertCss:mr}}},hooks:function(){return{beforeDOMElementCreation:function(){mr()},beforeI2svg:function(){mr()}}}},Be=Ze||{};Be[Ue]||(Be[Ue]={});Be[Ue].styles||(Be[Ue].styles={});Be[Ue].hooks||(Be[Ue].hooks={});Be[Ue].shims||(Be[Ue].shims=[]);var Oe=Be[Ue],Bo=[],$c=function e(){X.removeEventListener("DOMContentLoaded",e),zn=1,Bo.map(function(t){return t()})},zn=!1;We&&(zn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),zn||X.addEventListener("DOMContentLoaded",$c));function Uc(e){We&&(zn?setTimeout(e,0):Bo.push(e))}function an(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?$o(e):"<".concat(t," ").concat(Rc(r),">").concat(i.map(an).join(""),"</").concat(t,">")}function bi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Bc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},pr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Bc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Hc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Rr(e){var t=Hc(e);return t.length===1?t[0].toString(16):null}function Yc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Lr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=yi(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,yi(t)):Oe.styles[e]=E(E({},Oe.styles[e]||{}),i),e==="fas"&&Lr("fa",t)}var wn,kn,An,yt=Oe.styles,Wc=Oe.shims,Kc=(wn={},te(wn,V,Object.values(Qt[V])),te(wn,Z,Object.values(Qt[Z])),wn),wa=null,Ho={},Yo={},Wo={},Ko={},Vo={},Vc=(kn={},te(kn,V,Object.keys(Jt[V])),te(kn,Z,Object.keys(Jt[Z])),kn);function Xc(e){return~Cc.indexOf(e)}function qc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Xc(a)?a:null}var Xo=function(){var t=function(i){return pr(yt,function(o,s,l){return o[l]=pr(s,i,{}),o},{})};Ho=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Yo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Vo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in yt||C.autoFetchSvg,r=pr(Wc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Wo=r.names,Ko=r.unicodes,wa=er(C.styleDefault,{family:C.familyDefault})};Nc(function(e){wa=er(e.styleDefault,{family:C.familyDefault})});Xo();function ka(e,t){return(Ho[e]||{})[t]}function Gc(e,t){return(Yo[e]||{})[t]}function ct(e,t){return(Vo[e]||{})[t]}function qo(e){return Wo[e]||{prefix:null,iconName:null}}function Jc(e){var t=Ko[e],n=ka("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Qe(){return wa}var Aa=function(){return{prefix:null,iconName:null,rest:[]}};function er(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?V:n,a=Jt[r][e],i=Zt[r][e]||Zt[r][a],o=e in Oe.styles?e:null;return i||o||null}var xi=(An={},te(An,V,Object.keys(Qt[V])),te(An,Z,Object.keys(Qt[Z])),An);function tr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,V,"".concat(C.cssPrefix,"-").concat(V)),te(t,Z,"".concat(C.cssPrefix,"-").concat(Z)),t),o=null,s=V;(e.includes(i[V])||e.some(function(c){return xi[V].includes(c)}))&&(s=V),(e.includes(i[Z])||e.some(function(c){return xi[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=qc(C.cssPrefix,d);if(yt[d]?(d=Kc[s].includes(d)?wc[s][d]:d,o=d,c.prefix=d):Vc[s].indexOf(d)>-1?(o=d,c.prefix=er(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[V]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?qo(c.iconName):{},w=ct(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!yt.far&&yt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},Aa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(yt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ct(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Qe()||"fas"),l}var Zc=function(){function e(){cc(this,e),this.definitions={}}return uc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Lr(s,o[s]);var l=Qt[V][s];l&&Lr(l,o[s]),Xo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),_i=[],xt={},Et={},Qc=Object.keys(Et);function eu(e,t){var n=t.mixoutsTo;return _i=e,xt={},Object.keys(Et).forEach(function(r){Qc.indexOf(r)===-1&&delete Et[r]}),_i.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),jn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){xt[o]||(xt[o]=[]),xt[o].push(i[o])})}r.provides&&r.provides(Et)}),n}function jr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=xt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=xt[e]||[];a.forEach(function(i){i.apply(null,n)})}function He(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function zr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Qe();if(t)return t=ct(n,t)||t,bi(Go.definitions,n,t)||bi(Oe.styles,n,t)}var Go=new Zc,tu=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,pt("noAuto")},nu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(pt("beforeI2svg",t),He("pseudoElements2svg",t),He("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,Uc(function(){au({autoReplaceSvgRoot:n}),pt("watch",t)})}},ru={icon:function(t){if(t===null)return null;if(jn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ct(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=er(t[0]);return{prefix:r,iconName:ct(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(kc))){var a=tr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Qe(),iconName:ct(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Qe();return{prefix:i,iconName:ct(i,t)||t}}}},ge={noAuto:tu,config:C,dom:nu,parse:ru,library:Go,findIconDefinition:zr,toHtml:an},au=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Oe.styles).length>0||C.autoFetchSvg)&&We&&C.autoReplaceSvg&&ge.dom.i2svg({node:r})};function nr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return an(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function iu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(_a(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Qn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function ou(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Oa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,w=v===void 0?!1:v,j=r.found?r:n,N=j.width,D=j.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),F={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};w&&(F.attributes[mt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||tn())},children:[l]}),delete F.attributes.title);var H=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},S),m.styles)}),ae=r.found&&n.found?He("generateAbstractMask",H)||{children:[],attributes:{}}:He("generateAbstractIcon",H)||{children:[],attributes:{}},ie=ae.children,be=ae.attributes;return H.children=ie,H.attributes=be,s?ou(H):iu(H)}function wi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[mt]="");var d=E({},o.styles);_a(a)&&(d.transform=jc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Qn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function su(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Qn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var hr=Oe.styles;function Dr(e){var t=e[0],n=e[1],r=e.slice(4),a=ha(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ft.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var lu={found:!1,width:512,height:512};function fu(e,t){!Lo&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function $r(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Qe()),new Promise(function(r,a){if(He("missingIconAbstract"),n==="fa"){var i=qo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&hr[t]&&hr[t][e]){var o=hr[t][e];return r(Dr(o))}fu(e,t),r(E(E({},lu),{},{icon:C.showMissingIcons&&e?He("missingIconAbstract")||{}:{}}))})}var ki=function(){},Ur=C.measurePerformance&&gn&&gn.mark&&gn.measure?gn:{mark:ki,measure:ki},Dt='FA "6.4.0"',cu=function(t){return Ur.mark("".concat(Dt," ").concat(t," begins")),function(){return Jo(t)}},Jo=function(t){Ur.mark("".concat(Dt," ").concat(t," ends")),Ur.measure("".concat(Dt," ").concat(t),"".concat(Dt," ").concat(t," begins"),"".concat(Dt," ").concat(t," ends"))},Ea={begin:cu,end:Jo},In=function(){};function Ai(e){var t=e.getAttribute?e.getAttribute(mt):null;return typeof t=="string"}function uu(e){var t=e.getAttribute?e.getAttribute(va):null,n=e.getAttribute?e.getAttribute(ba):null;return t&&n}function du(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function mu(){if(C.autoReplaceSvg===!0)return Tn.replace;var e=Tn[C.autoReplaceSvg];return e||Tn.replace}function pu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function hu(e){return X.createElement(e)}function Zo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?pu:hu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Zo(o,{ceFn:r}))}),a}function gu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Tn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Zo(a),n)}),n.getAttribute(mt)===null&&C.keepOriginalSource){var r=X.createComment(gu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~xa(n).indexOf(C.replacementClass))return Tn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return an(s)}).join(`
`);n.setAttribute(mt,""),n.innerHTML=o}};function Oi(e){e()}function Qo(e,t){var n=typeof t=="function"?t:In;if(e.length===0)n();else{var r=Oi;C.mutateApproach===xc&&(r=Ze.requestAnimationFrame||Oi),r(function(){var a=mu(),i=Ea.begin("mutate");e.map(a),i(),n()})}}var Pa=!1;function es(){Pa=!0}function Br(){Pa=!1}var Dn=null;function Ei(e){if(hi&&C.observeMutations){var t=e.treeCallback,n=t===void 0?In:t,r=e.nodeCallback,a=r===void 0?In:r,i=e.pseudoElementsCallback,o=i===void 0?In:i,s=e.observeMutationsRoot,l=s===void 0?X:s;Dn=new hi(function(c){if(!Pa){var d=Qe();Mt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ai(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ai(m.target)&&~Pc.indexOf(m.attributeName))if(m.attributeName==="class"&&uu(m.target)){var v=tr(xa(m.target)),w=v.prefix,j=v.iconName;m.target.setAttribute(va,w||d),j&&m.target.setAttribute(ba,j)}else du(m.target)&&a(m.target)})}}),We&&Dn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function vu(){Dn&&Dn.disconnect()}function bu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function yu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=tr(xa(e));return a.prefix||(a.prefix=Qe()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Gc(a.prefix,e.innerText)||ka(a.prefix,Rr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function xu(e){var t=Mt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||tn()):(t["aria-hidden"]="true",t.focusable="false")),t}function _u(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Fe,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Pi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=yu(e),r=n.iconName,a=n.prefix,i=n.rest,o=xu(e),s=jr("parseNodeAttributes",{},e),l=t.styleParser?bu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Fe,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var wu=Oe.styles;function ts(e){var t=C.autoReplaceSvg==="nest"?Pi(e,{styleParser:!1}):Pi(e);return~t.extra.classes.indexOf(jo)?He("generateLayersText",e,t):He("generateSvgReplacementMutation",e,t)}var et=new Set;ya.map(function(e){et.add("fa-".concat(e))});Object.keys(Jt[V]).map(et.add.bind(et));Object.keys(Jt[Z]).map(et.add.bind(et));et=nn(et);function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(gi,"-").concat(m))},a=function(m){return n.remove("".concat(gi,"-").concat(m))},i=C.autoFetchSvg?et:ya.map(function(d){return"fa-".concat(d)}).concat(Object.keys(wu));i.includes("fa")||i.push("fa");var o=[".".concat(jo,":not([").concat(mt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(mt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Mt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ea.begin("onTree"),c=s.reduce(function(d,m){try{var v=ts(m);v&&d.push(v)}catch(w){Lo||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Qo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function ku(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ts(e).then(function(n){n&&Qo([n],t)})}function Au(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:zr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:zr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Ou=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Fe:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,j=w===void 0?null:w,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,F=n.styles,S=F===void 0?{}:F;if(t){var H=t.prefix,ae=t.iconName,ie=t.icon;return nr(E({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||tn()):(O["aria-hidden"]="true",O.focusable="false")),Oa({icons:{main:Dr(ie),mask:l?Dr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:ae,transform:E(E({},Fe),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:O,styles:S,classes:D}})})}},Eu={mixout:function(){return{icon:Au(Ou)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ci,n.nodeCallback=ku,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ci(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,j){Promise.all([$r(a,s),d.iconName?$r(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ha(N,2),k=D[0],O=D[1];w([n,Oa({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Qn(s);l.length>0&&(a.style=l);var c;return _a(o)&&(c=He("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Pu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return nr({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(nn(i)).join(" ")},children:o}]})}}}},Cu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return nr({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),su({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(nn(s))}})})}}}},Su={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Fe:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,w=v===void 0?{}:v;return nr({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),wi({content:n,transform:E(E({},Fe),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(nn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Mo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,wi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Iu=new RegExp('"',"ug"),Si=[1105920,1112319];function Tu(e){var t=e.replace(Iu,""),n=Yc(t,0),r=n>=Si[0]&&n<=Si[1],a=t.length===2?t[0]===t[1]:!1;return{value:Rr(a?t[0]:t),isSecondary:r||a}}function Ii(e,t){var n="".concat(yc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Mt(e.children),o=i.filter(function(ie){return ie.getAttribute(Fr)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Ac),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:V,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Zt[v][l[2].toLowerCase()]:Oc[v][c],j=Tu(m),N=j.value,D=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=ka(w,N),F=O;if(k){var S=Jc(N);S.iconName&&S.prefix&&(O=S.iconName,w=S.prefix)}if(O&&!D&&(!o||o.getAttribute(va)!==w||o.getAttribute(ba)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var H=_u(),ae=H.extra;ae.attributes[Fr]=t,$r(O,w).then(function(ie){var be=Oa(E(E({},H),{},{icons:{main:ie,mask:Aa()},prefix:w,iconName:F,extra:ae,watchable:!0})),ve=X.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=be.map(function(Le){return an(Le)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Nu(e){return Promise.all([Ii(e,"::before"),Ii(e,"::after")])}function Mu(e){return e.parentNode!==document.head&&!~_c.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Fr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ti(e){if(We)return new Promise(function(t,n){var r=Mt(e.querySelectorAll("*")).filter(Mu).map(Nu),a=Ea.begin("searchPseudoElements");es(),Promise.all(r).then(function(){a(),Br(),t()}).catch(function(){a(),Br(),n()})})}var Fu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ti,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;C.searchPseudoElements&&Ti(a)}}},Ni=!1,Ru={mixout:function(){return{dom:{unwatch:function(){es(),Ni=!0}}}},hooks:function(){return{bootstrap:function(){Ei(jr("mutationObserverCallbacks",{}))},noAuto:function(){vu()},watch:function(n){var r=n.observeMutationsRoot;Ni?Br():Ei(jr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Lu={mixout:function(){return{parse:{transform:function(n){return Mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Mi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},gr={x:0,y:0,width:"100%",height:"100%"};function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ju(e){return e.tag==="g"?e.children:[e]}var zu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?tr(a.split(" ").map(function(o){return o.trim()})):Aa();return i.prefix||(i.prefix=Qe()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,w=Lc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},gr),{},{fill:"white"})},N=d.children?{children:d.children.map(Fi)}:{},D={tag:"g",attributes:E({},w.inner),children:[Fi(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(s||tn()),F="clip-".concat(s||tn()),S={tag:"mask",attributes:E(E({},gr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:ju(v)},S]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},gr)}),{children:r,attributes:a}}}},Du={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},$u={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Uu=[Dc,Eu,Pu,Cu,Su,Fu,Ru,Lu,zu,Du,$u];eu(Uu,{mixoutsTo:ge});ge.noAuto;ge.config;var Bu=ge.library;ge.dom;var Hr=ge.parse;ge.findIconDefinition;ge.toHtml;var Hu=ge.icon;ge.layer;ge.text;ge.counter;var Yu={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Ri(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function De(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ri(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ri(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Wu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Ku(e,t){if(e==null)return{};var n=Wu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Vu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ns={exports:{}};(function(e){(function(t){var n=function(k,O,F){if(!c(O)||m(O)||v(O)||w(O)||l(O))return O;var S,H=0,ae=0;if(d(O))for(S=[],ae=O.length;H<ae;H++)S.push(n(k,O[H],F));else{S={};for(var ie in O)Object.prototype.hasOwnProperty.call(O,ie)&&(S[k(ie,F)]=n(k,O[ie],F))}return S},r=function(k,O){O=O||{};var F=O.separator||"_",S=O.split||/(?=[A-Z])/;return k.split(S).join(F)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?k:function(S,H){return F(S,k,H)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Vu)})(ns);var Xu=ns.exports,qu=["class","style"];function Gu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Xu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Ju(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function rs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return rs(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Ju(d);break;case"style":l.style=Gu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Ku(n,qu);return df(e.tag,De(De(De({},t),{},{class:a.class,style:De(De({},a.style),o)},a.attrs),s),r)}var as=!1;try{as=!0}catch{}function Zu(){if(!as&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function vr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Qu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Li(e){if(e&&$n(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Hr.icon)return Hr.icon(e);if(e===null)return null;if($n(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var ed=co({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=it(function(){return Li(t.icon)}),i=it(function(){return vr("classes",Qu(t))}),o=it(function(){return vr("transform",typeof t.transform=="string"?Hr.transform(t.transform):t.transform)}),s=it(function(){return vr("mask",Li(t.mask))}),l=it(function(){return Hu(a.value,De(De(De(De({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});En(l,function(d){if(!d)return Zu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=it(function(){return l.value?rs(l.value.abstract[0],{},r):null});return function(){return c.value}}});Bu.add(Yu);Rf(fc).component("font-awesome-icon",ed).mount("#app");
