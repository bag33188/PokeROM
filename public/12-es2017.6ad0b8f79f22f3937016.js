(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{nDdO:function(e,t,n){"use strict";n.r(t),n.d(t,"AccountModule",function(){return be});var r=n("ofXK"),s=n("1kSV"),i=n("tyNb"),o=n("qfBg"),a=n("lGQG"),c=n("wHSu"),l=n("Rv5h"),d=n("vuBd"),u=n("QTu/"),b=n("Mb37"),h=n("DRYZ"),p=n("yZ9z"),m=n("fXoL"),g=n("NvMS"),f=n("FpAq"),y=n("3Pt+"),w=n("siFw"),v=n("t52u"),x=n("yCtX"),R=n("DH7j"),S=n("7o/Q"),C=n("l7GE"),O=n("ZUHj"),z=n("Lhse");class Q{constructor(e){this.resultSelector=e}call(e,t){return t.subscribe(new I(e,this.resultSelector))}}class I extends S.a{constructor(e,t,n=Object.create(null)){super(e),this.iterators=[],this.active=0,this.resultSelector="function"==typeof t?t:null,this.values=n}_next(e){const t=this.iterators;Object(R.a)(e)?t.push(new G(e)):t.push("function"==typeof e[z.a]?new E(e[z.a]()):new k(this.destination,this,e))}_complete(){const e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(let n=0;n<t;n++){let t=e[n];t.stillUnsubscribed?this.destination.add(t.subscribe(t,n)):this.active--}}else this.destination.complete()}notifyInactive(){this.active--,0===this.active&&this.destination.complete()}checkIterators(){const e=this.iterators,t=e.length,n=this.destination;for(let i=0;i<t;i++){let t=e[i];if("function"==typeof t.hasValue&&!t.hasValue())return}let r=!1;const s=[];for(let i=0;i<t;i++){let t=e[i],o=t.next();if(t.hasCompleted()&&(r=!0),o.done)return void n.complete();s.push(o.value)}this.resultSelector?this._tryresultSelector(s):n.next(s),r&&n.complete()}_tryresultSelector(e){let t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}class E{constructor(e){this.iterator=e,this.nextResult=e.next()}hasValue(){return!0}next(){const e=this.nextResult;return this.nextResult=this.iterator.next(),e}hasCompleted(){const e=this.nextResult;return e&&e.done}}class G{constructor(e){this.array=e,this.index=0,this.length=0,this.length=e.length}[z.a](){return this}next(e){const t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}hasValue(){return this.array.length>this.index}hasCompleted(){return this.array.length===this.index}}class k extends C.a{constructor(e,t,n){super(e),this.parent=t,this.observable=n,this.stillUnsubscribed=!0,this.buffer=[],this.isComplete=!1}[z.a](){return this}next(){const e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}hasValue(){return this.buffer.length>0}hasCompleted(){return 0===this.buffer.length&&this.isComplete}notifyComplete(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}notifyNext(e,t,n,r,s){this.buffer.push(t),this.parent.checkIterators()}subscribe(e,t){return Object(O.a)(this,this.observable,this,t)}}var M=n("SxV6"),T=n("3E0/"),P=n("IzEk"),U=n("twK/"),_=n("Ql4B");let D=(()=>{class e{constructor(){}ngOnInit(){!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses={[this.type]:!0,[this.color]:!0,spacing:null!=this.spaced&&!0===this.spaced})}setType(){this.type=this.getType()}setColor(){this.color=this.getColor()}getType(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:b.a.error("Invalid type.")}else b.a.error("Type must be a string.")}getColor(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:b.a.error("Invalid color.")}else b.a.error("Color must be a string.")}checkForErrors(){return this.spinnerType?this.spinnerColor?null==this.loading?(b.a.error("Loading property is required."),!0):null!=this.spaced&&"boolean"!=typeof this.spaced?(b.a.error("Spaced property must be a boolean."),!0):!(!this.customSize||"number"==typeof this.customSize||(b.a.error("Custom size property must be a number data-type."),0)):(b.a.error("Color is required."),!0):(b.a.error("Type is required."),!0)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Gb({type:e,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:6,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Rb(1,"span",1),m.Gc(2,"Loading..."),m.Qb(),m.Qb()),2&e&&(m.Dc("height",t.customSize?t.customSize:32,"px")("width",t.customSize?t.customSize:32,"px"),m.mc("ngClass",t.ngClasses)("hidden",!t.loading))},directives:[r.m],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),e})();var A=n("6NWb");function N(e,t){1&e&&(m.Rb(0,"b"),m.Gc(1,"Warning"),m.Qb(),m.Nb(2,"br"),m.Gc(3,"Updating ROMs will remove all favorites. "))}function F(e,t){if(1&e&&(m.Rb(0,"div",4),m.Nb(1,"spinners-bootstrap-spinner",5),m.Qb()),2&e){const e=m.ec();m.zb(1),m.mc("loading",e.loading)}}function j(e,t){if(1&e){const e=m.Sb();m.Rb(0,"button",6),m.bc("click",function(){return m.xc(e),m.ec().updateRoms()}),m.Gc(1," Update ROMs "),m.Qb()}if(2&e){m.ec();const e=m.vc(2);m.mc("ngbTooltip",e)}}function B(e,t){if(1&e&&(m.Rb(0,"div",7),m.Nb(1,"fa-icon",8),m.Gc(2),m.Qb()),2&e){const e=m.ec();m.mc("shadow",!0)("alertType",e.romsUpdated?"success":"danger")("@fadeIn",void 0),m.zb(1),m.mc("icon",e.romsUpdated?e.faCheckCircle:e.faTimesCircle),m.zb(1),m.Ic(" ",e.romsUpdated?"ROMs successfully updated!":"Error updating ROMs, please try again later."," ")}}let J=(()=>{class e{constructor(e){this.romsService=e}ngOnInit(){this.faTimesCircle=U.c,this.faCheckCircle=U.a,this.showBtn=!0,this.loading=!1,this.deleteRomsObs$=this.romsService.deleteAllRoms().pipe(Object(M.a)(),Object(T.a)(442)),this.addRomsObs$=function(...e){const t=e[e.length-1];return"function"==typeof t&&e.pop(),Object(x.a)(e,void 0).lift(new Q(t))}(this.romsService.addCoreRoms().pipe(Object(P.a)(1),Object(T.a)(442)),this.romsService.addRomHacks().pipe(Object(P.a)(1),Object(T.a)(442)))}ngOnDestroy(){this.romsUpdated&&(this.deleteRomsSub.unsubscribe(),this.addRomsSub.unsubscribe())}updateRoms(){this.showBtn=!1,this.loading=!0,this.deleteRoms(this.addRoms.bind(this,e))}deleteRoms(e){this.deleteRomsSub=this.deleteRomsObs$.subscribe({error:e=>{this.loading=!1,this.romsUpdated=!1,b.a.error(e)},complete:()=>e()})}addRoms(){this.addRomsSub=this.addRomsObs$.subscribe({error:e=>{this.loading=!1,b.a.error(e)},complete:()=>{this.romsUpdated=!0,this.loading=!1}})}}return e.\u0275fac=function(t){return new(t||e)(m.Mb(v.a))},e.\u0275cmp=m.Gb({type:e,selectors:[["account-update-roms"]],decls:6,vars:3,consts:[["updateROMsWarning",""],["id","update-roms-spinner-container",4,"ngIf"],["class","mb-3","type","button","appBtn","","btnType","warning",3,"ngbTooltip","click",4,"ngIf"],["id","roms-updated-alert-container","appAlert","",3,"shadow","alertType",4,"ngIf"],["id","update-roms-spinner-container"],["type","border","color","primary",3,"loading"],["type","button","appBtn","","btnType","warning",1,"mb-3",3,"ngbTooltip","click"],["id","roms-updated-alert-container","appAlert","",3,"shadow","alertType"],[1,"mr-1",3,"icon"]],template:function(e,t){1&e&&(m.Pb(0),m.Ec(1,N,4,0,"ng-template",null,0,m.Fc),m.Ec(3,F,2,1,"div",1),m.Ec(4,j,2,1,"button",2),m.Ec(5,B,3,5,"div",3),m.Ob()),2&e&&(m.zb(3),m.mc("ngIf",t.loading),m.zb(1),m.mc("ngIf",t.showBtn),m.zb(1),m.mc("ngIf",void 0!==t.romsUpdated))},directives:[r.o,D,w.a,s.x,f.a,A.a],styles:["#update-roms-spinner-container[_ngcontent-%COMP%]{margin-bottom:1rem;padding:.11rem}#roms-updated-alert-container[_ngcontent-%COMP%]{margin-bottom:.75rem;padding:.5rem}"],data:{animation:[_.a]}}),e})(),q=(()=>{class e{constructor(e,t,n){this.modal=e,this.userService=t,this.router=n,this.isErrorDeleting=new m.o,this.loading=new m.o,this.firedOff=new m.o}ngOnInit(){this.btnDisabled=!1}deleteCurrentUser(){this.firedOff.emit(!0),this.btnDisabled=!0,this.userService.deleteUser(JSON.parse(u.a.getCookie("user")).id).subscribe(()=>{this.isErrorDeleting.emit(!1),this.loading.emit(!1),this.router.navigate(["/","home"]),a.a.logout()},e=>{this.btnDisabled=!1,this.loading.emit(!1),this.firedOff.emit(!1),this.isErrorDeleting.emit(!0),b.a.error(e)}),this.closeModal()}closeModal(){this.modal.close("Ok click")}}return e.\u0275fac=function(t){return new(t||e)(m.Mb(s.c),m.Mb(o.a),m.Mb(i.d))},e.\u0275cmp=m.Gb({type:e,selectors:[["account-delete-user-modal"]],inputs:{username:"username"},outputs:{isErrorDeleting:"isErrorDeleting",loading:"loading",firedOff:"firedOff"},decls:19,vars:2,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"modal-footer","justify-content-start"],["type","button","appBtn","","btnType","danger",3,"disabled","click"],["type","button","appBtn","","btnType","secondary-outline",3,"click"]],template:function(e,t){1&e&&(m.Pb(0),m.Rb(1,"div",0),m.Rb(2,"h4",1),m.Gc(3,"Account deletion"),m.Qb(),m.Rb(4,"button",2),m.bc("click",function(){return t.modal.dismiss("Cross click")}),m.Rb(5,"span",3),m.Gc(6,"\xd7"),m.Qb(),m.Qb(),m.Qb(),m.Rb(7,"div",4),m.Rb(8,"p"),m.Rb(9,"strong"),m.Gc(10),m.Qb(),m.Qb(),m.Rb(11,"p"),m.Rb(12,"span"),m.Gc(13,"This operation cannot be undone."),m.Qb(),m.Qb(),m.Qb(),m.Rb(14,"div",5),m.Rb(15,"button",6),m.bc("click",function(){return t.deleteCurrentUser()}),m.Gc(16," Ok "),m.Qb(),m.Rb(17,"button",7),m.bc("click",function(){return t.modal.dismiss("cancel click")}),m.Gc(18," Cancel "),m.Qb(),m.Qb(),m.Ob()),2&e&&(m.zb(10),m.Ic("Are you sure you want to delete your own account (",t.username||"username_not_found",")?"),m.zb(5),m.mc("disabled",t.btnDisabled))},directives:[w.a],styles:[".modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:red}"]}),e})(),L=(()=>{class e{constructor(e){this.modalService=e,this.isError=new m.o}ngOnInit(){this.loading=!1,this.btnText="Delete User!"}confirmDeletion(){const e=this.modalService.open(q,{centered:!0,backdrop:"static"});e.componentInstance.loading.subscribe(e=>{this.loading=e}),e.componentInstance.isErrorDeleting.subscribe(e=>{this.isError.emit(e)}),e.componentInstance.firedOff.subscribe(e=>{this.firedOff=e}),e.componentInstance.username=JSON.parse(u.a.getCookie("user")).username}}return e.\u0275fac=function(t){return new(t||e)(m.Mb(s.f))},e.\u0275cmp=m.Gb({type:e,selectors:[["account-delete-user-btn"]],outputs:{isError:"isError"},decls:4,vars:3,consts:[[3,"loading"],["id","delete-user-btn","type","button","appBtn","","btnType","danger",3,"disabled","click"]],template:function(e,t){1&e&&(m.Pb(0),m.Nb(1,"spinners-gif-spinner",0),m.Rb(2,"button",1),m.bc("click",function(){return t.confirmDeletion()}),m.Gc(3),m.Qb(),m.Ob()),2&e&&(m.zb(1),m.mc("loading",t.loading),m.zb(1),m.mc("disabled",t.firedOff),m.zb(1),m.Ic(" ",t.btnText," "))},directives:[g.a,w.a],styles:["#delete-user-btn[_ngcontent-%COMP%]{cursor:pointer!important;display:inline-block!important}"]}),e})();function V(e,t){1&e&&(m.Pb(0),m.Rb(1,"h4",5),m.Gc(2,"Account"),m.Qb(),m.Rb(3,"div",6),m.Gc(4," There was an error while trying to load your user information. Please try again later. "),m.Qb(),m.Ob()),2&e&&(m.zb(3),m.mc("shadow",!0))}function X(e,t){if(1&e){const e=m.Sb();m.Rb(0,"div",34),m.Nb(1,"fa-icon",35),m.Gc(2,"\xa0If you do not enter a name, your name ("),m.Rb(3,"b"),m.Gc(4,"not your user"),m.Qb(),m.Gc(5,") will be deleted from the database. "),m.Rb(6,"button",36),m.bc("click",function(){return m.xc(e),m.ec(4).storeAlertState("notice")}),m.Rb(7,"span",37),m.Gc(8,"\xd7"),m.Qb(),m.Qb(),m.Qb()}if(2&e){const e=m.ec(4);m.mc("shadow",!0),m.zb(1),m.mc("icon",e.faInfoCircle)}}function $(e,t){if(1&e&&(m.Pb(0),m.Rb(1,"div",38),m.Rb(2,"div",39),m.Gc(3),m.Qb(),m.Rb(4,"div",39),m.Gc(5),m.Qb(),m.Qb(),m.Ob()),2&e){m.ec();const e=m.vc(16),t=m.ec(3);m.zb(1),m.mc("hidden",!(e.touched&&e.invalid)),m.zb(1),m.mc("hidden",!(null!=e.errors&&e.errors.minlength)),m.zb(1),m.Jc(" Name is too short (min: ",t.lengths.name[0],", current: ",t.user.name.length,"). "),m.zb(1),m.mc("hidden",!(null!=e.errors&&e.errors.maxlength)),m.zb(1),m.Jc(" Name is too long (max: ",t.lengths.name[1],", current: ",t.user.name.length,"). ")}}function H(e,t){if(1&e&&(m.Pb(0),m.Rb(1,"div",38),m.Rb(2,"div",39),m.Gc(3),m.Qb(),m.Rb(4,"div",39),m.Gc(5),m.Qb(),m.Rb(6,"div",39),m.Gc(7," Username is required. "),m.Qb(),m.Qb(),m.Ob()),2&e){m.ec();const e=m.vc(24),t=m.ec(3);m.zb(1),m.mc("hidden",!(e.touched&&e.invalid)),m.zb(1),m.mc("hidden",!(null!=e.errors&&e.errors.minlength)),m.zb(1),m.Jc(" Username is too short (min: ",t.lengths.username[0],", current: ",t.user.username.length,"). "),m.zb(1),m.mc("hidden",!(null!=e.errors&&e.errors.maxlength)),m.zb(1),m.Jc(" Username is too long (max: ",t.lengths.username[1],", current: ",t.user.username.length,"). "),m.zb(1),m.mc("hidden",!(null!=e.errors&&e.errors.required))}}function K(e,t){if(1&e&&(m.Pb(0),m.Rb(1,"div",38),m.Rb(2,"div",39),m.Gc(3),m.Qb(),m.Rb(4,"div",39),m.Gc(5),m.Qb(),m.Rb(6,"div",39),m.Gc(7," Password is required. "),m.Qb(),m.Qb(),m.Ob()),2&e){m.ec();const e=m.vc(32),t=m.ec(3);m.zb(1),m.mc("hidden",!(e.touched&&e.invalid)),m.zb(1),m.mc("hidden",!(null!=e.errors&&e.errors.minlength)),m.zb(1),m.Jc(" Password is too short (min: ",t.lengths.password[0],", current: ",t.user.password.length,"). "),m.zb(1),m.mc("hidden",!(null!=e.errors&&e.errors.maxlength)),m.zb(1),m.Jc(" Password is too long (max: ",t.lengths.password[1],", current: ",t.user.password.length,"). "),m.zb(1),m.mc("hidden",!(null!=e.errors&&e.errors.required))}}function W(e,t){1&e&&(m.Pb(0),m.Gc(1," The username you chose already belongs to another user. "),m.Ob())}function Z(e,t){1&e&&(m.Gc(0," There was an error while trying to update your account."),m.Nb(1,"br"),m.Gc(2,"Please try again later. "))}function Y(e,t){if(1&e&&(m.Rb(0,"div",40),m.Ec(1,W,2,0,"ng-container",3),m.Ec(2,Z,3,0,"ng-template",null,41,m.Fc),m.Qb()),2&e){const e=m.vc(3),t=m.ec(4);m.mc("shadow",!0),m.zb(1),m.mc("ngIf",t.userExists)("ngIfElse",e)}}function ee(e,t){if(1&e){const e=m.Sb();m.Rb(0,"div",42),m.Nb(1,"fa-icon",35),m.Gc(2," Updating your user data will log you out. "),m.Rb(3,"button",43),m.bc("click",function(){return m.xc(e),m.ec(4).storeAlertState("warning")}),m.Gc(4," \xd7 "),m.Qb(),m.Qb()}if(2&e){const e=m.ec(4);m.mc("shadow",!0),m.zb(1),m.mc("icon",e.faExclamationTriangle)}}function te(e,t){1&e&&(m.Rb(0,"div",44),m.Gc(1," Oops, looks like there was an error while trying to delete your user."),m.Nb(2,"br"),m.Gc(3,"Please try again later. "),m.Qb()),2&e&&m.mc("shadow",!0)}function ne(e,t){if(1&e){const e=m.Sb();m.Rb(0,"form",8,9),m.bc("ngSubmit",function(){return m.xc(e),m.ec(3).save()}),m.Rb(2,"fieldset"),m.Rb(3,"legend",10),m.Gc(4,"Account"),m.Qb(),m.Ec(5,X,9,2,"div",11),m.Rb(6,"div",12),m.Rb(7,"p",13),m.Rb(8,"span",14),m.Gc(9,"*"),m.Qb(),m.Gc(10," = required "),m.Qb(),m.Rb(11,"div",15),m.Pb(12),m.Rb(13,"label",16),m.Gc(14,"Name"),m.Qb(),m.Rb(15,"input",17,18),m.bc("ngModelChange",function(t){return m.xc(e),m.ec(3).user.name=t}),m.Qb(),m.Ec(17,$,6,7,"ng-container",19),m.Ob(),m.Pb(18),m.Rb(19,"label",20),m.Gc(20,"Username\xa0"),m.Rb(21,"span",21),m.Gc(22,"*"),m.Qb(),m.Qb(),m.Rb(23,"input",22,23),m.bc("ngModelChange",function(t){return m.xc(e),m.ec(3).user.username=t}),m.Qb(),m.Ec(25,H,8,8,"ng-container",19),m.Ob(),m.Pb(26),m.Rb(27,"label",24),m.Gc(28,"Password\xa0"),m.Rb(29,"span",21),m.Gc(30,"*"),m.Qb(),m.Qb(),m.Rb(31,"input",25,26),m.bc("ngModelChange",function(t){return m.xc(e),m.ec(3).user.password=t})("focus",function(){return m.xc(e),m.ec(3).pwFocused=!0})("blur",function(){return m.xc(e),m.ec(3).pwFocused=!1}),m.Qb(),m.Ec(33,K,8,8,"ng-container",19),m.Ob(),m.Qb(),m.Rb(34,"button",27),m.bc("click",function(){return m.xc(e),m.ec(3).sanitizeData()}),m.Gc(35," Save "),m.Qb(),m.Qb(),m.Qb(),m.Ec(36,Y,4,3,"div",28),m.Rb(37,"div",29),m.Ec(38,ee,5,2,"div",30),m.Qb(),m.Ec(39,te,4,1,"div",31),m.Rb(40,"div",32),m.Nb(41,"account-update-roms"),m.Rb(42,"account-delete-user-btn",33),m.bc("isError",function(t){return m.xc(e),m.ec(3).deletionError(t)}),m.Qb(),m.Qb(),m.Qb()}if(2&e){const e=m.vc(1),t=m.ec(3);m.zb(5),m.mc("ngIf",!t.noticeClosed),m.zb(10),m.pc("placeholder","min: ",t.lengths.name[0],", max: ",t.lengths.name[1]," (optional)"),m.mc("ngModel",t.user.name),m.zb(2),m.mc("ngIf",null!==t.user.name),m.zb(6),m.pc("placeholder","min: ",t.lengths.username[0],", max: ",t.lengths.username[1],""),m.mc("ngModel",t.user.username),m.zb(2),m.mc("ngIf",t.user.hasOwnProperty("username")),m.zb(6),m.pc("placeholder","min: ",t.lengths.password[0],", max: ",t.lengths.password[1],""),m.mc("type",t.changePwInputType())("ngModel",t.user.password),m.zb(2),m.mc("ngIf",t.user.hasOwnProperty("password")),m.zb(1),m.mc("disabled",t.firedOff||!e.valid||!(t.user.username||t.user.username.length>0||t.user.password||t.user.password.length>0||t.user.name||t.user.name.length>0)),m.zb(2),m.mc("ngIf",t.updateFail),m.zb(2),m.mc("ngIf",!t.warningClosed),m.zb(1),m.mc("ngIf",t.isErrorDeleting)}}function re(e,t){if(1&e&&m.Ec(0,ne,43,18,"form",7),2&e){const e=m.ec(2);m.mc("ngIf",!e.errLoadingUsr)}}function se(e,t){if(1&e&&(m.Rb(0,"div",2),m.Ec(1,V,5,1,"ng-container",3),m.Ec(2,re,1,1,"ng-template",null,4,m.Fc),m.Qb()),2&e){const e=m.vc(3),t=m.ec();m.zb(1),m.mc("ngIf",t.errLoadingUsr)("ngIfElse",e)}}let ie=(()=>{class e{constructor(e,t){this.userService=e,this.router=t,String.prototype.sanitizeXSS=l.a,String.prototype.removeStringChars=d.a}ngOnInit(){if(this.lengths=o.b,this.userExists=!1,this.updateFail=!1,this.pwFocused=!1,this.ready=!1,this.firedOff=!1,this.errLoadingUsr=!1,this.isErrorDeleting=!1,this.faExclamationTriangle=c.e,this.faInfoCircle=c.i,u.a.getCookie("user")){const e="id";this.userId=JSON.parse(u.a.getCookie("user"))[e],this.retrieveUserData(this.userId)}else this.errLoadingUsr=!0;h.a.getState("notice_closed")||h.a.setState("notice_closed",!1),p.a.getState("warning_closed")||p.a.setState("warning_closed",!1),this.noticeClosed=h.a.getState("notice_closed"),this.warningClosed=p.a.getState("warning_closed")}ngOnDestroy(){this.userSub.unsubscribe()}retrieveUserData(e){this.userObs$=this.userService.getUser(e),this.userSub=this.userObs$.subscribe(e=>{e.name&&""!==e.name||(e.name=""),e.password="",this.user=e,this.ready=!0},e=>{this.errLoadingUsr=!0,this.ready=!0,b.a.error(e)})}save(){this.firedOff=!0,this.ready=!1,this.user.name&&""!==this.user.name||(this.user.name=null),this.updateUser(this.userId,this.user,["error","user_exists"])}sanitizeData(){this.user.name&&(this.user.name=this.user.name.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.user.username&&(this.user.username=this.user.username.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.user.password&&(this.user.password=this.user.password.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars())}changePwInputType(){return this.pwFocused?"text":"password"}deletionError(e){this.isErrorDeleting=e}storeAlertState(e){switch(e){case"notice":h.a.setState("notice_closed",!0);break;case"warning":p.a.setState("warning_closed",!0);break;default:b.a.error("Unknown alert name.")}}updateUser(e,t,n){this.userService.updateUser(e,t).subscribe(()=>{this.ready=!0,this.userExists=!1,a.a.logout(),this.router.navigate(["/","home"])},e=>{this.ready=!0,this.updateFail=!0,this.firedOff=!1,!0===e[n[0]][n[1]]&&(this.userExists=!0),b.a.error(e)})}}return e.\u0275fac=function(t){return new(t||e)(m.Mb(o.a),m.Mb(i.d))},e.\u0275cmp=m.Gb({type:e,selectors:[["account"]],decls:3,vars:2,consts:[[3,"loading"],["class","container text-center mb-2","id","form-container",4,"ngIf"],["id","form-container",1,"container","text-center","mb-2"],[4,"ngIf","ngIfElse"],["account",""],[1,"mt-1"],["appAlert","","alertType","danger",1,"mt-3",3,"shadow"],["name","accountForm","autocomplete","on",3,"ngSubmit",4,"ngIf"],["name","accountForm","autocomplete","on",3,"ngSubmit"],["accountForm","ngForm"],[1,"pt-2","pb-2","text-center"],["class","alert-dismissible fade show text-left","appAlert","","alertType","info","role","alert",3,"shadow",4,"ngIf"],["id","border-container",1,"border","rounded","shadow"],[1,"mb-0"],[1,"text-danger","font-weight-bold"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","name","name","autocomplete","name","minlength","1","maxlength","100",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["for","username",1,"font-weight-bold","pt-1"],[1,"text-danger"],["type","text","id","username","name","username","autocomplete","username","minlength","3","maxlength","22","required","",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["username","ngModel"],["for","password",1,"font-weight-bold"],["id","password","name","password","autocomplete","new-password","minlength","6","maxlength","256","required","",1,"form-control",3,"type","placeholder","ngModel","ngModelChange","focus","blur"],["password","ngModel"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["class","mt-2","appAlert","","alertType","danger",3,"shadow",4,"ngIf"],[1,"mt-3","mb-3"],["class","font-weight-bold alert-dismissible show fade","appAlert","","alertType","warning",3,"shadow",4,"ngIf"],["class","mt-1","appAlert","","alertType","danger",3,"shadow",4,"ngIf"],[1,"d-flex","flex-column"],[3,"isError"],["appAlert","","alertType","info","role","alert",1,"alert-dismissible","fade","show","text-left",3,"shadow"],[1,"mr-1",3,"icon"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["appAlert","","alertType","danger",1,"mt-2",3,"shadow"],["normalErrMsg",""],["appAlert","","alertType","warning",1,"font-weight-bold","alert-dismissible","show","fade",3,"shadow"],["type","button","data-dismiss","alert",1,"close","p-2","mr-2",3,"click"],["appAlert","","alertType","danger",1,"mt-1",3,"shadow"]],template:function(e,t){1&e&&(m.Pb(0),m.Nb(1,"spinners-gif-spinner",0),m.Ec(2,se,4,2,"div",1),m.Ob()),2&e&&(m.zb(1),m.mc("loading",!t.ready&&!t.errLoadingUsr),m.zb(1),m.mc("ngIf",t.ready))},directives:[g.a,r.o,f.a,y.u,y.m,y.n,y.a,y.i,y.h,y.l,y.o,y.r,w.a,J,L,A.a],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px) and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px) and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px) and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0) and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})();var oe=n("UTcu"),ae=n("Dat7");const ce=[{path:"",component:ie,canActivate:[oe.a,ae.a]}];let le=(()=>{class e{}return e.\u0275mod=m.Kb({type:e}),e.\u0275inj=m.Jb({factory:function(t){return new(t||e)},imports:[[i.h.forChild(ce)],i.h]}),e})();var de=n("WjtB"),ue=n("FUS3");let be=(()=>{class e{}return e.\u0275mod=m.Kb({type:e}),e.\u0275inj=m.Jb({factory:function(t){return new(t||e)},providers:[o.a,v.a],imports:[[r.c,s.g,le,de.a,y.g,A.b,ue.a]]}),e})()}}]);