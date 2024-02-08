import{O as H}from"./OrderFilter60418.js";import{o as S,c as M,a as A,l as _,m as E,_ as z,r as u,p as I,b as C,e as O,g as r,f as a,w as s,F as q,h,t as v,n as V,q as N,s as Q,v as G}from"../index60418.js";import{u as J}from"./order60418.js";import{u as K,p as W,e as T}from"./helpers60418.js";import{f as X,a as Y,b as F,c as U}from"./formatData60418.js";import{u as Z}from"./location60418.js";import{F as ee}from"./vee-validate.esm60418.js";import{D as j}from"./datetime60418.js";import"./attraction60418.js";import"./guide60418.js";const te={props:["filters"],setup(d,o){S(()=>{l.value=!0,t.value={first:0,rows:n.value.rows,sortField:null,sortOrder:null},t.value.page=0});const b=J(),{showLoader:e,hideLoader:g}=K(),w=M(()=>b.responseOrders),c=A(),n=_(),f=_(),y=_(),l=_(!0),t=_(),m=_(0),D=_([]);function B(){l.value=!0,setTimeout(()=>{L()},Math.random()*1e3+250)}const L=async function(){const i=new Map;Object.entries(d.filters).forEach(([p,x])=>{x&&((p=="date_from"||p=="date_to")&&x?i.set(p,F(x)):p=="location"?i.set("location_id",x.id):i.set(p,x))}),i.set("page",t.value.page+1),i.set("per_page",t.value.rows),await b.fetchAllOrders(i).then(()=>{l.value=!1}).catch(p=>{l.value=!1,T(c,p)})};return{dt:n,responseOrders:w,loading:l,totalRecords:m,lazyParams:t,currentOrder:f,op:y,expandedRows:D,loadLazyData:B,toggle:i=>{y.value.toggle(i)},openDialog:function(i){const p={course_name:i.course_name,start_at:i.start_at};o.emit("updateFilters",p)},onPage:i=>{t.value=i,B()},openPDF:function(i){window.open(i,"_blank")},downloadCsv:async function(){var P;let i=(P=d.filters.location)==null?void 0:P.id,p=F(d.filters.date_from),x=F(d.filters.date_to);e();try{const R=await E({method:"get",url:`/admin/locations/${i}/orders?format=csv&date_from=${p}&date_to=${x}`,responseType:"blob"});var $=new Blob([R.data],{type:R.headers["content-type"]});const k=document.createElement("a");k.href=window.URL.createObjectURL($),k.download="Prenotazioni.csv",k.click(),g()}catch(R){g(),T(c,R)}},formatDataAndHourFromUnixTimestamps:X,formatPrettyDate:Y,prettyPaymentStatus:W}}};const oe={class:"flex justify-content-end mt-4 mb-3"},ae={class:"order-table"},ne=["href"],re=["href"],se={key:0},le=r("div",{class:"flex justify-content-center w-full"},"PDF",-1),ie={class:"flex justify-content-center"},de={class:"flex justify-content-end"},ce={class:"col-3 pl-4"};function me(d,o,b,e,g,w){const c=u("Button"),n=u("Column"),f=u("Badge"),y=u("DataTable"),l=I("tooltip");return C(),O(q,null,[r("div",oe,[a(c,{label:"CSV Prenotazioni",icon:"pi pi-download",rounded:"",outlined:"",onClick:o[0]||(o[0]=t=>e.downloadCsv())})]),r("div",ae,[a(y,{value:e.responseOrders.orders,totalRecords:e.responseOrders.total,lazy:!0,paginator:!0,rows:30,ref:"dt",loading:e.loading,stripedRows:"",onPage:o[1]||(o[1]=t=>e.onPage(t)),expandedRows:e.expandedRows,"onUpdate:expandedRows":o[2]||(o[2]=t=>e.expandedRows=t)},{empty:s(()=>[h(" Nessuna prenotazione trovata. ")]),expansion:s(t=>[a(y,{value:t.data.order_items[0].tickets,class:"m-4 mx-4"},{empty:s(()=>[h(" Nessuna prenotazione trovata. ")]),footer:s(()=>[r("div",de,[r("div",ce,"Totale: € "+v((+t.data.total).toFixed(2)),1)])]),default:s(()=>[a(n,{header:"Codice biglietto",field:"ticket"}),a(n,{header:"Tipo biglietto"},{body:s(({data:m})=>[a(f,{value:m.name,class:V([m.name,"px-3 border-round-lg"])},null,8,["value","class"])]),_:1}),a(n,{header:"Orario visita"},{body:s(()=>[h(v(t.data.order_items[0].time_slot.start_at),1)]),_:2},1024),a(n,{header:"Quantità"},{body:s(({data:m})=>[h(v(m.quantity),1)]),_:1}),a(n,{header:"Prezzo"},{body:s(({data:m})=>[h(" € "+v((+m.price).toFixed(2)),1)]),_:1}),a(n,{field:"tickets_url"},{header:s(()=>[le]),body:s(({data:m})=>[r("div",ie,[N(a(c,{link:"",icon:"pi pi-print",href:m.tickets_url,target:"_blank",style:{color:"var(--surface-400)"},text:"",rounded:"",onClick:D=>e.openPDF(t.data.tickets_url)},null,8,["href","onClick"]),[[l,"Stampa",void 0,{top:!0}]])])]),_:2},1024)]),_:2},1032,["value"])]),default:s(()=>[a(n,{header:"Codice prenotazione",field:"reservation_number",ref:"reservation_number"},null,512),a(n,{header:"Effettuata da",field:"created_by",ref:"created_by"},{body:s(({data:t})=>[h(v(t.user_name)+" "+v(t.user_surname),1)]),_:1},512),a(n,{header:"Email",field:"user_email",ref:"user_email"},{body:s(({data:t})=>[r("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+t.user_email,target:"_blank"},v(t.user_email),9,ne)]),_:1},512),a(n,{header:"Telefono",field:"user_phone"},{body:s(({data:t})=>[r("a",{href:"https://api.whatsapp.com/send?phone="+t.user_phone,target:"_blank"},v(t.user_phone),9,re)]),_:1}),a(n,{header:"Data prenotazione",field:"created_at",ref:"created_at"},{body:s(({data:t})=>{var m,D;return[h(v(e.formatPrettyDate((D=(m=t.order_items[0])==null?void 0:m.time_slot)==null?void 0:D.date)),1)]}),_:1},512),a(n,{header:"Data ordine",field:"created_at",ref:"created_at"},{body:s(({data:t})=>[h(v(e.formatDataAndHourFromUnixTimestamps(t.created_at)),1)]),_:1},512),a(n,{header:"Stato"},{body:s(({data:t})=>[t.status?(C(),O("div",se,[a(f,{value:e.prettyPaymentStatus(t.status),class:V([t.status,"px-3 border-round-lg"])},null,8,["value","class"])])):Q("",!0)]),_:1}),a(n,{expander:"",style:{width:"5rem"}})]),_:1},8,["value","totalRecords","loading","expandedRows"])])],64)}const ue=z(te,[["render",me]]),_e={props:["location"],setup(d,o){S(()=>{e.value.start_date=j.local().startOf("day").toFormat("dd/MM/yyyy HH:mm"),e.value.end_date=j.local().endOf("day").toFormat("dd/MM/yyyy HH:mm"),e.value.created_at="true"});const b=A(),e=_({}),g=Z(),w=function(){const n={from:U(e.value.start_date),to:U(e.value.end_date),location_id:d.location.id,location_permalink:d.location.permalink,created_at:e.value.created_at};c(n)},c=async function(n){await g.downloadReport(n).then(()=>{o.emit("onSubmit")}).catch(f=>{T(b,f)})};return{form:e,onSubmit:w}},components:{Form:ee}},fe={class:"formgrid grid mt-3"},pe={class:"field col-6 flex flex-column"},ve=r("label",{from:"start_date"},"Dal",-1),be={class:"field col-6 flex flex-column"},ye=r("label",{from:"end_date"},"Al",-1),ge={class:"flex flex-wrap gap-3 mt-3"},he={class:"flex align-items-center"},we=r("label",{for:"vendite",class:"ml-2"},"Report vendite",-1),xe={class:"flex align-items-center"},De=r("label",{for:"prenotazioni",class:"ml-2"},"Report visite",-1),Re={class:"flex align-items-center justify-content-end mt-6"};function Ce(d,o,b,e,g,w){const c=u("Calendar"),n=u("RadioButton"),f=u("Button"),y=u("Form");return C(),G(y,{onSubmit:e.onSubmit},{default:s(()=>[r("div",fe,[r("div",pe,[ve,a(c,{inputId:"start_date",modelValue:e.form.start_date,"onUpdate:modelValue":o[0]||(o[0]=l=>e.form.start_date=l),dateFormat:"dd/mm/yy",manualInput:!0,showTime:"",hourFormat:"24"},null,8,["modelValue"])]),r("div",be,[ye,a(c,{inputId:"end_date",modelValue:e.form.end_date,"onUpdate:modelValue":o[1]||(o[1]=l=>e.form.end_date=l),dateFormat:"dd/mm/yy",manualInput:!0,showTime:"",hourFormat:"24"},null,8,["modelValue"])])]),r("div",ge,[r("div",he,[a(n,{modelValue:e.form.created_at,"onUpdate:modelValue":o[2]||(o[2]=l=>e.form.created_at=l),inputId:"vendite",name:"vendite",value:"true"},null,8,["modelValue"]),we]),r("div",xe,[a(n,{modelValue:e.form.created_at,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.created_at=l),inputId:"prenotazioni",name:"prenotazioni",value:"false"},null,8,["modelValue"]),De])]),r("div",Re,[a(f,{label:"Annulla",text:"",onClick:o[4]||(o[4]=l=>d.$emit("onSubmit"))}),a(f,{label:"Scarica",type:"submit"})])]),_:1},8,["onSubmit"])}const ke=z(_e,[["render",Ce]]),Fe={setup(){S(()=>{});const d=_({}),o=_(),b=_(!1),e=_(!1);return{form:d,orderTable:o,isRevelia:b,visibleDialog:e,filterTable:function(c){d.value=c,o.value.loadLazyData()},onCloseReportDialog:function(){e.value=!1}}},components:{OrderFilter:H,OrderTable:ue,SalesReportsDialog:ke}},Oe={class:"flex justify-content-between align-items-center"},Te=r("h1",null,"Prenotazioni e incassi",-1);function Se(d,o,b,e,g,w){const c=u("Button"),n=u("SalesReportsDialog"),f=u("Dialog"),y=u("OrderFilter"),l=u("OrderTable");return C(),O("div",null,[r("div",Oe,[Te,a(c,{label:"Report",link:"",class:"m-0 p-0",icon:"pi pi-download",onClick:o[0]||(o[0]=t=>e.visibleDialog=!0)}),a(f,{visible:e.visibleDialog,"onUpdate:visible":o[2]||(o[2]=t=>e.visibleDialog=t),modal:"",header:"Report",style:{width:"35rem"}},{default:s(()=>[a(n,{onOnSubmit:o[1]||(o[1]=t=>e.onCloseReportDialog()),location:e.form.location},null,8,["location"])]),_:1},8,["visible"])]),a(y,{onOnSubmit:o[3]||(o[3]=t=>e.filterTable(t)),revelia:e.isRevelia},null,8,["revelia"]),a(l,{filters:e.form,ref:"orderTable"},null,8,["filters"])])}const Qe=z(Fe,[["render",Se]]);export{Qe as default};
