import{o as S,a as P,l as b,c as T,x as z,i as M,_ as w,r as d,p as j,b as k,v as F,w as m,h,f as e,t as x,n as N,g as n,q as E,e as G}from"../index60043.js";import{e as C,p as O,a as R,s as U,u as q}from"./helpers60043.js";import{f as W,a as H,d as B}from"./formatData60043.js";import{u as A}from"./promotion60043.js";import{u as J}from"./location60043.js";import{c as K,a as Q}from"./index.esm60043.js";import{F as X}from"./vee-validate.esm60043.js";import{I as Y}from"./InputTextWithValidation60043.js";import{D as I}from"./datetime60043.js";import"./_commonjsHelpers60043.js";const Z={setup(){S(()=>{u.value=!0,i.value={first:0,rows:t.value.rows,sortField:null,sortOrder:null},i.value.page=0,y()});const p=P(),t=b(),l=b(),o=b(),g=b(),u=b(!0),i=b(),_=b(0),f=A(),v=T(()=>f.responsePromotions),r=z(),s=T(()=>r.submitDialog);function y(){u.value=!0,setTimeout(()=>{c()},Math.random()*1e3+250)}const c=async function(){await f.fetchAllPromotions().then(()=>{u.value=!1}).catch(D=>{u.value=!1,C(p,D)})},V=function(D){g.value=D;let L="Sei sicuro di voler eliminare questo codice sconto?";r.setDialog("Elimina codice sconto","Elimina","Annulla",L),r.setBtnSubmit(!1),r.setDynamicDialogVisibility(!0)},a=async function(){await f.deletePromotion(g.value).then(()=>{u.value=!1,U(p,{message:"Codice sconto eliminato correttamente",error:!1}),c()}).catch(D=>{u.value=!1,C(p,D)})};return M(s,D=>{D&&a()}),{dt:t,responsePromotions:v,loading:u,totalRecords:_,lazyParams:i,currentOrder:l,op:o,loadLazyData:y,onDeletePromotion:a,confirmDelete:V,formatDataAndHourFromUnixTimestamps:W,formatPrettyDate:H,prettyPaymentStatus:O,prettyTicketType:R}}},$={class:"flex justify-content-center"};function oo(p,t,l,o,g,u){const i=d("Column"),_=d("Badge"),f=d("Button"),v=d("DataTable"),r=j("tooltip");return k(),F(v,{value:o.responsePromotions.promotions,lazy:!0,paginator:!1,ref:"dt",loading:o.loading,stripedRows:""},{empty:m(()=>[h(" Nessun codice sconto trovato. ")]),default:m(()=>[e(i,{header:"Codice",field:"name"}),e(i,{header:"Location",field:"location"},{body:m(({data:s})=>{var y;return[h(x(((y=s.location)==null?void 0:y.name)||"Tutte le location"),1)]}),_:1}),e(i,{header:"Tipo biglietto"},{body:m(({data:s})=>[e(_,{value:o.prettyTicketType(s.ticket_type),class:N([s.ticket_type,"px-3 border-round-lg"])},null,8,["value","class"])]),_:1}),e(i,{header:"Dal"},{body:m(({data:s})=>[h(x(o.formatPrettyDate(s.from_date)),1)]),_:1}),e(i,{header:"Al"},{body:m(({data:s})=>[h(x(o.formatPrettyDate(s.to_date)),1)]),_:1}),e(i,{header:"Tipo di sconto",field:"promo_type"}),e(i,{header:""},{body:m(({data:s})=>[n("div",$,[E(e(f,{link:"",icon:"pi pi-trash",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:y=>o.confirmDelete(s.id)},null,8,["onClick"]),[[r,"Elimina",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","loading"])}const to=w(Z,[["render",oo]]),eo={setup(p,t){S(()=>{s.value&&(_.value=[...s.value],_.value.unshift({id:"null",name:"Tutte le location"}),l.value.location_id=_.value[0].id,l.value.promo_type="2",l.value.ticket_type="standard",l.value.from_date=I.local().toFormat("dd/MM/yyyy"),l.value.to_date=I.local().toFormat("dd/MM/yyyy"))});const l=b({}),o=J(),g=A(),u=[{label:"Biglietti standard",value:"standard"},{label:"Biglietti a data aperta",value:"data_aperta"}],i=K({name:Q().required("Codice sconto obbligatorio")}),_=b([]),{showLoader:f,hideLoader:v}=q(),r=P(),s=T(()=>o.allLocations);return{form:l,ticket_types:u,options:_,schema:i,onSubmit:function(){if(l.value.promo_type=="2"&&!l.value.discount||l.value.promo_type=="3"&&!l.value.discount_1)return;const c=Object.assign({},l.value);c.from_date&&(c.from_date=B(c.from_date)),c.to_date&&(c.to_date=B(c.to_date)),l.value.promo_type=="3"&&(c.discount=c.discount_1,delete c.discount_1),f();const V={promotion:c};g.addPromotion(V).then(()=>{v(),U(r,{message:"Codice sconto aggiunto correttamente",error:!1}),t.emit("onSubmit")}).catch(a=>{v(),C(r,a)})}}},components:{Form:X,InputTextWithValidation:Y}},no={class:"formgrid grid flex-column mt-3"},ao={class:"field col-12 flex flex-column"},lo=n("label",{for:"location"},"Seleziona la location",-1),io={class:"field col-12 mb-3"},so={class:"formgrid grid"},ro={class:"field col-6 flex flex-column"},co=n("label",{from:"from_date"},"Valido Dal",-1),mo={class:"field col-6 flex flex-column"},uo=n("label",{from:"to_date"},"Al",-1),_o={class:"formgrid grid mt-2"},fo={class:"field col-12 flex flex-column"},po=n("label",{for:"ticket_type"},"Tipo di biglietto",-1),vo={class:"ml-3 mt-3"},bo=n("label",null,"Tipo di sconto",-1),yo={class:"flex flex-wrap gap-3 mt-3 flex-column"},go={class:"flex align-items-center"},Do=n("label",{for:"2",class:"ml-2 mr-2"},"Tutti i biglietti costano",-1),ho=n("span",{class:"ml-2"},"in meno",-1),Vo={class:"flex align-items-center"},xo=n("label",{for:"3",class:"ml-2 mr-2"},"Tutti i biglietti costano il ",-1),To=n("span",{class:"ml-2"},"in meno",-1),Co={class:"flex align-items-center justify-content-end mt-6"};function So(p,t,l,o,g,u){const i=d("Dropdown"),_=d("InputTextWithValidation"),f=d("Calendar"),v=d("RadioButton"),r=d("InputText"),s=d("InputGroupAddon"),y=d("InputGroup"),c=d("Button"),V=d("Form");return k(),F(V,{"validation-schema":o.schema,onSubmit:o.onSubmit},{default:m(()=>[n("div",no,[n("div",ao,[lo,e(i,{modelValue:o.form.location_id,"onUpdate:modelValue":t[0]||(t[0]=a=>o.form.location_id=a),options:o.options,optionLabel:"name",optionValue:"id",placeholder:"",name:"location"},null,8,["modelValue","options"])]),n("div",io,[e(_,{name:"name",label:"Codice sconto*",modelValue:o.form.name,"onUpdate:modelValue":t[1]||(t[1]=a=>o.form.name=a)},null,8,["modelValue"])])]),n("div",so,[n("div",ro,[co,e(f,{inputId:"from_date",modelValue:o.form.from_date,"onUpdate:modelValue":t[2]||(t[2]=a=>o.form.from_date=a),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])]),n("div",mo,[uo,e(f,{inputId:"to_date",modelValue:o.form.to_date,"onUpdate:modelValue":t[3]||(t[3]=a=>o.form.to_date=a),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])])]),n("div",_o,[n("div",fo,[po,e(i,{modelValue:o.form.ticket_type,"onUpdate:modelValue":t[4]||(t[4]=a=>o.form.ticket_type=a),options:o.ticket_types,optionLabel:"label",optionValue:"value",placeholder:"",name:"ticket_type"},null,8,["modelValue","options"])]),n("div",vo,[bo,n("div",yo,[n("div",go,[e(v,{modelValue:o.form.promo_type,"onUpdate:modelValue":t[5]||(t[5]=a=>o.form.promo_type=a),inputId:"2",name:"2",value:"2"},null,8,["modelValue"]),Do,e(y,{class:"w-10rem ml-2"},{default:m(()=>[e(r,{modelValue:o.form.discount,"onUpdate:modelValue":t[6]||(t[6]=a=>o.form.discount=a),class:"border-noround-right",disabled:o.form.promo_type=="3"},null,8,["modelValue","disabled"]),e(s,null,{default:m(()=>[h("€")]),_:1})]),_:1}),ho]),n("div",Vo,[e(v,{modelValue:o.form.promo_type,"onUpdate:modelValue":t[7]||(t[7]=a=>o.form.promo_type=a),inputId:"3",name:"3",value:"3"},null,8,["modelValue"]),xo,e(y,{class:"w-10rem"},{default:m(()=>[e(r,{modelValue:o.form.discount_1,"onUpdate:modelValue":t[8]||(t[8]=a=>o.form.discount_1=a),class:"border-noround-right",disabled:o.form.promo_type=="2"},null,8,["modelValue","disabled"]),e(s,null,{default:m(()=>[h("%")]),_:1})]),_:1}),To])])])]),n("div",Co,[e(c,{label:"Annulla",text:""}),e(c,{label:"Conferma",type:"submit"})])]),_:1},8,["validation-schema","onSubmit"])}const wo=w(eo,[["render",So]]),ko={setup(){S(()=>{});const p=b(!1),t=b();return{visibleDialog:p,discountCodeTable:t,onShowDialog:function(){p.value=!0},onSubmit:function(){p.value=!1,t.value.loadLazyData()}}},components:{DiscountCodeTable:to,DiscountCodeDialog:wo}},Bo=n("h1",null,"Codici sconto",-1),Io={class:"flex justify-content-end mt-4 mb-3"};function Po(p,t,l,o,g,u){const i=d("Button"),_=d("DiscountCodeTable"),f=d("DiscountCodeDialog"),v=d("Dialog");return k(),G("div",null,[Bo,n("div",Io,[e(i,{label:"Codice sconto",icon:"pi pi-plus",rounded:"",outlined:"",onClick:t[0]||(t[0]=r=>o.onShowDialog())})]),e(_,{ref:"discountCodeTable"},null,512),e(v,{visible:o.visibleDialog,"onUpdate:visible":t[2]||(t[2]=r=>o.visibleDialog=r),modal:"",header:"Nuovo codice sconto",style:{width:"35rem"}},{default:m(()=>[e(f,{onOnSubmit:t[1]||(t[1]=r=>o.onSubmit())})]),_:1},8,["visible"])])}const Oo=w(ko,[["render",Po]]);export{Oo as default};
