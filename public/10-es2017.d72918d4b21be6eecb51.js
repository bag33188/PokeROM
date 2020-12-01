(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{FpAq:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n("Mb37"),a=n("fXoL");let i=(()=>{class t{constructor(t){this.el=t}ngOnInit(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():r.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&r.a.error("addShadow must be a boolean.")}getType(){if("string"!=typeof this.alertType)return r.a.error("Type must be a string."),new Array;switch(this.alertType){case"primary":return[...this.preClasses,"alert-primary"];case"secondary":return[...this.preClasses,"alert-secondary"];case"warning":return[...this.preClasses,"alert-warning"];case"success":return[...this.preClasses,"alert-success"];case"danger":return[...this.preClasses,"alert-danger"];case"info":return[...this.preClasses,"alert-info"];case"light":return[...this.preClasses,"alert-light"];case"dark":return[...this.preClasses,"alert-dark"];default:return r.a.error("Invalid alert type."),new Array}}setType(){const t=this.getType(),e=this.el.nativeElement.classList;t.forEach(t=>{Array.from(e).includes(t)&&e.remove(t),e.add(t)}),-1!==Array.prototype.slice.call(e).indexOf("null")&&e.remove("null")}}return t.\u0275fac=function(e){return new(e||t)(a.Jb(a.l))},t.\u0275dir=a.Eb({type:t,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),t})()},NvMS:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r=n("Ei5h"),a=n("DvS/"),i=n("Mb37"),s=n("fXoL"),o=n("3+9a");const c=["spinnerImg"];let l=(()=>{class t{constructor(){}ngOnInit(){this.fallbackUrl=a.a.SPINNER,this.images=r.a}ngAfterContentInit(){this.checkInput()}checkInput(){null==this.loading&&i.a.error("Loading property is required.")}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=s.Db({type:t,selectors:[["spinners-gif-spinner"]],viewQuery:function(t,e){var n;1&t&&s.Jc(c,!0),2&t&&s.tc(n=s.bc())&&(e.spinnerImage=n.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(t,e){1&t&&(s.Ob(0,"div",0),s.Kb(1,"img",1,2),s.ec(3,"defaultImage"),s.Nb()),2&t&&(s.lc("hidden",!e.loading),s.wb(1),s.lc("src",s.ic(3,2,e.images.SPINNER,e.fallbackUrl,e.spinnerImage,!0),s.yc))},pipes:[o.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}"]}),t})()},WjtB:function(t,e,n){"use strict";n.d(e,"a",(function(){return s}));var r=n("ofXK"),a=n("iTUp"),i=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=i.Hb({type:t}),t.\u0275inj=i.Gb({factory:function(e){return new(e||t)},imports:[[r.c,a.a]]}),t})()},Wx56:function(t,e,n){"use strict";n.r(e),n.d(e,"RatingsModule",(function(){return H}));var r=n("ofXK"),a=n("tyNb"),i=n("Dat7"),s=n("tk/3"),o=n("AytR"),c=n("fXoL");let l=(()=>{class t{constructor(t){this.http=t}addRating(e){const n=new s.f({"Content-Type":"application/json"});return this.http.post(t.ratingsUrl,e,{headers:n})}getRating(e){return this.http.get(`${t.ratingsUrl}/${e}`)}getRatings(e){if(e){let n=new s.g;return n=n.append("_limit",e.toString()),this.http.get(t.ratingsUrl,{params:n})}return this.http.get(t.ratingsUrl)}deleteRating(e){return this.http.delete(`${t.ratingsUrl}/${e}`)}deleteAllRatings(){return this.http.delete(t.ratingsUrl)}ratingHeaders(e){return this.http.head(`${t.ratingsUrl}/${e}`)}allRatingsHeaders(){return this.http.head(t.ratingsUrl)}}return t.ratingsUrl=o.a.apiUrl+"/ratings",t.\u0275fac=function(e){return new(e||t)(c.Wb(s.b))},t.\u0275prov=c.Fb({token:t,factory:t.\u0275fac}),t})();var d=n("Rv5h"),g=n("vuBd"),u=n("Mb37"),h=n("NvMS"),p=n("Ql4B"),b=n("yZ9z"),m=n("1kSV");function f(t,e){if(1&t){const t=c.Pb();c.Ob(0,"div",1),c.Ob(1,"ngb-alert",2),c.ac("close",(function(){c.wc(t);const n=e.$implicit;return c.dc().closeAlert(n)})),c.Fc(2),c.Nb(),c.Nb()}if(2&t){const t=e.$implicit;c.lc("@fadeOut","in"),c.wb(1),c.lc("type",t.type)("dismissible",!0),c.wb(1),c.Gc(t.message)}}let w=(()=>{class t{constructor(){}ngOnInit(){b.a.getState("rating_alert")||b.a.setState("rating_alert",[{message:"Your rating does not store any personal information, browser data, or cookies. Your rating will only show your rating number, optional feedback message, and the date and time it was submitted.",type:"info"}]),this.alerts=b.a.getState("rating_alert")}closeAlert(t){this.alerts.splice(this.alerts.indexOf(t),1),b.a.setState("rating_alert",[])}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Db({type:t,selectors:[["ratings-privacy-alert"]],decls:2,vars:1,consts:[["id","ratings-alert-container",4,"ngFor","ngForOf"],["id","ratings-alert-container"],[1,"mt-3","shadow",3,"type","dismissible","close"]],template:function(t,e){1&t&&(c.Mb(0),c.Dc(1,f,3,4,"div",0),c.Lb()),2&t&&(c.wb(1),c.lc("ngForOf",e.alerts))},directives:[r.n,m.d],styles:["#ratings-alert-container[_ngcontent-%COMP%]{margin:auto;padding:initial;position:static}"],data:{animation:[p.b]}}),t})();var v=n("3Pt+"),y=n("FpAq");let O=(()=>{class t{constructor(){this.currentRate=new c.n,this.currentRateHover=new c.n}ngOnInit(){this.rate=0}outputRating(t){this.currentRate.emit(t)}outputRatingHover(t){this.currentRateHover.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Db({type:t,selectors:[["ratings-star-rating"]],outputs:{currentRate:"currentRate",currentRateHover:"currentRateHover"},decls:5,vars:1,consts:[["for","rating"],["id","spacing"],["id","rating",3,"rate","rateChange","hover"]],template:function(t,e){1&t&&(c.Mb(0),c.Ob(1,"label",0),c.Fc(2,"Rating:"),c.Nb(),c.Kb(3,"div",1),c.Ob(4,"ngb-rating",2),c.ac("rateChange",(function(t){return e.rate=t}))("rateChange",(function(t){return e.outputRating(t)}))("hover",(function(t){return e.outputRatingHover(t)})),c.Nb(),c.Lb()),2&t&&(c.wb(4),c.lc("rate",e.rate))},directives:[m.p],styles:["#spacing[_ngcontent-%COMP%]{display:inline-block;width:.4rem}@media only screen and (max-width:938px){.ng-star-inserted[_ngcontent-%COMP%]:not(label){font-size:1.5rem}}"]}),t})();var C=n("siFw");function R(t,e){if(1&t){const t=c.Pb();c.Ob(0,"form",6),c.ac("ngSubmit",(function(){return c.wc(t),c.dc().submitRating()})),c.Ob(1,"div",7),c.Fc(2," Rating must be between 1 and 10. "),c.Nb(),c.Ob(3,"div",8),c.Ob(4,"div",9),c.Ob(5,"ratings-star-rating",10),c.ac("mouseleave",(function(){return c.wc(t),c.dc().resetRating()}))("mousemove",(function(){c.wc(t);const e=c.dc();return e.currentRate=e.currentRateHover}))("click",(function(){return c.wc(t),c.dc().rateHasChanged=!0}))("currentRateHover",(function(e){return c.wc(t),c.dc().setRatingHover(e)}))("currentRate",(function(e){return c.wc(t),c.dc().setRating(e)})),c.Nb(),c.Nb(),c.Fc(6),c.Nb(),c.Ob(7,"div",8),c.Ob(8,"label",11),c.Fc(9,"Feedback"),c.Nb(),c.Ob(10,"textarea",12),c.ac("ngModelChange",(function(e){return c.wc(t),c.dc().message=e})),c.Nb(),c.Ob(11,"div",7),c.Fc(12," Feedback message is to too long. It can only be 1000 characters at max. "),c.Nb(),c.Ob(13,"p",13),c.Fc(14),c.Nb(),c.Nb(),c.Ob(15,"div",14),c.Ob(16,"div"),c.Kb(17,"input",15),c.Nb(),c.Ob(18,"div"),c.Ob(19,"span",16),c.Fc(20,"Please choose a rating."),c.Nb(),c.Nb(),c.Nb(),c.Ob(21,"div",17),c.Fc(22," Oops, there was an error while trying to submit your rating. Please try again later. "),c.Nb(),c.Nb()}if(2&t){const t=c.dc();c.wb(1),c.lc("hidden",t.formValid),c.wb(5),c.Hc(" Current rating: ",t.rateHasChanged?t.currentRate:t.currentRateHover," "),c.wb(4),c.lc("ngModel",t.message),c.wb(1),c.lc("hidden",t.message.length<=1e3),c.wb(3),c.Hc("Current Length: ",t.message.length," (Max: 1000)"),c.wb(1),c.Bb("float-container-box",!t.rateHasChanged),c.wb(2),c.lc("disabled",!t.rateHasChanged||t.message.length>1e3||t.firedOff),c.wb(2),c.lc("hidden",t.rateHasChanged),c.wb(2),c.lc("hidden",!t.isError)("shadow",!0)}}function M(t,e){1&t&&(c.Mb(0),c.Ob(1,"h3",18),c.Fc(2," Thank you for your feedback!\xa0 "),c.Nb(),c.Lb())}const S=[{path:"",component:(()=>{class t{constructor(t){this.ratingService=t,String.prototype.sanitizeXSS=d.a,String.prototype.removeStringChars=g.a}ngOnInit(){this.currentRate=0,this.message="",this.formValid=!0,this.formSubmitted=!1,this.rateHasChanged=!1,this.currentRateHover=0,this.rate=0,this.isError=!1,this.loading=!1,this.firedOff=!1}setRating(t){this.currentRate=t,this.rate=t}setRatingHover(t){this.currentRateHover=t}resetRating(){this.rateHasChanged?this.currentRate=this.rate:this.currentRateHover=0}submitRating(){if(this.loading=!0,this.firedOff=!0,0===this.currentRate)this.formValid=!1;else{const t={rating:this.currentRate,message:this.message.sanitizeXSS({replaceSpecialChars:!1,encode:!1}).removeStringChars(),date_time:new Date};this.ratingService.addRating(t).subscribe(()=>{this.formValid=!0,this.loading=!1,this.formSubmitted=!0,this.isError=!1},t=>{this.loading=!1,this.isError=!0,this.firedOff=!1,u.a.error(t)})}}}return t.\u0275fac=function(e){return new(e||t)(c.Jb(l))},t.\u0275cmp=c.Db({type:t,selectors:[["app-ratings"]],decls:10,vars:3,consts:[[3,"loading"],[1,"container","mt-2"],[1,"mt-3"],[1,"border","p-4","bg-light","rounded","shadow"],["name","ratingForm",3,"ngSubmit",4,"ngIf"],[4,"ngIf"],["name","ratingForm",3,"ngSubmit"],["appAlert","","alertType","danger",3,"hidden"],[1,"form-group"],[1,"mb-1"],[3,"mouseleave","mousemove","click","currentRateHover","currentRate"],["for","message"],["name","message","id","message","placeholder","Optional","maxlength","1000",1,"form-control",3,"ngModel","ngModelChange"],[1,"mt-2"],["id","submit-container-float",1,"mr-auto"],["type","submit","value","Submit!","appBtn","","btnType","success",3,"disabled"],["appAlert","","alertType","warning",1,"ml-3",3,"hidden"],["appAlert","","alertType","danger",1,"mt-3","mb-0",3,"hidden","shadow"],["id","thx-msg",1,"text-center"]],template:function(t,e){1&t&&(c.Mb(0),c.Kb(1,"spinners-gif-spinner",0),c.Ob(2,"div",1),c.Ob(3,"h1",2),c.Fc(4,"Rate this App"),c.Nb(),c.Kb(5,"hr"),c.Ob(6,"div",3),c.Dc(7,R,23,11,"form",4),c.Dc(8,M,3,0,"ng-container",5),c.Nb(),c.Kb(9,"ratings-privacy-alert"),c.Nb(),c.Lb()),2&t&&(c.wb(1),c.lc("loading",e.loading),c.wb(6),c.lc("ngIf",!e.formSubmitted),c.wb(1),c.lc("ngIf",e.formSubmitted))},directives:[h.a,r.o,w,v.u,v.m,v.n,y.a,O,v.a,v.h,v.l,v.o,C.a],styles:['@charset "UTF-8";#thx-msg[_ngcontent-%COMP%]:after{content:"\u{1f603}"}.float-container-box[_ngcontent-%COMP%]{height:38.5px;width:281px}#submit-container-float[_ngcontent-%COMP%]{clear:both}#submit-container-float[_ngcontent-%COMP%]:after{clear:both;content:"";display:table}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{float:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:right}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{display:block;padding:.4rem}@media only screen and (max-width:360px){#submit-container-float[_ngcontent-%COMP%]{clear:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-bottom:1rem}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0!important}.float-container-box[_ngcontent-%COMP%]{height:6em;width:12.5rem}}']}),t})(),canActivate:[i.a]}];let P=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},imports:[[a.h.forChild(S)],a.h]}),t})();var _=n("WjtB"),N=n("FUS3");let H=(()=>{class t{}return t.\u0275mod=c.Hb({type:t}),t.\u0275inj=c.Gb({factory:function(e){return new(e||t)},providers:[l],imports:[[r.c,P,m.g,_.a,N.a,v.g]]}),t})()}}]);