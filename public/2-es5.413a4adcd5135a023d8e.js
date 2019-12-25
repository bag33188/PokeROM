function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{NvMS:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("Ei5h"),i=n("DvS/"),o=n("Mb37"),a=n("fXoL"),s=n("3+9a"),c=["spinnerImg"],p=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.fallbackUrl=i.a.SPINNER,this.images=r.a}},{key:"ngAfterContentInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&o.a.error("Loading property is required.")}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Fb({type:e,selectors:[["spinners-gif-spinner"]],viewQuery:function(e,t){var n;1&e&&a.Nc(c,!0),2&e&&a.wc(n=a.ec())&&(t.spinnerImage=n.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(e,t){1&e&&(a.Rb(0,"div",0),a.Mb(1,"img",1,2),a.hc(3,"defaultImage"),a.Pb()),2&e&&(a.oc("hidden",!t.loading),a.xb(1),a.oc("src",a.lc(3,2,t.images.SPINNER,t.fallbackUrl,t.spinnerImage,!0),a.Bc))},pipes:[s.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]}),e}()},UTcu:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("fXoL"),i=n("lGQG"),o=n("tyNb"),a=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.authService=t,this.router=n}return _createClass(e,[{key:"canActivate",value:function(e,t){return!this.authService.loggedOut()||(this.router.navigate(["/","login"],{queryParams:{returnUrl:t.url}}),!1)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(r.Zb(i.a),r.Zb(o.d))},e.\u0275prov=r.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()},WjtB:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n("NvMS"),n("beNV");var r=n("ofXK"),i=n("iTUp"),o=n("fXoL"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=o.Jb({type:e}),e.\u0275inj=o.Ib({factory:function(t){return new(t||e)},imports:[[r.c,i.a]]}),e}()},beNV:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("Mb37"),i=n("fXoL"),o=n("ofXK"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){var e;!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses=(_defineProperty(e={},this.type,!0),_defineProperty(e,this.color,!0),_defineProperty(e,"spacing",null!=this.spaced&&!0===this.spaced),e))}},{key:"setType",value:function(){this.type=this.getType()}},{key:"setColor",value:function(){this.color=this.getColor()}},{key:"getType",value:function(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:r.a.error("Invalid type.")}else r.a.error("Type must be a string.")}},{key:"getColor",value:function(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:r.a.error("Invalid color.")}else r.a.error("Color must be a string.")}},{key:"checkForErrors",value:function(){return this.spinnerType?this.spinnerColor?null==this.loading?(r.a.error("Loading property is required."),!0):null!=this.spaced&&"boolean"!=typeof this.spaced?(r.a.error("Spaced property must be a boolean."),!0):!(!this.customSize||"number"==typeof this.customSize||(r.a.error("Custom size property must be a number data-type."),0)):(r.a.error("Color is required."),!0):(r.a.error("Type is required."),!0)}}]),e}();return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Fb({type:e,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:4,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(e,t){1&e&&(i.Rb(0,"div",0),i.Rb(1,"span",1),i.Jc(2,"Loading..."),i.Pb(),i.Pb()),2&e&&(i.Gc("height",t.customSize?t.customSize:32,"px")("width",t.customSize?t.customSize:32,"px"),i.oc("ngClass",t.ngClasses)("hidden",!t.loading))},directives:[o.m],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),e}()},t52u:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n("tk/3"),i=n("AytR"),o=n("fXoL"),a=function(){var e=function(){function e(t){_classCallCheck(this,e),this.http=t}return _createClass(e,[{key:"getAllRoms",value:function(t){var n=new r.g;return t.limit&&(n=n.append("_limit",t.limit.toString())),t.pagination&&(t.pagination.page&&(n=n.append("page",t.pagination.page.toString())),t.pagination.perPage&&(n=n.append("per_page",t.pagination.perPage.toString()))),t.types&&(!0===t.types.core&&(n=n.append("core",JSON.stringify(t.types.core))),!0===t.types.hacks&&(n=n.append("hacks",JSON.stringify(t.types.hacks)))),t.favorites&&!0===t.favorites&&(n=n.append("favorites",JSON.stringify(t.favorites))),this.http.get(e.romsUrl,{params:n})}},{key:"getRom",value:function(t){return this.http.get("".concat(e.romsUrl,"/").concat(t))}},{key:"addRom",value:function(t){var n=new r.f({"Content-Type":"application/json"});return this.http.post(e.romsUrl,t,{headers:n})}},{key:"updateRom",value:function(t,n){var i=new r.f({"Content-Type":"application/json"});return this.http.put("".concat(e.romsUrl,"/").concat(t),n,{headers:i})}},{key:"patchRom",value:function(t,n){var i=new r.f({"Content-Type":"application/json"});return this.http.patch("".concat(e.romsUrl,"/").concat(t),n,{headers:i})}},{key:"deleteRom",value:function(t){return this.http.delete("$".concat(e.romsUrl,"/").concat(t))}},{key:"deleteAllRoms",value:function(t){var n=new r.g;return t&&(!0===t.core&&(n=n.append("core",JSON.stringify(t.core))),!0===t.hacks&&(n=n.append("hacks",JSON.stringify(t.hacks)))),this.http.delete(e.romsUrl,{params:n})}},{key:"getHeadersAll",value:function(){return this.http.head(e.romsUrl)}},{key:"getHeadersSingle",value:function(t){return this.http.head("".concat(e.romsUrl,"/").concat(t))}},{key:"getOptionsInfo",value:function(){return this.http.options(e.romsUrl)}},{key:"addCoreRoms",value:function(){var t=new r.f({"Content-Type":"application/json"});return this.http.post("".concat(e.romsUrl,"/core"),{},{headers:t})}},{key:"addRomHacks",value:function(){var t=new r.f({"Content-Type":"application/json"});return this.http.post("".concat(e.romsUrl,"/hacks"),{},{headers:t})}}]),e}();return e.romsUrl="".concat(i.a.apiUrl,"/roms"),e.\u0275fac=function(t){return new(t||e)(o.Zb(r.b))},e.\u0275prov=o.Hb({token:e,factory:e.\u0275fac}),e}()},"twK/":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));var r={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},i={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]},o={prefix:"far",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]}}}]);