(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{270:function(e,t,n){},304:function(e,t,n){"use strict";n(270)},308:function(e,t,n){"use strict";n.r(t);var a=n(14),s=n(0);const o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}};var u={name:"SWUpdatePopup",data:()=>({rawPopupConfig:{"/":{message:"New content is available",buttonText:"Refresh"},"/de/":{message:"Neue Inhalte sind verfügbar!",buttonText:"Aktualisieren"}},updateEvent:null}),computed:{popupConfig(){return Object(s.g)(this,this.rawPopupConfig)},enabled(){return Boolean(this.popupConfig&&this.updateEvent)},message(){const e=this.popupConfig;return e&&e.message||o["/"].message},buttonText(){const e=this.popupConfig;return e&&e.buttonText||o["/"].buttonText}},created(){a.a.$on("sw-updated",this.onSWUpdated),!0==={"/":{message:"New content is available",buttonText:"Refresh"},"/de/":{message:"Neue Inhalte sind verfügbar!",buttonText:"Aktualisieren"}}&&(this.rawPopupConfig=o)},methods:{onSWUpdated(e){this.updateEvent=e},reload(){this.updateEvent&&(this.updateEvent.skipWaiting().then(()=>{location.reload(!0)}),this.updateEvent=null)}}},i=(n(304),n(8)),p=Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"sw-update-popup"}},[e._t("default",[e.enabled?n("div",{staticClass:"sw-update-popup"},[e._v("\n      "+e._s(e.message)+"\n\n      "),n("br"),e._v(" "),n("button",{on:{click:e.reload}},[e._v("\n        "+e._s(e.buttonText)+"\n      ")])]):e._e()],{reload:e.reload,enabled:e.enabled,message:e.message,buttonText:e.buttonText})],2)}),[],!1,null,"fec8b358",null);t.default=p.exports}}]);