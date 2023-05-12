(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Ur(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const q={},be=[],Ot=()=>{},is=()=>!1,os=/^on[^a-z]/,$n=t=>os.test(t),Hr=t=>t.startsWith("onUpdate:"),et=Object.assign,Br=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},ss=Object.prototype.hasOwnProperty,$=(t,e)=>ss.call(t,e),M=Array.isArray,ye=t=>Un(t)==="[object Map]",Mi=t=>Un(t)==="[object Set]",L=t=>typeof t=="function",Q=t=>typeof t=="string",Yr=t=>typeof t=="symbol",V=t=>t!==null&&typeof t=="object",Fi=t=>V(t)&&L(t.then)&&L(t.catch),Ri=Object.prototype.toString,Un=t=>Ri.call(t),ls=t=>Un(t).slice(8,-1),Li=t=>Un(t)==="[object Object]",Wr=t=>Q(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,kn=Ur(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hn=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},fs=/-(\w)/g,Mt=Hn(t=>t.replace(fs,(e,n)=>n?n.toUpperCase():"")),cs=/\B([A-Z])/g,Pe=Hn(t=>t.replace(cs,"-$1").toLowerCase()),Bn=Hn(t=>t.charAt(0).toUpperCase()+t.slice(1)),ar=Hn(t=>t?`on${Bn(t)}`:""),Tn=(t,e)=>!Object.is(t,e),ir=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Nn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},us=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Ia;const hr=()=>Ia||(Ia=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Kr(t){if(M(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=Q(r)?hs(r):Kr(r);if(a)for(const i in a)e[i]=a[i]}return e}else{if(Q(t))return t;if(V(t))return t}}const ds=/;(?![^(]*\))/g,ms=/:([^]+)/,ps=new RegExp("\\/\\*.*?\\*\\/","gs");function hs(t){const e={};return t.replace(ps,"").split(ds).forEach(n=>{if(n){const r=n.split(ms);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xr(t){let e="";if(Q(t))e=t;else if(M(t))for(let n=0;n<t.length;n++){const r=Xr(t[n]);r&&(e+=r+" ")}else if(V(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const gs="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",vs=Ur(gs);function ji(t){return!!t||t===""}const sn=t=>Q(t)?t:t==null?"":M(t)||V(t)&&(t.toString===Ri||!L(t.toString))?JSON.stringify(t,zi,2):String(t),zi=(t,e)=>e&&e.__v_isRef?zi(t,e.value):ye(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Mi(e)?{[`Set(${e.size})`]:[...e.values()]}:V(e)&&!M(e)&&!Li(e)?String(e):e;let yt;class bs{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=yt,!e&&yt&&(this.index=(yt.scopes||(yt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=yt;try{return yt=this,e()}finally{yt=n}}}on(){yt=this}off(){yt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ys(t,e=yt){e&&e.active&&e.effects.push(t)}function xs(){return yt}const qr=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Di=t=>(t.w&Vt)>0,$i=t=>(t.n&Vt)>0,_s=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Vt},ws=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];Di(a)&&!$i(a)?a.delete(t):e[n++]=a,a.w&=~Vt,a.n&=~Vt}e.length=n}},gr=new WeakMap;let Fe=0,Vt=1;const vr=30;let _t;const le=Symbol(""),br=Symbol("");class Vr{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ys(this,r)}run(){if(!this.active)return this.fn();let e=_t,n=Xt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=_t,_t=this,Xt=!0,Vt=1<<++Fe,Fe<=vr?_s(this):Ta(this),this.fn()}finally{Fe<=vr&&ws(this),Vt=1<<--Fe,_t=this.parent,Xt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){_t===this?this.deferStop=!0:this.active&&(Ta(this),this.onStop&&this.onStop(),this.active=!1)}}function Ta(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xt=!0;const Ui=[];function Ce(){Ui.push(Xt),Xt=!1}function Se(){const t=Ui.pop();Xt=t===void 0?!0:t}function dt(t,e,n){if(Xt&&_t){let r=gr.get(t);r||gr.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=qr()),Hi(a)}}function Hi(t,e){let n=!1;Fe<=vr?$i(t)||(t.n|=Vt,n=!Di(t)):n=!t.has(_t),n&&(t.add(_t),_t.deps.push(t))}function zt(t,e,n,r,a,i){const o=gr.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&M(t)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),e){case"add":M(t)?Wr(n)&&s.push(o.get("length")):(s.push(o.get(le)),ye(t)&&s.push(o.get(br)));break;case"delete":M(t)||(s.push(o.get(le)),ye(t)&&s.push(o.get(br)));break;case"set":ye(t)&&s.push(o.get(le));break}if(s.length===1)s[0]&&yr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);yr(qr(l))}}function yr(t,e){const n=M(t)?t:[...t];for(const r of n)r.computed&&Na(r);for(const r of n)r.computed||Na(r)}function Na(t,e){(t!==_t||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ks=Ur("__proto__,__v_isRef,__isVue"),Bi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Yr)),As=Gr(),Os=Gr(!1,!0),Es=Gr(!0),Ma=Ps();function Ps(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)dt(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ce();const r=U(this)[e].apply(this,n);return Se(),r}}),t}function Cs(t){const e=U(this);return dt(e,"has",t),e.hasOwnProperty(t)}function Gr(t=!1,e=!1){return function(r,a,i){if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return e;if(a==="__v_raw"&&i===(t?e?Ys:qi:e?Xi:Ki).get(r))return r;const o=M(r);if(!t){if(o&&$(Ma,a))return Reflect.get(Ma,a,i);if(a==="hasOwnProperty")return Cs}const s=Reflect.get(r,a,i);return(Yr(a)?Bi.has(a):ks(a))||(t||dt(r,"get",a),e)?s:ft(s)?o&&Wr(a)?s:s.value:V(s)?t?Vi(s):Qr(s):s}}const Ss=Yi(),Is=Yi(!0);function Yi(t=!1){return function(n,r,a,i){let o=n[r];if(Ue(o)&&ft(o)&&!ft(a))return!1;if(!t&&(!xr(a)&&!Ue(a)&&(o=U(o),a=U(a)),!M(n)&&ft(o)&&!ft(a)))return o.value=a,!0;const s=M(n)&&Wr(r)?Number(r)<n.length:$(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?Tn(a,o)&&zt(n,"set",r,a):zt(n,"add",r,a)),l}}function Ts(t,e){const n=$(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&zt(t,"delete",e,void 0),r}function Ns(t,e){const n=Reflect.has(t,e);return(!Yr(e)||!Bi.has(e))&&dt(t,"has",e),n}function Ms(t){return dt(t,"iterate",M(t)?"length":le),Reflect.ownKeys(t)}const Wi={get:As,set:Ss,deleteProperty:Ts,has:Ns,ownKeys:Ms},Fs={get:Es,set(t,e){return!0},deleteProperty(t,e){return!0}},Rs=et({},Wi,{get:Os,set:Is}),Jr=t=>t,Yn=t=>Reflect.getPrototypeOf(t);function ln(t,e,n=!1,r=!1){t=t.__v_raw;const a=U(t),i=U(e);n||(e!==i&&dt(a,"get",e),dt(a,"get",i));const{has:o}=Yn(a),s=r?Jr:n?na:ea;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function fn(t,e=!1){const n=this.__v_raw,r=U(n),a=U(t);return e||(t!==a&&dt(r,"has",t),dt(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function cn(t,e=!1){return t=t.__v_raw,!e&&dt(U(t),"iterate",le),Reflect.get(t,"size",t)}function Fa(t){t=U(t);const e=U(this);return Yn(e).has.call(e,t)||(e.add(t),zt(e,"add",t,t)),this}function Ra(t,e){e=U(e);const n=U(this),{has:r,get:a}=Yn(n);let i=r.call(n,t);i||(t=U(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?Tn(e,o)&&zt(n,"set",t,e):zt(n,"add",t,e),this}function La(t){const e=U(this),{has:n,get:r}=Yn(e);let a=n.call(e,t);a||(t=U(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&zt(e,"delete",t,void 0),i}function ja(){const t=U(this),e=t.size!==0,n=t.clear();return e&&zt(t,"clear",void 0,void 0),n}function un(t,e){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=e?Jr:t?na:ea;return!t&&dt(s,"iterate",le),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function dn(t,e,n){return function(...r){const a=this.__v_raw,i=U(a),o=ye(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=a[t](...r),d=n?Jr:e?na:ea;return!e&&dt(i,"iterate",l?br:le),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Yt(t){return function(...e){return t==="delete"?!1:this}}function Ls(){const t={get(i){return ln(this,i)},get size(){return cn(this)},has:fn,add:Fa,set:Ra,delete:La,clear:ja,forEach:un(!1,!1)},e={get(i){return ln(this,i,!1,!0)},get size(){return cn(this)},has:fn,add:Fa,set:Ra,delete:La,clear:ja,forEach:un(!1,!0)},n={get(i){return ln(this,i,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:un(!0,!1)},r={get(i){return ln(this,i,!0,!0)},get size(){return cn(this,!0)},has(i){return fn.call(this,i,!0)},add:Yt("add"),set:Yt("set"),delete:Yt("delete"),clear:Yt("clear"),forEach:un(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=dn(i,!1,!1),n[i]=dn(i,!0,!1),e[i]=dn(i,!1,!0),r[i]=dn(i,!0,!0)}),[t,n,e,r]}const[js,zs,Ds,$s]=Ls();function Zr(t,e){const n=e?t?$s:Ds:t?zs:js;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Us={get:Zr(!1,!1)},Hs={get:Zr(!1,!0)},Bs={get:Zr(!0,!1)},Ki=new WeakMap,Xi=new WeakMap,qi=new WeakMap,Ys=new WeakMap;function Ws(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ks(t){return t.__v_skip||!Object.isExtensible(t)?0:Ws(ls(t))}function Qr(t){return Ue(t)?t:ta(t,!1,Wi,Us,Ki)}function Xs(t){return ta(t,!1,Rs,Hs,Xi)}function Vi(t){return ta(t,!0,Fs,Bs,qi)}function ta(t,e,n,r,a){if(!V(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Ks(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function xe(t){return Ue(t)?xe(t.__v_raw):!!(t&&t.__v_isReactive)}function Ue(t){return!!(t&&t.__v_isReadonly)}function xr(t){return!!(t&&t.__v_isShallow)}function Gi(t){return xe(t)||Ue(t)}function U(t){const e=t&&t.__v_raw;return e?U(e):t}function Ji(t){return Nn(t,"__v_skip",!0),t}const ea=t=>V(t)?Qr(t):t,na=t=>V(t)?Vi(t):t;function qs(t){Xt&&_t&&(t=U(t),Hi(t.dep||(t.dep=qr())))}function Vs(t,e){t=U(t);const n=t.dep;n&&yr(n)}function ft(t){return!!(t&&t.__v_isRef===!0)}function Gs(t){return ft(t)?t.value:t}const Js={get:(t,e,n)=>Gs(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return ft(a)&&!ft(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function Zi(t){return xe(t)?t:new Proxy(t,Js)}class Zs{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Vr(e,()=>{this._dirty||(this._dirty=!0,Vs(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=U(this);return qs(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function Qs(t,e,n=!1){let r,a;const i=L(t);return i?(r=t,a=Ot):(r=t.get,a=t.set),new Zs(r,a,i||!a,n)}function qt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Wn(i,e,n)}return a}function Et(t,e,n,r){if(L(t)){const i=qt(t,e,n,r);return i&&Fi(i)&&i.catch(o=>{Wn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(Et(t[i],e,n,r));return a}function Wn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){qt(l,null,10,[t,o,s]);return}}tl(t,n,a,r)}function tl(t,e,n,r=!0){console.error(t)}let He=!1,_r=!1;const it=[];let Tt=0;const _e=[];let Lt=null,ae=0;const Qi=Promise.resolve();let ra=null;function el(t){const e=ra||Qi;return t?e.then(this?t.bind(this):t):e}function nl(t){let e=Tt+1,n=it.length;for(;e<n;){const r=e+n>>>1;Be(it[r])<t?e=r+1:n=r}return e}function aa(t){(!it.length||!it.includes(t,He&&t.allowRecurse?Tt+1:Tt))&&(t.id==null?it.push(t):it.splice(nl(t.id),0,t),to())}function to(){!He&&!_r&&(_r=!0,ra=Qi.then(no))}function rl(t){const e=it.indexOf(t);e>Tt&&it.splice(e,1)}function al(t){M(t)?_e.push(...t):(!Lt||!Lt.includes(t,t.allowRecurse?ae+1:ae))&&_e.push(t),to()}function za(t,e=He?Tt+1:0){for(;e<it.length;e++){const n=it[e];n&&n.pre&&(it.splice(e,1),e--,n())}}function eo(t){if(_e.length){const e=[...new Set(_e)];if(_e.length=0,Lt){Lt.push(...e);return}for(Lt=e,Lt.sort((n,r)=>Be(n)-Be(r)),ae=0;ae<Lt.length;ae++)Lt[ae]();Lt=null,ae=0}}const Be=t=>t.id==null?1/0:t.id,il=(t,e)=>{const n=Be(t)-Be(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function no(t){_r=!1,He=!0,it.sort(il);const e=Ot;try{for(Tt=0;Tt<it.length;Tt++){const n=it[Tt];n&&n.active!==!1&&qt(n,null,14)}}finally{Tt=0,it.length=0,eo(),He=!1,ra=null,(it.length||_e.length)&&no()}}function ol(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||q;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||q;v&&(a=n.map(w=>Q(w)?w.trim():w)),m&&(a=n.map(us))}let s,l=r[s=ar(e)]||r[s=ar(Mt(e))];!l&&i&&(l=r[s=ar(Pe(e))]),l&&Et(l,t,6,a);const c=r[s+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,Et(c,t,6,a)}}function ro(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!L(t)){const l=c=>{const d=ro(c,e,!0);d&&(s=!0,et(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(V(t)&&r.set(t,null),null):(M(i)?i.forEach(l=>o[l]=null):et(o,i),V(t)&&r.set(t,o),o)}function Kn(t,e){return!t||!$n(e)?!1:(e=e.slice(2).replace(/Once$/,""),$(t,e[0].toLowerCase()+e.slice(1))||$(t,Pe(e))||$(t,e))}let wt=null,Xn=null;function Mn(t){const e=wt;return wt=t,Xn=t&&t.type.__scopeId||null,e}function ao(t){Xn=t}function io(){Xn=null}function sl(t,e=wt,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&Va(-1);const i=Mn(e);let o;try{o=t(...a)}finally{Mn(i),r._d&&Va(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:w,ctx:j,inheritAttrs:N}=t;let D,k;const O=Mn(t);try{if(n.shapeFlag&4){const S=a||r;D=It(d.call(S,S,m,i,w,v,j)),k=l}else{const S=e;D=It(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),k=e.props?l:ll(l)}}catch(S){ze.length=0,Wn(S,t,1),D=ot(Ye)}let F=D;if(k&&N!==!1){const S=Object.keys(k),{shapeFlag:H}=F;S.length&&H&7&&(o&&S.some(Hr)&&(k=fl(k,o)),F=Ae(F,k))}return n.dirs&&(F=Ae(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),D=F,Mn(O),D}const ll=t=>{let e;for(const n in t)(n==="class"||n==="style"||$n(n))&&((e||(e={}))[n]=t[n]);return e},fl=(t,e)=>{const n={};for(const r in t)(!Hr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function cl(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Da(r,o,c):!!o;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Kn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Da(r,o,c):!0:!!o;return!1}function Da(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Kn(n,i))return!0}return!1}function ul({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const dl=t=>t.__isSuspense;function ml(t,e){e&&e.pendingBranch?M(t)?e.effects.push(...t):e.effects.push(t):al(t)}const mn={};function An(t,e,n){return oo(t,e,n)}function oo(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=q){var s;const l=xs()===((s=nt)==null?void 0:s.scope)?nt:null;let c,d=!1,m=!1;if(ft(t)?(c=()=>t.value,d=xr(t)):xe(t)?(c=()=>t,r=!0):M(t)?(m=!0,d=t.some(S=>xe(S)||xr(S)),c=()=>t.map(S=>{if(ft(S))return S.value;if(xe(S))return he(S);if(L(S))return qt(S,l,2)})):L(t)?e?c=()=>qt(t,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Et(t,l,3,[w])}:c=Ot,e&&r){const S=c;c=()=>he(S())}let v,w=S=>{v=O.onStop=()=>{qt(S,l,4)}},j;if(Xe)if(w=Ot,e?n&&Et(e,l,3,[c(),m?[]:void 0,w]):c(),a==="sync"){const S=mf();j=S.__watcherHandles||(S.__watcherHandles=[])}else return Ot;let N=m?new Array(t.length).fill(mn):mn;const D=()=>{if(O.active)if(e){const S=O.run();(r||d||(m?S.some((H,rt)=>Tn(H,N[rt])):Tn(S,N)))&&(v&&v(),Et(e,l,3,[S,N===mn?void 0:m&&N[0]===mn?[]:N,w]),N=S)}else O.run()};D.allowRecurse=!!e;let k;a==="sync"?k=D:a==="post"?k=()=>ut(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>aa(D));const O=new Vr(c,k);e?n?D():N=O.run():a==="post"?ut(O.run.bind(O),l&&l.suspense):O.run();const F=()=>{O.stop(),l&&l.scope&&Br(l.scope.effects,O)};return j&&j.push(F),F}function pl(t,e,n){const r=this.proxy,a=Q(t)?t.includes(".")?so(r,t):()=>r[t]:t.bind(r,r);let i;L(e)?i=e:(i=e.handler,n=e);const o=nt;Oe(this);const s=oo(a,i.bind(r),n);return o?Oe(o):fe(),s}function so(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function he(t,e){if(!V(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),ft(t))he(t.value,e);else if(M(t))for(let n=0;n<t.length;n++)he(t[n],e);else if(Mi(t)||ye(t))t.forEach(n=>{he(n,e)});else if(Li(t))for(const n in t)he(t[n],e);return t}function ee(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ce(),Et(l,n,8,[t.el,s,t,e]),Se())}}function lo(t,e){return L(t)?(()=>et({name:t.name},e,{setup:t}))():t}const On=t=>!!t.type.__asyncLoader,fo=t=>t.type.__isKeepAlive;function hl(t,e){co(t,"a",e)}function gl(t,e){co(t,"da",e)}function co(t,e,n=nt){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(qn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)fo(a.parent.vnode)&&vl(r,e,n,a),a=a.parent}}function vl(t,e,n,r){const a=qn(e,t,r,!0);uo(()=>{Br(r[e],a)},n)}function qn(t,e,n=nt,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ce(),Oe(n);const s=Et(e,n,t,o);return fe(),Se(),s});return r?a.unshift(i):a.push(i),i}}const Ht=t=>(e,n=nt)=>(!Xe||t==="sp")&&qn(t,(...r)=>e(...r),n),bl=Ht("bm"),yl=Ht("m"),xl=Ht("bu"),_l=Ht("u"),wl=Ht("bum"),uo=Ht("um"),kl=Ht("sp"),Al=Ht("rtg"),Ol=Ht("rtc");function El(t,e=nt){qn("ec",t,e)}const mo="components";function po(t,e){return Cl(mo,t,!0,e)||t}const Pl=Symbol.for("v-ndc");function Cl(t,e,n=!0,r=!1){const a=wt||nt;if(a){const i=a.type;if(t===mo){const s=ff(i,!1);if(s&&(s===e||s===Mt(e)||s===Bn(Mt(e))))return i}const o=$a(a[t]||i[t],e)||$a(a.appContext[t],e);return!o&&r?i:o}}function $a(t,e){return t&&(t[e]||t[Mt(e)]||t[Bn(Mt(e))])}function Sl(t,e,n,r){let a;const i=n&&n[r];if(M(t)||Q(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(V(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=e(t[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const wr=t=>t?Oo(t)?fa(t)||t.proxy:wr(t.parent):null,je=et(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wr(t.parent),$root:t=>wr(t.root),$emit:t=>t.emit,$options:t=>ia(t),$forceUpdate:t=>t.f||(t.f=()=>aa(t.update)),$nextTick:t=>t.n||(t.n=el.bind(t.proxy)),$watch:t=>pl.bind(t)}),sr=(t,e)=>t!==q&&!t.__isScriptSetup&&$(t,e),Il={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let c;if(e[0]!=="$"){const w=o[e];if(w!==void 0)switch(w){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(sr(r,e))return o[e]=1,r[e];if(a!==q&&$(a,e))return o[e]=2,a[e];if((c=t.propsOptions[0])&&$(c,e))return o[e]=3,i[e];if(n!==q&&$(n,e))return o[e]=4,n[e];kr&&(o[e]=0)}}const d=je[e];let m,v;if(d)return e==="$attrs"&&dt(t,"get",e),d(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==q&&$(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,$(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return sr(a,e)?(a[e]=n,!0):r!==q&&$(r,e)?(r[e]=n,!0):$(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==q&&$(t,o)||sr(e,o)||(s=i[0])&&$(s,o)||$(r,o)||$(je,o)||$(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:$(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Ua(t){return M(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let kr=!0;function Tl(t){const e=ia(t),n=t.proxy,r=t.ctx;kr=!1,e.beforeCreate&&Ha(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:w,updated:j,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:S,render:H,renderTracked:rt,renderTriggered:at,errorCaptured:vt,serverPrefetch:gt,expose:Ft,inheritAttrs:Te,components:nn,directives:rn,filters:er}=e;if(c&&Nl(c,r,null),o)for(const G in o){const Y=o[G];L(Y)&&(r[G]=Y.bind(n))}if(a){const G=a.call(n,n);V(G)&&(t.data=Qr(G))}if(kr=!0,i)for(const G in i){const Y=i[G],Qt=L(Y)?Y.bind(n,n):L(Y.get)?Y.get.bind(n,n):Ot,an=!L(Y)&&L(Y.set)?Y.set.bind(n):Ot,te=re({get:Qt,set:an});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>te.value,set:Pt=>te.value=Pt})}if(s)for(const G in s)ho(s[G],r,n,G);if(l){const G=L(l)?l.call(n):l;Reflect.ownKeys(G).forEach(Y=>{zl(Y,G[Y])})}d&&Ha(d,t,"c");function st(G,Y){M(Y)?Y.forEach(Qt=>G(Qt.bind(n))):Y&&G(Y.bind(n))}if(st(bl,m),st(yl,v),st(xl,w),st(_l,j),st(hl,N),st(gl,D),st(El,vt),st(Ol,rt),st(Al,at),st(wl,O),st(uo,S),st(kl,gt),M(Ft))if(Ft.length){const G=t.exposed||(t.exposed={});Ft.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:Qt=>n[Y]=Qt})})}else t.exposed||(t.exposed={});H&&t.render===Ot&&(t.render=H),Te!=null&&(t.inheritAttrs=Te),nn&&(t.components=nn),rn&&(t.directives=rn)}function Nl(t,e,n=Ot){M(t)&&(t=Ar(t));for(const r in t){const a=t[r];let i;V(a)?"default"in a?i=En(a.from||r,a.default,!0):i=En(a.from||r):i=En(a),ft(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ha(t,e,n){Et(M(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function ho(t,e,n,r){const a=r.includes(".")?so(n,r):()=>n[r];if(Q(t)){const i=e[t];L(i)&&An(a,i)}else if(L(t))An(a,t.bind(n));else if(V(t))if(M(t))t.forEach(i=>ho(i,e,n,r));else{const i=L(t.handler)?t.handler.bind(n):e[t.handler];L(i)&&An(a,i,t)}}function ia(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(c=>Fn(l,c,o,!0)),Fn(l,e,o)),V(e)&&i.set(e,l),l}function Fn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&Fn(t,i,n,!0),a&&a.forEach(o=>Fn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Ml[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Ml={data:Ba,props:Ya,emits:Ya,methods:Re,computed:Re,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:Re,directives:Re,watch:Rl,provide:Ba,inject:Fl};function Ba(t,e){return e?t?function(){return et(L(t)?t.call(this,this):t,L(e)?e.call(this,this):e)}:e:t}function Fl(t,e){return Re(Ar(t),Ar(e))}function Ar(t){if(M(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function Re(t,e){return t?et(Object.create(null),t,e):e}function Ya(t,e){return t?M(t)&&M(e)?[...new Set([...t,...e])]:et(Object.create(null),Ua(t),Ua(e??{})):e}function Rl(t,e){if(!t)return e;if(!e)return t;const n=et(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function go(){return{app:null,config:{isNativeTag:is,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ll=0;function jl(t,e){return function(r,a=null){L(r)||(r=et({},r)),a!=null&&!V(a)&&(a=null);const i=go(),o=new Set;let s=!1;const l=i.app={_uid:Ll++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:pf,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ot(r,a);return v.appContext=i,d&&e?e(v,c):t(v,c,m),s=!0,l._container=c,c.__vue_app__=l,fa(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Rn=l;try{return c()}finally{Rn=null}}};return l}}let Rn=null;function zl(t,e){if(nt){let n=nt.provides;const r=nt.parent&&nt.parent.provides;r===n&&(n=nt.provides=Object.create(r)),n[t]=e}}function En(t,e,n=!1){const r=nt||wt;if(r||Rn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Rn._context.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&L(e)?e.call(r&&r.proxy):e}}function Dl(t,e,n,r=!1){const a={},i={};Nn(i,Gn,1),t.propsDefaults=Object.create(null),vo(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Xs(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function $l(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=U(a),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Kn(t.emitsOptions,v))continue;const w=e[v];if(l)if($(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const j=Mt(v);a[j]=Or(l,s,j,w,t,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{vo(t,e,a,i)&&(c=!0);let d;for(const m in s)(!e||!$(e,m)&&((d=Pe(m))===m||!$(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Or(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!$(e,m))&&(delete i[m],c=!0)}c&&zt(t,"set","$attrs")}function vo(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(kn(l))continue;const c=e[l];let d;a&&$(a,d=Mt(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Kn(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=U(n),c=s||q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Or(a,l,m,c[m],t,!$(c,m))}}return o}function Or(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Oe(a),r=c[n]=l.call(null,e),fe())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Pe(n))&&(r=!0))}return r}function bo(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!L(t)){const d=m=>{l=!0;const[v,w]=bo(m,e,!0);et(o,v),w&&s.push(...w)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return V(t)&&r.set(t,be),be;if(M(i))for(let d=0;d<i.length;d++){const m=Mt(i[d]);Wa(m)&&(o[m]=q)}else if(i)for(const d in i){const m=Mt(d);if(Wa(m)){const v=i[d],w=o[m]=M(v)||L(v)?{type:v}:et({},v);if(w){const j=qa(Boolean,w.type),N=qa(String,w.type);w[0]=j>-1,w[1]=N<0||j<N,(j>-1||$(w,"default"))&&s.push(m)}}}const c=[o,s];return V(t)&&r.set(t,c),c}function Wa(t){return t[0]!=="$"}function Ka(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function Xa(t,e){return Ka(t)===Ka(e)}function qa(t,e){return M(e)?e.findIndex(n=>Xa(n,t)):L(e)&&Xa(e,t)?0:-1}const yo=t=>t[0]==="_"||t==="$stable",oa=t=>M(t)?t.map(It):[It(t)],Ul=(t,e,n)=>{if(e._n)return e;const r=sl((...a)=>oa(e(...a)),n);return r._c=!1,r},xo=(t,e,n)=>{const r=t._ctx;for(const a in t){if(yo(a))continue;const i=t[a];if(L(i))e[a]=Ul(a,i,r);else if(i!=null){const o=oa(i);e[a]=()=>o}}},_o=(t,e)=>{const n=oa(e);t.slots.default=()=>n},Hl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=U(e),Nn(e,"_",n)):xo(e,t.slots={})}else t.slots={},e&&_o(t,e);Nn(t.slots,Gn,1)},Bl=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=q;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(et(a,e),!n&&s===1&&delete a._):(i=!e.$stable,xo(e,a)),o=e}else e&&(_o(t,e),o={default:1});if(i)for(const s in a)!yo(s)&&!(s in o)&&delete a[s]};function Er(t,e,n,r,a=!1){if(M(t)){t.forEach((v,w)=>Er(v,e&&(M(e)?e[w]:e),n,r,a));return}if(On(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,c=e&&e.r,d=s.refs===q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(Q(c)?(d[c]=null,$(m,c)&&(m[c]=null)):ft(c)&&(c.value=null)),L(l))qt(l,s,12,[o,d]);else{const v=Q(l),w=ft(l);if(v||w){const j=()=>{if(t.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?M(N)&&Br(N,i):M(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):w&&(l.value=o,t.k&&(d[t.k]=o))};o?(j.id=-1,ut(j,n)):j()}}}const ut=ml;function Yl(t){return Wl(t)}function Wl(t,e){const n=hr();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:w=Ot,insertStaticContent:j}=t,N=(f,u,p,g=null,h=null,x=null,A=!1,y=null,_=!!u.dynamicChildren)=>{if(f===u)return;f&&!Me(f,u)&&(g=on(f),Pt(f,h,x,!0),f=null),u.patchFlag===-2&&(_=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:P}=u;switch(b){case Vn:D(f,u,p,g);break;case Ye:k(f,u,p,g);break;case Pn:f==null&&O(u,p,g,A);break;case xt:nn(f,u,p,g,h,x,A,y,_);break;default:P&1?H(f,u,p,g,h,x,A,y,_):P&6?rn(f,u,p,g,h,x,A,y,_):(P&64||P&128)&&b.process(f,u,p,g,h,x,A,y,_,de)}I!=null&&h&&Er(I,f&&f.ref,x,u||f,!u)},D=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},k=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},O=(f,u,p,g)=>{[f.el,f.anchor]=j(f.children,u,p,g,f.el,f.anchor)},F=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},S=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},H=(f,u,p,g,h,x,A,y,_)=>{A=A||u.type==="svg",f==null?rt(u,p,g,h,x,A,y,_):gt(f,u,h,x,A,y,_)},rt=(f,u,p,g,h,x,A,y)=>{let _,b;const{type:I,props:P,shapeFlag:T,transition:R,dirs:z}=f;if(_=f.el=o(f.type,x,P&&P.is,P),T&8?d(_,f.children):T&16&&vt(f.children,_,null,g,h,x&&I!=="foreignObject",A,y),z&&ee(f,null,g,"created"),at(_,f,f.scopeId,A,g),P){for(const B in P)B!=="value"&&!kn(B)&&i(_,B,null,P[B],x,f.children,g,h,Rt);"value"in P&&i(_,"value",null,P.value),(b=P.onVnodeBeforeMount)&&St(b,g,f)}z&&ee(f,null,g,"beforeMount");const W=(!h||h&&!h.pendingBranch)&&R&&!R.persisted;W&&R.beforeEnter(_),r(_,u,p),((b=P&&P.onVnodeMounted)||W||z)&&ut(()=>{b&&St(b,g,f),W&&R.enter(_),z&&ee(f,null,g,"mounted")},h)},at=(f,u,p,g,h)=>{if(p&&w(f,p),g)for(let x=0;x<g.length;x++)w(f,g[x]);if(h){let x=h.subTree;if(u===x){const A=h.vnode;at(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},vt=(f,u,p,g,h,x,A,y,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=y?Kt(f[b]):It(f[b]);N(null,I,u,p,g,h,x,A,y)}},gt=(f,u,p,g,h,x,A)=>{const y=u.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=u;_|=f.patchFlag&16;const P=f.props||q,T=u.props||q;let R;p&&ne(p,!1),(R=T.onVnodeBeforeUpdate)&&St(R,p,u,f),I&&ee(u,f,p,"beforeUpdate"),p&&ne(p,!0);const z=h&&u.type!=="foreignObject";if(b?Ft(f.dynamicChildren,b,y,p,g,z,x):A||Y(f,u,y,null,p,g,z,x,!1),_>0){if(_&16)Te(y,u,P,T,p,g,h);else if(_&2&&P.class!==T.class&&i(y,"class",null,T.class,h),_&4&&i(y,"style",P.style,T.style,h),_&8){const W=u.dynamicProps;for(let B=0;B<W.length;B++){const Z=W[B],bt=P[Z],me=T[Z];(me!==bt||Z==="value")&&i(y,Z,bt,me,h,f.children,p,g,Rt)}}_&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&Te(y,u,P,T,p,g,h);((R=T.onVnodeUpdated)||I)&&ut(()=>{R&&St(R,p,u,f),I&&ee(u,f,p,"updated")},g)},Ft=(f,u,p,g,h,x,A)=>{for(let y=0;y<u.length;y++){const _=f[y],b=u[y],I=_.el&&(_.type===xt||!Me(_,b)||_.shapeFlag&70)?m(_.el):p;N(_,b,I,null,g,h,x,A,!0)}},Te=(f,u,p,g,h,x,A)=>{if(p!==g){if(p!==q)for(const y in p)!kn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,x,Rt);for(const y in g){if(kn(y))continue;const _=g[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,A,u.children,h,x,Rt)}"value"in g&&i(f,"value",p.value,g.value)}},nn=(f,u,p,g,h,x,A,y,_)=>{const b=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,p,g),r(I,p,g),vt(u.children,p,I,h,x,A,y,_)):P>0&&P&64&&T&&f.dynamicChildren?(Ft(f.dynamicChildren,T,p,h,x,A,y),(u.key!=null||h&&u===h.subTree)&&wo(f,u,!0)):Y(f,u,p,I,h,x,A,y,_)},rn=(f,u,p,g,h,x,A,y,_)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,_):er(u,p,g,h,x,A,_):Aa(f,u,_)},er=(f,u,p,g,h,x,A)=>{const y=f.component=rf(f,g,h);if(fo(f)&&(y.ctx.renderer=de),af(y),y.asyncDep){if(h&&h.registerDep(y,st),!f.el){const _=y.subTree=ot(Ye);k(null,_,u,p)}return}st(y,f,u,p,h,x,A)},Aa=(f,u,p)=>{const g=u.component=f.component;if(cl(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,rl(g.update),g.update();else u.el=f.el,g.vnode=u},st=(f,u,p,g,h,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:P,u:T,parent:R,vnode:z}=f,W=I,B;ne(f,!1),I?(I.el=z.el,G(f,I,A)):I=z,P&&ir(P),(B=I.props&&I.props.onVnodeBeforeUpdate)&&St(B,R,I,z),ne(f,!0);const Z=or(f),bt=f.subTree;f.subTree=Z,N(bt,Z,m(bt.el),on(bt),f,h,x),I.el=Z.el,W===null&&ul(f,Z.el),T&&ut(T,h),(B=I.props&&I.props.onVnodeUpdated)&&ut(()=>St(B,R,I,z),h)}else{let I;const{el:P,props:T}=u,{bm:R,m:z,parent:W}=f,B=On(u);if(ne(f,!1),R&&ir(R),!B&&(I=T&&T.onVnodeBeforeMount)&&St(I,W,u),ne(f,!0),P&&rr){const Z=()=>{f.subTree=or(f),rr(P,f.subTree,f,h,null)};B?u.type.__asyncLoader().then(()=>!f.isUnmounted&&Z()):Z()}else{const Z=f.subTree=or(f);N(null,Z,p,g,f,h,x),u.el=Z.el}if(z&&ut(z,h),!B&&(I=T&&T.onVnodeMounted)){const Z=u;ut(()=>St(I,W,Z),h)}(u.shapeFlag&256||W&&On(W.vnode)&&W.vnode.shapeFlag&256)&&f.a&&ut(f.a,h),f.isMounted=!0,u=p=g=null}},_=f.effect=new Vr(y,()=>aa(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,ne(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,$l(f,u.props,g,p),Bl(f,u.children,p),Ce(),za(),Se()},Y=(f,u,p,g,h,x,A,y,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){an(b,P,p,g,h,x,A,y,_);return}else if(T&256){Qt(b,P,p,g,h,x,A,y,_);return}}R&8?(I&16&&Rt(b,h,x),P!==b&&d(p,P)):I&16?R&16?an(b,P,p,g,h,x,A,y,_):Rt(b,h,x,!0):(I&8&&d(p,""),R&16&&vt(P,p,g,h,x,A,y,_))},Qt=(f,u,p,g,h,x,A,y,_)=>{f=f||be,u=u||be;const b=f.length,I=u.length,P=Math.min(b,I);let T;for(T=0;T<P;T++){const R=u[T]=_?Kt(u[T]):It(u[T]);N(f[T],R,p,null,h,x,A,y,_)}b>I?Rt(f,h,x,!0,!1,P):vt(u,p,g,h,x,A,y,_,P)},an=(f,u,p,g,h,x,A,y,_)=>{let b=0;const I=u.length;let P=f.length-1,T=I-1;for(;b<=P&&b<=T;){const R=f[b],z=u[b]=_?Kt(u[b]):It(u[b]);if(Me(R,z))N(R,z,p,null,h,x,A,y,_);else break;b++}for(;b<=P&&b<=T;){const R=f[P],z=u[T]=_?Kt(u[T]):It(u[T]);if(Me(R,z))N(R,z,p,null,h,x,A,y,_);else break;P--,T--}if(b>P){if(b<=T){const R=T+1,z=R<I?u[R].el:g;for(;b<=T;)N(null,u[b]=_?Kt(u[b]):It(u[b]),p,z,h,x,A,y,_),b++}}else if(b>T)for(;b<=P;)Pt(f[b],h,x,!0),b++;else{const R=b,z=b,W=new Map;for(b=z;b<=T;b++){const mt=u[b]=_?Kt(u[b]):It(u[b]);mt.key!=null&&W.set(mt.key,b)}let B,Z=0;const bt=T-z+1;let me=!1,Pa=0;const Ne=new Array(bt);for(b=0;b<bt;b++)Ne[b]=0;for(b=R;b<=P;b++){const mt=f[b];if(Z>=bt){Pt(mt,h,x,!0);continue}let Ct;if(mt.key!=null)Ct=W.get(mt.key);else for(B=z;B<=T;B++)if(Ne[B-z]===0&&Me(mt,u[B])){Ct=B;break}Ct===void 0?Pt(mt,h,x,!0):(Ne[Ct-z]=b+1,Ct>=Pa?Pa=Ct:me=!0,N(mt,u[Ct],p,null,h,x,A,y,_),Z++)}const Ca=me?Kl(Ne):be;for(B=Ca.length-1,b=bt-1;b>=0;b--){const mt=z+b,Ct=u[mt],Sa=mt+1<I?u[mt+1].el:g;Ne[b]===0?N(null,Ct,p,Sa,h,x,A,y,_):me&&(B<0||b!==Ca[B]?te(Ct,p,Sa,2):B--)}}},te=(f,u,p,g,h=null)=>{const{el:x,type:A,transition:y,children:_,shapeFlag:b}=f;if(b&6){te(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,de);return}if(A===xt){r(x,u,p);for(let P=0;P<_.length;P++)te(_[P],u,p,g);r(f.anchor,u,p);return}if(A===Pn){F(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(x),r(x,u,p),ut(()=>y.enter(x),h);else{const{leave:P,delayLeave:T,afterLeave:R}=y,z=()=>r(x,u,p),W=()=>{P(x,()=>{z(),R&&R()})};T?T(x,z,W):W()}else r(x,u,p)},Pt=(f,u,p,g=!1,h=!1)=>{const{type:x,props:A,ref:y,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:P,dirs:T}=f;if(y!=null&&Er(y,null,p,f,!0),I&256){u.ctx.deactivate(f);return}const R=I&1&&T,z=!On(f);let W;if(z&&(W=A&&A.onVnodeBeforeUnmount)&&St(W,u,f),I&6)as(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}R&&ee(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,p,h,de,g):b&&(x!==xt||P>0&&P&64)?Rt(b,u,p,!1,!0):(x===xt&&P&384||!h&&I&16)&&Rt(_,u,p),g&&Oa(f)}(z&&(W=A&&A.onVnodeUnmounted)||R)&&ut(()=>{W&&St(W,u,f),R&&ee(f,null,u,"unmounted")},p)},Oa=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===xt){rs(p,g);return}if(u===Pn){S(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,_=()=>A(p,x);y?y(f.el,x,_):_()}else x()},rs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},as=(f,u,p)=>{const{bum:g,scope:h,update:x,subTree:A,um:y}=f;g&&ir(g),h.stop(),x&&(x.active=!1,Pt(A,f,u,p)),y&&ut(y,u),ut(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Rt=(f,u,p,g=!1,h=!1,x=0)=>{for(let A=x;A<f.length;A++)Pt(f[A],u,p,g,h)},on=f=>f.shapeFlag&6?on(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ea=(f,u,p)=>{f==null?u._vnode&&Pt(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),za(),eo(),u._vnode=f},de={p:N,um:Pt,m:te,r:Oa,mt:er,mc:vt,pc:Y,pbc:Ft,n:on,o:t};let nr,rr;return e&&([nr,rr]=e(de)),{render:Ea,hydrate:nr,createApp:jl(Ea,nr)}}function ne({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function wo(t,e,n=!1){const r=t.children,a=e.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Kt(a[i]),s.el=o.el),n||wo(o,s)),s.type===Vn&&(s.el=o.el)}}function Kl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(a=n[n.length-1],t[a]<c){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<c?i=s+1:o=s;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Xl=t=>t.__isTeleport,xt=Symbol.for("v-fgt"),Vn=Symbol.for("v-txt"),Ye=Symbol.for("v-cmt"),Pn=Symbol.for("v-stc"),ze=[];let kt=null;function we(t=!1){ze.push(kt=t?null:[])}function ql(){ze.pop(),kt=ze[ze.length-1]||null}let We=1;function Va(t){We+=t}function ko(t){return t.dynamicChildren=We>0?kt||be:null,ql(),We>0&&kt&&kt.push(t),t}function Ke(t,e,n,r,a,i){return ko(pt(t,e,n,r,a,i,!0))}function Vl(t,e,n,r,a){return ko(ot(t,e,n,r,a,!0))}function Pr(t){return t?t.__v_isVNode===!0:!1}function Me(t,e){return t.type===e.type&&t.key===e.key}const Gn="__vInternal",Ao=({key:t})=>t??null,Cn=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Q(t)||ft(t)||L(t)?{i:wt,r:t,k:e,f:!!n}:t:null);function pt(t,e=null,n=null,r=0,a=null,i=t===xt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ao(e),ref:e&&Cn(e),scopeId:Xn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:wt};return s?(sa(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Q(n)?8:16),We>0&&!o&&kt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&kt.push(l),l}const ot=Gl;function Gl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===Pl)&&(t=Ye),Pr(t)){const s=Ae(t,e,!0);return n&&sa(s,n),We>0&&!i&&kt&&(s.shapeFlag&6?kt[kt.indexOf(t)]=s:kt.push(s)),s.patchFlag|=-2,s}if(cf(t)&&(t=t.__vccOpts),e){e=Jl(e);let{class:s,style:l}=e;s&&!Q(s)&&(e.class=Xr(s)),V(l)&&(Gi(l)&&!M(l)&&(l=et({},l)),e.style=Kr(l))}const o=Q(t)?1:dl(t)?128:Xl(t)?64:V(t)?4:L(t)?2:0;return pt(t,e,n,r,a,o,i,!0)}function Jl(t){return t?Gi(t)||Gn in t?et({},t):t:null}function Ae(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?tf(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&Ao(s),ref:e&&e.ref?n&&a?M(a)?a.concat(Cn(e)):[a,Cn(e)]:Cn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==xt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ae(t.ssContent),ssFallback:t.ssFallback&&Ae(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Zl(t=" ",e=0){return ot(Vn,null,t,e)}function Ql(t,e){const n=ot(Pn,null,t);return n.staticCount=e,n}function It(t){return t==null||typeof t=="boolean"?ot(Ye):M(t)?ot(xt,null,t.slice()):typeof t=="object"?Kt(t):ot(Vn,null,String(t))}function Kt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ae(t)}function sa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(M(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),sa(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Gn in e)?e._ctx=wt:a===3&&wt&&(wt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else L(e)?(e={default:e,_ctx:wt},n=32):(e=String(e),r&64?(n=16,e=[Zl(e)]):n=8);t.children=e,t.shapeFlag|=n}function tf(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=Xr([e.class,r.class]));else if(a==="style")e.style=Kr([e.style,r.style]);else if($n(a)){const i=e[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function St(t,e,n,r=null){Et(t,e,7,[n,r])}const ef=go();let nf=0;function rf(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||ef,i={uid:nf++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new bs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:bo(r,a),emitsOptions:ro(r,a),emit:null,emitted:null,propsDefaults:q,inheritAttrs:r.inheritAttrs,ctx:q,data:q,props:q,attrs:q,slots:q,refs:q,setupState:q,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=ol.bind(null,i),t.ce&&t.ce(i),i}let nt=null,la,pe,Ga="__VUE_INSTANCE_SETTERS__";(pe=hr()[Ga])||(pe=hr()[Ga]=[]),pe.push(t=>nt=t),la=t=>{pe.length>1?pe.forEach(e=>e(t)):pe[0](t)};const Oe=t=>{la(t),t.scope.on()},fe=()=>{nt&&nt.scope.off(),la(null)};function Oo(t){return t.vnode.shapeFlag&4}let Xe=!1;function af(t,e=!1){Xe=e;const{props:n,children:r}=t.vnode,a=Oo(t);Dl(t,n,a,e),Hl(t,r);const i=a?of(t,e):void 0;return Xe=!1,i}function of(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ji(new Proxy(t.ctx,Il));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?lf(t):null;Oe(t),Ce();const i=qt(r,t,0,[t.props,a]);if(Se(),fe(),Fi(i)){if(i.then(fe,fe),e)return i.then(o=>{Ja(t,o,e)}).catch(o=>{Wn(o,t,0)});t.asyncDep=i}else Ja(t,i,e)}else Eo(t,e)}function Ja(t,e,n){L(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:V(e)&&(t.setupState=Zi(e)),Eo(t,n)}let Za;function Eo(t,e,n){const r=t.type;if(!t.render){if(!e&&Za&&!r.render){const a=r.template||ia(t).template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,c=et(et({isCustomElement:i,delimiters:s},o),l);r.render=Za(a,c)}}t.render=r.render||Ot}Oe(t),Ce(),Tl(t),Se(),fe()}function sf(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}}))}function lf(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return sf(t)},slots:t.slots,emit:t.emit,expose:e}}function fa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Zi(Ji(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in je)return je[n](t)},has(e,n){return n in e||n in je}}))}function ff(t,e=!0){return L(t)?t.displayName||t.name:t.name||e&&t.__name}function cf(t){return L(t)&&"__vccOpts"in t}const re=(t,e)=>Qs(t,e,Xe);function uf(t,e,n){const r=arguments.length;return r===2?V(e)&&!M(e)?Pr(e)?ot(t,null,[e]):ot(t,e):ot(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Pr(n)&&(n=[n]),ot(t,e,n))}const df=Symbol.for("v-scx"),mf=()=>En(df),pf="3.3.1",hf="http://www.w3.org/2000/svg",ie=typeof document<"u"?document:null,Qa=ie&&ie.createElement("template"),gf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?ie.createElementNS(hf,t):ie.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>ie.createTextNode(t),createComment:t=>ie.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ie.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Qa.innerHTML=r?`<svg>${t}</svg>`:t;const s=Qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function vf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function bf(t,e,n){const r=t.style,a=Q(n);if(n&&!a){if(e&&!Q(e))for(const i in e)n[i]==null&&Cr(r,i,"");for(const i in n)Cr(r,i,n[i])}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const ti=/\s*!important$/;function Cr(t,e,n){if(M(n))n.forEach(r=>Cr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=yf(t,e);ti.test(n)?t.setProperty(Pe(r),n.replace(ti,""),"important"):t[r]=n}}const ei=["Webkit","Moz","ms"],lr={};function yf(t,e){const n=lr[e];if(n)return n;let r=Mt(e);if(r!=="filter"&&r in t)return lr[e]=r;r=Bn(r);for(let a=0;a<ei.length;a++){const i=ei[a]+r;if(i in t)return lr[e]=i}return e}const ni="http://www.w3.org/1999/xlink";function xf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ni,e.slice(6,e.length)):t.setAttributeNS(ni,e,n);else{const i=vs(e);n==null||i&&!ji(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function _f(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n??"";return}const s=t.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){t._value=n;const c=s==="OPTION"?t.getAttribute("value"):t.value,d=n??"";c!==d&&(t.value=d),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=ji(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function wf(t,e,n,r){t.addEventListener(e,n,r)}function kf(t,e,n,r){t.removeEventListener(e,n,r)}function Af(t,e,n,r,a=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=Of(e);if(r){const c=i[e]=Cf(r,a);wf(t,s,c,l)}else o&&(kf(t,s,o,l),i[e]=void 0)}}const ri=/(?:Once|Passive|Capture)$/;function Of(t){let e;if(ri.test(t)){e={};let r;for(;r=t.match(ri);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pe(t.slice(2)),e]}let fr=0;const Ef=Promise.resolve(),Pf=()=>fr||(Ef.then(()=>fr=0),fr=Date.now());function Cf(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Et(Sf(r,n.value),e,5,[r])};return n.value=t,n.attached=Pf(),n}function Sf(t,e){if(M(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const ai=/^on[a-z]/,If=(t,e,n,r,a=!1,i,o,s,l)=>{e==="class"?vf(t,r,a):e==="style"?bf(t,n,r):$n(e)?Hr(e)||Af(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Tf(t,e,r,a))?_f(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),xf(t,e,r,a))};function Tf(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&ai.test(e)&&L(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||ai.test(e)&&Q(n)?!1:e in t}const Nf=et({patchProp:If},gf);let ii;function Mf(){return ii||(ii=Yl(Nf))}const Ff=(...t)=>{const e=Mf().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=Rf(r);if(!a)return;const i=e._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function Rf(t){return Q(t)?document.querySelector(t):t}const Lf={methods:{goToPage(t){window.open(t)}}};const ca=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n},jf=t=>(ao("data-v-738f4928"),t=t(),io(),t),zf={class:"header"},Df=jf(()=>pt("span",null,"Teacher Sheet",-1));function $f(t,e,n,r,a,i){const o=po("font-awesome-icon");return we(),Ke("div",zf,[Df,pt("button",{class:"button",onClick:e[0]||(e[0]=s=>i.goToPage("https://github.com/thiagoarantes/teacherSheet"))},[ot(o,{icon:"fa-brands fa-github"})])])}const Uf=ca(Lf,[["render",$f],["__scopeId","data-v-738f4928"]]),Hf={};const Bf={class:"line"},Yf=Ql('<input type="text" class="input" data-v-84561861><button class="button" data-v-84561861>G</button><button class="button" data-v-84561861>V</button><button class="button" data-v-84561861>P</button><button class="button" data-v-84561861>F</button><input type="text" class="input" data-v-84561861>',6),Wf=[Yf];function Kf(t,e,n,r,a,i){return we(),Ke("div",Bf,Wf)}const Xf=ca(Hf,[["render",Kf],["__scopeId","data-v-84561861"]]),qf={components:{SheetLine:Xf},data(){return{totalG:0,totalV:0,totalP:0,totalF:0,lines:[1,2,3,4,5]}}};const Vf=t=>(ao("data-v-58f73a18"),t=t(),io(),t),Gf={class:"sheet"},Jf={class:"points"},Zf={class:"point",title:"Grammar"},Qf={class:"point",title:"Vocabulary"},tc={class:"point",title:"Pronunciation"},ec={class:"point",title:"Fluency"},nc=Vf(()=>pt("div",{class:"title"},[pt("div",null,"NOTE"),pt("div",null,"CATEGORIES"),pt("div",null,"HINTS")],-1));function rc(t,e,n,r,a,i){const o=po("SheetLine");return we(),Ke("div",Gf,[pt("div",Jf,[pt("div",Zf,sn(a.totalG),1),pt("div",Qf,sn(a.totalV),1),pt("div",tc,sn(a.totalP),1),pt("div",ec,sn(a.totalF),1)]),nc,(we(!0),Ke(xt,null,Sl(a.lines,s=>(we(),Vl(o,{key:s}))),128))])}const ac=ca(qf,[["render",rc],["__scopeId","data-v-58f73a18"]]),ic=lo({__name:"App",setup(t){return(e,n)=>(we(),Ke(xt,null,[ot(Uf),ot(ac)],64))}});function oi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function E(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?oi(Object(n),!0).forEach(function(r){tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):oi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Ln(t){return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ln(t)}function oc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function si(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function sc(t,e,n){return e&&si(t.prototype,e),n&&si(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function tt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ua(t,e){return fc(t)||uc(t,e)||Po(t,e)||mc()}function Qe(t){return lc(t)||cc(t)||Po(t)||dc()}function lc(t){if(Array.isArray(t))return Sr(t)}function fc(t){if(Array.isArray(t))return t}function cc(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function uc(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Po(t,e){if(t){if(typeof t=="string")return Sr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Sr(t,e)}}function Sr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function dc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function mc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var li=function(){},da={},Co={},So=null,Io={mark:li,measure:li};try{typeof window<"u"&&(da=window),typeof document<"u"&&(Co=document),typeof MutationObserver<"u"&&(So=MutationObserver),typeof performance<"u"&&(Io=performance)}catch{}var pc=da.navigator||{},fi=pc.userAgent,ci=fi===void 0?"":fi,Gt=da,X=Co,ui=So,pn=Io;Gt.document;var Bt=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",To=~ci.indexOf("MSIE")||~ci.indexOf("Trident/"),hn,gn,vn,bn,yn,Dt="___FONT_AWESOME___",Ir=16,No="fa",Mo="svg-inline--fa",ce="data-fa-i2svg",Tr="data-fa-pseudo-element",hc="data-fa-pseudo-element-pending",ma="data-prefix",pa="data-icon",di="fontawesome-i2svg",gc="async",vc=["HTML","HEAD","STYLE","SCRIPT"],Fo=function(){try{return!0}catch{return!1}}(),K="classic",J="sharp",ha=[K,J];function tn(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[K]}})}var qe=tn((hn={},tt(hn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),tt(hn,J,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),hn)),Ve=tn((gn={},tt(gn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),tt(gn,J,{solid:"fass",regular:"fasr",light:"fasl"}),gn)),Ge=tn((vn={},tt(vn,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),tt(vn,J,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),vn)),bc=tn((bn={},tt(bn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),tt(bn,J,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),bn)),yc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Ro="fa-layers-text",xc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,_c=tn((yn={},tt(yn,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),tt(yn,J,{900:"fass",400:"fasr",300:"fasl"}),yn)),Lo=[1,2,3,4,5,6,7,8,9,10],wc=Lo.concat([11,12,13,14,15,16,17,18,19,20]),kc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],oe={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Je=new Set;Object.keys(Ve[K]).map(Je.add.bind(Je));Object.keys(Ve[J]).map(Je.add.bind(Je));var Ac=[].concat(ha,Qe(Je),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",oe.GROUP,oe.SWAP_OPACITY,oe.PRIMARY,oe.SECONDARY]).concat(Lo.map(function(t){return"".concat(t,"x")})).concat(wc.map(function(t){return"w-".concat(t)})),De=Gt.FontAwesomeConfig||{};function Oc(t){var e=X.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Ec(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(X&&typeof X.querySelector=="function"){var Pc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Pc.forEach(function(t){var e=ua(t,2),n=e[0],r=e[1],a=Ec(Oc(n));a!=null&&(De[r]=a)})}var jo={styleDefault:"solid",familyDefault:"classic",cssPrefix:No,replacementClass:Mo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};De.familyPrefix&&(De.cssPrefix=De.familyPrefix);var Ee=E(E({},jo),De);Ee.autoReplaceSvg||(Ee.observeMutations=!1);var C={};Object.keys(jo).forEach(function(t){Object.defineProperty(C,t,{enumerable:!0,set:function(n){Ee[t]=n,$e.forEach(function(r){return r(C)})},get:function(){return Ee[t]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(e){Ee.cssPrefix=e,$e.forEach(function(n){return n(C)})},get:function(){return Ee.cssPrefix}});Gt.FontAwesomeConfig=C;var $e=[];function Cc(t){return $e.push(t),function(){$e.splice($e.indexOf(t),1)}}var Wt=Ir,Nt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Sc(t){if(!(!t||!Bt)){var e=X.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(e,r),t}}var Ic="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Ze(){for(var t=12,e="";t-- >0;)e+=Ic[Math.random()*62|0];return e}function Ie(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function ga(t){return t.classList?Ie(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function zo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Tc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(zo(t[n]),'" ')},"").trim()}function Jn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function va(t){return t.size!==Nt.size||t.x!==Nt.x||t.y!==Nt.y||t.rotate!==Nt.rotate||t.flipX||t.flipY}function Nc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Mc(t){var e=t.transform,n=t.width,r=n===void 0?Ir:n,a=t.height,i=a===void 0?Ir:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&To?l+="translate(".concat(e.x/Wt-r/2,"em, ").concat(e.y/Wt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Wt,"em), calc(-50% + ").concat(e.y/Wt,"em)) "):l+="translate(".concat(e.x/Wt,"em, ").concat(e.y/Wt,"em) "),l+="scale(".concat(e.size/Wt*(e.flipX?-1:1),", ").concat(e.size/Wt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var Fc=`:root, :host {
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
}`;function Do(){var t=No,e=Mo,n=C.cssPrefix,r=C.replacementClass,a=Fc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var mi=!1;function cr(){C.autoAddCss&&!mi&&(Sc(Do()),mi=!0)}var Rc={mixout:function(){return{dom:{css:Do,insertCss:cr}}},hooks:function(){return{beforeDOMElementCreation:function(){cr()},beforeI2svg:function(){cr()}}}},$t=Gt||{};$t[Dt]||($t[Dt]={});$t[Dt].styles||($t[Dt].styles={});$t[Dt].hooks||($t[Dt].hooks={});$t[Dt].shims||($t[Dt].shims=[]);var At=$t[Dt],$o=[],Lc=function t(){X.removeEventListener("DOMContentLoaded",t),jn=1,$o.map(function(e){return e()})},jn=!1;Bt&&(jn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),jn||X.addEventListener("DOMContentLoaded",Lc));function jc(t){Bt&&(jn?setTimeout(t,0):$o.push(t))}function en(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?zo(t):"<".concat(e," ").concat(Tc(r),">").concat(i.map(en).join(""),"</").concat(e,">")}function pi(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var zc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},ur=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?zc(n,a):n,l,c,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,e[c],c,e);return d};function Dc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Nr(t){var e=Dc(t);return e.length===1?e[0].toString(16):null}function $c(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function hi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Mr(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=hi(e);typeof At.hooks.addPack=="function"&&!a?At.hooks.addPack(t,hi(e)):At.styles[t]=E(E({},At.styles[t]||{}),i),t==="fas"&&Mr("fa",e)}var xn,_n,wn,ge=At.styles,Uc=At.shims,Hc=(xn={},tt(xn,K,Object.values(Ge[K])),tt(xn,J,Object.values(Ge[J])),xn),ba=null,Uo={},Ho={},Bo={},Yo={},Wo={},Bc=(_n={},tt(_n,K,Object.keys(qe[K])),tt(_n,J,Object.keys(qe[J])),_n);function Yc(t){return~Ac.indexOf(t)}function Wc(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!Yc(a)?a:null}var Ko=function(){var e=function(i){return ur(ge,function(o,s,l){return o[l]=ur(s,i,{}),o},{})};Uo=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Ho=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Wo=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in ge||C.autoFetchSvg,r=ur(Uc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Bo=r.names,Yo=r.unicodes,ba=Zn(C.styleDefault,{family:C.familyDefault})};Cc(function(t){ba=Zn(t.styleDefault,{family:C.familyDefault})});Ko();function ya(t,e){return(Uo[t]||{})[e]}function Kc(t,e){return(Ho[t]||{})[e]}function se(t,e){return(Wo[t]||{})[e]}function Xo(t){return Bo[t]||{prefix:null,iconName:null}}function Xc(t){var e=Yo[t],n=ya("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Jt(){return ba}var xa=function(){return{prefix:null,iconName:null,rest:[]}};function Zn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?K:n,a=qe[r][t],i=Ve[r][t]||Ve[r][a],o=t in At.styles?t:null;return i||o||null}var gi=(wn={},tt(wn,K,Object.keys(Ge[K])),tt(wn,J,Object.keys(Ge[J])),wn);function Qn(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(e={},tt(e,K,"".concat(C.cssPrefix,"-").concat(K)),tt(e,J,"".concat(C.cssPrefix,"-").concat(J)),e),o=null,s=K;(t.includes(i[K])||t.some(function(c){return gi[K].includes(c)}))&&(s=K),(t.includes(i[J])||t.some(function(c){return gi[J].includes(c)}))&&(s=J);var l=t.reduce(function(c,d){var m=Wc(C.cssPrefix,d);if(ge[d]?(d=Hc[s].includes(d)?bc[s][d]:d,o=d,c.prefix=d):Bc[s].indexOf(d)>-1?(o=d,c.prefix=Zn(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[K]&&d!==i[J]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?Xo(c.iconName):{},w=se(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!ge.far&&ge.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},xa());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===J&&(ge.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=se(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Jt()||"fas"),l}var qc=function(){function t(){oc(this,t),this.definitions={}}return sc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Mr(s,o[s]);var l=Ge[K][s];l&&Mr(l,o[s]),Ko()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),t}(),vi=[],ve={},ke={},Vc=Object.keys(ke);function Gc(t,e){var n=e.mixoutsTo;return vi=t,ve={},Object.keys(ke).forEach(function(r){Vc.indexOf(r)===-1&&delete ke[r]}),vi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ln(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ve[o]||(ve[o]=[]),ve[o].push(i[o])})}r.provides&&r.provides(ke)}),n}function Fr(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ve[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ue(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=ve[t]||[];a.forEach(function(i){i.apply(null,n)})}function Ut(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ke[t]?ke[t].apply(null,e):void 0}function Rr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Jt();if(e)return e=se(n,e)||e,pi(qo.definitions,n,e)||pi(At.styles,n,e)}var qo=new qc,Jc=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,ue("noAuto")},Zc={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(ue("beforeI2svg",e),Ut("pseudoElements2svg",e),Ut("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,jc(function(){tu({autoReplaceSvgRoot:n}),ue("watch",e)})}},Qc={icon:function(e){if(e===null)return null;if(Ln(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:se(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Zn(e[0]);return{prefix:r,iconName:se(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(C.cssPrefix,"-"))>-1||e.match(yc))){var a=Qn(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Jt(),iconName:se(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Jt();return{prefix:i,iconName:se(i,e)||e}}}},ht={noAuto:Jc,config:C,dom:Zc,parse:Qc,library:qo,findIconDefinition:Rr,toHtml:en},tu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(At.styles).length>0||C.autoFetchSvg)&&Bt&&C.autoReplaceSvg&&ht.dom.i2svg({node:r})};function tr(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return en(r)})}}),Object.defineProperty(t,"node",{get:function(){if(Bt){var r=X.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function eu(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(va(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=Jn(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function nu(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function _a(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,c=t.maskId,d=t.titleId,m=t.extra,v=t.watchable,w=v===void 0?!1:v,j=r.found?r:n,N=j.width,D=j.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(gt){return m.classes.indexOf(gt)===-1}).filter(function(gt){return gt!==""||!!gt}).concat(m.classes).join(" "),F={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};w&&(F.attributes[ce]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||Ze())},children:[l]}),delete F.attributes.title);var H=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},S),m.styles)}),rt=r.found&&n.found?Ut("generateAbstractMask",H)||{children:[],attributes:{}}:Ut("generateAbstractIcon",H)||{children:[],attributes:{}},at=rt.children,vt=rt.attributes;return H.children=at,H.attributes=vt,s?nu(H):eu(H)}function bi(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ce]="");var d=E({},o.styles);va(a)&&(d.transform=Mc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Jn(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function ru(t){var e=t.content,n=t.title,r=t.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Jn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var dr=At.styles;function Lr(t){var e=t[0],n=t[1],r=t.slice(4),a=ua(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(oe.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(oe.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(oe.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var au={found:!1,width:512,height:512};function iu(t,e){!Fo&&!C.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function jr(t,e){var n=e;return e==="fa"&&C.styleDefault!==null&&(e=Jt()),new Promise(function(r,a){if(Ut("missingIconAbstract"),n==="fa"){var i=Xo(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&dr[e]&&dr[e][t]){var o=dr[e][t];return r(Lr(o))}iu(t,e),r(E(E({},au),{},{icon:C.showMissingIcons&&t?Ut("missingIconAbstract")||{}:{}}))})}var yi=function(){},zr=C.measurePerformance&&pn&&pn.mark&&pn.measure?pn:{mark:yi,measure:yi},Le='FA "6.4.0"',ou=function(e){return zr.mark("".concat(Le," ").concat(e," begins")),function(){return Vo(e)}},Vo=function(e){zr.mark("".concat(Le," ").concat(e," ends")),zr.measure("".concat(Le," ").concat(e),"".concat(Le," ").concat(e," begins"),"".concat(Le," ").concat(e," ends"))},wa={begin:ou,end:Vo},Sn=function(){};function xi(t){var e=t.getAttribute?t.getAttribute(ce):null;return typeof e=="string"}function su(t){var e=t.getAttribute?t.getAttribute(ma):null,n=t.getAttribute?t.getAttribute(pa):null;return e&&n}function lu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(C.replacementClass)}function fu(){if(C.autoReplaceSvg===!0)return In.replace;var t=In[C.autoReplaceSvg];return t||In.replace}function cu(t){return X.createElementNS("http://www.w3.org/2000/svg",t)}function uu(t){return X.createElement(t)}function Go(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?cu:uu:n;if(typeof t=="string")return X.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Go(o,{ceFn:r}))}),a}function du(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var In={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Go(a),n)}),n.getAttribute(ce)===null&&C.keepOriginalSource){var r=X.createComment(du(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~ga(n).indexOf(C.replacementClass))return In.replace(e);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return en(s)}).join(`
`);n.setAttribute(ce,""),n.innerHTML=o}};function _i(t){t()}function Jo(t,e){var n=typeof e=="function"?e:Sn;if(t.length===0)n();else{var r=_i;C.mutateApproach===gc&&(r=Gt.requestAnimationFrame||_i),r(function(){var a=fu(),i=wa.begin("mutate");t.map(a),i(),n()})}}var ka=!1;function Zo(){ka=!0}function Dr(){ka=!1}var zn=null;function wi(t){if(ui&&C.observeMutations){var e=t.treeCallback,n=e===void 0?Sn:e,r=t.nodeCallback,a=r===void 0?Sn:r,i=t.pseudoElementsCallback,o=i===void 0?Sn:i,s=t.observeMutationsRoot,l=s===void 0?X:s;zn=new ui(function(c){if(!ka){var d=Jt();Ie(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!xi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&xi(m.target)&&~kc.indexOf(m.attributeName))if(m.attributeName==="class"&&su(m.target)){var v=Qn(ga(m.target)),w=v.prefix,j=v.iconName;m.target.setAttribute(ma,w||d),j&&m.target.setAttribute(pa,j)}else lu(m.target)&&a(m.target)})}}),Bt&&zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function mu(){zn&&zn.disconnect()}function pu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function hu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Qn(ga(t));return a.prefix||(a.prefix=Jt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Kc(a.prefix,t.innerText)||ya(a.prefix,Nr(t.innerText))),!a.iconName&&C.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=t.firstChild.data)),a}function gu(t){var e=Ie(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return C.autoA11y&&(n?e["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||Ze()):(e["aria-hidden"]="true",e.focusable="false")),e}function vu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Nt,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ki(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=hu(t),r=n.iconName,a=n.prefix,i=n.rest,o=gu(t),s=Fr("parseNodeAttributes",{},t),l=e.styleParser?pu(t):[];return E({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:Nt,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var bu=At.styles;function Qo(t){var e=C.autoReplaceSvg==="nest"?ki(t,{styleParser:!1}):ki(t);return~e.extra.classes.indexOf(Ro)?Ut("generateLayersText",t,e):Ut("generateSvgReplacementMutation",t,e)}var Zt=new Set;ha.map(function(t){Zt.add("fa-".concat(t))});Object.keys(qe[K]).map(Zt.add.bind(Zt));Object.keys(qe[J]).map(Zt.add.bind(Zt));Zt=Qe(Zt);function Ai(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(di,"-").concat(m))},a=function(m){return n.remove("".concat(di,"-").concat(m))},i=C.autoFetchSvg?Zt:ha.map(function(d){return"fa-".concat(d)}).concat(Object.keys(bu));i.includes("fa")||i.push("fa");var o=[".".concat(Ro,":not([").concat(ce,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ce,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ie(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),c=s.reduce(function(d,m){try{var v=Qo(m);v&&d.push(v)}catch(w){Fo||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){Jo(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(v){l(),m(v)})})}function yu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Qo(t).then(function(n){n&&Jo([n],e)})}function xu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Rr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Rr(a||{})),t(r,E(E({},n),{},{mask:a}))}}var _u=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Nt:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,j=w===void 0?null:w,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,F=n.styles,S=F===void 0?{}:F;if(e){var H=e.prefix,rt=e.iconName,at=e.icon;return tr(E({type:"icon"},e),function(){return ue("beforeDOMElementCreation",{iconDefinition:e,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||Ze()):(O["aria-hidden"]="true",O.focusable="false")),_a({icons:{main:Lr(at),mask:l?Lr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:rt,transform:E(E({},Nt),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:O,styles:S,classes:D}})})}},wu={mixout:function(){return{icon:xu(_u)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ai,n.nodeCallback=yu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return Ai(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,j){Promise.all([jr(a,s),d.iconName?jr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=ua(N,2),k=D[0],O=D[1];w([n,_a({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Jn(s);l.length>0&&(a.style=l);var c;return va(o)&&(c=Ut("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},ku={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return tr({type:"layer"},function(){ue("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(Qe(i)).join(" ")},children:o}]})}}}},Au={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return tr({type:"counter",content:n},function(){return ue("beforeDOMElementCreation",{content:n,params:r}),ru({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(Qe(s))}})})}}}},Ou={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Nt:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,w=v===void 0?{}:v;return tr({type:"text",content:n},function(){return ue("beforeDOMElementCreation",{content:n,params:r}),bi({content:n,transform:E(E({},Nt),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(C.cssPrefix,"-layers-text")].concat(Qe(c))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(To){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,bi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Eu=new RegExp('"',"ug"),Oi=[1105920,1112319];function Pu(t){var e=t.replace(Eu,""),n=$c(e,0),r=n>=Oi[0]&&n<=Oi[1],a=e.length===2?e[0]===e[1]:!1;return{value:Nr(a?e[0]:e),isSecondary:r||a}}function Ei(t,e){var n="".concat(hc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Ie(t.children),o=i.filter(function(at){return at.getAttribute(Tr)===e})[0],s=Gt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(xc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?J:K,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Ve[v][l[2].toLowerCase()]:_c[v][c],j=Pu(m),N=j.value,D=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=ya(w,N),F=O;if(k){var S=Xc(N);S.iconName&&S.prefix&&(O=S.iconName,w=S.prefix)}if(O&&!D&&(!o||o.getAttribute(ma)!==w||o.getAttribute(pa)!==F)){t.setAttribute(n,F),o&&t.removeChild(o);var H=vu(),rt=H.extra;rt.attributes[Tr]=e,jr(O,w).then(function(at){var vt=_a(E(E({},H),{},{icons:{main:at,mask:xa()},prefix:w,iconName:F,extra:rt,watchable:!0})),gt=X.createElement("svg");e==="::before"?t.insertBefore(gt,t.firstChild):t.appendChild(gt),gt.outerHTML=vt.map(function(Ft){return en(Ft)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Cu(t){return Promise.all([Ei(t,"::before"),Ei(t,"::after")])}function Su(t){return t.parentNode!==document.head&&!~vc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Tr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Pi(t){if(Bt)return new Promise(function(e,n){var r=Ie(t.querySelectorAll("*")).filter(Su).map(Cu),a=wa.begin("searchPseudoElements");Zo(),Promise.all(r).then(function(){a(),Dr(),e()}).catch(function(){a(),Dr(),n()})})}var Iu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Pi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;C.searchPseudoElements&&Pi(a)}}},Ci=!1,Tu={mixout:function(){return{dom:{unwatch:function(){Zo(),Ci=!0}}}},hooks:function(){return{bootstrap:function(){wi(Fr("mutationObserverCallbacks",{}))},noAuto:function(){mu()},watch:function(n){var r=n.observeMutationsRoot;Ci?Dr():wi(Fr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Si=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Nu={mixout:function(){return{parse:{transform:function(n){return Si(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Si(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},w.outer),children:[{tag:"g",attributes:E({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),w.path)}]}]}}}},mr={x:0,y:0,width:"100%",height:"100%"};function Ii(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Mu(t){return t.tag==="g"?t.children:[t]}var Fu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Qn(a.split(" ").map(function(o){return o.trim()})):xa();return i.prefix||(i.prefix=Jt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,w=Nc({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},mr),{},{fill:"white"})},N=d.children?{children:d.children.map(Ii)}:{},D={tag:"g",attributes:E({},w.inner),children:[Ii(E({tag:d.tag,attributes:E(E({},d.attributes),w.path)},N))]},k={tag:"g",attributes:E({},w.outer),children:[D]},O="mask-".concat(s||Ze()),F="clip-".concat(s||Ze()),S={tag:"mask",attributes:E(E({},mr),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Mu(v)},S]};return r.push(H,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},mr)}),{children:r,attributes:a}}}},Ru={provides:function(e){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Lu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},ju=[Rc,wu,ku,Au,Ou,Iu,Tu,Nu,Fu,Ru,Lu];Gc(ju,{mixoutsTo:ht});ht.noAuto;ht.config;var zu=ht.library;ht.dom;var $r=ht.parse;ht.findIconDefinition;ht.toHtml;var Du=ht.icon;ht.layer;ht.text;ht.counter;var $u={prefix:"fab",iconName:"github",icon:[496,512,[],"f09b","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"]};function Ti(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function jt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ti(Object(n),!0).forEach(function(r){ct(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ti(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Dn(t){return Dn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Dn(t)}function ct(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Uu(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function Hu(t,e){if(t==null)return{};var n=Uu(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var Bu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ts={exports:{}};(function(t){(function(e){var n=function(k,O,F){if(!c(O)||m(O)||v(O)||w(O)||l(O))return O;var S,H=0,rt=0;if(d(O))for(S=[],rt=O.length;H<rt;H++)S.push(n(k,O[H],F));else{S={};for(var at in O)Object.prototype.hasOwnProperty.call(O,at)&&(S[k(at,F)]=n(k,O[at],F))}return S},r=function(k,O){O=O||{};var F=O.separator||"_",S=O.split||/(?=[A-Z])/;return k.split(S).join(F)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},w=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?k:function(S,H){return F(S,k,H)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=D:e.humps=D})(Bu)})(ts);var Yu=ts.exports,Wu=["class","style"];function Ku(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=Yu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function Xu(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function es(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return es(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,c){var d=t.attributes[c];switch(c){case"class":l.class=Xu(d);break;case"style":l.style=Ku(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Hu(n,Wu);return uf(t.tag,jt(jt(jt({},e),{},{class:a.class,style:jt(jt({},a.style),o)},a.attrs),s),r)}var ns=!1;try{ns=!0}catch{}function qu(){if(!ns&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function pr(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?ct({},t,e):{}}function Vu(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},ct(e,"fa-".concat(t.size),t.size!==null),ct(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),ct(e,"fa-pull-".concat(t.pull),t.pull!==null),ct(e,"fa-swap-opacity",t.swapOpacity),ct(e,"fa-bounce",t.bounce),ct(e,"fa-shake",t.shake),ct(e,"fa-beat",t.beat),ct(e,"fa-fade",t.fade),ct(e,"fa-beat-fade",t.beatFade),ct(e,"fa-flash",t.flash),ct(e,"fa-spin-pulse",t.spinPulse),ct(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ni(t){if(t&&Dn(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if($r.icon)return $r.icon(t);if(t===null)return null;if(Dn(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var Gu=lo({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=re(function(){return Ni(e.icon)}),i=re(function(){return pr("classes",Vu(e))}),o=re(function(){return pr("transform",typeof e.transform=="string"?$r.transform(e.transform):e.transform)}),s=re(function(){return pr("mask",Ni(e.mask))}),l=re(function(){return Du(a.value,jt(jt(jt(jt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});An(l,function(d){if(!d)return qu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=re(function(){return l.value?es(l.value.abstract[0],{},r):null});return function(){return c.value}}});zu.add($u);Ff(ic).component("font-awesome-icon",Gu).mount("#app");
