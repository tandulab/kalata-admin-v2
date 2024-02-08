import{u as G}from"./location60418.js";import{D as T}from"./datetime60418.js";import{u as B}from"./order60418.js";import{u as N}from"./attraction60418.js";import{u as O}from"./guide60418.js";import{o as R,l as k,c as f,i as C,_ as M,r as c,b as d,v as S,w as v,f as n,g as l,e as p,s as V,h as j,t as y}from"../index60418.js";const q={props:["revelia"],setup(x,t){R(()=>{u()});const a=k({}),o=G(),b=N(),A=B(),s=O(),_=k([{name:"In attesa di conferma",value:"added"},{name:"Confermato",value:"confirmed"},{name:"Non Confermato",value:"canceled"}]),i=f(()=>o.allLocations),r=f(()=>b.allAttractions),h=f(()=>A.paymentStatus),L=f(()=>A.paymentStatusRevelia),e=f(()=>s.responseGuides),u=function(){x.revelia?(U(),w()):i.value?(a.value.location=i.value[0],m()):I()},m=function(){const g=T.local(),D=g.minus({months:1}).startOf("month");a.value.date_from=D.toFormat("dd/LL/yyyy"),a.value.date_to=g.toFormat("dd/LL/yyyy"),a.value.status=null,a.value.code="",a.value.user="",t.emit("onSubmit",a.value)},F=function(){u()},I=async function(){await o.fetchAllLocations()},U=async function(){await b.fetchAllAttractions()},w=async function(){await s.fetchAllGuides()};return C(i,()=>{a.value.location_id=i.value[0].id,m()}),C(r,()=>{a.value.attraction_id=r.value[0].id,m()}),{form:a,event_statuses:_,locations:i,attractions:r,statuses:h,statusesRevelia:L,responseGuides:e,resetForm:F}}},z={class:"formgrid grid px-0 align-items-center"},E={class:"field col-3 flex flex-column"},H=l("label",{for:"typology"},"Location",-1),J={class:"field col-2"},K=l("label",{from:"date_from"},"Dal",-1),Q={class:"field col-2"},W=l("label",{from:"date_to"},"Al",-1),X={key:0,class:"field col-3 flex flex-column"},Y=l("label",{from:"status"},"Codice prenotazione",-1),Z={key:1,class:"field col-3 flex flex-column"},P=l("label",{from:"status"},"Acquirente",-1),$={key:2,class:"field col-2 flex flex-column"},oo=l("label",{from:"guide"},"Guida",-1),eo={class:"flex align-items-center"},to={class:"field col-2 flex flex-column"},ao=l("label",{from:"status"},"Stato pagamento",-1),lo={key:3,class:"field col-2 flex flex-column"},no=l("label",{from:"event_status"},"Stato evento",-1),so={class:"flex col-12 justify-content-end pt-1"};function io(x,t,a,o,b,A){const s=c("Dropdown"),_=c("Calendar"),i=c("InputText"),r=c("Button"),h=c("AccordionTab"),L=c("Accordion");return d(),S(L,{activeIndex:0},{default:v(()=>[n(h,{header:"FILTRI"},{default:v(()=>[l("div",z,[l("div",E,[H,a.revelia?(d(),S(s,{key:1,modelValue:o.form.attraction_id,"onUpdate:modelValue":t[1]||(t[1]=e=>o.form.attraction_id=e),options:o.attractions,optionLabel:"name",optionValue:"id",placeholder:""},null,8,["modelValue","options"])):(d(),S(s,{key:0,modelValue:o.form.location,"onUpdate:modelValue":t[0]||(t[0]=e=>o.form.location=e),options:o.locations,optionLabel:"name",placeholder:""},null,8,["modelValue","options"]))]),l("div",J,[K,n(_,{inputId:"date_from",modelValue:o.form.date_from,"onUpdate:modelValue":t[2]||(t[2]=e=>o.form.date_from=e),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])]),l("div",Q,[W,n(_,{inputId:"date_to",modelValue:o.form.date_to,"onUpdate:modelValue":t[3]||(t[3]=e=>o.form.date_to=e),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])]),a.revelia?V("",!0):(d(),p("div",X,[Y,n(i,{type:"text",modelValue:o.form.name,"onUpdate:modelValue":t[4]||(t[4]=e=>o.form.name=e)},null,8,["modelValue"])])),a.revelia?V("",!0):(d(),p("div",Z,[P,n(i,{type:"text",modelValue:o.form.name,"onUpdate:modelValue":t[5]||(t[5]=e=>o.form.name=e)},null,8,["modelValue"])])),a.revelia?(d(),p("div",$,[oo,n(s,{id:"guide",modelValue:o.form.guide,"onUpdate:modelValue":t[6]||(t[6]=e=>o.form.guide=e),options:o.responseGuides.guides},{value:v(e=>{var u,m;return[j(y((u=e.value)==null?void 0:u.first_name)+" "+y((m=e.value)==null?void 0:m.last_name),1)]}),option:v(e=>[l("div",eo,[l("div",null,y(e.option.first_name)+" "+y(e.option.last_name),1)])]),_:1},8,["modelValue","options"])])):V("",!0),l("div",to,[ao,n(s,{id:"status",modelValue:o.form.status,"onUpdate:modelValue":t[7]||(t[7]=e=>o.form.status=e),options:a.revelia?o.statusesRevelia:o.statuses,optionLabel:"name",optionValue:"id",placeholder:""},null,8,["modelValue","options"])]),a.revelia?(d(),p("div",lo,[no,n(s,{id:"event_status",modelValue:o.form.event_status,"onUpdate:modelValue":t[8]||(t[8]=e=>o.form.event_status=e),options:o.event_statuses,optionLabel:"name",optionValue:"value"},null,8,["modelValue","options"])])):V("",!0)]),l("div",so,[n(r,{label:"Ricerca",class:"mr-2",onClick:t[9]||(t[9]=e=>x.$emit("onSubmit",o.form))}),n(r,{label:"Annulla",class:"p-button-outlined",onClick:t[10]||(t[10]=e=>o.resetForm())})])]),_:1})]),_:1})}const vo=M(q,[["render",io]]);export{vo as O};
