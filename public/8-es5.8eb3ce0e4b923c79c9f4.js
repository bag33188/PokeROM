function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{NvMS:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("Ei5h"),i=n("Mb37"),a=n("fXoL"),s=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.images=r.a}},{key:"ngAfterViewInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&i.a.error("Loading property is required.")}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["app-gif-spinner"]],inputs:{loading:"loading"},decls:2,vars:2,consts:[[1,"spinner-container",3,"hidden"],["alt","spinner",1,"spinner",3,"src"]],template:function(e,t){1&e&&(a.Rb(0,"div",0),a.Mb(1,"img",1),a.Pb()),2&e&&(a.nc("hidden",!t.loading),a.xb(1),a.nc("src",t.images.SPINNER,a.zc))},styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]}),e}()},Qz4V:function(e,t,n){"use strict";n.r(t);var r,i=n("ofXK"),a=n("wHSu"),s=n("Mb37"),o=n("fXoL"),c=n("tk/3"),u=n("AytR"),l=new c.f({"Content-Type":"application/json"}),p=((r=function(){function e(t){_classCallCheck(this,e),this.http=t,this.naturesUrl="".concat(u.a.apiUrl,"/natures")}return _createClass(e,[{key:"getAllNatures",value:function(){return this.http.get(this.naturesUrl)}},{key:"getNature",value:function(e){return this.http.get("".concat(this.naturesUrl,"/").concat(e))}},{key:"addNature",value:function(e){return this.http.post(this.naturesUrl,e,{headers:l})}},{key:"updateNature",value:function(e,t){return this.http.put("".concat(this.naturesUrl,"/").concat(e),t,{headers:l})}},{key:"patchNature",value:function(e,t){return this.http.patch("".concat(this.naturesUrl,"/").concat(e),t,{headers:l})}},{key:"deleteNature",value:function(e){return this.http.delete("".concat(this.naturesUrl,"/").concat(e))}},{key:"deleteAllNatures",value:function(){return this.http.delete(this.naturesUrl)}}]),e}()).\u0275fac=function(e){return new(e||r)(o.Zb(c.b))},r.\u0275prov=o.Hb({token:r,factory:function(e){return r.\u0275fac(e)},providedIn:null}),r),d=n("NvMS"),h=n("6NWb");function f(e,t){if(1&e&&(o.Rb(0,"th"),o.Rb(1,"div",7),o.Mb(2,"fa-icon",8),o.Pb(),o.Rb(3,"span",9),o.Hc(4),o.Pb(),o.Pb()),2&e){var n=t.$implicit,r=t.index,i=o.gc(2);o.xb(2),o.nc("icon",i.icons[r]),o.xb(2),o.Ic(n)}}function b(e,t){if(1&e&&(o.Rb(0,"tr"),o.Rb(1,"td"),o.Hc(2),o.Pb(),o.Rb(3,"td"),o.Hc(4),o.Pb(),o.Rb(5,"td"),o.Hc(6),o.Pb(),o.Rb(7,"td"),o.Hc(8),o.Pb(),o.Rb(9,"td"),o.Hc(10),o.Pb(),o.Pb()),2&e){var n=t.$implicit;o.xb(2),o.Ic(n.name),o.xb(2),o.Ic(n.up),o.xb(2),o.Ic(n.down),o.xb(2),o.Ic(n.flavor||"N/A"),o.xb(2),o.Ic(n.usage)}}function g(e,t){if(1&e&&(o.Rb(0,"table",5),o.Rb(1,"thead"),o.Rb(2,"tr"),o.Fc(3,f,5,2,"th",6),o.Pb(),o.Pb(),o.Rb(4,"tbody"),o.Fc(5,b,11,5,"tr",6),o.Pb(),o.Pb()),2&e){var n=o.gc();o.xb(3),o.nc("ngForOf",n.headers),o.xb(2),o.nc("ngForOf",n.natures)}}var y,m,v=((y=function(){function e(t){_classCallCheck(this,e),this.naturesService=t,this.natures=new Array,this.loading=!0,this.isError=!1}return _createClass(e,[{key:"ngOnInit",value:function(){this.faLeaf=a.k,this.faArrowDown=a.a,this.faArrowUp=a.b,this.faSignLanguage=a.m,this.faHeart=a.h,this.getNatures(),this.setHeaders()}},{key:"ngAfterContentInit",value:function(){window.scrollTo(0,0)}},{key:"ngOnDestroy",value:function(){this.naturesSub.unsubscribe()}},{key:"setHeaders",value:function(){this.headers=["Nature","Increased Stat","Decreased Stat","Flavor","Usage"],this.icons=[this.faLeaf,this.faArrowUp,this.faArrowDown,this.faHeart,this.faSignLanguage]}},{key:"getNatures",value:function(){var e=this;this.naturesObs$=this.naturesService.getAllNatures(),this.naturesSub=this.naturesObs$.subscribe((function(t){e.natures=t,e.loading=!1,e.isError=!1}),(function(t){e.loading=!1,e.isError=!0,s.a.error(t)}))}}]),e}()).\u0275fac=function(e){return new(e||y)(o.Lb(p))},y.\u0275cmp=o.Fb({type:y,selectors:[["app-natures"]],decls:11,vars:3,consts:[[3,"loading"],["id","natures-container",1,"container","mt-2"],[1,"mt-2"],["appAlert","","alertType","danger",3,"hidden"],["id","natures","class","table table-striped border",4,"ngIf"],["id","natures",1,"table","table-striped","border"],[4,"ngFor","ngForOf"],[1,"header-icon-container"],[3,"icon"],[1,"header-text"]],template:function(e,t){1&e&&(o.Ob(0),o.Mb(1,"app-gif-spinner",0),o.Rb(2,"div",1),o.Rb(3,"h1",2),o.Hc(4,"Natures"),o.Pb(),o.Mb(5,"hr"),o.Rb(6,"div",3),o.Hc(7," Oops, there was a problem while trying to load the natures."),o.Mb(8,"br"),o.Hc(9,"Please try again later. "),o.Pb(),o.Fc(10,g,6,2,"table",4),o.Pb(),o.Nb()),2&e&&(o.xb(1),o.nc("loading",t.loading),o.xb(5),o.nc("hidden",!t.isError),o.xb(4),o.nc("ngIf",!t.loading&&!t.isError))},directives:[d.a,i.n,i.m,h.a],styles:["#natures-container[_ngcontent-%COMP%]{overflow-x:auto!important}#natures[_ngcontent-%COMP%]{background-color:#fff}.header-text[_ngcontent-%COMP%]{display:initial}.header-icon-container[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:991px){.header-icon-container[_ngcontent-%COMP%]{display:block;text-align:center}.header-text[_ngcontent-%COMP%]{display:none}}"]}),y),C=n("tyNb"),k=[{path:"",component:v,canActivate:[n("Dat7").a]}],w=((m=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:m}),m.\u0275inj=o.Ib({factory:function(e){return new(e||m)},imports:[[C.f.forChild(k)],C.f]}),m),P=n("WjtB");n.d(t,"NaturesModule",(function(){return _}));var x,_=((x=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:x}),x.\u0275inj=o.Ib({factory:function(e){return new(e||x)},providers:[p],imports:[[i.b,w,P.a,h.b]]}),x)},WjtB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n("NvMS"),n("beNV");var r=n("ofXK"),i=n("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},providers:[],imports:[[r.b]]}),e}()},beNV:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("Mb37"),i=n("fXoL"),a=n("ofXK"),s=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){var e;!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses=(_defineProperty(e={},this.type,!0),_defineProperty(e,this.color,!0),_defineProperty(e,"spacing",null!=this.spaced&&!0===this.spaced),e))}},{key:"setType",value:function(){this.type=this.getType()}},{key:"setColor",value:function(){this.color=this.getColor()}},{key:"getType",value:function(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:r.a.error("Invalid type.")}else r.a.error("Type must be a string.")}},{key:"getColor",value:function(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:r.a.error("Invalid color.")}else r.a.error("Color must be a string.")}},{key:"checkForErrors",value:function(){return this.spinnerType||r.a.error("Type is required."),this.spinnerColor||r.a.error("Color is required."),null==this.loading&&r.a.error("Loading property is required."),null!=this.spaced&&"boolean"!=typeof this.spaced&&r.a.error("Spaced property must be a boolean."),this.customSize&&"number"!=typeof this.customSize&&r.a.error("Custom size property must be a number data-type."),!1}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["app-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:4,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"span",1),i.Hc(2,"Loading..."),i.Pb(),i.Pb()),2&e&&(i.Ec("height",t.customSize?t.customSize:32,"px"),i.Ec("width",t.customSize?t.customSize:32,"px"),i.nc("ngClass",t.ngClasses)("hidden",!t.loading))},directives:[a.l],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),e}()}}]);