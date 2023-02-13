"use strict";(self.webpackChunkbook=self.webpackChunkbook||[]).push([[5668],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var i=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,i,s=function(e,t){if(null==e)return{};var a,i,s={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var c=i.createContext({}),o=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},p=function(e){var t=o(e.components);return i.createElement(c.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,s=e.mdxType,l=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=o(a),d=s,h=m["".concat(c,".").concat(d)]||m[d]||k[d]||l;return a?i.createElement(h,n(n({ref:t},p),{},{components:a})):i.createElement(h,n({ref:t},p))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var l=a.length,n=new Array(l);n[0]=d;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[m]="string"==typeof e?e:s,n[1]=r;for(var o=2;o<l;o++)n[o]=a[o];return i.createElement.apply(null,n)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8333:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var i=a(7462),s=(a(7294),a(3905));const l={sidebar_position:9},n="9 Release Process",r={unversionedId:"contribute/release",id:"contribute/release",title:"9 Release Process",description:"Create the releasing process issue of the new version",source:"@site/docs/contribute/release.md",sourceDirName:"contribute",slug:"/contribute/release",permalink:"/book/contribute/release",draft:!1,editUrl:"https://github.com/alabulei1/book/docs/contribute/release.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"contributeSidebar",previous:{title:"8 Contributing Steps",permalink:"/book/contribute/"},next:{title:"10 Join WasmEdge Community",permalink:"/book/contribute/community"}},c={},o=[{value:"Create the releasing process issue of the new version",id:"create-the-releasing-process-issue-of-the-new-version",level:2},{value:"Write Changelog",id:"write-changelog",level:2},{value:"Create the Alpha Pre-Release",id:"create-the-alpha-pre-release",level:2},{value:"Create the Beta Pre-Release",id:"create-the-beta-pre-release",level:2},{value:"Create the RC Pre-Release",id:"create-the-rc-pre-release",level:2},{value:"Create the Official Release",id:"create-the-official-release",level:2},{value:"Update the Extensions",id:"update-the-extensions",level:2}],p={toc:o};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"9-release-process"},"9 Release Process"),(0,s.kt)("h2",{id:"create-the-releasing-process-issue-of-the-new-version"},"Create the releasing process issue of the new version"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Keep adding the new features, issues, documents, and builds check list into the issue."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Add the GitHub project of the new version.")),(0,s.kt)("h2",{id:"write-changelog"},"Write Changelog"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure every change is written in the changelog."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure the ",(0,s.kt)("inlineCode",{parentName:"li"},"Changelog.md")," has the correct version number and the release date."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Copy the changelog of this version to ",(0,s.kt)("inlineCode",{parentName:"li"},".CurrentChangelog.md"),". (Our release CI will take this file as the release notes.)"),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Record the contributor lists."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Create a pull request, make sure the CI are all passed, and merge it.")),(0,s.kt)("h2",{id:"create-the-alpha-pre-release"},"Create the Alpha Pre-Release"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","In this step, the main features are completed. No more major feature will be merged after the first Alpha pre-release."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure that the features in the releasing process issue are completed."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Use git tag to create a new release tag ",(0,s.kt)("inlineCode",{parentName:"li"},"major.minor.patch-alpha.version"),". And push this tag to GitHub."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Wait for the CI builds and pushes the release binaries and release notes to the GitHub release page."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check the ",(0,s.kt)("inlineCode",{parentName:"li"},"Pre-release")," checkbox and publish the pre-release."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","This step will automatically close and turn into Beta or RC phase in about 3 days if there's no critical issues.")),(0,s.kt)("h2",{id:"create-the-beta-pre-release"},"Create the Beta Pre-Release"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","This step is for the issue fixing if needed. No more feature will be accepted."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure that all the features in the releasing process issue are completed."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Use git tag to create a new release tag ",(0,s.kt)("inlineCode",{parentName:"li"},"major.minor.patch-beta.version"),". And push this tag to GitHub."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Wait for the CI builds and pushes the release binaries and release notes to the GitHub release page."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check the ",(0,s.kt)("inlineCode",{parentName:"li"},"Pre-release")," checkbox and publish the pre-release."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","This step will automatically close and turn into RC phase in about 3 days if there's no critical issues.")),(0,s.kt)("h2",{id:"create-the-rc-pre-release"},"Create the RC Pre-Release"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","In this step, the issue fixing is finished. The ",(0,s.kt)("inlineCode",{parentName:"li"},"RC")," pre-releases are for the installation, bindings, and packages testing."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure that all the issues in the releasing process issue are completed."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update ",(0,s.kt)("inlineCode",{parentName:"li"},"WASMEDGE_CAPI_VERSION")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"CMakeLists.txt"),"."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Update ",(0,s.kt)("inlineCode",{parentName:"li"},"wasmedge_version")," in ",(0,s.kt)("inlineCode",{parentName:"li"},"docs/book/en/book.toml"),"."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Use git tag to create a new release tag ",(0,s.kt)("inlineCode",{parentName:"li"},"major.minor.patch-rc.version"),". And push this tag to GitHub."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Wait for the CI builds and pushes the release binaries and release notes to the GitHub release page."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Check the ",(0,s.kt)("inlineCode",{parentName:"li"},"Pre-release")," checkbox and publish the pre-release."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","This step will automatically close and announce the official release in about 3 days if there's no critical issues.")),(0,s.kt)("h2",{id:"create-the-official-release"},"Create the Official Release"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Make sure the ",(0,s.kt)("inlineCode",{parentName:"li"},"Changelog.md")," and ",(0,s.kt)("inlineCode",{parentName:"li"},".CurrentChangelog.md")," have the correct version number and the release date."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Use git tag to create a new release tag ",(0,s.kt)("inlineCode",{parentName:"li"},"major.minor.patch"),". And push this tag to GitHub."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Wait for the CI builds and push the release binaries and release notes to the GitHub release page."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Publish the release."),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Close the releasing process issue and the GitHub project.")),(0,s.kt)("h2",{id:"update-the-extensions"},"Update the Extensions"),(0,s.kt)("p",null,"The following projects will be updated with the ",(0,s.kt)("inlineCode",{parentName:"p"},"Alpha"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"Beta"),", and ",(0,s.kt)("inlineCode",{parentName:"p"},"RC")," pre-releases and the official release:"),(0,s.kt)("ul",{className:"contains-task-list"},(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/WasmEdge-image"},"WasmEdge-Image")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/WasmEdge-tensorflow-deps"},"WasmEdge-TensorFlow-Deps")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/WasmEdge-tensorflow"},"WasmEdge-TensorFlow")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/WasmEdge-tensorflow-tools"},"WasmEdge-TensorFlow-Tools")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/WasmEdge-go"},"WasmEdge-Go SDK")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-core"},"WasmEdge-core NAPI package")),(0,s.kt)("li",{parentName:"ul",className:"task-list-item"},(0,s.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ",(0,s.kt)("a",{parentName:"li",href:"https://github.com/second-state/wasmedge-extensions"},"WasmEdge-extensions NAPI package"))))}m.isMDXComponent=!0}}]);