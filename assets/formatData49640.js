import{D as o}from"./datetime49640.js";const u=function(t){return o.fromSQL(t).toFormat("dd/MM/yyyy")},m=function(t){return o.fromJSDate(new Date(t)).toFormat("yyyy-LL-dd")},a=function(t){return o.fromJSDate(new Date(t)).toFormat("dd/MM/yyyy")},f=function(t){return o.fromFormat(t+"","dd/MM/yyyy").toFormat("yyyy-LL-dd")},c=function(t){return t?o.fromSeconds(t).toFormat("dd/MM/yyyy HH:mm"):""},i=function(t){return t?o.fromISO(t).toFormat("dd/MM/yyyy"):""},y=function(t){if(t)return t.toString().includes("/")?f(t):m(t)},D=function(t){if(t)return t.toString().includes("-")?i(t):t.toString().includes("/")?t:a(t)},M=function(t){const[r,n]=t.split("-");return o.fromObject({month:r,day:n}).toFormat("dd/MM")},d=function(t){if(t.toString().includes("/")){const[r,n]=t.split("/");return o.fromObject({day:r,month:n}).toFormat("MM-dd")}else{const r=new Date(t);return o.fromJSDate(r).toFormat("MM-dd")}};export{i as a,y as b,m as c,M as d,d as e,c as f,D as g,u as h};
