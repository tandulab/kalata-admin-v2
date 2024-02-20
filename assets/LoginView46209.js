import{d as b,o as x,u as g,a as y,c as L,_ as V,r as t,b as v,e as S,f as o,w as p,g as s,h as P}from"../index46209.js";import{L as B}from"./Logo46209.js";import{I as C}from"./InputTextWithValidation46209.js";import{P as W}from"./PasswordWithValidation46209.js";import{c as $,a as w}from"./index.esm46209.js";import{F as k}from"./vee-validate.esm46209.js";import{u as F,e as I}from"./helpers46209.js";import{u as T}from"./location46209.js";/* empty css                                                                            */import"./_commonjsHelpers46209.js";const A=b({name:"LoginView",setup(){x(()=>{e.clearUser()});const e=g(),u=y(),{showLoader:_,hideLoader:n}=F(),f=T(),h=$({email:w().required().email().label("Email obbligatoria"),password:w().required().label("Password obbligatoria")}),r=L(()=>e.user),c=async function(a,l){const m={email:a.email,password:a.password};_(),await e.login(m).then(async()=>{n(),l.resetForm(),i()}).catch(d=>{n(),I(u,d)})},i=async function(){await f.fetchAllLocations()};return{schema:h,currentUser:r,onSubmit:c}},components:{Logo:B,InputTextWithValidation:C,PasswordWithValidation:W,Form:k}});const E={class:"flex justify-content-center align-items-center h-screen mt-0 login"},U={class:"m-2 text-center"},N=s("h1",{class:"mb-3 mt-0 text-center"},"Accedi al profilo",-1),j=s("h2",{class:"text-center font-normal mb-3"}," Benvenuto! Inserisci la tua email e la password ",-1),q={class:"w-full flex justify-content-start cursor-pointer text-color-secondary m-0"};function M(e,u,_,n,f,h){const r=t("Logo"),c=t("InputTextWithValidation"),i=t("PasswordWithValidation"),a=t("router-link"),l=t("Button"),m=t("Form"),d=t("Card");return v(),S("div",E,[o(d,{class:"py-4 px-3"},{content:p(()=>[s("div",U,[o(r)]),N,j,o(m,{"validation-schema":e.schema,onSubmit:e.onSubmit,class:"flex flex-column"},{default:p(()=>[o(c,{name:"email",label:"Email",type:"text"}),o(i,{name:"password",label:"Password",type:"password"}),s("div",q,[o(a,{to:"/password-dimenticata",class:"text-color-secondary"},{default:p(()=>[P("Password dimenticata?")]),_:1})]),o(l,{label:"Entra",type:"submit",class:"mt-5 mb-3"})]),_:1},8,["validation-schema","onSubmit"])]),_:1})])}const Y=V(A,[["render",M]]);export{Y as default};
