(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3+Ob":function(e,r,t){"use strict";t.r(r);var n=t("ofXK"),s=t("tyNb"),a=t("Dat7"),i=t("3Pt+"),o=t("lGQG"),l=t("qfBg"),c=t("Rv5h"),d=t("vuBd"),m=t("Mb37"),h=t("fXoL"),u=t("NvMS"),p=t("FpAq"),g=t("siFw");function b(e,r){if(1&e&&(h.Rb(0,"div",21),h.Ic(1),h.Qb()),2&e){const e=h.gc();h.zb(1),h.Kc(" ",e.registerFail," ")}}const f=function(){return["/","login"]},w=[{path:"",component:(()=>{class e{constructor(e,r,t){this.router=e,this.userService=r,this.fb=t,String.prototype.sanitizeXSS=c.a,String.prototype.removeStringChars=d.a}get Username(){return this.registerForm.get("username")}get Name(){return this.registerForm.get("name")}get Password(){return this.registerForm.get("password")}ngOnInit(){this.lengths=l.b,this.registerForm=this.fb.group({name:["",[i.s.minLength(this.lengths.name[0]),i.s.maxLength(this.lengths.name[1])]],username:["",[i.s.required,i.s.minLength(this.lengths.username[0]),i.s.maxLength(this.lengths.username[1])]],password:["",[i.s.required,i.s.minLength(this.lengths.password[0]),i.s.maxLength(this.lengths.password[1])]]}),this.loading=!1,this.firedOff=!1,setTimeout(o.a.logout,100)}register(){this.firedOff=!0,this.loading=!0;const e={name:this.Name.value,username:this.Username.value,password:this.Password.value};/([<>/\\'"&])/g.test(e.username)?this.registerFail="Username can only contain letters, numbers, or underscores.":((e.name.length<1||""===e.name)&&delete e.name,this.userService.registerUser(e).subscribe(e=>{e.success?(this.loading=!1,this.router.navigate(["/","login"]),this.registerFail=""):this.registerFail="Incorrect Registration"},e=>{this.firedOff=!1,this.loading=!1;const r=["error","user_exists","errors","msg"];e[r[0]].hasOwnProperty(r[1])&&(this.registerFail=!0===e[r[0]][r[1]]?"User with username already exists":"Registration Failure"),e[r[0]][r[2]]&&e[r[0]][r[2]].forEach(e=>{this.registerFail="Username can only contain letters, numbers, or underscores."===e[r[3]]?"Username can only contain letters, numbers, or underscores.":"Password contains invalid characters."===e[r[3]]?"Password contains invalid characters.":"Registration Failure"}),m.a.error(e)}))}sanitizeData(){this.Name.setValue(this.Name.value.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.Username.setValue(this.Username.value.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.Password.setValue(this.Password.value.sanitizeXSS({replaceSpecialChars:!1}))}}return e.\u0275fac=function(r){return new(r||e)(h.Mb(s.d),h.Mb(l.a),h.Mb(i.b))},e.\u0275cmp=h.Gb({type:e,selectors:[["register"]],decls:56,vars:35,consts:[[3,"loading"],["id","form-container",1,"container","text-center"],["name","registerForm","autocomplete","on",3,"formGroup","ngSubmit"],[1,"pt-2","pb-2","text-center"],["id","border-container",1,"border","rounded"],[1,"mb-0"],[1,"text-danger","font-weight-bold"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","name","name","formControlName","name","autocomplete","name",1,"form-control",3,"placeholder"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["for","username",1,"font-weight-bold"],[1,"text-danger"],["type","text","id","username","name","username","formControlName","username","autocomplete","username",1,"form-control",3,"placeholder"],["for","password",1,"font-weight-bold"],["type","password","id","password","name","password","formControlName","password","autocomplete","new-password",1,"form-control",3,"placeholder"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["appAlert","","alertType","info",1,"mt-2","mb-2"],[3,"routerLink"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,r){1&e&&(h.Pb(0),h.Nb(1,"spinners-gif-spinner",0),h.Rb(2,"div",1),h.Rb(3,"form",2),h.dc("ngSubmit",(function(e){return r.register()})),h.Rb(4,"fieldset"),h.Rb(5,"legend",3),h.Ic(6,"Register"),h.Qb(),h.Rb(7,"div",4),h.Rb(8,"p",5),h.Rb(9,"span",6),h.Ic(10,"*"),h.Qb(),h.Ic(11," = required "),h.Qb(),h.Rb(12,"div",7),h.Pb(13),h.Rb(14,"label",8),h.Ic(15,"Name"),h.Qb(),h.Nb(16,"input",9),h.Rb(17,"div",10),h.Rb(18,"div",11),h.Ic(19),h.Qb(),h.Rb(20,"div",11),h.Ic(21),h.Qb(),h.Qb(),h.Ob(),h.Pb(22),h.Rb(23,"label",12),h.Ic(24,"Username\xa0"),h.Rb(25,"span",13),h.Ic(26,"*"),h.Qb(),h.Qb(),h.Nb(27,"input",14),h.Rb(28,"div",10),h.Rb(29,"div",11),h.Ic(30," Username is required. "),h.Qb(),h.Rb(31,"div",11),h.Ic(32),h.Qb(),h.Rb(33,"div",11),h.Ic(34),h.Qb(),h.Qb(),h.Ob(),h.Pb(35),h.Rb(36,"label",15),h.Ic(37,"Password\xa0"),h.Rb(38,"span",13),h.Ic(39,"*"),h.Qb(),h.Qb(),h.Nb(40,"input",16),h.Rb(41,"div",10),h.Rb(42,"div",11),h.Ic(43," Password is required. "),h.Qb(),h.Rb(44,"div",11),h.Ic(45),h.Qb(),h.Rb(46,"div",11),h.Ic(47),h.Qb(),h.Qb(),h.Ob(),h.Qb(),h.Rb(48,"button",17),h.dc("click",(function(e){return r.sanitizeData()})),h.Ic(49," Register "),h.Qb(),h.Qb(),h.Qb(),h.Rb(50,"div",18),h.Ic(51," Already have an account? Click "),h.Rb(52,"a",19),h.Ic(53,"here"),h.Qb(),h.Ic(54," to login. "),h.Qb(),h.Gc(55,b,2,1,"div",20),h.Qb(),h.Qb(),h.Ob()),2&e&&(h.zb(1),h.oc("loading",r.loading),h.zb(2),h.oc("formGroup",r.registerForm),h.zb(13),h.rc("placeholder","min: ",r.lengths.name[0],", max: ",r.lengths.name[1],""),h.zb(1),h.oc("hidden",!(r.Name.touched&&r.Name.invalid)),h.zb(1),h.oc("hidden",!(null!=r.Name.errors&&r.Name.errors.minlength)),h.zb(1),h.Lc(" Name is too short (min: ",r.lengths.name[0],", current: ",r.Name.value.length,"). "),h.zb(1),h.oc("hidden",!(null!=r.Name.errors&&r.Name.errors.maxlength)),h.zb(1),h.Lc(" Name is too long (max: ",r.lengths.name[1],", current: ",r.Name.value.length,"). "),h.zb(6),h.rc("placeholder","min: ",r.lengths.username[0],", max: ",r.lengths.username[1],""),h.zb(1),h.oc("hidden",!(r.Username.touched&&r.Username.invalid)),h.zb(1),h.oc("hidden",!(null!=r.Username.errors&&r.Username.errors.required)),h.zb(2),h.oc("hidden",!(null!=r.Username.errors&&r.Username.errors.minlength)),h.zb(1),h.Lc(" Username is too short (min: ",r.lengths.username[0],", current: ",r.Username.value.length,"). "),h.zb(1),h.oc("hidden",!(null!=r.Username.errors&&r.Username.errors.maxlength)),h.zb(1),h.Lc(" Username is too long (max: ",r.lengths.username[1],", current: ",r.Username.value.length,"). "),h.zb(6),h.rc("placeholder","min: ",r.lengths.password[0],", max: ",r.lengths.password[1],""),h.zb(1),h.oc("hidden",!(r.Password.touched&&r.Password.invalid)),h.zb(1),h.oc("hidden",!(null!=r.Password.errors&&r.Password.errors.required)),h.zb(2),h.oc("hidden",!(null!=r.Password.errors&&r.Password.errors.minlength)),h.zb(1),h.Lc(" Password is too short (min: ",r.lengths.password[0],", current: ",r.Password.value.length,"). "),h.zb(1),h.oc("hidden",!(null!=r.Password.errors&&r.Password.errors.maxlength)),h.zb(1),h.Lc(" Password is too long (max: ",r.lengths.password[1],", current: ",r.Password.value.length,"). "),h.zb(1),h.oc("disabled",!r.registerForm.valid||r.firedOff),h.zb(4),h.oc("routerLink",h.sc(34,f)),h.zb(3),h.oc("ngIf",r.registerFail))},directives:[u.a,i.u,i.m,i.f,i.a,i.l,i.d,p.a,g.a,s.g,n.o],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px)and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px)and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px)and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0)and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),e})(),canActivate:[a.a]}];let v=(()=>{class e{}return e.\u0275mod=h.Kb({type:e}),e.\u0275inj=h.Jb({factory:function(r){return new(r||e)},imports:[[s.h.forChild(w)],s.h]}),e})();var y=t("FUS3"),x=t("WjtB");t.d(r,"RegisterModule",(function(){return P}));let P=(()=>{class e{}return e.\u0275mod=h.Kb({type:e}),e.\u0275inj=h.Jb({factory:function(r){return new(r||e)},providers:[l.a],imports:[[n.c,v,i.q,y.a,x.a]]}),e})()},FpAq:function(e,r,t){"use strict";t.d(r,"a",(function(){return a}));var n=t("Mb37"),s=t("fXoL");let a=(()=>{class e{constructor(e){this.el=e}ngOnInit(){this.preClasses=["alert",this.addShadow?"shadow":null],this.alertType?this.setType():n.a.error("No alert type specified."),null!=this.addShadow&&"boolean"!=typeof this.addShadow&&n.a.error("addShadow must be a boolean.")}getType(){if("string"==typeof this.alertType)switch(this.alertType){case"primary":return[...this.preClasses,"alert-primary"];case"secondary":return[...this.preClasses,"alert-secondary"];case"warning":return[...this.preClasses,"alert-warning"];case"success":return[...this.preClasses,"alert-success"];case"danger":return[...this.preClasses,"alert-danger"];case"info":return[...this.preClasses,"alert-info"];case"light":return[...this.preClasses,"alert-light"];case"dark":return[...this.preClasses,"alert-dark"];default:n.a.error("Invalid alert type.")}else n.a.error("Type must be a string.")}setType(){const e=this.getType(),r=this.el.nativeElement.classList;e.forEach(e=>{Array.prototype.slice.call(r).includes(e)&&r.remove(e),r.add(e)}),Array.from(r).includes("null")&&r.remove("null")}}return e.\u0275fac=function(r){return new(r||e)(s.Mb(s.l))},e.\u0275dir=s.Hb({type:e,selectors:[["","appAlert",""]],inputs:{alertType:"alertType",addShadow:["shadow","addShadow"]}}),e})()},NvMS:function(e,r,t){"use strict";t.d(r,"a",(function(){return c}));var n=t("Ei5h"),s=t("DvS/"),a=t("Mb37"),i=t("fXoL"),o=t("3+9a");const l=["spinnerImg"];let c=(()=>{class e{constructor(){}ngOnInit(){this.fallbackUrl=s.a.SPINNER,this.images=n.a}ngAfterContentInit(){this.checkInput()}checkInput(){null==this.loading&&a.a.error("Loading property is required.")}}return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=i.Gb({type:e,selectors:[["spinners-gif-spinner"]],viewQuery:function(e,r){var t;1&e&&i.Mc(l,!0),2&e&&i.wc(t=i.ec())&&(r.spinnerImage=t.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(e,r){1&e&&(i.Rb(0,"div",0),i.Nb(1,"img",1,2),i.hc(3,"defaultImage"),i.Qb()),2&e&&(i.oc("hidden",!r.loading),i.zb(1),i.oc("src",i.lc(3,2,r.images.SPINNER,r.fallbackUrl,r.spinnerImage,!0),i.Bc))},pipes:[o.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - 56px - 2rem);margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"]}),e})()},WjtB:function(e,r,t){"use strict";t.d(r,"a",(function(){return i}));var n=t("ofXK"),s=t("iTUp"),a=t("fXoL");let i=(()=>{class e{}return e.\u0275mod=a.Kb({type:e}),e.\u0275inj=a.Jb({factory:function(r){return new(r||e)},imports:[[n.c,s.a]]}),e})()}}]);