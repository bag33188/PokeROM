(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{FpAq:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));var n=r("Mb37"),s=r("fXoL");let a=(()=>{class t{constructor(t){this.el=t}ngOnInit(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():n.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&n.a.error("addShadow must be a boolean.")}getType(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[...this.preClasses,"alert-primary"];case"secondary":return[...this.preClasses,"alert-secondary"];case"warning":return[...this.preClasses,"alert-warning"];case"success":return[...this.preClasses,"alert-success"];case"danger":return[...this.preClasses,"alert-danger"];case"info":return[...this.preClasses,"alert-info"];case"light":return[...this.preClasses,"alert-light"];case"dark":return[...this.preClasses,"alert-dark"];default:n.a.error("Invalid alert type.")}else n.a.error("Type must be a string.")}setType(){const t=this.getType(),e=this.el.nativeElement.classList;t.forEach(t=>{Array.prototype.slice.call(e).includes(t)&&e.remove(t),e.add(t)}),Array.from(e).includes("null")&&e.remove("null")}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(s.l))},t.\u0275dir=s.Hb({type:t,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),t})()},NvMS:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r("Ei5h"),s=r("DvS/"),a=r("Mb37"),i=r("fXoL"),o=r("3+9a");const c=["spinnerImg"];let p=(()=>{class t{constructor(){}ngOnInit(){this.fallbackUrl=s.a.SPINNER,this.images=n.a}ngAfterContentInit(){this.checkInput()}checkInput(){null==this.loading&&a.a.error("Loading property is required.")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Gb({type:t,selectors:[["spinners-gif-spinner"]],viewQuery:function(t,e){var r;1&t&&i.Mc(c,!0),2&t&&i.wc(r=i.ec())&&(e.spinnerImage=r.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Nb(1,"img",1,2),i.hc(3,"defaultImage"),i.Qb()),2&t&&(i.oc("hidden",!e.loading),i.zb(1),i.oc("src",i.lc(3,2,e.images.SPINNER,e.fallbackUrl,e.spinnerImage,!0),i.Bc))},pipes:[o.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - 56px - 2rem);margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"]}),t})()},UTcu:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("lGQG"),s=r("fXoL"),a=r("tyNb");let i=(()=>{class t{constructor(t,e){this.authService=t,this.router=e}canActivate(t,e){return!this.authService.loggedOut()||(this.router.navigate(["/","login"],{queryParams:{returnUrl:e.url}}),!1)}}return t.\u0275fac=function(e){return new(e||t)(s.Zb(n.a),s.Zb(a.d))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},WjtB:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("ofXK"),s=r("iTUp"),a=r("fXoL");let i=(()=>{class t{}return t.\u0275mod=a.Kb({type:t}),t.\u0275inj=a.Jb({factory:function(e){return new(e||t)},imports:[[n.c,s.a]]}),t})()},t52u:function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var n=r("tk/3"),s=r("AytR"),a=r("fXoL");let i=(()=>{class t{constructor(t){this.http=t}getAllRoms(e){let r=new n.g;return e.limit&&(r=r.append("_limit",e.limit.toString())),e.pagination&&(e.pagination.page&&(r=r.append("page",e.pagination.page.toString())),e.pagination.perPage&&(r=r.append("per_page",e.pagination.perPage.toString()))),e.types&&(!0===e.types.core&&(r=r.append("core",JSON.stringify(e.types.core))),!0===e.types.hacks&&(r=r.append("hacks",JSON.stringify(e.types.hacks)))),e.favorites&&!0===e.favorites&&(r=r.append("favorites",JSON.stringify(e.favorites))),this.http.get(t.romsUrl,{params:r})}getRom(e){return this.http.get(`${t.romsUrl}/${e}`)}addRom(e){const r=new n.f({"Content-Type":"application/json"});return this.http.post(t.romsUrl,e,{headers:r})}updateRom(e,r){const s=new n.f({"Content-Type":"application/json"});return this.http.put(`${t.romsUrl}/${e}`,r,{headers:s})}patchRom(e,r){const s=new n.f({"Content-Type":"application/json"});return this.http.patch(`${t.romsUrl}/${e}`,r,{headers:s})}deleteRom(e){return this.http.delete(`$${t.romsUrl}/${e}`)}deleteAllRoms(e){let r=new n.g;return e&&(!0===e.core&&(r=r.append("core",JSON.stringify(e.core))),!0===e.hacks&&(r=r.append("hacks",JSON.stringify(e.hacks)))),this.http.delete(t.romsUrl,{params:r})}getHeadersAll(){return this.http.head(t.romsUrl)}getHeadersSingle(e){return this.http.head(`${t.romsUrl}/${e}`)}getOptionsInfo(){return this.http.options(t.romsUrl)}addCoreRoms(){const e=new n.f({"Content-Type":"application/json"});return this.http.post(`${t.romsUrl}/core`,{},{headers:e})}addRomHacks(){const e=new n.f({"Content-Type":"application/json"});return this.http.post(`${t.romsUrl}/hacks`,{},{headers:e})}}return t.romsUrl=`${s.a.apiUrl}/roms`,t.\u0275fac=function(e){return new(e||t)(a.Zb(n.b))},t.\u0275prov=a.Ib({token:t,factory:t.\u0275fac}),t})()},"twK/":function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return s})),r.d(e,"c",(function(){return a}));var n={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},s={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]},a={prefix:"far",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]}}}]);