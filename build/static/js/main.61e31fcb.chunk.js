(this["webpackJsonpnvpn-company-test"]=this["webpackJsonpnvpn-company-test"]||[]).push([[0],{91:function(e,t,a){"use strict";a.r(t);var n,c,s,r=a(0),i=a.n(r),o=a(11),d=a.n(o),l=a(12),j=a(15),O=Object(l.b)(n||(n=Object(j.a)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        font-family: 'Roboto', sans-serif;\n        box-shadow: none !important;\n    }\n\n    .required::after {\n        content: '*';\n        color: red;\n    }\n\n    .page-item{\n        cursor: pointer;\n    }\n    .disabled{\n        cursor: not-allowed !important;\n    }\n\n"]))),b=a(6);!function(e){e.SET_LOADING="SET_LOADING",e.SET_HAS_MORE_DATA="SET_HAS_MORE_DATA",e.SET_NO_MORE_DATA="SET_NO_MORE_DATA",e.SET_REPOSITORIES="SET_REPOSITORIES",e.MORE_REPOSITORIES="MORE_REPOSITORIES",e.UPDATE_REPOSITORIES="UPDATE_REPOSITORIES",e.PAGINATION_SET_PAGE="PAGINATION_SET_PAGE"}(c||(c={})),function(e){e.DATE="DATE",e.STRING="STRING"}(s||(s={}));var h,u,p,f,x=a(51),m=a.n(x).a.create({baseURL:"https://api.github.com/users/jeferson3",headers:{Accept:"application/vnd.github+json",Authorization:"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"}}),S=function(e){e({type:c.SET_LOADING})},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;S(t),m({url:"/repos",method:"GET",params:{page:e,per_page:5}}).then((function(a){0===a.data.length?t({type:c.SET_NO_MORE_DATA}):t({type:c.SET_HAS_MORE_DATA}),200===a.status&&t({type:c.SET_REPOSITORIES,payload:{data:a.data,page:e}})})).finally((function(){S(t)}))},T=function(e,t){var a=t.data;(e.type===s.STRING||e.type===s.DATE)&&a.sort(E(e.field))},E=function(e){var t=1;return"-"===e[0]&&(t=-1,e=e.substr(1)),function(a,n){return(a[e]<n[e]?-1:a[e]>n[e]?1:0)*t}},g=Object(r.createContext)({}),_=function(){return Object(r.useContext)(g)},A=a(1),y=function(e){var t=e.page,a=e.setPage,n=_(),s=n.state,r=(s.loading,s.more),i=n.dispatch,o=function(e){a(e),function(e,t){e({type:c.PAGINATION_SET_PAGE,payload:t})}(i,t),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;S(t),m({url:"/repos",method:"GET",params:{page:e,per_page:5}}).then((function(a){0===a.data.length?t({type:c.SET_NO_MORE_DATA}):t({type:c.SET_HAS_MORE_DATA}),200===a.status&&t({type:c.MORE_REPOSITORIES,payload:{data:a.data,page:e}})})).finally((function(){S(t)}))}(e,i)};return Object(A.jsx)("nav",{"aria-label":"Page navigation example",children:Object(A.jsx)("ul",{className:"pagination justify-content-center",children:r&&Object(A.jsx)("li",{className:"page-item",children:Object(A.jsx)("a",{href:"#/",className:"page-link",onClick:function(){o(t+1)},children:"Load More ..."})})})})},N=a(98),R=a(97),I=a(93),D=a(57),P=a(94),k=a(52),G=a(53),w=new(function(){function e(){Object(k.a)(this,e),this.search="",this.disabled="Todos",this.archived="Todos"}return Object(G.a)(e,[{key:"setSearch",value:function(e){this.search=e}},{key:"setDisabled",value:function(e){this.disabled="sim"===e||"nao"!==e&&"Todos"}},{key:"setArquived",value:function(e){this.archived="sim"===e||"nao"!==e&&"Todos"}},{key:"isArchived",value:function(){return this.archived}},{key:"isDisabled",value:function(){return this.disabled}},{key:"hasSearch",value:function(){return void 0!==this.search&&null!==this.search&&""!==this.search}},{key:"getSearch",value:function(){return this.search}}]),e}()),C=function(e){e.setShow;var t=e.setOrderDate,a=e.setOrderName,n=Object(r.useState)(""),s=Object(b.a)(n,2),i=s[0],o=s[1],d=Object(r.useState)("Todos"),l=Object(b.a)(d,2),j=l[0],O=l[1],h=Object(r.useState)("Todos"),u=Object(b.a)(h,2),p=u[0],f=u[1],x=w,m=_(),S=m.dispatch,T=m.state.repositories;return Object(A.jsx)(N.a,{activeKey:"0",children:Object(A.jsxs)(N.a.Item,{eventKey:"0",children:[Object(A.jsx)(N.a.Header,{children:"Filtros"}),Object(A.jsx)(N.a.Body,{children:Object(A.jsx)(R.a,{onSubmit:function(e){e.preventDefault(),function(e,t,a){var n=t;!0===a.isArchived()?n.data=n.data.filter((function(e){return!!e.archived})):!1===a.isArchived()&&(n.data=n.data.filter((function(e){return!e.archived}))),!0===a.isDisabled()?n.data=n.data.filter((function(e){return!!e.disabled})):!1===a.isDisabled()&&(n.data=n.data.filter((function(e){return!e.disabled}))),a.hasSearch()&&(n.data=n.data.filter((function(e){return e.name.toLocaleLowerCase().includes(a.getSearch().toLocaleLowerCase())}))),"Todos"!==a.isArchived()||"Todos"!==a.isDisabled()||a.hasSearch()?e({type:c.UPDATE_REPOSITORIES,payload:n}):v(1,e)}(S,T,x)},children:Object(A.jsxs)(I.a,{children:[Object(A.jsx)(D.a,{md:6,children:Object(A.jsxs)(R.a.Group,{className:"mb-3",children:[Object(A.jsx)(R.a.Label,{children:"Disabilitado:"}),Object(A.jsxs)(R.a.Select,{onChange:function(e){x.setDisabled(e.target.value),O(e.target.value)},value:j,children:[Object(A.jsx)("option",{value:"Todos",children:"-- selecione --"}),Object(A.jsx)("option",{value:"sim",children:"Sim"}),Object(A.jsx)("option",{value:"nao",children:"N\xe3o"})]})]})}),Object(A.jsx)(D.a,{md:6,children:Object(A.jsxs)(R.a.Group,{className:"mb-3",children:[Object(A.jsx)(R.a.Label,{children:"Arquivado:"}),Object(A.jsxs)(R.a.Select,{onChange:function(e){x.setArquived(e.target.value),f(e.target.value)},value:p,children:[Object(A.jsx)("option",{value:"Todos",children:"-- selecione --"}),Object(A.jsx)("option",{value:"sim",children:"Sim"}),Object(A.jsx)("option",{value:"nao",children:"N\xe3o"})]})]})}),Object(A.jsx)(D.a,{md:12,children:Object(A.jsx)(R.a.Group,{className:"mb-3",children:Object(A.jsx)(R.a.Control,{type:"search",placeholder:"Pesquisar",className:"me-2","aria-label":"Search",onChange:function(e){x.setSearch(e.target.value),o(e.target.value)},value:i})})}),Object(A.jsxs)(D.a,{md:12,className:"text-end",children:[Object(A.jsx)(P.a,{variant:"primary",type:"submit",children:"Pesquisar"}),Object(A.jsx)(P.a,{className:"ms-2",variant:"secondary",type:"button",onClick:function(e){e.preventDefault(),o(""),f("Todos"),O("Todos"),x.setSearch(""),x.setArquived("Todos"),x.setDisabled("Todos"),t(!1),a(!1),v(1,S)},children:"Limpar"})]})]})})})]})})},M=a(96),L=function(e){var t,a=e.repository;return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("td",{children:a.id}),Object(A.jsx)("td",{children:a.name}),Object(A.jsxs)("td",{children:[null===(t=a.description)||void 0===t?void 0:t.substring(0,10),"..."]}),Object(A.jsx)("td",{children:a.archived?"Sim":"N\xe3o"}),Object(A.jsx)("td",{children:a.disabled?"Sim":"N\xe3o"}),Object(A.jsx)("td",{children:a.created_at.toString()})]})})},q=function(){var e=_(),t=e.state.repositories,a=e.dispatch,n=Object(r.useRef)(!0),c=Object(r.useState)(t.page),i=Object(b.a)(c,2),o=i[0],d=i[1],l=Object(r.useState)(!1),j=Object(b.a)(l,2)[1],O=Object(r.useState)(!1),h=Object(b.a)(O,2),u=h[0],p=h[1],f=Object(r.useState)(!1),x=Object(b.a)(f,2),m=x[0],S=x[1];Object(r.useEffect)((function(){return n.current&&v(o,a),function(){n.current=!1}}),[o,a]);var E=function(){p(!u),T({type:s.STRING,field:u?"name":"-name"},t)},g=function(){S(!m),T({type:s.DATE,field:m?"created_at":"-created_at"},t)};return Object(A.jsxs)("div",{style:{padding:"10px 50px"},children:[Object(A.jsxs)("h1",{className:"text-uppercase text-center mt-3",children:["Reposit\xf3rios ",Object(A.jsx)("a",{href:"https://github.com/jeferson3",target:"_blank",rel:"noreferrer",className:"text-danger",children:"Jeferson"})]}),Object(A.jsx)(C,{setShow:j,setOrderDate:S,setOrderName:p}),!!t.data&&t.data.length>0&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)("table",{className:"table table-stripped table-dark",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"Id"}),!!u&&Object(A.jsxs)("th",{className:"d-flex",onClick:E,children:[Object(A.jsx)("i",{className:"fas fa-sort-up me-1"}),Object(A.jsx)("span",{children:"Nome"})]}),!u&&Object(A.jsxs)("th",{className:"d-flex",onClick:E,children:[Object(A.jsx)("i",{className:"fas fa-sort-down me-1"}),Object(A.jsx)("span",{children:"Nome"})]}),Object(A.jsx)("th",{children:"Descri\xe7\xe3o"}),Object(A.jsx)("th",{children:"Arquivado"}),Object(A.jsx)("th",{children:"Desabilitado"}),!!m&&Object(A.jsxs)("th",{className:"d-flex",onClick:g,children:[Object(A.jsx)("i",{className:"fas fa-sort-up me-1"}),Object(A.jsx)("span",{children:"Data Cria\xe7\xe3o"})]}),!m&&Object(A.jsxs)("th",{className:"d-flex",onClick:g,children:[Object(A.jsx)("i",{className:"fas fa-sort-down me-1"}),Object(A.jsx)("span",{children:"Data Cria\xe7\xe3o"})]})]})}),Object(A.jsx)("tbody",{children:t.data.map((function(e,t){return Object(A.jsx)(L,{repository:e},t)}))})]}),Object(A.jsx)(y,{page:o,setPage:d})]}),(!t.data||0===t.data.length)&&Object(A.jsx)(M.a,{variant:"danger",children:"Nenhum registro encontrado!"})]})},H={loading:!1,more:!0,repositories:{data:[],page:1}},U=a(18),z=a(2),B=function(e,t){switch(t.type){case c.SET_LOADING:return Object(z.a)(Object(z.a)({},e),{},{loading:!e.loading});case c.SET_NO_MORE_DATA:return Object(z.a)(Object(z.a)({},e),{},{more:!1});case c.SET_HAS_MORE_DATA:return Object(z.a)(Object(z.a)({},e),{},{more:!0});case c.SET_REPOSITORIES:return Object(z.a)(Object(z.a)({},e),{},{repositories:t.payload});case c.MORE_REPOSITORIES:return Object(z.a)(Object(z.a)({},e),{},{repositories:Object(z.a)(Object(z.a)({},e.repositories),{},{data:[].concat(Object(U.a)(e.repositories.data),Object(U.a)(t.payload.data))})});case c.PAGINATION_SET_PAGE:return Object(z.a)(Object(z.a)({},e),{},{repositories:Object(z.a)(Object(z.a)({},e.repositories),{},{page:t.payload})});case c.UPDATE_REPOSITORIES:return Object(z.a)(Object(z.a)({},e),{},{repositories:t.payload});default:return Object(z.a)({},e)}},F=function(e){var t=e.children,a=Object(r.useReducer)(B,H),n=Object(b.a)(a,2),c=n[0],s=n[1];return Object(A.jsx)(g.Provider,{value:{state:c,dispatch:s},children:t})},J=a(95),K=l.d.div(h||(h=Object(j.a)(["\n    \n    width: 100%;\n\n    ","\n    ","\n    ","\n"])),(function(e){e.theme;var t=e.height;if(t)return Object(l.c)(u||(u=Object(j.a)(["\n                height: ","vh;\n            "])),t)}),(function(e){if(e.centered)return Object(l.c)(p||(p=Object(j.a)(["\n                display: flex;\n                justify-content: center;\n                align-items: center;\n            "])))}),(function(e){if(e.overlay)return Object(l.c)(f||(f=Object(j.a)(["\n                position: fixed;\n                width: 100%;\n                height: 100%;\n                background-color: rgba(0,0,0,0.3); /* Black background with opacity */\n                z-index: 999;            \n            "])))}));function Q(){var e=_().state.loading;return Object(A.jsx)(A.Fragment,{children:!!e&&Object(A.jsx)(K,{centered:!0,overlay:!0,height:100,children:Object(A.jsx)(J.a,{animation:"grow"})})})}d.a.render(Object(A.jsxs)(i.a.StrictMode,{children:[Object(A.jsx)(O,{}),Object(A.jsx)(l.a,{theme:{color:{font:{primary:"blue",secondary:"green"}}},children:Object(A.jsxs)(F,{children:[Object(A.jsx)(Q,{}),Object(A.jsx)(q,{})]})})]}),document.getElementById("root"))}},[[91,1,2]]]);
//# sourceMappingURL=main.61e31fcb.chunk.js.map