!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FpAq:function(e,r,i){"use strict";i.d(r,"a",(function(){return s}));var o=i("Mb37"),c=i("fXoL"),s=function(){var e=function(){function e(t){n(this,e),this.el=t}return a(e,[{key:"ngOnInit",value:function(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():o.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&o.a.error("addShadow must be a boolean.")}},{key:"getType",value:function(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[].concat(t(this.preClasses),["alert-primary"]);case"secondary":return[].concat(t(this.preClasses),["alert-secondary"]);case"warning":return[].concat(t(this.preClasses),["alert-warning"]);case"success":return[].concat(t(this.preClasses),["alert-success"]);case"danger":return[].concat(t(this.preClasses),["alert-danger"]);case"info":return[].concat(t(this.preClasses),["alert-info"]);case"light":return[].concat(t(this.preClasses),["alert-light"]);case"dark":return[].concat(t(this.preClasses),["alert-dark"]);default:o.a.error("Invalid alert type.")}else o.a.error("Type must be a string.")}},{key:"setType",value:function(){var t=this.getType(),e=this.el.nativeElement.classList;t.forEach((function(t){Array.prototype.slice.call(e).includes(t)&&e.remove(t),e.add(t)})),Array.from(e).includes("null")&&e.remove("null")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Jb(c.l))},e.\u0275dir=c.Eb({type:e,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),e}()},NvMS:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var i=r("Ei5h"),o=r("DvS/"),c=r("Mb37"),s=r("fXoL"),u=r("3+9a"),l=["spinnerImg"],p=function(){var t=function(){function t(){n(this,t)}return a(t,[{key:"ngOnInit",value:function(){this.fallbackUrl=o.a.SPINNER,this.images=i.a}},{key:"ngAfterContentInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&c.a.error("Loading property is required.")}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["spinners-gif-spinner"]],viewQuery:function(t,e){var n;1&t&&s.Jc(l,!0),2&t&&s.tc(n=s.bc())&&(e.spinnerImage=n.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Kb(1,"img",1,2),s.ec(3,"defaultImage"),s.Nb()),2&t&&(s.lc("hidden",!e.loading),s.wb(1),s.lc("src",s.ic(3,2,e.images.SPINNER,e.fallbackUrl,e.spinnerImage,!0),s.yc))},pipes:[u.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}"]}),t}()},UTcu:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var i=r("lGQG"),o=r("fXoL"),c=r("tyNb"),s=function(){var t=function(){function t(e,r){n(this,t),this.authService=e,this.router=r}return a(t,[{key:"canActivate",value:function(t,e){return!this.authService.loggedOut()||(this.router.navigate(["/","login"],{queryParams:{returnUrl:e.url}}),!1)}}]),t}();return t.\u0275fac=function(e){return new(e||t)(o.Wb(i.a),o.Wb(c.d))},t.\u0275prov=o.Fb({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},WjtB:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var a=r("ofXK"),i=r("iTUp"),o=r("fXoL"),c=function(){var t=function t(){n(this,t)};return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[a.c,i.a]]}),t}()},t52u:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var i=r("tk/3"),o=r("AytR"),c=r("fXoL"),s=function(){var t=function(){function t(e){n(this,t),this.http=e}return a(t,[{key:"getAllRoms",value:function(e){var n=new i.g;return e.limit&&(n=n.append("_limit",e.limit.toString())),e.pagination&&(e.pagination.page&&(n=n.append("page",e.pagination.page.toString())),e.pagination.perPage&&(n=n.append("per_page",e.pagination.perPage.toString()))),e.romType&&("core"===e.romType&&(n=n.append("rom_type",JSON.stringify("core"))),"hack"===e.romType&&(n=n.append("rom_type",JSON.stringify("hack")))),e.favorites&&!0===e.favorites&&(n=n.append("favorites",JSON.stringify(e.favorites))),this.http.get(t.romsUrl,{params:n})}},{key:"getRom",value:function(e){return this.http.get("".concat(t.romsUrl,"/").concat(e))}},{key:"addRom",value:function(e){var n=new i.f({"Content-Type":"application/json"});return this.http.post(t.romsUrl,e,{headers:n})}},{key:"updateRom",value:function(e,n){var r=new i.f({"Content-Type":"application/json"});return this.http.put("".concat(t.romsUrl,"/").concat(e),n,{headers:r})}},{key:"patchRom",value:function(e,n){var r=new i.f({"Content-Type":"application/json"});return this.http.patch("".concat(t.romsUrl,"/").concat(e),n,{headers:r})}},{key:"deleteRom",value:function(e){return this.http.delete("$".concat(t.romsUrl,"/").concat(e))}},{key:"deleteAllRoms",value:function(e){var n=new i.g;return e&&(!0===e.core&&(n=n.append("core",JSON.stringify(e.core))),!0===e.hacks&&(n=n.append("hacks",JSON.stringify(e.hacks)))),this.http.delete(t.romsUrl,{params:n})}},{key:"getHeadersAll",value:function(){return this.http.head(t.romsUrl)}},{key:"getHeadersSingle",value:function(e){return this.http.head("".concat(t.romsUrl,"/").concat(e))}},{key:"getOptionsInfo",value:function(){return this.http.options(t.romsUrl)}},{key:"addCoreRoms",value:function(){var e=new i.f({"Content-Type":"application/json"});return this.http.post(t.romsUrl+"/core",{},{headers:e})}},{key:"addRomHacks",value:function(){var e=new i.f({"Content-Type":"application/json"});return this.http.post(t.romsUrl+"/hacks",{},{headers:e})}}]),t}();return t.romsUrl=o.a.apiUrl+"/roms",t.\u0275fac=function(e){return new(e||t)(c.Wb(i.b))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac}),t}()},"twK/":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i}));var r={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},a={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]},i={prefix:"far",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]}}}])}();