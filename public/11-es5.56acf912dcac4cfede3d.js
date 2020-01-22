function _defineProperty(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,r,n){return r&&_defineProperties(e.prototype,r),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"3+Ob":function(e,r,n){"use strict";n.r(r);var t=n("SVse"),s=n("s7LF"),i=n("lGQG"),a=n("qfBg"),o=n("Rv5h"),c=n("vuBd"),l=n("Mb37"),d=n("8Y7J"),u=n("iInd"),p=n("NvMS"),m=n("FpAq"),h=n("siFw");function g(e,r){if(1&e&&(d.Sb(0,"div",21),d.Kc(1),d.Qb()),2&e){var n=d.hc();d.yb(1),d.Mc(" ",n.registerFail," ")}}var b,f,y=function(){return["/","login"]},v=[{path:"",component:(b=function(){function e(r,n,t){_classCallCheck(this,e),this.router=r,this.userService=n,this.fb=t,String.prototype.sanitizeXSS=o.a,String.prototype.removeStringChars=c.a}return _createClass(e,[{key:"ngOnInit",value:function(){this.lengths=a.b,this.registerForm=this.fb.group({name:["",[s.s.minLength(this.lengths.name[0]),s.s.maxLength(this.lengths.name[1])]],username:["",[s.s.required,s.s.minLength(this.lengths.username[0]),s.s.maxLength(this.lengths.username[1])]],password:["",[s.s.required,s.s.minLength(this.lengths.password[0]),s.s.maxLength(this.lengths.password[1])]]}),this.loading=!1,this.firedOff=!1,setTimeout(i.a.logout,100)}},{key:"register",value:function(){var e=this;this.firedOff=!0,this.loading=!0;var r={name:this.Name.value,username:this.Username.value,password:this.Password.value};/([<>/\\'"&])/g.test(r.username)?this.registerFail="Username can only contain letters, numbers, or underscores.":((r.name.length<1||""===r.name)&&delete r.name,this.userService.registerUser(r).subscribe((function(r){r.success?(e.loading=!1,e.router.navigate(["/","login"]),e.registerFail=""):e.registerFail="Incorrect Registration"}),(function(r){e.firedOff=!1,e.loading=!1;var n=["error","user_exists","errors","msg"];r[n[0]].hasOwnProperty(n[1])&&(e.registerFail=!0===r[n[0]][n[1]]?"User with username already exists":"Registration Failure"),r[n[0]][n[2]]&&r[n[0]][n[2]].forEach((function(r){e.registerFail="Username can only contain letters, numbers, or underscores."===r[n[3]]?"Username can only contain letters, numbers, or underscores.":"Password contains invalid characters."===r[n[3]]?"Password contains invalid characters.":"Registration Failure"})),l.a.error(r)})))}},{key:"sanitizeData",value:function(){this.Name.setValue(this.Name.value.sanitizeXSS({replaceSpecialChars:!0}).removeStringChars()),this.Username.setValue(this.Username.value.sanitizeXSS({replaceSpecialChars:!1}).removeStringChars()),this.Password.setValue(this.Password.value.sanitizeXSS({replaceSpecialChars:!1}))}},{key:"Username",get:function(){return this.registerForm.get("username")}},{key:"Name",get:function(){return this.registerForm.get("name")}},{key:"Password",get:function(){return this.registerForm.get("password")}}]),e}(),b.\u0275fac=function(e){return new(e||b)(d.Mb(u.d),d.Mb(a.a),d.Mb(s.b))},b.\u0275cmp=d.Gb({type:b,selectors:[["register"]],decls:56,vars:35,consts:[[3,"loading"],["id","form-container",1,"container","text-center"],["name","registerForm","autocomplete","on",3,"formGroup","ngSubmit"],[1,"pt-2","pb-2","text-center"],["id","border-container",1,"border","rounded"],[1,"mb-0"],[1,"text-danger","font-weight-bold"],[1,"form-group"],["for","name",1,"font-weight-bold"],["type","text","id","name","name","name","formControlName","name","autocomplete","name",1,"form-control",3,"placeholder"],["appAlert","","alertType","warning",3,"hidden"],[3,"hidden"],["for","username",1,"font-weight-bold"],[1,"text-danger"],["type","text","id","username","name","username","formControlName","username","autocomplete","username",1,"form-control",3,"placeholder"],["for","password",1,"font-weight-bold"],["type","password","id","password","name","password","formControlName","password","autocomplete","new-password",1,"form-control",3,"placeholder"],["type","submit","appBtn","","btnType","success",3,"disabled","click"],["appAlert","","alertType","info",1,"mt-2","mb-2"],[3,"routerLink"],["class","mt-1","appAlert","","alertType","danger",4,"ngIf"],["appAlert","","alertType","danger",1,"mt-1"]],template:function(e,r){1&e&&(d.Pb(0),d.Nb(1,"spinners-gif-spinner",0),d.Sb(2,"div",1),d.Sb(3,"form",2),d.ec("ngSubmit",(function(e){return r.register()})),d.Sb(4,"fieldset"),d.Sb(5,"legend",3),d.Kc(6,"Register"),d.Qb(),d.Sb(7,"div",4),d.Sb(8,"p",5),d.Sb(9,"span",6),d.Kc(10,"*"),d.Qb(),d.Kc(11," = required "),d.Qb(),d.Sb(12,"div",7),d.Pb(13),d.Sb(14,"label",8),d.Kc(15,"Name"),d.Qb(),d.Nb(16,"input",9),d.Sb(17,"div",10),d.Sb(18,"div",11),d.Kc(19),d.Qb(),d.Sb(20,"div",11),d.Kc(21),d.Qb(),d.Qb(),d.Ob(),d.Pb(22),d.Sb(23,"label",12),d.Kc(24,"Username\xa0"),d.Sb(25,"span",13),d.Kc(26,"*"),d.Qb(),d.Qb(),d.Nb(27,"input",14),d.Sb(28,"div",10),d.Sb(29,"div",11),d.Kc(30," Username is required. "),d.Qb(),d.Sb(31,"div",11),d.Kc(32),d.Qb(),d.Sb(33,"div",11),d.Kc(34),d.Qb(),d.Qb(),d.Ob(),d.Pb(35),d.Sb(36,"label",15),d.Kc(37,"Password\xa0"),d.Sb(38,"span",13),d.Kc(39,"*"),d.Qb(),d.Qb(),d.Nb(40,"input",16),d.Sb(41,"div",10),d.Sb(42,"div",11),d.Kc(43," Password is required. "),d.Qb(),d.Sb(44,"div",11),d.Kc(45),d.Qb(),d.Sb(46,"div",11),d.Kc(47),d.Qb(),d.Qb(),d.Ob(),d.Qb(),d.Sb(48,"button",17),d.ec("click",(function(e){return r.sanitizeData()})),d.Kc(49," Register "),d.Qb(),d.Qb(),d.Qb(),d.Sb(50,"div",18),d.Kc(51," Already have an account? Click "),d.Sb(52,"a",19),d.Kc(53,"here"),d.Qb(),d.Kc(54," to login. "),d.Qb(),d.Ic(55,g,2,1,"div",20),d.Qb(),d.Qb(),d.Ob()),2&e&&(d.yb(1),d.pc("loading",r.loading),d.yb(2),d.pc("formGroup",r.registerForm),d.yb(13),d.sc("placeholder","min: ",r.lengths.name[0],", max: ",r.lengths.name[1],""),d.yb(1),d.pc("hidden",!(r.Name.touched&&r.Name.invalid)),d.yb(1),d.pc("hidden",!(null!=r.Name.errors&&r.Name.errors.minlength)),d.yb(1),d.Nc(" Name is too short (min: ",r.lengths.name[0],", current: ",r.Name.value.length,"). "),d.yb(1),d.pc("hidden",!(null!=r.Name.errors&&r.Name.errors.maxlength)),d.yb(1),d.Nc(" Name is too long (max: ",r.lengths.name[1],", current: ",r.Name.value.length,"). "),d.yb(6),d.sc("placeholder","min: ",r.lengths.username[0],", max: ",r.lengths.username[1],""),d.yb(1),d.pc("hidden",!(r.Username.touched&&r.Username.invalid)),d.yb(1),d.pc("hidden",!(null!=r.Username.errors&&r.Username.errors.required)),d.yb(2),d.pc("hidden",!(null!=r.Username.errors&&r.Username.errors.minlength)),d.yb(1),d.Nc(" Username is too short (min: ",r.lengths.username[0],", current: ",r.Username.value.length,"). "),d.yb(1),d.pc("hidden",!(null!=r.Username.errors&&r.Username.errors.maxlength)),d.yb(1),d.Nc(" Username is too long (max: ",r.lengths.username[1],", current: ",r.Username.value.length,"). "),d.yb(6),d.sc("placeholder","min: ",r.lengths.password[0],", max: ",r.lengths.password[1],""),d.yb(1),d.pc("hidden",!(r.Password.touched&&r.Password.invalid)),d.yb(1),d.pc("hidden",!(null!=r.Password.errors&&r.Password.errors.required)),d.yb(2),d.pc("hidden",!(null!=r.Password.errors&&r.Password.errors.minlength)),d.yb(1),d.Nc(" Password is too short (min: ",r.lengths.password[0],", current: ",r.Password.value.length,"). "),d.yb(1),d.pc("hidden",!(null!=r.Password.errors&&r.Password.errors.maxlength)),d.yb(1),d.Nc(" Password is too long (max: ",r.lengths.password[1],", current: ",r.Password.value.length,"). "),d.yb(1),d.pc("disabled",!r.registerForm.valid||r.firedOff),d.yb(4),d.pc("routerLink",d.tc(34,y)),d.yb(3),d.pc("ngIf",r.registerFail))},directives:[p.a,s.u,s.m,s.f,s.a,s.l,s.d,m.a,h.a,u.g,t.o],styles:["#form-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:1rem;width:32vw}@media only screen and (min-width:100px)and (max-width:992px){#form-container[_ngcontent-%COMP%]{width:45vw}}@media only screen and (min-width:991px)and (max-width:762px){#form-container[_ngcontent-%COMP%]{width:55vw}}@media only screen and (min-width:761px)and (max-width:703px){#form-container[_ngcontent-%COMP%]{width:63vw}}@media only screen and (min-width:0)and (max-width:702px){#form-container[_ngcontent-%COMP%]{width:70vw}}#border-container[_ngcontent-%COMP%]{background-color:#fff;padding:14px}label[_ngcontent-%COMP%]{padding-top:1rem}"]}),b),canActivate:[n("Dat7").a]}],w=((f=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:f}),f.\u0275inj=d.Jb({factory:function(e){return new(e||f)},imports:[[u.h.forChild(v)],u.h]}),f),S=n("FUS3"),C=n("WjtB");n.d(r,"RegisterModule",(function(){return P}));var x,P=((x=function e(){_classCallCheck(this,e)}).\u0275mod=d.Kb({type:x}),x.\u0275inj=d.Jb({factory:function(e){return new(e||x)},providers:[a.a],imports:[[t.c,w,s.q,S.a,C.a]]}),x)},NvMS:function(e,r,n){"use strict";n.d(r,"a",(function(){return l}));var t=n("Ei5h"),s=n("DvS/"),i=n("Mb37"),a=n("8Y7J"),o=n("3+9a"),c=["spinnerImg"],l=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.fallbackUrl=s.a.SPINNER,this.images=t.a}},{key:"ngAfterContentInit",value:function(){this.checkInput()}},{key:"checkInput",value:function(){null==this.loading&&i.a.error("Loading property is required.")}}]),e}();return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=a.Gb({type:e,selectors:[["spinners-gif-spinner"]],viewQuery:function(e,r){var n;1&e&&a.Oc(c,!0),2&e&&a.xc(n=a.fc())&&(r.spinnerImage=n.first)},inputs:{loading:"loading"},decls:4,vars:7,consts:[[1,"spinner-container",3,"hidden"],["alt","Loading...",1,"spinner",3,"src"],["spinnerImg",""]],template:function(e,r){1&e&&(a.Sb(0,"div",0),a.Nb(1,"img",1,2),a.ic(3,"defaultImage"),a.Qb()),2&e&&(a.pc("hidden",!r.loading),a.yb(1),a.pc("src",a.mc(3,2,r.images.SPINNER,r.fallbackUrl,r.spinnerImage,!0),a.Cc))},pipes:[o.a],styles:[".spinner[_ngcontent-%COMP%]{height:6rem;width:6rem}.spinner-container[_ngcontent-%COMP%]{height:calc(100vh - 56px - 2rem);margin-right:-48px;margin-top:-48px;position:fixed;right:50%;top:50%;z-index:18}@media only screen and (max-width:500px){.spinner[_ngcontent-%COMP%]{height:4rem!important;width:4rem!important}.spinner-container[_ngcontent-%COMP%]{margin-right:-32px!important;margin-top:-32px!important}}@-webkit-keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotate{to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}"]}),e}()},WjtB:function(e,r,n){"use strict";n.d(r,"a",(function(){return a})),n("NvMS"),n("beNV");var t=n("SVse"),s=n("iTUp"),i=n("8Y7J"),a=function(){var e=function e(){_classCallCheck(this,e)};return e.\u0275mod=i.Kb({type:e}),e.\u0275inj=i.Jb({factory:function(r){return new(r||e)},imports:[[t.c,s.a]]}),e}()},beNV:function(e,r,n){"use strict";n.d(r,"a",(function(){return a}));var t=n("Mb37"),s=n("8Y7J"),i=n("SVse"),a=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){var e;!1===this.checkForErrors()&&(this.setType(),this.setColor(),this.ngClasses=(_defineProperty(e={},this.type,!0),_defineProperty(e,this.color,!0),_defineProperty(e,"spacing",null!=this.spaced&&!0===this.spaced),e))}},{key:"setType",value:function(){this.type=this.getType()}},{key:"setColor",value:function(){this.color=this.getColor()}},{key:"getType",value:function(){if("string"==typeof this.spinnerType)switch(this.spinnerType){case"border":return"spinner-border";case"grow":return"spinner-grow";default:t.a.error("Invalid type.")}else t.a.error("Type must be a string.")}},{key:"getColor",value:function(){if("string"==typeof this.spinnerColor)switch(this.spinnerColor){case"primary":return"text-primary";case"secondary":return"text-secondary";case"success":return"text-success";case"danger":return"text-danger";case"warning":return"text-warning";case"info":return"text-info";case"light":return"text-light";case"dark":return"text-dark";default:t.a.error("Invalid color.")}else t.a.error("Color must be a string.")}},{key:"checkForErrors",value:function(){return this.spinnerType?this.spinnerColor?null==this.loading?(t.a.error("Loading property is required."),!0):null!=this.spaced&&"boolean"!=typeof this.spaced?(t.a.error("Spaced property must be a boolean."),!0):!(!this.customSize||"number"==typeof this.customSize||(t.a.error("Custom size property must be a number data-type."),0)):(t.a.error("Color is required."),!0):(t.a.error("Type is required."),!0)}}]),e}();return e.\u0275fac=function(r){return new(r||e)},e.\u0275cmp=s.Gb({type:e,selectors:[["spinners-bootstrap-spinner"]],inputs:{loading:"loading",spinnerType:["type","spinnerType"],spinnerColor:["color","spinnerColor"],customSize:["size","customSize"],spaced:"spaced"},decls:3,vars:4,consts:[["role","status",3,"ngClass","hidden"],[1,"sr-only"]],template:function(e,r){1&e&&(s.Sb(0,"div",0),s.Sb(1,"span",1),s.Kc(2,"Loading..."),s.Qb(),s.Qb()),2&e&&(s.Hc("height",r.customSize?r.customSize:32,"px")("width",r.customSize?r.customSize:32,"px"),s.pc("ngClass",r.ngClasses)("hidden",!r.loading))},directives:[i.m],styles:[".spacing[_ngcontent-%COMP%]{margin:3rem!important}"]}),e}()}}]);