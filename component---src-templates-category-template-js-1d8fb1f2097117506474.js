(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{153:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(158),i=a(160),l=a(165),s=a(166),o=function(e){var t=e.children,a=e.categories;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.a,{active:"category"}),r.a.createElement("main",{className:"main container"},r.a.createElement(l.a,{categories:a}),t),r.a.createElement(s.a,null))},m=(a(34),a(4)),u=a.n(m),g=a(169),d=a(170),p=function(e){var t=e.posts,a=void 0===t?[]:t,n=e.title;return r.a.createElement("div",{className:"content typeset"},r.a.createElement("article",{className:"article  article--page  typeset"},r.a.createElement("h2",null,n)),r.a.createElement("ul",{className:"list  list--posts"},a.map(function(e){return r.a.createElement(g.a,Object.assign({key:e.id},e))})),r.a.createElement(d.a,null))};p.propTypes={posts:u.a.arrayOf(u.a.shape({title:u.a.string.isRequired,category:u.a.string,date:u.a.string,excerpt:u.a.string,link:u.a.string.isRequired})).isRequired,title:u.a.string};var E=p,v=a(171);a.d(t,"query",function(){return f});var f="2034126871";t.default=function(e){var t=e.pageContext,a=e.data,n=e.location,i=a.allMarkdownRemark.edges.map(function(e){return{id:e.node.id,title:e.node.frontmatter.title,category:e.node.frontmatter.category,date:e.node.frontmatter.date,excerpt:e.node.excerpt,link:e.node.fields.slug}}),l=t.category,s=t.categories,m=t.numPages,u=t.currentPage,g={isFirst:1===u,isLast:u===m,prevPage:l?u-1==1?"/category/"+l:"/category/"+l+"/"+(u-1):u-1==1?"/category":"/category/"+(u-1),nextPage:l?"/category/"+l+"/"+(u+1):"/category/"+(u+1),currentPage:u,numPages:m};return r.a.createElement(c.a.Provider,{value:n},r.a.createElement(c.b.Provider,{value:g},r.a.createElement(o,{categories:s},r.a.createElement(v.a,{title:"Devlog | Category"+(l?" - "+l:"")}),r.a.createElement(E,{posts:i,title:l||"general"}))))}},155:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(33),s=a.n(l);a.d(t,"a",function(){return s.a});a(156);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},158:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return c});var n=a(0),r=Object(n.createContext)(),c=Object(n.createContext)()},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(56),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(155),i=a(161),l=a.n(i),s=(a(157),a(74),a(75),function(e){var t=e.allPosts,a=Object(n.useState)(""),i=a[0],l=a[1],s=Object(n.useState)([]),o=s[0],m=s[1];return Object(n.useEffect)(function(){if(i.length>2){var e=t.filter(function(e){return e.title.includes(i)});m(e)}else m([])},[i]),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"search-input",placeholder:"Search",autoComplete:"off",value:i,onChange:function(e){return l(e.target.value)},onBlur:function(){l("")}}),r.a.createElement("ul",{className:"search--results"},o.map(function(e){return r.a.createElement("li",{key:e.id,className:"search--result"},r.a.createElement(c.a,{to:e.link},r.a.createElement("article",{className:"search--result-article"},r.a.createElement("div",{className:"search--result-article-title"},r.a.createElement("h3",null,e.title),r.a.createElement("span",{className:"date"},e.date)),r.a.createElement("p",null,e.excerpt))))})))});t.a=function(e){var t=e.allPosts,a=void 0===t?[]:t,n=e.active,i=void 0===n?"":n;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement(c.a,{className:"logo",to:"/"},"DevLog"),r.a.createElement("ul",{className:"list list--nav",style:{position:"relative"}},r.a.createElement("li",{className:l()("item","item--nav",{"item--current":"home"===i})},r.a.createElement(c.a,{to:"/"},"Home")),r.a.createElement("li",{className:l()("item","item--nav",{"item--current":"about"===i})},r.a.createElement(c.a,{to:"/about"},"About")),r.a.createElement("li",{className:l()("item","item--nav",{"item--current":"category"===i})},r.a.createElement(c.a,{to:"/category"},"Category")),r.a.createElement("li",{className:l()("item","item--nav",{"item--current":"tags"===i})},r.a.createElement(c.a,{to:"/tags"},"Tags")),r.a.createElement("li",{className:"item item--nav"},r.a.createElement("a",{href:"/TIL"},"TIL")),r.a.createElement("li",{className:"item  item--nav"},r.a.createElement(s,{allPosts:a})))))}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(155);t.a=function(e){var t=e.categories,a=void 0===t?["TIL"]:t;return r.a.createElement("aside",{className:"aside typeset aside--left",style:{borderRight:"1px solid #a8adac"}},r.a.createElement("section",{className:"section section--category-index"},r.a.createElement("h3",null,"Index"),r.a.createElement("nav",{className:"nav  nav--categories"},r.a.createElement("ul",{className:"list  list--categories"},a.map(function(e){return"general"===e?r.a.createElement("li",{key:"category__link-"+e,className:"item  item--category"},r.a.createElement(c.a,{to:"/category"},e)):r.a.createElement("li",{key:"category__link-"+e,className:"item  item--category"},r.a.createElement(c.a,{to:"/category/"+e},e))})))))}},166:function(e,t,a){"use strict";var n=a(167),r=a(0),c=a.n(r);t.a=function(){var e=n.data.site.siteMetadata.author;return c.a.createElement("footer",{className:"footer"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"copyright typeset"},c.a.createElement("small",{className:"small"},"© ",(new Date).getFullYear(),", Built with")),c.a.createElement("nav",{className:"nav  nav--footer"},c.a.createElement("ul",{className:"list list-nav"},c.a.createElement("li",{className:"item  item--nav"},e)))))}},167:function(e){e.exports={data:{site:{siteMetadata:{author:"JeongHanYoung"}}}}},169:function(e,t,a){"use strict";a(157);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),l=a(155),s=function(e){var t=e.title,a=e.category,n=void 0===a?"general":a,c=e.date,i=void 0===c?(new Date).toUTCString():c,s=e.excerpt,o=e.link;return r.a.createElement("li",{className:"item  item--post"},r.a.createElement("article",{className:"article  article--post"},r.a.createElement(l.a,{to:o},r.a.createElement("h2",null,t)),r.a.createElement("small",{className:"small  post-meta"},r.a.createElement("span",{className:"label  label--category"},n?r.a.createElement(l.a,{to:"/category/"+n},n):r.a.createElement(l.a,{to:"/category"},"general")),"   ",r.a.createElement("span",{className:"time"},i)),r.a.createElement("p",null,s)))};s.propTypes={title:i.a.string.isRequired,category:i.a.string,date:i.a.string,excerpt:i.a.string,link:i.a.string.isRequired},t.a=s},170:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(158),i=a(155);t.a=function(){var e=r.a.useContext(c.b),t=e.isFirst,a=e.isLast,n=e.prevPage,l=e.nextPage,s=e.currentPage,o=e.numPages;return r.a.createElement("nav",{className:"nav  nav--paginator"},t?r.a.createElement("span",{className:"pagination  pagination--previous"},"Previous"):r.a.createElement(i.a,{to:n,className:"pagination  pagination--previous"},"Previous"),r.a.createElement("span",{className:"pagination  pagination--counter"},"Page: "+s+" of "+o),a?r.a.createElement("span",{className:"pagination  pagination--next"},"Next"):r.a.createElement(i.a,{to:l,className:"pagination  pagination--next"},"Next"))}},171:function(e,t,a){"use strict";var n=a(172),r=a(0),c=a.n(r),i=a(4),l=a.n(i),s=a(178),o=a.n(s);function m(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,l=e.title,s=n.data.site,m=t||s.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},172:function(e){e.exports={data:{site:{siteMetadata:{title:"Hanyoung's Devook",description:"Be myself",author:"JeongHanYoung"}}}}}}]);
//# sourceMappingURL=component---src-templates-category-template-js-1d8fb1f2097117506474.js.map