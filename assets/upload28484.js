import{y as i,C as d,B as l,A as p,m as n,z as u}from"../index28484.js";class r{static async fetchAll(){return(await i("/admin/banners")).data}static async updateBanner(a){return(await d(`/admin/banners/${a.banner.id}`,a)).data}static async updateCopyPDF(a){return(await d(`/admin/banners/${a.banner.id}/update_pdf`,a)).data}}const h=l({id:"banner",state:()=>({banner:{},banners:[],response_banners:{}}),getters:{allBanners:e=>e.banners,responseBanners:e=>e.response_banners,getTotalBanners:e=>e.response_banners?e.response_banners.total:0,getCurrentBanner:e=>e.banner},actions:{async fetchAll(){await r.fetchAll().then(e=>{this.response_banners=e})},async updateBanner(e){await r.updateBanner(e).then()},async updateCopyPDF(e){await r.updateCopyPDF(e).then()}}});class t{static async uploadFile(a){return(await p("uploads",a)).data}static async uploadResponse(a){const s={headers:{"Content-Type":a.file.type}};return delete n.defaults.headers.common.uid,delete n.defaults.headers.common.Uid,delete n.defaults.headers.common["token-type"],delete n.defaults.headers.common["access-token"],delete n.defaults.headers.common.client,await n.put(a.upload_url,a.file,s)}static async uploadDone(a){return(await p(`/uploads/${a}/done`,{})).data}static async deleteFile(a){const s=new Map;return(await u(`/uploads/${a}`,s)).data}}const y=l({id:"upload",state:()=>({upload:{},uploads:[],response_uploads:{},upload_id:""}),getters:{allUploads:e=>e.uploads,responseUploads:e=>e.response_uploads,getCurrentUpload:e=>e.upload},actions:{async uploadFile(e){const a=e.file;await t.uploadFile(e).then(s=>{const o={file:a,upload_url:s.upload_url};return this.upload_id=s.upload.id,this.uploadResponse(o)})},async uploadResponse(e){await t.uploadResponse(e).then(()=>this.uploadDone())},async uploadDone(){await t.uploadDone(this.upload_id).then(e=>{this.response_uploads=e})},async deleteFile(e){await t.deleteFile(e)}}});export{y as a,h as u};
