(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ur(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},bt=[],Oe=()=>{},is=()=>!1,os=/^on[^a-z]/,$n=e=>os.test(e),Br=e=>e.startsWith("onUpdate:"),te=Object.assign,Hr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},ss=Object.prototype.hasOwnProperty,$=(e,t)=>ss.call(e,t),M=Array.isArray,yt=e=>Un(e)==="[object Map]",Mi=e=>Un(e)==="[object Set]",L=e=>typeof e=="function",Q=e=>typeof e=="string",Yr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Fi=e=>V(e)&&L(e.then)&&L(e.catch),Ri=Object.prototype.toString,Un=e=>Ri.call(e),ls=e=>Un(e).slice(8,-1),Li=e=>Un(e)==="[object Object]",Wr=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,kn=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Bn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},fs=/-(\w)/g,Me=Bn(e=>e.replace(fs,(t,n)=>n?n.toUpperCase():"")),cs=/\B([A-Z])/g,Pt=Bn(e=>e.replace(cs,"-$1").toLowerCase()),Hn=Bn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Bn(e=>e?`on${Hn(e)}`:""),Tn=(e,t)=>!Object.is(e,t),ir=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Nn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},us=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ia;const hr=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Q(r)?hs(r):Kr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(Q(e))return e;if(V(e))return e}}const ds=/;(?![^(]*\))/g,ms=/:([^]+)/,ps=new RegExp("\\/\\*.*?\\*\\/","gs");function hs(e){const t={};return e.replace(ps,"").split(ds).forEach(n=>{if(n){const r=n.split(ms);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Xr(e){let t="";if(Q(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=Xr(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vs=Ur(gs);function ji(e){return!!e||e===""}const sn=e=>Q(e)?e:e==null?"":M(e)||V(e)&&(e.toString===Ri||!L(e.toString))?JSON.stringify(e,zi,2):String(e),zi=(e,t)=>t&&t.__v_isRef?zi(e,t.value):yt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mi(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!M(t)&&!Li(t)?String(t):t;let ye;class bs{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=ye,!t&&ye&&(this.index=(ye.scopes||(ye.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=ye;try{return ye=this,t()}finally{ye=n}}}on(){ye=this}off(){ye=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ys(e,t=ye){t&&t.active&&t.effects.push(e)}function xs(){return ye}const qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Di=e=>(e.w&Ve)>0,$i=e=>(e.n&Ve)>0,_s=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ve},ws=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Di(a)&&!$i(a)?a.delete(e):t[n++]=a,a.w&=~Ve,a.n&=~Ve}t.length=n}},gr=new WeakMap;let Ft=0,Ve=1;const vr=30;let _e;const lt=Symbol(""),br=Symbol("");class Vr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ys(this,r)}run(){if(!this.active)return this.fn();let t=_e,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=_e,_e=this,Xe=!0,Ve=1<<++Ft,Ft<=vr?_s(this):Ta(this),this.fn()}finally{Ft<=vr&&ws(this),Ve=1<<--Ft,_e=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_e===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Ui=[];function Ct(){Ui.push(Xe),Xe=!1}function St(){const e=Ui.pop();Xe=e===void 0?!0:e}function de(e,t,n){if(Xe&&_e){let r=gr.get(e);r||gr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=qr()),Bi(a)}}function Bi(e,t){let n=!1;Ft<=vr?$i(e)||(e.n|=Ve,n=!Di(e)):n=!e.has(_e),n&&(e.add(_e),_e.deps.push(e))}function ze(e,t,n,r,a,i){const o=gr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?Wr(n)&&s.push(o.get("length")):(s.push(o.get(lt)),yt(e)&&s.push(o.get(br)));break;case"delete":M(e)||(s.push(o.get(lt)),yt(e)&&s.push(o.get(br)));break;case"set":yt(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&yr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);yr(qr(l))}}function yr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Na(r);for(const r of n)r.computed||Na(r)}function Na(e,t){(e!==_e||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const ks=Ur("__proto__,__v_isRef,__isVue"),Hi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Yr)),As=Gr(),Os=Gr(!1,!0),Es=Gr(!0),Ma=Ps();function Ps(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ct();const r=U(this)[t].apply(this,n);return St(),r}}),e}function Cs(e){const t=U(this);return de(t,"has",e),t.hasOwnProperty(e)}function Gr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ys:qi:t?Xi:Ki).get(r))return r;const o=M(r);if(!e){if(o&&$(Ma,a))return Reflect.get(Ma,a,i);if(a==="hasOwnProperty")return Cs}const s=Reflect.get(r,a,i);return(Yr(a)?Hi.has(a):ks(a))||(e||de(r,"get",a),t)?s:fe(s)?o&&Wr(a)?s:s.value:V(s)?e?Vi(s):Qr(s):s}}const Ss=Yi(),Is=Yi(!0);function Yi(e=!1){return function(n,r,a,i){let o=n[r];if(Ut(o)&&fe(o)&&!fe(a))return!1;if(!e&&(!xr(a)&&!Ut(a)&&(o=U(o),a=U(a)),!M(n)&&fe(o)&&!fe(a)))return o.value=a,!0;const s=M(n)&&Wr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Tn(a,o)&&ze(n,"set",r,a):ze(n,"add",r,a)),l}}function Ts(e,t){const n=$(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&ze(e,"delete",t,void 0),r}function Ns(e,t){const n=Reflect.has(e,t);return(!Yr(t)||!Hi.has(t))&&de(e,"has",t),n}function Ms(e){return de(e,"iterate",M(e)?"length":lt),Reflect.ownKeys(e)}const Wi={get:As,set:Ss,deleteProperty:Ts,has:Ns,ownKeys:Ms},Fs={get:Es,set(e,t){return!0},deleteProperty(e,t){return!0}},Rs=te({},Wi,{get:Os,set:Is}),Jr=e=>e,Yn=e=>Reflect.getPrototypeOf(e);function ln(e,t,n=!1,r=!1){e=e.__v_raw;const a=U(e),i=U(t);n||(t!==i&&de(a,"get",t),de(a,"get",i));const{has:o}=Yn(a),s=r?Jr:n?na:ta;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function fn(e,t=!1){const n=this.__v_raw,r=U(n),a=U(e);return t||(e!==a&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function cn(e,t=!1){return e=e.__v_raw,!t&&de(U(e),"iterate",lt),Reflect.get(e,"size",e)}function Fa(e){e=U(e);const t=U(this);return Yn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Ra(e,t){t=U(t);const n=U(this),{has:r,get:a}=Yn(n);let i=r.call(n,e);i||(e=U(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Tn(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function La(e){const t=U(this),{has:n,get:r}=Yn(t);let a=n.call(t,e);a||(e=U(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function ja(){const e=U(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function un(e,t){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=t?Jr:e?na:ta;return!e&&de(s,"iterate",lt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function dn(e,t,n){return function(...r){const a=this.__v_raw,i=U(a),o=yt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?Jr:t?na:ta;return!t&&de(i,"iterate",l?br:lt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Ls(){const e={get(i){return ln(this,i)},get size(){return cn(this)},has:fn,add:Fa,set:Ra,delete:La,clear:ja,forEach:un(!1,!1)},t={get(i){return ln(this,i,!1,!0)},get size(){return cn(this)},has:fn,add:Fa,set:Ra,delete:La,clear:ja,forEach:un(!1,!0)},n={get(i){return ln(this,i,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:un(!0,!1)},r={get(i){return ln(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),t[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[e,n,t,r]}const[js,zs,Ds,$s]=Ls();function Zr(e,t){const n=t?e?$s:Ds:e?zs:js;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Us={get:Zr(!1,!1)},Bs={get:Zr(!1,!0)},Hs={get:Zr(!0,!1)},Ki=new WeakMap,Xi=new WeakMap,qi=new WeakMap,Ys=new WeakMap;function Ws(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ks(e){return e.__v_skip||!Object.isExtensible(e)?0:Ws(ls(e))}function Qr(e){return Ut(e)?e:ea(e,!1,Wi,Us,Ki)}function Xs(e){return ea(e,!1,Rs,Bs,Xi)}function Vi(e){return ea(e,!0,Fs,Hs,qi)}function ea(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Ks(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function xt(e){return Ut(e)?xt(e.__v_raw):!!(e&&e.__v_isReactive)}function Ut(e){return!!(e&&e.__v_isReadonly)}function xr(e){return!!(e&&e.__v_isShallow)}function Gi(e){return xt(e)||Ut(e)}function U(e){const t=e&&e.__v_raw;return t?U(t):e}function Ji(e){return Nn(e,"__v_skip",!0),e}const ta=e=>V(e)?Qr(e):e,na=e=>V(e)?Vi(e):e;function qs(e){Xe&&_e&&(e=U(e),Bi(e.dep||(e.dep=qr())))}function Vs(e,t){e=U(e);const n=e.dep;n&&yr(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function Gs(e){return fe(e)?e.value:e}const Js={get:(e,t,n)=>Gs(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return fe(a)&&!fe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Zi(e){return xt(e)?e:new Proxy(e,Js)}class Zs{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Vr(t,()=>{this._dirty||(this._dirty=!0,Vs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=U(this);return qs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function Qs(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Oe):(r=e.get,a=e.set),new Zs(r,a,i||!a,n)}function qe(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Wn(i,t,n)}return a}function Ee(e,t,n,r){if(L(e)){const i=qe(e,t,n,r);return i&&Fi(i)&&i.catch(o=>{Wn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Ee(e[i],t,n,r));return a}function Wn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){qe(l,null,10,[e,o,s]);return}}el(e,n,a,r)}function el(e,t,n,r=!0){console.error(e)}let Bt=!1,_r=!1;const ie=[];let Te=0;const _t=[];let Le=null,at=0;const Qi=Promise.resolve();let ra=null;function tl(e){const t=ra||Qi;return e?t.then(this?e.bind(this):e):t}function nl(e){let t=Te+1,n=ie.length;for(;t<n;){const r=t+n>>>1;Ht(ie[r])<e?t=r+1:n=r}return t}function aa(e){(!ie.length||!ie.includes(e,Bt&&e.allowRecurse?Te+1:Te))&&(e.id==null?ie.push(e):ie.splice(nl(e.id),0,e),eo())}function eo(){!Bt&&!_r&&(_r=!0,ra=Qi.then(no))}function rl(e){const t=ie.indexOf(e);t>Te&&ie.splice(t,1)}function al(e){M(e)?_t.push(...e):(!Le||!Le.includes(e,e.allowRecurse?at+1:at))&&_t.push(e),eo()}function za(e,t=Bt?Te+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function to(e){if(_t.length){const t=[...new Set(_t)];if(_t.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Ht(n)-Ht(r)),at=0;at<Le.length;at++)Le[at]();Le=null,at=0}}const Ht=e=>e.id==null?1/0:e.id,il=(e,t)=>{const n=Ht(e)-Ht(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function no(e){_r=!1,Bt=!0,ie.sort(il);const t=Oe;try{for(Te=0;Te<ie.length;Te++){const n=ie[Te];n&&n.active!==!1&&qe(n,null,14)}}finally{Te=0,ie.length=0,to(),Bt=!1,ra=null,(ie.length||_t.length)&&no()}}function ol(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||q;v&&(a=n.map(w=>Q(w)?w.trim():w)),m&&(a=n.map(us))}let s,l=r[s=ar(t)]||r[s=ar(Me(t))];!l&&i&&(l=r[s=ar(Pt(t))]),l&&Ee(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Ee(c,e,6,a)}}function ro(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=ro(c,t,!0);d&&(s=!0,te(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):te(o,i),V(e)&&r.set(e,o),o)}function Kn(e,t){return!e||!$n(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Pt(t))||$(e,t))}let we=null,Xn=null;function Mn(e){const t=we;return we=e,Xn=e&&e.type.__scopeId||null,t}function ao(e){Xn=e}function io(){Xn=null}function sl(e,t=we,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&Va(-1);const i=Mn(t);let o;try{o=e(...a)}finally{Mn(i),r._d&&Va(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:w,ctx:j,inheritAttrs:N}=e;let D,k;const O=Mn(e);try{if(n.shapeFlag&4){const S=a||r;D=Ie(d.call(S,S,m,i,w,v,j)),k=l}else{const S=t;D=Ie(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),k=t.props?l:ll(l)}}catch(S){zt.length=0,Wn(S,e,1),D=oe(Yt)}let F=D;if(k&&N!==!1){const S=Object.keys(k),{shapeFlag:B}=F;S.length&&B&7&&(o&&S.some(Br)&&(k=fl(k,o)),F=At(F,k))}return n.dirs&&(F=At(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),D=F,Mn(O),D}const ll=e=>{let t;for(const n in e)(n==="class"||n==="style"||$n(n))&&((t||(t={}))[n]=e[n]);return t},fl=(e,t)=>{const n={};for(const r in e)(!Br(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function cl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Da(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Kn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Da(r,o,c):!0:!!o;return!1}function Da(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Kn(n,i))return!0}return!1}function ul({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const dl=e=>e.__isSuspense;function ml(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):al(e)}const mn={};function An(e,t,n){return oo(e,t,n)}function oo(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){var s;const l=xs()===((s=ne)==null?void 0:s.scope)?ne:null;let c,d=!1,m=!1;if(fe(e)?(c=()=>e.value,d=xr(e)):xt(e)?(c=()=>e,r=!0):M(e)?(m=!0,d=e.some(S=>xt(S)||xr(S)),c=()=>e.map(S=>{if(fe(S))return S.value;if(xt(S))return ht(S);if(L(S))return qe(S,l,2)})):L(e)?t?c=()=>qe(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Ee(e,l,3,[w])}:c=Oe,t&&r){const S=c;c=()=>ht(S())}let v,w=S=>{v=O.onStop=()=>{qe(S,l,4)}},j;if(Xt)if(w=Oe,t?n&&Ee(t,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const S=mf();j=S.__watcherHandles||(S.__watcherHandles=[])}else return Oe;let N=m?new Array(e.length).fill(mn):mn;const D=()=>{if(O.active)if(t){const S=O.run();(r||d||(m?S.some((B,re)=>Tn(B,N[re])):Tn(S,N)))&&(v&&v(),Ee(t,l,3,[S,N===mn?void 0:m&&N[0]===mn?[]:N,w]),N=S)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>ue(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>aa(D));const O=new Vr(c,k);t?n?D():N=O.run():a==="post"?ue(O.run.bind(O),l&&l.suspense):O.run();const F=()=>{O.stop(),l&&l.scope&&Hr(l.scope.effects,O)};return j&&j.push(F),F}function pl(e,t,n){const r=this.proxy,a=Q(e)?e.includes(".")?so(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=ne;Ot(this);const s=oo(a,i.bind(r),n);return o?Ot(o):ft(),s}function so(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))ht(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(Mi(e)||yt(e))e.forEach(n=>{ht(n,t)});else if(Li(e))for(const n in e)ht(e[n],t);return e}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ct(),Ee(l,n,8,[e.el,s,e,t]),St())}}function lo(e,t){return L(e)?(()=>te({name:e.name},t,{setup:e}))():e}const On=e=>!!e.type.__asyncLoader,fo=e=>e.type.__isKeepAlive;function hl(e,t){co(e,"a",t)}function gl(e,t){co(e,"da",t)}function co(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(qn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)fo(a.parent.vnode)&&vl(r,t,n,a),a=a.parent}}function vl(e,t,n,r){const a=qn(t,e,r,!0);uo(()=>{Hr(r[t],a)},n)}function qn(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ct(),Ot(n);const s=Ee(t,n,e,o);return ft(),St(),s});return r?a.unshift(i):a.push(i),i}}const Be=e=>(t,n=ne)=>(!Xt||e==="sp")&&qn(e,(...r)=>t(...r),n),bl=Be("bm"),yl=Be("m"),xl=Be("bu"),_l=Be("u"),wl=Be("bum"),uo=Be("um"),kl=Be("sp"),Al=Be("rtg"),Ol=Be("rtc");function El(e,t=ne){qn("ec",e,t)}const mo="components";function po(e,t){return Cl(mo,e,!0,t)||e}const Pl=Symbol.for("v-ndc");function Cl(e,t,n=!0,r=!1){const a=we||ne;if(a){const i=a.type;if(e===mo){const s=ff(i,!1);if(s&&(s===t||s===Me(t)||s===Hn(Me(t))))return i}const o=$a(a[e]||i[e],t)||$a(a.appContext[e],t);return!o&&r?i:o}}function $a(e,t){return e&&(e[t]||e[Me(t)]||e[Hn(Me(t))])}function Sl(e,t,n,r){let a;const i=n&&n[r];if(M(e)||Q(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const wr=e=>e?Oo(e)?fa(e)||e.proxy:wr(e.parent):null,jt=te(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>wr(e.parent),$root:e=>wr(e.root),$emit:e=>e.emit,$options:e=>ia(e),$forceUpdate:e=>e.f||(e.f=()=>aa(e.update)),$nextTick:e=>e.n||(e.n=tl.bind(e.proxy)),$watch:e=>pl.bind(e)}),sr=(e,t)=>e!==q&&!e.__isScriptSetup&&$(e,t),Il={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(sr(r,t))return o[t]=1,r[t];if(a!==q&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==q&&$(n,t))return o[t]=4,n[t];kr&&(o[t]=0)}}const d=jt[t];let m,v;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==q&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return sr(a,t)?(a[t]=n,!0):r!==q&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==q&&$(e,o)||sr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(jt,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ua(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let kr=!0;function Tl(e){const t=ia(e),n=e.proxy,r=e.ctx;kr=!1,t.beforeCreate&&Ba(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:w,updated:j,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:S,render:B,renderTracked:re,renderTriggered:ae,errorCaptured:ve,serverPrefetch:ge,expose:Fe,inheritAttrs:Tt,components:nn,directives:rn,filters:tr}=t;if(c&&Nl(c,r,null),o)for(const G in o){const Y=o[G];L(Y)&&(r[G]=Y.bind(n))}if(a){const G=a.call(n,n);V(G)&&(e.data=Qr(G))}if(kr=!0,i)for(const G in i){const Y=i[G],Qe=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Oe,an=!L(Y)&&L(Y.set)?Y.set.bind(n):Oe,et=rt({get:Qe,set:an});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>et.value,set:Pe=>et.value=Pe})}if(s)for(const G in s)ho(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{zl(Y,G[Y])})}d&&Ba(d,e,"c");function se(G,Y){M(Y)?Y.forEach(Qe=>G(Qe.bind(n))):Y&&G(Y.bind(n))}if(se(bl,m),se(yl,v),se(xl,w),se(_l,j),se(hl,N),se(gl,D),se(El,ve),se(Ol,re),se(Al,ae),se(wl,O),se(uo,S),se(kl,ge),M(Fe))if(Fe.length){const G=e.exposed||(e.exposed={});Fe.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:Qe=>n[Y]=Qe})})}else e.exposed||(e.exposed={});B&&e.render===Oe&&(e.render=B),Tt!=null&&(e.inheritAttrs=Tt),nn&&(e.components=nn),rn&&(e.directives=rn)}function Nl(e,t,n=Oe){M(e)&&(e=Ar(e));for(const r in e){const a=e[r];let i;V(a)?"default"in a?i=En(a.from||r,a.default,!0):i=En(a.from||r):i=En(a),fe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Ba(e,t,n){Ee(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ho(e,t,n,r){const a=r.includes(".")?so(n,r):()=>n[r];if(Q(e)){const i=t[e];L(i)&&An(a,i)}else if(L(e))An(a,e.bind(n));else if(V(e))if(M(e))e.forEach(i=>ho(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&An(a,i,e)}}function ia(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Fn(l,c,o,!0)),Fn(l,t,o)),V(t)&&i.set(t,l),l}function Fn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Fn(e,i,n,!0),a&&a.forEach(o=>Fn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ml[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ml={data:Ha,props:Ya,emits:Ya,methods:Rt,computed:Rt,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:Rt,directives:Rt,watch:Rl,provide:Ha,inject:Fl};function Ha(e,t){return t?e?function(){return te(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Fl(e,t){return Rt(Ar(e),Ar(t))}function Ar(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function Rt(e,t){return e?te(Object.create(null),e,t):t}function Ya(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:te(Object.create(null),Ua(e),Ua(t??{})):t}function Rl(e,t){if(!e)return t;if(!t)return e;const n=te(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function go(){return{app:null,config:{isNativeTag:is,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ll=0;function jl(e,t){return function(r,a=null){L(r)||(r=te({},r)),a!=null&&!V(a)&&(a=null);const i=go(),o=new Set;let s=!1;const l=i.app={_uid:Ll++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:pf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=oe(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,fa(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Rn=l;try{return c()}finally{Rn=null}}};return l}}let Rn=null;function zl(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function En(e,t,n=!1){const r=ne||we;if(r||Rn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Rn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Dl(e,t,n,r=!1){const a={},i={};Nn(i,Gn,1),e.propsDefaults=Object.create(null),vo(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Xs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function $l(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=U(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Kn(e.emitsOptions,v))continue;const w=t[v];if(l)if($(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const j=Me(v);a[j]=Or(l,s,j,w,e,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{vo(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Pt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Or(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m))&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function vo(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(kn(l))continue;const c=t[l];let d;a&&$(a,d=Me(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Kn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Or(a,l,m,c[m],e,!$(c,m))}}return o}function Or(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Ot(a),r=c[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Pt(n))&&(r=!0))}return r}function bo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,w]=bo(m,t,!0);te(o,v),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,bt),bt;if(M(i))for(let d=0;d<i.length;d++){const m=Me(i[d]);Wa(m)&&(o[m]=q)}else if(i)for(const d in i){const m=Me(d);if(Wa(m)){const v=i[d],w=o[m]=M(v)||L(v)?{type:v}:te({},v);if(w){const j=qa(Boolean,w.type),N=qa(String,w.type);w[0]=j>-1,w[1]=N<0||j<N,(j>-1||$(w,"default"))&&s.push(m)}}}const c=[o,s];return V(e)&&r.set(e,c),c}function Wa(e){return e[0]!=="$"}function Ka(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Xa(e,t){return Ka(e)===Ka(t)}function qa(e,t){return M(t)?t.findIndex(n=>Xa(n,e)):L(t)&&Xa(t,e)?0:-1}const yo=e=>e[0]==="_"||e==="$stable",oa=e=>M(e)?e.map(Ie):[Ie(e)],Ul=(e,t,n)=>{if(t._n)return t;const r=sl((...a)=>oa(t(...a)),n);return r._c=!1,r},xo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(yo(a))continue;const i=e[a];if(L(i))t[a]=Ul(a,i,r);else if(i!=null){const o=oa(i);t[a]=()=>o}}},_o=(e,t)=>{const n=oa(t);e.slots.default=()=>n},Bl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=U(t),Nn(t,"_",n)):xo(t,e.slots={})}else e.slots={},t&&_o(e,t);Nn(e.slots,Gn,1)},Hl=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(te(a,t),!n&&s===1&&delete a._):(i=!t.$stable,xo(t,a)),o=t}else t&&(_o(e,t),o={default:1});if(i)for(const s in a)!yo(s)&&!(s in o)&&delete a[s]};function Er(e,t,n,r,a=!1){if(M(e)){e.forEach((v,w)=>Er(v,t&&(M(t)?t[w]:t),n,r,a));return}if(On(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(Q(c)?(d[c]=null,$(m,c)&&(m[c]=null)):fe(c)&&(c.value=null)),L(l))qe(l,s,12,[o,d]);else{const v=Q(l),w=fe(l);if(v||w){const j=()=>{if(e.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?M(N)&&Hr(N,i):M(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,ue(j,n)):j()}}}const ue=ml;function Yl(e){return Wl(e)}function Wl(e,t){const n=hr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:w=Oe,insertStaticContent:j}=e,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Mt(f,u)&&(g=on(f),Pe(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:P}=u;switch(b){case Vn:D(f,u,p,g);break;case Yt:k(f,u,p,g);break;case Pn:f==null&&O(u,p,g,A);break;case xe:nn(f,u,p,g,h,x,A,y,_);break;default:P&1?B(f,u,p,g,h,x,A,y,_):P&6?rn(f,u,p,g,h,x,A,y,_):(P&64||P&128)&&b.process(f,u,p,g,h,x,A,y,_,dt)}I!=null&&h&&Er(I,f&&f.ref,x,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=j(f.children,u,p,g,f.el,f.anchor)},F=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},S=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},B=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?re(u,p,g,h,x,A,y,_):ge(f,u,h,x,A,y,_)},re=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:I,props:P,shapeFlag:T,transition:R,dirs:z}=f;if(_=f.el=o(f.type,x,P&&P.is,P),T&8?d(_,f.children):T&16&&ve(f.children,_,null,g,h,x&&I!=="foreignObject",A,y),z&&tt(f,null,g,"created"),ae(_,f,f.scopeId,A,g),P){for(const H in P)H!=="value"&&!kn(H)&&i(_,H,null,P[H],x,f.children,g,h,Re);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Se(b,g,f)}z&&tt(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;W&&R.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||W||z)&&ue(()=>{b&&Se(b,g,f),W&&R.enter(_),z&&tt(f,null,g,"mounted")},h)},ae=(f,u,p,g,h)=>{if(p&&w(f,p),g)for(let x=0;x<g.length;x++)w(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;ae(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ve=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=y?Ke(f[b]):Ie(f[b]);N(null,I,u,p,g,h,x,A,y)}},ge=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=u;_|=f.patchFlag&16;const P=f.props||q,T=u.props||q;let R;p&&nt(p,!1),(R=T.onVnodeBeforeUpdate)&&Se(R,p,u,f),I&&tt(u,f,p,"beforeUpdate"),p&&nt(p,!0);const z=h&&u.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,g,z,x):A||Y(f,u,y,null,p,g,z,x,!1),_>0){if(_&16)Tt(y,u,P,T,p,g,h);else if(_&2&&P.class!==T.class&&i(y,"class",null,T.class,h),_&4&&i(y,"style",P.style,T.style,h),_&8){const W=u.dynamicProps;for(let H=0;H<W.length;H++){const Z=W[H],be=P[Z],mt=T[Z];(mt!==be||Z==="value")&&i(y,Z,be,mt,h,f.children,p,g,Re)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Tt(y,u,P,T,p,g,h);((R=T.onVnodeUpdated)||I)&&ue(()=>{R&&Se(R,p,u,f),I&&tt(u,f,p,"updated")},g)},Fe=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],I=_.el&&(_.type===xe||!Mt(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,I,null,g,h,x,A,!0)}},Tt=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==q)for(const y in p)!kn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,Re);for(const y in g){if(kn(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,Re)}"value"in g&&i(f,"value",p.value,g.value)}},nn=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,p,g),r(I,p,g),ve(u.children,p,I,h,x,A,y,_)):P>0&&P&64&&T&&f.dynamicChildren?(Fe(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&wo(f,u,!0)):Y(f,u,p,I,h,x,A,y,_)},rn=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):tr(u,p,g,h,x,A,_):Aa(f,u,_)},tr=(f,u,p,g,h,x,A)=>{const y=f.component=rf(f,g,h);if(fo(f)&&(y.ctx.renderer=dt),af(y),y.asyncDep){if(h&&h.registerDep(y,se),!f.el){const _=y.subTree=oe(Yt);k(null,_,u,p)}return}se(y,f,u,p,h,x,A)},Aa=(f,u,p)=>{const g=u.component=f.component;if(cl(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,rl(g.update),g.update();else u.el=f.el,g.vnode=u},se=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:P,u:T,parent:R,vnode:z}=f,W=I,H;nt(f,!1),I?(I.el=z.el,G(f,I,A)):I=z,P&&ir(P),(H=I.props&&I.props.onVnodeBeforeUpdate)&&Se(H,R,I,z),nt(f,!0);const Z=or(f),be=f.subTree;f.subTree=Z,N(be,Z,m(be.el),on(be),f,h,x),I.el=Z.el,W===null&&ul(f,Z.el),T&&ue(T,h),(H=I.props&&I.props.onVnodeUpdated)&&ue(()=>Se(H,R,I,z),h)}else{let I;const{el:P,props:T}=u,{bm:R,m:z,parent:W}=f,H=On(u);if(nt(f,!1),R&&ir(R),!H&&(I=T&&T.onVnodeBeforeMount)&&Se(I,W,u),nt(f,!0),P&&rr){const Z=()=>{f.subTree=or(f),rr(P,f.subTree,f,h,null)};H?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=or(f);N(null,Z,p,g,f,h,x),u.el=Z.el}if(z&&ue(z,h),!H&&(I=T&&T.onVnodeMounted)){const Z=u;ue(()=>Se(I,W,Z),h)}(u.shapeFlag&256||W&&On(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ue(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new Vr(y,()=>aa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,nt(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,$l(f,u.props,g,p),Hl(f,u.children,p),Ct(),za(),St()},Y=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){an(b,P,p,g,h,x,A,y,_);return}else if(T&256){Qe(b,P,p,g,h,x,A,y,_);return}}R&8?(I&16&&Re(b,h,x),P!==b&&d(p,P)):I&16?R&16?an(b,P,p,g,h,x,A,y,_):Re(b,h,x,!0):(I&8&&d(p,""),R&16&&ve(P,p,g,h,x,A,y,_))},Qe=(f,u,p,g,h,x,A,y,_)=>{f=f||bt,u=u||bt;const b=f.length,I=u.length,P=Math.min(b,I);let T;for(T=0;T<P;T++){const R=u[T]=_?Ke(u[T]):Ie(u[T]);N(f[T],R,p,null,h,x,A,y,_)}b>I?Re(f,h,x,!0,!1,P):ve(u,p,g,h,x,A,y,_,P)},an=(f,u,p,g,h,x,A,y,_)=>{let b=0;const I=u.length;let P=f.length-1,T=I-1;for(;b<=P&&b<=T;){const R=f[b],z=u[b]=_?Ke(u[b]):Ie(u[b]);if(Mt(R,z))N(R,z,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=T;){const R=f[P],z=u[T]=_?Ke(u[T]):Ie(u[T]);if(Mt(R,z))N(R,z,p,null,h,x,A,y,_);else break;P--,T--}if(b>P){if(b<=T){const R=T+1,z=R<I?u[R].el:g;for(;b<=T;)N(null,u[b]=_?Ke(u[b]):Ie(u[b]),p,z,h,x,A,y,_),b++}}else if(b>T)for(;b<=P;)Pe(f[b],h,x,!0),b++;else{const R=b,z=b,W=new Map;for(b=z;b<=T;b++){const me=u[b]=_?Ke(u[b]):Ie(u[b]);me.key!=null&&W.set(me.key,b)}let H,Z=0;const be=T-z+1;let mt=!1,Pa=0;const Nt=new Array(be);for(b=0;b<be;b++)Nt[b]=0;for(b=R;b<=P;b++){const me=f[b];if(Z>=be){Pe(me,h,x,!0);continue}let Ce;if(me.key!=null)Ce=W.get(me.key);else for(H=z;H<=T;H++)if(Nt[H-z]===0&&Mt(me,u[H])){Ce=H;break}Ce===void 0?Pe(me,h,x,!0):(Nt[Ce-z]=b+1,Ce>=Pa?Pa=Ce:mt=!0,N(me,u[Ce],p,null,h,x,A,y,_),Z++)}const Ca=mt?Kl(Nt):bt;for(H=Ca.length-1,b=be-1;b>=0;b--){const me=z+b,Ce=u[me],Sa=me+1<I?u[me+1].el:g;Nt[b]===0?N(null,Ce,p,Sa,h,x,A,y,_):mt&&(H<0||b!==Ca[H]?et(Ce,p,Sa,2):H--)}}},et=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){et(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,dt);return}if(A===xe){r(x,u,p);for(let P=0;P<_.length;P++)et(_[P],u,p,g);r(f.anchor,u,p);return}if(A===Pn){F(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ue(()=>y.enter(x),h);else{const{leave:P,delayLeave:T,afterLeave:R}=y,z=()=>r(x,u,p),W=()=>{P(x,()=>{z(),R&&R()})};T?T(x,z,W):W()}else r(x,u,p)},Pe=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:P,dirs:T}=f;if(y!=null&&Er(y,null,p,f,!0),I&256){u.ctx.deactivate(f);return}const R=I&1&&T,z=!On(f);let W;if(z&&(W=A&&A.onVnodeBeforeUnmount)&&Se(W,u,f),I&6)as(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}R&&tt(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,p,h,dt,g):b&&(x!==xe||P>0&&P&64)?Re(b,u,p,!1,!0):(x===xe&&P&384||!h&&I&16)&&Re(_,u,p),g&&Oa(f)}(z&&(W=A&&A.onVnodeUnmounted)||R)&&ue(()=>{W&&Se(W,u,f),R&&tt(f,null,u,"unmounted")},p)},Oa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===xe){rs(p,g);return}if(u===Pn){S(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},rs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},as=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&ir(g),h.stop(),x&&(x.active=!1,Pe(A,f,u,p)),y&&ue(y,u),ue(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Re=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Pe(f[A],u,p,g,h)},on=f=>f.shapeFlag&6?on(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ea=(f,u,p)=>{f==null?u._vnode&&Pe(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),za(),to(),u._vnode=f},dt={p:N,um:Pe,m:et,r:Oa,mt:tr,mc:ve,pc:Y,pbc:Fe,n:on,o:e};let nr,rr;return t&&([nr,rr]=t(dt)),{render:Ea,hydrate:nr,createApp:jl(Ea,nr)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function wo(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Ke(a[i]),s.el=o.el),n||wo(o,s)),s.type===Vn&&(s.el=o.el)}}function Kl(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Xl=e=>e.__isTeleport,xe=Symbol.for("v-fgt"),Vn=Symbol.for("v-txt"),Yt=Symbol.for("v-cmt"),Pn=Symbol.for("v-stc"),zt=[];let ke=null;function wt(e=!1){zt.push(ke=e?null:[])}function ql(){zt.pop(),ke=zt[zt.length-1]||null}let Wt=1;function Va(e){Wt+=e}function ko(e){return e.dynamicChildren=Wt>0?ke||bt:null,ql(),Wt>0&&ke&&ke.push(e),e}function Kt(e,t,n,r,a,i){return ko(pe(e,t,n,r,a,i,!0))}function Vl(e,t,n,r,a){return ko(oe(e,t,n,r,a,!0))}function Pr(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const Gn="__vInternal",Ao=({key:e})=>e??null,Cn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||fe(e)||L(e)?{i:we,r:e,k:t,f:!!n}:e:null);function pe(e,t=null,n=null,r=0,a=null,i=e===xe?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ao(t),ref:t&&Cn(t),scopeId:Xn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:we};return s?(sa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Q(n)?8:16),Wt>0&&!o&&ke&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&ke.push(l),l}const oe=Gl;function Gl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Pl)&&(e=Yt),Pr(e)){const s=At(e,t,!0);return n&&sa(s,n),Wt>0&&!i&&ke&&(s.shapeFlag&6?ke[ke.indexOf(e)]=s:ke.push(s)),s.patchFlag|=-2,s}if(cf(e)&&(e=e.__vccOpts),t){t=Jl(t);let{class:s,style:l}=t;s&&!Q(s)&&(t.class=Xr(s)),V(l)&&(Gi(l)&&!M(l)&&(l=te({},l)),t.style=Kr(l))}const o=Q(e)?1:dl(e)?128:Xl(e)?64:V(e)?4:L(e)?2:0;return pe(e,t,n,r,a,o,i,!0)}function Jl(e){return e?Gi(e)||Gn in e?te({},e):e:null}function At(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?ef(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ao(s),ref:t&&t.ref?n&&a?M(a)?a.concat(Cn(t)):[a,Cn(t)]:Cn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Zl(e=" ",t=0){return oe(Vn,null,e,t)}function Ql(e,t){const n=oe(Pn,null,e);return n.staticCount=t,n}function Ie(e){return e==null||typeof e=="boolean"?oe(Yt):M(e)?oe(xe,null,e.slice()):typeof e=="object"?Ke(e):oe(Vn,null,String(e))}function Ke(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:At(e)}function sa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),sa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Gn in t)?t._ctx=we:a===3&&we&&(we.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:we},n=32):(t=String(t),r&64?(n=16,t=[Zl(t)]):n=8);e.children=t,e.shapeFlag|=n}function ef(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Xr([t.class,r.class]));else if(a==="style")t.style=Kr([t.style,r.style]);else if($n(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Se(e,t,n,r=null){Ee(e,t,7,[n,r])}const tf=go();let nf=0;function rf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||tf,i={uid:nf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,a),emitsOptions:ro(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=ol.bind(null,i),e.ce&&e.ce(i),i}let ne=null,la,pt,Ga="__VUE_INSTANCE_SETTERS__";(pt=hr()[Ga])||(pt=hr()[Ga]=[]),pt.push(e=>ne=e),la=e=>{pt.length>1?pt.forEach(t=>t(e)):pt[0](e)};const Ot=e=>{la(e),e.scope.on()},ft=()=>{ne&&ne.scope.off(),la(null)};function Oo(e){return e.vnode.shapeFlag&4}let Xt=!1;function af(e,t=!1){Xt=t;const{props:n,children:r}=e.vnode,a=Oo(e);Dl(e,n,a,t),Bl(e,r);const i=a?of(e,t):void 0;return Xt=!1,i}function of(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ji(new Proxy(e.ctx,Il));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?lf(e):null;Ot(e),Ct();const i=qe(r,e,0,[e.props,a]);if(St(),ft(),Fi(i)){if(i.then(ft,ft),t)return i.then(o=>{Ja(e,o,t)}).catch(o=>{Wn(o,e,0)});e.asyncDep=i}else Ja(e,i,t)}else Eo(e,t)}function Ja(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=Zi(t)),Eo(e,n)}let Za;function Eo(e,t,n){const r=e.type;if(!e.render){if(!t&&Za&&!r.render){const a=r.template||ia(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=te(te({isCustomElement:i,delimiters:s},o),l);r.render=Za(a,c)}}e.render=r.render||Oe}Ot(e),Ct(),Tl(e),St(),ft()}function sf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}}))}function lf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return sf(e)},slots:e.slots,emit:e.emit,expose:t}}function fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Zi(Ji(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in jt)return jt[n](e)},has(t,n){return n in t||n in jt}}))}function ff(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function cf(e){return L(e)&&"__vccOpts"in e}const rt=(e,t)=>Qs(e,t,Xt);function uf(e,t,n){const r=arguments.length;return r===2?V(t)&&!M(t)?Pr(t)?oe(e,null,[t]):oe(e,t):oe(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pr(n)&&(n=[n]),oe(e,t,n))}const df=Symbol.for("v-scx"),mf=()=>En(df),pf="3.3.1",hf="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,Qa=it&&it.createElement("template"),gf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(hf,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=Qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function vf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function bf(e,t,n){const r=e.style,a=Q(n);if(n&&!a){if(t&&!Q(t))for(const i in t)n[i]==null&&Cr(r,i,"");for(const i in n)Cr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ei=/\s*!important$/;function Cr(e,t,n){if(M(n))n.forEach(r=>Cr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=yf(e,t);ei.test(n)?e.setProperty(Pt(r),n.replace(ei,""),"important"):e[r]=n}}const ti=["Webkit","Moz","ms"],lr={};function yf(e,t){const n=lr[t];if(n)return n;let r=Me(t);if(r!=="filter"&&r in e)return lr[t]=r;r=Hn(r);for(let a=0;a<ti.length;a++){const i=ti[a]+r;if(i in e)return lr[t]=i}return t}const ni="http://www.w3.org/1999/xlink";function xf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(ni,t.slice(6,t.length)):e.setAttributeNS(ni,t,n);else{const i=vs(t);n==null||i&&!ji(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function _f(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n??"";c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=ji(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function wf(e,t,n,r){e.addEventListener(t,n,r)}function kf(e,t,n,r){e.removeEventListener(t,n,r)}function Af(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Of(t);if(r){const c=i[t]=Cf(r,a);wf(e,s,c,l)}else o&&(kf(e,s,o,l),i[t]=void 0)}}const ri=/(?:Once|Passive|Capture)$/;function Of(e){let t;if(ri.test(e)){t={};let r;for(;r=e.match(ri);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Pt(e.slice(2)),t]}let fr=0;const Ef=Promise.resolve(),Pf=()=>fr||(Ef.then(()=>fr=0),fr=Date.now());function Cf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ee(Sf(r,n.value),t,5,[r])};return n.value=e,n.attached=Pf(),n}function Sf(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ai=/^on[a-z]/,If=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?vf(e,r,a):t==="style"?bf(e,n,r):$n(t)?Br(t)||Af(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Tf(e,t,r,a))?_f(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xf(e,t,r,a))};function Tf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ai.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ai.test(t)&&Q(n)?!1:t in e}const Nf=te({patchProp:If},gf);let ii;function Mf(){return ii||(ii=Yl(Nf))}const Ff=(...e)=>{const t=Mf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Rf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Rf(e){return Q(e)?document.querySelector(e):e}const Lf={methods:{goToPage(e){window.open(e)}}};const ca=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},jf=e=>(ao("data-v-738f4928"),e=e(),io(),e),zf={class:"header"},Df=jf(()=>pe("span",null,"Teacher Sheet",-1));function $f(e,t,n,r,a,i){const o=po("font-awesome-icon");return wt(),Kt("div",zf,[Df,pe("button",{class:"button",onClick:t[0]||(t[0]=s=>i.goToPage("https://github.com/thiagoarantes/teacherSheet"))},[oe(o,{icon:"fa-brands fa-github"})])])}const Uf=ca(Lf,[["render",$f],["__scopeId","data-v-738f4928"]]),Bf={};const Hf={class:"line"},Yf=Ql('<input type="text" class="input" data-v-352126ce><button class="button" data-v-352126ce>G</button><button class="button" data-v-352126ce>V</button><button class="button" data-v-352126ce>P</button><button class="button" data-v-352126ce>F</button><input type="text" class="input" data-v-352126ce>',6),Wf=[Yf];function Kf(e,t,n,r,a,i){return wt(),Kt("div",Hf,Wf)}const Xf=ca(Bf,[["render",Kf],["__scopeId","data-v-352126ce"]]),qf={components:{SheetLine:Xf},data(){return{totalG:0,totalV:0,totalP:0,totalF:0,lines:[1,2,3,4,5]}}};const Vf=e=>(ao("data-v-573b21ca"),e=e(),io(),e),Gf={class:"sheet"},Jf={class:"points"},Zf={class:"point",title:"Grammar"},Qf={class:"point",title:"Vocabulary"},ec={class:"point",title:"Pronunciation"},tc={class:"point",title:"Fluency"},nc=Vf(()=>pe("div",{class:"title"},[pe("div",null,"Sentence"),pe("div"),pe("div",null,"Correction")],-1));function rc(e,t,n,r,a,i){const o=po("SheetLine");return wt(),Kt("div",Gf,[pe("div",Jf,[pe("div",Zf,sn(a.totalG),1),pe("div",Qf,sn(a.totalV),1),pe("div",ec,sn(a.totalP),1),pe("div",tc,sn(a.totalF),1)]),nc,(wt(!0),Kt(xe,null,Sl(a.lines,s=>(wt(),Vl(o,{key:s}))),128))])}const ac=ca(qf,[["render",rc],["__scopeId","data-v-573b21ca"]]),ic=lo({__name:"App",setup(e){return(t,n)=>(wt(),Kt(xe,null,[oe(Uf),oe(ac)],64))}});function oi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?oi(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ln(e){return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(e)}function oc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function si(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function sc(e,t,n){return t&&si(e.prototype,t),n&&si(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return fc(e)||uc(e,t)||Po(e,t)||mc()}function Qt(e){return lc(e)||cc(e)||Po(e)||dc()}function lc(e){if(Array.isArray(e))return Sr(e)}function fc(e){if(Array.isArray(e))return e}function cc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function uc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Po(e,t){if(e){if(typeof e=="string")return Sr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sr(e,t)}}function Sr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function dc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var li=function(){},da={},Co={},So=null,Io={mark:li,measure:li};try{typeof window<"u"&&(da=window),typeof document<"u"&&(Co=document),typeof MutationObserver<"u"&&(So=MutationObserver),typeof performance<"u"&&(Io=performance)}catch{}var pc=da.navigator||{},fi=pc.userAgent,ci=fi===void 0?"":fi,Ge=da,X=Co,ui=So,pn=Io;Ge.document;var He=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",To=~ci.indexOf("MSIE")||~ci.indexOf("Trident/"),hn,gn,vn,bn,yn,De="___FONT_AWESOME___",Ir=16,No="fa",Mo="svg-inline--fa",ct="data-fa-i2svg",Tr="data-fa-pseudo-element",hc="data-fa-pseudo-element-pending",ma="data-prefix",pa="data-icon",di="fontawesome-i2svg",gc="async",vc=["HTML","HEAD","STYLE","SCRIPT"],Fo=function(){try{return!0}catch{return!1}}(),K="classic",J="sharp",ha=[K,J];function en(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var qt=en((hn={},ee(hn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(hn,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),hn)),Vt=en((gn={},ee(gn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(gn,J,{solid:"fass",regular:"fasr",light:"fasl"}),gn)),Gt=en((vn={},ee(vn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(vn,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),vn)),bc=en((bn={},ee(bn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(bn,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),bn)),yc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ro="fa-layers-text",xc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_c=en((yn={},ee(yn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(yn,J,{900:"fass",400:"fasr",300:"fasl"}),yn)),Lo=[1,2,3,4,5,6,7,8,9,10],wc=Lo.concat([11,12,13,14,15,16,17,18,19,20]),kc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jt=new Set;Object.keys(Vt[K]).map(Jt.add.bind(Jt));Object.keys(Vt[J]).map(Jt.add.bind(Jt));var Ac=[].concat(ha,Qt(Jt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Lo.map(function(e){return"".concat(e,"x")})).concat(wc.map(function(e){return"w-".concat(e)})),Dt=Ge.FontAwesomeConfig||{};function Oc(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Ec(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Pc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pc.forEach(function(e){var t=ua(e,2),n=t[0],r=t[1],a=Ec(Oc(n));a!=null&&(Dt[r]=a)})}var jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:No,replacementClass:Mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Dt.familyPrefix&&(Dt.cssPrefix=Dt.familyPrefix);var Et=E(E({},jo),Dt);Et.autoReplaceSvg||(Et.observeMutations=!1);var C={};Object.keys(jo).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Et[e]=n,$t.forEach(function(r){return r(C)})},get:function(){return Et[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Et.cssPrefix=t,$t.forEach(function(n){return n(C)})},get:function(){return Et.cssPrefix}});Ge.FontAwesomeConfig=C;var $t=[];function Cc(e){return $t.push(e),function(){$t.splice($t.indexOf(e),1)}}var We=Ir,Ne={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sc(e){if(!(!e||!He)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var Ic="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Zt(){for(var e=12,t="";e-- >0;)t+=Ic[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ga(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function zo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(zo(e[n]),'" ')},"").trim()}function Jn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Ne.size||e.x!==Ne.x||e.y!==Ne.y||e.rotate!==Ne.rotate||e.flipX||e.flipY}function Nc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Mc(e){var t=e.transform,n=e.width,r=n===void 0?Ir:n,a=e.height,i=a===void 0?Ir:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&To?l+="translate(".concat(t.x/We-r/2,"em, ").concat(t.y/We-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/We,"em), calc(-50% + ").concat(t.y/We,"em)) "):l+="translate(".concat(t.x/We,"em, ").concat(t.y/We,"em) "),l+="scale(".concat(t.size/We*(t.flipX?-1:1),", ").concat(t.size/We*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Fc=`:root, :host {
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
}`;function Do(){var e=No,t=Mo,n=C.cssPrefix,r=C.replacementClass,a=Fc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var mi=!1;function cr(){C.autoAddCss&&!mi&&(Sc(Do()),mi=!0)}var Rc={mixout:function(){return{dom:{css:Do,insertCss:cr}}},hooks:function(){return{beforeDOMElementCreation:function(){cr()},beforeI2svg:function(){cr()}}}},$e=Ge||{};$e[De]||($e[De]={});$e[De].styles||($e[De].styles={});$e[De].hooks||($e[De].hooks={});$e[De].shims||($e[De].shims=[]);var Ae=$e[De],$o=[],Lc=function e(){X.removeEventListener("DOMContentLoaded",e),jn=1,$o.map(function(t){return t()})},jn=!1;He&&(jn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),jn||X.addEventListener("DOMContentLoaded",Lc));function jc(e){He&&(jn?setTimeout(e,0):$o.push(e))}function tn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?zo(e):"<".concat(t," ").concat(Tc(r),">").concat(i.map(tn).join(""),"</").concat(t,">")}function pi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var zc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},ur=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?zc(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Dc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Nr(e){var t=Dc(e);return t.length===1?t[0].toString(16):null}function $c(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function hi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Mr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=hi(t);typeof Ae.hooks.addPack=="function"&&!a?Ae.hooks.addPack(e,hi(t)):Ae.styles[e]=E(E({},Ae.styles[e]||{}),i),e==="fas"&&Mr("fa",t)}var xn,_n,wn,gt=Ae.styles,Uc=Ae.shims,Bc=(xn={},ee(xn,K,Object.values(Gt[K])),ee(xn,J,Object.values(Gt[J])),xn),ba=null,Uo={},Bo={},Ho={},Yo={},Wo={},Hc=(_n={},ee(_n,K,Object.keys(qt[K])),ee(_n,J,Object.keys(qt[J])),_n);function Yc(e){return~Ac.indexOf(e)}function Wc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!Yc(a)?a:null}var Ko=function(){var t=function(i){return ur(gt,function(o,s,l){return o[l]=ur(s,i,{}),o},{})};Uo=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Bo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Wo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in gt||C.autoFetchSvg,r=ur(Uc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Ho=r.names,Yo=r.unicodes,ba=Zn(C.styleDefault,{family:C.familyDefault})};Cc(function(e){ba=Zn(e.styleDefault,{family:C.familyDefault})});Ko();function ya(e,t){return(Uo[e]||{})[t]}function Kc(e,t){return(Bo[e]||{})[t]}function st(e,t){return(Wo[e]||{})[t]}function Xo(e){return Ho[e]||{prefix:null,iconName:null}}function Xc(e){var t=Yo[e],n=ya("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Je(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=qt[r][e],i=Vt[r][e]||Vt[r][a],o=e in Ae.styles?e:null;return i||o||null}var gi=(wn={},ee(wn,K,Object.keys(Gt[K])),ee(wn,J,Object.keys(Gt[J])),wn);function Qn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,K,"".concat(C.cssPrefix,"-").concat(K)),ee(t,J,"".concat(C.cssPrefix,"-").concat(J)),t),o=null,s=K;(e.includes(i[K])||e.some(function(c){return gi[K].includes(c)}))&&(s=K),(e.includes(i[J])||e.some(function(c){return gi[J].includes(c)}))&&(s=J);var l=e.reduce(function(c,d){var m=Wc(C.cssPrefix,d);if(gt[d]?(d=Bc[s].includes(d)?bc[s][d]:d,o=d,c.prefix=d):Hc[s].indexOf(d)>-1?(o=d,c.prefix=Zn(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[K]&&d!==i[J]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Xo(c.iconName):{},w=st(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!gt.far&&gt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(gt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Je()||"fas"),l}var qc=function(){function e(){oc(this,e),this.definitions={}}return sc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Mr(s,o[s]);var l=Gt[K][s];l&&Mr(l,o[s]),Ko()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),vi=[],vt={},kt={},Vc=Object.keys(kt);function Gc(e,t){var n=t.mixoutsTo;return vi=e,vt={},Object.keys(kt).forEach(function(r){Vc.indexOf(r)===-1&&delete kt[r]}),vi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ln(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){vt[o]||(vt[o]=[]),vt[o].push(i[o])})}r.provides&&r.provides(kt)}),n}function Fr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=vt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=vt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ue(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return kt[e]?kt[e].apply(null,t):void 0}function Rr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Je();if(t)return t=st(n,t)||t,pi(qo.definitions,n,t)||pi(Ae.styles,n,t)}var qo=new qc,Jc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ut("noAuto")},Zc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return He?(ut("beforeI2svg",t),Ue("pseudoElements2svg",t),Ue("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,jc(function(){eu({autoReplaceSvgRoot:n}),ut("watch",t)})}},Qc={icon:function(t){if(t===null)return null;if(Ln(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Zn(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(yc))){var a=Qn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Je(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Je();return{prefix:i,iconName:st(i,t)||t}}}},he={noAuto:Jc,config:C,dom:Zc,parse:Qc,library:qo,findIconDefinition:Rr,toHtml:tn},eu=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(Ae.styles).length>0||C.autoFetchSvg)&&He&&C.autoReplaceSvg&&he.dom.i2svg({node:r})};function er(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return tn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(He){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function tu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(va(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Jn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function nu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function _a(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,w=v===void 0?!1:v,j=r.found?r:n,N=j.width,D=j.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(ge){return m.classes.indexOf(ge)===-1}).filter(function(ge){return ge!==""||!!ge}).concat(m.classes).join(" "),F={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};w&&(F.attributes[ct]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||Zt())},children:[l]}),delete F.attributes.title);var B=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},S),m.styles)}),re=r.found&&n.found?Ue("generateAbstractMask",B)||{children:[],attributes:{}}:Ue("generateAbstractIcon",B)||{children:[],attributes:{}},ae=re.children,ve=re.attributes;return B.children=ae,B.attributes=ve,s?nu(B):tu(B)}function bi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ct]="");var d=E({},o.styles);va(a)&&(d.transform=Mc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Jn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function ru(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Jn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var dr=Ae.styles;function Lr(e){var t=e[0],n=e[1],r=e.slice(4),a=ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var au={found:!1,width:512,height:512};function iu(e,t){!Fo&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function jr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Je()),new Promise(function(r,a){if(Ue("missingIconAbstract"),n==="fa"){var i=Xo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&dr[t]&&dr[t][e]){var o=dr[t][e];return r(Lr(o))}iu(e,t),r(E(E({},au),{},{icon:C.showMissingIcons&&e?Ue("missingIconAbstract")||{}:{}}))})}var yi=function(){},zr=C.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:yi,measure:yi},Lt='FA "6.4.0"',ou=function(t){return zr.mark("".concat(Lt," ").concat(t," begins")),function(){return Vo(t)}},Vo=function(t){zr.mark("".concat(Lt," ").concat(t," ends")),zr.measure("".concat(Lt," ").concat(t),"".concat(Lt," ").concat(t," begins"),"".concat(Lt," ").concat(t," ends"))},wa={begin:ou,end:Vo},Sn=function(){};function xi(e){var t=e.getAttribute?e.getAttribute(ct):null;return typeof t=="string"}function su(e){var t=e.getAttribute?e.getAttribute(ma):null,n=e.getAttribute?e.getAttribute(pa):null;return t&&n}function lu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function fu(){if(C.autoReplaceSvg===!0)return In.replace;var e=In[C.autoReplaceSvg];return e||In.replace}function cu(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function uu(e){return X.createElement(e)}function Go(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?cu:uu:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Go(o,{ceFn:r}))}),a}function du(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var In={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Go(a),n)}),n.getAttribute(ct)===null&&C.keepOriginalSource){var r=X.createComment(du(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ga(n).indexOf(C.replacementClass))return In.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return tn(s)}).join(`
`);n.setAttribute(ct,""),n.innerHTML=o}};function _i(e){e()}function Jo(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=_i;C.mutateApproach===gc&&(r=Ge.requestAnimationFrame||_i),r(function(){var a=fu(),i=wa.begin("mutate");e.map(a),i(),n()})}}var ka=!1;function Zo(){ka=!0}function Dr(){ka=!1}var zn=null;function wi(e){if(ui&&C.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;zn=new ui(function(c){if(!ka){var d=Je();It(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!xi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&xi(m.target)&&~kc.indexOf(m.attributeName))if(m.attributeName==="class"&&su(m.target)){var v=Qn(ga(m.target)),w=v.prefix,j=v.iconName;m.target.setAttribute(ma,w||d),j&&m.target.setAttribute(pa,j)}else lu(m.target)&&a(m.target)})}}),He&&zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mu(){zn&&zn.disconnect()}function pu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function hu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Qn(ga(e));return a.prefix||(a.prefix=Je()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Kc(a.prefix,e.innerText)||ya(a.prefix,Nr(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function gu(e){var t=It(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||Zt()):(t["aria-hidden"]="true",t.focusable="false")),t}function vu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Ne,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ki(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hu(e),r=n.iconName,a=n.prefix,i=n.rest,o=gu(e),s=Fr("parseNodeAttributes",{},e),l=t.styleParser?pu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Ne,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var bu=Ae.styles;function Qo(e){var t=C.autoReplaceSvg==="nest"?ki(e,{styleParser:!1}):ki(e);return~t.extra.classes.indexOf(Ro)?Ue("generateLayersText",e,t):Ue("generateSvgReplacementMutation",e,t)}var Ze=new Set;ha.map(function(e){Ze.add("fa-".concat(e))});Object.keys(qt[K]).map(Ze.add.bind(Ze));Object.keys(qt[J]).map(Ze.add.bind(Ze));Ze=Qt(Ze);function Ai(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!He)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(di,"-").concat(m))},a=function(m){return n.remove("".concat(di,"-").concat(m))},i=C.autoFetchSvg?Ze:ha.map(function(d){return"fa-".concat(d)}).concat(Object.keys(bu));i.includes("fa")||i.push("fa");var o=[".".concat(Ro,":not([").concat(ct,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=It(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Qo(m);v&&d.push(v)}catch(w){Fo||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Jo(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function yu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qo(e).then(function(n){n&&Jo([n],t)})}function xu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Rr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Rr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var _u=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Ne:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,j=w===void 0?null:w,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,F=n.styles,S=F===void 0?{}:F;if(t){var B=t.prefix,re=t.iconName,ae=t.icon;return er(E({type:"icon"},t),function(){return ut("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||Zt()):(O["aria-hidden"]="true",O.focusable="false")),_a({icons:{main:Lr(ae),mask:l?Lr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:re,transform:E(E({},Ne),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:O,styles:S,classes:D}})})}},wu={mixout:function(){return{icon:xu(_u)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ai,n.nodeCallback=yu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ai(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,j){Promise.all([jr(a,s),d.iconName?jr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ua(N,2),k=D[0],O=D[1];w([n,_a({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Jn(s);l.length>0&&(a.style=l);var c;return va(o)&&(c=Ue("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},ku={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return er({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(Qt(i)).join(" ")},children:o}]})}}}},Au={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return er({type:"counter",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),ru({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(Qt(s))}})})}}}},Ou={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Ne:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,w=v===void 0?{}:v;return er({type:"text",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),bi({content:n,transform:E(E({},Ne),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(Qt(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(To){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,bi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Eu=new RegExp('"',"ug"),Oi=[1105920,1112319];function Pu(e){var t=e.replace(Eu,""),n=$c(t,0),r=n>=Oi[0]&&n<=Oi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Nr(a?t[0]:t),isSecondary:r||a}}function Ei(e,t){var n="".concat(hc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=It(e.children),o=i.filter(function(ae){return ae.getAttribute(Tr)===t})[0],s=Ge.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(xc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?J:K,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Vt[v][l[2].toLowerCase()]:_c[v][c],j=Pu(m),N=j.value,D=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=ya(w,N),F=O;if(k){var S=Xc(N);S.iconName&&S.prefix&&(O=S.iconName,w=S.prefix)}if(O&&!D&&(!o||o.getAttribute(ma)!==w||o.getAttribute(pa)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var B=vu(),re=B.extra;re.attributes[Tr]=t,jr(O,w).then(function(ae){var ve=_a(E(E({},B),{},{icons:{main:ae,mask:xa()},prefix:w,iconName:F,extra:re,watchable:!0})),ge=X.createElement("svg");t==="::before"?e.insertBefore(ge,e.firstChild):e.appendChild(ge),ge.outerHTML=ve.map(function(Fe){return tn(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Cu(e){return Promise.all([Ei(e,"::before"),Ei(e,"::after")])}function Su(e){return e.parentNode!==document.head&&!~vc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Tr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Pi(e){if(He)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(Su).map(Cu),a=wa.begin("searchPseudoElements");Zo(),Promise.all(r).then(function(){a(),Dr(),t()}).catch(function(){a(),Dr(),n()})})}var Iu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Pi,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;C.searchPseudoElements&&Pi(a)}}},Ci=!1,Tu={mixout:function(){return{dom:{unwatch:function(){Zo(),Ci=!0}}}},hooks:function(){return{bootstrap:function(){wi(Fr("mutationObserverCallbacks",{}))},noAuto:function(){mu()},watch:function(n){var r=n.observeMutationsRoot;Ci?Dr():wi(Fr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Si=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Nu={mixout:function(){return{parse:{transform:function(n){return Si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Si(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},mr={x:0,y:0,width:"100%",height:"100%"};function Ii(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Mu(e){return e.tag==="g"?e.children:[e]}var Fu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qn(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=Je()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,w=Nc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},mr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ii)}:{},D={tag:"g",attributes:E({},w.inner),children:[Ii(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(s||Zt()),F="clip-".concat(s||Zt()),S={tag:"mask",attributes:E(E({},mr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Mu(v)},S]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},mr)}),{children:r,attributes:a}}}},Ru={provides:function(t){var n=!1;Ge.matchMedia&&(n=Ge.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Lu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ju=[Rc,wu,ku,Au,Ou,Iu,Tu,Nu,Fu,Ru,Lu];Gc(ju,{mixoutsTo:he});he.noAuto;he.config;var zu=he.library;he.dom;var $r=he.parse;he.findIconDefinition;he.toHtml;var Du=he.icon;he.layer;he.text;he.counter;var $u={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Ti(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ti(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Dn(e){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dn(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Bu(e,t){if(e==null)return{};var n=Uu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var Hu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},es={exports:{}};(function(e){(function(t){var n=function(k,O,F){if(!c(O)||m(O)||v(O)||w(O)||l(O))return O;var S,B=0,re=0;if(d(O))for(S=[],re=O.length;B<re;B++)S.push(n(k,O[B],F));else{S={};for(var ae in O)Object.prototype.hasOwnProperty.call(O,ae)&&(S[k(ae,F)]=n(k,O[ae],F))}return S},r=function(k,O){O=O||{};var F=O.separator||"_",S=O.split||/(?=[A-Z])/;return k.split(S).join(F)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?k:function(S,B){return F(S,k,B)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Hu)})(es);var Yu=es.exports,Wu=["class","style"];function Ku(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Yu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Xu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function ts(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ts(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Xu(d);break;case"style":l.style=Ku(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Bu(n,Wu);return uf(e.tag,je(je(je({},t),{},{class:a.class,style:je(je({},a.style),o)},a.attrs),s),r)}var ns=!1;try{ns=!0}catch{}function qu(){if(!ns&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function pr(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function Vu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ni(e){if(e&&Dn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if($r.icon)return $r.icon(e);if(e===null)return null;if(Dn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Gu=lo({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=rt(function(){return Ni(t.icon)}),i=rt(function(){return pr("classes",Vu(t))}),o=rt(function(){return pr("transform",typeof t.transform=="string"?$r.transform(t.transform):t.transform)}),s=rt(function(){return pr("mask",Ni(t.mask))}),l=rt(function(){return Du(a.value,je(je(je(je({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});An(l,function(d){if(!d)return qu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=rt(function(){return l.value?ts(l.value.abstract[0],{},r):null});return function(){return c.value}}});zu.add($u);Ff(ic).component("font-awesome-icon",Gu).mount("#app");
