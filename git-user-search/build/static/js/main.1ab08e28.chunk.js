(this["webpackJsonpgit-user-search"]=this["webpackJsonpgit-user-search"]||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){},13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),r=c(5),j=c.n(r),l=(c(10),c(2)),a=c(4),i=c.n(a),o=(c(12),c(13),c(0)),h=s.a.memo((function(e){var t=e.userName,c=Object(n.useState)(""),r=Object(l.a)(c,2),j=r[0],a=r[1],h=Object(n.useState)([]),d=Object(l.a)(h,2),b=d[0],u=d[1];console.log("userName>>",t);console.log("search>>",j);var O=Object(n.useCallback)(i()((function(e){var t=e.target.value;a(t),x(t)}),3e3),[]),x=function(e){console.log("search1>>",e),e.length>0&&fetch("https://api.github.com/users/"+e+"/repos").then((function(e){return e.json()})).then((function(e){console.log("data",e),u(e)})).catch((function(e){console.log(e)}))};return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("div",{className:"search_block",children:Object(o.jsx)("input",{type:"text",placeholder:"Search User",onChange:O})}),Object(o.jsx)("h4",{children:j?Object(o.jsxs)("p",{children:[j,"-RepoList"]}):" All User Repos List"}),Object(o.jsx)("div",{style:{overflowX:"auto"},children:Object(o.jsxs)("table",{className:"Repo_List",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Owner Name"}),Object(o.jsx)("th",{children:"Repo Name"}),Object(o.jsx)("th",{children:"Repos Url"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Stars"}),Object(o.jsx)("th",{children:"Open Issue Count"}),Object(o.jsx)("th",{children:"Watchers"})]})}),Object(o.jsx)("tbody",{children:j.length>0?s.a.Children.toArray(b.map((function(e){return console.log(e),Object(o.jsxs)("tr",{children:[Object(o.jsxs)("td",{className:"owner_details",children:[Object(o.jsx)("img",{src:e.owner.avatar_url,alt:"owner_img",className:"owner_img"}),Object(o.jsxs)("span",{className:"owner_name",children:[" ",e.owner.login]})]}),Object(o.jsxs)("td",{children:[" ",Object(o.jsxs)("span",{className:"owner_name",children:[" ",e.name]})]}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:e.url,children:e.url})}),Object(o.jsxs)("td",{children:[" ",Object(o.jsxs)("span",{className:"owner_name",children:[" ",e.description]})]}),Object(o.jsx)("td",{children:e.stargazers_count}),Object(o.jsx)("td",{children:e.open_issues_count}),Object(o.jsx)("td",{children:e.watchers_count})]})}))):s.a.Children.toArray(t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsxs)("span",{className:"owner_name",children:[" ",e.login]})}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:e.url,children:e.url})}),Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:e.repos_url,children:e.repos_url})}),Object(o.jsx)("td",{children:"NA"}),Object(o.jsx)("td",{children:"NA"}),Object(o.jsx)("td",{children:"NA"}),Object(o.jsx)("td",{children:"NA"})]})})))})]})})]})}));var d=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){fetch("https://api.github.com/users").then((function(e){return e.json()})).then((function(e){s(e)})).catch((function(e){console.log(e)}))}),[]),Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("h5",{style:{color:"blue"},children:"Toggle Between All User Repo and searched Repo list based on Search"}),Object(o.jsx)(h,{userName:c})]})},b=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,16)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),r(e),j(e)}))};j.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root")),b()}},[[15,1,2]]]);
//# sourceMappingURL=main.1ab08e28.chunk.js.map