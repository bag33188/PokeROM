(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FpAq:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var n=t("Mb37"),s=t("fXoL");let a=(()=>{class e{constructor(e){this.el=e}ngOnInit(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():n.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&n.a.error("addShadow must be a boolean.")}getType(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[...this.preClasses,"alert-primary"];case"secondary":return[...this.preClasses,"alert-secondary"];case"warning":return[...this.preClasses,"alert-warning"];case"success":return[...this.preClasses,"alert-success"];case"danger":return[...this.preClasses,"alert-danger"];case"info":return[...this.preClasses,"alert-info"];case"light":return[...this.preClasses,"alert-light"];case"dark":return[...this.preClasses,"alert-dark"];default:n.a.error("Invalid alert type.")}else n.a.error("Type must be a string.")}setType(){const e=this.getType(),r=this.el.nativeElement.classList;e.forEach(e=>{Array.prototype.slice.call(r).includes(e)&&r.remove(e),r.add(e)}),Array.from(r).includes("null")&&r.remove("null")}}return e.\u0275fac=function(r){return new(r||e)(s.Jb(s.l))},e.\u0275dir=s.Eb({type:e,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),e})()},NvMS:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var n=t("Ei5h"),s=t("DvS/"),a=t("Mb37"),i=t("fXoL"),o=t("3+9a");const l=["spinnerImg"];let d=(()=>{class e{constructor(){}ngOnInit(){this.fallbackUrl=s.a.SPINNER,this.images=n.a}ngAfterContentInit(){this.checkInput()}checkInput(){null==this.loading&&a.a.error("Loading property is required.")}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=i.Db({type:e,selectors:[["spinners-gif-spinner"]],viewQuery:function(e,r){var t;1&e&&i.Jc(l,!0),2&e&&i.tc(t=i.bc())&&(r.spinnerImage=t.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(e,r){1&e&&(i.Ob(0,"div",0),i.Kb(1,"img",1,2),i.ec(3,"defaultImage"),i.Nb()),2&e&&(i.lc("hidden",!r.loading),i.wb(1),i.lc("src",i.ic(3,2,r.images.SPINNER,r.fallbackUrl,r.spinnerImage,!0),i.yc))},pipes:[o.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}"]}),e})()},WjtB:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t("ofXK"),s=t("iTUp"),a=t("fXoL");let i=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(r){return new(r||e)},imports:[[n.c,s.a]]}),e})()},qYmF:function(e,r,t){"use strict";t.r(r),t.d(r,"LoginModule",(function(){return P}));var n=t("ofXK"),s=t("tyNb"),a=t("Dat7"),i=t("3Pt+"),o=t("lGQG"),l=t("Rv5h"),d=t("vuBd"),c=t("Mb37"),u=t("qfBg"),h=t("fXoL"),p=t("NvMS"),m=t("FpAq"),g=t("siFw");function b(e,r){if(1&e&&(h.Ob(0,"div",16),h.Fc(1),h.Nb()),2&e){const e=h.dc();h.lc("shadow",!0),h.wb(1),h.Hc(" ",e.loginFail," ")}}const w=function(){return["/","register"]},f=[{path:"",component:(()=>{class e{constructor(e,r,t){this.authService=e,this.router=r,this.route=t,String.prototype.sanitizeXSS=l.a,String.prototype.removeStringChars=d.a}get Username(){return this.loginForm.get("username")}get Password(){return this.loginForm.get("password")}ngOnInit(){this.lengths=u.b,this.loginForm=new i.e({username:new i.c("",[i.s.required,i.s.minLength(this.lengths.username[0]),i.s.maxLength(this.lengths.username[1])]),password:new i.c("",[i.s.required,i.s.minLength(this.lengths.password[0]),i.s.maxLength(this.lengths.password[1])])}),this.firedOff=!1,this.loading=!1,setTimeout(o.a.logout,100)}login(){this.firedOff=!0,this.loading=!0,this.authService.authenticateUser({username:this.Username.value,password:this.Password.value}).subscribe(e=>{if(e.success){o.a.storeData(e.token,e.user),this.loading=!1;const r=this.route.snapshot.queryParamMap.get("returnUrl");this.router.navigate([r||"/roms"]),this.loginFail=""}else this.loading=!1,this.loginFail="Incorrect Login"},e=>{this.loading=!1,this.firedOff=!1,this.loginFail=404===e.status?"User does not exist":403===e.status?"Wrong password":"Oops, there was a problem while trying to log you in. Please try again later.",c.a.error(e)})}sanitizeData(){this.Username.setValue(this.Username.value.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.Password.setValue(this.Password.value.sanitizeXSS({replaceSpecialChars:!1}))}}return e.\u0275fac=function(r){return new(r||e)(h.Jb(o.a),h.Jb(s.d),h.Jb(s.a))},e.\u0275cmp=h.Db({type:e,selectors:[["login"]],decls:39,vars:23,consts:[[3,"loading"],["id","form-container",1,"container","text-center"],["name","loginForm","autocomplete","on",3,"formGroup","ngSubmit"],[1,"pt-2","pb-2","text-center"],["id","border-container",1,"border","rounded","shadow"],[1,"form-group"],["for","username",1,"font-weight-bold"],["type","text","id","username","name","username","formControlName","username","autocomplete","username",1,"form-control"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["for","password",1,"font-weight-bold"],["type","password","id","password","name","password","formControlName","password","autocomplete","current-password",1,"form-control"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["appAlert","","alertType","info",1,"mt-2","mb-2",3,"shadow"],[3,"routerLink"],["class","mt-1","appAlert","","alertType","danger",3,"shadow",4,"ngIf"],["appAlert","","alertType","danger",1,"mt-1",3,"shadow"]],template:function(e,r){1&e&&(h.Mb(0),h.Kb(1,"spinners-gif-spinner",0),h.Ob(2,"div",1),h.Ob(3,"form",2),h.ac("ngSubmit",(function(){return r.login()})),h.Ob(4,"fieldset"),h.Ob(5,"legend",3),h.Fc(6,"Login"),h.Nb(),h.Ob(7,"div",4),h.Ob(8,"div",5),h.Mb(9),h.Ob(10,"label",6),h.Fc(11,"Username"),h.Nb(),h.Kb(12,"input",7),h.Ob(13,"div",8),h.Ob(14,"div",9),h.Fc(15," Username is required. "),h.Nb(),h.Ob(16,"div",9),h.Fc(17),h.Nb(),h.Ob(18,"div",9),h.Fc(19),h.Nb(),h.Nb(),h.Lb(),h.Mb(20),h.Ob(21,"label",10),h.Fc(22,"Password"),h.Nb(),h.Kb(23,"input",11),h.Ob(24,"div",8),h.Ob(25,"div",9),h.Fc(26," Password is required. "),h.Nb(),h.Ob(27,"div",9),h.Fc(28),h.Nb(),h.Ob(29,"div",9),h.Fc(30),h.Nb(),h.Nb(),h.Lb(),h.Nb(),h.Ob(31,"button",12),h.ac("click",(function(){return r.sanitizeData()})),h.Fc(32," Login "),h.Nb(),h.Nb(),h.Nb(),h.Ob(33,"div",13),h.Fc(34," Don't have an account? Register "),h.Ob(35,"a",14),h.Fc(36,"here"),h.Nb(),h.Fc(37,"! "),h.Nb(),h.Dc(38,b,2,2,"div",15),h.Nb(),h.Nb(),h.Lb()),2&e&&(h.wb(1),h.lc("loading",r.loading),h.wb(2),h.lc("formGroup",r.loginForm),h.wb(10),h.lc("hidden",!(r.Username.touched&&r.Username.invalid)),h.wb(1),h.lc("hidden",!(null!=r.Username.errors&&r.Username.errors.required)),h.wb(2),h.lc("hidden",!(null!=r.Username.errors&&r.Username.errors.minlength)),h.wb(1),h.Ic(" Username is too short (min: ",r.lengths.username[0],", current: ",r.Username.value.length,"). "),h.wb(1),h.lc("hidden",!(null!=r.Username.errors&&r.Username.errors.maxlength)),h.wb(1),h.Ic(" Username is too long (max: ",r.lengths.username[1],", current: ",r.Username.value.length,"). "),h.wb(5),h.lc("hidden",!(r.Password.touched&&r.Password.invalid)),h.wb(1),h.lc("hidden",!(null!=r.Password.errors&&r.Password.errors.required)),h.wb(2),h.lc("hidden",!(null!=r.Password.errors&&r.Password.errors.minlength)),h.wb(1),h.Ic(" Password is too short (min: ",r.lengths.password[0],", current: ",r.Password.value.length,"). "),h.wb(1),h.lc("hidden",!(null!=r.Password.errors&&r.Password.errors.maxlength)),h.wb(1),h.Ic(" Password is too long (max: ",r.lengths.password[1],", current: ",r.Password.value.length,"). "),h.wb(1),h.lc("disabled",!r.loginForm.valid||r.loading||r.firedOff),h.wb(2),h.lc("shadow",!0),h.wb(2),h.lc("routerLink",h.pc(22,w)),h.wb(3),h.lc("ngIf",r.loginFail))},directives:[p.a,i.u,i.m,i.f,i.a,i.l,i.d,m.a,g.a,s.g,n.o],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px) and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px) and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px) and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0) and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})(),canActivate:[a.a]}];let v=(()=>{class e{}return e.\u0275mod=h.Hb({type:e}),e.\u0275inj=h.Gb({factory:function(r){return new(r||e)},imports:[[s.h.forChild(f)],s.h]}),e})();var y=t("FUS3"),O=t("WjtB");let P=(()=>{class e{}return e.\u0275mod=h.Hb({type:e}),e.\u0275inj=h.Gb({factory:function(r){return new(r||e)},providers:[u.a,o.a],imports:[[n.c,v,y.a,O.a,i.q]]}),e})()}}]);