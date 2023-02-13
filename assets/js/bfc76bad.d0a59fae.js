"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[4541],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>N});var a=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)i=l[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),d=p(i),k=n,N=d["".concat(s,".").concat(k)]||d[k]||u[k]||l;return i?a.createElement(N,o(o({ref:t},m),{},{components:i})):a.createElement(N,o({ref:t},m))}));function N(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=i.length,o=new Array(l);o[0]=k;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:n,o[1]=r;for(var p=2;p<l;p++)o[p]=i[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}k.displayName="MDXCreateElement"},3127:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>r,toc:()=>p});var a=i(7462),n=(i(7294),i(3905));const l={sidebar_position:1},o="Build WasmEdge from source",r={unversionedId:"contribute/source/build_from_src",id:"contribute/source/build_from_src",title:"Build WasmEdge from source",description:"Please follow this guide to build and test WasmEdge from the source code.",source:"@site/docs/contribute/source/build_from_src.md",sourceDirName:"contribute/source",slug:"/contribute/source/build_from_src",permalink:"/book/contribute/source/build_from_src",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute/source/build_from_src.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"contributeSidebar",previous:{title:"Build WasmEdge from source",permalink:"/book/category/build-wasmedge-from-source"},next:{title:"Docker Image",permalink:"/book/contribute/source/docker"}},s={},p=[{value:"What Will Be Built",id:"what-will-be-built",level:2},{value:"CMake Building Options",id:"cmake-building-options",level:2},{value:"Build WasmEdge with Plug-ins",id:"build-wasmedge-with-plug-ins",level:2},{value:"Run Tests",id:"run-tests",level:2}],m={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"build-wasmedge-from-source"},"Build WasmEdge from source"),(0,n.kt)("p",null,"Please follow this guide to build and test WasmEdge from the source code."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/os/linux"},"Linux")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/os/macos"},"MacOS")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/os/windows"},"Windows")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"../../category/build-and-run-wasmedge-on-android"},"Android")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/os/openwrt"},"OpenWrt")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/os/riscv"},"RISC-V")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/os/openharmony"},"OpenHarmony")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/os/sel4"},"seL4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/os/raspberrypi"},"Raspberry Pi"))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"If you just want the latest builds from the ",(0,n.kt)("inlineCode",{parentName:"p"},"HEAD")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"master")," branch, and do not want to build it yourself, you can download the release package directly from our Github Action's CI artifact. ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/actions/runs/1521549504#artifacts"},"Here is an example"),".")),(0,n.kt)("h2",{id:"what-will-be-built"},"What Will Be Built"),(0,n.kt)("p",null,"WasmEdge provides various tools for enabling different runtime environments for optimal performance.\nYou can find that there are several wasmedge related tools:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"wasmedge")," is the general wasm runtime.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"wasmedge")," executes a ",(0,n.kt)("inlineCode",{parentName:"li"},"WASM")," file in the interpreter mode or a compiled ",(0,n.kt)("inlineCode",{parentName:"li"},"WASM")," file in the ahead-of-time compilation mode."),(0,n.kt)("li",{parentName:"ul"},"To disable building all tools, you can set the CMake option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_TOOLS")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"wasmedgec")," is the ahead-of-time ",(0,n.kt)("inlineCode",{parentName:"li"},"WASM")," compiler.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"wasmedgec")," compiles a general ",(0,n.kt)("inlineCode",{parentName:"li"},"WASM")," file into a compiled ",(0,n.kt)("inlineCode",{parentName:"li"},"WASM")," file."),(0,n.kt)("li",{parentName:"ul"},"To disable building the ahead-of-time compiler only, you can set the CMake option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_AOT_RUNTIME")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"libwasmedge.so")," is the WasmEdge C API shared library. (",(0,n.kt)("inlineCode",{parentName:"li"},"libwasmedge.dylib")," on MacOS and ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedge.dll")," on Windows)",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"libwasmedge.so"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"libwasmedge.dylib"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedge.dll")," provides the C API for the ahead-of-time compiler and the WASM runtime."),(0,n.kt)("li",{parentName:"ul"},"The APIs related to the ahead-of-time compiler will always fail if the CMake option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_AOT_RUNTIME")," is set as ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."),(0,n.kt)("li",{parentName:"ul"},"To disable building just the shared library, you can set the CMake option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_SHARED_LIB")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"ssvm-qitc")," is for AI applications and supports the ONNC runtime for AI models in the ONNX format.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you want to try ",(0,n.kt)("inlineCode",{parentName:"li"},"ssvm-qitc"),", please refer to ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/ONNC/onnc-wasm"},"ONNC-Wasm")," project to set up the working environment and tryout several examples."),(0,n.kt)("li",{parentName:"ul"},"And here is our ",(0,n.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=cbiPuHMS-iQ"},"tutorial for ONNC-Wasm project(YouTube Video)"),".")))),(0,n.kt)("h2",{id:"cmake-building-options"},"CMake Building Options"),(0,n.kt)("p",null,"Developers can set the CMake options to customize the WasmEdge building."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_TESTS"),": build the WasmEdge tests. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_AOT_RUNTIME"),": build with the Ahead-of-Time compiler supporting. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_SHARED_LIB"),": build the WasmEdge shared library (",(0,n.kt)("inlineCode",{parentName:"li"},"libwasmedge.so"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"libwasmedge.dylib"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedge.dll"),"). Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"By default, the WasmEdge shared library will link to the LLVM shared library."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_STATIC_LIB"),": build the WasmEdge static library (",(0,n.kt)("inlineCode",{parentName:"li"},"libwasmedge.a"),", Linux and MacOS platforms, experimental). Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If this option is set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),", the option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_FORCE_DISABLE_LTO")," will forcefully be set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),"."),(0,n.kt)("li",{parentName:"ul"},"If this option is set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),", the ",(0,n.kt)("inlineCode",{parentName:"li"},"libz")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"libtinfo")," on Linux platforms will be statically linked."),(0,n.kt)("li",{parentName:"ul"},"For linking with ",(0,n.kt)("inlineCode",{parentName:"li"},"libwasmedge.a"),", developers should also add the ",(0,n.kt)("inlineCode",{parentName:"li"},"-ldl"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"-pthread"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"-lm"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"-lstdc++")," linker options on both Linux and MacOS platforms, and ",(0,n.kt)("inlineCode",{parentName:"li"},"-lrt")," on Linux platforms."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_TOOLS"),": build the ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedge")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedgec")," tools. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedge")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedgec")," tools will link to the WasmEdge shared library by default."),(0,n.kt)("li",{parentName:"ul"},"If this option is set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_AOT_RUNTIME")," is set as ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),", the ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedgec")," tool for the AOT compiler will not be built."),(0,n.kt)("li",{parentName:"ul"},"If this option is set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON")," but the option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_LINK_TOOLS_STATIC")," is set as ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),", the option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_SHARED_LIB")," will forcefully be set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),"."),(0,n.kt)("li",{parentName:"ul"},"If this option and the option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_LINK_TOOLS_STATIC")," are both set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),", the ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_LINK_LLVM_STATIC")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_STATIC_LIB")," will both be set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),", and the ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedge")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedgec")," tools will link to the WasmEdge static library instead. In this case, the plugins will not work in tools."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_PLUGINS"),": build the WasmEdge plugins. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_EXAMPLE"),": build the WasmEdge examples. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_PLUGIN_WASI_NN_BACKEND"),": build the WasmEdge WASI-NN plugin (Linux platforms only). Default is empty.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This option is useless if the option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_PLUGINS")," is set as ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."),(0,n.kt)("li",{parentName:"ul"},"To build the WASI-NN plugin with backend, please use ",(0,n.kt)("inlineCode",{parentName:"li"},"-DWASMEDGE_PLUGIN_WASI_NN_BACKEND=<backend_name>"),"."),(0,n.kt)("li",{parentName:"ul"},"To build the WASI-NN plugin with multiple backends, please use ",(0,n.kt)("inlineCode",{parentName:"li"},"-DWASMEDGE_PLUGIN_WASI_NN_BACKEND=<backend_name1>,<backend_name2>"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_PLUGIN_WASI_CRYPTO"),": build the WasmEdge WASI-Crypto plugin (Linux platforms only). Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"This option is useless if the option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_PLUGINS")," is set as ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_FORCE_DISABLE_LTO"),": forcefully turn off the link time optimization. Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_LINK_LLVM_STATIC"),": link the LLVM and lld libraries statically (Linux and MacOS platforms only, experimental). Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),"."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_LINK_TOOLS_STATIC"),": make the ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedge")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"wasmedgec")," tools to link the WasmEdge library and LLVM libraries statically (Linux and MacOS platforms only, experimental). Default is ",(0,n.kt)("inlineCode",{parentName:"li"},"OFF"),".",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If the option ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_BUILD_TOOLS")," and this option are both set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),", the ",(0,n.kt)("inlineCode",{parentName:"li"},"WASMEDGE_LINK_LLVM_STATIC")," will be set as ",(0,n.kt)("inlineCode",{parentName:"li"},"ON"),".")))),(0,n.kt)("h2",{id:"build-wasmedge-with-plug-ins"},"Build WasmEdge with Plug-ins"),(0,n.kt)("p",null,"Developers can follow the steps to build WasmEdge with plug-ins from source."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/plugin/was_nn"},"WASI-NN (OpenVINO and PyTorch backends)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/plugin/wasi_crypto"},"WASI-Crypto")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/book/contribute/source/plugin/httpsreq"},"WasmEdge-HttpsReq"))),(0,n.kt)("h2",{id:"run-tests"},"Run Tests"),(0,n.kt)("p",null,"The tests are only available when the build option ",(0,n.kt)("inlineCode",{parentName:"p"},"WASMEDGE_BUILD_TESTS")," is set to ",(0,n.kt)("inlineCode",{parentName:"p"},"ON"),"."),(0,n.kt)("p",null,"Users can use these tests to verify the correctness of WasmEdge binaries built."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"cd <path/to/wasmedge/build_folder>\nLD_LIBRARY_PATH=$(pwd)/lib/api ctest\n")))}d.isMDXComponent=!0}}]);