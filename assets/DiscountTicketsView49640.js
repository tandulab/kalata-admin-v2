import{o as w,a as F,l as p,c as T,x as M,i as z,_ as I,r,p as j,b as B,v as P,w as c,h as D,f as a,t as V,n as E,g as l,q as N,e as G}from"../index49640.js";import{e as S,p as O,a as R,s as U,u as q}from"./helpers49640.js";import{f as H,a as J,c as C}from"./formatData49640.js";import{u as A}from"./promotion49640.js";import{u as W}from"./location49640.js";import"./index.esm49640.js";import{F as K}from"./vee-validate.esm49640.js";import{I as Q}from"./InputTextWithValidation49640.js";import{D as k}from"./datetime49640.js";import"./_commonjsHelpers49640.js";const X={setup(){w(()=>{_.value=!0,d.value={first:0,rows:e.value.rows,sortField:null,sortOrder:null},d.value.page=0,v()});const b=F(),e=p(),n=p(),o=p(),g=p(),_=p(!0),d=p(),m=p(0),u=A(),f=T(()=>u.responsePromotions),s=M(),i=T(()=>s.submitDialog);function v(){_.value=!0,setTimeout(()=>{h()},Math.random()*1e3+250)}const h=async function(){await u.fetchAllPromotionTickets().then(()=>{_.value=!1}).catch(y=>{_.value=!1,S(b,y)})},t=function(y){g.value=y;let L="Sei sicuro di voler eliminare questo sconto?";s.setDialog("Elimina sconto","Elimina","Annulla",L),s.setBtnSubmit(!1),s.setDynamicDialogVisibility(!0)},x=async function(){await u.deletePromotion(g.value).then(()=>{_.value=!1,U(b,{message:"Sconto eliminato correttamente",error:!1}),h()}).catch(y=>{_.value=!1,S(b,y)})};return z(i,y=>{y&&x()}),{dt:e,responsePromotions:f,loading:_,totalRecords:m,lazyParams:d,currentOrder:n,op:o,loadLazyData:v,onDeletePromotion:x,confirmDelete:t,formatDataAndHourFromUnixTimestamps:H,formatPrettyDate:J,prettyPaymentStatus:O,prettyTicketType:R}}},Y={class:"flex justify-content-center"};function Z(b,e,n,o,g,_){const d=r("Column"),m=r("Badge"),u=r("Button"),f=r("DataTable"),s=j("tooltip");return B(),P(f,{value:o.responsePromotions.promotions,lazy:!0,paginator:!1,ref:"dt",loading:o.loading,stripedRows:""},{empty:c(()=>[D(" Nessuno sconto trovato. ")]),default:c(()=>[a(d,{header:"Location",field:"location"},{body:c(({data:i})=>{var v;return[D(V(((v=i.location)==null?void 0:v.name)||"Tutte le location"),1)]}),_:1}),a(d,{header:"Tipo biglietto"},{body:c(({data:i})=>[a(m,{value:o.prettyTicketType(i.ticket_type),class:E([i.ticket_type,"px-3 border-round-lg"])},null,8,["value","class"])]),_:1}),a(d,{header:"Ordinabile dal - al "},{body:c(({data:i})=>[D(V(o.formatPrettyDate(i.booking_from_date))+" - "+V(o.formatPrettyDate(i.booking_to_date)),1)]),_:1}),a(d,{header:"Valido dal - al "},{body:c(({data:i})=>[D(V(o.formatPrettyDate(i.from_date))+" - "+V(o.formatPrettyDate(i.to_date)),1)]),_:1}),a(d,{header:""},{body:c(({data:i})=>[l("div",Y,[N(a(u,{link:"",icon:"pi pi-trash",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:v=>o.confirmDelete(i.id)},null,8,["onClick"]),[[s,"Elimina",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","loading"])}const $=I(X,[["render",Z]]),oo={setup(b,e){w(()=>{i.value&&(m.value=[...i.value],m.value.unshift({id:"null",name:"Tutte le location"}),n.value.location_id=m.value[0].id,n.value.promo_type="1",n.value.ticket_type="standard",n.value.from_date=k.local().toFormat("dd/MM/yyyy"),n.value.to_date=k.local().toFormat("dd/MM/yyyy"),n.value.booking_from_date=k.local().toFormat("dd/MM/yyyy"),n.value.booking_to_date=k.local().toFormat("dd/MM/yyyy"))});const n=p({}),o=p(!1),g=W(),_=A(),d=[{label:"Biglietti standard",value:"standard"},{label:"Biglietti a data aperta",value:"data_aperta"}],m=p([]),{showLoader:u,hideLoader:f}=q(),s=F(),i=T(()=>g.allLocations);return{visibleDialog:o,form:n,ticket_types:d,options:m,onShowDialog:function(){o.value=!0},onSubmit:function(){if(n.value.promo_type=="1"&&!n.value.price||n.value.promo_type=="2"&&!n.value.discount_1||n.value.promo_type=="3"&&!n.value.discount_2)return;const t=Object.assign({},n.value);t.from_date&&(t.from_date=C(t.from_date)),t.to_date&&(t.to_date=C(t.to_date)),(n.value.promo_type=="2"||n.value.promo_type=="3")&&(t.discount=t.discount_2,delete t.discount_1,delete t.discount_2),u();const x={promotion:t};_.addPromotion(x).then(()=>{f(),U(s,{message:"Codice sconto aggiunto correttamente",error:!1}),e.emit("closeDialog")}).catch(y=>{f(),S(s,y)})}}},components:{Form:K,InputTextWithValidation:Q}},to={class:"formgrid grid flex-column mt-3"},eo={class:"field col-12 flex flex-column"},lo=l("label",{for:"location"},"Seleziona la location",-1),ao={class:"formgrid grid mt-2"},no=l("div",{class:"field col-12 flex flex-column mb-0"},[l("label",null,"Data prenotazione (giorno in cui si può effettuare la prenotazione)")],-1),io={class:"field col-6 flex flex-column"},so=l("label",{from:"booking_from_date"},"Dal",-1),ro={class:"field col-6 flex flex-column"},mo=l("label",{from:"booking_to_date"},"Al",-1),co={class:"formgrid grid mt-2"},uo=l("div",{class:"field col-12 flex flex-column mb-0"},[l("label",null,"Data visita (giorno in cui si effettuerà la visita)")],-1),_o={class:"field col-6 flex flex-column"},fo=l("label",{from:"from_date"},"Dal",-1),po={class:"field col-6 flex flex-column"},bo=l("label",{from:"to_date"},"Al",-1),vo={class:"formgrid grid mt-2"},yo={class:"field col-12 flex flex-column"},go=l("label",{for:"ticket_type"},"Tipo di biglietto",-1),Do={class:"ml-3 mt-3"},ho=l("label",null,"Tipo di promozione",-1),Vo={class:"flex flex-wrap gap-3 mt-3 flex-column"},xo={class:"flex align-items-center"},ko=l("label",{for:"2",class:"ml-2 mr-2"},"Tutti i biglietti costano",-1),To={class:"flex align-items-center"},So=l("label",{for:"2",class:"ml-2 mr-2"},"Tutti i biglietti costano",-1),wo=l("span",{class:"ml-2"},"in meno",-1),Io={class:"flex align-items-center"},Bo=l("label",{for:"3",class:"ml-2 mr-2"},"Tutti i biglietti costano il ",-1),Co=l("span",{class:"ml-2"},"in meno",-1),Fo={class:"flex align-items-center justify-content-end mt-6"};function Po(b,e,n,o,g,_){const d=r("Dropdown"),m=r("Calendar"),u=r("RadioButton"),f=r("InputText"),s=r("InputGroupAddon"),i=r("InputGroup"),v=r("Button"),h=r("Form");return B(),P(h,{onSubmit:o.onSubmit},{default:c(()=>[l("div",to,[l("div",eo,[lo,a(d,{modelValue:o.form.location_id,"onUpdate:modelValue":e[0]||(e[0]=t=>o.form.location_id=t),options:o.options,optionLabel:"name",optionValue:"id",placeholder:"",name:"location"},null,8,["modelValue","options"])])]),l("div",ao,[no,l("div",io,[so,a(m,{inputId:"booking_from_date",modelValue:o.form.booking_from_date,"onUpdate:modelValue":e[1]||(e[1]=t=>o.form.booking_from_date=t),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])]),l("div",ro,[mo,a(m,{inputId:"booking_to_date",modelValue:o.form.booking_to_date,"onUpdate:modelValue":e[2]||(e[2]=t=>o.form.booking_to_date=t),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])])]),l("div",co,[uo,l("div",_o,[fo,a(m,{inputId:"from_date",modelValue:o.form.from_date,"onUpdate:modelValue":e[3]||(e[3]=t=>o.form.from_date=t),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])]),l("div",po,[bo,a(m,{inputId:"to_date",modelValue:o.form.to_date,"onUpdate:modelValue":e[4]||(e[4]=t=>o.form.to_date=t),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])])]),l("div",vo,[l("div",yo,[go,a(d,{modelValue:o.form.ticket_type,"onUpdate:modelValue":e[5]||(e[5]=t=>o.form.ticket_type=t),options:o.ticket_types,optionLabel:"label",optionValue:"value",placeholder:"",name:"ticket_type"},null,8,["modelValue","options"])]),l("div",Do,[ho,l("div",Vo,[l("div",xo,[a(u,{modelValue:o.form.promo_type,"onUpdate:modelValue":e[6]||(e[6]=t=>o.form.promo_type=t),inputId:"1",name:"1",value:"1"},null,8,["modelValue"]),ko,a(i,{class:"w-10rem ml-2"},{default:c(()=>[a(f,{modelValue:o.form.price,"onUpdate:modelValue":e[7]||(e[7]=t=>o.form.price=t),class:"border-noround-right",disabled:o.form.promo_type!="1"},null,8,["modelValue","disabled"]),a(s,null,{default:c(()=>[D("€")]),_:1})]),_:1})]),l("div",To,[a(u,{modelValue:o.form.promo_type,"onUpdate:modelValue":e[8]||(e[8]=t=>o.form.promo_type=t),inputId:"2",name:"2",value:"2"},null,8,["modelValue"]),So,a(i,{class:"w-10rem ml-2"},{default:c(()=>[a(f,{modelValue:o.form.discount_1,"onUpdate:modelValue":e[9]||(e[9]=t=>o.form.discount_1=t),class:"border-noround-right",disabled:o.form.promo_type=="3"},null,8,["modelValue","disabled"]),a(s,null,{default:c(()=>[D("€")]),_:1})]),_:1}),wo]),l("div",Io,[a(u,{modelValue:o.form.promo_type,"onUpdate:modelValue":e[10]||(e[10]=t=>o.form.promo_type=t),inputId:"3",name:"3",value:"3"},null,8,["modelValue"]),Bo,a(i,{class:"w-10rem"},{default:c(()=>[a(f,{modelValue:o.form.discount_2,"onUpdate:modelValue":e[11]||(e[11]=t=>o.form.discount_2=t),class:"border-noround-right",disabled:o.form.promo_type=="2"},null,8,["modelValue","disabled"]),a(s,null,{default:c(()=>[D("%")]),_:1})]),_:1}),Co])])])]),l("div",Fo,[a(v,{label:"Annulla",text:""}),a(v,{label:"Conferma",type:"submit"})])]),_:1},8,["onSubmit"])}const Uo=I(oo,[["render",Po]]),Ao={setup(){w(()=>{});const b=p(!1),e=p();return{visibleDialog:b,discountTicketTable:e,onShowDialog:function(){b.value=!0},onSubmit:function(){b.value=!1,e.value.loadLazyData()}}},components:{DiscountTicketTable:$,DiscountTicketDialog:Uo}},Lo=l("h1",null,"Sconti biglietti",-1),Mo={class:"flex justify-content-end mt-4 mb-3"};function zo(b,e,n,o,g,_){const d=r("Button"),m=r("DiscountTicketTable"),u=r("DiscountTicketDialog"),f=r("Dialog");return B(),G("div",null,[Lo,l("div",Mo,[a(d,{label:"Sconto biglietti",icon:"pi pi-plus",rounded:"",outlined:"",onClick:e[0]||(e[0]=s=>o.onShowDialog())})]),a(m,{ref:"discountTicketTable"},null,512),a(f,{visible:o.visibleDialog,"onUpdate:visible":e[2]||(e[2]=s=>o.visibleDialog=s),modal:"",header:"Nuovo codice sconto",style:{width:"35rem"}},{default:c(()=>[a(u,{onCloseDialog:e[1]||(e[1]=s=>o.onSubmit())})]),_:1},8,["visible"])])}const Ko=I(Ao,[["render",zo]]);export{Ko as default};
