(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(174),l=a(4),s=a.n(l),c=a(199),o=a(200),m=a(155),u=function(e){var t=e.id,a=e.title;return r.a.createElement(m.b,{query:"42939404",render:function(e){var n=e.site.siteMetadata.disqus.disqusShortname,i={identifier:t,title:a};return r.a.createElement(o.DiscussionEmbed,{shortname:n,config:i},e)},data:c})},d=function(e){var t=e.html,a=e.id,n=e.title;return r.a.createElement("article",{className:"article article--page content typeset"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}),r.a.createElement(u,{id:a,title:n}))};d.propTypes={html:l.string.isRequired};var p=d,E=(a(37),a(76),function(e){var t=e.title,a=void 0===t?"Hello World":t,n=e.previous,i=e.next,l=e.headings;return r.a.createElement("aside",{className:"aside typeset aside--right"},r.a.createElement("section",{className:"section section--description"},r.a.createElement("h3",null,a),r.a.createElement("ul",{className:"list"},l.map(function(e,t){var a=e.value.trim().replace("(","").replace(")","").replace(".","").replace(",","").split(" ").join("-");return r.a.createElement("li",{style:{paddingLeft:15*(e.depth-1)+"px",fontSize:"1rem"},key:"heading__"+a},r.a.createElement("a",{href:"#"+a.toLowerCase()},"› ",e.value))})),r.a.createElement("nav",{className:"nav  nav--paginator"},n?r.a.createElement(m.a,{className:"pagination  pagination--previous",to:n.node.fields.slug},n.node.frontmatter.title):r.a.createElement("span",{className:"pagination  pagination--previous"}),i?r.a.createElement(m.a,{className:"pagination  pagination--next",to:i.node.fields.slug},i.node.frontmatter.title):r.a.createElement("span",{className:"pagination  pagination--next"}))))});E.propTypes={title:s.a.string,previous:s.a.shape({}),next:s.a.shape({})};var v=E;a.d(t,"query",function(){return f});var f="3096000143";t.default=function(e){var t=e.data,a=e.pageContext,n=t.markdownRemark,l=n.html,s=n.frontmatter,c=n.headings,o=n.id,m=s.title,u=a.previous,d=a.next;return r.a.createElement(i.a,null,r.a.createElement(p,{html:l,id:o,title:m}),r.a.createElement(v,{title:m,previous:u,next:d,headings:c}))}},155:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(156);var o=r.a.createContext({}),m=function(e){return r.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},156:function(e,t,a){var n;e.exports=(n=a(159))&&n.default||n},159:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(56),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=o},160:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(155),l=a(161),s=a.n(l),c=(a(157),a(74),a(75),function(e){var t=e.allPosts,a=Object(n.useState)(""),l=a[0],s=a[1],c=Object(n.useState)([]),o=c[0],m=c[1];return Object(n.useEffect)(function(){if(l.length>2){var e=t.filter(function(e){return e.title.includes(l)});m(e)}else m([])},[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{className:"search-input",placeholder:"Search",autoComplete:"off",value:l,onChange:function(e){return s(e.target.value)},onBlur:function(){s("")}}),r.a.createElement("ul",{className:"search--results"},o.map(function(e){return r.a.createElement("li",{key:e.id,className:"search--result"},r.a.createElement(i.a,{to:e.link},r.a.createElement("article",{className:"search--result-article"},r.a.createElement("div",{className:"search--result-article-title"},r.a.createElement("h3",null,e.title),r.a.createElement("span",{className:"date"},e.date)),r.a.createElement("p",null,e.excerpt))))})))});t.a=function(e){var t=e.allPosts,a=void 0===t?[]:t,n=e.active,l=void 0===n?"":n;return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement(i.a,{className:"logo",to:"/"},"DevLog"),r.a.createElement("ul",{className:"list list--nav",style:{position:"relative"}},r.a.createElement("li",{className:s()("item","item--nav",{"item--current":"home"===l})},r.a.createElement(i.a,{to:"/"},"Home")),r.a.createElement("li",{className:s()("item","item--nav",{"item--current":"about"===l})},r.a.createElement(i.a,{to:"/about"},"About")),r.a.createElement("li",{className:s()("item","item--nav",{"item--current":"category"===l})},r.a.createElement(i.a,{to:"/category"},"Category")),r.a.createElement("li",{className:s()("item","item--nav",{"item--current":"tags"===l})},r.a.createElement(i.a,{to:"/tags"},"Tags")),r.a.createElement("li",{className:"item item--nav"},r.a.createElement("a",{href:"/TIL"},"TIL")),r.a.createElement("li",{className:"item  item--nav"},r.a.createElement(c,{allPosts:a})))))}},162:function(e,t,a){"use strict";var n=a(163),r=a(0),i=a.n(r),l=a(155);t.a=function(){return i.a.createElement(l.b,{query:"3978990474",render:function(e){return i.a.createElement("div",{className:"feature",style:{backgroundImage:"url(../images/header.jpeg)",display:"flex",alignItems:"center"}},i.a.createElement("div",{className:"container typeset"},i.a.createElement("h2",{id:"alembic"},e.site.siteMetadata.title),i.a.createElement("p",null,e.site.siteMetadata.description)))},data:n})}},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Hanyoung's Devook",description:"Be myself"}}}}},166:function(e,t,a){"use strict";var n=a(167),r=a(0),i=a.n(r);t.a=function(){var e=n.data.site.siteMetadata.author;return i.a.createElement("footer",{className:"footer"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"copyright typeset"},i.a.createElement("small",{className:"small"},"© ",(new Date).getFullYear(),", Built with")),i.a.createElement("nav",{className:"nav  nav--footer"},i.a.createElement("ul",{className:"list list-nav"},i.a.createElement("li",{className:"item  item--nav"},e)))))}},167:function(e){e.exports={data:{site:{siteMetadata:{author:"JeongHanYoung"}}}}},174:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=(a(146),a(166)),c=a(160),o=a(162),m=function(e){var t=e.children,a=e.isHome;return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{active:"home"}),a&&r.a.createElement(o.a,null),r.a.createElement("main",{className:"main container"},t),r.a.createElement(s.a,null))};m.propTypes={children:l.a.node.isRequired},t.a=m},199:function(e){e.exports={data:{site:{siteMetadata:{disqus:{disqusShortname:"junghanyoung-github-io"}}}}}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-b0db3d2e04564c147b42.js.map