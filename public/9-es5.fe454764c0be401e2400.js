function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NvMS:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("Ei5h"),a=n("DvS/"),i=n("Mb37"),s=n("8Y7J"),o=n("3+9a"),c=["spinnerImg"],u=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.fallbackUrl=a.a.SPINNER,this.images=r.a}},{key:"ngAfterContentInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&i.a.error("Loading property is required.")}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Gb({type:e,selectors:[["spinners-gif-spinner"]],viewQuery:function(e,t){var n;1&e&&s.Oc(c,!0),2&e&&s.xc(n=s.fc())&&(t.spinnerImage=n.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(e,t){1&e&&(s.Sb(0,"div",0),s.Nb(1,"img",1,2),s.ic(3,"defaultImage"),s.Qb()),2&e&&(s.pc("hidden",!t.loading),s.yb(1),s.pc("src",s.mc(3,2,t.images.SPINNER,t.fallbackUrl,t.spinnerImage,!0),s.Cc))},pipes:[o.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - 56px - 2rem);margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"]}),e}()},Qz4V:function(e,t,n){"use strict";n.r(t);var r,a=n("SVse"),i=n("wHSu"),s=n("Mb37"),o=n("8Y7J"),c=n("IheW"),u=n("AytR"),l=new c.f({"Content-Type":"application/json"}),p=((r=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"getAllNatures",value:function(){return this.http.get(e.naturesUrl)}},{key:"getNature",value:function(t){return this.http.get("".concat(e.naturesUrl,"/").concat(t))}},{key:"addNature",value:function(t){return this.http.post(e.naturesUrl,t,{headers:l})}},{key:"updateNature",value:function(t,n){return this.http.put("".concat(e.naturesUrl,"/").concat(t),n,{headers:l})}},{key:"patchNature",value:function(t,n){return this.http.patch("".concat(e.naturesUrl,"/").concat(t),n,{headers:l})}},{key:"deleteNature",value:function(t){return this.http.delete("".concat(e.naturesUrl,"/").concat(t))}},{key:"deleteAllNatures",value:function(){return this.http.delete(e.naturesUrl)}},{key:"addAllNatures",value:function(){return this.http.post("".concat(e.naturesUrl,"/all"),{},{headers:l})}}]),e}()).naturesUrl="".concat(u.a.apiUrl,"/natures"),r.\u0275fac=function(e){return new(e||r)(o.ac(c.b))},r.\u0275prov=o.Ib({token:r,factory:r.\u0275fac}),r),h=n("NvMS"),f=n("FpAq"),d=n("Nv++");function b(e,t){1&e&&(o.Sb(0,"div",6),o.Kc(1," Oops, there was a problem while trying to load the natures."),o.Nb(2,"br"),o.Kc(3,"Please try again later. "),o.Qb())}function g(e,t){if(1&e&&(o.Sb(0,"th"),o.Sb(1,"div",9),o.Nb(2,"fa-icon",10),o.Qb(),o.Sb(3,"span",11),o.Kc(4),o.Qb(),o.Qb()),2&e){var n=t.$implicit,r=t.index,a=o.hc(3);o.yb(2),o.pc("icon",a.icons[r]),o.yb(2),o.Lc(n)}}function y(e,t){if(1&e&&(o.Sb(0,"tr"),o.Sb(1,"td"),o.Kc(2),o.Qb(),o.Sb(3,"td"),o.Kc(4),o.Qb(),o.Sb(5,"td"),o.Kc(6),o.Qb(),o.Sb(7,"td"),o.Kc(8),o.Qb(),o.Sb(9,"td"),o.Kc(10),o.Qb(),o.Qb()),2&e){var n=t.$implicit;o.yb(2),o.Lc(n.name),o.yb(2),o.Lc(n.up),o.yb(2),o.Lc(n.down),o.yb(2),o.Lc(n.flavor||"N/A"),o.yb(2),o.Lc(n.usage)}}function m(e,t){if(1&e&&(o.Sb(0,"table",7),o.Sb(1,"thead"),o.Sb(2,"tr"),o.Ic(3,g,5,2,"th",8),o.Qb(),o.Qb(),o.Sb(4,"tbody"),o.Ic(5,y,11,5,"tr",8),o.Qb(),o.Qb()),2&e){var n=o.hc(2);o.yb(3),o.pc("ngForOf",n.headers),o.yb(2),o.pc("ngForOf",n.natures)}}function v(e,t){if(1&e&&(o.Pb(0),o.Ic(1,b,4,0,"div",4),o.Ic(2,m,6,2,"ng-template",null,5,o.Jc),o.Ob()),2&e){var n=o.yc(3),r=o.hc();o.yb(1),o.pc("ngIf",r.isError)("ngIfElse",n)}}var C,k,S=((C=function(){function e(t){_classCallCheck(this,e),this.naturesService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.natures=new Array,this.loading=!0,this.isError=!1,this.faLeaf=i.j,this.faArrowDown=i.a,this.faArrowUp=i.b,this.faSignLanguage=i.l,this.faHeart=i.h,this.getNatures(),this.setHeaders()}},{key:"ngOnDestroy",value:function(){this.naturesSub.unsubscribe()}},{key:"setHeaders",value:function(){this.headers=["Nature","Increased Stat","Decreased Stat","Flavor","Usage"],this.icons=[this.faLeaf,this.faArrowUp,this.faArrowDown,this.faHeart,this.faSignLanguage]}},{key:"getNatures",value:function(){var e=this;this.naturesObs$=this.naturesService.getAllNatures(),this.naturesSub=this.naturesObs$.subscribe((function(t){e.natures=t,e.loading=!1,e.isError=!1}),(function(t){e.loading=!1,e.isError=!0,s.a.error(t)}))}}]),e}()).\u0275fac=function(e){return new(e||C)(o.Mb(p))},C.\u0275cmp=o.Gb({type:C,selectors:[["natures"]],decls:7,vars:2,consts:[[3,"loading"],["id","natures-container",1,"container","mt-2"],[1,"mt-2"],[4,"ngIf"],["appAlert","","alertType","danger","class","text-center",4,"ngIf","ngIfElse"],["naturesTable",""],["appAlert","","alertType","danger",1,"text-center"],["id","natures",1,"table","table-striped","border"],[4,"ngFor","ngForOf"],[1,"header-icon-container"],[3,"icon"],[1,"header-text"]],template:function(e,t){1&e&&(o.Pb(0),o.Nb(1,"spinners-gif-spinner",0),o.Sb(2,"div",1),o.Sb(3,"h1",2),o.Kc(4,"Natures"),o.Qb(),o.Nb(5,"hr"),o.Ic(6,v,4,2,"ng-container",3),o.Qb(),o.Ob()),2&e&&(o.yb(1),o.pc("loading",t.loading),o.yb(5),o.pc("ngIf",!t.loading))},directives:[h.a,a.o,f.a,a.n,d.a],styles:["#natures-container[_ngcontent-%COMP%]{overflow-x:auto!important}#natures[_ngcontent-%COMP%]{background-color:#fff}.header-text[_ngcontent-%COMP%]{display:initial}.header-icon-container[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:991px){.header-icon-container[_ngcontent-%COMP%]{display:block;text-align:center}.header-text[_ngcontent-%COMP%]{display:none}}"]}),C),w=n("iInd"),_=[{path:"",component:S,canActivate:[n("Dat7").a]}],x=((k=function e(){_classCallCheck(this,e)}).\u0275mod=o.Kb({type:k}),k.\u0275inj=o.Jb({factory:function(e){return new(e||k)},imports:[[w.h.forChild(_)],w.h]}),k),I=n("WjtB"),N=n("FUS3");n.d(t,"NaturesModule",(function(){return P}));var O,P=((O=function e(){_classCallCheck(this,e)}).\u0275mod=o.Kb({type:O}),O.\u0275inj=o.Jb({factory:function(e){return new(e||O)},providers:[p],imports:[[a.c,x,I.a,d.b,N.a]]}),O)},WjtB:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n("NvMS"),n("beNV");var r=n("SVse"),a=n("iTUp"),i=n("8Y7J"),s=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(t){return new(t||e)},imports:[[r.c,a.a]]}),e}()},beNV:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n("Mb37"),a=n("8Y7J"),i=n("SVse"),s=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){var e;!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses=(_defineProperty(e={},this.type,!0),_defineProperty(e,this.color,!0),_defineProperty(e,"spacing",null!=this.spaced&&!0===this.spaced),e))}},{key:"setType",value:function(){this.type=this.getType()}},{key:"setColor",value:function(){this.color=this.getColor()}},{key:"getType",value:function(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:r.a.error("Invalid type.")}else r.a.error("Type must be a string.")}},{key:"getColor",value:function(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:r.a.error("Invalid color.")}else r.a.error("Color must be a string.")}},{key:"checkForErrors",value:function(){return this.spinnerType?this.spinnerColor?null==this.loading?(r.a.error("Loading property is required."),!0):null!=this.spaced&&"boolean"!=typeof this.spaced?(r.a.error("Spaced property must be a boolean."),!0):!(!this.customSize||"number"==typeof this.customSize||(r.a.error("Custom size property must be a number data-type."),0)):(r.a.error("Color is required."),!0):(r.a.error("Type is required."),!0)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:4,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(e,t){1&e&&(a.Sb(0,"div",0),a.Sb(1,"span",1),a.Kc(2,"Loading..."),a.Qb(),a.Qb()),2&e&&(a.Hc("height",t.customSize?t.customSize:32,"px")("width",t.customSize?t.customSize:32,"px"),a.pc("ngClass",t.ngClasses)("hidden",!t.loading))},directives:[i.m],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),e}()}}]);