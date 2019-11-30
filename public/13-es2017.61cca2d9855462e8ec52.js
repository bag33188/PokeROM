(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"3+Ob":function(e,r,n){"use strict";n.r(r);var t=n("ofXK"),s=n("3Pt+"),a=n("lGQG"),i=n("Rv5h"),o=n("vuBd"),d=n("Mb37"),c=n("fXoL"),l=n("tyNb"),m=n("qfBg"),b=n("NvMS"),u=n("FpAq"),h=n("siFw");function g(e,r){if(1&e&&(c.Rb(0,"div",18),c.Hc(1),c.Pb()),2&e){const e=c.gc();c.xb(1),c.Jc(" ",e.registerFail," ")}}const p=function(){return["/","login"]},f=[{path:"",component:(()=>{class e{constructor(e,r,n){this.router=e,this.userService=r,this.fb=n,this.registerForm=this.fb.group({name:["",[s.s.minLength(1),s.s.maxLength(100)]],username:["",[s.s.required,s.s.minLength(3),s.s.maxLength(22)]],password:["",[s.s.required,s.s.minLength(6),s.s.maxLength(256)]]}),String.prototype.sanitizeXSS=i.a,String.prototype.removeStringChars=o.a}get Username(){return this.registerForm.get("username")}get Name(){return this.registerForm.get("name")}get Password(){return this.registerForm.get("password")}ngOnInit(){this.loading=!1,this.firedOff=!1,setTimeout(a.a.logout,100)}ngAfterContentInit(){window.scrollTo(0,0)}register(){this.firedOff=!0,this.loading=!0;const e={name:this.Name.value,username:this.Username.value,password:this.Password.value};/(?:([<>/\\'"&]))/g.test(e.username)?this.registerFail="Username can only contain letters, numbers, or underscores.":((e.name.length<1||""===e.name)&&delete e.name,this.userService.registerUser(e).subscribe(e=>{e.success?(this.loading=!1,this.router.navigate(["/","login"]),this.registerFail=""):this.registerFail="Incorrect Registration"},e=>{this.firedOff=!1,this.loading=!1;const r=["error","user_exists","errors","msg"];e[r[0]].hasOwnProperty(r[1])&&(this.registerFail=!0===e[r[0]][r[1]]?"User with username already exists":"Registration Failure"),e[r[0]][r[2]]&&e[r[0]][r[2]].forEach(e=>{this.registerFail="Username can only contain letters, numbers, or underscores."===e[r[3]]?"Username can only contain letters, numbers, or underscores.":"Password contains invalid characters."===e[r[3]]?"Password contains invalid characters.":"Registration Failure"}),d.a.error(e)}))}sanitizeData(){this.Name.setValue(this.Name.value.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.Username.setValue(this.Username.value.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.Password.setValue(this.Password.value.sanitizeXSS({replaceSpecialChars:!1}))}}return e.\u0275fac=function(r){return new(r||e)(c.Lb(l.c),c.Lb(m.a),c.Lb(s.b))},e.\u0275cmp=c.Fb({type:e,selectors:[["register"]],decls:48,vars:23,consts:[[3,"loading"],["id","form-container",1,"container","text-center"],["name","registerForm","autocomplete","on",3,"formGroup","ngSubmit"],[1,"pt-2","pb-2","text-center"],["id","border-container",1,"border","rounded"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","name","name","formControlName","name","autocomplete","name","placeholder","Optional",1,"form-control"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["for","username",1,"font-weight-bold"],["type","text","id","username","name","username","formControlName","username","autocomplete","username","placeholder","Required",1,"form-control"],["for","password",1,"font-weight-bold"],["type","password","id","password","name","password","formControlName","password","autocomplete","new-password","placeholder","Required",1,"form-control"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["appAlert","","alertType","info",1,"mt-2","mb-2"],[3,"routerLink"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,r){1&e&&(c.Ob(0),c.Mb(1,"spinners-gif-spinner",0),c.Rb(2,"div",1),c.Rb(3,"form",2),c.dc("ngSubmit",(function(e){return r.register()})),c.Rb(4,"fieldset"),c.Rb(5,"legend",3),c.Hc(6,"Register"),c.Pb(),c.Rb(7,"div",4),c.Rb(8,"div",5),c.Ob(9),c.Rb(10,"label",6),c.Hc(11,"Name"),c.Pb(),c.Mb(12,"input",7),c.Rb(13,"div",8),c.Rb(14,"div",9),c.Hc(15),c.Pb(),c.Rb(16,"div",9),c.Hc(17),c.Pb(),c.Pb(),c.Nb(),c.Ob(18),c.Rb(19,"label",10),c.Hc(20,"Username"),c.Pb(),c.Mb(21,"input",11),c.Rb(22,"div",8),c.Rb(23,"div",9),c.Hc(24," Username is required. "),c.Pb(),c.Rb(25,"div",9),c.Hc(26),c.Pb(),c.Rb(27,"div",9),c.Hc(28),c.Pb(),c.Pb(),c.Nb(),c.Ob(29),c.Rb(30,"label",12),c.Hc(31,"Password"),c.Pb(),c.Mb(32,"input",13),c.Rb(33,"div",8),c.Rb(34,"div",9),c.Hc(35," Password is required. "),c.Pb(),c.Rb(36,"div",9),c.Hc(37),c.Pb(),c.Rb(38,"div",9),c.Hc(39),c.Pb(),c.Pb(),c.Nb(),c.Pb(),c.Rb(40,"button",14),c.dc("click",(function(e){return r.sanitizeData()})),c.Hc(41," Register "),c.Pb(),c.Pb(),c.Pb(),c.Rb(42,"div",15),c.Hc(43," Already have an account? Click "),c.Rb(44,"a",16),c.Hc(45,"here"),c.Pb(),c.Hc(46," to login. "),c.Pb(),c.Fc(47,g,2,1,"div",17),c.Pb(),c.Pb(),c.Nb()),2&e&&(c.xb(1),c.nc("loading",r.loading),c.xb(2),c.nc("formGroup",r.registerForm),c.xb(10),c.nc("hidden",!(r.Name.touched&&r.Name.invalid)),c.xb(1),c.nc("hidden",!(null!=r.Name.errors&&r.Name.errors.minlength)),c.xb(1),c.Jc(" Name is too short (min: 1, current: ",r.Name.value.length,"). "),c.xb(1),c.nc("hidden",!(null!=r.Name.errors&&r.Name.errors.maxlength)),c.xb(1),c.Jc(" Name is too long (max: 100, current: ",r.Name.value.length,"). "),c.xb(5),c.nc("hidden",!(r.Username.touched&&r.Username.invalid)),c.xb(1),c.nc("hidden",!(null!=r.Username.errors&&r.Username.errors.required)),c.xb(2),c.nc("hidden",!(null!=r.Username.errors&&r.Username.errors.minlength)),c.xb(1),c.Jc(" Username is too short (min: 3, current: ",r.Username.value.length,"). "),c.xb(1),c.nc("hidden",!(null!=r.Username.errors&&r.Username.errors.maxlength)),c.xb(1),c.Jc(" Username is too long (max: 22, current: ",r.Username.value.length,"). "),c.xb(5),c.nc("hidden",!(r.Password.touched&&r.Password.invalid)),c.xb(1),c.nc("hidden",!(null!=r.Password.errors&&r.Password.errors.required)),c.xb(2),c.nc("hidden",!(null!=r.Password.errors&&r.Password.errors.minlength)),c.xb(1),c.Jc(" Password is too short (min: 8, current: ",r.Password.value.length,"). "),c.xb(1),c.nc("hidden",!(null!=r.Password.errors&&r.Password.errors.maxlength)),c.xb(1),c.Jc(" Password is too long (max: 256, current: ",r.Password.value.length,"). "),c.xb(1),c.nc("disabled",!r.registerForm.valid||r.firedOff),c.xb(4),c.nc("routerLink",c.qc(22,p)),c.xb(3),c.nc("ngIf",r.registerFail))},directives:[b.a,s.u,s.m,s.f,s.a,s.l,s.d,u.a,h.a,l.f,t.n],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px)and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px)and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px)and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0)and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})(),canActivate:[n("Dat7").a]}];let w=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(r){return new(r||e)},imports:[[l.g.forChild(f)],l.g]}),e})();var v=n("FUS3"),P=n("WjtB");n.d(r,"RegisterModule",(function(){return x}));let x=(()=>{class e{}return e.\u0275mod=c.Jb({type:e}),e.\u0275inj=c.Ib({factory:function(r){return new(r||e)},providers:[m.a],imports:[[t.b,w,s.q,v.a,P.a]]}),e})()}}]);