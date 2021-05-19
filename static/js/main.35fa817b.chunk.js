(this["webpackJsonp@preview-pack/local-client"]=this["webpackJsonp@preview-pack/local-client"]||[]).push([[0],{111:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(24),a=t(112),c=t(44),i=t(6),s=t(43),o=Object(r.d)(c.a,{},Object(r.a)((function(e){var n,t=e.dispatch,r=e.getState;return function(e){return function(a){e(a),[i.a.MOVE_CELL,i.a.UPDATE_CELL,i.a.INSERT_CELL_AFTER,i.a.DELETE_CELL].includes(a.type)&&(n&&clearTimeout(n),n=setTimeout((function(){Object(s.saveCells)()(t,r)}),250))}}}),a.a))},153:function(e,n,t){},154:function(e,n,t){},155:function(e,n,t){},156:function(e,n,t){},284:function(e,n,t){},285:function(e,n,t){},292:function(e,n,t){},293:function(e,n,t){},294:function(e,n,t){},295:function(e,n,t){},296:function(e,n,t){},297:function(e,n,t){"use strict";t.r(n);t(120),t(121);var r=t(26),a=t.n(r),c=t(28),i=t(45),s=(t(153),t(0)),o=c.c,u=t(7),l=t.n(u),d=t(11),p=(t(154),t(155),t(156),t(118)),f=t(114),j=t.n(f),h=t(115),b=t.n(h),m=t(119),v=t(42),O=t(27),x=t.n(O),E=t(1),L=function(e){var n=e.onChange,t=e.initialValue,r=Object(s.useRef)();return Object(E.jsxs)("div",{className:"editor-wrapper",children:[Object(E.jsx)("button",{className:"button button-format is-info is-small",onClick:function(){var e=r.current.getModel().getValue(),n=j.a.format(e,{parser:"babel",plugins:[b.a],useTabs:!1,semi:!0}).replace(/\n$/,"");r.current.setValue(n)},children:"Format"}),Object(E.jsx)(p.a,{onMount:function(e,n){var t;r.current=e,null===(t=e.getModel())||void 0===t||t.updateOptions({tabSize:2});new m.a(n,(function(e){return Object(v.parse)(e,{sourceType:"module",plugins:["jsx"]})}),x.a,e).highLightOnDidChangeModelContent(100,(function(){}),(function(){}),void 0,(function(){}))},onChange:n,value:t,theme:"vs-dark",language:"javascript",height:"100%",options:{wordWrap:"on",minimap:{enabled:!1},showUnused:!1,folding:!1,lineNumbersMinChars:3,fontSize:18,scrollBeyondLastLine:!1,automaticLayout:!0}})]})},w=(t(284),"\n            <html>\n      <head>\n        <style>html { background-color: white; }</style>\n      </head>\n      <body>\n        <div id=\"root\"></div>\n        <script>\n          const handleError = (err) => {\n            const root = document.querySelector('#root');\n            root.innerHTML = '<div style=\"color: red;\"><h4>Runtime Error</h4>' + err + '</div>';\n            console.error(err);\n          };\n\n          window.addEventListener('error', (event) => {\n            event.preventDefault();\n            handleError(event.error);\n          });\n\n          window.addEventListener('message', (event) => {\n            try {\n              eval(event.data);\n            } catch (err) {\n              handleError(err);\n            }\n          }, false);\n        <\/script>\n      </body>\n    </html>\n              "),y=function(e){var n=e.code,t=e.err,r=Object(s.useRef)();return Object(s.useEffect)((function(){r.current.srcdoc=w,setTimeout((function(){r.current.contentWindow.postMessage(n,"*")}),50)}),[n]),Object(E.jsxs)("div",{className:"preview-wrapper",children:[Object(E.jsx)("iframe",{ref:r,title:"preview",sandbox:"allow-scripts",srcDoc:w}),t&&Object(E.jsx)("div",{className:t="",children:t})]})},C=t(5),g=t(15),_=(t(285),t(116)),N=function(e){var n,t=e.direction,r=e.children,a=Object(s.useState)(window.innerHeight),c=Object(g.a)(a,2),i=c[0],o=c[1],u=Object(s.useState)(window.innerWidth),l=Object(g.a)(u,2),d=l[0],p=l[1],f=Object(s.useState)(.75*window.innerWidth),j=Object(g.a)(f,2),h=j[0],b=j[1];return Object(s.useEffect)((function(){var e,n=function(){e&&clearTimeout(e),e=setTimeout((function(){o(window.innerHeight),p(window.innerWidth),.75*window.innerWidth<h&&b(.75*window.innerWidth)}),100)};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[h]),n="horizontal"===t?{className:"resize-horizontal",minConstraints:[.2*d,1/0],maxConstraints:[.75*d,1/0],height:1/0,width:h,resizeHandles:["e"],onResizeStop:function(e,n){b(n.size.width)}}:{minConstraints:[1/0,24],maxConstraints:[1/0,.9*i],height:300,width:1/0,resizeHandles:["s"]},Object(E.jsx)(_.ResizableBox,Object(C.a)(Object(C.a)({},n),{},{children:r}))},T=t(24),R=function(){var e=Object(c.b)();return Object(s.useMemo)((function(){return Object(T.b)(i.actionCreators,e)}),[e])},S=t(117),k=function(e){var n,t=e.cell,r=R(),a=r.updateCell,c=r.createBundle,i=o((function(e){return e.bundles[t.id]})),u=(n=t.id,o((function(e){var t,r=e.cells,a=r.data,c=r.order.map((function(e){return a[e]})),i=[],s=Object(S.a)(c);try{for(s.s();!(t=s.n()).done;){var o=t.value;if(o.id===n?i.push("\n      import _React from \"react\";\n      import _ReactDOM from \"react-dom\";\n      var show = (value) => {\n        const root = document.querySelector('#root')\n          if(typeof value === 'object'){\n            if(value.$$typeof && value.props){\n              _ReactDOM.render(value, root);\n            }else {\n              root.innerHTML = JSON.stringify(value);\n            }\n          } else {\n            root.innerHTML = value;\n          }\n      };\n      "):i.push("var show = () => {}"),i.push(o.content),o.id===n)break}}catch(u){s.e(u)}finally{s.f()}return i})).join("\n"));return Object(s.useEffect)((function(){if(i){var e=setTimeout(Object(d.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t.id,u);case 1:case"end":return e.stop()}}),e)}))),1e3);return function(){clearTimeout(e)}}c(t.id,u)}),[t.id,u,c]),Object(E.jsx)(N,{direction:"vertical",children:Object(E.jsxs)("div",{style:{height:"calc(100% - 10px)",display:"flex",flexDirection:"row"},children:[Object(E.jsx)(N,{direction:"horizontal",children:Object(E.jsx)(L,{initialValue:t.content,onChange:function(e){return a(t.id,e)}})}),Object(E.jsx)("div",{className:"always-white",children:!i||i.loading?Object(E.jsx)("div",{className:"progress-cover",children:Object(E.jsx)("progress",{className:"progress is-small is-info",max:"100",children:"Loading"})}):Object(E.jsx)(y,{code:i.code,err:i.err})})]})})},D=(t(292),function(e){var n=e.id,t=R(),r=t.moveCell,a=t.deleteCell;return Object(E.jsxs)("div",{className:"action-bar ",children:[Object(E.jsx)("button",{className:"button is-primary is-small",onClick:function(){return r(n,"up")},children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"fas fa-caret-up "})})}),Object(E.jsx)("button",{className:"button is-primary is-small",onClick:function(){return r(n,"down")},children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"fas fa-caret-down "})})}),Object(E.jsx)("button",{className:"button is-primary is-small",onClick:function(){return a(n)},children:Object(E.jsx)("span",{className:"icon",children:Object(E.jsx)("i",{className:"fas fa-trash "})})})]})}),M=(t(293),function(e){var n,t=e.cell;return n=Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("div",{className:"action-bar-wrapper"}),Object(E.jsx)(D,{id:t.id}),Object(E.jsx)(k,{cell:t})]}),Object(E.jsx)("div",{className:"cell-list-item",children:n})}),F=(t(294),function(e){var n=e.previousCellId,t=R().insertCellAfter;return Object(E.jsxs)("div",{className:"add-cell",children:[Object(E.jsx)("div",{className:"add-buttons",children:Object(E.jsxs)("button",{className:"button is-rounded is-danger is-small",onClick:function(){return t(n)},children:[Object(E.jsx)("span",{className:"icon is-small",children:Object(E.jsx)("i",{className:"fa fa-plus-square"})}),Object(E.jsx)("span",{children:"Add Cell"})]})}),Object(E.jsx)("div",{className:"divider"})]})}),H=(t(295),function(){return Object(E.jsxs)("div",{children:[Object(E.jsx)("h1",{className:"welcome",children:"Welcome to Preview Pack"}),Object(E.jsxs)("div",{className:"introduction",children:[Object(E.jsx)("p",{className:"padded desc-title",children:"Here you can write and execute your code on the go."}),Object(E.jsx)("div",{children:Object(E.jsxs)("ul",{children:[Object(E.jsx)("li",{className:"padded",children:"You can import nmp packages and make use of them."}),Object(E.jsx)("li",{className:"padded",children:"You can add, move up and down, or delete code cells."}),Object(E.jsx)("li",{className:"padded",children:"You can execute your code by using show() function:"}),Object(E.jsx)("li",{className:"padded inde",children:" show(123)"}),Object(E.jsx)("li",{className:"padded",children:"Or by reffering to root id:"}),Object(E.jsx)("li",{className:"padded inde",children:' document.querySelector("#root").innerHTML = "your string"'}),Object(E.jsx)("li",{children:"Everything will be displayed on Preview Window."})]})})]})]})}),A=(t(296),function(){return Object(E.jsx)("div",{className:"footer-my",children:Object(E.jsx)("span",{children:Object(E.jsxs)("a",{href:"https://github.com/Nataliasw",target:"_blank",children:[" ",Object(E.jsx)("i",{className:"fab fa-github"})," Github/Nataliasw"]})})})}),I=function(){var e=o((function(e){var n=e.cells,t=n.order,r=n.data;return t.map((function(e){return r[e]}))})),n=R(),t=n.fetchCells;n.saveCells;Object(s.useEffect)((function(){t()}),[]);var r=e.map((function(e){return Object(E.jsxs)(s.Fragment,{children:[Object(E.jsx)(M,{cell:e}),Object(E.jsx)(F,{previousCellId:e.id})]},e.id)}));return Object(E.jsxs)("div",{className:"cell-list",children:[Object(E.jsx)(H,{}),Object(E.jsx)(A,{}),Object(E.jsx)("div",{className:0===e.length?"force-visible":"",children:Object(E.jsx)(F,{previousCellId:"abd43"})}),r]})},U=function(){return Object(E.jsx)(c.a,{store:i.store,children:Object(E.jsx)("div",{children:Object(E.jsx)(I,{})})})};a.a.render(Object(E.jsx)(U,{}),document.querySelector("#root"))},43:function(e,n,t){"use strict";t.r(n),t.d(n,"updateCell",(function(){return h})),t.d(n,"deleteCell",(function(){return b})),t.d(n,"moveCell",(function(){return m})),t.d(n,"insertCellAfter",(function(){return v})),t.d(n,"createBundle",(function(){return O})),t.d(n,"fetchCells",(function(){return x})),t.d(n,"saveCells",(function(){return E}));var r=t(7),a=t.n(r),c=t(11),i=t(29),s=t.n(i),o=t(59),u=t(113),l=t.n(u).a.createInstance({name:"filecache"}),d=function(e){return{name:"fetch-plugin",setup:function(n){n.onLoad({filter:/^index\.js$/},(function(){return{loader:"jsx",contents:e}})),n.onLoad({filter:/.*/},function(){var e=Object(c.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.getItem(n.path);case 2:if(!(t=e.sent)){e.next=5;break}return e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.css$/},function(){var e=Object(c.a)(a.a.mark((function e(n){var t,r,c,i,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get(n.path);case 2:return t=e.sent,r=t.data,c=t.request,i=r.replace(/\n/g,"").replace(/"/g,'\\"').replace(/'/g,"\\'"),o='\n        const style = document.createElement("style");\n        style.innerText = \''.concat(i,"';\n        document.head.appendChild(style);\n        "),u={loader:"jsx",contents:o,resolveDir:new URL("./",c.responseURL).pathname},e.next=10,l.setItem(n.path,u);case 10:return e.abrupt("return",u);case 11:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()),n.onLoad({filter:/.*/},function(){var e=Object(c.a)(a.a.mark((function e(n){var t,r,c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.a.get(n.path);case 2:return t=e.sent,r=t.data,c=t.request,i={loader:"jsx",contents:r,resolveDir:new URL("./",c.responseURL).pathname},e.next=8,l.setItem(n.path,i);case 8:return e.abrupt("return",i);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}}},p=!1,f=function(){var e=Object(c.a)(a.a.mark((function e(n){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==p){e.next=4;break}return p=!0,e.next=4,o.initialize({worker:!0,wasmURL:"https://unpkg.com/esbuild-wasm@0.11.20/esbuild.wasm"});case 4:return e.prev=4,e.next=7,o.build({entryPoints:["index.js"],bundle:!0,write:!1,plugins:[{name:"unpkg-path-plugin",setup:function(e){e.onResolve({filter:/(^index\.js$)/},(function(){return{path:"index.js",namespace:"a"}})),e.onResolve({filter:/^\.+\//},(function(e){return{namespace:"a",path:new URL(e.path,"https://unpkg.com"+e.resolveDir+"/").href}})),e.onResolve({filter:/.*/},function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{namespace:"a",path:"https://unpkg.com/".concat(n.path)});case 1:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}},d(n)],define:{"process.env.NODE_ENV":'"production"',global:"window"},jsxFactory:"_React.createElement",jsxFragment:"_React.Fragment"});case 7:return t=e.sent,e.abrupt("return",{code:t.outputFiles[0].text,err:""});case 11:return e.prev=11,e.t0=e.catch(4),e.abrupt("return",{code:"",err:e.t0.message});case 14:case"end":return e.stop()}}),e,null,[[4,11]])})));return function(n){return e.apply(this,arguments)}}(),j=t(6),h=function(e,n){return{type:j.a.UPDATE_CELL,payload:{id:e,content:n}}},b=function(e){return{type:j.a.DELETE_CELL,payload:e}},m=function(e,n){return{type:j.a.MOVE_CELL,payload:{id:e,direction:n}}},v=function(e){return{type:j.a.INSERT_CELL_AFTER,payload:e}},O=function(e,n){return function(){var t=Object(c.a)(a.a.mark((function t(r){var c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r({type:j.a.BUNDLE_START,payload:{cellId:e}}),t.next=3,f(n);case 3:c=t.sent,r({type:j.a.BUNDLE_COMPLETE,payload:{cellId:e,bundle:{code:c.code,err:c.err}}});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(){return function(){var e=Object(c.a)(a.a.mark((function e(n){var t,r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n({type:j.a.FETCH_CELLS}),e.prev=1,e.next=4,s.a.get("/cells");case 4:t=e.sent,r=t.data,n({type:j.a.FETCH_CELLS_COMPLETE,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n({type:j.a.FETCH_CELLS_ERROR,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}()},E=function(){return function(){var e=Object(c.a)(a.a.mark((function e(n,t){var r,c,i,o,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t(),c=r.cells,i=c.data,o=c.order,u=o.map((function(e){return i[e]})),e.prev=2,e.next=5,s.a.post("/cells",{cells:u});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),n({type:j.a.SAVE_CELLS_ERROR,payload:e.t0.message});case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(n,t){return e.apply(this,arguments)}}()}},44:function(e,n,t){"use strict";var r=t(24),a=t(6),c=t(46),i={loading:!1,error:null,order:[],data:{}},s=Object(c.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.a.SAVE_CELLS_ERROR:return e.error=n.payload,e;case a.a.FETCH_CELLS:return e.loading=!0,e.error=null,e;case a.a.FETCH_CELLS_COMPLETE:return e.order=n.payload.map((function(e){return e.id})),e.data=n.payload.reduce((function(e,n){return e[n.id]=n,e}),{}),e;case a.a.FETCH_CELLS_ERROR:return e.loading=!1,e.error=n.payload,e;case a.a.MOVE_CELL:var t=n.payload.direction,r=e.order.findIndex((function(e){return e===n.payload.id})),c="up"===t?r-1:r+1;return c<0||c>e.order.length-1||(e.order[r]=e.order[c],e.order[c]=n.payload.id),e;case a.a.DELETE_CELL:return delete e.data[n.payload],e.order=e.order.filter((function(e){return e!==n.payload})),e;case a.a.INSERT_CELL_AFTER:var s=function(){return Math.random().toString(36).substring(2,7)},o={content:"",id:s()};e.data[o.id]=o;var u=e.order.findIndex((function(e){return e===n.payload.id}));return u<0?e.order.unshift(o.id):e.order.splice(u+1,0,o.id),e;case a.a.UPDATE_CELL:var l=n.payload,d=l.id,p=l.content;return e.data[d].content=p,e;default:return e}})),o={},u=Object(c.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case a.a.BUNDLE_START:return e[n.payload.cellId]={loading:!0,code:"",err:""},e;case a.a.BUNDLE_COMPLETE:return e[n.payload.cellId]={loading:!1,code:n.payload.bundle.code,err:n.payload.bundle.err},e;default:return e}})),l=Object(r.c)({cells:s,bundles:u});n.a=l},45:function(e,n,t){"use strict";var r=t(111);t.d(n,"store",(function(){return r.a}));t(44),t(73);var a=t(43);t.d(n,"actionCreators",(function(){return a}))},6:function(e,n,t){"use strict";var r;t.d(n,"a",(function(){return r})),function(e){e.MOVE_CELL="move_cell",e.DELETE_CELL="delete_cell",e.INSERT_CELL_AFTER="insert_cell_after",e.UPDATE_CELL="update_cell",e.BUNDLE_START="bundle_start",e.BUNDLE_COMPLETE="bundle_complete",e.FETCH_CELLS="fetch_cells",e.FETCH_CELLS_COMPLETE="fetch_cells_complete",e.FETCH_CELLS_ERROR="fetch_cells_error",e.SAVE_CELLS_ERROR="save_cells_error"}(r||(r={}))},73:function(e,n){}},[[297,1,2]]]);
//# sourceMappingURL=main.35fa817b.chunk.js.map