"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1},l="Installation",i={unversionedId:"intro",id:"intro",title:"Installation",description:"Manually",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/TableValue/docs/intro",draft:!1,editUrl:"https://github.com/data-oriented-house/TableValue/edit/main/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar"},c={},u=[{value:"Manually",id:"manually",level:2},{value:"Wally Package Manager",id:"wally-package-manager",level:2}],p={toc:u},s="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"manually"},"Manually"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Copy the source code from ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Data-Oriented-House/TableValue/blob/main/src/init.lua"},"src/init.lua")),(0,a.kt)("li",{parentName:"ol"},"Paste it into a ModuleScript or file")),(0,a.kt)("h2",{id:"wally-package-manager"},"Wally Package Manager"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("a",{parentName:"li",href:"https://wally.run/package/data-oriented-house/tablevalue"},"wally.run")," and click the text under ",(0,a.kt)("strong",{parentName:"li"},"Install")," on the right"),(0,a.kt)("li",{parentName:"ol"},"Paste it under ",(0,a.kt)("strong",{parentName:"li"},"Dependencies")," in your ",(0,a.kt)("inlineCode",{parentName:"li"},"wally.toml")," file")))}d.isMDXComponent=!0}}]);