(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(t,e,n){t.exports=n("zUnb")},AytR:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r={production:!0,apiUrl:"https://pokerom.dev/api"}},DRYZ:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("fXoL");let a=(()=>{class t{constructor(){}static getState(t,e){try{return null!=e&&!0===e?localStorage.getItem(t):JSON.parse(localStorage.getItem(t))}catch(n){r.a.error(n)}}static setState(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(n){r.a.error(n)}}static removeState(t){try{localStorage.removeItem(t)}catch(e){r.a.error(e)}}static clearState(){try{localStorage.clear()}catch(t){r.a.error(t)}}}return t.stateSize=localStorage.length,t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:"root"}),t})()},Dat7:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("AytR"),o=n("fXoL");let a=(()=>{class t{constructor(){}canActivate(t){return!r.a.production||"https:"===window.location.protocol||(window.location.href=`https:${window.location.href.substring(window.location.protocol.length,window.location.href.length)}`,!1)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:"root"}),t})()},Ei5h:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(t){return t.C_IMG1="/assets/images/carousel_img_01.jpg",t.C_IMG2="/assets/images/carousel_img_02.jpg",t.C_IMG3="/assets/images/carousel_img_03.jpg",t.C_IMG4="/assets/images/carousel_img_04.jpg",t.SPINNER="/assets/images/spinner.gif",t.LOGO="/assets/images/logo.png",t}({})},FUS3:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ofXK"),o=(n("siFw"),n("FpAq"),n("fXoL"));let a=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.c]]}),t})()},FpAq:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("fXoL");let a=(()=>{class t{constructor(t){this.el=t}ngOnInit(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():r.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&r.a.error("addShadow must be a boolean.")}getType(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[...this.preClasses,"alert-primary"];case"secondary":return[...this.preClasses,"alert-secondary"];case"warning":return[...this.preClasses,"alert-warning"];case"success":return[...this.preClasses,"alert-success"];case"danger":return[...this.preClasses,"alert-danger"];case"info":return[...this.preClasses,"alert-info"];case"light":return[...this.preClasses,"alert-light"];case"dark":return[...this.preClasses,"alert-dark"];default:r.a.error("Invalid alert type.")}else r.a.error("Type must be a string.")}setType(){const t=this.getType(),e=this.el.nativeElement.classList;t.forEach(t=>{Array.prototype.slice.call(e).includes(t)&&this.el.nativeElement.classList.remove(t),this.el.nativeElement.classList.add(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.k))},t.\u0275dir=o.Gb({type:t,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),t})()},"H+bZ":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("AytR"),o=n("tk/3"),a=n("Mb37"),s=n("fXoL");let i=(()=>{class t{constructor(t){this.http=t}static storeApiVersionInCache(){caches.open("api_version").then(t=>t.add(`${r.a.apiUrl}/version`)).catch(t=>a.a.log(t))}getApiVersion(){const e=new o.f({Accept:"application/json"});return this.http.get(t.apiVersionUrl,{headers:e})}}return t.apiVersionUrl=`${r.a.apiUrl}/version`,t.\u0275fac=function(e){return new(e||t)(s.Zb(o.b))},t.\u0275prov=s.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})()},Mb37:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL");let o=(()=>{class t{constructor(){}}return t.log=(...t)=>console.log(...t),t.error=(...t)=>console.error(...t),t.warn=(...t)=>console.warn(...t),t.info=(...t)=>console.info(...t),t.table=(...t)=>console.table(t),t.trace=()=>console.trace(),t.count=t=>console.count(t),t.assert=(t,e)=>console.assert(t,e),t.time=t=>console.time(t),t.timeEnd=t=>console.timeEnd(t),t.group=t=>console.group(t),t.groupEnd=()=>console.group(),t.groupCollapsed=t=>console.groupCollapsed(t),t.clear=()=>console.clear(),t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:"root"}),t})()},"QTu/":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL");let o=(()=>{class t{constructor(){}static getCookie(t){const e=`${t}=`,n=decodeURIComponent(document.cookie).split(";");for(const r of n){let t=r;for(;" "===t.charAt(0);)t=t.substring(1);if(0===t.indexOf(e))return t.substring(e.length,t.length)}}static setCookie(t,e,n){const r=new Date;r.setTime(r.getTime()+24*n*3600*1e3);const o=`expires=${r.toUTCString()}`;document.cookie=`${t}=${e};${o};path=/`}static checkCookie(e,n){const r=t.getCookie(e);return n&&n(void 0===r?null:r),r||null}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})()},Ql4B:function(t,e,n){"use strict";var r=n("R0Ic");Object(r.o)("flyIn",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateX(-100%)"}),Object(r.e)("700ms ease-in")])]),Object(r.o)("flyOut",[Object(r.l)("out",Object(r.m)({transform:"translateX(-100%)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateX(0)"}),Object(r.e)("700ms ease-out")])]),Object(r.o)("flyInOut",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateX(-100%)"}),Object(r.e)(100)]),Object(r.n)("* => void",[Object(r.e)(100,Object(r.m)({transform:"translateX(100%)"}))])]),Object(r.o)("flyFromBottom",[Object(r.l)("in",Object(r.m)({transform:"translateY(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"translateY(100%)"}),Object(r.e)("700ms ease-in")])]),Object(r.o)("flyItems",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.e)(700,Object(r.h)([Object(r.m)({opacity:0,transform:"translateX(-100%)",offset:0}),Object(r.m)({opacity:1,transform:"translateX(0)",offset:1})]))]),Object(r.n)("* => void",[Object(r.e)(500,Object(r.h)([Object(r.m)({opacity:1,transform:"translateX(0)",offset:0}),Object(r.m)({opacity:0,transform:"translateX(100%)",offset:1})]))])]),Object(r.o)("slide",[Object(r.l)("left",Object(r.m)({transform:"translateX(0)"})),Object(r.l)("right",Object(r.m)({transform:"translateX(-50%)"})),Object(r.n)("* => *",Object(r.e)(300))]),Object(r.o)("routeAnimation",[Object(r.n)("heroes <=> hero",[Object(r.m)({position:"relative"}),Object(r.i)(":enter, :leave",[Object(r.m)({position:"absolute",top:0,left:0,width:"100%"})]),Object(r.i)(":enter",[Object(r.m)({left:"-100%"})]),Object(r.i)(":leave",Object(r.f)()),Object(r.g)([Object(r.i)(":leave",[Object(r.e)("300ms ease-out",Object(r.m)({left:"100%"}))]),Object(r.i)(":enter",[Object(r.e)("300ms ease-out",Object(r.m)({left:"0%"}))])]),Object(r.i)(":enter",Object(r.f)())])]);const o=[Object(r.o)("fadeOut",[Object(r.l)("in",Object(r.m)({opacity:1})),Object(r.n)(":leave",Object(r.e)(555,Object(r.m)({opacity:0})))])],a=[Object(r.o)("fadeIn",[Object(r.n)(":enter",[Object(r.m)({opacity:0}),Object(r.e)("1s",Object(r.m)({opacity:1}))])])];Object(r.o)("rotateIn",[Object(r.l)("in",Object(r.m)({transform:"translateX(0)"})),Object(r.n)("void => *",[Object(r.m)({transform:"rotate(-180deg)"}),Object(r.e)("700ms ease-out")])]),Object(r.o)("flipState",[Object(r.l)("active",Object(r.m)({transform:"rotateY(180deg)"})),Object(r.l)("inactive",Object(r.m)({transform:"rotateY(0)"})),Object(r.n)("active => inactive",Object(r.e)("400ms ease-out")),Object(r.n)("inactive => active",Object(r.e)("400ms ease-in"))]),Object(r.o)("filterAnimation",[Object(r.n)(":enter, * => 0, * => -1",[]),Object(r.n)(":increment",[Object(r.i)(":enter",[Object(r.m)({opacity:0,width:"0px"}),Object(r.k)(50,[Object(r.e)("300ms ease-out",Object(r.m)({opacity:1,width:"*"}))])],{optional:!0})]),Object(r.n)(":decrement",[Object(r.i)(":leave",[Object(r.k)(50,[Object(r.e)("300ms ease-out",Object(r.m)({opacity:0,width:"0px"}))])])])]),Object(r.o)("openClose",[Object(r.l)("open",Object(r.m)({height:"200px",opacity:1,backgroundColor:"yellow"})),Object(r.l)("close",Object(r.m)({height:"100px",opacity:.5,backgroundColor:"green"})),Object(r.n)("* => active",[Object(r.e)("2s",Object(r.h)([Object(r.m)({backgroundColor:"blue",offset:0}),Object(r.m)({backgroundColor:"red",offset:.8}),Object(r.m)({backgroundColor:"orange",offset:1})]))]),Object(r.n)("* => inactive",[Object(r.e)("2s",Object(r.h)([Object(r.m)({backgroundColor:"orange",offset:0}),Object(r.m)({backgroundColor:"red",offset:.2}),Object(r.m)({backgroundColor:"blue",offset:1})]))]),Object(r.n)("* => *",[Object(r.e)("1s",Object(r.h)([Object(r.m)({opacity:.1,offset:.1}),Object(r.m)({opacity:.6,offset:.2}),Object(r.m)({opacity:1,offset:.5}),Object(r.m)({opacity:.2,offset:.7})]))])]),Object(r.o)("shrinkOut",[Object(r.l)("in",Object(r.m)({height:"*"})),Object(r.n)("* => void",[Object(r.m)({height:"*"}),Object(r.e)(250,Object(r.m)({height:0}))])]),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return a}))},Rv5h:function(t,e,n){"use strict";var r=n("ktc5"),o=n.n(r);String.prototype.sanitizeXSS=function(t){let e,n=this.replace(e=/(?:(<script[\s\S]*?<\/script>)|(<style[\s\S]*?<\/style>)|(<!--[\s\S]*?-->)|(<\/?[\s\S]*?>)|(javascript:\S*))/gim,"");return null!=t&&(!0===t.replaceSpecialChars&&(n=n.replace(/(?:([&'"<>)(\\\/{}\[\]:;^*]))/gim,"")),!0===t.encode&&(n=o.a.encode(n))),n},e.a=String.prototype.sanitizeXSS},iTUp:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("ofXK"),o=(n("lPxU"),n("syTw"),n("fXoL"));let a=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[r.c]]}),t})()},lGQG:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("tk/3"),o=n("QTu/"),a=n("AytR"),s=n("DRYZ"),i=n("fXoL"),c=n("NuaS");let l=(()=>{class t{constructor(t,e){this.http=t,this.jwtHelper=e}static loadToken(){return o.a.getCookie("token_id")}static logout(){s.a.clearState(),o.a.setCookie("token_id","",0),o.a.setCookie("user","",0)}static storeData(t,e){o.a.setCookie("user",JSON.stringify(e),7),o.a.setCookie("token_id",t.replace("Bearer ",""),7)}authenticateUser(e){const n=new r.f({"Content-Type":"application/json"});return this.http.post(t.authUrl,e,{headers:n})}loggedOut(){return this.jwtHelper.isTokenExpired(o.a.getCookie("token_id"))||!o.a.checkCookie("token_id")}}return t.authUrl=`${a.a.apiUrl}/users/authenticate`,t.\u0275fac=function(e){return new(e||t)(i.Zb(r.b),i.Zb(c.b))},t.\u0275prov=i.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})()},lPxU:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("fXoL"),o=n("tk/3");let a=(()=>{class t{constructor(t){this.http=t,this.cachedData=null,this.cachedUrl=""}transform(t){return t!==this.cachedUrl&&(this.cachedData=null,this.cachedUrl=t,this.http.get(t).subscribe(t=>{this.cachedData=t})),this.cachedData}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(o.b))},t.\u0275pipe=r.Kb({name:"fetch",type:t,pure:!1}),t})()},qfBg:function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return i}));var r=n("tk/3"),o=n("AytR"),a=n("fXoL");let s=(()=>{class t{constructor(t){this.http=t}registerUser(e){const n=new r.f({"Content-Type":"application/json"});return this.http.post(`${t.userUrl}/register`,e,{headers:n})}updateUser(e,n){const o=new r.f({"Content-Type":"application/json"});return this.http.put(`${t.userUrl}/${e}`,n,{headers:o})}getUser(e){const n=new r.f({"Content-Type":"application/json"});return this.http.get(`${t.userUrl}/${e}`,{headers:n})}deleteUser(e){return this.http.delete(`${t.userUrl}/${e}`)}patchUser(e,n){const o=new r.f({"Content-Type":"application/json"});return this.http.patch(`${t.userUrl}/${e}`,n,{headers:o})}}return t.userUrl=`${o.a.apiUrl}/users`,t.\u0275fac=function(e){return new(e||t)(a.Zb(r.b))},t.\u0275prov=a.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})();const i={name:[1,100],username:[3,22],password:[6,256]}},siFw:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("fXoL");let a=(()=>{class t{constructor(t){this.el=t}ngOnInit(){this.preClasses=["btn",/(outline)/.test(this.btnType)?null:"btn-shadow"],this.btnType?this.setType():r.a.error("No button type specified.")}getType(){if("string"==typeof this.btnType)switch(this.btnType){case"primary-outline":return[...this.preClasses,"btn-outline-primary"];case"secondary-outline":return[...this.preClasses,"btn-outline-secondary"];case"warning-outline":return[...this.preClasses,"btn-outline-warning"];case"success-outline":return[...this.preClasses,"btn-outline-success"];case"danger-outline":return[...this.preClasses,"btn-outline-danger"];case"info-outline":return[...this.preClasses,"btn-outline-info"];case"light-outline":return[...this.preClasses,"btn-outline-light"];case"dark-outline":return[...this.preClasses,"btn-outline-dark"];case"primary":return[...this.preClasses,"btn-primary"];case"secondary":return[...this.preClasses,"btn-secondary"];case"warning":return[...this.preClasses,"btn-warning"];case"success":return[...this.preClasses,"btn-success"];case"danger":return[...this.preClasses,"btn-danger"];case"info":return[...this.preClasses,"btn-info"];case"light":return[...this.preClasses,"btn-light"];case"dark":return[...this.preClasses,"btn-dark"];default:r.a.error("Invalid button type.")}else r.a.error("Type must be a string.")}setType(){const t=this.getType(),e=this.el.nativeElement.classList;t.forEach(t=>{Array.from(e).includes(t)&&this.el.nativeElement.classList.remove(t),this.el.nativeElement.classList.add(t)})}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(o.k))},t.\u0275dir=o.Gb({type:t,selectors:[["","appBtn",""]],inputs:{btnType:"btnType"}}),t})()},syTw:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("fXoL");let o=(()=>{class t{constructor(){}transform(t,e,n=!1){let r=t||e;return n&&r.indexOf("https")<0&&(r=r.replace("http://","https://")),r}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=r.Kb({name:"defaultImage",type:t,pure:!0}),t})()},vuBd:function(t,e,n){"use strict";String.prototype.removeStringChars=function(){return this.replace(/([\u0022\u0027\u2018\u2019\u201C\u201D\u0060\u00B4\u055D\u055B])/gim,"")},e.a=String.prototype.removeStringChars},yZ9z:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));var r=n("Mb37"),o=n("fXoL");let a=(()=>{class t{constructor(){}static getState(t,e){try{return null!=e&&!0===e?sessionStorage.getItem(t):JSON.parse(sessionStorage.getItem(t))}catch(n){r.a.error(n)}}static setState(t,e){try{sessionStorage.setItem(t,JSON.stringify(e))}catch(n){r.a.error(n)}}static removeState(t){try{sessionStorage.removeItem(t)}catch(e){r.a.error(e)}}static clearState(){try{sessionStorage.clear()}catch(t){r.a.error(t)}}}return t.stateSize=sessionStorage.length,t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=o.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:"root"}),t})()},zUnb:function(t,e,n){"use strict";n.r(e);var r=n("fXoL"),o=n("AytR"),a=n("jhN1"),s=n("ofXK"),i=n("tyNb"),c=n("R1ws"),l=n("1kSV"),u=n("6NWb"),p=n("Mb37"),b=n("wHSu"),h=n("Ql4B"),f=n("yZ9z");function d(t,e){if(1&t&&r.Mb(0,"fa-icon",6),2&t){const t=r.gc(3);r.nc("icon",t.faInfoCircle)}}const g=function(){return["/","faq"]};function m(t,e){if(1&t){const t=r.Sb();r.Ob(0),r.Ic(1," You can find out more by visiting the "),r.Rb(2,"span",7),r.Ic(3,"Cookies section"),r.Pb(),r.Ic(4," on the "),r.Rb(5,"a",8),r.dc("click",(function(e){r.yc(t);const n=r.gc(2).$implicit;return r.gc().closeAlert(n)})),r.Ic(6,"FAQ page"),r.Pb(),r.Ic(7,". "),r.Nb()}2&t&&(r.xb(5),r.nc("routerLink",r.rc(1,g)))}function O(t,e){if(1&t){const t=r.Sb();r.Rb(0,"ngb-alert",3),r.dc("close",(function(e){r.yc(t);const n=r.gc().$implicit;return r.gc().closeAlert(n)})),r.Gc(1,d,1,1,"fa-icon",4),r.Ic(2),r.Gc(3,m,8,2,"ng-container",5),r.Pb()}if(2&t){const t=r.gc(),e=t.$implicit,n=t.index;r.nc("dismissible",!0)("type",e.type),r.xb(1),r.nc("ngIf",0===n),r.xb(1),r.Kc(" ",e.message," "),r.xb(1),r.nc("ngIf",0===n)}}function v(t,e){if(1&t&&(r.Rb(0,"div",1),r.Gc(1,O,4,5,"ngb-alert",2),r.Pb()),2&t){const t=r.gc();r.nc("@fadeOut","in"),r.xb(1),r.nc("ngIf",!t.cookiesOk)}}let y=(()=>{class t{constructor(){this.cookiesOk=!1}ngOnInit(){this.faInfoCircle=b.j,this.alerts=[{type:"warning",message:"I hate to interrupt, but I am required to tell you that this site uses cookies to store your login data for authentication. Click the (x) icon on the top right corner of this alert to close this annoying piece of garbage."}],f.a.getState("cookiesOk")||f.a.setState("cookiesOk","false"),this.cookiesOk=f.a.getState("cookiesOk")}closeAlert(t){this.alerts.splice(this.alerts.indexOf(t),1),f.a.setState("cookiesOk","true")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["layout-cookies-alert"]],decls:1,vars:1,consts:[["id","cookies-alert-container",4,"ngFor","ngForOf"],["id","cookies-alert-container"],["class","cookies-alert font-weight-bold shadow",3,"dismissible","type","close",4,"ngIf"],[1,"cookies-alert","font-weight-bold","shadow",3,"dismissible","type","close"],["class","mr-2",3,"icon",4,"ngIf"],[4,"ngIf"],[1,"mr-2",3,"icon"],[1,"underline"],["fragment","cookies",3,"routerLink","click"]],template:function(t,e){1&t&&r.Gc(0,v,2,2,"div",0),2&t&&r.nc("ngForOf",e.alerts)},directives:[s.n,s.o,l.d,u.a,i.g],styles:[".cookies-alert[_ngcontent-%COMP%]{background-color:#fff3cd!important;margin:1rem 1rem 0;text-shadow:-1px -1px 0 rgba(255,255,255,0),1px -1px 0 rgba(255,255,255,0),-1px 1px 0 rgba(255,255,255,0),1px 1px 0 rgba(255,255,255,0)}@media print{#cookies-alert-container[_ngcontent-%COMP%]{display:none}}"],data:{animation:[h.b]}}),t})(),j=(()=>{class t{constructor(t){this.route=t}static isWebKitBrowser(){return/(WebKit)/i.test(navigator.appVersion)&&!/(Edge)/.test(navigator.userAgent)}ngOnInit(){t.isWebKitBrowser()||p.a.warn("CSS custom scrollbar not available in non-WebKit browsers.")}isHomePage(){return"/home"===this.route._routerState.snapshot.url}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(i.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["layout-body"]],decls:5,vars:1,consts:[[1,"alert-container"],[1,"router-container"]],template:function(t,e){1&t&&(r.Rb(0,"main"),r.Rb(1,"div",0),r.Mb(2,"layout-cookies-alert"),r.Pb(),r.Rb(3,"div",1),r.Mb(4,"router-outlet"),r.Pb(),r.Pb()),2&t&&(r.xb(3),r.Db("bg-success",e.isHomePage()))},directives:[y,i.i],styles:["main[_ngcontent-%COMP%]{position:absolute;top:56px;width:100%}main[_ngcontent-%COMP%]   .router-container[_ngcontent-%COMP%]{padding-bottom:2.5rem}main[_ngcontent-%COMP%]   .alert-container[_ngcontent-%COMP%]{position:fixed;top:56px;width:100%;z-index:23}"]}),t})(),k=(()=>{class t{constructor(){}ngOnInit(){this.environment=o.a,this.author="Broccolini"}getYear(){return(new Date).getFullYear()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["layout-footer"]],inputs:{appName:"appName"},decls:9,vars:4,consts:[[1,"border-shadow"],["id","footer-content",1,"text-center","bg-dark"],["target","_self",3,"href"],["href","https://opensource.org/licenses/MIT","target","_blank","rel","noreferrer"]],template:function(t,e){1&t&&(r.Rb(0,"footer",0),r.Rb(1,"p",1),r.Rb(2,"span"),r.Ic(3),r.Rb(4,"a",2),r.Ic(5),r.Pb(),r.Ic(6," | "),r.Rb(7,"a",3),r.Ic(8,"MIT License"),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.xb(3),r.Lc(" ",e.environment.production?e.appName:e.appName+" (Beta)"," | \xa9 ",e.getYear().toString()," "),r.xb(1),r.nc("href",e.environment.production?"/credits.php":e.environment.apiUrl.replace("/api","")+"/credits.php",r.Ac),r.xb(1),r.Jc(e.author))},styles:["footer[_ngcontent-%COMP%]{bottom:0;height:2rem;position:fixed;width:100%;z-index:21}#footer-content[_ngcontent-%COMP%]{bottom:0;color:#fff;height:2rem;margin:0;padding:0;position:absolute;width:100%}@media only screen and (max-width:414px){#footer-content[_ngcontent-%COMP%]{font-size:12px}}#footer-content[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{position:absolute;right:50%;top:50%;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);width:100%}a[_ngcontent-%COMP%]{color:#fff}"]}),t})();var w=n("lGQG"),C=n("Ei5h"),I=n("siFw"),S=n("syTw");function L(t,e){if(1&t&&(r.Rb(0,"li",10),r.Rb(1,"a",11),r.Ic(2),r.Pb(),r.Pb()),2&t){const t=e.$implicit;r.xb(1),r.nc("routerLink",t.routerLink)("routerLinkActive",t.routerLinkActive)("routerLinkActiveOptions",t.routerLinkActiveOptions)("accessKey",t.accessKey),r.xb(1),r.Jc(t.navLinkText)}}const P=function(){return["/","login"]},x=function(){return["/","register"]};function M(t,e){1&t&&(r.Rb(0,"div",12),r.Rb(1,"a",13),r.Ic(2,"Login"),r.Pb(),r.Rb(3,"a",14),r.Ic(4,"Register"),r.Pb(),r.Pb()),2&t&&(r.xb(1),r.nc("routerLink",r.rc(2,P)),r.xb(2),r.nc("routerLink",r.rc(3,x)))}const R=function(){return["/","account"]};function _(t,e){1&t&&(r.Rb(0,"a",17),r.Ic(1,"Account"),r.Pb()),2&t&&r.nc("routerLink",r.rc(1,R))}function T(t,e){if(1&t){const t=r.Sb();r.Rb(0,"div",12),r.Gc(1,_,2,2,"a",15),r.Rb(2,"button",16),r.dc("click",(function(e){return r.yc(t),r.gc().logout()})),r.Ic(3," Logout "),r.Pb(),r.Pb()}if(2&t){const t=r.gc();r.xb(1),r.nc("ngIf",!t.isUrl("/account","full"))}}let A=(()=>{class t{constructor(t,e,n){this.authService=t,this.router=e,this.route=n,this.images=C.a}ngOnInit(){this.routes=[{routerLink:["/","home"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"Home",accessKey:"h"},{routerLink:["/","roms"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!1},navLinkText:"ROMs",accessKey:"r"},{routerLink:["/","natures"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"Natures",accessKey:"n"},{routerLink:["/","faq"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"FAQ",accessKey:"q"},{routerLink:["/","rate"],routerLinkActive:["yellow"],routerLinkActiveOptions:{exact:!0},navLinkText:"Rate",accessKey:"t"}],this.routeKey="_routerState",this.loggedOutRoutes=[{url:"/faq",pathMatch:"prefix"},{url:"/home",pathMatch:"full"},{url:"/natures",pathMatch:"full"},{url:"/rate",pathMatch:"full"},{url:"/docs",pathMatch:"full"},{url:"/not_found",pathMatch:"prefix"}],this.loggedInRoutes=[{url:"/roms",pathMatch:"full"},{url:"/roms",pathMatch:"prefix"},{url:"/account",pathMatch:"full"},{url:"/not_found",pathMatch:"prefix"}],this.logoFallbackUrl="https://6emlfw.sn.files.1drv.com/y4mZ4gYGKIW3-1Gg6sNAK2N-NLlAhXfn2NyK2eNlaP-V_Bi1xZsV5B_C71QqVw6rF32zJCPv7TsRgrKq4NFWYRUyuLdlqPKv8q0UOfMbPu8k1bok6dcRIauEUpzNHbGLc0YXFHPocoPUaVNvUqY4Ln7xEVJ9RjY_1diLvvmkvmqDtfFV8iBybtSl9zBAiYRa7c3LZopc03P-nfedATk6qvwLg?width=444&height=139&cropmode=none"}isUrl(t,e){switch(e){case"full":return this.route[this.routeKey].snapshot.url===t;case"prefix":return new RegExp(t.replace("/","\\/"),"i").test(this.route[this.routeKey].snapshot.url);default:return location.pathname===t}}isLoggedOut(){return this.authService.loggedOut()}logout(){w.a.logout(),this.isRoutes(this.loggedInRoutes,!0)&&this.router.navigate(["/","home"])}isRoutes(t,e){let n=!1;return t.forEach(t=>{this.isUrl(t.url,t.pathMatch)&&(n=!0)}),e?n:n&&this.isLoggedOut()}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(w.a),r.Lb(i.d),r.Lb(i.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["layout-header"]],decls:13,vars:8,consts:[[1,"border-shadow"],[1,"navbar-toggler-icon"],["id","nav-header",1,"navbar","navbar-expand-sm","navbar-dark","bg-dark"],["alt","app-logo","id","logo","routerLink","/",1,"navbar-brand","d-inline-block","align-top","mr-2",3,"src"],["type","button","data-toggle","collapse","data-target","#navbarNav","aria-controls","navbarNav","aria-label","Toggle navigation",1,"navbar-toggler"],["id","navbarNav",1,"collapse","navbar-collapse"],[1,"navbar-nav"],["class","nav-item",4,"ngFor","ngForOf"],[1,"ml-auto"],["class","btn-group",4,"ngIf"],[1,"nav-item"],[1,"nav-link","white",3,"routerLink","routerLinkActive","routerLinkActiveOptions","accessKey"],[1,"btn-group"],["appBtn","","btnType","light-outline","accesskey","l",1,"nav-item",3,"routerLink"],["appBtn","","btnType","light-outline","accesskey","g",1,"nav-item",3,"routerLink"],["class","nav-item","appBtn","","btnType","light-outline","accesskey","a",3,"routerLink",4,"ngIf"],["type","button","appBtn","","btnType","light-outline","accesskey","l",1,"nav-item",3,"click"],["appBtn","","btnType","light-outline","accesskey","a",1,"nav-item",3,"routerLink"]],template:function(t,e){1&t&&(r.Rb(0,"header",0),r.Mb(1,"span",1),r.Rb(2,"nav",2),r.Mb(3,"img",3),r.hc(4,"defaultImage"),r.Rb(5,"button",4),r.Mb(6,"span",1),r.Pb(),r.Rb(7,"div",5),r.Rb(8,"ul",6),r.Gc(9,L,3,5,"li",7),r.Pb(),r.Rb(10,"div",8),r.Gc(11,M,5,4,"div",9),r.Gc(12,T,4,1,"div",9),r.Pb(),r.Pb(),r.Pb(),r.Pb()),2&t&&(r.xb(3),r.nc("src",r.kc(4,4,e.images.LOGO,e.logoFallbackUrl,!0),r.Ac),r.xb(6),r.nc("ngForOf",e.routes),r.xb(2),r.nc("ngIf",e.isRoutes(e.loggedOutRoutes,!1)),r.xb(1),r.nc("ngIf",!e.isUrl("/login","full")&&!e.isLoggedOut()))},directives:[l.i,i.e,s.n,s.o,i.g,i.f,I.a],pipes:[S.a],styles:["header[_ngcontent-%COMP%]{height:56px;position:fixed;top:0;width:100%;z-index:22}header[_ngcontent-%COMP%]   #nav-header[_ngcontent-%COMP%]{position:absolute;top:0;width:100%}.white[_ngcontent-%COMP%]{color:#fff!important}.yellow[_ngcontent-%COMP%]{color:#e6bc2f!important}#logo[_ngcontent-%COMP%]{background-color:#343a40;cursor:pointer;height:2rem;width:74px}"]}),t})();var U=n("qfBg"),X=n("FUS3"),N=n("iTUp");let F=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[w.a,U.a],imports:[[s.c,i.h,l.h,c.a,u.b,X.a,N.a]]}),t})();var $=n("H+bZ");let E=(()=>{class t{constructor(e){this.apiService=e,this._title=`Pok${t._eacute}ROM`,this.changeTitleIfDevEnv(),this.getApiVersionIfDevEnv(),"https:"===location.protocol&&$.a.storeApiVersionInCache()}get title(){return this._title}set title(t){this._title=t}changeTitleIfDevEnv(){o.a.production||(document.title=`${this.title} (Beta)`)}getApiVersionIfDevEnv(){if(!o.a.production){let t;this.apiVersionObs$=this.apiService.getApiVersion();const e=this.apiVersionObs$.subscribe(e=>{t=!0,p.a.log(`API Version: ${e.api_version}`)},e=>{throw t=!1,e},()=>{null!=t&&e.unsubscribe()})}}}return t._eacute="\xe9",t.\u0275fac=function(e){return new(e||t)(r.Lb($.a))},t.\u0275cmp=r.Fb({type:t,selectors:[["app-root"]],decls:8,vars:2,consts:[["id","container-wrapper"],[1,"header"],[1,"body"],[1,"footer"],[3,"appName"]],template:function(t,e){1&t&&(r.Ob(0),r.Rb(1,"div",0),r.Rb(2,"section",1),r.Mb(3,"layout-header"),r.Pb(),r.Rb(4,"section",2),r.Mb(5,"layout-body"),r.Pb(),r.Rb(6,"section",3),r.Mb(7,"layout-footer",4),r.Pb(),r.Pb(),r.Nb()),2&t&&(r.xb(1),r.zb("data-name",e.title),r.xb(6),r.nc("appName",e.title))},directives:[A,j,k],styles:[":root {\n        --cw-display: table;\n        --comp-display: table-row;\n        --part-display: table-cell;\n      }","#container-wrapper[_ngcontent-%COMP%] {\n        display: var(--cw-display);\n      }\n      .header[_ngcontent-%COMP%], .body[_ngcontent-%COMP%], .footer[_ngcontent-%COMP%] {\n        display: var(--comp-display);\n      }\n      layout-body[_ngcontent-%COMP%], layout-header[_ngcontent-%COMP%], layout-footer[_ngcontent-%COMP%] {\n        display: var(--part-display);\n      }"]}),t})();var K=n("tk/3");let B=(()=>{class t{constructor(){}intercept(t,e){let n;return n=o.a.production?t.clone({url:t.url.replace("http://","https://")}):t,e.handle(n)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})(),H=(()=>{class t{constructor(){}intercept(t,e){const n=t.urlWithParams.replace(o.a.apiUrl.replace("/api","/"),"").split("/");return[`${o.a.apiUrl}/roms`,`${o.a.apiUrl}/roms/${"roms"===n[1]&&void 0!==n[2]?n[2]:""}`,`${o.a.apiUrl}/users/${"users"===n[1]&&void 0!==n[2]?n[2]:""}`].includes(t.url)&&(t=t.clone({setHeaders:{Authorization:`Bearer ${w.a.loadToken()}`}})),e.handle(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})();var z=n("vkgz"),G=n("NuaS");let D=(()=>{class t{constructor(t,e,n){this.router=t,this.jwtHelper=e,this.authService=n}intercept(t,e){return e.handle(t).pipe(Object(z.a)(t=>{t instanceof K.h&&t.type===K.e.Response&&/(?:(\/api\/roms(\/)?)([\da-fA-F]{24}?))$/.test(t.url)&&this.authService.loggedOut()&&(w.a.logout(),this.router.navigate(["/","login"]))},t=>{t instanceof K.d&&401===t.status&&this.router.navigate(["/","login"])}))}}return t.\u0275fac=function(e){return new(e||t)(r.Zb(i.d),r.Zb(G.b),r.Zb(w.a))},t.\u0275prov=r.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})();const V={provide:G.a,useValue:G.a};var q=n("lJxs"),J=n("ktc5"),Y=n.n(J),Z=n("Rv5h"),Q=n("vuBd");const W=[{provide:K.a,useClass:B,multi:!0},{provide:K.a,useClass:H,multi:!0},{provide:K.a,useClass:D,multi:!0},{provide:K.a,useClass:(()=>{class t{constructor(){String.prototype.sanitizeXSS=Z.a,String.prototype.removeStringChars=Q.a}intercept(t,e){return e.handle(t).pipe(Object(q.a)(t=>t instanceof K.h&&t.type===K.e.Response?t.clone({body:(()=>{let e=t.body;return Array.isArray(e)?e=e.map(t=>(Object.keys(t).forEach(e=>{"string"==typeof t[e]&&(t[e]=Y.a.decode(t[e]).sanitizeXSS().removeStringChars())}),t)):Object.keys(e).forEach(t=>{"string"==typeof e[t]&&(e[t]=Y.a.decode(e[t]).sanitizeXSS().removeStringChars())}),e})()}):t,t=>{p.a.error(t)}))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})(),multi:!0}];var tt=n("Jho9");let et=(()=>{class t{constructor(){}ngOnInit(){this.notFoundMsg="Error 404: Page Not Found.",p.a.error(this.notFoundMsg)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Fb({type:t,selectors:[["app-not-found"]],decls:3,vars:1,consts:[[1,"mt-4","pt-4"],["id","not-found"]],template:function(t,e){1&t&&(r.Rb(0,"div",0),r.Rb(1,"h1",1),r.Ic(2),r.Pb(),r.Pb()),2&t&&(r.xb(2),r.Kc(" ",e.notFoundMsg," "))},styles:["#not-found[_ngcontent-%COMP%]{margin-top:1rem;text-align:center}"]}),t})();var nt=n("Dat7");const rt=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadChildren:()=>Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"7vJP")).then(t=>t.HomeModule).catch(t=>p.a.error(t))},{path:"roms",loadChildren:()=>Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"gnNr")).then(t=>t.RomsModule).catch(t=>p.a.error(t))},{path:"natures",loadChildren:()=>Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"Qz4V")).then(t=>t.NaturesModule).catch(t=>p.a.error(t))},{path:"faq",loadChildren:()=>n.e(7).then(n.bind(null,"k/Fm")).then(t=>t.FaqModule).catch(t=>p.a.error(t))},{path:"rate",loadChildren:()=>Promise.all([n.e(0),n.e(12)]).then(n.bind(null,"Wx56")).then(t=>t.RatingsModule).catch(t=>p.a.error(t))},{path:"login",loadChildren:()=>Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"qYmF")).then(t=>t.LoginModule).catch(t=>p.a.error(t))},{path:"register",loadChildren:()=>Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"3+Ob")).then(t=>t.RegisterModule).catch(t=>p.a.error(t))},{path:"account",loadChildren:()=>Promise.all([n.e(0),n.e(8)]).then(n.bind(null,"nDdO")).then(t=>t.AccountModule).catch(t=>p.a.error(t))},{path:"**",redirectTo:"/not_found",canActivate:[nt.a]},{path:"not_found",component:et,canActivate:[nt.a]}];let ot=(()=>{class t{}return t.\u0275mod=r.Jb({type:t}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},imports:[[i.h.forRoot(rt,{anchorScrolling:"enabled",scrollPositionRestoration:"enabled",useHash:!1,preloadingStrategy:i.c})],i.h]}),t})(),at=(()=>{class t{}return t.\u0275mod=r.Jb({type:t,bootstrap:[E]}),t.\u0275inj=r.Ib({factory:function(e){return new(e||t)},providers:[$.a,G.b,V,W],imports:[[a.a,F,s.c,X.a,K.c,ot,tt.a.register("ngsw-worker.js",{enabled:o.a.production})]]}),t})();o.a.production&&Object(r.Q)(),a.c().bootstrapModule(at).catch(t=>console.error(t))},zn8P:function(t,e){function n(t){return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}))}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="zn8P"}},[[0,1,6]]]);