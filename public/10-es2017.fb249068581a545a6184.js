(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{qYmF:function(e,n,r){"use strict";r.r(n);var t=r("ofXK"),o=r("3Pt+"),i=r("lGQG"),a=r("Rv5h"),s=r("vuBd"),d=r("Mb37"),c=r("fXoL"),l=r("tyNb"),m=r("NvMS"),b=r("FpAq"),u=r("siFw");function g(e,n){if(1&e&&(c.Rb(0,"div",16),c.Hc(1),c.Pb()),2&e){const e=c.gc();c.xb(1),c.Jc(" ",e.loginFail," ")}}const h=function(){return["/","register"]},p=[{path:"",component:(()=>{class e{constructor(e,n,r){this.authService=e,this.router=n,this.route=r,this.loginForm=new o.e({username:new o.c("",[o.s.required,o.s.minLength(3),o.s.maxLength(22)]),password:new o.c("",[o.s.required,o.s.minLength(6),o.s.maxLength(256)])}),String.prototype.sanitizeXSS=a.a,String.prototype.removeStringChars=s.a}get Username(){return this.loginForm.get("username")}get Password(){return this.loginForm.get("password")}ngOnInit(){this.firedOff=!1,this.loading=!1,setTimeout(i.a.logout,100)}login(){this.firedOff=!0,this.loading=!0,this.authService.authenticateUser({username:this.Username.value,password:this.Password.value}).subscribe(e=>{if(e.success){i.a.storeData(e.token,e.user),this.loading=!1;const n=this.route.snapshot.queryParamMap.get("returnUrl");this.router.navigate([n||"/roms"]),this.loginFail=""}else this.loading=!1,this.loginFail="Incorrect Login"},e=>{throw this.loading=!1,this.firedOff=!1,this.loginFail=404===e.status?"User does not exist":403===e.status?"Wrong password":"Oops, there was a problem while trying to log you in. Please try again later.",d.a.error(e)})}sanitizeData(){this.Username.setValue(this.Username.value.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.Password.setValue(this.Password.value.sanitizeXSS({replaceSpecialChars:!1}))}}return e.\u0275fac=function(n){return new(n||e)(c.Lb(i.a),c.Lb(l.c),c.Lb(l.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["login"]],decls:39,vars:18,consts:[[3,"loading"],["id","form-container",1,"container","text-center"],["name","loginForm","autocomplete","on",3,"formGroup","ngSubmit"],[1,"pt-2","pb-2","text-center"],["id","border-container",1,"border","rounded"],[1,"form-group"],["for","username",1,"font-weight-bold"],["type","text","id","username","name","username","formControlName","username","autocomplete","username",1,"form-control"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["for","password",1,"font-weight-bold"],["type","password","id","password","name","password","formControlName","password","autocomplete","current-password",1,"form-control"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["appAlert","","alertType","info",1,"mt-2","mb-2"],[3,"routerLink"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,n){1&e&&(c.Ob(0),c.Mb(1,"spinners-gif-spinner",0),c.Rb(2,"div",1),c.Rb(3,"form",2),c.dc("ngSubmit",(function(e){return n.login()})),c.Rb(4,"fieldset"),c.Rb(5,"legend",3),c.Hc(6,"Login"),c.Pb(),c.Rb(7,"div",4),c.Rb(8,"div",5),c.Ob(9),c.Rb(10,"label",6),c.Hc(11,"Username"),c.Pb(),c.Mb(12,"input",7),c.Rb(13,"div",8),c.Rb(14,"div",9),c.Hc(15," Username is required. "),c.Pb(),c.Rb(16,"div",9),c.Hc(17),c.Pb(),c.Rb(18,"div",9),c.Hc(19),c.Pb(),c.Pb(),c.Nb(),c.Ob(20),c.Rb(21,"label",10),c.Hc(22,"Password"),c.Pb(),c.Mb(23,"input",11),c.Rb(24,"div",8),c.Rb(25,"div",9),c.Hc(26," Password is required. "),c.Pb(),c.Rb(27,"div",9),c.Hc(28),c.Pb(),c.Rb(29,"div",9),c.Hc(30),c.Pb(),c.Pb(),c.Nb(),c.Pb(),c.Rb(31,"button",12),c.dc("click",(function(e){return n.sanitizeData()})),c.Hc(32," Login "),c.Pb(),c.Pb(),c.Pb(),c.Rb(33,"div",13),c.Hc(34," Don't have an account? Register "),c.Rb(35,"a",14),c.Hc(36,"here"),c.Pb(),c.Hc(37,"! "),c.Pb(),c.Fc(38,g,2,1,"div",15),c.Pb(),c.Pb(),c.Nb()),2&e&&(c.xb(1),c.nc("loading",n.loading),c.xb(2),c.nc("formGroup",n.loginForm),c.xb(10),c.nc("hidden",!(n.Username.touched&&n.Username.invalid)),c.xb(1),c.nc("hidden",!(null!=n.Username.errors&&n.Username.errors.required)),c.xb(2),c.nc("hidden",!(null!=n.Username.errors&&n.Username.errors.minlength)),c.xb(1),c.Jc(" Username is too short (min: 3, current: ",n.Username.value.length,"). "),c.xb(1),c.nc("hidden",!(null!=n.Username.errors&&n.Username.errors.maxlength)),c.xb(1),c.Jc(" Username is too long (max: 22, current: ",n.Username.value.length,"). "),c.xb(5),c.nc("hidden",!(n.Password.touched&&n.Password.invalid)),c.xb(1),c.nc("hidden",!(null!=n.Password.errors&&n.Password.errors.required)),c.xb(2),c.nc("hidden",!(null!=n.Password.errors&&n.Password.errors.minlength)),c.xb(1),c.Jc(" Password is too short (min: 6, current: ",n.Password.value.length,"). "),c.xb(1),c.nc("hidden",!(null!=n.Password.errors&&n.Password.errors.maxlength)),c.xb(1),c.Jc(" Password is too long (max: 256, current: ",n.Password.value.length,"). "),c.xb(1),c.nc("disabled",!n.loginForm.valid||n.loading||n.firedOff),c.xb(4),c.nc("routerLink",c.qc(17,h)),c.xb(3),c.nc("ngIf",n.loginFail))},directives:[m.a,o.u,o.m,o.f,o.a,o.l,o.d,b.a,u.a,l.f,t.n],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px)and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px)and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px)and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0)and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})(),canActivate:[r("Dat7").a]}];let w=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(n){return new(n||e)},imports:[[l.g.forChild(p)],l.g]}),e})();var f=r("FUS3"),P=r("WjtB"),v=r("qfBg");r.d(n,"LoginModule",(function(){return x}));let x=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(n){return new(n||e)},providers:[v.a,i.a],imports:[[t.b,w,f.a,P.a,o.q]]}),e})()}}]);