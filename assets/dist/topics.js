!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=46)}([function(e,t,n){"use strict";function a(e,t,n,a,r,i,s,o){var u,c="function"==typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),a&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):r&&(u=o?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(e,t){return u.call(t),l(e,t)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:e,options:c}}n.d(t,"a",function(){return a})},function(e,t){e.exports=Vue},function(e,t,n){"use strict";function a(e){const t=document.getElementById(e);return t?JSON.parse(t.textContent):null}t.a={...a("json_context"),...a("extra_json_context")}},function(e,t,n){},function(e,t,n){"use strict";n.d(t,"a",function(){return u});var a=n(9),r=n.n(a),i=n(2);const s={"Content-Type":"application/json","Accept-Language":document.documentElement.lang,"X-CsrfToken":r.a.get("csrftoken")},{isAuthenticated:o}=i.a;async function u(e=null,{method:t="get",data:n=null}={}){if(e&&o){const a={method:t,headers:s};let r,i;n&&(a.body=JSON.stringify(n));try{let t=-1===e.indexOf("//");r=await fetch(t?`/api/v1/${e}`:e,a)}catch(e){return log.error(e),null}try{i=await r.json()}catch(e){return null}if(r.ok)return i;log.error(i)}return null}},function(e,t,n){},function(e,t,n){},function(e,t,n){
/**
 * vue-gettext v2.1.1
 * (c) 2018 Polyconseil
 * @license MIT
 */
e.exports=function(){"use strict";"function"!=typeof Object.assign&&(Object.assign=function(e){var t,n,a,r,i=arguments;if(null==e)throw new TypeError("Cannot convert undefined or null to object");for(t=Object(e),n=1;n<arguments.length;n++)if(null!=(a=i[n]))for(r in a)a.hasOwnProperty(r)&&(t[r]=a[r]);return t});var e,t={getTranslationIndex:function(e,t){switch(t="number"==typeof(t=parseInt(t))&&isNaN(t)?1:t,e.length>2&&"pt_BR"!==e&&(e=e.split("_")[0]),e){case"ay":case"bo":case"cgg":case"dz":case"fa":case"id":case"ja":case"jbo":case"ka":case"kk":case"km":case"ko":case"ky":case"lo":case"ms":case"my":case"sah":case"su":case"th":case"tt":case"ug":case"vi":case"wo":case"zh":return 0;case"is":return t%10!=1||t%100==11?1:0;case"jv":return 0!==t?1:0;case"mk":return 1===t||t%10==1?0:1;case"ach":case"ak":case"am":case"arn":case"br":case"fil":case"fr":case"gun":case"ln":case"mfe":case"mg":case"mi":case"oc":case"pt_BR":case"tg":case"ti":case"tr":case"uz":case"wa":case"zh":return t>1?1:0;case"lv":return t%10==1&&t%100!=11?0:0!==t?1:2;case"lt":return t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2;case"be":case"bs":case"hr":case"ru":case"sr":case"uk":return t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"mnk":return 0===t?0:1===t?1:2;case"ro":return 1===t?0:0===t||t%100>0&&t%100<20?1:2;case"pl":return 1===t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"cs":case"sk":return 1===t?0:t>=2&&t<=4?1:2;case"csb":return 1===t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2;case"sl":return t%100==1?0:t%100==2?1:t%100==3||t%100==4?2:3;case"mt":return 1===t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3;case"gd":return 1===t||11===t?0:2===t||12===t?1:t>2&&t<20?2:3;case"cy":return 1===t?0:2===t?1:8!==t&&11!==t?2:3;case"kw":return 1===t?0:2===t?1:3===t?2:3;case"ga":return 1===t?0:2===t?1:t>2&&t<7?2:t>6&&t<11?3:4;case"ar":return 0===t?0:1===t?1:2===t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5;default:return 1!==t?1:0}}},n=/\s{2,}/g,a={getTranslation:function(a,r,i,s,o){if(void 0===r&&(r=1),void 0===i&&(i=null),void 0===s&&(s=null),void 0===o&&(o=e.config.language),!a)return"";var u=e.config.getTextPluginSilent||-1!==e.config.getTextPluginMuteLanguages.indexOf(o),c=s&&t.getTranslationIndex(o,r)>0?s:a,l=e.$translations[o]||e.$translations[o.split("_")[0]];if(!l)return u||console.warn("No translations found for "+o),c;a=a.trim();var f=l[a];if(!f&&n.test(a)&&Object.keys(l).some(function(e){if(e.replace(n," ")===a.replace(n," "))return f=l[e]}),f&&i&&(f=f[i]),!f){if(!u){var d="Untranslated "+o+" key found: "+a;i&&(d+=" (with context: "+i+")"),console.warn(d)}return c}"string"==typeof f&&(f=[f]),f instanceof Array||!f.hasOwnProperty("")||(f=[f[""]]);var p=t.getTranslationIndex(o,r);return 1===f.length&&1===r&&(p=0),f[p]},gettext:function(e){return this.getTranslation(e)},pgettext:function(e,t){return this.getTranslation(t,1,e)},ngettext:function(e,t,n){return this.getTranslation(e,n,null,t)},npgettext:function(e,t,n,a){return this.getTranslation(t,a,e,n)}};function r(){var e,t,n="";for(e=0;e<32;e++)t=16*Math.random()|0,8!==e&&12!==e&&16!==e&&20!==e||(n+="-"),n+=(12===e?4:16===e?3&t|8:t).toString(16);return n}var i={name:"translate",created:function(){if(this.msgid="",this.$options._renderChildren&&(this.$options._renderChildren[0].hasOwnProperty("text")?this.msgid=this.$options._renderChildren[0].text:this.msgid=this.$options._renderChildren[0]),this.isPlural=void 0!==this.translateN&&void 0!==this.translatePlural,!this.isPlural&&(this.translateN||this.translatePlural))throw new Error("`translate-n` and `translate-plural` attributes must be used together: "+this.msgid+".")},props:{tag:{type:String,default:"span"},translateN:{type:Number,required:!1},translatePlural:{type:String,required:!1},translateContext:{type:String,required:!1},translateParams:{type:Object,required:!1},translateComment:{type:String,required:!1}},computed:{translation:function(){var e=a.getTranslation(this.msgid,this.translateN,this.translateContext,this.isPlural?this.translatePlural:null,this.$language.current),t=this.$parent;return this.translateParams&&(t=Object.assign({},this.$parent,this.translateParams)),this.$gettextInterpolate(e,t)}},render:function(t){return e.config.autoAddKeyAttributes&&!this.$vnode.key&&(this.$vnode.key=r()),t(this.tag,[this.translation])}},s=/[[\].]{1,2}/g,o=/%\{((?:.|\n)+?)\}/g,u=/\{\{((?:.|\n)+?)\}\}/g,c=function(t,n){void 0===n&&(n={}),!e.config.getTextPluginSilent&&u.test(t)&&console.warn('Mustache syntax cannot be used with vue-gettext. Please use "%{}" instead of "{{}}" in: '+t);var a=t.replace(o,function(e,t){var a,r=t.trim(),i={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"};return function e(t){try{a=function(e,t){for(var n=t.split(s).filter(function(e){return e});n.length;)e=e[n.shift()];return e}(this,t)}catch(e){}if(void 0===a){if(this.$parent)return e.call(this.$parent,t);console.warn("Cannot evaluate expression: "+t),a=t}return a.toString().replace(/[&<>"']/g,function(e){return i[e]})}.call(n,r)});return a};c.INTERPOLATION_RE=o,c.INTERPOLATION_PREFIX="%{";var l,f=function(t,n,r){var i=r.data.attrs||{},s=t.dataset.msgid,o=i["translate-context"],u=i["translate-n"],l=i["translate-plural"],f=void 0!==u&&void 0!==l,d=r.context;if(!f&&(u||l))throw new Error("`translate-n` and `translate-plural` attributes must be used together:"+s+".");!e.config.getTextPluginSilent&&i["translate-params"]&&console.warn("`translate-params` is required as an expression for v-translate directive. Please change to `v-translate='params'`: "+s),n.value&&"object"==typeof n.value&&(d=Object.assign({},r.context,n.value));var p=a.getTranslation(s,u,o,f?l:null,t.dataset.currentLanguage),g=c(p,d);t.innerHTML=g},d={bind:function(t,n,a){e.config.autoAddKeyAttributes&&!a.key&&(a.key=r());var i=t.innerHTML;if(t.dataset.msgid=i,t.dataset.currentLanguage=e.config.language,!e.config.getTextPluginSilent){var s=-1!==i.indexOf(c.INTERPOLATION_PREFIX);s&&!n.expression&&console.info("No expression is provided for change detection. The translation for this key will be static:\n"+i)}f(t,n,a)},update:function(t,n,a){var r=!1;t.dataset.currentLanguage!==e.config.language&&(t.dataset.currentLanguage=e.config.language,r=!0),!r&&n.expression&&n.value!==n.oldValue&&(r=!0),r&&f(t,n,a)}};return function(t,n){void 0===n&&(n={});var r={autoAddKeyAttributes:!1,availableLanguages:{en_US:"English"},defaultLanguage:"en_US",languageVmMixin:{},muteLanguages:[],silent:t.config.silent,translations:null};if(Object.keys(n).forEach(function(e){if(-1===Object.keys(r).indexOf(e))throw new Error(e+" is an invalid option for the translate plugin.")}),!n.translations)throw new Error("No translations available.");n=Object.assign(r,n),l=new t({created:function(){this.available=n.availableLanguages},data:{current:n.defaultLanguage},mixins:[n.languageVmMixin]}),function(t){e=t}(t),function(e,t){var n=e.prototype._init;e.prototype._init=function(e){void 0===e&&(e={});var a=e._parent||e.parent||this;this.$language=a.$language||t,n.call(this,e)};var a=e.prototype._destroy;e.prototype._destroy=function(){this.$language=null,a.apply(this,arguments)}}(t,l),function(e,t,n,a,r){Object.defineProperty(e.config,"language",{enumerable:!0,configurable:!0,get:function(){return t.current},set:function(e){t.current=e}}),Object.defineProperty(e.config,"getTextPluginSilent",{enumerable:!0,writable:!0,value:n}),Object.defineProperty(e.config,"autoAddKeyAttributes",{enumerable:!0,writable:!0,value:a}),Object.defineProperty(e.config,"getTextPluginMuteLanguages",{enumerable:!0,writable:!0,value:r})}(t,l,n.silent,n.autoAddKeyAttributes,n.muteLanguages),t.component("translate",i),t.directive("translate",d),t.$translations=n.translations,t.prototype.$gettext=a.gettext.bind(a),t.prototype.$pgettext=a.pgettext.bind(a),t.prototype.$ngettext=a.ngettext.bind(a),t.prototype.$npgettext=a.npgettext.bind(a),t.prototype.$gettextInterpolate=c.bind(c)}}()},function(e){e.exports={de:{"Add other languages for %{name}":"Andere sprachen für %{name} einfugen",Cancel:"Löschen",Create:"Beschaffen","Create a new card":"Eine neue Karte beschaffen","Create a new one":"Eine Neue beschaffen","Create new info":"Eine neue Info beschaffen","Need a hint?":"Brauchen Sie einen Hinweis?",Next:"Weiter",No:"Nein","Please log in or sign up to view cards":"Bitte einloggen oder anmelden um Karten anzuschauen",Previous:"Zurück",Save:"Speichern",Search:"Suchen",Show:"Zeigen","There's none left!":"Es gibt noch keine!","Welcome to Frumpy!":"Wilkommen",Yes:"Ja"}}},function(e,t,n){var a,r;
/*!
 * JavaScript Cookie v2.2.0
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */!function(i){if(void 0===(r="function"==typeof(a=i)?a.call(t,n,t,e):a)||(e.exports=r),!0,e.exports=i(),!!0){var s=window.Cookies,o=window.Cookies=i();o.noConflict=function(){return window.Cookies=s,o}}}(function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var a in n)t[a]=n[a]}return t}return function t(n){function a(t,r,i){var s;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},a.defaults,i)).expires){var o=new Date;o.setMilliseconds(o.getMilliseconds()+864e5*i.expires),i.expires=o}i.expires=i.expires?i.expires.toUTCString():"";try{s=JSON.stringify(r),/^[\{\[]/.test(s)&&(r=s)}catch(e){}r=n.write?n.write(r,t):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=(t=(t=encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var u="";for(var c in i)i[c]&&(u+="; "+c,!0!==i[c]&&(u+="="+i[c]));return document.cookie=t+"="+r+u}t||(s={});for(var l=document.cookie?document.cookie.split("; "):[],f=/(%[0-9A-Z]{2})+/g,d=0;d<l.length;d++){var p=l[d].split("="),g=p.slice(1).join("=");this.json||'"'!==g.charAt(0)||(g=g.slice(1,-1));try{var v=p[0].replace(f,decodeURIComponent);if(g=n.read?n.read(g,v):n(g,v)||g.replace(f,decodeURIComponent),this.json)try{g=JSON.parse(g)}catch(e){}if(t===v){s=g;break}t||(s[v]=g)}catch(e){}}return s}}return a.set=a,a.get=function(e){return a.call(a,e)},a.getJSON=function(){return a.apply({json:!0},[].slice.call(arguments))},a.defaults={},a.remove=function(t,n){a(t,"",e(n,{expires:-1}))},a.withConverter=t,a}(function(){})})},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Log"},e._l(e.logs,function(t,a){var r=t.message,i=t.level;return n("span",{key:a,class:i},[e._v("\n    "+e._s(r)+"\n  ")])}),0)};a._withStripped=!0;var r={data:()=>({id:0,logs:{}}),mounted(){window.log=this},methods:{_add(e,t){const n=this.id++,a=window.setTimeout(this._remove(n),1e4);this.$set(this.logs,n,{message:e,level:t,timeout:a})},_remove(e){return()=>this.$delete(this.logs,e)},...["info","success","error"].reduce((e,t)=>(e[t]=function(e){let{name:n,message:a}=e;n&&a?this._add(`${n}: ${a}`,t):this._add(e,t)},e),{})}},i=(n(14),n(0)),s=Object(i.a)(r,a,[],!1,null,"70f055f0",null);s.options.__file="src/components/LogLay.vue";t.a=s.exports},function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"BaseInput"},[e.displayLabel?n("label",{staticClass:"label",attrs:{for:e.id}},[e._v(e._s(e.displayLabel))]):e._e(),e._v(" "),e._t("default"),e._v(" "),n("input",e._b({ref:"input",staticClass:"input",attrs:{id:e.id},domProps:{value:e.value},on:{input:function(t){e.$emit("input",t.target.value)}}},"input",e.$attrs,!1))],2)};a._withStripped=!0;var r={props:{value:String,name:String,label:String,attrs:Object},computed:{id(){if(this.name)return`id_${this.name}`},field(){return(this.$context.fields||{})[this.name]||{}},displayLabel(){return this.label||this.field.label}},methods:{focus(){this.$refs.input.focus()}}},i=(n(30),n(0)),s=Object(i.a)(r,a,[],!1,null,"2d998ef9",null);s.options.__file="src/components/BaseInput.vue";t.a=s.exports},function(e,t,n){"use strict";var a=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"CardTemplate"},[t("div",{staticClass:"head"},[this._t("head")],2),this._v(" "),t("div",{staticClass:"body"},[this._t("default")],2),this._v(" "),this.$slots.foot?t("div",{staticClass:"foot"},[this._t("foot")],2):this._e()])};a._withStripped=!0;var r={},i=(n(29),n(0)),s=Object(i.a)(r,a,[],!1,null,"2ecd4ada",null);s.options.__file="src/components/CardTemplate.vue";t.a=s.exports},function(e,t){},function(e,t,n){"use strict";var a=n(3);n.n(a).a},function(e,t,n){"use strict";var a=n(1),r=n.n(a),i=(n(13),n(7)),s=n.n(i),o=n(2),u=n(8);const c=document.documentElement.lang;r.a.use(s.a,{defaultLanguage:c,availableLanguages:o.a.availableLanguages,translations:u,silent:!0});const l=document.documentElement.lang;r.a.prototype.$url=function(e=""){return`/${l}/${e}`},r.a.prototype.$context=o.a},function(e,t,n){"use strict";t.a=((e,t=200)=>{let n;return function(...a){clearTimeout(n),n=setTimeout(()=>e.apply(this,a),t)}})},,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,function(e,t,n){"use strict";var a=n(5);n.n(a).a},function(e,t,n){"use strict";var a=n(6);n.n(a).a},,,,,function(e,t,n){"use strict";var a=n(20);n.n(a).a},function(e,t,n){"use strict";var a=n(21);n.n(a).a},function(e,t,n){"use strict";var a=n(22);n.n(a).a},,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=(n(15),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"TopicList"},[n("BaseInput",{staticClass:"search",attrs:{label:e.text.search},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),e._v(" "),n("select",{directives:[{name:"model",rawName:"v-model",value:e.level,expression:"level"}],staticClass:"level",on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.level=t.target.multiple?n:n[0]}}},[n("option",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{value:""}},[e._v("All")]),e._v(" "),e._l(e.$context.levels,function(t){var a=t[0],r=t[1];return n("option",{key:a,domProps:{value:a}},[e._v(e._s(r))])})],2),e._v(" "),e._l(e.results,function(e){return n("TopicItem",{key:e.id,attrs:{topic:e}})}),e._v(" "),n("BasePagination",e._b({on:{paginate:e.load}},"BasePagination",{previous:e.previous,next:e.next},!1)),e._v(" "),n("LogLay")],2)});i._withStripped=!0;var s=n(10),o=n(4),u=n(16),c=n(11),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"BasePagination"},[n("button",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{disabled:!e.previous},on:{click:function(t){t.preventDefault(),e.$emit("paginate",e.previous)}}},[e._v("Previous")]),e._v(" "),n("button",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{disabled:!e.next},on:{click:function(t){t.preventDefault(),e.$emit("paginate",e.next)}}},[e._v("Next")])])};l._withStripped=!0;var f={props:{next:String,previous:String}},d=(n(35),n(0)),p=Object(d.a)(f,l,[],!1,null,"5fcd0c0a",null);p.options.__file="src/components/BasePagination.vue";var g=p.exports,v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CardTemplate",[n("h2",{attrs:{slot:"head"},slot:"head"},[n("a",{attrs:{href:e.$url("?topic="+e.topic.id)}},[e._v(e._s(e.topic.name))])]),e._v(" "),n("a",{directives:[{name:"translate",rawName:"v-translate"}],attrs:{href:e.$url("topic/"+e.topic.id+"/card/")}},[e._v("Create a new card")])])};v._withStripped=!0;var h={components:{CardTemplate:n(12).a},props:{topic:Object}},m=(n(36),Object(d.a)(h,v,[],!1,null,"344f43e2",null));m.options.__file="src/components/TopicItem.vue";var _=m.exports,b={components:{BaseInput:c.a,BasePagination:g,TopicItem:_,LogLay:s.a},data(){return{query:"",level:"",results:[],count:0,next:null,previous:null,text:{search:this.$gettext("Search")}}},mounted(){this.load()},watch:{params:Object(u.a)(function(){this.load()})},computed:{params(){return`q=${this.query}&level=${this.level}`}},methods:{async load(e=`topic/?${this.params}`){const t=await Object(o.a)(e);t&&Object.assign(this,t)}}},y=(n(37),Object(d.a)(b,i,[],!1,null,"3e54bbed",null));y.options.__file="src/components/TopicList.vue";var x=y.exports;new r.a({el:"#app",render:e=>e(x)})}]);