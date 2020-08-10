!function(){function e(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return n(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return n(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function a(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FpAq:function(n,t,i){"use strict";i.d(t,"a",(function(){return c}));var o=i("Mb37"),s=i("fXoL"),c=function(){var n=function(){function n(e){r(this,n),this.el=e}return a(n,[{key:"ngOnInit",value:function(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():o.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&o.a.error("addShadow must be a boolean.")}},{key:"getType",value:function(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[].concat(e(this.preClasses),["alert-primary"]);case"secondary":return[].concat(e(this.preClasses),["alert-secondary"]);case"warning":return[].concat(e(this.preClasses),["alert-warning"]);case"success":return[].concat(e(this.preClasses),["alert-success"]);case"danger":return[].concat(e(this.preClasses),["alert-danger"]);case"info":return[].concat(e(this.preClasses),["alert-info"]);case"light":return[].concat(e(this.preClasses),["alert-light"]);case"dark":return[].concat(e(this.preClasses),["alert-dark"]);default:o.a.error("Invalid alert type.")}else o.a.error("Type must be a string.")}},{key:"setType",value:function(){var e=this.getType(),n=this.el.nativeElement.classList;e.forEach((function(e){Array.prototype.slice.call(n).includes(e)&&n.remove(e),n.add(e)})),Array.from(n).includes("null")&&n.remove("null")}}]),n}();return n.\u0275fac=function(e){return new(e||n)(s.Jb(s.l))},n.\u0275dir=s.Eb({type:n,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),n}()},NvMS:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var i=t("Ei5h"),o=t("DvS/"),s=t("Mb37"),c=t("fXoL"),l=t("3+9a"),d=["spinnerImg"],u=function(){var e=function(){function e(){r(this,e)}return a(e,[{key:"ngOnInit",value:function(){this.fallbackUrl=o.a.SPINNER,this.images=i.a}},{key:"ngAfterContentInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&s.a.error("Loading property is required.")}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=c.Db({type:e,selectors:[["spinners-gif-spinner"]],viewQuery:function(e,n){var r;1&e&&c.Jc(d,!0),2&e&&c.tc(r=c.bc())&&(n.spinnerImage=r.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(e,n){1&e&&(c.Ob(0,"div",0),c.Kb(1,"img",1,2),c.ec(3,"defaultImage"),c.Nb()),2&e&&(c.lc("hidden",!n.loading),c.wb(1),c.lc("src",c.ic(3,2,n.images.SPINNER,n.fallbackUrl,n.spinnerImage,!0),c.yc))},pipes:[l.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}"]}),e}()},WjtB:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var a=t("ofXK"),i=t("iTUp"),o=t("fXoL"),s=function(){var e=function e(){r(this,e)};return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(n){return new(n||e)},imports:[[a.c,i.a]]}),e}()},qYmF:function(e,n,t){"use strict";t.r(n),t.d(n,"LoginModule",(function(){return F}));var i=t("ofXK"),o=t("tyNb"),s=t("Dat7"),c=t("3Pt+"),l=t("lGQG"),d=t("Rv5h"),u=t("vuBd"),p=t("Mb37"),m=t("qfBg"),h=t("fXoL"),f=t("NvMS"),g=t("FpAq"),b=t("siFw");function w(e,n){if(1&e&&(h.Ob(0,"div",16),h.Fc(1),h.Nb()),2&e){var r=h.dc();h.wb(1),h.Hc(" ",r.loginFail," ")}}var y,v,O,P=function(){return["/","register"]},S=[{path:"",component:(y=function(){function e(n,t,a){r(this,e),this.authService=n,this.router=t,this.route=a,String.prototype.sanitizeXSS=d.a,String.prototype.removeStringChars=u.a}return a(e,[{key:"ngOnInit",value:function(){this.lengths=m.b,this.loginForm=new c.e({username:new c.c("",[c.s.required,c.s.minLength(this.lengths.username[0]),c.s.maxLength(this.lengths.username[1])]),password:new c.c("",[c.s.required,c.s.minLength(this.lengths.password[0]),c.s.maxLength(this.lengths.password[1])])}),this.firedOff=!1,this.loading=!1,setTimeout(l.a.logout,100)}},{key:"login",value:function(){var e=this;this.firedOff=!0,this.loading=!0,this.authService.authenticateUser({username:this.Username.value,password:this.Password.value}).subscribe((function(n){if(n.success){l.a.storeData(n.token,n.user),e.loading=!1;var r=e.route.snapshot.queryParamMap.get("returnUrl");e.router.navigate([r||"/roms"]),e.loginFail=""}else e.loading=!1,e.loginFail="Incorrect Login"}),(function(n){e.loading=!1,e.firedOff=!1,e.loginFail=404===n.status?"User does not exist":403===n.status?"Wrong password":"Oops, there was a problem while trying to log you in. Please try again later.",p.a.error(n)}))}},{key:"sanitizeData",value:function(){this.Username.setValue(this.Username.value.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.Password.setValue(this.Password.value.sanitizeXSS({replaceSpecialChars:!1}))}},{key:"Username",get:function(){return this.loginForm.get("username")}},{key:"Password",get:function(){return this.loginForm.get("password")}}]),e}(),y.\u0275fac=function(e){return new(e||y)(h.Jb(l.a),h.Jb(o.d),h.Jb(o.a))},y.\u0275cmp=h.Db({type:y,selectors:[["login"]],decls:39,vars:22,consts:[[3,"loading"],["id","form-container",1,"container","text-center"],["name","loginForm","autocomplete","on",3,"formGroup","ngSubmit"],[1,"pt-2","pb-2","text-center"],["id","border-container",1,"border","rounded"],[1,"form-group"],["for","username",1,"font-weight-bold"],["type","text","id","username","name","username","formControlName","username","autocomplete","username",1,"form-control"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["for","password",1,"font-weight-bold"],["type","password","id","password","name","password","formControlName","password","autocomplete","current-password",1,"form-control"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["appAlert","","alertType","info",1,"mt-2","mb-2"],[3,"routerLink"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,n){1&e&&(h.Mb(0),h.Kb(1,"spinners-gif-spinner",0),h.Ob(2,"div",1),h.Ob(3,"form",2),h.ac("ngSubmit",(function(){return n.login()})),h.Ob(4,"fieldset"),h.Ob(5,"legend",3),h.Fc(6,"Login"),h.Nb(),h.Ob(7,"div",4),h.Ob(8,"div",5),h.Mb(9),h.Ob(10,"label",6),h.Fc(11,"Username"),h.Nb(),h.Kb(12,"input",7),h.Ob(13,"div",8),h.Ob(14,"div",9),h.Fc(15," Username is required. "),h.Nb(),h.Ob(16,"div",9),h.Fc(17),h.Nb(),h.Ob(18,"div",9),h.Fc(19),h.Nb(),h.Nb(),h.Lb(),h.Mb(20),h.Ob(21,"label",10),h.Fc(22,"Password"),h.Nb(),h.Kb(23,"input",11),h.Ob(24,"div",8),h.Ob(25,"div",9),h.Fc(26," Password is required. "),h.Nb(),h.Ob(27,"div",9),h.Fc(28),h.Nb(),h.Ob(29,"div",9),h.Fc(30),h.Nb(),h.Nb(),h.Lb(),h.Nb(),h.Ob(31,"button",12),h.ac("click",(function(){return n.sanitizeData()})),h.Fc(32," Login "),h.Nb(),h.Nb(),h.Nb(),h.Ob(33,"div",13),h.Fc(34," Don't have an account? Register "),h.Ob(35,"a",14),h.Fc(36,"here"),h.Nb(),h.Fc(37,"! "),h.Nb(),h.Dc(38,w,2,1,"div",15),h.Nb(),h.Nb(),h.Lb()),2&e&&(h.wb(1),h.lc("loading",n.loading),h.wb(2),h.lc("formGroup",n.loginForm),h.wb(10),h.lc("hidden",!(n.Username.touched&&n.Username.invalid)),h.wb(1),h.lc("hidden",!(null!=n.Username.errors&&n.Username.errors.required)),h.wb(2),h.lc("hidden",!(null!=n.Username.errors&&n.Username.errors.minlength)),h.wb(1),h.Ic(" Username is too short (min: ",n.lengths.username[0],", current: ",n.Username.value.length,"). "),h.wb(1),h.lc("hidden",!(null!=n.Username.errors&&n.Username.errors.maxlength)),h.wb(1),h.Ic(" Username is too long (max: ",n.lengths.username[1],", current: ",n.Username.value.length,"). "),h.wb(5),h.lc("hidden",!(n.Password.touched&&n.Password.invalid)),h.wb(1),h.lc("hidden",!(null!=n.Password.errors&&n.Password.errors.required)),h.wb(2),h.lc("hidden",!(null!=n.Password.errors&&n.Password.errors.minlength)),h.wb(1),h.Ic(" Password is too short (min: ",n.lengths.password[0],", current: ",n.Password.value.length,"). "),h.wb(1),h.lc("hidden",!(null!=n.Password.errors&&n.Password.errors.maxlength)),h.wb(1),h.Ic(" Password is too long (max: ",n.lengths.password[1],", current: ",n.Password.value.length,"). "),h.wb(1),h.lc("disabled",!n.loginForm.valid||n.loading||n.firedOff),h.wb(4),h.lc("routerLink",h.pc(21,P)),h.wb(3),h.lc("ngIf",n.loginFail))},directives:[f.a,c.u,c.m,c.f,c.a,c.l,c.d,g.a,b.a,o.g,i.o],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px) and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px) and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px) and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0) and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),y),canActivate:[s.a]}],x=((v=function e(){r(this,e)}).\u0275mod=h.Hb({type:v}),v.\u0275inj=h.Gb({factory:function(e){return new(e||v)},imports:[[o.h.forChild(S)],o.h]}),v),N=t("FUS3"),C=t("WjtB"),F=((O=function e(){r(this,e)}).\u0275mod=h.Hb({type:O}),O.\u0275inj=h.Gb({factory:function(e){return new(e||O)},providers:[m.a,l.a],imports:[[i.c,x,N.a,C.a,c.q]]}),O)}}])}();