(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return p});var n=a(0),r=a.n(n),s=a(4),l=a.n(s),c=a(176),i=a(179),o=a(158),d=a(171),m={data:l.a.shape({}),pageContext:l.a.shape({}),location:l.a.shape({})},u=function(e){var t=e.data,a=e.pageContext,n=e.location,s=t.allMarkdownRemark.edges.map(function(e){return{id:e.node.id,title:e.node.frontmatter.title,category:e.node.frontmatter.category,date:e.node.frontmatter.date,excerpt:e.node.excerpt,link:e.node.fields.slug}}),l=a.tag,m=a.numPages,u=a.currentPage,p={isFirst:1===u,isLast:u===m,prevPage:u-1==1?"/tags/"+l:"/tags/"+l+"/"+(u-1),nextPage:"/tags/"+l+"/"+(u+1),currentPage:u,numPages:m};return console.log("numPages",m),r.a.createElement(o.a.Provider,{value:n},r.a.createElement(o.b.Provider,{value:p},r.a.createElement(c.a,null,r.a.createElement(d.a,{title:"Devlog | Tag - "+l}),r.a.createElement(i.a,{title:"Tag - "+l,posts:s}))))},p="375119367";u.propTypes=m,t.default=u},155:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var n=a(0),r=a.n(n),s=a(4),l=a.n(s),c=a(33),i=a.n(c);a.d(t,"a",function(){return i.a});a(156);var o=r.a.createContext({}),d=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},156:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return s});var n=a(0),r=Object(n.createContext)(),s=Object(n.createContext)()},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),s=a(4),l=a.n(s),c=a(56),i=a(2),o=function(e){var t=e.location,a=i.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(155),l=a(161),c=a.n(l),i=(a(157),a(74),a(75),function(e){var t=e.allPosts,a=Object(n.useState)(""),l=a[0],c=a[1],i=Object(n.useState)([]),o=i[0],d=i[1];return Object(n.useEffect)(function(){if(l.length>2){var e=t.filter(function(e){return e.title.includes(l)});d(e)}else d([])},[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"search-input",placeholder:"Search",autoComplete:"off",value:l,onChange:function(e){return c(e.target.value)},onBlur:function(){c("")}}),r.a.createElement("ul",{className:"search--results"},o.map(function(e){return r.a.createElement("li",{key:e.id,className:"search--result"},r.a.createElement(s.a,{to:e.link},r.a.createElement("article",{className:"search--result-article"},r.a.createElement("div",{className:"search--result-article-title"},r.a.createElement("h3",null,e.title),r.a.createElement("span",{className:"date"},e.date)),r.a.createElement("p",null,e.excerpt))))})))});t.a=function(e){var t=e.allPosts,a=void 0===t?[]:t,n=e.active,l=void 0===n?"":n;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement(s.a,{className:"logo",to:"/"},"DevLog"),r.a.createElement("ul",{className:"list list--nav",style:{position:"relative"}},r.a.createElement("li",{className:c()("item","item--nav",{"item--current":"home"===l})},r.a.createElement(s.a,{to:"/"},"Home")),r.a.createElement("li",{className:c()("item","item--nav",{"item--current":"about"===l})},r.a.createElement(s.a,{to:"/about"},"About")),r.a.createElement("li",{className:c()("item","item--nav",{"item--current":"category"===l})},r.a.createElement(s.a,{to:"/category"},"Category")),r.a.createElement("li",{className:c()("item","item--nav",{"item--current":"tags"===l})},r.a.createElement(s.a,{to:"/tags"},"Tags")),r.a.createElement("li",{className:"item item--nav"},r.a.createElement("a",{href:"/TIL"},"TIL")),r.a.createElement("li",{className:"item  item--nav"},r.a.createElement(i,{allPosts:a})))))}},162:function(e,t,a){"use strict";var n=a(163),r=a(0),s=a.n(r),l=a(155);t.a=function(){return s.a.createElement(l.b,{query:"3978990474",render:function(e){return s.a.createElement("div",{className:"feature",style:{backgroundImage:"url(../images/header.jpeg)",display:"flex",alignItems:"center"}},s.a.createElement("div",{className:"container typeset"},s.a.createElement("h2",{id:"alembic"},e.site.siteMetadata.title),s.a.createElement("p",null,e.site.siteMetadata.description)))},data:n})}},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Hanyoung's DevLog",description:"개발과 관련되어 확인한 개념이나 트릭들을 정리하는 곳입니다!"}}}}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(155);t.a=function(e){var t=e.categories,a=void 0===t?["TIL"]:t;return r.a.createElement("aside",{className:"aside typeset aside--left",style:{borderRight:"1px solid #a8adac"}},r.a.createElement("section",{className:"section section--category-index"},r.a.createElement("h3",null,"Index"),r.a.createElement("nav",{className:"nav  nav--categories"},r.a.createElement("ul",{className:"list  list--categories"},a.map(function(e){return"general"===e?r.a.createElement("li",{key:"category__link-"+e,className:"item  item--category"},r.a.createElement(s.a,{to:"/category"},e)):r.a.createElement("li",{key:"category__link-"+e,className:"item  item--category"},r.a.createElement(s.a,{to:"/category/"+e},e))})))))}},169:function(e,t,a){"use strict";a(157);var n=a(0),r=a.n(n),s=a(4),l=a.n(s),c=a(155),i=function(e){var t=e.title,a=e.category,n=void 0===a?"general":a,s=e.date,l=void 0===s?(new Date).toUTCString():s,i=e.excerpt,o=e.link;return r.a.createElement("li",{className:"item  item--post"},r.a.createElement("article",{className:"article  article--post"},r.a.createElement(c.a,{to:o},r.a.createElement("h2",null,t)),r.a.createElement("small",{className:"small  post-meta"},r.a.createElement("span",{className:"label  label--category"},n?r.a.createElement(c.a,{to:"/category/"+n},n):r.a.createElement(c.a,{to:"/category"},"general")),"   ",r.a.createElement("span",{className:"time"},l)),r.a.createElement("p",null,i)))};i.propTypes={title:l.a.string.isRequired,category:l.a.string,date:l.a.string,excerpt:l.a.string,link:l.a.string.isRequired},t.a=i},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),s=a(158),l=a(155);t.a=function(){var e=r.a.useContext(s.b),t=e.isFirst,a=e.isLast,n=e.prevPage,c=e.nextPage,i=e.currentPage,o=e.numPages;return r.a.createElement("nav",{className:"nav  nav--paginator"},t?r.a.createElement("span",{className:"pagination  pagination--previous"},"Previous"):r.a.createElement(l.a,{to:n,className:"pagination  pagination--previous"},"Previous"),r.a.createElement("span",{className:"pagination  pagination--counter"},"Page: "+i+" of "+o),a?r.a.createElement("span",{className:"pagination  pagination--next"},"Next"):r.a.createElement(l.a,{to:c,className:"pagination  pagination--next"},"Next"))}},171:function(e,t,a){"use strict";var n=a(172),r=a(0),s=a.n(r),l=a(4),c=a.n(l),i=a(178),o=a.n(i);function d(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,c=e.title,i=n.data.site,d=t||i.siteMetadata.description;return s.a.createElement(o.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+i.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:i.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Hanyoung's DevLog",description:"개발과 관련되어 확인한 개념이나 트릭들을 정리하는 곳입니다!",author:"JeongHanYoung"}}}}},173:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{id:"fa854ca4-b8c6-5c72-9379-4b9ffbffc8fa",frontmatter:{title:"jekyll로 github 블로그 만들기",category:null},excerpt:"jekyll로 github blog 만들기 해당 요구를 처리하기 위해선 Ruby 설치 Git 설치 Github…",fields:{slug:"/posts/2018-06-08-jekyll로-github-blog-만들기/"}}},{node:{id:"fb40917b-43ed-5efd-b4c8-0dcf90fb47bc",frontmatter:{title:"데이터베이스 인덱스는 뭘까..?",category:"database"},excerpt:"데이터베이스에서의 인덱스란? RDBMS에서 검색속도를 높이기 위해 사용하는 기술. Table…",fields:{slug:"/posts/blog/database/2018-06-22-데이터베이스-인덱스(Index)/"}}},{node:{id:"9840333f-d81a-5fc6-9513-9af06d2c508a",frontmatter:{title:"디스크컨트롤러(Heap) 알고리즘 문제풀이 - 프로그래머스 Level 3 (점수: 85/100)",category:"algorithm"},excerpt:"프로그래머스 힙 문제 레벨…",fields:{slug:"/posts/blog/algorithm/2019-04-04-디스크컨트롤러-알고리즘-문제/"}}},{node:{id:"6f11d351-1614-53b4-9b4d-af4788d26426",frontmatter:{title:"카카오프렌즈 컬러링북 알고리즘 문제풀이 - 프로그래머스 Level 3 (테스트 O, 채점 X)",category:"algorithm"},excerpt:"채점시에 스택오버플로우 발생하여 ㅠㅠ 통과하지 못했습니다.  201…",fields:{slug:"/posts/blog/algorithm/2019-04-10-카카오프렌즈컬러링북-알고리즘-문제풀이/"}}},{node:{id:"f3b5ba94-e765-525a-baf9-dd02e2ce55aa",frontmatter:{title:"null과 undefined의 차이점",category:"javascript"},excerpt:'null과 undefined의 차이 개요 javascript에 관한 기술면접 중  "null과 undefined…',fields:{slug:"/posts/blog/javascript/2018-06-16-Javascript의-null-vs-undefined/"}}},{node:{id:"39354791-87e9-5161-97d2-82e4b823a62a",frontmatter:{title:"자바스크립트에서 객체를 만드는 법 1",category:"javascript"},excerpt:"개요 클래스나 상속과 같은 객체지향이 없는 자바스크립트는 함수, 즉 function…",fields:{slug:"/posts/blog/javascript/2018-06-26-자바스크립트-객체-정의/"}}},{node:{id:"3223e1a3-9c51-5c91-955d-26b42c3dadb3",frontmatter:{title:"소수찾기 알고리즘 문제풀이 - 백트래킹 이용 - 프로그래머스 Level 2 (점수: 100/100)",category:"algorithm"},excerpt:"프로그래머스 완전탐색 문제 레벨…",fields:{slug:"/posts/blog/algorithm/2019-04-06-소수찾기-알고리즘-문제/"}}},{node:{id:"b74a7315-b615-501d-94c8-da8f4c58495e",frontmatter:{title:"블록체인 개념 정립을 위한 자바스크립트 코딩",category:"javascript"},excerpt:"Block Chain 관리 대상의 데이터 '블록'이라고 하는 데이터들을 P2P…",fields:{slug:"/posts/blog/javascript/2018-06-29-Block-Chain-간단-구현/"}}},{node:{id:"cff46be5-bb4c-57c0-b005-9d96b68ec3ee",frontmatter:{title:"Javascript에서의 Prototype은 무엇인가?",category:"javascript"},excerpt:"prototype은 자바스크립트를 객체지향으로 개발할 수 있게 하는 개념이다. Prototype과 Class…",fields:{slug:"/posts/blog/javascript/2018-07-01-Javascript-Prototype/"}}},{node:{id:"1625e866-da92-53bc-adc0-98bb8389f452",frontmatter:{title:"Spring DI를 위한 Annotation",category:"spring"},excerpt:"Spring 의존관계 자동 설정 Spring Bean 등록 스프링 컨테이너는 base-package…",fields:{slug:"/posts/blog/spring/2018-06-08-Spring-DI-Annotation/"}}},{node:{id:"dcd7f1a5-872d-50df-8417-bd894d2601df",frontmatter:{title:"JDBC -> DBCP -> MyBatis",category:"spring"},excerpt:"개요 MyBatis…",fields:{slug:"/posts/blog/spring/2018-06-18-JDBC,-DBCP,-그리고-MyBatis/"}}},{node:{id:"a5ac277e-a49b-532e-b78d-824ab3dedf7b",frontmatter:{title:"재미로 하는 자바스트립트 - 1. 커서 이펙트를 만들어보자.",category:"javascript"},excerpt:"…",fields:{slug:"/posts/blog/javascript/2019-04-01-커서-이펙트-만들기/"}}},{node:{id:"b09b3cd3-71fc-5595-951e-e8775f58c80c",frontmatter:{title:"React 시작해보기. (1)",category:"react"},excerpt:"React.js UI를 구축하기 위한 자바스크립트 라이브러리 간단한 할 일 목록 앱 velopert…",fields:{slug:"/posts/blog/react/2018-08-01-react-연습(1)/"}}},{node:{id:"9e808265-0838-5e0a-b745-e67e99ac52cb",frontmatter:{title:"Express에 Sequelize 적용해보기",category:"node-express"},excerpt:"Express & Sequelize 모듈 설치 프로젝트 구조 Source Code DB…",fields:{slug:"/posts/blog/node-express/2018-06-09-Express-&-Sequelize/"}}},{node:{id:"457c1037-1eae-5696-8ec9-2955e29b8e57",frontmatter:{title:"Express 웹서버 만들기 (1)",category:"node-express"},excerpt:"Express 프레임워크 - 1 (Node.js) 웹 & 모바일을 위한 Node.js…",fields:{slug:"/posts/blog/node-express/2018-06-09-ExpressJS-1/"}}},{node:{id:"8c08aa1e-e9de-580c-9a39-0412ca9fa553",frontmatter:{title:"Express 웹서버 라우팅 분할 (2)",category:"node-express"},excerpt:"Express.js 2 - 라우터 분할 라우팅 미들웨어로써 모듈을 분리시킬 필요성. 프로젝트 구조 라우팅 모듈 app.js…",fields:{slug:"/posts/blog/node-express/2018-06-09-ExpressJS-2-라우팅-분할/"}}},{node:{id:"bd5ed0c7-4c88-55d1-bd84-c9559aaf3d3b",frontmatter:{title:"베스트앨범 알고리즘 문제풀이(통과못함) - 프로그래머스",category:"algorithm"},excerpt:"…",fields:{slug:"/posts/blog/algorithm/2019-04-03-베스트앨범-알고리즘-문제풀이/"}}},{node:{id:"8160b41e-aad8-509f-bfaf-902871107429",frontmatter:{title:"JWT를 이용한 token 인증 구현해보기.",category:"node-express"},excerpt:"jwt를 이용한 token인증 개요 React를 공부하다보니 PWA(Progressive Web Application…",fields:{slug:"/posts/blog/node-express/2018-06-17-jwt를-이용한-token인증/"}}}]}}}},176:function(e,t,a){"use strict";a(74),a(75),a(76);var n=a(173),r=a(0),s=a.n(r),l=a(155),c=a(4),i=a.n(c),o=a(160),d=function(){return s.a.createElement("footer",{className:"footer"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"copyright typeset"},s.a.createElement("small",{className:"small"},"© ",(new Date).getFullYear(),", Built with")),s.a.createElement("nav",{className:"nav  nav--footer"},s.a.createElement("ul",{className:"list list-nav"},s.a.createElement("li",{className:"item  item--nav"},"JeongHanYoung")))))},m=a(165),u=a(162),p=a(158),g=function(e){var t=e.children,a=e.requireIndex,r=e.isHome,c=e.allPosts,i=s.a.useContext(p.a);console.log(i);var g=i.pathname.split("/")[1];if(c){var f=c.reduce(function(e,t){return e.includes(t.category)?e:[].concat(e,[t.category])},[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{allPosts:c,active:r?"home":g}),r&&s.a.createElement(u.a,null),s.a.createElement("main",{className:"main container"},a&&s.a.createElement(m.a,{categories:f}),t),s.a.createElement(d,null))}return s.a.createElement(l.b,{query:"3270543025",render:function(e){var n=e.allMarkdownRemark.edges.map(function(e){return{id:e.node.id,title:e.node.frontmatter.title,category:e.node.frontmatter.category,date:e.node.frontmatter.date,link:e.node.fields.slug,excerpt:e.node.excerpt}}),l=n.reduce(function(e,t){return e.includes(t.category)?e:[].concat(e,[t.category])},[]);return s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{allPosts:n}),r&&s.a.createElement(u.a,null),s.a.createElement("main",{className:"main container"},a&&s.a.createElement(m.a,{categories:l}),t),s.a.createElement(d,null))},data:n})};g.propTypes={allPosts:i.a.arrayOf(i.a.shape({})),requireIndex:i.a.bool,isHome:i.a.bool,children:i.a.node};t.a=g},179:function(e,t,a){"use strict";a(34);var n=a(0),r=a.n(n),s=a(4),l=a.n(s),c=a(169),i=a(170),o={children:l.a.node,posts:l.a.arrayOf(l.a.shape({})),title:l.a.string},d=function(e){var t=e.posts,a=void 0===t?[]:t,n=e.title,s=void 0===n?"POST LIST":n;return r.a.createElement("div",{className:"content typeset"},r.a.createElement("article",{className:"article  article--page  typeset"},r.a.createElement("h2",null,s)),r.a.createElement("ul",{className:"list  list--posts"},a.map(function(e){return r.a.createElement(c.a,Object.assign({key:e.id},e))})),r.a.createElement(i.a,null))};d.propTypes=o,t.a=d}}]);
//# sourceMappingURL=component---src-templates-tags-template-js-9d9de308c97fe266cb31.js.map