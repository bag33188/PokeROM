(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Wx56:function(t,e,n){"use strict";n.r(e);var r=n("ofXK"),a=n("Rv5h"),i=n("vuBd"),s=n("Mb37"),o=n("fXoL"),c=n("tk/3"),g=n("AytR");let l=(()=>{class t{constructor(t){this.http=t}addRating(e){const n=new c.f({"Content-Type":"application/json"});return this.http.post(t.ratingsUrl,e,{headers:n})}getRating(e){return this.http.get(`${t.ratingsUrl}/${e}`)}getRatings(e){if(e){let n=new c.g;return n=n.append("_limit",e.toString()),this.http.get(t.ratingsUrl,{params:n})}return this.http.get(t.ratingsUrl)}deleteRating(e){return this.http.delete(`${t.ratingsUrl}/${e}`)}deleteAllRatings(){return this.http.delete(t.ratingsUrl)}ratingHeaders(e){return this.http.head(`${t.ratingsUrl}/${e}`)}allRatingsHeaders(){return this.http.head(t.ratingsUrl)}}return t.ratingsUrl=`${g.a.apiUrl}/ratings`,t.\u0275fac=function(e){return new(e||t)(o.Zb(c.b))},t.\u0275prov=o.Hb({token:t,factory:t.\u0275fac}),t})();var d=n("NvMS"),b=n("Ql4B"),u=n("yZ9z"),h=n("1kSV");function m(t,e){if(1&t){const t=o.Sb();o.Rb(0,"div",1),o.Rb(1,"ngb-alert",2),o.dc("close",(function(n){o.yc(t);const r=e.$implicit;return o.gc().closeAlert(r)})),o.Ic(2),o.Pb(),o.Pb()}if(2&t){const t=e.$implicit;o.nc("@fadeOut","in"),o.xb(1),o.nc("type",t.type)("dismissible",!0),o.xb(1),o.Jc(t.message)}}let f=(()=>{class t{constructor(){}ngOnInit(){u.a.getState("rating-alert")||u.a.setState("rating-alert",[{message:"Your rating does not store any personal information, browser data, or cookies. Your rating will only show your rating number, optional feedback message, and the date and time it was submitted.",type:"info"}]),this.alerts=u.a.getState("rating-alert")}closeAlert(t){this.alerts.splice(this.alerts.indexOf(t),1),u.a.setState("rating-alert",[])}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Fb({type:t,selectors:[["ratings-privacy-alert"]],decls:2,vars:1,consts:[["id","ratings-alert-container",4,"ngFor","ngForOf"],["id","ratings-alert-container"],[1,"mt-3",3,"type","dismissible","close"]],template:function(t,e){1&t&&(o.Ob(0),o.Gc(1,m,3,4,"div",0),o.Nb()),2&t&&(o.xb(1),o.nc("ngForOf",e.alerts))},directives:[r.n,h.d],styles:["#ratings-alert-container[_ngcontent-%COMP%]{margin:auto;padding:initial;position:static}"],data:{animation:[b.b]}}),t})();var p=n("3Pt+"),R=n("FpAq");let v=(()=>{class t{constructor(){this.currentRate=new o.m,this.currentRateHover=new o.m}ngOnInit(){this.rate=0}outputRating(t){this.currentRate.emit(t)}outputRatingHover(t){this.currentRateHover.emit(t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Fb({type:t,selectors:[["ratings-star-rating"]],outputs:{currentRate:"currentRate",currentRateHover:"currentRateHover"},decls:5,vars:1,consts:[["for","rating"],["id","spacing"],["id","rating",3,"rate","rateChange","hover"]],template:function(t,e){1&t&&(o.Ob(0),o.Rb(1,"label",0),o.Ic(2,"Rating:"),o.Pb(),o.Mb(3,"div",1),o.Rb(4,"ngb-rating",2),o.dc("rateChange",(function(t){return e.rate=t}))("rateChange",(function(t){return e.outputRating(t)}))("hover",(function(t){return e.outputRatingHover(t)})),o.Pb(),o.Nb()),2&t&&(o.xb(4),o.nc("rate",e.rate))},directives:[h.p],styles:["#spacing[_ngcontent-%COMP%]{display:inline-block;width:.4rem}@media only screen and (max-width:938px){.ng-star-inserted[_ngcontent-%COMP%]:not(label){font-size:1.5rem}}"]}),t})();var y=n("siFw");function P(t,e){if(1&t){const t=o.Sb();o.Rb(0,"form",6),o.dc("ngSubmit",(function(e){return o.yc(t),o.gc().submitRating()})),o.Rb(1,"div",7),o.Ic(2," Rating must be between 1 and 10. "),o.Pb(),o.Rb(3,"div",8),o.Rb(4,"div",9),o.Rb(5,"ratings-star-rating",10),o.dc("mouseleave",(function(e){return o.yc(t),o.gc().resetRating()}))("mousemove",(function(e){o.yc(t);const n=o.gc();return n.currentRate=n.currentRateHover}))("click",(function(e){return o.yc(t),o.gc().rateHasChanged=!0}))("currentRateHover",(function(e){return o.yc(t),o.gc().setRatingHover(e)}))("currentRate",(function(e){return o.yc(t),o.gc().setRating(e)})),o.Pb(),o.Pb(),o.Ic(6),o.Pb(),o.Rb(7,"div",8),o.Rb(8,"label",11),o.Ic(9,"Feedback"),o.Pb(),o.Rb(10,"textarea",12),o.dc("ngModelChange",(function(e){return o.yc(t),o.gc().message=e})),o.Pb(),o.Rb(11,"div",7),o.Ic(12," Feedback message is to too long. It can only be 1000 characters at max. "),o.Pb(),o.Rb(13,"p",13),o.Ic(14),o.Pb(),o.Pb(),o.Rb(15,"div",14),o.Rb(16,"div"),o.Mb(17,"input",15),o.Pb(),o.Rb(18,"div"),o.Rb(19,"span",16),o.Ic(20,"Please choose a rating."),o.Pb(),o.Pb(),o.Pb(),o.Rb(21,"div",17),o.Ic(22," Oops, there was an error while trying to submit your rating. Please try again later. "),o.Pb(),o.Pb()}if(2&t){const t=o.gc();o.xb(1),o.nc("hidden",t.formValid),o.xb(5),o.Kc(" Current rating: ",t.rateHasChanged?t.currentRate:t.currentRateHover," "),o.xb(4),o.nc("ngModel",t.message),o.xb(1),o.nc("hidden",t.message.length<=1e3),o.xb(3),o.Kc("Current Length: ",t.message.length," (Max: 1000)"),o.xb(1),o.Db("float-container-box",!t.rateHasChanged),o.xb(2),o.nc("disabled",!t.rateHasChanged||t.message.length>1e3||t.firedOff),o.xb(2),o.nc("hidden",t.rateHasChanged),o.xb(2),o.nc("hidden",!t.isError)}}function C(t,e){1&t&&(o.Ob(0),o.Rb(1,"h3",18),o.Ic(2," Thank you for your feedback!\xa0 "),o.Pb(),o.Nb())}let O=(()=>{class t{constructor(t){this.ratingService=t,String.prototype.sanitizeXSS=a.a,String.prototype.removeStringChars=i.a}ngOnInit(){this.currentRate=0,this.message="",this.formValid=!0,this.formSubmitted=!1,this.rateHasChanged=!1,this.currentRateHover=0,this.rate=0,this.isError=!1,this.loading=!1,this.firedOff=!1}setRating(t){this.currentRate=t,this.rate=t}setRatingHover(t){this.currentRateHover=t}resetRating(){this.rateHasChanged?this.currentRate=this.rate:this.currentRateHover=0}submitRating(){if(this.loading=!0,this.firedOff=!0,0===this.currentRate)this.formValid=!1;else{const t={rating:this.currentRate,message:this.message.sanitizeXSS({replaceSpecialChars:!1,encode:!1}).removeStringChars(),date_time:new Date};this.ratingService.addRating(t).subscribe(()=>{this.formValid=!0,this.loading=!1,this.formSubmitted=!0,this.isError=!1},t=>{this.loading=!1,this.isError=!0,this.firedOff=!1,s.a.error(t)})}}}return t.\u0275fac=function(e){return new(e||t)(o.Lb(l))},t.\u0275cmp=o.Fb({type:t,selectors:[["app-ratings"]],decls:10,vars:3,consts:[[3,"loading"],[1,"container","mt-2"],[1,"mt-3"],[1,"border","p-4","bg-light","rounded"],["name","ratingForm",3,"ngSubmit",4,"ngIf"],[4,"ngIf"],["name","ratingForm",3,"ngSubmit"],["appAlert","","alertType","danger",3,"hidden"],[1,"form-group"],[1,"mb-1"],[3,"mouseleave","mousemove","click","currentRateHover","currentRate"],["for","message"],["name","message","id","message","placeholder","Optional","maxlength","1000",1,"form-control",3,"ngModel","ngModelChange"],[1,"mt-2"],["id","submit-container-float",1,"mr-auto"],["type","submit","value","Submit!","appBtn","","btnType","success",3,"disabled"],["appAlert","","alertType","warning",1,"ml-3",3,"hidden"],["appAlert","","alertType","danger",1,"mt-3","mb-0",3,"hidden"],["id","thx-msg",1,"text-center"]],template:function(t,e){1&t&&(o.Ob(0),o.Mb(1,"spinners-gif-spinner",0),o.Rb(2,"div",1),o.Rb(3,"h1",2),o.Ic(4,"Rate this App"),o.Pb(),o.Mb(5,"hr"),o.Rb(6,"div",3),o.Gc(7,P,23,9,"form",4),o.Gc(8,C,3,0,"ng-container",5),o.Pb(),o.Mb(9,"ratings-privacy-alert"),o.Pb(),o.Nb()),2&t&&(o.xb(1),o.nc("loading",e.loading),o.xb(6),o.nc("ngIf",!e.formSubmitted),o.xb(1),o.nc("ngIf",e.formSubmitted))},directives:[d.a,r.o,f,p.u,p.m,p.n,R.a,v,p.a,p.h,p.l,p.o,y.a],styles:['#thx-msg[_ngcontent-%COMP%]::after{content:"\u{1f603}"}.float-container-box[_ngcontent-%COMP%]{height:38.5px;width:281px}#submit-container-float[_ngcontent-%COMP%]{clear:both}#submit-container-float[_ngcontent-%COMP%]::after{clear:both;content:"";display:table}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{float:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:right}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{display:block;padding:.4rem}@media only screen and (max-width:360px){#submit-container-float[_ngcontent-%COMP%]{clear:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{margin-bottom:1rem}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child{float:left}#submit-container-float[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-left:0!important}.float-container-box[_ngcontent-%COMP%]{height:6em;width:12.5rem}}']}),t})();var M=n("tyNb");const x=[{path:"",component:O,canActivate:[n("Dat7").a]}];let w=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},imports:[[M.h.forChild(x)],M.h]}),t})();var S=n("WjtB"),H=n("FUS3");n.d(e,"RatingsModule",(function(){return _}));let _=(()=>{class t{}return t.\u0275mod=o.Jb({type:t}),t.\u0275inj=o.Ib({factory:function(e){return new(e||t)},providers:[l],imports:[[r.c,w,h.g,S.a,H.a,p.g]]}),t})()}}]);