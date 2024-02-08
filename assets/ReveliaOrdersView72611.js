import{O as J}from"./OrderFilter72611.js";import{o as L,x as K,c as B,a as W,l as u,i as X,_ as j,r as D,p as Y,b as z,e as k,g as h,f as a,w as s,F as Z,h as v,t as c,n as E,s as A,q as P}from"../index72611.js";import{u as $}from"./order72611.js";import{u as ee,p as te,e as T,s as ae}from"./helpers72611.js";import{f as oe,a as ne,b as re}from"./formatData72611.js";import"./location72611.js";import"./datetime72611.js";import"./attraction72611.js";import"./guide72611.js";const se={props:["filters"],setup(_,l){L(()=>{t.value=!0,i.value={first:0,rows:O.value.rows,sortField:null,sortOrder:null},i.value.page=0});const g=$(),{showLoader:o,hideLoader:m}=ee(),w=K(),b=B(()=>w.submitDialog),r=B(()=>g.responseOrders),p=W(),O=u(),C=u(),e=u(),t=u(!0),i=u(),y=u(0),R=u([]),x=u(),F=u();function S(){t.value=!0,setTimeout(()=>{q()},Math.random()*1e3+250)}const q=async function(){const n=new Map;Object.entries(_.filters).forEach(([d,f])=>{f&&((d=="date_from"||d=="date_to")&&f?n.set(d,re(f)):d=="status"&&f?n.set("order_status",f):n.set(d,f))}),n.set("page",i.value.page+1),n.set("per_page",i.value.rows),await g.fetchAllReveliaOrders(n).then(()=>{t.value=!1}).catch(d=>{t.value=!1,T(p,d)})},M=n=>{i.value=n,S()},U=n=>{e.value.toggle(n)},H=function(n){const d={course_name:n.course_name,start_at:n.start_at};l.emit("updateFilters",d)},N=async function(){o(),await g.downloadOrderCsv(_.filters.attraction_id).then(()=>{m()}).catch(n=>{m(),T(p,n)})},V=function(n,d){x.value=n,F.value=d;let f="Sei sicuro di voler eliminare questa prenotazione?";w.setDialog("Elimina prenotazione","Elimina","Annulla",f),w.setBtnSubmit(!1),w.setDynamicDialogVisibility(!0)},G=async function(){const n={order_id:x.value,event_id:F.value};o(),await g.deleteOrder(n).then(()=>{m(),ae(p,{message:"Prenotazione eliminata correttamente",error:!1}),S()}).catch(d=>{m(),T(p,d)})},Q=async function(n,d){const f={order_id:n,event_id:d};o(),await g.downloadOrderPDF(f).then(()=>{m()}).catch(I=>{m(),T(p,I)})};return X(b,n=>{n&&G()}),{dt:O,responseOrders:r,loading:t,totalRecords:y,lazyParams:i,currentOrder:C,op:e,expandedRows:R,loadLazyData:S,toggle:U,openDialog:H,onPage:M,openPDF:Q,downloadCsv:N,confirmDelete:V,formatDataAndHourFromUnixTimestamps:oe,formatPrettyDate:ne,prettyPaymentStatus:te}}};const ie={class:"flex justify-content-end mt-4 mb-3"},de={class:"order-table"},le=["href"],ce={key:0},ue=h("br",null,null,-1),_e={class:"uppercase"},me=["href"],pe={key:0},fe={class:"flex justify-content-center"};function ve(_,l,g,o,m,w){const b=D("Button"),r=D("Column"),p=D("Badge"),O=D("DataTable"),C=Y("tooltip");return z(),k(Z,null,[h("div",ie,[a(b,{label:"CSV Prenotazioni",icon:"pi pi-download",rounded:"",outlined:"",onClick:l[0]||(l[0]=e=>o.downloadCsv()),disabled:o.responseOrders.total==0},null,8,["disabled"])]),h("div",de,[a(O,{value:o.responseOrders.orders,totalRecords:o.responseOrders.total,lazy:!0,paginator:!0,rows:30,ref:"dt",loading:o.loading,stripedRows:"",onPage:l[1]||(l[1]=e=>o.onPage(e)),expandedRows:o.expandedRows,"onUpdate:expandedRows":l[2]||(l[2]=e=>o.expandedRows=e)},{empty:s(()=>[v(" Nessuna prenotazione trovata. ")]),expansion:s(e=>[a(O,{value:e.data.events,class:"m-4 mx-4"},{empty:s(()=>[v(" Nessuna prenotazione trovata. ")]),default:s(()=>[a(r,{header:"Data prenotazione"},{body:s(({data:t})=>{var i;return[v(c(o.formatPrettyDate((i=t.date_configuration)==null?void 0:i.date_event)),1)]}),_:1}),a(r,{header:"Cliente"},{body:s(()=>[v(c(e.data.user_name)+" "+c(e.data.user_surname),1),ue,h("span",_e,c(e.data.tax_code),1)]),_:2},1024),a(r,{header:"Telefono"},{body:s(()=>[h("a",{href:"https://api.whatsapp.com/send?phone="+e.data.user_phone,target:"_blank"},c(e.data.user_phone),9,me)]),_:2},1024),a(r,{header:"Cap"},{body:s(()=>[v(c(e.data.user_zip),1)]),_:2},1024),a(r,{header:"Orario visita"},{body:s(({data:t})=>{var i,y;return[v(c((i=t.date_configuration)==null?void 0:i.start_at)+" - "+c((y=t.date_configuration)==null?void 0:y.end_at),1)]}),_:1}),a(r,{header:"Guida"},{body:s(({data:t})=>{var i,y,R,x;return[v(c((y=(i=t.date_configuration)==null?void 0:i.guide)==null?void 0:y.first_name)+" "+c((x=(R=t.date_configuration)==null?void 0:R.guide)==null?void 0:x.last_name),1)]}),_:1}),a(r,{header:"Q.tà"},{body:s(()=>{var t;return[v(c((t=e.data.order_items[0])==null?void 0:t.quantity),1)]}),_:2},1024),a(r,{header:"Prezzo"},{body:s(()=>{var t;return[v(" € "+c((t=e.data.order_items[0])==null?void 0:t.price),1)]}),_:2},1024),a(r,{header:"Stato evento"},{body:s(({data:t})=>[t.status?(z(),k("div",pe,[a(p,{value:o.prettyPaymentStatus(t.status),class:E([t.status,"px-3 border-round-lg"])},null,8,["value","class"])])):A("",!0)]),_:1}),a(r,{header:""},{body:s(({data:t})=>[h("div",fe,[P(a(b,{link:"",icon:"pi pi-print",target:"_blank",style:{color:"var(--surface-400)"},text:"",rounded:"",onClick:i=>o.openPDF(e.data.id,t.id)},null,8,["onClick"]),[[C,"Stampa",void 0,{top:!0}]]),P(a(b,{link:"",icon:"pi pi-trash",target:"_blank",style:{color:"var(--surface-400)"},text:"",rounded:"",onClick:i=>o.confirmDelete(e.data.id,t.id)},null,8,["onClick"]),[[C,"Elimina",void 0,{top:!0}]])])]),_:2},1024)]),_:2},1032,["value"])]),default:s(()=>[a(r,{header:"Codice prenotazione",field:"order_number",ref:"order_number"},null,512),a(r,{header:"Email",field:"user_email",ref:"user_email"},{body:s(({data:e})=>[h("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+e.user_email,target:"_blank"},c(e.user_email),9,le)]),_:1},512),a(r,{header:"Data ordine",field:"created_at",ref:"created_at"},{body:s(({data:e})=>[v(c(o.formatDataAndHourFromUnixTimestamps(e.created_at)),1)]),_:1},512),a(r,{header:"Stato pagamento"},{body:s(({data:e})=>[e.status?(z(),k("div",ce,[a(p,{value:o.prettyPaymentStatus(e.status),class:E([e.status,"px-3 border-round-lg"])},null,8,["value","class"])])):A("",!0)]),_:1}),a(r,{expander:"",style:{width:"5rem"}})]),_:1},8,["value","totalRecords","loading","expandedRows"])])],64)}const ge=j(se,[["render",ve]]),he={setup(){L(()=>{});const _=u({}),l=u(),g=u(!0);return{form:_,reveliaOrderTable:l,isRevelia:g,filterTable:function(m){_.value=m,_.value.guide&&(_.value.guide_id=_.value.guide.id),l.value.loadLazyData()}}},components:{OrderFilter:J,ReveliaOrderTable:ge}},be=h("h1",null,"Prenotazioni e incassi",-1);function ye(_,l,g,o,m,w){const b=D("OrderFilter"),r=D("ReveliaOrderTable");return z(),k("div",null,[be,a(b,{onOnSubmit:l[0]||(l[0]=p=>o.filterTable(p)),revelia:o.isRevelia},null,8,["revelia"]),a(r,{filters:o.form,ref:"reveliaOrderTable"},null,8,["filters"])])}const Se=j(he,[["render",ye]]);export{Se as default};