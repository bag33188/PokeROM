(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{hdQ0:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("fXoL");let o=(()=>{class t{constructor(){}static convertRomSize(t){return t>1024&&t<1e6?[parseFloat((t/1e3).toFixed(2)),"MB"]:t>=1e6?[parseFloat((t/1e6).toFixed(2)),"GB"]:[t,"KB"]}static convertSecondsToMilliseconds(t){return 1e3*t}static convertIntegerToRomanNumeral(t){if(isNaN(t))return NaN;{const e=String(+t).split(""),n=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];let r="",o=3;for(;o--;)r=(n[parseInt(e.pop(),10)+10*o]||"")+r;return Array(+e.join("")+1).join("M")+r}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac}),t})()}}]);