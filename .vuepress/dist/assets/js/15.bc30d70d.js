(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{164:function(t,e,n){},211:function(t,e,n){"use strict";var l=n(164);n.n(l).a},231:function(t,e,n){"use strict";n.r(e);var l={name:"vue-switch",props:{on:{type:Boolean,default:!1},name:String,size:{type:String,default:"m"},disabled:Boolean,loading:Boolean},data:function(){return{value:null}},computed:{val:function(){return null===this.value?this.on:this.value}},methods:{toggle:function(){this.disabled||this.loading||(this.value=!this.val,this.$emit("toggle",this.val))}}},a=(n(211),n(6)),i=Object(a.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-switch",class:[{on:t.val},{disabled:t.disabled},{loading:t.loading},t.size],attrs:{tabindex:"0"},on:{click:t.toggle,keydown:[function(e){return"button"in e||!t._k(e.keyCode,"space",32,e.key," ")?t.toggle(e):null},function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.toggle(e):null}]}},[n("input",{attrs:{type:"hidden",name:t.name},domProps:{value:t.val}}),n("div",{staticClass:"label",class:{on:t.val}},[t.val?t._t("on"):t._e(),t.val?t._e():t._t("off")],2)])},[],!1,null,"6f344e3f",null);i.options.__file="vue-switch.vue";e.default=i.exports}}]);