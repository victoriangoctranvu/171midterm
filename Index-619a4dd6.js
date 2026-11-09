import{C as h,r as y,j as I,u as ft,a as dt,b as ut,_ as Z,R as pt,d as yt,p as mt}from"./index-7937f936.js";import{H as gt}from"./Head-9149bcdf.js";function et(t){var e,o,a="";if(typeof t=="string"||typeof t=="number")a+=t;else if(typeof t=="object")if(Array.isArray(t)){var s=t.length;for(e=0;e<s;e++)t[e]&&(o=et(t[e]))&&(a&&(a+=" "),a+=o)}else for(o in t)t[o]&&(a&&(a+=" "),a+=o);return a}function $(){for(var t,e,o=0,a="",s=arguments.length;o<s;o++)(t=arguments[o])&&(e=et(t))&&(a&&(a+=" "),a+=e);return a}var M=t=>typeof t=="number"&&!isNaN(t),A=t=>typeof t=="string",z=t=>typeof t=="function",_t=t=>A(t)||M(t),K=t=>A(t)||z(t)?t:null,vt=(t,e)=>t===!1||M(t)&&t>0?t:e,Q=t=>y.isValidElement(t)||A(t)||z(t)||M(t);function bt(t,e,o=300){let{scrollHeight:a,style:s}=t;requestAnimationFrame(()=>{s.minHeight="initial",s.height=a+"px",s.transition=`all ${o}ms`,requestAnimationFrame(()=>{s.height="0",s.padding="0",s.margin="0",setTimeout(e,o)})})}function ht({enter:t,exit:e,appendPosition:o=!1,collapse:a=!0,collapseDuration:s=300}){return function({children:l,position:r,preventExitTransition:f,done:d,nodeRef:c,isIn:u,playToast:x}){let w=o?`${t}--${r}`:t,k=o?`${e}--${r}`:e,C=y.useRef(0);return y.useLayoutEffect(()=>{let T=c.current,v=w.split(" "),g=n=>{n.target===c.current&&(x(),T.removeEventListener("animationend",g),T.removeEventListener("animationcancel",g),C.current===0&&n.type!=="animationcancel"&&T.classList.remove(...v))};T.classList.add(...v),T.addEventListener("animationend",g),T.addEventListener("animationcancel",g)},[]),y.useEffect(()=>{let T=c.current,v=()=>{T.removeEventListener("animationend",v),a?bt(T,d,s):d()};u||(f?v():(C.current=1,T.className+=` ${k}`,T.addEventListener("animationend",v)))},[u]),h.createElement(h.Fragment,null,l)}}function J(t,e){return{content:ot(t.content,t.props),containerId:t.props.containerId,id:t.props.toastId,theme:t.props.theme,type:t.props.type,data:t.props.data||{},isLoading:t.props.isLoading,icon:t.props.icon,reason:t.removalReason,status:e}}function ot(t,e,o=!1){return y.isValidElement(t)&&!A(t.type)?y.cloneElement(t,{closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:o}):z(t)?t({closeToast:e.closeToast,toastProps:e,data:e.data,isPaused:o}):t}function Tt({closeToast:t,theme:e,ariaLabel:o="close"}){return h.createElement("button",{className:`Toastify__close-button Toastify__close-button--${e}`,type:"button",onClick:a=>{a.stopPropagation(),t(!0)},"aria-label":o},h.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},h.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function xt({delay:t,isRunning:e,closeToast:o,type:a="default",hide:s,className:l,controlledProgress:r,progress:f,rtl:d,isIn:c,theme:u}){let x=s||r&&f===0,w={animationDuration:`${t}ms`,animationPlayState:e?"running":"paused"};r&&(w.transform=`scaleX(${f})`);let k=$("Toastify__progress-bar",r?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated",`Toastify__progress-bar-theme--${u}`,`Toastify__progress-bar--${a}`,{"Toastify__progress-bar--rtl":d}),C=z(l)?l({rtl:d,type:a,defaultClassName:k}):$(k,l),T={[r&&f>=1?"onTransitionEnd":"onAnimationEnd"]:r&&f<1?null:()=>{c&&o()}};return h.createElement("div",{className:"Toastify__progress-bar--wrp","data-hidden":x},h.createElement("div",{className:`Toastify__progress-bar--bg Toastify__progress-bar-theme--${u} Toastify__progress-bar--${a}`}),h.createElement("div",{role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer","aria-valuenow":r?Math.round(f*100):void 0,"aria-valuemin":0,"aria-valuemax":100,className:C,style:w,...T}))}var wt=1,at=()=>`${wt++}`;function kt(t,e,o){let a=1,s=0,l=[],r=[],f=e,d=new Map,c=new Set,u=n=>(c.add(n),()=>c.delete(n)),x=()=>{r=Array.from(d.values()),c.forEach(n=>n())},w=({containerId:n,toastId:i,updateId:p})=>{let E=n?n!==t:t!==1,N=d.has(i)&&p==null;return E||N},k=(n,i)=>{d.forEach(p=>{var E;(i==null||i===p.props.toastId)&&((E=p.toggle)==null||E.call(p,n))})},C=n=>{var i,p;n.isActive&&((p=(i=n.props)==null?void 0:i.onClose)==null||p.call(i,n.removalReason),n.isActive=!1,o(J(n,"removed")))},T=n=>{if(n==null)d.forEach(C);else{let i=d.get(n);i&&C(i)}x()},v=()=>{s-=l.length,l=[]},g=n=>{var i,p;let{toastId:E,updateId:N}=n.props,m=N==null;n.staleId&&d.delete(n.staleId),n.isActive=!0,d.set(E,n),x(),o(J(n,m?"added":"updated")),m&&((p=(i=n.props).onOpen)==null||p.call(i))};return{id:t,props:f,observe:u,toggle:k,removeToast:T,toasts:d,clearQueue:v,buildToast:(n,i)=>{if(w(i))return;let{toastId:p,updateId:E,data:N,staleId:m,delay:b}=i,O=E==null;O&&s++;let P={...f,style:f.toastStyle,key:a++,...Object.fromEntries(Object.entries(i).filter(([B,D])=>D!=null)),toastId:p,updateId:E,data:N,isIn:!1,className:K(i.className||f.toastClassName),progressClassName:K(i.progressClassName||f.progressClassName),autoClose:i.isLoading?!1:vt(i.autoClose,f.autoClose),closeToast(B){let D=d.get(p);D&&(D.removalReason=B,T(p))},deleteToast(){if(d.get(p)!=null){if(d.delete(p),s--,s<0&&(s=0),l.length>0){g(l.shift());return}x()}}};P.closeButton=f.closeButton,i.closeButton===!1||Q(i.closeButton)?P.closeButton=i.closeButton:i.closeButton===!0&&(P.closeButton=Q(f.closeButton)?f.closeButton:!0);let R={content:n,props:P,staleId:m};f.limit&&f.limit>0&&s>f.limit&&O?l.push(R):M(b)?setTimeout(()=>{g(R)},b):g(R)},setProps(n){f=n},setToggle:(n,i)=>{let p=d.get(n);p&&(p.toggle=i)},isToastActive:n=>{var i;return(i=d.get(n))==null?void 0:i.isActive},getSnapshot:()=>r}}var L=new Map,S=[],Y=new Set,Et=t=>Y.forEach(e=>e(t)),st=()=>L.size>0;function It(){S.forEach(t=>nt(t.content,t.options)),S=[]}var Ct=(t,{containerId:e})=>{var o;return(o=L.get(e||1))==null?void 0:o.toasts.get(t)};function rt(t,e){var o;if(e)return!!((o=L.get(e))!=null&&o.isToastActive(t));let a=!1;return L.forEach(s=>{s.isToastActive(t)&&(a=!0)}),a}function Lt(t){if(!st()){S=S.filter(e=>t!=null&&e.options.toastId!==t);return}if(t==null||_t(t))L.forEach(e=>{e.removeToast(t)});else if(t&&("containerId"in t||"id"in t)){let e=L.get(t.containerId);e?e.removeToast(t.id):L.forEach(o=>{o.removeToast(t.id)})}}var Nt=(t={})=>{L.forEach(e=>{e.props.limit&&(!t.containerId||e.id===t.containerId)&&e.clearQueue()})};function nt(t,e){Q(t)&&(st()||S.push({content:t,options:e}),L.forEach(o=>{o.buildToast(t,e)}))}function Ot(t){var e;(e=L.get(t.containerId||1))==null||e.setToggle(t.id,t.fn)}function it(t,e){L.forEach(o=>{(e==null||!(e!=null&&e.containerId)||(e==null?void 0:e.containerId)===o.id)&&o.toggle(t,e==null?void 0:e.id)})}function Pt(t){let e=t.containerId||1;return{subscribe(o){let a=kt(e,t,Et);L.set(e,a);let s=a.observe(o);return It(),()=>{s(),L.delete(e)}},setProps(o){var a;(a=L.get(e))==null||a.setProps(o)},getSnapshot(){var o;return(o=L.get(e))==null?void 0:o.getSnapshot()}}}function Rt(t){return Y.add(t),()=>{Y.delete(t)}}function zt(t){return t&&(A(t.toastId)||M(t.toastId))?t.toastId:at()}function j(t,e){return nt(t,e),e.toastId}function H(t,e){return{...e,type:e&&e.type||t,toastId:zt(e)}}function X(t){return(e,o)=>j(e,H(t,o))}function _(t,e){return j(t,H("default",e))}_.loading=(t,e)=>j(t,H("default",{isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1,...e}));function Dt(t,{pending:e,error:o,success:a},s){let l;e&&(l=A(e)?_.loading(e,s):_.loading(e.render,{...s,...e}));let r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null},f=(c,u,x)=>{if(u==null){_.dismiss(l);return}let w={type:c,...r,...s,data:x},k=A(u)?{render:u}:u;return l?_.update(l,{...w,...k}):_(k.render,{...w,...k}),x},d=z(t)?t():t;return d.then(c=>f("success",a,c)).catch(c=>f("error",o,c)),d}_.promise=Dt;_.success=X("success");_.info=X("info");_.error=X("error");_.warning=X("warning");_.warn=_.warning;_.dark=(t,e)=>j(t,H("default",{theme:"dark",...e}));function $t(t){Lt(t)}_.dismiss=$t;_.clearWaitingQueue=Nt;_.isActive=rt;_.update=(t,e={})=>{let o=Ct(t,e);if(o){let{props:a,content:s}=o,l={delay:100,...a,...e,toastId:e.toastId||t,updateId:at()};l.toastId!==t&&(l.staleId=t);let r=l.render||s;delete l.render,j(r,l)}};_.done=t=>{_.update(t,{progress:1})};_.onChange=Rt;_.play=t=>it(!0,t);_.pause=t=>it(!1,t);function At(t){var e;let{subscribe:o,getSnapshot:a,setProps:s}=y.useRef(Pt(t)).current;s(t);let l=(e=y.useSyncExternalStore(o,a,a))==null?void 0:e.slice();function r(f){if(!l)return[];let d=new Map;return t.newestOnTop&&l.reverse(),l.forEach(c=>{let{position:u}=c.props;d.has(u)||d.set(u,[]),d.get(u).push(c)}),Array.from(d,c=>f(c[0],c[1]))}return{getToastToRender:r,isToastActive:rt,count:l==null?void 0:l.length}}function St(t){let[e,o]=y.useState(!1),[a,s]=y.useState(!1),l=y.useRef(null),r=y.useRef({start:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,didMove:!1}).current,{autoClose:f,pauseOnHover:d,closeToast:c,onClick:u,closeOnClick:x}=t;Ot({id:t.toastId,containerId:t.containerId,fn:o}),y.useEffect(()=>{if(t.pauseOnFocusLoss)return w(),()=>{k()}},[t.pauseOnFocusLoss]);function w(){document.hasFocus()||g(),window.addEventListener("focus",v),window.addEventListener("blur",g)}function k(){window.removeEventListener("focus",v),window.removeEventListener("blur",g)}function C(m){if(t.draggable===!0||t.draggable===m.pointerType){n();let b=l.current;r.canCloseOnClick=!0,r.canDrag=!0,b.style.transition="none",t.draggableDirection==="x"?(r.start=m.clientX,r.removalDistance=b.offsetWidth*(t.draggablePercent/100)):(r.start=m.clientY,r.removalDistance=b.offsetHeight*(t.draggablePercent===80?t.draggablePercent*1.5:t.draggablePercent)/100)}}function T(m){let{top:b,bottom:O,left:P,right:R}=l.current.getBoundingClientRect();m.pointerType==="mouse"&&t.pauseOnHover&&m.clientX>=P&&m.clientX<=R&&m.clientY>=b&&m.clientY<=O?g():v()}function v(){o(!0)}function g(){o(!1)}function n(){r.didMove=!1,document.addEventListener("pointermove",p),document.addEventListener("pointerup",E)}function i(){document.removeEventListener("pointermove",p),document.removeEventListener("pointerup",E)}function p(m){let b=l.current;if(r.canDrag&&b){r.didMove=!0,e&&g(),t.draggableDirection==="x"?r.delta=m.clientX-r.start:r.delta=m.clientY-r.start,r.start!==m.clientX&&(r.canCloseOnClick=!1);let O=t.draggableDirection==="x"?`${r.delta}px, var(--y)`:`0, calc(${r.delta}px + var(--y))`;b.style.transform=`translate3d(${O},0)`,b.style.opacity=`${1-Math.abs(r.delta/r.removalDistance)}`}}function E(){i();let m=l.current;if(r.canDrag&&r.didMove&&m){if(r.canDrag=!1,Math.abs(r.delta)>r.removalDistance){s(!0),t.closeToast(!0),t.collapseAll();return}m.style.transition="transform 0.2s, opacity 0.2s",m.style.removeProperty("transform"),m.style.removeProperty("opacity")}}let N={onPointerDown:C,onPointerUp:T};return f&&d&&(N.onMouseEnter=g,t.stacked||(N.onMouseLeave=v)),x&&(N.onClick=m=>{u&&u(m),r.canCloseOnClick&&c(!0)}),{playToast:v,pauseToast:g,isRunning:e,preventExitTransition:a,toastRef:l,eventHandlers:N}}var lt=typeof window<"u"?y.useLayoutEffect:y.useEffect,U=({theme:t,type:e,isLoading:o,...a})=>h.createElement("svg",{viewBox:"0 0 24 24",width:"100%",height:"100%",fill:t==="colored"?"currentColor":`var(--toastify-icon-color-${e})`,...a});function Mt(t){return h.createElement(U,{...t},h.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))}function jt(t){return h.createElement(U,{...t},h.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))}function Bt(t){return h.createElement(U,{...t},h.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))}function Ft(t){return h.createElement(U,{...t},h.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))}function Ht(){return h.createElement("div",{className:"Toastify__spinner"})}var V={info:jt,warning:Mt,success:Bt,error:Ft,spinner:Ht},Xt=t=>t in V;function Ut({theme:t,type:e,isLoading:o,icon:a}){let s=null,l={theme:t,type:e};return a===!1||(z(a)?s=a({...l,isLoading:o}):y.isValidElement(a)?s=y.cloneElement(a,l):o?s=V.spinner():Xt(e)&&(s=V[e](l))),s}var qt=t=>{let{isRunning:e,preventExitTransition:o,toastRef:a,eventHandlers:s,playToast:l}=St(t),{closeButton:r,children:f,autoClose:d,onClick:c,type:u,hideProgressBar:x,closeToast:w,transition:k,position:C,className:T,style:v,progressClassName:g,updateId:n,role:i,progress:p,rtl:E,toastId:N,deleteToast:m,isIn:b,isLoading:O,closeOnClick:P,theme:R,ariaLabel:B}=t,D=$("Toastify__toast",`Toastify__toast-theme--${R}`,`Toastify__toast--${u}`,{"Toastify__toast--rtl":E},{"Toastify__toast--close-on-click":P}),ct=z(T)?T({rtl:E,position:C,type:u,defaultClassName:D}):$(D,T),W=Ut(t),G=!!p||!d,q={closeToast:w,type:u,theme:R},F=null;return r===!1||(z(r)?F=r(q):y.isValidElement(r)?F=y.cloneElement(r,q):F=Tt(q)),h.createElement(k,{isIn:b,done:m,position:C,preventExitTransition:o,nodeRef:a,playToast:l},h.createElement("div",{id:N,tabIndex:0,onClick:c,"data-in":b,className:ct,...s,style:v,ref:a,...b&&{role:i,"aria-label":B}},W!=null&&h.createElement("div",{className:$("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!O})},W),ot(f,t,!e),F,!t.customProgressBar&&h.createElement(xt,{...n&&!G?{key:`p-${n}`}:{},rtl:E,theme:R,delay:d,isRunning:e,isIn:b,closeToast:w,hide:x,type:u,className:g,controlledProgress:G,progress:p||0})))},Kt=(t,e=!1)=>({enter:`Toastify--animate Toastify__${t}-enter`,exit:`Toastify--animate Toastify__${t}-exit`,appendPosition:e}),Qt=ht(Kt("bounce",!0)),Yt={position:"top-right",transition:Qt,autoClose:5e3,closeButton:!0,pauseOnHover:!0,pauseOnFocusLoss:!0,draggable:"touch",draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light","aria-label":"Notifications Alt+T",hotKeys:t=>t.altKey&&t.code==="KeyT"};function Vt(t){let e={...Yt,...t},o=t.stacked,[a,s]=y.useState(!0),l=y.useRef(null),{getToastToRender:r,isToastActive:f,count:d}=At(e),{className:c,style:u,rtl:x,containerId:w,hotKeys:k}=e;function C(v){let g=$("Toastify__toast-container",`Toastify__toast-container--${v}`,{"Toastify__toast-container--rtl":x});return z(c)?c({position:v,rtl:x,defaultClassName:g}):$(g,K(c))}function T(){o&&(s(!0),_.play())}return lt(()=>{var v;if(o){let g=l.current.querySelectorAll('[data-in="true"]'),n=12,i=(v=e.position)==null?void 0:v.includes("top"),p=0,E=0;Array.from(g).reverse().forEach((N,m)=>{let b=N;b.classList.add("Toastify__toast--stacked"),m>0&&(b.dataset.collapsed=`${a}`),b.dataset.pos||(b.dataset.pos=i?"top":"bot");let O=p*(a?.2:1)+(a?0:n*m),P=Math.max(.5,1-(a?E:0));b.style.setProperty("--y",`${i?O:O*-1}px`),b.style.setProperty("--g",`${n}`),b.style.setProperty("--s",`${P}`),p+=b.offsetHeight,E+=.025})}},[a,d,o]),y.useEffect(()=>{function v(g){var n;let i=l.current;k(g)&&((n=i==null?void 0:i.querySelector('[tabIndex="0"]'))==null||n.focus(),s(!1),_.pause()),g.key==="Escape"&&(document.activeElement===i||i!=null&&i.contains(document.activeElement))&&(s(!0),_.play())}return document.addEventListener("keydown",v),()=>{document.removeEventListener("keydown",v)}},[k]),h.createElement("section",{ref:l,className:"Toastify",id:w,onMouseEnter:()=>{o&&(s(!1),_.pause())},onMouseLeave:T,"aria-live":"polite","aria-atomic":"false","aria-relevant":"additions text","aria-label":e["aria-label"]},r((v,g)=>{let n=g.length?{...u}:{...u,pointerEvents:"none"};return h.createElement("div",{tabIndex:-1,className:C(v),"data-stacked":o,style:n,key:`c-${v}`},g.map(({content:i,props:p})=>h.createElement(qt,{...p,stacked:o,collapseAll:T,isIn:f(p.toastId,p.containerId),key:`t-${p.key}`},i)))}))}var Wt=`:root {
  --toastify-color-light: #fff;
  --toastify-color-dark: #121212;
  --toastify-color-info: #3498db;
  --toastify-color-success: #07bc0c;
  --toastify-color-warning: #f1c40f;
  --toastify-color-error: hsl(6, 78%, 57%);
  --toastify-color-transparent: rgba(255, 255, 255, 0.7);

  --toastify-icon-color-info: var(--toastify-color-info);
  --toastify-icon-color-success: var(--toastify-color-success);
  --toastify-icon-color-warning: var(--toastify-color-warning);
  --toastify-icon-color-error: var(--toastify-color-error);

  --toastify-container-width: fit-content;
  --toastify-toast-width: 320px;
  --toastify-toast-offset: 16px;
  --toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));
  --toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));
  --toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));
  --toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));
  --toastify-toast-background: #fff;
  --toastify-toast-padding: 14px;
  --toastify-toast-min-height: 64px;
  --toastify-toast-max-height: 800px;
  --toastify-toast-bd-radius: 6px;
  --toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  --toastify-font-family: sans-serif;
  --toastify-z-index: 9999;
  --toastify-text-color-light: #757575;
  --toastify-text-color-dark: #fff;

  /* Used only for colored theme */
  --toastify-text-color-info: #fff;
  --toastify-text-color-success: #fff;
  --toastify-text-color-warning: #fff;
  --toastify-text-color-error: #fff;

  --toastify-spinner-color: #616161;
  --toastify-spinner-color-empty-area: #e0e0e0;
  --toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
  --toastify-color-progress-dark: #bb86fc;
  --toastify-color-progress-info: var(--toastify-color-info);
  --toastify-color-progress-success: var(--toastify-color-success);
  --toastify-color-progress-warning: var(--toastify-color-warning);
  --toastify-color-progress-error: var(--toastify-color-error);
  /* used to control the opacity of the progress trail */
  --toastify-color-progress-bgo: 0.2;
}

.Toastify__toast-container {
  z-index: var(--toastify-z-index);
  -webkit-transform: translate3d(0, 0, var(--toastify-z-index));
  position: fixed;
  width: var(--toastify-container-width);
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.Toastify__toast-container--top-left {
  top: var(--toastify-toast-top);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--top-center {
  top: var(--toastify-toast-top);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--top-right {
  top: var(--toastify-toast-top);
  right: var(--toastify-toast-right);
  align-items: end;
}
.Toastify__toast-container--bottom-left {
  bottom: var(--toastify-toast-bottom);
  left: var(--toastify-toast-left);
}
.Toastify__toast-container--bottom-center {
  bottom: var(--toastify-toast-bottom);
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
}
.Toastify__toast-container--bottom-right {
  bottom: var(--toastify-toast-bottom);
  right: var(--toastify-toast-right);
  align-items: end;
}

.Toastify__toast {
  --y: 0px;
  position: relative;
  touch-action: none;
  width: var(--toastify-toast-width);
  min-height: var(--toastify-toast-min-height);
  box-sizing: border-box;
  margin-bottom: 1rem;
  padding: var(--toastify-toast-padding);
  border-radius: var(--toastify-toast-bd-radius);
  box-shadow: var(--toastify-toast-shadow);
  max-height: var(--toastify-toast-max-height);
  font-family: var(--toastify-font-family);
  /* webkit only issue #791 */
  z-index: 0;
  /* inner swag */
  display: flex;
  flex: 1 auto;
  align-items: center;
  word-break: break-word;
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container {
    width: 100vw;
    left: env(safe-area-inset-left);
    margin: 0;
  }
  .Toastify__toast-container--top-left,
  .Toastify__toast-container--top-center,
  .Toastify__toast-container--top-right {
    top: env(safe-area-inset-top);
    transform: translateX(0);
  }
  .Toastify__toast-container--bottom-left,
  .Toastify__toast-container--bottom-center,
  .Toastify__toast-container--bottom-right {
    bottom: env(safe-area-inset-bottom);
    transform: translateX(0);
  }
  .Toastify__toast-container--rtl {
    right: env(safe-area-inset-right);
    left: initial;
  }
  .Toastify__toast {
    --toastify-toast-width: 100%;
    margin-bottom: 0;
    border-radius: 0;
  }
}

.Toastify__toast-container[data-stacked='true'] {
  width: var(--toastify-toast-width);
}

@media only screen and (max-width: 480px) {
  .Toastify__toast-container[data-stacked='true'] {
    width: 100vw;
  }
}

.Toastify__toast--stacked {
  position: absolute;
  width: 100%;
  transform: translate3d(0, var(--y), 0) scale(var(--s));
  transition: transform 0.3s;
}

.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,
.Toastify__toast--stacked[data-collapsed] .Toastify__close-button {
  transition: opacity 0.1s;
}

.Toastify__toast--stacked[data-collapsed='false'] {
  overflow: visible;
}

.Toastify__toast--stacked[data-collapsed='true']:not(:last-child) > * {
  opacity: 0;
}

.Toastify__toast--stacked:after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  height: calc(var(--g) * 1px);
  bottom: 100%;
}

.Toastify__toast--stacked[data-pos='top'] {
  top: 0;
}

.Toastify__toast--stacked[data-pos='bot'] {
  bottom: 0;
}

.Toastify__toast--stacked[data-pos='bot'].Toastify__toast--stacked:before {
  transform-origin: top;
}

.Toastify__toast--stacked[data-pos='top'].Toastify__toast--stacked:before {
  transform-origin: bottom;
}

.Toastify__toast--stacked:before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  transform: scaleY(3);
  z-index: -1;
}

.Toastify__toast--rtl {
  direction: rtl;
}

.Toastify__toast--close-on-click {
  cursor: pointer;
}

.Toastify__toast-icon {
  margin-inline-end: 10px;
  width: 22px;
  flex-shrink: 0;
  display: flex;
}

.Toastify--animate {
  animation-fill-mode: both;
  animation-duration: 0.5s;
}

.Toastify--animate-icon {
  animation-fill-mode: both;
  animation-duration: 0.3s;
}

.Toastify__toast-theme--dark {
  background: var(--toastify-color-dark);
  color: var(--toastify-text-color-dark);
}

.Toastify__toast-theme--light {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--default {
  background: var(--toastify-color-light);
  color: var(--toastify-text-color-light);
}

.Toastify__toast-theme--colored.Toastify__toast--info {
  color: var(--toastify-text-color-info);
  background: var(--toastify-color-info);
}

.Toastify__toast-theme--colored.Toastify__toast--success {
  color: var(--toastify-text-color-success);
  background: var(--toastify-color-success);
}

.Toastify__toast-theme--colored.Toastify__toast--warning {
  color: var(--toastify-text-color-warning);
  background: var(--toastify-color-warning);
}

.Toastify__toast-theme--colored.Toastify__toast--error {
  color: var(--toastify-text-color-error);
  background: var(--toastify-color-error);
}

.Toastify__progress-bar-theme--light {
  background: var(--toastify-color-progress-light);
}

.Toastify__progress-bar-theme--dark {
  background: var(--toastify-color-progress-dark);
}

.Toastify__progress-bar--info {
  background: var(--toastify-color-progress-info);
}

.Toastify__progress-bar--success {
  background: var(--toastify-color-progress-success);
}

.Toastify__progress-bar--warning {
  background: var(--toastify-color-progress-warning);
}

.Toastify__progress-bar--error {
  background: var(--toastify-color-progress-error);
}

.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,
.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error {
  background: var(--toastify-color-transparent);
}

.Toastify__close-button {
  color: #fff;
  position: absolute;
  top: 6px;
  right: 6px;
  background: transparent;
  outline: none;
  border: none;
  padding: 0;
  cursor: pointer;
  opacity: 0.7;
  transition: 0.3s ease;
  z-index: 1;
}

.Toastify__toast--rtl .Toastify__close-button {
  left: 6px;
  right: unset;
}

.Toastify__close-button--light {
  color: #000;
  opacity: 0.3;
}

.Toastify__close-button > svg {
  fill: currentColor;
  height: 16px;
  width: 14px;
}

.Toastify__close-button:hover,
.Toastify__close-button:focus {
  opacity: 1;
}

@keyframes Toastify__trackProgress {
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
}

.Toastify__progress-bar {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0.7;
  transform-origin: left;
}

.Toastify__progress-bar--animated {
  animation: Toastify__trackProgress linear 1 forwards;
}

.Toastify__progress-bar--controlled {
  transition: transform 0.2s;
}

.Toastify__progress-bar--rtl {
  right: 0;
  left: initial;
  transform-origin: right;
  border-bottom-left-radius: initial;
}

.Toastify__progress-bar--wrp {
  position: absolute;
  overflow: hidden;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 5px;
  border-bottom-left-radius: var(--toastify-toast-bd-radius);
  border-bottom-right-radius: var(--toastify-toast-bd-radius);
}

.Toastify__progress-bar--wrp[data-hidden='true'] {
  opacity: 0;
}

.Toastify__progress-bar--bg {
  opacity: var(--toastify-color-progress-bgo);
  width: 100%;
  height: 100%;
}

.Toastify__spinner {
  width: 20px;
  height: 20px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: var(--toastify-spinner-color-empty-area);
  border-right-color: var(--toastify-spinner-color);
  animation: Toastify__spin 0.65s linear infinite;
}

@keyframes Toastify__bounceInRight {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0);
  }
  75% {
    transform: translate3d(10px, 0, 0);
  }
  90% {
    transform: translate3d(-5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutRight {
  20% {
    opacity: 1;
    transform: translate3d(-20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInLeft {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0);
  }
  75% {
    transform: translate3d(-10px, 0, 0);
  }
  90% {
    transform: translate3d(5px, 0, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutLeft {
  20% {
    opacity: 1;
    transform: translate3d(20px, var(--y), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(-2000px, var(--y), 0);
  }
}

@keyframes Toastify__bounceInUp {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0);
  }
  75% {
    transform: translate3d(0, 10px, 0);
  }
  90% {
    transform: translate3d(0, -5px, 0);
  }
  to {
    transform: translate3d(0, 0, 0);
  }
}

@keyframes Toastify__bounceOutUp {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
}

@keyframes Toastify__bounceInDown {
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0);
  }
  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0);
  }
  75% {
    transform: translate3d(0, -10px, 0);
  }
  90% {
    transform: translate3d(0, 5px, 0);
  }
  to {
    transform: none;
  }
}

@keyframes Toastify__bounceOutDown {
  20% {
    transform: translate3d(0, calc(var(--y) - 10px), 0);
  }
  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, calc(var(--y) + 20px), 0);
  }
  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
}

.Toastify__bounce-enter--top-left,
.Toastify__bounce-enter--bottom-left {
  animation-name: Toastify__bounceInLeft;
}

.Toastify__bounce-enter--top-right,
.Toastify__bounce-enter--bottom-right {
  animation-name: Toastify__bounceInRight;
}

.Toastify__bounce-enter--top-center {
  animation-name: Toastify__bounceInDown;
}

.Toastify__bounce-enter--bottom-center {
  animation-name: Toastify__bounceInUp;
}

.Toastify__bounce-exit--top-left,
.Toastify__bounce-exit--bottom-left {
  animation-name: Toastify__bounceOutLeft;
}

.Toastify__bounce-exit--top-right,
.Toastify__bounce-exit--bottom-right {
  animation-name: Toastify__bounceOutRight;
}

.Toastify__bounce-exit--top-center {
  animation-name: Toastify__bounceOutUp;
}

.Toastify__bounce-exit--bottom-center {
  animation-name: Toastify__bounceOutDown;
}

@keyframes Toastify__zoomIn {
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  50% {
    opacity: 1;
  }
}

@keyframes Toastify__zoomOut {
  from {
    opacity: 1;
  }
  50% {
    opacity: 0;
    transform: translate3d(0, var(--y), 0) scale3d(0.3, 0.3, 0.3);
  }
  to {
    opacity: 0;
  }
}

.Toastify__zoom-enter {
  animation-name: Toastify__zoomIn;
}

.Toastify__zoom-exit {
  animation-name: Toastify__zoomOut;
}

@keyframes Toastify__flipIn {
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }
  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }
  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }
  to {
    transform: perspective(400px);
  }
}

@keyframes Toastify__flipOut {
  from {
    transform: translate3d(0, var(--y), 0) perspective(400px);
  }
  30% {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }
  to {
    transform: translate3d(0, var(--y), 0) perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
}

.Toastify__flip-enter {
  animation-name: Toastify__flipIn;
}

.Toastify__flip-exit {
  animation-name: Toastify__flipOut;
}

@keyframes Toastify__slideInRight {
  from {
    transform: translate3d(110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInLeft {
  from {
    transform: translate3d(-110%, 0, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInUp {
  from {
    transform: translate3d(0, 110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideInDown {
  from {
    transform: translate3d(0, -110%, 0);
    visibility: visible;
  }
  to {
    transform: translate3d(0, var(--y), 0);
  }
}

@keyframes Toastify__slideOutRight {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutLeft {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(-110%, var(--y), 0);
  }
}

@keyframes Toastify__slideOutDown {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, 500px, 0);
  }
}

@keyframes Toastify__slideOutUp {
  from {
    transform: translate3d(0, var(--y), 0);
  }
  to {
    visibility: hidden;
    transform: translate3d(0, -500px, 0);
  }
}

.Toastify__slide-enter--top-left,
.Toastify__slide-enter--bottom-left {
  animation-name: Toastify__slideInLeft;
}

.Toastify__slide-enter--top-right,
.Toastify__slide-enter--bottom-right {
  animation-name: Toastify__slideInRight;
}

.Toastify__slide-enter--top-center {
  animation-name: Toastify__slideInDown;
}

.Toastify__slide-enter--bottom-center {
  animation-name: Toastify__slideInUp;
}

.Toastify__slide-exit--top-left,
.Toastify__slide-exit--bottom-left {
  animation-name: Toastify__slideOutLeft;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-right,
.Toastify__slide-exit--bottom-right {
  animation-name: Toastify__slideOutRight;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--top-center {
  animation-name: Toastify__slideOutUp;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

.Toastify__slide-exit--bottom-center {
  animation-name: Toastify__slideOutDown;
  animation-timing-function: ease-in;
  animation-duration: 0.3s;
}

@keyframes Toastify__spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
`,tt=new Map,Gt=(t,e)=>{lt(()=>{if(!t||typeof document>"u")return;let o=document,a=tt.get(o);if(a){e&&a.setAttribute("nonce",e);return}let s=o.createElement("style");s.textContent=t,e&&s.setAttribute("nonce",e),o.head.appendChild(s),tt.set(o,s)},[e])};function Zt(t){return Gt(Wt,t.nonce),h.createElement(Vt,{...t})}function Jt({title:t,titleId:e,...o},a){return y.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":e},o),t?y.createElement("title",{id:e},t):null,y.createElement("path",{d:"M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z"}))}const te=y.forwardRef(Jt),ee=te,oe=({tool:t})=>(y.useState(!1),I.jsx("div",{className:"h-48 group relative rounded-md flex flex-col justify-between shadow-slate-900 shadow-md p-4 bg-gradient-to-r from-slate-800 to-slate-700",children:I.jsxs("div",{children:[I.jsx("div",{className:"text-xl mb-2 font-bold",children:t.title}),I.jsx("div",{className:"",children:t.description}),I.jsx("a",{className:"text-slate-400",href:t.url,children:t.url}),I.jsx(ee,{className:"h-6 w-6 text-slate-900 hidden group-hover:block absolute top-4 right-4 py-2"})]})},t.id));var ae=(t=>(t.Id="id",t.Title="title",t.Description="description",t.Url="url",t))(ae||{});function ne(){ft();const[t,e]=y.useState([]),o=dt();ut();const[a,s]=y.useState({title:"",description:"",url:""});y.useState("");const[l,r]=y.useState(!1);y.useEffect(()=>{async function c(){const u=Z(o,"tools"),x=pt(u),w=await yt(x),k=[];w.forEach(C=>{k.push({id:C.id,...C.data()})}),e(k)}c()},[]);const f=(c,u)=>{s({...a,[c]:u})},d=async c=>{if(c.preventDefault(),!a.title||!a.description||!a.url){_.error("Please fill out all fields before submitting!");return}try{const u=Z(o,"tools"),x={title:a.title,description:a.description,url:a.url},w=await mt(u,x);_.success("🦄 Saved the tool successfully!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"}),e([...t,{id:w.id,...x}]),s({title:"",description:"",url:""}),r(!1)}catch(u){console.error("Submission failed:",u),r(!0)}};return I.jsxs(I.Fragment,{children:[I.jsx(gt,{title:"TOP PAGE"}),I.jsx("div",{className:"hero min-h-screen bg-slate-800 p-6",children:I.jsxs("div",{className:"max-w-5xl mx-auto flex flex-col gap-8",children:[I.jsxs("form",{className:"flex flex-col sm:flex-row items-center justify-center gap-4 w-full",onSubmit:d,children:[I.jsx("input",{type:"text",onChange:c=>f("title",c.target.value),value:a.title,placeholder:"title",className:"w-full sm:w-auto text-slate-50 bg-transparent border border-slate-700 focus:ring-slate-400 focus:outline-none p-4 rounded-lg"}),I.jsx("input",{type:"text",onChange:c=>f("description",c.target.value),value:a.description,placeholder:"description",className:"w-full sm:w-auto text-slate-50 bg-transparent border border-slate-700 focus:ring-slate-400 focus:outline-none p-4 rounded-lg"}),I.jsx("input",{type:"text",onChange:c=>f("url",c.target.value),value:a.url,placeholder:"url",className:"w-full sm:w-auto text-slate-50 bg-transparent border border-slate-700 focus:ring-slate-400 focus:outline-none p-4 rounded-lg"}),I.jsx("button",{type:"submit",className:"w-full sm:w-auto border border-purple-500 p-4 rounded-lg transition-opacity bg-purple-600 bg-opacity-30 hover:bg-opacity-50 text-slate-50 whitespace-nowrap",children:"Add new tool"})]}),I.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full bg-transparent text-slate-50",children:t.map(c=>I.jsx(oe,{tool:c},c.id))})]})}),I.jsx(Zt,{})]})}export{ae as InputEnum,ne as default};
