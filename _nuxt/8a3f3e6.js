(window.webpackJsonp=window.webpackJsonp||[]).push([[13,4,15],{285:function(t,n,e){"use strict";e.r(n);var o={name:"Title",props:["title","description"]},r=(e(290),e(56)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"title"},[e("h2",[t._v(t._s(t.title))]),t._v(" "),e("div",{staticClass:"wrapper"},[e("div",{staticClass:"text-wrapper"},[t._v(t._s(t.description))])])])}),[],!1,null,"a7f0a520",null);n.default=component.exports},286:function(t,n,e){var content=e(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("10bcef34",content,!0,{sourceMap:!1})},287:function(t,n,e){"use strict";e.r(n);e(197);var o=!1;try{var r=Object.defineProperty({},"passive",{get:function(){return o=!0}});window.addEventListener("test",null,r)}catch(t){console.log("Passive not supported")}var c={props:{name:String,appear:{type:Boolean,default:!1},offsetTop:{type:Number,default:0},duration:{type:Number,default:1}},data:function(){return{isVisible:!1}},methods:{inViewport:function(){var rect=this.$el.getBoundingClientRect();return rect.top<=window.innerHeight-this.offsetTop&&rect.left<=window.innerWidth},detectVisibility:function(){this.isVisible=this.inViewport()}},mounted:function(){this.$nextTick(this.detectVisibility),window.addEventListener("scroll",this.detectVisibility,!!o&&{passive:!0}),window.addEventListener("resize",this.detectVisibility,!!o&&{passive:!0}),window.addEventListener("orientationchange",this.detectVisibility,!!o&&{passive:!0})},destroyed:function(){window.removeEventListener("scroll",this.detectVisibility),window.removeEventListener("resize",this.detectVisibility),window.removeEventListener("orientationchange",this.detectVisibility)}},l=e(56),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("transition",{attrs:{name:t.name,appear:t.appear}},[t.isVisible?e("div",{style:{animationDuration:t.duration+"s",transitionDuration:t.duration+"s"}},[t._t("default")],2):t._e()])],1)}),[],!1,null,null,null);n.default=component.exports},290:function(t,n,e){"use strict";e(286)},291:function(t,n,e){var o=e(57),r=e(131),c=e(132),l=o((function(i){return i[1]})),d=r(c);l.push([t.i,'@font-face{font-family:"Montserrat-Regular";src:url('+d+')}.title[data-v-a7f0a520]{text-align:center;color:#353535}.title h2[data-v-a7f0a520]{font-size:4rem}.text-wrapper[data-v-a7f0a520],.title h2[data-v-a7f0a520]{text-transform:uppercase}.text-wrapper[data-v-a7f0a520]:after{content:"";width:150px;display:block;margin:20px auto;border-bottom:1px solid #353535}',""]),t.exports=l},297:function(t,n,e){t.exports=e.p+"img/C.3c63617.png"},298:function(t,n,e){t.exports=e.p+"img/Csharp.756a436.png"},299:function(t,n,e){t.exports=e.p+"img/Octocat.a1c474f.png"},300:function(t,n,e){t.exports=e.p+"img/android.8fc0e32.png"},301:function(t,n,e){t.exports=e.p+"img/android_java.6506a70.png"},302:function(t,n,e){t.exports=e.p+"img/cplusplus.d6fac03.png"},303:function(t,n,e){t.exports=e.p+"img/css.ae2b1ec.png"},304:function(t,n,e){t.exports=e.p+"img/django.668171f.png"},305:function(t,n,e){t.exports=e.p+"img/docker.f551b92.png"},306:function(t,n,e){t.exports=e.p+"img/html.7abdac2.png"},307:function(t,n,e){t.exports=e.p+"img/java.8eadfd0.png"},308:function(t,n,e){t.exports=e.p+"img/laravel.784a4c2.png"},309:function(t,n,e){t.exports=e.p+"img/linux.d308c6e.png"},310:function(t,n,e){t.exports=e.p+"img/nuxtjs.2103874.png"},311:function(t,n,e){t.exports=e.p+"img/ovh.567d946.png"},312:function(t,n,e){t.exports=e.p+"img/php.8c6fdcc.png"},313:function(t,n,e){t.exports=e.p+"img/python.ecfb4e6.png"},314:function(t,n,e){t.exports=e.p+"img/ruby_on_rails.5cfa93e.png"},315:function(t,n,e){t.exports=e.p+"img/tensorflow.6ceb7cd.png"},316:function(t,n,e){t.exports=e.p+"img/vuejs.b2e59c0.png"},325:function(t,n,e){var content=e(343);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("2f99b646",content,!0,{sourceMap:!1})},341:function(t,n,e){var map={"./C.png":297,"./Csharp.png":298,"./Octocat.png":299,"./android.png":300,"./android_java.png":301,"./cplusplus.png":302,"./css.png":303,"./django.png":304,"./docker.png":305,"./html.png":306,"./java.png":307,"./laravel.png":308,"./linux.png":309,"./nuxtjs.png":310,"./ovh.png":311,"./php.png":312,"./python.png":313,"./ruby_on_rails.png":314,"./tensorflow.png":315,"./vuejs.png":316};function o(t){var n=r(t);return e(n)}function r(t){if(!e.o(map,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=341},342:function(t,n,e){"use strict";e(325)},343:function(t,n,e){var o=e(57),r=e(131),c=e(132),l=o((function(i){return i[1]})),d=r(c);l.push([t.i,'@font-face{font-family:"Montserrat-Regular";src:url('+d+")}#skills[data-v-f2f6679c]{background-color:#fff}@media(min-width:992px){.section-content[data-v-f2f6679c]{width:80%;margin:0 auto}}img[data-v-f2f6679c]{max-width:120px}.altCaption[data-v-f2f6679c]{color:#3c6e71;margin-top:1rem}",""]),t.exports=l},354:function(t,n,e){"use strict";e.r(n);var o={name:"Skills",components:{Title:e(285).default},props:["content"],methods:{getImgUrl:function(img){return e(341)("./"+img)}}},r=(e(342),e(56)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("section",{attrs:{id:"skills"}},[e("AnimateOnVisible",{attrs:{name:"fadeDown",duration:1}},[e("Title",{attrs:{title:t.content.metadata.title,description:t.content.metadata.description}})],1),t._v(" "),e("div",{staticClass:"section-content"},[e("div",{staticClass:"container-fluid"},[e("div",{staticClass:"row d-flex flex-wrap align-items-center"},t._l(this.content.metadata.items,(function(n,o){return e("div",{key:o,staticClass:"col-md-2 m-auto pb-4"},[e("AnimateOnVisible",{attrs:{name:"bounce"}},[e("img",{staticClass:"img-responsive mx-auto d-block",attrs:{id:"imgLogo",src:t.getImgUrl(n.img),alt:n.title}}),t._v(" "),e("div",{staticClass:"altCaption text-center",attrs:{id:"divAlt"}},[t._v(t._s(n.title))])])],1)})),0)])])],1)}),[],!1,null,"f2f6679c",null);n.default=component.exports;installComponents(component,{Title:e(285).default,AnimateOnVisible:e(287).default})}}]);