import{o as w,a as E,l as m,c as A,x as N,i as L,_ as x,r as d,q as O,b as T,m as j,w as y,h as z,f as r,g as f,s as B,y as F,B as P,e as q}from"../index79211.js";import{e as C,p as M,a as W,s as k,u as $}from"./helpers79211.js";import{f as R,a as G}from"./formatData79211.js";import{u as I}from"./attraction79211.js";import{c as H,a as V}from"./index.esm79211.js";import{F as K}from"./vee-validate.esm79211.js";import{I as J}from"./InputTextWithValidation79211.js";import"./datetime79211.js";/* empty css                                                                            */const Q={props:["attraction_id"],setup(o){w(()=>{n.value=!0,c.value={first:0,rows:a.value.rows,sortField:null,sortOrder:null},c.value.page=0,D()});const t=E(),a=m(),e=m(),b=m(),p=m(),n=m(!0),c=m(),l=m(0),u=I(),s=A(()=>u.responseAttractions),i=N(),v=A(()=>i.submitDialog);function D(){n.value=!0,setTimeout(()=>{S()},Math.random()*1e3+250)}const S=async function(){await u.fetchAllAttractions().then(()=>{n.value=!1}).catch(g=>{n.value=!1,C(t,g)})},_=function(g){p.value=g;let U="Sei sicuro di voler eliminare questo bene?";i.setDialog("Elimina bene","Elimina","Annulla",U),i.setBtnSubmit(!1),i.setDynamicDialogVisibility(!0)},h=async function(){await u.deleteAttraction(p.value).then(()=>{n.value=!1,k(t,{message:"Bene eliminato correttamente",error:!1}),D()}).catch(g=>{n.value=!1,C(t,g)})};return L(v,g=>{g&&h()}),{dt:a,responseAttractions:s,loading:n,totalRecords:l,lazyParams:c,currentOrder:e,op:b,loadLazyData:D,onDeleteAttraction:h,confirmDelete:_,formatDataAndHourFromUnixTimestamps:R,formatPrettyDate:G,prettyPaymentStatus:M,prettyTicketType:W}}},X={class:"flex justify-content-center"};function Y(o,t,a,e,b,p){const n=d("Column"),c=d("InputSwitch"),l=d("Button"),u=d("DataTable"),s=O("tooltip");return T(),j(u,{value:e.responseAttractions.attractions,lazy:!0,paginator:!1,ref:"dt",loading:e.loading,stripedRows:""},{empty:y(()=>[z(" Nessun bene trovato. ")]),default:y(()=>[r(n,{header:"Nome",field:"name"}),r(n,{header:"Link prenotazione biglietti",field:"permalink"}),r(n,{header:""},{body:y(({data:i})=>[r(c,{modelValue:i.online,"onUpdate:modelValue":v=>i.online=v},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),r(n,{header:""},{body:y(({data:i})=>[f("div",X,[B(r(l,{link:"",icon:"pi pi-pencil",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:v=>o.$emit("onEdit",i)},null,8,["onClick"]),[[s,"Modifica",void 0,{top:!0}]]),B(r(l,{link:"",icon:"pi pi-trash",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:v=>e.confirmDelete(i.id)},null,8,["onClick"]),[[s,"Elimina",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","loading"])}const Z=x(Q,[["render",Y]]);class tt{static async fetchAll(){return(await F("/admin/attractions/categories")).data}}const et=P({id:"category",state:()=>({category:{},categories:[],response_categories:{}}),getters:{allCategories:o=>o.categories,responseCategories:o=>o.response_categories,getTotalCategories:o=>o.response_categories?o.response_categories.total:0,getCurrentCategory:o=>o.category},actions:{async fetchAllCategories(){await tt.fetchAll().then(o=>{this.response_categories=this.addPrettyCategory(o.categories),this.categories=this.addPrettyCategory(o.categories)})},addPrettyCategory(o){const t=[];return o.forEach(a=>{a=="kalata"&&t.push({label:"Kalatà",value:a}),a=="abbonamento_musei"&&t.push({label:"Abbonamento musei",value:a})}),t}}}),ot={props:["attraction"],setup(o,t){w(()=>{var _;o.attraction&&o.attraction.id&&(a.value=Object.assign({},o.attraction),a.value.price=(_=a.value.ticket_configurations[0])==null?void 0:_.price,delete a.value.ticket_configurations),S()});const a=m({}),e=H({name:V().required("Nome bene obbligatorio"),address:V().required("Luogo di ritrovo obbligatorio"),price:V().required("Importo biglietto obbligatorio")}),{showLoader:b,hideLoader:p}=$(),n=E(),c=I(),l=et(),u=A(()=>c.allAttractions),s=A(()=>l.allCategories),i=function(){b();const _=Object.assign({},a.value);_.ticket_configurations=[{price:_.price,name:"Biglietto intero"}];const h={attraction:_};c.addAttraction(h).then(()=>{p(),k(n,{message:"Bene aggiunto correttamente",error:!1}),t.emit("onSubmit")}).catch(g=>{p(),C(n,g)})},v=function(){b();const h={attraction:Object.assign({},a.value)};c.updateAttraction(h).then(()=>{p(),k(n,{message:"Chiusura modificata correttamente",error:!1}),t.emit("onSubmit")}).catch(g=>{p(),C(n,g)})},D=function(){a.value.id?v():i()},S=async function(){await l.fetchAllCategories()};return L(s,()=>{a.value.category||(a.value.category=s.value[0])}),{form:a,schema:e,onSubmit:D,attractions:u,categories:s}},components:{Form:K,InputTextWithValidation:J}},at={class:"formgrid grid mt-3"},nt={class:"field col-12"},it={class:"field col-12"},rt={class:"field col-12"},st={class:"field col-12 flex flex-column"},lt=f("label",{for:"category"},"Categoria",-1),ct={class:"flex align-items-center col-12"},dt=f("label",{for:"free_ticket",class:"ml-2"}," Biglietto gratuito ",-1),ut={class:"flex align-items-center justify-content-end mt-6"};function mt(o,t,a,e,b,p){const n=d("InputTextWithValidation"),c=d("Dropdown"),l=d("Checkbox"),u=d("Button"),s=d("Form");return T(),j(s,{onSubmit:e.onSubmit,"validation-schema":e.schema},{default:y(()=>[f("div",at,[f("div",nt,[r(n,{name:"name",label:"Nome bene*",modelValue:e.form.name,"onUpdate:modelValue":t[0]||(t[0]=i=>e.form.name=i)},null,8,["modelValue"])]),f("div",it,[r(n,{name:"address",label:"Luogo di ritrovo*",modelValue:e.form.address,"onUpdate:modelValue":t[1]||(t[1]=i=>e.form.address=i)},null,8,["modelValue"])]),f("div",rt,[r(n,{name:"price",label:"Importo biglietto*",modelValue:e.form.price,"onUpdate:modelValue":t[2]||(t[2]=i=>e.form.price=i)},null,8,["modelValue"])]),f("div",st,[lt,r(c,{modelValue:e.form.category,"onUpdate:modelValue":t[3]||(t[3]=i=>e.form.category=i),options:e.categories,optionLabel:"label",optionValue:"value",placeholder:"",name:"category"},null,8,["modelValue","options"])])]),f("div",ct,[r(l,{modelValue:e.form.free_ticket,"onUpdate:modelValue":t[4]||(t[4]=i=>e.form.free_ticket=i),inputId:"free_ticket",binary:""},null,8,["modelValue"]),dt]),f("div",ut,[r(u,{label:"Annulla",text:""}),r(u,{label:"Conferma",type:"submit"})])]),_:1},8,["onSubmit","validation-schema"])}const ft=x(ot,[["render",mt]]),pt={setup(){w(()=>{});const o=m(!1),t=m({}),a=m(),e=m();return{form:t,attractionTable:a,visibleDialog:o,currentAttraction:e,filterTable:function(l){t.value=l,a.value.loadLazyData()},onShowDialog:function(){e.value={},o.value=!0},onEdit:function(l){e.value=l,o.value=!0},onSubmit:function(){a.value.loadLazyData(),o.value=!1}}},components:{AttractionTable:Z,AttractionDialog:ft}},gt=f("h1",null,"Beni",-1),_t={class:"flex justify-content-end mt-4 mb-3"};function bt(o,t,a,e,b,p){const n=d("Button"),c=d("AttractionTable"),l=d("AttractionDialog"),u=d("Dialog");return T(),q("div",null,[gt,f("div",_t,[r(n,{label:"Bene",icon:"pi pi-plus",rounded:"",outlined:"",onClick:t[0]||(t[0]=s=>e.onShowDialog())})]),r(c,{filters:e.form,ref:"attractionTable",onOnEdit:t[1]||(t[1]=s=>e.onEdit(s))},null,8,["filters"]),r(u,{visible:e.visibleDialog,"onUpdate:visible":t[3]||(t[3]=s=>e.visibleDialog=s),modal:"",header:"Bene",style:{width:"35rem"}},{default:y(()=>[r(l,{attraction:e.currentAttraction,onOnSubmit:t[2]||(t[2]=s=>e.onSubmit())},null,8,["attraction"])]),_:1},8,["visible"])])}const wt=x(pt,[["render",bt]]);export{wt as default};
