(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[197],{35202:function(){!function(){"use strict";function applyFocusVisiblePolyfill(e){var t=!0,n=!1,o=null,i={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function isValidFocusTarget(e){return!!e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList}function addFocusVisibleClass(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function onPointerDown(e){t=!1}function addInitialPointerMoveListeners(){document.addEventListener("mousemove",onInitialPointerMove),document.addEventListener("mousedown",onInitialPointerMove),document.addEventListener("mouseup",onInitialPointerMove),document.addEventListener("pointermove",onInitialPointerMove),document.addEventListener("pointerdown",onInitialPointerMove),document.addEventListener("pointerup",onInitialPointerMove),document.addEventListener("touchmove",onInitialPointerMove),document.addEventListener("touchstart",onInitialPointerMove),document.addEventListener("touchend",onInitialPointerMove)}function onInitialPointerMove(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,document.removeEventListener("mousemove",onInitialPointerMove),document.removeEventListener("mousedown",onInitialPointerMove),document.removeEventListener("mouseup",onInitialPointerMove),document.removeEventListener("pointermove",onInitialPointerMove),document.removeEventListener("pointerdown",onInitialPointerMove),document.removeEventListener("pointerup",onInitialPointerMove),document.removeEventListener("touchmove",onInitialPointerMove),document.removeEventListener("touchstart",onInitialPointerMove),document.removeEventListener("touchend",onInitialPointerMove))}document.addEventListener("keydown",function(n){n.metaKey||n.altKey||n.ctrlKey||(isValidFocusTarget(e.activeElement)&&addFocusVisibleClass(e.activeElement),t=!0)},!0),document.addEventListener("mousedown",onPointerDown,!0),document.addEventListener("pointerdown",onPointerDown,!0),document.addEventListener("touchstart",onPointerDown,!0),document.addEventListener("visibilitychange",function(e){"hidden"===document.visibilityState&&(n&&(t=!0),addInitialPointerMoveListeners())},!0),addInitialPointerMoveListeners(),e.addEventListener("focus",function(e){var n,o,s;isValidFocusTarget(e.target)&&(t||(o=(n=e.target).type,"INPUT"===(s=n.tagName)&&i[o]&&!n.readOnly||"TEXTAREA"===s&&!n.readOnly||n.isContentEditable))&&addFocusVisibleClass(e.target)},!0),e.addEventListener("blur",function(e){if(isValidFocusTarget(e.target)){var t;(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout(function(){n=!1},100),(t=e.target).hasAttribute("data-focus-visible-added")&&(t.classList.remove("focus-visible"),t.removeAttribute("data-focus-visible-added")))}},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var e;window.applyFocusVisiblePolyfill=applyFocusVisiblePolyfill;try{e=new CustomEvent("focus-visible-polyfill-ready")}catch(t){(e=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(e)}"undefined"!=typeof document&&applyFocusVisiblePolyfill(document)}()},20394:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/404",function(){return n(30635)}])},30635:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Component}});var o=n(85893),i=n(67294),s=n(11163),a=n(68917),d=n(49324);n(35202);let useClientSideRouting=()=>{let[e,t]=(0,i.useState)(!1),n=(0,i.useRef)(!1),o=(0,s.useRouter)();return(0,i.useEffect)(()=>{o.isReady&&!n.current&&(n.current=!0,o.replace({pathname:window.location.pathname,query:window.location.search.slice(1)}).catch(e=>{t(!0)}))},[o.isReady]),e};var r=n(12918),u=n.n(r),c=n(9008),l=n.n(c);function Component(){let e=(0,s.useRouter)(),[t,n]=(0,i.useContext)(d.kc),r=(0,i.useRef)(),[c,m]=(0,i.useContext)(d.DR);(0,i.useEffect)(()=>{r.current&&r.current.focus()}),(0,i.useEffect)(()=>{let change_complete=()=>c((0,d.Xs)());return e.events.on("routeChangeComplete",change_complete),()=>{e.events.off("routeChangeComplete",change_complete)}},[e]);let v=useClientSideRouting();return(0,o.jsxs)(i.Fragment,{children:[(0,o.jsx)(i.Fragment,{children:(0,a.oA)(v)?(0,o.jsx)(i.Fragment,{children:(0,o.jsx)(u(),{statusCode:404})}):(0,o.jsx)(i.Fragment,{})}),(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:"404 - Not Found"}),(0,o.jsx)("meta",{content:"The page was not found",name:"description"}),(0,o.jsx)("meta",{content:"favicon.ico",property:"og:image"})]})]})}},12918:function(e,t,n){e.exports=n(55480)},9008:function(e,t,n){e.exports=n(34605)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=20394)}),_N_E=e.O()}]);