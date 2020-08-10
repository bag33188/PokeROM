!function(){function t(t){return function(t){if(Array.isArray(t))return e(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FpAq:function(e,r,i){"use strict";i.d(r,"a",(function(){return c}));var o=i("Mb37"),s=i("fXoL"),c=function(){var e=function(){function e(t){n(this,e),this.el=t}return a(e,[{key:"ngOnInit",value:function(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():o.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&o.a.error("addShadow must be a boolean.")}},{key:"getType",value:function(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[].concat(t(this.preClasses),["alert-primary"]);case"secondary":return[].concat(t(this.preClasses),["alert-secondary"]);case"warning":return[].concat(t(this.preClasses),["alert-warning"]);case"success":return[].concat(t(this.preClasses),["alert-success"]);case"danger":return[].concat(t(this.preClasses),["alert-danger"]);case"info":return[].concat(t(this.preClasses),["alert-info"]);case"light":return[].concat(t(this.preClasses),["alert-light"]);case"dark":return[].concat(t(this.preClasses),["alert-dark"]);default:o.a.error("Invalid alert type.")}else o.a.error("Type must be a string.")}},{key:"setType",value:function(){var t=this.getType(),e=this.el.nativeElement.classList;t.forEach((function(t){Array.prototype.slice.call(e).includes(t)&&e.remove(t),e.add(t)})),Array.from(e).includes("null")&&e.remove("null")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Jb(s.l))},e.\u0275dir=s.Eb({type:e,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),e}()},NvMS:function(t,e,r){"use strict";r.d(e,"a",(function(){return g}));var i=r("Ei5h"),o=r("DvS/"),s=r("Mb37"),c=r("fXoL"),l=r("3+9a"),u=["spinnerImg"],g=function(){var t=function(){function t(){n(this,t)}return a(t,[{key:"ngOnInit",value:function(){this.fallbackUrl=o.a.SPINNER,this.images=i.a}},{key:"ngAfterContentInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&s.a.error("Loading property is required.")}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Db({type:t,selectors:[["spinners-gif-spinner"]],viewQuery:function(t,e){var n;1&t&&c.Jc(u,!0),2&t&&c.tc(n=c.bc())&&(e.spinnerImage=n.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(t,e){1&t&&(c.Ob(0,"div",0),c.Kb(1,"img",1,2),c.ec(3,"defaultImage"),c.Nb()),2&t&&(c.lc("hidden",!e.loading),c.wb(1),c.lc("src",c.ic(3,2,e.images.SPINNER,e.fallbackUrl,e.spinnerImage,!0),c.yc))},pipes:[l.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}"]}),t}()},WjtB:function(t,e,r){"use strict";r.d(e,"a",(function(){return s}));var a=r("ofXK"),i=r("iTUp"),o=r("fXoL"),s=function(){var t=function t(){n(this,t)};return t.\u0275mod=o.Hb({type:t}),t.\u0275inj=o.Gb({factory:function(e){return new(e||t)},imports:[[a.c,i.a]]}),t}()},Wx56:function(t,e,r){"use strict";r.r(e),r.d(e,"RatingsModule",(function(){return E}));var i,o=r("ofXK"),s=r("tyNb"),c=r("Dat7"),l=r("tk/3"),u=r("AytR"),g=r("fXoL"),d=((i=function(){function t(e){n(this,t),this.http=e}return a(t,[{key:"addRating",value:function(e){var n=new l.f({"Content-Type":"application/json"});return this.http.post(t.ratingsUrl,e,{headers:n})}},{key:"getRating",value:function(e){return this.http.get("".concat(t.ratingsUrl,"/").concat(e))}},{key:"getRatings",value:function(e){if(e){var n=new l.g;return n=n.append("_limit",e.toString()),this.http.get(t.ratingsUrl,{params:n})}return this.http.get(t.ratingsUrl)}},{key:"deleteRating",value:function(e){return this.http.delete("".concat(t.ratingsUrl,"/").concat(e))}},{key:"deleteAllRatings",value:function(){return this.http.delete(t.ratingsUrl)}},{key:"ratingHeaders",value:function(e){return this.http.head("".concat(t.ratingsUrl,"/").concat(e))}},{key:"allRatingsHeaders",value:function(){return this.http.head(t.ratingsUrl)}}]),t}()).ratingsUrl=u.a.apiUrl+"/ratings",i.\u0275fac=function(t){return new(t||i)(g.Wb(l.b))},i.\u0275prov=g.Fb({token:i,factory:i.\u0275fac}),i),f=r("Rv5h"),h=r("vuBd"),p=r("Mb37"),b=r("NvMS"),m=r("Ql4B"),v=r("yZ9z"),y=r("1kSV");function w(t,e){if(1&t){var n=g.Pb();g.Ob(0,"div",1),g.Ob(1,"ngb-alert",2),g.ac("close",(function(){g.wc(n);var t=e.$implicit;return g.dc().closeAlert(t)})),g.Fc(2),g.Nb(),g.Nb()}if(2&t){var r=e.$implicit;g.lc("@fadeOut","in"),g.wb(1),g.lc("type",r.type)("dismissible",!0),g.wb(1),g.Gc(r.message)}}var O,C,R=((O=function(){function t(){n(this,t)}return a(t,[{key:"ngOnInit",value:function(){v.a.getState("rating_alert")||v.a.setState("rating_alert",[{message:"Your rating does not store any personal information, browser data, or cookies. Your rating will only show your rating number, optional feedback message, and the date and time it was submitted.",type:"info"}]),this.alerts=v.a.getState("rating_alert")}},{key:"closeAlert",value:function(t){this.alerts.splice(this.alerts.indexOf(t),1),v.a.setState("rating_alert",[])}}]),t}()).\u0275fac=function(t){return new(t||O)},O.\u0275cmp=g.Db({type:O,selectors:[["ratings-privacy-alert"]],decls:2,vars:1,consts:[["id","ratings-alert-container",4,"ngFor","ngForOf"],["id","ratings-alert-container"],[1,"mt-3",3,"type","dismissible","close"]],template:function(t,e){1&t&&(g.Mb(0),g.Dc(1,w,3,4,"div",0),g.Lb()),2&t&&(g.wb(1),g.lc("ngForOf",e.alerts))},directives:[o.n,y.d],styles:["#ratings-alert-container[_ngcontent-%COMP%]{margin:auto;padding:initial;position:static}"],data:{animation:[m.b]}}),O),k=r("3Pt+"),M=r("FpAq"),S=((C=function(){function t(){n(this,t),this.currentRate=new g.n,this.currentRateHover=new g.n}return a(t,[{key:"ngOnInit",value:function(){this.rate=0}},{key:"outputRating",value:function(t){this.currentRate.emit(t)}},{key:"outputRatingHover",value:function(t){this.currentRateHover.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||C)},C.\u0275cmp=g.Db({type:C,selectors:[["ratings-star-rating"]],outputs:{currentRate:"currentRate",currentRateHover:"currentRateHover"},decls:5,vars:1,consts:[["for","rating"],["id","spacing"],["id","rating",3,"rate","rateChange","hover"]],template:function(t,e){1&t&&(g.Mb(0),g.Ob(1,"label",0),g.Fc(2,"Rating:"),g.Nb(),g.Kb(3,"div",1),g.Ob(4,"ngb-rating",2),g.ac("rateChange",(function(t){return e.rate=t}))("rateChange",(function(t){return e.outputRating(t)}))("hover",(function(t){return e.outputRatingHover(t)})),g.Nb(),g.Lb()),2&t&&(g.wb(4),g.lc("rate",e.rate))},directives:[y.p],styles:["#spacing[_ngcontent-%COMP%]{display:inline-block;width:.4rem}@media only screen and (max-width:938px){.ng-star-inserted[_ngcontent-%COMP%]:not(label){font-size:1.5rem}}"]}),C),P=r("siFw");function _(t,e){if(1&t){var n=g.Pb();g.Ob(0,"form",6),g.ac("ngSubmit",(function(){return g.wc(n),g.dc().submitRating()})),g.Ob(1,"div",7),g.Fc(2," Rating must be between 1 and 10. "),g.Nb(),g.Ob(3,"div",8),g.Ob(4,"div",9),g.Ob(5,"ratings-star-rating",10),g.ac("mouseleave",(function(){return g.wc(n),g.dc().resetRating()}))("mousemove",(function(){g.wc(n);var t=g.dc();return t.currentRate=t.currentRateHover}))("click",(function(){return g.wc(n),g.dc().rateHasChanged=!0}))("currentRateHover",(function(t){return g.wc(n),g.dc().setRatingHover(t)}))("currentRate",(function(t){return g.wc(n),g.dc().setRating(t)})),g.Nb(),g.Nb(),g.Fc(6),g.Nb(),g.Ob(7,"div",8),g.Ob(8,"label",11),g.Fc(9,"Feedback"),g.Nb(),g.Ob(10,"textarea",12),g.ac("ngModelChange",(function(t){return g.wc(n),g.dc().message=t})),g.Nb(),g.Ob(11,"div",7),g.Fc(12," Feedback message is to too long. It can only be 1000 characters at max. "),g.Nb(),g.Ob(13,"p",13),g.Fc(14),g.Nb(),g.Nb(),g.Ob(15,"div",14),g.Ob(16,"div"),g.Kb(17,"input",15),g.Nb(),g.Ob(18,"div"),g.Ob(19,"span",16),g.Fc(20,"Please choose a rating."),g.Nb(),g.Nb(),g.Nb(),g.Ob(21,"div",17),g.Fc(22," Oops, there was an error while trying to submit your rating. Please try again later. "),g.Nb(),g.Nb()}if(2&t){var r=g.dc();g.wb(1),g.lc("hidden",r.formValid),g.wb(5),g.Hc(" Current rating: ",r.rateHasChanged?r.currentRate:r.currentRateHover," "),g.wb(4),g.lc("ngModel",r.message),g.wb(1),g.lc("hidden",r.message.length<=1e3),g.wb(3),g.Hc("Current Length: ",r.message.length," (Max: 1000)"),g.wb(1),g.Bb("float-container-box",!r.rateHasChanged),g.wb(2),g.lc("disabled",!r.rateHasChanged||r.message.length>1e3||r.firedOff),g.wb(2),g.lc("hidden",r.rateHasChanged),g.wb(2),g.lc("hidden",!r.isError)}}function N(t,e){1&t&&(g.Mb(0),g.Ob(1,"h3",18),g.Fc(2," Thank you for your feedback!\xa0 "),g.Nb(),g.Lb())}var H,x,F,I=[{path:"",component:(H=function(){function t(e){n(this,t),this.ratingService=e,String.prototype.sanitizeXSS=f.a,String.prototype.removeStringChars=h.a}return a(t,[{key:"ngOnInit",value:function(){this.currentRate=0,this.message="",this.formValid=!0,this.formSubmitted=!1,this.rateHasChanged=!1,this.currentRateHover=0,this.rate=0,this.isError=!1,this.loading=!1,this.firedOff=!1}},{key:"setRating",value:function(t){this.currentRate=t,this.rate=t}},{key:"setRatingHover",value:function(t){this.currentRateHover=t}},{key:"resetRating",value:function(){this.rateHasChanged?this.currentRate=this.rate:this.currentRateHover=0}},{key:"submitRating",value:function(){var t=this;if(this.loading=!0,this.firedOff=!0,0===this.currentRate)this.formValid=!1;else{var e={rating:this.currentRate,message:this.message.sanitizeXSS({replaceSpecialChars:!1,encode:!1}).removeStringChars(),date_time:new Date};this.ratingService.addRating(e).subscribe((function(){t.formValid=!0,t.loading=!1,t.formSubmitted=!0,t.isError=!1}),(function(e){t.loading=!1,t.isError=!0,t.firedOff=!1,p.a.error(e)}))}}}]),t}(),H.\u0275fac=function(t){return new(t||H)(g.Jb(d))},H.\u0275cmp=g.Db({type:H,selectors:[["app-ratings"]],decls:10,vars:3,consts:[[3,"loading"],[1,"container","mt-2"],[1,"mt-3"],[1,"border","p-4","bg-light","rounded"],["name","ratingForm",3,"ngSubmit",4,"ngIf"],[4,"ngIf"],["name","ratingForm",3,"ngSubmit"],["appAlert","","alertType","danger",3,"hidden"],[1,"form-group"],[1,"mb-1"],[3,"mouseleave","mousemove","click","currentRateHover","currentRate"],["for","message"],["name","message","id","message","placeholder","Optional","maxlength","1000",1,"form-control",3,"ngModel","ngModelChange"],[1,"mt-2"],["id","submit-container-float",1,"mr-auto"],["type","submit","value","Submit!","appBtn","","btnType","success",3,"disabled"],["appAlert","","alertType","warning",1,"ml-3",3,"hidden"],["appAlert","","alertType","danger",1,"mt-3","mb-0",3,"hidden"],["id","thx-msg",1,"text-center"]],template:function(t,e){1&t&&(g.Mb(0),g.Kb(1,"spinners-gif-spinner",0),g.Ob(2,"div",1),g.Ob(3,"h1",2),g.Fc(4,"Rate this App"),g.Nb(),g.Kb(5,"hr"),g.Ob(6,"div",3),g.Dc(7,_,23,10,"form",4),g.Dc(8,N,3,0,"ng-container",5),g.Nb(),g.Kb(9,"ratings-privacy-alert"),g.Nb(),g.Lb()),2&t&&(g.wb(1),g.lc("loading",e.loading),g.wb(6),g.lc("ngIf",!e.formSubmitted),g.wb(1),g.lc("ngIf",e.formSubmitted))},directives:[b.a,o.o,R,k.u,k.m,k.n,M.a,S,k.a,k.h,k.l,k.o,P.a],styles:['@charset "UTF-8";#thx-msg[_ngcontent-%COMP%]:after{content:"\ud83d\ude03"}.float-container-box[_ngcontent-%COMP%]{height:38.5px;width:281px}#submit-container-float[_ngcontent-%COMP%]{clear:both}#submit-container-float[_ngcontent-%COMP%]:after{clear:both;content:"";display:table}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{float:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:right}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{display:block;padding:.4rem}@media only screen and (max-width:360px){#submit-container-float[_ngcontent-%COMP%]{clear:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-bottom:1rem}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0!important}.float-container-box[_ngcontent-%COMP%]{height:6em;width:12.5rem}}']}),H),canActivate:[c.a]}],A=((x=function t(){n(this,t)}).\u0275mod=g.Hb({type:x}),x.\u0275inj=g.Gb({factory:function(t){return new(t||x)},imports:[[s.h.forChild(I)],s.h]}),x),T=r("WjtB"),U=r("FUS3"),E=((F=function t(){n(this,t)}).\u0275mod=g.Hb({type:F}),F.\u0275inj=g.Gb({factory:function(t){return new(t||F)},providers:[d],imports:[[o.c,A,y.g,T.a,U.a,k.g]]}),F)}}])}();