(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{gnNr:function(e,t,n){"use strict";n.r(t);var i=n("ofXK"),o=n("tyNb"),r=n("1kSV"),a=n("6NWb"),s=n("FUS3"),c=n("t52u"),g=n("WjtB"),m=n("Mb37"),l=n("DRYZ"),d=n("fXoL");let b=(()=>{class e{constructor(e){this.router=e,this.currentUrl=this.router.url,e.events.subscribe(e=>{e instanceof o.b&&(this.previousUrl=this.currentUrl,this.currentUrl=e.url)})}getPreviousUrl(){return this.previousUrl}}return e.\u0275fac=function(t){return new(t||e)(d.Zb(o.d))},e.\u0275prov=d.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var p=n("wHSu"),f=n("twK/"),h=n("NvMS"),u=n("siFw");function w(e,t){1&e&&d.Ic(0,"Prev")}function v(e,t){1&e&&d.Gc(0,w,1,0,"ng-template",3)}function P(e,t){1&e&&d.Ic(0,"Next")}function x(e,t){1&e&&d.Gc(0,P,1,0,"ng-template",4)}let y=(()=>{class e{constructor(){this.paginate=new d.n}setWidth(){this.pageWidth=window.innerWidth}ngOnInit(){this.pageWidth=window.innerWidth}onPageChange(e){this.pageSize=this.itemsPerPage*(e-1),this.paginate.emit([this.pageSize,this.currentPage])}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-pagination"]],hostBindings:function(e,t){1&e&&d.dc("resize",(function(e){return t.setWidth()}),!1,d.yc)},inputs:{romsData:"romsData",currentPage:"currentPage",pageSize:"pageSize",itemsPerPage:"itemsPerPage"},outputs:{paginate:"paginate"},decls:4,vars:8,consts:[["id","roms-pagination-container",1,"pt-4","pb-2"],["aria-label","ROMs pagination","size","-",3,"directionLinks","collectionSize","pageSize","page","disabled","boundaryLinks","pageChange"],[4,"ngIf"],["ngbPaginationPrevious",""],["ngbPaginationNext",""]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"ngb-pagination",1),d.dc("pageChange",(function(e){return t.currentPage=e}))("pageChange",(function(e){return t.onPageChange(t.currentPage)})),d.Gc(2,v,1,0,void 0,2),d.Gc(3,x,1,0,void 0,2),d.Qb(),d.Qb()),2&e&&(d.zb(1),d.oc("directionLinks",t.pageWidth>600&&t.romsData.length>0)("collectionSize",t.romsData.length)("pageSize",t.itemsPerPage)("page",t.currentPage)("disabled",0===t.romsData.length)("boundaryLinks",!1),d.zb(1),d.oc("ngIf",t.pageWidth>600),d.zb(1),d.oc("ngIf",t.pageWidth>600))},directives:[r.h,i.o,r.j,r.i],styles:["#roms-pagination-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}"]}),e})();var O=n("FpAq");class R{}var M=n("hdQ0");function _(e,t){if(1&e&&d.Nb(0,"fa-icon",13),2&e){const e=d.gc();d.oc("icon",e.faStar)}}const k=function(e){return["info",e]};let C=(()=>{class e{constructor(){}ngOnInit(){this.faStar=p.m}imgAlt(e){return`${e.replace(/[\s:]/g,"-").replace(/\xE9/g,"e").replace(/('|[()])/g,"")}-box-art`}fileSizeData(e){const[t,n]=M.a.convertRomSize(e);return[t,n]}applyClassesForGameImgSize(e){return{"oversized-img":["pokemon-green-version-jp-box-art","pokemon-lets-go-pikachu-box-art","pokemon-lets-go-eevee-box-art","pokemon-sword-version-box-art","pokemon-shield-version-box-art"].includes(e.toLowerCase()),"card-img-top box-art-img":!0}}romanize(e){return M.a.convertIntegerToRomanNumeral(e)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-rom"]],inputs:{rom:"rom"},decls:32,vars:14,consts:[[1,"rom","shadow","h-100"],[1,"img-container"],[3,"alt","src","ngClass"],[1,"card-body"],[1,"card-title","text-center","mt-2"],["class","mr-2",3,"icon",4,"ngIf"],[1,"list-group","list-group-flush"],[1,"list-group-item","font-weight-bold","list-grid"],[1,"text-left"],[1,"text-right"],[1,"text-right","generation"],[1,"card-body","card-body-container"],["appBtn","","btnType","primary",3,"routerLink"],[1,"mr-2",3,"icon"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"div",1),d.Nb(2,"img",2),d.hc(3,"lowercase"),d.Qb(),d.Rb(4,"div",3),d.Rb(5,"h5",4),d.Gc(6,_,1,1,"fa-icon",5),d.Ic(7),d.Qb(),d.Rb(8,"ul",6),d.Rb(9,"li",7),d.Rb(10,"span",8),d.Ic(11,"File Size"),d.Qb(),d.Rb(12,"span",9),d.Ic(13),d.Qb(),d.Qb(),d.Rb(14,"li",7),d.Rb(15,"span",8),d.Ic(16,"File Type"),d.Qb(),d.Rb(17,"span",9),d.Ic(18),d.Qb(),d.Qb(),d.Rb(19,"li",7),d.Rb(20,"span",8),d.Ic(21,"Generation"),d.Qb(),d.Rb(22,"span",10),d.Ic(23),d.Qb(),d.Qb(),d.Rb(24,"li",7),d.Rb(25,"span",8),d.Ic(26,"Platform"),d.Qb(),d.Rb(27,"span",9),d.Ic(28),d.Qb(),d.Qb(),d.Qb(),d.Rb(29,"div",11),d.Rb(30,"a",12),d.Ic(31,"Information"),d.Qb(),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.zb(2),d.oc("alt",d.ic(3,10,t.imgAlt(t.rom.game_name)))("src",t.rom.box_art_url,d.Bc)("ngClass",t.applyClassesForGameImgSize(t.imgAlt(t.rom.game_name))),d.zb(4),d.oc("ngIf",t.rom.is_favorite),d.zb(1),d.Kc(" ",t.rom.game_name," "),d.zb(6),d.Jc(t.fileSizeData(t.rom.file_size).join("")),d.zb(5),d.Jc(t.rom.file_type),d.zb(5),d.Jc(t.romanize(t.rom.generation)),d.zb(5),d.Jc(t.rom.platform),d.zb(2),d.oc("routerLink",d.tc(12,k,t.rom._id)))},directives:[i.m,i.o,o.g,u.a,a.a],pipes:[i.l],styles:[".list-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.card-body-container[_ngcontent-%COMP%]{margin:0 auto;text-align:center;z-index:20}.box-art-img[_ngcontent-%COMP%], .img-container[_ngcontent-%COMP%]{height:calc(30vw + 2.1rem);width:100%}.oversized-img[_ngcontent-%COMP%]{-o-object-fit:cover!important;object-fit:cover!important}@media only screen and (max-width:916px){.img-container[_ngcontent-%COMP%]{margin:0 auto;height:100%!important;padding-top:20px;text-align:center}.box-art-img[_ngcontent-%COMP%]{height:30vw;width:30vw}}"]}),e})();function z(e,t){if(1&e&&(d.Rb(0,"h2",17),d.Ic(1),d.Qb()),2&e){const e=d.gc(2);d.zb(1),d.Kc(" ",e.noRomsMsg," ")}}function I(e,t){1&e&&(d.Rb(0,"div",18),d.Ic(1," Oops, there was an error while trying to load your ROMs. Please try again later. "),d.Qb())}function S(e,t){1&e&&d.Nb(0,"roms-rom",21),2&e&&d.oc("rom",t.$implicit)}function Q(e,t){if(1&e&&(d.Rb(0,"div",19),d.Gc(1,S,1,1,"roms-rom",20),d.hc(2,"slice"),d.hc(3,"slice"),d.Qb()),2&e){const e=d.gc(2);d.zb(1),d.oc("ngForOf",d.kc(2,1,d.jc(3,5,e.romsData,e.pageSize),0,e.itemsPerPage))}}function N(e,t){if(1&e){const e=d.Sb();d.Pb(0),d.Rb(1,"div",2),d.Rb(2,"div",3),d.Rb(3,"div",4),d.Nb(4,"div",5),d.Rb(5,"h1",6),d.Ic(6,"ROMs"),d.Qb(),d.Rb(7,"div",7),d.Rb(8,"button",8),d.dc("click",(function(t){d.zc(e);const n=d.gc();return n.getRoms(!n.favoritesShown),n.onPageChange([0,1])})),d.Rb(9,"span",9),d.Nb(10,"fa-icon",10),d.Qb(),d.Rb(11,"span",11),d.Ic(12),d.Qb(),d.Qb(),d.Qb(),d.Qb(),d.Nb(13,"hr",12),d.Qb(),d.Pb(14),d.Gc(15,z,2,1,"h2",13),d.Gc(16,I,2,0,"div",14),d.Ob(),d.Gc(17,Q,4,8,"div",15),d.Rb(18,"roms-pagination",16),d.dc("paginate",(function(t){return d.zc(e),d.gc().onPageChange(t)})),d.Qb(),d.Qb(),d.Ob()}if(2&e){const e=d.gc();d.zb(4),d.Fc("flex-basis",e.favoritesShown?88.23:131.8,"px"),d.zb(3),d.Fc("flex-basis",e.favoritesShown?89:132,"px"),d.zb(1),d.oc("disabled",e.isError||e.romsData.length<1&&!e.favoritesShown),d.zb(2),d.oc("icon",e.favoritesShown?e.starSolid:e.starOutline),d.zb(2),d.Jc(e.favoritesShown?"Show All":"Filter Favorites"),d.zb(3),d.oc("ngIf",e.romsData.length<1&&!e.isError),d.zb(1),d.oc("ngIf",e.isError),d.zb(1),d.oc("ngIf",e.romsData.length>0),d.zb(1),d.oc("romsData",e.romsData)("currentPage",e.currentPage)("itemsPerPage",e.itemsPerPage)}}let T=(()=>{class e{constructor(e,t,n,i){this.router=e,this.romsService=t,this.viewportScroller=n,this.routerExtService=i}static setPaginationState(e){l.a.getState("pagination_state")||e||l.a.setState("pagination_state",[0,1,!1]),null!=e&&l.a.setState("pagination_state",e)}static getPaginationState(){return l.a.getState("pagination_state")}ngOnInit(){this.starSolid=p.m,this.starOutline=f.b,this.currentPage=1,this.itemsPerPage=4,this.loading=!0,this.noRomsMsg="",this.limit=35,this.isError=!1,this.romsData=new Array,(!this.routerExtService.getPreviousUrl().includes("/info")&&"/roms"===this.router.url||"complete"!==document.readyState)&&(this.onPageChange([0,1]),e.setPaginationState([0,1,!1])),e.setPaginationState();const t=e.getPaginationState()[2];this.getRoms(t),this.favoritesShown=t||!1}ngOnDestroy(){this.romsSub.unsubscribe()}getRoms(t){null!=t&&(this.favoritesShown=!e.getPaginationState()[2],this.romsData=[],this.loading=!0),this.romsObs$=this.romsService.getAllRoms({favorites:t}),this.romsSub=this.romsObs$.subscribe(e=>{this.isError=!1,this.romsData=e,this.loading=!1,this.romsData.length<1&&(this.noRomsMsg=this.favoritesShown?"No Favorite ROMs Found":"No ROMs to Show")},e=>{this.isError=!0,this.loading=!1,this.noRomsMsg="",m.a.error(e)},()=>{this.pageSize=e.getPaginationState()[0],this.currentPage=e.getPaginationState()[1]})}onPageChange(t){this.pageSize=t[0],this.currentPage=t[1],e.setPaginationState([this.pageSize,this.currentPage,this.favoritesShown]),this.viewportScroller.scrollToPosition([0,0])}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(o.d),d.Mb(c.a),d.Mb(i.x),d.Mb(b))},e.\u0275cmp=d.Gb({type:e,selectors:[["roms"]],decls:3,vars:2,consts:[[3,"loading"],[4,"ngIf"],[1,"roms-flex-container"],[1,"mt-2","mb-0","roms-heading-container","w-100"],[1,"d-flex","justify-content-between","mt-2"],[1,"dummy-container"],["id","roms-heading"],[1,"favorites-btn-container"],["type","button","appBtn","","btnType","primary","id","favorites-btn",3,"disabled","click"],["id","toggle-favs-responsive"],[3,"icon"],["id","toggle-favs"],[1,"mt-0"],["class","text-center","id","no-roms-heading",4,"ngIf"],["class","mr-5 ml-5 text-center","appAlert","","alertType","danger","id","roms-err",4,"ngIf"],["class","roms-grid-container w-100",4,"ngIf"],[3,"romsData","currentPage","itemsPerPage","paginate"],["id","no-roms-heading",1,"text-center"],["appAlert","","alertType","danger","id","roms-err",1,"mr-5","ml-5","text-center"],[1,"roms-grid-container","w-100"],["class","card card-container border rounded",3,"rom",4,"ngFor","ngForOf"],[1,"card","card-container","border","rounded",3,"rom"]],template:function(e,t){1&e&&(d.Pb(0),d.Nb(1,"spinners-gif-spinner",0),d.Gc(2,N,19,13,"ng-container",1),d.Ob()),2&e&&(d.zb(1),d.oc("loading",t.loading),d.zb(1),d.oc("ngIf",!t.loading))},directives:[h.a,i.o,u.a,a.a,y,O.a,i.n,C],pipes:[i.v],styles:['.roms-grid-container[_ngcontent-%COMP%]{display:grid;grid-gap:4.2rem;grid-template-areas:"rom-1 rom-2" "rom-3 rom-4";grid-template-columns:repeat(2,1fr);grid-template-rows:1fr minmax(-webkit-min-content,auto);grid-template-rows:1fr minmax(min-content,auto);justify-items:center;padding-bottom:.6rem;width:100%}@media only screen and (max-width:916px){.roms-grid-container[_ngcontent-%COMP%]{grid-row-gap:1.4rem;grid-template-areas:"rom-1" "rom-2" "rom-3" "rom-4";grid-template-columns:1fr;grid-template-rows:1fr fit-content(18.75em) fit-content(18.75em) fit-content(18.75em);margin:0 auto}}.roms-flex-container[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-items:center;margin:auto;width:70vw}.roms-heading-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:left}.dummy-container[_ngcontent-%COMP%]{display:none}.favorites-btn-container[_ngcontent-%COMP%]{margin-top:.25rem}@media only screen and (max-width:916px){.dummy-container[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{text-align:center}}#toggle-favs-responsive[_ngcontent-%COMP%]{display:none}#toggle-favs[_ngcontent-%COMP%]{display:inherit}@media only screen and (max-width:600px){#toggle-favs-responsive[_ngcontent-%COMP%]{display:inherit}#toggle-favs[_ngcontent-%COMP%]{display:none}.favorites-btn-container[_ngcontent-%COMP%]{text-align:right}}#no-roms-heading[_ngcontent-%COMP%], #roms-err[_ngcontent-%COMP%]{margin-top:2rem}.card[_ngcontent-%COMP%]{width:100%!important}']}),e})();var G=n("UTcu"),L=n("Dat7"),D=n("lGQG");function F(e,t){if(1&e&&(d.Rb(0,"span",4),d.Ic(1),d.Qb()),2&e){const e=d.gc(),t=d.xc(5),n=d.xc(7);d.oc("ngbPopover",t)("popoverTitle",n),d.zb(1),d.Kc(" ",e.gameName," ")}}function A(e,t){if(1&e&&d.Ic(0),2&e){const e=d.gc();d.Jc(e.gameName)}}function j(e,t){if(1&e&&(d.Ic(0,"This ROM ("),d.Rb(1,"span",5),d.Ic(2),d.Qb(),d.Ic(3,") is not part of the core series of Pok"),d.Nb(4,"span",6),d.Ic(5,"mon games, it is a "),d.Rb(6,"span",7),d.Ic(7,"ROM hack"),d.Qb(),d.Ic(8,".")),2&e){const e=d.gc();d.zb(2),d.Jc(e.removeRomHackText(e.gameName))}}function E(e,t){1&e&&(d.Rb(0,"span",8),d.Ic(1,"Quick Notice!"),d.Qb())}let H=(()=>{class e{constructor(){}ngOnInit(){this.romHackTxtIdentifier=/(?:(\s?)(\(ROM Hack\)))/i,this.finishedLoading&&(this.isRomHack="hack"===this.romType)}removeRomHackText(e){return e.replace(this.romHackTxtIdentifier,"")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-info-rom-hack-popup"]],inputs:{romType:"romType",gameName:"gameName",finishedLoading:"finishedLoading"},decls:8,vars:2,consts:[["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle",4,"ngIf","ngIfElse"],["notRomHack",""],["popContent",""],["popTitle",""],["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle"],[1,"underline"],["id","eacute"],[1,"font-italic"],[1,"font-weight-bold"]],template:function(e,t){if(1&e&&(d.Pb(0),d.Gc(1,F,2,3,"span",0),d.Gc(2,A,1,1,"ng-template",null,1,d.Hc),d.Gc(4,j,9,1,"ng-template",null,2,d.Hc),d.Gc(6,E,2,0,"ng-template",null,3,d.Hc),d.Ob()),2&e){const e=d.xc(3);d.zb(1),d.oc("ngIf",t.isRomHack)("ngIfElse",e)}},directives:[i.o,r.n],styles:['#eacute[_ngcontent-%COMP%]:before{content:"\xe9"}']}),e})(),U=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-info-game-name"]],inputs:{gameName:"gameName",romType:"romType",finishedLoading:"finishedLoading"},decls:3,vars:3,consts:[[1,"mt-4"],[1,"game-name","mb-4"],[3,"finishedLoading","gameName","romType"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"h2",1),d.Nb(2,"roms-info-rom-hack-popup",2),d.Qb(),d.Qb()),2&e&&(d.zb(2),d.oc("finishedLoading",t.finishedLoading)("gameName",t.gameName)("romType",t.romType))},directives:[H],styles:["@media only screen and (max-width:938px){.game-name[_ngcontent-%COMP%]{margin-left:0;text-align:center}}"]}),e})(),K=(()=>{class e{constructor(){}ngOnInit(){}imgAlt(e){return`${e.replace(/[\s:]/g,"-").replace(/\xE9/,"e")}-logo`}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-info-game-logo"]],inputs:{logoUrl:"logoUrl",gameName:"gameName"},decls:3,vars:4,consts:[[1,"text-center","mb-3"],[1,"logo","rounded","img-thumbnail","shadow",3,"src","alt"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Nb(1,"img",1),d.hc(2,"lowercase"),d.Qb()),2&e&&(d.zb(1),d.oc("src",t.logoUrl,d.Bc)("alt",d.ic(2,2,t.imgAlt(t.gameName))))},pipes:[i.l],styles:[".logo[_ngcontent-%COMP%]{background-color:#fff;height:159px;width:212px}@media only screen and (max-width:938px)and (min-width:489px){.logo[_ngcontent-%COMP%]{height:132px;width:176px}}@media only screen and (max-width:488px)and (min-width:332px){.logo[_ngcontent-%COMP%]{height:100px;width:133.33px}}@media only screen and (max-width:331px){.logo[_ngcontent-%COMP%]{height:81px;width:108px}}"]}),e})(),B=(()=>{class e{constructor(){}static changeUrlToLink(e){const t=/(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gim;if(t.test(e)){const n=e.match(t)[0];return e.replace(n,`<a href="${n}" target="_blank" rel="noreferrer">${n}</a>`)}return e}ngOnInit(){this.finishedLoading&&this.description&&(this.description=e.changeUrlToLink(this.description))}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-info-game-description"]],inputs:{description:"description",finishedLoading:"finishedLoading"},decls:2,vars:1,consts:[[1,"description-container","bg-white","border","rounded"],[1,"description",3,"innerHTML"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Nb(1,"p",1),d.Qb()),2&e&&(d.zb(1),d.oc("innerHTML",t.description,d.Ac))},styles:[".description-container[_ngcontent-%COMP%]{height:100%;margin-bottom:0;overflow-y:auto;padding:1em 20px 20px;text-align:left!important;word-wrap:break-word}@media only screen and (max-width:938px){.description-container[_ngcontent-%COMP%]{-webkit-clip-path:inset(0 0 0 0)!important;clip-path:inset(0 0 0 0)!important;height:300px;margin-bottom:1rem;padding-bottom:1em!important}}@media only screen and (min-width:938px){.description-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{height:16rem}}"]}),e})();function J(e,t){1&e&&(d.Rb(0,"div",4),d.Rb(1,"span"),d.Ic(2,"You cannot download this ROM since you are not on a computer"),d.Qb(),d.Qb())}let W=(()=>{class e{constructor(){}disableBtnIfMobileOrTablet(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)||/Android/i.test(navigator.userAgent)?(this.btnDisabled=!0,!0):(this.btnDisabled=!1,!1)}ngOnInit(){this.faDownload=p.d,this.disableBtnIfMobileOrTablet()}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-info-rom-download"]],hostBindings:function(e,t){1&e&&d.dc("resize",(function(e){return t.disableBtnIfMobileOrTablet()}),!1,d.yc)},inputs:{downloadLink:"downloadLink"},decls:5,vars:5,consts:[[1,"download-link-wrapper","text-center"],["rel","noreferrer","target","_blank","appBtn","","btnType","success",3,"href"],[1,"mr-2",3,"icon"],["class","p-0 mt-2 no-download-msg","appAlert","","alertType","info",4,"ngIf"],["appAlert","","alertType","info",1,"p-0","mt-2","no-download-msg"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"a",1),d.Nb(2,"fa-icon",2),d.Ic(3,"Download"),d.Qb(),d.Gc(4,J,3,0,"div",3),d.Qb()),2&e&&(d.zb(1),d.Eb("disabled",t.btnDisabled),d.oc("href",t.downloadLink,d.Bc),d.zb(1),d.oc("icon",t.faDownload),d.zb(2),d.oc("ngIf",t.disableBtnIfMobileOrTablet()))},directives:[u.a,a.a,i.o,O.a],styles:[".download-link-wrapper[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width:938px){.download-link-wrapper[_ngcontent-%COMP%]{margin-top:.95rem}.no-download-msg[_ngcontent-%COMP%]{margin-bottom:0}}@media only screen and (min-width:938px){.no-download-msg[_ngcontent-%COMP%]{margin-bottom:3rem}}"]}),e})(),$=(()=>{class e{constructor(e){this.romsService=e}ngOnInit(){this.faStar=p.m}patchFavoriteRom(){const e={is_favorite:!this.isFavorite};this.isFavorite=e.is_favorite,this.romsService.patchRom(this.id,e).subscribe(e=>{this.isFavorite!==e.is_favorite&&(this.isFavorite=e.is_favorite)},e=>m.a.error(e))}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(c.a))},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-info-mark-favorite"]],inputs:{isFavorite:"isFavorite",id:"id"},decls:5,vars:3,consts:[[1,"mark-favorite-container","d-flex","flex-row","bg-light","border","rounded","shadow"],["for","is-favorite",1,"mb-0","mt-1"],[1,"mr-2","ml-2",3,"icon"],["type","checkbox","id","is-favorite","name","is-favorite",1,"is-favorite","ml-5",3,"checked","change"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"label",1),d.Nb(2,"fa-icon",2),d.Ic(3),d.Qb(),d.Rb(4,"input",3),d.dc("change",(function(e){return t.patchFavoriteRom()})),d.Qb(),d.Qb()),2&e&&(d.zb(2),d.oc("icon",t.faStar),d.zb(1),d.Kc(" ",t.isFavorite?"Unmark":"Mark"," as Favorite "),d.zb(1),d.oc("checked",t.isFavorite))},directives:[a.a],styles:[".is-favorite[_ngcontent-%COMP%]{cursor:pointer!important;height:2rem!important;width:2rem!important}.mark-favorite-container[_ngcontent-%COMP%]{-webkit-box-pack:justify;justify-content:space-between;padding:.15rem}@media only screen and (max-width:938px){.mark-favorite-container[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;padding:.5rem}}"]}),e})(),Y=(()=>{class e{constructor(){}ngOnInit(){this.faGamepad=p.g}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-info-game-specs"]],inputs:{genre:"genre",generation:"generation",region:"region",dateReleased:"dateReleased"},decls:14,vars:8,consts:[[1,"game-list-container"],[1,"list-group","shadow"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"ul",1),d.Rb(2,"li",2),d.Nb(3,"fa-icon",3),d.Ic(4,"Game Info "),d.Qb(),d.Rb(5,"li",4),d.Ic(6),d.hc(7,"date"),d.Qb(),d.Rb(8,"li",4),d.Ic(9),d.Qb(),d.Rb(10,"li",4),d.Ic(11),d.Qb(),d.Rb(12,"li",4),d.Ic(13),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.zb(3),d.oc("icon",t.faGamepad),d.zb(3),d.Kc(" Date Released: ",d.jc(7,5,t.dateReleased,"MM/dd/yyyy")," "),d.zb(3),d.Kc("Generation: ",t.generation,""),d.zb(2),d.Kc("Genre: ",t.genre,""),d.zb(2),d.Kc("Region: ",t.region,""))},directives:[a.a],pipes:[i.e],styles:[".game-list-container[_ngcontent-%COMP%]{margin-bottom:.88rem;margin-left:2.5rem;margin-top:0}@media only screen and (max-width:938px){.game-list-container[_ngcontent-%COMP%]{margin:0 0 1.5rem!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),e})(),Z=(()=>{class e{constructor(){}ngOnInit(){this.faCompactDisc=p.c}fileSizeData(e){const[t,n]=M.a.convertRomSize(e);return[t,n]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-info-rom-specs"]],inputs:{fileType:"fileType",fileSize:"fileSize",fileName:"fileName",platform:"platform"},decls:13,vars:5,consts:[[1,"rom-list-container"],[1,"list-group","shadow"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Rb(1,"ul",1),d.Rb(2,"li",2),d.Nb(3,"fa-icon",3),d.Ic(4,"ROM Info "),d.Qb(),d.Rb(5,"li",4),d.Ic(6),d.Qb(),d.Rb(7,"li",4),d.Ic(8),d.Qb(),d.Rb(9,"li",4),d.Ic(10),d.Qb(),d.Rb(11,"li",4),d.Ic(12),d.Qb(),d.Qb(),d.Qb()),2&e&&(d.zb(3),d.oc("icon",t.faCompactDisc),d.zb(3),d.Kc("File Name: ",t.fileName,""),d.zb(2),d.Kc(" File Size: ",t.fileSizeData(t.fileSize).join("")," "),d.zb(2),d.Kc("File Type: ",t.fileType,""),d.zb(2),d.Kc("Platform: ",t.platform,""))},directives:[a.a],styles:[".rom-list-container[_ngcontent-%COMP%]{margin-bottom:0;margin-left:2.5rem;margin-top:.88rem}@media only screen and (max-width:938px){.rom-list-container[_ngcontent-%COMP%]{margin:.75rem 0 0!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),e})();function q(e,t){1&e&&(d.Pb(0),d.Ic(1," You're not logged in and thus cannot access this ROM. "),d.Ob())}function X(e,t){1&e&&(d.Pb(0),d.Ic(1," You cannot access this user's ROM. "),d.Ob())}function V(e,t){1&e&&(d.Pb(0),d.Ic(1," Sorry, it looks like this ROM doesn't exist. "),d.Ob())}function ee(e,t){1&e&&(d.Pb(0),d.Ic(1," Oops, there was an error while trying to load your ROM information. Please try again later. "),d.Ob())}function te(e,t){if(1&e&&(d.Rb(0,"div",12),d.Rb(1,"div",13),d.Pb(2,14),d.Gc(3,q,2,0,"ng-container",15),d.Gc(4,X,2,0,"ng-container",15),d.Gc(5,V,2,0,"ng-container",15),d.Gc(6,ee,2,0,"ng-container",16),d.Ob(),d.Qb(),d.Qb()),2&e){const e=d.gc(2);d.zb(2),d.oc("ngSwitch",e.errStatusCode),d.zb(1),d.oc("ngSwitchCase",401),d.zb(1),d.oc("ngSwitchCase",403),d.zb(1),d.oc("ngSwitchCase",404)}}function ne(e,t){if(1&e&&(d.Nb(0,"roms-info-game-name",17),d.Nb(1,"roms-info-game-logo",18),d.Rb(2,"div",19),d.Rb(3,"h4"),d.Nb(4,"fa-icon",20),d.Ic(5),d.Rb(6,"span",21),d.Ic(7,"Description"),d.Qb(),d.Qb(),d.Qb(),d.Nb(8,"roms-info-game-description",22),d.Nb(9,"roms-info-rom-download",23),d.Nb(10,"roms-info-mark-favorite",24),d.Nb(11,"roms-info-game-specs",25),d.Nb(12,"roms-info-rom-specs",26)),2&e){const e=d.gc(2);d.oc("finishedLoading",e.finishedLoading)("gameName",e.rom.game_name)("romType",e.rom.rom_type),d.zb(1),d.oc("logoUrl",e.rom.logo_url)("gameName",e.rom.game_name),d.zb(3),d.oc("icon",e.faFileAlt),d.zb(1),d.Jc(e.isRomHack(e.rom.rom_type)?"":"Pokemon.com "),d.zb(3),d.oc("description",e.rom.description)("finishedLoading",e.finishedLoading),d.zb(1),d.oc("downloadLink",e.rom.download_link),d.zb(1),d.oc("isFavorite",e.rom.is_favorite)("id",e.rom._id),d.zb(1),d.oc("region",e.rom.region)("dateReleased",e.rom.date_released)("genre",e.rom.genre)("generation",e.rom.generation),d.zb(1),d.oc("platform",e.rom.platform)("fileName",e.rom.file_name)("fileSize",e.rom.file_size)("fileType",e.rom.file_type)}}const ie=function(){return["/","roms"]};function oe(e,t){if(1&e&&(d.Pb(0),d.Rb(1,"div",3),d.Rb(2,"div",4),d.Rb(3,"div",5),d.Rb(4,"button",6),d.Nb(5,"fa-icon",7),d.Qb(),d.Qb(),d.Rb(6,"div",8),d.Rb(7,"h1"),d.Ic(8,"ROM Info"),d.Qb(),d.Qb(),d.Nb(9,"div",9),d.Qb(),d.Gc(10,te,7,4,"div",10),d.Gc(11,ne,13,20,"ng-template",null,11,d.Hc),d.Qb(),d.Ob()),2&e){const e=d.xc(12),t=d.gc();d.zb(4),d.oc("routerLink",d.sc(4,ie)),d.zb(1),d.oc("icon",t.faLongArrowAltLeft),d.zb(5),d.oc("ngIf",t.isError)("ngIfElse",e)}}const re=[{path:"",component:T,canActivate:[G.a,L.a]},{path:"info/:id",component:(()=>{class e{constructor(e,t,n,i){this.romService=e,this.authService=t,this.router=n,this.route=i}ngOnInit(){this.finishedLoading=!1,this.loading=!0,this.faFileAlt=p.f,this.faLongArrowAltLeft=p.k,this.id=this.route.snapshot.paramMap.get("id"),this.isError=!1,this.rom=new R,this.getRom(this.id)}ngOnDestroy(){this.romInfoSub.unsubscribe()}getRom(e){this.romInfoObs$=this.romService.getRom(e),this.romInfoSub=this.romInfoObs$.subscribe(e=>{e.genre||(e.genre="N/A"),this.rom=e,this.loading=!1,this.isError=!1},e=>{if(this.loading=!1,this.isError=!0,void 0!==e.status)switch(e.status){case 404:this.errStatusCode=404;break;case 401:this.errStatusCode=401;break;case 403:this.errStatusCode=403;break;default:this.errStatusCode=500}m.a.error(e)},()=>this.finishedLoading=!0)}isRomHack(e){return"hack"===e}}return e.\u0275fac=function(t){return new(t||e)(d.Mb(c.a),d.Mb(D.a),d.Mb(o.d),d.Mb(o.a))},e.\u0275cmp=d.Gb({type:e,selectors:[["roms-rom-info"]],decls:3,vars:2,consts:[[1,"p-2"],[3,"loading"],[4,"ngIf"],[1,"rom-info-container"],[1,"rom-info-header-container"],[1,"back-btn-container"],["type","button","aria-label","back","appBtn","","btnType","primary",3,"routerLink"],[3,"icon"],[1,"title-container"],[1,"dummy-container"],["class","rom-info-err-wrapper pt-3",4,"ngIf","ngIfElse"],["romInfo",""],[1,"rom-info-err-wrapper","pt-3"],["appAlert","","alertType","danger",1,"ml-4","mr-4","text-center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"game-title",3,"finishedLoading","gameName","romType"],[1,"game-logo",3,"logoUrl","gameName"],[1,"game-description-title"],[1,"description-icon","mr-3","ml-1",3,"icon"],[1,"mr-1"],[1,"game-description","shadow",3,"description","finishedLoading"],[1,"rom-download",3,"downloadLink"],[1,"mark-favorite",3,"isFavorite","id"],[1,"game-specs",3,"region","dateReleased","genre","generation"],[1,"rom-specs",3,"platform","fileName","fileSize","fileType"]],template:function(e,t){1&e&&(d.Rb(0,"div",0),d.Nb(1,"spinners-gif-spinner",1),d.Gc(2,oe,13,5,"ng-container",2),d.Qb()),2&e&&(d.zb(1),d.oc("loading",t.loading),d.zb(1),d.oc("ngIf",!t.loading))},directives:[h.a,i.o,u.a,o.e,a.a,O.a,i.p,i.q,i.r,U,K,B,W,$,Y,Z],styles:['.rom-info-container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"rom-info-header rom-info-header" "game-title ." "game-logo ." "game-description-title ." "game-description game-specs" "game-description rom-specs" "rom-download mark-favorite";grid-template-columns:2fr 1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(11.75em) fit-content(188px) 3.6rem;margin-left:30px;margin-right:30px}.game-title[_ngcontent-%COMP%]{align-self:start;grid-area:game-title;grid-column:1/-1;grid-row:2/3;justify-self:start}.game-logo[_ngcontent-%COMP%]{grid-area:game-logo;grid-column:1/2;grid-row:3/4}.game-description-title[_ngcontent-%COMP%]{grid-area:game-description-title;grid-column:1/2;grid-row:4/5;margin-top:1rem}.game-description[_ngcontent-%COMP%]{grid-area:game-description;grid-column:1/2;grid-row:5/7}.rom-download[_ngcontent-%COMP%]{grid-area:rom-download;grid-column:1/2}.mark-favorite[_ngcontent-%COMP%], .rom-download[_ngcontent-%COMP%]{grid-row:7/-1;margin-bottom:1rem;margin-top:1rem}.mark-favorite[_ngcontent-%COMP%]{grid-area:mark-favorite;grid-column:2/3;justify-self:end;width:calc(100% - 40px)}.game-specs[_ngcontent-%COMP%]{align-self:start;grid-area:game-specs;grid-column:2/3;grid-row:5/6}.rom-specs[_ngcontent-%COMP%]{align-self:end;grid-area:rom-specs;grid-column:2/3;grid-row:6/7}.rom-info-header-container[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;grid-area:rom-info-header;grid-column:1/3;grid-row:1/2}.back-btn-container[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 0 auto;-webkit-box-ordinal-group:2;order:1}.title-container[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 0 auto;justify-self:center;-webkit-box-ordinal-group:3;order:2}.title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.dummy-container[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 0 auto;flex-basis:40px;-webkit-box-ordinal-group:4;order:3}.rom-info-err-wrapper[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:2/3;margin:0 auto!important}@media only screen and (max-width:388px){.description-icon[_ngcontent-%COMP%]{display:none!important}}@media only screen and (max-width:938px){.rom-info-container[_ngcontent-%COMP%]{grid-template-areas:"rom-info-header" "game-title" "game-logo" "game-description-title" "game-description" "game-specs" "rom-specs" "rom-download";grid-template-columns:1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(19.25em) 15.5rem fit-content(17.5rem) fit-content(5.5rem) fit-content(5.5rem);margin:0 auto}.game-title[_ngcontent-%COMP%]{align-self:center;justify-self:center}.game-logo[_ngcontent-%COMP%]{text-align:center}.game-description-title[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:4/5;text-align:center}.game-description[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:5/6;text-align:center}.mark-favorite[_ngcontent-%COMP%]{grid-row:8/9;justify-self:center;width:100%}.mark-favorite[_ngcontent-%COMP%], .rom-download[_ngcontent-%COMP%]{grid-column:1/-1;margin-bottom:0}.rom-download[_ngcontent-%COMP%]{grid-row:9/-1;margin-top:0}.game-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:6/7;margin-top:0}.rom-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:7/8}.rom-info-header-container[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:start;margin-top:.8rem}}']}),e})(),canActivate:[G.a,L.a]}];let ae=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},imports:[[o.h.forChild(re)],o.h]}),e})();n.d(t,"RomsModule",(function(){return se}));let se=(()=>{class e{}return e.\u0275mod=d.Kb({type:e}),e.\u0275inj=d.Jb({factory:function(t){return new(t||e)},providers:[c.a,D.a],imports:[[i.c,o.h,r.g,a.b,s.a,g.a,ae]]}),e})()}}]);