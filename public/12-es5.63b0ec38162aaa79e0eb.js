!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var s=o(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{nDdO:function(n,i,o){"use strict";o.r(i),o.d(i,"AccountModule",(function(){return xe}));var a,l=o("ofXK"),u=o("1kSV"),d=o("tyNb"),b=o("qfBg"),f=o("lGQG"),h=o("wHSu"),p=o("Rv5h"),m=o("vuBd"),g=o("QTu/"),y=o("Mb37"),v=o("DRYZ"),w=o("yZ9z"),O=o("fXoL"),k=o("NvMS"),C=o("FpAq"),x=o("3Pt+"),S=o("siFw"),N=o("t52u"),F=o("yCtX"),I=o("DH7j"),M=o("7o/Q"),D=o("l7GE"),T=o("ZUHj"),E=o("Lhse"),P=function(){function e(t){s(this,e),this.resultSelector=t}return c(e,[{key:"call",value:function(e,t){return t.subscribe(new U(e,this.resultSelector))}}]),e}(),U=function(e){t(i,e);var n=r(i);function i(e,t){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.create(null);return s(this,i),(r=n.call(this,e)).iterators=[],r.active=0,r.resultSelector="function"==typeof t?t:null,r.values=o,r}return c(i,[{key:"_next",value:function(e){var t=this.iterators;Object(I.a)(e)?t.push(new R(e)):t.push("function"==typeof e[E.a]?new _(e[E.a]()):new j(this.destination,this,e))}},{key:"_complete",value:function(){var e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(var n=0;n<t;n++){var r=e[n];r.stillUnsubscribed?this.destination.add(r.subscribe(r,n)):this.active--}}else this.destination.complete()}},{key:"notifyInactive",value:function(){this.active--,0===this.active&&this.destination.complete()}},{key:"checkIterators",value:function(){for(var e=this.iterators,t=e.length,n=this.destination,r=0;r<t;r++){var i=e[r];if("function"==typeof i.hasValue&&!i.hasValue())return}for(var o=!1,s=[],a=0;a<t;a++){var c=e[a],l=c.next();if(c.hasCompleted()&&(o=!0),l.done)return void n.complete();s.push(l.value)}this.resultSelector?this._tryresultSelector(s):n.next(s),o&&n.complete()}},{key:"_tryresultSelector",value:function(e){var t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}]),i}(M.a),_=function(){function e(t){s(this,e),this.iterator=t,this.nextResult=t.next()}return c(e,[{key:"hasValue",value:function(){return!0}},{key:"next",value:function(){var e=this.nextResult;return this.nextResult=this.iterator.next(),e}},{key:"hasCompleted",value:function(){var e=this.nextResult;return e&&e.done}}]),e}(),R=function(){function e(t){s(this,e),this.array=t,this.index=0,this.length=0,this.length=t.length}return c(e,[{key:E.a,value:function(){return this}},{key:"next",value:function(e){var t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}},{key:"hasValue",value:function(){return this.array.length>this.index}},{key:"hasCompleted",value:function(){return this.array.length===this.index}}]),e}(),j=function(e){t(i,e);var n=r(i);function i(e,t,r){var o;return s(this,i),(o=n.call(this,e)).parent=t,o.observable=r,o.stillUnsubscribed=!0,o.buffer=[],o.isComplete=!1,o}return c(i,[{key:E.a,value:function(){return this}},{key:"next",value:function(){var e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}},{key:"hasValue",value:function(){return this.buffer.length>0}},{key:"hasCompleted",value:function(){return 0===this.buffer.length&&this.isComplete}},{key:"notifyComplete",value:function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}},{key:"notifyNext",value:function(e,t,n,r,i){this.buffer.push(t),this.parent.checkIterators()}},{key:"subscribe",value:function(e,t){return Object(T.a)(this,this.observable,this,t)}}]),i}(D.a),A=o("SxV6"),L=o("3E0/"),z=o("IzEk"),B=o("twK/"),q=o("Ql4B"),J=((a=function(){function t(){s(this,t)}return c(t,[{key:"ngOnInit",value:function(){var t;!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses=(e(t={},this.type,!0),e(t,this.color,!0),e(t,"spacing",null!=this.spaced&&!0===this.spaced),t))}},{key:"setType",value:function(){this.type=this.getType()}},{key:"setColor",value:function(){this.color=this.getColor()}},{key:"getType",value:function(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:y.a.error("Invalid type.")}else y.a.error("Type must be a string.")}},{key:"getColor",value:function(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:y.a.error("Invalid color.")}else y.a.error("Color must be a string.")}},{key:"checkForErrors",value:function(){return this.spinnerType?this.spinnerColor?null==this.loading?(y.a.error("Loading property is required."),!0):null!=this.spaced&&"boolean"!=typeof this.spaced?(y.a.error("Spaced property must be a boolean."),!0):!(!this.customSize||"number"==typeof this.customSize||(y.a.error("Custom size property must be a number data-type."),0)):(y.a.error("Color is required."),!0):(y.a.error("Type is required."),!0)}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=O.Db({type:a,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:6,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(e,t){1&e&&(O.Ob(0,"div",0),O.Ob(1,"span",1),O.Fc(2,"Loading..."),O.Nb(),O.Nb()),2&e&&(O.Cc("height",t.customSize?t.customSize:32,"px")("width",t.customSize?t.customSize:32,"px"),O.lc("ngClass",t.ngClasses)("hidden",!t.loading))},directives:[l.m],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),a),K=o("6NWb");function H(e,t){1&e&&(O.Ob(0,"b"),O.Fc(1,"Warning"),O.Nb(),O.Kb(2,"br"),O.Fc(3,"Updating ROMs will remove all favorites. "))}function V(e,t){if(1&e&&(O.Ob(0,"div",4),O.Kb(1,"spinners-bootstrap-spinner",5),O.Nb()),2&e){var n=O.dc();O.wb(1),O.lc("loading",n.loading)}}function X(e,t){if(1&e){var n=O.Pb();O.Ob(0,"button",6),O.ac("click",(function(){return O.wc(n),O.dc().updateRoms()})),O.Fc(1," Update ROMs "),O.Nb()}if(2&e){O.dc();var r=O.uc(2);O.lc("ngbTooltip",r)}}function G(e,t){if(1&e&&(O.Ob(0,"div",7),O.Kb(1,"fa-icon",8),O.Fc(2),O.Nb()),2&e){var n=O.dc();O.lc("alertType",n.romsUpdated?"success":"danger")("@fadeIn",void 0),O.wb(1),O.lc("icon",n.romsUpdated?n.faCheckCircle:n.faTimesCircle),O.wb(1),O.Hc(" ",n.romsUpdated?"ROMs successfully updated!":"Error updating ROMs, please try again later."," ")}}var $,Q,W,Z=((W=function(){function e(t){s(this,e),this.romsService=t}return c(e,[{key:"ngOnInit",value:function(){this.delay=442,this.faTimesCircle=B.c,this.faCheckCircle=B.a,this.showBtn=!0,this.loading=!1,this.deleteRomsObs$=this.romsService.deleteAllRoms().pipe(Object(A.a)(),Object(L.a)(this.delay)),this.addRomsObs$=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[t.length-1];return"function"==typeof r&&t.pop(),Object(F.a)(t,void 0).lift(new P(r))}(this.romsService.addCoreRoms().pipe(Object(z.a)(1),Object(L.a)(this.delay)),this.romsService.addRomHacks().pipe(Object(z.a)(1),Object(L.a)(this.delay)))}},{key:"ngOnDestroy",value:function(){this.romsUpdated&&(this.deleteRomsSub.unsubscribe(),this.addRomsSub.unsubscribe())}},{key:"updateRoms",value:function(){this.showBtn=!1,this.loading=!0,this.deleteRoms(this.addRoms.bind(this,e))}},{key:"deleteRoms",value:function(e){var t=this;this.deleteRomsSub=this.deleteRomsObs$.subscribe({error:function(e){t.loading=!1,t.romsUpdated=!1,y.a.error(e)},complete:function(){return e()}})}},{key:"addRoms",value:function(){var e=this;this.addRomsSub=this.addRomsObs$.subscribe({error:function(t){e.loading=!1,y.a.error(t)},complete:function(){e.romsUpdated=!0,e.loading=!1}})}}]),e}()).\u0275fac=function(e){return new(e||W)(O.Jb(N.a))},W.\u0275cmp=O.Db({type:W,selectors:[["account-update-roms"]],decls:6,vars:3,consts:[["updateROMsWarning",""],["id","update-roms-spinner-container",4,"ngIf"],["class","mb-3","type","button","appBtn","","btnType","warning",3,"ngbTooltip","click",4,"ngIf"],["id","roms-updated-alert-container","appAlert","",3,"alertType",4,"ngIf"],["id","update-roms-spinner-container"],["type","border","color","primary",3,"loading"],["type","button","appBtn","","btnType","warning",1,"mb-3",3,"ngbTooltip","click"],["id","roms-updated-alert-container","appAlert","",3,"alertType"],[1,"mr-1",3,"icon"]],template:function(e,t){1&e&&(O.Mb(0),O.Dc(1,H,4,0,"ng-template",null,0,O.Ec),O.Dc(3,V,2,1,"div",1),O.Dc(4,X,2,1,"button",2),O.Dc(5,G,3,4,"div",3),O.Lb()),2&e&&(O.wb(3),O.lc("ngIf",t.loading),O.wb(1),O.lc("ngIf",t.showBtn),O.wb(1),O.lc("ngIf",void 0!==t.romsUpdated))},directives:[l.o,J,S.a,u.x,C.a,K.a],styles:["#update-roms-spinner-container[_ngcontent-%COMP%]{margin-bottom:1rem;padding:.11rem}#roms-updated-alert-container[_ngcontent-%COMP%]{margin-bottom:.75rem;padding:.5rem}"],data:{animation:[q.a]}}),W),Y=((Q=function(){function e(t,n,r){s(this,e),this.modal=t,this.userService=n,this.router=r,this.isErrorDeleting=new O.n,this.loading=new O.n,this.firedOff=new O.n}return c(e,[{key:"ngOnInit",value:function(){this.btnDisabled=!1}},{key:"deleteCurrentUser",value:function(){var e=this;this.firedOff.emit(!0),this.btnDisabled=!0,this.userService.deleteUser(JSON.parse(g.a.getCookie("user")).id).subscribe((function(){e.isErrorDeleting.emit(!1),e.loading.emit(!1),e.router.navigate(["/","home"]),f.a.logout()}),(function(t){e.btnDisabled=!1,e.loading.emit(!1),e.firedOff.emit(!1),e.isErrorDeleting.emit(!0),y.a.error(t)})),this.closeModal()}},{key:"closeModal",value:function(){this.modal.close("Ok click")}}]),e}()).\u0275fac=function(e){return new(e||Q)(O.Jb(u.c),O.Jb(b.a),O.Jb(d.d))},Q.\u0275cmp=O.Db({type:Q,selectors:[["account-delete-user-modal"]],inputs:{username:"username"},outputs:{isErrorDeleting:"isErrorDeleting",loading:"loading",firedOff:"firedOff"},decls:25,vars:4,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"hidden"],[1,"modal-footer","justify-content-start"],["type","button","appBtn","","btnType","danger",3,"disabled","click"],["type","button","appBtn","","btnType","secondary-outline",3,"click"]],template:function(e,t){1&e&&(O.Mb(0),O.Ob(1,"div",0),O.Ob(2,"h4",1),O.Fc(3,"Account deletion"),O.Nb(),O.Ob(4,"button",2),O.ac("click",(function(){return t.modal.dismiss("Cross click")})),O.Ob(5,"span",3),O.Fc(6,"\xd7"),O.Nb(),O.Nb(),O.Nb(),O.Ob(7,"div",4),O.Ob(8,"p"),O.Ob(9,"strong"),O.Fc(10,"Are you sure you want to delete your own account "),O.Ob(11,"span",5),O.Fc(12,"("),O.Nb(),O.Fc(13),O.Ob(14,"span",5),O.Fc(15,")"),O.Nb(),O.Fc(16,"?"),O.Nb(),O.Nb(),O.Ob(17,"p"),O.Ob(18,"span"),O.Fc(19,"This operation cannot be undone."),O.Nb(),O.Nb(),O.Nb(),O.Ob(20,"div",6),O.Ob(21,"button",7),O.ac("click",(function(){return t.deleteCurrentUser()})),O.Fc(22," Ok "),O.Nb(),O.Ob(23,"button",8),O.ac("click",(function(){return t.modal.dismiss("cancel click")})),O.Fc(24," Cancel "),O.Nb(),O.Nb(),O.Lb()),2&e&&(O.wb(11),O.lc("hidden",!t.username),O.wb(2),O.Gc(t.username||""),O.wb(1),O.lc("hidden",!t.username),O.wb(7),O.lc("disabled",t.btnDisabled))},directives:[S.a],styles:[".modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:red}"]}),Q),ee=(($=function(){function e(t){s(this,e),this.modalService=t,this.isError=new O.n}return c(e,[{key:"ngOnInit",value:function(){this.loading=!1,this.btnText="Delete User!"}},{key:"confirmDeletion",value:function(){var e=this,t=this.modalService.open(Y,{centered:!0});t.componentInstance.loading.subscribe((function(t){e.loading=t})),t.componentInstance.isErrorDeleting.subscribe((function(t){e.isError.emit(t)})),t.componentInstance.firedOff.subscribe((function(t){e.firedOff=t})),t.componentInstance.username=JSON.parse(g.a.getCookie("user")).username}}]),e}()).\u0275fac=function(e){return new(e||$)(O.Jb(u.f))},$.\u0275cmp=O.Db({type:$,selectors:[["account-delete-user-btn"]],outputs:{isError:"isError"},decls:4,vars:3,consts:[[3,"loading"],["id","delete-user-btn","type","button","appBtn","","btnType","danger",3,"disabled","click"]],template:function(e,t){1&e&&(O.Mb(0),O.Kb(1,"spinners-gif-spinner",0),O.Ob(2,"button",1),O.ac("click",(function(){return t.confirmDeletion()})),O.Fc(3),O.Nb(),O.Lb()),2&e&&(O.wb(1),O.lc("loading",t.loading),O.wb(1),O.lc("disabled",t.firedOff),O.wb(1),O.Hc(" ",t.btnText," "))},directives:[k.a,S.a],styles:["#delete-user-btn[_ngcontent-%COMP%]{cursor:pointer!important;display:inline-block!important}"]}),$);function te(e,t){1&e&&(O.Mb(0),O.Ob(1,"h4",5),O.Fc(2,"Account"),O.Nb(),O.Ob(3,"div",6),O.Fc(4," There was an error while trying to load your user information. Please try again later. "),O.Nb(),O.Lb())}function ne(e,t){if(1&e){var n=O.Pb();O.Ob(0,"div",34),O.Kb(1,"fa-icon",35),O.Fc(2,"\xa0If you do not enter a name, your name ("),O.Ob(3,"b"),O.Fc(4,"not your user"),O.Nb(),O.Fc(5,") will be deleted from the database. "),O.Ob(6,"button",36),O.ac("click",(function(){return O.wc(n),O.dc(4).storeAlertState("notice")})),O.Ob(7,"span",37),O.Fc(8,"\xd7"),O.Nb(),O.Nb(),O.Nb()}if(2&e){var r=O.dc(4);O.wb(1),O.lc("icon",r.faInfoCircle)}}function re(e,t){if(1&e&&(O.Mb(0),O.Ob(1,"div",38),O.Ob(2,"div",39),O.Fc(3),O.Nb(),O.Ob(4,"div",39),O.Fc(5),O.Nb(),O.Nb(),O.Lb()),2&e){O.dc();var n=O.uc(16),r=O.dc(3);O.wb(1),O.lc("hidden",!(n.touched&&n.invalid)),O.wb(1),O.lc("hidden",!(null!=n.errors&&n.errors.minlength)),O.wb(1),O.Ic(" Name is too short (min: ",r.lengths.name[0],", current: ",r.user.name.length,"). "),O.wb(1),O.lc("hidden",!(null!=n.errors&&n.errors.maxlength)),O.wb(1),O.Ic(" Name is too long (max: ",r.lengths.name[1],", current: ",r.user.name.length,"). ")}}function ie(e,t){if(1&e&&(O.Mb(0),O.Ob(1,"div",38),O.Ob(2,"div",39),O.Fc(3),O.Nb(),O.Ob(4,"div",39),O.Fc(5),O.Nb(),O.Ob(6,"div",39),O.Fc(7," Username is required. "),O.Nb(),O.Nb(),O.Lb()),2&e){O.dc();var n=O.uc(24),r=O.dc(3);O.wb(1),O.lc("hidden",!(n.touched&&n.invalid)),O.wb(1),O.lc("hidden",!(null!=n.errors&&n.errors.minlength)),O.wb(1),O.Ic(" Username is too short (min: ",r.lengths.username[0],", current: ",r.user.username.length,"). "),O.wb(1),O.lc("hidden",!(null!=n.errors&&n.errors.maxlength)),O.wb(1),O.Ic(" Username is too long (max: ",r.lengths.username[1],", current: ",r.user.username.length,"). "),O.wb(1),O.lc("hidden",!(null!=n.errors&&n.errors.required))}}function oe(e,t){if(1&e&&(O.Mb(0),O.Ob(1,"div",38),O.Ob(2,"div",39),O.Fc(3),O.Nb(),O.Ob(4,"div",39),O.Fc(5),O.Nb(),O.Ob(6,"div",39),O.Fc(7," Password is required. "),O.Nb(),O.Nb(),O.Lb()),2&e){O.dc();var n=O.uc(32),r=O.dc(3);O.wb(1),O.lc("hidden",!(n.touched&&n.invalid)),O.wb(1),O.lc("hidden",!(null!=n.errors&&n.errors.minlength)),O.wb(1),O.Ic(" Password is too short (min: ",r.lengths.password[0],", current: ",r.user.password.length,"). "),O.wb(1),O.lc("hidden",!(null!=n.errors&&n.errors.maxlength)),O.wb(1),O.Ic(" Password is too long (max: ",r.lengths.password[1],", current: ",r.user.password.length,"). "),O.wb(1),O.lc("hidden",!(null!=n.errors&&n.errors.required))}}function se(e,t){1&e&&(O.Mb(0),O.Fc(1," The username you chose already belongs to another user. "),O.Lb())}function ae(e,t){1&e&&(O.Fc(0," There was an error while trying to update your account."),O.Kb(1,"br"),O.Fc(2,"Please try again later. "))}function ce(e,t){if(1&e&&(O.Ob(0,"div",40),O.Dc(1,se,2,0,"ng-container",3),O.Dc(2,ae,3,0,"ng-template",null,41,O.Ec),O.Nb()),2&e){var n=O.uc(3),r=O.dc(4);O.wb(1),O.lc("ngIf",r.userExists)("ngIfElse",n)}}function le(e,t){if(1&e){var n=O.Pb();O.Ob(0,"div",42),O.Kb(1,"fa-icon",35),O.Fc(2," Updating your user data will log you out. "),O.Ob(3,"button",43),O.ac("click",(function(){return O.wc(n),O.dc(4).storeAlertState("warning")})),O.Fc(4," \xd7 "),O.Nb(),O.Nb()}if(2&e){var r=O.dc(4);O.wb(1),O.lc("icon",r.faExclamationTriangle)}}function ue(e,t){1&e&&(O.Ob(0,"div",44),O.Fc(1," Oops, looks like there was an error while trying to delete your user."),O.Kb(2,"br"),O.Fc(3,"Please try again later. "),O.Nb())}function de(e,t){if(1&e){var n=O.Pb();O.Ob(0,"form",8,9),O.ac("ngSubmit",(function(){return O.wc(n),O.dc(3).save()})),O.Ob(2,"fieldset"),O.Ob(3,"legend",10),O.Fc(4,"Account"),O.Nb(),O.Dc(5,ne,9,1,"div",11),O.Ob(6,"div",12),O.Ob(7,"p",13),O.Ob(8,"span",14),O.Fc(9,"*"),O.Nb(),O.Fc(10," = required "),O.Nb(),O.Ob(11,"div",15),O.Mb(12),O.Ob(13,"label",16),O.Fc(14,"Name"),O.Nb(),O.Ob(15,"input",17,18),O.ac("ngModelChange",(function(e){return O.wc(n),O.dc(3).user.name=e})),O.Nb(),O.Dc(17,re,6,7,"ng-container",19),O.Lb(),O.Mb(18),O.Ob(19,"label",20),O.Fc(20,"Username\xa0"),O.Ob(21,"span",21),O.Fc(22,"*"),O.Nb(),O.Nb(),O.Ob(23,"input",22,23),O.ac("ngModelChange",(function(e){return O.wc(n),O.dc(3).user.username=e})),O.Nb(),O.Dc(25,ie,8,8,"ng-container",19),O.Lb(),O.Mb(26),O.Ob(27,"label",24),O.Fc(28,"Password\xa0"),O.Ob(29,"span",21),O.Fc(30,"*"),O.Nb(),O.Nb(),O.Ob(31,"input",25,26),O.ac("ngModelChange",(function(e){return O.wc(n),O.dc(3).user.password=e}))("focus",(function(){return O.wc(n),O.dc(3).pwFocused=!0}))("blur",(function(){return O.wc(n),O.dc(3).pwFocused=!1})),O.Nb(),O.Dc(33,oe,8,8,"ng-container",19),O.Lb(),O.Nb(),O.Ob(34,"button",27),O.ac("click",(function(){return O.wc(n),O.dc(3).sanitizeData()})),O.Fc(35," Save "),O.Nb(),O.Nb(),O.Nb(),O.Dc(36,ce,4,2,"div",28),O.Ob(37,"div",29),O.Dc(38,le,5,1,"div",30),O.Nb(),O.Dc(39,ue,4,0,"div",31),O.Ob(40,"div",32),O.Kb(41,"account-update-roms"),O.Ob(42,"account-delete-user-btn",33),O.ac("isError",(function(e){return O.wc(n),O.dc(3).deletionError(e)})),O.Nb(),O.Nb(),O.Nb()}if(2&e){var r=O.uc(1),i=O.dc(3);O.wb(5),O.lc("ngIf",!i.noticeClosed),O.wb(10),O.oc("placeholder","min: ",i.lengths.name[0],", max: ",i.lengths.name[1]," (optional)"),O.lc("ngModel",i.user.name),O.wb(2),O.lc("ngIf",null!==i.user.name),O.wb(6),O.oc("placeholder","min: ",i.lengths.username[0],", max: ",i.lengths.username[1],""),O.lc("ngModel",i.user.username),O.wb(2),O.lc("ngIf",i.user.hasOwnProperty("username")),O.wb(6),O.oc("placeholder","min: ",i.lengths.password[0],", max: ",i.lengths.password[1],""),O.lc("type",i.changePwInputType())("ngModel",i.user.password),O.wb(2),O.lc("ngIf",i.user.hasOwnProperty("password")),O.wb(1),O.lc("disabled",i.firedOff||!r.valid||!(i.user.username||i.user.username.length>0||i.user.password||i.user.password.length>0||i.user.name||i.user.name.length>0)),O.wb(2),O.lc("ngIf",i.updateFail),O.wb(2),O.lc("ngIf",!i.warningClosed),O.wb(1),O.lc("ngIf",i.isErrorDeleting)}}function be(e,t){if(1&e&&O.Dc(0,de,43,18,"form",7),2&e){var n=O.dc(2);O.lc("ngIf",!n.errLoadingUsr)}}function fe(e,t){if(1&e&&(O.Ob(0,"div",2),O.Dc(1,te,5,0,"ng-container",3),O.Dc(2,be,1,1,"ng-template",null,4,O.Ec),O.Nb()),2&e){var n=O.uc(3),r=O.dc();O.wb(1),O.lc("ngIf",r.errLoadingUsr)("ngIfElse",n)}}var he,pe,me,ge=((he=function(){function e(t,n){s(this,e),this.userService=t,this.router=n,String.prototype.sanitizeXSS=p.a,String.prototype.removeStringChars=m.a}return c(e,[{key:"ngOnInit",value:function(){this.lengths=b.b,this.userExists=!1,this.updateFail=!1,this.pwFocused=!1,this.ready=!1,this.firedOff=!1,this.errLoadingUsr=!1,this.isErrorDeleting=!1,this.faExclamationTriangle=h.e,this.faInfoCircle=h.i,g.a.getCookie("user")?(this.userId=JSON.parse(g.a.getCookie("user")).id,this.retrieveUserData(this.userId)):this.errLoadingUsr=!0,v.a.getState("notice_closed")||v.a.setState("notice_closed",!1),w.a.getState("warning_closed")||w.a.setState("warning_closed",!1),this.noticeClosed=v.a.getState("notice_closed"),this.warningClosed=w.a.getState("warning_closed")}},{key:"ngOnDestroy",value:function(){this.userSub.unsubscribe()}},{key:"retrieveUserData",value:function(e){var t=this;this.userObs$=this.userService.getUser(e),this.userSub=this.userObs$.subscribe((function(e){e.name&&""!==e.name||(e.name=""),e.password="",t.user=e,t.ready=!0}),(function(e){t.errLoadingUsr=!0,t.ready=!0,y.a.error(e)}))}},{key:"save",value:function(){this.firedOff=!0,this.ready=!1,this.user.name&&""!==this.user.name||(this.user.name=null),this.updateUser(this.userId,this.user,["error","user_exists"])}},{key:"sanitizeData",value:function(){this.user.name&&(this.user.name=this.user.name.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.user.username&&(this.user.username=this.user.username.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.user.password&&(this.user.password=this.user.password.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars())}},{key:"changePwInputType",value:function(){return this.pwFocused?"text":"password"}},{key:"deletionError",value:function(e){this.isErrorDeleting=e}},{key:"storeAlertState",value:function(e){switch(e){case"notice":v.a.setState("notice_closed",!0);break;case"warning":w.a.setState("warning_closed",!0);break;default:y.a.error("Unknown alert name.")}}},{key:"updateUser",value:function(e,t,n){var r=this;this.userService.updateUser(e,t).subscribe((function(){r.ready=!0,r.userExists=!1,f.a.logout(),r.router.navigate(["/","home"])}),(function(e){r.ready=!0,r.updateFail=!0,r.firedOff=!1,!0===e[n[0]][n[1]]&&(r.userExists=!0),y.a.error(e)}))}}]),e}()).\u0275fac=function(e){return new(e||he)(O.Jb(b.a),O.Jb(d.d))},he.\u0275cmp=O.Db({type:he,selectors:[["account"]],decls:3,vars:2,consts:[[3,"loading"],["class","container text-center mb-2","id","form-container",4,"ngIf"],["id","form-container",1,"container","text-center","mb-2"],[4,"ngIf","ngIfElse"],["account",""],[1,"mt-1"],["appAlert","","alertType","danger",1,"mt-3"],["name","accountForm","autocomplete","on",3,"ngSubmit",4,"ngIf"],["name","accountForm","autocomplete","on",3,"ngSubmit"],["accountForm","ngForm"],[1,"pt-2","pb-2","text-center"],["class","alert-dismissible fade show text-left","appAlert","","alertType","info","role","alert",4,"ngIf"],["id","border-container",1,"border","rounded"],[1,"mb-0"],[1,"text-danger","font-weight-bold"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","name","name","autocomplete","name","minlength","1","maxlength","100",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["for","username",1,"font-weight-bold","pt-1"],[1,"text-danger"],["type","text","id","username","name","username","autocomplete","username","minlength","3","maxlength","22","required","",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["username","ngModel"],["for","password",1,"font-weight-bold"],["id","password","name","password","autocomplete","new-password","minlength","6","maxlength","256","required","",1,"form-control",3,"type","placeholder","ngModel","ngModelChange","focus","blur"],["password","ngModel"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["class","mt-2","appAlert","","alertType","danger",4,"ngIf"],[1,"mt-3","mb-3"],["class","font-weight-bold alert-dismissible show fade","appAlert","","alertType","warning",4,"ngIf"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],[1,"d-flex","flex-column"],[3,"isError"],["appAlert","","alertType","info","role","alert",1,"alert-dismissible","fade","show","text-left"],[1,"mr-1",3,"icon"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["appAlert","","alertType","danger",1,"mt-2"],["normalErrMsg",""],["appAlert","","alertType","warning",1,"font-weight-bold","alert-dismissible","show","fade"],["type","button","data-dismiss","alert",1,"close","p-2","mr-2",3,"click"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,t){1&e&&(O.Mb(0),O.Kb(1,"spinners-gif-spinner",0),O.Dc(2,fe,4,2,"div",1),O.Lb()),2&e&&(O.wb(1),O.lc("loading",!t.ready&&!t.errLoadingUsr),O.wb(1),O.lc("ngIf",t.ready))},directives:[k.a,l.o,C.a,x.u,x.m,x.n,x.a,x.i,x.h,x.l,x.o,x.r,S.a,Z,ee,K.a],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px) and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px) and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px) and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0) and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),he),ye=o("UTcu"),ve=o("Dat7"),we=[{path:"",component:ge,canActivate:[ye.a,ve.a]}],Oe=((pe=function e(){s(this,e)}).\u0275mod=O.Hb({type:pe}),pe.\u0275inj=O.Gb({factory:function(e){return new(e||pe)},imports:[[d.h.forChild(we)],d.h]}),pe),ke=o("WjtB"),Ce=o("FUS3"),xe=((me=function e(){s(this,e)}).\u0275mod=O.Hb({type:me}),me.\u0275inj=O.Gb({factory:function(e){return new(e||me)},providers:[b.a,N.a],imports:[[l.c,u.g,Oe,ke.a,x.g,K.b,Ce.a]]}),me)}}])}();