(function(){var t={8692:function(t,e,a){"use strict";var o=a(5471),n=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HeaderComponent"),t._v(" "),e("div",{staticClass:"content"},[e("router-view")],1),e("FooterComponent")],1)},s=[],r=function(){var t=this,e=t._self._c;return e("header",{staticClass:"header"},[t._m(0),e("nav",{staticClass:"nav-menu"},[e("router-link",{staticClass:"nav-item",attrs:{to:"/"}},[t._v("Home")]),e("router-link",{staticClass:"nav-item",attrs:{to:"/about"}},[t._v("About")]),e("router-link",{staticClass:"nav-item",attrs:{to:"/account"}},[t._v("가계부")]),e("router-link",{staticClass:"nav-item",attrs:{to:"/PG0001"}},[t._v("PG0001")]),e("router-link",{staticClass:"nav-item",attrs:{to:"/contact"}},[t._v("Contact")])],1),t._m(1)])},i=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"logo"},[e("img",{attrs:{src:a(5573),alt:"Logo"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-right"},[e("button",{staticClass:"login-btn"},[t._v("Login")]),e("div",{staticClass:"user-icon"},[e("img",{attrs:{src:"https://via.placeholder.com/30",alt:"User Icon"}})])])}],l={name:"HeaderComponent"},u=l,c=a(1656),d=(0,c.A)(u,r,i,!1,null,"7b8d0991",null),m=d.exports,p=function(){var t=this;t._self._c;return t._m(0)},h=[function(){var t=this,e=t._self._c;return e("footer",[e("p",[t._v("© 2024 Your Company")])])}],f={name:"FooterComponent"},v=f,g=(0,c.A)(v,p,h,!1,null,null,null),b=g.exports,_={name:"App",components:{HeaderComponent:m,FooterComponent:b}},C=_,w=(0,c.A)(C,n,s,!1,null,"6c66be98",null),y=w.exports,D=a(173),x=function(){var t=this;t._self._c;return t._m(0)},A=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Home Page")]),e("p",[t._v("여기에 홈 페이지 내용을 작성하세요.")])])}],k={name:"HomePage"},T=k,E=(0,c.A)(T,x,A,!1,null,null,null),O=E.exports,R=function(){var t=this;t._self._c;return t._m(0)},N=[function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("About Page")]),e("p",[t._v("여기에 소개 페이지 내용을 작성하세요.")])])}],S={name:"AboutPage"},P=S,G=(0,c.A)(P,R,N,!1,null,null,null),j=G.exports,$=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"account-book"},[e("h1",[t._v("My AcBk(Test)")]),e("button",{staticClass:"add-btn",on:{click:t.addEmptyRow}},[t._v("행 추가")]),e("button",{staticClass:"delete-btn",on:{click:t.deleteRow}},[t._v("행 삭제")]),e("button",{staticClass:"export-btn",on:{click:t.exportData}},[t._v("Export Data")]),e("input",{staticClass:"import-btn",attrs:{type:"file"},on:{change:t.importData}}),e("ag-grid-vue",{staticClass:"ag-theme-alpine",staticStyle:{width:"100%",height:"500px"},attrs:{columnDefs:t.columnDefs,rowData:t.displayData,pagination:!0,paginationPageSize:20,defaultColDef:t.defaultColDef,localeText:t.localeText,rowSelection:"multiple",enableRangeSelection:!0,suppressClipboardPaste:!1,clipboardDelimiter:",",enableCellTextSelection:!0,suppressCutToClipboard:!1,stopEditingWhenCellsLoseFocus:!0,autoGroupColumnDef:t.autoGroupColumnDef},on:{"cell-editing-stopped":t.onCellEditEnded,"grid-ready":t.onGridReady,clipboardPaste:t.onPaste}}),e("div",{staticClass:"summary-footer"},[e("p",[e("strong",[t._v("총합 (₩):")]),t._v(" "+t._s(t.totalAmount))])])],1)},B=[],H=(a(4114),a(8589)),F={page:"페이지",more:"더보기",to:"까지",of:"의",next:"다음",last:"마지막",first:"처음",previous:"이전",loadingOoo:"불러오는 중...",selectAll:"전체 선택",searchOoo:"검색 중...",blanks:"빈 칸",filterOoo:"필터...",applyFilter:"필터 적용",equals:"같음",notEqual:"같지 않음",lessThan:"미만",greaterThan:"초과",lessThanOrEqual:"이하",greaterThanOrEqual:"이상",inRange:"범위 내",contains:"포함",notContains:"포함하지 않음",startsWith:"시작 문자",endsWith:"끝 문자",andCondition:"그리고",orCondition:"또는",group:"그룹",columns:"컬럼",filters:"필터",rowGroupColumnsEmptyMessage:"그룹화할 컬럼 없음",valueColumnsEmptyMessage:"집계할 컬럼 없음",pivotMode:"피벗 모드",groups:"그룹",values:"값",pivots:"피벗",groupRows:"행 그룹화",loadingMessage:"불러오는 중...",noRowsToShow:"표시할 행이 없습니다.",enabled:"활성화",pinColumn:"컬럼 고정",autoSizeAll:"모든 컬럼 자동 크기 조정",resetColumns:"컬럼 재설정",expandAll:"모두 확장",collapseAll:"모두 축소",toolPanel:"도구 패널",export:"내보내기",csvExport:"CSV 내보내기",excelExport:"Excel 내보내기",sum:"합계",min:"최소",max:"최대",none:"없음",count:"갯수",avg:"평균",copy:"복사",copyWithHeaders:"헤더와 함께 복사",ctrlC:"Ctrl + C",paste:"붙여넣기",ctrlV:"Ctrl + V"},I={name:"AccountBook",components:{AgGridVue:H.b},data(){return{gridApi:null,columnDefs:[{headerName:"날짜",field:"date",sortable:!0,filter:!0,editable:!0},{headerName:"물건",field:"item",sortable:!0,filter:!0,rowGroup:!0,hide:!0},{headerName:"금액 (₩)",field:"amount",sortable:!0,filter:!0,editable:!0,type:"numericColumn",aggFunc:"sum"},{headerName:"메모",field:"note",sortable:!0,filter:!0,editable:!0}],rowData:this.loadData(),totalAmount:0,displayData:[],autoGroupColumnDef:{headerName:"물건 그룹",field:"item",cellRenderer:"agGroupCellRenderer"},defaultColDef:{editable:!0,sortable:!0,resizable:!0},localeText:F}},methods:{onGridReady(t){this.gridApi=t.api,this.calculateTotals()},onCellEditEnded(t){const e=t.colDef.field,a=t.value,o=t.rowIndex,n=t.node;console.log(`Cell editing ended on field: ${e}, row: ${o}, new value: ${a}`),"amount"===e&&0===a&&n.setDataValue("note","free"),this.calculateTotals(),this.saveData()},addEmptyRow(){const t={date:"",item:"",amount:null,note:""};this.rowData.push(t),this.gridApi.applyTransaction({add:[t]}),this.calculateTotals(),this.saveData()},deleteRow(){const t=this.gridApi.getSelectedRows();0!==t.length?(this.rowData=this.rowData.filter((e=>!t.includes(e))),this.gridApi.applyTransaction({remove:t}),this.saveData()):alert("삭제할 행을 선택하세요!")},onPaste(t){const e=t.data;console.log("붙여넣기된 데이터:",e),this.saveData()},calculateTotals(){let t=0;this.rowData.forEach((e=>{e.amount&&!isNaN(e.amount)&&(t+=Number(e.amount))})),this.totalAmount=t,this.displayData=[...this.rowData]},loadData(){const t=localStorage.getItem("AccountBook_");return t?JSON.parse(t):[{date:"2024-09-01",item:"Groceries",amount:3e4,note:"Supermarket"},{date:"2024-09-02",item:"Transport",amount:5e3,note:"Bus fare"},{date:"2024-09-03",item:"Rent",amount:5e5,note:"Monthly rent"},{date:"2024-09-04",item:"Dining Out",amount:2e4,note:"Restaurant"},{date:"2024-09-05",item:"Utilities",amount:1e5,note:"Electricity bill"}]},saveData(){localStorage.setItem("AccountBook_",JSON.stringify(this.rowData))},exportData(){var t=new Date,e=t.getFullYear(),a=("0"+(1+t.getMonth())).slice(-2),o=("0"+t.getDate()).slice(-2);const n=e+a+o,s=JSON.stringify(this.rowData),r="data:application/jsoncharset=utf-8,"+encodeURIComponent(s),i="AccountBook_ ("+n+").json",l=document.createElement("a");l.setAttribute("href",r),l.setAttribute("download",i),l.click()},importData(t){const e=t.target.files[0],a=new FileReader;e.name.indexOf("AccountBook_")>-1?(console.log(e.name+"success"),a.onload=t=>{const e=JSON.parse(t.target.result);this.rowData=e,this.gridApi.setRowData(this.rowData),this.saveData()},console.log(e),a.readAsText(e)):alert("AccountBook_인 파일을 선택해 주세요")}}},J=I,M=(0,c.A)(J,$,B,!1,null,"16c34c01",null),U=M.exports,V=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"account-book"},[e("h1",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v("월 고정지출 내역")]),e("button",{staticClass:"add-btn",on:{click:t.addRow}},[t._v("행 추가")]),e("button",{staticClass:"delete-btn",on:{click:t.deleteRow}},[t._v("행 삭제")]),e("button",{staticClass:"export-btn",on:{click:t.exportData}},[t._v("Export Data")]),e("input",{staticClass:"import-btn",attrs:{type:"file"},on:{change:t.importData}}),e("toast-ui-grid",{ref:"grid",attrs:{data:t.gridData,columns:t.columns,rowHeaders:["rowNum","checkbox"],summary:t.summary,bodyHeight:500},on:{afterChange:t.onCellEditEnded}}),e("div",{staticClass:"summary-footer"},[e("p",[e("strong",[t._v("총합 (₩):")]),t._v(" "+t._s(t.totalAmount))]),e("p",[e("strong",[t._v("보험지출 (₩):")]),t._v(" "+t._s(t.insuranceTotal))]),e("p",[e("strong",[t._v("적금지출 (₩):")]),t._v(" "+t._s(t.saveTotal))]),e("p",[e("strong",[t._v("월지출 (₩):")]),t._v(" "+t._s(t.monthTotal))]),e("p",[e("strong",[t._v("연지출 (₩):")]),t._v(" "+t._s(t.yearTotal))])])],1)},L=[],q=(a(4603),a(7566),a(8721),a(6737)),W={name:"AccountBook",components:{"toast-ui-grid":q.Grid},data(){return{gridData:this.loadData(),columns:[{header:"이름",name:"name",sortable:!0,editor:"text",rowSpan:!0},{header:"분류",name:"class",sortable:!0,editor:"text",rowSpan:!0},{header:"내역",name:"task",sortable:!0,editor:"text"},{header:"금액 (₩)",name:"amount",sortable:!0,editor:"text"},{header:"항목 합계",name:"sumAmount",sortable:!0,editor:"text",rowSpan:!0},{header:"결제분류",name:"dateClass",sortable:!0,editor:{type:"select",options:{listItems:[{text:"매월10일",value:"매월10일"},{text:"매월25일",value:"매월25일"},{text:"매년",value:"매년"}]}}},{header:"출금처",name:"withdrawal",sortable:!0,editor:"text"},{header:"메모",name:"note",sortable:!0,editor:"text"}],totalAmount:0,insuranceTotal:0,saveTotal:0,monthTotal:0,yearTotal:0,summary:{height:40,position:"bottom",columnContent:{amount:{template:t=>`합계: ${t.sum}`},sumAmount:{template:()=>this.totalAmount+"d"}}}}},methods:{loadData(){const t=localStorage.getItem("PG0001");return t?JSON.parse(t):[{date:"2024-09-01",item:"Groceries",amount:3e4,note:"Supermarket",name:"john",class:"적금",task:"청년도약적금"},{date:"2024-09-02",item:"Transport",amount:5e3,note:"Bus fare",name:"john",class:"적금",task:"청년도약적금"},{date:"2024-09-03",item:"Rent",amount:5e5,note:"Monthly rent",name:"john",class:"적금",task:"청년도약적금"},{date:"2024-09-04",item:"Dining Out",amount:2e4,note:"Restaurant",name:"john",class:"적금",task:"청년도약적금"},{date:"2024-09-05",item:"Utilities",amount:1e5,note:"Electricity bill",name:"john",class:"적금",task:"청년도약적금"}]},onCellEditEnded(t){const{changes:e}=t;e.forEach((({rowKey:t,columnName:e,value:a})=>{console.log(`Cell Edit Ended - rowKey: ${t}, column: ${e}, new value: ${a}`),"amount"===e&&"0"===a&&this.$refs.grid.invoke("setValue",t,"note","free")})),this.saveData(),this.calculateTotals()},addRow(){this.$refs.grid.invoke("appendRow",{date:"",item:"",amount:0,note:""}),this.saveData()},deleteRow(){const t=this.$refs.grid.invoke("getCheckedRows");0!==t.length?(t.forEach((t=>{this.$refs.grid.invoke("removeRow",t.rowKey)})),this.saveData()):alert("삭제할 행을 선택하세요!")},saveData(){const t=this.$refs.grid.invoke("getData");localStorage.setItem("PG0001",JSON.stringify(t)),this.calculateTotals()},exportData(){const t=this.$refs.grid.invoke("getData"),e=JSON.stringify(t),a=new Blob([e],{type:"application/json"}),o=document.createElement("a");o.href=URL.createObjectURL(a),o.download="PG0001.json",o.click()},importData(t){const e=t.target.files[0],a=new FileReader;a.onload=t=>{const e=JSON.parse(t.target.result);this.gridData=e,this.$refs.grid.invoke("resetData",e),this.saveData()},a.readAsText(e)},calculateTotals(){const t=this.$refs.grid.invoke("getData");this.totalAmount=t.reduce(((t,e)=>t+Number(e.amount||0)),0),this.insuranceTotal=t.reduce(((t,e)=>{let a="보험"===e.class?Number(e.amount):0;return t+Number(a)}),0),this.saveTotal=t.reduce(((t,e)=>{let a="적금"===e.class?Number(e.amount):0;return t+Number(a)}),0),this.monthTotal=t.reduce(((t,e)=>{let a=e.dateClass.indexOf("매월")>-1?Number(e.amount):0;return t+Number(a)}),0),this.yearTotal=t.reduce(((t,e)=>{let a=e.dateClass.indexOf("매년")>-1?Number(e.amount):0;return t+Number(a)}),0)}},mounted(){this.calculateTotals()}},z=W,K=(0,c.A)(z,V,L,!1,null,"39c44349",null),Y=K.exports;o.Ay.use(D.Ay);var Q=new D.Ay({mode:"history",routes:[{path:"/",name:"HomePage",component:O},{path:"/about",name:"AboutPage",component:j},{path:"/account",name:"AccountBook",component:U},{path:"/PG0001",name:"PG0001",component:Y}]}),X=a(3921);a(1457),a(5715),a(6494);o.Ay.config.productionTip=!1,new o.Ay({router:Q,render:t=>t(y)}).$mount("#app"),o.Ay.use(X.Ay)},5573:function(t,e,a){"use strict";t.exports=a.p+"img/softHan-removebg-preview.7125006f.png"},6251:function(){},7233:function(){},9800:function(){}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var s=e[o]={exports:{}};return t[o].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,s){if(!o){var r=1/0;for(c=0;c<t.length;c++){o=t[c][0],n=t[c][1],s=t[c][2];for(var i=!0,l=0;l<o.length;l++)(!1&s||r>=s)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(i=!1,s<r&&(r=s));if(i){t.splice(c--,1);var u=n();void 0!==u&&(e=u)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[o,n,s]}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/"}(),function(){var t={524:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,s,r=o[0],i=o[1],l=o[2],u=0;if(r.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var c=l(a)}for(e&&e(o);u<r.length;u++)s=r[u],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(c)},o=self["webpackChunkpayproject"]=self["webpackChunkpayproject"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[504],(function(){return a(8692)}));o=a.O(o)})();
//# sourceMappingURL=app.c25aea2c.js.map