(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{nDdO:function(e,t,n){"use strict";n.r(t);var r=n("ofXK"),s=n("1kSV"),i=n("tyNb"),o=n("qfBg"),a=n("lGQG"),c=n("wHSu"),l=n("Rv5h"),d=n("vuBd"),u=n("QTu/"),b=n("Mb37"),h=n("DRYZ"),p=n("yZ9z"),g=n("fXoL"),m=n("NvMS"),f=n("FpAq"),y=n("3Pt+"),w=n("siFw"),v=n("t52u"),I=n("yCtX"),R=n("DH7j"),x=n("7o/Q"),S=n("l7GE"),z=n("ZUHj"),C=n("Lhse");class O{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new Q(e,this.resultSelector))}}class Q extends x.a{constructor(e,t,n=Object.create(null)){super(e),this.iterators=[],this.active=0,this.resultSelector="function"==typeof t?t:null,this.values=n}_next(e){const t=this.iterators;Object(R.a)(e)?t.push(new M(e)):t.push("function"==typeof e[C.a]?new k(e[C.a]()):new T(this.destination,this,e))}_complete(){const e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(let n=0;n<t;n++){let t=e[n];t.stillUnsubscribed?this.destination.add(t.subscribe(t,n)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const e=this.iterators,t=e.length,n=this.destination;for(let i=0;i<t;i++){let t=e[i];if("function"==typeof t.hasValue&&!t.hasValue())return}let r=!1;const s=[];for(let i=0;i<t;i++){let t=e[i],o=t.next();if(t.hasCompleted()&&(r=!0),o.done)return void n.complete();s.push(o.value)}this.resultSelector?this._tryresultSelector(s):n.next(s),r&&n.complete()}_tryresultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}class k{constructor(e){this.iterator=e,this.nextResult=e.next()}hasValue(){return!0}next(){const e=this.nextResult;return this.nextResult=this.iterator.next(),e}hasCompleted(){const e=this.nextResult;return e&&e.done}}class M{constructor(e){this.array=e,this.index=0,this.length=0,this.length=e.length}[C.a](){return this}next(e){const t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class T extends S.a{constructor(e,t,n){super(e),this.parent=t,this.observable=n,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[C.a](){return this}next(){const e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(e,t,n,r,s){this.buffer.push(t),this.parent.checkIterators()}subscribe(e,t){return Object(z.a)(this,this.observable,this,t)}}var P=n("SxV6"),U=n("3E0/"),E=n("IzEk"),_=n("twK/"),D=n("Ql4B");let G=(()=>{class e{constructor(){}ngOnInit(){!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses={[this.type]:!0,[this.color]:!0,spacing:null!=this.spaced&&!0===this.spaced})}setType(){this.type=this.getType()}setColor(){this.color=this.getColor()}getType(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:b.a.error("Invalid type.")}else b.a.error("Type must be a string.")}getColor(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:b.a.error("Invalid color.")}else b.a.error("Color must be a string.")}checkForErrors(){return this.spinnerType?this.spinnerColor?null==this.loading?(b.a.error("Loading property is required."),!0):null!=this.spaced&&"boolean"!=typeof this.spaced?(b.a.error("Spaced property must be a boolean."),!0):!(!this.customSize||"number"==typeof this.customSize||(b.a.error("Custom size property must be a number data-type."),0)):(b.a.error("Color is required."),!0):(b.a.error("Type is required."),!0)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Gb({type:e,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:6,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(e,t){1&e&&(g.Rb(0,"div",0),g.Rb(1,"span",1),g.Ic(2,"Loading..."),g.Qb(),g.Qb()),2&e&&(g.Fc("height",t.customSize?t.customSize:32,"px")("width",t.customSize?t.customSize:32,"px"),g.oc("ngClass",t.ngClasses)("hidden",!t.loading))},directives:[r.m],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),e})();var A=n("6NWb");function N(e,t){if(1&e&&(g.Rb(0,"div",3),g.Nb(1,"spinners-bootstrap-spinner",4),g.Qb()),2&e){const e=g.gc();g.zb(1),g.oc("loading",e.loading)}}function F(e,t){if(1&e){const e=g.Sb();g.Rb(0,"button",5),g.dc("click",(function(t){return g.zc(e),g.gc().updateRoms()})),g.Ic(1," Update ROMs "),g.Qb()}}function j(e,t){if(1&e&&(g.Rb(0,"div",6),g.Nb(1,"fa-icon",7),g.Ic(2),g.Qb()),2&e){const e=g.gc();g.oc("alertType",e.romsUpdated?"success":"danger")("@fadeIn",void 0),g.zb(1),g.oc("icon",e.romsUpdated?e.faCheckCircle:e.faTimesCircle),g.zb(1),g.Kc(" ",e.romsUpdated?"ROMs successfully updated!":"Error updating ROMs, please try again later."," ")}}let L=(()=>{class e{constructor(e){this.romsService=e}ngOnInit(){this.faTimesCircle=_.c,this.faCheckCircle=_.a,this.showBtn=!0,this.loading=!1,this.deleteRomsObs$=this.romsService.deleteAllRoms().pipe(Object(P.a)(),Object(U.a)(500)),this.addRomsObs$=function(...e){const t=e[e.length-1];return"function"==typeof t&&e.pop(),Object(I.a)(e,void 0).lift(new O(t))}(this.romsService.addCoreRoms().pipe(Object(E.a)(1),Object(U.a)(800)),this.romsService.addRomHacks().pipe(Object(E.a)(1),Object(U.a)(800)))}ngOnDestroy(){this.romsUpdated&&(this.deleteRomsSub.unsubscribe(),this.addRomsSub.unsubscribe())}updateRoms(){this.showBtn=!1,this.loading=!0,this.deleteRoms(this.addRoms.bind(this,e))}deleteRoms(e){this.deleteRomsSub=this.deleteRomsObs$.subscribe({error:e=>{this.loading=!1,this.romsUpdated=!1,b.a.error(e)},complete:()=>e()})}addRoms(){this.addRomsSub=this.addRomsObs$.subscribe({error:e=>{this.loading=!1,b.a.error(e)},complete:()=>{this.romsUpdated=!0,this.loading=!1}})}}return e.\u0275fac=function(t){return new(t||e)(g.Mb(v.a))},e.\u0275cmp=g.Gb({type:e,selectors:[["account-update-roms"]],decls:4,vars:3,consts:[["id","update-roms-spinner-container","class","mb-3",4,"ngIf"],["class","mb-3","type","button","appBtn","","btnType","warning",3,"click",4,"ngIf"],["id","roms-updated-alert-container","class","p-2","appAlert","",3,"alertType",4,"ngIf"],["id","update-roms-spinner-container",1,"mb-3"],["type","border","color","primary",3,"loading"],["type","button","appBtn","","btnType","warning",1,"mb-3",3,"click"],["id","roms-updated-alert-container","appAlert","",1,"p-2",3,"alertType"],[1,"mr-1",3,"icon"]],template:function(e,t){1&e&&(g.Pb(0),g.Gc(1,N,2,1,"div",0),g.Gc(2,F,2,0,"button",1),g.Gc(3,j,3,4,"div",2),g.Ob()),2&e&&(g.zb(1),g.oc("ngIf",t.loading),g.zb(1),g.oc("ngIf",t.showBtn),g.zb(1),g.oc("ngIf",void 0!==t.romsUpdated))},directives:[r.o,G,w.a,f.a,A.a],styles:["#update-roms-spinner-container[_ngcontent-%COMP%]{padding:.11rem}#roms-updated-alert-container[_ngcontent-%COMP%]{margin-bottom:.75rem}"],data:{animation:[D.a]}}),e})(),B=(()=>{class e{constructor(e,t,n){this.modal=e,this.userService=t,this.router=n,this.isErrorDeleting=new g.n,this.loading=new g.n,this.firedOff=new g.n}ngOnInit(){this.btnDisabled=!1}deleteCurrentUser(){this.firedOff.emit(!0),this.btnDisabled=!0,this.userService.deleteUser(JSON.parse(u.a.getCookie("user")).id).subscribe(()=>{this.isErrorDeleting.emit(!1),this.loading.emit(!1),this.router.navigate(["/","home"]),a.a.logout()},e=>{this.btnDisabled=!1,this.loading.emit(!1),this.firedOff.emit(!1),this.isErrorDeleting.emit(!0),b.a.error(e)}),this.closeModal()}closeModal(){this.modal.close("Ok click")}}return e.\u0275fac=function(t){return new(t||e)(g.Mb(s.c),g.Mb(o.a),g.Mb(i.d))},e.\u0275cmp=g.Gb({type:e,selectors:[["account-delete-user-modal"]],inputs:{username:"username"},outputs:{isErrorDeleting:"isErrorDeleting",loading:"loading",firedOff:"firedOff"},decls:25,vars:4,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"hidden"],[1,"modal-footer","justify-content-start"],["type","button","appBtn","","btnType","danger",3,"disabled","click"],["type","button","appBtn","","btnType","secondary-outline",3,"click"]],template:function(e,t){1&e&&(g.Pb(0),g.Rb(1,"div",0),g.Rb(2,"h4",1),g.Ic(3,"Account deletion"),g.Qb(),g.Rb(4,"button",2),g.dc("click",(function(e){return t.modal.dismiss("Cross click")})),g.Rb(5,"span",3),g.Ic(6,"\xd7"),g.Qb(),g.Qb(),g.Qb(),g.Rb(7,"div",4),g.Rb(8,"p"),g.Rb(9,"strong"),g.Ic(10,"Are you sure you want to delete your own account "),g.Rb(11,"span",5),g.Ic(12,"("),g.Qb(),g.Ic(13),g.Rb(14,"span",5),g.Ic(15,")"),g.Qb(),g.Ic(16,"?"),g.Qb(),g.Qb(),g.Rb(17,"p"),g.Rb(18,"span"),g.Ic(19,"This operation cannot be undone."),g.Qb(),g.Qb(),g.Qb(),g.Rb(20,"div",6),g.Rb(21,"button",7),g.dc("click",(function(e){return t.deleteCurrentUser()})),g.Ic(22," Ok "),g.Qb(),g.Rb(23,"button",8),g.dc("click",(function(e){return t.modal.dismiss("cancel click")})),g.Ic(24," Cancel "),g.Qb(),g.Qb(),g.Ob()),2&e&&(g.zb(11),g.oc("hidden",!t.username),g.zb(2),g.Jc(t.username||""),g.zb(1),g.oc("hidden",!t.username),g.zb(7),g.oc("disabled",t.btnDisabled))},directives:[w.a],styles:[".modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:red}"]}),e})(),q=(()=>{class e{constructor(e){this.modalService=e,this.isError=new g.n}ngOnInit(){this.loading=!1,this.btnText="Delete User!"}confirmDeletion(){const e=this.modalService.open(B,{centered:!0});e.componentInstance.loading.subscribe(e=>{this.loading=e}),e.componentInstance.isErrorDeleting.subscribe(e=>{this.isError.emit(e)}),e.componentInstance.firedOff.subscribe(e=>{this.firedOff=e}),e.componentInstance.username=JSON.parse(u.a.getCookie("user")).username}}return e.\u0275fac=function(t){return new(t||e)(g.Mb(s.f))},e.\u0275cmp=g.Gb({type:e,selectors:[["account-delete-user-btn"]],outputs:{isError:"isError"},decls:4,vars:3,consts:[[3,"loading"],["id","delete-user-btn","type","button","appBtn","","btnType","danger",3,"disabled","click"]],template:function(e,t){1&e&&(g.Pb(0),g.Nb(1,"spinners-gif-spinner",0),g.Rb(2,"button",1),g.dc("click",(function(e){return t.confirmDeletion()})),g.Ic(3),g.Qb(),g.Ob()),2&e&&(g.zb(1),g.oc("loading",t.loading),g.zb(1),g.oc("disabled",t.firedOff),g.zb(1),g.Kc(" ",t.btnText," "))},directives:[m.a,w.a],styles:["#delete-user-btn[_ngcontent-%COMP%]{cursor:pointer!important;display:inline-block!important}"]}),e})();function J(e,t){1&e&&(g.Pb(0),g.Rb(1,"h4",5),g.Ic(2,"Account"),g.Qb(),g.Rb(3,"div",6),g.Ic(4," There was an error while trying to load your user information. Please try again later. "),g.Qb(),g.Ob())}function V(e,t){if(1&e){const e=g.Sb();g.Rb(0,"div",34),g.Nb(1,"fa-icon",35),g.Ic(2,"\xa0If you do not enter a name, your name ("),g.Rb(3,"b"),g.Ic(4,"not your user"),g.Qb(),g.Ic(5,") will be deleted from the database. "),g.Rb(6,"button",36),g.dc("click",(function(t){return g.zc(e),g.gc(4).storeAlertState("notice")})),g.Rb(7,"span",37),g.Ic(8,"\xd7"),g.Qb(),g.Qb(),g.Qb()}if(2&e){const e=g.gc(4);g.zb(1),g.oc("icon",e.faInfoCircle)}}function X(e,t){if(1&e&&(g.Pb(0),g.Rb(1,"div",38),g.Rb(2,"div",39),g.Ic(3),g.Qb(),g.Rb(4,"div",39),g.Ic(5),g.Qb(),g.Qb(),g.Ob()),2&e){g.gc();const e=g.xc(16),t=g.gc(3);g.zb(1),g.oc("hidden",!(e.touched&&e.invalid)),g.zb(1),g.oc("hidden",!(null!=e.errors&&e.errors.minlength)),g.zb(1),g.Lc(" Name is too short (min: ",t.lengths.name[0],", current: ",t.user.name.length,"). "),g.zb(1),g.oc("hidden",!(null!=e.errors&&e.errors.maxlength)),g.zb(1),g.Lc(" Name is too long (max: ",t.lengths.name[1],", current: ",t.user.name.length,"). ")}}function H(e,t){if(1&e&&(g.Pb(0),g.Rb(1,"div",38),g.Rb(2,"div",39),g.Ic(3),g.Qb(),g.Rb(4,"div",39),g.Ic(5),g.Qb(),g.Rb(6,"div",39),g.Ic(7," Username is required. "),g.Qb(),g.Qb(),g.Ob()),2&e){g.gc();const e=g.xc(24),t=g.gc(3);g.zb(1),g.oc("hidden",!(e.touched&&e.invalid)),g.zb(1),g.oc("hidden",!(null!=e.errors&&e.errors.minlength)),g.zb(1),g.Lc(" Username is too short (min: ",t.lengths.username[0],", current: ",t.user.username.length,"). "),g.zb(1),g.oc("hidden",!(null!=e.errors&&e.errors.maxlength)),g.zb(1),g.Lc(" Username is too long (max: ",t.lengths.username[1],", current: ",t.user.username.length,"). "),g.zb(1),g.oc("hidden",!(null!=e.errors&&e.errors.required))}}function K(e,t){if(1&e&&(g.Pb(0),g.Rb(1,"div",38),g.Rb(2,"div",39),g.Ic(3),g.Qb(),g.Rb(4,"div",39),g.Ic(5),g.Qb(),g.Rb(6,"div",39),g.Ic(7," Password is required. "),g.Qb(),g.Qb(),g.Ob()),2&e){g.gc();const e=g.xc(32),t=g.gc(3);g.zb(1),g.oc("hidden",!(e.touched&&e.invalid)),g.zb(1),g.oc("hidden",!(null!=e.errors&&e.errors.minlength)),g.zb(1),g.Lc(" Password is too short (min: ",t.lengths.password[0],", current: ",t.user.password.length,"). "),g.zb(1),g.oc("hidden",!(null!=e.errors&&e.errors.maxlength)),g.zb(1),g.Lc(" Password is too long (max: ",t.lengths.password[1],", current: ",t.user.password.length,"). "),g.zb(1),g.oc("hidden",!(null!=e.errors&&e.errors.required))}}function $(e,t){1&e&&(g.Pb(0),g.Ic(1," The username you chose already belongs to another user. "),g.Ob())}function Z(e,t){1&e&&(g.Ic(0," There was an error while trying to update your account."),g.Nb(1,"br"),g.Ic(2,"Please try again later. "))}function W(e,t){if(1&e&&(g.Rb(0,"div",40),g.Gc(1,$,2,0,"ng-container",3),g.Gc(2,Z,3,0,"ng-template",null,41,g.Hc),g.Qb()),2&e){const e=g.xc(3),t=g.gc(4);g.zb(1),g.oc("ngIf",t.userExists)("ngIfElse",e)}}function Y(e,t){if(1&e){const e=g.Sb();g.Rb(0,"div",42),g.Nb(1,"fa-icon",35),g.Ic(2," Updating your user data will log you out. "),g.Rb(3,"button",43),g.dc("click",(function(t){return g.zc(e),g.gc(4).storeAlertState("warning")})),g.Ic(4," \xd7 "),g.Qb(),g.Qb()}if(2&e){const e=g.gc(4);g.zb(1),g.oc("icon",e.faExclamationTriangle)}}function ee(e,t){1&e&&(g.Rb(0,"div",44),g.Ic(1," Oops, looks like there was an error while trying to delete your user."),g.Nb(2,"br"),g.Ic(3,"Please try again later. "),g.Qb())}function te(e,t){if(1&e){const e=g.Sb();g.Rb(0,"form",8,9),g.dc("ngSubmit",(function(t){return g.zc(e),g.gc(3).save()})),g.Rb(2,"fieldset"),g.Rb(3,"legend",10),g.Ic(4,"Account"),g.Qb(),g.Gc(5,V,9,1,"div",11),g.Rb(6,"div",12),g.Rb(7,"p",13),g.Rb(8,"span",14),g.Ic(9,"*"),g.Qb(),g.Ic(10," = required "),g.Qb(),g.Rb(11,"div",15),g.Pb(12),g.Rb(13,"label",16),g.Ic(14,"Name"),g.Qb(),g.Rb(15,"input",17,18),g.dc("ngModelChange",(function(t){return g.zc(e),g.gc(3).user.name=t})),g.Qb(),g.Gc(17,X,6,7,"ng-container",19),g.Ob(),g.Pb(18),g.Rb(19,"label",20),g.Ic(20,"Username\xa0"),g.Rb(21,"span",21),g.Ic(22,"*"),g.Qb(),g.Qb(),g.Rb(23,"input",22,23),g.dc("ngModelChange",(function(t){return g.zc(e),g.gc(3).user.username=t})),g.Qb(),g.Gc(25,H,8,8,"ng-container",19),g.Ob(),g.Pb(26),g.Rb(27,"label",24),g.Ic(28,"Password\xa0"),g.Rb(29,"span",21),g.Ic(30,"*"),g.Qb(),g.Qb(),g.Rb(31,"input",25,26),g.dc("ngModelChange",(function(t){return g.zc(e),g.gc(3).user.password=t}))("focus",(function(t){return g.zc(e),g.gc(3).pwFocused=!0}))("blur",(function(t){return g.zc(e),g.gc(3).pwFocused=!1})),g.Qb(),g.Gc(33,K,8,8,"ng-container",19),g.Ob(),g.Qb(),g.Rb(34,"button",27),g.dc("click",(function(t){return g.zc(e),g.gc(3).sanitizeData()})),g.Ic(35," Save "),g.Qb(),g.Qb(),g.Qb(),g.Gc(36,W,4,2,"div",28),g.Rb(37,"div",29),g.Gc(38,Y,5,1,"div",30),g.Qb(),g.Gc(39,ee,4,0,"div",31),g.Rb(40,"div",32),g.Nb(41,"account-update-roms"),g.Rb(42,"account-delete-user-btn",33),g.dc("isError",(function(t){return g.zc(e),g.gc(3).deletionError(t)})),g.Qb(),g.Qb(),g.Qb()}if(2&e){const e=g.xc(1),t=g.gc(3);g.zb(5),g.oc("ngIf",!t.noticeClosed),g.zb(10),g.rc("placeholder","min: ",t.lengths.name[0],", max: ",t.lengths.name[1]," (optional)"),g.oc("ngModel",t.user.name),g.zb(2),g.oc("ngIf",null!==t.user.name),g.zb(6),g.rc("placeholder","min: ",t.lengths.username[0],", max: ",t.lengths.username[1],""),g.oc("ngModel",t.user.username),g.zb(2),g.oc("ngIf",t.user.hasOwnProperty("username")),g.zb(6),g.rc("placeholder","min: ",t.lengths.password[0],", max: ",t.lengths.password[1],""),g.oc("type",t.changePwInputType())("ngModel",t.user.password),g.zb(2),g.oc("ngIf",t.user.hasOwnProperty("password")),g.zb(1),g.oc("disabled",t.firedOff||!e.valid||!(t.user.username||t.user.username.length>0||t.user.password||t.user.password.length>0||t.user.name||t.user.name.length>0)),g.zb(2),g.oc("ngIf",t.updateFail),g.zb(2),g.oc("ngIf",!t.warningClosed),g.zb(1),g.oc("ngIf",t.isErrorDeleting)}}function ne(e,t){if(1&e&&g.Gc(0,te,43,18,"form",7),2&e){const e=g.gc(2);g.oc("ngIf",!e.errLoadingUsr)}}function re(e,t){if(1&e&&(g.Rb(0,"div",2),g.Gc(1,J,5,0,"ng-container",3),g.Gc(2,ne,1,1,"ng-template",null,4,g.Hc),g.Qb()),2&e){const e=g.xc(3),t=g.gc();g.zb(1),g.oc("ngIf",t.errLoadingUsr)("ngIfElse",e)}}let se=(()=>{class e{constructor(e,t){this.userService=e,this.router=t,String.prototype.sanitizeXSS=l.a,String.prototype.removeStringChars=d.a}ngOnInit(){this.lengths=o.b,this.userExists=!1,this.updateFail=!1,this.pwFocused=!1,this.ready=!1,this.firedOff=!1,this.errLoadingUsr=!1,this.isErrorDeleting=!1,this.faExclamationTriangle=c.e,this.faInfoCircle=c.i,u.a.getCookie("user")?(this.userId=JSON.parse(u.a.getCookie("user")).id,this.retrieveUserData(this.userId)):this.errLoadingUsr=!0,h.a.getState("notice_closed")||h.a.setState("notice_closed",!1),p.a.getState("warning_closed")||p.a.setState("warning_closed",!1),this.noticeClosed=h.a.getState("notice_closed"),this.warningClosed=p.a.getState("warning_closed")}ngOnDestroy(){this.userSub.unsubscribe()}retrieveUserData(e){this.userObs$=this.userService.getUser(e),this.userSub=this.userObs$.subscribe(e=>{e.name&&""!==e.name||(e.name=""),e.password="",this.user=e,this.ready=!0},e=>{this.errLoadingUsr=!0,this.ready=!0,b.a.error(e)})}save(){this.firedOff=!0,this.ready=!1,this.user.name&&""!==this.user.name||(this.user.name=null),this.updateUser(this.userId,this.user,["error","user_exists"])}sanitizeData(){this.user.name&&(this.user.name=this.user.name.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.user.username&&(this.user.username=this.user.username.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.user.password&&(this.user.password=this.user.password.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars())}changePwInputType(){return this.pwFocused?"text":"password"}deletionError(e){this.isErrorDeleting=e}storeAlertState(e){switch(e){case"notice":h.a.setState("notice_closed",!0);break;case"warning":p.a.setState("warning_closed",!0);break;default:b.a.error("Unknown alert name.")}}updateUser(e,t,n){this.userService.updateUser(e,t).subscribe(()=>{this.ready=!0,this.userExists=!1,a.a.logout(),this.router.navigate(["/","home"])},e=>{this.ready=!0,this.updateFail=!0,this.firedOff=!1,!0===e[n[0]][n[1]]&&(this.userExists=!0),b.a.error(e)})}}return e.\u0275fac=function(t){return new(t||e)(g.Mb(o.a),g.Mb(i.d))},e.\u0275cmp=g.Gb({type:e,selectors:[["account"]],decls:3,vars:2,consts:[[3,"loading"],["class","container text-center mb-2","id","form-container",4,"ngIf"],["id","form-container",1,"container","text-center","mb-2"],[4,"ngIf","ngIfElse"],["account",""],[1,"mt-1"],["appAlert","","alertType","danger",1,"mt-3"],["name","accountForm","autocomplete","on",3,"ngSubmit",4,"ngIf"],["name","accountForm","autocomplete","on",3,"ngSubmit"],["accountForm","ngForm"],[1,"pt-2","pb-2","text-center"],["class","alert-dismissible fade show text-left","appAlert","","alertType","info","role","alert",4,"ngIf"],["id","border-container",1,"border","rounded"],[1,"mb-0"],[1,"text-danger","font-weight-bold"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","name","name","autocomplete","name","minlength","1","maxlength","100",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["for","username",1,"font-weight-bold","pt-1"],[1,"text-danger"],["type","text","id","username","name","username","autocomplete","username","minlength","3","maxlength","22","required","",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["username","ngModel"],["for","password",1,"font-weight-bold"],["id","password","name","password","autocomplete","new-password","minlength","6","maxlength","256","required","",1,"form-control",3,"type","placeholder","ngModel","ngModelChange","focus","blur"],["password","ngModel"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["class","mt-2","appAlert","","alertType","danger",4,"ngIf"],[1,"mt-3","mb-3"],["class","font-weight-bold alert-dismissible show fade","appAlert","","alertType","warning",4,"ngIf"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],[1,"d-flex","flex-column"],[3,"isError"],["appAlert","","alertType","info","role","alert",1,"alert-dismissible","fade","show","text-left"],[1,"mr-1",3,"icon"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["appAlert","","alertType","danger",1,"mt-2"],["normalErrMsg",""],["appAlert","","alertType","warning",1,"font-weight-bold","alert-dismissible","show","fade"],["type","button","data-dismiss","alert",1,"close","p-2","mr-2",3,"click"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,t){1&e&&(g.Pb(0),g.Nb(1,"spinners-gif-spinner",0),g.Gc(2,re,4,2,"div",1),g.Ob()),2&e&&(g.zb(1),g.oc("loading",!t.ready&&!t.errLoadingUsr),g.zb(1),g.oc("ngIf",t.ready))},directives:[m.a,r.o,f.a,y.u,y.m,y.n,y.a,y.i,y.h,y.l,y.o,y.r,w.a,L,q,A.a],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px)and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px)and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px)and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0)and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})();var ie=n("UTcu"),oe=n("Dat7");const ae=[{path:"",component:se,canActivate:[ie.a,oe.a]}];let ce=(()=>{class e{}return e.\u0275mod=g.Kb({type:e}),e.\u0275inj=g.Jb({factory:function(t){return new(t||e)},imports:[[i.h.forChild(ae)],i.h]}),e})();var le=n("WjtB"),de=n("FUS3");n.d(t,"AccountModule",(function(){return ue}));let ue=(()=>{class e{}return e.\u0275mod=g.Kb({type:e}),e.\u0275inj=g.Jb({factory:function(t){return new(t||e)},providers:[o.a,v.a],imports:[[r.c,s.g,ce,le.a,y.g,A.b,de.a]]}),e})()}}]);