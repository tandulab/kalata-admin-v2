import{O as M}from"./OrderFilter28679.js";import{o as B,c as L,a as U,l as v,m as E,_ as T,r as u,p as H,b as C,e as F,g as n,f as a,w as l,F as $,h as w,t as b,n as P,q,s as N,v as Q}from"../index28679.js";import{u as G}from"./order28679.js";import{u as J,p as K,e as S}from"./helpers28679.js";import{f as W,a as X,b as k}from"./formatData28679.js";import{u as Y}from"./location28679.js";import{F as Z}from"./vee-validate.esm28679.js";import{D as I}from"./datetime28679.js";import"./attraction28679.js";import"./guide28679.js";const ee={props:["filters"],setup(d,o){B(()=>{_.value=!0,t.value={first:0,rows:r.value.rows,sortField:null,sortOrder:null},t.value.page=0});const h=G(),{showLoader:e,hideLoader:y}=J(),x=L(()=>h.responseOrders),i=U(),r=v(),m=v(),c=v(),_=v(!0),t=v(),f=v(0),D=v([]);function V(){_.value=!0,setTimeout(()=>{j()},Math.random()*1e3+250)}const j=async function(){const s=new Map;Object.entries(d.filters).forEach(([p,g])=>{g&&((p=="date_from"||p=="date_to")&&g?s.set(p,k(g)):p=="location"?s.set("location_id",g.id):p=="code"?s.set("name",g):s.set(p,g))}),s.set("page",t.value.page+1),s.set("per_page",t.value.rows),await h.fetchAllOrders(s).then(()=>{_.value=!1}).catch(p=>{_.value=!1,S(i,p)})};return{dt:r,responseOrders:x,loading:_,totalRecords:f,lazyParams:t,currentOrder:m,op:c,expandedRows:D,loadLazyData:V,toggle:s=>{c.value.toggle(s)},openDialog:function(s){const p={course_name:s.course_name,start_at:s.start_at};o.emit("updateFilters",p)},onPage:s=>{t.value=s,V()},openPDF:function(s){window.open(s,"_blank")},downloadCsv:async function(){var z;let s=(z=d.filters.location)==null?void 0:z.id,p=k(d.filters.date_from),g=k(d.filters.date_to);e();try{const R=await E({method:"get",url:`/admin/locations/${s}/orders?format=csv&date_from=${p}&date_to=${g}`,responseType:"blob"});var A=new Blob([R.data],{type:R.headers["content-type"]});const O=document.createElement("a");O.href=window.URL.createObjectURL(A),O.download="Prenotazioni.csv",O.click(),y()}catch(R){y(),S(i,R)}},formatDataAndHourFromUnixTimestamps:W,formatPrettyDate:X,prettyPaymentStatus:K}}};const te={class:"flex justify-content-end mt-4 mb-3"},oe={class:"order-table"},ae=["href"],ne=["href"],re={key:0},le=n("div",{class:"flex justify-content-center w-full"},"PDF",-1),se={class:"flex justify-content-center"},de={class:"flex justify-content-end"},ie={class:"col-4 pl-6"};function ce(d,o,h,e,y,x){const i=u("Button"),r=u("Column"),m=u("Badge"),c=u("DataTable"),_=H("tooltip");return C(),F($,null,[n("div",te,[a(i,{label:"CSV Prenotazioni",icon:"pi pi-download",rounded:"",outlined:"",onClick:o[0]||(o[0]=t=>e.downloadCsv())})]),n("div",oe,[a(c,{value:e.responseOrders.orders,totalRecords:e.responseOrders.total,lazy:!0,paginator:!0,rows:30,ref:"dt",loading:e.loading,stripedRows:"",onPage:o[1]||(o[1]=t=>e.onPage(t)),expandedRows:e.expandedRows,"onUpdate:expandedRows":o[2]||(o[2]=t=>e.expandedRows=t)},{empty:l(()=>[w(" Nessuna prenotazione trovata. ")]),expansion:l(t=>[a(c,{value:t.data.order_items[0].tickets,class:"m-4 mx-4"},{empty:l(()=>[w(" Nessuna prenotazione trovata. ")]),footer:l(()=>[n("div",de,[n("div",ie,"Totale: € "+b((+t.data.total).toFixed(2)),1)])]),default:l(()=>[a(r,{header:"Tipo biglietto"},{body:l(({data:f})=>[a(m,{value:f.name,class:P([f.name,"px-3 border-round-lg"])},null,8,["value","class"])]),_:1}),a(r,{header:"Orario visita"},{body:l(()=>[w(b(t.data.order_items[0].time_slot.start_at),1)]),_:2},1024),a(r,{header:"Quantità"},{body:l(({data:f})=>[w(b(f.quantity),1)]),_:1}),a(r,{header:"Prezzo"},{body:l(({data:f})=>[w(" € "+b((+f.price).toFixed(2)),1)]),_:1}),a(r,{field:"tickets_url"},{header:l(()=>[le]),body:l(({data:f})=>[n("div",se,[q(a(i,{link:"",icon:"pi pi-print",href:f.tickets_url,target:"_blank",style:{color:"var(--surface-400)"},text:"",rounded:"",onClick:D=>e.openPDF(t.data.tickets_url)},null,8,["href","onClick"]),[[_,"Stampa",void 0,{top:!0}]])])]),_:2},1024)]),_:2},1032,["value"])]),default:l(()=>[a(r,{header:"Codice prenotazione",field:"reservation_number",ref:"reservation_number"},null,512),a(r,{header:"Effettuata da",field:"created_by",ref:"created_by"},{body:l(({data:t})=>[w(b(t.user_name)+" "+b(t.user_surname),1)]),_:1},512),a(r,{header:"Email",field:"user_email",ref:"user_email"},{body:l(({data:t})=>[n("a",{href:"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to="+t.user_email,target:"_blank"},b(t.user_email),9,ae)]),_:1},512),a(r,{header:"Telefono",field:"user_phone"},{body:l(({data:t})=>[n("a",{href:"https://api.whatsapp.com/send?phone="+t.user_phone,target:"_blank"},b(t.user_phone),9,ne)]),_:1}),a(r,{header:"Data prenotazione",field:"created_at",ref:"created_at"},{body:l(({data:t})=>{var f,D;return[w(b(e.formatPrettyDate((D=(f=t.order_items[0])==null?void 0:f.time_slot)==null?void 0:D.date)),1)]}),_:1},512),a(r,{header:"Data ordine",field:"created_at",ref:"created_at"},{body:l(({data:t})=>[w(b(e.formatDataAndHourFromUnixTimestamps(t.created_at)),1)]),_:1},512),a(r,{header:"Stato"},{body:l(({data:t})=>[t.status?(C(),F("div",re,[a(m,{value:e.prettyPaymentStatus(t.status),class:P([t.status,"px-3 border-round-lg"])},null,8,["value","class"])])):N("",!0)]),_:1}),a(r,{expander:"",style:{width:"5rem"}})]),_:1},8,["value","totalRecords","loading","expandedRows"])])],64)}const ue=T(ee,[["render",ce]]),me={props:["location"],setup(d,o){B(()=>{e.value.start_date=I.local().startOf("day").toFormat("dd/MM/yyyy"),e.value.end_date=I.local().endOf("day").toFormat("dd/MM/yyyy"),e.value.created_at="true",e.value.start_hour="00:00",e.value.end_hour="23:59"});const h=U(),e=v({}),y=Y(),x=function(){let m=k(e.value.start_date)+" "+e.value.start_hour,c=k(e.value.end_date)+" "+e.value.end_hour;const _={from:m,to:c,location_id:d.location.id,location_permalink:d.location.permalink,created_at:e.value.created_at};i(_)},i=async function(m){await y.downloadReport(m).then(()=>{o.emit("onSubmit")}).catch(c=>{S(h,c)})};return{form:e,onSubmit:x,setDefaultIfBlank:function(){(!e.value.start_hour||e.value.start_hour=="")&&(e.value.start_hour="00:00"),(!e.value.end_hour||e.value.end_hour=="")&&(e.value.end_hour="23:59")}}},components:{Form:Z}},_e={class:"formgrid grid mt-3"},fe={class:"field col-6 flex flex-column"},pe=n("label",{from:"start_date"},"Dal",-1),ve=n("label",{from:"start_hour",class:"mt-3"},"Dalle",-1),be={class:"field col-6 flex flex-column"},he=n("label",{from:"end_date"},"Al",-1),ye=n("label",{from:"end_hour",class:"mt-3"},"Alle",-1),ge={class:"flex flex-wrap gap-3 mt-3"},we={class:"flex align-items-center"},xe=n("label",{for:"vendite",class:"ml-2"},"Report vendite",-1),De={class:"flex align-items-center"},ke=n("label",{for:"prenotazioni",class:"ml-2"},"Report visite",-1),Re={class:"flex align-items-center justify-content-end mt-6"};function Ce(d,o,h,e,y,x){const i=u("Calendar"),r=u("InputMask"),m=u("RadioButton"),c=u("Button"),_=u("Form");return C(),Q(_,{onSubmit:e.onSubmit},{default:l(()=>[n("div",_e,[n("div",fe,[pe,a(i,{inputId:"start_date",modelValue:e.form.start_date,"onUpdate:modelValue":o[0]||(o[0]=t=>e.form.start_date=t),dateFormat:"dd/mm/yy",manualInput:!0},null,8,["modelValue"]),ve,a(r,{id:"start_hour",modelValue:e.form.start_hour,"onUpdate:modelValue":o[1]||(o[1]=t=>e.form.start_hour=t),mask:"99:99",placeholder:"HH:mm",onBlur:o[2]||(o[2]=t=>e.setDefaultIfBlank())},null,8,["modelValue"])]),n("div",be,[he,a(i,{inputId:"end_date",modelValue:e.form.end_date,"onUpdate:modelValue":o[3]||(o[3]=t=>e.form.end_date=t),dateFormat:"dd/mm/yy",manualInput:!0},null,8,["modelValue"]),ye,a(r,{id:"end_hour",modelValue:e.form.end_hour,"onUpdate:modelValue":o[4]||(o[4]=t=>e.form.end_hour=t),mask:"99:99",placeholder:"HH:mm",onBlur:o[5]||(o[5]=t=>e.setDefaultIfBlank())},null,8,["modelValue"])])]),n("div",ge,[n("div",we,[a(m,{modelValue:e.form.created_at,"onUpdate:modelValue":o[6]||(o[6]=t=>e.form.created_at=t),inputId:"vendite",name:"vendite",value:"true"},null,8,["modelValue"]),xe]),n("div",De,[a(m,{modelValue:e.form.created_at,"onUpdate:modelValue":o[7]||(o[7]=t=>e.form.created_at=t),inputId:"prenotazioni",name:"prenotazioni",value:"false"},null,8,["modelValue"]),ke])]),n("div",Re,[a(c,{label:"Annulla",text:"",onClick:o[8]||(o[8]=t=>d.$emit("onSubmit"))}),a(c,{label:"Scarica",type:"submit"})])]),_:1},8,["onSubmit"])}const Oe=T(me,[["render",Ce]]),Fe={setup(){B(()=>{});const d=v({}),o=v(),h=v(!1),e=v(!1);return{form:d,orderTable:o,isRevelia:h,visibleDialog:e,filterTable:function(i){d.value=i,o.value.loadLazyData()},onCloseReportDialog:function(){e.value=!1}}},components:{OrderFilter:M,OrderTable:ue,SalesReportsDialog:Oe}},Se={class:"flex justify-content-between align-items-center"},Be=n("h1",null,"Prenotazioni e incassi",-1);function Te(d,o,h,e,y,x){const i=u("Button"),r=u("SalesReportsDialog"),m=u("Dialog"),c=u("OrderFilter"),_=u("OrderTable");return C(),F("div",null,[n("div",Se,[Be,a(i,{label:"Report",link:"",class:"m-0 p-0",icon:"pi pi-download",onClick:o[0]||(o[0]=t=>e.visibleDialog=!0)}),a(m,{visible:e.visibleDialog,"onUpdate:visible":o[2]||(o[2]=t=>e.visibleDialog=t),modal:"",header:"Report",style:{width:"35rem"}},{default:l(()=>[a(r,{onOnSubmit:o[1]||(o[1]=t=>e.onCloseReportDialog()),location:e.form.location},null,8,["location"])]),_:1},8,["visible"])]),a(c,{onOnSubmit:o[3]||(o[3]=t=>e.filterTable(t)),revelia:e.isRevelia},null,8,["revelia"]),a(_,{filters:e.form,ref:"orderTable"},null,8,["filters"])])}const Ge=T(Fe,[["render",Te]]);export{Ge as default};