function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _iterableToArray(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e,n){t.exports=n("zUnb")},"3+9a":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("8Y7J"),o=function(){var t=function(){function t(){_classCallCheck(this,t),this.cachedUrl=null}return _createClass(t,[{key:"transform",value:function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return void 0!==n&&t!==this.cachedUrl&&(this.cachedUrl=t,r&&e.indexOf("https")<0&&(e=e.replace(/http:\/\//i,"https://")),n.nativeElement.onerror=function(){this.onerror=null,n.nativeElement.src=e}),t}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Kb({name:"defaultImage",type:t,pure:!1}),t}()},AytR:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={production:!0,apiUrl:"https://pokerom.dev/api"}},DRYZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("8Y7J"),a=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"getState",value:function(t,e){try{return null!=e&&!0===e?localStorage.getItem(t):JSON.parse(localStorage.getItem(t))}catch(n){r.a.error(n)}}},{key:"setState",value:function(t,e){try{localStorage.setItem(t,e.constructor===Object||Array.isArray(e)?JSON.stringify(e):e)}catch(n){r.a.error(n)}}},{key:"removeState",value:function(t){try{localStorage.removeItem(t)}catch(e){r.a.error(e)}}},{key:"clearState",value:function(){try{localStorage.clear()}catch(t){r.a.error(t)}}}]),t}();return t.stateSize=localStorage.length,t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Dat7:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("AytR"),o=n("8Y7J"),a=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"canActivate",value:function(t){return!r.a.production||"https:"===window.location.protocol||(window.location.href="https:".concat(window.location.href.substring(window.location.protocol.length,window.location.href.length)),!1)}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"DvS/":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t.C_IMG1="https://4eko9a.sn.files.1drv.com/y4m9E2RvR88eTprhAUrfYDLoROpXmu42bym2Jp3V_traluGoXjpqUeKV5Do9d6RjIG4w_1PPQJpKaZMEEM4Etxq7ua8BMNzEPiklvI9qF_U4k5qADI6YC36A0ZNtzCA13vkGLo14eEYRK0CGyzZ9cqS26fuS05iyWqdQuhgtWEKf95NhWUAq6FrS3tWOk6SUsYrr9c6iCKlCsWp9TtPIj8i0g?width=1008&height=567&cropmode=none",t.C_IMG2="https://4ekk9a.sn.files.1drv.com/y4mLjKLBfX6XW-AQxbmuTv66zGPEggmubE0SXl0rUfv9R-RVF-XB9wy4p4AIBaN3RMhcok0wHywLwgY14DWcEIwYpZLk5uj3IRWvsgIocvkARnWAaEnrd7YuLlz1CFi1TmoOh5hS2V2vpLP-yUFQJaqfSYSEwD532WPVrsBmhnVxkVLXh1za0PGuJFGYsX8SJSodnDePOaBq0DCZWMSR-zC4Q?width=792&height=416&cropmode=none",t.C_IMG3="https://4ekn9a.sn.files.1drv.com/y4mwj44oxxzdNdpD0RurRpdF3Nnvt2wKc3RqRRc-uhwK9qJTakPL13sVobFcGrCQAJu_16BqHMMhCWV2R5ZXJwP1ahM3U2otDeXwKDWKBZLdvaZxosGERV4tl3DtTaDIZwPRYkoJVG3KV31-dzc_4HADs7oRfXpMJREjjRjyvPPXVINyApxkyS8aDLcQydGndOpxOkc5SDOZP9Z5As-0Ivblg?width=1080&height=608&cropmode=none",t.C_IMG4="https://4ekm9a.sn.files.1drv.com/y4mA3Yt8q8BQ9mcrL6qxnUjPU1gmg_oEIqaGh_o-3NmpjYFyv0D1LPAK0XP0Xd_5vxCpocc77xjNE2kICLxoVzu0N8IQSGK8qcHBDcdx0RkudWcln2t9afLUt7eUYS3EOWEFQoKD-YRfn6DqSO2S5sQeRZfBykkGfhNMOkfiM7aE8dpJLe3bl_4hdYi_F7OjKRnVpWydh5XgroPFnT7NYO5IQ?width=792&height=385&cropmode=none",t.SPINNER="https://4ekl9a.sn.files.1drv.com/y4mR2kCUHARnQzzUjIYEew6vX1PKZUq5UQHHWslfqN83m7KNPu9N019z3eSCLk9C03l1I7LNByLaUivyElUalombHZCJ1uu8lph7llsfQOSVkjJfGCeKIxwsMIRYoL9IbDJDri7rIDz4xAv_tC_iDYXCWFWf_EAeqYkLERYgcNu86-FAuAVeOPVN7NVd6Y7L7wvCyaFJ1m9pQX19N1l-GjBjA?width=96&height=96&cropmode=none",t.LOGO="https://6emlfw.sn.files.1drv.com/y4mZ4gYGKIW3-1Gg6sNAK2N-NLlAhXfn2NyK2eNlaP-V_Bi1xZsV5B_C71QqVw6rF32zJCPv7TsRgrKq4NFWYRUyuLdlqPKv8q0UOfMbPu8k1bok6dcRIauEUpzNHbGLc0YXFHPocoPUaVNvUqY4Ln7xEVJ9RjY_1diLvvmkvmqDtfFV8iBybtSl9zBAiYRa7c3LZopc03P-nfedATk6qvwLg?width=444&height=139&cropmode=none",t}({})},Ei5h:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t.C_IMG1="/assets/images/carousel_img_01.jpg",t.C_IMG2="/assets/images/carousel_img_02.jpg",t.C_IMG3="/assets/images/carousel_img_03.jpg",t.C_IMG4="/assets/images/carousel_img_04.jpg",t.SPINNER="/assets/images/spinner.gif",t.LOGO="/assets/images/logo.png",t}({})},FUS3:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("SVse"),o=(n("siFw"),n("FpAq"),n("8Y7J")),a=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.c]]}),t}()},FpAq:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("8Y7J"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.el=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():r.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&r.a.error("addShadow must be a boolean.")}},{key:"getType",value:function(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[].concat(_toConsumableArray(this.preClasses),["alert-primary"]);case"secondary":return[].concat(_toConsumableArray(this.preClasses),["alert-secondary"]);case"warning":return[].concat(_toConsumableArray(this.preClasses),["alert-warning"]);case"success":return[].concat(_toConsumableArray(this.preClasses),["alert-success"]);case"danger":return[].concat(_toConsumableArray(this.preClasses),["alert-danger"]);case"info":return[].concat(_toConsumableArray(this.preClasses),["alert-info"]);case"light":return[].concat(_toConsumableArray(this.preClasses),["alert-light"]);case"dark":return[].concat(_toConsumableArray(this.preClasses),["alert-dark"]);default:r.a.error("Invalid alert type.")}else r.a.error("Type must be a string.")}},{key:"setType",value:function(){var t=this.getType(),e=this.el.nativeElement.classList;t.forEach((function(t){Array.prototype.slice.call(e).includes(t)&&e.remove(t),e.add(t)})),Array.from(e).includes("null")&&e.remove("null")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.k))},t.\u0275dir=o.Gb({type:t,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),t}()},"H+bZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("AytR"),o=n("IheW"),a=n("Mb37"),c=n("8Y7J"),i=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"getApiVersion",value:function(){var e=new o.f({Accept:"application/json"});return this.http.get(t.apiVersionUrl,{headers:e})}}],[{key:"storeApiVersionInCache",value:function(){caches.open("api_version").then((function(t){return t.add("".concat(r.a.apiUrl,"/version"))})).catch((function(t){return a.a.log(t)}))}}]),t}();return t.apiVersionUrl="".concat(r.a.apiUrl,"/version"),t.\u0275fac=function(e){return new(e||t)(c.Zb(o.b))},t.\u0275prov=c.Hb({token:t,factory:t.\u0275fac}),t}()},Mb37:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("8Y7J"),o=function(){var t=function t(){_classCallCheck(this,t)};return t.log=function(){var t;return(t=console).log.apply(t,arguments)},t.error=function(){var t;return(t=console).error.apply(t,arguments)},t.warn=function(){var t;return(t=console).warn.apply(t,arguments)},t.info=function(){var t;return(t=console).info.apply(t,arguments)},t.table=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return console.table(e)},t.trace=function(){return console.trace()},t.count=function(t){return console.count(t)},t.assert=function(t,e){return console.assert(t,e)},t.time=function(t){return console.time(t)},t.timeEnd=function(t){return console.timeEnd(t)},t.group=function(t){return console.group(t)},t.groupEnd=function(){return console.group()},t.groupCollapsed=function(t){return console.groupCollapsed(t)},t.clear=function(){return console.clear()},t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"QTu/":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("8Y7J"),o=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"getCookie",value:function(t){var e="".concat(t,"="),n=decodeURIComponent(document.cookie).split(";"),r=!0,o=!1,a=void 0;try{for(var c,i=n[Symbol.iterator]();!(r=(c=i.next()).done);r=!0){for(var s=c.value;" "===s.charAt(0);)s=s.substring(1);if(0===s.indexOf(e))return s.substring(e.length,s.length)}}catch(u){o=!0,a=u}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}}},{key:"setCookie",value:function(t,e,n){var r=new Date;r.setTime(r.getTime()+24*n*3600*1e3);var o="expires=".concat(r.toUTCString());document.cookie="".concat(t,"=").concat(e,";").concat(o,";path=/")}},{key:"checkCookie",value:function(e,n){var r=t.getCookie(e);return n&&n(void 0===r?null:r),r||null}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:t.\u0275fac}),t}()},Ql4B:function(t,e,n){"use strict";var r=n("GS7A");Object(r.o)("flyIn",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateX(-100%)"}),Object(r.e)("700ms ease-in")])]),Object(r.o)("flyOut",[Object(r.l)("out",Object(r.m)({transform:"translateX(-100%)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateX(0)"}),Object(r.e)("700ms ease-out")])]),Object(r.o)("flyInOut",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateX(-100%)"}),Object(r.e)(100)]),Object(r.n)("* => void",[Object(r.e)(100,Object(r.m)({transform:"translateX(100%)"}))])]),Object(r.o)("flyFromBottom",[Object(r.l)("in",Object(r.m)({transform:"translateY(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateY(100%)"}),Object(r.e)("700ms ease-in")])]),Object(r.o)("flyItems",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.e)(700,Object(r.h)([Object(r.m)({opacity:0,transform:"translateX(-100%)",offset:0}),Object(r.m)({opacity:1,transform:"translateX(0)",offset:1})]))]),Object(r.n)("* => void",[Object(r.e)(500,Object(r.h)([Object(r.m)({opacity:1,transform:"translateX(0)",offset:0}),Object(r.m)({opacity:0,transform:"translateX(100%)",offset:1})]))])]),Object(r.o)("slide",[Object(r.l)("left",Object(r.m)({transform:"translateX(0)"})),Object(r.l)("right",Object(r.m)({transform:"translateX(-50%)"})),Object(r.n)("* => *",Object(r.e)(300))]),Object(r.o)("routeAnimation",[Object(r.n)("heroes <=> hero",[Object(r.m)({position:"relative"}),Object(r.i)(":enter, :leave",[Object(r.m)({position:"absolute",top:0,left:0,width:"100%"})]),Object(r.i)(":enter",[Object(r.m)({left:"-100%"})]),Object(r.i)(":leave",Object(r.f)()),Object(r.g)([Object(r.i)(":leave",[Object(r.e)("300ms ease-out",Object(r.m)({left:"100%"}))]),Object(r.i)(":enter",[Object(r.e)("300ms ease-out",Object(r.m)({left:"0%"}))])]),Object(r.i)(":enter",Object(r.f)())])]);var o=[Object(r.o)("fadeOut",[Object(r.l)("in",Object(r.m)({opacity:1})),Object(r.n)(":leave",Object(r.e)(555,Object(r.m)({opacity:0})))])],a=[Object(r.o)("fadeIn",[Object(r.n)(":enter",[Object(r.m)({opacity:0}),Object(r.e)("1s",Object(r.m)({opacity:1}))])])];Object(r.o)("rotateIn",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"rotate(-180deg)"}),Object(r.e)("700ms ease-out")])]),Object(r.o)("flipState",[Object(r.l)("active",Object(r.m)({transform:"rotateY(180deg)"})),Object(r.l)("inactive",Object(r.m)({transform:"rotateY(0)"})),Object(r.n)("active => inactive",Object(r.e)("400ms ease-out")),Object(r.n)("inactive => active",Object(r.e)("400ms ease-in"))]),Object(r.o)("filterAnimation",[Object(r.n)(":enter, * => 0, * => -1",[]),Object(r.n)(":increment",[Object(r.i)(":enter",[Object(r.m)({opacity:0,width:"0px"}),Object(r.k)(50,[Object(r.e)("300ms ease-out",Object(r.m)({opacity:1,width:"*"}))])],{optional:!0})]),Object(r.n)(":decrement",[Object(r.i)(":leave",[Object(r.k)(50,[Object(r.e)("300ms ease-out",Object(r.m)({opacity:0,width:"0px"}))])])])]),Object(r.o)("openClose",[Object(r.l)("open",Object(r.m)({height:"200px",opacity:1,backgroundColor:"yellow"})),Object(r.l)("close",Object(r.m)({height:"100px",opacity:.5,backgroundColor:"green"})),Object(r.n)("* => active",[Object(r.e)("2s",Object(r.h)([Object(r.m)({backgroundColor:"blue",offset:0}),Object(r.m)({backgroundColor:"red",offset:.8}),Object(r.m)({backgroundColor:"orange",offset:1})]))]),Object(r.n)("* => inactive",[Object(r.e)("2s",Object(r.h)([Object(r.m)({backgroundColor:"orange",offset:0}),Object(r.m)({backgroundColor:"red",offset:.2}),Object(r.m)({backgroundColor:"blue",offset:1})]))]),Object(r.n)("* => *",[Object(r.e)("1s",Object(r.h)([Object(r.m)({opacity:.1,offset:.1}),Object(r.m)({opacity:.6,offset:.2}),Object(r.m)({opacity:1,offset:.5}),Object(r.m)({opacity:.2,offset:.7})]))])]),Object(r.o)("shrinkOut",[Object(r.l)("in",Object(r.m)({height:"*"})),Object(r.n)("* => void",[Object(r.m)({height:"*"}),Object(r.e)(250,Object(r.m)({height:0}))])]),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}))},Rv5h:function(t,e,n){"use strict";var r=n("ktc5"),o=n.n(r);String.prototype.sanitizeXSS=function(t){var e=this.replace(/(?:(<\/?[\s\S]*?>)|(javascript:(?:[^:\s]?)+))/gim,"");return null!=t&&(!0===t.replaceSpecialChars&&(e=e.replace(/(?:([&'"<>)(\\\/{}\[\]:;^*]))/gim,"")),!0===t.encode&&(e=o.a.encode(e))),e},e.a=String.prototype.sanitizeXSS},iTUp:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("SVse"),o=(n("lPxU"),n("3+9a"),n("8Y7J")),a=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.c]]}),t}()},lGQG:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("IheW"),o=n("QTu/"),a=n("AytR"),c=n("DRYZ"),i=n("8Y7J"),s=n("EThc"),u=function(){var t=function(){function t(e,n){_classCallCheck(this,t),this.http=e,this.jwtHelper=n}return _createClass(t,[{key:"authenticateUser",value:function(e){var n=new r.f({"Content-Type":"application/json"});return this.http.post(t.authUrl,e,{headers:n})}},{key:"loggedOut",value:function(){return this.jwtHelper.isTokenExpired(o.a.getCookie("token_id"))||!o.a.checkCookie("token_id")}}],[{key:"loadToken",value:function(){return o.a.getCookie("token_id")}},{key:"logout",value:function(){c.a.clearState(),o.a.setCookie("token_id","",0),o.a.setCookie("user","",0)}},{key:"storeData",value:function(t,e){o.a.setCookie("user",JSON.stringify(e),7),o.a.setCookie("token_id",t.replace("Bearer ",""),7)}}]),t}();return t.authUrl="".concat(a.a.apiUrl,"/users/authenticate"),t.\u0275fac=function(e){return new(e||t)(i.Zb(r.b),i.Zb(s.b))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac}),t}()},lPxU:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("8Y7J"),o=n("IheW"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e,this.cachedData=null,this.cachedUrl=""}return _createClass(t,[{key:"transform",value:function(t){var e=this;return t!==this.cachedUrl&&(this.cachedData=null,this.cachedUrl=t,this.http.get(t).subscribe((function(t){e.cachedData=t}))),this.cachedData}}]),t}();return t.\u0275fac=function(e){return new(e||t)(r.Lb(o.b))},t.\u0275pipe=r.Kb({name:"fetch",type:t,pure:!1}),t}()},qfBg:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return i}));var r=n("IheW"),o=n("AytR"),a=n("8Y7J"),c=function(){var t=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"registerUser",value:function(e){var n=new r.f({"Content-Type":"application/json"});return this.http.post("".concat(t.userUrl,"/register"),e,{headers:n})}},{key:"updateUser",value:function(e,n){var o=new r.f({"Content-Type":"application/json"});return this.http.put("".concat(t.userUrl,"/").concat(e),n,{headers:o})}},{key:"getUser",value:function(e){var n=new r.f({"Content-Type":"application/json"});return this.http.get("".concat(t.userUrl,"/").concat(e),{headers:n})}},{key:"deleteUser",value:function(e){return this.http.delete("".concat(t.userUrl,"/").concat(e))}},{key:"patchUser",value:function(e,n){var o=new r.f({"Content-Type":"application/json"});return this.http.patch("".concat(t.userUrl,"/").concat(e),n,{headers:o})}}]),t}();return t.userUrl="".concat(o.a.apiUrl,"/users"),t.\u0275fac=function(e){return new(e||t)(a.Zb(r.b))},t.\u0275prov=a.Hb({token:t,factory:t.\u0275fac}),t}(),i={name:[1,100],username:[3,22],password:[6,256]}},siFw:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("8Y7J"),a=function(){var t=function(){function t(e){_classCallCheck(this,t),this.el=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.preClasses=["btn",/(outline)/.test(this.btnType)?null:"btn-shadow"],this.btnType?this.setType():r.a.error("No button type specified.")}},{key:"getType",value:function(){if("string"==typeof this.btnType)switch(this.btnType){case"primary-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-primary"]);case"secondary-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-secondary"]);case"warning-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-warning"]);case"success-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-success"]);case"danger-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-danger"]);case"info-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-info"]);case"light-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-light"]);case"dark-outline":return[].concat(_toConsumableArray(this.preClasses),["btn-outline-dark"]);case"primary":return[].concat(_toConsumableArray(this.preClasses),["btn-primary"]);case"secondary":return[].concat(_toConsumableArray(this.preClasses),["btn-secondary"]);case"warning":return[].concat(_toConsumableArray(this.preClasses),["btn-warning"]);case"success":return[].concat(_toConsumableArray(this.preClasses),["btn-success"]);case"danger":return[].concat(_toConsumableArray(this.preClasses),["btn-danger"]);case"info":return[].concat(_toConsumableArray(this.preClasses),["btn-info"]);case"light":return[].concat(_toConsumableArray(this.preClasses),["btn-light"]);case"dark":return[].concat(_toConsumableArray(this.preClasses),["btn-dark"]);default:r.a.error("Invalid button type.")}else r.a.error("Type must be a string.")}},{key:"setType",value:function(){var t=this.getType(),e=this.el.nativeElement.classList;t.forEach((function(t){Array.from(e).includes(t)&&e.remove(t),e.add(t)})),Array.prototype.slice.call(e).includes("null")&&e.remove("null")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.k))},t.\u0275dir=o.Gb({type:t,selectors:[["","appBtn",""]],inputs:{btnType:"btnType"}}),t}()},vuBd:function(t,e,n){"use strict";String.prototype.removeStringChars=function(){return this.replace(/([\u0022\u0027\u2018\u2019\u201C\u201D\u0060\u00B4\u055D\u055B])/gim,"")},e.a=String.prototype.removeStringChars},yZ9z:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("8Y7J"),a=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,null,[{key:"getState",value:function(t,e){try{return null!=e&&!0===e?sessionStorage.getItem(t):JSON.parse(sessionStorage.getItem(t))}catch(n){r.a.error(n)}}},{key:"setState",value:function(t,e){try{sessionStorage.setItem(t,e.constructor===Object||Array.isArray(e)?JSON.stringify(e):e)}catch(n){r.a.error(n)}}},{key:"removeState",value:function(t){try{sessionStorage.removeItem(t)}catch(e){r.a.error(e)}}},{key:"clearState",value:function(){try{sessionStorage.clear()}catch(t){r.a.error(t)}}}]),t}();return t.stateSize=sessionStorage.length,t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},zUnb:function(t,e,n){"use strict";n.r(e);var r=n("8Y7J"),o=n("AytR"),a=n("cUpR"),c=n("SVse"),i=n("iInd"),s=n("omvX"),u=n("G0yt"),l=n("Nv++"),f=n("Mb37"),p=n("wHSu"),h=n("Ql4B"),b=n("yZ9z");function d(t,e){if(1&t&&r.Mb(0,"fa-icon",6),2&t){var n=r.gc(3);r.oc("icon",n.faInfoCircle)}}var g=function(){return["/","faq"]};function v(t,e){if(1&t){var n=r.Sb();r.Ob(0),r.Jc(1," You can find out more by visiting the "),r.Rb(2,"span",7),r.Jc(3,"Cookies section"),r.Pb(),r.Jc(4," on the "),r.Rb(5,"a",8),r.dc("click",(function(t){r.zc(n);var e=r.gc(2).$implicit;return r.gc().closeAlert(e)})),r.Jc(6,"FAQ page"),r.Pb(),r.Jc(7,". "),r.Nb()}2&t&&(r.xb(5),r.oc("routerLink",r.sc(1,g)))}function m(t,e){if(1&t){var n=r.Sb();r.Rb(0,"ngb-alert",3),r.dc("close",(function(t){r.zc(n);var e=r.gc().$implicit;return r.gc().closeAlert(e)})),r.Hc(1,d,1,1,"fa-icon",4),r.Jc(2),r.Hc(3,v,8,2,"ng-container",5),r.Pb()}if(2&t){var o=r.gc(),a=o.$implicit,c=o.index;r.oc("dismissible",!0)("type",a.type),r.xb(1),r.oc("ngIf",0===c),r.xb(1),r.Lc(" ",a.message," "),r.xb(1),r.oc("ngIf",0===c)}}function y(t,e){if(1&t&&(r.Rb(0,"div",1),r.Hc(1,m,4,5,"ngb-alert",2),r.Pb()),2&t){var n=r.gc();r.oc("@fadeOut","in"),r.xb(1),r.oc("ngIf",!n.cookiesOk)}}var k,O,C,j=((C=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this.cookiesOk=!1,this.faInfoCircle=p.j,this.alerts=[{type:"warning",message:"I hate to interrupt, but I am required to tell you that this site uses cookies to store your login data for authentication. Click the (x) icon on the top right corner of this alert to close this annoying piece of garbage."}],b.a.getState("cookiesOk")||b.a.setState("cookiesOk","false"),this.cookiesOk=b.a.getState("cookiesOk")}},{key:"closeAlert",value:function(t){this.alerts.splice(this.alerts.indexOf(t),1),b.a.setState("cookiesOk","true")}}]),t}()).\u0275fac=function(t){return new(t||C)},C.\u0275cmp=r.Fb({type:C,selectors:[["layout-cookies-alert"]],decls:1,vars:1,consts:[["id","cookies-alert-container",4,"ngFor","ngForOf"],["id","cookies-alert-container"],["class","cookies-alert font-weight-bold shadow",3,"dismissible","type","close",4,"ngIf"],[1,"cookies-alert","font-weight-bold","shadow",3,"dismissible","type","close"],["class","mr-2",3,"icon",4,"ngIf"],[4,"ngIf"],[1,"mr-2",3,"icon"],[1,"underline"],["fragment","cookies",3,"routerLink","click"]],template:function(t,e){1&t&&r.Hc(0,y,2,2,"div",0),2&t&&r.oc("ngForOf",e.alerts)},directives:[c.n,c.o,u.d,l.a,i.g],styles:[".cookies-alert[_ngcontent-%COMP%]{background-color:#fff3cd!important;margin:1rem 1rem 0;text-shadow:-1px -1px 0 rgba(255,255,255,0),1px -1px 0 rgba(255,255,255,0),-1px 1px 0 rgba(255,255,255,0),1px 1px 0 rgba(255,255,255,0)}@media print{#cookies-alert-container[_ngcontent-%COMP%]{display:none}}"],data:{animation:[h.b]}}),C),_=((O=function(){function t(e){_classCallCheck(this,t),this.route=e}return _createClass(t,[{key:"ngOnInit",value:function(){t.isWebKitBrowser()||f.a.warn("CSS custom scrollbar not available in non-WebKit browsers.")}},{key:"isHomePage",value:function(){return"/home"===this.route._routerState.snapshot.url}}],[{key:"isWebKitBrowser",value:function(){return/(WebKit)/i.test(navigator.appVersion)&&!/(Edge)/.test(navigator.userAgent)}}]),t}()).\u0275fac=function(t){return new(t||O)(r.Lb(i.a))},O.\u0275cmp=r.Fb({type:O,selectors:[["layout-body"]],decls:5,vars:1,consts:[[1,"alert-container"],[1,"router-container"]],template:function(t,e){1&t&&(r.Rb(0,"main"),r.Rb(1,"div",0),r.Mb(2,"layout-cookies-alert"),r.Pb(),r.Rb(3,"div",1),r.Mb(4,"router-outlet"),r.Pb(),r.Pb()),2&t&&(r.xb(3),r.Db("bg-success",e.isHomePage()))},directives:[j,i.i],styles:["main[_ngcontent-%COMP%]{position:absolute;top:56px;width:100%}main[_ngcontent-%COMP%]   .router-container[_ngcontent-%COMP%]{padding-bottom:2.5rem}main[_ngcontent-%COMP%]   .alert-container[_ngcontent-%COMP%]{position:fixed;top:56px;width:100%;z-index:23}"]}),O),w=((k=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this.environment=o.a,this.author="Broccolini"}},{key:"getYear",value:function(){return(new Date).getFullYear()}}]),t}()).\u0275fac=function(t){return new(t||k)},k.\u0275cmp=r.Fb({type:k,selectors:[["layout-footer"]],inputs:{appName:"appName"},decls:9,vars:4,consts:[[1,"border-shadow"],["id","footer-content",1,"text-center","bg-dark"],["target","_self",3,"href"],["href","https://opensource.org/licenses/MIT","target","_blank","rel","noreferrer"]],template:function(t,e){1&t&&(r.Rb(0,"footer",0),r.Rb(1,"p",1),r.Rb(2,"span"),r.Jc(3),r.Rb(4,"a",2),r.Jc(5),r.Pb(),r.Jc(6," | "),r.Rb(7,"a",3),r.Jc(8,"MIT License"),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.xb(3),r.Mc(" ",e.environment.production?e.appName:e.appName+" (Beta)"," | \xa9 ",e.getYear().toString()," "),r.xb(1),r.oc("href",e.environment.production?"/credits.php":e.environment.apiUrl.replace("/api","")+"/credits.php",r.Bc),r.xb(1),r.Kc(e.author))},styles:["footer[_ngcontent-%COMP%]{bottom:0;height:2rem;position:fixed;width:100%;z-index:21}#footer-content[_ngcontent-%COMP%]{bottom:0;color:#fff;height:2rem;margin:0;padding:0;position:absolute;width:100%}@media only screen and (max-width:414px){#footer-content[_ngcontent-%COMP%]{font-size:12px}}#footer-content[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:absolute;right:50%;top:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);width:100%}a[_ngcontent-%COMP%]{color:#fff}"]}),k),A=n("lGQG"),S=n("Ei5h"),P=n("DvS/"),I=n("siFw"),R=n("3+9a"),x=["logo"];function L(t,e){if(1&t&&(r.Rb(0,"li",11),r.Rb(1,"a",12),r.Jc(2),r.Pb(),r.Pb()),2&t){var n=e.$implicit;r.xb(1),r.oc("routerLink",n.routerLink)("routerLinkActive",n.routerLinkActive)("routerLinkActiveOptions",n.routerLinkActiveOptions)("accessKey",n.accessKey),r.xb(1),r.Kc(n.navLinkText)}}var M=function(){return["/","login"]},U=function(){return["/","register"]};function T(t,e){1&t&&(r.Rb(0,"div",13),r.Rb(1,"a",14),r.Jc(2,"Login"),r.Pb(),r.Rb(3,"a",15),r.Jc(4,"Register"),r.Pb(),r.Pb()),2&t&&(r.xb(1),r.oc("routerLink",r.sc(2,M)),r.xb(2),r.oc("routerLink",r.sc(3,U)))}var J=function(){return["/","account"]};function N(t,e){1&t&&(r.Rb(0,"a",18),r.Jc(1,"Account"),r.Pb()),2&t&&r.oc("routerLink",r.sc(1,J))}function E(t,e){if(1&t){var n=r.Sb();r.Rb(0,"div",13),r.Hc(1,N,2,2,"a",16),r.Rb(2,"button",17),r.dc("click",(function(t){return r.zc(n),r.gc().logout()})),r.Jc(3," Logout "),r.Pb(),r.Pb()}if(2&t){var o=r.gc();r.xb(1),r.oc("ngIf",!o.isUrl("/account","full"))}}var Y,F,D,H,K,V,z,B,X,q,G=((Y=function(){function t(e,n,r){_classCallCheck(this,t),this.authService=e,this.router=n,this.route=r}return _createClass(t,[{key:"ngOnInit",value:function(){this.images=S.a,this.routes=[{routerLink:["/","home"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"Home",accessKey:"h"},{routerLink:["/","roms"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!1},navLinkText:"ROMs",accessKey:"r"},{routerLink:["/","natures"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"Natures",accessKey:"n"},{routerLink:["/","faq"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"FAQ",accessKey:"q"},{routerLink:["/","rate"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"Rate",accessKey:"t"}],this.routeKey="_routerState",this.loggedOutRoutes=[{url:"/faq",pathMatch:"prefix"},{url:"/home",pathMatch:"full"},{url:"/natures",pathMatch:"full"},{url:"/rate",pathMatch:"full"},{url:"/docs",pathMatch:"full"},{url:"/not_found",pathMatch:"prefix"}],this.loggedInRoutes=[{url:"/roms",pathMatch:"full"},{url:"/roms",pathMatch:"prefix"},{url:"/account",pathMatch:"full"},{url:"/not_found",pathMatch:"prefix"}],this.logoFallbackUrl=P.a.LOGO}},{key:"isUrl",value:function(t,e){switch(e){case"full":return this.route[this.routeKey].snapshot.url===t;case"prefix":return new RegExp(t.replace("/","\\/"),"i").test(this.route[this.routeKey].snapshot.url);default:return location.pathname===t}}},{key:"isLoggedOut",value:function(){return this.authService.loggedOut()}},{key:"logout",value:function(){A.a.logout(),this.isRoutes(this.loggedInRoutes,!0)&&this.router.navigate(["/","home"])}},{key:"isRoutes",value:function(t,e){var n=this,r=!1;return t.forEach((function(t){n.isUrl(t.url,t.pathMatch)&&(r=!0)})),e?r:r&&this.isLoggedOut()}}]),t}()).\u0275fac=function(t){return new(t||Y)(r.Lb(A.a),r.Lb(i.d),r.Lb(i.a))},Y.\u0275cmp=r.Fb({type:Y,selectors:[["layout-header"]],viewQuery:function(t,e){var n;1&t&&r.Nc(x,!0),2&t&&r.wc(n=r.ec())&&(e.logoElement=n.first)},decls:14,vars:9,consts:[[1,"border-shadow"],[1,"navbar-toggler-icon"],["id","nav-header",1,"navbar","navbar-expand-sm","navbar-dark","bg-dark"],["alt","app-logo","id","logo","routerLink","/",1,"navbar-brand","d-inline-block","align-top","mr-2",3,"src"],["logo",""],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-label","Toggle navigation",1,"navbar-toggler"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],["class","nav-item",4,"ngFor","ngForOf"],[1,"ml-auto"],["class","btn-group",4,"ngIf"],[1,"nav-item"],[1,"nav-link","white",3,"routerLink","routerLinkActive","routerLinkActiveOptions","accessKey"],[1,"btn-group"],["appBtn","","btnType","light-outline","accesskey","l",1,"nav-item",3,"routerLink"],["appBtn","","btnType","light-outline","accesskey","g",1,"nav-item",3,"routerLink"],["class","nav-item","appBtn","","btnType","light-outline","accesskey","a",3,"routerLink",4,"ngIf"],["type","button","appBtn","","btnType","light-outline","accesskey","l",1,"nav-item",3,"click"],["appBtn","","btnType","light-outline","accesskey","a",1,"nav-item",3,"routerLink"]],template:function(t,e){1&t&&(r.Rb(0,"header",0),r.Mb(1,"span",1),r.Rb(2,"nav",2),r.Mb(3,"img",3,4),r.hc(5,"defaultImage"),r.Rb(6,"button",5),r.Mb(7,"span",1),r.Pb(),r.Rb(8,"div",6),r.Rb(9,"ul",7),r.Hc(10,L,3,5,"li",8),r.Pb(),r.Rb(11,"div",9),r.Hc(12,T,5,4,"div",10),r.Hc(13,E,4,1,"div",10),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.xb(3),r.oc("src",r.lc(5,4,e.images.LOGO,e.logoFallbackUrl,e.logoElement,!0),r.Bc),r.xb(7),r.oc("ngForOf",e.routes),r.xb(2),r.oc("ngIf",e.isRoutes(e.loggedOutRoutes,!1)),r.xb(1),r.oc("ngIf",!e.isUrl("/login","full")&&!e.isLoggedOut()))},directives:[u.h,i.e,c.n,c.o,i.g,i.f,I.a],pipes:[R.a],styles:["header[_ngcontent-%COMP%]{height:56px;position:fixed;top:0;width:100%;z-index:22}header[_ngcontent-%COMP%]   #nav-header[_ngcontent-%COMP%]{position:absolute;top:0;width:100%}.white[_ngcontent-%COMP%]{color:#fff!important}.yellow[_ngcontent-%COMP%]{color:#e6bc2f!important}#logo[_ngcontent-%COMP%]{background-color:#343a40;cursor:pointer;height:2rem;width:74px}"]}),Y),W=n("qfBg"),Z=n("FUS3"),Q=n("iTUp"),$=((F=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:F}),F.\u0275inj=r.Ib({factory:function(t){return new(t||F)},providers:[A.a,W.a],imports:[[c.c,i.h,u.g,s.a,l.b,Z.a,Q.a]]}),F),tt=n("H+bZ"),et=((D=function(){function t(e){_classCallCheck(this,t),this.apiService=e,this.title="Pok".concat(t._eacute,"ROM"),this.changeTitleIfDevEnv(),this.getApiVersionIfDevEnv(),"https:"===location.protocol&&tt.a.storeApiVersionInCache()}return _createClass(t,[{key:"changeTitleIfDevEnv",value:function(){o.a.production||(document.title="".concat(this.title," (Beta)"))}},{key:"getApiVersionIfDevEnv",value:function(){if(!o.a.production){var t;this.apiVersionObs$=this.apiService.getApiVersion();var e=this.apiVersionObs$.subscribe((function(e){t=!0,f.a.log("API Version: ".concat(e.api_version))}),(function(e){throw t=!1,e}),(function(){null!=t&&e.unsubscribe()}))}}},{key:"title",get:function(){return this._title},set:function(t){this._title=t}}]),t}())._eacute="\xe9",D.\u0275fac=function(t){return new(t||D)(r.Lb(tt.a))},D.\u0275cmp=r.Fb({type:D,selectors:[["app-root"]],decls:8,vars:2,consts:[["id","container-wrapper"],[1,"header"],[1,"body"],[1,"footer"],[3,"appName"]],template:function(t,e){1&t&&(r.Ob(0),r.Rb(1,"div",0),r.Rb(2,"section",1),r.Mb(3,"layout-header"),r.Pb(),r.Rb(4,"section",2),r.Mb(5,"layout-body"),r.Pb(),r.Rb(6,"section",3),r.Mb(7,"layout-footer",4),r.Pb(),r.Pb(),r.Nb()),2&t&&(r.xb(1),r.zb("data-name",e.title),r.xb(6),r.oc("appName",e.title))},directives:[G,_,w],styles:[":root {\n        --cw-display: table;\n        --comp-display: table-row;\n        --part-display: table-cell;\n      }","#container-wrapper[_ngcontent-%COMP%] {\n        display: var(--cw-display);\n      }\n      .header[_ngcontent-%COMP%], .body[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n        display: var(--comp-display);\n      }\n      layout-body[_ngcontent-%COMP%], layout-header[_ngcontent-%COMP%], layout-footer[_ngcontent-%COMP%] {\n        display: var(--part-display);\n      }"]}),D),nt=n("IheW"),rt=((K=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"intercept",value:function(t,e){var n;return n=o.a.production?t.clone({url:t.url.replace("http://","https://")}):t,e.handle(n)}}]),t}()).\u0275fac=function(t){return new(t||K)},K.\u0275prov=r.Hb({token:K,factory:K.\u0275fac}),K),ot=((H=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"intercept",value:function(t,e){var n=t.urlWithParams.replace(o.a.apiUrl.replace("/api","/"),"").split("/");return["".concat(o.a.apiUrl,"/roms"),"".concat(o.a.apiUrl,"/roms/").concat("roms"===n[1]&&void 0!==n[2]?n[2]:""),"".concat(o.a.apiUrl,"/users/").concat("users"===n[1]&&void 0!==n[2]?n[2]:"")].includes(t.url)&&(t=t.clone({setHeaders:{Authorization:"Bearer ".concat(A.a.loadToken())}})),e.handle(t)}}]),t}()).\u0275fac=function(t){return new(t||H)},H.\u0275prov=r.Hb({token:H,factory:H.\u0275fac}),H),at=n("vkgz"),ct=n("EThc"),it=((V=function(){function t(e,n,r){_classCallCheck(this,t),this.router=e,this.jwtHelper=n,this.authService=r}return _createClass(t,[{key:"intercept",value:function(t,e){var n=this;return e.handle(t).pipe(Object(at.a)((function(t){t instanceof nt.h&&t.type===nt.e.Response&&/(?:(\/api\/roms(\/)?)([\da-fA-F]{24}?))$/.test(t.url)&&n.authService.loggedOut()&&(A.a.logout(),n.router.navigate(["/","login"]))}),(function(t){t instanceof nt.d&&401===t.status&&n.router.navigate(["/","login"])})))}}]),t}()).\u0275fac=function(t){return new(t||V)(r.Zb(i.d),r.Zb(ct.b),r.Zb(A.a))},V.\u0275prov=r.Hb({token:V,factory:V.\u0275fac}),V),st={provide:ct.a,useValue:ct.a},ut=n("lJxs"),lt=n("Rv5h"),ft=n("vuBd"),pt=[{provide:nt.a,useClass:rt,multi:!0},{provide:nt.a,useClass:ot,multi:!0},{provide:nt.a,useClass:it,multi:!0},{provide:nt.a,useClass:(z=function(){function t(){_classCallCheck(this,t),String.prototype.sanitizeXSS=lt.a,String.prototype.removeStringChars=ft.a}return _createClass(t,[{key:"intercept",value:function(t,e){return e.handle(t).pipe(Object(ut.a)((function(t){return t instanceof nt.h&&t.type===nt.e.Response?t.clone({body:(e=t.body,Array.isArray(e)?e=e.map((function(t){return Object.keys(t).forEach((function(e){"string"==typeof t[e]&&(t[e]=t[e].toString().sanitizeXSS().removeStringChars())})),t})):Object.keys(e).forEach((function(t){"string"==typeof e[t]&&(e[t]=e[t].toString().sanitizeXSS().removeStringChars())})),e)}):t;var e}),(function(t){f.a.error(t)})))}}]),t}(),z.\u0275fac=function(t){return new(t||z)},z.\u0275prov=r.Hb({token:z,factory:z.\u0275fac}),z),multi:!0}],ht=n("3pDu"),bt=((B=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this.notFoundMsg="Error 404: Page Not Found.",f.a.error(this.notFoundMsg)}}]),t}()).\u0275fac=function(t){return new(t||B)},B.\u0275cmp=r.Fb({type:B,selectors:[["app-not-found"]],decls:3,vars:1,consts:[[1,"mt-4","pt-4"],["id","not-found"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"h1",1),r.Jc(2),r.Pb(),r.Pb()),2&t&&(r.xb(2),r.Lc(" ",e.notFoundMsg," "))},styles:["#not-found[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}"]}),B),dt=n("Dat7"),gt=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadChildren:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"7vJP")).then((function(t){return t.HomeModule})).catch((function(t){return f.a.error(t)}))}},{path:"roms",loadChildren:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"gnNr")).then((function(t){return t.RomsModule})).catch((function(t){return f.a.error(t)}))}},{path:"natures",loadChildren:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"Qz4V")).then((function(t){return t.NaturesModule})).catch((function(t){return f.a.error(t)}))}},{path:"faq",loadChildren:function(){return n.e(8).then(n.bind(null,"k/Fm")).then((function(t){return t.FaqModule})).catch((function(t){return f.a.error(t)}))}},{path:"rate",loadChildren:function(){return Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"Wx56")).then((function(t){return t.RatingsModule})).catch((function(t){return f.a.error(t)}))}},{path:"login",loadChildren:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"qYmF")).then((function(t){return t.LoginModule})).catch((function(t){return f.a.error(t)}))}},{path:"register",loadChildren:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"3+Ob")).then((function(t){return t.RegisterModule})).catch((function(t){return f.a.error(t)}))}},{path:"account",loadChildren:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"nDdO")).then((function(t){return t.AccountModule})).catch((function(t){return f.a.error(t)}))}},{path:"**",redirectTo:"/not_found",canActivate:[dt.a]},{path:"not_found",component:bt,canActivate:[dt.a]}],vt=((q=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:q}),q.\u0275inj=r.Ib({factory:function(t){return new(t||q)},imports:[[i.h.forRoot(gt,{anchorScrolling:"enabled",scrollPositionRestoration:"enabled",useHash:!1,preloadingStrategy:i.c})],i.h]}),q),mt=((X=function t(){_classCallCheck(this,t)}).\u0275mod=r.Jb({type:X,bootstrap:[et]}),X.\u0275inj=r.Ib({factory:function(t){return new(t||X)},providers:[tt.a,ct.b,st,pt],imports:[[a.a,$,c.c,Z.a,nt.c,vt,ht.a.register("ngsw-worker.js",{enabled:o.a.production})]]}),X);o.a.production&&Object(r.Q)(),a.c().bootstrapModule(mt).catch((function(t){return console.error(t)}))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,1,6]]]);