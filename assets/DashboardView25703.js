import{D as u}from"./datetime25703.js";import{u as k,e as F}from"./helpers25703.js";import{u as D}from"./dashboard25703.js";import{d as M,o as g,l as w,a as A,c as V,_ as B,r as f,b as a,e,g as n,f as l,q as C,w as t,h as d,t as i}from"../index25703.js";const S=M({setup(){g(()=>{o.value.date=u.now().setLocale("it").toFormat("MMMM/yyyy").replace(/^\w/,s=>s.toUpperCase()),h()});const o=w({}),r=D(),{showLoader:y,hideLoader:m}=k(),b=A(),v=V(()=>r.allDashboards),h=async function(){y();let s="",c="";if(o.value.date&&o.value.date.toString().includes("/")){let _=u.fromFormat(o.value.date,"MMMM/yyyy",{locale:"it"});s=_.month+"",c=_.year+""}else s=u.fromJSDate(new Date(o.value.date)).toFormat("M",{locale:"it"}),c=u.fromJSDate(new Date(o.value.date)).toFormat("yyyy",{locale:"it"});const p=new Map;p.set("month",s),p.set("year",c),await r.fetchAllDashboard(p).then(()=>{m()}).catch(_=>{m(),F(b,_)})};return{form:o,dashboards:v,fetchAllDashboard:h}}});const N={class:"dashboard"},$=n("h1",null,"Dashboard",-1),L={key:0,class:"flex align-items-center"},G={class:"field col-2 flex flex-column"},T=n("label",null,"Data",-1),q={key:1},J={class:"flex align-items-center flex-wrap"},P={class:"col-4"},U={class:"col-4"},z={class:"col-4"},E={key:0},j={key:1},H={class:"col-4"},I={key:0},K={key:1},O={class:"col-4"},Q={key:0},R={key:1},W={class:"col-4"},X={key:0},Y={key:1},Z={class:"col-4"},x={key:0},oo={key:1},to={class:"col-4"},ao={key:0},eo={key:1},so={class:"col-4"},no={key:0},lo={key:1},io={class:"col-4"},ro={key:0},co={key:1},ho={class:"col-4"},_o={key:0},uo={key:1};function mo(o,r,y,m,b,v){const h=f("Calendar"),s=f("Card");return a(),e("div",N,[$,o.form?(a(),e("div",L,[n("div",G,[T,l(h,{modelValue:o.form.date,"onUpdate:modelValue":[r[0]||(r[0]=c=>o.form.date=c),r[1]||(r[1]=c=>o.fetchAllDashboard())],view:"month",dateFormat:"MM/yy"},null,8,["modelValue"])])])):C("",!0),o.dashboards?(a(),e("div",q,[n("div",J,[n("div",P,[l(s,null,{title:t(()=>[d(" Prenotazioni totali mese ")]),content:t(()=>[d(i(o.dashboards.orders_total_month||"-"),1)]),_:1})]),n("div",U,[l(s,null,{title:t(()=>[d(" Visitatori totali mese ")]),content:t(()=>[d(i(o.dashboards.quantity_total_month||"-"),1)]),_:1})]),n("div",z,[l(s,null,{title:t(()=>[d(" Fatturato totale mese ")]),content:t(()=>[o.dashboards.total_month?(a(),e("span",E," € "+i((+o.dashboards.total_month).toFixed(2)||"-"),1)):(a(),e("span",j," 0 "))]),_:1})]),n("div",H,[l(s,null,{title:t(()=>[d(" Fatturato Vicoforte ")]),content:t(()=>[o.dashboards.vicoforte?(a(),e("span",I,"€ "+i((+o.dashboards.vicoforte).toFixed(2)),1)):(a(),e("span",K,"0"))]),_:1})]),n("div",O,[l(s,null,{title:t(()=>[d(" Fatturato Castello di Casotto ")]),content:t(()=>[o.dashboards.casotto?(a(),e("span",Q,"€ "+i((+o.dashboards.casotto).toFixed(2)),1)):(a(),e("span",R,"0"))]),_:1})]),n("div",W,[l(s,null,{title:t(()=>[d(" Fatturato Basilica delle Vigne - Genova ")]),content:t(()=>[o.dashboards.vigne?(a(),e("span",X,"€ "+i((+o.dashboards.vigne).toFixed(2)),1)):(a(),e("span",Y,"0"))]),_:1})]),n("div",Z,[l(s,null,{title:t(()=>[d(" Fatturato Novara ")]),content:t(()=>[o.dashboards.novara?(a(),e("span",x,"€ "+i((+o.dashboards.novara).toFixed(2)),1)):(a(),e("span",oo,"0"))]),_:1})]),n("div",to,[l(s,null,{title:t(()=>[d(" Fatturato Padova ")]),content:t(()=>[o.dashboards.padova?(a(),e("span",ao,"€ "+i((+o.dashboards.padova).toFixed(2)),1)):(a(),e("span",eo,"0"))]),_:1})]),n("div",so,[l(s,null,{title:t(()=>[d(" Fatturato Basilica di Carignano - Genova ")]),content:t(()=>[o.dashboards.carignano?(a(),e("span",no,"€ "+i((+o.dashboards.carignano).toFixed(2)),1)):(a(),e("span",lo,"0"))]),_:1})]),n("div",io,[l(s,null,{title:t(()=>[d(" Affreschi di Gentile da Fabriano - Brescia ")]),content:t(()=>[o.dashboards.brescia?(a(),e("span",ro,"€ "+i((+o.dashboards.brescia).toFixed(2)),1)):(a(),e("span",co,"0"))]),_:1})]),n("div",ho,[l(s,null,{title:t(()=>[d(" Fatturato Castello di Mombasiglio - Cuneo ")]),content:t(()=>[o.dashboards.cuneo?(a(),e("span",_o,"€ "+i((+o.dashboards.cuneo).toFixed(2)),1)):(a(),e("span",uo,"0"))]),_:1})])])])):C("",!0)])}const fo=B(S,[["render",mo]]);export{fo as default};
