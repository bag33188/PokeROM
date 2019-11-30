function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{NvMS:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("Ei5h"),i=n("Mb37"),o=n("fXoL"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.images=r.a}},{key:"ngAfterContentInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&i.a.error("Loading property is required.")}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Fb({type:e,selectors:[["spinners-gif-spinner"]],inputs:{loading:"loading"},decls:2,vars:2,consts:[[1,"spinner-container",3,"hidden"],["alt","spinner",1,"spinner",3,"src"]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Mb(1,"img",1),o.Pb()),2&e&&(o.nc("hidden",!t.loading),o.xb(1),o.nc("src",t.images.SPINNER,o.zc))},styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]}),e}()},UTcu:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("fXoL"),i=n("lGQG"),o=n("tyNb"),a=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.authService=t,this.router=n}return _createClass(e,[{key:"canActivate",value:function(e,t){return!this.authService.loggedOut()||(this.router.navigate(["/","login"],{queryParams:{returnUrl:t.url}}),!1)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Zb(i.a),r.Zb(o.c))},e.\u0275prov=r.Hb({token:e,factory:function(t){return e.\u0275fac(t)},providedIn:"root"}),e}()},WjtB:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n("NvMS"),n("beNV");var r=n("ofXK"),i=n("fXoL"),o=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Jb({type:e}),e.\u0275inj=i.Ib({factory:function(t){return new(t||e)},imports:[[r.b]]}),e}()},beNV:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("Mb37"),i=n("fXoL"),o=n("ofXK"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){var e;!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses=(_defineProperty(e={},this.type,!0),_defineProperty(e,this.color,!0),_defineProperty(e,"spacing",null!=this.spaced&&!0===this.spaced),e))}},{key:"setType",value:function(){this.type=this.getType()}},{key:"setColor",value:function(){this.color=this.getColor()}},{key:"getType",value:function(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:r.a.error("Invalid type.")}else r.a.error("Type must be a string.")}},{key:"getColor",value:function(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:r.a.error("Invalid color.")}else r.a.error("Color must be a string.")}},{key:"checkForErrors",value:function(){return this.spinnerType||r.a.error("Type is required."),this.spinnerColor||r.a.error("Color is required."),null==this.loading&&r.a.error("Loading property is required."),null!=this.spaced&&"boolean"!=typeof this.spaced&&r.a.error("Spaced property must be a boolean."),this.customSize&&"number"!=typeof this.customSize&&r.a.error("Custom size property must be a number data-type."),!1}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:4,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"span",1),i.Hc(2,"Loading..."),i.Pb(),i.Pb()),2&e&&(i.Ec("height",t.customSize?t.customSize:32,"px"),i.Ec("width",t.customSize?t.customSize:32,"px"),i.nc("ngClass",t.ngClasses)("hidden",!t.loading))},directives:[o.l],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),e}()},hdQ0:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("fXoL"),i=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"convertRomSize",value:function(e){return e>1024&&e<1e6?[parseFloat((e/1e3).toFixed(2)),"MB"]:e>=1e6?[parseFloat((e/1e6).toFixed(2)),"GB"]:[e,"KB"]}},{key:"convertSecondsToMilliseconds",value:function(e){return 1e3*e}},{key:"convertIntegerToRomanNumeral",value:function(e){if(isNaN(e))return NaN;for(var t=String(+e).split(""),n=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],r="",i=3;i--;)r=(n[parseInt(t.pop(),10)+10*i]||"")+r;return Array(+t.join("")+1).join("M")+r}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.Hb({token:e,factory:function(t){return e.\u0275fac(t)},providedIn:null}),e}()},t52u:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("tk/3"),i=n("AytR"),o=n("fXoL"),a=function(){var e=function(){function e(t){_classCallCheck(this,e),this.http=t,this.romsUrl="".concat(i.a.apiUrl,"/roms")}return _createClass(e,[{key:"getAllRoms",value:function(e){var t=new r.g;return e.limit&&(t=t.append("_limit",e.limit.toString())),e.pagination&&(e.pagination.page&&(t=t.append("page",e.pagination.page.toString())),e.pagination.perPage&&(t=t.append("per_page",e.pagination.perPage.toString()))),e.types&&(!0===e.types.core&&(t=t.append("core",JSON.stringify(e.types.core))),!0===e.types.hacks&&(t=t.append("hacks",JSON.stringify(e.types.hacks)))),this.http.get(this.romsUrl,{params:t})}},{key:"getRom",value:function(e){return this.http.get("".concat(this.romsUrl,"/").concat(e))}},{key:"addRom",value:function(e){var t=new r.f({"Content-Type":"application/json"});return this.http.post(this.romsUrl,e,{headers:t})}},{key:"updateRom",value:function(e,t){var n=new r.f({"Content-Type":"application/json"});return this.http.put("".concat(this.romsUrl,"/").concat(e),t,{headers:n})}},{key:"patchRom",value:function(e,t){var n=new r.f({"Content-Type":"application/json"});return this.http.patch("".concat(this.romsUrl,"/").concat(e),t,{headers:n})}},{key:"deleteRom",value:function(e){return this.http.delete("$".concat(this.romsUrl,"/").concat(e))}},{key:"deleteAllRoms",value:function(e){var t=new r.g;return e&&(!0===e.core&&(t=t.append("core",JSON.stringify(e.core))),!0===e.hacks&&(t=t.append("hacks",JSON.stringify(e.hacks)))),this.http.delete(this.romsUrl,{params:t})}},{key:"getHeadersAll",value:function(){return this.http.head(this.romsUrl)}},{key:"getHeadersSingle",value:function(e){return this.http.head("".concat(this.romsUrl,"/").concat(e))}},{key:"getOptionsInfo",value:function(){return this.http.options(this.romsUrl)}},{key:"addCoreRoms",value:function(){var e=new r.f({"Content-Type":"application/json"});return this.http.post("".concat(this.romsUrl,"/core"),{},{headers:e})}},{key:"addRomHacks",value:function(){var e=new r.f({"Content-Type":"application/json"});return this.http.post("".concat(this.romsUrl,"/hacks"),{},{headers:e})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Zb(r.b))},e.\u0275prov=o.Hb({token:e,factory:function(t){return e.\u0275fac(t)},providedIn:null}),e}()}}]);