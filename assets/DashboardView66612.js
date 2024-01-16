import{D as u}from"./datetime66612.js";import{u as F,e as k}from"./helpers66612.js";import{u as D}from"./dashboard66612.js";import{d as w,o as M,l as g,a as A,c as V,_ as B,r as f,b as a,e,g as n,f as l,s as C,w as t,h as d,t as i}from"../index66612.js";const S=w({setup(){M(()=>{o.value.date=u.now().setLocale("it").toFormat("MMMM/yyyy").replace(/^\w/,s=>s.toUpperCase()),h()});const o=g({}),r=D(),{showLoader:v,hideLoader:m}=F(),y=A(),b=V(()=>r.allDashboards),h=async function(){v();let s="",c="";if(o.value.date&&o.value.date.toString().includes("/")){let _=u.fromFormat(o.value.date,"MMMM/yyyy",{locale:"it"});s=_.month+"",c=_.year+""}else s=u.fromJSDate(new Date(o.value.date)).toFormat("M",{locale:"it"}),c=u.fromJSDate(new Date(o.value.date)).toFormat("yyyy",{locale:"it"});const p=new Map;p.set("month",s),p.set("year",c),await r.fetchAllDashboard(p).then(()=>{m()}).catch(_=>{m(),k(y,_)})};return{form:o,dashboards:b,fetchAllDashboard:h}}});const N={class:"dashboard"},$=n("h1",null,"Dashboard",-1),L={key:0,class:"flex align-items-center"},G={class:"field col-2 flex flex-column"},T=n("label",null,"Data",-1),J={key:1},P={class:"flex align-items-center flex-wrap"},U={class:"col-4"},q={class:"col-4"},z={class:"col-4"},E={class:"col-4"},j={key:0},H={key:1},I={class:"col-4"},K={key:0},O={key:1},Q={class:"col-4"},R={key:0},W={key:1},X={class:"col-4"},Y={key:0},Z={key:1},x={class:"col-4"},oo={key:0},to={key:1},ao={class:"col-4"},eo={key:0},so={key:1},no={class:"col-4"},lo={key:0},io={key:1};function ro(o,r,v,m,y,b){const h=f("Calendar"),s=f("Card");return a(),e("div",N,[$,o.form?(a(),e("div",L,[n("div",G,[T,l(h,{modelValue:o.form.date,"onUpdate:modelValue":[r[0]||(r[0]=c=>o.form.date=c),r[1]||(r[1]=c=>o.fetchAllDashboard())],view:"month",dateFormat:"MM/yy"},null,8,["modelValue"])])])):C("",!0),o.dashboards?(a(),e("div",J,[n("div",P,[n("div",U,[l(s,null,{title:t(()=>[d(" Prenotazioni totali mese ")]),content:t(()=>[d(i(o.dashboards.orders_total_month||"-"),1)]),_:1})]),n("div",q,[l(s,null,{title:t(()=>[d(" Visitatori totali mese ")]),content:t(()=>[d(i(o.dashboards.quantity_total_month||"-"),1)]),_:1})]),n("div",z,[l(s,null,{title:t(()=>[d(" Fatturato totale mese ")]),content:t(()=>[d(" € "+i(o.dashboards.total_month||"-"),1)]),_:1})]),n("div",E,[l(s,null,{title:t(()=>[d(" Fatturato Vicoforte ")]),content:t(()=>[o.dashboards.vicoforte?(a(),e("span",j,"€ "+i((+o.dashboards.vicoforte).toFixed(2)),1)):(a(),e("span",H,"0"))]),_:1})]),n("div",I,[l(s,null,{title:t(()=>[d(" Fatturato Castello di Casotto ")]),content:t(()=>[o.dashboards.casotto?(a(),e("span",K,"€ "+i((+o.dashboards.casotto).toFixed(2)),1)):(a(),e("span",O,"0"))]),_:1})]),n("div",Q,[l(s,null,{title:t(()=>[d(" Fatturato Basilica delle Vigne - Genova ")]),content:t(()=>[o.dashboards.vigne?(a(),e("span",R,"€ "+i((+o.dashboards.vigne).toFixed(2)),1)):(a(),e("span",W,"0"))]),_:1})]),n("div",X,[l(s,null,{title:t(()=>[d(" Fatturato Novara ")]),content:t(()=>[o.dashboards.novara?(a(),e("span",Y,"€ "+i((+o.dashboards.novara).toFixed(2)),1)):(a(),e("span",Z,"0"))]),_:1})]),n("div",x,[l(s,null,{title:t(()=>[d(" Fatturato Padova ")]),content:t(()=>[o.dashboards.padova?(a(),e("span",oo,"€ "+i((+o.dashboards.padova).toFixed(2)),1)):(a(),e("span",to,"0"))]),_:1})]),n("div",ao,[l(s,null,{title:t(()=>[d(" Fatturato Basilica di Carignano - Genova ")]),content:t(()=>[o.dashboards.carignano?(a(),e("span",eo,"€ "+i((+o.dashboards.carignano).toFixed(2)),1)):(a(),e("span",so,"0"))]),_:1})]),n("div",no,[l(s,null,{title:t(()=>[d(" Affreschi di Gentile da Fabriano - Brescia ")]),content:t(()=>[o.dashboards.brescia?(a(),e("span",lo,"€ "+i((+o.dashboards.brescia).toFixed(2)),1)):(a(),e("span",io,"0"))]),_:1})])])])):C("",!0)])}const mo=B(S,[["render",ro]]);export{mo as default};
