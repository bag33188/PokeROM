(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{gnNr:function(e,t,n){"use strict";n.r(t),n.d(t,"RomsModule",(function(){return ae}));var o=n("ofXK"),i=n("tyNb"),r=n("1kSV"),a=n("6NWb"),s=n("FUS3"),c=n("t52u"),g=n("WjtB"),m=n("Mb37"),d=n("DRYZ"),l=n("fXoL");let p=(()=>{class e{constructor(e){this.router=e,this.currentUrl=this.router.url,e.events.subscribe(e=>{e instanceof i.b&&(this.previousUrl=this.currentUrl,this.currentUrl=e.url)})}getPreviousUrl(){return this.previousUrl}}return e.\u0275fac=function(t){return new(t||e)(l.Zb(i.d))},e.\u0275prov=l.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var b=n("wHSu"),f=n("twK/"),h=n("NvMS"),u=n("siFw");function v(e,t){1&e&&l.Ic(0,"Prev")}function w(e,t){1&e&&l.Gc(0,v,1,0,"ng-template",3)}function P(e,t){1&e&&l.Ic(0,"Next")}function y(e,t){1&e&&l.Gc(0,P,1,0,"ng-template",4)}let O=(()=>{class e{constructor(){this.paginate=new l.n}setWidth(){this.pageWidth=window.innerWidth}ngOnInit(){this.pageWidth=window.innerWidth}onPageChange(e){this.pageSize=this.itemsPerPage*(e-1),this.paginate.emit([this.pageSize,this.currentPage])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-pagination"]],hostBindings:function(e,t){1&e&&l.dc("resize",(function(){return t.setWidth()}),!1,l.yc)},inputs:{romsData:"romsData",currentPage:"currentPage",pageSize:"pageSize",itemsPerPage:"itemsPerPage"},outputs:{paginate:"paginate"},decls:4,vars:8,consts:[["id","roms-pagination-container",1,"pt-4","pb-2"],["aria-label","ROMs pagination",3,"directionLinks","collectionSize","pageSize","page","disabled","boundaryLinks","pageChange"],[4,"ngIf"],["ngbPaginationPrevious",""],["ngbPaginationNext",""]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"ngb-pagination",1),l.dc("pageChange",(function(e){return t.currentPage=e}))("pageChange",(function(){return t.onPageChange(t.currentPage)})),l.Gc(2,w,1,0,void 0,2),l.Gc(3,y,1,0,void 0,2),l.Qb(),l.Qb()),2&e&&(l.zb(1),l.oc("directionLinks",t.pageWidth>600&&t.romsData.length>0)("collectionSize",t.romsData.length)("pageSize",t.itemsPerPage)("page",t.currentPage)("disabled",0===t.romsData.length)("boundaryLinks",!1),l.zb(1),l.oc("ngIf",t.pageWidth>600),l.zb(1),l.oc("ngIf",t.pageWidth>600))},directives:[r.i,o.o,r.k,r.j],styles:["#roms-pagination-container[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),e})();var R=n("FpAq");class x{}var M=n("hdQ0");function _(e,t){if(1&e&&l.Nb(0,"fa-icon",13),2&e){const e=l.gc();l.oc("icon",e.faStar)}}const C=function(e){return["info",e]};let z=(()=>{class e{constructor(){}ngOnInit(){this.faStar=b.m}imgAlt(e){return e.replace(/[\s:]/g,"-").replace(/\xE9/g,"e").replace(/('|[()])/g,"")+"-box-art"}fileSizeData(e){const[t,n]=M.a.convertRomSize(e);return[t,n]}applyClassesForGameImgSize(e){return{"oversized-img":["pokemon-green-version-jp-box-art","pokemon-lets-go-pikachu-box-art","pokemon-lets-go-eevee-box-art","pokemon-sword-version-box-art","pokemon-shield-version-box-art"].includes(e.toLowerCase()),"card-img-top box-art-img":!0}}romanize(e){return M.a.convertIntegerToRomanNumeral(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-rom"]],inputs:{rom:"rom"},decls:32,vars:14,consts:[[1,"rom","shadow","h-100"],[1,"img-container"],[3,"alt","src","ngClass"],[1,"card-body"],[1,"card-title","text-center","mt-2"],["class","mr-2",3,"icon",4,"ngIf"],[1,"list-group","list-group-flush"],[1,"list-group-item","font-weight-bold","list-grid"],[1,"text-left"],[1,"text-right"],[1,"text-right","generation"],[1,"card-body","card-body-container"],["appBtn","","btnType","primary",3,"routerLink"],[1,"mr-2",3,"icon"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"div",1),l.Nb(2,"img",2),l.hc(3,"lowercase"),l.Qb(),l.Rb(4,"div",3),l.Rb(5,"h5",4),l.Gc(6,_,1,1,"fa-icon",5),l.Ic(7),l.Qb(),l.Rb(8,"ul",6),l.Rb(9,"li",7),l.Rb(10,"span",8),l.Ic(11,"File Size"),l.Qb(),l.Rb(12,"span",9),l.Ic(13),l.Qb(),l.Qb(),l.Rb(14,"li",7),l.Rb(15,"span",8),l.Ic(16,"File Type"),l.Qb(),l.Rb(17,"span",9),l.Ic(18),l.Qb(),l.Qb(),l.Rb(19,"li",7),l.Rb(20,"span",8),l.Ic(21,"Generation"),l.Qb(),l.Rb(22,"span",10),l.Ic(23),l.Qb(),l.Qb(),l.Rb(24,"li",7),l.Rb(25,"span",8),l.Ic(26,"Platform"),l.Qb(),l.Rb(27,"span",9),l.Ic(28),l.Qb(),l.Qb(),l.Qb(),l.Rb(29,"div",11),l.Rb(30,"a",12),l.Ic(31,"Information"),l.Qb(),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.zb(2),l.oc("alt",l.ic(3,10,t.imgAlt(t.rom.game_name)))("src",t.rom.box_art_url,l.Bc)("ngClass",t.applyClassesForGameImgSize(t.imgAlt(t.rom.game_name))),l.zb(4),l.oc("ngIf",t.rom.is_favorite),l.zb(1),l.Kc(" ",t.rom.game_name," "),l.zb(6),l.Jc(t.fileSizeData(t.rom.file_size).join("")),l.zb(5),l.Jc(t.rom.file_type),l.zb(5),l.Jc(t.romanize(t.rom.generation)),l.zb(5),l.Jc(t.rom.platform),l.zb(2),l.oc("routerLink",l.tc(12,C,t.rom._id)))},directives:[o.m,o.o,i.g,u.a,a.a],pipes:[o.l],styles:[".list-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.card-body-container[_ngcontent-%COMP%]{margin:0 auto;text-align:center;z-index:20}.box-art-img[_ngcontent-%COMP%], .img-container[_ngcontent-%COMP%]{height:calc(30vw + 2.1rem);width:100%}.oversized-img[_ngcontent-%COMP%]{-o-object-fit:cover!important;object-fit:cover!important}@media only screen and (max-width:916px){.img-container[_ngcontent-%COMP%]{margin:0 auto;height:100%!important;padding-top:20px;text-align:center}.box-art-img[_ngcontent-%COMP%]{height:30vw;width:30vw}}"]}),e})();function I(e,t){if(1&e&&(l.Rb(0,"h2",17),l.Ic(1),l.Qb()),2&e){const e=l.gc(2);l.zb(1),l.Kc(" ",e.noRomsMsg," ")}}function S(e,t){1&e&&(l.Rb(0,"div",18),l.Ic(1," Oops, there was an error while trying to load your ROMs. Please try again later. "),l.Qb())}function k(e,t){1&e&&l.Nb(0,"roms-rom",21),2&e&&l.oc("rom",t.$implicit)}function Q(e,t){if(1&e&&(l.Rb(0,"div",19),l.Gc(1,k,1,1,"roms-rom",20),l.hc(2,"slice"),l.hc(3,"slice"),l.Qb()),2&e){const e=l.gc(2);l.zb(1),l.oc("ngForOf",l.kc(2,1,l.jc(3,5,e.romsData,e.pageSize),0,e.itemsPerPage))}}function N(e,t){if(1&e){const e=l.Sb();l.Pb(0),l.Rb(1,"div",2),l.Rb(2,"div",3),l.Rb(3,"div",4),l.Nb(4,"div",5),l.Rb(5,"h1",6),l.Ic(6,"ROMs"),l.Qb(),l.Rb(7,"div",7),l.Rb(8,"button",8),l.dc("click",(function(){l.zc(e);const t=l.gc();return t.getRoms(!t.favoritesShown),t.onPageChange([0,1])})),l.Rb(9,"span",9),l.Nb(10,"fa-icon",10),l.Qb(),l.Rb(11,"span",11),l.Ic(12),l.Qb(),l.Qb(),l.Qb(),l.Qb(),l.Nb(13,"hr",12),l.Qb(),l.Pb(14),l.Gc(15,I,2,1,"h2",13),l.Gc(16,S,2,0,"div",14),l.Ob(),l.Gc(17,Q,4,8,"div",15),l.Rb(18,"roms-pagination",16),l.dc("paginate",(function(t){return l.zc(e),l.gc().onPageChange(t)})),l.Qb(),l.Qb(),l.Ob()}if(2&e){const e=l.gc();l.zb(4),l.Fc("flex-basis",e.favoritesShown?88.23:131.8,"px"),l.zb(3),l.Fc("flex-basis",e.favoritesShown?89:132,"px"),l.zb(1),l.oc("disabled",e.isError||e.romsData.length<1&&!e.favoritesShown),l.zb(2),l.oc("icon",e.favoritesShown?e.starSolid:e.starOutline),l.zb(2),l.Jc(e.favoritesShown?"Show All":"Filter Favorites"),l.zb(3),l.oc("ngIf",e.romsData.length<1&&!e.isError),l.zb(1),l.oc("ngIf",e.isError),l.zb(1),l.oc("ngIf",e.romsData.length>0),l.zb(1),l.oc("romsData",e.romsData)("currentPage",e.currentPage)("itemsPerPage",e.itemsPerPage)}}let T=(()=>{class e{constructor(e,t,n,o){this.router=e,this.romsService=t,this.viewportScroller=n,this.routerExtService=o}static setPaginationState(e){d.a.getState("pagination_state")||e||d.a.setState("pagination_state",[0,1,!1]),null!=e&&d.a.setState("pagination_state",e)}static getPaginationState(){return d.a.getState("pagination_state")}ngOnInit(){this.starSolid=b.m,this.starOutline=f.b,this.currentPage=1,this.itemsPerPage=4,this.loading=!0,this.noRomsMsg="",this.limit=35,this.isError=!1,this.romsData=new Array,(!this.routerExtService.getPreviousUrl().includes("/info")&&"/roms"===this.router.url||"complete"!==document.readyState)&&(this.onPageChange([0,1]),e.setPaginationState([0,1,!1])),e.setPaginationState();const t=e.getPaginationState()[2];this.getRoms(t),this.favoritesShown=t||!1}ngOnDestroy(){this.romsSub.unsubscribe()}getRoms(t){null!=t&&(this.favoritesShown=!e.getPaginationState()[2],this.romsData=[],this.loading=!0),this.romsObs$=this.romsService.getAllRoms({favorites:t}),this.romsSub=this.romsObs$.subscribe(e=>{this.isError=!1,this.romsData=e,this.loading=!1,this.romsData.length<1&&(this.noRomsMsg=this.favoritesShown?"No Favorite ROMs Found":"No ROMs to Show")},e=>{this.isError=!0,this.loading=!1,this.noRomsMsg="",m.a.error(e)},()=>{this.pageSize=e.getPaginationState()[0],this.currentPage=e.getPaginationState()[1]})}onPageChange(t){this.pageSize=t[0],this.currentPage=t[1],e.setPaginationState([this.pageSize,this.currentPage,this.favoritesShown]),this.viewportScroller.scrollToPosition([0,0])}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(i.d),l.Mb(c.a),l.Mb(o.x),l.Mb(p))},e.\u0275cmp=l.Gb({type:e,selectors:[["roms"]],decls:3,vars:2,consts:[[3,"loading"],[4,"ngIf"],[1,"roms-flex-container"],[1,"mt-2","mb-0","roms-heading-container","w-100"],[1,"d-flex","justify-content-between","mt-2"],[1,"dummy-container"],["id","roms-heading"],[1,"favorites-btn-container"],["type","button","appBtn","","btnType","primary","id","favorites-btn",3,"disabled","click"],["id","toggle-favs-responsive"],[3,"icon"],["id","toggle-favs"],[1,"mt-0"],["class","text-center","id","no-roms-heading",4,"ngIf"],["class","mr-5 ml-5 text-center","appAlert","","alertType","danger","id","roms-err",4,"ngIf"],["class","roms-grid-container w-100",4,"ngIf"],[3,"romsData","currentPage","itemsPerPage","paginate"],["id","no-roms-heading",1,"text-center"],["appAlert","","alertType","danger","id","roms-err",1,"mr-5","ml-5","text-center"],[1,"roms-grid-container","w-100"],["class","card card-container border rounded",3,"rom",4,"ngFor","ngForOf"],[1,"card","card-container","border","rounded",3,"rom"]],template:function(e,t){1&e&&(l.Pb(0),l.Nb(1,"spinners-gif-spinner",0),l.Gc(2,N,19,13,"ng-container",1),l.Ob()),2&e&&(l.zb(1),l.oc("loading",t.loading),l.zb(1),l.oc("ngIf",!t.loading))},directives:[h.a,o.o,u.a,a.a,O,R.a,o.n,z],pipes:[o.v],styles:['.roms-grid-container[_ngcontent-%COMP%]{display:grid;grid-gap:4.2rem;grid-template-areas:"rom-1 rom-2" "rom-3 rom-4";grid-template-columns:repeat(2,1fr);grid-template-rows:1fr minmax(-webkit-min-content,auto);grid-template-rows:1fr minmax(min-content,auto);justify-items:center;padding-bottom:.6rem;width:100%}@media only screen and (max-width:916px){.roms-grid-container[_ngcontent-%COMP%]{grid-row-gap:1.4rem;grid-template-areas:"rom-1" "rom-2" "rom-3" "rom-4";grid-template-columns:1fr;grid-template-rows:1fr fit-content(18.75em) fit-content(18.75em) fit-content(18.75em);margin:0 auto}}.roms-flex-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-items:center;margin:auto;width:70vw}.roms-heading-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:left}.dummy-container[_ngcontent-%COMP%]{display:none}.favorites-btn-container[_ngcontent-%COMP%]{margin-top:.25rem}@media only screen and (max-width:916px){.dummy-container[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{text-align:center}}#toggle-favs-responsive[_ngcontent-%COMP%]{display:none}#toggle-favs[_ngcontent-%COMP%]{display:inherit}@media only screen and (max-width:600px){#toggle-favs-responsive[_ngcontent-%COMP%]{display:inherit}#toggle-favs[_ngcontent-%COMP%]{display:none}.favorites-btn-container[_ngcontent-%COMP%]{text-align:right}}#no-roms-heading[_ngcontent-%COMP%], #roms-err[_ngcontent-%COMP%]{margin-top:2rem}.card[_ngcontent-%COMP%]{width:100%!important}']}),e})();var G=n("UTcu"),L=n("Dat7");function D(e,t){if(1&e&&(l.Rb(0,"span",4),l.Ic(1),l.Qb()),2&e){const e=l.gc(),t=l.xc(5),n=l.xc(7);l.oc("ngbPopover",t)("popoverTitle",n),l.zb(1),l.Kc(" ",e.gameName," ")}}function F(e,t){if(1&e&&l.Ic(0),2&e){const e=l.gc();l.Jc(e.gameName)}}function A(e,t){if(1&e&&(l.Ic(0,"This ROM ("),l.Rb(1,"span",5),l.Ic(2),l.Qb(),l.Ic(3,") is not part of the core series of Pok"),l.Nb(4,"span",6),l.Ic(5,"mon games, it is a "),l.Rb(6,"span",7),l.Ic(7,"ROM hack"),l.Qb(),l.Ic(8,".")),2&e){const e=l.gc();l.zb(2),l.Jc(e.removeRomHackText(e.gameName))}}function j(e,t){1&e&&(l.Rb(0,"span",8),l.Ic(1,"Quick Notice!"),l.Qb())}let E=(()=>{class e{constructor(){}ngOnInit(){this.romHackTxtIdentifier=/(?:(\s?)(\(ROM Hack\)))/i,this.finishedLoading&&(this.isRomHack="hack"===this.romType)}removeRomHackText(e){return e.replace(this.romHackTxtIdentifier,"")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-info-rom-hack-popup"]],inputs:{romType:"romType",gameName:"gameName",finishedLoading:"finishedLoading"},decls:8,vars:2,consts:[["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle",4,"ngIf","ngIfElse"],["notRomHack",""],["popContent",""],["popTitle",""],["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle"],[1,"underline"],["id","eacute"],[1,"font-italic"],[1,"font-weight-bold"]],template:function(e,t){if(1&e&&(l.Pb(0),l.Gc(1,D,2,3,"span",0),l.Gc(2,F,1,1,"ng-template",null,1,l.Hc),l.Gc(4,A,9,1,"ng-template",null,2,l.Hc),l.Gc(6,j,2,0,"ng-template",null,3,l.Hc),l.Ob()),2&e){const e=l.xc(3);l.zb(1),l.oc("ngIf",t.isRomHack)("ngIfElse",e)}},directives:[o.o,r.o],styles:['@charset "UTF-8";#eacute[_ngcontent-%COMP%]:before{content:"\xe9"}']}),e})(),U=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-info-game-name"]],inputs:{gameName:"gameName",romType:"romType",finishedLoading:"finishedLoading"},decls:3,vars:3,consts:[[1,"mt-4"],[1,"game-name","mb-4"],[3,"finishedLoading","gameName","romType"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"h2",1),l.Nb(2,"roms-info-rom-hack-popup",2),l.Qb(),l.Qb()),2&e&&(l.zb(2),l.oc("finishedLoading",t.finishedLoading)("gameName",t.gameName)("romType",t.romType))},directives:[E],styles:["@media only screen and (max-width:938px){.game-name[_ngcontent-%COMP%]{margin-left:0;text-align:center}}"]}),e})(),H=(()=>{class e{constructor(){}ngOnInit(){}imgAlt(e){return e.replace(/[\s:]/g,"-").replace(/\xE9/,"e")+"-logo"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-info-game-logo"]],inputs:{logoUrl:"logoUrl",gameName:"gameName"},decls:3,vars:4,consts:[[1,"text-center","mb-3"],[1,"logo","rounded","img-thumbnail","shadow",3,"src","alt"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Nb(1,"img",1),l.hc(2,"lowercase"),l.Qb()),2&e&&(l.zb(1),l.oc("src",t.logoUrl,l.Bc)("alt",l.ic(2,2,t.imgAlt(t.gameName))))},pipes:[o.l],styles:[".logo[_ngcontent-%COMP%]{background-color:#fff;height:159px;width:212px}@media only screen and (max-width:938px) and (min-width:489px){.logo[_ngcontent-%COMP%]{height:132px;width:176px}}@media only screen and (max-width:488px) and (min-width:332px){.logo[_ngcontent-%COMP%]{height:100px;width:133.33px}}@media only screen and (max-width:331px){.logo[_ngcontent-%COMP%]{height:81px;width:108px}}"]}),e})(),K=(()=>{class e{constructor(){}static changeUrlToLink(e){const t=/(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gim;if(t.test(e)){const n=e.match(t)[0];return e.replace(n,`<a href="${n}" target="_blank" rel="noreferrer">${n}</a>`)}return e}ngOnInit(){this.finishedLoading&&this.description&&(this.description=e.changeUrlToLink(this.description))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-info-game-description"]],inputs:{description:"description",finishedLoading:"finishedLoading"},decls:2,vars:1,consts:[[1,"description-container","bg-white","border","rounded"],[1,"description",3,"innerHTML"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Nb(1,"p",1),l.Qb()),2&e&&(l.zb(1),l.oc("innerHTML",t.description,l.Ac))},styles:[".description-container[_ngcontent-%COMP%]{height:100%;margin-bottom:0;overflow-y:auto;padding:1em 20px 20px;text-align:left!important;word-wrap:break-word}@media only screen and (max-width:938px){.description-container[_ngcontent-%COMP%]{-webkit-clip-path:inset(0 0 0 0)!important;clip-path:inset(0 0 0 0)!important;height:300px;margin-bottom:1rem;padding-bottom:1em!important}}@media only screen and (min-width:938px){.description-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{height:16rem}}"]}),e})();function B(e,t){1&e&&(l.Rb(0,"div",4),l.Rb(1,"span"),l.Ic(2,"You cannot download this ROM since you are not on a computer"),l.Qb(),l.Qb())}let J=(()=>{class e{constructor(){}disableBtnIfMobileOrTablet(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)||/Android/i.test(navigator.userAgent)?(this.btnDisabled=!0,!0):(this.btnDisabled=!1,!1)}ngOnInit(){this.faDownload=b.d,this.disableBtnIfMobileOrTablet()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-info-rom-download"]],hostBindings:function(e,t){1&e&&l.dc("resize",(function(){return t.disableBtnIfMobileOrTablet()}),!1,l.yc)},inputs:{downloadLink:"downloadLink"},decls:5,vars:5,consts:[[1,"download-link-wrapper","text-center"],["rel","noreferrer","target","_blank","appBtn","","btnType","success",3,"href"],[1,"mr-2",3,"icon"],["class","p-0 mt-2 no-download-msg","appAlert","","alertType","info",4,"ngIf"],["appAlert","","alertType","info",1,"p-0","mt-2","no-download-msg"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"a",1),l.Nb(2,"fa-icon",2),l.Ic(3,"Download"),l.Qb(),l.Gc(4,B,3,0,"div",3),l.Qb()),2&e&&(l.zb(1),l.Eb("disabled",t.btnDisabled),l.oc("href",t.downloadLink,l.Bc),l.zb(1),l.oc("icon",t.faDownload),l.zb(2),l.oc("ngIf",t.disableBtnIfMobileOrTablet()))},directives:[u.a,a.a,o.o,R.a],styles:[".download-link-wrapper[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width:938px){.download-link-wrapper[_ngcontent-%COMP%]{margin-top:.95rem}.no-download-msg[_ngcontent-%COMP%]{margin-bottom:0}}@media only screen and (min-width:938px){.no-download-msg[_ngcontent-%COMP%]{margin-bottom:3rem}}"]}),e})(),W=(()=>{class e{constructor(e){this.romsService=e}ngOnInit(){this.faStar=b.m}patchFavoriteRom(){const e={is_favorite:!this.isFavorite};this.isFavorite=e.is_favorite,this.romsService.patchRom(this.id,e).subscribe(e=>{this.isFavorite!==e.is_favorite&&(this.isFavorite=e.is_favorite)},e=>m.a.error(e))}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(c.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-info-mark-favorite"]],inputs:{isFavorite:"isFavorite",id:"id"},decls:5,vars:3,consts:[[1,"mark-favorite-container","d-flex","flex-row","bg-light","border","rounded","shadow"],["for","is-favorite",1,"mb-0","mt-1"],[1,"mr-2","ml-2",3,"icon"],["type","checkbox","id","is-favorite","name","is-favorite",1,"is-favorite","ml-5",3,"checked","change"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"label",1),l.Nb(2,"fa-icon",2),l.Ic(3),l.Qb(),l.Rb(4,"input",3),l.dc("change",(function(){return t.patchFavoriteRom()})),l.Qb(),l.Qb()),2&e&&(l.zb(2),l.oc("icon",t.faStar),l.zb(1),l.Kc(" ",t.isFavorite?"Unmark":"Mark"," as Favorite "),l.zb(1),l.oc("checked",t.isFavorite))},directives:[a.a],styles:[".is-favorite[_ngcontent-%COMP%]{cursor:pointer!important;height:2rem!important;width:2rem!important}.mark-favorite-container[_ngcontent-%COMP%]{justify-content:space-between;padding:.15rem}@media only screen and (max-width:938px){.mark-favorite-container[_ngcontent-%COMP%]{justify-content:center;padding:.5rem}}"]}),e})(),$=(()=>{class e{constructor(){}ngOnInit(){this.faGamepad=b.g}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-info-game-specs"]],inputs:{genre:"genre",generation:"generation",region:"region",dateReleased:"dateReleased"},decls:14,vars:8,consts:[[1,"game-list-container"],[1,"list-group","shadow"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"ul",1),l.Rb(2,"li",2),l.Nb(3,"fa-icon",3),l.Ic(4,"Game Info "),l.Qb(),l.Rb(5,"li",4),l.Ic(6),l.hc(7,"date"),l.Qb(),l.Rb(8,"li",4),l.Ic(9),l.Qb(),l.Rb(10,"li",4),l.Ic(11),l.Qb(),l.Rb(12,"li",4),l.Ic(13),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.zb(3),l.oc("icon",t.faGamepad),l.zb(3),l.Kc(" Date Released: ",l.jc(7,5,t.dateReleased,"MM/dd/yyyy")," "),l.zb(3),l.Kc("Generation: ",t.generation,""),l.zb(2),l.Kc("Genre: ",t.genre,""),l.zb(2),l.Kc("Region: ",t.region,""))},directives:[a.a],pipes:[o.e],styles:[".game-list-container[_ngcontent-%COMP%]{margin-bottom:.88rem;margin-left:2.5rem;margin-top:0}@media only screen and (max-width:938px){.game-list-container[_ngcontent-%COMP%]{margin:0 0 1.5rem!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),e})(),Y=(()=>{class e{constructor(){}ngOnInit(){this.faCompactDisc=b.c}fileSizeData(e){const[t,n]=M.a.convertRomSize(e);return[t,n]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-info-rom-specs"]],inputs:{fileType:"fileType",fileSize:"fileSize",fileName:"fileName",platform:"platform"},decls:13,vars:5,consts:[[1,"rom-list-container"],[1,"list-group","shadow"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Rb(1,"ul",1),l.Rb(2,"li",2),l.Nb(3,"fa-icon",3),l.Ic(4,"ROM Info "),l.Qb(),l.Rb(5,"li",4),l.Ic(6),l.Qb(),l.Rb(7,"li",4),l.Ic(8),l.Qb(),l.Rb(9,"li",4),l.Ic(10),l.Qb(),l.Rb(11,"li",4),l.Ic(12),l.Qb(),l.Qb(),l.Qb()),2&e&&(l.zb(3),l.oc("icon",t.faCompactDisc),l.zb(3),l.Kc("File Name: ",t.fileName,""),l.zb(2),l.Kc(" File Size: ",t.fileSizeData(t.fileSize).join("")," "),l.zb(2),l.Kc("File Type: ",t.fileType,""),l.zb(2),l.Kc("Platform: ",t.platform,""))},directives:[a.a],styles:[".rom-list-container[_ngcontent-%COMP%]{margin-bottom:0;margin-left:2.5rem;margin-top:.88rem}@media only screen and (max-width:938px){.rom-list-container[_ngcontent-%COMP%]{margin:.75rem 0 0!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),e})();function Z(e,t){1&e&&(l.Pb(0),l.Ic(1," You're not logged in and thus cannot access this ROM. "),l.Ob())}function q(e,t){1&e&&(l.Pb(0),l.Ic(1," You cannot access this user's ROM. "),l.Ob())}function X(e,t){1&e&&(l.Pb(0),l.Ic(1," Sorry, it looks like this ROM doesn't exist. "),l.Ob())}function V(e,t){1&e&&(l.Pb(0),l.Ic(1," Oops, there was an error while trying to load your ROM information. Please try again later. "),l.Ob())}function ee(e,t){if(1&e&&(l.Rb(0,"div",12),l.Rb(1,"div",13),l.Pb(2,14),l.Gc(3,Z,2,0,"ng-container",15),l.Gc(4,q,2,0,"ng-container",15),l.Gc(5,X,2,0,"ng-container",15),l.Gc(6,V,2,0,"ng-container",16),l.Ob(),l.Qb(),l.Qb()),2&e){const e=l.gc(2);l.zb(2),l.oc("ngSwitch",e.errStatusCode),l.zb(1),l.oc("ngSwitchCase",401),l.zb(1),l.oc("ngSwitchCase",403),l.zb(1),l.oc("ngSwitchCase",404)}}function te(e,t){if(1&e&&(l.Nb(0,"roms-info-game-name",17),l.Nb(1,"roms-info-game-logo",18),l.Rb(2,"div",19),l.Rb(3,"h4"),l.Nb(4,"fa-icon",20),l.Ic(5),l.Rb(6,"span",21),l.Ic(7,"Description"),l.Qb(),l.Qb(),l.Qb(),l.Nb(8,"roms-info-game-description",22),l.Nb(9,"roms-info-rom-download",23),l.Nb(10,"roms-info-mark-favorite",24),l.Nb(11,"roms-info-game-specs",25),l.Nb(12,"roms-info-rom-specs",26)),2&e){const e=l.gc(2);l.oc("finishedLoading",e.finishedLoading)("gameName",e.rom.game_name)("romType",e.rom.rom_type),l.zb(1),l.oc("logoUrl",e.rom.logo_url)("gameName",e.rom.game_name),l.zb(3),l.oc("icon",e.faFileAlt),l.zb(1),l.Jc(e.isRomHack(e.rom.rom_type)?"":"Pokemon.com "),l.zb(3),l.oc("description",e.rom.description)("finishedLoading",e.finishedLoading),l.zb(1),l.oc("downloadLink",e.rom.download_link),l.zb(1),l.oc("isFavorite",e.rom.is_favorite)("id",e.rom._id),l.zb(1),l.oc("region",e.rom.region)("dateReleased",e.rom.date_released)("genre",e.rom.genre)("generation",e.rom.generation),l.zb(1),l.oc("platform",e.rom.platform)("fileName",e.rom.file_name)("fileSize",e.rom.file_size)("fileType",e.rom.file_type)}}const ne=function(){return["/","roms"]};function oe(e,t){if(1&e&&(l.Pb(0),l.Rb(1,"div",3),l.Rb(2,"div",4),l.Rb(3,"div",5),l.Rb(4,"button",6),l.Nb(5,"fa-icon",7),l.Qb(),l.Qb(),l.Rb(6,"div",8),l.Rb(7,"h1"),l.Ic(8,"ROM Info"),l.Qb(),l.Qb(),l.Nb(9,"div",9),l.Qb(),l.Gc(10,ee,7,4,"div",10),l.Gc(11,te,13,20,"ng-template",null,11,l.Hc),l.Qb(),l.Ob()),2&e){const e=l.xc(12),t=l.gc();l.zb(4),l.oc("routerLink",l.sc(4,ne)),l.zb(1),l.oc("icon",t.faLongArrowAltLeft),l.zb(5),l.oc("ngIf",t.isError)("ngIfElse",e)}}const ie=[{path:"",component:T,canActivate:[G.a,L.a]},{path:"info/:id",component:(()=>{class e{constructor(e,t,n){this.romService=e,this.router=t,this.route=n}ngOnInit(){this.finishedLoading=!1,this.loading=!0,this.faFileAlt=b.f,this.faLongArrowAltLeft=b.k,this.id=this.route.snapshot.paramMap.get("id"),this.isError=!1,this.rom=new x,this.getRom(this.id)}ngOnDestroy(){this.romInfoSub.unsubscribe()}getRom(e){this.romInfoObs$=this.romService.getRom(e),this.romInfoSub=this.romInfoObs$.subscribe(e=>{e.genre||(e.genre="N/A"),this.rom=e,this.loading=!1,this.isError=!1},e=>{if(this.loading=!1,this.isError=!0,void 0!==e.status)switch(e.status){case 404:this.errStatusCode=404;break;case 401:this.errStatusCode=401;break;case 403:this.errStatusCode=403;break;default:this.errStatusCode=500}m.a.error(e)},()=>this.finishedLoading=!0)}isRomHack(e){return"hack"===e}}return e.\u0275fac=function(t){return new(t||e)(l.Mb(c.a),l.Mb(i.d),l.Mb(i.a))},e.\u0275cmp=l.Gb({type:e,selectors:[["roms-rom-info"]],decls:3,vars:2,consts:[[1,"p-2"],[3,"loading"],[4,"ngIf"],[1,"rom-info-container"],[1,"rom-info-header-container"],[1,"back-btn-container"],["type","button","aria-label","back","appBtn","","btnType","primary",3,"routerLink"],[3,"icon"],[1,"title-container"],[1,"dummy-container"],["class","rom-info-err-wrapper pt-3",4,"ngIf","ngIfElse"],["romInfo",""],[1,"rom-info-err-wrapper","pt-3"],["appAlert","","alertType","danger",1,"ml-4","mr-4","text-center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"game-title",3,"finishedLoading","gameName","romType"],[1,"game-logo",3,"logoUrl","gameName"],[1,"game-description-title"],[1,"description-icon","mr-3","ml-1",3,"icon"],[1,"mr-1"],[1,"game-description","shadow",3,"description","finishedLoading"],[1,"rom-download",3,"downloadLink"],[1,"mark-favorite",3,"isFavorite","id"],[1,"game-specs",3,"region","dateReleased","genre","generation"],[1,"rom-specs",3,"platform","fileName","fileSize","fileType"]],template:function(e,t){1&e&&(l.Rb(0,"div",0),l.Nb(1,"spinners-gif-spinner",1),l.Gc(2,oe,13,5,"ng-container",2),l.Qb()),2&e&&(l.zb(1),l.oc("loading",t.loading),l.zb(1),l.oc("ngIf",!t.loading))},directives:[h.a,o.o,u.a,i.e,a.a,R.a,o.p,o.q,o.r,U,H,K,J,W,$,Y],styles:['.rom-info-container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"rom-info-header rom-info-header" "game-title ." "game-logo ." "game-description-title ." "game-description game-specs" "game-description rom-specs" "rom-download mark-favorite";grid-template-columns:2fr 1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(11.75em) fit-content(188px) 3.6rem;margin-left:30px;margin-right:30px}.game-title[_ngcontent-%COMP%]{align-self:start;grid-area:game-title;grid-column:1/-1;grid-row:2/3;justify-self:start}.game-logo[_ngcontent-%COMP%]{grid-area:game-logo;grid-column:1/2;grid-row:3/4}.game-description-title[_ngcontent-%COMP%]{grid-area:game-description-title;grid-column:1/2;grid-row:4/5;margin-top:1rem}.game-description[_ngcontent-%COMP%]{grid-area:game-description;grid-column:1/2;grid-row:5/7}.rom-download[_ngcontent-%COMP%]{grid-area:rom-download;grid-column:1/2}.mark-favorite[_ngcontent-%COMP%], .rom-download[_ngcontent-%COMP%]{grid-row:7/-1;margin-bottom:1rem;margin-top:1rem}.mark-favorite[_ngcontent-%COMP%]{grid-area:mark-favorite;grid-column:2/3;justify-self:end;width:calc(100% - 40px)}.game-specs[_ngcontent-%COMP%]{align-self:start;grid-area:game-specs;grid-column:2/3;grid-row:5/6}.rom-specs[_ngcontent-%COMP%]{align-self:end;grid-area:rom-specs;grid-column:2/3;grid-row:6/7}.rom-info-header-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;grid-area:rom-info-header;grid-column:1/3;grid-row:1/2}.back-btn-container[_ngcontent-%COMP%]{flex:2 0 auto;order:1}.title-container[_ngcontent-%COMP%]{flex:2 0 auto;justify-self:center;order:2}.title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.dummy-container[_ngcontent-%COMP%]{flex:2 0 auto;flex-basis:40px;order:3}.rom-info-err-wrapper[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:2/3;margin:0 auto!important}@media only screen and (max-width:388px){.description-icon[_ngcontent-%COMP%]{display:none!important}}@media only screen and (max-width:938px){.rom-info-container[_ngcontent-%COMP%]{grid-template-areas:"rom-info-header" "game-title" "game-logo" "game-description-title" "game-description" "game-specs" "rom-specs" "rom-download";grid-template-columns:1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(19.25em) 15.5rem fit-content(17.5rem) fit-content(5.5rem) fit-content(5.5rem);margin:0 auto}.game-title[_ngcontent-%COMP%]{align-self:center;justify-self:center}.game-logo[_ngcontent-%COMP%]{text-align:center}.game-description-title[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:4/5;text-align:center}.game-description[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:5/6;text-align:center}.mark-favorite[_ngcontent-%COMP%]{grid-row:8/9;justify-self:center;width:100%}.mark-favorite[_ngcontent-%COMP%], .rom-download[_ngcontent-%COMP%]{grid-column:1/-1;margin-bottom:0}.rom-download[_ngcontent-%COMP%]{grid-row:9/-1;margin-top:0}.game-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:6/7;margin-top:0}.rom-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:7/8}.rom-info-header-container[_ngcontent-%COMP%]{align-items:start;margin-top:.8rem}}']}),e})(),canActivate:[G.a,L.a]}];let re=(()=>{class e{}return e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({factory:function(t){return new(t||e)},imports:[[i.h.forChild(ie)],i.h]}),e})(),ae=(()=>{class e{}return e.\u0275mod=l.Kb({type:e}),e.\u0275inj=l.Jb({factory:function(t){return new(t||e)},providers:[c.a],imports:[[o.c,i.h,r.g,a.b,s.a,g.a,re]]}),e})()}}]);