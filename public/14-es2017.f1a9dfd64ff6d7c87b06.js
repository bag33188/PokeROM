(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{gnNr:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("tyNb"),r=n("1kSV"),a=n("6NWb"),c=n("wHSu"),s=n("hdQ0"),m=n("fXoL"),g=n("siFw");function l(e,t){if(1&e&&m.Mb(0,"fa-icon",12),2&e){const e=m.gc();m.nc("icon",e.faStar)}}const d=function(e){return["info",e]};let b=(()=>{class e{constructor(){}ngOnInit(){this.faInfo=c.i,this.faStar=c.n}imgAlt(e){return`${e.replace(/[\s:]/g,"-").replace(/\xE9/g,"e").replace(/('|[()])/g,"")}-box-art`}fileSizeData(e){const[t,n]=s.a.convertRomSize(e);return[t,n]}applyClassesForGameImgSize(e){return["pokemon-green-version-jp-box-art","pokemon-lets-go-pikachu-box-art","pokemon-lets-go-eevee-box-art","pokemon-sword-version-box-art","pokemon-shield-version-box-art"].includes(e.toLowerCase())?{"oversized-img":!0,"card-img-top box-art-img":!0}:{"oversized-img":!1,"card-img-top box-art-img":!0}}romanize(e){return s.a.convertIntegerToRomanNumeral(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-rom"]],inputs:{rom:"rom"},decls:32,vars:14,consts:[[1,"rom"],[1,"img-container"],[3,"alt","src","ngClass"],[1,"card-body"],[1,"card-title","text-center","mt-2"],["class","mr-2",3,"icon",4,"ngIf"],[1,"list-group","list-group-flush"],[1,"list-group-item","font-weight-bold","list-grid"],[1,"text-right"],[1,"text-right","generation"],[1,"card-body","card-body-container"],["appBtn","","btnType","primary",3,"routerLink"],[1,"mr-2",3,"icon"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Rb(1,"div",1),m.Mb(2,"img",2),m.hc(3,"lowercase"),m.Pb(),m.Rb(4,"div",3),m.Rb(5,"h5",4),m.Gc(6,l,1,1,"fa-icon",5),m.Ic(7),m.Pb(),m.Rb(8,"ul",6),m.Rb(9,"li",7),m.Rb(10,"span"),m.Ic(11,"File Size"),m.Pb(),m.Rb(12,"span",8),m.Ic(13),m.Pb(),m.Pb(),m.Rb(14,"li",7),m.Rb(15,"span"),m.Ic(16,"File Type"),m.Pb(),m.Rb(17,"span",8),m.Ic(18),m.Pb(),m.Pb(),m.Rb(19,"li",7),m.Rb(20,"span"),m.Ic(21,"Generation"),m.Pb(),m.Rb(22,"span",9),m.Ic(23),m.Pb(),m.Pb(),m.Rb(24,"li",7),m.Rb(25,"span"),m.Ic(26,"Platform"),m.Pb(),m.Rb(27,"span",8),m.Ic(28),m.Pb(),m.Pb(),m.Pb(),m.Rb(29,"div",10),m.Rb(30,"a",11),m.Ic(31,"Information"),m.Pb(),m.Pb(),m.Pb(),m.Pb()),2&e&&(m.xb(2),m.nc("alt",m.ic(3,10,t.imgAlt(t.rom.game_name)))("src",t.rom.box_art_url,m.Ac)("ngClass",t.applyClassesForGameImgSize(t.imgAlt(t.rom.game_name))),m.xb(4),m.nc("ngIf",t.rom.is_favorite),m.xb(1),m.Kc(" ",t.rom.game_name," "),m.xb(6),m.Jc(t.fileSizeData(t.rom.file_size).join("")),m.xb(5),m.Jc(t.rom.file_type),m.xb(5),m.Jc(t.romanize(t.rom.generation)),m.xb(5),m.Jc(t.rom.platform),m.xb(2),m.nc("routerLink",m.sc(12,d,t.rom._id)))},directives:[i.m,i.o,o.g,g.a,a.a],pipes:[i.l],styles:[".list-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.card-body-container[_ngcontent-%COMP%]{margin:0 auto;text-align:center;z-index:20}.box-art-img[_ngcontent-%COMP%], .img-container[_ngcontent-%COMP%]{height:calc(100vw - (70vw - 2.5rem));width:calc(100vw - (70vw - 2.5rem))}.oversized-img[_ngcontent-%COMP%]{-o-object-fit:cover!important;object-fit:cover!important}@media only screen and (max-width:916px){.img-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:20px;text-align:center}.box-art-img[_ngcontent-%COMP%]{height:32vw;width:32vw}}"]}),e})(),p=(()=>{class e{constructor(){}ngOnInit(){this.faGamepad=c.g}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-info-game-specs"]],inputs:{genre:"genre",generation:"generation",region:"region",dateReleased:"dateReleased"},decls:14,vars:8,consts:[[1,"game-list-container"],[1,"list-group"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Rb(1,"ul",1),m.Rb(2,"li",2),m.Mb(3,"fa-icon",3),m.Ic(4,"Game Info "),m.Pb(),m.Rb(5,"li",4),m.Ic(6),m.hc(7,"date"),m.Pb(),m.Rb(8,"li",4),m.Ic(9),m.Pb(),m.Rb(10,"li",4),m.Ic(11),m.Pb(),m.Rb(12,"li",4),m.Ic(13),m.Pb(),m.Pb(),m.Pb()),2&e&&(m.xb(3),m.nc("icon",t.faGamepad),m.xb(3),m.Kc(" Date Released: ",m.jc(7,5,t.dateReleased,"MM/dd/yyyy")," "),m.xb(3),m.Kc("Generation: ",t.generation,""),m.xb(2),m.Kc("Genre: ",t.genre,""),m.xb(2),m.Kc("Region: ",t.region,""))},directives:[a.a],pipes:[i.e],styles:[".game-list-container[_ngcontent-%COMP%]{margin-bottom:.88rem;margin-left:2.5rem;margin-top:0}@media only screen and (max-width:938px){.game-list-container[_ngcontent-%COMP%]{margin:0 0 1.5rem!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),e})(),f=(()=>{class e{constructor(){}static changeUrlToLink(e){const t=/(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gim;if(t.test(e)){const n=e.match(t)[0];return e.replace(n,`<a href="${n}" target="_blank" rel="noreferrer">${n}</a>`)}return e}ngOnInit(){this.finishedLoading&&this.description&&(this.description=e.changeUrlToLink(this.description))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-info-game-description"]],inputs:{description:"description",finishedLoading:"finishedLoading"},decls:2,vars:1,consts:[[1,"description-container","bg-white","border","rounded"],[1,"description",3,"innerHTML"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Mb(1,"p",1),m.Pb()),2&e&&(m.xb(1),m.nc("innerHTML",t.description,m.zc))},styles:[".description-container[_ngcontent-%COMP%]{height:100%;margin-bottom:0;overflow-y:auto;padding:1em 20px 20px;text-align:left!important;word-wrap:break-word}@media only screen and (max-width:938px){.description-container[_ngcontent-%COMP%]{-webkit-clip-path:inset(0 0 0 0)!important;clip-path:inset(0 0 0 0)!important;height:300px;margin-bottom:1rem;padding-bottom:1em!important}}@media only screen and (min-width:938px){.description-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{height:16rem}}"]}),e})(),u=(()=>{class e{constructor(){}ngOnInit(){}imgAlt(e){return`${e.replace(/[\s:]/g,"-").replace(/\xE9/,"e")}-logo`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-info-game-logo"]],inputs:{logoUrl:"logoUrl",gameName:"gameName"},decls:3,vars:4,consts:[[1,"text-center","mb-3"],[1,"logo","rounded","img-thumbnail",3,"src","alt"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Mb(1,"img",1),m.hc(2,"lowercase"),m.Pb()),2&e&&(m.xb(1),m.nc("src",t.logoUrl,m.Ac)("alt",m.ic(2,2,t.imgAlt(t.gameName))))},pipes:[i.l],styles:[".logo[_ngcontent-%COMP%]{background-color:#fff;height:159px;width:212px}@media only screen and (max-width:938px)and (min-width:489px){.logo[_ngcontent-%COMP%]{height:132px;width:176px}}@media only screen and (max-width:488px)and (min-width:332px){.logo[_ngcontent-%COMP%]{height:100px;width:133.33px}}@media only screen and (max-width:331px){.logo[_ngcontent-%COMP%]{height:81px;width:108px}}"]}),e})();function h(e,t){if(1&e&&(m.Rb(0,"span",4),m.Ic(1),m.Pb()),2&e){const e=m.gc(),t=m.wc(5),n=m.wc(7);m.nc("ngbPopover",t)("popoverTitle",n),m.xb(1),m.Kc(" ",e.gameName," ")}}function P(e,t){if(1&e&&m.Ic(0),2&e){const e=m.gc();m.Jc(e.gameName)}}function x(e,t){if(1&e&&(m.Ic(0,"This ROM ("),m.Rb(1,"span",5),m.Ic(2),m.Pb(),m.Ic(3,") is not part of the core series of Pok"),m.Mb(4,"span",6),m.Ic(5,"mon games, it is a "),m.Rb(6,"span",7),m.Ic(7,"ROM hack"),m.Pb(),m.Ic(8,".")),2&e){const e=m.gc();m.xb(2),m.Jc(e.removeRomHackText(e.gameName))}}function w(e,t){1&e&&(m.Rb(0,"span",8),m.Ic(1,"Quick Notice!"),m.Pb())}let v=(()=>{class e{constructor(){}ngOnInit(){this.romHackTxtIdentifier=/(?:(\s?)(\(ROM Hack\)))/i,this.finishedLoading&&(this.isRomHack="hack"===this.romType)}removeRomHackText(e){return e.replace(this.romHackTxtIdentifier,"")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-info-rom-hack-popup"]],inputs:{romType:"romType",gameName:"gameName",finishedLoading:"finishedLoading"},decls:8,vars:2,consts:[["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle",4,"ngIf","ngIfElse"],["notRomHack",""],["popContent",""],["popTitle",""],["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle"],[1,"underline"],["id","eacute"],[1,"font-italic"],[1,"font-weight-bold"]],template:function(e,t){if(1&e&&(m.Ob(0),m.Gc(1,h,2,3,"span",0),m.Gc(2,P,1,1,"ng-template",null,1,m.Hc),m.Gc(4,x,9,1,"ng-template",null,2,m.Hc),m.Gc(6,w,2,0,"ng-template",null,3,m.Hc),m.Nb()),2&e){const e=m.wc(3);m.xb(1),m.nc("ngIf",t.isRomHack)("ngIfElse",e)}},directives:[i.o,r.o],styles:['#eacute[_ngcontent-%COMP%]::before{content:"\xe9"}']}),e})(),y=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-info-game-name"]],inputs:{gameName:"gameName",romType:"romType",finishedLoading:"finishedLoading"},decls:3,vars:3,consts:[[1,"mt-4"],[1,"game-name","mb-4"],[3,"finishedLoading","gameName","romType"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Rb(1,"h2",1),m.Mb(2,"roms-info-rom-hack-popup",2),m.Pb(),m.Pb()),2&e&&(m.xb(2),m.nc("finishedLoading",t.finishedLoading)("gameName",t.gameName)("romType",t.romType))},directives:[v],styles:["@media only screen and (max-width:938px){.game-name[_ngcontent-%COMP%]{margin-left:0;text-align:center}}"]}),e})(),M=(()=>{class e{constructor(){}ngOnInit(){this.faCompactDisc=c.c}fileSizeData(e){const[t,n]=s.a.convertRomSize(e);return[t,n]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-info-rom-specs"]],inputs:{fileType:"fileType",fileSize:"fileSize",fileName:"fileName",platform:"platform"},decls:13,vars:5,consts:[[1,"rom-list-container"],[1,"list-group"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Rb(1,"ul",1),m.Rb(2,"li",2),m.Mb(3,"fa-icon",3),m.Ic(4,"ROM Info "),m.Pb(),m.Rb(5,"li",4),m.Ic(6),m.Pb(),m.Rb(7,"li",4),m.Ic(8),m.Pb(),m.Rb(9,"li",4),m.Ic(10),m.Pb(),m.Rb(11,"li",4),m.Ic(12),m.Pb(),m.Pb(),m.Pb()),2&e&&(m.xb(3),m.nc("icon",t.faCompactDisc),m.xb(3),m.Kc("File Name: ",t.fileName,""),m.xb(2),m.Kc(" File Size: ",t.fileSizeData(t.fileSize).join("")," "),m.xb(2),m.Kc("File Type: ",t.fileType,""),m.xb(2),m.Kc("Platform: ",t.platform,""))},directives:[a.a],styles:[".rom-list-container[_ngcontent-%COMP%]{margin-bottom:0;margin-left:2.5rem;margin-top:.88rem}@media only screen and (max-width:938px){.rom-list-container[_ngcontent-%COMP%]{margin:.75rem 0 0!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),e})();var O=n("FpAq");function R(e,t){1&e&&(m.Rb(0,"div",4),m.Rb(1,"span"),m.Ic(2,"You cannot download this ROM since you are not on a computer"),m.Pb(),m.Pb())}let _=(()=>{class e{constructor(){}disableBtnIfMobileOrTablet(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)||/Android/i.test(navigator.userAgent)?(this.btnDisabled=!0,!0):(this.btnDisabled=!1,!1)}ngOnInit(){this.faDownload=c.d,this.disableBtnIfMobileOrTablet()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-info-rom-download"]],hostBindings:function(e,t,n){1&e&&m.dc("resize",(function(e){return t.disableBtnIfMobileOrTablet()}),!1,m.xc)},inputs:{downloadLink:"downloadLink"},decls:5,vars:4,consts:[[1,"download-link-wrapper","text-center"],["rel","noreferrer","target","_blank","appBtn","","btnType","success",3,"href"],[1,"mr-2",3,"icon"],["class","p-0 mt-2 no-download-msg","appAlert","","alertType","info",4,"ngIf"],["appAlert","","alertType","info",1,"p-0","mt-2","no-download-msg"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Rb(1,"a",1),m.Mb(2,"fa-icon",2),m.Ic(3,"Download"),m.Pb(),m.Gc(4,R,3,0,"div",3),m.Pb()),2&e&&(m.xb(1),m.Db("disabled",t.btnDisabled),m.nc("href",t.downloadLink,m.Ac),m.xb(1),m.nc("icon",t.faDownload),m.xb(2),m.nc("ngIf",t.disableBtnIfMobileOrTablet()))},directives:[g.a,a.a,i.o,O.a],styles:[".download-link-wrapper[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width:938px){.download-link-wrapper[_ngcontent-%COMP%]{margin-top:.95rem}.no-download-msg[_ngcontent-%COMP%]{margin-bottom:0}}@media only screen and (min-width:938px){.no-download-msg[_ngcontent-%COMP%]{margin-bottom:3rem}}"]}),e})();var k=n("FUS3"),C=n("t52u"),I=n("WjtB"),S=n("Mb37"),L=n("DRYZ");let F=(()=>{class e{constructor(e){this.router=e,this.currentUrl=this.router.url,e.events.subscribe(e=>{e instanceof o.b&&(this.previousUrl=this.currentUrl,this.currentUrl=e.url)})}getPreviousUrl(){return this.previousUrl}}return e.\u0275fac=function(t){return new(t||e)(m.Zb(o.d))},e.\u0275prov=m.Hb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=n("NvMS");function z(e,t){1&e&&m.Ic(0,"Prev")}function N(e,t){1&e&&m.Gc(0,z,1,0,"ng-template",3)}function D(e,t){1&e&&m.Ic(0,"Next")}function G(e,t){1&e&&m.Gc(0,D,1,0,"ng-template",4)}let A=(()=>{class e{constructor(){this.paginate=new m.m}setWidth(){this.pageWidth=window.innerWidth}ngOnInit(){this.pageWidth=window.innerWidth}onPageChange(e){this.pageSize=this.itemsPerPage*(e-1),this.paginate.emit([this.pageSize,this.currentPage])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-pagination"]],hostBindings:function(e,t,n){1&e&&m.dc("resize",(function(e){return t.setWidth()}),!1,m.xc)},inputs:{romsData:"romsData",currentPage:"currentPage",pageSize:"pageSize",itemsPerPage:"itemsPerPage"},outputs:{paginate:"paginate"},decls:4,vars:8,consts:[["id","roms-pagination-container",1,"pt-4","pb-2"],["aria-label","ROMs pagination","size","-",3,"directionLinks","collectionSize","pageSize","page","disabled","boundaryLinks","pageChange"],[4,"ngIf"],["ngbPaginationPrevious",""],["ngbPaginationNext",""]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Rb(1,"ngb-pagination",1),m.dc("pageChange",(function(e){return t.currentPage=e}))("pageChange",(function(e){return t.onPageChange(t.currentPage)})),m.Gc(2,N,1,0,void 0,2),m.Gc(3,G,1,0,void 0,2),m.Pb(),m.Pb()),2&e&&(m.xb(1),m.nc("directionLinks",t.pageWidth>600&&t.romsData.length>0)("collectionSize",t.romsData.length)("pageSize",t.itemsPerPage)("page",t.currentPage)("disabled",0===t.romsData.length)("boundaryLinks",!1),m.xb(1),m.nc("ngIf",t.pageWidth>600),m.xb(1),m.nc("ngIf",t.pageWidth>600))},directives:[r.i,i.o,r.k,r.j],styles:["#roms-pagination-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}"]}),e})();function j(e,t){if(1&e&&(m.Rb(0,"h2",14),m.Ic(1),m.Pb()),2&e){const e=m.gc(2);m.xb(1),m.Kc(" ",e.noRomsMsg," ")}}function E(e,t){1&e&&(m.Rb(0,"div",15),m.Ic(1," Oops, there was an error while trying to load your ROMs. Please try again later. "),m.Pb())}function H(e,t){1&e&&m.Mb(0,"roms-rom",18),2&e&&m.nc("rom",t.$implicit)}function U(e,t){if(1&e&&(m.Rb(0,"div",16),m.Gc(1,H,1,1,"roms-rom",17),m.hc(2,"slice"),m.hc(3,"slice"),m.Pb()),2&e){const e=m.gc(2);m.xb(1),m.nc("ngForOf",m.kc(2,1,m.jc(3,5,e.romsData,e.pageSize),0,e.itemsPerPage))}}function K(e,t){if(1&e){const e=m.Sb();m.Ob(0),m.Rb(1,"div",2),m.Rb(2,"div",3),m.Rb(3,"div",4),m.Mb(4,"div",5),m.Rb(5,"h1",6),m.Ic(6,"ROMs"),m.Pb(),m.Rb(7,"div",7),m.Rb(8,"button",8),m.dc("click",(function(t){m.yc(e);const n=m.gc();return n.getRoms(!n.favoritesShown),n.onPageChange([0,1])})),m.Ic(9),m.Pb(),m.Pb(),m.Pb(),m.Mb(10,"hr",9),m.Pb(),m.Ob(11),m.Gc(12,j,2,1,"h2",10),m.Gc(13,E,2,0,"div",11),m.Nb(),m.Gc(14,U,4,8,"div",12),m.Rb(15,"roms-pagination",13),m.dc("paginate",(function(t){return m.yc(e),m.gc().onPageChange(t)})),m.Pb(),m.Pb(),m.Nb()}if(2&e){const e=m.gc();m.xb(4),m.Fc("flex-basis",e.favoritesShown?88.23:131.8,"px"),m.xb(3),m.Fc("flex-basis",e.favoritesShown?89:132,"px"),m.xb(1),m.nc("disabled",e.isError||e.romsData.length<1&&!e.favoritesShown),m.xb(1),m.Kc(" ",e.favoritesShown?"Show All":"Filter Favorites"," "),m.xb(3),m.nc("ngIf",e.romsData.length<1&&!e.isError),m.xb(1),m.nc("ngIf",e.isError),m.xb(1),m.nc("ngIf",e.romsData.length>0),m.xb(1),m.nc("romsData",e.romsData)("currentPage",e.currentPage)("itemsPerPage",e.itemsPerPage)}}let B=(()=>{class e{constructor(e,t,n,i){this.router=e,this.romsService=t,this.viewportScroller=n,this.routerExtService=i}static setPaginationState(e){L.a.getState("paginationState")||e||L.a.setState("paginationState",[0,1,!1]),null!=e&&L.a.setState("paginationState",e)}static getPaginationState(){return L.a.getState("paginationState")}ngOnInit(){this.currentPage=1,this.itemsPerPage=4,this.loading=!0,this.noRomsMsg="",this.limit=35,this.isError=!1,this.romsData=new Array,(!this.routerExtService.getPreviousUrl().includes("/info")&&"/roms"===this.router.url||"complete"!==document.readyState)&&(this.onPageChange([0,1]),e.setPaginationState([0,1,!1])),e.setPaginationState();const t=e.getPaginationState()[2];this.getRoms(t),this.favoritesShown=t||!1}ngOnDestroy(){this.romsSub.unsubscribe()}getRoms(t){null!=t&&(this.favoritesShown=!e.getPaginationState()[2],this.romsData=[],this.loading=!0),this.romsObs$=this.romsService.getAllRoms({favorites:t}),this.romsSub=this.romsObs$.subscribe(e=>{this.isError=!1,this.romsData=e,this.loading=!1,!this.loading&&this.romsData.length<1&&(this.noRomsMsg=this.favoritesShown?"No Favorite ROMs Found":"No ROMs to Show")},e=>{this.isError=!0,this.loading=!1,this.noRomsMsg="",S.a.error(e)},()=>{this.pageSize=e.getPaginationState()[0],this.currentPage=e.getPaginationState()[1]})}onPageChange(t){this.pageSize=t[0],this.currentPage=t[1],e.setPaginationState([this.pageSize,this.currentPage,this.favoritesShown]),this.viewportScroller.scrollToPosition([0,0])}}return e.\u0275fac=function(t){return new(t||e)(m.Lb(o.d),m.Lb(C.a),m.Lb(i.x),m.Lb(F))},e.\u0275cmp=m.Fb({type:e,selectors:[["roms"]],decls:3,vars:2,consts:[[3,"loading"],[4,"ngIf"],[1,"roms-flex-container"],[1,"mt-2","mb-0","roms-heading-container"],[1,"d-flex","justify-content-between","mt-2"],[1,"dummy-container"],["id","roms-heading"],[1,"favorites-btn-container"],["type","button","appBtn","","btnType","primary","id","favorites-btn",3,"disabled","click"],[1,"mt-0"],["class","text-center","id","no-roms-heading",4,"ngIf"],["class","mr-5 ml-5 text-center","appAlert","","alertType","danger","id","roms-err",4,"ngIf"],["class","roms-grid-container",4,"ngIf"],[3,"romsData","currentPage","itemsPerPage","paginate"],["id","no-roms-heading",1,"text-center"],["appAlert","","alertType","danger","id","roms-err",1,"mr-5","ml-5","text-center"],[1,"roms-grid-container"],["class","card card-container border rounded",3,"rom",4,"ngFor","ngForOf"],[1,"card","card-container","border","rounded",3,"rom"]],template:function(e,t){1&e&&(m.Ob(0),m.Mb(1,"spinners-gif-spinner",0),m.Gc(2,K,16,10,"ng-container",1),m.Nb()),2&e&&(m.xb(1),m.nc("loading",t.loading),m.xb(1),m.nc("ngIf",!t.loading))},directives:[T.a,i.o,g.a,A,O.a,i.n,b],pipes:[i.v],styles:['.roms-grid-container[_ngcontent-%COMP%]{display:grid;grid-gap:4.2rem;grid-template-areas:"rom-1 rom-2" "rom-3 rom-4";grid-template-columns:repeat(2,1fr);grid-template-rows:1fr minmax(-webkit-min-content,auto);grid-template-rows:1fr minmax(min-content,auto);padding-bottom:.6rem;width:70vw}@media only screen and (max-width:916px){.roms-grid-container[_ngcontent-%COMP%]{grid-row-gap:1.4rem;grid-template-areas:"rom-1" "rom-2" "rom-3" "rom-4";grid-template-columns:1fr;grid-template-rows:1fr fit-content(18.75em) fit-content(18.75em) fit-content(18.75em);margin:0 auto;width:90vw}}.roms-flex-container[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-items:center}.roms-heading-container[_ngcontent-%COMP%]{width:70vw}.roms-heading-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:left}.dummy-container[_ngcontent-%COMP%]{display:none}.favorites-btn-container[_ngcontent-%COMP%]{margin-top:.25rem}@media only screen and (max-width:916px){.roms-heading-container[_ngcontent-%COMP%]{width:90vw}.dummy-container[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{text-align:center}}@media only screen and (max-width:418px){#favorites-btn[_ngcontent-%COMP%]{font-size:65%}.favorites-btn-container[_ngcontent-%COMP%]{margin-top:0;text-align:right}#roms-heading[_ngcontent-%COMP%]{font-size:1.8rem}}#no-roms-heading[_ngcontent-%COMP%], #roms-err[_ngcontent-%COMP%]{margin-top:2rem}@media only screen and (min-width:916px){.card[_ngcontent-%COMP%], .rom[_ngcontent-%COMP%]{width:calc((100vw - (70vw - 2.5rem)) + 2px)}}']}),e})();var J=n("UTcu"),W=n("Dat7");class ${}var Y=n("lGQG");let Z=(()=>{class e{constructor(e){this.romsService=e}ngOnInit(){this.faStar=c.n}patchFavoriteRom(){const e={is_favorite:!this.isFavorite};this.isFavorite=e.is_favorite,this.romsService.patchRom(this.id,e).subscribe(e=>{this.isFavorite!==e.is_favorite&&(this.isFavorite=e.is_favorite)},e=>S.a.error(e))}}return e.\u0275fac=function(t){return new(t||e)(m.Lb(C.a))},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-info-mark-favorite"]],inputs:{isFavorite:"isFavorite",id:"id"},decls:5,vars:3,consts:[[1,"mark-favorite-container","d-flex","flex-row","bg-light","border","rounded"],["for","is-favorite",1,"mb-0","mt-1"],[1,"mr-2","ml-2",3,"icon"],["type","checkbox","id","is-favorite","name","is-favorite",1,"is-favorite","ml-5",3,"checked","change"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Rb(1,"label",1),m.Mb(2,"fa-icon",2),m.Ic(3),m.Pb(),m.Rb(4,"input",3),m.dc("change",(function(e){return t.patchFavoriteRom()})),m.Pb(),m.Pb()),2&e&&(m.xb(2),m.nc("icon",t.faStar),m.xb(1),m.Kc(" ",t.isFavorite?"Unmark":"Mark"," as Favorite "),m.xb(1),m.nc("checked",t.isFavorite))},directives:[a.a],styles:[".is-favorite[_ngcontent-%COMP%]{cursor:pointer!important;height:2rem!important;width:2rem!important}.mark-favorite-container[_ngcontent-%COMP%]{-webkit-box-pack:justify;justify-content:space-between;padding:.15rem}@media only screen and (max-width:938px){.mark-favorite-container[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;padding:.5rem}}"]}),e})();function Q(e,t){1&e&&(m.Ob(0),m.Ic(1," You're not logged in and thus cannot access this ROM. "),m.Nb())}function q(e,t){1&e&&(m.Ob(0),m.Ic(1," You cannot access this user's ROM. "),m.Nb())}function X(e,t){1&e&&(m.Ob(0),m.Ic(1," Sorry, it looks like this ROM doesn't exist. "),m.Nb())}function V(e,t){1&e&&(m.Ob(0),m.Ic(1," Oops, there was an error while trying to load your ROM information. Please try again later. "),m.Nb())}function ee(e,t){if(1&e&&(m.Rb(0,"div",12),m.Rb(1,"div",13),m.Ob(2,14),m.Gc(3,Q,2,0,"ng-container",15),m.Gc(4,q,2,0,"ng-container",15),m.Gc(5,X,2,0,"ng-container",15),m.Gc(6,V,2,0,"ng-container",16),m.Nb(),m.Pb(),m.Pb()),2&e){const e=m.gc(2);m.xb(2),m.nc("ngSwitch",e.errStatusCode),m.xb(1),m.nc("ngSwitchCase",401),m.xb(1),m.nc("ngSwitchCase",403),m.xb(1),m.nc("ngSwitchCase",404)}}function te(e,t){if(1&e&&(m.Mb(0,"roms-info-game-name",17),m.Mb(1,"roms-info-game-logo",18),m.Rb(2,"div",19),m.Rb(3,"h4"),m.Mb(4,"fa-icon",20),m.Ic(5),m.Rb(6,"span",21),m.Ic(7,"Description"),m.Pb(),m.Pb(),m.Pb(),m.Mb(8,"roms-info-game-description",22),m.Mb(9,"roms-info-rom-download",23),m.Mb(10,"roms-info-mark-favorite",24),m.Mb(11,"roms-info-game-specs",25),m.Mb(12,"roms-info-rom-specs",26)),2&e){const e=m.gc(2);m.nc("finishedLoading",e.finishedLoading)("gameName",e.rom.game_name)("romType",e.rom.rom_type),m.xb(1),m.nc("logoUrl",e.rom.logo_url)("gameName",e.rom.game_name),m.xb(3),m.nc("icon",e.faFileAlt),m.xb(1),m.Jc(e.isRomHack(e.rom.rom_type)?"":"Pokemon.com "),m.xb(3),m.nc("description",e.rom.description)("finishedLoading",e.finishedLoading),m.xb(1),m.nc("downloadLink",e.rom.download_link),m.xb(1),m.nc("isFavorite",e.rom.is_favorite)("id",e.rom._id),m.xb(1),m.nc("region",e.rom.region)("dateReleased",e.rom.date_released)("genre",e.rom.genre)("generation",e.rom.generation),m.xb(1),m.nc("platform",e.rom.platform)("fileName",e.rom.file_name)("fileSize",e.rom.file_size)("fileType",e.rom.file_type)}}const ne=function(){return["/","roms"]};function ie(e,t){if(1&e&&(m.Ob(0),m.Rb(1,"div",3),m.Rb(2,"div",4),m.Rb(3,"div",5),m.Rb(4,"button",6),m.Mb(5,"fa-icon",7),m.Pb(),m.Pb(),m.Rb(6,"div",8),m.Rb(7,"h1"),m.Ic(8,"ROM Info"),m.Pb(),m.Pb(),m.Mb(9,"div",9),m.Pb(),m.Gc(10,ee,7,4,"div",10),m.Gc(11,te,13,20,"ng-template",null,11,m.Hc),m.Pb(),m.Nb()),2&e){const e=m.wc(12),t=m.gc();m.xb(4),m.nc("routerLink",m.rc(4,ne)),m.xb(1),m.nc("icon",t.faLongArrowAltLeft),m.xb(5),m.nc("ngIf",t.isError)("ngIfElse",e)}}const oe=[{path:"",component:B,canActivate:[J.a,W.a]},{path:"info/:id",component:(()=>{class e{constructor(e,t,n,i){this.romService=e,this.authService=t,this.router=n,this.route=i}ngOnInit(){this.finishedLoading=!1,this.loading=!0,this.faFileAlt=c.f,this.faLongArrowAltLeft=c.l,this.id=this.route.snapshot.paramMap.get("id"),this.isError=!1,this.rom=new $,this.getRom(this.id)}ngOnDestroy(){this.romInfoSub.unsubscribe()}getRom(e){this.romInfoObs$=this.romService.getRom(e),this.romInfoSub=this.romInfoObs$.subscribe(e=>{e.genre||(e.genre="N/A"),this.rom=e,this.loading=!1,this.isError=!1},e=>{if(this.loading=!1,this.isError=!0,void 0!==e.status)switch(e.status){case 404:this.errStatusCode=404;break;case 401:this.errStatusCode=401;break;case 403:this.errStatusCode=403;break;default:this.errStatusCode=500}S.a.error(e)},()=>this.finishedLoading=!0)}isRomHack(e){return"hack"===e}}return e.\u0275fac=function(t){return new(t||e)(m.Lb(C.a),m.Lb(Y.a),m.Lb(o.d),m.Lb(o.a))},e.\u0275cmp=m.Fb({type:e,selectors:[["roms-rom-info"]],decls:3,vars:2,consts:[[1,"p-2"],[3,"loading"],[4,"ngIf"],[1,"rom-info-container"],[1,"rom-info-header-container"],[1,"back-btn-container"],["type","button","aria-label","back","appBtn","","btnType","primary",3,"routerLink"],[3,"icon"],[1,"title-container"],[1,"dummy-container"],["class","rom-info-err-wrapper pt-3",4,"ngIf","ngIfElse"],["romInfo",""],[1,"rom-info-err-wrapper","pt-3"],["appAlert","","alertType","danger",1,"ml-4","mr-4","text-center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"game-title",3,"finishedLoading","gameName","romType"],[1,"game-logo",3,"logoUrl","gameName"],[1,"game-description-title"],[1,"description-icon","mr-3","ml-1",3,"icon"],[1,"mr-1"],[1,"game-description",3,"description","finishedLoading"],[1,"rom-download",3,"downloadLink"],[1,"mark-favorite",3,"isFavorite","id"],[1,"game-specs",3,"region","dateReleased","genre","generation"],[1,"rom-specs",3,"platform","fileName","fileSize","fileType"]],template:function(e,t){1&e&&(m.Rb(0,"div",0),m.Mb(1,"spinners-gif-spinner",1),m.Gc(2,ie,13,5,"ng-container",2),m.Pb()),2&e&&(m.xb(1),m.nc("loading",t.loading),m.xb(1),m.nc("ngIf",!t.loading))},directives:[T.a,i.o,g.a,o.e,a.a,O.a,i.p,i.q,i.r,y,u,f,_,Z,p,M],styles:['.rom-info-container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"rom-info-header rom-info-header" "game-title ." "game-logo ." "game-description-title ." "game-description game-specs" "game-description rom-specs" "rom-download mark-favorite";grid-template-columns:2fr 1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(11.75em) fit-content(188px) 3.6rem;margin-left:30px;margin-right:30px}.game-title[_ngcontent-%COMP%]{align-self:start;grid-area:game-title;grid-column:1/-1;grid-row:2/3;justify-self:start}.game-logo[_ngcontent-%COMP%]{grid-area:game-logo;grid-column:1/2;grid-row:3/4}.game-description-title[_ngcontent-%COMP%]{grid-area:game-description-title;grid-column:1/2;grid-row:4/5;margin-top:1rem}.game-description[_ngcontent-%COMP%]{grid-area:game-description;grid-column:1/2;grid-row:5/7}.rom-download[_ngcontent-%COMP%]{grid-area:rom-download;grid-column:1/2;grid-row:7/-1;margin-bottom:1rem;margin-top:1rem}.mark-favorite[_ngcontent-%COMP%]{grid-area:mark-favorite;grid-column:2/3;grid-row:7/-1;justify-self:end;margin-bottom:1rem;margin-top:1rem;width:calc(100% - (282.667px - 242.667px))}.game-specs[_ngcontent-%COMP%]{align-self:start;grid-area:game-specs;grid-column:2/3;grid-row:5/6}.rom-specs[_ngcontent-%COMP%]{align-self:end;grid-area:rom-specs;grid-column:2/3;grid-row:6/7}.rom-info-header-container[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;grid-area:rom-info-header;grid-column:1/3;grid-row:1/2}.back-btn-container[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 0 auto;-webkit-box-ordinal-group:2;order:1}.title-container[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 0 auto;justify-self:center;-webkit-box-ordinal-group:3;order:2}.title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.dummy-container[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 0 auto;flex-basis:40px;-webkit-box-ordinal-group:4;order:3}.rom-info-err-wrapper[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:2/3;margin:0 auto!important}@media only screen and (max-width:388px){.description-icon[_ngcontent-%COMP%]{display:none!important}}@media only screen and (max-width:938px){.rom-info-container[_ngcontent-%COMP%]{grid-template-areas:"rom-info-header" "game-title" "game-logo" "game-description-title" "game-description" "game-specs" "rom-specs" "rom-download";grid-template-columns:1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(19.25em) 15.5rem fit-content(17.5rem) fit-content(5.5rem) fit-content(5.5rem);margin:0 auto}.game-title[_ngcontent-%COMP%]{align-self:center;justify-self:center}.game-logo[_ngcontent-%COMP%]{text-align:center}.game-description-title[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:4/5;text-align:center}.game-description[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:5/6;text-align:center}.mark-favorite[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:8/9;justify-self:center;margin-bottom:0;width:100%}.rom-download[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:9/-1;margin-bottom:0;margin-top:0}.game-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:6/7;margin-top:0}.rom-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:7/8}.rom-info-header-container[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:start;margin-top:.8rem}}']}),e})(),canActivate:[J.a,W.a]}];let re=(()=>{class e{}return e.\u0275mod=m.Jb({type:e}),e.\u0275inj=m.Ib({factory:function(t){return new(t||e)},imports:[[o.h.forChild(oe)],o.h]}),e})();n.d(t,"RomsModule",(function(){return ae}));let ae=(()=>{class e{}return e.\u0275mod=m.Jb({type:e}),e.\u0275inj=m.Ib({factory:function(t){return new(t||e)},providers:[C.a,Y.a],imports:[[i.c,o.h,r.g,a.b,k.a,I.a,re]]}),e})()}}]);