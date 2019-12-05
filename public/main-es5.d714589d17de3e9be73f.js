function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e,n){t.exports=n("zUnb")},AytR:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={production:!0,apiUrl:"https://pokerom.dev/api"}},Dat7:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("AytR"),o=n("fXoL"),a=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canActivate",value:function(t){return!r.a.production||"https:"===window.location.protocol||(window.location.href="https:".concat(window.location.href.substring(window.location.protocol.length,window.location.href.length)),!1)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:"root"}),t}()},Ei5h:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t.C_IMG1="/assets/images/carousel_img_01.jpg",t.C_IMG2="/assets/images/carousel_img_02.jpg",t.C_IMG3="/assets/images/carousel_img_03.jpg",t.C_IMG4="/assets/images/carousel_img_04.jpg",t.SPINNER="/assets/images/spinner.gif",t.LOGO="/assets/images/logo.png",t}({})},FUS3:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ofXK"),o=(n("siFw"),n("FpAq"),n("fXoL")),a=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.c]]}),t}()},FpAq:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("fXoL"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.el=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():r.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&r.a.error("addShadow must be a boolean.")}},{key:"getType",value:function(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[].concat(_toConsumableArray(this.preClasses),["alert-primary"]);case"secondary":return[].concat(_toConsumableArray(this.preClasses),["alert-secondary"]);case"warning":return[].concat(_toConsumableArray(this.preClasses),["alert-warning"]);case"success":return[].concat(_toConsumableArray(this.preClasses),["alert-success"]);case"danger":return[].concat(_toConsumableArray(this.preClasses),["alert-danger"]);case"info":return[].concat(_toConsumableArray(this.preClasses),["alert-info"]);case"light":return[].concat(_toConsumableArray(this.preClasses),["alert-light"]);case"dark":return[].concat(_toConsumableArray(this.preClasses),["alert-dark"]);default:r.a.error("Invalid alert type.")}else r.a.error("Type must be a string.")}},{key:"setType",value:function(){var t=this,e=this.getType(),n=this.el.nativeElement.classList;e.forEach((function(e){Array.prototype.slice.call(n).includes(e)&&t.el.nativeElement.classList.remove(e),t.el.nativeElement.classList.add(e)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.k))},t.\u0275dir=o.Gb({type:t,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),t}()},"H+bZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("AytR"),o=n("tk/3"),a=n("Mb37"),c=n("fXoL"),i=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"getApiVersion",value:function(){var e=new o.f({Accept:"application/json"});return this.http.get(t.apiVersionUrl,{headers:e})}}],[{key:"storeApiVersionInCache",value:function(){caches.open("api_version").then((function(t){return t.add("".concat(r.a.apiUrl,"/version"))})).catch((function(t){return a.a.log(t)}))}}]),t}();return t.apiVersionUrl="".concat(r.a.apiUrl,"/version"),t.\u0275fac=function(e){return new(e||t)(c.Zb(o.b))},t.\u0275prov=c.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t}()},Mb37:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL"),o=function(){var t=function t(){_classCallCheck(this,t)};return t.log=function(){var t;return(t=console).log.apply(t,arguments)},t.error=function(){var t;return(t=console).error.apply(t,arguments)},t.warn=function(){var t;return(t=console).warn.apply(t,arguments)},t.info=function(){var t;return(t=console).info.apply(t,arguments)},t.table=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return console.table(e)},t.trace=function(){return console.trace()},t.count=function(t){return console.count(t)},t.assert=function(t,e){return console.assert(t,e)},t.time=function(t){return console.time(t)},t.timeEnd=function(t){return console.timeEnd(t)},t.group=function(t){return console.group(t)},t.groupEnd=function(){return console.group()},t.groupCollapsed=function(t){return console.groupCollapsed(t)},t.clear=function(){return console.clear()},t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:"root"}),t}()},"QTu/":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL"),o=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"getCookie",value:function(t){var e="".concat(t,"="),n=decodeURIComponent(document.cookie).split(";"),r=!0,o=!1,a=void 0;try{for(var c,i=n[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){for(var s=c.value;" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(e))return s.substring(e.length,s.length)}}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}}},{key:"setCookie",value:function(t,e,n){var r=new Date;r.setTime(r.getTime()+24*n*3600*1e3);var o="expires=".concat(r.toUTCString());document.cookie="".concat(t,"=").concat(e,";").concat(o,";path=/")}},{key:"checkCookie",value:function(e,n){var r=t.getCookie(e);return n&&n(void 0===r?null:r),r||null}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t}()},Ql4B:function(t,e,n){"use strict";var r=n("R0Ic");Object(r.o)("flyIn",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateX(-100%)"}),Object(r.e)("700ms ease-in")])]),Object(r.o)("flyOut",[Object(r.l)("out",Object(r.m)({transform:"translateX(-100%)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateX(0)"}),Object(r.e)("700ms ease-out")])]),Object(r.o)("flyInOut",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateX(-100%)"}),Object(r.e)(100)]),Object(r.n)("* => void",[Object(r.e)(100,Object(r.m)({transform:"translateX(100%)"}))])]),Object(r.o)("flyFromBottom",[Object(r.l)("in",Object(r.m)({transform:"translateY(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateY(100%)"}),Object(r.e)("700ms ease-in")])]),Object(r.o)("flyItems",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.e)(700,Object(r.h)([Object(r.m)({opacity:0,transform:"translateX(-100%)",offset:0}),Object(r.m)({opacity:1,transform:"translateX(0)",offset:1})]))]),Object(r.n)("* => void",[Object(r.e)(500,Object(r.h)([Object(r.m)({opacity:1,transform:"translateX(0)",offset:0}),Object(r.m)({opacity:0,transform:"translateX(100%)",offset:1})]))])]),Object(r.o)("slide",[Object(r.l)("left",Object(r.m)({transform:"translateX(0)"})),Object(r.l)("right",Object(r.m)({transform:"translateX(-50%)"})),Object(r.n)("* => *",Object(r.e)(300))]),Object(r.o)("routeAnimation",[Object(r.n)("heroes <=> hero",[Object(r.m)({position:"relative"}),Object(r.i)(":enter, :leave",[Object(r.m)({position:"absolute",top:0,left:0,width:"100%"})]),Object(r.i)(":enter",[Object(r.m)({left:"-100%"})]),Object(r.i)(":leave",Object(r.f)()),Object(r.g)([Object(r.i)(":leave",[Object(r.e)("300ms ease-out",Object(r.m)({left:"100%"}))]),Object(r.i)(":enter",[Object(r.e)("300ms ease-out",Object(r.m)({left:"0%"}))])]),Object(r.i)(":enter",Object(r.f)())])]);var o=[Object(r.o)("fadeOut",[Object(r.l)("in",Object(r.m)({opacity:1})),Object(r.n)(":leave",Object(r.e)(555,Object(r.m)({opacity:0})))])],a=[Object(r.o)("fadeIn",[Object(r.n)(":enter",[Object(r.m)({opacity:0}),Object(r.e)("1s",Object(r.m)({opacity:1}))])])];Object(r.o)("rotateIn",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"rotate(-180deg)"}),Object(r.e)("700ms ease-out")])]),Object(r.o)("flipState",[Object(r.l)("active",Object(r.m)({transform:"rotateY(180deg)"})),Object(r.l)("inactive",Object(r.m)({transform:"rotateY(0)"})),Object(r.n)("active => inactive",Object(r.e)("400ms ease-out")),Object(r.n)("inactive => active",Object(r.e)("400ms ease-in"))]),Object(r.o)("filterAnimation",[Object(r.n)(":enter, * => 0, * => -1",[]),Object(r.n)(":increment",[Object(r.i)(":enter",[Object(r.m)({opacity:0,width:"0px"}),Object(r.k)(50,[Object(r.e)("300ms ease-out",Object(r.m)({opacity:1,width:"*"}))])],{optional:!0})]),Object(r.n)(":decrement",[Object(r.i)(":leave",[Object(r.k)(50,[Object(r.e)("300ms ease-out",Object(r.m)({opacity:0,width:"0px"}))])])])]),Object(r.o)("openClose",[Object(r.l)("open",Object(r.m)({height:"200px",opacity:1,backgroundColor:"yellow"})),Object(r.l)("close",Object(r.m)({height:"100px",opacity:.5,backgroundColor:"green"})),Object(r.n)("* => active",[Object(r.e)("2s",Object(r.h)([Object(r.m)({backgroundColor:"blue",offset:0}),Object(r.m)({backgroundColor:"red",offset:.8}),Object(r.m)({backgroundColor:"orange",offset:1})]))]),Object(r.n)("* => inactive",[Object(r.e)("2s",Object(r.h)([Object(r.m)({backgroundColor:"orange",offset:0}),Object(r.m)({backgroundColor:"red",offset:.2}),Object(r.m)({backgroundColor:"blue",offset:1})]))]),Object(r.n)("* => *",[Object(r.e)("1s",Object(r.h)([Object(r.m)({opacity:.1,offset:.1}),Object(r.m)({opacity:.6,offset:.2}),Object(r.m)({opacity:1,offset:.5}),Object(r.m)({opacity:.2,offset:.7})]))])]),Object(r.o)("shrinkOut",[Object(r.l)("in",Object(r.m)({height:"*"})),Object(r.n)("* => void",[Object(r.m)({height:"*"}),Object(r.e)(250,Object(r.m)({height:0}))])]),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}))},Rv5h:function(t,e,n){"use strict";var r=n("ktc5"),o=n.n(r);String.prototype.sanitizeXSS=function(t){var e=this.replace(/(?:(<script(\s|\S)*?<\/script>)|(<style(\s|\S)*?<\/style>)|(<!--(\s|\S)*?-->)|(<\/?(\s|\S)*?>)|(javascript:))/gim,"");return null!=t&&(!0===t.replaceSpecialChars&&(e=e.replace(/(?:([&'"<>)(\\\/{}\[\]:;^*]))/gim,"")),!0===t.encode&&(e=o.a.encode(e))),e},e.a=String.prototype.sanitizeXSS},iTUp:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ofXK"),o=(n("lPxU"),n("syTw"),n("fXoL")),a=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.c]]}),t}()},lGQG:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("tk/3"),o=n("QTu/"),a=n("AytR"),c=n("fXoL"),i=n("NuaS"),s=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.jwtHelper=n}return _createClass(t,[{key:"authenticateUser",value:function(e){var n=new r.f({"Content-Type":"application/json"});return this.http.post(t.authUrl,e,{headers:n})}},{key:"loggedOut",value:function(){return this.jwtHelper.isTokenExpired(o.a.getCookie("token_id"))||!o.a.checkCookie("token_id")}}],[{key:"loadToken",value:function(){return o.a.getCookie("token_id")}},{key:"logout",value:function(){localStorage.clear(),o.a.setCookie("token_id","",0),o.a.setCookie("user","",0)}},{key:"storeData",value:function(t,e){o.a.setCookie("user",JSON.stringify(e),7),o.a.setCookie("token_id",t.replace("Bearer ",""),7)}}]),t}();return t.authUrl="".concat(a.a.apiUrl,"/users/authenticate"),t.\u0275fac=function(e){return new(e||t)(c.Zb(r.b),c.Zb(i.b))},t.\u0275prov=c.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t}()},lPxU:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("fXoL"),o=n("tk/3"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.cachedData=null,this.cachedUrl=""}return _createClass(t,[{key:"transform",value:function(t){var e=this;return t!==this.cachedUrl&&(this.cachedData=null,this.cachedUrl=t,this.http.get(t).subscribe((function(t){e.cachedData=t}))),this.cachedData}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Lb(o.b))},t.\u0275pipe=r.Kb({name:"fetch",type:t,pure:!1}),t}()},qfBg:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));var r=n("tk/3"),o=n("AytR"),a=n("fXoL"),c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"registerUser",value:function(e){var n=new r.f({"Content-Type":"application/json"});return this.http.post("".concat(t.userUrl,"/register"),e,{headers:n})}},{key:"updateUser",value:function(e,n){var o=new r.f({"Content-Type":"application/json"});return this.http.put("".concat(t.userUrl,"/").concat(e),n,{headers:o})}},{key:"getUser",value:function(e){var n=new r.f({"Content-Type":"application/json"});return this.http.get("".concat(t.userUrl,"/").concat(e),{headers:n})}},{key:"deleteUser",value:function(e){return this.http.delete("".concat(t.userUrl,"/").concat(e))}},{key:"patchUser",value:function(e,n){var o=new r.f({"Content-Type":"application/json"});return this.http.patch("".concat(t.userUrl,"/").concat(e),n,{headers:o})}}]),t}();return t.userUrl="".concat(o.a.apiUrl,"/users"),t.\u0275fac=function(e){return new(e||t)(a.Zb(r.b))},t.\u0275prov=a.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t}(),i={name:[1,100],username:[3,22],password:[6,256]}},siFw:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("fXoL"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.el=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.preClasses=["btn",/(outline)/.test(this.btnType)?null:"btn-shadow"],this.btnType?this.setType():r.a.error("No button type specified.")}},{key:"getType",value:function(){if("string"==typeof this.btnType)switch(this.btnType){case"primary-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-primary"]);case"secondary-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-secondary"]);case"warning-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-warning"]);case"success-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-success"]);case"danger-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-danger"]);case"info-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-info"]);case"light-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-light"]);case"dark-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-dark"]);case"primary":return[].concat(_toConsumableArray(this.preClasses),["btn-primary"]);case"secondary":return[].concat(_toConsumableArray(this.preClasses),["btn-secondary"]);case"warning":return[].concat(_toConsumableArray(this.preClasses),["btn-warning"]);case"success":return[].concat(_toConsumableArray(this.preClasses),["btn-success"]);case"danger":return[].concat(_toConsumableArray(this.preClasses),["btn-danger"]);case"info":return[].concat(_toConsumableArray(this.preClasses),["btn-info"]);case"light":return[].concat(_toConsumableArray(this.preClasses),["btn-light"]);case"dark":return[].concat(_toConsumableArray(this.preClasses),["btn-dark"]);default:r.a.error("Invalid button type.")}else r.a.error("Type must be a string.")}},{key:"setType",value:function(){var t=this,e=this.getType(),n=this.el.nativeElement.classList;e.forEach((function(e){Array.from(n).includes(e)&&t.el.nativeElement.classList.remove(e),t.el.nativeElement.classList.add(e)}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.k))},t.\u0275dir=o.Gb({type:t,selectors:[["","appBtn",""]],inputs:{btnType:"btnType"}}),t}()},syTw:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL"),o=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"transform",value:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t||e;return n&&r.indexOf("https")<0&&(r=r.replace("http://","https://")),r}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Kb({name:"defaultImage",type:t,pure:!0}),t}()},vuBd:function(t,e,n){"use strict";String.prototype.removeStringChars=function(){return this.replace(/([\u0022\u0027\u2018\u2019\u201C\u201D\u0060\u00B4\u055D\u055B])/gim,"")},e.a=String.prototype.removeStringChars},zUnb:function(t,e,n){"use strict";n.r(e);var r=n("fXoL"),o=n("AytR"),a=n("jhN1"),c=n("ofXK"),i=n("tyNb"),s=n("R1ws"),u=n("1kSV"),l=n("6NWb"),f=n("Mb37"),p=n("wHSu"),b=n("Ql4B");function h(t,e){if(1&t&&r.Mb(0,"fa-icon",6),2&t){var n=r.gc(3);r.nc("icon",n.faInfoCircle)}}var d=function(){return["/","faq"]};function g(t,e){if(1&t){var n=r.Sb();r.Ob(0),r.Ic(1," You can find out more by visiting the "),r.Rb(2,"span",7),r.Ic(3,"Cookies section"),r.Pb(),r.Ic(4," on the "),r.Rb(5,"a",8),r.dc("click",(function(t){r.yc(n);var e=r.gc(2).$implicit;return r.gc().closeAlert(e)})),r.Ic(6,"FAQ page"),r.Pb(),r.Ic(7,". "),r.Nb()}2&t&&(r.xb(5),r.nc("routerLink",r.rc(1,d)))}function v(t,e){if(1&t){var n=r.Sb();r.Rb(0,"ngb-alert",3),r.dc("close",(function(t){r.yc(n);var e=r.gc().$implicit;return r.gc().closeAlert(e)})),r.Gc(1,h,1,1,"fa-icon",4),r.Ic(2),r.Gc(3,g,8,2,"ng-container",5),r.Pb()}if(2&t){var o=r.gc(),a=o.$implicit,c=o.index;r.nc("dismissible",!0)("type",a.type),r.xb(1),r.nc("ngIf",0===c),r.xb(1),r.Kc(" ",a.message," "),r.xb(1),r.nc("ngIf",0===c)}}function m(t,e){if(1&t&&(r.Rb(0,"div",1),r.Gc(1,v,4,5,"ngb-alert",2),r.Pb()),2&t){var n=r.gc();r.nc("@fadeOut","in"),r.xb(1),r.nc("ngIf",!n.cookiesOk)}}var y,k,O,C=((O=function(){function t(){_classCallCheck(this,t),this.cookiesOk=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.faInfoCircle=p.j,this.alerts=[{type:"warning",message:"I hate to interrupt, but I am required to tell you that this site uses cookies to store your login data for authentication. Click the (x) icon on the top right corner of this alert to close this annoying piece of garbage."}],sessionStorage.getItem("cookiesOk")&&JSON.parse(sessionStorage.getItem("cookiesOk"))||sessionStorage.setItem("cookiesOk","false"),this.cookiesOk=JSON.parse(sessionStorage.getItem("cookiesOk"))}},{key:"closeAlert",value:function(t){this.alerts.splice(this.alerts.indexOf(t),1),sessionStorage.setItem("cookiesOk","true")}}]),t}()).\u0275fac=function(t){return new(t||O)},O.\u0275cmp=r.Fb({type:O,selectors:[["layout-cookies-alert"]],decls:1,vars:1,consts:[["id","cookies-alert-container",4,"ngFor","ngForOf"],["id","cookies-alert-container"],["class","cookies-alert font-weight-bold shadow",3,"dismissible","type","close",4,"ngIf"],[1,"cookies-alert","font-weight-bold","shadow",3,"dismissible","type","close"],["class","mr-2",3,"icon",4,"ngIf"],[4,"ngIf"],[1,"mr-2",3,"icon"],[1,"underline"],["fragment","cookies",3,"routerLink","click"]],template:function(t,e){1&t&&r.Gc(0,m,2,2,"div",0),2&t&&r.nc("ngForOf",e.alerts)},directives:[c.n,c.o,u.d,l.a,i.f],styles:[".cookies-alert[_ngcontent-%COMP%]{background-color:#fff3cd!important;margin:1rem 1rem 0;text-shadow:-1px -1px 0 rgba(255,255,255,0),1px -1px 0 rgba(255,255,255,0),-1px 1px 0 rgba(255,255,255,0),1px 1px 0 rgba(255,255,255,0)}@media print{#cookies-alert-container[_ngcontent-%COMP%]{display:none}}"],data:{animation:[b.b]}}),O),j=((k=function(){function t(e){_classCallCheck(this,t),this.route=e}return _createClass(t,[{key:"ngOnInit",value:function(){t.isWebKitBrowser()||f.a.warn("CSS custom scrollbar not available in non-WebKit browsers.")}},{key:"isHomePage",value:function(){return"/home"===this.route._routerState.snapshot.url}}],[{key:"isWebKitBrowser",value:function(){return/(WebKit)/i.test(navigator.appVersion)&&!/(Edge)/.test(navigator.userAgent)}}]),t}()).\u0275fac=function(t){return new(t||k)(r.Lb(i.a))},k.\u0275cmp=r.Fb({type:k,selectors:[["layout-body"]],decls:5,vars:1,consts:[[1,"alert-container"],[1,"router-container"]],template:function(t,e){1&t&&(r.Rb(0,"main"),r.Rb(1,"div",0),r.Mb(2,"layout-cookies-alert"),r.Pb(),r.Rb(3,"div",1),r.Mb(4,"router-outlet"),r.Pb(),r.Pb()),2&t&&(r.xb(3),r.Db("bg-success",e.isHomePage()))},directives:[C,i.h],styles:["main[_ngcontent-%COMP%]{position:absolute;top:56px;width:100%}main[_ngcontent-%COMP%]   .router-container[_ngcontent-%COMP%]{padding-bottom:2.5rem}main[_ngcontent-%COMP%]   .alert-container[_ngcontent-%COMP%]{position:fixed;top:56px;width:100%;z-index:23}"]}),k),_=((y=function(){function t(){_classCallCheck(this,t),this.environment=o.a}return _createClass(t,[{key:"ngOnInit",value:function(){this.author="Broccolini"}},{key:"getYear",value:function(){return(new Date).getFullYear()}}]),t}()).\u0275fac=function(t){return new(t||y)},y.\u0275cmp=r.Fb({type:y,selectors:[["layout-footer"]],inputs:{appName:"appName"},decls:9,vars:4,consts:[[1,"border-shadow"],["id","footer-content",1,"text-center","bg-dark"],["target","_self",3,"href"],["href","https://opensource.org/licenses/MIT","target","_blank","rel","noreferrer"]],template:function(t,e){1&t&&(r.Rb(0,"footer",0),r.Rb(1,"p",1),r.Rb(2,"span"),r.Ic(3),r.Rb(4,"a",2),r.Ic(5),r.Pb(),r.Ic(6," | "),r.Rb(7,"a",3),r.Ic(8,"MIT License"),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.xb(3),r.Lc(" ",e.environment.production?e.appName:e.appName+" (Beta)"," | \xa9 ",e.getYear().toString()," "),r.xb(1),r.nc("href",e.environment.production?"/credits.php":e.environment.apiUrl.replace("/api","")+"/credits.php",r.Ac),r.xb(1),r.Jc(e.author))},styles:["footer[_ngcontent-%COMP%]{bottom:0;height:2rem;position:fixed;width:100%;z-index:21}#footer-content[_ngcontent-%COMP%]{bottom:0;color:#fff;height:2rem;margin:0;padding:0;position:absolute;width:100%}@media only screen and (max-width:414px){#footer-content[_ngcontent-%COMP%]{font-size:12px}}#footer-content[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:absolute;right:50%;top:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);width:100%}a[_ngcontent-%COMP%]{color:#fff}"]}),y),w=n("lGQG"),A=n("Ei5h"),P=n("siFw"),I=n("syTw");function L(t,e){if(1&t&&(r.Rb(0,"li",10),r.Rb(1,"a",11),r.Ic(2),r.Pb(),r.Pb()),2&t){var n=e.$implicit;r.xb(1),r.nc("routerLink",n.routerLink)("routerLinkActive",n.routerLinkActive)("routerLinkActiveOptions",n.routerLinkActiveOptions)("accessKey",n.accessKey),r.xb(1),r.Jc(n.navLinkText)}}var x=function(){return["/","login"]},M=function(){return["/","register"]};function S(t,e){1&t&&(r.Rb(0,"div",12),r.Rb(1,"a",13),r.Ic(2,"Login"),r.Pb(),r.Rb(3,"a",14),r.Ic(4,"Register"),r.Pb(),r.Pb()),2&t&&(r.xb(1),r.nc("routerLink",r.rc(2,x)),r.xb(2),r.nc("routerLink",r.rc(3,M)))}var R=function(){return["/","account"]};function T(t,e){1&t&&(r.Rb(0,"a",17),r.Ic(1,"Account"),r.Pb()),2&t&&r.nc("routerLink",r.rc(1,R))}function U(t,e){if(1&t){var n=r.Sb();r.Rb(0,"div",12),r.Gc(1,T,2,2,"a",15),r.Rb(2,"button",16),r.dc("click",(function(t){return r.yc(n),r.gc().logout()})),r.Ic(3," Logout "),r.Pb(),r.Pb()}if(2&t){var o=r.gc();r.xb(1),r.nc("ngIf",!o.isUrl("/account","full"))}}var F,X,N,E,K,B,H,G,V,z,D=((F=function(){function t(e,n,r){_classCallCheck(this,t),this.authService=e,this.router=n,this.route=r,this.images=A.a}return _createClass(t,[{key:"ngOnInit",value:function(){this.routes=[{routerLink:["/","home"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"Home",accessKey:"h"},{routerLink:["/","roms"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!1},navLinkText:"ROMs",accessKey:"r"},{routerLink:["/","natures"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"Natures",accessKey:"n"},{routerLink:["/","faq"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"FAQ",accessKey:"q"},{routerLink:["/","rate"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"Rate",accessKey:"t"}],this.routeKey="_routerState",this.loggedOutRoutes=[{url:"/faq",pathMatch:"prefix"},{url:"/home",pathMatch:"full"},{url:"/natures",pathMatch:"full"},{url:"/rate",pathMatch:"full"},{url:"/docs",pathMatch:"full"},{url:"/not_found",pathMatch:"prefix"}],this.loggedInRoutes=[{url:"/roms",pathMatch:"full"},{url:"/roms",pathMatch:"prefix"},{url:"/account",pathMatch:"full"},{url:"/not_found",pathMatch:"prefix"}],this.logoFallbackUrl="https://6emlfw.sn.files.1drv.com/y4mZ4gYGKIW3-1Gg6sNAK2N-NLlAhXfn2NyK2eNlaP-V_Bi1xZsV5B_C71QqVw6rF32zJCPv7TsRgrKq4NFWYRUyuLdlqPKv8q0UOfMbPu8k1bok6dcRIauEUpzNHbGLc0YXFHPocoPUaVNvUqY4Ln7xEVJ9RjY_1diLvvmkvmqDtfFV8iBybtSl9zBAiYRa7c3LZopc03P-nfedATk6qvwLg?width=444&height=139&cropmode=none"}},{key:"isUrl",value:function(t,e){switch(e){case"full":return this.route[this.routeKey].snapshot.url===t;case"prefix":return new RegExp(t.replace("/","\\/"),"i").test(this.route[this.routeKey].snapshot.url);default:return location.pathname===t}}},{key:"isLoggedOut",value:function(){return this.authService.loggedOut()}},{key:"logout",value:function(){w.a.logout(),this.isRoutes(this.loggedInRoutes,!0)&&this.router.navigate(["/","home"])}},{key:"isRoutes",value:function(t,e){var n=this,r=!1;return t.forEach((function(t){n.isUrl(t.url,t.pathMatch)&&(r=!0)})),e?r:r&&this.isLoggedOut()}}]),t}()).\u0275fac=function(t){return new(t||F)(r.Lb(w.a),r.Lb(i.c),r.Lb(i.a))},F.\u0275cmp=r.Fb({type:F,selectors:[["layout-header"]],decls:13,vars:8,consts:[[1,"border-shadow"],[1,"navbar-toggler-icon"],["id","nav-header",1,"navbar","navbar-expand-sm","navbar-dark","bg-dark"],["alt","app-logo","id","logo","routerLink","/",1,"navbar-brand","d-inline-block","align-top","mr-2",3,"src"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-label","Toggle navigation",1,"navbar-toggler"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],["class","nav-item",4,"ngFor","ngForOf"],[1,"ml-auto"],["class","btn-group",4,"ngIf"],[1,"nav-item"],[1,"nav-link","white",3,"routerLink","routerLinkActive","routerLinkActiveOptions","accessKey"],[1,"btn-group"],["appBtn","","btnType","light-outline","accesskey","l",1,"nav-item",3,"routerLink"],["appBtn","","btnType","light-outline","accesskey","g",1,"nav-item",3,"routerLink"],["class","nav-item","appBtn","","btnType","light-outline","accesskey","a",3,"routerLink",4,"ngIf"],["type","button","appBtn","","btnType","light-outline","accesskey","l",1,"nav-item",3,"click"],["appBtn","","btnType","light-outline","accesskey","a",1,"nav-item",3,"routerLink"]],template:function(t,e){1&t&&(r.Rb(0,"header",0),r.Mb(1,"span",1),r.Rb(2,"nav",2),r.Mb(3,"img",3),r.hc(4,"defaultImage"),r.Rb(5,"button",4),r.Mb(6,"span",1),r.Pb(),r.Rb(7,"div",5),r.Rb(8,"ul",6),r.Gc(9,L,3,5,"li",7),r.Pb(),r.Rb(10,"div",8),r.Gc(11,S,5,4,"div",9),r.Gc(12,U,4,1,"div",9),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.xb(3),r.nc("src",r.kc(4,4,e.images.LOGO,e.logoFallbackUrl,!0),r.Ac),r.xb(6),r.nc("ngForOf",e.routes),r.xb(2),r.nc("ngIf",e.isRoutes(e.loggedOutRoutes,!1)),r.xb(1),r.nc("ngIf",!e.isUrl("/login","full")&&!e.isLoggedOut()))},directives:[u.i,i.d,c.n,c.o,i.f,i.e,P.a],pipes:[I.a],styles:["header[_ngcontent-%COMP%]{height:56px;position:fixed;top:0;width:100%;z-index:22}header[_ngcontent-%COMP%]   #nav-header[_ngcontent-%COMP%]{position:absolute;top:0;width:100%}.white[_ngcontent-%COMP%]{color:#fff!important}.yellow[_ngcontent-%COMP%]{color:#e6bc2f!important}#logo[_ngcontent-%COMP%]{background-color:#343a40;cursor:pointer;height:2rem;width:74px}"]}),F),q=n("qfBg"),J=n("FUS3"),Y=n("iTUp"),Z=((X=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:X}),X.\u0275inj=r.Ib({factory:function(t){return new(t||X)},providers:[w.a,q.a],imports:[[c.c,i.g,u.h,s.a,l.b,J.a,Y.a]]}),X),Q=n("H+bZ"),W=((N=function(){function t(e){_classCallCheck(this,t),this.apiService=e,this._title="Pok".concat(t._eacute,"ROM"),this.changeTitleIfDevEnv(),this.getApiVersionIfDevEnv(),"https:"===location.protocol&&Q.a.storeApiVersionInCache()}return _createClass(t,[{key:"changeTitleIfDevEnv",value:function(){o.a.production||(document.title="".concat(this.title," (Beta)"))}},{key:"getApiVersionIfDevEnv",value:function(){if(!o.a.production){var t;this.apiVersionObs$=this.apiService.getApiVersion();var e=this.apiVersionObs$.subscribe((function(e){t=!0,f.a.log("API Version: ".concat(e.api_version))}),(function(e){throw t=!1,e}),(function(){null!=t&&e.unsubscribe()}))}}},{key:"title",get:function(){return this._title},set:function(t){this._title=t}}]),t}())._eacute="\xe9",N.\u0275fac=function(t){return new(t||N)(r.Lb(Q.a))},N.\u0275cmp=r.Fb({type:N,selectors:[["app-root"]],decls:8,vars:2,consts:[["id","container-wrapper"],[1,"header"],[1,"body"],[1,"footer"],[3,"appName"]],template:function(t,e){1&t&&(r.Ob(0),r.Rb(1,"div",0),r.Rb(2,"section",1),r.Mb(3,"layout-header"),r.Pb(),r.Rb(4,"section",2),r.Mb(5,"layout-body"),r.Pb(),r.Rb(6,"section",3),r.Mb(7,"layout-footer",4),r.Pb(),r.Pb(),r.Nb()),2&t&&(r.xb(1),r.zb("data-name",e.title),r.xb(6),r.nc("appName",e.title))},directives:[D,j,_],styles:[":root {\n        --cw-display: table;\n        --comp-display: table-row;\n        --part-display: table-cell;\n      }","#container-wrapper[_ngcontent-%COMP%] {\n        display: var(--cw-display);\n      }\n      .header[_ngcontent-%COMP%], .body[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n        display: var(--comp-display);\n      }\n      layout-body[_ngcontent-%COMP%], layout-header[_ngcontent-%COMP%], layout-footer[_ngcontent-%COMP%] {\n        display: var(--part-display);\n      }"]}),N),$=n("tk/3"),tt=((K=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"intercept",value:function(t,e){var n;return n=o.a.production?t.clone({url:t.url.replace("http://","https://")}):t,e.handle(n)}}]),t}()).\u0275fac=function(t){return new(t||K)},K.\u0275prov=r.Hb({token:K,factory:function(t){return K.\u0275fac(t)},providedIn:null}),K),et=((E=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"intercept",value:function(t,e){var n=t.urlWithParams.replace(o.a.apiUrl.replace("/api","/"),"").split("/");return["".concat(o.a.apiUrl,"/roms"),"".concat(o.a.apiUrl,"/roms/").concat("roms"===n[1]&&void 0!==n[2]?n[2]:""),"".concat(o.a.apiUrl,"/users/").concat("users"===n[1]&&void 0!==n[2]?n[2]:"")].includes(t.url)&&(t=t.clone({setHeaders:{Authorization:"Bearer ".concat(w.a.loadToken())}})),e.handle(t)}}]),t}()).\u0275fac=function(t){return new(t||E)},E.\u0275prov=r.Hb({token:E,factory:function(t){return E.\u0275fac(t)},providedIn:null}),E),nt=n("vkgz"),rt=n("NuaS"),ot=((B=function(){function t(e,n,r){_classCallCheck(this,t),this.router=e,this.jwtHelper=n,this.authService=r}return _createClass(t,[{key:"intercept",value:function(t,e){var n=this;return e.handle(t).pipe(Object(nt.a)((function(t){t instanceof $.h&&t.type===$.e.Response&&/(?:(\/api\/roms(\/)?)([\da-fA-F]{24}?))$/.test(t.url)&&n.authService.loggedOut()&&(w.a.logout(),n.router.navigate(["/","login"]))}),(function(t){t instanceof $.d&&401===t.status&&n.router.navigate(["/","login"])})))}}]),t}()).\u0275fac=function(t){return new(t||B)(r.Zb(i.c),r.Zb(rt.b),r.Zb(w.a))},B.\u0275prov=r.Hb({token:B,factory:function(t){return B.\u0275fac(t)},providedIn:null}),B),at={provide:rt.a,useValue:rt.a},ct=n("lJxs"),it=n("ktc5"),st=n.n(it),ut=n("Rv5h"),lt=n("vuBd"),ft=[{provide:$.a,useClass:tt,multi:!0},{provide:$.a,useClass:et,multi:!0},{provide:$.a,useClass:ot,multi:!0},{provide:$.a,useClass:(H=function(){function t(){_classCallCheck(this,t),String.prototype.sanitizeXSS=ut.a,String.prototype.removeStringChars=lt.a}return _createClass(t,[{key:"intercept",value:function(t,e){return e.handle(t).pipe(Object(ct.a)((function(t){return t instanceof $.h&&t.type===$.e.Response?t.clone({body:(e=t.body,Array.isArray(e)?e=e.map((function(t){return Object.keys(t).forEach((function(e){"string"==typeof t[e]&&(t[e]=st.a.decode(t[e]).sanitizeXSS().removeStringChars())})),t})):Object.keys(e).forEach((function(t){"string"==typeof e[t]&&(e[t]=st.a.decode(e[t]).sanitizeXSS().removeStringChars())})),e)}):t;var e}),(function(t){f.a.error(t)})))}}]),t}(),H.\u0275fac=function(t){return new(t||H)},H.\u0275prov=r.Hb({token:H,factory:function(t){return H.\u0275fac(t)},providedIn:null}),H),multi:!0}],pt=n("Jho9"),bt=((G=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this.notFoundMsg="Error 404: Page Not Found.",f.a.error(this.notFoundMsg)}}]),t}()).\u0275fac=function(t){return new(t||G)},G.\u0275cmp=r.Fb({type:G,selectors:[["app-not-found"]],decls:3,vars:1,consts:[[1,"mt-4","pt-4"],["id","not-found"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"h1",1),r.Ic(2),r.Pb(),r.Pb()),2&t&&(r.xb(2),r.Kc(" ",e.notFoundMsg," "))},styles:["#not-found[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}"]}),G),ht=n("Dat7"),dt=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadChildren:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"7vJP")).then((function(t){return t.HomeModule})).catch((function(t){return f.a.error(t)}))}},{path:"roms",loadChildren:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"gnNr")).then((function(t){return t.RomsModule})).catch((function(t){return f.a.error(t)}))}},{path:"natures",loadChildren:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"Qz4V")).then((function(t){return t.NaturesModule})).catch((function(t){return f.a.error(t)}))}},{path:"faq",loadChildren:function(){return n.e(7).then(n.bind(null,"k/Fm")).then((function(t){return t.FaqModule})).catch((function(t){return f.a.error(t)}))}},{path:"rate",loadChildren:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"Wx56")).then((function(t){return t.RatingsModule})).catch((function(t){return f.a.error(t)}))}},{path:"login",loadChildren:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"qYmF")).then((function(t){return t.LoginModule})).catch((function(t){return f.a.error(t)}))}},{path:"register",loadChildren:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"3+Ob")).then((function(t){return t.RegisterModule})).catch((function(t){return f.a.error(t)}))}},{path:"account",loadChildren:function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"nDdO")).then((function(t){return t.AccountModule})).catch((function(t){return f.a.error(t)}))}},{path:"**",redirectTo:"/not_found",canActivate:[ht.a]},{path:"not_found",component:bt,canActivate:[ht.a]}],gt=((z=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:z}),z.\u0275inj=r.Ib({factory:function(t){return new(t||z)},imports:[[i.g.forRoot(dt,{anchorScrolling:"enabled",scrollPositionRestoration:"enabled",useHash:!1,preloadingStrategy:i.b})],i.g]}),z),vt=((V=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:V,bootstrap:[W]}),V.\u0275inj=r.Ib({factory:function(t){return new(t||V)},providers:[Q.a,rt.b,at,ft],imports:[[a.a,Z,c.c,J.a,$.c,gt,pt.a.register("ngsw-worker.js",{enabled:o.a.production})]]}),V);o.a.production&&Object(r.Q)(),a.c().bootstrapModule(vt).catch((function(t){return console.error(t)}))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,1,6]]]);