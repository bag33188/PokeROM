(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{NvMS:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));var n=r("Ei5h"),s=r("DvS/"),i=r("Mb37"),o=r("8Y7J"),a=r("3+9a");const p=["spinnerImg"];let c=(()=>{class t{constructor(){}ngOnInit(){this.fallbackUrl=s.a.SPINNER,this.images=n.a}ngAfterContentInit(){this.checkInput()}checkInput(){null==this.loading&&i.a.error("Loading property is required.")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Fb({type:t,selectors:[["spinners-gif-spinner"]],viewQuery:function(t,e){var r;1&t&&o.Nc(p,!0),2&t&&o.wc(r=o.ec())&&(e.spinnerImage=r.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(t,e){1&t&&(o.Rb(0,"div",0),o.Mb(1,"img",1,2),o.hc(3,"defaultImage"),o.Pb()),2&t&&(o.oc("hidden",!e.loading),o.xb(1),o.oc("src",o.lc(3,2,e.images.SPINNER,e.fallbackUrl,e.spinnerImage,!0),o.Bc))},pipes:[a.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{to{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}"]}),t})()},UTcu:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("8Y7J"),s=r("lGQG"),i=r("iInd");let o=(()=>{class t{constructor(t,e){this.authService=t,this.router=e}canActivate(t,e){return!this.authService.loggedOut()||(this.router.navigate(["/","login"],{queryParams:{returnUrl:e.url}}),!1)}}return t.\u0275fac=function(e){return new(e||t)(n.Zb(s.a),n.Zb(i.d))},t.\u0275prov=n.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},WjtB:function(t,e,r){"use strict";r.d(e,"a",(function(){return o})),r("NvMS"),r("beNV");var n=r("SVse"),s=r("iTUp"),i=r("8Y7J");let o=(()=>{class t{}return t.\u0275mod=i.Jb({type:t}),t.\u0275inj=i.Ib({factory:function(e){return new(e||t)},imports:[[n.c,s.a]]}),t})()},beNV:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("Mb37"),s=r("8Y7J"),i=r("SVse");let o=(()=>{class t{constructor(){}ngOnInit(){!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses={[this.type]:!0,[this.color]:!0,spacing:null!=this.spaced&&!0===this.spaced})}setType(){this.type=this.getType()}setColor(){this.color=this.getColor()}getType(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:n.a.error("Invalid type.")}else n.a.error("Type must be a string.")}getColor(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:n.a.error("Invalid color.")}else n.a.error("Color must be a string.")}checkForErrors(){return this.spinnerType?this.spinnerColor?null==this.loading?(n.a.error("Loading property is required."),!0):null!=this.spaced&&"boolean"!=typeof this.spaced?(n.a.error("Spaced property must be a boolean."),!0):!(!this.customSize||"number"==typeof this.customSize||(n.a.error("Custom size property must be a number data-type."),0)):(n.a.error("Color is required."),!0):(n.a.error("Type is required."),!0)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Fb({type:t,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:4,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(t,e){1&t&&(s.Rb(0,"div",0),s.Rb(1,"span",1),s.Jc(2,"Loading..."),s.Pb(),s.Pb()),2&t&&(s.Gc("height",e.customSize?e.customSize:32,"px"),s.Gc("width",e.customSize?e.customSize:32,"px"),s.oc("ngClass",e.ngClasses)("hidden",!e.loading))},directives:[i.m],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),t})()},hdQ0:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var n=r("8Y7J");let s=(()=>{class t{constructor(){}static convertRomSize(t){return t>1024&&t<1e6?[parseFloat((t/1e3).toFixed(2)),"MB"]:t>=1e6?[parseFloat((t/1e6).toFixed(2)),"GB"]:[t,"KB"]}static convertSecondsToMilliseconds(t){return 1e3*t}static convertIntegerToRomanNumeral(t){if(isNaN(t))return NaN;{const e=String(+t).split(""),r=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];let n="",s=3;for(;s--;)n=(r[parseInt(e.pop(),10)+10*s]||"")+n;return Array(+e.join("")+1).join("M")+n}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=n.Hb({token:t,factory:t.\u0275fac}),t})()},t52u:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("IheW"),s=r("AytR"),i=r("8Y7J");let o=(()=>{class t{constructor(t){this.http=t}getAllRoms(e){let r=new n.g;return e.limit&&(r=r.append("_limit",e.limit.toString())),e.pagination&&(e.pagination.page&&(r=r.append("page",e.pagination.page.toString())),e.pagination.perPage&&(r=r.append("per_page",e.pagination.perPage.toString()))),e.types&&(!0===e.types.core&&(r=r.append("core",JSON.stringify(e.types.core))),!0===e.types.hacks&&(r=r.append("hacks",JSON.stringify(e.types.hacks)))),e.favorites&&!0===e.favorites&&(r=r.append("favorites",JSON.stringify(e.favorites))),this.http.get(t.romsUrl,{params:r})}getRom(e){return this.http.get(`${t.romsUrl}/${e}`)}addRom(e){const r=new n.f({"Content-Type":"application/json"});return this.http.post(t.romsUrl,e,{headers:r})}updateRom(e,r){const s=new n.f({"Content-Type":"application/json"});return this.http.put(`${t.romsUrl}/${e}`,r,{headers:s})}patchRom(e,r){const s=new n.f({"Content-Type":"application/json"});return this.http.patch(`${t.romsUrl}/${e}`,r,{headers:s})}deleteRom(e){return this.http.delete(`$${t.romsUrl}/${e}`)}deleteAllRoms(e){let r=new n.g;return e&&(!0===e.core&&(r=r.append("core",JSON.stringify(e.core))),!0===e.hacks&&(r=r.append("hacks",JSON.stringify(e.hacks)))),this.http.delete(t.romsUrl,{params:r})}getHeadersAll(){return this.http.head(t.romsUrl)}getHeadersSingle(e){return this.http.head(`${t.romsUrl}/${e}`)}getOptionsInfo(){return this.http.options(t.romsUrl)}addCoreRoms(){const e=new n.f({"Content-Type":"application/json"});return this.http.post(`${t.romsUrl}/core`,{},{headers:e})}addRomHacks(){const e=new n.f({"Content-Type":"application/json"});return this.http.post(`${t.romsUrl}/hacks`,{},{headers:e})}}return t.romsUrl=`${s.a.apiUrl}/roms`,t.\u0275fac=function(e){return new(e||t)(i.Zb(n.b))},t.\u0275prov=i.Hb({token:t,factory:t.\u0275fac}),t})()}}]);