"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),m=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=m(n),c=r,g=p["".concat(i,".").concat(c)]||p[c]||u[c]||o;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var m=2;m<o;m++)l[m]=n[m];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9106:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:2},l="2.2.2 WasmEdge extensions",s={unversionedId:"develop/wasmedge/extensions/unique_extensions",id:"develop/wasmedge/extensions/unique_extensions",title:"2.2.2 WasmEdge extensions",description:"A key differentiator of WasmEdge from other WebAssembly runtimes is its support for non-standard extensions. The WebAssembly System Interface (WASI) provides a mechanism for developers to extend WebAssembly efficiently and securely. The WasmEdge team created the following WASI-like extensions based on real-world customer demands.",source:"@site/docs/develop/wasmedge/extensions/unique_extensions.md",sourceDirName:"develop/wasmedge/extensions",slug:"/develop/wasmedge/extensions/unique_extensions",permalink:"/book/zh-TW/develop/wasmedge/extensions/unique_extensions",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/wasmedge/extensions/unique_extensions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"2.2.1  Standard WebAssembly proposals",permalink:"/book/zh-TW/develop/wasmedge/extensions/proposals"},next:{title:"2.3 Component Model and Third Party Extensions",permalink:"/book/zh-TW/develop/wasmedge/component_model"}},i={},m=[],d={toc:m};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"222-wasmedge-extensions"},"2.2.2 WasmEdge extensions"),(0,r.kt)("p",null,"A key differentiator of WasmEdge from other WebAssembly runtimes is its support for non-standard extensions. The WebAssembly System Interface (WASI) provides a mechanism for developers to extend WebAssembly efficiently and securely. The WasmEdge team created the following WASI-like extensions based on real-world customer demands."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Platform Support"),(0,r.kt)("th",{parentName:"tr",align:null},"Language support"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Networking"),(0,r.kt)("td",{parentName:"tr",align:null},"Open and manage non-blocking socket connections from inside Wasm apps"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust, JavaScript, C")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MySQL-based Database Driver"),(0,r.kt)("td",{parentName:"tr",align:null},"A connector for the MySQL-based database running in WasmEdge"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WASI-NN with Pytorch backend"),(0,r.kt)("td",{parentName:"tr",align:null},"AI inference in WasmEdge"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WASI-NN with TensorFlow backend"),(0,r.kt)("td",{parentName:"tr",align:null},"AI inference in WasmEdge"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/second-state/WasmEdge-image"},"Image processing")),(0,r.kt)("td",{parentName:"tr",align:null},"A native libraries to manipulate images for computer vision tasks"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"KV Storage"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows WebAssembly programs to read and write a key value store"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Command interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Allows WebAssembly programs to execute native commands in the host operating system"),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"Rust")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/second-state/wasmedge-evmc"},"Ethereum")),(0,r.kt)("td",{parentName:"tr",align:null},"supports Ethereum smart contracts compiled to WebAssembly."),(0,r.kt)("td",{parentName:"tr",align:null},"none"),(0,r.kt)("td",{parentName:"tr",align:null},"It is a leading implementation for Ethereum flavored WebAssembly (Ewasm).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/second-state/substrate-ssvm-node"},"Substrate")),(0,r.kt)("td",{parentName:"tr",align:null},"The ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/second-state/pallet-ssvm"},"Pallet")," allows WasmEdge to act as an Ethereum smart contract execution engine on any Substrate based blockchains."),(0,r.kt)("td",{parentName:"tr",align:null},"Linux"),(0,r.kt)("td",{parentName:"tr",align:null},"none")))))}p.isMDXComponent=!0}}]);