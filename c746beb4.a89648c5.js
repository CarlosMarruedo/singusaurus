(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{182:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"Highlight",(function(){return c})),r.d(t,"default",(function(){return g}));var n=r(3),o=r(7),i=(r(0),r(220)),a={title:"Deeper in NodeJS (filesystem and server)",author:"Oscar Miras",author_title:"Singulars 2021",author_url:"https://github.com/omiras",author_image_url:"https://avatars1.githubusercontent.com/u/3286458?s=460&v=4",tags:["nodejs","server","terminal","filesystem","modules"]},l={permalink:"/singusaurus/blog/2021/04/08/nodejs-filesystem-server",editUrl:"https://github.com/Singulars2021/singusaurus/tree/main/blog/blog/2021-04-08-nodejs-filesystem-server.mdx",source:"@site/blog\\2021-04-08-nodejs-filesystem-server.mdx",description:"borderRadius: '2px',",date:"2021-04-08T00:00:00.000Z",tags:[{label:"nodejs",permalink:"/singusaurus/blog/tags/nodejs"},{label:"server",permalink:"/singusaurus/blog/tags/server"},{label:"terminal",permalink:"/singusaurus/blog/tags/terminal"},{label:"filesystem",permalink:"/singusaurus/blog/tags/filesystem"},{label:"modules",permalink:"/singusaurus/blog/tags/modules"}],title:"Deeper in NodeJS (filesystem and server)",truncated:!1,prevItem:{title:"Deeper in NodeJS (filesystem and server)",permalink:"/singusaurus/blog/2021/04/09/nodejs-modules"},nextItem:{title:"Introduction to NodeJS",permalink:"/singusaurus/blog/2021/04/07/intro-nodejs"}},s=[{value:'<strong><Highlight color="#ff8000">What are we going to do today?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight",children:[]},{value:'<strong><Highlight color="#ff8000">Class highlights</Highlight></strong>',id:"highlight-colorff8000class-highlightshighlight",children:[]},{value:'<strong><Highlight color="#ff8000">What are we going to do next class?</Highlight></strong>',id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight",children:[]}],c=function(e){var t=e.children,r=e.color;return Object(i.b)("span",{style:{borderRadius:"2px",color:r,padding:"0.2rem"}},t)},u={toc:s,Highlight:c};function g(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-todayhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do today?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"NodeJS basic exercises"),Object(i.b)("li",{parentName:"ul"},"New modules",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Filesystem modules"),Object(i.b)("li",{parentName:"ul"},"Exercises"))),Object(i.b)("li",{parentName:"ul"},"Types of modules (thrid-party modules and custom modules)")),Object(i.b)("h2",{id:"highlight-colorff8000class-highlightshighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(c,{color:"#ff8000",mdxType:"Highlight"},"Class highlights"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"More examples with NodeJS - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"http://nicholasjohnson.com/node/course/exercises/"}),"Link")),Object(i.b)("li",{parentName:"ul"},"Even more examples with NodeJS - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/marioterron/node-exercises"}),"Link")),Object(i.b)("li",{parentName:"ul"},"NodeJS thread architecture - ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://medium.com/preezma/node-js-event-loop-architecture-go-deeper-node-core-c96b4cec7aa4"}),"Link"))),Object(i.b)("h2",{id:"highlight-colorff8000what-are-we-going-to-do-next-classhighlight"},Object(i.b)("strong",{parentName:"h2"},Object(i.b)(c,{color:"#ff8000",mdxType:"Highlight"},"What are we going to do next class?"))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Review file system exercises"),Object(i.b)("li",{parentName:"ul"},"Custom modules and thrid-party modules",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Exercises"))),Object(i.b)("li",{parentName:"ul"},"More brainstorm about out future project"),Object(i.b)("li",{parentName:"ul"},"Introduction to Express framwork")))}g.isMDXComponent=!0},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return g})),r.d(t,"b",(function(){return p}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),u=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},g=function(e){var t=u(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=u(r),b=n,p=g["".concat(a,".").concat(b)]||g[b]||h[b]||i;return r?o.a.createElement(p,l(l({ref:t},c),{},{components:r})):o.a.createElement(p,l({ref:t},c))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);