function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_unsupportedIterableToArray(e,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,n){if(e){if("string"==typeof e)return _arrayLikeToArray(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(e,n):void 0}}function _arrayLikeToArray(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,i=new Array(n);t<n;t++)i[t]=e[t];return i}function _iterableToArrayLimit(e,n){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],i=!0,o=!1,r=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(s){o=!0,r=s}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{gnNr:function(e,n,t){"use strict";t.r(n),t.d(n,"RomsModule",(function(){return Ce}));var i,o=t("ofXK"),r=t("tyNb"),a=t("1kSV"),c=t("6NWb"),s=t("FUS3"),l=t("t52u"),m=t("WjtB"),g=t("Mb37"),d=t("DRYZ"),f=t("fXoL"),p=((i=function(){function e(n){var t=this;_classCallCheck(this,e),this.router=n,this.currentUrl=this.router.url,n.events.subscribe((function(e){e instanceof r.b&&(t.previousUrl=t.currentUrl,t.currentUrl=e.url)}))}return _createClass(e,[{key:"getPreviousUrl",value:function(){return this.previousUrl}}]),e}()).\u0275fac=function(e){return new(e||i)(f.Zb(r.d))},i.\u0275prov=f.Ib({token:i,factory:i.\u0275fac,providedIn:"root"}),i),b=t("wHSu"),u=t("twK/"),h=t("NvMS"),v=t("siFw");function y(e,n){1&e&&f.Ic(0,"Prev")}function w(e,n){1&e&&f.Gc(0,y,1,0,"ng-template",3)}function _(e,n){1&e&&f.Ic(0,"Next")}function P(e,n){1&e&&f.Gc(0,_,1,0,"ng-template",4)}var C,k=((C=function(){function e(){_classCallCheck(this,e),this.paginate=new f.n}return _createClass(e,[{key:"setWidth",value:function(){this.pageWidth=window.innerWidth}},{key:"ngOnInit",value:function(){this.pageWidth=window.innerWidth}},{key:"onPageChange",value:function(e){this.pageSize=this.itemsPerPage*(e-1),this.paginate.emit([this.pageSize,this.currentPage])}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=f.Gb({type:C,selectors:[["roms-pagination"]],hostBindings:function(e,n){1&e&&f.dc("resize",(function(){return n.setWidth()}),!1,f.yc)},inputs:{romsData:"romsData",currentPage:"currentPage",pageSize:"pageSize",itemsPerPage:"itemsPerPage"},outputs:{paginate:"paginate"},decls:4,vars:8,consts:[["id","roms-pagination-container",1,"pt-4","pb-2"],["aria-label","ROMs pagination",3,"directionLinks","collectionSize","pageSize","page","disabled","boundaryLinks","pageChange"],[4,"ngIf"],["ngbPaginationPrevious",""],["ngbPaginationNext",""]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Rb(1,"ngb-pagination",1),f.dc("pageChange",(function(e){return n.currentPage=e}))("pageChange",(function(){return n.onPageChange(n.currentPage)})),f.Gc(2,w,1,0,void 0,2),f.Gc(3,P,1,0,void 0,2),f.Qb(),f.Qb()),2&e&&(f.zb(1),f.oc("directionLinks",n.pageWidth>600&&n.romsData.length>0)("collectionSize",n.romsData.length)("pageSize",n.itemsPerPage)("page",n.currentPage)("disabled",0===n.romsData.length)("boundaryLinks",!1),f.zb(1),f.oc("ngIf",n.pageWidth>600),f.zb(1),f.oc("ngIf",n.pageWidth>600))},directives:[a.i,o.o,a.k,a.j],styles:["#roms-pagination-container[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),C),O=t("FpAq"),R=function e(){_classCallCheck(this,e)},x=t("hdQ0");function M(e,n){if(1&e&&f.Nb(0,"fa-icon",13),2&e){var t=f.gc();f.oc("icon",t.faStar)}}var I,z=function(e){return["info",e]},S=((I=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.faStar=b.m}},{key:"imgAlt",value:function(e){return e.replace(/[\s:]/g,"-").replace(/\xE9/g,"e").replace(/('|[()])/g,"")+"-box-art"}},{key:"fileSizeData",value:function(e){var n=_slicedToArray(x.a.convertRomSize(e),2);return[n[0],n[1]]}},{key:"applyClassesForGameImgSize",value:function(e){return{"oversized-img":["pokemon-green-version-jp-box-art","pokemon-lets-go-pikachu-box-art","pokemon-lets-go-eevee-box-art","pokemon-sword-version-box-art","pokemon-shield-version-box-art"].includes(e.toLowerCase()),"card-img-top box-art-img":!0}}},{key:"romanize",value:function(e){return x.a.convertIntegerToRomanNumeral(e)}}]),e}()).\u0275fac=function(e){return new(e||I)},I.\u0275cmp=f.Gb({type:I,selectors:[["roms-rom"]],inputs:{rom:"rom"},decls:32,vars:14,consts:[[1,"rom","shadow","h-100"],[1,"img-container"],[3,"alt","src","ngClass"],[1,"card-body"],[1,"card-title","text-center","mt-2"],["class","mr-2",3,"icon",4,"ngIf"],[1,"list-group","list-group-flush"],[1,"list-group-item","font-weight-bold","list-grid"],[1,"text-left"],[1,"text-right"],[1,"text-right","generation"],[1,"card-body","card-body-container"],["appBtn","","btnType","primary",3,"routerLink"],[1,"mr-2",3,"icon"]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Rb(1,"div",1),f.Nb(2,"img",2),f.hc(3,"lowercase"),f.Qb(),f.Rb(4,"div",3),f.Rb(5,"h5",4),f.Gc(6,M,1,1,"fa-icon",5),f.Ic(7),f.Qb(),f.Rb(8,"ul",6),f.Rb(9,"li",7),f.Rb(10,"span",8),f.Ic(11,"File Size"),f.Qb(),f.Rb(12,"span",9),f.Ic(13),f.Qb(),f.Qb(),f.Rb(14,"li",7),f.Rb(15,"span",8),f.Ic(16,"File Type"),f.Qb(),f.Rb(17,"span",9),f.Ic(18),f.Qb(),f.Qb(),f.Rb(19,"li",7),f.Rb(20,"span",8),f.Ic(21,"Generation"),f.Qb(),f.Rb(22,"span",10),f.Ic(23),f.Qb(),f.Qb(),f.Rb(24,"li",7),f.Rb(25,"span",8),f.Ic(26,"Platform"),f.Qb(),f.Rb(27,"span",9),f.Ic(28),f.Qb(),f.Qb(),f.Qb(),f.Rb(29,"div",11),f.Rb(30,"a",12),f.Ic(31,"Information"),f.Qb(),f.Qb(),f.Qb(),f.Qb()),2&e&&(f.zb(2),f.oc("alt",f.ic(3,10,n.imgAlt(n.rom.game_name)))("src",n.rom.box_art_url,f.Bc)("ngClass",n.applyClassesForGameImgSize(n.imgAlt(n.rom.game_name))),f.zb(4),f.oc("ngIf",n.rom.is_favorite),f.zb(1),f.Kc(" ",n.rom.game_name," "),f.zb(6),f.Jc(n.fileSizeData(n.rom.file_size).join("")),f.zb(5),f.Jc(n.rom.file_type),f.zb(5),f.Jc(n.romanize(n.rom.generation)),f.zb(5),f.Jc(n.rom.platform),f.zb(2),f.oc("routerLink",f.tc(12,z,n.rom._id)))},directives:[o.m,o.o,r.g,v.a,c.a],pipes:[o.l],styles:[".list-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.card-body-container[_ngcontent-%COMP%]{margin:0 auto;text-align:center;z-index:20}.box-art-img[_ngcontent-%COMP%], .img-container[_ngcontent-%COMP%]{height:calc(30vw + 2.1rem);width:100%}.oversized-img[_ngcontent-%COMP%]{-o-object-fit:cover!important;object-fit:cover!important}@media only screen and (max-width:916px){.img-container[_ngcontent-%COMP%]{margin:0 auto;height:100%!important;padding-top:20px;text-align:center}.box-art-img[_ngcontent-%COMP%]{height:30vw;width:30vw}}"]}),I);function Q(e,n){if(1&e&&(f.Rb(0,"h2",17),f.Ic(1),f.Qb()),2&e){var t=f.gc(2);f.zb(1),f.Kc(" ",t.noRomsMsg," ")}}function N(e,n){1&e&&(f.Rb(0,"div",18),f.Ic(1," Oops, there was an error while trying to load your ROMs. Please try again later. "),f.Qb())}function T(e,n){1&e&&f.Nb(0,"roms-rom",21),2&e&&f.oc("rom",n.$implicit)}function L(e,n){if(1&e&&(f.Rb(0,"div",19),f.Gc(1,T,1,1,"roms-rom",20),f.hc(2,"slice"),f.hc(3,"slice"),f.Qb()),2&e){var t=f.gc(2);f.zb(1),f.oc("ngForOf",f.kc(2,1,f.jc(3,5,t.romsData,t.pageSize),0,t.itemsPerPage))}}function A(e,n){if(1&e){var t=f.Sb();f.Pb(0),f.Rb(1,"div",2),f.Rb(2,"div",3),f.Rb(3,"div",4),f.Nb(4,"div",5),f.Rb(5,"h1",6),f.Ic(6,"ROMs"),f.Qb(),f.Rb(7,"div",7),f.Rb(8,"button",8),f.dc("click",(function(){f.zc(t);var e=f.gc();return e.getRoms(!e.favoritesShown),e.onPageChange([0,1])})),f.Rb(9,"span",9),f.Nb(10,"fa-icon",10),f.Qb(),f.Rb(11,"span",11),f.Ic(12),f.Qb(),f.Qb(),f.Qb(),f.Qb(),f.Nb(13,"hr",12),f.Qb(),f.Pb(14),f.Gc(15,Q,2,1,"h2",13),f.Gc(16,N,2,0,"div",14),f.Ob(),f.Gc(17,L,4,8,"div",15),f.Rb(18,"roms-pagination",16),f.dc("paginate",(function(e){return f.zc(t),f.gc().onPageChange(e)})),f.Qb(),f.Qb(),f.Ob()}if(2&e){var i=f.gc();f.zb(4),f.Fc("flex-basis",i.favoritesShown?88.23:131.8,"px"),f.zb(3),f.Fc("flex-basis",i.favoritesShown?89:132,"px"),f.zb(1),f.oc("disabled",i.isError||i.romsData.length<1&&!i.favoritesShown),f.zb(2),f.oc("icon",i.favoritesShown?i.starSolid:i.starOutline),f.zb(2),f.Jc(i.favoritesShown?"Show All":"Filter Favorites"),f.zb(3),f.oc("ngIf",i.romsData.length<1&&!i.isError),f.zb(1),f.oc("ngIf",i.isError),f.zb(1),f.oc("ngIf",i.romsData.length>0),f.zb(1),f.oc("romsData",i.romsData)("currentPage",i.currentPage)("itemsPerPage",i.itemsPerPage)}}var G,D=((G=function(){function e(n,t,i,o){_classCallCheck(this,e),this.router=n,this.romsService=t,this.viewportScroller=i,this.routerExtService=o}return _createClass(e,[{key:"ngOnInit",value:function(){this.starSolid=b.m,this.starOutline=u.b,this.currentPage=1,this.itemsPerPage=4,this.loading=!0,this.noRomsMsg="",this.limit=35,this.isError=!1,this.romsData=new Array,(!this.routerExtService.getPreviousUrl().includes("/info")&&"/roms"===this.router.url||"complete"!==document.readyState)&&(this.onPageChange([0,1]),e.setPaginationState([0,1,!1])),e.setPaginationState();var n=e.getPaginationState()[2];this.getRoms(n),this.favoritesShown=n||!1}},{key:"ngOnDestroy",value:function(){this.romsSub.unsubscribe()}},{key:"getRoms",value:function(n){var t=this;null!=n&&(this.favoritesShown=!e.getPaginationState()[2],this.romsData=[],this.loading=!0),this.romsObs$=this.romsService.getAllRoms({favorites:n}),this.romsSub=this.romsObs$.subscribe((function(e){t.isError=!1,t.romsData=e,t.loading=!1,t.romsData.length<1&&(t.noRomsMsg=t.favoritesShown?"No Favorite ROMs Found":"No ROMs to Show")}),(function(e){t.isError=!0,t.loading=!1,t.noRomsMsg="",g.a.error(e)}),(function(){t.pageSize=e.getPaginationState()[0],t.currentPage=e.getPaginationState()[1]}))}},{key:"onPageChange",value:function(n){this.pageSize=n[0],this.currentPage=n[1],e.setPaginationState([this.pageSize,this.currentPage,this.favoritesShown]),this.viewportScroller.scrollToPosition([0,0])}}],[{key:"setPaginationState",value:function(e){d.a.getState("pagination_state")||e||d.a.setState("pagination_state",[0,1,!1]),null!=e&&d.a.setState("pagination_state",e)}},{key:"getPaginationState",value:function(){return d.a.getState("pagination_state")}}]),e}()).\u0275fac=function(e){return new(e||G)(f.Mb(r.d),f.Mb(l.a),f.Mb(o.x),f.Mb(p))},G.\u0275cmp=f.Gb({type:G,selectors:[["roms"]],decls:3,vars:2,consts:[[3,"loading"],[4,"ngIf"],[1,"roms-flex-container"],[1,"mt-2","mb-0","roms-heading-container","w-100"],[1,"d-flex","justify-content-between","mt-2"],[1,"dummy-container"],["id","roms-heading"],[1,"favorites-btn-container"],["type","button","appBtn","","btnType","primary","id","favorites-btn",3,"disabled","click"],["id","toggle-favs-responsive"],[3,"icon"],["id","toggle-favs"],[1,"mt-0"],["class","text-center","id","no-roms-heading",4,"ngIf"],["class","mr-5 ml-5 text-center","appAlert","","alertType","danger","id","roms-err",4,"ngIf"],["class","roms-grid-container w-100",4,"ngIf"],[3,"romsData","currentPage","itemsPerPage","paginate"],["id","no-roms-heading",1,"text-center"],["appAlert","","alertType","danger","id","roms-err",1,"mr-5","ml-5","text-center"],[1,"roms-grid-container","w-100"],["class","card card-container border rounded",3,"rom",4,"ngFor","ngForOf"],[1,"card","card-container","border","rounded",3,"rom"]],template:function(e,n){1&e&&(f.Pb(0),f.Nb(1,"spinners-gif-spinner",0),f.Gc(2,A,19,13,"ng-container",1),f.Ob()),2&e&&(f.zb(1),f.oc("loading",n.loading),f.zb(1),f.oc("ngIf",!n.loading))},directives:[h.a,o.o,v.a,c.a,k,O.a,o.n,S],pipes:[o.v],styles:['.roms-grid-container[_ngcontent-%COMP%]{display:grid;grid-gap:4.2rem;grid-template-areas:"rom-1 rom-2" "rom-3 rom-4";grid-template-columns:repeat(2,1fr);grid-template-rows:1fr minmax(-webkit-min-content,auto);grid-template-rows:1fr minmax(min-content,auto);justify-items:center;padding-bottom:.6rem;width:100%}@media only screen and (max-width:916px){.roms-grid-container[_ngcontent-%COMP%]{grid-row-gap:1.4rem;grid-template-areas:"rom-1" "rom-2" "rom-3" "rom-4";grid-template-columns:1fr;grid-template-rows:1fr fit-content(18.75em) fit-content(18.75em) fit-content(18.75em);margin:0 auto}}.roms-flex-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:column;justify-items:center;margin:auto;width:70vw}.roms-heading-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:left}.dummy-container[_ngcontent-%COMP%]{display:none}.favorites-btn-container[_ngcontent-%COMP%]{margin-top:.25rem}@media only screen and (max-width:916px){.dummy-container[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{text-align:center}}#toggle-favs-responsive[_ngcontent-%COMP%]{display:none}#toggle-favs[_ngcontent-%COMP%]{display:inherit}@media only screen and (max-width:600px){#toggle-favs-responsive[_ngcontent-%COMP%]{display:inherit}#toggle-favs[_ngcontent-%COMP%]{display:none}.favorites-btn-container[_ngcontent-%COMP%]{text-align:right}}#no-roms-heading[_ngcontent-%COMP%], #roms-err[_ngcontent-%COMP%]{margin-top:2rem}.card[_ngcontent-%COMP%]{width:100%!important}']}),G),F=t("UTcu"),j=t("Dat7"),E=t("lGQG");function H(e,n){if(1&e&&(f.Rb(0,"span",4),f.Ic(1),f.Qb()),2&e){var t=f.gc(),i=f.xc(5),o=f.xc(7);f.oc("ngbPopover",i)("popoverTitle",o),f.zb(1),f.Kc(" ",t.gameName," ")}}function U(e,n){if(1&e&&f.Ic(0),2&e){var t=f.gc();f.Jc(t.gameName)}}function K(e,n){if(1&e&&(f.Ic(0,"This ROM ("),f.Rb(1,"span",5),f.Ic(2),f.Qb(),f.Ic(3,") is not part of the core series of Pok"),f.Nb(4,"span",6),f.Ic(5,"mon games, it is a "),f.Rb(6,"span",7),f.Ic(7,"ROM hack"),f.Qb(),f.Ic(8,".")),2&e){var t=f.gc();f.zb(2),f.Jc(t.removeRomHackText(t.gameName))}}function B(e,n){1&e&&(f.Rb(0,"span",8),f.Ic(1,"Quick Notice!"),f.Qb())}var J,W,$,Y,Z=((Y=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.romHackTxtIdentifier=/(?:(\s?)(\(ROM Hack\)))/i,this.finishedLoading&&(this.isRomHack="hack"===this.romType)}},{key:"removeRomHackText",value:function(e){return e.replace(this.romHackTxtIdentifier,"")}}]),e}()).\u0275fac=function(e){return new(e||Y)},Y.\u0275cmp=f.Gb({type:Y,selectors:[["roms-info-rom-hack-popup"]],inputs:{romType:"romType",gameName:"gameName",finishedLoading:"finishedLoading"},decls:8,vars:2,consts:[["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle",4,"ngIf","ngIfElse"],["notRomHack",""],["popContent",""],["popTitle",""],["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle"],[1,"underline"],["id","eacute"],[1,"font-italic"],[1,"font-weight-bold"]],template:function(e,n){if(1&e&&(f.Pb(0),f.Gc(1,H,2,3,"span",0),f.Gc(2,U,1,1,"ng-template",null,1,f.Hc),f.Gc(4,K,9,1,"ng-template",null,2,f.Hc),f.Gc(6,B,2,0,"ng-template",null,3,f.Hc),f.Ob()),2&e){var t=f.xc(3);f.zb(1),f.oc("ngIf",n.isRomHack)("ngIfElse",t)}},directives:[o.o,a.o],styles:['@charset "UTF-8";#eacute[_ngcontent-%COMP%]:before{content:"\xe9"}']}),Y),q=(($=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||$)},$.\u0275cmp=f.Gb({type:$,selectors:[["roms-info-game-name"]],inputs:{gameName:"gameName",romType:"romType",finishedLoading:"finishedLoading"},decls:3,vars:3,consts:[[1,"mt-4"],[1,"game-name","mb-4"],[3,"finishedLoading","gameName","romType"]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Rb(1,"h2",1),f.Nb(2,"roms-info-rom-hack-popup",2),f.Qb(),f.Qb()),2&e&&(f.zb(2),f.oc("finishedLoading",n.finishedLoading)("gameName",n.gameName)("romType",n.romType))},directives:[Z],styles:["@media only screen and (max-width:938px){.game-name[_ngcontent-%COMP%]{margin-left:0;text-align:center}}"]}),$),X=((W=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"imgAlt",value:function(e){return e.replace(/[\s:]/g,"-").replace(/\xE9/,"e")+"-logo"}}]),e}()).\u0275fac=function(e){return new(e||W)},W.\u0275cmp=f.Gb({type:W,selectors:[["roms-info-game-logo"]],inputs:{logoUrl:"logoUrl",gameName:"gameName"},decls:3,vars:4,consts:[[1,"text-center","mb-3"],[1,"logo","rounded","img-thumbnail","shadow",3,"src","alt"]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Nb(1,"img",1),f.hc(2,"lowercase"),f.Qb()),2&e&&(f.zb(1),f.oc("src",n.logoUrl,f.Bc)("alt",f.ic(2,2,n.imgAlt(n.gameName))))},pipes:[o.l],styles:[".logo[_ngcontent-%COMP%]{background-color:#fff;height:159px;width:212px}@media only screen and (max-width:938px) and (min-width:489px){.logo[_ngcontent-%COMP%]{height:132px;width:176px}}@media only screen and (max-width:488px) and (min-width:332px){.logo[_ngcontent-%COMP%]{height:100px;width:133.33px}}@media only screen and (max-width:331px){.logo[_ngcontent-%COMP%]{height:81px;width:108px}}"]}),W),V=((J=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.finishedLoading&&this.description&&(this.description=e.changeUrlToLink(this.description))}}],[{key:"changeUrlToLink",value:function(e){var n=/(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gim;if(n.test(e)){var t=e.match(n)[0];return e.replace(t,'<a href="'.concat(t,'" target="_blank" rel="noreferrer">').concat(t,"</a>"))}return e}}]),e}()).\u0275fac=function(e){return new(e||J)},J.\u0275cmp=f.Gb({type:J,selectors:[["roms-info-game-description"]],inputs:{description:"description",finishedLoading:"finishedLoading"},decls:2,vars:1,consts:[[1,"description-container","bg-white","border","rounded"],[1,"description",3,"innerHTML"]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Nb(1,"p",1),f.Qb()),2&e&&(f.zb(1),f.oc("innerHTML",n.description,f.Ac))},styles:[".description-container[_ngcontent-%COMP%]{height:100%;margin-bottom:0;overflow-y:auto;padding:1em 20px 20px;text-align:left!important;word-wrap:break-word}@media only screen and (max-width:938px){.description-container[_ngcontent-%COMP%]{-webkit-clip-path:inset(0 0 0 0)!important;clip-path:inset(0 0 0 0)!important;height:300px;margin-bottom:1rem;padding-bottom:1em!important}}@media only screen and (min-width:938px){.description-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{height:16rem}}"]}),J),ee=t("QTu/");function ne(e,n){1&e&&(f.Rb(0,"div",4),f.Rb(1,"span"),f.Ic(2,"You cannot download this ROM since you are not on a computer"),f.Qb(),f.Qb())}var te,ie,oe,re,ae=((re=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"disableBtnIfMobileOrTablet",value:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)||/Android/i.test(navigator.userAgent)?"5e5c8af0ba33da08279219a0"===JSON.parse(ee.a.getCookie("user")).id?(this.btnDisabled=!1,!1):(this.btnDisabled=!0,!0):(this.btnDisabled=!1,!1)}},{key:"ngOnInit",value:function(){this.faDownload=b.d,this.disableBtnIfMobileOrTablet()}}]),e}()).\u0275fac=function(e){return new(e||re)},re.\u0275cmp=f.Gb({type:re,selectors:[["roms-info-rom-download"]],hostBindings:function(e,n){1&e&&f.dc("resize",(function(){return n.disableBtnIfMobileOrTablet()}),!1,f.yc)},inputs:{downloadLink:"downloadLink"},decls:5,vars:5,consts:[[1,"download-link-wrapper","text-center"],["rel","noreferrer","target","_blank","appBtn","","btnType","success",3,"href"],[1,"mr-2",3,"icon"],["class","p-0 mt-2 no-download-msg","appAlert","","alertType","info",4,"ngIf"],["appAlert","","alertType","info",1,"p-0","mt-2","no-download-msg"]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Rb(1,"a",1),f.Nb(2,"fa-icon",2),f.Ic(3,"Download"),f.Qb(),f.Gc(4,ne,3,0,"div",3),f.Qb()),2&e&&(f.zb(1),f.Eb("disabled",n.btnDisabled),f.oc("href",n.downloadLink,f.Bc),f.zb(1),f.oc("icon",n.faDownload),f.zb(2),f.oc("ngIf",n.disableBtnIfMobileOrTablet()))},directives:[v.a,c.a,o.o,O.a],styles:[".download-link-wrapper[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width:938px){.download-link-wrapper[_ngcontent-%COMP%]{margin-top:.95rem}.no-download-msg[_ngcontent-%COMP%]{margin-bottom:0}}@media only screen and (min-width:938px){.no-download-msg[_ngcontent-%COMP%]{margin-bottom:3rem}}"]}),re),ce=((oe=function(){function e(n){_classCallCheck(this,e),this.romsService=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.faStar=b.m}},{key:"patchFavoriteRom",value:function(){var e=this,n={is_favorite:!this.isFavorite};this.isFavorite=n.is_favorite,this.romsService.patchRom(this.id,n).subscribe((function(n){e.isFavorite!==n.is_favorite&&(e.isFavorite=n.is_favorite)}),(function(e){return g.a.error(e)}))}}]),e}()).\u0275fac=function(e){return new(e||oe)(f.Mb(l.a))},oe.\u0275cmp=f.Gb({type:oe,selectors:[["roms-info-mark-favorite"]],inputs:{isFavorite:"isFavorite",id:"id"},decls:5,vars:3,consts:[[1,"mark-favorite-container","d-flex","flex-row","bg-light","border","rounded","shadow"],["for","is-favorite",1,"mb-0","mt-1"],[1,"mr-2","ml-2",3,"icon"],["type","checkbox","id","is-favorite","name","is-favorite",1,"is-favorite","ml-5",3,"checked","change"]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Rb(1,"label",1),f.Nb(2,"fa-icon",2),f.Ic(3),f.Qb(),f.Rb(4,"input",3),f.dc("change",(function(){return n.patchFavoriteRom()})),f.Qb(),f.Qb()),2&e&&(f.zb(2),f.oc("icon",n.faStar),f.zb(1),f.Kc(" ",n.isFavorite?"Unmark":"Mark"," as Favorite "),f.zb(1),f.oc("checked",n.isFavorite))},directives:[c.a],styles:[".is-favorite[_ngcontent-%COMP%]{cursor:pointer!important;height:2rem!important;width:2rem!important}.mark-favorite-container[_ngcontent-%COMP%]{justify-content:space-between;padding:.15rem}@media only screen and (max-width:938px){.mark-favorite-container[_ngcontent-%COMP%]{justify-content:center;padding:.5rem}}"]}),oe),se=((ie=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.faGamepad=b.g}}]),e}()).\u0275fac=function(e){return new(e||ie)},ie.\u0275cmp=f.Gb({type:ie,selectors:[["roms-info-game-specs"]],inputs:{genre:"genre",generation:"generation",region:"region",dateReleased:"dateReleased"},decls:14,vars:8,consts:[[1,"game-list-container"],[1,"list-group","shadow"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Rb(1,"ul",1),f.Rb(2,"li",2),f.Nb(3,"fa-icon",3),f.Ic(4,"Game Info "),f.Qb(),f.Rb(5,"li",4),f.Ic(6),f.hc(7,"date"),f.Qb(),f.Rb(8,"li",4),f.Ic(9),f.Qb(),f.Rb(10,"li",4),f.Ic(11),f.Qb(),f.Rb(12,"li",4),f.Ic(13),f.Qb(),f.Qb(),f.Qb()),2&e&&(f.zb(3),f.oc("icon",n.faGamepad),f.zb(3),f.Kc(" Date Released: ",f.jc(7,5,n.dateReleased,"MM/dd/yyyy")," "),f.zb(3),f.Kc("Generation: ",n.generation,""),f.zb(2),f.Kc("Genre: ",n.genre,""),f.zb(2),f.Kc("Region: ",n.region,""))},directives:[c.a],pipes:[o.e],styles:[".game-list-container[_ngcontent-%COMP%]{margin-bottom:.88rem;margin-left:2.5rem;margin-top:0}@media only screen and (max-width:938px){.game-list-container[_ngcontent-%COMP%]{margin:0 0 1.5rem!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),ie),le=((te=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.faCompactDisc=b.c}},{key:"fileSizeData",value:function(e){var n=_slicedToArray(x.a.convertRomSize(e),2);return[n[0],n[1]]}}]),e}()).\u0275fac=function(e){return new(e||te)},te.\u0275cmp=f.Gb({type:te,selectors:[["roms-info-rom-specs"]],inputs:{fileType:"fileType",fileSize:"fileSize",fileName:"fileName",platform:"platform"},decls:13,vars:5,consts:[[1,"rom-list-container"],[1,"list-group","shadow"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Rb(1,"ul",1),f.Rb(2,"li",2),f.Nb(3,"fa-icon",3),f.Ic(4,"ROM Info "),f.Qb(),f.Rb(5,"li",4),f.Ic(6),f.Qb(),f.Rb(7,"li",4),f.Ic(8),f.Qb(),f.Rb(9,"li",4),f.Ic(10),f.Qb(),f.Rb(11,"li",4),f.Ic(12),f.Qb(),f.Qb(),f.Qb()),2&e&&(f.zb(3),f.oc("icon",n.faCompactDisc),f.zb(3),f.Kc("File Name: ",n.fileName,""),f.zb(2),f.Kc(" File Size: ",n.fileSizeData(n.fileSize).join("")," "),f.zb(2),f.Kc("File Type: ",n.fileType,""),f.zb(2),f.Kc("Platform: ",n.platform,""))},directives:[c.a],styles:[".rom-list-container[_ngcontent-%COMP%]{margin-bottom:0;margin-left:2.5rem;margin-top:.88rem}@media only screen and (max-width:938px){.rom-list-container[_ngcontent-%COMP%]{margin:.75rem 0 0!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),te);function me(e,n){1&e&&(f.Pb(0),f.Ic(1," You're not logged in and thus cannot access this ROM. "),f.Ob())}function ge(e,n){1&e&&(f.Pb(0),f.Ic(1," You cannot access this user's ROM. "),f.Ob())}function de(e,n){1&e&&(f.Pb(0),f.Ic(1," Sorry, it looks like this ROM doesn't exist. "),f.Ob())}function fe(e,n){1&e&&(f.Pb(0),f.Ic(1," Oops, there was an error while trying to load your ROM information. Please try again later. "),f.Ob())}function pe(e,n){if(1&e&&(f.Rb(0,"div",12),f.Rb(1,"div",13),f.Pb(2,14),f.Gc(3,me,2,0,"ng-container",15),f.Gc(4,ge,2,0,"ng-container",15),f.Gc(5,de,2,0,"ng-container",15),f.Gc(6,fe,2,0,"ng-container",16),f.Ob(),f.Qb(),f.Qb()),2&e){var t=f.gc(2);f.zb(2),f.oc("ngSwitch",t.errStatusCode),f.zb(1),f.oc("ngSwitchCase",401),f.zb(1),f.oc("ngSwitchCase",403),f.zb(1),f.oc("ngSwitchCase",404)}}function be(e,n){if(1&e&&(f.Nb(0,"roms-info-game-name",17),f.Nb(1,"roms-info-game-logo",18),f.Rb(2,"div",19),f.Rb(3,"h4"),f.Nb(4,"fa-icon",20),f.Ic(5),f.Rb(6,"span",21),f.Ic(7,"Description"),f.Qb(),f.Qb(),f.Qb(),f.Nb(8,"roms-info-game-description",22),f.Nb(9,"roms-info-rom-download",23),f.Nb(10,"roms-info-mark-favorite",24),f.Nb(11,"roms-info-game-specs",25),f.Nb(12,"roms-info-rom-specs",26)),2&e){var t=f.gc(2);f.oc("finishedLoading",t.finishedLoading)("gameName",t.rom.game_name)("romType",t.rom.rom_type),f.zb(1),f.oc("logoUrl",t.rom.logo_url)("gameName",t.rom.game_name),f.zb(3),f.oc("icon",t.faFileAlt),f.zb(1),f.Jc(t.isRomHack(t.rom.rom_type)?"":"Pokemon.com "),f.zb(3),f.oc("description",t.rom.description)("finishedLoading",t.finishedLoading),f.zb(1),f.oc("downloadLink",t.rom.download_link),f.zb(1),f.oc("isFavorite",t.rom.is_favorite)("id",t.rom._id),f.zb(1),f.oc("region",t.rom.region)("dateReleased",t.rom.date_released)("genre",t.rom.genre)("generation",t.rom.generation),f.zb(1),f.oc("platform",t.rom.platform)("fileName",t.rom.file_name)("fileSize",t.rom.file_size)("fileType",t.rom.file_type)}}var ue=function(){return["/","roms"]};function he(e,n){if(1&e&&(f.Pb(0),f.Rb(1,"div",3),f.Rb(2,"div",4),f.Rb(3,"div",5),f.Rb(4,"button",6),f.Nb(5,"fa-icon",7),f.Qb(),f.Qb(),f.Rb(6,"div",8),f.Rb(7,"h1"),f.Ic(8,"ROM Info"),f.Qb(),f.Qb(),f.Nb(9,"div",9),f.Qb(),f.Gc(10,pe,7,4,"div",10),f.Gc(11,be,13,20,"ng-template",null,11,f.Hc),f.Qb(),f.Ob()),2&e){var t=f.xc(12),i=f.gc();f.zb(4),f.oc("routerLink",f.sc(4,ue)),f.zb(1),f.oc("icon",i.faLongArrowAltLeft),f.zb(5),f.oc("ngIf",i.isError)("ngIfElse",t)}}var ve,ye,we,_e=[{path:"",component:D,canActivate:[F.a,j.a]},{path:"info/:id",component:(ve=function(){function e(n,t,i,o){_classCallCheck(this,e),this.romService=n,this.authService=t,this.router=i,this.route=o}return _createClass(e,[{key:"ngOnInit",value:function(){this.finishedLoading=!1,this.loading=!0,this.faFileAlt=b.f,this.faLongArrowAltLeft=b.k,this.id=this.route.snapshot.paramMap.get("id"),this.isError=!1,this.rom=new R,this.getRom(this.id)}},{key:"ngOnDestroy",value:function(){this.romInfoSub.unsubscribe()}},{key:"getRom",value:function(e){var n=this;this.romInfoObs$=this.romService.getRom(e),this.romInfoSub=this.romInfoObs$.subscribe((function(e){e.genre||(e.genre="N/A"),n.rom=e,n.loading=!1,n.isError=!1}),(function(e){if(n.loading=!1,n.isError=!0,void 0!==e.status)switch(e.status){case 404:n.errStatusCode=404;break;case 401:n.errStatusCode=401;break;case 403:n.errStatusCode=403;break;default:n.errStatusCode=500}g.a.error(e)}),(function(){return n.finishedLoading=!0}))}},{key:"isRomHack",value:function(e){return"hack"===e}}]),e}(),ve.\u0275fac=function(e){return new(e||ve)(f.Mb(l.a),f.Mb(E.a),f.Mb(r.d),f.Mb(r.a))},ve.\u0275cmp=f.Gb({type:ve,selectors:[["roms-rom-info"]],decls:3,vars:2,consts:[[1,"p-2"],[3,"loading"],[4,"ngIf"],[1,"rom-info-container"],[1,"rom-info-header-container"],[1,"back-btn-container"],["type","button","aria-label","back","appBtn","","btnType","primary",3,"routerLink"],[3,"icon"],[1,"title-container"],[1,"dummy-container"],["class","rom-info-err-wrapper pt-3",4,"ngIf","ngIfElse"],["romInfo",""],[1,"rom-info-err-wrapper","pt-3"],["appAlert","","alertType","danger",1,"ml-4","mr-4","text-center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"game-title",3,"finishedLoading","gameName","romType"],[1,"game-logo",3,"logoUrl","gameName"],[1,"game-description-title"],[1,"description-icon","mr-3","ml-1",3,"icon"],[1,"mr-1"],[1,"game-description","shadow",3,"description","finishedLoading"],[1,"rom-download",3,"downloadLink"],[1,"mark-favorite",3,"isFavorite","id"],[1,"game-specs",3,"region","dateReleased","genre","generation"],[1,"rom-specs",3,"platform","fileName","fileSize","fileType"]],template:function(e,n){1&e&&(f.Rb(0,"div",0),f.Nb(1,"spinners-gif-spinner",1),f.Gc(2,he,13,5,"ng-container",2),f.Qb()),2&e&&(f.zb(1),f.oc("loading",n.loading),f.zb(1),f.oc("ngIf",!n.loading))},directives:[h.a,o.o,v.a,r.e,c.a,O.a,o.p,o.q,o.r,q,X,V,ae,ce,se,le],styles:['.rom-info-container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"rom-info-header rom-info-header" "game-title ." "game-logo ." "game-description-title ." "game-description game-specs" "game-description rom-specs" "rom-download mark-favorite";grid-template-columns:2fr 1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(11.75em) fit-content(188px) 3.6rem;margin-left:30px;margin-right:30px}.game-title[_ngcontent-%COMP%]{align-self:start;grid-area:game-title;grid-column:1/-1;grid-row:2/3;justify-self:start}.game-logo[_ngcontent-%COMP%]{grid-area:game-logo;grid-column:1/2;grid-row:3/4}.game-description-title[_ngcontent-%COMP%]{grid-area:game-description-title;grid-column:1/2;grid-row:4/5;margin-top:1rem}.game-description[_ngcontent-%COMP%]{grid-area:game-description;grid-column:1/2;grid-row:5/7}.rom-download[_ngcontent-%COMP%]{grid-area:rom-download;grid-column:1/2}.mark-favorite[_ngcontent-%COMP%], .rom-download[_ngcontent-%COMP%]{grid-row:7/-1;margin-bottom:1rem;margin-top:1rem}.mark-favorite[_ngcontent-%COMP%]{grid-area:mark-favorite;grid-column:2/3;justify-self:end;width:calc(100% - 40px)}.game-specs[_ngcontent-%COMP%]{align-self:start;grid-area:game-specs;grid-column:2/3;grid-row:5/6}.rom-specs[_ngcontent-%COMP%]{align-self:end;grid-area:rom-specs;grid-column:2/3;grid-row:6/7}.rom-info-header-container[_ngcontent-%COMP%]{align-items:center;display:flex;flex-direction:row;grid-area:rom-info-header;grid-column:1/3;grid-row:1/2}.back-btn-container[_ngcontent-%COMP%]{flex:2 0 auto;order:1}.title-container[_ngcontent-%COMP%]{flex:2 0 auto;justify-self:center;order:2}.title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.dummy-container[_ngcontent-%COMP%]{flex:2 0 auto;flex-basis:40px;order:3}.rom-info-err-wrapper[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:2/3;margin:0 auto!important}@media only screen and (max-width:388px){.description-icon[_ngcontent-%COMP%]{display:none!important}}@media only screen and (max-width:938px){.rom-info-container[_ngcontent-%COMP%]{grid-template-areas:"rom-info-header" "game-title" "game-logo" "game-description-title" "game-description" "game-specs" "rom-specs" "rom-download";grid-template-columns:1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(19.25em) 15.5rem fit-content(17.5rem) fit-content(5.5rem) fit-content(5.5rem);margin:0 auto}.game-title[_ngcontent-%COMP%]{align-self:center;justify-self:center}.game-logo[_ngcontent-%COMP%]{text-align:center}.game-description-title[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:4/5;text-align:center}.game-description[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:5/6;text-align:center}.mark-favorite[_ngcontent-%COMP%]{grid-row:8/9;justify-self:center;width:100%}.mark-favorite[_ngcontent-%COMP%], .rom-download[_ngcontent-%COMP%]{grid-column:1/-1;margin-bottom:0}.rom-download[_ngcontent-%COMP%]{grid-row:9/-1;margin-top:0}.game-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:6/7;margin-top:0}.rom-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:7/8}.rom-info-header-container[_ngcontent-%COMP%]{align-items:start;margin-top:.8rem}}']}),ve),canActivate:[F.a,j.a]}],Pe=((we=function e(){_classCallCheck(this,e)}).\u0275mod=f.Kb({type:we}),we.\u0275inj=f.Jb({factory:function(e){return new(e||we)},imports:[[r.h.forChild(_e)],r.h]}),we),Ce=((ye=function e(){_classCallCheck(this,e)}).\u0275mod=f.Kb({type:ye}),ye.\u0275inj=f.Jb({factory:function(e){return new(e||ye)},providers:[l.a,E.a],imports:[[o.c,r.h,a.g,c.b,s.a,m.a,Pe]]}),ye)}}]);