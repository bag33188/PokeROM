function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{nDdO:function(e,t,n){"use strict";n.r(t);var r=n("lGQG"),i=n("wHSu"),s=n("Rv5h"),o=n("vuBd"),a=n("QTu/"),c=n("Mb37"),l=n("fXoL"),u=n("qfBg"),d=n("tyNb"),b=n("NvMS"),h=n("ofXK"),f=n("FpAq"),p=n("3Pt+"),m=n("siFw"),g=n("6NWb"),v=n("yCtX"),y=n("DH7j"),x=n("7o/Q"),w=n("l7GE"),C=n("ZUHj"),P=n("Lhse"),k=function(){function e(t){_classCallCheck(this,e),this.resultSelector=t}return _createClass(e,[{key:"call",value:function(e,t){return t.subscribe(new O(e,this.resultSelector))}}]),e}(),O=function(e){function t(e,n){var r,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Object.create(null);return _classCallCheck(this,t),(r=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).iterators=[],r.active=0,r.resultSelector="function"==typeof n?n:null,r.values=i,r}return _inherits(t,e),_createClass(t,[{key:"_next",value:function(e){var t=this.iterators;Object(y.a)(e)?t.push(new S(e)):t.push("function"==typeof e[P.a]?new R(e[P.a]()):new _(this.destination,this,e))}},{key:"_complete",value:function(){var e=this.iterators,t=e.length;if(this.unsubscribe(),0!==t){this.active=t;for(var n=0;n<t;n++){var r=e[n];r.stillUnsubscribed?this.destination.add(r.subscribe(r,n)):this.active--}}else this.destination.complete()}},{key:"notifyInactive",value:function(){this.active--,0===this.active&&this.destination.complete()}},{key:"checkIterators",value:function(){for(var e=this.iterators,t=e.length,n=this.destination,r=0;r<t;r++){var i=e[r];if("function"==typeof i.hasValue&&!i.hasValue())return}for(var s=!1,o=[],a=0;a<t;a++){var c=e[a],l=c.next();if(c.hasCompleted()&&(s=!0),l.done)return void n.complete();o.push(l.value)}this.resultSelector?this._tryresultSelector(o):n.next(o),s&&n.complete()}},{key:"_tryresultSelector",value:function(e){var t;try{t=this.resultSelector.apply(this,e)}catch(n){return void this.destination.error(n)}this.destination.next(t)}}]),t}(x.a),R=function(){function e(t){_classCallCheck(this,e),this.iterator=t,this.nextResult=t.next()}return _createClass(e,[{key:"hasValue",value:function(){return!0}},{key:"next",value:function(){var e=this.nextResult;return this.nextResult=this.iterator.next(),e}},{key:"hasCompleted",value:function(){var e=this.nextResult;return e&&e.done}}]),e}(),S=function(){function e(t){_classCallCheck(this,e),this.array=t,this.index=0,this.length=0,this.length=t.length}return _createClass(e,[{key:P.a,value:function(){return this}},{key:"next",value:function(e){var t=this.index++;return t<this.length?{value:this.array[t],done:!1}:{value:null,done:!0}}},{key:"hasValue",value:function(){return this.array.length>this.index}},{key:"hasCompleted",value:function(){return this.array.length===this.index}}]),e}(),_=function(e){function t(e,n,r){var i;return _classCallCheck(this,t),(i=_possibleConstructorReturn(this,_getPrototypeOf(t).call(this,e))).parent=n,i.observable=r,i.stillUnsubscribed=!0,i.buffer=[],i.isComplete=!1,i}return _inherits(t,e),_createClass(t,[{key:P.a,value:function(){return this}},{key:"next",value:function(){var e=this.buffer;return 0===e.length&&this.isComplete?{value:null,done:!0}:{value:e.shift(),done:!1}}},{key:"hasValue",value:function(){return this.buffer.length>0}},{key:"hasCompleted",value:function(){return 0===this.buffer.length&&this.isComplete}},{key:"notifyComplete",value:function(){this.buffer.length>0?(this.isComplete=!0,this.parent.notifyInactive()):this.destination.complete()}},{key:"notifyNext",value:function(e,t,n,r,i){this.buffer.push(t),this.parent.checkIterators()}},{key:"subscribe",value:function(e,t){return Object(C.a)(this,this.observable,this,t)}}]),t}(w.a),I=n("3E0/"),M={prefix:"far",iconName:"check-circle",icon:[512,512,[],"f058","M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 110.532-89.451 200-200 200-110.532 0-200-89.451-200-200 0-110.532 89.451-200 200-200m140.204 130.267l-22.536-22.718c-4.667-4.705-12.265-4.736-16.97-.068L215.346 303.697l-59.792-60.277c-4.667-4.705-12.265-4.736-16.97-.069l-22.719 22.536c-4.705 4.667-4.736 12.265-.068 16.971l90.781 91.516c4.667 4.705 12.265 4.736 16.97.068l172.589-171.204c4.704-4.668 4.734-12.266.067-16.971z"]},H={prefix:"far",iconName:"times-circle",icon:[512,512,[],"f057","M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"]},T=n("Ql4B"),U=n("t52u"),E=n("beNV");function F(e,t){if(1&e&&(l.Rb(0,"div",3),l.Mb(1,"spinners-bootstrap-spinner",4),l.Pb()),2&e){var n=l.gc();l.xb(1),l.nc("loading",n.loading)}}function D(e,t){if(1&e){var n=l.Sb();l.Rb(0,"button",5),l.dc("click",(function(e){return l.xc(n),l.gc().updateRoms()})),l.Hc(1," Update ROMs "),l.Pb()}}function N(e,t){if(1&e&&(l.Rb(0,"div",6),l.Mb(1,"fa-icon",7),l.Hc(2),l.Pb()),2&e){var n=l.gc();l.nc("alertType",n.romsUpdated?"success":"danger")("@fadeIn",void 0),l.xb(1),l.nc("icon",n.romsUpdated?n.faCheckCircle:n.faTimesCircle),l.xb(1),l.Jc(" ",n.romsUpdated?"ROMs successfully updated!":"Error updating ROMs, please try again later."," ")}}var A,j,L,J=((A=function(){function e(t){_classCallCheck(this,e),this.romsService=t}return _createClass(e,[{key:"ngOnInit",value:function(){this.faTimesCircle=H,this.faCheckCircle=M,this.showBtn=!0,this.loading=!1,this.deleteRomsObs$=this.romsService.deleteAllRoms().pipe(Object(I.a)(500)),this.addRomsObs$=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[t.length-1];return"function"==typeof r&&t.pop(),Object(v.a)(t,void 0).lift(new k(r))}(this.romsService.addCoreRoms().pipe(Object(I.a)(1e3)),this.romsService.addRomHacks().pipe(Object(I.a)(1e3)))}},{key:"ngOnDestroy",value:function(){this.romsUpdated&&(this.deleteRomsSub.unsubscribe(),this.addRomsSub.unsubscribe())}},{key:"updateRoms",value:function(){this.showBtn=!1,this.loading=!0,this.deleteRoms(this.addRoms.bind(this,e))}},{key:"deleteRoms",value:function(e){var t=this;this.deleteRomsSub=this.deleteRomsObs$.subscribe({error:function(e){t.loading=!1,t.romsUpdated=!1,c.a.error(e)},complete:function(){return e()}})}},{key:"addRoms",value:function(){var e=this;this.addRomsSub=this.addRomsObs$.subscribe({error:function(t){e.loading=!1,c.a.error(t)},complete:function(){e.romsUpdated=!0,e.loading=!1}})}}]),e}()).\u0275fac=function(e){return new(e||A)(l.Lb(U.a))},A.\u0275cmp=l.Fb({type:A,selectors:[["account-update-roms"]],decls:4,vars:3,consts:[["id","update-roms-spinner-container","class","mb-3",4,"ngIf"],["class","mb-3","type","button","appBtn","","btnType","warning",3,"click",4,"ngIf"],["id","roms-updated-alert-container","class","p-2","appAlert","",3,"alertType",4,"ngIf"],["id","update-roms-spinner-container",1,"mb-3"],["type","border","color","primary",3,"loading"],["type","button","appBtn","","btnType","warning",1,"mb-3",3,"click"],["id","roms-updated-alert-container","appAlert","",1,"p-2",3,"alertType"],[1,"mr-1",3,"icon"]],template:function(e,t){1&e&&(l.Ob(0),l.Fc(1,F,2,1,"div",0),l.Fc(2,D,2,0,"button",1),l.Fc(3,N,3,4,"div",2),l.Nb()),2&e&&(l.xb(1),l.nc("ngIf",t.loading),l.xb(1),l.nc("ngIf",t.showBtn),l.xb(1),l.nc("ngIf",void 0!==t.romsUpdated))},directives:[h.n,E.a,m.a,f.a,g.a],styles:["#update-roms-spinner-container[_ngcontent-%COMP%]{padding:.11rem}#roms-updated-alert-container[_ngcontent-%COMP%]{margin-bottom:.75rem}"],data:{animation:[T.a]}}),A),z=n("1kSV"),B=((L=function(){function e(t,n,r){_classCallCheck(this,e),this.modal=t,this.userService=n,this.router=r,this.isErrorDeleting=new l.m,this.loading=new l.m,this.firedOff=new l.m}return _createClass(e,[{key:"ngOnInit",value:function(){this.btnDisabled=!1}},{key:"deleteCurrentUser",value:function(){var e=this;this.firedOff.emit(!0),this.btnDisabled=!0,this.userService.deleteUser(JSON.parse(a.a.getCookie("user")).id).subscribe((function(){e.isErrorDeleting.emit(!1),e.loading.emit(!1),e.router.navigate(["/","home"]),r.a.logout()}),(function(t){e.btnDisabled=!1,e.loading.emit(!1),e.firedOff.emit(!1),e.isErrorDeleting.emit(!0),c.a.error(t)})),this.closeModal()}},{key:"closeModal",value:function(){this.modal.close("Ok click")}}]),e}()).\u0275fac=function(e){return new(e||L)(l.Lb(z.c),l.Lb(u.a),l.Lb(d.c))},L.\u0275cmp=l.Fb({type:L,selectors:[["account-delete-user-modal"]],inputs:{username:"username"},outputs:{isErrorDeleting:"isErrorDeleting",loading:"loading",firedOff:"firedOff"},decls:25,vars:4,consts:[[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[3,"hidden"],[1,"modal-footer","justify-content-start"],["type","button","appBtn","","btnType","danger",3,"disabled","click"],["type","button","appBtn","","btnType","secondary-outline",3,"click"]],template:function(e,t){1&e&&(l.Ob(0),l.Rb(1,"div",0),l.Rb(2,"h4",1),l.Hc(3,"Account deletion"),l.Pb(),l.Rb(4,"button",2),l.dc("click",(function(e){return t.modal.dismiss("Cross click")})),l.Rb(5,"span",3),l.Hc(6,"\xd7"),l.Pb(),l.Pb(),l.Pb(),l.Rb(7,"div",4),l.Rb(8,"p"),l.Rb(9,"strong"),l.Hc(10,"Are you sure you want to delete your own account "),l.Rb(11,"span",5),l.Hc(12,"("),l.Pb(),l.Hc(13),l.Rb(14,"span",5),l.Hc(15,")"),l.Pb(),l.Hc(16,"?"),l.Pb(),l.Pb(),l.Rb(17,"p"),l.Rb(18,"span"),l.Hc(19,"This operation cannot be undone."),l.Pb(),l.Pb(),l.Pb(),l.Rb(20,"div",6),l.Rb(21,"button",7),l.dc("click",(function(e){return t.deleteCurrentUser()})),l.Hc(22," Ok "),l.Pb(),l.Rb(23,"button",8),l.dc("click",(function(e){return t.modal.dismiss("cancel click")})),l.Hc(24," Cancel "),l.Pb(),l.Pb(),l.Nb()),2&e&&(l.xb(11),l.nc("hidden",!t.username),l.xb(2),l.Ic(t.username||""),l.xb(1),l.nc("hidden",!t.username),l.xb(7),l.nc("disabled",t.btnDisabled))},directives:[m.a],styles:[".modal-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{color:red}"]}),L),q=((j=function(){function e(t){_classCallCheck(this,e),this.modalService=t,this.isError=new l.m}return _createClass(e,[{key:"ngOnInit",value:function(){this.loading=!1,this.btnText="Delete User!"}},{key:"confirmDeletion",value:function(){var e=this,t=this.modalService.open(B,{centered:!0});t.componentInstance.loading.subscribe((function(t){e.loading=t})),t.componentInstance.isErrorDeleting.subscribe((function(t){e.isError.emit(t)})),t.componentInstance.firedOff.subscribe((function(t){e.firedOff=t})),t.componentInstance.username=JSON.parse(a.a.getCookie("user")).username}}]),e}()).\u0275fac=function(e){return new(e||j)(l.Lb(z.g))},j.\u0275cmp=l.Fb({type:j,selectors:[["account-delete-user-btn"]],outputs:{isError:"isError"},decls:4,vars:3,consts:[[3,"loading"],["id","delete-user-btn","type","button","appBtn","","btnType","danger",3,"disabled","click"]],template:function(e,t){1&e&&(l.Ob(0),l.Mb(1,"spinners-gif-spinner",0),l.Rb(2,"button",1),l.dc("click",(function(e){return t.confirmDeletion()})),l.Hc(3),l.Pb(),l.Nb()),2&e&&(l.xb(1),l.nc("loading",t.loading),l.xb(1),l.nc("disabled",t.firedOff),l.xb(1),l.Jc(" ",t.btnText," "))},directives:[b.a,m.a],styles:["#delete-user-btn[_ngcontent-%COMP%]{cursor:pointer!important;display:inline-block!important}"]}),j);function V(e,t){1&e&&(l.Rb(0,"div",4),l.Hc(1," There was an error while trying to load your user information. Please try again later. "),l.Pb())}function X(e,t){if(1&e){var n=l.Sb();l.Rb(0,"div",28),l.Hc(1," If you do not enter a name, your name ("),l.Rb(2,"b"),l.Hc(3,"not"),l.Pb(),l.Hc(4," your user) will be deleted from the database. "),l.Rb(5,"button",29),l.dc("click",(function(e){return l.xc(n),l.gc(2).storeAlertState()})),l.Rb(6,"span",30),l.Hc(7,"\xd7"),l.Pb(),l.Pb(),l.Pb()}}function $(e,t){if(1&e&&(l.Ob(0),l.Rb(1,"div",31),l.Rb(2,"div",32),l.Hc(3),l.Pb(),l.Rb(4,"div",32),l.Hc(5),l.Pb(),l.Pb(),l.Nb()),2&e){l.gc();var n=l.vc(12),r=l.gc();l.xb(1),l.nc("hidden",!(n.touched&&n.invalid)),l.xb(1),l.nc("hidden",!(null!=n.errors&&n.errors.minlength)),l.xb(1),l.Jc(" Name is too short (min: 1, current: ",r.user.name.length,"). "),l.xb(1),l.nc("hidden",!(null!=n.errors&&n.errors.maxlength)),l.xb(1),l.Jc(" Name is too long (max: 100, current: ",r.user.name.length,"). ")}}function G(e,t){if(1&e&&(l.Ob(0),l.Rb(1,"div",31),l.Rb(2,"div",32),l.Hc(3),l.Pb(),l.Rb(4,"div",32),l.Hc(5),l.Pb(),l.Rb(6,"div",32),l.Hc(7," Username is required. "),l.Pb(),l.Pb(),l.Nb()),2&e){l.gc();var n=l.vc(18),r=l.gc();l.xb(1),l.nc("hidden",!(n.touched&&n.invalid)),l.xb(1),l.nc("hidden",!(null!=n.errors&&n.errors.minlength)),l.xb(1),l.Jc(" Username is too short (min: 3, current: ",r.user.username.length,"). "),l.xb(1),l.nc("hidden",!(null!=n.errors&&n.errors.maxlength)),l.xb(1),l.Jc(" Username is too long (max: 22, current: ",r.user.username.length,"). "),l.xb(1),l.nc("hidden",!(null!=n.errors&&n.errors.required))}}function Q(e,t){if(1&e&&(l.Ob(0),l.Rb(1,"div",31),l.Rb(2,"div",32),l.Hc(3),l.Pb(),l.Rb(4,"div",32),l.Hc(5),l.Pb(),l.Rb(6,"div",32),l.Hc(7," Password is required. "),l.Pb(),l.Pb(),l.Nb()),2&e){l.gc();var n=l.vc(24),r=l.gc();l.xb(1),l.nc("hidden",!(n.touched&&n.invalid)),l.xb(1),l.nc("hidden",!(null!=n.errors&&n.errors.minlength)),l.xb(1),l.Jc(" Password is too short (min: 6, current: ",r.user.password.length,"). "),l.xb(1),l.nc("hidden",!(null!=n.errors&&n.errors.maxlength)),l.xb(1),l.Jc(" Password is too long (max: 256, current: ",r.user.password.length,"). "),l.xb(1),l.nc("hidden",!(null!=n.errors&&n.errors.required))}}function W(e,t){1&e&&(l.Ob(0),l.Hc(1," The username you chose already belongs to another user. "),l.Nb())}function K(e,t){1&e&&(l.Hc(0," There was an error while trying to update your account."),l.Mb(1,"br"),l.Hc(2,"Please try again later. "))}function Z(e,t){if(1&e&&(l.Rb(0,"div",33),l.Fc(1,W,2,0,"ng-container",34),l.Fc(2,K,3,0,"ng-template",null,35,l.Gc),l.Pb()),2&e){var n=l.vc(3),r=l.gc(2);l.xb(1),l.nc("ngIf",r.userExists)("ngIfElse",n)}}function Y(e,t){1&e&&(l.Rb(0,"div",36),l.Hc(1," Oops, looks like there was an error while trying to delete your user."),l.Mb(2,"br"),l.Hc(3,"Please try again later. "),l.Pb())}function ee(e,t){if(1&e){var n=l.Sb();l.Rb(0,"form",5,6),l.dc("ngSubmit",(function(e){return l.xc(n),l.gc().save()})),l.Rb(2,"fieldset"),l.Rb(3,"legend",7),l.Hc(4,"Account"),l.Pb(),l.Fc(5,X,8,0,"div",8),l.Rb(6,"div",9),l.Rb(7,"div",10),l.Ob(8),l.Rb(9,"label",11),l.Hc(10,"Name"),l.Pb(),l.Rb(11,"input",12,13),l.dc("ngModelChange",(function(e){return l.xc(n),l.gc().user.name=e})),l.Pb(),l.Fc(13,$,6,5,"ng-container",14),l.Nb(),l.Ob(14),l.Rb(15,"label",15),l.Hc(16,"Username"),l.Pb(),l.Rb(17,"input",16,17),l.dc("ngModelChange",(function(e){return l.xc(n),l.gc().user.username=e})),l.Pb(),l.Fc(19,G,8,6,"ng-container",14),l.Nb(),l.Ob(20),l.Rb(21,"label",18),l.Hc(22,"Password"),l.Pb(),l.Rb(23,"input",19,20),l.dc("ngModelChange",(function(e){return l.xc(n),l.gc().user.password=e})),l.dc("focus",(function(e){return l.xc(n),l.gc().pwFocused=!0})),l.dc("blur",(function(e){return l.xc(n),l.gc().pwFocused=!1})),l.Pb(),l.Fc(25,Q,8,6,"ng-container",14),l.Nb(),l.Pb(),l.Rb(26,"button",21),l.dc("click",(function(e){return l.xc(n),l.gc().sanitizeData()})),l.Hc(27," Save "),l.Pb(),l.Pb(),l.Pb(),l.Fc(28,Z,4,2,"div",22),l.Rb(29,"div",23),l.Mb(30,"fa-icon",24),l.Hc(31," Updating your user data will log you out. "),l.Pb(),l.Fc(32,Y,4,0,"div",25),l.Rb(33,"div",26),l.Mb(34,"account-update-roms"),l.Rb(35,"account-delete-user-btn",27),l.dc("isError",(function(e){return l.xc(n),l.gc().deletionError(e)})),l.Pb(),l.Pb(),l.Pb()}if(2&e){var r=l.vc(1),i=l.gc();l.xb(5),l.nc("ngIf",!i.noticeClosed),l.xb(6),l.nc("ngModel",i.user.name),l.xb(2),l.nc("ngIf",null!==i.user.name),l.xb(4),l.nc("ngModel",i.user.username),l.xb(2),l.nc("ngIf",i.user.hasOwnProperty("username")),l.xb(4),l.nc("type",i.changePwInputType())("ngModel",i.user.password),l.xb(2),l.nc("ngIf",i.user.hasOwnProperty("password")),l.xb(1),l.nc("disabled",i.firedOff||!r.valid||!(i.user.username||i.user.username.length>0||i.user.password||i.user.password.length>0||i.user.name||i.user.name.length>0)),l.xb(2),l.nc("ngIf",i.updateFail),l.xb(2),l.nc("icon",i.faExclamationTriangle),l.xb(2),l.nc("ngIf",i.isErrorDeleting)}}var te,ne,re=((te=function(){function e(t,n){_classCallCheck(this,e),this.userService=t,this.router=n,this.updateFail=!1,this.ready=!1,this.pwFocused=!1,this.errLoadingUsr=!1,this.userExists=!1,String.prototype.sanitizeXSS=s.a,String.prototype.removeStringChars=o.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.firedOff=!1,this.isErrorDeleting=!1,this.faExclamationTriangle=i.e,a.a.getCookie("user")?(this.userId=JSON.parse(a.a.getCookie("user")).id,this.retrieveUserData(this.userId)):this.errLoadingUsr=!0,localStorage.getItem("noticeClosed")||localStorage.setItem("noticeClosed","false"),this.noticeClosed=JSON.parse(localStorage.getItem("noticeClosed"))}},{key:"ngAfterContentInit",value:function(){window.scrollTo(0,0)}},{key:"ngOnDestroy",value:function(){this.userSub.unsubscribe()}},{key:"retrieveUserData",value:function(e){var t=this;this.userObs$=this.userService.getUser(e),this.userSub=this.userObs$.subscribe((function(e){e.name&&""!==e.name||(e.name=""),e.password="",t.user=e,t.ready=!0}),(function(e){t.errLoadingUsr=!0,t.ready=!0,c.a.error(e)}))}},{key:"save",value:function(){this.firedOff=!0,this.ready=!1;var e=["error","user_exists"];this.user.name&&""!==this.user.name||(this.user.name=null),null===this.user.name?this.patchUser(this.userId,this.user,e):this.updateUser(this.userId,this.user,e)}},{key:"sanitizeData",value:function(){this.user.name&&(this.user.name=this.user.name.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.user.username&&(this.user.username=this.user.username.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.user.password&&(this.user.password=this.user.password.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars())}},{key:"changePwInputType",value:function(){return this.pwFocused?"text":"password"}},{key:"deletionError",value:function(e){this.isErrorDeleting=e}},{key:"storeAlertState",value:function(){localStorage.setItem("noticeClosed","true")}},{key:"updateUser",value:function(e,t,n){var i=this;this.userService.updateUser(e,t).subscribe((function(){i.ready=!0,i.userExists=!1,r.a.logout(),i.router.navigate(["/","home"])}),(function(e){i.ready=!0,i.updateFail=!0,i.firedOff=!1,!0===e[n[0]][n[1]]&&(i.userExists=!0),c.a.error(e)}))}},{key:"patchUser",value:function(e,t,n){var i=this;this.userService.patchUser(e,t).subscribe((function(){i.ready=!0,i.userExists=!1,r.a.logout(),i.router.navigate(["/","home"])}),(function(e){i.ready=!0,i.firedOff=!1,i.updateFail=!0,!0===e[n[0]][n[1]]&&(i.userExists=!0),c.a.error(e)}))}}]),e}()).\u0275fac=function(e){return new(e||te)(l.Lb(u.a),l.Lb(d.c))},te.\u0275cmp=l.Fb({type:te,selectors:[["account"]],decls:5,vars:3,consts:[[3,"loading"],["id","form-container",1,"container","text-center","mb-2"],["appAlert","","alertType","danger","class","mt-3",4,"ngIf"],["name","accountForm","autocomplete","on",3,"ngSubmit",4,"ngIf"],["appAlert","","alertType","danger",1,"mt-3"],["name","accountForm","autocomplete","on",3,"ngSubmit"],["accountForm","ngForm"],[1,"pt-2","pb-2","text-center"],["class","alert-dismissible fade show text-left","appAlert","","alertType","info","role","alert",4,"ngIf"],["id","border-container",1,"border","rounded"],[1,"form-group"],["for","name",1,"font-weight-bold"],["placeholder","min: 1, max: 100 (optional)","type","text","id","name","name","name","autocomplete","name","minlength","1","maxlength","100",1,"form-control",3,"ngModel","ngModelChange"],["name","ngModel"],[4,"ngIf"],["for","username",1,"font-weight-bold","pt-1"],["placeholder","min: 3, max: 22","type","text","id","username","name","username","autocomplete","username","minlength","3","maxlength","22","required","",1,"form-control",3,"ngModel","ngModelChange"],["username","ngModel"],["for","password",1,"font-weight-bold"],["placeholder","min: 6, max: 256","id","password","name","password","autocomplete","new-password","minlength","6","maxlength","256","required","",1,"form-control",3,"type","ngModel","ngModelChange","focus","blur"],["password","ngModel"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["class","mt-2","appAlert","","alertType","danger",4,"ngIf"],["appAlert","","alertType","warning",1,"mt-3","mb-3","font-weight-bold"],[1,"mr-1",3,"icon"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],[1,"d-flex","flex-column"],[3,"isError"],["appAlert","","alertType","info","role","alert",1,"alert-dismissible","fade","show","text-left"],["type","button","data-dismiss","alert","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["appAlert","","alertType","danger",1,"mt-2"],[4,"ngIf","ngIfElse"],["normalErrMsg",""],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,t){1&e&&(l.Ob(0),l.Mb(1,"spinners-gif-spinner",0),l.Rb(2,"div",1),l.Fc(3,V,2,0,"div",2),l.Fc(4,ee,36,12,"form",3),l.Pb(),l.Nb()),2&e&&(l.xb(1),l.nc("loading",!t.ready&&!t.errLoadingUsr),l.xb(2),l.nc("ngIf",t.errLoadingUsr),l.xb(1),l.nc("ngIf",t.ready&&!t.errLoadingUsr))},directives:[b.a,h.n,f.a,p.u,p.m,p.n,p.a,p.i,p.h,p.l,p.o,p.r,m.a,g.a,J,q],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px)and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px)and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px)and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0)and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),te),ie=n("UTcu"),se=n("Dat7"),oe=[{path:"",component:re,canActivate:[ie.a,se.a]}],ae=((ne=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:ne}),ne.\u0275inj=l.Ib({factory:function(e){return new(e||ne)},imports:[[d.g.forChild(oe)],d.g]}),ne),ce=n("WjtB"),le=n("FUS3");n.d(t,"AccountModule",(function(){return de}));var ue,de=((ue=function e(){_classCallCheck(this,e)}).\u0275mod=l.Jb({type:ue}),ue.\u0275inj=l.Ib({factory:function(e){return new(e||ue)},providers:[u.a,U.a],imports:[[h.b,z.h,ae,ce.a,p.g,g.b,le.a]]}),ue)}}]);