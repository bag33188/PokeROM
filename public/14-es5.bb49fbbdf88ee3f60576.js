function _slicedToArray(e,n){return _arrayWithHoles(e)||_iterableToArrayLimit(e,n)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function _iterableToArrayLimit(e,n){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)){var t=[],i=!0,o=!1,r=void 0;try{for(var a,c=e[Symbol.iterator]();!(i=(a=c.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(s){o=!0,r=s}finally{try{i||null==c.return||c.return()}finally{if(o)throw r}}return t}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,n,t){return n&&_defineProperties(e.prototype,n),t&&_defineProperties(e,t),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{gnNr:function(e,n,t){"use strict";t.r(n);var i=t("ofXK"),o=t("tyNb"),r=t("1kSV"),a=t("6NWb"),c=t("wHSu"),s=t("hdQ0"),m=t("fXoL"),g=t("siFw");function l(e,n){if(1&e&&m.Mb(0,"fa-icon",12),2&e){var t=m.gc();m.nc("icon",t.faStar)}}var d,b,f,p,u=function(e){return["info",e]},h=((p=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.faInfo=c.i,this.faStar=c.n}},{key:"imgAlt",value:function(e){return"".concat(e.replace(/[\s:]/g,"-").replace(/\xE9/g,"e").replace(/('|[()])/g,""),"-box-art")}},{key:"fileSizeData",value:function(e){var n=_slicedToArray(s.a.convertRomSize(e),2);return[n[0],n[1]]}},{key:"applyClassesForGameImgSize",value:function(e){return["pokemon-green-version-jp-box-art","pokemon-lets-go-pikachu-box-art","pokemon-lets-go-eevee-box-art","pokemon-sword-version-box-art","pokemon-shield-version-box-art"].includes(e.toLowerCase())?{"oversized-img":!0,"card-img-top box-art-img":!0}:{"oversized-img":!1,"card-img-top box-art-img":!0}}},{key:"romanize",value:function(e){return s.a.convertIntegerToRomanNumeral(e)}}]),e}()).\u0275fac=function(e){return new(e||p)},p.\u0275cmp=m.Fb({type:p,selectors:[["roms-rom"]],inputs:{rom:"rom"},decls:32,vars:14,consts:[[1,"rom"],[1,"img-container"],[3,"alt","src","ngClass"],[1,"card-body"],[1,"card-title","text-center","mt-2"],["class","mr-2",3,"icon",4,"ngIf"],[1,"list-group","list-group-flush"],[1,"list-group-item","font-weight-bold","list-grid"],[1,"text-right"],[1,"text-right","generation"],[1,"card-body","card-body-container"],["appBtn","","btnType","primary",3,"routerLink"],[1,"mr-2",3,"icon"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Rb(1,"div",1),m.Mb(2,"img",2),m.hc(3,"lowercase"),m.Pb(),m.Rb(4,"div",3),m.Rb(5,"h5",4),m.Fc(6,l,1,1,"fa-icon",5),m.Hc(7),m.Pb(),m.Rb(8,"ul",6),m.Rb(9,"li",7),m.Rb(10,"span"),m.Hc(11,"File Size"),m.Pb(),m.Rb(12,"span",8),m.Hc(13),m.Pb(),m.Pb(),m.Rb(14,"li",7),m.Rb(15,"span"),m.Hc(16,"File Type"),m.Pb(),m.Rb(17,"span",8),m.Hc(18),m.Pb(),m.Pb(),m.Rb(19,"li",7),m.Rb(20,"span"),m.Hc(21,"Generation"),m.Pb(),m.Rb(22,"span",9),m.Hc(23),m.Pb(),m.Pb(),m.Rb(24,"li",7),m.Rb(25,"span"),m.Hc(26,"Platform"),m.Pb(),m.Rb(27,"span",8),m.Hc(28),m.Pb(),m.Pb(),m.Pb(),m.Rb(29,"div",10),m.Rb(30,"a",11),m.Hc(31,"Information"),m.Pb(),m.Pb(),m.Pb(),m.Pb()),2&e&&(m.xb(2),m.nc("alt",m.ic(3,10,n.imgAlt(n.rom.game_name)))("src",n.rom.box_art_url,m.zc)("ngClass",n.applyClassesForGameImgSize(n.imgAlt(n.rom.game_name))),m.xb(4),m.nc("ngIf",n.rom.is_favorite),m.xb(1),m.Jc(" ",n.rom.game_name," "),m.xb(6),m.Ic(n.fileSizeData(n.rom.file_size).join("")),m.xb(5),m.Ic(n.rom.file_type),m.xb(5),m.Ic(n.romanize(n.rom.generation)),m.xb(5),m.Ic(n.rom.platform),m.xb(2),m.nc("routerLink",m.rc(12,u,n.rom._id)))},directives:[i.m,i.o,o.f,g.a,a.a],pipes:[i.l],styles:[".list-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr}.card-body-container[_ngcontent-%COMP%]{margin:0 auto;text-align:center;z-index:20}.box-art-img[_ngcontent-%COMP%], .img-container[_ngcontent-%COMP%]{height:calc(100vw - (70vw - 2.5rem));width:calc(100vw - (70vw - 2.5rem))}.oversized-img[_ngcontent-%COMP%]{-o-object-fit:cover!important;object-fit:cover!important}@media only screen and (max-width:916px){.img-container[_ngcontent-%COMP%]{margin:0 auto;padding-top:20px;text-align:center}.box-art-img[_ngcontent-%COMP%]{height:32vw;width:32vw}}"]}),p),v=((f=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.faGamepad=c.g}}]),e}()).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=m.Fb({type:f,selectors:[["roms-info-game-specs"]],inputs:{genre:"genre",generation:"generation",region:"region",dateReleased:"dateReleased"},decls:14,vars:8,consts:[[1,"game-list-container"],[1,"list-group"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Rb(1,"ul",1),m.Rb(2,"li",2),m.Mb(3,"fa-icon",3),m.Hc(4,"Game Info "),m.Pb(),m.Rb(5,"li",4),m.Hc(6),m.hc(7,"date"),m.Pb(),m.Rb(8,"li",4),m.Hc(9),m.Pb(),m.Rb(10,"li",4),m.Hc(11),m.Pb(),m.Rb(12,"li",4),m.Hc(13),m.Pb(),m.Pb(),m.Pb()),2&e&&(m.xb(3),m.nc("icon",n.faGamepad),m.xb(3),m.Jc(" Date Released: ",m.jc(7,5,n.dateReleased,"MM/dd/yyyy")," "),m.xb(3),m.Jc("Generation: ",n.generation,""),m.xb(2),m.Jc("Genre: ",n.genre,""),m.xb(2),m.Jc("Region: ",n.region,""))},directives:[a.a],pipes:[i.e],styles:[".game-list-container[_ngcontent-%COMP%]{margin-bottom:.88rem;margin-left:2.5rem;margin-top:0}@media only screen and (max-width:938px){.game-list-container[_ngcontent-%COMP%]{margin:0 0 1.5rem!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),f),P=((b=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.finishedLoading&&this.description&&(this.description=e.changeUrlToLink(this.description))}}],[{key:"changeUrlToLink",value:function(e){var n=/(?:(http(s)?):\/\/(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/gim;if(n.test(e)){var t=e.match(n)[0];return e.replace(t,'<a href="'.concat(t,'" target="_blank" rel="noreferrer">').concat(t,"</a>"))}return e}}]),e}()).\u0275fac=function(e){return new(e||b)},b.\u0275cmp=m.Fb({type:b,selectors:[["roms-info-game-description"]],inputs:{description:"description",finishedLoading:"finishedLoading"},decls:2,vars:1,consts:[[1,"description-container","bg-white","border","rounded"],[1,"description",3,"innerHTML"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Mb(1,"p",1),m.Pb()),2&e&&(m.xb(1),m.nc("innerHTML",n.description,m.yc))},styles:[".description-container[_ngcontent-%COMP%]{height:100%;margin-bottom:0;overflow-y:auto;padding:1em 20px 20px;text-align:left!important;word-wrap:break-word}@media only screen and (max-width:938px){.description-container[_ngcontent-%COMP%]{-webkit-clip-path:inset(0 0 0 0)!important;clip-path:inset(0 0 0 0)!important;height:300px;margin-bottom:1rem;padding-bottom:1em!important}}@media only screen and (min-width:938px){.description-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{height:16rem}}"]}),b),w=((d=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"imgAlt",value:function(e){return"".concat(e.replace(/[\s:]/g,"-").replace(/\xE9/,"e"),"-logo")}}]),e}()).\u0275fac=function(e){return new(e||d)},d.\u0275cmp=m.Fb({type:d,selectors:[["roms-info-game-logo"]],inputs:{logoUrl:"logoUrl",gameName:"gameName"},decls:3,vars:4,consts:[[1,"text-center","mb-3"],[1,"logo","rounded","img-thumbnail",3,"src","alt"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Mb(1,"img",1),m.hc(2,"lowercase"),m.Pb()),2&e&&(m.xb(1),m.nc("src",n.logoUrl,m.zc)("alt",m.ic(2,2,n.imgAlt(n.gameName))))},pipes:[i.l],styles:[".logo[_ngcontent-%COMP%]{background-color:#fff;height:9.9375em;width:13.25em}@media only screen and (max-width:938px)and (min-width:489px){.logo[_ngcontent-%COMP%]{height:8.25em;width:11em}}@media only screen and (max-width:488px)and (min-width:332px){.logo[_ngcontent-%COMP%]{height:6.25em;width:8.333125em}}@media only screen and (max-width:331px){.logo[_ngcontent-%COMP%]{height:5.0625em;width:6.75em}}"]}),d);function x(e,n){if(1&e&&(m.Rb(0,"span",4),m.Hc(1),m.Pb()),2&e){var t=m.gc(),i=m.vc(5),o=m.vc(7);m.nc("ngbPopover",i)("popoverTitle",o),m.xb(1),m.Jc(" ",t.gameName," ")}}function y(e,n){if(1&e&&m.Hc(0),2&e){var t=m.gc();m.Ic(t.gameName)}}function k(e,n){if(1&e&&(m.Hc(0,"This ROM ("),m.Rb(1,"span",5),m.Hc(2),m.Pb(),m.Hc(3,") is not part of the core series of Pok"),m.Mb(4,"span",6),m.Hc(5,"mon games, it is a "),m.Rb(6,"span",7),m.Hc(7,"ROM hack"),m.Pb(),m.Hc(8,".")),2&e){var t=m.gc();m.xb(2),m.Ic(t.removeRomHackText(t.gameName))}}function _(e,n){1&e&&(m.Rb(0,"span",8),m.Hc(1,"Quick Notice!"),m.Pb())}var C,M,O,R=((O=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.romHackTxtIdentifier=/(?:(\s?)(\(ROM Hack\)))/i,this.finishedLoading&&(this.isRomHack="hack"===this.romType)}},{key:"removeRomHackText",value:function(e){return e.replace(this.romHackTxtIdentifier,"")}}]),e}()).\u0275fac=function(e){return new(e||O)},O.\u0275cmp=m.Fb({type:O,selectors:[["roms-info-rom-hack-popup"]],inputs:{romType:"romType",gameName:"gameName",finishedLoading:"finishedLoading"},decls:8,vars:2,consts:[["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle",4,"ngIf","ngIfElse"],["notRomHack",""],["popContent",""],["popTitle",""],["placement","bottom","triggers","mouseenter:mouseleave",3,"ngbPopover","popoverTitle"],[1,"underline"],["id","eacute"],[1,"font-italic"],[1,"font-weight-bold"]],template:function(e,n){if(1&e&&(m.Ob(0),m.Fc(1,x,2,3,"span",0),m.Fc(2,y,1,1,"ng-template",null,1,m.Gc),m.Fc(4,k,9,1,"ng-template",null,2,m.Gc),m.Fc(6,_,2,0,"ng-template",null,3,m.Gc),m.Nb()),2&e){var t=m.vc(3);m.xb(1),m.nc("ngIf",n.isRomHack)("ngIfElse",t)}},directives:[i.o,r.p],styles:['#eacute[_ngcontent-%COMP%]::before{content:"\xe9"}']}),O),S=((M=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||M)},M.\u0275cmp=m.Fb({type:M,selectors:[["roms-info-game-name"]],inputs:{gameName:"gameName",romType:"romType",finishedLoading:"finishedLoading"},decls:3,vars:3,consts:[[1,"mt-4"],[1,"game-name","mb-4"],[3,"finishedLoading","gameName","romType"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Rb(1,"h2",1),m.Mb(2,"roms-info-rom-hack-popup",2),m.Pb(),m.Pb()),2&e&&(m.xb(2),m.nc("finishedLoading",n.finishedLoading)("gameName",n.gameName)("romType",n.romType))},directives:[R],styles:["@media only screen and (max-width:938px){.game-name[_ngcontent-%COMP%]{margin-left:0;text-align:center}}"]}),M),I=((C=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"ngOnInit",value:function(){this.faCompactDisc=c.c}},{key:"fileSizeData",value:function(e){var n=_slicedToArray(s.a.convertRomSize(e),2);return[n[0],n[1]]}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=m.Fb({type:C,selectors:[["roms-info-rom-specs"]],inputs:{fileType:"fileType",fileSize:"fileSize",fileName:"fileName",platform:"platform"},decls:13,vars:5,consts:[[1,"rom-list-container"],[1,"list-group"],[1,"list-group-item","active","bg-red"],[1,"mr-2",3,"icon"],[1,"list-group-item"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Rb(1,"ul",1),m.Rb(2,"li",2),m.Mb(3,"fa-icon",3),m.Hc(4,"ROM Info "),m.Pb(),m.Rb(5,"li",4),m.Hc(6),m.Pb(),m.Rb(7,"li",4),m.Hc(8),m.Pb(),m.Rb(9,"li",4),m.Hc(10),m.Pb(),m.Rb(11,"li",4),m.Hc(12),m.Pb(),m.Pb(),m.Pb()),2&e&&(m.xb(3),m.nc("icon",n.faCompactDisc),m.xb(3),m.Jc("File Name: ",n.fileName,""),m.xb(2),m.Jc(" File Size: ",n.fileSizeData(n.fileSize).join("")," "),m.xb(2),m.Jc("File Type: ",n.fileType,""),m.xb(2),m.Jc("Platform: ",n.platform,""))},directives:[a.a],styles:[".rom-list-container[_ngcontent-%COMP%]{margin-bottom:0;margin-left:2.5rem;margin-top:.88rem}@media only screen and (max-width:938px){.rom-list-container[_ngcontent-%COMP%]{margin:.75rem 0 0!important}}.bg-red[_ngcontent-%COMP%]{background-color:#d6300a;border:#8b0000}"]}),C),F=t("FpAq");function H(e,n){1&e&&(m.Rb(0,"div",4),m.Rb(1,"span"),m.Hc(2,"You cannot download this ROM since you are not on a computer"),m.Pb(),m.Pb())}var T,L=((T=function(){function e(){_classCallCheck(this,e)}return _createClass(e,[{key:"disableBtnIfMobileOrTablet",value:function(){return/iPhone|iPad|iPod/i.test(navigator.userAgent)||/Android/i.test(navigator.userAgent)?(this.btnDisabled=!0,!0):(this.btnDisabled=!1,!1)}},{key:"ngOnInit",value:function(){this.faDownload=c.d,this.disableBtnIfMobileOrTablet()}}]),e}()).\u0275fac=function(e){return new(e||T)},T.\u0275cmp=m.Fb({type:T,selectors:[["roms-info-rom-download"]],hostBindings:function(e,n,t){1&e&&m.dc("resize",(function(e){return n.disableBtnIfMobileOrTablet()}),!1,m.wc)},inputs:{downloadLink:"downloadLink"},decls:5,vars:4,consts:[[1,"download-link-wrapper","text-center"],["rel","noreferrer","target","_blank","appBtn","","btnType","success",3,"href"],[1,"mr-2",3,"icon"],["class","p-0 mt-2 no-download-msg","appAlert","","alertType","info",4,"ngIf"],["appAlert","","alertType","info",1,"p-0","mt-2","no-download-msg"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Rb(1,"a",1),m.Mb(2,"fa-icon",2),m.Hc(3,"Download"),m.Pb(),m.Fc(4,H,3,0,"div",3),m.Pb()),2&e&&(m.xb(1),m.Db("disabled",n.btnDisabled),m.nc("href",n.downloadLink,m.zc),m.xb(1),m.nc("icon",n.faDownload),m.xb(2),m.nc("ngIf",n.disableBtnIfMobileOrTablet()))},directives:[g.a,a.a,i.o,F.a],styles:[".download-link-wrapper[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{width:100%}@media only screen and (max-width:938px){.download-link-wrapper[_ngcontent-%COMP%]{margin-top:.95rem}.no-download-msg[_ngcontent-%COMP%]{margin-bottom:0}}@media only screen and (min-width:938px){.no-download-msg[_ngcontent-%COMP%]{margin-bottom:3rem}}"]}),T),z=t("FUS3"),N=t("t52u"),A=t("WjtB"),D=t("ktc5"),j=t.n(D),E=t("Mb37"),J=t("NvMS");function G(e,n){1&e&&m.Hc(0,"Prev")}function W(e,n){1&e&&m.Fc(0,G,1,0,"ng-template",3)}function B(e,n){1&e&&m.Hc(0,"Next")}function U(e,n){1&e&&m.Fc(0,B,1,0,"ng-template",4)}var $,q=(($=function(){function e(){_classCallCheck(this,e),this.paginate=new m.m}return _createClass(e,[{key:"setWidth",value:function(){this.pageWidth=window.innerWidth}},{key:"ngOnInit",value:function(){this.pageWidth=window.innerWidth}},{key:"onPageChange",value:function(e){this.pageSize=this.itemsPerPage*(e-1),this.paginate.emit([this.pageSize,this.currentPage])}}]),e}()).\u0275fac=function(e){return new(e||$)},$.\u0275cmp=m.Fb({type:$,selectors:[["roms-pagination"]],hostBindings:function(e,n,t){1&e&&m.dc("resize",(function(e){return n.setWidth()}),!1,m.wc)},inputs:{romsData:"romsData",currentPage:"currentPage",pageSize:"pageSize",itemsPerPage:"itemsPerPage"},outputs:{paginate:"paginate"},decls:4,vars:8,consts:[["id","roms-pagination-container",1,"pt-4","pb-2"],["aria-label","ROMs pagination","size","-",3,"directionLinks","collectionSize","pageSize","page","disabled","boundaryLinks","pageChange"],[4,"ngIf"],["ngbPaginationPrevious",""],["ngbPaginationNext",""]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Rb(1,"ngb-pagination",1),m.dc("pageChange",(function(e){return n.currentPage=e})),m.dc("pageChange",(function(e){return n.onPageChange(n.currentPage)})),m.Fc(2,W,1,0,void 0,2),m.Fc(3,U,1,0,void 0,2),m.Pb(),m.Pb()),2&e&&(m.xb(1),m.nc("directionLinks",n.pageWidth>600&&n.romsData.length>0)("collectionSize",n.romsData.length)("pageSize",n.itemsPerPage)("page",n.currentPage)("disabled",0===n.romsData.length)("boundaryLinks",!1),m.xb(1),m.nc("ngIf",n.pageWidth>600),m.xb(1),m.nc("ngIf",n.pageWidth>600))},directives:[r.j,i.o,r.l,r.k],styles:["#roms-pagination-container[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center}"]}),$);function Q(e,n){if(1&e&&(m.Rb(0,"h2",14),m.Hc(1),m.Pb()),2&e){var t=m.gc(2);m.xb(1),m.Jc(" ",t.noRomsMsg," ")}}function Y(e,n){1&e&&(m.Rb(0,"div",15),m.Hc(1," Oops, there was an error while trying to load your ROMs. Please try again later. "),m.Pb())}function X(e,n){1&e&&m.Mb(0,"roms-rom",18),2&e&&m.nc("rom",n.$implicit)}function Z(e,n){if(1&e&&(m.Rb(0,"div",16),m.Fc(1,X,1,1,"roms-rom",17),m.hc(2,"slice"),m.hc(3,"slice"),m.Pb()),2&e){var t=m.gc(2);m.xb(1),m.nc("ngForOf",m.kc(2,1,m.jc(3,5,t.romsData,t.pageSize),0,t.itemsPerPage))}}function K(e,n){if(1&e){var t=m.Sb();m.Ob(0),m.Rb(1,"div",2),m.Rb(2,"div",3),m.Rb(3,"div",4),m.Mb(4,"div",5),m.Rb(5,"h1",6),m.Hc(6,"ROMs"),m.Pb(),m.Rb(7,"div",7),m.Rb(8,"button",8),m.dc("click",(function(e){m.xc(t);var n=m.gc();return n.getRoms(!n.favoritesShown),n.onPageChange([0,1])})),m.Hc(9),m.Pb(),m.Pb(),m.Pb(),m.Mb(10,"hr",9),m.Pb(),m.Ob(11),m.Fc(12,Q,2,1,"h2",10),m.Fc(13,Y,2,0,"div",11),m.Nb(),m.Fc(14,Z,4,8,"div",12),m.Rb(15,"roms-pagination",13),m.dc("paginate",(function(e){return m.xc(t),m.gc().onPageChange(e)})),m.Pb(),m.Pb(),m.Nb()}if(2&e){var i=m.gc();m.xb(4),m.Ec("flex-basis",i.favoritesShown?88.23:131.8,"px"),m.xb(3),m.Ec("flex-basis",i.favoritesShown?89:132,"px"),m.xb(1),m.nc("disabled",i.isError||i.romsData.length<1&&!i.favoritesShown),m.xb(1),m.Jc(" ",i.favoritesShown?"Show All":"Filter Favorites"," "),m.xb(3),m.nc("ngIf",i.romsData.length<1&&!i.isError),m.xb(1),m.nc("ngIf",i.isError),m.xb(1),m.nc("ngIf",i.romsData.length>0),m.xb(1),m.nc("romsData",i.romsData)("currentPage",i.currentPage)("itemsPerPage",i.itemsPerPage)}}var V,ee,ne=((V=function(){function e(n,t){_classCallCheck(this,e),this.romsService=n,this.viewportScroller=t,this.romsData=new Array,this.currentPage=1,this.itemsPerPage=4,this.loading=!0,this.noRomsMsg="",this.limit=35,this.isError=!1}return _createClass(e,[{key:"ngOnInit",value:function(){e.setPaginationState(),"complete"!==document.readyState&&this.onPageChange([0,1]),this.getRoms(e.getPaginationState()[2]),this.favoritesShown=e.getPaginationState()[2]||!1}},{key:"ngOnDestroy",value:function(){this.romsSub.unsubscribe()}},{key:"getRoms",value:function(n){var t=this;null!=n&&(this.favoritesShown=!e.getPaginationState()[2],this.romsData=[],this.loading=!0),this.romsObs$=this.romsService.getAllRoms({favorites:n}),this.romsSub=this.romsObs$.subscribe((function(e){t.isError=!1,e.forEach((function(e){var n=e.game_name,t=e.description;e.game_name=j.a.decode(n),e.description=j.a.decode(t)})),t.romsData=e,t.loading=!1,!t.loading&&t.romsData.length<1&&(t.noRomsMsg=t.favoritesShown?"No Favorite ROMs Found":"No ROMs to Show")}),(function(e){t.isError=!0,t.loading=!1,t.noRomsMsg="",E.a.error(e)}),(function(){t.pageSize=e.getPaginationState()[0],t.currentPage=e.getPaginationState()[1]}))}},{key:"onPageChange",value:function(n){this.pageSize=n[0],this.currentPage=n[1],e.setPaginationState([this.pageSize,this.currentPage,this.favoritesShown]),this.viewportScroller.scrollToPosition([0,0])}}],[{key:"setPaginationState",value:function(e){localStorage.getItem("paginationState")||e||localStorage.setItem("paginationState",JSON.stringify([0,1,!1])),e&&localStorage.setItem("paginationState",JSON.stringify(e))}},{key:"getPaginationState",value:function(){return JSON.parse(localStorage.getItem("paginationState"))}}]),e}()).\u0275fac=function(e){return new(e||V)(m.Lb(N.a),m.Lb(i.x))},V.\u0275cmp=m.Fb({type:V,selectors:[["roms"]],decls:3,vars:2,consts:[[3,"loading"],[4,"ngIf"],[1,"roms-flex-container"],[1,"mt-2","mb-0","roms-heading-container"],[1,"d-flex","justify-content-between","mt-2"],[1,"dummy-container"],["id","roms-heading"],[1,"favorites-btn-container"],["type","button","appBtn","","btnType","primary","id","favorites-btn",3,"disabled","click"],[1,"mt-0"],["class","text-center","id","no-roms-heading",4,"ngIf"],["class","mr-5 ml-5 text-center","appAlert","","alertType","danger","id","roms-err",4,"ngIf"],["class","roms-grid-container",4,"ngIf"],[3,"romsData","currentPage","itemsPerPage","paginate"],["id","no-roms-heading",1,"text-center"],["appAlert","","alertType","danger","id","roms-err",1,"mr-5","ml-5","text-center"],[1,"roms-grid-container"],["class","card card-container border rounded",3,"rom",4,"ngFor","ngForOf"],[1,"card","card-container","border","rounded",3,"rom"]],template:function(e,n){1&e&&(m.Ob(0),m.Mb(1,"spinners-gif-spinner",0),m.Fc(2,K,16,10,"ng-container",1),m.Nb()),2&e&&(m.xb(1),m.nc("loading",n.loading),m.xb(1),m.nc("ngIf",!n.loading))},directives:[J.a,i.o,g.a,q,F.a,i.n,h],pipes:[i.v],styles:['.roms-grid-container[_ngcontent-%COMP%]{display:grid;grid-gap:4.2rem;grid-template-areas:"rom-1 rom-2" "rom-3 rom-4";grid-template-columns:repeat(2,1fr);grid-template-rows:1fr minmax(-webkit-min-content,auto);grid-template-rows:1fr minmax(min-content,auto);padding-bottom:.6rem;width:70vw}@media only screen and (max-width:916px){.roms-grid-container[_ngcontent-%COMP%]{grid-row-gap:1.4rem;grid-template-areas:"rom-1" "rom-2" "rom-3" "rom-4";grid-template-columns:1fr;grid-template-rows:1fr fit-content(18.75em) fit-content(18.75em) fit-content(18.75em);margin:0 auto;width:90vw}}.roms-flex-container[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;justify-items:center}.roms-heading-container[_ngcontent-%COMP%]{width:70vw}.roms-heading-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:left}.dummy-container[_ngcontent-%COMP%]{display:none}.favorites-btn-container[_ngcontent-%COMP%]{margin-top:.25rem}@media only screen and (max-width:916px){.roms-heading-container[_ngcontent-%COMP%]{width:90vw}.dummy-container[_ngcontent-%COMP%]{display:block}h1[_ngcontent-%COMP%]{text-align:center}}@media only screen and (max-width:418px){#favorites-btn[_ngcontent-%COMP%]{font-size:65%}.favorites-btn-container[_ngcontent-%COMP%]{margin-top:0;text-align:right}#roms-heading[_ngcontent-%COMP%]{font-size:1.8rem}}#no-roms-heading[_ngcontent-%COMP%], #roms-err[_ngcontent-%COMP%]{margin-top:2rem}@media only screen and (min-width:916px){.card[_ngcontent-%COMP%], .rom[_ngcontent-%COMP%]{width:calc((100vw - (70vw - 2.5rem)) + 2px)}}']}),V),te=t("UTcu"),ie=t("Dat7"),oe=function e(){_classCallCheck(this,e)},re=t("lGQG"),ae=((ee=function(){function e(n){_classCallCheck(this,e),this.romsService=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.faStar=c.n}},{key:"patchFavoriteRom",value:function(){var e=this,n={is_favorite:!this.isFavorite};this.isFavorite=n.is_favorite,this.romsService.patchRom(this.id,n).subscribe((function(n){e.isFavorite!==n.is_favorite&&(e.isFavorite=n.is_favorite)}),(function(e){return E.a.error(e)}))}}]),e}()).\u0275fac=function(e){return new(e||ee)(m.Lb(N.a))},ee.\u0275cmp=m.Fb({type:ee,selectors:[["roms-info-mark-favorite"]],inputs:{isFavorite:"isFavorite",id:"id"},decls:5,vars:3,consts:[[1,"mark-favorite-container","d-flex","flex-row","bg-light","border","rounded"],["for","is-favorite",1,"mb-0","mt-1"],[1,"mr-2","ml-2",3,"icon"],["type","checkbox","id","is-favorite","name","is-favorite",1,"is-favorite","ml-5",3,"checked","change"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Rb(1,"label",1),m.Mb(2,"fa-icon",2),m.Hc(3),m.Pb(),m.Rb(4,"input",3),m.dc("change",(function(e){return n.patchFavoriteRom()})),m.Pb(),m.Pb()),2&e&&(m.xb(2),m.nc("icon",n.faStar),m.xb(1),m.Jc(" ",n.isFavorite?"Unmark":"Mark"," as Favorite "),m.xb(1),m.nc("checked",n.isFavorite))},directives:[a.a],styles:[".is-favorite[_ngcontent-%COMP%]{cursor:pointer!important;height:2rem!important;width:2rem!important}.mark-favorite-container[_ngcontent-%COMP%]{-webkit-box-pack:justify;justify-content:space-between;padding:.15rem}@media only screen and (max-width:938px){.mark-favorite-container[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;padding:.5rem}}"]}),ee);function ce(e,n){1&e&&(m.Ob(0),m.Hc(1," You're not logged in and thus cannot access this ROM. "),m.Nb())}function se(e,n){1&e&&(m.Ob(0),m.Hc(1," You cannot access this user's ROM. "),m.Nb())}function me(e,n){1&e&&(m.Ob(0),m.Hc(1," Sorry, it looks like this ROM doesn't exist. "),m.Nb())}function ge(e,n){1&e&&(m.Ob(0),m.Hc(1," Oops, there was an error while trying to load your ROM information. Please try again later. "),m.Nb())}function le(e,n){if(1&e&&(m.Rb(0,"div",12),m.Rb(1,"div",13),m.Ob(2,14),m.Fc(3,ce,2,0,"ng-container",15),m.Fc(4,se,2,0,"ng-container",15),m.Fc(5,me,2,0,"ng-container",15),m.Fc(6,ge,2,0,"ng-container",16),m.Nb(),m.Pb(),m.Pb()),2&e){var t=m.gc(2);m.xb(2),m.nc("ngSwitch",t.errStatusCode),m.xb(1),m.nc("ngSwitchCase",401),m.xb(1),m.nc("ngSwitchCase",403),m.xb(1),m.nc("ngSwitchCase",404)}}function de(e,n){if(1&e&&(m.Mb(0,"roms-info-game-name",17),m.Mb(1,"roms-info-game-logo",18),m.Rb(2,"div",19),m.Rb(3,"h4"),m.Mb(4,"fa-icon",20),m.Hc(5),m.Rb(6,"span",21),m.Hc(7,"Description"),m.Pb(),m.Pb(),m.Pb(),m.Mb(8,"roms-info-game-description",22),m.Mb(9,"roms-info-rom-download",23),m.Mb(10,"roms-info-mark-favorite",24),m.Mb(11,"roms-info-game-specs",25),m.Mb(12,"roms-info-rom-specs",26)),2&e){var t=m.gc(2);m.nc("finishedLoading",t.finishedLoading)("gameName",t.rom.game_name)("romType",t.rom.rom_type),m.xb(1),m.nc("logoUrl",t.rom.logo_url)("gameName",t.rom.game_name),m.xb(3),m.nc("icon",t.faFileAlt),m.xb(1),m.Ic(t.isRomHack(t.rom.rom_type)?"":"Pokemon.com "),m.xb(3),m.nc("description",t.rom.description)("finishedLoading",t.finishedLoading),m.xb(1),m.nc("downloadLink",t.rom.download_link),m.xb(1),m.nc("isFavorite",t.rom.is_favorite)("id",t.rom._id),m.xb(1),m.nc("region",t.rom.region)("dateReleased",t.rom.date_released)("genre",t.rom.genre)("generation",t.rom.generation),m.xb(1),m.nc("platform",t.rom.platform)("fileName",t.rom.file_name)("fileSize",t.rom.file_size)("fileType",t.rom.file_type)}}var be=function(){return["/","roms"]};function fe(e,n){if(1&e&&(m.Ob(0),m.Rb(1,"div",3),m.Rb(2,"div",4),m.Rb(3,"div",5),m.Rb(4,"button",6),m.Mb(5,"fa-icon",7),m.Pb(),m.Pb(),m.Rb(6,"div",8),m.Rb(7,"h1"),m.Hc(8,"ROM Info"),m.Pb(),m.Pb(),m.Mb(9,"div",9),m.Pb(),m.Fc(10,le,7,4,"div",10),m.Fc(11,de,13,20,"ng-template",null,11,m.Gc),m.Pb(),m.Nb()),2&e){var t=m.vc(12),i=m.gc();m.xb(4),m.nc("routerLink",m.qc(4,be)),m.xb(1),m.nc("icon",i.faLongArrowAltLeft),m.xb(5),m.nc("ngIf",i.isError)("ngIfElse",t)}}var pe,ue,he=[{path:"",component:ne,canActivate:[te.a,ie.a]},{path:"info/:id",component:(pe=function(){function e(n,t,i,o){_classCallCheck(this,e),this.romService=n,this.authService=t,this.router=i,this.route=o}return _createClass(e,[{key:"ngOnInit",value:function(){this.finishedLoading=!1,this.loading=!0,this.faFileAlt=c.f,this.faLongArrowAltLeft=c.l,this.id=this.route.snapshot.paramMap.get("id"),this.isError=!1,this.rom=new oe,this.getRom(this.id)}},{key:"ngOnDestroy",value:function(){this.romInfoSub.unsubscribe()}},{key:"getRom",value:function(e){var n=this;this.romInfoObs$=this.romService.getRom(e),this.romInfoSub=this.romInfoObs$.subscribe((function(e){var t=e.game_name,i=e.description;e.genre||(e.genre="N/A"),e.game_name=j.a.decode(t),e.description=j.a.decode(i),n.rom=e,n.loading=!1,n.isError=!1}),(function(e){if(n.loading=!1,n.isError=!0,void 0!==e.status)switch(e.status){case 404:n.errStatusCode=404;break;case 401:n.errStatusCode=401;break;case 403:n.errStatusCode=403;break;default:n.errStatusCode=500}E.a.error(e)}),(function(){return n.finishedLoading=!0}))}},{key:"isRomHack",value:function(e){return"hack"===e}}]),e}(),pe.\u0275fac=function(e){return new(e||pe)(m.Lb(N.a),m.Lb(re.a),m.Lb(o.c),m.Lb(o.a))},pe.\u0275cmp=m.Fb({type:pe,selectors:[["roms-rom-info"]],decls:3,vars:2,consts:[[1,"p-2"],[3,"loading"],[4,"ngIf"],[1,"rom-info-container"],[1,"rom-info-header-container"],[1,"back-btn-container"],["type","button","aria-label","back","appBtn","","btnType","primary",3,"routerLink"],[3,"icon"],[1,"title-container"],[1,"dummy-container"],["class","rom-info-err-wrapper pt-3",4,"ngIf","ngIfElse"],["romInfo",""],[1,"rom-info-err-wrapper","pt-3"],["appAlert","","alertType","danger",1,"ml-4","mr-4","text-center"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"game-title",3,"finishedLoading","gameName","romType"],[1,"game-logo",3,"logoUrl","gameName"],[1,"game-description-title"],[1,"description-icon","mr-3","ml-1",3,"icon"],[1,"mr-1"],[1,"game-description",3,"description","finishedLoading"],[1,"rom-download",3,"downloadLink"],[1,"mark-favorite",3,"isFavorite","id"],[1,"game-specs",3,"region","dateReleased","genre","generation"],[1,"rom-specs",3,"platform","fileName","fileSize","fileType"]],template:function(e,n){1&e&&(m.Rb(0,"div",0),m.Mb(1,"spinners-gif-spinner",1),m.Fc(2,fe,13,5,"ng-container",2),m.Pb()),2&e&&(m.xb(1),m.nc("loading",n.loading),m.xb(1),m.nc("ngIf",!n.loading))},directives:[J.a,i.o,g.a,o.d,a.a,F.a,i.p,i.q,i.r,S,w,P,L,ae,v,I],styles:['.rom-info-container[_ngcontent-%COMP%]{display:grid;grid-template-areas:"rom-info-header rom-info-header" "game-title ." "game-logo ." "game-description-title ." "game-description game-specs" "game-description rom-specs" "rom-download mark-favorite";grid-template-columns:2fr 1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(11.75em) fit-content(188px) 3.6rem;margin-left:30px;margin-right:30px}.game-title[_ngcontent-%COMP%]{align-self:start;grid-area:game-title;grid-column:1/-1;grid-row:2/3;justify-self:start}.game-logo[_ngcontent-%COMP%]{grid-area:game-logo;grid-column:1/2;grid-row:3/4}.game-description-title[_ngcontent-%COMP%]{grid-area:game-description-title;grid-column:1/2;grid-row:4/5;margin-top:1rem}.game-description[_ngcontent-%COMP%]{grid-area:game-description;grid-column:1/2;grid-row:5/7}.rom-download[_ngcontent-%COMP%]{grid-area:rom-download;grid-column:1/2;grid-row:7/-1;margin-bottom:1rem;margin-top:1rem}.mark-favorite[_ngcontent-%COMP%]{grid-area:mark-favorite;grid-column:2/3;grid-row:7/-1;justify-self:end;margin-bottom:1rem;margin-top:1rem;width:calc(100% - (282.667px - 242.667px))}.game-specs[_ngcontent-%COMP%]{align-self:start;grid-area:game-specs;grid-column:2/3;grid-row:5/6}.rom-specs[_ngcontent-%COMP%]{align-self:end;grid-area:rom-specs;grid-column:2/3;grid-row:6/7}.rom-info-header-container[_ngcontent-%COMP%]{-webkit-box-align:center;align-items:center;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;grid-area:rom-info-header;grid-column:1/3;grid-row:1/2}.back-btn-container[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 0 auto;-webkit-box-ordinal-group:2;order:1}.title-container[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 0 auto;justify-self:center;-webkit-box-ordinal-group:3;order:2}.title-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{text-align:center}.dummy-container[_ngcontent-%COMP%]{-webkit-box-flex:2;flex:2 0 auto;flex-basis:40px;-webkit-box-ordinal-group:4;order:3}.rom-info-err-wrapper[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:2/3;margin:0 auto!important}@media only screen and (max-width:388px){.description-icon[_ngcontent-%COMP%]{display:none!important}}@media only screen and (max-width:938px){.rom-info-container[_ngcontent-%COMP%]{grid-template-areas:"rom-info-header" "game-title" "game-logo" "game-description-title" "game-description" "game-specs" "rom-specs" "rom-download";grid-template-columns:1fr;grid-template-rows:repeat(3,.5fr) fit-content(1rem) fit-content(19.25em) 15.5rem fit-content(17.5rem) fit-content(5.5rem) fit-content(5.5rem);margin:0 auto}.game-title[_ngcontent-%COMP%]{align-self:center;justify-self:center}.game-logo[_ngcontent-%COMP%]{text-align:center}.game-description-title[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:4/5;text-align:center}.game-description[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:5/6;text-align:center}.mark-favorite[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:8/9;justify-self:center;margin-bottom:0;width:100%}.rom-download[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:9/-1;margin-bottom:0;margin-top:0}.game-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:6/7;margin-top:0}.rom-specs[_ngcontent-%COMP%]{grid-column:1/-1;grid-row:7/8}.rom-info-header-container[_ngcontent-%COMP%]{-webkit-box-align:start;align-items:start;margin-top:.8rem}}']}),pe),canActivate:[te.a,ie.a]}],ve=((ue=function e(){_classCallCheck(this,e)}).\u0275mod=m.Jb({type:ue}),ue.\u0275inj=m.Ib({factory:function(e){return new(e||ue)},imports:[[o.g.forChild(he)],o.g]}),ue);t.d(n,"RomsModule",(function(){return we}));var Pe,we=((Pe=function e(){_classCallCheck(this,e)}).\u0275mod=m.Jb({type:Pe}),Pe.\u0275inj=m.Ib({factory:function(e){return new(e||Pe)},providers:[N.a,re.a],imports:[[i.c,o.g,r.h,a.b,z.a,A.a,ve]]}),Pe)}}]);