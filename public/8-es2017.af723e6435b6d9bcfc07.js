(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{FpAq:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var n=t("Mb37"),s=t("fXoL");let a=(()=>{class e{constructor(e){this.el=e}ngOnInit(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():n.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&n.a.error("addShadow must be a boolean.")}getType(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[...this.preClasses,"alert-primary"];case"secondary":return[...this.preClasses,"alert-secondary"];case"warning":return[...this.preClasses,"alert-warning"];case"success":return[...this.preClasses,"alert-success"];case"danger":return[...this.preClasses,"alert-danger"];case"info":return[...this.preClasses,"alert-info"];case"light":return[...this.preClasses,"alert-light"];case"dark":return[...this.preClasses,"alert-dark"];default:n.a.error("Invalid alert type.")}else n.a.error("Type must be a string.")}setType(){const e=this.getType(),r=this.el.nativeElement.classList;e.forEach(e=>{Array.prototype.slice.call(r).includes(e)&&r.remove(e),r.add(e)}),Array.from(r).includes("null")&&r.remove("null")}}return e.\u0275fac=function(r){return new(r||e)(s.Jb(s.l))},e.\u0275dir=s.Eb({type:e,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),e})()},NvMS:function(e,r,t){"use strict";t.d(r,"a",(function(){return d}));var n=t("Ei5h"),s=t("DvS/"),a=t("Mb37"),i=t("fXoL"),o=t("3+9a");const l=["spinnerImg"];let d=(()=>{class e{constructor(){}ngOnInit(){this.fallbackUrl=s.a.SPINNER,this.images=n.a}ngAfterContentInit(){this.checkInput()}checkInput(){null==this.loading&&a.a.error("Loading property is required.")}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=i.Db({type:e,selectors:[["spinners-gif-spinner"]],viewQuery:function(e,r){var t;1&e&&i.Jc(l,!0),2&e&&i.tc(t=i.bc())&&(r.spinnerImage=t.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(e,r){1&e&&(i.Ob(0,"div",0),i.Kb(1,"img",1,2),i.ec(3,"defaultImage"),i.Nb()),2&e&&(i.lc("hidden",!r.loading),i.wb(1),i.lc("src",i.ic(3,2,r.images.SPINNER,r.fallbackUrl,r.spinnerImage,!0),i.yc))},pipes:[o.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem));margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{transform:rotate(1turn)}}@keyframes rotate{to{transform:rotate(1turn)}}"]}),e})()},WjtB:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t("ofXK"),s=t("iTUp"),a=t("fXoL");let i=(()=>{class e{}return e.\u0275mod=a.Hb({type:e}),e.\u0275inj=a.Gb({factory:function(r){return new(r||e)},imports:[[n.c,s.a]]}),e})()},qYmF:function(e,r,t){"use strict";t.r(r),t.d(r,"LoginModule",(function(){return P}));var n=t("ofXK"),s=t("tyNb"),a=t("Dat7"),i=t("3Pt+"),o=t("lGQG"),l=t("Rv5h"),d=t("vuBd"),c=t("Mb37"),u=t("qfBg"),p=t("fXoL"),h=t("NvMS"),m=t("FpAq"),g=t("siFw");function b(e,r){if(1&e&&(p.Ob(0,"div",16),p.Fc(1),p.Nb()),2&e){const e=p.dc();p.wb(1),p.Hc(" ",e.loginFail," ")}}const w=function(){return["/","register"]},f=[{path:"",component:(()=>{class e{constructor(e,r,t){this.authService=e,this.router=r,this.route=t,String.prototype.sanitizeXSS=l.a,String.prototype.removeStringChars=d.a}get Username(){return this.loginForm.get("username")}get Password(){return this.loginForm.get("password")}ngOnInit(){this.lengths=u.b,this.loginForm=new i.e({username:new i.c("",[i.s.required,i.s.minLength(this.lengths.username[0]),i.s.maxLength(this.lengths.username[1])]),password:new i.c("",[i.s.required,i.s.minLength(this.lengths.password[0]),i.s.maxLength(this.lengths.password[1])])}),this.firedOff=!1,this.loading=!1,setTimeout(o.a.logout,100)}login(){this.firedOff=!0,this.loading=!0,this.authService.authenticateUser({username:this.Username.value,password:this.Password.value}).subscribe(e=>{if(e.success){o.a.storeData(e.token,e.user),this.loading=!1;const r=this.route.snapshot.queryParamMap.get("returnUrl");this.router.navigate([r||"/roms"]),this.loginFail=""}else this.loading=!1,this.loginFail="Incorrect Login"},e=>{this.loading=!1,this.firedOff=!1,this.loginFail=404===e.status?"User does not exist":403===e.status?"Wrong password":"Oops, there was a problem while trying to log you in. Please try again later.",c.a.error(e)})}sanitizeData(){this.Username.setValue(this.Username.value.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.Password.setValue(this.Password.value.sanitizeXSS({replaceSpecialChars:!1}))}}return e.\u0275fac=function(r){return new(r||e)(p.Jb(o.a),p.Jb(s.d),p.Jb(s.a))},e.\u0275cmp=p.Db({type:e,selectors:[["login"]],decls:39,vars:22,consts:[[3,"loading"],["id","form-container",1,"container","text-center"],["name","loginForm","autocomplete","on",3,"formGroup","ngSubmit"],[1,"pt-2","pb-2","text-center"],["id","border-container",1,"border","rounded"],[1,"form-group"],["for","username",1,"font-weight-bold"],["type","text","id","username","name","username","formControlName","username","autocomplete","username",1,"form-control"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["for","password",1,"font-weight-bold"],["type","password","id","password","name","password","formControlName","password","autocomplete","current-password",1,"form-control"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["appAlert","","alertType","info",1,"mt-2","mb-2"],[3,"routerLink"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,r){1&e&&(p.Mb(0),p.Kb(1,"spinners-gif-spinner",0),p.Ob(2,"div",1),p.Ob(3,"form",2),p.ac("ngSubmit",(function(){return r.login()})),p.Ob(4,"fieldset"),p.Ob(5,"legend",3),p.Fc(6,"Login"),p.Nb(),p.Ob(7,"div",4),p.Ob(8,"div",5),p.Mb(9),p.Ob(10,"label",6),p.Fc(11,"Username"),p.Nb(),p.Kb(12,"input",7),p.Ob(13,"div",8),p.Ob(14,"div",9),p.Fc(15," Username is required. "),p.Nb(),p.Ob(16,"div",9),p.Fc(17),p.Nb(),p.Ob(18,"div",9),p.Fc(19),p.Nb(),p.Nb(),p.Lb(),p.Mb(20),p.Ob(21,"label",10),p.Fc(22,"Password"),p.Nb(),p.Kb(23,"input",11),p.Ob(24,"div",8),p.Ob(25,"div",9),p.Fc(26," Password is required. "),p.Nb(),p.Ob(27,"div",9),p.Fc(28),p.Nb(),p.Ob(29,"div",9),p.Fc(30),p.Nb(),p.Nb(),p.Lb(),p.Nb(),p.Ob(31,"button",12),p.ac("click",(function(){return r.sanitizeData()})),p.Fc(32," Login "),p.Nb(),p.Nb(),p.Nb(),p.Ob(33,"div",13),p.Fc(34," Don't have an account? Register "),p.Ob(35,"a",14),p.Fc(36,"here"),p.Nb(),p.Fc(37,"! "),p.Nb(),p.Dc(38,b,2,1,"div",15),p.Nb(),p.Nb(),p.Lb()),2&e&&(p.wb(1),p.lc("loading",r.loading),p.wb(2),p.lc("formGroup",r.loginForm),p.wb(10),p.lc("hidden",!(r.Username.touched&&r.Username.invalid)),p.wb(1),p.lc("hidden",!(null!=r.Username.errors&&r.Username.errors.required)),p.wb(2),p.lc("hidden",!(null!=r.Username.errors&&r.Username.errors.minlength)),p.wb(1),p.Ic(" Username is too short (min: ",r.lengths.username[0],", current: ",r.Username.value.length,"). "),p.wb(1),p.lc("hidden",!(null!=r.Username.errors&&r.Username.errors.maxlength)),p.wb(1),p.Ic(" Username is too long (max: ",r.lengths.username[1],", current: ",r.Username.value.length,"). "),p.wb(5),p.lc("hidden",!(r.Password.touched&&r.Password.invalid)),p.wb(1),p.lc("hidden",!(null!=r.Password.errors&&r.Password.errors.required)),p.wb(2),p.lc("hidden",!(null!=r.Password.errors&&r.Password.errors.minlength)),p.wb(1),p.Ic(" Password is too short (min: ",r.lengths.password[0],", current: ",r.Password.value.length,"). "),p.wb(1),p.lc("hidden",!(null!=r.Password.errors&&r.Password.errors.maxlength)),p.wb(1),p.Ic(" Password is too long (max: ",r.lengths.password[1],", current: ",r.Password.value.length,"). "),p.wb(1),p.lc("disabled",!r.loginForm.valid||r.loading||r.firedOff),p.wb(4),p.lc("routerLink",p.pc(21,w)),p.wb(3),p.lc("ngIf",r.loginFail))},directives:[h.a,i.u,i.m,i.f,i.a,i.l,i.d,m.a,g.a,s.g,n.o],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px) and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px) and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px) and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0) and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})(),canActivate:[a.a]}];let v=(()=>{class e{}return e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({factory:function(r){return new(r||e)},imports:[[s.h.forChild(f)],s.h]}),e})();var y=t("FUS3"),O=t("WjtB");let P=(()=>{class e{}return e.\u0275mod=p.Hb({type:e}),e.\u0275inj=p.Gb({factory:function(r){return new(r||e)},providers:[u.a,o.a],imports:[[n.c,v,y.a,O.a,i.q]]}),e})()}}]);