(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{287:function(t,e,n){"use strict";n.r(e);n(197);var o=!1;try{var r=Object.defineProperty({},"passive",{get:function(){return o=!0}});window.addEventListener("test",null,r)}catch(t){console.log("Passive not supported")}var d={props:{name:String,appear:{type:Boolean,default:!1},offsetTop:{type:Number,default:0},duration:{type:Number,default:1}},data:function(){return{isVisible:!1}},methods:{inViewport:function(){var rect=this.$el.getBoundingClientRect();return rect.top<=window.innerHeight-this.offsetTop&&rect.left<=window.innerWidth},detectVisibility:function(){this.isVisible=this.inViewport()}},mounted:function(){this.$nextTick(this.detectVisibility),window.addEventListener("scroll",this.detectVisibility,!!o&&{passive:!0}),window.addEventListener("resize",this.detectVisibility,!!o&&{passive:!0}),window.addEventListener("orientationchange",this.detectVisibility,!!o&&{passive:!0})},destroyed:function(){window.removeEventListener("scroll",this.detectVisibility),window.removeEventListener("resize",this.detectVisibility),window.removeEventListener("orientationchange",this.detectVisibility)}},l=n(56),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{name:t.name,appear:t.appear}},[t.isVisible?n("div",{style:{animationDuration:t.duration+"s",transitionDuration:t.duration+"s"}},[t._t("default")],2):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports}}]);