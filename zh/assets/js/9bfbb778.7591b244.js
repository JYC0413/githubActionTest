"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[8721],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var r=n.createContext({}),m=function(e){var t=n.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(r.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,r=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(a),c=l,h=d["".concat(r,".").concat(c)]||d[c]||u[c]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,o=new Array(i);o[0]=c;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s[d]="string"==typeof e?e:l,o[1]=s;for(var m=2;m<i;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),l=(a(7294),a(3905));const i={sidebar_position:2},o="The `wasmedge` CLI",s={unversionedId:"develop/build-and-run/cli",id:"develop/build-and-run/cli",title:"The `wasmedge` CLI",description:"After installing WasmEdge, you could use the wasmedge CLI to execute a compiled wasm file.",source:"@site/docs/develop/build-and-run/cli.md",sourceDirName:"develop/build-and-run",slug:"/develop/build-and-run/cli",permalink:"/book/zh/develop/build-and-run/cli",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/develop/build-and-run/cli.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"developSidebar",previous:{title:"Install and uninstall WasmEdge",permalink:"/book/zh/develop/build-and-run/install"},next:{title:"The AoT Compiler",permalink:"/book/zh/develop/build-and-run/aot"}},r={},m=[{value:"Options",id:"options",level:2},{value:"Examples",id:"examples",level:2},{value:"Build and run a standalone WebAssembly app",id:"build-and-run-a-standalone-webassembly-app",level:3},{value:"Execute with <code>statistics</code> enabled",id:"execute-with-statistics-enabled",level:4},{value:"Execute with <code>gas-limit</code> enabled",id:"execute-with-gas-limit-enabled",level:4},{value:"Call a WebAssembly function compiled from Rust",id:"call-a-webassembly-function-compiled-from-rust",level:3},{value:"Call a WebAssembly function written in WAT",id:"call-a-webassembly-function-written-in-wat",level:3},{value:"JavaScript examples",id:"javascript-examples",level:3},{value:"Docker images for the CLI tools",id:"docker-images-for-the-cli-tools",level:2},{value:"Examples",id:"examples-1",level:3}],p={toc:m};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"the-wasmedge-cli"},"The ",(0,l.kt)("inlineCode",{parentName:"h1"},"wasmedge")," CLI"),(0,l.kt)("p",null,"After installing WasmEdge, you could use the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI to execute a compiled wasm file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge -v\nwasmedge version {{ wasmedge_version }}\n")),(0,l.kt)("p",null,"The usage of the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," tool will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge -h\nUSAGE\n   wasmedge [OPTIONS] [--] WASM_OR_SO [ARG ...]\n\n...\n")),(0,l.kt)("p",null,"If users install the WasmEdge from the install script with the option ",(0,l.kt)("inlineCode",{parentName:"p"},"-e tf,image"),", the WasmEdge CLI tools with TensorFlow and TensorFlow-Lite extensions will be installed."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow")," CLI tool",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")," tool with TensorFlow, TensorFlow-Lite, and ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge-image")," extensions."),(0,l.kt)("li",{parentName:"ul"},"Only on ",(0,l.kt)("inlineCode",{parentName:"li"},"x86_64")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"aarch64")," Linux platforms and ",(0,l.kt)("inlineCode",{parentName:"li"},"x86_64")," MacOS."))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow-lite")," CLI tool",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"The ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")," tool with TensorFlow-Lite, and ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge-image")," extensions."),(0,l.kt)("li",{parentName:"ul"},"Only on ",(0,l.kt)("inlineCode",{parentName:"li"},"x86_64")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"aarch64")," Linux platforms, Android, and ",(0,l.kt)("inlineCode",{parentName:"li"},"x86_64")," MacOS.")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool will execute the WebAssembly in ahead-of-time(AOT) mode and interpreter mode. It depends on if you use ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedgec")," to AoT compile the wasm file."),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("p",null,"The options of the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," CLI tool are as follows."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"-v|--version"),": Show the version information. Will ignore other arguments below."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"-h|--help"),": Show the help messages. Will ignore other arguments below."),(0,l.kt)("li",{parentName:"ol"},"(Optional) ",(0,l.kt)("inlineCode",{parentName:"li"},"--reactor"),": Enable the reactor mode.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In the reactor mode, ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")," runs a specified function exported by the WebAssembly program."),(0,l.kt)("li",{parentName:"ul"},"WasmEdge will execute the function which name should be given in ",(0,l.kt)("inlineCode",{parentName:"li"},"ARG[0]"),"."),(0,l.kt)("li",{parentName:"ul"},"If there's exported function which names ",(0,l.kt)("inlineCode",{parentName:"li"},"_initialize"),", the function will be executed with the empty parameter at first."))),(0,l.kt)("li",{parentName:"ol"},"(Optional) ",(0,l.kt)("inlineCode",{parentName:"li"},"--dir"),": Bind directories into WASI virtual filesystem.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--dir guest_path:host_path")," to bind the host path into the guest path in WASI virtual system."))),(0,l.kt)("li",{parentName:"ol"},"(Optional) ",(0,l.kt)("inlineCode",{parentName:"li"},"--env"),": Assign the environment variables in WASI.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--env ENV_NAME=VALUE")," to assign the environment variable."))),(0,l.kt)("li",{parentName:"ol"},"(Optional) Statistics information:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--enable-time-measuring")," to show the execution time."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--enable-gas-measuring")," to show the amount of used gas."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--enable-instruction-count")," to display the number of executed instructions."),(0,l.kt)("li",{parentName:"ul"},"Or use ",(0,l.kt)("inlineCode",{parentName:"li"},"--enable-all-statistics")," to enable all of the statistics options."))),(0,l.kt)("li",{parentName:"ol"},"(Optional) Resource limitations:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--time-limit MILLISECOND_TIME")," to limit the execution time. Default value is ",(0,l.kt)("inlineCode",{parentName:"li"},"0")," as no limitation."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--gas-limit GAS_LIMIT")," to limit the execution cost."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--memory-page-limit PAGE_COUNT")," to set the limitation of pages(as size of 64 KiB) in every memory instance."))),(0,l.kt)("li",{parentName:"ol"},"(Optional) WebAssembly proposals:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-import-export-mut-globals")," to disable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/mutable-global"},"Import/Export of Mutable Globals")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-non-trap-float-to-int")," to disable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/nontrapping-float-to-int-conversions"},"Non-Trapping Float-to-Int Conversions")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-sign-extension-operators")," to disable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/sign-extension-ops"},"Sign-Extension Operators")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-multi-value")," to disable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/multi-value"},"Multi-value")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-bulk-memory")," to disable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/bulk-memory-operations"},"Bulk Memory Operations")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-reference-types")," to disable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/reference-types"},"Reference Types")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--disable-simd")," to disable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/webassembly/simd"},"Fixed-width SIMD")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"ON"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--enable-multi-memory")," to enable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/multi-memory"},"Multiple Memories")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"OFF"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--enable-tail-call")," to enable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/tail-call"},"Tail call")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"OFF"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--enable-extended-const")," to enable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/WebAssembly/extended-const"},"Extended Constant Expressions")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"OFF"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--enable-threads")," to enable the ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/webassembly/threads"},"Threads")," proposal (Default ",(0,l.kt)("inlineCode",{parentName:"li"},"OFF"),")."),(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"--enable-all")," to enable ALL proposals above."))),(0,l.kt)("li",{parentName:"ol"},"WASM file (",(0,l.kt)("inlineCode",{parentName:"li"},"/path/to/wasm/file"),")."),(0,l.kt)("li",{parentName:"ol"},"(Optional) ",(0,l.kt)("inlineCode",{parentName:"li"},"ARG")," command line arguments array.",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"In reactor mode, the first argument will be the function name, and the arguments after ",(0,l.kt)("inlineCode",{parentName:"li"},"ARG[0]")," will be parameters of wasm function ",(0,l.kt)("inlineCode",{parentName:"li"},"ARG[0]"),"."),(0,l.kt)("li",{parentName:"ul"},"In command mode, the arguments will be the command line arguments of the WASI ",(0,l.kt)("inlineCode",{parentName:"li"},"_start")," function. They are also known as command line arguments(",(0,l.kt)("inlineCode",{parentName:"li"},"argv"),") for a standalone C/C++ program.")))),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)("h3",{id:"build-and-run-a-standalone-webassembly-app"},"Build and run a standalone WebAssembly app"),(0,l.kt)("p",null,"The Hello world example is a standalone Rust application that can be executed by the ",(0,l.kt)("a",{parentName:"p",href:"../build-and-run/cli"},"WasmEdge CLI"),". Its source code and build instructions are available ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/tree/main/hello"},"here"),"."),(0,l.kt)("p",null,"You will need to have the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/blob/main/README.md#prerequisites"},"Rust compiler installed"),", and then use the following command to build the Wasm bytecode file from the Rust source code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\n")),(0,l.kt)("p",null,"You can then use the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," command to run the program."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ wasmedge target/wasm32-wasi/release/hello.wasm\nHello WasmEdge!\n")),(0,l.kt)("h4",{id:"execute-with-statistics-enabled"},"Execute with ",(0,l.kt)("inlineCode",{parentName:"h4"},"statistics")," enabled"),(0,l.kt)("p",null,"The CLI supports ",(0,l.kt)("inlineCode",{parentName:"p"},"--enable-all-statistics")," flags for the statistics and gas metering."),(0,l.kt)("p",null,"You can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --enable-all-statistics hello.wasm\n")),(0,l.kt)("p",null,"The output will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Hello WasmEdge!\n[2021-12-09 16:03:33.261] [info] ====================  Statistics  ====================\n[2021-12-09 16:03:33.261] [info]  Total execution time: 268266 ns\n[2021-12-09 16:03:33.261] [info]  Wasm instructions execution time: 251610 ns\n[2021-12-09 16:03:33.261] [info]  Host functions execution time: 16656 ns\n[2021-12-09 16:03:33.261] [info]  Executed wasm instructions count: 20425\n[2021-12-09 16:03:33.261] [info]  Gas costs: 20425\n[2021-12-09 16:03:33.261] [info]  Instructions per second: 81177218\n[2021-12-09 16:03:33.261] [info] =======================   End   ======================\n")),(0,l.kt)("h4",{id:"execute-with-gas-limit-enabled"},"Execute with ",(0,l.kt)("inlineCode",{parentName:"h4"},"gas-limit")," enabled"),(0,l.kt)("p",null,"The CLI supports ",(0,l.kt)("inlineCode",{parentName:"p"},"--gas-limit")," flags for controlling the execution costs."),(0,l.kt)("p",null,"For giving sufficient gas as the example, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --enable-all-statistics --gas-limit 20425 hello.wasm\n")),(0,l.kt)("p",null,"The output will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Hello WasmEdge!\n[2021-12-09 16:03:33.261] [info] ====================  Statistics  ====================\n[2021-12-09 16:03:33.261] [info]  Total execution time: 268266 ns\n[2021-12-09 16:03:33.261] [info]  Wasm instructions execution time: 251610 ns\n[2021-12-09 16:03:33.261] [info]  Host functions execution time: 16656 ns\n[2021-12-09 16:03:33.261] [info]  Executed wasm instructions count: 20425\n[2021-12-09 16:03:33.261] [info]  Gas costs: 20425\n[2021-12-09 16:03:33.261] [info]  Instructions per second: 81177218\n[2021-12-09 16:03:33.261] [info] =======================   End   ======================\n")),(0,l.kt)("p",null,"For giving insufficient gas as the example, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --enable-all-statistics --gas-limit 20 hello.wasm\n")),(0,l.kt)("p",null,"The output will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Hello WasmEdge!\n[2021-12-23 15:19:06.690] [error] Cost exceeded limit. Force terminate the execution.\n[2021-12-23 15:19:06.690] [error]     In instruction: ref.func (0xd2) , Bytecode offset: 0x00000000\n[2021-12-23 15:19:06.690] [error]     At AST node: expression\n[2021-12-23 15:19:06.690] [error]     At AST node: element segment\n[2021-12-23 15:19:06.690] [error]     At AST node: element section\n[2021-12-23 15:19:06.690] [error]     At AST node: module\n[2021-12-23 15:19:06.690] [info] ====================  Statistics  ====================\n[2021-12-23 15:19:06.690] [info]  Total execution time: 0 ns\n[2021-12-23 15:19:06.690] [info]  Wasm instructions execution time: 0 ns\n[2021-12-23 15:19:06.690] [info]  Host functions execution time: 0 ns\n[2021-12-23 15:19:06.690] [info]  Executed wasm instructions count: 21\n[2021-12-23 15:19:06.690] [info]  Gas costs: 20\n")),(0,l.kt)("h3",{id:"call-a-webassembly-function-compiled-from-rust"},"Call a WebAssembly function compiled from Rust"),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasm-learning/tree/master/cli/add"},"add")," program is written in Rust and contains an exported ",(0,l.kt)("inlineCode",{parentName:"p"},"add()")," function. You can compile it into WebAssembly and use ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," to call the ",(0,l.kt)("inlineCode",{parentName:"p"},"add()")," function. In this example, you will see how it is done from the CLI. It is often used when you embed WasmEdge into another host application, and need to call a Wasm function from the host."),(0,l.kt)("p",null,"You will need to have the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/second-state/rust-examples/blob/main/README.md#prerequisites"},"Rust compiler installed"),", and then use the following command to build the Wasm bytecode file from the Rust source code."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cargo build --target wasm32-wasi --release\n")),(0,l.kt)("p",null,"You can execute ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," in reactor mode to invoke the ",(0,l.kt)("inlineCode",{parentName:"p"},"add()")," function with two ",(0,l.kt)("inlineCode",{parentName:"p"},"i32")," integer input parameters."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --reactor add.wasm add 2 2\n")),(0,l.kt)("p",null,"The output will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"4\n")),(0,l.kt)("h3",{id:"call-a-webassembly-function-written-in-wat"},"Call a WebAssembly function written in WAT"),(0,l.kt)("p",null,"We created the hand-written ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/examples/wasm/fibonacci.wat"},"fibonacci.wat")," and used the ",(0,l.kt)("a",{parentName:"p",href:"https://webassembly.github.io/wabt/demo/wat2wasm/"},"wat2wasm")," tool to convert it into the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/examples/wasm/fibonacci.wasm"},"fibonacci.wasm")," WebAssembly program.\nIt exported a ",(0,l.kt)("inlineCode",{parentName:"p"},"fib()")," function which takes a single ",(0,l.kt)("inlineCode",{parentName:"p"},"i32")," integer as the input parameter. We can execute ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," in reactor mode to invoke the exported function."),(0,l.kt)("p",null,"You can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --reactor fibonacci.wasm fib 10\n")),(0,l.kt)("p",null,"The output will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"89\n")),(0,l.kt)("h3",{id:"javascript-examples"},"JavaScript examples"),(0,l.kt)("p",null,"It is possible to use WasmEdge as a high-performance, secure, extensible, easy to deploy, and ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-containers-examples"},"Kubernetes-compliant")," JavaScript runtime.\nThere is no need to build a JavaScript app. You just need to download the WasmEdge JavaScript runtime for Node.js."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs.wasm"},"Download the wasmedge_quickjs.wasm file here")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/modules.zip"},"Download the modules.zip file here")," and then unzip it into the current folder as ",(0,l.kt)("inlineCode",{parentName:"li"},"./modules/"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/wasmedge_quickjs.wasm\nwget https://github.com/second-state/wasmedge-quickjs/releases/download/v0.5.0-alpha/modules.zip\nunzip modules.zip\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/examples/js/hello.js"},"hello.js")," file is a very simple JavaScript program. You can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"wasmedge --dir .:. wasmedge_quickjs.wasm hello.js 1 2 3\n")),(0,l.kt)("p",null,"The output will be:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"Hello 1 2 3\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/examples/wasm/js/qjs_tf.wasm"},"qjs_tf.wasm")," is a JavaScript interpreter with ",(0,l.kt)("a",{parentName:"p",href:"https://www.secondstate.io/articles/wasi-tensorflow/"},"WasmEdge Tensorflow extension")," compiled into WebAssembly.\nTo run ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/raw/master/examples/wasm/js/qjs_tf.wasm"},"qjs_tf.wasm"),", you must use the ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow-lite")," CLI tool, which is a build of WasmEdge with Tensorflow-Lite extension built-in.\nYou can download a full ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/second-state/wasmedge-quickjs/tree/main/example_js/tensorflow_lite_demo"},"Tensorflow-based JavaScript example")," to classify images."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the Tensorflow example\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/aiy_food_V1_labelmap.txt\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/food.jpg\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/lite-model_aiy_vision_classifier_food_V1_1.tflite\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/main.js\n\n$ wasmedge-tensorflow-lite --dir .:. qjs_tf.wasm main.js\nlabel: Hot dog\nconfidence: 0.8941176470588236\n")),(0,l.kt)("h2",{id:"docker-images-for-the-cli-tools"},"Docker images for the CLI tools"),(0,l.kt)("p",null,"The Docker images in this section are mostly used for development purposes. They allow you to use WasmEdge tools in containerized Linux environments. If you want to containerize Wasm apps, ",(0,l.kt)("a",{parentName:"p",href:"../getting-started/quick_start_docker"},"check out this"),"."),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge/slim:{version}")," Docker images provide a slim WasmEdge images built with ",(0,l.kt)("a",{parentName:"p",href:"https://dockersl.im"},"DockerSlim")," every releases."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Image ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-runtime:{version}")," includes only WasmEdge runtime with ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")," command."),(0,l.kt)("li",{parentName:"ul"},"Image ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge/slim:{version}")," includes the following command line utilities:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wasmedgec")))),(0,l.kt)("li",{parentName:"ul"},"Image ",(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge/slim-tf:{version}")," includes the following command line utilities:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wasmedgec")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow-lite")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"wasmedge-tensorflow")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"show-tflite-tensor")))),(0,l.kt)("li",{parentName:"ul"},"The working directory of the release docker image is ",(0,l.kt)("inlineCode",{parentName:"li"},"/app"),".")),(0,l.kt)("h3",{id:"examples-1"},"Examples"),(0,l.kt)("p",null,"Afer pulling the docker iamge successfully, you could use ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedgec")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge")," to aot compile the wasm file and run the wasm app."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim:{{ wasmedge_version }}\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:{{ wasmedge_version }} wasmedgec hello.wasm hello.aot.wasm\n[2022-07-07 08:15:49.154] [info] compile start\n[2022-07-07 08:15:49.163] [info] verify start\n[2022-07-07 08:15:49.169] [info] optimize start\n[2022-07-07 08:15:49.808] [info] codegen start\n[2022-07-07 08:15:50.419] [info] output start\n[2022-07-07 08:15:50.421] [info] compile done\n[2022-07-07 08:15:50.422] [info] output start\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim:{{ wasmedge_version }} wasmedge hello.aot.wasm world\nhello\nworld\n")),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"wasmedge-tensorflow-lite")," (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/WasmEdge/WasmEdge/tree/master/examples/js"},"link"),"):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker pull wasmedge/slim-tf:{{ wasmedge_version }}\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/aiy_food_V1_labelmap.txt\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/food.jpg\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/lite-model_aiy_vision_classifier_food_V1_1.tflite\n$ wget https://raw.githubusercontent.com/second-state/wasmedge-quickjs/main/example_js/tensorflow_lite_demo/main.js\n\n$ docker run -it --rm -v $PWD:/app wasmedge/slim-tf:{{ wasmedge_version }} wasmedge-tensorflow-lite --dir .:. qjs_tf.wasm main.js\nlabel:\nHot dog\nconfidence:\n0.8941176470588236\n")))}d.isMDXComponent=!0}}]);