import{o as Z,x as de,y as ue,a as K,l as T,c as L,z as me,_ as N,r as b,b as d,v as j,w as V,f as c,g as o,e as _,F as C,q as w,B as ve,O as _e,A as he,C as $,D as P,E as q,t as a,n as A,h as B,G as pe}from"../index23490.js";import{u as fe}from"./location23490.js";import{u as G,c as ee,e as ge,a as ye,f as oe,b as be,d as ke,k as te,p as xe,s as ne,v as le,g as Ve}from"./open-ticket23490.js";import{e as I,u as ae,s as Te}from"./helpers23490.js";import{D as X}from"./datetime23490.js";import{u as we}from"./order23490.js";import{b as Y}from"./formatData23490.js";import"./upload-service23490.js";const Se={emits:["onSubmit"],setup(i,n){Z(async()=>{await s.fetchAllLocations().catch(y=>I(p,y)),await J(m.query)});const m=de(),e=ue(),p=K(),r=T({}),s=fe(),l=G(),g=T([]),f=T(!1);let k=0,x=0;const t=[{name:"Tutti",value:"all"},{name:"Valido",value:"valid"},{name:"Prenotato",value:"booked"},{name:"Utilizzato",value:"used"},{name:"Scaduto",value:"expired"}],h=[{name:"Nuovi e storici",value:"all"},{name:"Nuovi",value:"false"},{name:"Storici",value:"true"}],S=[{name:"Tutti",value:"all"},{name:"Web",value:"web"},{name:"Biglietteria",value:"ticket_office"}],D=[{name:"Tutte",value:"all"},{name:"Singola",value:"single_location"},{name:"Multi",value:"multi_location"}],z=[{name:"Ultimi 12 mesi",value:"last_12_months"},{name:"Ultimi 30 giorni",value:"last_30_days"},{name:"Tutto il periodo",value:"all"},{name:"Intervallo personalizzato",value:"custom"}],v=L(()=>s.allLocations),u=L(()=>[{name:"Tutte",value:"all"},...(v.value??[]).map(y=>({name:y.name,value:String(y.id)}))]),U=L(()=>[{name:"Tutti",value:"all"},...g.value.map(y=>({name:y.name,value:String(y.id)}))]),W=()=>({search:"",status:"all",legacy:"all",channel:"all",kind:"all",location_id:"all",open_ticket_id:"all",period:"all",date_from:null,date_to:null}),Q=async function(y){const F=++k;if(g.value=[],y==="all"){f.value=!1;return}f.value=!0;try{const O=await l.fetchLocationProductOptions(y);F===k&&(g.value=O)}catch(O){F===k&&I(p,O)}finally{F===k&&(f.value=!1)}},H=y=>typeof y=="string"&&y!==""?y:null,J=async function(y){const F=++x,O=W(),R=H(y.location_id),M=H(y.open_ticket_id);R&&u.value.some(E=>E.value===R)&&(O.location_id=R),r.value=O,await Q(O.location_id),F===x&&(M&&g.value.some(E=>String(E.id)===M)&&(r.value.open_ticket_id=M),n.emit("onSubmit",r.value))},se=function(){x++,k++,g.value=[],f.value=!1,r.value=W(),n.emit("onSubmit",r.value)},ce=function(){r.value.open_ticket_id="all",Q(r.value.location_id)},re=function(){m.query.location_id||m.query.open_ticket_id?e.replace({name:"open-ticket-vouchers"}):se()};return me(y=>{J(y.query)}),{form:r,statuses:t,legacyOptions:h,channels:S,kinds:D,periods:z,productsLoading:f,locationOptions:u,productOptions:U,onLocationChange:ce,onReset:re}}},De={class:"formgrid grid px-0 align-items-center"},Le={class:"field col-12"},Oe=o("label",{for:"ot_search"},"Cerca",-1),Pe={class:"field col-2 flex flex-column"},Ce=o("label",null,"Stato",-1),Ie={class:"field col-2 flex flex-column"},ze=o("label",null,"Voucher",-1),Ue={class:"field col-2 flex flex-column"},Be=o("label",null,"Prenotato da",-1),Fe={class:"field col-2 flex flex-column"},qe=o("label",null,"Tipologia",-1),Ae={class:"field col-2 flex flex-column"},Ne=o("label",null,"Location",-1),Re={class:"field col-2 flex flex-column"},Me=o("label",null,"Prodotto",-1),Ee={class:"field col-2 flex flex-column"},Ke=o("label",null,"Acquisto",-1),je={class:"field col-2"},Ge=o("label",{for:"ot_date_from"},"Dal",-1),We={class:"field col-2"},Qe=o("label",{for:"ot_date_to"},"Al",-1),He={class:"flex col-12 align-items-center pt-1"};function Je(i,n,m,e,p,r){const s=b("InputText"),l=b("Dropdown"),g=b("Calendar"),f=b("Button"),k=b("AccordionTab"),x=b("Accordion");return d(),j(x,{activeIndex:0},{default:V(()=>[c(k,{header:"FILTRI"},{default:V(()=>[o("div",De,[o("div",Le,[Oe,c(s,{id:"ot_search",type:"text",class:"w-full",modelValue:e.form.search,"onUpdate:modelValue":n[0]||(n[0]=t=>e.form.search=t),placeholder:"Codice voucher, codice interno, n. ordine o email acquirente"},null,8,["modelValue"])]),o("div",Pe,[Ce,c(l,{modelValue:e.form.status,"onUpdate:modelValue":n[1]||(n[1]=t=>e.form.status=t),options:e.statuses,optionLabel:"name",optionValue:"value"},null,8,["modelValue","options"])]),o("div",Ie,[ze,c(l,{modelValue:e.form.legacy,"onUpdate:modelValue":n[2]||(n[2]=t=>e.form.legacy=t),options:e.legacyOptions,optionLabel:"name",optionValue:"value"},null,8,["modelValue","options"])]),o("div",Ue,[Be,c(l,{modelValue:e.form.channel,"onUpdate:modelValue":n[3]||(n[3]=t=>e.form.channel=t),options:e.channels,optionLabel:"name",optionValue:"value"},null,8,["modelValue","options"])]),o("div",Fe,[qe,c(l,{modelValue:e.form.kind,"onUpdate:modelValue":n[4]||(n[4]=t=>e.form.kind=t),options:e.kinds,optionLabel:"name",optionValue:"value"},null,8,["modelValue","options"])]),o("div",Ae,[Ne,c(l,{modelValue:e.form.location_id,"onUpdate:modelValue":n[5]||(n[5]=t=>e.form.location_id=t),options:e.locationOptions,optionLabel:"name",optionValue:"value",onChange:n[6]||(n[6]=t=>e.onLocationChange())},null,8,["modelValue","options"])]),o("div",Re,[Me,c(l,{modelValue:e.form.open_ticket_id,"onUpdate:modelValue":n[7]||(n[7]=t=>e.form.open_ticket_id=t),options:e.productOptions,optionLabel:"name",optionValue:"value",disabled:e.form.location_id==="all",loading:e.productsLoading},null,8,["modelValue","options","disabled","loading"])]),o("div",Ee,[Ke,c(l,{modelValue:e.form.period,"onUpdate:modelValue":n[8]||(n[8]=t=>e.form.period=t),options:e.periods,optionLabel:"name",optionValue:"value"},null,8,["modelValue","options"])]),e.form.period==="custom"?(d(),_(C,{key:0},[o("div",je,[Ge,c(g,{inputId:"ot_date_from",modelValue:e.form.date_from,"onUpdate:modelValue":n[9]||(n[9]=t=>e.form.date_from=t),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])]),o("div",We,[Qe,c(g,{inputId:"ot_date_to",modelValue:e.form.date_to,"onUpdate:modelValue":n[10]||(n[10]=t=>e.form.date_to=t),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])])],64)):w("",!0)]),o("div",He,[c(f,{label:"Ricerca",class:"ml-auto mr-2",onClick:n[11]||(n[11]=t=>i.$emit("onSubmit",e.form))}),c(f,{label:"Annulla",class:"p-button-outlined",onClick:n[12]||(n[12]=t=>e.onReset())})])]),_:1})]),_:1})}const Xe=N(Se,[["render",Je]]);var Ye=`
@layer primevue {
    .p-timeline {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
    }

    .p-timeline-left .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-left .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event {
        flex-direction: row-reverse;
    }

    .p-timeline-right .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-right .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: row-reverse;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {
        text-align: right;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {
        text-align: left;
    }

    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {
        text-align: right;
    }

    .p-timeline-event {
        display: flex;
        position: relative;
        min-height: 70px;
    }

    .p-timeline-event:last-child {
        min-height: 0;
    }

    .p-timeline-event-opposite {
        flex: 1;
        padding: 0 1rem;
    }

    .p-timeline-event-content {
        flex: 1;
        padding: 0 1rem;
    }

    .p-timeline-event-separator {
        flex: 0;
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    .p-timeline-event-marker {
        display: flex;
        align-self: baseline;
    }

    .p-timeline-event-connector {
        flex-grow: 1;
    }

    .p-timeline-horizontal {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event {
        flex-direction: column;
        flex: 1;
    }

    .p-timeline-horizontal .p-timeline-event:last-child {
        flex: 0;
    }

    .p-timeline-horizontal .p-timeline-event-separator {
        flex-direction: row;
    }

    .p-timeline-horizontal .p-timeline-event-connector {
        width: 100%;
    }

    .p-timeline-bottom .p-timeline-event {
        flex-direction: column-reverse;
    }

    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {
        flex-direction: column-reverse;
    }
}
`,Ze={root:function(n){var m=n.props;return["p-timeline p-component","p-timeline-"+m.align,"p-timeline-"+m.layout]},event:"p-timeline-event",opposite:"p-timeline-event-opposite",separator:"p-timeline-event-separator",marker:"p-timeline-event-marker",connector:"p-timeline-event-connector",content:"p-timeline-event-content"},$e=ve.extend({name:"timeline",css:Ye,classes:Ze}),eo={name:"BaseTimeline",extends:he,props:{value:null,align:{mode:String,default:"left"},layout:{mode:String,default:"vertical"},dataKey:null},style:$e,provide:function(){return{$parentInstance:this}}},ie={name:"Timeline",extends:eo,methods:{getKey:function(n,m){return this.dataKey?_e.resolveFieldData(n,this.dataKey):m},getPTOptions:function(n,m){return this.ptm(n,{context:{index:m,count:this.value.length}})}}};function oo(i,n,m,e,p,r){return d(),_("div",P({class:i.cx("root")},i.ptm("root"),{"data-pc-name":"timeline"}),[(d(!0),_(C,null,$(i.value,function(s,l){return d(),_("div",P({key:r.getKey(s,l),class:i.cx("event")},r.getPTOptions("event",l)),[o("div",P({class:i.cx("opposite",{index:l})},r.getPTOptions("opposite",l)),[q(i.$slots,"opposite",{item:s,index:l})],16),o("div",P({class:i.cx("separator")},r.getPTOptions("separator",l)),[q(i.$slots,"marker",{item:s,index:l},function(){return[o("div",P({class:i.cx("marker")},r.getPTOptions("marker",l)),null,16)]}),l!==i.value.length-1?q(i.$slots,"connector",{key:0,item:s,index:l},function(){return[o("div",P({class:i.cx("connector")},r.getPTOptions("connector",l)),null,16)]}):w("",!0)],16),o("div",P({class:i.cx("content")},r.getPTOptions("content",l)),[q(i.$slots,"content",{item:s,index:l})],16)],16)}),128))],16)}ie.render=oo;const to={props:{voucherId:{type:String,required:!0}},emits:["updated"],setup(i,n){Z(async()=>{e(),await r.fetchVoucher(i.voucherId).then(()=>{p()}).catch(h=>{p(),I(m,h)})});const m=K(),{showLoader:e,hideLoader:p}=ae(),r=G(),s=we(),l=L(()=>{var h;return((h=r.getCurrentVoucher)==null?void 0:h.id)===i.voucherId?r.getCurrentVoucher:null}),g=L(()=>le(l.value?l.value.status:"valid")),f=L(()=>{var D;const h=((D=l.value)==null?void 0:D.order.status)??"",S=s.paymentStatus.find(z=>z.id===h);return S?S.name:h}),k=L(()=>{var D;const h=(D=l.value)==null?void 0:D.order.payment_method;if(!h)return"—";const S=s.paymentModeList.find(z=>z.id===h);return S?S.label:h});return{voucher:l,meta:g,paymentStatusLabel:f,paymentModeLabel:k,downloadPdf:async function(){e(),await r.downloadVoucherPdf(i.voucherId).then(()=>{p()}).catch(h=>{p(),I(m,h)})},resend:async function(){e(),await r.resendVoucher(i.voucherId).then(h=>{p(),Te(m,{message:`PDF reinviato a ${h.buyer.email}`,error:!1}),n.emit("updated")}).catch(h=>{p(),I(m,h)})},channelLabel:ee,eventAuthorLabel:ge,eventTypeLabel:ye,formatIsoDate:oe,formatUnixDateTime:be,formatPrice:ke,kindLabel:te,personName:xe}},components:{Tag:ne,Timeline:ie}},no={key:0},lo={class:"flex align-items-center gap-3 mb-4"},ao={class:"ot-code text-3xl font-bold"},io={key:0,class:"ot-chip legacy"},so={class:"grid"},co=o("div",{class:"col-4 text-color-secondary"},"Codice interno",-1),ro={class:"col-8 ot-code"},uo=o("div",{class:"col-4 text-color-secondary"},"Prodotto",-1),mo={class:"col-8"},vo=o("div",{class:"col-4 text-color-secondary"},"Prezzo",-1),_o={class:"col-8"},ho=o("div",{class:"col-4 text-color-secondary"},"Extra",-1),po={class:"col-8"},fo=o("div",{class:"col-4 text-color-secondary"},"Vale su",-1),go={class:"col-8"},yo=o("div",{class:"col-4 text-color-secondary"},"Acquisto",-1),bo={class:"col-8"},ko=o("div",{class:"col-4 text-color-secondary"},"Location di acquisto",-1),xo={class:"col-8"},Vo=o("div",{class:"col-4 text-color-secondary"},"Scadenza",-1),To={class:"col-8"},wo=o("div",{class:"banner mt-4"},[o("h3",null,"Ordine")],-1),So={class:"grid"},Do=o("div",{class:"col-4 text-color-secondary"},"N. ordine",-1),Lo={class:"col-8 ot-code"},Oo=o("div",{class:"col-4 text-color-secondary"},"Stato pagamento",-1),Po={class:"col-8"},Co=o("div",{class:"col-4 text-color-secondary"},"Modalità di pagamento",-1),Io={class:"col-8"},zo=o("div",{class:"col-4 text-color-secondary"},"Data",-1),Uo={class:"col-8"},Bo=o("div",{class:"banner mt-4"},[o("h3",null,"Acquirente")],-1),Fo={class:"grid"},qo=o("div",{class:"col-4 text-color-secondary"},"Nome",-1),Ao={class:"col-8"},No=o("div",{class:"col-4 text-color-secondary"},"Email",-1),Ro={class:"col-8"},Mo=o("div",{class:"col-4 text-color-secondary"},"Telefono",-1),Eo={class:"col-8"},Ko=o("div",{class:"banner mt-4"},[o("h3",null,"Prenotazione")],-1),jo={key:0,class:"grid"},Go=o("div",{class:"col-4 text-color-secondary"},"Data e ora",-1),Wo={class:"col-8"},Qo=o("div",{class:"col-4 text-color-secondary"},"Percorso",-1),Ho={class:"col-8"},Jo=o("div",{class:"col-4 text-color-secondary"},"N. prenotazione",-1),Xo={class:"col-8 ot-code"},Yo=o("div",{class:"col-4 text-color-secondary"},"Canale",-1),Zo={class:"col-8"},$o=o("div",{class:"col-4 text-color-secondary"},"Operatore",-1),et={class:"col-8"},ot=o("div",{class:"col-4 text-color-secondary"},"Prenotata il",-1),tt={class:"col-8"},nt=o("div",{class:"col-4 text-color-secondary"},"Referente",-1),lt={class:"col-8"},at={key:0},it={key:1},st={key:1},ct={key:2},rt=o("div",{class:"banner mt-4"},[o("h3",null,"Cronologia")],-1),dt={key:4},ut=o("small",{class:"block mt-3"},"Il PDF non ha anteprima: si scarica o si reinvia all'email dell'acquirente. Per i voucher storici si reinvia l'email originale dell'ordine.",-1),mt={class:"flex justify-content-end mt-4"};function vt(i,n,m,e,p,r){var f,k,x;const s=b("Tag"),l=b("Timeline"),g=b("Button");return e.voucher?(d(),_("div",no,[o("div",lo,[o("span",ao,a(e.voucher.voucher_code??"—"),1),e.voucher.legacy?(d(),_("span",io,"Storico")):w("",!0),c(s,{value:e.meta.label,severity:e.meta.severity,class:A(e.meta.cls)},null,8,["value","severity","class"])]),o("div",so,[co,o("div",ro,a(e.voucher.code),1),uo,o("div",mo,[B(a(e.voucher.product_name)+" ",1),o("span",{class:A(["ot-chip ml-2",e.voucher.kind==="multi_location"?"multi":"single"])},a(e.kindLabel(e.voucher.kind)),3)]),vo,o("div",_o,a(e.formatPrice(e.voucher.price)),1),e.voucher.extra?(d(),_(C,{key:0},[ho,o("div",po,a(e.voucher.extra),1)],64)):w("",!0),fo,o("div",go,[(d(!0),_(C,null,$(e.voucher.valid_for,t=>(d(),_("div",{key:t.location},a(t.courses.length>0?`${t.location}: ${t.courses.join(", ")}`:t.location),1))),128))]),yo,o("div",bo,a(e.formatUnixDateTime(e.voucher.purchased_at)),1),ko,o("div",xo,a(e.voucher.location_name),1),Vo,o("div",To,a(e.formatIsoDate(e.voucher.expires_on)),1)]),wo,o("div",So,[Do,o("div",Lo,a(e.voucher.order.reservation_number),1),Oo,o("div",Po,a(e.paymentStatusLabel),1),Co,o("div",Io,a(e.paymentModeLabel),1),zo,o("div",Uo,a(e.formatUnixDateTime(e.voucher.order.created_at)),1)]),Bo,o("div",Fo,[qo,o("div",Ao,a(e.personName(e.voucher.buyer)),1),No,o("div",Ro,a(e.voucher.buyer.email??"—"),1),Mo,o("div",Eo,a(e.voucher.buyer.phone??"—"),1)]),Ko,e.voucher.booking?(d(),_("div",jo,[Go,o("div",Wo,a(e.formatIsoDate(e.voucher.booking.date))+" · "+a(e.voucher.booking.start_at),1),Qo,o("div",Ho,a(e.voucher.booking.course_name),1),Jo,o("div",Xo,a(e.voucher.booking.reservation_number),1),Yo,o("div",Zo,a(e.channelLabel(e.voucher.booking.channel)),1),e.voucher.booking.operator_name?(d(),_(C,{key:0},[$o,o("div",et,a(e.voucher.booking.operator_name),1)],64)):w("",!0),ot,o("div",tt,a(e.formatUnixDateTime(e.voucher.booking.booked_at)),1),nt,o("div",lt,[B(a(e.personName(e.voucher.booking.contact))+" ",1),(f=e.voucher.booking.contact)!=null&&f.email?(d(),_("div",at,a(e.voucher.booking.contact.email),1)):w("",!0),(k=e.voucher.booking.contact)!=null&&k.phone?(d(),_("div",it,a(e.voucher.booking.contact.phone),1)):w("",!0)])])):e.voucher.legacy?(d(),_("div",st,"Solo per telefono")):(d(),_("div",ct,"—")),rt,e.voucher.events.length>0?(d(),j(l,{key:3,value:e.voucher.events},{content:V(({item:t})=>[o("b",null,a(e.eventTypeLabel(t.event_type)),1),o("div",null,[o("small",null,a(e.formatUnixDateTime(t.created_at))+" · "+a(e.eventAuthorLabel(t)),1)])]),_:1},8,["value"])):(d(),_("div",dt,"Nessun evento registrato")),ut,o("div",mt,[c(g,{label:"Scarica PDF",outlined:"",class:"mr-2",disabled:!e.voucher.pdf_available,onClick:n[0]||(n[0]=t=>e.downloadPdf())},null,8,["disabled"]),c(g,{label:"Reinvia all'acquirente",disabled:!((x=e.voucher.buyer)!=null&&x.email),onClick:n[1]||(n[1]=t=>e.resend())},null,8,["disabled"])])])):w("",!0)}const _t=N(to,[["render",vt]]),ht={props:["filters"],setup(i){const n=K(),{showLoader:m,hideLoader:e}=ae(),p=G(),r=T(),s=T(!1),l=T({first:0,rows:30,page:0,sortField:null,sortOrder:null}),g=T(!1),f=T(null),k=L(()=>p.responseVouchers),x=function(){s.value=!0,h()},t=function(v){const u=i.filters??{};u.search&&v.set("q",u.search),["status","legacy","channel","kind","location_id"].forEach(U=>{u[U]&&u[U]!=="all"&&v.set(U,u[U])}),u.location_id&&u.location_id!=="all"&&u.open_ticket_id&&u.open_ticket_id!=="all"&&v.set("open_ticket_id",u.open_ticket_id),u.period==="last_12_months"?v.set("purchased_from",X.local().minus({months:12}).toISODate()):u.period==="last_30_days"?v.set("purchased_from",X.local().minus({days:30}).toISODate()):u.period==="custom"&&(u.date_from&&v.set("purchased_from",Y(u.date_from)),u.date_to&&v.set("purchased_to",Y(u.date_to))),v.set("page",l.value.page+1),v.set("per_page",l.value.rows)},h=async function(){const v=new Map;t(v),await p.fetchVouchers(v).then(()=>{s.value=!1}).catch(u=>{s.value=!1,I(n,u)})};return{dt:r,loading:s,lazyParams:l,visible:g,currentId:f,responseVouchers:k,loadLazyData:x,downloadCsv:async function(){const v=new Map;t(v),v.delete("page"),v.delete("per_page"),m(),await p.downloadVouchersCsv(v).then(()=>{e()}).catch(u=>{e(),I(n,u)})},onPage:v=>{l.value=v,x()},openDetail:function(v){f.value=v.id,g.value=!0},channelLabel:ee,formatIsoDate:oe,formatUnixDate:Ve,kindLabel:te,voucherStatusMeta:le}},components:{OpenTicketVoucherDialog:_t,Tag:ne}},pt={class:"mt-4"},ft={key:0,class:"ot-code font-bold"},gt=o("span",null,"—",-1),yt=o("span",{class:"ot-chip legacy ml-2"},"Storico",-1),bt={class:"ot-code"},kt={class:"mt-1"},xt={class:"ot-chip channel"},Vt={key:1},Tt={key:2},wt=o("small",{class:"block mt-3"},"Il canale indica chi ha fatto la prenotazione: il cliente online (Web) o un operatore (Biglietteria). Gli storici non hanno codice voucher: si cercano per codice interno o n. ordine.",-1);function St(i,n,m,e,p,r){const s=b("Column"),l=b("Tag"),g=b("Button"),f=b("DataTable"),k=b("OpenTicketVoucherDialog"),x=b("Dialog");return d(),_("div",pt,[c(f,{value:e.responseVouchers.order_open_tickets,totalRecords:e.responseVouchers.total,lazy:!0,paginator:!0,rows:30,ref:"dt",loading:e.loading,stripedRows:"",onPage:n[0]||(n[0]=t=>e.onPage(t))},{empty:V(()=>[B(" Nessun open ticket trovato. ")]),default:V(()=>[c(s,{header:"Codice voucher"},{body:V(({data:t})=>[t.voucher_code?(d(),_("span",ft,a(t.voucher_code),1)):(d(),_(C,{key:1},[gt,yt],64))]),_:1}),c(s,{header:"Codice interno"},{body:V(({data:t})=>[o("span",bt,a(t.code),1)]),_:1}),c(s,{header:"Prodotto"},{body:V(({data:t})=>[B(a(t.product_name)+" ",1),o("div",kt,[o("span",{class:A(["ot-chip",t.kind==="multi_location"?"multi":"single"])},a(e.kindLabel(t.kind)),3)])]),_:1}),c(s,{header:"Acquisto"},{body:V(({data:t})=>[B(a(e.formatUnixDate(t.purchased_at)),1)]),_:1}),c(s,{header:"Scadenza"},{body:V(({data:t})=>[B(a(e.formatIsoDate(t.expires_on)),1)]),_:1}),c(s,{header:"Stato"},{body:V(({data:t})=>[c(l,{value:e.voucherStatusMeta(t.status).label,severity:e.voucherStatusMeta(t.status).severity,class:A(e.voucherStatusMeta(t.status).cls)},null,8,["value","severity","class"])]),_:1}),c(s,{header:"Prenotazione · canale"},{body:V(({data:t})=>[t.booking?(d(),_(C,{key:0},[o("div",null,a(e.formatIsoDate(t.booking.date))+" · "+a(t.booking.start_at),1),o("span",xt,a(e.channelLabel(t.booking.channel)),1)],64)):t.legacy?(d(),_("span",Vt,"Solo per telefono")):(d(),_("span",Tt,"—"))]),_:1}),c(s,{header:""},{body:V(({data:t})=>[c(g,{link:"",label:"Dettaglio",onClick:h=>e.openDetail(t)},null,8,["onClick"])]),_:1})]),_:1},8,["value","totalRecords","loading"]),wt,c(x,{visible:e.visible,"onUpdate:visible":n[2]||(n[2]=t=>e.visible=t),modal:"",header:"Open ticket",style:{width:"48rem"}},{default:V(()=>[e.visible&&e.currentId?(d(),j(k,{key:0,voucherId:e.currentId,onUpdated:n[1]||(n[1]=t=>e.loadLazyData())},null,8,["voucherId"])):w("",!0)]),_:1},8,["visible"])])}const Dt=N(ht,[["render",St]]),Lt={setup(){const i=T({}),n=T();return{filters:i,table:n,onFilter:async function(e){var p;i.value={...e},await pe(),(p=n.value)==null||p.loadLazyData()}}},components:{OpenTicketVoucherFilter:Xe,OpenTicketVoucherTable:Dt}},Ot={class:"flex justify-content-between align-items-center"},Pt=o("h1",null,"Open ticket emessi",-1);function Ct(i,n,m,e,p,r){const s=b("Button"),l=b("OpenTicketVoucherFilter"),g=b("OpenTicketVoucherTable");return d(),_("div",null,[o("div",Ot,[Pt,c(s,{label:"Esporta CSV",icon:"pi pi-download",outlined:"",rounded:"",onClick:n[0]||(n[0]=f=>e.table.downloadCsv())})]),c(l,{onOnSubmit:n[1]||(n[1]=f=>e.onFilter(f))}),c(g,{filters:e.filters,ref:"table"},null,8,["filters"])])}const Rt=N(Lt,[["render",Ct]]);export{Rt as default};
