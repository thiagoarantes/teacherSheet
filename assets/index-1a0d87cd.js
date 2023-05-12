(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Br(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const X={},xt=[],Oe=()=>{},is=()=>!1,os=/^on[^a-z]/,$n=e=>os.test(e),Hr=e=>e.startsWith("onUpdate:"),ne=Object.assign,Yr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ss=Object.prototype.hasOwnProperty,$=(e,t)=>ss.call(e,t),M=Array.isArray,_t=e=>Un(e)==="[object Map]",Ri=e=>Un(e)==="[object Set]",L=e=>typeof e=="function",ee=e=>typeof e=="string",Wr=e=>typeof e=="symbol",G=e=>e!==null&&typeof e=="object",Li=e=>G(e)&&L(e.then)&&L(e.catch),ji=Object.prototype.toString,Un=e=>ji.call(e),ls=e=>Un(e).slice(8,-1),zi=e=>Un(e)==="[object Object]",Kr=e=>ee(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,An=Br(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fs=/-(\w)/g,Me=Bn(e=>e.replace(fs,(t,n)=>n?n.toUpperCase():"")),cs=/\B([A-Z])/g,St=Bn(e=>e.replace(cs,"-$1").toLowerCase()),Hn=Bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Bn(e=>e?`on${Hn(e)}`:""),Tn=(e,t)=>!Object.is(e,t),ir=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},us=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Na;const gr=()=>Na||(Na=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Vr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ee(r)?hs(r):Vr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ee(e))return e;if(G(e))return e}}const ds=/;(?![^(]*\))/g,ms=/:([^]+)/,ps=new RegExp("\\/\\*.*?\\*\\/","gs");function hs(e){const t={};return e.replace(ps,"").split(ds).forEach(n=>{if(n){const r=n.split(ms);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function st(e){let t="";if(ee(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=st(e[n]);r&&(t+=r+" ")}else if(G(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vs=Br(gs);function Di(e){return!!e||e===""}const je=e=>ee(e)?e:e==null?"":M(e)||G(e)&&(e.toString===ji||!L(e.toString))?JSON.stringify(e,$i,2):String(e),$i=(e,t)=>t&&t.__v_isRef?$i(e,t.value):_t(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ri(t)?{[`Set(${t.size})`]:[...t.values()]}:G(t)&&!M(t)&&!zi(t)?String(t):t;let ye;class bs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ys(e,t=ye){t&&t.active&&t.effects.push(e)}function xs(){return ye}const Xr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ui=e=>(e.w&qe)>0,Bi=e=>(e.n&qe)>0,_s=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},ws=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ui(a)&&!Bi(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},vr=new WeakMap;let Lt=0,qe=1;const br=30;let _e;const ct=Symbol(""),yr=Symbol("");class Gr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ys(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Xe=!0,qe=1<<++Lt,Lt<=br?_s(this):Ma(this),this.fn()}finally{Lt<=br&&ws(this),qe=1<<--Lt,_e=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Ma(this),this.onStop&&this.onStop(),this.active=!1)}}function Ma(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Hi=[];function It(){Hi.push(Xe),Xe=!1}function Tt(){const e=Hi.pop();Xe=e===void 0?!0:e}function me(e,t,n){if(Xe&&_e){let r=vr.get(e);r||vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Xr()),Yi(a)}}function Yi(e,t){let n=!1;Lt<=br?Bi(e)||(e.n|=qe,n=!Ui(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function De(e,t,n,r,a,i){const o=vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?Kr(n)&&s.push(o.get("length")):(s.push(o.get(ct)),_t(e)&&s.push(o.get(yr)));break;case"delete":M(e)||(s.push(o.get(ct)),_t(e)&&s.push(o.get(yr)));break;case"set":_t(e)&&s.push(o.get(ct));break}if(s.length===1)s[0]&&xr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);xr(Xr(l))}}function xr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Fa(r);for(const r of n)r.computed||Fa(r)}function Fa(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ks=Br("__proto__,__v_isRef,__isVue"),Wi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Wr)),As=qr(),Os=qr(!1,!0),Es=qr(!0),Ra=Ps();function Ps(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){It();const r=U(this)[t].apply(this,n);return Tt(),r}}),e}function Cs(e){const t=U(this);return me(t,"has",e),t.hasOwnProperty(e)}function qr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ys:qi:t?Gi:Xi).get(r))return r;const o=M(r);if(!e){if(o&&$(Ra,a))return Reflect.get(Ra,a,i);if(a==="hasOwnProperty")return Cs}const s=Reflect.get(r,a,i);return(Wr(a)?Wi.has(a):ks(a))||(e||me(r,"get",a),t)?s:fe(s)?o&&Kr(a)?s:s.value:G(s)?e?Ji(s):Qr(s):s}}const Ss=Ki(),Is=Ki(!0);function Ki(e=!1){return function(n,r,a,i){let o=n[r];if(Ht(o)&&fe(o)&&!fe(a))return!1;if(!e&&(!_r(a)&&!Ht(a)&&(o=U(o),a=U(a)),!M(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=M(n)&&Kr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Tn(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Ts(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Ns(e,t){const n=Reflect.has(e,t);return(!Wr(t)||!Wi.has(t))&&me(e,"has",t),n}function Ms(e){return me(e,"iterate",M(e)?"length":ct),Reflect.ownKeys(e)}const Vi={get:As,set:Ss,deleteProperty:Ts,has:Ns,ownKeys:Ms},Fs={get:Es,set(e,t){return!0},deleteProperty(e,t){return!0}},Rs=ne({},Vi,{get:Os,set:Is}),Jr=e=>e,Yn=e=>Reflect.getPrototypeOf(e);function fn(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Yn(a),s=r?Jr:n?na:ta;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function cn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function un(e,t=!1){return e=e.__v_raw,!t&&me(U(e),"iterate",ct),Reflect.get(e,"size",e)}function La(e){e=U(e);const t=U(this);return Yn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function ja(e,t){t=U(t);const n=U(this),{has:r,get:a}=Yn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Tn(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function za(e){const t=U(this),{has:n,get:r}=Yn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function Da(){const e=U(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function dn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Jr:e?na:ta;return!e&&me(s,"iterate",ct),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function mn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=_t(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Jr:t?na:ta;return!t&&me(i,"iterate",l?yr:ct),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function We(e){return function(...t){return e==="delete"?!1:this}}function Ls(){const e={get(i){return fn(this,i)},get size(){return un(this)},has:cn,add:La,set:ja,delete:za,clear:Da,forEach:dn(!1,!1)},t={get(i){return fn(this,i,!1,!0)},get size(){return un(this)},has:cn,add:La,set:ja,delete:za,clear:Da,forEach:dn(!1,!0)},n={get(i){return fn(this,i,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:dn(!0,!1)},r={get(i){return fn(this,i,!0,!0)},get size(){return un(this,!0)},has(i){return cn.call(this,i,!0)},add:We("add"),set:We("set"),delete:We("delete"),clear:We("clear"),forEach:dn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=mn(i,!1,!1),n[i]=mn(i,!0,!1),t[i]=mn(i,!1,!0),r[i]=mn(i,!0,!0)}),[e,n,t,r]}const[js,zs,Ds,$s]=Ls();function Zr(e,t){const n=t?e?$s:Ds:e?zs:js;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Us={get:Zr(!1,!1)},Bs={get:Zr(!1,!0)},Hs={get:Zr(!0,!1)},Xi=new WeakMap,Gi=new WeakMap,qi=new WeakMap,Ys=new WeakMap;function Ws(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ks(e){return e.__v_skip||!Object.isExtensible(e)?0:Ws(ls(e))}function Qr(e){return Ht(e)?e:ea(e,!1,Vi,Us,Xi)}function Vs(e){return ea(e,!1,Rs,Bs,Gi)}function Ji(e){return ea(e,!0,Fs,Hs,qi)}function ea(e,t,n,r,a){if(!G(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ks(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function wt(e){return Ht(e)?wt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ht(e){return!!(e&&e.__v_isReadonly)}function _r(e){return!!(e&&e.__v_isShallow)}function Zi(e){return wt(e)||Ht(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Qi(e){return Nn(e,"__v_skip",!0),e}const ta=e=>G(e)?Qr(e):e,na=e=>G(e)?Ji(e):e;function Xs(e){Xe&&_e&&(e=U(e),Yi(e.dep||(e.dep=Xr())))}function Gs(e,t){e=U(e);const n=e.dep;n&&xr(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function qs(e){return fe(e)?e.value:e}const Js={get:(e,t,n)=>qs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function eo(e){return wt(e)?e:new Proxy(e,Js)}class Zs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Gr(t,()=>{this._dirty||(this._dirty=!0,Gs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return Xs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Qs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Zs(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Wn(i,t,n)}return a}function Ee(e,t,n,r){if(L(e)){const i=Ge(e,t,n,r);return i&&Li(i)&&i.catch(o=>{Wn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Wn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}el(e,n,a,r)}function el(e,t,n,r=!0){console.error(e)}let Yt=!1,wr=!1;const oe=[];let Te=0;const kt=[];let Le=null,it=0;const to=Promise.resolve();let ra=null;function tl(e){const t=ra||to;return e?t.then(this?e.bind(this):e):t}function nl(e){let t=Te+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Wt(oe[r])<e?t=r+1:n=r}return t}function aa(e){(!oe.length||!oe.includes(e,Yt&&e.allowRecurse?Te+1:Te))&&(e.id==null?oe.push(e):oe.splice(nl(e.id),0,e),no())}function no(){!Yt&&!wr&&(wr=!0,ra=to.then(ao))}function rl(e){const t=oe.indexOf(e);t>Te&&oe.splice(t,1)}function al(e){M(e)?kt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?it+1:it))&&kt.push(e),no()}function $a(e,t=Yt?Te+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function ro(e){if(kt.length){const t=[...new Set(kt)];if(kt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Wt(n)-Wt(r)),it=0;it<Le.length;it++)Le[it]();Le=null,it=0}}const Wt=e=>e.id==null?1/0:e.id,il=(e,t)=>{const n=Wt(e)-Wt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ao(e){wr=!1,Yt=!0,oe.sort(il);const t=Oe;try{for(Te=0;Te<oe.length;Te++){const n=oe[Te];n&&n.active!==!1&&Ge(n,null,14)}}finally{Te=0,oe.length=0,ro(),Yt=!1,ra=null,(oe.length||kt.length)&&ao()}}function ol(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||X;v&&(a=n.map(w=>ee(w)?w.trim():w)),m&&(a=n.map(us))}let s,l=r[s=ar(t)]||r[s=ar(Me(t))];!l&&i&&(l=r[s=ar(St(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function io(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=io(c,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(G(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):ne(o,i),G(e)&&r.set(e,o),o)}function Kn(e,t){return!e||!$n(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,St(t))||$(e,t))}let we=null,Vn=null;function Mn(e){const t=we;return we=e,Vn=e&&e.type.__scopeId||null,t}function ia(e){Vn=e}function oa(){Vn=null}function sl(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Ja(-1);const i=Mn(t);let o;try{o=e(...a)}finally{Mn(i),r._d&&Ja(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:w,ctx:j,inheritAttrs:N}=e;let D,k;const O=Mn(e);try{if(n.shapeFlag&4){const S=a||r;D=Ie(d.call(S,S,m,i,w,v,j)),k=l}else{const S=t;D=Ie(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),k=t.props?l:ll(l)}}catch(S){$t.length=0,Wn(S,e,1),D=ce(Kt)}let F=D;if(k&&N!==!1){const S=Object.keys(k),{shapeFlag:B}=F;S.length&&B&7&&(o&&S.some(Hr)&&(k=fl(k,o)),F=Et(F,k))}return n.dirs&&(F=Et(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),D=F,Mn(O),D}const ll=e=>{let t;for(const n in e)(n==="class"||n==="style"||$n(n))&&((t||(t={}))[n]=e[n]);return t},fl=(e,t)=>{const n={};for(const r in e)(!Hr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function cl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ua(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Kn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ua(r,o,c):!0:!!o;return!1}function Ua(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Kn(n,i))return!0}return!1}function ul({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const dl=e=>e.__isSuspense;function ml(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):al(e)}const pn={};function On(e,t,n){return oo(e,t,n)}function oo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){var s;const l=xs()===((s=re)==null?void 0:s.scope)?re:null;let c,d=!1,m=!1;if(fe(e)?(c=()=>e.value,d=_r(e)):wt(e)?(c=()=>e,r=!0):M(e)?(m=!0,d=e.some(S=>wt(S)||_r(S)),c=()=>e.map(S=>{if(fe(S))return S.value;if(wt(S))return vt(S);if(L(S))return Ge(S,l,2)})):L(e)?t?c=()=>Ge(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ee(e,l,3,[w])}:c=Oe,t&&r){const S=c;c=()=>vt(S())}let v,w=S=>{v=O.onStop=()=>{Ge(S,l,4)}},j;if(Gt)if(w=Oe,t?n&&Ee(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const S=df();j=S.__watcherHandles||(S.__watcherHandles=[])}else return Oe;let N=m?new Array(e.length).fill(pn):pn;const D=()=>{if(O.active)if(t){const S=O.run();(r||d||(m?S.some((B,ae)=>Tn(B,N[ae])):Tn(S,N)))&&(v&&v(),Ee(t,l,3,[S,N===pn?void 0:m&&N[0]===pn?[]:N,w]),N=S)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>de(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>aa(D));const O=new Gr(c,k);t?n?D():N=O.run():a==="post"?de(O.run.bind(O),l&&l.suspense):O.run();const F=()=>{O.stop(),l&&l.scope&&Yr(l.scope.effects,O)};return j&&j.push(F),F}function pl(e,t,n){const r=this.proxy,a=ee(e)?e.includes(".")?so(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=re;Pt(this);const s=oo(a,i.bind(r),n);return o?Pt(o):ut(),s}function so(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function vt(e,t){if(!G(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))vt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)vt(e[n],t);else if(Ri(e)||_t(e))e.forEach(n=>{vt(n,t)});else if(zi(e))for(const n in e)vt(e[n],t);return e}function nt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(It(),Ee(l,n,8,[e.el,s,e,t]),Tt())}}function lo(e,t){return L(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const En=e=>!!e.type.__asyncLoader,fo=e=>e.type.__isKeepAlive;function hl(e,t){co(e,"a",t)}function gl(e,t){co(e,"da",t)}function co(e,t,n=re){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Xn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)fo(a.parent.vnode)&&vl(r,t,n,a),a=a.parent}}function vl(e,t,n,r){const a=Xn(t,e,r,!0);uo(()=>{Yr(r[t],a)},n)}function Xn(e,t,n=re,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;It(),Pt(n);const s=Ee(t,n,e,o);return ut(),Tt(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=re)=>(!Gt||e==="sp")&&Xn(e,(...r)=>t(...r),n),bl=He("bm"),yl=He("m"),xl=He("bu"),_l=He("u"),wl=He("bum"),uo=He("um"),kl=He("sp"),Al=He("rtg"),Ol=He("rtc");function El(e,t=re){Xn("ec",e,t)}const mo="components";function po(e,t){return Cl(mo,e,!0,t)||e}const Pl=Symbol.for("v-ndc");function Cl(e,t,n=!0,r=!1){const a=we||re;if(a){const i=a.type;if(e===mo){const s=lf(i,!1);if(s&&(s===t||s===Me(t)||s===Hn(Me(t))))return i}const o=Ba(a[e]||i[e],t)||Ba(a.appContext[e],t);return!o&&r?i:o}}function Ba(e,t){return e&&(e[t]||e[Me(t)]||e[Hn(Me(t))])}function Sl(e,t,n,r){let a;const i=n&&n[r];if(M(e)||ee(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(G(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const kr=e=>e?Oo(e)?ua(e)||e.proxy:kr(e.parent):null,Dt=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>kr(e.parent),$root:e=>kr(e.root),$emit:e=>e.emit,$options:e=>sa(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=tl.bind(e.proxy)),$watch:e=>pl.bind(e)}),sr=(e,t)=>e!==X&&!e.__isScriptSetup&&$(e,t),Il={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(sr(r,t))return o[t]=1,r[t];if(a!==X&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==X&&$(n,t))return o[t]=4,n[t];Ar&&(o[t]=0)}}const d=Dt[t];let m,v;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return sr(a,t)?(a[t]=n,!0):r!==X&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&$(e,o)||sr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Dt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ha(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Ar=!0;function Tl(e){const t=sa(e),n=e.proxy,r=e.ctx;Ar=!1,t.beforeCreate&&Ya(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:w,updated:j,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:S,render:B,renderTracked:ae,renderTriggered:ie,errorCaptured:ve,serverPrefetch:ge,expose:Fe,inheritAttrs:Mt,components:an,directives:on,filters:tr}=t;if(c&&Nl(c,r,null),o)for(const q in o){const Y=o[q];L(Y)&&(r[q]=Y.bind(n))}if(a){const q=a.call(n,n);G(q)&&(e.data=Qr(q))}if(Ar=!0,i)for(const q in i){const Y=i[q],et=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Oe,sn=!L(Y)&&L(Y.set)?Y.set.bind(n):Oe,tt=at({get:et,set:sn});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Pe=>tt.value=Pe})}if(s)for(const q in s)ho(s[q],r,n,q);if(l){const q=L(l)?l.call(n):l;Reflect.ownKeys(q).forEach(Y=>{zl(Y,q[Y])})}d&&Ya(d,e,"c");function se(q,Y){M(Y)?Y.forEach(et=>q(et.bind(n))):Y&&q(Y.bind(n))}if(se(bl,m),se(yl,v),se(xl,w),se(_l,j),se(hl,N),se(gl,D),se(El,ve),se(Ol,ae),se(Al,ie),se(wl,O),se(uo,S),se(kl,ge),M(Fe))if(Fe.length){const q=e.exposed||(e.exposed={});Fe.forEach(Y=>{Object.defineProperty(q,Y,{get:()=>n[Y],set:et=>n[Y]=et})})}else e.exposed||(e.exposed={});B&&e.render===Oe&&(e.render=B),Mt!=null&&(e.inheritAttrs=Mt),an&&(e.components=an),on&&(e.directives=on)}function Nl(e,t,n=Oe){M(e)&&(e=Or(e));for(const r in e){const a=e[r];let i;G(a)?"default"in a?i=Pn(a.from||r,a.default,!0):i=Pn(a.from||r):i=Pn(a),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ya(e,t,n){Ee(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ho(e,t,n,r){const a=r.includes(".")?so(n,r):()=>n[r];if(ee(e)){const i=t[e];L(i)&&On(a,i)}else if(L(e))On(a,e.bind(n));else if(G(e))if(M(e))e.forEach(i=>ho(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&On(a,i,e)}}function sa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Fn(l,c,o,!0)),Fn(l,t,o)),G(t)&&i.set(t,l),l}function Fn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Fn(e,i,n,!0),a&&a.forEach(o=>Fn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ml[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ml={data:Wa,props:Ka,emits:Ka,methods:jt,computed:jt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:jt,directives:jt,watch:Rl,provide:Wa,inject:Fl};function Wa(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Fl(e,t){return jt(Or(e),Or(t))}function Or(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function jt(e,t){return e?ne(Object.create(null),e,t):t}function Ka(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ne(Object.create(null),Ha(e),Ha(t??{})):t}function Rl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function go(){return{app:null,config:{isNativeTag:is,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ll=0;function jl(e,t){return function(r,a=null){L(r)||(r=ne({},r)),a!=null&&!G(a)&&(a=null);const i=go(),o=new Set;let s=!1;const l=i.app={_uid:Ll++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:mf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ce(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ua(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Rn=l;try{return c()}finally{Rn=null}}};return l}}let Rn=null;function zl(e,t){if(re){let n=re.provides;const r=re.parent&&re.parent.provides;r===n&&(n=re.provides=Object.create(r)),n[e]=t}}function Pn(e,t,n=!1){const r=re||we;if(r||Rn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Rn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Dl(e,t,n,r=!1){const a={},i={};Nn(i,qn,1),e.propsDefaults=Object.create(null),vo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Vs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function $l(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Kn(e.emitsOptions,v))continue;const w=t[v];if(l)if($(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const j=Me(v);a[j]=Er(l,s,j,w,e,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{vo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=St(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Er(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&De(e,"set","$attrs")}function vo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(An(l))continue;const c=t[l];let d;a&&$(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Kn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Er(a,l,m,c[m],e,!$(c,m))}}return o}function Er(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Pt(a),r=c[n]=l.call(null,t),ut())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===St(n))&&(r=!0))}return r}function bo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,w]=bo(m,t,!0);ne(o,v),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return G(e)&&r.set(e,xt),xt;if(M(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Va(m)&&(o[m]=X)}else if(i)for(const d in i){const m=Me(d);if(Va(m)){const v=i[d],w=o[m]=M(v)||L(v)?{type:v}:ne({},v);if(w){const j=qa(Boolean,w.type),N=qa(String,w.type);w[0]=j>-1,w[1]=N<0||j<N,(j>-1||$(w,"default"))&&s.push(m)}}}const c=[o,s];return G(e)&&r.set(e,c),c}function Va(e){return e[0]!=="$"}function Xa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ga(e,t){return Xa(e)===Xa(t)}function qa(e,t){return M(t)?t.findIndex(n=>Ga(n,e)):L(t)&&Ga(t,e)?0:-1}const yo=e=>e[0]==="_"||e==="$stable",la=e=>M(e)?e.map(Ie):[Ie(e)],Ul=(e,t,n)=>{if(t._n)return t;const r=sl((...a)=>la(t(...a)),n);return r._c=!1,r},xo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(yo(a))continue;const i=e[a];if(L(i))t[a]=Ul(a,i,r);else if(i!=null){const o=la(i);t[a]=()=>o}}},_o=(e,t)=>{const n=la(t);e.slots.default=()=>n},Bl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Nn(t,"_",n)):xo(t,e.slots={})}else e.slots={},t&&_o(e,t);Nn(e.slots,qn,1)},Hl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,xo(t,a)),o=t}else t&&(_o(e,t),o={default:1});if(i)for(const s in a)!yo(s)&&!(s in o)&&delete a[s]};function Pr(e,t,n,r,a=!1){if(M(e)){e.forEach((v,w)=>Pr(v,t&&(M(t)?t[w]:t),n,r,a));return}if(En(r)&&!a)return;const i=r.shapeFlag&4?ua(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(ee(c)?(d[c]=null,$(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),L(l))Ge(l,s,12,[o,d]);else{const v=ee(l),w=fe(l);if(v||w){const j=()=>{if(e.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?M(N)&&Yr(N,i):M(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,de(j,n)):j()}}}const de=ml;function Yl(e){return Wl(e)}function Wl(e,t){const n=gr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:w=Oe,insertStaticContent:j}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Rt(f,u)&&(g=ln(f),Pe(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:P}=u;switch(b){case Gn:D(f,u,p,g);break;case Kt:k(f,u,p,g);break;case lr:f==null&&O(u,p,g,A);break;case xe:an(f,u,p,g,h,x,A,y,_);break;default:P&1?B(f,u,p,g,h,x,A,y,_):P&6?on(f,u,p,g,h,x,A,y,_):(P&64||P&128)&&b.process(f,u,p,g,h,x,A,y,_,pt)}I!=null&&h&&Pr(I,f&&f.ref,x,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=j(f.children,u,p,g,f.el,f.anchor)},F=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},S=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},B=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?ae(u,p,g,h,x,A,y,_):ge(f,u,h,x,A,y,_)},ae=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:I,props:P,shapeFlag:T,transition:R,dirs:z}=f;if(_=f.el=o(f.type,x,P&&P.is,P),T&8?d(_,f.children):T&16&&ve(f.children,_,null,g,h,x&&I!=="foreignObject",A,y),z&&nt(f,null,g,"created"),ie(_,f,f.scopeId,A,g),P){for(const H in P)H!=="value"&&!An(H)&&i(_,H,null,P[H],x,f.children,g,h,Re);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Se(b,g,f)}z&&nt(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;W&&R.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||W||z)&&de(()=>{b&&Se(b,g,f),W&&R.enter(_),z&&nt(f,null,g,"mounted")},h)},ie=(f,u,p,g,h)=>{if(p&&w(f,p),g)for(let x=0;x<g.length;x++)w(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ie(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ve=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=y?Ve(f[b]):Ie(f[b]);N(null,I,u,p,g,h,x,A,y)}},ge=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=u;_|=f.patchFlag&16;const P=f.props||X,T=u.props||X;let R;p&&rt(p,!1),(R=T.onVnodeBeforeUpdate)&&Se(R,p,u,f),I&&nt(u,f,p,"beforeUpdate"),p&&rt(p,!0);const z=h&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,g,z,x):A||Y(f,u,y,null,p,g,z,x,!1),_>0){if(_&16)Mt(y,u,P,T,p,g,h);else if(_&2&&P.class!==T.class&&i(y,"class",null,T.class,h),_&4&&i(y,"style",P.style,T.style,h),_&8){const W=u.dynamicProps;for(let H=0;H<W.length;H++){const Z=W[H],be=P[Z],ht=T[Z];(ht!==be||Z==="value")&&i(y,Z,be,ht,h,f.children,p,g,Re)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Mt(y,u,P,T,p,g,h);((R=T.onVnodeUpdated)||I)&&de(()=>{R&&Se(R,p,u,f),I&&nt(u,f,p,"updated")},g)},Fe=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],I=_.el&&(_.type===xe||!Rt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,I,null,g,h,x,A,!0)}},Mt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==X)for(const y in p)!An(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,Re);for(const y in g){if(An(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,Re)}"value"in g&&i(f,"value",p.value,g.value)}},an=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,p,g),r(I,p,g),ve(u.children,p,I,h,x,A,y,_)):P>0&&P&64&&T&&f.dynamicChildren?(Fe(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&wo(f,u,!0)):Y(f,u,p,I,h,x,A,y,_)},on=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):tr(u,p,g,h,x,A,_):Ea(f,u,_)},tr=(f,u,p,g,h,x,A)=>{const y=f.component=nf(f,g,h);if(fo(f)&&(y.ctx.renderer=pt),rf(y),y.asyncDep){if(h&&h.registerDep(y,se),!f.el){const _=y.subTree=ce(Kt);k(null,_,u,p)}return}se(y,f,u,p,h,x,A)},Ea=(f,u,p)=>{const g=u.component=f.component;if(cl(f,u,p))if(g.asyncDep&&!g.asyncResolved){q(g,u,p);return}else g.next=u,rl(g.update),g.update();else u.el=f.el,g.vnode=u},se=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:P,u:T,parent:R,vnode:z}=f,W=I,H;rt(f,!1),I?(I.el=z.el,q(f,I,A)):I=z,P&&ir(P),(H=I.props&&I.props.onVnodeBeforeUpdate)&&Se(H,R,I,z),rt(f,!0);const Z=or(f),be=f.subTree;f.subTree=Z,N(be,Z,m(be.el),ln(be),f,h,x),I.el=Z.el,W===null&&ul(f,Z.el),T&&de(T,h),(H=I.props&&I.props.onVnodeUpdated)&&de(()=>Se(H,R,I,z),h)}else{let I;const{el:P,props:T}=u,{bm:R,m:z,parent:W}=f,H=En(u);if(rt(f,!1),R&&ir(R),!H&&(I=T&&T.onVnodeBeforeMount)&&Se(I,W,u),rt(f,!0),P&&rr){const Z=()=>{f.subTree=or(f),rr(P,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=or(f);N(null,Z,p,g,f,h,x),u.el=Z.el}if(z&&de(z,h),!H&&(I=T&&T.onVnodeMounted)){const Z=u;de(()=>Se(I,W,Z),h)}(u.shapeFlag&256||W&&En(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&de(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new Gr(y,()=>aa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,rt(f,!0),b()},q=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,$l(f,u.props,g,p),Hl(f,u.children,p),It(),$a(),Tt()},Y=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){sn(b,P,p,g,h,x,A,y,_);return}else if(T&256){et(b,P,p,g,h,x,A,y,_);return}}R&8?(I&16&&Re(b,h,x),P!==b&&d(p,P)):I&16?R&16?sn(b,P,p,g,h,x,A,y,_):Re(b,h,x,!0):(I&8&&d(p,""),R&16&&ve(P,p,g,h,x,A,y,_))},et=(f,u,p,g,h,x,A,y,_)=>{f=f||xt,u=u||xt;const b=f.length,I=u.length,P=Math.min(b,I);let T;for(T=0;T<P;T++){const R=u[T]=_?Ve(u[T]):Ie(u[T]);N(f[T],R,p,null,h,x,A,y,_)}b>I?Re(f,h,x,!0,!1,P):ve(u,p,g,h,x,A,y,_,P)},sn=(f,u,p,g,h,x,A,y,_)=>{let b=0;const I=u.length;let P=f.length-1,T=I-1;for(;b<=P&&b<=T;){const R=f[b],z=u[b]=_?Ve(u[b]):Ie(u[b]);if(Rt(R,z))N(R,z,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=T;){const R=f[P],z=u[T]=_?Ve(u[T]):Ie(u[T]);if(Rt(R,z))N(R,z,p,null,h,x,A,y,_);else break;P--,T--}if(b>P){if(b<=T){const R=T+1,z=R<I?u[R].el:g;for(;b<=T;)N(null,u[b]=_?Ve(u[b]):Ie(u[b]),p,z,h,x,A,y,_),b++}}else if(b>T)for(;b<=P;)Pe(f[b],h,x,!0),b++;else{const R=b,z=b,W=new Map;for(b=z;b<=T;b++){const pe=u[b]=_?Ve(u[b]):Ie(u[b]);pe.key!=null&&W.set(pe.key,b)}let H,Z=0;const be=T-z+1;let ht=!1,Sa=0;const Ft=new Array(be);for(b=0;b<be;b++)Ft[b]=0;for(b=R;b<=P;b++){const pe=f[b];if(Z>=be){Pe(pe,h,x,!0);continue}let Ce;if(pe.key!=null)Ce=W.get(pe.key);else for(H=z;H<=T;H++)if(Ft[H-z]===0&&Rt(pe,u[H])){Ce=H;break}Ce===void 0?Pe(pe,h,x,!0):(Ft[Ce-z]=b+1,Ce>=Sa?Sa=Ce:ht=!0,N(pe,u[Ce],p,null,h,x,A,y,_),Z++)}const Ia=ht?Kl(Ft):xt;for(H=Ia.length-1,b=be-1;b>=0;b--){const pe=z+b,Ce=u[pe],Ta=pe+1<I?u[pe+1].el:g;Ft[b]===0?N(null,Ce,p,Ta,h,x,A,y,_):ht&&(H<0||b!==Ia[H]?tt(Ce,p,Ta,2):H--)}}},tt=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){tt(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,pt);return}if(A===xe){r(x,u,p);for(let P=0;P<_.length;P++)tt(_[P],u,p,g);r(f.anchor,u,p);return}if(A===lr){F(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),de(()=>y.enter(x),h);else{const{leave:P,delayLeave:T,afterLeave:R}=y,z=()=>r(x,u,p),W=()=>{P(x,()=>{z(),R&&R()})};T?T(x,z,W):W()}else r(x,u,p)},Pe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:P,dirs:T}=f;if(y!=null&&Pr(y,null,p,f,!0),I&256){u.ctx.deactivate(f);return}const R=I&1&&T,z=!En(f);let W;if(z&&(W=A&&A.onVnodeBeforeUnmount)&&Se(W,u,f),I&6)as(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}R&&nt(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,p,h,pt,g):b&&(x!==xe||P>0&&P&64)?Re(b,u,p,!1,!0):(x===xe&&P&384||!h&&I&16)&&Re(_,u,p),g&&Pa(f)}(z&&(W=A&&A.onVnodeUnmounted)||R)&&de(()=>{W&&Se(W,u,f),R&&nt(f,null,u,"unmounted")},p)},Pa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===xe){rs(p,g);return}if(u===lr){S(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},rs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},as=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&ir(g),h.stop(),x&&(x.active=!1,Pe(A,f,u,p)),y&&de(y,u),de(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Pe(f[A],u,p,g,h)},ln=f=>f.shapeFlag&6?ln(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ca=(f,u,p)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),$a(),ro(),u._vnode=f},pt={p:N,um:Pe,m:tt,r:Pa,mt:tr,mc:ve,pc:Y,pbc:Fe,n:ln,o:e};let nr,rr;return t&&([nr,rr]=t(pt)),{render:Ca,hydrate:nr,createApp:jl(Ca,nr)}}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function wo(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ve(a[i]),s.el=o.el),n||wo(o,s)),s.type===Gn&&(s.el=o.el)}}function Kl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Vl=e=>e.__isTeleport,xe=Symbol.for("v-fgt"),Gn=Symbol.for("v-txt"),Kt=Symbol.for("v-cmt"),lr=Symbol.for("v-stc"),$t=[];let ke=null;function At(e=!1){$t.push(ke=e?null:[])}function Xl(){$t.pop(),ke=$t[$t.length-1]||null}let Vt=1;function Ja(e){Vt+=e}function ko(e){return e.dynamicChildren=Vt>0?ke||xt:null,Xl(),Vt>0&&ke&&ke.push(e),e}function Xt(e,t,n,r,a,i){return ko(Q(e,t,n,r,a,i,!0))}function Gl(e,t,n,r,a){return ko(ce(e,t,n,r,a,!0))}function Cr(e){return e?e.__v_isVNode===!0:!1}function Rt(e,t){return e.type===t.type&&e.key===t.key}const qn="__vInternal",Ao=({key:e})=>e??null,Cn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ee(e)||fe(e)||L(e)?{i:we,r:e,k:t,f:!!n}:e:null);function Q(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&Cn(t),scopeId:Vn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return s?(fa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ee(n)?8:16),Vt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const ce=ql;function ql(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Pl)&&(e=Kt),Cr(e)){const s=Et(e,t,!0);return n&&fa(s,n),Vt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(ff(e)&&(e=e.__vccOpts),t){t=Jl(t);let{class:s,style:l}=t;s&&!ee(s)&&(t.class=st(s)),G(l)&&(Zi(l)&&!M(l)&&(l=ne({},l)),t.style=Vr(l))}const o=ee(e)?1:dl(e)?128:Vl(e)?64:G(e)?4:L(e)?2:0;return Q(e,t,n,r,a,o,i,!0)}function Jl(e){return e?Zi(e)||qn in e?ne({},e):e:null}function Et(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Ql(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ao(s),ref:t&&t.ref?n&&a?M(a)?a.concat(Cn(t)):[a,Cn(t)]:Cn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Et(e.ssContent),ssFallback:e.ssFallback&&Et(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Zl(e=" ",t=0){return ce(Gn,null,e,t)}function Ie(e){return e==null||typeof e=="boolean"?ce(Kt):M(e)?ce(xe,null,e.slice()):typeof e=="object"?Ve(e):ce(Gn,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Et(e)}function fa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),fa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(qn in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[Zl(t)]):n=8);e.children=t,e.shapeFlag|=n}function Ql(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=st([t.class,r.class]));else if(a==="style")t.style=Vr([t.style,r.style]);else if($n(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ee(e,t,7,[n,r])}const ef=go();let tf=0;function nf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||ef,i={uid:tf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,a),emitsOptions:io(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ol.bind(null,i),e.ce&&e.ce(i),i}let re=null,ca,gt,Za="__VUE_INSTANCE_SETTERS__";(gt=gr()[Za])||(gt=gr()[Za]=[]),gt.push(e=>re=e),ca=e=>{gt.length>1?gt.forEach(t=>t(e)):gt[0](e)};const Pt=e=>{ca(e),e.scope.on()},ut=()=>{re&&re.scope.off(),ca(null)};function Oo(e){return e.vnode.shapeFlag&4}let Gt=!1;function rf(e,t=!1){Gt=t;const{props:n,children:r}=e.vnode,a=Oo(e);Dl(e,n,a,t),Bl(e,r);const i=a?af(e,t):void 0;return Gt=!1,i}function af(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qi(new Proxy(e.ctx,Il));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?sf(e):null;Pt(e),It();const i=Ge(r,e,0,[e.props,a]);if(Tt(),ut(),Li(i)){if(i.then(ut,ut),t)return i.then(o=>{Qa(e,o,t)}).catch(o=>{Wn(o,e,0)});e.asyncDep=i}else Qa(e,i,t)}else Eo(e,t)}function Qa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:G(t)&&(e.setupState=eo(t)),Eo(e,n)}let ei;function Eo(e,t,n){const r=e.type;if(!e.render){if(!t&&ei&&!r.render){const a=r.template||sa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=ei(a,c)}}e.render=r.render||Oe}Pt(e),It(),Tl(e),Tt(),ut()}function of(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}}))}function sf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return of(e)},slots:e.slots,emit:e.emit,expose:t}}function ua(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(eo(Qi(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Dt)return Dt[n](e)},has(t,n){return n in t||n in Dt}}))}function lf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function ff(e){return L(e)&&"__vccOpts"in e}const at=(e,t)=>Qs(e,t,Gt);function cf(e,t,n){const r=arguments.length;return r===2?G(t)&&!M(t)?Cr(t)?ce(e,null,[t]):ce(e,t):ce(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Cr(n)&&(n=[n]),ce(e,t,n))}const uf=Symbol.for("v-scx"),df=()=>Pn(uf),mf="3.3.1",pf="http://www.w3.org/2000/svg",ot=typeof document<"u"?document:null,ti=ot&&ot.createElement("template"),hf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ot.createElementNS(pf,e):ot.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ot.createTextNode(e),createComment:e=>ot.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ot.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ti.innerHTML=r?`<svg>${e}</svg>`:e;const s=ti.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function gf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function vf(e,t,n){const r=e.style,a=ee(n);if(n&&!a){if(t&&!ee(t))for(const i in t)n[i]==null&&Sr(r,i,"");for(const i in n)Sr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ni=/\s*!important$/;function Sr(e,t,n){if(M(n))n.forEach(r=>Sr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=bf(e,t);ni.test(n)?e.setProperty(St(r),n.replace(ni,""),"important"):e[r]=n}}const ri=["Webkit","Moz","ms"],fr={};function bf(e,t){const n=fr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return fr[t]=r;r=Hn(r);for(let a=0;a<ri.length;a++){const i=ri[a]+r;if(i in e)return fr[t]=i}return t}const ai="http://www.w3.org/1999/xlink";function yf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ai,t.slice(6,t.length)):e.setAttributeNS(ai,t,n);else{const i=vs(t);n==null||i&&!Di(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function xf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Di(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function _f(e,t,n,r){e.addEventListener(t,n,r)}function wf(e,t,n,r){e.removeEventListener(t,n,r)}function kf(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Af(t);if(r){const c=i[t]=Pf(r,a);_f(e,s,c,l)}else o&&(wf(e,s,o,l),i[t]=void 0)}}const ii=/(?:Once|Passive|Capture)$/;function Af(e){let t;if(ii.test(e)){t={};let r;for(;r=e.match(ii);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):St(e.slice(2)),t]}let cr=0;const Of=Promise.resolve(),Ef=()=>cr||(Of.then(()=>cr=0),cr=Date.now());function Pf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Cf(r,n.value),t,5,[r])};return n.value=e,n.attached=Ef(),n}function Cf(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const oi=/^on[a-z]/,Sf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?gf(e,r,a):t==="style"?vf(e,n,r):$n(t)?Hr(t)||kf(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):If(e,t,r,a))?xf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),yf(e,t,r,a))};function If(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&oi.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||oi.test(t)&&ee(n)?!1:t in e}const Tf=ne({patchProp:Sf},hf);let si;function Nf(){return si||(si=Yl(Tf))}const Mf=(...e)=>{const t=Nf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Ff(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Ff(e){return ee(e)?document.querySelector(e):e}const Rf={methods:{goToPage(e){window.open(e)}}};const da=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Lf=e=>(ia("data-v-738f4928"),e=e(),oa(),e),jf={class:"header"},zf=Lf(()=>Q("span",null,"Teacher Sheet",-1));function Df(e,t,n,r,a,i){const o=po("font-awesome-icon");return At(),Xt("div",jf,[zf,Q("button",{class:"button",onClick:t[0]||(t[0]=s=>i.goToPage("https://github.com/thiagoarantes/teacherSheet"))},[ce(o,{icon:"fa-brands fa-github"})])])}const $f=da(Rf,[["render",Df],["__scopeId","data-v-738f4928"]]),Uf={props:{lines:Number,line:Number},data(){return{lGrammar:"G",lVocabulary:"V",lPronunciation:"P",lFluency:"F",bGrammar:!1,bVocabulary:!1,bPronunciation:!1,bFluency:!1}},methods:{onClickButton(e,t){switch(e){case this.lGrammar:this.bGrammar=!this.bGrammar;break;case this.lVocabulary:this.bVocabulary=!this.bVocabulary;break;case this.lPronunciation:this.bPronunciation=!this.bPronunciation;break;case this.lFluency:this.bFluency=!this.bFluency;break}t=!t,this.$emit("clicked",[e,t])},verifyLine(e){if(this.line===this.lines){const t=e.target.value!=="";this.$emit("new-line",t)}}}};const Bf=e=>(ia("data-v-ecb0f2b8"),e=e(),oa(),e),Hf={class:"line"},Yf=Bf(()=>Q("input",{type:"text",class:"input"},null,-1));function Wf(e,t,n,r,a,i){return At(),Xt("div",Hf,[Q("input",{type:"text",class:"input",onInput:t[0]||(t[0]=(...o)=>i.verifyLine&&i.verifyLine(...o))},null,32),Q("button",{class:st(["button",{clicked:a.bGrammar}]),onClick:t[1]||(t[1]=o=>i.onClickButton(a.lGrammar,a.bGrammar))},je(a.lGrammar),3),Q("button",{class:st(["button",{clicked:a.bVocabulary}]),onClick:t[2]||(t[2]=o=>i.onClickButton(a.lVocabulary,a.bVocabulary))},je(a.lVocabulary),3),Q("button",{class:st(["button",{clicked:a.bPronunciation}]),onClick:t[3]||(t[3]=o=>i.onClickButton(a.lPronunciation,a.bPronunciation))},je(a.lPronunciation),3),Q("button",{class:st(["button",{clicked:a.bFluency}]),onClick:t[4]||(t[4]=o=>i.onClickButton(a.lFluency,a.bFluency))},je(a.lFluency),3),Yf])}const Kf=da(Uf,[["render",Wf],["__scopeId","data-v-ecb0f2b8"]]),Vf={components:{SheetLine:Kf},data(){return{lines:1,score:2.5,totalG:0,totalV:0,totalP:0,totalF:0}},methods:{addNewLine(e){e&&this.lines++},onChildClick([e,t]){switch(e){case"G":t?this.totalG++:this.totalG--;break;case"V":t?this.totalV++:this.totalV--;break;case"P":t?this.totalP++:this.totalP--;break;case"F":t?this.totalF++:this.totalF--;break}this.updateScore()},updateScore(){switch(this.totalG+this.totalV+this.totalP+this.totalF){case 0:this.score=2.5;break;case 1:case 2:this.score=2;break;case 3:case 4:this.score=1.5;break;case 5:case 6:this.score=1;break;case 7:case 8:this.score=.5;break;default:this.score=.25;break}}}};const Xf=e=>(ia("data-v-66eb161c"),e=e(),oa(),e),Gf={class:"sheet"},qf={class:"score"},Jf={class:"points"},Zf={class:"point",title:"Grammar"},Qf={class:"point",title:"Vocabulary"},ec={class:"point",title:"Pronunciation"},tc={class:"point",title:"Fluency"},nc=Xf(()=>Q("div",{class:"title"},[Q("div",null,"NOTE"),Q("div",null,"CATEGORIES"),Q("div",null,"HINTS")],-1));function rc(e,t,n,r,a,i){const o=po("SheetLine");return At(),Xt("div",Gf,[Q("div",qf,"Score: "+je(a.score),1),Q("div",Jf,[Q("div",Zf,je(a.totalG),1),Q("div",Qf,je(a.totalV),1),Q("div",ec,je(a.totalP),1),Q("div",tc,je(a.totalF),1)]),nc,(At(!0),Xt(xe,null,Sl(a.lines,s=>(At(),Gl(o,{lines:a.lines,line:s,key:s,onClicked:i.onChildClick,onNewLine:i.addNewLine},null,8,["lines","line","onClicked","onNewLine"]))),128))])}const ac=da(Vf,[["render",rc],["__scopeId","data-v-66eb161c"]]),ic=lo({__name:"App",setup(e){return(t,n)=>(At(),Xt(xe,null,[ce($f),ce(ac)],64))}});function li(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?li(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):li(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ln(e){return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(e)}function oc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function fi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sc(e,t,n){return t&&fi(e.prototype,t),n&&fi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ma(e,t){return fc(e)||uc(e,t)||Po(e,t)||mc()}function tn(e){return lc(e)||cc(e)||Po(e)||dc()}function lc(e){if(Array.isArray(e))return Ir(e)}function fc(e){if(Array.isArray(e))return e}function cc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Po(e,t){if(e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ci=function(){},pa={},Co={},So=null,Io={mark:ci,measure:ci};try{typeof window<"u"&&(pa=window),typeof document<"u"&&(Co=document),typeof MutationObserver<"u"&&(So=MutationObserver),typeof performance<"u"&&(Io=performance)}catch{}var pc=pa.navigator||{},ui=pc.userAgent,di=ui===void 0?"":ui,Je=pa,V=Co,mi=So,hn=Io;Je.document;var Ye=!!V.documentElement&&!!V.head&&typeof V.addEventListener=="function"&&typeof V.createElement=="function",To=~di.indexOf("MSIE")||~di.indexOf("Trident/"),gn,vn,bn,yn,xn,$e="___FONT_AWESOME___",Tr=16,No="fa",Mo="svg-inline--fa",dt="data-fa-i2svg",Nr="data-fa-pseudo-element",hc="data-fa-pseudo-element-pending",ha="data-prefix",ga="data-icon",pi="fontawesome-i2svg",gc="async",vc=["HTML","HEAD","STYLE","SCRIPT"],Fo=function(){try{return!0}catch{return!1}}(),K="classic",J="sharp",va=[K,J];function nn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var qt=nn((gn={},te(gn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(gn,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),gn)),Jt=nn((vn={},te(vn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(vn,J,{solid:"fass",regular:"fasr",light:"fasl"}),vn)),Zt=nn((bn={},te(bn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(bn,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),bn)),bc=nn((yn={},te(yn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(yn,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),yn)),yc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ro="fa-layers-text",xc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_c=nn((xn={},te(xn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(xn,J,{900:"fass",400:"fasr",300:"fasl"}),xn)),Lo=[1,2,3,4,5,6,7,8,9,10],wc=Lo.concat([11,12,13,14,15,16,17,18,19,20]),kc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],lt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Qt=new Set;Object.keys(Jt[K]).map(Qt.add.bind(Qt));Object.keys(Jt[J]).map(Qt.add.bind(Qt));var Ac=[].concat(va,tn(Qt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",lt.GROUP,lt.SWAP_OPACITY,lt.PRIMARY,lt.SECONDARY]).concat(Lo.map(function(e){return"".concat(e,"x")})).concat(wc.map(function(e){return"w-".concat(e)})),Ut=Je.FontAwesomeConfig||{};function Oc(e){var t=V.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ec(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(V&&typeof V.querySelector=="function"){var Pc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pc.forEach(function(e){var t=ma(e,2),n=t[0],r=t[1],a=Ec(Oc(n));a!=null&&(Ut[r]=a)})}var jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:No,replacementClass:Mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ut.familyPrefix&&(Ut.cssPrefix=Ut.familyPrefix);var Ct=E(E({},jo),Ut);Ct.autoReplaceSvg||(Ct.observeMutations=!1);var C={};Object.keys(jo).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Ct[e]=n,Bt.forEach(function(r){return r(C)})},get:function(){return Ct[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Ct.cssPrefix=t,Bt.forEach(function(n){return n(C)})},get:function(){return Ct.cssPrefix}});Je.FontAwesomeConfig=C;var Bt=[];function Cc(e){return Bt.push(e),function(){Bt.splice(Bt.indexOf(e),1)}}var Ke=Tr,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sc(e){if(!(!e||!Ye)){var t=V.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=V.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return V.head.insertBefore(t,r),e}}var Ic="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function en(){for(var e=12,t="";e-- >0;)t+=Ic[Math.random()*62|0];return t}function Nt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ba(e){return e.classList?Nt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(zo(e[n]),'" ')},"").trim()}function Jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ya(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function Nc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Mc(e){var t=e.transform,n=e.width,r=n===void 0?Tr:n,a=e.height,i=a===void 0?Tr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&To?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Fc=`:root, :host {
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
}`;function Do(){var e=No,t=Mo,n=C.cssPrefix,r=C.replacementClass,a=Fc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var hi=!1;function ur(){C.autoAddCss&&!hi&&(Sc(Do()),hi=!0)}var Rc={mixout:function(){return{dom:{css:Do,insertCss:ur}}},hooks:function(){return{beforeDOMElementCreation:function(){ur()},beforeI2svg:function(){ur()}}}},Ue=Je||{};Ue[$e]||(Ue[$e]={});Ue[$e].styles||(Ue[$e].styles={});Ue[$e].hooks||(Ue[$e].hooks={});Ue[$e].shims||(Ue[$e].shims=[]);var Ae=Ue[$e],$o=[],Lc=function e(){V.removeEventListener("DOMContentLoaded",e),jn=1,$o.map(function(t){return t()})},jn=!1;Ye&&(jn=(V.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(V.readyState),jn||V.addEventListener("DOMContentLoaded",Lc));function jc(e){Ye&&(jn?setTimeout(e,0):$o.push(e))}function rn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?zo(e):"<".concat(t," ").concat(Tc(r),">").concat(i.map(rn).join(""),"</").concat(t,">")}function gi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},dr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?zc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Dc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Mr(e){var t=Dc(e);return t.length===1?t[0].toString(16):null}function $c(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function vi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Fr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=vi(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,vi(t)):Ae.styles[e]=E(E({},Ae.styles[e]||{}),i),e==="fas"&&Fr("fa",t)}var _n,wn,kn,bt=Ae.styles,Uc=Ae.shims,Bc=(_n={},te(_n,K,Object.values(Zt[K])),te(_n,J,Object.values(Zt[J])),_n),xa=null,Uo={},Bo={},Ho={},Yo={},Wo={},Hc=(wn={},te(wn,K,Object.keys(qt[K])),te(wn,J,Object.keys(qt[J])),wn);function Yc(e){return~Ac.indexOf(e)}function Wc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Yc(a)?a:null}var Ko=function(){var t=function(i){return dr(bt,function(o,s,l){return o[l]=dr(s,i,{}),o},{})};Uo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Bo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Wo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in bt||C.autoFetchSvg,r=dr(Uc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ho=r.names,Yo=r.unicodes,xa=Zn(C.styleDefault,{family:C.familyDefault})};Cc(function(e){xa=Zn(e.styleDefault,{family:C.familyDefault})});Ko();function _a(e,t){return(Uo[e]||{})[t]}function Kc(e,t){return(Bo[e]||{})[t]}function ft(e,t){return(Wo[e]||{})[t]}function Vo(e){return Ho[e]||{prefix:null,iconName:null}}function Vc(e){var t=Yo[e],n=_a("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ze(){return xa}var wa=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=qt[r][e],i=Jt[r][e]||Jt[r][a],o=e in Ae.styles?e:null;return i||o||null}var bi=(kn={},te(kn,K,Object.keys(Zt[K])),te(kn,J,Object.keys(Zt[J])),kn);function Qn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,K,"".concat(C.cssPrefix,"-").concat(K)),te(t,J,"".concat(C.cssPrefix,"-").concat(J)),t),o=null,s=K;(e.includes(i[K])||e.some(function(c){return bi[K].includes(c)}))&&(s=K),(e.includes(i[J])||e.some(function(c){return bi[J].includes(c)}))&&(s=J);var l=e.reduce(function(c,d){var m=Wc(C.cssPrefix,d);if(bt[d]?(d=Bc[s].includes(d)?bc[s][d]:d,o=d,c.prefix=d):Hc[s].indexOf(d)>-1?(o=d,c.prefix=Zn(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[K]&&d!==i[J]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Vo(c.iconName):{},w=ft(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!bt.far&&bt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},wa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(bt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=ft(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ze()||"fas"),l}var Xc=function(){function e(){oc(this,e),this.definitions={}}return sc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Fr(s,o[s]);var l=Zt[K][s];l&&Fr(l,o[s]),Ko()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),yi=[],yt={},Ot={},Gc=Object.keys(Ot);function qc(e,t){var n=t.mixoutsTo;return yi=e,yt={},Object.keys(Ot).forEach(function(r){Gc.indexOf(r)===-1&&delete Ot[r]}),yi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ln(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){yt[o]||(yt[o]=[]),yt[o].push(i[o])})}r.provides&&r.provides(Ot)}),n}function Rr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=yt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function mt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=yt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Ot[e]?Ot[e].apply(null,t):void 0}function Lr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ze();if(t)return t=ft(n,t)||t,gi(Xo.definitions,n,t)||gi(Ae.styles,n,t)}var Xo=new Xc,Jc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,mt("noAuto")},Zc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ye?(mt("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,jc(function(){eu({autoReplaceSvgRoot:n}),mt("watch",t)})}},Qc={icon:function(t){if(t===null)return null;if(Ln(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ft(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Zn(t[0]);return{prefix:r,iconName:ft(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(yc))){var a=Qn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ze(),iconName:ft(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ze();return{prefix:i,iconName:ft(i,t)||t}}}},he={noAuto:Jc,config:C,dom:Zc,parse:Qc,library:Xo,findIconDefinition:Lr,toHtml:rn},eu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?V:n;(Object.keys(Ae.styles).length>0||C.autoFetchSvg)&&Ye&&C.autoReplaceSvg&&he.dom.i2svg({node:r})};function er(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return rn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ye){var r=V.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function tu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ya(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Jn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function nu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function ka(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,w=v===void 0?!1:v,j=r.found?r:n,N=j.width,D=j.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),F={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};w&&(F.attributes[dt]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||en())},children:[l]}),delete F.attributes.title);var B=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},S),m.styles)}),ae=r.found&&n.found?Be("generateAbstractMask",B)||{children:[],attributes:{}}:Be("generateAbstractIcon",B)||{children:[],attributes:{}},ie=ae.children,ve=ae.attributes;return B.children=ie,B.attributes=ve,s?nu(B):tu(B)}function xi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[dt]="");var d=E({},o.styles);ya(a)&&(d.transform=Mc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Jn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function ru(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Jn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var mr=Ae.styles;function jr(e){var t=e[0],n=e[1],r=e.slice(4),a=ma(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(lt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(lt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(lt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var au={found:!1,width:512,height:512};function iu(e,t){!Fo&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function zr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Ze()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Vo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&mr[t]&&mr[t][e]){var o=mr[t][e];return r(jr(o))}iu(e,t),r(E(E({},au),{},{icon:C.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var _i=function(){},Dr=C.measurePerformance&&hn&&hn.mark&&hn.measure?hn:{mark:_i,measure:_i},zt='FA "6.4.0"',ou=function(t){return Dr.mark("".concat(zt," ").concat(t," begins")),function(){return Go(t)}},Go=function(t){Dr.mark("".concat(zt," ").concat(t," ends")),Dr.measure("".concat(zt," ").concat(t),"".concat(zt," ").concat(t," begins"),"".concat(zt," ").concat(t," ends"))},Aa={begin:ou,end:Go},Sn=function(){};function wi(e){var t=e.getAttribute?e.getAttribute(dt):null;return typeof t=="string"}function su(e){var t=e.getAttribute?e.getAttribute(ha):null,n=e.getAttribute?e.getAttribute(ga):null;return t&&n}function lu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function fu(){if(C.autoReplaceSvg===!0)return In.replace;var e=In[C.autoReplaceSvg];return e||In.replace}function cu(e){return V.createElementNS("http://www.w3.org/2000/svg",e)}function uu(e){return V.createElement(e)}function qo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?cu:uu:n;if(typeof e=="string")return V.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(qo(o,{ceFn:r}))}),a}function du(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var In={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(qo(a),n)}),n.getAttribute(dt)===null&&C.keepOriginalSource){var r=V.createComment(du(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ba(n).indexOf(C.replacementClass))return In.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return rn(s)}).join(`
`);n.setAttribute(dt,""),n.innerHTML=o}};function ki(e){e()}function Jo(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=ki;C.mutateApproach===gc&&(r=Je.requestAnimationFrame||ki),r(function(){var a=fu(),i=Aa.begin("mutate");e.map(a),i(),n()})}}var Oa=!1;function Zo(){Oa=!0}function $r(){Oa=!1}var zn=null;function Ai(e){if(mi&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?V:s;zn=new mi(function(c){if(!Oa){var d=Ze();Nt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!wi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&wi(m.target)&&~kc.indexOf(m.attributeName))if(m.attributeName==="class"&&su(m.target)){var v=Qn(ba(m.target)),w=v.prefix,j=v.iconName;m.target.setAttribute(ha,w||d),j&&m.target.setAttribute(ga,j)}else lu(m.target)&&a(m.target)})}}),Ye&&zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mu(){zn&&zn.disconnect()}function pu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function hu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Qn(ba(e));return a.prefix||(a.prefix=Ze()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Kc(a.prefix,e.innerText)||_a(a.prefix,Mr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function gu(e){var t=Nt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||en()):(t["aria-hidden"]="true",t.focusable="false")),t}function vu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hu(e),r=n.iconName,a=n.prefix,i=n.rest,o=gu(e),s=Rr("parseNodeAttributes",{},e),l=t.styleParser?pu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var bu=Ae.styles;function Qo(e){var t=C.autoReplaceSvg==="nest"?Oi(e,{styleParser:!1}):Oi(e);return~t.extra.classes.indexOf(Ro)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var Qe=new Set;va.map(function(e){Qe.add("fa-".concat(e))});Object.keys(qt[K]).map(Qe.add.bind(Qe));Object.keys(qt[J]).map(Qe.add.bind(Qe));Qe=tn(Qe);function Ei(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ye)return Promise.resolve();var n=V.documentElement.classList,r=function(m){return n.add("".concat(pi,"-").concat(m))},a=function(m){return n.remove("".concat(pi,"-").concat(m))},i=C.autoFetchSvg?Qe:va.map(function(d){return"fa-".concat(d)}).concat(Object.keys(bu));i.includes("fa")||i.push("fa");var o=[".".concat(Ro,":not([").concat(dt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(dt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Nt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Aa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Qo(m);v&&d.push(v)}catch(w){Fo||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Jo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function yu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qo(e).then(function(n){n&&Jo([n],t)})}function xu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Lr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Lr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var _u=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,j=w===void 0?null:w,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,F=n.styles,S=F===void 0?{}:F;if(t){var B=t.prefix,ae=t.iconName,ie=t.icon;return er(E({type:"icon"},t),function(){return mt("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||en()):(O["aria-hidden"]="true",O.focusable="false")),ka({icons:{main:jr(ie),mask:l?jr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:ae,transform:E(E({},Ne),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:O,styles:S,classes:D}})})}},wu={mixout:function(){return{icon:xu(_u)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ei,n.nodeCallback=yu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?V:r,i=n.callback,o=i===void 0?function(){}:i;return Ei(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,j){Promise.all([zr(a,s),d.iconName?zr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ma(N,2),k=D[0],O=D[1];w([n,ka({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Jn(s);l.length>0&&(a.style=l);var c;return ya(o)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},ku={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return er({type:"layer"},function(){mt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(tn(i)).join(" ")},children:o}]})}}}},Au={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return er({type:"counter",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),ru({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(tn(s))}})})}}}},Ou={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,w=v===void 0?{}:v;return er({type:"text",content:n},function(){return mt("beforeDOMElementCreation",{content:n,params:r}),xi({content:n,transform:E(E({},Ne),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(tn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(To){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,xi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Eu=new RegExp('"',"ug"),Pi=[1105920,1112319];function Pu(e){var t=e.replace(Eu,""),n=$c(t,0),r=n>=Pi[0]&&n<=Pi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Mr(a?t[0]:t),isSecondary:r||a}}function Ci(e,t){var n="".concat(hc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Nt(e.children),o=i.filter(function(ie){return ie.getAttribute(Nr)===t})[0],s=Je.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(xc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?J:K,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Jt[v][l[2].toLowerCase()]:_c[v][c],j=Pu(m),N=j.value,D=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=_a(w,N),F=O;if(k){var S=Vc(N);S.iconName&&S.prefix&&(O=S.iconName,w=S.prefix)}if(O&&!D&&(!o||o.getAttribute(ha)!==w||o.getAttribute(ga)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var B=vu(),ae=B.extra;ae.attributes[Nr]=t,zr(O,w).then(function(ie){var ve=ka(E(E({},B),{},{icons:{main:ie,mask:wa()},prefix:w,iconName:F,extra:ae,watchable:!0})),ge=V.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=ve.map(function(Fe){return rn(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Cu(e){return Promise.all([Ci(e,"::before"),Ci(e,"::after")])}function Su(e){return e.parentNode!==document.head&&!~vc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Si(e){if(Ye)return new Promise(function(t,n){var r=Nt(e.querySelectorAll("*")).filter(Su).map(Cu),a=Aa.begin("searchPseudoElements");Zo(),Promise.all(r).then(function(){a(),$r(),t()}).catch(function(){a(),$r(),n()})})}var Iu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Si,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?V:r;C.searchPseudoElements&&Si(a)}}},Ii=!1,Tu={mixout:function(){return{dom:{unwatch:function(){Zo(),Ii=!0}}}},hooks:function(){return{bootstrap:function(){Ai(Rr("mutationObserverCallbacks",{}))},noAuto:function(){mu()},watch:function(n){var r=n.observeMutationsRoot;Ii?$r():Ai(Rr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Ti=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Nu={mixout:function(){return{parse:{transform:function(n){return Ti(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Ti(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},pr={x:0,y:0,width:"100%",height:"100%"};function Ni(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Mu(e){return e.tag==="g"?e.children:[e]}var Fu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qn(a.split(" ").map(function(o){return o.trim()})):wa();return i.prefix||(i.prefix=Ze()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,w=Nc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},pr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ni)}:{},D={tag:"g",attributes:E({},w.inner),children:[Ni(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(s||en()),F="clip-".concat(s||en()),S={tag:"mask",attributes:E(E({},pr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Mu(v)},S]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},pr)}),{children:r,attributes:a}}}},Ru={provides:function(t){var n=!1;Je.matchMedia&&(n=Je.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Lu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ju=[Rc,wu,ku,Au,Ou,Iu,Tu,Nu,Fu,Ru,Lu];qc(ju,{mixoutsTo:he});he.noAuto;he.config;var zu=he.library;he.dom;var Ur=he.parse;he.findIconDefinition;he.toHtml;var Du=he.icon;he.layer;he.text;he.counter;var $u={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Mi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function ze(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Mi(Object(n),!0).forEach(function(r){ue(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Mi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Bu(e,t){if(e==null)return{};var n=Uu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},es={exports:{}};(function(e){(function(t){var n=function(k,O,F){if(!c(O)||m(O)||v(O)||w(O)||l(O))return O;var S,B=0,ae=0;if(d(O))for(S=[],ae=O.length;B<ae;B++)S.push(n(k,O[B],F));else{S={};for(var ie in O)Object.prototype.hasOwnProperty.call(O,ie)&&(S[k(ie,F)]=n(k,O[ie],F))}return S},r=function(k,O){O=O||{};var F=O.separator||"_",S=O.split||/(?=[A-Z])/;return k.split(S).join(F)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?k:function(S,B){return F(S,k,B)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Hu)})(es);var Yu=es.exports,Wu=["class","style"];function Ku(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Yu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Vu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ts(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Vu(d);break;case"style":l.style=Ku(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Bu(n,Wu);return cf(e.tag,ze(ze(ze({},t),{},{class:a.class,style:ze(ze({},a.style),o)},a.attrs),s),r)}var ns=!1;try{ns=!0}catch{}function Xu(){if(!ns&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function hr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ue({},e,t):{}}function Gu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ue(t,"fa-".concat(e.size),e.size!==null),ue(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ue(t,"fa-pull-".concat(e.pull),e.pull!==null),ue(t,"fa-swap-opacity",e.swapOpacity),ue(t,"fa-bounce",e.bounce),ue(t,"fa-shake",e.shake),ue(t,"fa-beat",e.beat),ue(t,"fa-fade",e.fade),ue(t,"fa-beat-fade",e.beatFade),ue(t,"fa-flash",e.flash),ue(t,"fa-spin-pulse",e.spinPulse),ue(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Fi(e){if(e&&Dn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Ur.icon)return Ur.icon(e);if(e===null)return null;if(Dn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var qu=lo({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=at(function(){return Fi(t.icon)}),i=at(function(){return hr("classes",Gu(t))}),o=at(function(){return hr("transform",typeof t.transform=="string"?Ur.transform(t.transform):t.transform)}),s=at(function(){return hr("mask",Fi(t.mask))}),l=at(function(){return Du(a.value,ze(ze(ze(ze({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});On(l,function(d){if(!d)return Xu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=at(function(){return l.value?ts(l.value.abstract[0],{},r):null});return function(){return c.value}}});zu.add($u);Mf(ic).component("font-awesome-icon",qu).mount("#app");
