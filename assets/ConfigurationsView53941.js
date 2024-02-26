import{u as he}from"./location53941.js";import{u as te,e as A,s as N}from"./helpers53941.js";import{y as W,A as ne,C as ie,z as ae,B as se,o as H,l as h,a as Q,c as B,i as R,_ as G,r as _,p as X,b as j,v as Y,w as b,g as l,f as a,e as M,s as ce,h as F,t as O,q as P,x as de,F as q,D as oe}from"../index53941.js";import{c as ue,a as me}from"./index.esm53941.js";import{F as _e}from"./vee-validate.esm53941.js";import{I as fe}from"./InputTextWithValidation53941.js";import{u as ge}from"./category53941.js";import{e as re,g as Z,a as ve,b as pe}from"./formatData53941.js";import{D as Ce}from"./datetime53941.js";import"./attraction53941.js";import"./_commonjsHelpers53941.js";/* empty css                                                                            */class ${static async fetchAll(e){return(await W(`/admin/locations/${e}/courses`)).data}static async addCourse(e){return(await ne(`/admin/locations/${e.location_id}/courses`,e)).data.course}static async updateCourse(e){return(await ie(`/admin/locations/${e.location_id}/courses/${e.course.id}`,e)).data.course}static async deleteCourse(e){return await ae(`/admin/courses/${e}`)}}const be=se({id:"course",state:()=>({course:{},courses:[],response_courses:{}}),getters:{allCourses:t=>t.courses,responseCourses:t=>t.response_courses,getTotalCourses:t=>t.response_courses?t.response_courses.total:0,getCurrentCourse:t=>t.course},actions:{async fetchAllCourses(t){await $.fetchAll(t).then(e=>{this.response_courses=e,this.courses=e.courses})},async addCourse(t){await $.addCourse(t).then(e=>{this.course=e})},async updateCourse(t){await $.updateCourse(t).then(e=>{this.course=e})},async deleteCourse(t){await $.deleteCourse(t).then()}}});class ee{static async fetchAll(e){return(await W(`/admin/courses/${e}/tickets`)).data}static async addTicket(e){return await ne(`/admin/courses/${e.course_id}/tickets`,e)}static async updateTicket(e){return await ie(`/admin/courses/${e.course_id}/tickets/${e.ticket.id}`,e)}static async deleteTicket(e){return await ae(`/admin/courses/${e.course_id}/tickets/${e.ticket_id}`)}}const ye=se({id:"ticket",state:()=>({ticket:{},tickets:[],response_tickets:{}}),getters:{allTickets:t=>t.tickets,responseTickets:t=>t.response_tickets,getTotalTickets:t=>t.response_tickets?t.response_tickets.total:0,getCurrentTicket:t=>t.ticket},actions:{async fetchAllTickets(t){await ee.fetchAll(t).then(e=>{this.response_tickets=e,this.tickets=e.tickets})},async addTicket(t){await ee.addTicket(t).then()},async updateTicket(t){await ee.updateTicket(t).then()},async deleteTicket(t){await ee.deleteTicket(t).then()}}}),we={props:["course","location_id"],setup(t,e){H(()=>{t.course&&t.course.id&&(n.value=Object.assign({},t.course),i()),n.value.tickets=[]});const n=h({}),o=h([]),S=ue({name:me().required("Nome percorso obbligatorio")}),{showLoader:D,hideLoader:c}=te(),r=Q(),v=be(),C=ge(),f=ye(),y=h(!1),p=B(()=>v.allCourses),s=B(()=>C.allCategories),k=B(()=>f.responseTickets),m=B(()=>v.getCurrentCourse),x=function(){D();const T={course:Object.assign({},n.value),location_id:t.location_id};v.addCourse(T).then(()=>{c(),N(r,{message:"Percorso aggiunto correttamente",error:!1}),e.emit("onSubmit")}).catch(z=>{c(),A(r,z)})},i=async function(){let u=t.course.id?t.course.id:m.value.id;D(),await f.fetchAllTickets(u).then(()=>{c()}).catch(T=>{c(),A(r,T)})},V=function(){D();const T={course:Object.assign({},n.value),location_id:t.location_id};v.updateCourse(T).then(()=>{c(),N(r,{message:"Percorso modificato correttamente",error:!1}),e.emit("onSubmit")}).catch(z=>{c(),A(r,z)})},E=function(){n.value.id?V():x()},L=function(){let u={name:"",description:"",price:0};n.value.tickets.push(u),o.value.push(u)},U=function(u,T){u.id?I(u):n.value.tickets.splice(T,1)},I=async function(u){const T={course_id:t.course.id?t.course.id:m.value.id,ticket_id:u.id};D(),await f.deleteTicket(T).then(()=>{c(),N(r,{message:"Biglietto eliminato correttamente",error:!1}),i()}).catch(z=>{c(),A(r,z)})},w=function(u){let{newData:T,index:z}=u;n.value.tickets[z]=T,T.id?d(T):g(T)},g=async function(u){const T={course_id:t.course.id?t.course.id:m.value.id,ticket:u};await f.addTicket(T).then(()=>{c(),N(r,{message:"Biglietto aggiunto correttamente",error:!1}),i()}).catch(z=>{c(),A(r,z)})},d=async function(u){const T={course_id:t.course.id?t.course.id:m.value.id,ticket:u};await f.updateTicket(T).then(()=>{c(),N(r,{message:"Biglietto aggiornato correttamente",error:!1}),i()}).catch(z=>{c(),A(r,z)})};return R(s,()=>{n.value.category||(n.value.category=s.value[0])}),R(k,()=>{k.value&&k.value.tickets.length>0&&(n.value.tickets=Object.assign([],k.value.tickets))}),R(m,()=>{n.value=Object.assign({},m.value)}),{form:n,schema:S,loading:y,editingRows:o,response_tickets:k,onSubmit:E,addTicket:L,onDeleteTicket:U,onRowEditSave:w,updateTicketsApi:d,courses:p,categories:s}},components:{Form:_e,InputTextWithValidation:fe}},xe={class:"formgrid grid mt-3"},Ve={class:"field col-12"},De={class:"field col-12"},Te=l("label",{for:"description"},"Descrizione",-1),Se={key:0,class:"flex justify-content-end mt-4 mb-3"},Ee={class:"w-full"},Ae={class:"flex justify-content-center"},Be={class:"flex align-items-center justify-content-end mt-6"};function Ue(t,e,n,o,S,D){const c=_("InputTextWithValidation"),r=_("Textarea"),v=_("Button"),C=_("InputText"),f=_("Column"),y=_("InputSwitch"),p=_("DataTable"),s=_("Form"),k=X("tooltip");return j(),Y(s,{onSubmit:o.onSubmit,"validation-schema":o.schema},{default:b(()=>[l("div",xe,[l("div",Ve,[a(c,{name:"name",label:"Nome percorso*",modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=m=>o.form.name=m)},null,8,["modelValue"])]),l("div",De,[Te,a(r,{rows:"5",cols:"30",name:"description",label:"Nome percorso*",modelValue:o.form.description,"onUpdate:modelValue":e[1]||(e[1]=m=>o.form.description=m),class:"w-full"},null,8,["modelValue"])])]),o.form.id?(j(),M("div",Se,[a(v,{label:"Tipologia biglietto",icon:"pi pi-plus",rounded:"",outlined:"",onClick:e[2]||(e[2]=m=>o.addTicket())})])):ce("",!0),o.form.id?(j(),Y(p,{key:1,value:o.form.tickets,ref:"dt",loading:o.loading,stripedRows:"",editingRows:o.editingRows,"onUpdate:editingRows":e[3]||(e[3]=m=>o.editingRows=m),editMode:"row",dataKey:"id",onRowEditSave:o.onRowEditSave},{empty:b(()=>[F(" Nessun biglietto trovato. ")]),default:b(()=>[a(f,{header:"Tipo biglietto",field:"name",style:{"min-width":"150px"}},{editor:b(({data:m,field:x})=>[a(C,{modelValue:m[x],"onUpdate:modelValue":i=>m[x]=i},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(f,{header:"Descrizione",field:"description"},{editor:b(({data:m,field:x})=>[l("div",Ee,[a(r,{modelValue:m[x],"onUpdate:modelValue":i=>m[x]=i,class:"w-full"},null,8,["modelValue","onUpdate:modelValue"])])]),_:1}),a(f,{header:"Prezzo",field:"price",bodyStyle:"min-width: 6rem"},{body:b(({data:m})=>[F(" € "+O((+m.price).toFixed(2)),1)]),editor:b(({data:m,field:x})=>[a(C,{modelValue:m[x],"onUpdate:modelValue":i=>m[x]=i},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(f,{header:"Stato",field:"public",bodyStyle:"min-width: 6rem"},{body:b(({data:m,field:x})=>[a(y,{modelValue:m[x],"onUpdate:modelValue":i=>m[x]=i,onChange:i=>o.updateTicketsApi(m)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),editor:b(({data:m,field:x})=>[a(y,{modelValue:m[x],"onUpdate:modelValue":i=>m[x]=i},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(f,{rowEditor:!0,bodyStyle:"text-align:center; padding-right:0;min-width: 6rem"}),a(f,{header:"",style:{width:"3rem","padding-left":"0"}},{body:b(({data:m,index:x})=>[l("div",Ae,[P(a(v,{link:"",icon:"pi pi-trash",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:i=>o.onDeleteTicket(m,x)},null,8,["onClick"]),[[k,"Elimina",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","loading","editingRows","onRowEditSave"])):ce("",!0),l("div",Be,[a(v,{label:"Annulla",text:"",onClick:e[4]||(e[4]=m=>t.$emit("onClose"))}),a(v,{label:"Conferma",type:"submit"})])]),_:1},8,["onSubmit","validation-schema"])}const je=G(we,[["render",Ue]]),ze={props:["location_id"],setup(t){H(()=>{D.value=!0,c.value={first:0,rows:n.value.rows,sortField:null,sortOrder:null},c.value.page=0,k()});const e=Q(),n=h(),o=h(),S=h(),D=h(!0),c=h(),r=h(0),v=h(!1),{showLoader:C,hideLoader:f}=te(),y=be(),p=B(()=>y.responseCourses),s=de();B(()=>s.submitDialog);function k(){C(),setTimeout(()=>{m()},Math.random()*1e3+250)}const m=async function(){D.value=!0,await y.fetchAllCourses(t.location_id).then(()=>{D.value=!1,f()}).catch(U=>{D.value=!1,f(),A(e,U)})},x=function(U){S.value=U,v.value=!0},i=function(U){S.value=U;let I="Sei sicuro di voler archiviare questo percorso?";s.setDialog("Archivia percorso","Archivia","Annulla",I),s.setBtnSubmit(!1),s.setDynamicDialogVisibility(!0)},V=function(U){C();const I={course:U,location_id:t.location_id};y.updateCourse(I).then(()=>{f(),N(e,{message:"Percorso modificato correttamente",error:!1}),m()}).catch(w=>{f(),A(e,w)})},E=function(){return S.value&&S.value.id?"Modifica percorso":"Aggiungi percorso"},L=function(){};return R(t,()=>{t.location_id&&m()}),{dt:n,responseCourses:p,loading:D,totalRecords:r,lazyParams:c,op:o,visible:v,currentCourse:S,loadLazyData:k,onEditCourse:x,closeDialog:L,getHeader:E,updateCourse:V,onArchiveCourse:i}},components:{CourseDialog:je}},Ie={class:"flex justify-content-end mt-4 mb-3"},Me={class:"flex justify-content-center"};function Re(t,e,n,o,S,D){const c=_("Button"),r=_("Column"),v=_("InputSwitch"),C=_("DataTable"),f=_("CourseDialog"),y=_("Dialog"),p=X("tooltip");return j(),M(q,null,[l("div",Ie,[a(c,{label:"Percorso",icon:"pi pi-plus",rounded:"",outlined:"",onClick:e[0]||(e[0]=s=>o.onEditCourse({}))})]),a(C,{value:o.responseCourses.courses,lazy:!0,paginator:!1,ref:"dt",loading:o.loading,stripedRows:""},{empty:b(()=>[F(" Nessun percorso trovato. ")]),default:b(()=>[a(r,{header:"Nome",field:"name"}),a(r,{header:"Tipologie biglietti"},{body:b(({data:s})=>[(j(!0),M(q,null,oe(s.tickets,k=>(j(),M("div",{key:k.id},O(k.name),1))),128))]),_:1}),a(r,{header:"Prezzo"},{body:b(({data:s})=>[(j(!0),M(q,null,oe(s.tickets,k=>(j(),M("div",{key:k.id}," € "+O((+k.price).toFixed(2)),1))),128))]),_:1}),a(r,{header:"Stato"},{body:b(({data:s})=>[a(v,{modelValue:s.public,"onUpdate:modelValue":k=>s.public=k,onChange:k=>o.updateCourse(s)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),_:1}),a(r,{header:""},{body:b(({data:s})=>[l("div",Me,[P(a(c,{link:"",icon:"pi pi-pencil",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:k=>o.onEditCourse(s),class:"mr-2"},null,8,["onClick"]),[[p,"Modifica",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","loading"]),a(y,{visible:o.visible,"onUpdate:visible":e[3]||(e[3]=s=>o.visible=s),modal:"",header:o.getHeader(),style:{width:"70rem"}},{default:b(()=>[a(f,{course:o.currentCourse,location_id:n.location_id,onOnSubmit:e[1]||(e[1]=s=>o.closeDialog()),onOnClose:e[2]||(e[2]=s=>o.visible=!1)},null,8,["course","location_id"])]),_:1},8,["visible","header"])],64)}const Le=G(ze,[["render",Re]]);class K{static async fetchAll(e){return e?(await W("/admin/booking_rules",e)).data:{}}static async getCourses(e){return(await W("/admin/booking_rules/courses",e)).data}static async getTickets(e){return(await W("/admin/booking_rules/tickets",e)).data}static async addConfiguration(e){return await ne("/admin/booking_rules",e)}static async updateConfiguration(e){return await ie(`/admin/booking_rules/${e.booking_rule.id}`,e)}static async deleteConfiguration(e){return e==null?{}:await ae(`/admin/booking_rules/${e}`)}}const le=se({id:"configuration",state:()=>({configuration:{},configurations:[],response_configurations:{},response_courses:{},response_tickets:{}}),getters:{allConfigurations:t=>t.configurations,responseConfigurations:t=>t.response_configurations,getTotalConfigurations:t=>t.response_configurations?t.response_configurations.total:0,getCurrentConfiguration:t=>t.configuration,responseCourses:t=>t.response_courses,responseTickets:t=>t.response_tickets},actions:{async fetchAllConfigurations(t){await K.fetchAll(t).then(e=>{this.response_configurations=e,this.configurations=e.configurations})},async getAllCourses(t){await K.getCourses(t).then(e=>{this.response_courses=e})},async getAllTickets(t){await K.getTickets(t).then(e=>{this.response_tickets=e})},async addConfiguration(t){await K.addConfiguration(t).then()},async updateConfiguration(t){await K.updateConfiguration(t).then()},async deleteConfiguration(t){t!=null&&await K.deleteConfiguration(t).then()}}}),Ne={props:["config","location_id","course_id","duplicate"],setup(t,e){H(()=>{t.config&&t.config.id?(n.value=Object.assign({},t.config),n.value.from_date&&(n.value.from_date=re(n.value.from_date)),n.value.to_date&&(n.value.to_date=re(n.value.to_date)),t.duplicate&&delete n.value.id):(n.value.location_id=t.location_id,n.value.course_id=t.course_id,n.value.booking_rule_slots=[]),w()});const n=h({}),o=h([]),S=h(!1),D=ue({name_config:me().required("Nome configurazione obbligatoria")}),{showLoader:c,hideLoader:r}=te(),v=Q(),C=ge(),f=h(!1),y=le(),p=B(()=>C.allCategories),s=B(()=>y.responseTickets),k=B(()=>y.responseCourses),m=function(){c();const g=Object.assign({},n.value);g.from_date&&(g.from_date=Z(g.from_date)),g.to_date&&(g.to_date=Z(g.to_date)),g.booking_rule_slots=[],n.value.booking_rule_slots&&n.value.booking_rule_slots.forEach(u=>{u.available_seats!=""&&u.start_at!=""&&g.booking_rule_slots.push(u)});const d={booking_rule:g};y.addConfiguration(d).then(()=>{r(),N(v,{message:"Configurazione aggiunta correttamente",error:!1}),e.emit("onSubmit",n.value.course_id)}).catch(u=>{r(),A(v,u)})},x=function(){c();const g=Object.assign({},n.value);g.from_date&&(g.from_date=Z(g.from_date)),g.to_date&&(g.to_date=Z(g.to_date)),g.booking_rule_slots=[],n.value.booking_rule_slots&&n.value.booking_rule_slots.forEach(u=>{u.available_seats!=""&&u.start_at!=""&&g.booking_rule_slots.push(u)});const d={booking_rule:g};y.updateConfiguration(d).then(()=>{r(),N(v,{message:"Configurazione modificata correttamente",error:!1}),e.emit("onSubmit",n.value.course_id)}).catch(u=>{r(),A(v,u)})},i=function(){n.value.id?x():m()},V=function(){let g={};g.price=0,n.value.tickets.unshift(g),o.value.push(n.value.tickets[0])},E=function(g){let{newData:d,index:u}=g;n.value.booking_rule_slots[u]=d;let z={start_at:"",available_seats:"",id:+n.value.booking_rule_slots[n.value.booking_rule_slots.length-1].id-1};n.value.booking_rule_slots.push(z),o.value=[z]},L=function(){let g={start_at:"",available_seats:"",id:"-1"};n.value.booking_rule_slots.push(g),o.value.push(g)},U=function(g,d){n.value.booking_rule_slots.splice(d,1)},I=function(g){g?n.value.wdays=[0,1,2,3,4,5,6]:n.value.wdays=[]},w=function(){const g=new Map;g.set("location_id",n.value.location_id),g.set("course_id",n.value.course_id),y.getAllTickets(g).catch(d=>{A(v,d)})};return R(p,()=>{n.value.category||(n.value.category=p.value[0])}),{form:n,schema:D,loading:f,editingRows:o,check_all:S,onSubmit:i,addTicket:V,onRowEditSave:E,checkAll:I,deleteSlot:U,addSlot:L,fetchAllTickets:w,categories:p,responseCourses:k,responseTickets:s}},components:{Form:_e,InputTextWithValidation:fe}};const Oe={class:"formgrid grid mt-3"},Pe={class:"field col-12"},Fe={class:"field flex flex-column col-6"},We=l("label",{for:"location"},"Percorso",-1),qe={class:"field col-3"},He=l("label",{from:"date_from"},"Dal",-1),Ge={class:"field col-3"},Ke=l("label",{from:"date_to"},"Al",-1),Je={class:"field col-12 mt-3"},Qe=l("label",null,"Giorni",-1),Xe={class:"card flex flex-wrap gap-3 mt-2"},Ye={class:"flex align-items-center mr-4"},Ze=l("label",{for:"all",class:"ml-2"}," Tutti i giorni ",-1),$e={class:"flex align-items-center"},eo=l("label",{for:"lun",class:"ml-2"}," Lun ",-1),oo={class:"flex align-items-center"},to=l("label",{for:"mar",class:"ml-2"}," Mar ",-1),no={class:"flex align-items-center"},io=l("label",{for:"mer",class:"ml-2"}," Mer ",-1),ao={class:"flex align-items-center"},so=l("label",{for:"gio",class:"ml-2"}," Gio ",-1),lo={class:"flex align-items-center"},co=l("label",{for:"ven",class:"ml-2"}," Ven ",-1),ro={class:"flex align-items-center"},uo=l("label",{for:"sab",class:"ml-2"}," Sab ",-1),mo={class:"flex align-items-center"},_o=l("label",{for:"dom",class:"ml-2"}," Dom ",-1),fo={class:"field col-3 mt-3"},go=l("label",null,"Biglietti",-1),po={for:"ticket.id",class:"ml-2 flex align-items-center"},vo={class:"inline-block",style:{"min-width":"150px"}},bo={class:"text-right"},ko=l("div",{class:"col-9"},null,-1),ho={class:"col-8 mt-3"},Co={class:"field flex justify-content-between align-items-end mt-4 mb-3"},yo=l("label",null,"Orari",-1),wo={class:"flex justify-content-center"},xo={class:"flex align-items-center justify-content-end mt-6"};function Vo(t,e,n,o,S,D){const c=_("InputTextWithValidation"),r=_("Dropdown"),v=_("Calendar"),C=_("Checkbox"),f=_("Button"),y=_("InputMask"),p=_("Column"),s=_("InputNumber"),k=_("DataTable"),m=_("Form"),x=X("tooltip");return j(),Y(m,{onSubmit:o.onSubmit,"validation-schema":o.schema},{default:b(()=>[l("div",Oe,[l("div",Pe,[a(c,{name:"name_config",label:"Nome configurazione*",modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=i=>o.form.name=i),id:"name_config",type:"text"},null,8,["modelValue"])]),l("div",Fe,[We,a(r,{modelValue:o.form.course_id,"onUpdate:modelValue":e[1]||(e[1]=i=>o.form.course_id=i),options:o.responseCourses.courses,optionLabel:"name",optionValue:"id",placeholder:"",name:"location",onChange:e[2]||(e[2]=i=>o.fetchAllTickets())},null,8,["modelValue","options"])]),l("div",qe,[He,a(v,{inputId:"date_from",modelValue:o.form.from_date,"onUpdate:modelValue":e[3]||(e[3]=i=>o.form.from_date=i),dateFormat:"dd/mm",placeholder:"dd/mm",panelClass:"hide-year"},null,8,["modelValue"])]),l("div",Ge,[Ke,a(v,{inputId:"date_to",modelValue:o.form.to_date,"onUpdate:modelValue":e[4]||(e[4]=i=>o.form.to_date=i),dateFormat:"dd/mm",placeholder:"dd/mm",panelClass:"hide-year"},null,8,["modelValue"])]),l("div",Je,[Qe,l("div",Xe,[l("div",Ye,[a(C,{modelValue:o.check_all,"onUpdate:modelValue":[e[5]||(e[5]=i=>o.check_all=i),e[6]||(e[6]=i=>o.checkAll(i))],inputId:"all",name:"week",binary:!0},null,8,["modelValue"]),Ze]),l("div",$e,[a(C,{modelValue:o.form.wdays,"onUpdate:modelValue":e[7]||(e[7]=i=>o.form.wdays=i),inputId:"lun",name:"week",value:1},null,8,["modelValue"]),eo]),l("div",oo,[a(C,{modelValue:o.form.wdays,"onUpdate:modelValue":e[8]||(e[8]=i=>o.form.wdays=i),inputId:"mar",name:"week",value:2},null,8,["modelValue"]),to]),l("div",no,[a(C,{modelValue:o.form.wdays,"onUpdate:modelValue":e[9]||(e[9]=i=>o.form.wdays=i),inputId:"mer",name:"week",value:3},null,8,["modelValue"]),io]),l("div",ao,[a(C,{modelValue:o.form.wdays,"onUpdate:modelValue":e[10]||(e[10]=i=>o.form.wdays=i),inputId:"gio",name:"week",value:4},null,8,["modelValue"]),so]),l("div",lo,[a(C,{modelValue:o.form.wdays,"onUpdate:modelValue":e[11]||(e[11]=i=>o.form.wdays=i),inputId:"ven",name:"week",value:5},null,8,["modelValue"]),co]),l("div",ro,[a(C,{modelValue:o.form.wdays,"onUpdate:modelValue":e[12]||(e[12]=i=>o.form.wdays=i),inputId:"sab",name:"week",value:6},null,8,["modelValue"]),uo]),l("div",mo,[a(C,{modelValue:o.form.wdays,"onUpdate:modelValue":e[13]||(e[13]=i=>o.form.wdays=i),inputId:"dom",name:"week",value:0},null,8,["modelValue"]),_o])])]),l("div",fo,[go,(j(!0),M(q,null,oe(o.responseTickets.tickets,i=>(j(),M("div",{key:i.id,class:"flex align-items-center mb-2 mt-2"},[a(C,{modelValue:o.form.booking_rule_ticket_ids,"onUpdate:modelValue":e[14]||(e[14]=V=>o.form.booking_rule_ticket_ids=V),inputId:"ticket.id",name:"category",value:i.id},null,8,["modelValue","value"]),l("label",po,[l("div",vo,O(i.name),1),l("div",bo,"€ "+O(i.price),1)])]))),128))]),ko,l("div",ho,[l("div",Co,[yo,a(f,{label:"Slot orario",icon:"pi pi-plus",rounded:"",outlined:"",onClick:e[15]||(e[15]=i=>o.addSlot())})]),a(k,{value:o.form.booking_rule_slots,stripedRows:"",editingRows:o.editingRows,"onUpdate:editingRows":e[16]||(e[16]=i=>o.editingRows=i),editMode:"row",dataKey:"id",onRowEditSave:o.onRowEditSave},{empty:b(()=>[F(" Nessuno slot orario trovato. ")]),default:b(()=>[a(p,{header:"Ora",field:"start_at"},{editor:b(({data:i,field:V})=>[a(y,{id:"basic",modelValue:i[V],"onUpdate:modelValue":E=>i[V]=E,mask:"99:99"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(p,{header:"Posti",field:"available_seats"},{editor:b(({data:i,field:V})=>[a(s,{modelValue:i[V],"onUpdate:modelValue":E=>i[V]=E,min:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(p,{rowEditor:!0,style:{width:"8rem"},bodyStyle:"text-align:right"}),a(p,{header:"",style:{width:"3rem","padding-left":"0"}},{body:b(({data:i,index:V})=>[l("div",wo,[P(a(f,{link:"",icon:"pi pi-trash",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:E=>o.deleteSlot(i,V)},null,8,["onClick"]),[[x,"Elimina",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","editingRows","onRowEditSave"])])]),l("div",xo,[a(f,{label:"Annulla",text:"",onClick:e[17]||(e[17]=i=>t.$emit("onClose"))}),a(f,{label:"Conferma",type:"submit"})])]),_:1},8,["onSubmit","validation-schema"])}const Do=G(Ne,[["render",Vo]]),To={props:["location_id"],setup(t){H(()=>{c.value=!0,r.value={first:0,rows:n.value.rows,sortField:null,sortOrder:null},r.value.page=0,t.location_id&&i(t.location_id)});const e=Q(),n=h(),o=h(),S=h(),D=h(),c=h(!0),r=h(),v=h(0),C=h(!1),f=h(),y=h(!1),p=le(),s=B(()=>p.responseConfigurations),k=de(),m=B(()=>k.submitDialog),x=B(()=>p.responseCourses),i=async function(d){const u=new Map;u.set("location_id",d),await p.getAllCourses(u).then(()=>{c.value=!1}).catch(T=>{c.value=!1,A(e,T)})},V=async function(d){if(!d)return;c.value=!0;const u=new Map;u.set("location_id",t.location_id),u.set("course_id",d),await p.fetchAllConfigurations(u).then(()=>{c.value=!1}).catch(T=>{c.value=!1,A(e,T)})},E=function(d){S.value=d;let u="Sei sicuro di voler eliminare questa configurazione?";k.setDialog("Elimina configurazione","Elimina","Annulla",u),k.setBtnSubmit(!1),k.setDynamicDialogVisibility(!0)},L=async function(){S.value&&await p.deleteConfiguration(S.value).then(()=>{c.value=!1,N(e,{message:"Configurazione eliminata correttamente",error:!1}),V(f.value)}).catch(d=>{c.value=!1,A(e,d)})},U=function(d,u){D.value=d,C.value=!0,y.value=u},I=function(d){return d.map(T=>Ce.local(2022,1,2+T).setLocale("it").toFormat("ccc")).join(", ")},w=function(d){V(d),C.value=!1},g=function(){return y.value?"Duplica configurazione":D.value&&D.value.id&&!y.value?"Modifica configurazione":"Nuova configurazione"};return R(m,d=>{m.value&&L()}),R(x,()=>{x.value.courses&&x.value.courses[0]&&(f.value=x.value.courses[0].id,V(f.value))}),R(t,()=>{t.location_id&&i(t.location_id)}),{dt:n,responseConfigurations:s,loading:c,totalRecords:v,lazyParams:r,op:o,visible:C,currentConfiguration:D,responseCourses:x,course_id:f,flag_duplicate:y,fromMMDDtoDDMM:re,onDeleteConfiguration:L,confirmDelete:E,onEditConfiguration:U,fetchAllConfigurations:V,convertWdays:I,closeDialog:w,getHeader:g}},components:{ConfigurationDialog:Do}},So={class:"flex justify-content-between mt-4 mb-3"},Eo={class:"field flex flex-column"},Ao=l("label",{for:"location"},"Percorso",-1),Bo={class:"capitalize"},Uo={class:"flex justify-content-center"};function jo(t,e,n,o,S,D){const c=_("Dropdown"),r=_("Button"),v=_("Column"),C=_("DataTable"),f=_("ConfigurationDialog"),y=_("Dialog"),p=X("tooltip");return j(),M(q,null,[l("div",So,[l("div",Eo,[Ao,a(c,{modelValue:o.course_id,"onUpdate:modelValue":e[0]||(e[0]=s=>o.course_id=s),options:o.responseCourses.courses,optionLabel:"name",optionValue:"id",placeholder:"",name:"location",onChange:e[1]||(e[1]=s=>o.fetchAllConfigurations(o.course_id))},null,8,["modelValue","options"])]),a(r,{label:"Configurazione",icon:"pi pi-plus",rounded:"",outlined:"",onClick:e[2]||(e[2]=s=>o.onEditConfiguration({},!1))})]),a(C,{value:o.responseConfigurations.booking_rules,lazy:!0,paginator:!1,ref:"dt",loading:o.loading,stripedRows:""},{empty:b(()=>[F(" Nessuna configurazione trovata. ")]),default:b(()=>[a(v,{header:"Nome",field:"name"}),a(v,{header:"Dal Al"},{body:b(({data:s})=>[F(O(o.fromMMDDtoDDMM(s.from_date))+" - "+O(o.fromMMDDtoDDMM(s.to_date)),1)]),_:1}),a(v,{header:"Valida il",field:"week"},{body:b(({data:s})=>[l("div",Bo,O(o.convertWdays(s.wdays)),1)]),_:1}),a(v,{header:""},{body:b(({data:s})=>[l("div",Uo,[P(a(r,{link:"",icon:"pi pi-copy",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:k=>o.onEditConfiguration(s,!0)},null,8,["onClick"]),[[p,"Duplica",void 0,{top:!0}]]),P(a(r,{link:"",icon:"pi pi-pencil",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:k=>o.onEditConfiguration(s,!1)},null,8,["onClick"]),[[p,"Modifica",void 0,{top:!0}]]),P(a(r,{link:"",icon:"pi pi-trash",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:k=>o.confirmDelete(s.id)},null,8,["onClick"]),[[p,"Elimina",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","loading"]),a(y,{visible:o.visible,"onUpdate:visible":e[5]||(e[5]=s=>o.visible=s),modal:"",header:o.getHeader(),style:{width:"70rem"}},{default:b(()=>[a(f,{config:o.currentConfiguration,onOnSubmit:e[3]||(e[3]=s=>o.closeDialog(s)),onOnClose:e[4]||(e[4]=s=>o.visible=!1),location_id:n.location_id,course_id:o.course_id,duplicate:o.flag_duplicate},null,8,["config","location_id","course_id","duplicate"])]),_:1},8,["visible","header"])],64)}const zo=G(To,[["render",jo]]);class J{static async fetchAll(e){return e?(await W("/admin/booking_exception_rules",e)).data:{}}static async getCourses(e){return(await W("/admin/booking_exception_rules/courses",e)).data}static async getTickets(e){return(await W("/admin/booking_exception_rules/tickets",e)).data}static async addBookingException(e){return await ne("/admin/booking_exception_rules",e)}static async updateBookingException(e){return await ie(`/admin/booking_exception_rules/${e.booking_exception_rule.id}`,e)}static async deleteBookingException(e){return e==null?{}:await ae(`/admin/booking_exception_rules/${e}`)}}const ke=se({id:"booking_exception",state:()=>({booking_exception:{},booking_exceptions:[],response_booking_exceptions:{},response_courses:{},response_tickets:{}}),getters:{allBookingExceptions:t=>t.booking_exceptions,responseBookingExceptions:t=>t.response_booking_exceptions,getTotalBookingExceptions:t=>t.response_booking_exceptions?t.response_booking_exceptions.total:0,getCurrentBookingException:t=>t.booking_exception,responseCourses:t=>t.response_courses,responseTickets:t=>t.response_tickets},actions:{async fetchAllBookingExceptions(t){await J.fetchAll(t).then(e=>{this.response_booking_exceptions=e,this.booking_exceptions=e.booking_exceptions})},async getAllCourses(t){await J.getCourses(t).then(e=>{this.response_courses=e})},async getAllTickets(t){await J.getTickets(t).then(e=>{this.response_tickets=e})},async addBookingException(t){await J.addBookingException(t).then()},async updateBookingException(t){await J.updateBookingException(t).then()},async deleteBookingException(t){t!=null&&await J.deleteBookingException(t).then()}}}),Io={props:["config","location_id","course_id","duplicate"],setup(t,e){H(()=>{t.config&&t.config.id?(n.value=Object.assign({},t.config),n.value.date&&(n.value.date=ve(n.value.date)),t.duplicate&&delete n.value.id):(n.value.location_id=t.location_id,n.value.course_id=t.course_id,n.value.booking_exception_rule_slots=[]),I()});const n=h({}),o=h([]),S=ue({name:me().required("Nome eccezione obbligatoria")}),{showLoader:D,hideLoader:c}=te(),r=Q(),v=ge(),C=h(!1),f=le(),y=ke(),p=B(()=>v.allCategories),s=B(()=>f.responseTickets),k=B(()=>f.responseCourses),m=function(){D();const w=Object.assign({},n.value);w.date&&(w.date=pe(w.date)),w.booking_exception_rule_slots=[],n.value.booking_exception_rule_slots&&n.value.booking_exception_rule_slots.forEach(d=>{d.available_seats!=""&&d.start_at!=""&&w.booking_exception_rule_slots.push(d)});const g={booking_exception_rule:w};y.addBookingException(g).then(()=>{c(),N(r,{message:"Eccezione aggiunta correttamente",error:!1}),e.emit("onSubmit",n.value.course_id)}).catch(d=>{c(),A(r,d)})},x=function(){D();const w=Object.assign({},n.value);w.date&&(w.date=pe(w.date)),w.booking_exception_rule_slots=[],n.value.booking_exception_rule_slots&&n.value.booking_exception_rule_slots.forEach(d=>{d.available_seats!=""&&d.start_at!=""&&w.booking_exception_rule_slots.push(d)});const g={booking_exception_rule:w};y.updateBookingException(g).then(()=>{c(),N(r,{message:"Eccezione modificata correttamente",error:!1}),e.emit("onSubmit",n.value.course_id)}).catch(d=>{c(),A(r,d)})},i=function(){n.value.id?x():m()},V=function(){let w={};w.price=0,n.value.tickets.unshift(w),o.value.push(n.value.tickets[0])},E=function(w){let{newData:g,index:d}=w;n.value.booking_exception_rule_slots[d]=g;let T={start_at:"",available_seats:"",id:+n.value.booking_exception_rule_slots[n.value.booking_exception_rule_slots.length-1].id-1};n.value.booking_exception_rule_slots.push(T),o.value=[T]},L=function(){let w={start_at:"",available_seats:"",id:"-1"};n.value.booking_exception_rule_slots.push(w),o.value.push(w)},U=function(w,g){n.value.booking_exception_rule_slots.splice(g,1)},I=function(){const w=new Map;w.set("location_id",n.value.location_id),w.set("course_id",n.value.course_id),f.getAllTickets(w).catch(g=>{A(r,g)})};return R(p,()=>{n.value.category||(n.value.category=p.value[0])}),{form:n,schema:S,loading:C,editingRows:o,onSubmit:i,addTicket:V,onRowEditSave:E,deleteSlot:U,addSlot:L,fetchAllTickets:I,categories:p,responseTickets:s,responseCourses:k}},components:{Form:_e,InputTextWithValidation:fe}},Mo={class:"formgrid grid mt-3"},Ro={class:"field col-12"},Lo={class:"field flex flex-column col-6"},No=l("label",{for:"location"},"Percorso",-1),Oo={class:"field col-3"},Po=l("label",{from:"date"},"Il",-1),Fo=l("div",{class:"field col-3"},null,-1),Wo={class:"field col-3 mt-3"},qo=l("label",null,"Biglietti",-1),Ho=["for"],Go={class:"inline-block",style:{"min-width":"150px"}},Ko={class:"text-right"},Jo=l("div",{class:"col-9"},null,-1),Qo={class:"field col-8 mt-3"},Xo={class:"field flex justify-content-between align-items-end mt-4 mb-3"},Yo=l("label",null,"Orari",-1),Zo={class:"flex justify-content-center"},$o={class:"flex align-items-center justify-content-end mt-6"};function et(t,e,n,o,S,D){const c=_("InputTextWithValidation"),r=_("Dropdown"),v=_("Calendar"),C=_("Checkbox"),f=_("Button"),y=_("InputMask"),p=_("Column"),s=_("InputNumber"),k=_("DataTable"),m=_("Form"),x=X("tooltip");return j(),Y(m,{onSubmit:o.onSubmit,"validation-schema":o.schema},{default:b(()=>[l("div",Mo,[l("div",Ro,[a(c,{name:"name",label:"Nome eccezione*",modelValue:o.form.name,"onUpdate:modelValue":e[0]||(e[0]=i=>o.form.name=i)},null,8,["modelValue"])]),l("div",Lo,[No,a(r,{modelValue:o.form.course_id,"onUpdate:modelValue":e[1]||(e[1]=i=>o.form.course_id=i),options:o.responseCourses.courses,optionLabel:"name",optionValue:"id",placeholder:"",name:"location",onChange:e[2]||(e[2]=i=>o.fetchAllTickets())},null,8,["modelValue","options"])]),l("div",Oo,[Po,a(v,{inputId:"date",modelValue:o.form.date,"onUpdate:modelValue":e[3]||(e[3]=i=>o.form.date=i),dateFormat:"dd/mm/yy",manualInput:!1,placeholder:""},null,8,["modelValue"])]),Fo,l("div",Wo,[qo,(j(!0),M(q,null,oe(o.responseTickets.tickets,i=>(j(),M("div",{key:i.id,class:"flex align-items-center mb-2"},[a(C,{modelValue:o.form.booking_exception_rule_ticket_ids,"onUpdate:modelValue":e[4]||(e[4]=V=>o.form.booking_exception_rule_ticket_ids=V),inputId:i.id+"",name:"category",value:i.id},null,8,["modelValue","inputId","value"]),l("label",{for:i.id+"",class:"ml-2 flex align-items-center"},[l("div",Go,O(i.name),1),l("div",Ko,"€ "+O(i.price),1)],8,Ho)]))),128))]),Jo,l("div",Qo,[l("div",Xo,[Yo,a(f,{label:"Slot orario",icon:"pi pi-plus",rounded:"",outlined:"",onClick:e[5]||(e[5]=i=>o.addSlot())})]),a(k,{value:o.form.booking_exception_rule_slots,ref:"dt",loading:o.loading,stripedRows:"",editingRows:o.editingRows,"onUpdate:editingRows":e[6]||(e[6]=i=>o.editingRows=i),editMode:"row",dataKey:"id",onRowEditSave:o.onRowEditSave},{empty:b(()=>[F(" Nessuno slot orario trovato. ")]),default:b(()=>[a(p,{header:"Ora",field:"start_at"},{editor:b(({data:i,field:V})=>[a(y,{id:"basic",modelValue:i[V],"onUpdate:modelValue":E=>i[V]=E,mask:"99:99"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(p,{header:"Posti",field:"available_seats"},{editor:b(({data:i,field:V})=>[a(s,{modelValue:i[V],"onUpdate:modelValue":E=>i[V]=E,min:0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),a(p,{rowEditor:!0,style:{width:"8rem"},bodyStyle:"text-align:right"}),a(p,{header:"",style:{width:"3rem","padding-left":"0"}},{body:b(({data:i,index:V})=>[l("div",Zo,[P(a(f,{link:"",icon:"pi pi-trash",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:E=>o.deleteSlot(i,V)},null,8,["onClick"]),[[x,"Elimina",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","loading","editingRows","onRowEditSave"])])]),l("div",$o,[a(f,{label:"Annulla",text:""}),a(f,{label:"Conferma",type:"submit"})])]),_:1},8,["onSubmit","validation-schema"])}const ot=G(Io,[["render",et]]),tt={props:["location_id"],setup(t){H(()=>{c.value=!0,r.value={first:0,rows:n.value.rows,sortField:null,sortOrder:null},r.value.page=0,t.location_id&&V(t.location_id)});const e=Q(),n=h(),o=h(),S=h(),D=h(),c=h(!0),r=h(),v=h(0),C=h(!1);h([]);const f=h(),y=h(!1),p=le(),s=ke(),k=B(()=>s.responseBookingExceptions),m=de(),x=B(()=>m.submitDialog),i=B(()=>p.responseCourses),V=async function(d){const u=new Map;u.set("location_id",d),await p.getAllCourses(u).then(()=>{c.value=!1}).catch(T=>{c.value=!1,A(e,T)})},E=async function(d){if(!d)return;c.value=!0;const u=new Map;u.set("location_id",t.location_id),u.set("course_id",d),await s.fetchAllBookingExceptions(u).then(()=>{c.value=!1}).catch(T=>{c.value=!1,A(e,T)})},L=function(d){S.value=d;let u="Sei sicuro di voler eliminare questa eccezione?";m.setDialog("Elimina eccezione","Elimina","Annulla",u),m.setBtnSubmit(!1),m.setDynamicDialogVisibility(!0)},U=async function(){S.value&&await s.deleteBookingException(S.value).then(()=>{c.value=!1,N(e,{message:"Eccezione eliminata correttamente",error:!1}),E(f.value)}).catch(d=>{c.value=!1,A(e,d)})},I=function(d,u){D.value=d,C.value=!0,y.value=u},w=function(d){E(d),C.value=!1},g=function(){return y.value?"Duplica eccezione":D.value&&D.value.id&&!y.value?"Modifica eccezione":"Nuova eccezione"};return R(x,d=>{d&&U()}),R(i,()=>{i.value&&i.value.courses&&i.value.courses.length>0&&(f.value=i.value.courses[0].id,E(f.value))}),R(t,()=>{t.location_id&&V(t.location_id)}),{dt:n,responseBookingExceptions:k,loading:c,totalRecords:v,lazyParams:r,op:o,visible:C,currentConfiguration:D,responseCourses:i,course_id:f,flag_duplicate:y,onDeleteConfigurationException:U,confirmDelete:L,onEditConfiguration:I,getHeader:g,closeDialog:w,fetchAllBookingExceptions:E,formatPrettyDate:ve}},components:{BookingExceptionDialog:ot}},nt={class:"flex justify-content-between mt-4 mb-3"},it={class:"field flex flex-column"},at=l("label",{for:"location"},"Percorso",-1),st={class:"flex justify-content-center"};function lt(t,e,n,o,S,D){const c=_("Dropdown"),r=_("Button"),v=_("Column"),C=_("DataTable"),f=_("BookingExceptionDialog"),y=_("Dialog"),p=X("tooltip");return j(),M(q,null,[l("div",nt,[l("div",it,[at,a(c,{modelValue:o.course_id,"onUpdate:modelValue":e[0]||(e[0]=s=>o.course_id=s),options:o.responseCourses.courses,optionLabel:"name",optionValue:"id",placeholder:"",name:"location",onChange:e[1]||(e[1]=s=>o.fetchAllBookingExceptions(o.course_id))},null,8,["modelValue","options"])]),a(r,{label:"Eccezione",icon:"pi pi-plus",rounded:"",outlined:"",onClick:e[2]||(e[2]=s=>o.onEditConfiguration({},!1))})]),a(C,{value:o.responseBookingExceptions.booking_exception_rules,lazy:!0,paginator:!1,ref:"dt",loading:o.loading,stripedRows:""},{empty:b(()=>[F(" Nessuna eccezione trovata. ")]),default:b(()=>[a(v,{header:"Nome",field:"name"}),a(v,{header:"Il"},{body:b(({data:s})=>[F(O(o.formatPrettyDate(s.date)),1)]),_:1}),a(v,{header:""},{body:b(({data:s})=>[l("div",st,[P(a(r,{link:"",icon:"pi pi-copy",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:k=>o.onEditConfiguration(s,!0)},null,8,["onClick"]),[[p,"Duplica",void 0,{top:!0}]]),P(a(r,{link:"",icon:"pi pi-pencil",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:k=>o.onEditConfiguration(s,!1)},null,8,["onClick"]),[[p,"Modifica",void 0,{top:!0}]]),P(a(r,{link:"",icon:"pi pi-trash",text:"",rounded:"",style:{color:"var(--surface-400)"},onClick:k=>o.confirmDelete(s.id)},null,8,["onClick"]),[[p,"Elimina",void 0,{top:!0}]])])]),_:1})]),_:1},8,["value","loading"]),a(y,{visible:o.visible,"onUpdate:visible":e[4]||(e[4]=s=>o.visible=s),modal:"",header:o.getHeader(),style:{width:"70rem"}},{default:b(()=>[a(f,{config:o.currentConfiguration,onOnSubmit:e[3]||(e[3]=s=>o.closeDialog(s)),location_id:n.location_id,course_id:o.course_id,duplicate:o.flag_duplicate},null,8,["config","location_id","course_id","duplicate"])]),_:1},8,["visible","header"])],64)}const ct=G(tt,[["render",lt]]),rt={setup(){H(()=>{D()});const t=h({}),e=he(),n=h(),o=B(()=>e.allLocations),S=B(()=>e.getCurrentLocation),D=async function(){await e.fetchAllLocations().then(()=>{S.value&&(t.value.location=S.value)})},c=function(){e.updateCurrenLocation(t.value.location)};return R(o,()=>{t.value.location_id=o.value[0].id}),{form:t,courseTable:n,locations:o,onChangeLocation:c}},components:{CourseTable:Le,OpeningsTable:zo,BookingExceptionTable:ct}},dt=l("h1",null,"Configurazioni",-1),ut={class:"field col-3 flex flex-column"},mt=l("label",{for:"location"},"Location",-1);function _t(t,e,n,o,S,D){var p;const c=_("Dropdown"),r=_("CourseTable"),v=_("TabPanel"),C=_("OpeningsTable"),f=_("BookingExceptionTable"),y=_("TabView");return j(),M("div",null,[dt,l("div",ut,[mt,a(c,{modelValue:o.form.location,"onUpdate:modelValue":e[0]||(e[0]=s=>o.form.location=s),options:o.locations,optionLabel:"name",placeholder:"",name:"location",onChange:e[1]||(e[1]=s=>o.onChangeLocation())},null,8,["modelValue","options"])]),(p=o.form.location)!=null&&p.id?(j(),Y(y,{key:0},{default:b(()=>[a(v,{header:"Percorsi"},{default:b(()=>{var s;return[a(r,{location_id:(s=o.form.location)==null?void 0:s.id,ref:"courseTable"},null,8,["location_id"])]}),_:1}),a(v,{header:"Aperture"},{default:b(()=>[a(C,{location_id:o.form.location.id},null,8,["location_id"])]),_:1}),a(v,{header:"Eccezioni"},{default:b(()=>[a(f,{location_id:o.form.location.id},null,8,["location_id"])]),_:1})]),_:1})):ce("",!0)])}const Dt=G(rt,[["render",_t]]);export{Dt as default};