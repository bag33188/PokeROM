(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{nDdO:function(e,t,n){"use strict";n.r(t);var r=n("qfBg"),s=n("lGQG"),i=n("wHSu"),o=n("Rv5h"),a=n("vuBd"),c=n("QTu/"),l=n("Mb37"),d=n("fXoL"),u=n("tyNb"),b=n("NvMS"),h=n("ofXK"),m=n("FpAq"),p=n("3Pt+"),g=n("siFw"),f=n("yCtX"),y=n("DH7j"),w=n("7o/Q"),x=n("l7GE"),v=n("ZUHj"),I=n("Lhse");class P{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new R(e,this.resultSelector))}}class R extends w.a{constructor(e,t,n=Object.create(null)){super(e),this.iterators=[],this.active=0,this.resultSelector="function"==typeof t?t:null,this.values=n}_next(e){const t=this.iterators;Object(y.a)(e)?t.push(new O(e)):t.push("function"==typeof e[I.a]?new S(e[I.a]()):new C(this.destination,this,e))}_complete(){const e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(let n=0;n<t;n++){let t=e[n];t.stillUnsubscribed?this.destination.add(t.subscribe(t,n)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const e=this.iterators,t=e.length,n=this.destination;for(let i=0;i<t;i++){let t=e[i];if("function"==typeof t.hasValue&&!t.hasValue())return}let r=!1;const s=[];for(let i=0;i<t;i++){let t=e[i],o=t.next();if(t.hasCompleted()&&(r=!0),o.done)return void n.complete();s.push(o.value)}this.resultSelector?this._tryresultSelector(s):n.next(s),r&&n.complete()}_tryresultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}class S{constructor(e){this.iterator=e,this.nextResult=e.next()}hasValue(){return!0}next(){const e=this.nextResult;return this.nextResult=this.iterator.next(),e}hasCompleted(){const e=this.nextResult;return e&&e.done}}class O{constructor(e){this.array=e,this.index=0,this.length=0,this.length=e.length}[I.a](){return this}next(e){const t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class C extends x.a{constructor(e,t,n){super(e),this.parent=t,this.observable=n,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[I.a](){return this}next(){const e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(e,t,n,r,s){this.buffer.push(t),this.parent.checkIterators()}subscribe(e,t){return Object(v.a)(this,this.observable,this,t)}}var M=n("3E0/"),k={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},U={prefix:"far",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]},T=n("Ql4B"),E=n("t52u"),N=n("beNV"),D=n("6NWb");function L(e,t){if(1&e&&(d.Rb(0,"div",3),d.Mb(1,"spinners-bootstrap-spinner",4),d.Pb()),2&e){const e=d.gc();d.xb(1),d.nc("loading",e.loading)}}function A(e,t){if(1&e){const e=d.Sb();d.Rb(0,"button",5),d.dc("click",(function(t){return d.yc(e),d.gc().updateRoms()})),d.Ic(1," Update ROMs "),d.Pb()}}function G(e,t){if(1&e&&(d.Rb(0,"div",6),d.Mb(1,"fa-icon",7),d.Ic(2),d.Pb()),2&e){const e=d.gc();d.nc("alertType",e.romsUpdated?"success":"danger")("@fadeIn",void 0),d.xb(1),d.nc("icon",e.romsUpdated?e.faCheckCircle:e.faTimesCircle),d.xb(1),d.Kc(" ",e.romsUpdated?"ROMs successfully updated!":"Error updating ROMs, please try again later."," ")}}let F=(()=>{class e{constructor(e){this.romsService=e}ngOnInit(){this.faTimesCircle=U,this.faCheckCircle=k,this.showBtn=!0,this.loading=!1,this.deleteRomsObs$=this.romsService.deleteAllRoms().pipe(Object(M.a)(500)),this.addRomsObs$=function(...e){const t=e[e.length-1];return"function"==typeof t&&e.pop(),Object(f.a)(e,void 0).lift(new P(t))}(this.romsService.addCoreRoms().pipe(Object(M.a)(1e3)),this.romsService.addRomHacks().pipe(Object(M.a)(1e3)))}ngOnDestroy(){this.romsUpdated&&(this.deleteRomsSub.unsubscribe(),this.addRomsSub.unsubscribe())}updateRoms(){this.showBtn=!1,this.loading=!0,this.deleteRoms(this.addRoms.bind(this,e))}deleteRoms(e){this.deleteRomsSub=this.deleteRomsObs$.subscribe({error:e=>{this.loading=!1,this.romsUpdated=!1,l.a.error(e)},complete:()=>e()})}addRoms(){this.addRomsSub=this.addRomsObs$.subscribe({error:e=>{this.loading=!1,l.a.error(e)},complete:()=>{this.romsUpdated=!0,this.loading=!1}})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(E.a))},e.\u0275cmp=d.Fb({type:e,selectors:[["account-update-roms"]],decls:4,vars:3,consts:[["id","update-roms-spinner-container","class","mb-3",4,"ngIf"],["class","mb-3","type","button","appBtn","","btnType","warning",3,"click",4,"ngIf"],["id","roms-updated-alert-container","class","p-2","appAlert","",3,"alertType",4,"ngIf"],["id","update-roms-spinner-container",1,"mb-3"],["type","border","color","primary",3,"loading"],["type","button","appBtn","","btnType","warning",1,"mb-3",3,"click"],["id","roms-updated-alert-container","appAlert","",1,"p-2",3,"alertType"],[1,"mr-1",3,"icon"]],template:function(e,t){1&e&&(d.Ob(0),d.Gc(1,L,2,1,"div",0),d.Gc(2,A,2,0,"button",1),d.Gc(3,G,3,4,"div",2),d.Nb()),2&e&&(d.xb(1),d.nc("ngIf",t.loading),d.xb(1),d.nc("ngIf",t.showBtn),d.xb(1),d.nc("ngIf",void 0!==t.romsUpdated))},directives:[h.o,N.a,g.a,m.a,D.a],styles:["#update-roms-spinner-container[_ngcontent-%COMP%]{padding:.11rem}#roms-updated-alert-container[_ngcontent-%COMP%]{margin-bottom:.75rem}"],data:{animation:[T.a]}}),e})();var _=n("1kSV");let j=(()=>{class e{constructor(e,t,n){this.modal=e,this.userService=t,this.router=n,this.isErrorDeleting=new d.m,this.loading=new d.m,this.firedOff=new d.m}ngOnInit(){this.btnDisabled=!1}deleteCurrentUser(){this.firedOff.emit(!0),this.btnDisabled=!0,this.userService.deleteUser(JSON.parse(c.a.getCookie("user")).id).subscribe(()=>{this.isErrorDeleting.emit(!1),this.loading.emit(!1),this.router.navigate(["/","home"]),s.a.logout()},e=>{this.btnDisabled=!1,this.loading.emit(!1),this.firedOff.emit(!1),this.isErrorDeleting.emit(!0),l.a.error(e)}),this.closeModal()}closeModal(){this.modal.close("Ok click")}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(_.c),d.Lb(r.a),d.Lb(u.c))},e.\u0275cmp=d.Fb({type:e,selectors:[["account-delete-user-modal"]],inputs:{username:"username"},outputs:{isErrorDeleting:"isErrorDeleting",loading:"loading",firedOff:"firedOff"},decls:25,vars:4,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"hidden"],[1,"modal-footer","justify-content-start"],["type","button","appBtn","","btnType","danger",3,"disabled","click"],["type","button","appBtn","","btnType","secondary-outline",3,"click"]],template:function(e,t){1&e&&(d.Ob(0),d.Rb(1,"div",0),d.Rb(2,"h4",1),d.Ic(3,"Account deletion"),d.Pb(),d.Rb(4,"button",2),d.dc("click",(function(e){return t.modal.dismiss("Cross click")})),d.Rb(5,"span",3),d.Ic(6,"\xd7"),d.Pb(),d.Pb(),d.Pb(),d.Rb(7,"div",4),d.Rb(8,"p"),d.Rb(9,"strong"),d.Ic(10,"Are you sure you want to delete your own account "),d.Rb(11,"span",5),d.Ic(12,"("),d.Pb(),d.Ic(13),d.Rb(14,"span",5),d.Ic(15,")"),d.Pb(),d.Ic(16,"?"),d.Pb(),d.Pb(),d.Rb(17,"p"),d.Rb(18,"span"),d.Ic(19,"This operation cannot be undone."),d.Pb(),d.Pb(),d.Pb(),d.Rb(20,"div",6),d.Rb(21,"button",7),d.dc("click",(function(e){return t.deleteCurrentUser()})),d.Ic(22," Ok "),d.Pb(),d.Rb(23,"button",8),d.dc("click",(function(e){return t.modal.dismiss("cancel click")})),d.Ic(24," Cancel "),d.Pb(),d.Pb(),d.Nb()),2&e&&(d.xb(11),d.nc("hidden",!t.username),d.xb(2),d.Jc(t.username||""),d.xb(1),d.nc("hidden",!t.username),d.xb(7),d.nc("disabled",t.btnDisabled))},directives:[g.a],styles:[".modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:red}"]}),e})(),B=(()=>{class e{constructor(e){this.modalService=e,this.isError=new d.m}ngOnInit(){this.loading=!1,this.btnText="Delete User!"}confirmDeletion(){const e=this.modalService.open(j,{centered:!0});e.componentInstance.loading.subscribe(e=>{this.loading=e}),e.componentInstance.isErrorDeleting.subscribe(e=>{this.isError.emit(e)}),e.componentInstance.firedOff.subscribe(e=>{this.firedOff=e}),e.componentInstance.username=JSON.parse(c.a.getCookie("user")).username}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(_.g))},e.\u0275cmp=d.Fb({type:e,selectors:[["account-delete-user-btn"]],outputs:{isError:"isError"},decls:4,vars:3,consts:[[3,"loading"],["id","delete-user-btn","type","button","appBtn","","btnType","danger",3,"disabled","click"]],template:function(e,t){1&e&&(d.Ob(0),d.Mb(1,"spinners-gif-spinner",0),d.Rb(2,"button",1),d.dc("click",(function(e){return t.confirmDeletion()})),d.Ic(3),d.Pb(),d.Nb()),2&e&&(d.xb(1),d.nc("loading",t.loading),d.xb(1),d.nc("disabled",t.firedOff),d.xb(1),d.Kc(" ",t.btnText," "))},directives:[b.a,g.a],styles:["#delete-user-btn[_ngcontent-%COMP%]{cursor:pointer!important;display:inline-block!important}"]}),e})();function q(e,t){1&e&&(d.Ob(0),d.Rb(1,"h4",5),d.Ic(2,"Account"),d.Pb(),d.Rb(3,"div",6),d.Ic(4," There was an error while trying to load your user information. Please try again later. "),d.Pb(),d.Nb())}function z(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div",34),d.Ic(1," If you do not enter a name, your name ("),d.Rb(2,"b"),d.Ic(3,"not"),d.Pb(),d.Ic(4," your user) will be deleted from the database. "),d.Rb(5,"button",35),d.dc("click",(function(t){return d.yc(e),d.gc(4).storeAlertState("notice")})),d.Rb(6,"span",36),d.Ic(7,"\xd7"),d.Pb(),d.Pb(),d.Pb()}}function J(e,t){if(1&e&&(d.Ob(0),d.Rb(1,"div",37),d.Rb(2,"div",38),d.Ic(3),d.Pb(),d.Rb(4,"div",38),d.Ic(5),d.Pb(),d.Pb(),d.Nb()),2&e){d.gc();const e=d.wc(16),t=d.gc(3);d.xb(1),d.nc("hidden",!(e.touched&&e.invalid)),d.xb(1),d.nc("hidden",!(null!=e.errors&&e.errors.minlength)),d.xb(1),d.Lc(" Name is too short (min: ",t.lengths.name[0],", current: ",t.user.name.length,"). "),d.xb(1),d.nc("hidden",!(null!=e.errors&&e.errors.maxlength)),d.xb(1),d.Lc(" Name is too long (max: ",t.lengths.name[1],", current: ",t.user.name.length,"). ")}}function V(e,t){if(1&e&&(d.Ob(0),d.Rb(1,"div",37),d.Rb(2,"div",38),d.Ic(3),d.Pb(),d.Rb(4,"div",38),d.Ic(5),d.Pb(),d.Rb(6,"div",38),d.Ic(7," Username is required. "),d.Pb(),d.Pb(),d.Nb()),2&e){d.gc();const e=d.wc(24),t=d.gc(3);d.xb(1),d.nc("hidden",!(e.touched&&e.invalid)),d.xb(1),d.nc("hidden",!(null!=e.errors&&e.errors.minlength)),d.xb(1),d.Lc(" Username is too short (min: ",t.lengths.username[0],", current: ",t.user.username.length,"). "),d.xb(1),d.nc("hidden",!(null!=e.errors&&e.errors.maxlength)),d.xb(1),d.Lc(" Username is too long (max: ",t.lengths.username[1],", current: ",t.user.username.length,"). "),d.xb(1),d.nc("hidden",!(null!=e.errors&&e.errors.required))}}function X(e,t){if(1&e&&(d.Ob(0),d.Rb(1,"div",37),d.Rb(2,"div",38),d.Ic(3),d.Pb(),d.Rb(4,"div",38),d.Ic(5),d.Pb(),d.Rb(6,"div",38),d.Ic(7," Password is required. "),d.Pb(),d.Pb(),d.Nb()),2&e){d.gc();const e=d.wc(32),t=d.gc(3);d.xb(1),d.nc("hidden",!(e.touched&&e.invalid)),d.xb(1),d.nc("hidden",!(null!=e.errors&&e.errors.minlength)),d.xb(1),d.Lc(" Password is too short (min: ",t.lengths.password[0],", current: ",t.user.password.length,"). "),d.xb(1),d.nc("hidden",!(null!=e.errors&&e.errors.maxlength)),d.xb(1),d.Lc(" Password is too long (max: ",t.lengths.password[1],", current: ",t.user.password.length,"). "),d.xb(1),d.nc("hidden",!(null!=e.errors&&e.errors.required))}}function H(e,t){1&e&&(d.Ob(0),d.Ic(1," The username you chose already belongs to another user. "),d.Nb())}function $(e,t){1&e&&(d.Ic(0," There was an error while trying to update your account."),d.Mb(1,"br"),d.Ic(2,"Please try again later. "))}function Q(e,t){if(1&e&&(d.Rb(0,"div",39),d.Gc(1,H,2,0,"ng-container",3),d.Gc(2,$,3,0,"ng-template",null,40,d.Hc),d.Pb()),2&e){const e=d.wc(3),t=d.gc(4);d.xb(1),d.nc("ngIf",t.userExists)("ngIfElse",e)}}function K(e,t){if(1&e){const e=d.Sb();d.Rb(0,"div",41),d.Mb(1,"fa-icon",42),d.Ic(2," Updating your user data will log you out. "),d.Rb(3,"button",43),d.dc("click",(function(t){return d.yc(e),d.gc(4).storeAlertState("warning")})),d.Ic(4," \xd7 "),d.Pb(),d.Pb()}if(2&e){const e=d.gc(4);d.xb(1),d.nc("icon",e.faExclamationTriangle)}}function W(e,t){1&e&&(d.Rb(0,"div",44),d.Ic(1," Oops, looks like there was an error while trying to delete your user."),d.Mb(2,"br"),d.Ic(3,"Please try again later. "),d.Pb())}function Z(e,t){if(1&e){const e=d.Sb();d.Rb(0,"form",8,9),d.dc("ngSubmit",(function(t){return d.yc(e),d.gc(3).save()})),d.Rb(2,"fieldset"),d.Rb(3,"legend",10),d.Ic(4,"Account"),d.Pb(),d.Gc(5,z,8,0,"div",11),d.Rb(6,"div",12),d.Rb(7,"p",13),d.Rb(8,"span",14),d.Ic(9,"*"),d.Pb(),d.Ic(10," = required "),d.Pb(),d.Rb(11,"div",15),d.Ob(12),d.Rb(13,"label",16),d.Ic(14,"Name"),d.Pb(),d.Rb(15,"input",17,18),d.dc("ngModelChange",(function(t){return d.yc(e),d.gc(3).user.name=t})),d.Pb(),d.Gc(17,J,6,7,"ng-container",19),d.Nb(),d.Ob(18),d.Rb(19,"label",20),d.Ic(20,"Username\xa0"),d.Rb(21,"span",21),d.Ic(22,"*"),d.Pb(),d.Pb(),d.Rb(23,"input",22,23),d.dc("ngModelChange",(function(t){return d.yc(e),d.gc(3).user.username=t})),d.Pb(),d.Gc(25,V,8,8,"ng-container",19),d.Nb(),d.Ob(26),d.Rb(27,"label",24),d.Ic(28,"Password\xa0"),d.Rb(29,"span",21),d.Ic(30,"*"),d.Pb(),d.Pb(),d.Rb(31,"input",25,26),d.dc("ngModelChange",(function(t){return d.yc(e),d.gc(3).user.password=t})),d.dc("focus",(function(t){return d.yc(e),d.gc(3).pwFocused=!0})),d.dc("blur",(function(t){return d.yc(e),d.gc(3).pwFocused=!1})),d.Pb(),d.Gc(33,X,8,8,"ng-container",19),d.Nb(),d.Pb(),d.Rb(34,"button",27),d.dc("click",(function(t){return d.yc(e),d.gc(3).sanitizeData()})),d.Ic(35," Save "),d.Pb(),d.Pb(),d.Pb(),d.Gc(36,Q,4,2,"div",28),d.Rb(37,"div",29),d.Gc(38,K,5,1,"div",30),d.Pb(),d.Gc(39,W,4,0,"div",31),d.Rb(40,"div",32),d.Mb(41,"account-update-roms"),d.Rb(42,"account-delete-user-btn",33),d.dc("isError",(function(t){return d.yc(e),d.gc(3).deletionError(t)})),d.Pb(),d.Pb(),d.Pb()}if(2&e){const e=d.wc(1),t=d.gc(3);d.xb(5),d.nc("ngIf",!t.noticeClosed),d.xb(10),d.qc("placeholder","min: ",t.lengths.name[0],", max: ",t.lengths.name[1]," (optional)"),d.nc("ngModel",t.user.name),d.xb(2),d.nc("ngIf",null!==t.user.name),d.xb(6),d.qc("placeholder","min: ",t.lengths.username[0],", max: ",t.lengths.username[1],""),d.nc("ngModel",t.user.username),d.xb(2),d.nc("ngIf",t.user.hasOwnProperty("username")),d.xb(6),d.qc("placeholder","min: ",t.lengths.password[0],", max: ",t.lengths.password[1],""),d.nc("type",t.changePwInputType())("ngModel",t.user.password),d.xb(2),d.nc("ngIf",t.user.hasOwnProperty("password")),d.xb(1),d.nc("disabled",t.firedOff||!e.valid||!(t.user.username||t.user.username.length>0||t.user.password||t.user.password.length>0||t.user.name||t.user.name.length>0)),d.xb(2),d.nc("ngIf",t.updateFail),d.xb(2),d.nc("ngIf",!t.warningClosed),d.xb(1),d.nc("ngIf",t.isErrorDeleting)}}function Y(e,t){if(1&e&&d.Gc(0,Z,43,18,"form",7),2&e){const e=d.gc(2);d.nc("ngIf",!e.errLoadingUsr)}}function ee(e,t){if(1&e&&(d.Rb(0,"div",2),d.Gc(1,q,5,0,"ng-container",3),d.Gc(2,Y,1,1,"ng-template",null,4,d.Hc),d.Pb()),2&e){const e=d.wc(3),t=d.gc();d.xb(1),d.nc("ngIf",t.errLoadingUsr)("ngIfElse",e)}}let te=(()=>{class e{constructor(e,t){this.userService=e,this.router=t,this.updateFail=!1,this.ready=!1,this.pwFocused=!1,this.errLoadingUsr=!1,this.userExists=!1,this.lengths=r.b,String.prototype.sanitizeXSS=o.a,String.prototype.removeStringChars=a.a}ngOnInit(){this.firedOff=!1,this.isErrorDeleting=!1,this.faExclamationTriangle=i.e,c.a.getCookie("user")?(this.userId=JSON.parse(c.a.getCookie("user")).id,this.retrieveUserData(this.userId)):this.errLoadingUsr=!0,localStorage.getItem("noticeClosed")||localStorage.setItem("noticeClosed","false"),sessionStorage.getItem("warningClosed")||sessionStorage.setItem("warningClosed","false"),this.noticeClosed=JSON.parse(localStorage.getItem("noticeClosed")),this.warningClosed=JSON.parse(sessionStorage.getItem("warningClosed"))}ngOnDestroy(){this.userSub.unsubscribe()}retrieveUserData(e){this.userObs$=this.userService.getUser(e),this.userSub=this.userObs$.subscribe(e=>{e.name&&""!==e.name||(e.name=""),e.password="",this.user=e,this.ready=!0},e=>{this.errLoadingUsr=!0,this.ready=!0,l.a.error(e)})}save(){this.firedOff=!0,this.ready=!1,this.user.name&&""!==this.user.name||(this.user.name=null),this.updateUser(this.userId,this.user,["error","user_exists"])}sanitizeData(){this.user.name&&(this.user.name=this.user.name.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.user.username&&(this.user.username=this.user.username.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.user.password&&(this.user.password=this.user.password.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars())}changePwInputType(){return this.pwFocused?"text":"password"}deletionError(e){this.isErrorDeleting=e}storeAlertState(e){switch(e){case"notice":localStorage.setItem("noticeClosed","true");break;case"warning":sessionStorage.setItem("warningClosed","true");break;default:l.a.error("Unknown alert name.")}}updateUser(e,t,n){this.userService.updateUser(e,t).subscribe(()=>{this.ready=!0,this.userExists=!1,s.a.logout(),this.router.navigate(["/","home"])},e=>{this.ready=!0,this.updateFail=!0,this.firedOff=!1,!0===e[n[0]][n[1]]&&(this.userExists=!0),l.a.error(e)})}}return e.\u0275fac=function(t){return new(t||e)(d.Lb(r.a),d.Lb(u.c))},e.\u0275cmp=d.Fb({type:e,selectors:[["account"]],decls:3,vars:2,consts:[[3,"loading"],["class","container text-center mb-2","id","form-container",4,"ngIf"],["id","form-container",1,"container","text-center","mb-2"],[4,"ngIf","ngIfElse"],["account",""],[1,"mt-1"],["appAlert","","alertType","danger",1,"mt-3"],["name","accountForm","autocomplete","on",3,"ngSubmit",4,"ngIf"],["name","accountForm","autocomplete","on",3,"ngSubmit"],["accountForm","ngForm"],[1,"pt-2","pb-2","text-center"],["class","alert-dismissible fade show text-left","appAlert","","alertType","info","role","alert",4,"ngIf"],["id","border-container",1,"border","rounded"],[1,"mb-0"],[1,"text-danger","font-weight-bold"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","name","name","autocomplete","name","minlength","1","maxlength","100",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["for","username",1,"font-weight-bold","pt-1"],[1,"text-danger"],["type","text","id","username","name","username","autocomplete","username","minlength","3","maxlength","22","required","",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["username","ngModel"],["for","password",1,"font-weight-bold"],["id","password","name","password","autocomplete","new-password","minlength","6","maxlength","256","required","",1,"form-control",3,"type","placeholder","ngModel","ngModelChange","focus","blur"],["password","ngModel"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["class","mt-2","appAlert","","alertType","danger",4,"ngIf"],[1,"mt-3","mb-3"],["class","font-weight-bold alert-dismissible show fade p-2","appAlert","","alertType","warning",4,"ngIf"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],[1,"d-flex","flex-column"],[3,"isError"],["appAlert","","alertType","info","role","alert",1,"alert-dismissible","fade","show","text-left"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["appAlert","","alertType","danger",1,"mt-2"],["normalErrMsg",""],["appAlert","","alertType","warning",1,"font-weight-bold","alert-dismissible","show","fade","p-2"],[1,"mr-1",3,"icon"],["type","button","data-dismiss","alert",1,"close","p-2",3,"click"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,t){1&e&&(d.Ob(0),d.Mb(1,"spinners-gif-spinner",0),d.Gc(2,ee,4,2,"div",1),d.Nb()),2&e&&(d.xb(1),d.nc("loading",!t.ready&&!t.errLoadingUsr),d.xb(1),d.nc("ngIf",t.ready))},directives:[b.a,h.o,m.a,p.u,p.m,p.n,p.a,p.i,p.h,p.l,p.o,p.r,g.a,F,B,D.a],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px)and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px)and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px)and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0)and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})();var ne=n("UTcu"),re=n("Dat7");const se=[{path:"",component:te,canActivate:[ne.a,re.a]}];let ie=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},imports:[[u.g.forChild(se)],u.g]}),e})();var oe=n("WjtB"),ae=n("FUS3");n.d(t,"AccountModule",(function(){return ce}));let ce=(()=>{class e{}return e.\u0275mod=d.Jb({type:e}),e.\u0275inj=d.Ib({factory:function(t){return new(t||e)},providers:[r.a,E.a],imports:[[h.c,_.h,ie,oe.a,p.g,D.b,ae.a]]}),e})()}}]);