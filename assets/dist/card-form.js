!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=42)}([function(e,t,n){"use strict";function a(e,t,n,a,r,s,i,o){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),i?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=u):r&&(u=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:c}}n.d(t,"a",function(){return a})},function(e,t){e.exports=Vue},function(e,t,n){"use strict";function a(e){const t=document.getElementById(e);return t?JSON.parse(t.textContent):null}t.a={...a("json_context"),...a("extra_json_context")}},function(e,t,n){},function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(9),r=n.n(a),s=n(2);const i={"Content-Type":"application/json","Accept-Language":document.documentElement.lang,"X-CsrfToken":r.a.get("csrftoken")},{isAuthenticated:o}=s.a;async function u(e=null,{method:t="get",data:n=null}={}){if(e&&o){const a={method:t,headers:i};let r,s;n&&(a.body=JSON.stringify(n));try{let t=-1===e.indexOf("//");r=await fetch(t?`/api/v1/${e}`:e,a)}catch(e){return log.error(e),null}try{s=await r.json()}catch(e){return null}if(r.ok)return s;log.error(s)}return null}},,function(e,t,n){},function(e,t,n){
/**
 * vue-gettext v2.1.1
 * (c) 2018 Polyconseil
 * @license MIT
 */
e.exports=function(){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e){var t,n,a,r,s=arguments;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(t=Object(e),n=1;n<arguments.length;n++)if(null!=(a=s[n]))for(r in a)a.hasOwnProperty(r)&&(t[r]=a[r]);return t});var e,t={getTranslationIndex:function(e,t){switch(t="number"==typeof(t=parseInt(t))&&isNaN(t)?1:t,e.length>2&&"pt_BR"!==e&&(e=e.split("_")[0]),e){case"ay":case"bo":case"cgg":case"dz":case"fa":case"id":case"ja":case"jbo":case"ka":case"kk":case"km":case"ko":case"ky":case"lo":case"ms":case"my":case"sah":case"su":case"th":case"tt":case"ug":case"vi":case"wo":case"zh":return 0;case"is":return t%10!=1||t%100==11?1:0;case"jv":return 0!==t?1:0;case"mk":return 1===t||t%10==1?0:1;case"ach":case"ak":case"am":case"arn":case"br":case"fil":case"fr":case"gun":case"ln":case"mfe":case"mg":case"mi":case"oc":case"pt_BR":case"tg":case"ti":case"tr":case"uz":case"wa":case"zh":return t>1?1:0;case"lv":return t%10==1&&t%100!=11?0:0!==t?1:2;case"lt":return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"mnk":return 0===t?0:1===t?1:2;case"ro":return 1===t?0:0===t||t%100>0&&t%100<20?1:2;case"pl":return 1===t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"cs":case"sk":return 1===t?0:t>=2&&t<=4?1:2;case"csb":return 1===t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"sl":return t%100==1?0:t%100==2?1:t%100==3||t%100==4?2:3;case"mt":return 1===t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3;case"gd":return 1===t||11===t?0:2===t||12===t?1:t>2&&t<20?2:3;case"cy":return 1===t?0:2===t?1:8!==t&&11!==t?2:3;case"kw":return 1===t?0:2===t?1:3===t?2:3;case"ga":return 1===t?0:2===t?1:t>2&&t<7?2:t>6&&t<11?3:4;case"ar":return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5;default:return 1!==t?1:0}}},n=/\s{2,}/g,a={getTranslation:function(a,r,s,i,o){if(void 0===r&&(r=1),void 0===s&&(s=null),void 0===i&&(i=null),void 0===o&&(o=e.config.language),!a)return"";var u=e.config.getTextPluginSilent||-1!==e.config.getTextPluginMuteLanguages.indexOf(o),c=i&&t.getTranslationIndex(o,r)>0?i:a,l=e.$translations[o]||e.$translations[o.split("_")[0]];if(!l)return u||console.warn("No translations found for "+o),c;a=a.trim();var f=l[a];if(!f&&n.test(a)&&Object.keys(l).some(function(e){if(e.replace(n," ")===a.replace(n," "))return f=l[e]}),f&&s&&(f=f[s]),!f){if(!u){var d="Untranslated "+o+" key found: "+a;s&&(d+=" (with context: "+s+")"),console.warn(d)}return c}"string"==typeof f&&(f=[f]),f instanceof Array||!f.hasOwnProperty("")||(f=[f[""]]);var p=t.getTranslationIndex(o,r);return 1===f.length&&1===r&&(p=0),f[p]},gettext:function(e){return this.getTranslation(e)},pgettext:function(e,t){return this.getTranslation(t,1,e)},ngettext:function(e,t,n){return this.getTranslation(e,n,null,t)},npgettext:function(e,t,n,a){return this.getTranslation(t,a,e,n)}};function r(){var e,t,n="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(n+="-"),n+=(12===e?4:16===e?3&t|8:t).toString(16);return n}var s={name:"translate",created:function(){if(this.msgid="",this.$options._renderChildren&&(this.$options._renderChildren[0].hasOwnProperty("text")?this.msgid=this.$options._renderChildren[0].text:this.msgid=this.$options._renderChildren[0]),this.isPlural=void 0!==this.translateN&&void 0!==this.translatePlural,!this.isPlural&&(this.translateN||this.translatePlural))throw new Error("`translate-n` and `translate-plural` attributes must be used together: "+this.msgid+".")},props:{tag:{type:String,default:"span"},translateN:{type:Number,required:!1},translatePlural:{type:String,required:!1},translateContext:{type:String,required:!1},translateParams:{type:Object,required:!1},translateComment:{type:String,required:!1}},computed:{translation:function(){var e=a.getTranslation(this.msgid,this.translateN,this.translateContext,this.isPlural?this.translatePlural:null,this.$language.current),t=this.$parent;return this.translateParams&&(t=Object.assign({},this.$parent,this.translateParams)),this.$gettextInterpolate(e,t)}},render:function(t){return e.config.autoAddKeyAttributes&&!this.$vnode.key&&(this.$vnode.key=r()),t(this.tag,[this.translation])}},i=/[[\].]{1,2}/g,o=/%\{((?:.|\n)+?)\}/g,u=/\{\{((?:.|\n)+?)\}\}/g,c=function(t,n){void 0===n&&(n={}),!e.config.getTextPluginSilent&&u.test(t)&&console.warn('Mustache syntax cannot be used with vue-gettext. Please use "%{}" instead of "{{}}" in: '+t);var a=t.replace(o,function(e,t){var a,r=t.trim(),s={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return function e(t){try{a=function(e,t){for(var n=t.split(i).filter(function(e){return e});n.length;)e=e[n.shift()];return e}(this,t)}catch(e){}if(void 0===a){if(this.$parent)return e.call(this.$parent,t);console.warn("Cannot evaluate expression: "+t),a=t}return a.toString().replace(/[&<>"']/g,function(e){return s[e]})}.call(n,r)});return a};c.INTERPOLATION_RE=o,c.INTERPOLATION_PREFIX="%{";var l,f=function(t,n,r){var s=r.data.attrs||{},i=t.dataset.msgid,o=s["translate-context"],u=s["translate-n"],l=s["translate-plural"],f=void 0!==u&&void 0!==l,d=r.context;if(!f&&(u||l))throw new Error("`translate-n` and `translate-plural` attributes must be used together:"+i+".");!e.config.getTextPluginSilent&&s["translate-params"]&&console.warn("`translate-params` is required as an expression for v-translate directive. Please change to `v-translate='params'`: "+i),n.value&&"object"==typeof n.value&&(d=Object.assign({},r.context,n.value));var p=a.getTranslation(i,u,o,f?l:null,t.dataset.currentLanguage),g=c(p,d);t.innerHTML=g},d={bind:function(t,n,a){e.config.autoAddKeyAttributes&&!a.key&&(a.key=r());var s=t.innerHTML;if(t.dataset.msgid=s,t.dataset.currentLanguage=e.config.language,!e.config.getTextPluginSilent){var i=-1!==s.indexOf(c.INTERPOLATION_PREFIX);i&&!n.expression&&console.info("No expression is provided for change detection. The translation for this key will be static:\n"+s)}f(t,n,a)},update:function(t,n,a){var r=!1;t.dataset.currentLanguage!==e.config.language&&(t.dataset.currentLanguage=e.config.language,r=!0),!r&&n.expression&&n.value!==n.oldValue&&(r=!0),r&&f(t,n,a)}};return function(t,n){void 0===n&&(n={});var r={autoAddKeyAttributes:!1,availableLanguages:{en_US:"English"},defaultLanguage:"en_US",languageVmMixin:{},muteLanguages:[],silent:t.config.silent,translations:null};if(Object.keys(n).forEach(function(e){if(-1===Object.keys(r).indexOf(e))throw new Error(e+" is an invalid option for the translate plugin.")}),!n.translations)throw new Error("No translations available.");n=Object.assign(r,n),l=new t({created:function(){this.available=n.availableLanguages},data:{current:n.defaultLanguage},mixins:[n.languageVmMixin]}),function(t){e=t}(t),function(e,t){var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={});var a=e._parent||e.parent||this;this.$language=a.$language||t,n.call(this,e)};var a=e.prototype._destroy;e.prototype._destroy=function(){this.$language=null,a.apply(this,arguments)}}(t,l),function(e,t,n,a,r){Object.defineProperty(e.config,"language",{enumerable:!0,configurable:!0,get:function(){return t.current},set:function(e){t.current=e}}),Object.defineProperty(e.config,"getTextPluginSilent",{enumerable:!0,writable:!0,value:n}),Object.defineProperty(e.config,"autoAddKeyAttributes",{enumerable:!0,writable:!0,value:a}),Object.defineProperty(e.config,"getTextPluginMuteLanguages",{enumerable:!0,writable:!0,value:r})}(t,l,n.silent,n.autoAddKeyAttributes,n.muteLanguages),t.component("translate",s),t.directive("translate",d),t.$translations=n.translations,t.prototype.$gettext=a.gettext.bind(a),t.prototype.$pgettext=a.pgettext.bind(a),t.prototype.$ngettext=a.ngettext.bind(a),t.prototype.$npgettext=a.npgettext.bind(a),t.prototype.$gettextInterpolate=c.bind(c)}}()},function(e){e.exports={de:{"Add other languages for %{name}":"Andere sprachen für %{name} einfugen",Cancel:"Löschen",Create:"Beschaffen","Create a new card":"Eine neue Karte beschaffen","Create a new one":"Eine Neue beschaffen","Create new info":"Eine neue Info beschaffen","Need a hint?":"Brauchen Sie einen Hinweis?",Next:"Weiter",No:"Nein","Please log in or sign up to view cards":"Bitte einloggen oder anmelden um Karten anzuschauen",Previous:"Zurück",Save:"Speichern",Search:"Suchen",Show:"Zeigen","There's none left!":"Es gibt noch keine!","Welcome to Frumpy!":"Wilkommen",Yes:"Ja"}}},function(e,t,n){var a,r;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(s){if(void 0===(r="function"==typeof(a=s)?a.call(t,n,t,e):a)||(e.exports=r),!0,e.exports=s(),!!0){var i=window.Cookies,o=window.Cookies=s();o.noConflict=function(){return window.Cookies=i,o}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}return function t(n){function a(t,r,s){var i;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(s=e({path:"/"},a.defaults,s)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*s.expires),s.expires=o}s.expires=s.expires?s.expires.toUTCString():"";try{i=JSON.stringify(r),/^[\{\[]/.test(i)&&(r=i)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var u="";for(var c in s)s[c]&&(u+="; "+c,!0!==s[c]&&(u+="="+s[c]));return document.cookie=t+"="+r+u}t||(i={});for(var l=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<l.length;d++){var p=l[d].split("="),g=p.slice(1).join("=");this.json||'"'!==g.charAt(0)||(g=g.slice(1,-1));try{var h=p[0].replace(f,decodeURIComponent);if(g=n.read?n.read(g,h):n(g,h)||g.replace(f,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(e){}if(t===h){i=g;break}t||(i[h]=g)}catch(e){}}return i}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,n){a(t,"",e(n,{expires:-1}))},a.withConverter=t,a}(function(){})})},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Log"},e._l(e.logs,function(t,a){var r=t.message,s=t.level;return n("span",{key:a,class:s},[e._v("\n    "+e._s(r)+"\n  ")])}),0)};a._withStripped=!0;var r={data:()=>({id:0,logs:{}}),mounted(){window.log=this},methods:{_add(e,t){const n=this.id++,a=window.setTimeout(this._remove(n),1e4);this.$set(this.logs,n,{message:e,level:t,timeout:a})},_remove(e){return()=>this.$delete(this.logs,e)},...["info","success","error"].reduce((e,t)=>(e[t]=function(e){let{name:n,message:a}=e;n&&a?this._add(`${n}: ${a}`,t):this._add(e,t)},e),{})}},s=(n(14),n(0)),i=Object(s.a)(r,a,[],!1,null,"70f055f0",null);i.options.__file="src/components/LogLay.vue";t.a=i.exports},,function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"BaseInput"},[e.label?n("label",{staticClass:"label",attrs:{for:e.id}},[e._v(e._s(e.label))]):e._e(),e._v(" "),e._t("default"),e._v(" "),n("input",{ref:"input",staticClass:"input",attrs:{id:e.id,name:e.name},domProps:{value:e.value},on:{input:e.update}})],2)};a._withStripped=!0;var r={props:{type:{type:String,default:"text"},field:{type:Object,required:!0}},computed:{name(){return this.field.name},label(){return this.field.label},value(){return this.field.value},id(){return this.field.id}},methods:{focus(){this.$refs.input.focus()},update(e){let t=e.target.value;this.$emit("update",{name:this.name,value:t})}}},s=(n(29),n(0)),i=Object(s.a)(r,a,[],!1,null,"2d998ef9",null);i.options.__file="src/components/BaseInput.vue";t.a=i.exports},,function(e,t,n){"use strict";var a=n(3);n.n(a).a},function(e,t,n){"use strict";var a=n(1),r=n.n(a),s=n(7),i=n.n(s),o=n(2),u=n(8);const c=document.documentElement.lang;r.a.use(i.a,{defaultLanguage:c,availableLanguages:o.a.availableLanguages,translations:u,silent:!0});const l=document.documentElement.lang;r.a.prototype.$url=function(e=""){return`/${l}/${e}`},r.a.prototype.$context=o.a},function(e,t,n){"use strict";t.a=((e,t=200)=>{let n;return function(...a){clearTimeout(n),n=setTimeout(()=>e.apply(this,a),t)}})},,,,,,,function(e,t,n){},function(e,t){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";var a=n(6);n.n(a).a},,,,,,,,function(e,t,n){"use strict";var a=n(23);n.n(a).a},function(e,t,n){"use strict";var a=n(24);n.n(a).a},function(e,t,n){"use strict";var a=n(25);n.n(a).a},function(e,t,n){"use strict";var a=n(26);n.n(a).a},function(e,t,n){"use strict";var a=n(27);n.n(a).a},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=(n(15),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"CardForm"},[n("h1",[e._v(e._s(e.topic.name))]),e._v(" "),n("form",{staticClass:"form",on:{submit:e.submit}},[n("BaseInput",{attrs:{field:e.form.name},on:{update:e.update}}),e._v(" "),n("BaseInput",{attrs:{field:e.form.hint},on:{update:e.update}}),e._v(" "),n("InfoInput",{attrs:{field:e.form.infos},on:{update:e.updateList}}),e._v(" "),n("button",{directives:[{name:"translate",rawName:"v-translate"}],staticClass:"submit",on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1),e._v(" "),n("LogLay")],1)});s._withStripped=!0;var i=n(10),o=n(4),u=(n(2),n(45)),c=n(12),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("BaseInput",{ref:"query",attrs:{field:e.form[e.$language.current]},on:{update:e.update}},[e.infos.length?n("ul",{staticClass:"infos"},e._l(e.infos,function(t){return n("InfoItem",{key:t.id,attrs:{info:t},on:{remove:e.remove}})}),1):e._e()]),e._v(" "),e.canCreate?n("button",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{tabindex:"-1"},on:{click:function(t){return t.preventDefault(),e.create(t)}}},[e._v("Create new info")]):e._e(),e._v(" "),n("BaseModal",{attrs:{open:e.creating},on:{close:function(t){e.creating=!1}}},[n("template",{slot:"head"},[n("translate",{attrs:{translateParams:{name:e.query}}},[e._v("Add other languages for %{name}")])],1),e._v(" "),n("ul",e._l(e.otherLanguages,function(t,a){return n("li",{key:a},[n("BaseInput",{attrs:{field:t},on:{update:e.update}})],1)}),0),e._v(" "),n("template",{slot:"foot"},[n("button",{directives:[{name:"translate",rawName:"v-translate"}],on:{click:function(t){return t.preventDefault(),e.create(t)}}},[e._v("\n        Create\n      ")])])],2),e._v(" "),n("InfoAutocomplete",{attrs:{infos:e.results},on:{select:e.select}})],1)};l._withStripped=!0;var f=n(16),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("dialog",{ref:"dialog",staticClass:"BaseModal",on:{cancel:e.cancel}},[n("h2",[e._t("head")],2),e._v(" "),e._t("default"),e._v(" "),n("div",{staticClass:"foot"},[e._t("foot"),e._v(" "),n("button",{directives:[{name:"translate",rawName:"v-translate"}],on:{click:function(t){return t.preventDefault(),e.cancel(t)}}},[e._v("Cancel")])],2)],2)};d._withStripped=!0;var p={props:{open:Boolean},watch:{open(e){e?this.$refs.dialog.showModal():this.$refs.dialog.close()}},methods:{cancel(){this.$emit("close")}}},g=(n(37),n(0)),h=Object(g.a)(p,d,[],!1,null,"4930085c",null);h.options.__file="src/components/BaseModal.vue";var m=h.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._v(e._s(e.info.name)+"\n  "),n("button",{on:{click:function(t){t.preventDefault(),e.$emit("remove",e.info)}}},[e._v("×")])])};v._withStripped=!0;var _={props:{info:Object}},b=(n(38),Object(g.a)(_,v,[],!1,null,null,null));b.options.__file="src/components/InfoItem.vue";var y=b.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",e._l(e.infos,function(t){return n("li",{key:t.id},[n("button",{on:{click:function(n){n.preventDefault(),e.$emit("select",t)}}},[e._v(e._s(t.name))])])}),0)};x._withStripped=!0;var w={props:{infos:Array}},$=(n(39),Object(g.a)(w,x,[],!1,null,"dd795e34",null));$.options.__file="src/components/InfoAutocomplete.vue";var O=$.exports,C={mixins:[u.a],components:{BaseInput:c.a,BaseModal:m,InfoItem:y,InfoAutocomplete:O},props:{field:Object},data(){const e={},t=Object.entries(this.$language.available);for(let[n,a]of t)n===this.$language.current&&(a=this.field.label),e[n]={name:n,label:a,value:""};return{form:e,results:[],creating:!1}},computed:{infos(){return this.field.value},canCreate(){return this.query&&0===this.results.length},exclude(){return this.infos.map(e=>e.id).join("-")},query(){return this.form[this.$language.current].value},otherLanguages(){let e={};for(let[t,n]of Object.entries(this.form))t!==this.$language.current&&(e[t]=n);return e}},watch:{query:Object(f.a)(function(){this.load()})},methods:{async load(){if(this.query){const e=await Object(o.a)(`info/?q=${this.query}&exclude=${this.exclude}`);e&&Object.assign(this,e)}else this.results=[]},async create(){if(this.creating){const e=await Object(o.a)("info/",{method:"post",data:{name:this.form.payload}});if(e){const{id:t}=e;this.$emit("update",{push:{id:t,name:this.query}}),this.creating=!1,this.form.reset()}}else this.canCreate&&(this.creating=!0)},select(e){this.form.reset(),this.$refs.query.focus(),this.$emit("update",{push:e})},remove({id:e}){this.$emit("update",{remove:e})}}},j=(n(40),Object(g.a)(C,l,[],!1,null,"127579bc",null));j.options.__file="src/components/InfoInput.vue";var S=j.exports,I={mixins:[u.a],components:{BaseInput:c.a,InfoInput:S,LogLay:i.a},data(){let{topic:e,form:t}=this.$context;return{topic:e,form:t}},methods:{async submit(){let e,t=this.form.id,n={...this.form.payload,topic:this.topic.id};e=t?await Object(o.a)(`card/${t.value}/`,{method:"put",data:n}):await Object(o.a)("card/",{method:"post",data:n})}}},k=(n(41),Object(g.a)(I,s,[],!1,null,"5fb0fa24",null));k.options.__file="src/components/CardForm.vue";var P=k.exports;new r.a({el:"#app",render:e=>e(P)})},,,function(e,t,n){"use strict";let a=0;class r{constructor(e){Object.assign(this,e),this.index=++a}get id(){return`${this.constructor.name}-${this.index}-${this.name}`}get payload(){const e=this.value;return Array.isArray(e)?e.map(e=>e.id):e}reset(){this.value=this.initial}}class s{constructor(e){for(let[t,n]of Object.entries(e))n.name=t,n.initial=n.value,this[t]=new r(n)}[Symbol.iterator](){return Object.values(this).values()}get payload(){let e={};for(let t of this)e[t.name]=t.payload;return e}reset(){for(let e of this)e.reset()}}t.a={data:()=>({form:{}}),mounted(){this.form=new s(this.form)},methods:{update({name:e,value:t}){this.$set(this.form[e],"value",t)},updateList({name:e,push:t,remove:n}){let a=this.form.infos.value;if(t&&a.push(t),n)for(let e=0;e<a.length;e++)if(a[e].id===n){a.splice(e,1);break}}}}}]);