(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{NvMS:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("Ei5h"),s=r("Mb37"),i=r("fXoL");let o=(()=>{class t{constructor(){}ngOnInit(){this.images=n.a}ngAfterContentInit(){this.checkInput()}checkInput(){null==this.loading&&s.a.error("Loading property is required.")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=i.Fb({type:t,selectors:[["spinners-gif-spinner"]],inputs:{loading:"loading"},decls:2,vars:2,consts:[[1,"spinner-container",3,"hidden"],["alt","spinner",1,"spinner",3,"src"]],template:function(t,e){1&t&&(i.Rb(0,"div",0),i.Mb(1,"img",1),i.Pb()),2&t&&(i.nc("hidden",!e.loading),i.xb(1),i.nc("src",e.images.SPINNER,i.zc))},styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]}),t})()},UTcu:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("fXoL"),s=r("lGQG"),i=r("tyNb");let o=(()=>{class t{constructor(t,e){this.authService=t,this.router=e}canActivate(t,e){return!this.authService.loggedOut()||(this.router.navigate(["/","login"],{queryParams:{returnUrl:e.url}}),!1)}}return t.\u0275fac=function(e){return new(e||t)(n.Zb(s.a),n.Zb(i.c))},t.\u0275prov=n.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:"root"}),t})()},WjtB:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r("NvMS"),r("beNV");var n=r("ofXK"),s=r("fXoL");let i=(()=>{class t{}return t.\u0275mod=s.Jb({type:t}),t.\u0275inj=s.Ib({factory:function(e){return new(e||t)},imports:[[n.c]]}),t})()},beNV:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("Mb37"),s=r("fXoL"),i=r("ofXK");let o=(()=>{class t{constructor(){}ngOnInit(){!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses={[this.type]:!0,[this.color]:!0,spacing:null!=this.spaced&&!0===this.spaced})}setType(){this.type=this.getType()}setColor(){this.color=this.getColor()}getType(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:n.a.error("Invalid type.")}else n.a.error("Type must be a string.")}getColor(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:n.a.error("Invalid color.")}else n.a.error("Color must be a string.")}checkForErrors(){return this.spinnerType?this.spinnerColor?null==this.loading?(n.a.error("Loading property is required."),!0):null!=this.spaced&&"boolean"!=typeof this.spaced?(n.a.error("Spaced property must be a boolean."),!0):!(!this.customSize||"number"==typeof this.customSize||(n.a.error("Custom size property must be a number data-type."),0)):(n.a.error("Color is required."),!0):(n.a.error("Type is required."),!0)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:4,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(t,e){1&t&&(s.Rb(0,"div",0),s.Rb(1,"span",1),s.Hc(2,"Loading..."),s.Pb(),s.Pb()),2&t&&(s.Ec("height",e.customSize?e.customSize:32,"px"),s.Ec("width",e.customSize?e.customSize:32,"px"),s.nc("ngClass",e.ngClasses)("hidden",!e.loading))},directives:[i.m],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),t})()},hdQ0:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("fXoL");let s=(()=>{class t{constructor(){}static convertRomSize(t){return t>1024&&t<1e6?[parseFloat((t/1e3).toFixed(2)),"MB"]:t>=1e6?[parseFloat((t/1e6).toFixed(2)),"GB"]:[t,"KB"]}static convertSecondsToMilliseconds(t){return 1e3*t}static convertIntegerToRomanNumeral(t){if(isNaN(t))return NaN;{const e=String(+t).split(""),r=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];let n="",s=3;for(;s--;)n=(r[parseInt(e.pop(),10)+10*s]||"")+n;return Array(+e.join("")+1).join("M")+n}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})()},t52u:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("tk/3"),s=r("AytR"),i=r("fXoL");let o=(()=>{class t{constructor(t){this.http=t,this.romsUrl=`${s.a.apiUrl}/roms`}getAllRoms(t){let e=new n.g;return t.limit&&(e=e.append("_limit",t.limit.toString())),t.pagination&&(t.pagination.page&&(e=e.append("page",t.pagination.page.toString())),t.pagination.perPage&&(e=e.append("per_page",t.pagination.perPage.toString()))),t.types&&(!0===t.types.core&&(e=e.append("core",JSON.stringify(t.types.core))),!0===t.types.hacks&&(e=e.append("hacks",JSON.stringify(t.types.hacks)))),this.http.get(this.romsUrl,{params:e})}getRom(t){return this.http.get(`${this.romsUrl}/${t}`)}addRom(t){const e=new n.f({"Content-Type":"application/json"});return this.http.post(this.romsUrl,t,{headers:e})}updateRom(t,e){const r=new n.f({"Content-Type":"application/json"});return this.http.put(`${this.romsUrl}/${t}`,e,{headers:r})}patchRom(t,e){const r=new n.f({"Content-Type":"application/json"});return this.http.patch(`${this.romsUrl}/${t}`,e,{headers:r})}deleteRom(t){return this.http.delete(`$${this.romsUrl}/${t}`)}deleteAllRoms(t){let e=new n.g;return t&&(!0===t.core&&(e=e.append("core",JSON.stringify(t.core))),!0===t.hacks&&(e=e.append("hacks",JSON.stringify(t.hacks)))),this.http.delete(this.romsUrl,{params:e})}getHeadersAll(){return this.http.head(this.romsUrl)}getHeadersSingle(t){return this.http.head(`${this.romsUrl}/${t}`)}getOptionsInfo(){return this.http.options(this.romsUrl)}addCoreRoms(){const t=new n.f({"Content-Type":"application/json"});return this.http.post(`${this.romsUrl}/core`,{},{headers:t})}addRomHacks(){const t=new n.f({"Content-Type":"application/json"});return this.http.post(`${this.romsUrl}/hacks`,{},{headers:t})}}return t.\u0275fac=function(e){return new(e||t)(i.Zb(n.b))},t.\u0275prov=i.Hb({token:t,factory:function(e){return t.\u0275fac(e)},providedIn:null}),t})()}}]);