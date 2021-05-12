!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{FpAq:function(e,r,i){"use strict";i.d(r,"a",function(){return c});var s=i("Mb37"),o=i("fXoL"),c=function(){var e=function(){function e(t){n(this,e),this.el=t}return a(e,[{key:"ngOnInit",value:function(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():s.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&s.a.error("addShadow must be a boolean.")}},{key:"getType",value:function(){if("string"!=typeof this.alertType)return s.a.error("Type must be a string."),new Array;switch(this.alertType){case"primary":return[].concat(t(this.preClasses),["alert-primary"]);case"secondary":return[].concat(t(this.preClasses),["alert-secondary"]);case"warning":return[].concat(t(this.preClasses),["alert-warning"]);case"success":return[].concat(t(this.preClasses),["alert-success"]);case"danger":return[].concat(t(this.preClasses),["alert-danger"]);case"info":return[].concat(t(this.preClasses),["alert-info"]);case"light":return[].concat(t(this.preClasses),["alert-light"]);case"dark":return[].concat(t(this.preClasses),["alert-dark"]);default:return s.a.error("Invalid alert type."),new Array}}},{key:"setType",value:function(){var t=this.getType(),e=this.el.nativeElement.classList;t.forEach(function(t){Array.from(e).includes(t)&&e.remove(t),e.add(t)}),-1!==Array.prototype.slice.call(e).indexOf("null")&&e.remove("null")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Mb(o.m))},e.\u0275dir=o.Hb({type:e,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),e}()},NvMS:function(t,e,r){"use strict";r.d(e,"a",function(){return f});var i=r("Ei5h"),s=r("DvS/"),o=r("Mb37"),c=r("fXoL"),u=r("3+9a"),l=["spinnerImg"],f=function(){var t=function(){function t(){n(this,t)}return a(t,[{key:"ngOnInit",value:function(){this.fallbackUrl=s.a.SPINNER,this.images=i.a}},{key:"ngAfterContentInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&o.a.error("Loading property is required.")}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Gb({type:t,selectors:[["spinners-gif-spinner"]],viewQuery:function(t,e){var n;(1&t&&c.Kc(l,!0),2&t)&&(c.uc(n=c.cc())&&(e.spinnerImage=n.first))},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(t,e){1&t&&(c.Rb(0,"div",0),c.Nb(1,"img",1,2),c.fc(3,"defaultImage"),c.Qb()),2&t&&(c.mc("hidden",!e.loading),c.zb(1),c.mc("src",c.jc(3,2,e.images.SPINNER,e.fallbackUrl,e.spinnerImage,!0),c.zc))},pipes:[u.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}"]}),t}()},Qz4V:function(t,e,r){"use strict";r.r(e),r.d(e,"NaturesModule",function(){return U});var i,s=r("ofXK"),o=r("tyNb"),c=r("Dat7"),u=r("tk/3"),l=r("AytR"),f=r("fXoL"),p=new u.f({"Content-Type":"application/json"}),d=((i=function(){function t(e){n(this,t),this.http=e}return a(t,[{key:"getAllNatures",value:function(){return this.http.get(t.naturesUrl)}},{key:"getNature",value:function(e){return this.http.get("".concat(t.naturesUrl,"/").concat(e))}},{key:"addNature",value:function(e){return this.http.post(t.naturesUrl,e,{headers:p})}},{key:"updateNature",value:function(e,n){return this.http.put("".concat(t.naturesUrl,"/").concat(e),n,{headers:p})}},{key:"patchNature",value:function(e,n){return this.http.patch("".concat(t.naturesUrl,"/").concat(e),n,{headers:p})}},{key:"deleteNature",value:function(e){return this.http.delete("".concat(t.naturesUrl,"/").concat(e))}},{key:"deleteAllNatures",value:function(){return this.http.delete(t.naturesUrl)}},{key:"addAllNatures",value:function(){return this.http.post("".concat(t.naturesUrl,"/all"),{},{headers:p})}}]),t}()).naturesUrl="".concat(l.a.apiUrl,"/natures"),i.\u0275fac=function(t){return new(t||i)(f.Yb(u.b))},i.\u0275prov=f.Ib({token:i,factory:i.\u0275fac}),i),h=r("Mb37"),b=r("NvMS"),g=r("FpAq"),y=r("wHSu"),m=r("6NWb");function v(t,e){if(1&t&&(f.Rb(0,"th"),f.Rb(1,"div",2),f.Nb(2,"fa-icon",3),f.Qb(),f.Rb(3,"span",4),f.Gc(4),f.Qb(),f.Qb()),2&t){var n=e.$implicit,r=e.index,a=f.ec();f.zb(2),f.mc("icon",a.icons[r]),f.zb(2),f.Hc(n)}}function w(t,e){if(1&t&&(f.Rb(0,"tr"),f.Rb(1,"td"),f.Gc(2),f.Qb(),f.Rb(3,"td"),f.Gc(4),f.Qb(),f.Rb(5,"td"),f.Gc(6),f.Qb(),f.Rb(7,"td"),f.Gc(8),f.Qb(),f.Rb(9,"td"),f.Gc(10),f.Qb(),f.Qb()),2&t){var n=e.$implicit;f.zb(2),f.Hc(n.name),f.zb(2),f.Hc(n.up),f.zb(2),f.Hc(n.down),f.zb(2),f.Hc(n.flavor||"N/A"),f.zb(2),f.Hc(n.usage)}}var k,N=((k=function(){function t(){n(this,t)}return a(t,[{key:"ngOnInit",value:function(){this.faLeaf=y.j,this.faArrowDown=y.a,this.faArrowUp=y.b,this.faSignLanguage=y.l,this.faHeart=y.h,this.setHeaders()}},{key:"setHeaders",value:function(){this.headers=["Nature","Increased Stat","Decreased Stat","Flavor","Usage"],this.icons=[this.faLeaf,this.faArrowUp,this.faArrowDown,this.faHeart,this.faSignLanguage]}}]),t}()).\u0275fac=function(t){return new(t||k)},k.\u0275cmp=f.Gb({type:k,selectors:[["natures-table"]],inputs:{natures:["natureData","natures"]},decls:6,vars:2,consts:[["id","natures",1,"table","table-striped","border","shadow"],[4,"ngFor","ngForOf"],[1,"header-icon-container"],[3,"icon"],[1,"header-text"]],template:function(t,e){1&t&&(f.Rb(0,"table",0),f.Rb(1,"thead"),f.Rb(2,"tr"),f.Ec(3,v,5,2,"th",1),f.Qb(),f.Qb(),f.Rb(4,"tbody"),f.Ec(5,w,11,5,"tr",1),f.Qb(),f.Qb()),2&t&&(f.zb(3),f.mc("ngForOf",e.headers),f.zb(2),f.mc("ngForOf",e.natures))},directives:[s.n,m.a],styles:["#natures[_ngcontent-%COMP%]{background-color:#fff}.header-text[_ngcontent-%COMP%]{display:initial}.header-icon-container[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:991px){.header-icon-container[_ngcontent-%COMP%]{display:block;text-align:center}.header-text[_ngcontent-%COMP%]{display:none}}"]}),k);function A(t,e){1&t&&(f.Rb(0,"div",6),f.Gc(1," Oops, there was a problem while trying to load the natures."),f.Nb(2,"br"),f.Gc(3,"Please try again later. "),f.Qb()),2&t&&f.mc("shadow",!0)}function O(t,e){if(1&t&&f.Nb(0,"natures-table",7),2&t){var n=f.ec(2);f.mc("natureData",n.natures)}}function I(t,e){if(1&t&&(f.Pb(0),f.Ec(1,A,4,1,"div",4),f.Ec(2,O,1,1,"ng-template",null,5,f.Fc),f.Ob()),2&t){var n=f.vc(3),r=f.ec();f.zb(1),f.mc("ngIf",r.isError)("ngIfElse",n)}}var S,C,x,R=[{path:"",component:(S=function(){function t(e){n(this,t),this.naturesService=e}return a(t,[{key:"ngOnInit",value:function(){this.natures=new Array,this.loading=!0,this.isError=!1,this.getNatures()}},{key:"ngOnDestroy",value:function(){this.naturesSub.unsubscribe()}},{key:"getNatures",value:function(){var t=this;this.naturesObs$=this.naturesService.getAllNatures(),this.naturesSub=this.naturesObs$.subscribe(function(e){t.natures=e,t.loading=!1,t.isError=!1},function(e){t.loading=!1,t.isError=!0,h.a.error(e)})}}]),t}(),S.\u0275fac=function(t){return new(t||S)(f.Mb(d))},S.\u0275cmp=f.Gb({type:S,selectors:[["natures"]],decls:7,vars:2,consts:[[3,"loading"],["id","natures-container",1,"container","mt-2"],[1,"mt-2"],[4,"ngIf"],["appAlert","","alertType","danger","class","text-center",3,"shadow",4,"ngIf","ngIfElse"],["naturesTable",""],["appAlert","","alertType","danger",1,"text-center",3,"shadow"],[3,"natureData"]],template:function(t,e){1&t&&(f.Pb(0),f.Nb(1,"spinners-gif-spinner",0),f.Rb(2,"div",1),f.Rb(3,"h1",2),f.Gc(4,"Natures"),f.Qb(),f.Nb(5,"hr"),f.Ec(6,I,4,2,"ng-container",3),f.Qb(),f.Ob()),2&t&&(f.zb(1),f.mc("loading",e.loading),f.zb(5),f.mc("ngIf",!e.loading))},directives:[b.a,s.o,g.a,N],styles:["#natures-container[_ngcontent-%COMP%]{overflow-x:auto!important}"]}),S),canActivate:[c.a]}],M=((C=function t(){n(this,t)}).\u0275mod=f.Kb({type:C}),C.\u0275inj=f.Jb({factory:function(t){return new(t||C)},imports:[[o.h.forChild(R)],o.h]}),C),Q=r("WjtB"),E=r("FUS3"),U=((x=function t(){n(this,t)}).\u0275mod=f.Kb({type:x}),x.\u0275inj=f.Jb({factory:function(t){return new(t||x)},providers:[d],imports:[[s.c,M,Q.a,m.b,E.a]]}),x)},WjtB:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var a=r("ofXK"),i=r("iTUp"),s=r("fXoL"),o=function(){var t=function t(){n(this,t)};return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[a.c,i.a]]}),t}()}}])}();