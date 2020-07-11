function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(t,e){if(t){if("string"==typeof t)return _arrayLikeToArray(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(t,e):void 0}}function _iterableToArray(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FpAq:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("Mb37"),a=n("fXoL"),i=function(){var t=function(){function t(e){_classCallCheck(this,t),this.el=e}return _createClass(t,[{key:"ngOnInit",value:function(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():r.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&r.a.error("addShadow must be a boolean.")}},{key:"getType",value:function(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[].concat(_toConsumableArray(this.preClasses),["alert-primary"]);case"secondary":return[].concat(_toConsumableArray(this.preClasses),["alert-secondary"]);case"warning":return[].concat(_toConsumableArray(this.preClasses),["alert-warning"]);case"success":return[].concat(_toConsumableArray(this.preClasses),["alert-success"]);case"danger":return[].concat(_toConsumableArray(this.preClasses),["alert-danger"]);case"info":return[].concat(_toConsumableArray(this.preClasses),["alert-info"]);case"light":return[].concat(_toConsumableArray(this.preClasses),["alert-light"]);case"dark":return[].concat(_toConsumableArray(this.preClasses),["alert-dark"]);default:r.a.error("Invalid alert type.")}else r.a.error("Type must be a string.")}},{key:"setType",value:function(){var t=this.getType(),e=this.el.nativeElement.classList;t.forEach((function(t){Array.prototype.slice.call(e).includes(t)&&e.remove(t),e.add(t)})),Array.from(e).includes("null")&&e.remove("null")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(a.Jb(a.l))},t.\u0275dir=a.Eb({type:t,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),t}()},NvMS:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("Ei5h"),a=n("DvS/"),i=n("Mb37"),o=n("fXoL"),s=n("3+9a"),c=["spinnerImg"],l=function(){var t=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){this.fallbackUrl=a.a.SPINNER,this.images=r.a}},{key:"ngAfterContentInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&i.a.error("Loading property is required.")}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Db({type:t,selectors:[["spinners-gif-spinner"]],viewQuery:function(t,e){var n;1&t&&o.Jc(c,!0),2&t&&o.tc(n=o.bc())&&(e.spinnerImage=n.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(t,e){1&t&&(o.Ob(0,"div",0),o.Kb(1,"img",1,2),o.ec(3,"defaultImage"),o.Nb()),2&t&&(o.lc("hidden",!e.loading),o.wb(1),o.lc("src",o.ic(3,2,e.images.SPINNER,e.fallbackUrl,e.spinnerImage,!0),o.yc))},pipes:[s.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}"]}),t}()},WjtB:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n("ofXK"),a=n("iTUp"),i=n("fXoL"),o=function(){var t=function t(){_classCallCheck(this,t)};return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[r.c,a.a]]}),t}()},Wx56:function(t,e,n){"use strict";n.r(e),n.d(e,"RatingsModule",(function(){return F}));var r,a=n("ofXK"),i=n("tyNb"),o=n("Dat7"),s=n("tk/3"),c=n("AytR"),l=n("fXoL"),u=((r=function(){function t(e){_classCallCheck(this,t),this.http=e}return _createClass(t,[{key:"addRating",value:function(e){var n=new s.f({"Content-Type":"application/json"});return this.http.post(t.ratingsUrl,e,{headers:n})}},{key:"getRating",value:function(e){return this.http.get("".concat(t.ratingsUrl,"/").concat(e))}},{key:"getRatings",value:function(e){if(e){var n=new s.g;return n=n.append("_limit",e.toString()),this.http.get(t.ratingsUrl,{params:n})}return this.http.get(t.ratingsUrl)}},{key:"deleteRating",value:function(e){return this.http.delete("".concat(t.ratingsUrl,"/").concat(e))}},{key:"deleteAllRatings",value:function(){return this.http.delete(t.ratingsUrl)}},{key:"ratingHeaders",value:function(e){return this.http.head("".concat(t.ratingsUrl,"/").concat(e))}},{key:"allRatingsHeaders",value:function(){return this.http.head(t.ratingsUrl)}}]),t}()).ratingsUrl=c.a.apiUrl+"/ratings",r.\u0275fac=function(t){return new(t||r)(l.Wb(s.b))},r.\u0275prov=l.Fb({token:r,factory:r.\u0275fac}),r),d=n("Rv5h"),g=n("vuBd"),f=n("Mb37"),h=n("NvMS"),b=n("Ql4B"),p=n("yZ9z"),m=n("1kSV");function y(t,e){if(1&t){var n=l.Pb();l.Ob(0,"div",1),l.Ob(1,"ngb-alert",2),l.ac("close",(function(){l.wc(n);var t=e.$implicit;return l.dc().closeAlert(t)})),l.Fc(2),l.Nb(),l.Nb()}if(2&t){var r=e.$implicit;l.lc("@fadeOut","in"),l.wb(1),l.lc("type",r.type)("dismissible",!0),l.wb(1),l.Gc(r.message)}}var v,C,w=((v=function(){function t(){_classCallCheck(this,t)}return _createClass(t,[{key:"ngOnInit",value:function(){p.a.getState("rating_alert")||p.a.setState("rating_alert",[{message:"Your rating does not store any personal information, browser data, or cookies. Your rating will only show your rating number, optional feedback message, and the date and time it was submitted.",type:"info"}]),this.alerts=p.a.getState("rating_alert")}},{key:"closeAlert",value:function(t){this.alerts.splice(this.alerts.indexOf(t),1),p.a.setState("rating_alert",[])}}]),t}()).\u0275fac=function(t){return new(t||v)},v.\u0275cmp=l.Db({type:v,selectors:[["ratings-privacy-alert"]],decls:2,vars:1,consts:[["id","ratings-alert-container",4,"ngFor","ngForOf"],["id","ratings-alert-container"],[1,"mt-3",3,"type","dismissible","close"]],template:function(t,e){1&t&&(l.Mb(0),l.Dc(1,y,3,4,"div",0),l.Lb()),2&t&&(l.wb(1),l.lc("ngForOf",e.alerts))},directives:[a.n,m.d],styles:["#ratings-alert-container[_ngcontent-%COMP%]{margin:auto;padding:initial;position:static}"],data:{animation:[b.b]}}),v),_=n("3Pt+"),O=n("FpAq"),k=((C=function(){function t(){_classCallCheck(this,t),this.currentRate=new l.n,this.currentRateHover=new l.n}return _createClass(t,[{key:"ngOnInit",value:function(){this.rate=0}},{key:"outputRating",value:function(t){this.currentRate.emit(t)}},{key:"outputRatingHover",value:function(t){this.currentRateHover.emit(t)}}]),t}()).\u0275fac=function(t){return new(t||C)},C.\u0275cmp=l.Db({type:C,selectors:[["ratings-star-rating"]],outputs:{currentRate:"currentRate",currentRateHover:"currentRateHover"},decls:5,vars:1,consts:[["for","rating"],["id","spacing"],["id","rating",3,"rate","rateChange","hover"]],template:function(t,e){1&t&&(l.Mb(0),l.Ob(1,"label",0),l.Fc(2,"Rating:"),l.Nb(),l.Kb(3,"div",1),l.Ob(4,"ngb-rating",2),l.ac("rateChange",(function(t){return e.rate=t}))("rateChange",(function(t){return e.outputRating(t)}))("hover",(function(t){return e.outputRatingHover(t)})),l.Nb(),l.Lb()),2&t&&(l.wb(4),l.lc("rate",e.rate))},directives:[m.p],styles:["#spacing[_ngcontent-%COMP%]{display:inline-block;width:.4rem}@media only screen and (max-width:938px){.ng-star-inserted[_ngcontent-%COMP%]:not(label){font-size:1.5rem}}"]}),C),R=n("siFw");function S(t,e){if(1&t){var n=l.Pb();l.Ob(0,"form",6),l.ac("ngSubmit",(function(){return l.wc(n),l.dc().submitRating()})),l.Ob(1,"div",7),l.Fc(2," Rating must be between 1 and 10. "),l.Nb(),l.Ob(3,"div",8),l.Ob(4,"div",9),l.Ob(5,"ratings-star-rating",10),l.ac("mouseleave",(function(){return l.wc(n),l.dc().resetRating()}))("mousemove",(function(){l.wc(n);var t=l.dc();return t.currentRate=t.currentRateHover}))("click",(function(){return l.wc(n),l.dc().rateHasChanged=!0}))("currentRateHover",(function(t){return l.wc(n),l.dc().setRatingHover(t)}))("currentRate",(function(t){return l.wc(n),l.dc().setRating(t)})),l.Nb(),l.Nb(),l.Fc(6),l.Nb(),l.Ob(7,"div",8),l.Ob(8,"label",11),l.Fc(9,"Feedback"),l.Nb(),l.Ob(10,"textarea",12),l.ac("ngModelChange",(function(t){return l.wc(n),l.dc().message=t})),l.Nb(),l.Ob(11,"div",7),l.Fc(12," Feedback message is to too long. It can only be 1000 characters at max. "),l.Nb(),l.Ob(13,"p",13),l.Fc(14),l.Nb(),l.Nb(),l.Ob(15,"div",14),l.Ob(16,"div"),l.Kb(17,"input",15),l.Nb(),l.Ob(18,"div"),l.Ob(19,"span",16),l.Fc(20,"Please choose a rating."),l.Nb(),l.Nb(),l.Nb(),l.Ob(21,"div",17),l.Fc(22," Oops, there was an error while trying to submit your rating. Please try again later. "),l.Nb(),l.Nb()}if(2&t){var r=l.dc();l.wb(1),l.lc("hidden",r.formValid),l.wb(5),l.Hc(" Current rating: ",r.rateHasChanged?r.currentRate:r.currentRateHover," "),l.wb(4),l.lc("ngModel",r.message),l.wb(1),l.lc("hidden",r.message.length<=1e3),l.wb(3),l.Hc("Current Length: ",r.message.length," (Max: 1000)"),l.wb(1),l.Bb("float-container-box",!r.rateHasChanged),l.wb(2),l.lc("disabled",!r.rateHasChanged||r.message.length>1e3||r.firedOff),l.wb(2),l.lc("hidden",r.rateHasChanged),l.wb(2),l.lc("hidden",!r.isError)}}function M(t,e){1&t&&(l.Mb(0),l.Ob(1,"h3",18),l.Fc(2," Thank you for your feedback!\xa0 "),l.Nb(),l.Lb())}var A,P,N,H=[{path:"",component:(A=function(){function t(e){_classCallCheck(this,t),this.ratingService=e,String.prototype.sanitizeXSS=d.a,String.prototype.removeStringChars=g.a}return _createClass(t,[{key:"ngOnInit",value:function(){this.currentRate=0,this.message="",this.formValid=!0,this.formSubmitted=!1,this.rateHasChanged=!1,this.currentRateHover=0,this.rate=0,this.isError=!1,this.loading=!1,this.firedOff=!1}},{key:"setRating",value:function(t){this.currentRate=t,this.rate=t}},{key:"setRatingHover",value:function(t){this.currentRateHover=t}},{key:"resetRating",value:function(){this.rateHasChanged?this.currentRate=this.rate:this.currentRateHover=0}},{key:"submitRating",value:function(){var t=this;if(this.loading=!0,this.firedOff=!0,0===this.currentRate)this.formValid=!1;else{var e={rating:this.currentRate,message:this.message.sanitizeXSS({replaceSpecialChars:!1,encode:!1}).removeStringChars(),date_time:new Date};this.ratingService.addRating(e).subscribe((function(){t.formValid=!0,t.loading=!1,t.formSubmitted=!0,t.isError=!1}),(function(e){t.loading=!1,t.isError=!0,t.firedOff=!1,f.a.error(e)}))}}}]),t}(),A.\u0275fac=function(t){return new(t||A)(l.Jb(u))},A.\u0275cmp=l.Db({type:A,selectors:[["app-ratings"]],decls:10,vars:3,consts:[[3,"loading"],[1,"container","mt-2"],[1,"mt-3"],[1,"border","p-4","bg-light","rounded"],["name","ratingForm",3,"ngSubmit",4,"ngIf"],[4,"ngIf"],["name","ratingForm",3,"ngSubmit"],["appAlert","","alertType","danger",3,"hidden"],[1,"form-group"],[1,"mb-1"],[3,"mouseleave","mousemove","click","currentRateHover","currentRate"],["for","message"],["name","message","id","message","placeholder","Optional","maxlength","1000",1,"form-control",3,"ngModel","ngModelChange"],[1,"mt-2"],["id","submit-container-float",1,"mr-auto"],["type","submit","value","Submit!","appBtn","","btnType","success",3,"disabled"],["appAlert","","alertType","warning",1,"ml-3",3,"hidden"],["appAlert","","alertType","danger",1,"mt-3","mb-0",3,"hidden"],["id","thx-msg",1,"text-center"]],template:function(t,e){1&t&&(l.Mb(0),l.Kb(1,"spinners-gif-spinner",0),l.Ob(2,"div",1),l.Ob(3,"h1",2),l.Fc(4,"Rate this App"),l.Nb(),l.Kb(5,"hr"),l.Ob(6,"div",3),l.Dc(7,S,23,10,"form",4),l.Dc(8,M,3,0,"ng-container",5),l.Nb(),l.Kb(9,"ratings-privacy-alert"),l.Nb(),l.Lb()),2&t&&(l.wb(1),l.lc("loading",e.loading),l.wb(6),l.lc("ngIf",!e.formSubmitted),l.wb(1),l.lc("ngIf",e.formSubmitted))},directives:[h.a,a.o,w,_.u,_.m,_.n,O.a,k,_.a,_.h,_.l,_.o,R.a],styles:['@charset "UTF-8";#thx-msg[_ngcontent-%COMP%]:after{content:"\ud83d\ude03"}.float-container-box[_ngcontent-%COMP%]{height:38.5px;width:281px}#submit-container-float[_ngcontent-%COMP%]{clear:both}#submit-container-float[_ngcontent-%COMP%]:after{clear:both;content:"";display:table}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{float:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:right}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{display:block;padding:.4rem}@media only screen and (max-width:360px){#submit-container-float[_ngcontent-%COMP%]{clear:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-bottom:1rem}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0!important}.float-container-box[_ngcontent-%COMP%]{height:6em;width:12.5rem}}']}),A),canActivate:[o.a]}],I=((P=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:P}),P.\u0275inj=l.Gb({factory:function(t){return new(t||P)},imports:[[i.h.forChild(H)],i.h]}),P),T=n("WjtB"),x=n("FUS3"),F=((N=function t(){_classCallCheck(this,t)}).\u0275mod=l.Hb({type:N}),N.\u0275inj=l.Gb({factory:function(t){return new(t||N)},providers:[u],imports:[[a.c,I,m.g,T.a,x.a,_.g]]}),N)}}]);