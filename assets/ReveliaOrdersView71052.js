import{O as K}from"./OrderFilter71052.js";import{o as j,v as W,c as E,a as X,l as u,i as Y,_ as M,r as D,m as Z,b as z,e as k,g as h,f as o,w as i,F as $,h as v,t as c,n as A,q as P,p as L}from"../index71052.js";import{u as ee}from"./order71052.js";import{u as te,p as ae,e as T,s as oe}from"./helpers71052.js";import{f as ne,a as re,b as se}from"./formatData71052.js";import"./location71052.js";import"./datetime71052.js";import"./attraction71052.js";import"./guide71052.js";const ie={props:["filters"],setup(f,l){j(()=>{a.value=!0,d.value={first:0,rows:O.value.rows,sortField:null,sortOrder:null},d.value.page=0});const g=ee(),{showLoader:n,hideLoader:_}=te(),w=W(),b=E(()=>w.submitDialog),r=E(()=>g.responseOrders),m=X(),O=u(),C=u(),t=u(),a=u(!0),d=u(),y=u(0),R=u([]),x=u(),F=u();function S(){a.value=!0,setTimeout(()=>{q()},Math.random()*1e3+250)}const B=function(e){Object.entries(f.filters).forEach(([s,p])=>{p&&((s=="date_from"||s=="date_to")&&p?e.set(s,se(p)):s=="attraction"?e.set("attraction_id",p.id):s=="code"?e.set("name",p):e.set(s,p))}),e.delete("guide"),e.set("page",d.value.page+1),e.set("per_page",d.value.rows)},q=async function(){const e=new Map;B(e),await g.fetchAllReveliaOrders(e).then(()=>{a.value=!1}).catch(s=>{a.value=!1,T(m,s)})},U=e=>{d.value=e,S()},H=e=>{t.value.toggle(e)},V=function(e){const s={course_name:e.course_name,start_at:e.start_at};l.emit("updateFilters",s)},G=async function(){const e=new Map;B(e),e.set("format","csv"),n(),await g.downloadReveliaOrderCsv(e).then(()=>{_()}).catch(s=>{_(),T(m,s)})},N=function(e,s){x.value=e,F.value=s;let p="Sei sicuro di voler eliminare questa prenotazione?";w.setDialog("Elimina prenotazione","Elimina","Annulla",p),w.setBtnSubmit(!1),w.setDynamicDialogVisibility(!0)},Q=async function(){const e={order_id:x.value,event_id:F.value};n(),await g.deleteOrder(e).then(()=>{_(),oe(m,{message:"Prenotazione eliminata correttamente",error:!1}),S()}).catch(s=>{_(),T(m,s)})},I=async function(e,s){const p={order_id:e,event_id:s};n(),await g.downloadOrderPDF(p).then(()=>{_()}).catch(J=>{_(),T(m,J)})};return Y(b,e=>{e&&Q()}),{dt:O,responseOrders:r,loading:a,totalRecords:y,lazyParams:d,currentOrder:C,op:t,expandedRows:R,loadLazyData:S,toggle:H,openDialog:V,onPage:U,openPDF:I,downloadCsv:G,confirmDelete:N,formatDataAndHourFromUnixTimestamps:ne,formatPrettyDate:re,prettyPaymentStatus:ae}}};const de={class:"flex justify-content-end mt-4 mb-3"},le={class:"order-table"},ce=["href"],ue={key:0},_e=h("br",null,null,-1),me={class:"uppercase"},pe=["href"],ve={key:0},fe={class:"flex justify-content-center"};function ge(f,l,g,n,_,w){const b=D("Button"),r=D("Column"),m=D("Badge"),O=D("DataTable"),C=Z("tooltip");return z(),k($,null,[h("div",de,[o(b,{label:"CSV Prenotazioni",icon:"pi pi-download",rounded:"",outlined:"",onClick:l[0]||(l[0]=t=>n.downloadCsv()),disabled:n.responseOrders.total==0},null,8,["disabled"])]),h("div",le,[o(O,{value:n.responseOrders.orders,totalRecords:n.responseOrders.total,lazy:!0,paginator:!0,rows:30,ref:"dt",loading:n.loading,stripedRows:"",onPage:l[1]||(l[1]=t=>n.onPage(t)),expandedRows:n.expandedRows,"onUpdate:expandedRows":l[2]||(l[2]=t=>n.expandedRows=t)},{empty:i(()=>[v(" Nessuna prenotazione trovata. ")]),expansion:i(t=>[o(O,{value:t.data.events,class:"m-4 mx-4"},{empty:i(()=>[v(" Nessuna prenotazione trovata. ")]),default:i(()=>[o(r,{header:"Data prenotazione"},{body:i(({data:a})=>{var d;return[v(c(n.formatPrettyDate((d=a.date_configuration)==null?void 0:d.date_event)),1)]}),_:1}),o(r,{header:"Cliente"},{body:i(()=>[v(c(t.data.user_name)+" "+c(t.data.user_surname),1),_e,h("span",me,c(t.data.tax_code),1)]),_:2},1024),o(r,{header:"Telefono"},{body:i(()=>[h("a",{href:"https://api.whatsapp.com/send?phone="+t.data.user_phone,target:"_blank"},c(t.data.user_phone),9,pe)]),_:2},1024),o(r,{header:"Cap"},{body:i(()=>[v(c(t.data.user_zip),1)]),_:2},1024),o(r,{header:"Orario visita"},{body:i(({data:a})=>{var d,y;return[v(c((d=a.date_configuration)==null?void 0:d.start_at)+" - "+c((y=a.date_configuration)==null?void 0:y.end_at),1)]}),_:1}),o(r,{header:"Guida"},{body:i(({data:a})=>{var d,y,R,x;return[v(c((y=(d=a.date_configuration)==null?void 0:d.guide)==null?void 0:y.first_name)+" "+c((x=(R=a.date_configuration)==null?void 0:R.guide)==null?void 0:x.last_name),1)]}),_:1}),o(r,{header:"Q.tà"},{body:i(()=>{var a;return[v(c((a=t.data.order_items[0])==null?void 0:a.quantity),1)]}),_:2},1024),o(r,{header:"Prezzo"},{body:i(()=>{var a;return[v(" € "+c((a=t.data.order_items[0])==null?void 0:a.price),1)]}),_:2},1024),o(r,{header:"Stato evento"},{body:i(({data:a})=>[a.status?(z(),k("div",ve,[o(m,{value:n.prettyPaymentStatus(a.status),class:A([a.status,"px-3 border-round-lg"])},null,8,["value","class"])])):P("",!0)]),_:1}),o(r,{header:""},{body:i(({data:a})=>[h("div",fe,[L(o(b,{link:"",icon:"pi pi-print",target:"_blank",style:{color:"var(--surface-400)"},text:"",rounded:"",onClick:d=>n.openPDF(t.data.id,a.id)},null,8,["onClick"]),[[C,"Stampa",void 0,{top:!0}]]),L(o(b,{link:"",icon:"pi pi-trash",target:"_blank",style:{color:"var(--surface-400)"},text:"",rounded:"",onClick:d=>n.confirmDelete(t.data.id,a.id)},null,8,["onClick"]),[[C,"Elimina",void 0,{top:!0}]])])]),_:2},1024)]),_:2},1032,["value"])]),default:i(()=>[o(r,{header:"Codice prenotazione",field:"order_number",ref:"order_number"},null,512),o(r,{header:"Email",field:"user_email",ref:"user_email"},{body:i(({data:t})=>[h("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+t.user_email,target:"_blank"},c(t.user_email),9,ce)]),_:1},512),o(r,{header:"Data ordine",field:"created_at",ref:"created_at"},{body:i(({data:t})=>[v(c(n.formatDataAndHourFromUnixTimestamps(t.created_at)),1)]),_:1},512),o(r,{header:"Stato pagamento"},{body:i(({data:t})=>[t.status?(z(),k("div",ue,[o(m,{value:n.prettyPaymentStatus(t.status),class:A([t.status,"px-3 border-round-lg"])},null,8,["value","class"])])):P("",!0)]),_:1}),o(r,{expander:"",style:{width:"5rem"}})]),_:1},8,["value","totalRecords","loading","expandedRows"])])],64)}const he=M(ie,[["render",ge]]),be={setup(){j(()=>{});const f=u({}),l=u(),g=u(!0);return{form:f,reveliaOrderTable:l,isRevelia:g,filterTable:function(_){f.value=_,f.value.guide&&(f.value.guide_id=f.value.guide.id),l.value.loadLazyData()}}},components:{OrderFilter:K,ReveliaOrderTable:he}},ye=h("h1",null,"Prenotazioni e incassi",-1);function we(f,l,g,n,_,w){const b=D("OrderFilter"),r=D("ReveliaOrderTable");return z(),k("div",null,[ye,o(b,{onOnSubmit:l[0]||(l[0]=m=>n.filterTable(m)),revelia:n.isRevelia},null,8,["revelia"]),o(r,{filters:n.form,ref:"reveliaOrderTable"},null,8,["filters"])])}const Fe=M(be,[["render",we]]);export{Fe as default};