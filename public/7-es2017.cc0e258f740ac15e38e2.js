(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nDdO:function(e,t,n){"use strict";n.r(t);var r=n("qfBg"),s=n("lGQG"),i=n("wHSu"),o=n("Rv5h"),a=n("vuBd"),c=n("QTu/"),l=n("Mb37"),d=n("DRYZ"),u=n("yZ9z"),b=n("8Y7J"),h=n("iInd"),m=n("NvMS"),p=n("SVse"),g=n("FpAq"),f=n("s7LF"),x=n("siFw"),w=n("yCtX"),y=n("DH7j"),v=n("7o/Q"),R=n("l7GE"),P=n("ZUHj"),O=n("Lhse");class S{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new C(e,this.resultSelector))}}class C extends v.a{constructor(e,t,n=Object.create(null)){super(e),this.iterators=[],this.active=0,this.resultSelector="function"==typeof t?t:null,this.values=n}_next(e){const t=this.iterators;Object(y.a)(e)?t.push(new M(e)):t.push("function"==typeof e[O.a]?new I(e[O.a]()):new J(this.destination,this,e))}_complete(){const e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(let n=0;n<t;n++){let t=e[n];t.stillUnsubscribed?this.destination.add(t.subscribe(t,n)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const e=this.iterators,t=e.length,n=this.destination;for(let i=0;i<t;i++){let t=e[i];if("function"==typeof t.hasValue&&!t.hasValue())return}let r=!1;const s=[];for(let i=0;i<t;i++){let t=e[i],o=t.next();if(t.hasCompleted()&&(r=!0),o.done)return void n.complete();s.push(o.value)}this.resultSelector?this._tryresultSelector(s):n.next(s),r&&n.complete()}_tryresultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}class I{constructor(e){this.iterator=e,this.nextResult=e.next()}hasValue(){return!0}next(){const e=this.nextResult;return this.nextResult=this.iterator.next(),e}hasCompleted(){const e=this.nextResult;return e&&e.done}}class M{constructor(e){this.array=e,this.index=0,this.length=0,this.length=e.length}[O.a](){return this}next(e){const t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class J extends R.a{constructor(e,t,n){super(e),this.parent=t,this.observable=n,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[O.a](){return this}next(){const e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(e,t,n,r,s){this.buffer.push(t),this.parent.checkIterators()}subscribe(e,t){return Object(P.a)(this,this.observable,this,t)}}var k=n("SxV6"),U=n("3E0/"),T=n("IzEk"),E={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},D={prefix:"far",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]},_=n("Ql4B"),z=n("t52u"),N=n("beNV"),A=n("Nv++");function H(e,t){if(1&e&&(b.Rb(0,"div",3),b.Mb(1,"spinners-bootstrap-spinner",4),b.Pb()),2&e){const e=b.gc();b.xb(1),b.oc("loading",e.loading)}}function L(e,t){if(1&e){const e=b.Sb();b.Rb(0,"button",5),b.dc("click",(function(t){return b.zc(e),b.gc().updateRoms()})),b.Jc(1," Update ROMs "),b.Pb()}}function F(e,t){if(1&e&&(b.Rb(0,"div",6),b.Mb(1,"fa-icon",7),b.Jc(2),b.Pb()),2&e){const e=b.gc();b.oc("alertType",e.romsUpdated?"success":"danger")("@fadeIn",void 0),b.xb(1),b.oc("icon",e.romsUpdated?e.faCheckCircle:e.faTimesCircle),b.xb(1),b.Lc(" ",e.romsUpdated?"ROMs successfully updated!":"Error updating ROMs, please try again later."," ")}}let j=(()=>{class e{constructor(e){this.romsService=e}ngOnInit(){this.faTimesCircle=D,this.faCheckCircle=E,this.showBtn=!0,this.loading=!1,this.deleteRomsObs$=this.romsService.deleteAllRoms().pipe(Object(k.a)(),Object(U.a)(500)),this.addRomsObs$=function(...e){const t=e[e.length-1];return"function"==typeof t&&e.pop(),Object(w.a)(e,void 0).lift(new S(t))}(this.romsService.addCoreRoms().pipe(Object(T.a)(1),Object(U.a)(1e3)),this.romsService.addRomHacks().pipe(Object(T.a)(1),Object(U.a)(1e3)))}ngOnDestroy(){this.romsUpdated&&(this.deleteRomsSub.unsubscribe(),this.addRomsSub.unsubscribe())}updateRoms(){this.showBtn=!1,this.loading=!0,this.deleteRoms(this.addRoms.bind(this))}deleteRoms(e){this.deleteRomsSub=this.deleteRomsObs$.subscribe({error:e=>{this.loading=!1,this.romsUpdated=!1,l.a.error(e)},complete:()=>e()})}addRoms(){this.addRomsSub=this.addRomsObs$.subscribe({error:e=>{this.loading=!1,l.a.error(e)},complete:()=>{this.romsUpdated=!0,this.loading=!1}})}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(z.a))},e.\u0275cmp=b.Fb({type:e,selectors:[["account-update-roms"]],decls:4,vars:3,consts:[["id","update-roms-spinner-container","class","mb-3",4,"ngIf"],["class","mb-3","type","button","appBtn","","btnType","warning",3,"click",4,"ngIf"],["id","roms-updated-alert-container","class","p-2","appAlert","",3,"alertType",4,"ngIf"],["id","update-roms-spinner-container",1,"mb-3"],["type","border","color","primary",3,"loading"],["type","button","appBtn","","btnType","warning",1,"mb-3",3,"click"],["id","roms-updated-alert-container","appAlert","",1,"p-2",3,"alertType"],[1,"mr-1",3,"icon"]],template:function(e,t){1&e&&(b.Ob(0),b.Hc(1,H,2,1,"div",0),b.Hc(2,L,2,0,"button",1),b.Hc(3,F,3,4,"div",2),b.Nb()),2&e&&(b.xb(1),b.oc("ngIf",t.loading),b.xb(1),b.oc("ngIf",t.showBtn),b.xb(1),b.oc("ngIf",void 0!==t.romsUpdated))},directives:[p.o,N.a,x.a,g.a,A.a],styles:["#update-roms-spinner-container[_ngcontent-%COMP%]{padding:.11rem}#roms-updated-alert-container[_ngcontent-%COMP%]{margin-bottom:.75rem}"],data:{animation:[_.a]}}),e})();var B=n("G0yt");let q=(()=>{class e{constructor(e,t,n){this.modal=e,this.userService=t,this.router=n,this.isErrorDeleting=new b.m,this.loading=new b.m,this.firedOff=new b.m}ngOnInit(){this.btnDisabled=!1}deleteCurrentUser(){this.firedOff.emit(!0),this.btnDisabled=!0,this.userService.deleteUser(JSON.parse(c.a.getCookie("user")).id).subscribe(()=>{this.isErrorDeleting.emit(!1),this.loading.emit(!1),this.router.navigate(["/","home"]),s.a.logout()},e=>{this.btnDisabled=!1,this.loading.emit(!1),this.firedOff.emit(!1),this.isErrorDeleting.emit(!0),l.a.error(e)}),this.closeModal()}closeModal(){this.modal.close("Ok click")}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(B.c),b.Lb(r.a),b.Lb(h.d))},e.\u0275cmp=b.Fb({type:e,selectors:[["account-delete-user-modal"]],inputs:{username:"username"},outputs:{isErrorDeleting:"isErrorDeleting",loading:"loading",firedOff:"firedOff"},decls:25,vars:4,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"hidden"],[1,"modal-footer","justify-content-start"],["type","button","appBtn","","btnType","danger",3,"disabled","click"],["type","button","appBtn","","btnType","secondary-outline",3,"click"]],template:function(e,t){1&e&&(b.Ob(0),b.Rb(1,"div",0),b.Rb(2,"h4",1),b.Jc(3,"Account deletion"),b.Pb(),b.Rb(4,"button",2),b.dc("click",(function(e){return t.modal.dismiss("Cross click")})),b.Rb(5,"span",3),b.Jc(6,"\xd7"),b.Pb(),b.Pb(),b.Pb(),b.Rb(7,"div",4),b.Rb(8,"p"),b.Rb(9,"strong"),b.Jc(10,"Are you sure you want to delete your own account "),b.Rb(11,"span",5),b.Jc(12,"("),b.Pb(),b.Jc(13),b.Rb(14,"span",5),b.Jc(15,")"),b.Pb(),b.Jc(16,"?"),b.Pb(),b.Pb(),b.Rb(17,"p"),b.Rb(18,"span"),b.Jc(19,"This operation cannot be undone."),b.Pb(),b.Pb(),b.Pb(),b.Rb(20,"div",6),b.Rb(21,"button",7),b.dc("click",(function(e){return t.deleteCurrentUser()})),b.Jc(22," Ok "),b.Pb(),b.Rb(23,"button",8),b.dc("click",(function(e){return t.modal.dismiss("cancel click")})),b.Jc(24," Cancel "),b.Pb(),b.Pb(),b.Nb()),2&e&&(b.xb(11),b.oc("hidden",!t.username),b.xb(2),b.Kc(t.username||""),b.xb(1),b.oc("hidden",!t.username),b.xb(7),b.oc("disabled",t.btnDisabled))},directives:[x.a],styles:[".modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:red}"]}),e})(),V=(()=>{class e{constructor(e){this.modalService=e,this.isError=new b.m}ngOnInit(){this.loading=!1,this.btnText="Delete User!"}confirmDeletion(){const e=this.modalService.open(q,{centered:!0});e.componentInstance.loading.subscribe(e=>{this.loading=e}),e.componentInstance.isErrorDeleting.subscribe(e=>{this.isError.emit(e)}),e.componentInstance.firedOff.subscribe(e=>{this.firedOff=e}),e.componentInstance.username=JSON.parse(c.a.getCookie("user")).username}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(B.f))},e.\u0275cmp=b.Fb({type:e,selectors:[["account-delete-user-btn"]],outputs:{isError:"isError"},decls:4,vars:3,consts:[[3,"loading"],["id","delete-user-btn","type","button","appBtn","","btnType","danger",3,"disabled","click"]],template:function(e,t){1&e&&(b.Ob(0),b.Mb(1,"spinners-gif-spinner",0),b.Rb(2,"button",1),b.dc("click",(function(e){return t.confirmDeletion()})),b.Jc(3),b.Pb(),b.Nb()),2&e&&(b.xb(1),b.oc("loading",t.loading),b.xb(1),b.oc("disabled",t.firedOff),b.xb(1),b.Lc(" ",t.btnText," "))},directives:[m.a,x.a],styles:["#delete-user-btn[_ngcontent-%COMP%]{cursor:pointer!important;display:inline-block!important}"]}),e})();function $(e,t){1&e&&(b.Ob(0),b.Rb(1,"h4",5),b.Jc(2,"Account"),b.Pb(),b.Rb(3,"div",6),b.Jc(4," There was an error while trying to load your user information. Please try again later. "),b.Pb(),b.Nb())}function X(e,t){if(1&e){const e=b.Sb();b.Rb(0,"div",34),b.Mb(1,"fa-icon",35),b.Jc(2,"\xa0If you do not enter a name, your name ("),b.Rb(3,"b"),b.Jc(4,"not your user"),b.Pb(),b.Jc(5,") will be deleted from the database. "),b.Rb(6,"button",36),b.dc("click",(function(t){return b.zc(e),b.gc(4).storeAlertState("notice")})),b.Rb(7,"span",37),b.Jc(8,"\xd7"),b.Pb(),b.Pb(),b.Pb()}if(2&e){const e=b.gc(4);b.xb(1),b.oc("icon",e.faInfoCircle)}}function G(e,t){if(1&e&&(b.Ob(0),b.Rb(1,"div",38),b.Rb(2,"div",39),b.Jc(3),b.Pb(),b.Rb(4,"div",39),b.Jc(5),b.Pb(),b.Pb(),b.Nb()),2&e){b.gc();const e=b.xc(16),t=b.gc(3);b.xb(1),b.oc("hidden",!(e.touched&&e.invalid)),b.xb(1),b.oc("hidden",!(null!=e.errors&&e.errors.minlength)),b.xb(1),b.Mc(" Name is too short (min: ",t.lengths.name[0],", current: ",t.user.name.length,"). "),b.xb(1),b.oc("hidden",!(null!=e.errors&&e.errors.maxlength)),b.xb(1),b.Mc(" Name is too long (max: ",t.lengths.name[1],", current: ",t.user.name.length,"). ")}}function Q(e,t){if(1&e&&(b.Ob(0),b.Rb(1,"div",38),b.Rb(2,"div",39),b.Jc(3),b.Pb(),b.Rb(4,"div",39),b.Jc(5),b.Pb(),b.Rb(6,"div",39),b.Jc(7," Username is required. "),b.Pb(),b.Pb(),b.Nb()),2&e){b.gc();const e=b.xc(24),t=b.gc(3);b.xb(1),b.oc("hidden",!(e.touched&&e.invalid)),b.xb(1),b.oc("hidden",!(null!=e.errors&&e.errors.minlength)),b.xb(1),b.Mc(" Username is too short (min: ",t.lengths.username[0],", current: ",t.user.username.length,"). "),b.xb(1),b.oc("hidden",!(null!=e.errors&&e.errors.maxlength)),b.xb(1),b.Mc(" Username is too long (max: ",t.lengths.username[1],", current: ",t.user.username.length,"). "),b.xb(1),b.oc("hidden",!(null!=e.errors&&e.errors.required))}}function Z(e,t){if(1&e&&(b.Ob(0),b.Rb(1,"div",38),b.Rb(2,"div",39),b.Jc(3),b.Pb(),b.Rb(4,"div",39),b.Jc(5),b.Pb(),b.Rb(6,"div",39),b.Jc(7," Password is required. "),b.Pb(),b.Pb(),b.Nb()),2&e){b.gc();const e=b.xc(32),t=b.gc(3);b.xb(1),b.oc("hidden",!(e.touched&&e.invalid)),b.xb(1),b.oc("hidden",!(null!=e.errors&&e.errors.minlength)),b.xb(1),b.Mc(" Password is too short (min: ",t.lengths.password[0],", current: ",t.user.password.length,"). "),b.xb(1),b.oc("hidden",!(null!=e.errors&&e.errors.maxlength)),b.xb(1),b.Mc(" Password is too long (max: ",t.lengths.password[1],", current: ",t.user.password.length,"). "),b.xb(1),b.oc("hidden",!(null!=e.errors&&e.errors.required))}}function Y(e,t){1&e&&(b.Ob(0),b.Jc(1," The username you chose already belongs to another user. "),b.Nb())}function K(e,t){1&e&&(b.Jc(0," There was an error while trying to update your account."),b.Mb(1,"br"),b.Jc(2,"Please try again later. "))}function W(e,t){if(1&e&&(b.Rb(0,"div",40),b.Hc(1,Y,2,0,"ng-container",3),b.Hc(2,K,3,0,"ng-template",null,41,b.Ic),b.Pb()),2&e){const e=b.xc(3),t=b.gc(4);b.xb(1),b.oc("ngIf",t.userExists)("ngIfElse",e)}}function ee(e,t){if(1&e){const e=b.Sb();b.Rb(0,"div",42),b.Mb(1,"fa-icon",35),b.Jc(2," Updating your user data will log you out. "),b.Rb(3,"button",43),b.dc("click",(function(t){return b.zc(e),b.gc(4).storeAlertState("warning")})),b.Jc(4," \xd7 "),b.Pb(),b.Pb()}if(2&e){const e=b.gc(4);b.xb(1),b.oc("icon",e.faExclamationTriangle)}}function te(e,t){1&e&&(b.Rb(0,"div",44),b.Jc(1," Oops, looks like there was an error while trying to delete your user."),b.Mb(2,"br"),b.Jc(3,"Please try again later. "),b.Pb())}function ne(e,t){if(1&e){const e=b.Sb();b.Rb(0,"form",8,9),b.dc("ngSubmit",(function(t){return b.zc(e),b.gc(3).save()})),b.Rb(2,"fieldset"),b.Rb(3,"legend",10),b.Jc(4,"Account"),b.Pb(),b.Hc(5,X,9,1,"div",11),b.Rb(6,"div",12),b.Rb(7,"p",13),b.Rb(8,"span",14),b.Jc(9,"*"),b.Pb(),b.Jc(10," = required "),b.Pb(),b.Rb(11,"div",15),b.Ob(12),b.Rb(13,"label",16),b.Jc(14,"Name"),b.Pb(),b.Rb(15,"input",17,18),b.dc("ngModelChange",(function(t){return b.zc(e),b.gc(3).user.name=t})),b.Pb(),b.Hc(17,G,6,7,"ng-container",19),b.Nb(),b.Ob(18),b.Rb(19,"label",20),b.Jc(20,"Username\xa0"),b.Rb(21,"span",21),b.Jc(22,"*"),b.Pb(),b.Pb(),b.Rb(23,"input",22,23),b.dc("ngModelChange",(function(t){return b.zc(e),b.gc(3).user.username=t})),b.Pb(),b.Hc(25,Q,8,8,"ng-container",19),b.Nb(),b.Ob(26),b.Rb(27,"label",24),b.Jc(28,"Password\xa0"),b.Rb(29,"span",21),b.Jc(30,"*"),b.Pb(),b.Pb(),b.Rb(31,"input",25,26),b.dc("ngModelChange",(function(t){return b.zc(e),b.gc(3).user.password=t})),b.dc("focus",(function(t){return b.zc(e),b.gc(3).pwFocused=!0})),b.dc("blur",(function(t){return b.zc(e),b.gc(3).pwFocused=!1})),b.Pb(),b.Hc(33,Z,8,8,"ng-container",19),b.Nb(),b.Pb(),b.Rb(34,"button",27),b.dc("click",(function(t){return b.zc(e),b.gc(3).sanitizeData()})),b.Jc(35," Save "),b.Pb(),b.Pb(),b.Pb(),b.Hc(36,W,4,2,"div",28),b.Rb(37,"div",29),b.Hc(38,ee,5,1,"div",30),b.Pb(),b.Hc(39,te,4,0,"div",31),b.Rb(40,"div",32),b.Mb(41,"account-update-roms"),b.Rb(42,"account-delete-user-btn",33),b.dc("isError",(function(t){return b.zc(e),b.gc(3).deletionError(t)})),b.Pb(),b.Pb(),b.Pb()}if(2&e){const e=b.xc(1),t=b.gc(3);b.xb(5),b.oc("ngIf",!t.noticeClosed),b.xb(10),b.rc("placeholder","min: ",t.lengths.name[0],", max: ",t.lengths.name[1]," (optional)"),b.oc("ngModel",t.user.name),b.xb(2),b.oc("ngIf",null!==t.user.name),b.xb(6),b.rc("placeholder","min: ",t.lengths.username[0],", max: ",t.lengths.username[1],""),b.oc("ngModel",t.user.username),b.xb(2),b.oc("ngIf",t.user.hasOwnProperty("username")),b.xb(6),b.rc("placeholder","min: ",t.lengths.password[0],", max: ",t.lengths.password[1],""),b.oc("type",t.changePwInputType())("ngModel",t.user.password),b.xb(2),b.oc("ngIf",t.user.hasOwnProperty("password")),b.xb(1),b.oc("disabled",t.firedOff||!e.valid||!(t.user.username||t.user.username.length>0||t.user.password||t.user.password.length>0||t.user.name||t.user.name.length>0)),b.xb(2),b.oc("ngIf",t.updateFail),b.xb(2),b.oc("ngIf",!t.warningClosed),b.xb(1),b.oc("ngIf",t.isErrorDeleting)}}function re(e,t){if(1&e&&b.Hc(0,ne,43,18,"form",7),2&e){const e=b.gc(2);b.oc("ngIf",!e.errLoadingUsr)}}function se(e,t){if(1&e&&(b.Rb(0,"div",2),b.Hc(1,$,5,0,"ng-container",3),b.Hc(2,re,1,1,"ng-template",null,4,b.Ic),b.Pb()),2&e){const e=b.xc(3),t=b.gc();b.xb(1),b.oc("ngIf",t.errLoadingUsr)("ngIfElse",e)}}let ie=(()=>{class e{constructor(e,t){this.userService=e,this.router=t,String.prototype.sanitizeXSS=o.a,String.prototype.removeStringChars=a.a}ngOnInit(){this.lengths=r.b,this.userExists=!1,this.updateFail=!1,this.pwFocused=!1,this.ready=!1,this.firedOff=!1,this.errLoadingUsr=!1,this.isErrorDeleting=!1,this.faExclamationTriangle=i.e,this.faInfoCircle=i.i,c.a.getCookie("user")?(this.userId=JSON.parse(c.a.getCookie("user")).id,this.retrieveUserData(this.userId)):this.errLoadingUsr=!0,d.a.getState("notice_closed")||d.a.setState("notice_closed",!1),u.a.getState("warning_closed")||u.a.setState("warning_closed",!1),this.noticeClosed=d.a.getState("notice_closed"),this.warningClosed=u.a.getState("warning_closed")}ngOnDestroy(){this.userSub.unsubscribe()}retrieveUserData(e){this.userObs$=this.userService.getUser(e),this.userSub=this.userObs$.subscribe(e=>{e.name&&""!==e.name||(e.name=""),e.password="",this.user=e,this.ready=!0},e=>{this.errLoadingUsr=!0,this.ready=!0,l.a.error(e)})}save(){this.firedOff=!0,this.ready=!1,this.user.name&&""!==this.user.name||(this.user.name=null),this.updateUser(this.userId,this.user,["error","user_exists"])}sanitizeData(){this.user.name&&(this.user.name=this.user.name.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.user.username&&(this.user.username=this.user.username.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.user.password&&(this.user.password=this.user.password.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars())}changePwInputType(){return this.pwFocused?"text":"password"}deletionError(e){this.isErrorDeleting=e}storeAlertState(e){switch(e){case"notice":d.a.setState("notice_closed",!0);break;case"warning":u.a.setState("warning_closed",!0);break;default:l.a.error("Unknown alert name.")}}updateUser(e,t,n){this.userService.updateUser(e,t).subscribe(()=>{this.ready=!0,this.userExists=!1,s.a.logout(),this.router.navigate(["/","home"])},e=>{this.ready=!0,this.updateFail=!0,this.firedOff=!1,!0===e[n[0]][n[1]]&&(this.userExists=!0),l.a.error(e)})}}return e.\u0275fac=function(t){return new(t||e)(b.Lb(r.a),b.Lb(h.d))},e.\u0275cmp=b.Fb({type:e,selectors:[["account"]],decls:3,vars:2,consts:[[3,"loading"],["class","container text-center mb-2","id","form-container",4,"ngIf"],["id","form-container",1,"container","text-center","mb-2"],[4,"ngIf","ngIfElse"],["account",""],[1,"mt-1"],["appAlert","","alertType","danger",1,"mt-3"],["name","accountForm","autocomplete","on",3,"ngSubmit",4,"ngIf"],["name","accountForm","autocomplete","on",3,"ngSubmit"],["accountForm","ngForm"],[1,"pt-2","pb-2","text-center"],["class","alert-dismissible fade show text-left","appAlert","","alertType","info","role","alert",4,"ngIf"],["id","border-container",1,"border","rounded"],[1,"mb-0"],[1,"text-danger","font-weight-bold"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","name","name","autocomplete","name","minlength","1","maxlength","100",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["for","username",1,"font-weight-bold","pt-1"],[1,"text-danger"],["type","text","id","username","name","username","autocomplete","username","minlength","3","maxlength","22","required","",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["username","ngModel"],["for","password",1,"font-weight-bold"],["id","password","name","password","autocomplete","new-password","minlength","6","maxlength","256","required","",1,"form-control",3,"type","placeholder","ngModel","ngModelChange","focus","blur"],["password","ngModel"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["class","mt-2","appAlert","","alertType","danger",4,"ngIf"],[1,"mt-3","mb-3"],["class","font-weight-bold alert-dismissible show fade","appAlert","","alertType","warning",4,"ngIf"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],[1,"d-flex","flex-column"],[3,"isError"],["appAlert","","alertType","info","role","alert",1,"alert-dismissible","fade","show","text-left"],[1,"mr-1",3,"icon"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["appAlert","","alertType","danger",1,"mt-2"],["normalErrMsg",""],["appAlert","","alertType","warning",1,"font-weight-bold","alert-dismissible","show","fade"],["type","button","data-dismiss","alert",1,"close","p-2","mr-2",3,"click"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,t){1&e&&(b.Ob(0),b.Mb(1,"spinners-gif-spinner",0),b.Hc(2,se,4,2,"div",1),b.Nb()),2&e&&(b.xb(1),b.oc("loading",!t.ready&&!t.errLoadingUsr),b.xb(1),b.oc("ngIf",t.ready))},directives:[m.a,p.o,g.a,f.u,f.m,f.n,f.a,f.i,f.h,f.l,f.o,f.r,x.a,j,V,A.a],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px)and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px)and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px)and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0)and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})();var oe=n("UTcu"),ae=n("Dat7");const ce=[{path:"",component:ie,canActivate:[oe.a,ae.a]}];let le=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},imports:[[h.h.forChild(ce)],h.h]}),e})();var de=n("WjtB"),ue=n("FUS3");n.d(t,"AccountModule",(function(){return be}));let be=(()=>{class e{}return e.\u0275mod=b.Jb({type:e}),e.\u0275inj=b.Ib({factory:function(t){return new(t||e)},providers:[r.a,z.a],imports:[[p.c,B.g,le,de.a,f.g,A.b,ue.a]]}),e})()}}]);