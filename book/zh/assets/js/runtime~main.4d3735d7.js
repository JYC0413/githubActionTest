(()=>{"use strict";var e,f,a,b,c,d={},t={};function r(e){var f=t[e];if(void 0!==f)return f.exports;var a=t[e]={id:e,loaded:!1,exports:{}};return d[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=d,r.c=t,e=[],r.O=(f,a,b,c)=>{if(!a){var d=1/0;for(i=0;i<e.length;i++){a=e[i][0],b=e[i][1],c=e[i][2];for(var t=!0,o=0;o<a.length;o++)(!1&c||d>=c)&&Object.keys(r.O).every((e=>r.O[e](a[o])))?a.splice(o--,1):(t=!1,c<d&&(d=c));if(t){e.splice(i--,1);var n=b();void 0!==n&&(f=n)}}return f}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[a,b,c]},r.n=e=>{var f=e&&e.__esModule?()=>e.default:()=>e;return r.d(f,{a:f}),f},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,r.t=function(e,b){if(1&b&&(e=this(e)),8&b)return e;if("object"==typeof e&&e){if(4&b&&e.__esModule)return e;if(16&b&&"function"==typeof e.then)return e}var c=Object.create(null);r.r(c);var d={};f=f||[null,a({}),a([]),a(a)];for(var t=2&b&&e;"object"==typeof t&&!~f.indexOf(t);t=a(t))Object.getOwnPropertyNames(t).forEach((f=>d[f]=()=>e[f]));return d.default=()=>e,r.d(c,d),c},r.d=(e,f)=>{for(var a in f)r.o(f,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:f[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((f,a)=>(r.f[a](e,f),f)),[])),r.u=e=>"assets/js/"+({13:"90c5bef1",18:"58ca67c5",53:"935f2afb",86:"4066af99",145:"2c9f3711",281:"7d55b5e2",446:"9189d665",484:"1bc31c30",498:"ff75fcec",516:"6f32652b",614:"d9302ef5",695:"8c40ebfb",864:"02f9581c",876:"1fabf6b0",996:"284582ab",1010:"ca66694c",1013:"8d4d9de5",1096:"3ccefc6c",1164:"31484cfd",1447:"9918f286",1485:"7dcad795",1495:"6ba93588",1506:"f2da5b41",1870:"c40adfc5",1881:"931b0769",1898:"80de8193",1930:"2ec20889",2016:"caea28d7",2103:"2fb2fa59",2131:"0a77790f",2201:"63693880",2713:"5d4c99a4",2738:"a70521e7",2790:"57394ba3",2874:"4fc86327",2922:"f65eacb5",2945:"58e7a612",3040:"81f7ee6b",3067:"90b2bdcf",3085:"1f391b9e",3169:"93d1247a",3365:"9c953695",3490:"f757d4f5",3506:"46b1d356",3510:"7bbd1200",3547:"747877d3",3779:"5079cd12",3917:"4fa711aa",3946:"b984b8d5",3994:"feab161e",4125:"46d3d331",4195:"c4f5d8e4",4348:"6b5a99ac",4353:"e1ae02cf",4374:"db7d6c9d",4541:"bfc76bad",4695:"580f0f7f",4772:"0f8f8ce3",4845:"4406d94b",4930:"fcfb0d9f",5020:"8e0cd2ff",5058:"4a5e354f",5062:"5947663e",5106:"766fb041",5156:"f603a26e",5173:"4b7d277b",5185:"108dca9e",5245:"d928b34c",5255:"3b435a04",5311:"9389216e",5351:"60b1565b",5353:"0bb02649",5414:"03e46042",5466:"5c23b30f",5509:"79a6852f",5520:"28f33f95",5554:"1ac135e4",5614:"d59b60cc",5668:"338d3fa8",5674:"4bfaa85d",5688:"4298c4f5",5785:"1f84e766",5873:"19d74325",5877:"574d0ce0",5905:"b4944dd1",5937:"2513ce95",5945:"89ea910b",5954:"d0801a73",5976:"b66ba5d6",5990:"59f90e7b",6157:"bc9dff98",6238:"f0376a57",6345:"6134105f",6357:"4f735751",6445:"6834a6a4",6449:"a2fe9a4b",6455:"8bf1b516",6518:"a70c4eb2",6544:"316b1bd9",6591:"816162fc",6615:"c9f634a6",6627:"1f4607c5",6681:"34c250fd",6710:"61ca38f6",6765:"ddf23f05",6768:"32027ce3",6974:"7af7e5b8",6992:"026c67d7",7074:"de975e5e",7151:"92143301",7226:"c56f5b93",7269:"a0f00cde",7308:"6b52998c",7414:"393be207",7466:"f6bdca35",7493:"b1eea551",7526:"8580f396",7644:"833d543f",7728:"f4a8f7dd",7834:"c32cb622",7918:"17896441",7961:"30996784",7969:"32d32582",8098:"0a6c7d4c",8132:"01093ebb",8148:"ad77907d",8350:"611779dc",8376:"19e357e0",8421:"7b104fd2",8440:"cd36ace2",8482:"f9d87ba7",8536:"427a1bb7",8560:"63b0a850",8600:"e125b94e",8693:"16278a3d",8721:"9bfbb778",8756:"a8ad660c",8820:"ebdebde0",8833:"8a7f94e0",9049:"ea0113de",9062:"247c0dfc",9153:"1ab29fce",9250:"7660780d",9267:"af348d01",9276:"6165c96b",9317:"d6e38de2",9442:"bbee5268",9490:"438f9299",9514:"1be78505",9532:"0ceb9bd7",9534:"3f9b013b",9598:"ec4aa70d",9641:"e29c4462",9734:"18d8227e",9755:"c059c508",9796:"0cc40a68",9806:"41b4135e",9817:"14eb3368",9974:"52d40724",9975:"7670aa81"}[e]||e)+"."+{13:"06207daf",18:"f3e54039",53:"95d9361e",86:"a0c83c80",145:"358adda2",281:"bd589275",446:"f71f2786",484:"6459bd2f",498:"62cf3097",516:"9d5fd298",614:"0b2199ce",695:"094f1dfd",864:"43fcd719",876:"c4d78e66",996:"c47e8c66",1010:"a19924d0",1013:"cad1699b",1096:"29e953f5",1164:"3f66d3a8",1447:"36f392fc",1485:"27208211",1495:"a200f0f3",1506:"c172555f",1870:"c344c98a",1881:"af776bea",1898:"6aec28f4",1930:"c4d53a29",2016:"00010bc3",2103:"19a982f1",2131:"21d7b59f",2201:"a7447baf",2666:"a14a3352",2713:"fe368938",2738:"5dee51de",2790:"5fe4fc04",2874:"40cc55ca",2922:"88a3ba3e",2945:"319a6648",3040:"67de43ed",3067:"9fcd55b4",3085:"da85b74c",3169:"58ed4b74",3365:"44df1d75",3490:"32a3d871",3506:"42b69cb8",3510:"9bcb458c",3547:"8c99377b",3779:"35b848ac",3917:"e4be3b97",3946:"0f0f63cd",3994:"1a34dacd",4125:"19d9445a",4195:"2b5cfd8d",4348:"6b21931d",4353:"d1d418cb",4374:"aa213795",4541:"ad1f20f0",4695:"c219f9ca",4772:"2d7c29ad",4845:"3678de48",4930:"4bab3110",4972:"b6ce05fe",5020:"70509d78",5058:"9be4dcd1",5062:"d0ead543",5106:"e98c2e5f",5156:"8c481bea",5173:"16bd1ef3",5185:"0be193fb",5245:"ba98ed3f",5255:"28d0d9de",5311:"4cc6dcd1",5351:"580b96e2",5353:"4feca42a",5414:"a7a0aa7c",5466:"4c02db0b",5509:"0c2584e8",5520:"5407b99c",5554:"571c1028",5614:"5689c2c4",5668:"f8cf2f0a",5674:"2955dae5",5688:"e1950fb1",5785:"84a2ddfc",5873:"e94d3742",5877:"66bad41f",5905:"c2d224a0",5937:"37465249",5945:"10dbd378",5954:"c8f8ed4d",5976:"79d06f48",5990:"df7ceadd",6157:"1f824d99",6238:"61414246",6345:"a29eab7e",6357:"41d5a781",6445:"b09ab8fa",6449:"bf7c22fe",6455:"fc28aa89",6518:"5c4e7e16",6544:"3a29f824",6591:"91a39e78",6615:"7fa3566f",6627:"3466d711",6681:"253dd198",6710:"57c7e2e7",6765:"19525666",6768:"25da7484",6974:"2c48dd61",6992:"b14c0ff8",7074:"d9982b65",7151:"f8276dc1",7226:"5145ca3c",7269:"530bdd26",7308:"e2266a80",7414:"a9b74f69",7466:"02688bba",7493:"d6b8d932",7526:"af061980",7644:"f0ff0098",7728:"b6f553e1",7834:"714b47a1",7918:"1355db49",7961:"7c93250b",7969:"22491b74",8098:"05f7ac4a",8132:"6ed89733",8148:"4b4becba",8350:"a4255589",8376:"4842c8b8",8421:"7472a5d5",8440:"adf6c790",8482:"8832a4e9",8536:"004cfb2f",8560:"2e675cf9",8600:"007456c6",8693:"0ba8d4b4",8721:"7591b244",8756:"d43c5e6b",8820:"5903bdeb",8833:"8c3b089e",9049:"c86bd954",9062:"158c4dca",9153:"3c945d54",9250:"4732446e",9267:"ae2ef980",9276:"79d95e67",9317:"22abb617",9442:"34ad7376",9490:"c49eb630",9514:"bc32eeb9",9532:"e00a4830",9534:"c7741409",9598:"ac8aa570",9641:"221a2e1e",9734:"e91837fa",9755:"24249356",9796:"d9f4a8a8",9806:"e06628b6",9817:"d83986bf",9974:"1fdb730a",9975:"d1319890"}[e]+".js",r.miniCssF=e=>{},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,f)=>Object.prototype.hasOwnProperty.call(e,f),b={},c="book:",r.l=(e,f,a,d)=>{if(b[e])b[e].push(f);else{var t,o;if(void 0!==a)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var u=n[i];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==c+a){t=u;break}}t||(o=!0,(t=document.createElement("script")).charset="utf-8",t.timeout=120,r.nc&&t.setAttribute("nonce",r.nc),t.setAttribute("data-webpack",c+a),t.src=e),b[e]=[f];var l=(f,a)=>{t.onerror=t.onload=null,clearTimeout(s);var c=b[e];if(delete b[e],t.parentNode&&t.parentNode.removeChild(t),c&&c.forEach((e=>e(a))),f)return f(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:t}),12e4);t.onerror=l.bind(null,t.onerror),t.onload=l.bind(null,t.onload),o&&document.head.appendChild(t)}},r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.p="/book/zh/",r.gca=function(e){return e={17896441:"7918",30996784:"7961",63693880:"2201",92143301:"7151","90c5bef1":"13","58ca67c5":"18","935f2afb":"53","4066af99":"86","2c9f3711":"145","7d55b5e2":"281","9189d665":"446","1bc31c30":"484",ff75fcec:"498","6f32652b":"516",d9302ef5:"614","8c40ebfb":"695","02f9581c":"864","1fabf6b0":"876","284582ab":"996",ca66694c:"1010","8d4d9de5":"1013","3ccefc6c":"1096","31484cfd":"1164","9918f286":"1447","7dcad795":"1485","6ba93588":"1495",f2da5b41:"1506",c40adfc5:"1870","931b0769":"1881","80de8193":"1898","2ec20889":"1930",caea28d7:"2016","2fb2fa59":"2103","0a77790f":"2131","5d4c99a4":"2713",a70521e7:"2738","57394ba3":"2790","4fc86327":"2874",f65eacb5:"2922","58e7a612":"2945","81f7ee6b":"3040","90b2bdcf":"3067","1f391b9e":"3085","93d1247a":"3169","9c953695":"3365",f757d4f5:"3490","46b1d356":"3506","7bbd1200":"3510","747877d3":"3547","5079cd12":"3779","4fa711aa":"3917",b984b8d5:"3946",feab161e:"3994","46d3d331":"4125",c4f5d8e4:"4195","6b5a99ac":"4348",e1ae02cf:"4353",db7d6c9d:"4374",bfc76bad:"4541","580f0f7f":"4695","0f8f8ce3":"4772","4406d94b":"4845",fcfb0d9f:"4930","8e0cd2ff":"5020","4a5e354f":"5058","5947663e":"5062","766fb041":"5106",f603a26e:"5156","4b7d277b":"5173","108dca9e":"5185",d928b34c:"5245","3b435a04":"5255","9389216e":"5311","60b1565b":"5351","0bb02649":"5353","03e46042":"5414","5c23b30f":"5466","79a6852f":"5509","28f33f95":"5520","1ac135e4":"5554",d59b60cc:"5614","338d3fa8":"5668","4bfaa85d":"5674","4298c4f5":"5688","1f84e766":"5785","19d74325":"5873","574d0ce0":"5877",b4944dd1:"5905","2513ce95":"5937","89ea910b":"5945",d0801a73:"5954",b66ba5d6:"5976","59f90e7b":"5990",bc9dff98:"6157",f0376a57:"6238","6134105f":"6345","4f735751":"6357","6834a6a4":"6445",a2fe9a4b:"6449","8bf1b516":"6455",a70c4eb2:"6518","316b1bd9":"6544","816162fc":"6591",c9f634a6:"6615","1f4607c5":"6627","34c250fd":"6681","61ca38f6":"6710",ddf23f05:"6765","32027ce3":"6768","7af7e5b8":"6974","026c67d7":"6992",de975e5e:"7074",c56f5b93:"7226",a0f00cde:"7269","6b52998c":"7308","393be207":"7414",f6bdca35:"7466",b1eea551:"7493","8580f396":"7526","833d543f":"7644",f4a8f7dd:"7728",c32cb622:"7834","32d32582":"7969","0a6c7d4c":"8098","01093ebb":"8132",ad77907d:"8148","611779dc":"8350","19e357e0":"8376","7b104fd2":"8421",cd36ace2:"8440",f9d87ba7:"8482","427a1bb7":"8536","63b0a850":"8560",e125b94e:"8600","16278a3d":"8693","9bfbb778":"8721",a8ad660c:"8756",ebdebde0:"8820","8a7f94e0":"8833",ea0113de:"9049","247c0dfc":"9062","1ab29fce":"9153","7660780d":"9250",af348d01:"9267","6165c96b":"9276",d6e38de2:"9317",bbee5268:"9442","438f9299":"9490","1be78505":"9514","0ceb9bd7":"9532","3f9b013b":"9534",ec4aa70d:"9598",e29c4462:"9641","18d8227e":"9734",c059c508:"9755","0cc40a68":"9796","41b4135e":"9806","14eb3368":"9817","52d40724":"9974","7670aa81":"9975"}[e]||e,r.p+r.u(e)},(()=>{var e={1303:0,532:0};r.f.j=(f,a)=>{var b=r.o(e,f)?e[f]:void 0;if(0!==b)if(b)a.push(b[2]);else if(/^(1303|532)$/.test(f))e[f]=0;else{var c=new Promise(((a,c)=>b=e[f]=[a,c]));a.push(b[2]=c);var d=r.p+r.u(f),t=new Error;r.l(d,(a=>{if(r.o(e,f)&&(0!==(b=e[f])&&(e[f]=void 0),b)){var c=a&&("load"===a.type?"missing":a.type),d=a&&a.target&&a.target.src;t.message="Loading chunk "+f+" failed.\n("+c+": "+d+")",t.name="ChunkLoadError",t.type=c,t.request=d,b[1](t)}}),"chunk-"+f,f)}},r.O.j=f=>0===e[f];var f=(f,a)=>{var b,c,d=a[0],t=a[1],o=a[2],n=0;if(d.some((f=>0!==e[f]))){for(b in t)r.o(t,b)&&(r.m[b]=t[b]);if(o)var i=o(r)}for(f&&f(a);n<d.length;n++)c=d[n],r.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return r.O(i)},a=self.webpackChunkbook=self.webpackChunkbook||[];a.forEach(f.bind(null,0)),a.push=f.bind(null,a.push.bind(a))})()})();