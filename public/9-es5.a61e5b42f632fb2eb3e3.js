function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7vJP":function(e,t,n){"use strict";n.r(t);var o=n("fXoL"),a=n("Ei5h"),c=n("DvS/"),i=n("hdQ0"),r=n("ofXK"),s=n("1kSV"),l=n("3+9a");function b(e,t){if(1&e&&(o.Mb(0,"img",4),o.hc(1,"defaultImage"),o.Rb(2,"div",5),o.Rb(3,"h3",6),o.Ic(4),o.Pb(),o.Rb(5,"p",6),o.Ic(6),o.Pb(),o.Pb()),2&e){var n=o.gc(),a=n.$implicit;o.pc("alt","slide-",n.index+1,""),o.nc("src",o.kc(1,4,a.image,a.backup,!0),o.Ac),o.xb(4),o.Kc(" ",a.heading," "),o.xb(2),o.Jc(a.caption)}}function u(e,t){1&e&&o.Gc(0,b,7,8,"ng-template",3)}function h(e,t){if(1&e&&(o.Rb(0,"ngb-carousel",1),o.Gc(1,u,1,0,void 0,2),o.Pb()),2&e){var n=o.gc();o.nc("interval",n.getInterval())("pauseOnHover",!1)("showNavigationIndicators",!1)("showNavigationArrows",n.carouselData.length>1),o.xb(1),o.nc("ngForOf",n.carouselData)}}var g,p=((g=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.imageUrls=c.a,this.images=a.a,this.carouselData=[{image:this.images.C_IMG1,backup:this.imageUrls.C_IMG1,heading:"Pok".concat(e.eacute,"mon Sword and Shield now available!"),caption:"The new Pok".concat(e.eacute,"mon games are now available on this website.")}]}},{key:"getInterval",value:function(){return e.interval}}]),e}()).eacute="\xe9",g.interval=i.a.convertSecondsToMilliseconds(4.8),g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=o.Fb({type:g,selectors:[["home-splash-carousel"]],decls:2,vars:1,consts:[[3,"interval","pauseOnHover","showNavigationIndicators","showNavigationArrows",4,"ngIf"],[3,"interval","pauseOnHover","showNavigationIndicators","showNavigationArrows"],[4,"ngFor","ngForOf"],["ngbSlide",""],[3,"src","alt"],[1,"carousel-caption"],[1,"white"]],template:function(e,t){1&e&&(o.Ob(0),o.Gc(1,h,2,5,"ngb-carousel",0),o.Nb()),2&e&&(o.xb(1),o.nc("ngIf",t.images))},directives:[r.o,s.e,r.n,s.q],pipes:[l.a],styles:["h3[_ngcontent-%COMP%]{color:#fff;padding:0 .5em;z-index:-1}@media only screen and (max-height:537px){.carousel-caption[_ngcontent-%COMP%]{bottom:0!important;margin:0!important;padding:0!important}}img[_ngcontent-%COMP%]{-webkit-filter:brightness(55%);filter:brightness(55%);height:calc(100vh - (56px + 2rem));-o-object-fit:cover;object-fit:cover;position:static;width:100%}@media all{img[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem))}}ngb-carousel[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:focus, ngb-carousel[_ngcontent-%COMP%]:focus{outline:0!important}"]}),g),d=n("QTu/"),m=n("tyNb"),f=n("siFw"),w=function(){return["/","register"]};function P(e,t){1&e&&(o.Rb(0,"a",6),o.Ic(1,"Sign Up!"),o.Pb()),2&e&&o.nc("routerLink",o.rc(1,w))}var v=function(){return["/","roms"]};function I(e,t){1&e&&(o.Rb(0,"a",6),o.Ic(1,"ROMs!"),o.Pb()),2&e&&o.nc("routerLink",o.rc(1,v))}var k,y=((k=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.key="user"}},{key:"loggedIn",value:function(){return!!d.a.getCookie(this.key)}}]),e}()).\u0275fac=function(e){return new(e||k)},k.\u0275cmp=o.Fb({type:k,selectors:[["home-showcase-jumbotron"]],decls:13,vars:2,consts:[[1,"jumbotron","bg-info","text-light"],[1,"display-4"],[1,"lead"],[1,"my-4","bg-light"],["ngbTooltip","yeah I said it!",1,"font-weight-bold"],["class","btn-lg","appBtn","","btnType","light-outline","role","button",3,"routerLink",4,"ngIf"],["appBtn","","btnType","light-outline","role","button",1,"btn-lg",3,"routerLink"]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Rb(1,"h1",1),o.Ic(2,"Welcome to the world of Pok\xe9ROM!"),o.Pb(),o.Rb(3,"p",2),o.Ic(4," Here, you can find all of the core Pok\xe9mon ROMs. "),o.Pb(),o.Mb(5,"hr",3),o.Rb(6,"p"),o.Ic(7," Play em' on your emus, catch em' all, and "),o.Rb(8,"span",4),o.Ic(9,"screw gen V!"),o.Pb(),o.Ic(10,"\xa0(Gen V ROMs are included) "),o.Pb(),o.Gc(11,P,2,2,"a",5),o.Gc(12,I,2,2,"a",5),o.Pb()),2&e&&(o.xb(11),o.nc("ngIf",!t.loggedIn()),o.xb(1),o.nc("ngIf",t.loggedIn()))},directives:[s.x,r.o,m.g,f.a],styles:[".jumbotron[_ngcontent-%COMP%]{border-radius:0!important;margin-bottom:0!important}"]}),k);function M(e,t){1&e&&(o.Rb(0,"span",4),o.Ic(1,"What does this Website Include?"),o.Pb())}function R(e,t){1&e&&(o.Ic(0," This website has all Core Pok\xe9mon Game ROMs, as well as some ROM Hacks. "),o.Mb(1,"br"),o.Mb(2,"br"),o.Rb(3,"span",5),o.Ic(4,"ROM Hacks Include:"),o.Pb(),o.Rb(5,"ul"),o.Rb(6,"li"),o.Ic(7,"Pok\xe9mon Prism"),o.Pb(),o.Rb(8,"li"),o.Ic(9,"Pok\xe9mon Ash Gray"),o.Pb(),o.Pb())}function O(e,t){1&e&&(o.Rb(0,"span",4),o.Ic(1,"Where did I get these ROMs?"),o.Pb())}function C(e,t){if(1&e&&(o.Ic(0," Every single ROM that you will see, download, or read about on this website has been dumped directly from its own cartridge"),o.Ic(1,". So how did I do this? "),o.Mb(2,"br"),o.Mb(3,"br"),o.Ic(4," For starters, to dump the GB and GBC ROMs, I used my N64 controller's Transfer Pak along with "),o.Rb(5,"a",6),o.Ic(6,"Raphet's"),o.Pb(),o.Ic(7,"\xa0 "),o.Rb(8,"a",6),o.Ic(9,"Adapter Management tool"),o.Pb(),o.Ic(10," (using Raphnet's "),o.Rb(11,"a",6),o.Ic(12,"N64 to USB adapter"),o.Pb(),o.Ic(13,") to read and dump the ROM from the cartridge. "),o.Mb(14,"br"),o.Mb(15,"br"),o.Ic(16," Next, I used my R4 along with a GBA backup tool on my DS Lite to dump the ROM on all GBA cartridges. "),o.Mb(17,"br"),o.Mb(18,"br"),o.Ic(19," For all NDS and 3DS core games, I used my CFW 3DS and GodMode9 to dump those ROMs from their respective cartridges. "),o.Mb(20,"br"),o.Mb(21,"br"),o.Ic(22," Finally, I recently hacked my Switch, and was thus able to dump the Pok\xe9mon Lets Go Pikachu and Eevee ROMs. ")),2&e){var n=o.gc();o.xb(5),o.nc("href",n.raphnetWebsite,o.Ac),o.xb(3),o.nc("href",n.raphnetSoftware,o.Ac),o.xb(3),o.nc("href",n.raphnetProduct,o.Ac)}}function _(e,t){1&e&&(o.Rb(0,"span",4),o.Ic(1,"Are these ROMs Free?"),o.Pb())}function x(e,t){1&e&&(o.Ic(0," Absolutely! Each and every ROM is free and backed by a no-adware/virus guarantee!"),o.Mb(1,"br"),o.Ic(2,"You won't ever have to deal with those pesky installers or even survey scams."),o.Mb(3,"br"),o.Ic(4,"This site contains direct download links only. All the ROMs come from my cloud database. "))}var G,S,A,F=((G=function(){function e(t){_classCallCheck(this,e),this.config=t,this.config.type="light"}return _createClass(e,[{key:"ngOnInit",value:function(){this.setRaphnetProps()}},{key:"setRaphnetProps",value:function(){this.raphnetWebsite="https://www.raphnet-tech.com",this.raphnetSoftware="https://www.raphnet-tech.com/products/adapter_manager/index.php",this.raphnetProduct="https://www.raphnet-tech.com/products/n64_usb_adapter_gen3/index.php"}}]),e}()).\u0275fac=function(e){return new(e||G)(o.Lb(s.b))},G.\u0275cmp=o.Fb({type:G,selectors:[["home-info-accordion"]],decls:11,vars:1,consts:[["id","acc-container",1,"ml-3","mr-3","text-dark"],[3,"closeOthers"],["ngbPanelTitle",""],["ngbPanelContent",""],[1,"black"],[1,"font-weight-bold"],["target","_blank","rel","noreferrer",3,"href"]],template:function(e,t){1&e&&(o.Rb(0,"div",0),o.Rb(1,"ngb-accordion",1),o.Rb(2,"ngb-panel"),o.Gc(3,M,2,0,"ng-template",2),o.Gc(4,R,10,0,"ng-template",3),o.Pb(),o.Rb(5,"ngb-panel"),o.Gc(6,O,2,0,"ng-template",2),o.Gc(7,C,23,3,"ng-template",3),o.Pb(),o.Rb(8,"ngb-panel"),o.Gc(9,_,2,0,"ng-template",2),o.Gc(10,x,5,0,"ng-template",3),o.Pb(),o.Pb(),o.Pb()),2&e&&(o.xb(1),o.nc("closeOthers",!0))},directives:[s.a,s.l,s.n,s.m],styles:["#acc-container[_ngcontent-%COMP%]{display:block;margin:auto;padding:initial}#acc-container[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%]{color:#000!important}"]}),G),N=function(){return["/","faq"]},L=[{path:"",component:(S=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.accHeading="What would you like to know about?"}}]),e}(),S.\u0275fac=function(e){return new(e||S)},S.\u0275cmp=o.Fb({type:S,selectors:[["home"]],decls:21,vars:5,consts:[["id","carousel-container",1,"text-center","bg-pkmn"],[1,"m-0","p-0","bg-white"],[1,"w-100","bg-light"],[1,"pt-4","pb-4","bg-danger","text-light"],[1,"text-center","mb-4","ml-3","mr-3","display-5"],[1,"pt-1","bg-success","text-light"],["id","more-info-container",1,"pt-4","pb-3","text-center"],[1,"white-link",3,"routerLink"],["fragment","browser-compatibility",1,"white-link",3,"routerLink"]],template:function(e,t){1&e&&(o.Ob(0),o.Rb(1,"div",0),o.Mb(2,"home-splash-carousel"),o.Pb(),o.Mb(3,"hr",1),o.Rb(4,"div",2),o.Mb(5,"home-showcase-jumbotron"),o.Mb(6,"hr",1),o.Rb(7,"div",3),o.Rb(8,"h3",4),o.Ic(9),o.Pb(),o.Mb(10,"home-info-accordion"),o.Pb(),o.Mb(11,"hr",1),o.Rb(12,"div",5),o.Rb(13,"p",6),o.Ic(14," Visit the "),o.Rb(15,"a",7),o.Ic(16,"FAQ"),o.Pb(),o.Ic(17," page for more details about this website, including "),o.Rb(18,"a",8),o.Ic(19,"browser compatibility"),o.Pb(),o.Ic(20,". "),o.Pb(),o.Pb(),o.Pb(),o.Nb()),2&e&&(o.xb(9),o.Kc(" ",t.accHeading," "),o.xb(6),o.nc("routerLink",o.rc(3,N)),o.xb(3),o.nc("routerLink",o.rc(4,N)))},directives:[p,y,F,m.g],styles:[".bg-pkmn[_ngcontent-%COMP%]{background:url(/assets/images/carousel_bg.png) #424242}#carousel-container[_ngcontent-%COMP%]{height:calc(100vh - (56px + 2rem))}#more-info-container[_ngcontent-%COMP%]{margin:0 1rem}.white-link[_ngcontent-%COMP%]{color:#fff;font-weight:700}"]}),S),canActivate:[n("Dat7").a]}],T=((A=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:A}),A.\u0275inj=o.Ib({factory:function(e){return new(e||A)},imports:[[m.h.forChild(L)],m.h]}),A),j=n("FUS3"),D=n("iTUp");n.d(t,"HomeModule",(function(){return W}));var H,W=((H=function e(){_classCallCheck(this,e)}).\u0275mod=o.Jb({type:H}),H.\u0275inj=o.Ib({factory:function(e){return new(e||H)},imports:[[r.c,T,s.g,j.a,D.a]]}),H)}}]);