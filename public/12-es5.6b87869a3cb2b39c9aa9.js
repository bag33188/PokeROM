!function(){function e(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function r(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=o(e);if(t){var s=o(this).constructor;n=Reflect.construct(r,arguments,s)}else n=r.apply(this,arguments);return i(this,n)}}function i(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function o(e){return(o=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{nDdO:function(n,i,o){"use strict";o.r(i),o.d(i,"AccountModule",function(){return Oe});var a,u=o("ofXK"),l=o("1kSV"),d=o("tyNb"),b=o("qfBg"),h=o("lGQG"),p=o("wHSu"),f=o("Rv5h"),m=o("vuBd"),g=o("QTu/"),v=o("Mb37"),y=o("DRYZ"),w=o("yZ9z"),R=o("fXoL"),k=o("NvMS"),x=o("FpAq"),O=o("3Pt+"),S=o("siFw"),C=o("t52u"),z=o("yCtX"),Q=o("DH7j"),I=o("7o/Q"),G=o("l7GE"),E=o("ZUHj"),T=o("Lhse"),M=function(){function e(t){s(this,e),this.resultSelector=t}return c(e,[{key:"call",value:function(e,t){return t.subscribe(new P(e,this.resultSelector))}}]),e}(),P=function(e){t(i,e);var n=r(i);function i(e,t){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.create(null);return s(this,i),(r=n.call(this,e)).iterators=[],r.active=0,r.resultSelector="function"==typeof t?t:null,r.values=o,r}return c(i,[{key:"_next",value:function(e){var t=this.iterators;Object(Q.a)(e)?t.push(new _(e)):t.push("function"==typeof e[T.a]?new U(e[T.a]()):new D(this.destination,this,e))}},{key:"_complete",value:function(){var e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(var n=0;n<t;n++){var r=e[n];r.stillUnsubscribed?this.destination.add(r.subscribe(r,n)):this.active--}}else this.destination.complete()}},{key:"notifyInactive",value:function(){this.active--,0===this.active&&this.destination.complete()}},{key:"checkIterators",value:function(){for(var e=this.iterators,t=e.length,n=this.destination,r=0;r<t;r++){var i=e[r];if("function"==typeof i.hasValue&&!i.hasValue())return}for(var o=!1,s=[],a=0;a<t;a++){var c=e[a],u=c.next();if(c.hasCompleted()&&(o=!0),u.done)return void n.complete();s.push(u.value)}this.resultSelector?this._tryresultSelector(s):n.next(s),o&&n.complete()}},{key:"_tryresultSelector",value:function(e){var t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}]),i}(I.a),U=function(){function e(t){s(this,e),this.iterator=t,this.nextResult=t.next()}return c(e,[{key:"hasValue",value:function(){return!0}},{key:"next",value:function(){var e=this.nextResult;return this.nextResult=this.iterator.next(),e}},{key:"hasCompleted",value:function(){var e=this.nextResult;return e&&e.done}}]),e}(),_=function(){function e(t){s(this,e),this.array=t,this.index=0,this.length=0,this.length=t.length}return c(e,[{key:T.a,value:function(){return this}},{key:"next",value:function(e){var t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}},{key:"hasValue",value:function(){return this.array.length>this.index}},{key:"hasCompleted",value:function(){return this.array.length===this.index}}]),e}(),D=function(e){t(i,e);var n=r(i);function i(e,t,r){var o;return s(this,i),(o=n.call(this,e)).parent=t,o.observable=r,o.stillUnsubscribed=!0,o.buffer=[],o.isComplete=!1,o}return c(i,[{key:T.a,value:function(){return this}},{key:"next",value:function(){var e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}},{key:"hasValue",value:function(){return this.buffer.length>0}},{key:"hasCompleted",value:function(){return 0===this.buffer.length&&this.isComplete}},{key:"notifyComplete",value:function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}},{key:"notifyNext",value:function(e,t,n,r,i){this.buffer.push(t),this.parent.checkIterators()}},{key:"subscribe",value:function(e,t){return Object(E.a)(this,this.observable,this,t)}}]),i}(G.a),j=o("SxV6"),A=o("3E0/"),N=o("IzEk"),F=o("twK/"),B=o("Ql4B"),J=((a=function(){function t(){s(this,t)}return c(t,[{key:"ngOnInit",value:function(){var t;!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses=(e(t={},this.type,!0),e(t,this.color,!0),e(t,"spacing",null!=this.spaced&&!0===this.spaced),t))}},{key:"setType",value:function(){this.type=this.getType()}},{key:"setColor",value:function(){this.color=this.getColor()}},{key:"getType",value:function(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:v.a.error("Invalid type.")}else v.a.error("Type must be a string.")}},{key:"getColor",value:function(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:v.a.error("Invalid color.")}else v.a.error("Color must be a string.")}},{key:"checkForErrors",value:function(){return this.spinnerType?this.spinnerColor?null==this.loading?(v.a.error("Loading property is required."),!0):null!=this.spaced&&"boolean"!=typeof this.spaced?(v.a.error("Spaced property must be a boolean."),!0):!(!this.customSize||"number"==typeof this.customSize||(v.a.error("Custom size property must be a number data-type."),0)):(v.a.error("Color is required."),!0):(v.a.error("Type is required."),!0)}}]),t}()).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=R.Gb({type:a,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:6,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(e,t){1&e&&(R.Rb(0,"div",0),R.Rb(1,"span",1),R.Gc(2,"Loading..."),R.Qb(),R.Qb()),2&e&&(R.Dc("height",t.customSize?t.customSize:32,"px")("width",t.customSize?t.customSize:32,"px"),R.mc("ngClass",t.ngClasses)("hidden",!t.loading))},directives:[u.m],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),a),q=o("6NWb");function L(e,t){1&e&&(R.Rb(0,"b"),R.Gc(1,"Warning"),R.Qb(),R.Nb(2,"br"),R.Gc(3,"Updating ROMs will remove all favorites. "))}function V(e,t){if(1&e&&(R.Rb(0,"div",4),R.Nb(1,"spinners-bootstrap-spinner",5),R.Qb()),2&e){var n=R.ec();R.zb(1),R.mc("loading",n.loading)}}function X(e,t){if(1&e){var n=R.Sb();R.Rb(0,"button",6),R.bc("click",function(){return R.xc(n),R.ec().updateRoms()}),R.Gc(1," Update ROMs "),R.Qb()}if(2&e){R.ec();var r=R.vc(2);R.mc("ngbTooltip",r)}}function $(e,t){if(1&e&&(R.Rb(0,"div",7),R.Nb(1,"fa-icon",8),R.Gc(2),R.Qb()),2&e){var n=R.ec();R.mc("shadow",!0)("alertType",n.romsUpdated?"success":"danger")("@fadeIn",void 0),R.zb(1),R.mc("icon",n.romsUpdated?n.faCheckCircle:n.faTimesCircle),R.zb(1),R.Ic(" ",n.romsUpdated?"ROMs successfully updated!":"Error updating ROMs, please try again later."," ")}}var H,K,W,Z=((W=function(){function e(t){s(this,e),this.romsService=t}return c(e,[{key:"ngOnInit",value:function(){this.faTimesCircle=F.c,this.faCheckCircle=F.a,this.showBtn=!0,this.loading=!1,this.deleteRomsObs$=this.romsService.deleteAllRoms().pipe(Object(j.a)(),Object(A.a)(442)),this.addRomsObs$=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[t.length-1];return"function"==typeof r&&t.pop(),Object(z.a)(t,void 0).lift(new M(r))}(this.romsService.addCoreRoms().pipe(Object(N.a)(1),Object(A.a)(442)),this.romsService.addRomHacks().pipe(Object(N.a)(1),Object(A.a)(442)))}},{key:"ngOnDestroy",value:function(){this.romsUpdated&&(this.deleteRomsSub.unsubscribe(),this.addRomsSub.unsubscribe())}},{key:"updateRoms",value:function(){this.showBtn=!1,this.loading=!0,this.deleteRoms(this.addRoms.bind(this,e))}},{key:"deleteRoms",value:function(e){var t=this;this.deleteRomsSub=this.deleteRomsObs$.subscribe({error:function(e){t.loading=!1,t.romsUpdated=!1,v.a.error(e)},complete:function(){return e()}})}},{key:"addRoms",value:function(){var e=this;this.addRomsSub=this.addRomsObs$.subscribe({error:function(t){e.loading=!1,v.a.error(t)},complete:function(){e.romsUpdated=!0,e.loading=!1}})}}]),e}()).\u0275fac=function(e){return new(e||W)(R.Mb(C.a))},W.\u0275cmp=R.Gb({type:W,selectors:[["account-update-roms"]],decls:6,vars:3,consts:[["updateROMsWarning",""],["id","update-roms-spinner-container",4,"ngIf"],["class","mb-3","type","button","appBtn","","btnType","warning",3,"ngbTooltip","click",4,"ngIf"],["id","roms-updated-alert-container","appAlert","",3,"shadow","alertType",4,"ngIf"],["id","update-roms-spinner-container"],["type","border","color","primary",3,"loading"],["type","button","appBtn","","btnType","warning",1,"mb-3",3,"ngbTooltip","click"],["id","roms-updated-alert-container","appAlert","",3,"shadow","alertType"],[1,"mr-1",3,"icon"]],template:function(e,t){1&e&&(R.Pb(0),R.Ec(1,L,4,0,"ng-template",null,0,R.Fc),R.Ec(3,V,2,1,"div",1),R.Ec(4,X,2,1,"button",2),R.Ec(5,$,3,5,"div",3),R.Ob()),2&e&&(R.zb(3),R.mc("ngIf",t.loading),R.zb(1),R.mc("ngIf",t.showBtn),R.zb(1),R.mc("ngIf",void 0!==t.romsUpdated))},directives:[u.o,J,S.a,l.x,x.a,q.a],styles:["#update-roms-spinner-container[_ngcontent-%COMP%]{margin-bottom:1rem;padding:.11rem}#roms-updated-alert-container[_ngcontent-%COMP%]{margin-bottom:.75rem;padding:.5rem}"],data:{animation:[B.a]}}),W),Y=((K=function(){function e(t,n,r){s(this,e),this.modal=t,this.userService=n,this.router=r,this.isErrorDeleting=new R.o,this.loading=new R.o,this.firedOff=new R.o}return c(e,[{key:"ngOnInit",value:function(){this.btnDisabled=!1}},{key:"deleteCurrentUser",value:function(){var e=this;this.firedOff.emit(!0),this.btnDisabled=!0,this.userService.deleteUser(JSON.parse(g.a.getCookie("user")).id).subscribe(function(){e.isErrorDeleting.emit(!1),e.loading.emit(!1),e.router.navigate(["/","home"]),h.a.logout()},function(t){e.btnDisabled=!1,e.loading.emit(!1),e.firedOff.emit(!1),e.isErrorDeleting.emit(!0),v.a.error(t)}),this.closeModal()}},{key:"closeModal",value:function(){this.modal.close("Ok click")}}]),e}()).\u0275fac=function(e){return new(e||K)(R.Mb(l.c),R.Mb(b.a),R.Mb(d.d))},K.\u0275cmp=R.Gb({type:K,selectors:[["account-delete-user-modal"]],inputs:{username:"username"},outputs:{isErrorDeleting:"isErrorDeleting",loading:"loading",firedOff:"firedOff"},decls:25,vars:4,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"hidden"],[1,"modal-footer","justify-content-start"],["type","button","appBtn","","btnType","danger",3,"disabled","click"],["type","button","appBtn","","btnType","secondary-outline",3,"click"]],template:function(e,t){1&e&&(R.Pb(0),R.Rb(1,"div",0),R.Rb(2,"h4",1),R.Gc(3,"Account deletion"),R.Qb(),R.Rb(4,"button",2),R.bc("click",function(){return t.modal.dismiss("Cross click")}),R.Rb(5,"span",3),R.Gc(6,"\xd7"),R.Qb(),R.Qb(),R.Qb(),R.Rb(7,"div",4),R.Rb(8,"p"),R.Rb(9,"strong"),R.Gc(10,"Are you sure you want to delete your own account "),R.Rb(11,"span",5),R.Gc(12,"("),R.Qb(),R.Gc(13),R.Rb(14,"span",5),R.Gc(15,")"),R.Qb(),R.Gc(16,"?"),R.Qb(),R.Qb(),R.Rb(17,"p"),R.Rb(18,"span"),R.Gc(19,"This operation cannot be undone."),R.Qb(),R.Qb(),R.Qb(),R.Rb(20,"div",6),R.Rb(21,"button",7),R.bc("click",function(){return t.deleteCurrentUser()}),R.Gc(22," Ok "),R.Qb(),R.Rb(23,"button",8),R.bc("click",function(){return t.modal.dismiss("cancel click")}),R.Gc(24," Cancel "),R.Qb(),R.Qb(),R.Ob()),2&e&&(R.zb(11),R.mc("hidden",!t.username),R.zb(2),R.Hc(t.username||""),R.zb(1),R.mc("hidden",!t.username),R.zb(7),R.mc("disabled",t.btnDisabled))},directives:[S.a],styles:[".modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:red}"]}),K),ee=((H=function(){function e(t){s(this,e),this.modalService=t,this.isError=new R.o}return c(e,[{key:"ngOnInit",value:function(){this.loading=!1,this.btnText="Delete User!"}},{key:"confirmDeletion",value:function(){var e=this,t=this.modalService.open(Y,{centered:!0,backdrop:"static"});t.componentInstance.loading.subscribe(function(t){e.loading=t}),t.componentInstance.isErrorDeleting.subscribe(function(t){e.isError.emit(t)}),t.componentInstance.firedOff.subscribe(function(t){e.firedOff=t}),t.componentInstance.username=JSON.parse(g.a.getCookie("user")).username}}]),e}()).\u0275fac=function(e){return new(e||H)(R.Mb(l.f))},H.\u0275cmp=R.Gb({type:H,selectors:[["account-delete-user-btn"]],outputs:{isError:"isError"},decls:4,vars:3,consts:[[3,"loading"],["id","delete-user-btn","type","button","appBtn","","btnType","danger",3,"disabled","click"]],template:function(e,t){1&e&&(R.Pb(0),R.Nb(1,"spinners-gif-spinner",0),R.Rb(2,"button",1),R.bc("click",function(){return t.confirmDeletion()}),R.Gc(3),R.Qb(),R.Ob()),2&e&&(R.zb(1),R.mc("loading",t.loading),R.zb(1),R.mc("disabled",t.firedOff),R.zb(1),R.Ic(" ",t.btnText," "))},directives:[k.a,S.a],styles:["#delete-user-btn[_ngcontent-%COMP%]{cursor:pointer!important;display:inline-block!important}"]}),H);function te(e,t){1&e&&(R.Pb(0),R.Rb(1,"h4",5),R.Gc(2,"Account"),R.Qb(),R.Rb(3,"div",6),R.Gc(4," There was an error while trying to load your user information. Please try again later. "),R.Qb(),R.Ob()),2&e&&(R.zb(3),R.mc("shadow",!0))}function ne(e,t){if(1&e){var n=R.Sb();R.Rb(0,"div",34),R.Nb(1,"fa-icon",35),R.Gc(2,"\xa0If you do not enter a name, your name ("),R.Rb(3,"b"),R.Gc(4,"not your user"),R.Qb(),R.Gc(5,") will be deleted from the database. "),R.Rb(6,"button",36),R.bc("click",function(){return R.xc(n),R.ec(4).storeAlertState("notice")}),R.Rb(7,"span",37),R.Gc(8,"\xd7"),R.Qb(),R.Qb(),R.Qb()}if(2&e){var r=R.ec(4);R.mc("shadow",!0),R.zb(1),R.mc("icon",r.faInfoCircle)}}function re(e,t){if(1&e&&(R.Pb(0),R.Rb(1,"div",38),R.Rb(2,"div",39),R.Gc(3),R.Qb(),R.Rb(4,"div",39),R.Gc(5),R.Qb(),R.Qb(),R.Ob()),2&e){R.ec();var n=R.vc(16),r=R.ec(3);R.zb(1),R.mc("hidden",!(n.touched&&n.invalid)),R.zb(1),R.mc("hidden",!(null!=n.errors&&n.errors.minlength)),R.zb(1),R.Jc(" Name is too short (min: ",r.lengths.name[0],", current: ",r.user.name.length,"). "),R.zb(1),R.mc("hidden",!(null!=n.errors&&n.errors.maxlength)),R.zb(1),R.Jc(" Name is too long (max: ",r.lengths.name[1],", current: ",r.user.name.length,"). ")}}function ie(e,t){if(1&e&&(R.Pb(0),R.Rb(1,"div",38),R.Rb(2,"div",39),R.Gc(3),R.Qb(),R.Rb(4,"div",39),R.Gc(5),R.Qb(),R.Rb(6,"div",39),R.Gc(7," Username is required. "),R.Qb(),R.Qb(),R.Ob()),2&e){R.ec();var n=R.vc(24),r=R.ec(3);R.zb(1),R.mc("hidden",!(n.touched&&n.invalid)),R.zb(1),R.mc("hidden",!(null!=n.errors&&n.errors.minlength)),R.zb(1),R.Jc(" Username is too short (min: ",r.lengths.username[0],", current: ",r.user.username.length,"). "),R.zb(1),R.mc("hidden",!(null!=n.errors&&n.errors.maxlength)),R.zb(1),R.Jc(" Username is too long (max: ",r.lengths.username[1],", current: ",r.user.username.length,"). "),R.zb(1),R.mc("hidden",!(null!=n.errors&&n.errors.required))}}function oe(e,t){if(1&e&&(R.Pb(0),R.Rb(1,"div",38),R.Rb(2,"div",39),R.Gc(3),R.Qb(),R.Rb(4,"div",39),R.Gc(5),R.Qb(),R.Rb(6,"div",39),R.Gc(7," Password is required. "),R.Qb(),R.Qb(),R.Ob()),2&e){R.ec();var n=R.vc(32),r=R.ec(3);R.zb(1),R.mc("hidden",!(n.touched&&n.invalid)),R.zb(1),R.mc("hidden",!(null!=n.errors&&n.errors.minlength)),R.zb(1),R.Jc(" Password is too short (min: ",r.lengths.password[0],", current: ",r.user.password.length,"). "),R.zb(1),R.mc("hidden",!(null!=n.errors&&n.errors.maxlength)),R.zb(1),R.Jc(" Password is too long (max: ",r.lengths.password[1],", current: ",r.user.password.length,"). "),R.zb(1),R.mc("hidden",!(null!=n.errors&&n.errors.required))}}function se(e,t){1&e&&(R.Pb(0),R.Gc(1," The username you chose already belongs to another user. "),R.Ob())}function ae(e,t){1&e&&(R.Gc(0," There was an error while trying to update your account."),R.Nb(1,"br"),R.Gc(2,"Please try again later. "))}function ce(e,t){if(1&e&&(R.Rb(0,"div",40),R.Ec(1,se,2,0,"ng-container",3),R.Ec(2,ae,3,0,"ng-template",null,41,R.Fc),R.Qb()),2&e){var n=R.vc(3),r=R.ec(4);R.mc("shadow",!0),R.zb(1),R.mc("ngIf",r.userExists)("ngIfElse",n)}}function ue(e,t){if(1&e){var n=R.Sb();R.Rb(0,"div",42),R.Nb(1,"fa-icon",35),R.Gc(2," Updating your user data will log you out. "),R.Rb(3,"button",43),R.bc("click",function(){return R.xc(n),R.ec(4).storeAlertState("warning")}),R.Gc(4," \xd7 "),R.Qb(),R.Qb()}if(2&e){var r=R.ec(4);R.mc("shadow",!0),R.zb(1),R.mc("icon",r.faExclamationTriangle)}}function le(e,t){1&e&&(R.Rb(0,"div",44),R.Gc(1," Oops, looks like there was an error while trying to delete your user."),R.Nb(2,"br"),R.Gc(3,"Please try again later. "),R.Qb()),2&e&&R.mc("shadow",!0)}function de(e,t){if(1&e){var n=R.Sb();R.Rb(0,"form",8,9),R.bc("ngSubmit",function(){return R.xc(n),R.ec(3).save()}),R.Rb(2,"fieldset"),R.Rb(3,"legend",10),R.Gc(4,"Account"),R.Qb(),R.Ec(5,ne,9,2,"div",11),R.Rb(6,"div",12),R.Rb(7,"p",13),R.Rb(8,"span",14),R.Gc(9,"*"),R.Qb(),R.Gc(10," = required "),R.Qb(),R.Rb(11,"div",15),R.Pb(12),R.Rb(13,"label",16),R.Gc(14,"Name"),R.Qb(),R.Rb(15,"input",17,18),R.bc("ngModelChange",function(e){return R.xc(n),R.ec(3).user.name=e}),R.Qb(),R.Ec(17,re,6,7,"ng-container",19),R.Ob(),R.Pb(18),R.Rb(19,"label",20),R.Gc(20,"Username\xa0"),R.Rb(21,"span",21),R.Gc(22,"*"),R.Qb(),R.Qb(),R.Rb(23,"input",22,23),R.bc("ngModelChange",function(e){return R.xc(n),R.ec(3).user.username=e}),R.Qb(),R.Ec(25,ie,8,8,"ng-container",19),R.Ob(),R.Pb(26),R.Rb(27,"label",24),R.Gc(28,"Password\xa0"),R.Rb(29,"span",21),R.Gc(30,"*"),R.Qb(),R.Qb(),R.Rb(31,"input",25,26),R.bc("ngModelChange",function(e){return R.xc(n),R.ec(3).user.password=e})("focus",function(){return R.xc(n),R.ec(3).pwFocused=!0})("blur",function(){return R.xc(n),R.ec(3).pwFocused=!1}),R.Qb(),R.Ec(33,oe,8,8,"ng-container",19),R.Ob(),R.Qb(),R.Rb(34,"button",27),R.bc("click",function(){return R.xc(n),R.ec(3).sanitizeData()}),R.Gc(35," Save "),R.Qb(),R.Qb(),R.Qb(),R.Ec(36,ce,4,3,"div",28),R.Rb(37,"div",29),R.Ec(38,ue,5,2,"div",30),R.Qb(),R.Ec(39,le,4,1,"div",31),R.Rb(40,"div",32),R.Nb(41,"account-update-roms"),R.Rb(42,"account-delete-user-btn",33),R.bc("isError",function(e){return R.xc(n),R.ec(3).deletionError(e)}),R.Qb(),R.Qb(),R.Qb()}if(2&e){var r=R.vc(1),i=R.ec(3);R.zb(5),R.mc("ngIf",!i.noticeClosed),R.zb(10),R.pc("placeholder","min: ",i.lengths.name[0],", max: ",i.lengths.name[1]," (optional)"),R.mc("ngModel",i.user.name),R.zb(2),R.mc("ngIf",null!==i.user.name),R.zb(6),R.pc("placeholder","min: ",i.lengths.username[0],", max: ",i.lengths.username[1],""),R.mc("ngModel",i.user.username),R.zb(2),R.mc("ngIf",i.user.hasOwnProperty("username")),R.zb(6),R.pc("placeholder","min: ",i.lengths.password[0],", max: ",i.lengths.password[1],""),R.mc("type",i.changePwInputType())("ngModel",i.user.password),R.zb(2),R.mc("ngIf",i.user.hasOwnProperty("password")),R.zb(1),R.mc("disabled",i.firedOff||!r.valid||!(i.user.username||i.user.username.length>0||i.user.password||i.user.password.length>0||i.user.name||i.user.name.length>0)),R.zb(2),R.mc("ngIf",i.updateFail),R.zb(2),R.mc("ngIf",!i.warningClosed),R.zb(1),R.mc("ngIf",i.isErrorDeleting)}}function be(e,t){if(1&e&&R.Ec(0,de,43,18,"form",7),2&e){var n=R.ec(2);R.mc("ngIf",!n.errLoadingUsr)}}function he(e,t){if(1&e&&(R.Rb(0,"div",2),R.Ec(1,te,5,1,"ng-container",3),R.Ec(2,be,1,1,"ng-template",null,4,R.Fc),R.Qb()),2&e){var n=R.vc(3),r=R.ec();R.zb(1),R.mc("ngIf",r.errLoadingUsr)("ngIfElse",n)}}var pe,fe,me,ge=((pe=function(){function e(t,n){s(this,e),this.userService=t,this.router=n,String.prototype.sanitizeXSS=f.a,String.prototype.removeStringChars=m.a}return c(e,[{key:"ngOnInit",value:function(){this.lengths=b.b,this.userExists=!1,this.updateFail=!1,this.pwFocused=!1,this.ready=!1,this.firedOff=!1,this.errLoadingUsr=!1,this.isErrorDeleting=!1,this.faExclamationTriangle=p.e,this.faInfoCircle=p.i,g.a.getCookie("user")?(this.userId=JSON.parse(g.a.getCookie("user")).id,this.retrieveUserData(this.userId)):this.errLoadingUsr=!0,y.a.getState("notice_closed")||y.a.setState("notice_closed",!1),w.a.getState("warning_closed")||w.a.setState("warning_closed",!1),this.noticeClosed=y.a.getState("notice_closed"),this.warningClosed=w.a.getState("warning_closed")}},{key:"ngOnDestroy",value:function(){this.userSub.unsubscribe()}},{key:"retrieveUserData",value:function(e){var t=this;this.userObs$=this.userService.getUser(e),this.userSub=this.userObs$.subscribe(function(e){e.name&&""!==e.name||(e.name=""),e.password="",t.user=e,t.ready=!0},function(e){t.errLoadingUsr=!0,t.ready=!0,v.a.error(e)})}},{key:"save",value:function(){this.firedOff=!0,this.ready=!1,this.user.name&&""!==this.user.name||(this.user.name=null),this.updateUser(this.userId,this.user,["error","user_exists"])}},{key:"sanitizeData",value:function(){this.user.name&&(this.user.name=this.user.name.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.user.username&&(this.user.username=this.user.username.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.user.password&&(this.user.password=this.user.password.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars())}},{key:"changePwInputType",value:function(){return this.pwFocused?"text":"password"}},{key:"deletionError",value:function(e){this.isErrorDeleting=e}},{key:"storeAlertState",value:function(e){switch(e){case"notice":y.a.setState("notice_closed",!0);break;case"warning":w.a.setState("warning_closed",!0);break;default:v.a.error("Unknown alert name.")}}},{key:"updateUser",value:function(e,t,n){var r=this;this.userService.updateUser(e,t).subscribe(function(){r.ready=!0,r.userExists=!1,h.a.logout(),r.router.navigate(["/","home"])},function(e){r.ready=!0,r.updateFail=!0,r.firedOff=!1,!0===e[n[0]][n[1]]&&(r.userExists=!0),v.a.error(e)})}}]),e}()).\u0275fac=function(e){return new(e||pe)(R.Mb(b.a),R.Mb(d.d))},pe.\u0275cmp=R.Gb({type:pe,selectors:[["account"]],decls:3,vars:2,consts:[[3,"loading"],["class","container text-center mb-2","id","form-container",4,"ngIf"],["id","form-container",1,"container","text-center","mb-2"],[4,"ngIf","ngIfElse"],["account",""],[1,"mt-1"],["appAlert","","alertType","danger",1,"mt-3",3,"shadow"],["name","accountForm","autocomplete","on",3,"ngSubmit",4,"ngIf"],["name","accountForm","autocomplete","on",3,"ngSubmit"],["accountForm","ngForm"],[1,"pt-2","pb-2","text-center"],["class","alert-dismissible fade show text-left","appAlert","","alertType","info","role","alert",3,"shadow",4,"ngIf"],["id","border-container",1,"border","rounded","shadow"],[1,"mb-0"],[1,"text-danger","font-weight-bold"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","name","name","autocomplete","name","minlength","1","maxlength","100",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["for","username",1,"font-weight-bold","pt-1"],[1,"text-danger"],["type","text","id","username","name","username","autocomplete","username","minlength","3","maxlength","22","required","",1,"form-control",3,"placeholder","ngModel","ngModelChange"],["username","ngModel"],["for","password",1,"font-weight-bold"],["id","password","name","password","autocomplete","new-password","minlength","6","maxlength","256","required","",1,"form-control",3,"type","placeholder","ngModel","ngModelChange","focus","blur"],["password","ngModel"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["class","mt-2","appAlert","","alertType","danger",3,"shadow",4,"ngIf"],[1,"mt-3","mb-3"],["class","font-weight-bold alert-dismissible show fade","appAlert","","alertType","warning",3,"shadow",4,"ngIf"],["class","mt-1","appAlert","","alertType","danger",3,"shadow",4,"ngIf"],[1,"d-flex","flex-column"],[3,"isError"],["appAlert","","alertType","info","role","alert",1,"alert-dismissible","fade","show","text-left",3,"shadow"],[1,"mr-1",3,"icon"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["appAlert","","alertType","danger",1,"mt-2",3,"shadow"],["normalErrMsg",""],["appAlert","","alertType","warning",1,"font-weight-bold","alert-dismissible","show","fade",3,"shadow"],["type","button","data-dismiss","alert",1,"close","p-2","mr-2",3,"click"],["appAlert","","alertType","danger",1,"mt-1",3,"shadow"]],template:function(e,t){1&e&&(R.Pb(0),R.Nb(1,"spinners-gif-spinner",0),R.Ec(2,he,4,2,"div",1),R.Ob()),2&e&&(R.zb(1),R.mc("loading",!t.ready&&!t.errLoadingUsr),R.zb(1),R.mc("ngIf",t.ready))},directives:[k.a,u.o,x.a,O.u,O.m,O.n,O.a,O.i,O.h,O.l,O.o,O.r,S.a,Z,ee,q.a],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px) and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px) and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px) and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0) and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),pe),ve=o("UTcu"),ye=o("Dat7"),we=[{path:"",component:ge,canActivate:[ve.a,ye.a]}],Re=((fe=function e(){s(this,e)}).\u0275mod=R.Kb({type:fe}),fe.\u0275inj=R.Jb({factory:function(e){return new(e||fe)},imports:[[d.h.forChild(we)],d.h]}),fe),ke=o("WjtB"),xe=o("FUS3"),Oe=((me=function e(){s(this,e)}).\u0275mod=R.Kb({type:me}),me.\u0275inj=R.Jb({factory:function(e){return new(e||me)},providers:[b.a,C.a],imports:[[u.c,l.g,Re,ke.a,O.g,q.b,xe.a]]}),me)}}])}();