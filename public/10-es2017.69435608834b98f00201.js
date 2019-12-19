(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{qYmF:function(e,r,n){"use strict";n.r(r);var t=n("SVse"),s=n("s7LF"),o=n("lGQG"),i=n("Rv5h"),a=n("vuBd"),d=n("Mb37"),l=n("qfBg"),c=n("8Y7J"),m=n("iInd"),u=n("NvMS"),b=n("FpAq"),h=n("siFw");function g(e,r){if(1&e&&(c.Rb(0,"div",16),c.Jc(1),c.Pb()),2&e){const e=c.gc();c.xb(1),c.Lc(" ",e.loginFail," ")}}const p=function(){return["/","register"]},w=[{path:"",component:(()=>{class e{constructor(e,r,n){this.authService=e,this.router=r,this.route=n,String.prototype.sanitizeXSS=i.a,String.prototype.removeStringChars=a.a}get Username(){return this.loginForm.get("username")}get Password(){return this.loginForm.get("password")}ngOnInit(){this.lengths=l.b,this.loginForm=new s.e({username:new s.c("",[s.s.required,s.s.minLength(this.lengths.username[0]),s.s.maxLength(this.lengths.username[1])]),password:new s.c("",[s.s.required,s.s.minLength(this.lengths.password[0]),s.s.maxLength(this.lengths.password[1])])}),this.firedOff=!1,this.loading=!1,setTimeout(o.a.logout,100)}login(){this.firedOff=!0,this.loading=!0,this.authService.authenticateUser({username:this.Username.value,password:this.Password.value}).subscribe(e=>{if(e.success){o.a.storeData(e.token,e.user),this.loading=!1;const r=this.route.snapshot.queryParamMap.get("returnUrl");this.router.navigate([r||"/roms"]),this.loginFail=""}else this.loading=!1,this.loginFail="Incorrect Login"},e=>{throw this.loading=!1,this.firedOff=!1,this.loginFail=404===e.status?"User does not exist":403===e.status?"Wrong password":"Oops, there was a problem while trying to log you in. Please try again later.",d.a.error(e)})}sanitizeData(){this.Username.setValue(this.Username.value.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.Password.setValue(this.Password.value.sanitizeXSS({replaceSpecialChars:!1}))}}return e.\u0275fac=function(r){return new(r||e)(c.Lb(o.a),c.Lb(m.d),c.Lb(m.a))},e.\u0275cmp=c.Fb({type:e,selectors:[["login"]],decls:39,vars:22,consts:[[3,"loading"],["id","form-container",1,"container","text-center"],["name","loginForm","autocomplete","on",3,"formGroup","ngSubmit"],[1,"pt-2","pb-2","text-center"],["id","border-container",1,"border","rounded"],[1,"form-group"],["for","username",1,"font-weight-bold"],["type","text","id","username","name","username","formControlName","username","autocomplete","username",1,"form-control"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["for","password",1,"font-weight-bold"],["type","password","id","password","name","password","formControlName","password","autocomplete","current-password",1,"form-control"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["appAlert","","alertType","info",1,"mt-2","mb-2"],[3,"routerLink"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,r){1&e&&(c.Ob(0),c.Mb(1,"spinners-gif-spinner",0),c.Rb(2,"div",1),c.Rb(3,"form",2),c.dc("ngSubmit",(function(e){return r.login()})),c.Rb(4,"fieldset"),c.Rb(5,"legend",3),c.Jc(6,"Login"),c.Pb(),c.Rb(7,"div",4),c.Rb(8,"div",5),c.Ob(9),c.Rb(10,"label",6),c.Jc(11,"Username"),c.Pb(),c.Mb(12,"input",7),c.Rb(13,"div",8),c.Rb(14,"div",9),c.Jc(15," Username is required. "),c.Pb(),c.Rb(16,"div",9),c.Jc(17),c.Pb(),c.Rb(18,"div",9),c.Jc(19),c.Pb(),c.Pb(),c.Nb(),c.Ob(20),c.Rb(21,"label",10),c.Jc(22,"Password"),c.Pb(),c.Mb(23,"input",11),c.Rb(24,"div",8),c.Rb(25,"div",9),c.Jc(26," Password is required. "),c.Pb(),c.Rb(27,"div",9),c.Jc(28),c.Pb(),c.Rb(29,"div",9),c.Jc(30),c.Pb(),c.Pb(),c.Nb(),c.Pb(),c.Rb(31,"button",12),c.dc("click",(function(e){return r.sanitizeData()})),c.Jc(32," Login "),c.Pb(),c.Pb(),c.Pb(),c.Rb(33,"div",13),c.Jc(34," Don't have an account? Register "),c.Rb(35,"a",14),c.Jc(36,"here"),c.Pb(),c.Jc(37,"! "),c.Pb(),c.Hc(38,g,2,1,"div",15),c.Pb(),c.Pb(),c.Nb()),2&e&&(c.xb(1),c.oc("loading",r.loading),c.xb(2),c.oc("formGroup",r.loginForm),c.xb(10),c.oc("hidden",!(r.Username.touched&&r.Username.invalid)),c.xb(1),c.oc("hidden",!(null!=r.Username.errors&&r.Username.errors.required)),c.xb(2),c.oc("hidden",!(null!=r.Username.errors&&r.Username.errors.minlength)),c.xb(1),c.Mc(" Username is too short (min: ",r.lengths.username[0],", current: ",r.Username.value.length,"). "),c.xb(1),c.oc("hidden",!(null!=r.Username.errors&&r.Username.errors.maxlength)),c.xb(1),c.Mc(" Username is too long (max: ",r.lengths.username[1],", current: ",r.Username.value.length,"). "),c.xb(5),c.oc("hidden",!(r.Password.touched&&r.Password.invalid)),c.xb(1),c.oc("hidden",!(null!=r.Password.errors&&r.Password.errors.required)),c.xb(2),c.oc("hidden",!(null!=r.Password.errors&&r.Password.errors.minlength)),c.xb(1),c.Mc(" Password is too short (min: ",r.lengths.password[0],", current: ",r.Password.value.length,"). "),c.xb(1),c.oc("hidden",!(null!=r.Password.errors&&r.Password.errors.maxlength)),c.xb(1),c.Mc(" Password is too long (max: ",r.lengths.password[1],", current: ",r.Password.value.length,"). "),c.xb(1),c.oc("disabled",!r.loginForm.valid||r.loading||r.firedOff),c.xb(4),c.oc("routerLink",c.sc(21,p)),c.xb(3),c.oc("ngIf",r.loginFail))},directives:[u.a,s.u,s.m,s.f,s.a,s.l,s.d,b.a,h.a,m.g,t.o],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px)and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px)and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px)and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0)and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})(),canActivate:[n("Dat7").a]}];let f=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(r){return new(r||e)},imports:[[m.h.forChild(w)],m.h]}),e})();var P=n("FUS3"),v=n("WjtB");n.d(r,"LoginModule",(function(){return x}));let x=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(r){return new(r||e)},providers:[l.a,o.a],imports:[[t.c,f,P.a,v.a,s.q]]}),e})()}}]);