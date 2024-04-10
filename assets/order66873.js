import{x as d,y as c,U as s,A as l}from"../index66873.js";import{D as i}from"./datetime66873.js";class o{static async fetchAll(t){const a=t.get("location_id");return t.delete("location_id"),(await d(`/admin/locations/${a}/orders`,t)).data}static async fetchAllReveliaOrders(t){return(await d("/admin/orders",t)).data}static async deleteOrder(t){return await c(`/admin/orders/${t.order_id}/events/${t.event_id}/cancel`)}static async downloadOrderPDF(t){return await s(`/admin/orders/${t.order_id}/events/${t.event_id}/download`)}static async downloadOrderCsv(t){const a=t.get("location_id");return await s(`/admin/locations/${a}/orders`,t)}static async downloadReveliaOrderCsv(t){return await s("/admin/orders",t)}}const w=l({id:"order",state:()=>({order:{},orders:[],response_orders:{},total_orders:Number,calendar:{},discount:{},response:{}}),getters:{allOrders:e=>e.response_orders.orders,responseOrders:e=>e.response_orders,getTotalOrders:e=>e.response_orders?e.response_orders.total:0,getCurrentOrder:e=>e.order,status:()=>[{name:"Attivo",value:"true"},{name:"Disattivo",value:"false"}],getCalendar:e=>e.calendar,getDiscount:e=>e.discount,paymentStatus:()=>[{id:"to_pay",name:"Da pagare"},{id:"payed",name:"Pagato"},{id:"free",name:"Gratuito"}],paymentStatusRevelia:()=>[{id:"pending_payment",name:"In attesa di pagamento"},{id:"paid",name:"Pagato"},{id:"not_paid",name:"Non pagato"},{id:"canceled",name:"Cancellato"}],paymentModeList:()=>[{label:"Digitale (POS)",id:"credit_card"},{label:"Digitale (Satispay)",id:"satispay"},{label:"Ecommerce",id:"ecommerce"},{label:"Contanti",id:"cash"},{label:"Bonifico",id:"credit_transfer"},{label:"Biglietto a data aperta (voucher)",id:"voucher"}],getDeleteResponse:e=>e.response},actions:{async fetchAllOrders(e){await o.fetchAll(e).then(t=>this.response_orders=t)},async fetchAllReveliaOrders(e){await o.fetchAllReveliaOrders(e).then(t=>this.response_orders=t)},async deleteOrder(e){await o.deleteOrder(e)},async downloadOrderPDF(e){await o.downloadOrderPDF(e).then(t=>{const a=new Blob([t.data],{type:"application/pdf"}),r=URL.createObjectURL(a);window.open(r,"_blank")})},async downloadOrderCsv(e){await o.downloadOrderCsv(e).then(t=>{const a=new Blob([t.data],{type:"text/csv;charset=utf-8"}),r=document.createElement("a");r.href=window.URL.createObjectURL(a);const n=i.local().toFormat("dd_MM_yyyy");r.download="Prenotazioni_"+n+".csv",r.click()})},async downloadReveliaOrderCsv(e){await o.downloadReveliaOrderCsv(e).then(t=>{const a=new Blob([t.data],{type:"text/csv;charset=utf-8"}),r=document.createElement("a");r.href=window.URL.createObjectURL(a);const n=i.local().toFormat("dd_MM_yyyy");r.download="Prenotazioni_"+n+".csv",r.click()})}}});export{w as u};
