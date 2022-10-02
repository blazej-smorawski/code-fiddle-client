/*! For license information please see 977.9d8bdf47.chunk.js.LICENSE.txt */
(self.webpackChunkclient=self.webpackChunkclient||[]).push([[977],{3420:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r=n(4942),a=n(3366),i=n(7462),o=n(2791),l=n(7312),s=function(e){var t=o.useRef({});return o.useEffect((function(){t.current=e})),t.current},c=n(4419),u=n(5688),d=n(2054),f=n(5051),g=n(7637);function p(e){return(0,g.d6)("JoyBadge",e)}var h=(0,g.sI)("JoyBadge",["root","badge","anchorOriginTopRight","anchorOriginBottomRight","anchorOriginTopLeft","anchorOriginBottomLeft","colorPrimary","colorDanger","colorInfo","colorNeutral","colorSuccess","colorWarning","invisible","locationInside","locationOutside","sizeSm","sizeMd","sizeLg","variantOutlined","variantSoft","variantSolid"]),v=n(184),m=["anchorOrigin","badgeInset","children","component","componentsProps","size","color","invisible","max","badgeContent","showZero","variant"],y=(0,d.Z)("span",{name:"JoyBadge",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t=e.theme,n=e.ownerState;return(0,i.Z)({},"sm"===n.size&&(0,i.Z)({"--Badge-minHeight":"0.5rem"},n.badgeContent&&{"--Badge-minHeight":"1rem"},{"--Badge-paddingX":"0.25rem",fontSize:t.vars.fontSize.xs}),"md"===n.size&&(0,i.Z)({"--Badge-minHeight":"0.75rem"},n.badgeContent&&{"--Badge-minHeight":"1.25rem"},{"--Badge-paddingX":"0.375rem",fontSize:t.vars.fontSize.sm}),"lg"===n.size&&(0,i.Z)({"--Badge-minHeight":"1rem"},n.badgeContent&&{"--Badge-minHeight":"1.5rem"},{"--Badge-paddingX":"0.5rem",fontSize:t.vars.fontSize.md}),{"--Badge-ringSize":"2px","--Badge-ring":"0 0 0 var(--Badge-ringSize) var(--Badge-ringColor, ".concat(t.vars.palette.background.surface,")"),position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0})})),b=(0,d.Z)("span",{name:"JoyBadge",slot:"Badge",overridesResolver:function(e,t){return t.badge}})((function(e){var t,n,a,o,l,s,c=e.theme,u=e.ownerState,d={top:u.badgeInset,left:u.badgeInset,bottom:u.badgeInset,right:u.badgeInset};if("string"===typeof u.badgeInset){var f=u.badgeInset.split(" ");f.length>1&&(d.top=f[0],d.right=f[1],2===f.length&&(d.bottom=f[0],d.left=f[1]),3===f.length&&(d.left=f[1],d.bottom=f[2]),4===f.length&&(d.bottom=f[2],d.left=f[3]))}var g="top"===(null==(n=u.anchorOrigin)?void 0:n.vertical)?"translateY(-50%)":"translateY(50%)",p="left"===(null==(a=u.anchorOrigin)?void 0:a.horizontal)?"translateX(-50%)":"translateX(50%)",v="top"===(null==(o=u.anchorOrigin)?void 0:o.vertical)?"0%":"100%",m="left"===(null==(l=u.anchorOrigin)?void 0:l.horizontal)?"0%":"100%";return(0,i.Z)((t={display:"inline-flex",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",boxShadow:"var(--Badge-ring)",fontFamily:c.vars.fontFamily.body,fontWeight:c.vars.fontWeight.md,lineHeight:1,padding:"calc(var(--Badge-paddingX) / 2 - var(--variant-borderWidth)) calc(var(--Badge-paddingX) - var(--variant-borderWidth))",minHeight:"var(--Badge-minHeight)",minWidth:"var(--Badge-minHeight)",borderRadius:"var(--Badge-radius, var(--Badge-minHeight))",zIndex:1,transition:"transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",backgroundColor:c.vars.palette.background.surface},(0,r.Z)(t,u.anchorOrigin.vertical,d[u.anchorOrigin.vertical]),(0,r.Z)(t,u.anchorOrigin.horizontal,d[u.anchorOrigin.horizontal]),(0,r.Z)(t,"transform","scale(1) ".concat(p," ").concat(g)),(0,r.Z)(t,"transformOrigin","".concat(m," ").concat(v)),(0,r.Z)(t,"&.".concat(h.invisible),{transform:"scale(0) ".concat(p," ").concat(g)}),t),u.invisible&&{transition:"transform 195ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"},null==(s=c.variants[u.variant])?void 0:s[u.color])})),w=o.forwardRef((function(e,t){var n=(0,f.Z)({props:e,name:"JoyBadge"}),r=n.anchorOrigin,o=void 0===r?{vertical:"top",horizontal:"right"}:r,d=n.badgeInset,g=void 0===d?0:d,h=n.children,w=n.component,S=void 0===w?"span":w,x=n.componentsProps,k=void 0===x?{}:x,_=n.size,O=void 0===_?"md":_,C=n.color,E=void 0===C?"primary":C,Z=n.invisible,z=void 0!==Z&&Z,j=n.max,P=void 0===j?99:j,B=n.badgeContent,L=void 0===B?"":B,I=n.showZero,N=void 0!==I&&I,G=n.variant,A=void 0===G?"solid":G,K=(0,a.Z)(n,m),T=s({anchorOrigin:o,size:O,badgeInset:g,color:E,variant:A}),W=z;!1!==z||(0!==L||N)&&null!=L||(W=!0);var M=W?T:n,D=M.color,F=void 0===D?E:D,H=M.size,R=void 0===H?O:H,q=M.anchorOrigin,J=void 0===q?o:q,X=M.variant,$=void 0===X?A:X,U=M.badgeInset,V=void 0===U?g:U,Y=(0,i.Z)({},n,{anchorOrigin:J,badgeInset:V,variant:$,invisible:W,color:F,size:R}),Q=function(e){var t=e.color,n=e.variant,r=e.size,a=e.anchorOrigin,i={root:["root"],badge:["badge",e.invisible&&"invisible",a&&"anchorOrigin".concat((0,l.Z)(a.vertical)).concat((0,l.Z)(a.horizontal)),n&&"variant".concat((0,l.Z)(n)),t&&"color".concat((0,l.Z)(t)),r&&"size".concat((0,l.Z)(r))]};return(0,c.Z)(i,p,{})}(Y),ee=L&&Number(L)>P?"".concat(P,"+"):L;W&&0===L&&(ee="");var te=(0,u.Z)({elementType:y,ownerState:Y,externalSlotProps:k.root,externalForwardedProps:K,additionalProps:{ref:t,as:S},className:Q.root}),ne=(0,u.Z)({elementType:b,ownerState:Y,externalSlotProps:k.badge,className:Q.badge});return(0,v.jsxs)(y,(0,i.Z)({},te,{children:[h,(0,v.jsx)(b,(0,i.Z)({},ne,{children:ee}))]}))}))},6263:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(7462),a=n(3366),i=n(2791),o=n(9596),l=n(2421),s=n(104),c=n(8519),u=n(3459),d=n(184),f=["className","component"];var g=n(5902),p=n(1030),h=n(8188),v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultTheme,n=e.defaultClassName,g=void 0===n?"MuiBox-root":n,p=e.generateClassName,h=e.styleFunctionSx,v=void 0===h?s.Z:h,m=(0,l.ZP)("div",{shouldForwardProp:function(e){return"theme"!==e&&"sx"!==e&&"as"!==e}})(v),y=i.forwardRef((function(e,n){var i=(0,u.Z)(t),l=(0,c.Z)(e),s=l.className,h=l.component,v=void 0===h?"div":h,y=(0,a.Z)(l,f);return(0,d.jsx)(m,(0,r.Z)({as:v,ref:n,className:(0,o.Z)(s,p?p(g):g),theme:i},y))}));return y}({defaultTheme:p.Z,defaultClassName:"JoyBox-root",generateClassName:g.Z.generate,styleFunctionSx:h.ZP}),m=v},6227:function(e,t,n){"use strict";n.d(t,{Z:function(){return I}});var r=n(885),a=n(2982),i=n(7462),o=n(3366),l=n(2791),s=n(9596),c=n(4419),u=n(1217),d=(0,n(4046).ZP)(),f=n(8691),g=n(3459),p=n(8519),h=n(2173),v=function(e,t,n){var r=e.keys[0];if(Array.isArray(t))t.forEach((function(t,r){n((function(t,n){r<=e.keys.length-1&&(0===r?Object.assign(t,n):t[e.up(e.keys[r])]=n)}),t)}));else if(t&&"object"===typeof t){(Object.keys(t).length>e.keys.length?e.keys:Object.keys(t)).forEach((function(a){if(-1!==e.keys.indexOf(a)){var i=t[a];void 0!==i&&n((function(t,n){r===a?Object.assign(t,n):t[e.up(a)]=n}),i)}}))}else"number"!==typeof t&&"string"!==typeof t||n((function(e,t){Object.assign(e,t)}),t)},m=function(e){var t=e.theme,n=e.ownerState,r={};return v(t.breakpoints,n.gridSize,(function(e,t){var a={};!0===t&&(a={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===t&&(a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"===typeof t&&(a={flexGrow:0,flexBasis:"auto",width:"calc(100% * ".concat(t," / var(--Grid-columns)").concat(n.nested&&n.container?" + var(--Grid-columnSpacing)":"",")")}),e(r,a)})),r},y=function(e){var t=e.theme,n=e.ownerState,r={};return v(t.breakpoints,n.gridOffset,(function(e,t){var n={};"auto"===t&&(n={marginLeft:"auto"}),"number"===typeof t&&(n={marginLeft:0===t?"0px":"calc(100% * ".concat(t," / var(--Grid-columns))")}),e(r,n)})),r},b=function(e){var t=e.theme,n=e.ownerState;if(!n.container)return{};var r={"--Grid-columns":12};return v(t.breakpoints,n.columns,(function(e,t){e(r,{"--Grid-columns":t})})),r},w=function(e){var t=e.theme,n=e.ownerState;if(!n.container)return{};var r={};return v(t.breakpoints,n.rowSpacing,(function(e,n){var a;e(r,{"--Grid-rowSpacing":"string"===typeof n?n:null==(a=t.spacing)?void 0:a.call(t,n)})})),r},S=function(e){var t=e.theme,n=e.ownerState;if(!n.container)return{};var r={};return v(t.breakpoints,n.columnSpacing,(function(e,n){var a;e(r,{"--Grid-columnSpacing":"string"===typeof n?n:null==(a=t.spacing)?void 0:a.call(t,n)})})),r},x=function(e){var t=e.theme,n=e.ownerState;if(!n.container)return{};var r={};return v(t.breakpoints,n.direction,(function(e,t){e(r,{flexDirection:t})})),r},k=function(e){var t=e.ownerState;return(0,i.Z)({minWidth:0,boxSizing:"border-box"},t.container?(0,i.Z)({display:"flex",flexWrap:"wrap"},t.wrap&&"wrap"!==t.wrap&&{flexWrap:t.wrap},{margin:"calc(var(--Grid-rowSpacing) / -2) calc(var(--Grid-columnSpacing) / -2)"},t.disableEqualOverflow&&{margin:"calc(var(--Grid-rowSpacing) * -1) 0px 0px calc(var(--Grid-columnSpacing) * -1)"},t.nested?(0,i.Z)({padding:"calc(var(--Grid-nested-rowSpacing) / 2) calc(var(--Grid-nested-columnSpacing) / 2)"},(t.disableEqualOverflow||t.parentDisableEqualOverflow)&&{padding:"calc(var(--Grid-nested-rowSpacing)) 0px 0px calc(var(--Grid-nested-columnSpacing))"}):{"--Grid-nested-rowSpacing":"var(--Grid-rowSpacing)","--Grid-nested-columnSpacing":"var(--Grid-columnSpacing)"}):(0,i.Z)({padding:"calc(var(--Grid-rowSpacing) / 2) calc(var(--Grid-columnSpacing) / 2)"},t.disableEqualOverflow&&{padding:"calc(var(--Grid-rowSpacing)) 0px 0px calc(var(--Grid-columnSpacing))"}))},_=function(e){var t=[];return Object.entries(e).forEach((function(e){var n=(0,r.Z)(e,2),a=n[0],i=n[1];!1!==i&&void 0!==i&&t.push("grid-".concat(a,"-").concat(String(i)))})),t},O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"xs";function n(e){return void 0!==e&&("string"===typeof e&&!Number.isNaN(Number(e))||"number"===typeof e&&e>0)}if(n(e))return["spacing-".concat(t,"-").concat(String(e))];if("object"===typeof e&&!Array.isArray(e)){var a=[];return Object.entries(e).forEach((function(e){var t=(0,r.Z)(e,2),i=t[0],o=t[1];n(o)&&a.push("spacing-".concat(i,"-").concat(String(o)))})),a}return[]},C=n(184),E=["className","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow"],Z=(0,h.Z)(),z=d("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,t){return t.root}});function j(e){return(0,f.Z)({props:e,name:"MuiGrid",defaultTheme:Z})}var P=n(277),B=n(5513),L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?z:t,d=e.useThemeProps,f=void 0===d?j:d,h=e.componentName,v=void 0===h?"MuiGrid":h,Z=l.createContext(!1),P=l.createContext(void 0),B=function(e,t){var n=e.container,r=e.direction,i=e.spacing,o=e.wrap,l=e.gridSize,s={root:["root",n&&"container","row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==o&&"wrap-xs-".concat(String(o))].concat((0,a.Z)(_(l)),(0,a.Z)(n?O(i,t.breakpoints.keys[0]):[]))};return(0,c.Z)(s,(function(e){return(0,u.Z)(v,e)}),{})},L=n(b,S,w,m,x,k,y),I=l.forwardRef((function(e,t){var n,a,c,u,d,h,v,m,y=(0,g.Z)(),b=f(e),w=(0,p.Z)(b),S=l.useContext(Z),x=l.useContext(P),k=w.className,_=w.columns,O=void 0===_?12:_,z=w.container,j=void 0!==z&&z,I=w.component,N=void 0===I?"div":I,G=w.direction,A=void 0===G?"row":G,K=w.wrap,T=void 0===K?"wrap":K,W=w.spacing,M=void 0===W?0:W,D=w.rowSpacing,F=void 0===D?M:D,H=w.columnSpacing,R=void 0===H?M:H,q=w.disableEqualOverflow,J=(0,o.Z)(w,E),X=q;S&&void 0!==q&&(X=e.disableEqualOverflow);var $={},U={},V={};Object.entries(J).forEach((function(e){var t=(0,r.Z)(e,2),n=t[0],a=t[1];void 0!==y.breakpoints.values[n]?$[n]=a:void 0!==y.breakpoints.values[n.replace("Offset","")]?U[n.replace("Offset","")]=a:V[n]=a}));var Y=null!=(n=e.columns)?n:S?void 0:O,Q=null!=(a=e.spacing)?a:S?void 0:M,ee=null!=(c=null!=(u=e.rowSpacing)?u:e.spacing)?c:S?void 0:F,te=null!=(d=null!=(h=e.columnSpacing)?h:e.spacing)?d:S?void 0:R,ne=(0,i.Z)({},w,{nested:S,columns:Y,container:j,direction:A,wrap:T,spacing:Q,rowSpacing:ee,columnSpacing:te,gridSize:$,gridOffset:U,disableEqualOverflow:null!=(v=null!=(m=X)?m:x)&&v,parentDisableEqualOverflow:x}),re=B(ne,y),ae=(0,C.jsx)(L,(0,i.Z)({ref:t,as:N,ownerState:ne,className:(0,s.Z)(re.root,k)},V));return S||(ae=(0,C.jsx)(Z.Provider,{value:!0,children:ae})),void 0!==X&&X!==(null!=x&&x)&&(ae=(0,C.jsx)(P.Provider,{value:X,children:ae})),ae}));return I}({createStyledComponent:(0,P.ZP)("div",{name:"MuiGrid2",overridesResolver:function(e,t){return t.root}}),componentName:"MuiGrid2",useThemeProps:function(e){return(0,B.Z)({props:e,name:"MuiGrid2"})}}),I=L},9596:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.Z=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},4350:function(){Prism.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/}},3693:function(e,t,n){var r=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,r={},a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,i;switch(n=n||{},a.util.type(t)){case"Object":if(i=a.util.objId(t),n[i])return n[i];for(var o in r={},n[i]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return i=a.util.objId(t),n[i]?n[i]:(r=[],n[i]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"===typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(r){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(r.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var r="no-"+t;e;){var a=e.classList;if(a.contains(t))return!0;if(a.contains(r))return!1;e=e.parentElement}return!!n}},languages:{plain:r,plaintext:r,text:r,txt:r,extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var i=(r=r||a.languages)[e],o={};for(var l in i)if(i.hasOwnProperty(l)){if(l==t)for(var s in n)n.hasOwnProperty(s)&&(o[s]=n[s]);n.hasOwnProperty(l)||(o[l]=i[l])}var c=r[e];return r[e]=o,a.languages.DFS(a.languages,(function(t,n){n===c&&t!=e&&(this[t]=o)})),o},DFS:function e(t,n,r,i){i=i||{};var o=a.util.objId;for(var l in t)if(t.hasOwnProperty(l)){n.call(t,l,t[l],r||l);var s=t[l],c=a.util.type(s);"Object"!==c||i[o(s)]?"Array"!==c||i[o(s)]||(i[o(s)]=!0,e(s,n,l,i)):(i[o(s)]=!0,e(s,n,null,i))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var i,o=0;i=r.elements[o++];)a.highlightElement(i,!0===t,r.callback)},highlightElement:function(t,n,r){var i=a.util.getLanguage(t),o=a.languages[i];a.util.setLanguage(t,i);var l=t.parentElement;l&&"pre"===l.nodeName.toLowerCase()&&a.util.setLanguage(l,i);var s={element:t,language:i,grammar:o,code:t.textContent};function c(e){s.highlightedCode=e,a.hooks.run("before-insert",s),s.element.innerHTML=s.highlightedCode,a.hooks.run("after-highlight",s),a.hooks.run("complete",s),r&&r.call(s.element)}if(a.hooks.run("before-sanity-check",s),(l=s.element.parentElement)&&"pre"===l.nodeName.toLowerCase()&&!l.hasAttribute("tabindex")&&l.setAttribute("tabindex","0"),!s.code)return a.hooks.run("complete",s),void(r&&r.call(s.element));if(a.hooks.run("before-highlight",s),s.grammar)if(n&&e.Worker){var u=new Worker(a.filename);u.onmessage=function(e){c(e.data)},u.postMessage(JSON.stringify({language:s.language,code:s.code,immediateClose:!0}))}else c(a.highlight(s.code,s.grammar,s.language));else c(a.util.encode(s.code))},highlight:function(e,t,n){var r={code:e,grammar:t,language:n};if(a.hooks.run("before-tokenize",r),!r.grammar)throw new Error('The language "'+r.language+'" has no grammar.');return r.tokens=a.tokenize(r.code,r.grammar),a.hooks.run("after-tokenize",r),i.stringify(a.util.encode(r.tokens),r.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var r in n)t[r]=n[r];delete t.rest}var a=new s;return c(a,a.head,e),l(e,a,t,a.head,0),function(e){var t=[],n=e.head.next;for(;n!==e.tail;)t.push(n.value),n=n.next;return t}(a)},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,i=0;r=n[i++];)r(t)}},Token:i};function i(e,t,n,r){this.type=e,this.content=t,this.alias=n,this.length=0|(r||"").length}function o(e,t,n,r){e.lastIndex=t;var a=e.exec(n);if(a&&r&&a[1]){var i=a[1].length;a.index+=i,a[0]=a[0].slice(i)}return a}function l(e,t,n,r,s,d){for(var f in n)if(n.hasOwnProperty(f)&&n[f]){var g=n[f];g=Array.isArray(g)?g:[g];for(var p=0;p<g.length;++p){if(d&&d.cause==f+","+p)return;var h=g[p],v=h.inside,m=!!h.lookbehind,y=!!h.greedy,b=h.alias;if(y&&!h.pattern.global){var w=h.pattern.toString().match(/[imsuy]*$/)[0];h.pattern=RegExp(h.pattern.source,w+"g")}for(var S=h.pattern||h,x=r.next,k=s;x!==t.tail&&!(d&&k>=d.reach);k+=x.value.length,x=x.next){var _=x.value;if(t.length>e.length)return;if(!(_ instanceof i)){var O,C=1;if(y){if(!(O=o(S,k,e,m))||O.index>=e.length)break;var E=O.index,Z=O.index+O[0].length,z=k;for(z+=x.value.length;E>=z;)z+=(x=x.next).value.length;if(k=z-=x.value.length,x.value instanceof i)continue;for(var j=x;j!==t.tail&&(z<Z||"string"===typeof j.value);j=j.next)C++,z+=j.value.length;C--,_=e.slice(k,z),O.index-=k}else if(!(O=o(S,0,_,m)))continue;E=O.index;var P=O[0],B=_.slice(0,E),L=_.slice(E+P.length),I=k+_.length;d&&I>d.reach&&(d.reach=I);var N=x.prev;if(B&&(N=c(t,N,B),k+=B.length),u(t,N,C),x=c(t,N,new i(f,v?a.tokenize(P,v):P,b,P)),L&&c(t,x,L),C>1){var G={cause:f+","+p,reach:I};l(e,t,n,x.prev,k,G),d&&G.reach>d.reach&&(d.reach=G.reach)}}}}}}function s(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var r=t.next,a={value:n,prev:t,next:r};return t.next=a,r.prev=a,e.length++,a}function u(e,t,n){for(var r=t.next,a=0;a<n&&r!==e.tail;a++)r=r.next;t.next=r,r.prev=t,e.length-=a}if(e.Prism=a,i.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var r="";return t.forEach((function(t){r+=e(t,n)})),r}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},o=t.alias;o&&(Array.isArray(o)?Array.prototype.push.apply(i.classes,o):i.classes.push(o)),a.hooks.run("wrap",i);var l="";for(var s in i.attributes)l+=" "+s+'="'+(i.attributes[s]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+l+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,i=n.code,o=n.immediateClose;e.postMessage(a.highlight(i,a.languages[r],r)),o&&e.close()}),!1),a):a;var d=a.util.currentScript();function f(){a.manual||a.highlightAll()}if(d&&(a.filename=d.src,d.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var g=document.readyState;"loading"===g||"interactive"===g&&d&&d.defer?document.addEventListener("DOMContentLoaded",f):window.requestAnimationFrame?window.requestAnimationFrame(f):window.setTimeout(f,16)}return a}("undefined"!==typeof window?window:"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=r),"undefined"!==typeof n.g&&(n.g.Prism=r)},5156:function(){Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python},4044:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},e(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),a=this&&this.__assign||function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},a.apply(this,arguments)},i=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,a)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),l=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return o(t,e),t},s=this&&this.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0});var c=l(n(2791)),u=90,d=219,f=222,g=192,p=100,h="undefined"!==typeof window&&"navigator"in window&&/Win/i.test(navigator.platform),v="undefined"!==typeof window&&"navigator"in window&&/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform),m="npm__react-simple-code-editor__textarea",y="\n/**\n * Reset the text fill color so that placeholder is visible\n */\n.".concat(m,":empty {\n  -webkit-text-fill-color: inherit !important;\n}\n\n/**\n * Hack to apply on some CSS on IE10 and IE11\n */\n@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {\n  /**\n    * IE doesn't support '-webkit-text-fill-color'\n    * So we use 'color: transparent' to make the text transparent on IE\n    * Unlike other browsers, it doesn't affect caret color in IE\n    */\n  .").concat(m," {\n    color: transparent !important;\n  }\n\n  .").concat(m,"::selection {\n    background-color: #accef7 !important;\n    color: transparent !important;\n  }\n}\n"),b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={capture:!0},t._recordCurrentState=function(){var e=t._input;if(e){var n=e.value,r=e.selectionStart,a=e.selectionEnd;t._recordChange({value:n,selectionStart:r,selectionEnd:a})}},t._getLines=function(e,t){return e.substring(0,t).split("\n")},t._recordChange=function(e,n){var r,i,o;void 0===n&&(n=!1);var l=t._history,s=l.stack,c=l.offset;if(s.length&&c>-1){t._history.stack=s.slice(0,c+1);var u=t._history.stack.length;if(u>p){var d=u-p;t._history.stack=s.slice(d,u),t._history.offset=Math.max(t._history.offset-d,0)}}var f=Date.now();if(n){var g=t._history.stack[t._history.offset];if(g&&f-g.timestamp<3e3){var h=/[^a-z0-9]([a-z0-9]+)$/i,v=null===(r=t._getLines(g.value,g.selectionStart).pop())||void 0===r?void 0:r.match(h),m=null===(i=t._getLines(e.value,e.selectionStart).pop())||void 0===i?void 0:i.match(h);if((null===v||void 0===v?void 0:v[1])&&(null===(o=null===m||void 0===m?void 0:m[1])||void 0===o?void 0:o.startsWith(v[1])))return void(t._history.stack[t._history.offset]=a(a({},e),{timestamp:f}))}}t._history.stack.push(a(a({},e),{timestamp:f})),t._history.offset++},t._updateInput=function(e){var n=t._input;n&&(n.value=e.value,n.selectionStart=e.selectionStart,n.selectionEnd=e.selectionEnd,t.props.onValueChange(e.value))},t._applyEdits=function(e){var n=t._input,r=t._history.stack[t._history.offset];r&&n&&(t._history.stack[t._history.offset]=a(a({},r),{selectionStart:n.selectionStart,selectionEnd:n.selectionEnd})),t._recordChange(e),t._updateInput(e)},t._undoEdit=function(){var e=t._history,n=e.stack,r=e.offset,a=n[r-1];a&&(t._updateInput(a),t._history.offset=Math.max(r-1,0))},t._redoEdit=function(){var e=t._history,n=e.stack,r=e.offset,a=n[r+1];a&&(t._updateInput(a),t._history.offset=Math.min(r+1,n.length-1))},t._handleKeyDown=function(e){var n=t.props,r=n.tabSize,a=n.insertSpaces,i=n.ignoreTabKey,o=n.onKeyDown;if(!o||(o(e),!e.defaultPrevented)){27===e.keyCode&&e.currentTarget.blur();var l=e.currentTarget,s=l.value,c=l.selectionStart,p=l.selectionEnd,m=(a?" ":"\t").repeat(r);if(9===e.keyCode&&!i&&t.state.capture)if(e.preventDefault(),e.shiftKey){var y=(x=t._getLines(s,c)).length-1,b=t._getLines(s,p).length-1,w=s.split("\n").map((function(e,t){return t>=y&&t<=b&&e.startsWith(m)?e.substring(m.length):e})).join("\n");if(s!==w){var S=x[y];t._applyEdits({value:w,selectionStart:(null===S||void 0===S?void 0:S.startsWith(m))?c-m.length:c,selectionEnd:p-(s.length-w.length)})}}else if(c!==p){var x,k=(x=t._getLines(s,c)).length-1,_=t._getLines(s,p).length-1;S=x[k];t._applyEdits({value:s.split("\n").map((function(e,t){return t>=k&&t<=_?m+e:e})).join("\n"),selectionStart:S&&/\S/.test(S)?c+m.length:c,selectionEnd:p+m.length*(_-k+1)})}else{var O=c+m.length;t._applyEdits({value:s.substring(0,c)+m+s.substring(p),selectionStart:O,selectionEnd:O})}else if(8===e.keyCode){var C=c!==p;if(s.substring(0,c).endsWith(m)&&!C){e.preventDefault();O=c-m.length;t._applyEdits({value:s.substring(0,c-m.length)+s.substring(p),selectionStart:O,selectionEnd:O})}}else if(13===e.keyCode){if(c===p){var E=t._getLines(s,c).pop(),Z=null===E||void 0===E?void 0:E.match(/^\s+/);if(null===Z||void 0===Z?void 0:Z[0]){e.preventDefault();var z="\n"+Z[0];O=c+z.length;t._applyEdits({value:s.substring(0,c)+z+s.substring(p),selectionStart:O,selectionEnd:O})}}}else if(57===e.keyCode||e.keyCode===d||e.keyCode===f||e.keyCode===g){var j=void 0;57===e.keyCode&&e.shiftKey?j=["(",")"]:e.keyCode===d?j=e.shiftKey?["{","}"]:["[","]"]:e.keyCode===f?j=e.shiftKey?['"','"']:["'","'"]:e.keyCode!==g||e.shiftKey||(j=["`","`"]),c!==p&&j&&(e.preventDefault(),t._applyEdits({value:s.substring(0,c)+j[0]+s.substring(c,p)+j[1]+s.substring(p),selectionStart:c,selectionEnd:p+2}))}else!(v?e.metaKey&&e.keyCode===u:e.ctrlKey&&e.keyCode===u)||e.shiftKey||e.altKey?(v?e.metaKey&&e.keyCode===u&&e.shiftKey:h?e.ctrlKey&&89===e.keyCode:e.ctrlKey&&e.keyCode===u&&e.shiftKey)&&!e.altKey?(e.preventDefault(),t._redoEdit()):77!==e.keyCode||!e.ctrlKey||v&&!e.shiftKey||(e.preventDefault(),t.setState((function(e){return{capture:!e.capture}}))):(e.preventDefault(),t._undoEdit())}},t._handleChange=function(e){var n=e.currentTarget,r=n.value,a=n.selectionStart,i=n.selectionEnd;t._recordChange({value:r,selectionStart:a,selectionEnd:i},!0),t.props.onValueChange(r)},t._history={stack:[],offset:-1},t._input=null,t}return r(t,e),t.prototype.componentDidMount=function(){this._recordCurrentState()},Object.defineProperty(t.prototype,"session",{get:function(){return{history:this._history}},set:function(e){this._history=e.history},enumerable:!1,configurable:!0}),t.prototype.render=function(){var e=this,t=this.props,n=t.value,r=t.style,i=t.padding,o=t.highlight,l=t.textareaId,u=t.textareaClassName,d=t.autoFocus,f=t.disabled,g=t.form,p=t.maxLength,h=t.minLength,v=t.name,b=t.placeholder,S=t.readOnly,x=t.required,k=t.onClick,_=t.onFocus,O=t.onBlur,C=t.onKeyUp,E=(t.onKeyDown,t.onValueChange,t.tabSize,t.insertSpaces,t.ignoreTabKey,t.preClassName),Z=s(t,["value","style","padding","highlight","textareaId","textareaClassName","autoFocus","disabled","form","maxLength","minLength","name","placeholder","readOnly","required","onClick","onFocus","onBlur","onKeyUp","onKeyDown","onValueChange","tabSize","insertSpaces","ignoreTabKey","preClassName"]),z={paddingTop:"object"===typeof i?i.top:i,paddingRight:"object"===typeof i?i.right:i,paddingBottom:"object"===typeof i?i.bottom:i,paddingLeft:"object"===typeof i?i.left:i},j=o(n);return c.createElement("div",a({},Z,{style:a(a({},w.container),r)}),c.createElement("pre",a({className:E,"aria-hidden":"true",style:a(a(a({},w.editor),w.highlight),z)},"string"===typeof j?{dangerouslySetInnerHTML:{__html:j+"<br />"}}:{children:j})),c.createElement("textarea",{ref:function(t){return e._input=t},style:a(a(a({},w.editor),w.textarea),z),className:m+(u?" ".concat(u):""),id:l,value:n,onChange:this._handleChange,onKeyDown:this._handleKeyDown,onClick:k,onKeyUp:C,onFocus:_,onBlur:O,disabled:f,form:g,maxLength:p,minLength:h,name:v,placeholder:b,readOnly:S,required:x,autoFocus:d,autoCapitalize:"off",autoComplete:"off",autoCorrect:"off",spellCheck:!1,"data-gramm":!1}),c.createElement("style",{dangerouslySetInnerHTML:{__html:y}}))},t.defaultProps={tabSize:2,insertSpaces:!0,ignoreTabKey:!1,padding:0},t}(c.Component);t.default=b;var w={container:{position:"relative",textAlign:"left",boxSizing:"border-box",padding:0,overflow:"hidden"},textarea:{position:"absolute",top:0,left:0,height:"100%",width:"100%",resize:"none",color:"inherit",overflow:"hidden",MozOsxFontSmoothing:"grayscale",WebkitFontSmoothing:"antialiased",WebkitTextFillColor:"transparent"},highlight:{position:"relative",pointerEvents:"none"},editor:{margin:0,border:0,background:"none",boxSizing:"inherit",display:"inherit",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontVariantLigatures:"inherit",fontWeight:"inherit",letterSpacing:"inherit",lineHeight:"inherit",tabSize:"inherit",textIndent:"inherit",textRendering:"inherit",textTransform:"inherit",whiteSpace:"pre-wrap",wordBreak:"keep-all",overflowWrap:"break-word"}}}}]);
//# sourceMappingURL=977.9d8bdf47.chunk.js.map