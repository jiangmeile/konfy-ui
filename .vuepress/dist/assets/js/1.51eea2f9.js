(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{116:function(t,e,n){var i=n(4),s=n(21),r=n(9),a=n(117),o="["+a+"]",u=RegExp("^"+o+o+"*"),l=RegExp(o+o+"*$"),c=function(t,e,n){var s={},o=r(function(){return!!a[t]()||"​"!="​"[t]()}),u=s[t]=o?e(f):a[t];n&&(s[n]=u),i(i.P+i.F*o,"String",s)},f=c.trim=function(t,e){return t=String(s(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=c},117:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},121:function(t,e,n){"use strict";var i=n(4),s=n(72)(!1),r=[].indexOf,a=!!r&&1/[1].indexOf(1,-0)<0;i(i.P+i.F*(a||!n(24)(r)),"Array",{indexOf:function(t){return a?r.apply(this,arguments)||0:s(this,t,arguments[1])}})},126:function(t,e,n){"use strict";var i=n(12),s=n(15),r=n(9),a=n(21),o=n(1);t.exports=function(t,e,n){var u=o(t),l=n(a,u,""[t]),c=l[0],f=l[1];r(function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})&&(s(String.prototype,t,c),i(RegExp.prototype,u,2==e?function(t,e){return f.call(t,this,e)}:function(t){return f.call(t,this)}))}},127:function(t,e,n){n(126)("replace",2,function(t,e,n){return[function(i,s){"use strict";var r=t(this),a=void 0==i?void 0:i[e];return void 0!==a?a.call(i,r,s):n.call(String(r),i,s)},n]})},128:function(t,e,n){"use strict";var i=n(5);t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},129:function(t,e,n){"use strict";var i=n(4),s=n(36)(3);i(i.P+i.F*!n(24)([].some,!0),"Array",{some:function(t){return s(this,t,arguments[1])}})},132:function(t,e,n){},133:function(t,e,n){},134:function(t,e,n){},135:function(t,e,n){var i=n(2),s=n(71),r=n(7).f,a=n(70).f,o=n(76),u=n(128),l=i.RegExp,c=l,f=l.prototype,p=/a/g,h=/a/g,d=new l(p)!==p;if(n(8)&&(!d||n(9)(function(){return h[n(1)("match")]=!1,l(p)!=p||l(h)==h||"/a/i"!=l(p,"i")}))){l=function(t,e){var n=this instanceof l,i=o(t),r=void 0===e;return!n&&i&&t.constructor===l&&r?t:s(d?new c(i&&!r?t.source:t,e):c((i=t instanceof l)?t.source:t,i&&r?u.call(t):e),n?this:f,l)};for(var v=function(t){t in l||r(l,t,{configurable:!0,get:function(){return c[t]},set:function(e){c[t]=e}})},g=a(c),m=0;g.length>m;)v(g[m++]);f.constructor=l,l.prototype=f,n(15)(i,"RegExp",l)}n(55)("RegExp")},136:function(t,e,n){},137:function(t,e,n){},138:function(t,e,n){},139:function(t,e,n){},140:function(t,e,n){},141:function(t,e,n){},142:function(t,e,n){},143:function(t,e,n){},144:function(t,e,n){},145:function(t,e,n){},171:function(t,e,n){var i,s;
/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */void 0===(s="function"==typeof(i=function(){var t={version:"0.2.0"},e=t.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};function n(t,e,n){return t<e?e:t>n?n:t}function i(t){return 100*(-1+t)}t.configure=function(t){var n,i;for(n in t)void 0!==(i=t[n])&&t.hasOwnProperty(n)&&(e[n]=i);return this},t.status=null,t.set=function(a){var o=t.isStarted();a=n(a,e.minimum,1),t.status=1===a?null:a;var u=t.render(!o),l=u.querySelector(e.barSelector),c=e.speed,f=e.easing;return u.offsetWidth,s(function(n){""===e.positionUsing&&(e.positionUsing=t.getPositioningCSS()),r(l,function(t,n,s){var r;return(r="translate3d"===e.positionUsing?{transform:"translate3d("+i(t)+"%,0,0)"}:"translate"===e.positionUsing?{transform:"translate("+i(t)+"%,0)"}:{"margin-left":i(t)+"%"}).transition="all "+n+"ms "+s,r}(a,c,f)),1===a?(r(u,{transition:"none",opacity:1}),u.offsetWidth,setTimeout(function(){r(u,{transition:"all "+c+"ms linear",opacity:0}),setTimeout(function(){t.remove(),n()},c)},c)):setTimeout(n,c)}),this},t.isStarted=function(){return"number"==typeof t.status},t.start=function(){t.status||t.set(0);var n=function(){setTimeout(function(){t.status&&(t.trickle(),n())},e.trickleSpeed)};return e.trickle&&n(),this},t.done=function(e){return e||t.status?t.inc(.3+.5*Math.random()).set(1):this},t.inc=function(e){var i=t.status;return i?("number"!=typeof e&&(e=(1-i)*n(Math.random()*i,.1,.95)),i=n(i+e,0,.994),t.set(i)):t.start()},t.trickle=function(){return t.inc(Math.random()*e.trickleRate)},function(){var e=0,n=0;t.promise=function(i){return i&&"resolved"!==i.state()?(0===n&&t.start(),e++,n++,i.always(function(){0==--n?(e=0,t.done()):t.set((e-n)/e)}),this):this}}(),t.render=function(n){if(t.isRendered())return document.getElementById("nprogress");o(document.documentElement,"nprogress-busy");var s=document.createElement("div");s.id="nprogress",s.innerHTML=e.template;var a,u=s.querySelector(e.barSelector),l=n?"-100":i(t.status||0),f=document.querySelector(e.parent);return r(u,{transition:"all 0 linear",transform:"translate3d("+l+"%,0,0)"}),e.showSpinner||(a=s.querySelector(e.spinnerSelector))&&c(a),f!=document.body&&o(f,"nprogress-custom-parent"),f.appendChild(s),s},t.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(e.parent),"nprogress-custom-parent");var t=document.getElementById("nprogress");t&&c(t)},t.isRendered=function(){return!!document.getElementById("nprogress")},t.getPositioningCSS=function(){var t=document.body.style,e="WebkitTransform"in t?"Webkit":"MozTransform"in t?"Moz":"msTransform"in t?"ms":"OTransform"in t?"O":"";return e+"Perspective"in t?"translate3d":e+"Transform"in t?"translate":"margin"};var s=function(){var t=[];function e(){var n=t.shift();n&&n(e)}return function(n){t.push(n),1==t.length&&e()}}(),r=function(){var t=["Webkit","O","Moz","ms"],e={};function n(n){return n=function(t){return t.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})}(n),e[n]||(e[n]=function(e){var n=document.body.style;if(e in n)return e;for(var i,s=t.length,r=e.charAt(0).toUpperCase()+e.slice(1);s--;)if((i=t[s]+r)in n)return i;return e}(n))}function i(t,e,i){e=n(e),t.style[e]=i}return function(t,e){var n,s,r=arguments;if(2==r.length)for(n in e)void 0!==(s=e[n])&&e.hasOwnProperty(n)&&i(t,n,s);else i(t,r[1],r[2])}}();function a(t,e){var n="string"==typeof t?t:l(t);return n.indexOf(" "+e+" ")>=0}function o(t,e){var n=l(t),i=n+e;a(n,e)||(t.className=i.substring(1))}function u(t,e){var n,i=l(t);a(t,e)&&(n=i.replace(" "+e+" "," "),t.className=n.substring(1,n.length-1))}function l(t){return(" "+(t.className||"")+" ").replace(/\s+/gi," ")}function c(t){t&&t.parentNode&&t.parentNode.removeChild(t)}return t})?i.call(e,n,e,t):i)||(t.exports=s)},172:function(t,e,n){"use strict";n(173)("link",function(t){return function(e){return t(this,"a","href",e)}})},173:function(t,e,n){var i=n(4),s=n(9),r=n(21),a=/"/g,o=function(t,e,n,i){var s=String(r(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),o+">"+s+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(o),i(i.P+i.F*s(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},174:function(t,e,n){"use strict";var i=n(132);n.n(i).a},175:function(t,e,n){"use strict";var i=n(133);n.n(i).a},176:function(t,e,n){"use strict";n(116)("trim",function(t){return function(){return t(this,3)}})},177:function(t,e,n){"use strict";var i=n(134);n.n(i).a},178:function(t,e,n){n(126)("match",1,function(t,e,n){return[function(n){"use strict";var i=t(this),s=void 0==n?void 0:n[e];return void 0!==s?s.call(n,i):new RegExp(n)[e](String(i))},n]})},179:function(t,e,n){"use strict";var i=n(136);n.n(i).a},180:function(t,e,n){"use strict";var i=n(137);n.n(i).a},181:function(t,e,n){"use strict";var i=n(138);n.n(i).a},182:function(t,e,n){"use strict";var i=n(139);n.n(i).a},183:function(t,e,n){"use strict";var i=n(140);n.n(i).a},184:function(t,e,n){"use strict";var i=n(141);n.n(i).a},185:function(t,e,n){"use strict";var i=n(142);n.n(i).a},186:function(t,e,n){"use strict";var i=n(143);n.n(i).a},187:function(t,e,n){"use strict";var i=n(144);n.n(i).a},188:function(t,e,n){"use strict";var i=n(145);n.n(i).a},217:function(t,e,n){"use strict";n.r(e);n(78);var i=n(0),s=n(171),r=n.n(s);n(22),n(25),n(54),n(129),n(172);const a=/#.*$/,o=/\.(md|html)$/,u=/\/$/,l=/^(https?:|mailto:|tel:)/;function c(t){return decodeURI(t).replace(a,"").replace(o,"")}function f(t){return l.test(t)}function p(t){if(f(t))return t;const e=t.match(a),n=e?e[0]:"",i=c(t);return u.test(i)?t:i+".html"+n}function h(t,e){const n=t.hash,i=function(t){const e=t.match(a);if(e)return e[0]}(e);return(!i||n===i)&&c(t.path)===c(e)}function d(t,e,n){n&&(e=function(t,e,n){const i=t.charAt(0);if("/"===i)return t;if("?"===i||"#"===i)return e+t;const s=e.split("/");n&&s[s.length-1]||s.pop();const r=t.replace(/^\//,"").split("/");for(let t=0;t<r.length;t++){const e=r[t];".."===e?s.pop():"."!==e&&s.push(e)}""!==s[0]&&s.unshift("");return s.join("/")}(e,n));const i=c(e);for(let e=0;e<t.length;e++)if(c(t[e].regularPath)===i)return Object.assign({},t[e],{type:"page",path:p(t[e].path)});return console.error(`[vuepress] No matching page found for sidebar item "${e}"`),{}}function v(t,e,n,i){const{pages:s,themeConfig:r}=n,a=i&&r.locales&&r.locales[i]||r;if("auto"===(t.frontmatter.sidebar||a.sidebar||r.sidebar))return function(t){const e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,children:e.map(e=>({type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}))}]}(t);const o=a.sidebar||r.sidebar;if(o){const{base:t,config:n}=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(const n in e)if(0===b(t).indexOf(n))return{base:n,config:e[n]};return{}}(e,o);return n?n.map(e=>(function t(e,n,i,s){if("string"==typeof e)return d(n,e,i);if(Array.isArray(e))return Object.assign(d(n,e[0],i),{title:e[1]});{s&&console.error("[vuepress] Nested sidebar groups are not supported. Consider using navbar + categories instead.");const r=e.children||[];return{type:"group",title:e.title,children:r.map(e=>t(e,n,i,!0)),collapsable:!1!==e.collapsable}}})(e,s,t)):[]}return[]}function g(t){let e;return(t=t.map(t=>Object.assign({},t))).forEach(t=>{2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)}),t.filter(t=>2===t.level)}function m(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}function b(t){return/(\.html|\/)$/.test(t)?t:t+"/"}var _={props:{item:{required:!0}},computed:{link:function(){return p(this.item.link)},exact:function(){var t=this;return this.$site.locales?Object.keys(this.$site.locales).some(function(e){return e===t.link}):"/"===this.link}},methods:{isExternal:f,isMailto:function(t){return/^mailto:/.test(t)},isTel:function(t){return/^tel:/.test(t)}}},k=n(6),x=Object(k.a)(_,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isExternal(t.link)?n("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[t._v("\n  "+t._s(t.item.text)+"\n  "),n("OutboundLink")],1):n("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[t._v(t._s(t.item.text))])},[],!1,null,null,null);x.options.__file="NavLink.vue";var C=x.exports,$={components:{NavLink:C},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},y=(n(174),Object(k.a)($,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:"hero"}}):t._e(),t._v(" "),n("h1",[t._v(t._s(t.data.heroText||t.$title||"Hello"))]),t._v(" "),n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,function(e,i){return n("div",{key:i,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})):t._e(),t._v(" "),n("Content",{staticClass:"custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):t._e()],1)},[],!1,null,null,null));y.options.__file="Home.vue";var S=y.exports,w=(n(175),Object(k.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])},[],!1,null,null,null));w.options.__file="SidebarButton.vue";var L=w.exports,O=(n(56),n(121),n(176),{data:function(){return{query:"",focused:!1,focusIndex:0}},computed:{showSuggestions:function(){return this.focused&&this.suggestions&&this.suggestions.length},suggestions:function(){var t=this.query.trim().toLowerCase();if(t){for(var e=this.$site.pages,n=this.$localePath,i=function(e){return e.title&&e.title.toLowerCase().indexOf(t)>-1},s=[],r=0;r<e.length&&!(s.length>=5);r++){var a=e[r];if(this.getPageLocalePath(a)===n)if(i(a))s.push(a);else if(a.headers)for(var o=0;o<a.headers.length&&!(s.length>=5);o++){var u=a.headers[o];i(u)&&s.push(Object.assign({},a,{path:a.path+"#"+u.slug,header:u}))}}return s}},alignRight:function(){return(this.$site.themeConfig.nav||[]).length+(this.$site.repo?1:0)<=2}},methods:{getPageLocalePath:function(t){for(var e in this.$site.locales||{})if("/"!==e&&0===t.path.indexOf(e))return e;return"/"},onUp:function(){this.showSuggestions&&(this.focusIndex>0?this.focusIndex--:this.focusIndex=this.suggestions.length-1)},onDown:function(){this.showSuggestions&&(this.focusIndex<this.suggestions.length-1?this.focusIndex++:this.focusIndex=0)},go:function(t){this.showSuggestions&&(this.$router.push(this.suggestions[t].path),this.query="",this.focusIndex=0)},focus:function(t){this.focusIndex=t},unfocus:function(){this.focusIndex=-1}}}),E=(n(177),Object(k.a)(O,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"search-box"},[n("input",{class:{focused:t.focused},attrs:{"aria-label":"Search",autocomplete:"off",spellcheck:"false"},domProps:{value:t.query},on:{input:function(e){t.query=e.target.value},focus:function(e){t.focused=!0},blur:function(e){t.focused=!1},keyup:[function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.go(t.focusIndex)},function(e){return"button"in e||!t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?t.onUp(e):null},function(e){return"button"in e||!t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?t.onDown(e):null}]}}),t._v(" "),t.showSuggestions?n("ul",{staticClass:"suggestions",class:{"align-right":t.alignRight},on:{mouseleave:t.unfocus}},t._l(t.suggestions,function(e,i){return n("li",{staticClass:"suggestion",class:{focused:i===t.focusIndex},on:{mousedown:function(e){t.go(i)},mouseenter:function(e){t.focus(i)}}},[n("a",{attrs:{href:e.path},on:{click:function(t){t.preventDefault()}}},[n("span",{staticClass:"page-title"},[t._v(t._s(e.title||e.path))]),t._v(" "),e.header?n("span",{staticClass:"header"},[t._v("> "+t._s(e.header.title))]):t._e()])])})):t._e()])},[],!1,null,null,null));E.options.__file="SearchBox.vue";var T=E.exports,I=(n(135),n(178),n(29)),N=(n(127),n(52),{name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}}),P=(n(179),Object(k.a)(N,function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)},[],!1,null,null,null));P.options.__file="DropdownTransition.vue";var j=P.exports,U={components:{NavLink:C,DropdownTransition:j},data:function(){return{open:!1}},props:{item:{required:!0}},methods:{toggle:function(){this.open=!this.open}}},M=(n(180),Object(k.a)(U,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[n("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[n("span",{staticClass:"title"},[t._v(t._s(t.item.text))]),t._v(" "),n("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),n("DropdownTransition",[n("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,function(e,i){return n("li",{key:e.link||i,staticClass:"dropdown-item"},["links"===e.type?n("h4",[t._v(t._s(e.text))]):t._e(),t._v(" "),"links"===e.type?n("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(e.items,function(t){return n("li",{key:t.link,staticClass:"dropdown-subitem"},[n("NavLink",{attrs:{item:t}})],1)})):n("NavLink",{attrs:{item:e}})],1)}))])],1)},[],!1,null,null,null));M.options.__file="DropdownLink.vue";var D={components:{NavLink:C,DropdownLink:M.exports},computed:{userNav:function(){return this.$themeLocaleConfig.nav||this.$site.themeConfig.nav||[]},nav:function(){var t=this,e=this.$site.locales;if(e&&Object.keys(e).length>1){var n=this.$page.path,i=this.$router.options.routes,s=this.$site.themeConfig.locales||{},r={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(e).map(function(r){var a,o=e[r],u=s[r]&&s[r].label||o.lang;return o.lang===t.$lang?a=n:(a=n.replace(t.$localeConfig.path,r),i.some(function(t){return t.path===a})||(a=r)),{text:u,link:a}})};return Object(I.a)(this.userNav).concat([r])}return this.userNav},userLinks:function(){return(this.nav||[]).map(function(t){return Object.assign(m(t),{items:(t.items||[]).map(m)})})},repoLink:function(){var t=this.$site.themeConfig.repo;if(t)return/^https?:/.test(t)?t:"https://github.com/".concat(t)},repoLabel:function(){if(this.repoLink){if(this.$site.themeConfig.repoLabel)return this.$site.themeConfig.repoLabel;for(var t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"],n=0;n<e.length;n++){var i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}}},A=(n(181),Object(k.a)(D,function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.userLinks.length||t.repoLink?n("nav",{staticClass:"nav-links"},[t._l(t.userLinks,function(t){return n("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?n("DropdownLink",{attrs:{item:t}}):n("NavLink",{attrs:{item:t}})],1)}),t._v(" "),t.repoLink?n("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n    "+t._s(t.repoLabel)+"\n    "),n("OutboundLink")],1):t._e()],2):t._e()},[],!1,null,null,null));A.options.__file="NavLinks.vue";var R=A.exports;function W(t,e){return t.ownerDocument.defaultView.getComputedStyle(t,null)[e]}var B={components:{SidebarButton:L,NavLinks:R,SearchBox:T,AlgoliaSearchBox:{}},data:function(){return{linksWrapMaxWidth:null}},mounted:function(){var t=this,e=parseInt(W(this.$el,"paddingLeft"))+parseInt(W(this.$el,"paddingRight")),n=function(){document.documentElement.clientWidth<719?t.linksWrapMaxWidth=null:t.linksWrapMaxWidth=t.$el.offsetWidth-e-(t.$refs.siteName&&t.$refs.siteName.offsetWidth||0)};n(),window.addEventListener("resize",n,!1)},computed:{algolia:function(){return this.$themeLocaleConfig.algolia||this.$site.themeConfig.algolia||{}},isAlgoliaSearch:function(){return this.algolia&&this.algolia.apiKey&&this.algolia.indexName}}},H=(n(182),Object(k.a)(B,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"navbar"},[n("SidebarButton",{on:{"toggle-sidebar":function(e){t.$emit("toggle-sidebar")}}}),t._v(" "),n("router-link",{staticClass:"home-link",attrs:{to:t.$localePath}},[t.$site.themeConfig.logo?n("img",{staticClass:"logo",attrs:{src:t.$withBase(t.$site.themeConfig.logo),alt:t.$siteTitle}}):t._e(),t._v(" "),t.$siteTitle?n("span",{ref:"siteName",staticClass:"site-name",class:{"can-hide":t.$site.themeConfig.logo}},[t._v(t._s(t.$siteTitle))]):t._e()]),t._v(" "),n("div",{staticClass:"links",style:{"max-width":t.linksWrapMaxWidth+"px"}},[t.isAlgoliaSearch?n("AlgoliaSearchBox",{attrs:{options:t.algolia}}):!1!==t.$site.themeConfig.search?n("SearchBox"):t._e(),t._v(" "),n("NavLinks",{staticClass:"can-hide"})],1)],1)},[],!1,null,null,null));H.options.__file="Navbar.vue";var q=H.exports;n(37);function G(t,e,n){var i=[];e.forEach(function(t){"group"===t.type?i.push.apply(i,Object(I.a)(t.children||[])):i.push(t)});for(var s=0;s<i.length;s++){var r=i[s];if("page"===r.type&&r.path===t.path)return i[s+n]}}var z={props:["sidebarItems"],computed:{contentMounted:function(){return this.$vuepress.$get("contentMounted")},lastUpdated:function(){if(this.$page.lastUpdated)return new Date(this.$page.lastUpdated).toLocaleString(this.$lang)},lastUpdatedText:function(){return"string"==typeof this.$themeLocaleConfig.lastUpdated?this.$themeLocaleConfig.lastUpdated:"string"==typeof this.$site.themeConfig.lastUpdated?this.$site.themeConfig.lastUpdated:"Last Updated"},prev:function(){var t=this.$page.frontmatter.prev;return!1===t?void 0:t?d(this.$site.pages,t,this.$route.path):function(t,e){return G(t,e,-1)}(this.$page,this.sidebarItems)},next:function(){var t=this.$page.frontmatter.next;return!1===t?void 0:t?d(this.$site.pages,t,this.$route.path):function(t,e){return G(t,e,1)}(this.$page,this.sidebarItems)},editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,n=t.editLinks,i=t.docsDir,s=void 0===i?"":i,r=t.docsBranch,a=void 0===r?"master":r,o=t.docsRepo,l=void 0===o?e:o,f=c(this.$page.path);return u.test(f)?f+="README.md":f+=".md",l&&n?this.createEditLink(e,l,s,a,f):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,n,i,s){return/bitbucket.org/.test(t)?(l.test(e)?e:t).replace(u,"")+"/".concat(i)+(n?"/"+n.replace(u,""):"")+s+"?mode=edit&spa=0&at=".concat(i,"&fileviewer=file-view-default"):(l.test(e)?e:"https://github.com/".concat(e)).replace(u,"")+"/edit/".concat(i)+(n?"/"+n.replace(u,""):"")+s}}},F=(n(183),Object(k.a)(z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page"},[t._t("top"),t._v(" "),n("Content"),t._v(" "),t.contentMounted?n("div",{staticClass:"page-edit"},[t.editLink?n("div",{staticClass:"edit-link"},[n("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.editLinkText))]),t._v(" "),n("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?n("div",{staticClass:"last-updated"},[n("span",{staticClass:"prefix"},[t._v(t._s(t.lastUpdatedText)+": ")]),t._v(" "),n("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]):t._e(),t._v(" "),t.contentMounted&&(t.prev||t.next)?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n        ←\n        "),t.prev?n("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n          "+t._s(t.prev.title||t.prev.path)+"\n        ")]):t._e()],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},[t.next?n("router-link",{attrs:{to:t.next.path}},[t._v("\n          "+t._s(t.next.title||t.next.path)+"\n        ")]):t._e(),t._v("\n        →\n      ")],1):t._e()])]):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));F.options.__file="Page.vue";var V=F.exports;function J(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}function X(t,e,n,i,s){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||r>s?null:t("ul",{class:"sidebar-sub-headers"},e.map(function(e){var a=h(i,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[J(t,n+"#"+e.slug,e.title,a),X(t,e.children,n,i,s,r+1)])}))}var Y={functional:!0,props:["item"],render:function(t,e){var n=e.parent,i=n.$page,s=n.$site,r=n.$route,o=e.props.item,u=h(r,o.path),l="auto"===o.type?u||o.children.some(function(t){return h(r,o.basePath+"#"+t.slug)}):u,c=J(t,o.path,o.title||o.path,l),f=null!=i.frontmatter.sidebarDepth?i.frontmatter.sidebarDepth:s.themeConfig.sidebarDepth,p=null==f?1:f,d=!!s.themeConfig.displayAllHeaders;return"auto"===o.type?[c,X(t,o.children,o.basePath,r,p)]:(l||d)&&o.headers&&!a.test(o.path)?[c,X(t,g(o.headers),o.path,r,p)]:c}},K=(n(184),Object(k.a)(Y,void 0,void 0,!1,null,null,null));K.options.__file="SidebarLink.vue";var Q=K.exports,Z={name:"SidebarGroup",props:["item","first","open","collapsable"],components:{SidebarLink:Q,DropdownTransition:j}},tt=(n(185),Object(k.a)(Z,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-group",class:{first:t.first,collapsable:t.collapsable}},[n("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){t.$emit("toggle")}}},[n("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?n("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),n("DropdownTransition",[t.open||!t.collapsable?n("ul",{ref:"items",staticClass:"sidebar-group-items"},t._l(t.item.children,function(t){return n("li",[n("SidebarLink",{attrs:{item:t}})],1)})):t._e()])],1)},[],!1,null,null,null));tt.options.__file="SidebarGroup.vue";var et={components:{SidebarGroup:tt.exports,SidebarLink:Q,NavLinks:R},props:["items"],data:function(){return{openGroupIndex:0}},created:function(){this.refreshIndex()},watch:{$route:function(){this.refreshIndex()}},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var i=e[n];if("group"===i.type&&i.children.some(function(e){return h(t,e.path)}))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return h(this.$route,t.regularPath)}}},nt=(n(186),Object(k.a)(et,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},[n("NavLinks"),t._v(" "),t._t("top"),t._v(" "),t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,function(e,i){return n("li",{key:i},["group"===e.type?n("SidebarGroup",{attrs:{item:e,first:0===i,open:i===t.openGroupIndex,collapsable:e.collapsable||e.collapsible},on:{toggle:function(e){t.toggleGroup(i)}}}):n("SidebarLink",{attrs:{item:e}})],1)})):t._e(),t._v(" "),t._t("bottom")],2)},[],!1,null,null,null));nt.options.__file="Sidebar.vue";var it={components:{Home:S,Page:V,Sidebar:nt.exports,Navbar:q},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.layout&&!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return v(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;window.addEventListener("scroll",this.onScroll),r.a.configure({showSpinner:!1}),this.$router.beforeEach(function(t,e,n){t.path===e.path||i.a.component(t.name)||r.a.start(),n()}),this.$router.afterEach(function(){r.a.done(),t.isSidebarOpen=!1})},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},st=(n(187),n(188),Object(k.a)(it,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar}},[t._t("sidebar-top",null,{slot:"top"}),t._v(" "),t._t("sidebar-bottom",null,{slot:"bottom"})],2),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems}},[t._t("page-top",null,{slot:"top"}),t._v(" "),t._t("page-bottom",null,{slot:"bottom"})],2)],1)},[],!1,null,null,null));st.options.__file="Layout.vue";e.default=st.exports}}]);