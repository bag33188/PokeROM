function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{Qz4V:function(t,e,n){"use strict";n.r(e);var r,a=n("ofXK"),i=n("wHSu"),s=n("Mb37"),c=n("fXoL"),o=n("tk/3"),u=n("AytR"),l=new o.f({"Content-Type":"application/json"}),b=((r=function(){function t(e){_classCallCheck(this,t),this.http=e,this.naturesUrl="".concat(u.a.apiUrl,"/natures")}return _createClass(t,[{key:"getAllNatures",value:function(){return this.http.get(this.naturesUrl)}},{key:"getNature",value:function(t){return this.http.get("".concat(this.naturesUrl,"/").concat(t))}},{key:"addNature",value:function(t){return this.http.post(this.naturesUrl,t,{headers:l})}},{key:"updateNature",value:function(t,e){return this.http.put("".concat(this.naturesUrl,"/").concat(t),e,{headers:l})}},{key:"patchNature",value:function(t,e){return this.http.patch("".concat(this.naturesUrl,"/").concat(t),e,{headers:l})}},{key:"deleteNature",value:function(t){return this.http.delete("".concat(this.naturesUrl,"/").concat(t))}},{key:"deleteAllNatures",value:function(){return this.http.delete(this.naturesUrl)}}]),t}()).\u0275fac=function(t){return new(t||r)(c.Zb(o.b))},r.\u0275prov=c.Hb({token:r,factory:function(t){return r.\u0275fac(t)},providedIn:null}),r),h=n("NvMS"),f=n("6NWb");function d(t,e){if(1&t&&(c.Rb(0,"th"),c.Rb(1,"div",7),c.Mb(2,"fa-icon",8),c.Pb(),c.Rb(3,"span",9),c.Hc(4),c.Pb(),c.Pb()),2&t){var n=e.$implicit,r=e.index,a=c.gc(2);c.xb(2),c.nc("icon",a.icons[r]),c.xb(2),c.Ic(n)}}function p(t,e){if(1&t&&(c.Rb(0,"tr"),c.Rb(1,"td"),c.Hc(2),c.Pb(),c.Rb(3,"td"),c.Hc(4),c.Pb(),c.Rb(5,"td"),c.Hc(6),c.Pb(),c.Rb(7,"td"),c.Hc(8),c.Pb(),c.Rb(9,"td"),c.Hc(10),c.Pb(),c.Pb()),2&t){var n=e.$implicit;c.xb(2),c.Ic(n.name),c.xb(2),c.Ic(n.up),c.xb(2),c.Ic(n.down),c.xb(2),c.Ic(n.flavor||"N/A"),c.xb(2),c.Ic(n.usage)}}function g(t,e){if(1&t&&(c.Rb(0,"table",5),c.Rb(1,"thead"),c.Rb(2,"tr"),c.Fc(3,d,5,2,"th",6),c.Pb(),c.Pb(),c.Rb(4,"tbody"),c.Fc(5,p,11,5,"tr",6),c.Pb(),c.Pb()),2&t){var n=c.gc();c.xb(3),c.nc("ngForOf",n.headers),c.xb(2),c.nc("ngForOf",n.natures)}}var v,y,w=((v=function(){function t(e){_classCallCheck(this,t),this.naturesService=e,this.natures=new Array,this.loading=!0,this.isError=!1}return _createClass(t,[{key:"ngOnInit",value:function(){this.faLeaf=i.k,this.faArrowDown=i.a,this.faArrowUp=i.b,this.faSignLanguage=i.m,this.faHeart=i.h,this.getNatures(),this.setHeaders()}},{key:"ngOnDestroy",value:function(){this.naturesSub.unsubscribe()}},{key:"setHeaders",value:function(){this.headers=["Nature","Increased Stat","Decreased Stat","Flavor","Usage"],this.icons=[this.faLeaf,this.faArrowUp,this.faArrowDown,this.faHeart,this.faSignLanguage]}},{key:"getNatures",value:function(){var t=this;this.naturesObs$=this.naturesService.getAllNatures(),this.naturesSub=this.naturesObs$.subscribe((function(e){t.natures=e,t.loading=!1,t.isError=!1}),(function(e){t.loading=!1,t.isError=!0,s.a.error(e)}))}}]),t}()).\u0275fac=function(t){return new(t||v)(c.Lb(b))},v.\u0275cmp=c.Fb({type:v,selectors:[["natures"]],decls:11,vars:3,consts:[[3,"loading"],["id","natures-container",1,"container","mt-2"],[1,"mt-2"],["appAlert","","alertType","danger",3,"hidden"],["id","natures","class","table table-striped border",4,"ngIf"],["id","natures",1,"table","table-striped","border"],[4,"ngFor","ngForOf"],[1,"header-icon-container"],[3,"icon"],[1,"header-text"]],template:function(t,e){1&t&&(c.Ob(0),c.Mb(1,"spinners-gif-spinner",0),c.Rb(2,"div",1),c.Rb(3,"h1",2),c.Hc(4,"Natures"),c.Pb(),c.Mb(5,"hr"),c.Rb(6,"div",3),c.Hc(7," Oops, there was a problem while trying to load the natures."),c.Mb(8,"br"),c.Hc(9,"Please try again later. "),c.Pb(),c.Fc(10,g,6,2,"table",4),c.Pb(),c.Nb()),2&t&&(c.xb(1),c.nc("loading",e.loading),c.xb(5),c.nc("hidden",!e.isError),c.xb(4),c.nc("ngIf",!e.loading&&!e.isError))},directives:[h.a,a.o,a.n,f.a],styles:["#natures-container[_ngcontent-%COMP%]{overflow-x:auto!important}#natures[_ngcontent-%COMP%]{background-color:#fff}.header-text[_ngcontent-%COMP%]{display:initial}.header-icon-container[_ngcontent-%COMP%]{display:none}@media only screen and (max-width:991px){.header-icon-container[_ngcontent-%COMP%]{display:block;text-align:center}.header-text[_ngcontent-%COMP%]{display:none}}"]}),v),P=n("tyNb"),k=[{path:"",component:w,canActivate:[n("Dat7").a]}],C=((y=function t(){_classCallCheck(this,t)}).\u0275mod=c.Jb({type:y}),y.\u0275inj=c.Ib({factory:function(t){return new(t||y)},imports:[[P.g.forChild(k)],P.g]}),y),x=n("WjtB");n.d(e,"NaturesModule",(function(){return N}));var m,N=((m=function t(){_classCallCheck(this,t)}).\u0275mod=c.Jb({type:m}),m.\u0275inj=c.Ib({factory:function(t){return new(t||m)},providers:[b],imports:[[a.c,C,x.a,f.b]]}),m)}}]);