"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[591],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||r;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6088:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return f}});var o=n(7462),i=n(3366),r=(n(7294),n(3905)),l=["components"],a={id:"json-file",title:"Get your question flow JSON file",sidebar_label:"Get the JSON file"},u=void 0,c={unversionedId:"json-file",id:"json-file",title:"Get your question flow JSON file",description:"Introduction",source:"@site/docs/json-file.md",sourceDirName:".",slug:"/json-file",permalink:"/docs/json-file",draft:!1,editUrl:"https://github.com/ThePebblesFr/cozie-website/tree/master/my-website/docs/json-file.md",tags:[],version:"current",frontMatter:{id:"json-file",title:"Get your question flow JSON file",sidebar_label:"Get the JSON file"},sidebar:"tutorialSidebar",previous:{title:"Edit question",permalink:"/docs/modify-questions"},next:{title:"Generate your cozie",permalink:"/docs/generate-cozie"}},s={},f=[{value:"Introduction",id:"introduction",level:2},{value:"Generate the JSON file",id:"generate-the-json-file",level:2},{value:"Build and install cozie",id:"build-and-install-cozie",level:2}],p={toc:f};function d(e){var t=e.components,a=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Once you created all your questions, two possibilities are available:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate your question flow JSON file: this will only generate the question flow as a JSON file that fits with the implementation of cozie for Fitbit."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/generate-cozie"},"Generate your cozie"),": this will generate cozie with your own question flow. You will be able to download it as a zip-file.")),(0,r.kt)("h2",{id:"generate-the-json-file"},"Generate the JSON file"),(0,r.kt)("p",null,"By clicking on the ",(0,r.kt)("strong",null,"Generate JSON question flow"),", you will be redirected to the JSON file."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JSON question flow",src:n(6039).Z,width:"1369",height:"848"})),(0,r.kt)("p",null,"Then you can easily copy all this document and paste it into the ",(0,r.kt)("inlineCode",{parentName:"p"},"main-flow.json")," file that you can find at this path ",(0,r.kt)("inlineCode",{parentName:"p"},"path-to-cozie-folder/resources/flows/main-flow.json"),"."),(0,r.kt)("h2",{id:"build-and-install-cozie"},"Build and install cozie"),(0,r.kt)("p",null,"Now that you changed the question flow, here is the steps to follow to build and install your new version of cozie:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download a version of cozie form github:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git init\ngit clone git@github.com:cozie-app/cozie.git\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Download the icons into this folder ",(0,r.kt)("inlineCode",{parentName:"p"},"path-to-cozie-folder/resources/images/icons/main-flow"),". This step is required if you chose to generate the JSON file only. This step is automatically done when you choose to ",(0,r.kt)("a",{parentName:"p",href:"/docs/generate-cozie"},"generate cozie"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install npm in your cozie folder:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install\n")),(0,r.kt)("p",null,"(You don't need to worry about errors generated by this command)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Log in into your Fitbit account. Then, build and install cozie on your Fitbit OS Simulator:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx fitbit\nfitbit$ build-and-install\n")),(0,r.kt)("p",null,"Then, your cozie has been successfully built with your own question flow."))}d.isMDXComponent=!0},6039:function(e,t,n){t.Z=n.p+"assets/images/get-json-file-f4573b7cf7b5b008021184c0f9d957d8.png"}}]);