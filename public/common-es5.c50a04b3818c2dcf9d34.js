function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,n){for(var r=0;r<n.length;r++){var t=n[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,n,r){return n&&_defineProperties(e.prototype,n),r&&_defineProperties(e,r),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{hdQ0:function(e,n,r){"use strict";r.d(n,"a",(function(){return o}));var t=r("8Y7J"),o=function(){var e=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"convertRomSize",value:function(e){return e>1024&&e<1e6?[parseFloat((e/1e3).toFixed(2)),"MB"]:e>=1e6?[parseFloat((e/1e6).toFixed(2)),"GB"]:[e,"KB"]}},{key:"convertSecondsToMilliseconds",value:function(e){return 1e3*e}},{key:"convertIntegerToRomanNumeral",value:function(e){if(isNaN(e))return NaN;for(var n=String(+e).split(""),r=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],t="",o=3;o--;)t=(r[parseInt(n.pop(),10)+10*o]||"")+t;return Array(+n.join("")+1).join("M")+t}}]),e}();return e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=t.Hb({token:e,factory:e.\u0275fac}),e}()}}]);