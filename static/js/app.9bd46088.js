(function(e){function t(t){for(var r,i,c=t[0],u=t[1],s=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return c.p+"static/js/"+({}[e]||e)+"."+{"chunk-16a51fa6":"4e774ed7","chunk-65f0c7ec":"eec0ab03"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(e);var s=new Error;o=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",s.name="ChunkLoadError",s.type=r,s.request=o,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:u})}),12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/mobile/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=s;o.push(["e4fa","chunk-vendors"]),n()})({"0554":function(e,t,n){var r=n("96a4");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("499e").default;a("17611838",r,!0,{sourceMap:!1,shadowMode:!1})},4360:function(e,t,n){"use strict";var r=n("2b0e"),a=n("2f62"),o={isNetworkError:!1,current:{isShare:!1,isShareNative:!1,host:""},userInfo:{},sharePrizes:[]},i={},c={isNetworkError:function(e){return e.isNetworkError},current:function(e){return e.current}},u={updateNetworkError:function(e,t){e.isNetworkError=t},updateCurrent:function(e,t){var n=t.userId,r=t.shopId,a=t.isWeb,o=t.isAndroid,i=t.isWeChat,c=t.isIos,u=t.weChatCode,s=t.weChatState,l=t.wechatUserOpenId,p=t.host,f=t.appname;e.current.userId=n,e.current.shopId=r,e.current.isAndroid=o,e.current.isWeb=a,e.current.isIos=c,e.current.isWeChat=i,e.current.weChatCode=u,e.current.weChatState=s,e.current.wechatUserOpenId=l,e.current.host=p,e.current.appname=f},updateShare:function(e,t){var n=t.isShare,r=t.isShareNative;e.current.isShare=n,e.current.isShareNative=r},updateShareShopId:function(e,t){var n=t.shopId;e.current.shopId=n},updateUserInfo:function(e,t){var n=t.userInfo;e.userInfo=n},updateSharePrizes:function(e,t){var n=t.sharePrizes;e.sharePrizes=n}},s=(n("4de4"),{questions:[]}),l={winRate:function(e){if(!e.questions.length)return 0;var t=e.questions.filter((function(e){return e.answer})).length;return Math.floor(t/e.questions.length*100)}},p={updateQuestion:function(e,t){var n=e.questions.filter((function(e){return e.id===t.id})).length;n||e.questions.push(t)}},f={},d={namespaced:!0,state:s,getters:l,mutations:p,actions:f};r["a"].use(a["a"]);t["a"]=new a["a"].Store({strict:!0,state:o,actions:i,getters:c,mutations:u,modules:{current:d}})},"5c0b":function(e,t,n){"use strict";var r=n("0554"),a=n.n(r);a.a},7954:function(e,t,n){"use strict";n.r(t);var r=n("4360"),a=n("3a34"),o=n.n(a),i=null,c=/lexingchefu|vfu365/.test(r["a"].getters["host"]||window.location.origin);c||(i=new o.a),t["default"]=i},"96a4":function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,".cube-btn{padding:14px 0;border-radius:0}.cube-tab-bar{height:42px;background-color:#fff}.cube-tab-bar .cube-tab{font-size:15px;color:#1a1a1a}.cube-tab-bar .cube-tab_active{color:#f98700}.cube-toast-tip{max-width:65vw}input:disabled{-webkit-text-fill-color:#666;color:#666;opacity:1}input:disabled::-webkit-input-placeholder{-webkit-text-fill-color:#ccc}input:disabled::-moz-placeholder{-webkit-text-fill-color:#ccc}input:disabled:-ms-input-placeholder{-webkit-text-fill-color:#ccc}input:disabled::-ms-input-placeholder{-webkit-text-fill-color:#ccc}input:disabled::placeholder{-webkit-text-fill-color:#ccc}#app{height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}#app .back-leave-active,#app .forward-enter{opacity:.5;-webkit-transform:translateX(100%);transform:translateX(100%)}#app .router-view-c{position:absolute;-webkit-transition:opacity .5s,-webkit-transform .5s;transition:opacity .5s,-webkit-transform .5s;transition:opacity .5s,transform .5s;transition:opacity .5s,transform .5s,-webkit-transform .5s;width:100%}#app .back-enter,#app .forward-leave-active{opacity:.5;-webkit-transform:translateX(-100%);transform:translateX(-100%)}#app .audio{display:none}",""]),e.exports=t},e4fa:function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:e.transitionName}},[n("vue-page-stack",[n("router-view",{key:e.$route.fullPath,staticClass:"router-view-c"})],1)],1),n("audio",{staticClass:"audio",attrs:{id:"audio",preoload:"",loop:""}})],1)},a=[],o=(n("b0c0"),n("acd8"),n("ac1f"),n("5319"),n("1276"),n("18a0")),i=n.n(o),c=(n("96cf"),n("1da1")),u=n("bc3a"),s=n.n(u);n("d3b7");Promise.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){throw n}))}))};var l=Promise,p=n("4360");s.a.interceptors.response.use((function(e){return p["a"].commit("updateNetworkError",!1),e}),(function(e){var t=null;switch(e.message){case"Network Error":return t={data:{resultCode:"0",errorMessage:"网络已断开"}},p["a"].commit("updateNetworkError",!0),t}return l.reject(e)}));var f=function(e){return new l((function(t,n){var r=e.data;"100"===r.resultCode?t(r):n(r)}))},d={get:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=p["a"].getters.current.host||"",n.next=3,s.a.get(r+e,{params:t});case 3:return a=n.sent,n.abrupt("return",f(a));case 5:case"end":return n.stop()}}),n)})))()},post:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=p["a"].getters.current.host||"",n.next=3,s.a.post(r+e,t);case 3:return a=n.sent,n.abrupt("return",f(a));case 5:case"end":return n.stop()}}),n)})))()},put:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=p["a"].getters.current.host||"",n.next=3,s.a.put(r+e,t);case 3:return a=n.sent,n.abrupt("return",f(a));case 5:case"end":return n.stop()}}),n)})))()},delete:function(e,t){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=p["a"].getters.current.host||"",n.next=3,s.a.delete(r+e,{data:t});case 3:return a=n.sent,n.abrupt("return",f(a));case 5:case"end":return n.stop()}}),n)})))()}},h={checkData:null,share:function(e,t){this.getSignature((function(n){i.a.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["showMenuItems","showOptionMenu","hideAllNonBaseMenuItem","onMenuShareTimeline","onMenuShareAppMessage","onMenuShareQQ","onMenuShareQZone"]}),i.a.ready((function(){i.a.showOptionMenu(),i.a.hideAllNonBaseMenuItem(),i.a.showMenuItems({menuList:["menuItem:share:appMessage","menuItem:share:timeline","menuItem:share:qq","menuItem:share:QZone"]}),i.a.onMenuShareAppMessage({title:e.title,desc:e.desc,link:n.signHref.replace(/(\?|#)[^"]*/g,"")+"#"+e.path,imgUrl:e.imgUrl||window.location.origin+"/upload/image/default_user_icon.png",type:"link",dataUrl:"",success:function(e){console.log(e),t(e)},fail:function(e){console.log(e)},cancel:function(e){console.log(e)}}),i.a.onMenuShareTimeline({title:e.title,link:n.signHref.replace(/(\?|#)[^"]*/g,"")+"#"+e.path,imgUrl:e.imgUrl||window.location.origin+"/upload/image/default_user_icon.png",success:function(e){console.log(e),t(e)}}),i.a.onMenuShareQQ({title:e.title,desc:e.desc,link:n.signHref.replace(/(\?|#)[^"]*/g,"")+"#"+e.path,imgUrl:e.imgUrl||window.location.origin+"/upload/image/default_user_icon.png",success:function(e){console.log(e),t(e)}}),i.a.onMenuShareQZone({title:e.title,desc:e.desc,link:n.signHref.replace(/(\?|#)[^"]*/g,"")+"#"+e.path,imgUrl:e.imgUrl||window.location.origin+"/upload/image/default_user_icon.png",success:function(e){console.log(e),t(e)}})})),i.a.error((function(e){console.warn(e)}))}))},payment:function(e,t){this.getSignature((function(n){i.a.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["chooseWXPay"]}),i.a.ready((function(){i.a.chooseWXPay({timestamp:e.timestamp,nonceStr:e.noncestr,package:"prepay_id=".concat(e.prepayid),signType:"MD5",paySign:e.signature,success:function(e){t(e)},fail:function(e){console.log(e)},cancel:function(e){console.log(e)}})}))}))},scan:function(e){var t=e.success,n=e.cancel;this.getSignature((function(e){i.a.config({debug:!1,appId:e.appId,timestamp:e.timestamp,nonceStr:e.nonceStr,signature:e.signature,jsApiList:["scanQRCode"]}),i.a.ready((function(){i.a.scanQRCode({needResult:1,scanType:["qrCode","barCode"],success:function(e){console.log("扫码数据",e),t(e)},cancel:function(e){n&&n(e),console.log("cancel数据",e)},fail:function(e){console.log("fail数据",e)},complete:function(e){console.log("complete数据",e)}})})),i.a.error((function(e){console.warn(e)}))}))},location:function(e,t){this.getSignature((function(n){i.a.config({debug:!1,appId:n.appId,timestamp:n.timestamp,nonceStr:n.nonceStr,signature:n.signature,jsApiList:["openLocation"]}),i.a.ready((function(){i.a.openLocation({latitude:parseFloat(e.latitude),longitude:parseFloat(e.longitude),name:e.name,address:"",scale:13,infoUrl:"",success:function(e){console.log(e),t&&t()},fail:function(e){console.log(e)}})})),i.a.error((function(e){console.warn(e)}))}))},hideOptionMenu:function(e){this.getSignature((function(t){i.a.config({debug:!1,appId:t.appId,timestamp:t.timestamp,nonceStr:t.nonceStr,signature:t.signature,jsApiList:["hideOptionMenu"]}),i.a.ready((function(){i.a.hideOptionMenu(),e()}))}))},getSignature:function(e){var t=this;if(this.checkData)e(this.checkData);else{var n=p["a"].getters.current.userId,r=p["a"].getters.current.shopId,a=p["a"].getters.current.weChatState,o=location.href.split("#")[0],i={clientType:"3",methodName:"QueryJssdkConfig",shopId:r,userId:n,urlInfo:o,wechatOpenId:a};d.get("/rest/wechat/jssdkConfig.jhtml",Object.assign({},{clientType:"3",userId:n,shopId:r},i)).then((function(n){n.signHref=o,t.checkData=n,e(t.checkData)}))}}},g=h,m={name:"app",data:function(){return{transitionName:"forward"}},computed:{},watch:{$route:function(e,t){"forward"===e.params["stack-key-dir"]?this.transitionName="forward":this.transitionName="back"}},components:{},created:function(){this.hideOptionMenu()},mounted:function(){},methods:{hideOptionMenu:function(){g.hideOptionMenu((function(){console.log("hideOptionMenu")}))}}},b=m,w=(n("5c0b"),n("2877")),v=Object(w["a"])(b,r,a,!1,null,null,null),k=v.exports,y=n("2b0e"),S=n("8c4f");y["a"].use(S["a"]);var I=[{path:"/index",component:function(){return n.e("chunk-16a51fa6").then(n.bind(null,"7f5c"))},meta:{title:"首页"}},{path:"/question-detail",component:function(){return n.e("chunk-65f0c7ec").then(n.bind(null,"ad65"))},meta:{title:"TIKU"}}],x=function(){return new S["a"]({scrollBehavior:function(){return{y:0}},routes:I})},M=x();M.beforeEach(function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:document.title=t.meta.title||"",r();case 2:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}());var O=M,j=n("cadd"),C=n("caf9");y["a"].use(j["a"]),y["a"].config.productionTip=!1,y["a"].use(C["a"]);var P={init:function(){return new Promise((function(e,t){n("7954"),e()}))}},N=n("04e1"),_=n.n(N);y["a"].use(_.a,{router:O}),P.init().then((function(){new y["a"]({router:O,store:p["a"],render:function(e){return e(k)}}).$mount("#app")}))}});