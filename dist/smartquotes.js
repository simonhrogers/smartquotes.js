(function(a,b){'object'==typeof exports&&'object'==typeof module?module.exports=b():'function'==typeof define&&define.amd?define([],b):'object'==typeof exports?exports.smartquotes=b():a.smartquotes=b()})(this,function(){return function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=3)}([function(a,b,c){'use strict';var d=c(1);a.exports=function(a,b){return b=b||{},d.forEach(function(c){var d='function'==typeof c[1]?c[1](b.retainLength):c[1];a=a.replace(c[0],d)}),a}},function(a){'use strict';var b='a-zA-Z\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\xFD\xFF\xE6\u0153\xC1\xC0\xC2\xC4\xC3\xC5\xC7\xC9\xC8\xCA\xCB\xCD\xCC\xCE\xCF\xD1\xD3\xD2\xD4\xD6\xD5\xDA\xD9\xDB\xDC\xDD\u0178\xC6\u0152';a.exports=[[/'''/g,function(a){return'\u2034'+(a?'\u2063\u2063':'')}],[/([^a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_0-9]|^)"([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_0-9])/g,'$1\u201C$2'],[/(\u201c[^"]*)"([^"]*$|[^\u201c"]*\u201c)/g,'$1\u201D$2'],[/([^0-9])"/g,'$1\u201D'],[/''/g,function(a){return'\u2033'+(a?'\u2063':'')}],[/([^a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_0-9]|^)'(\S)/g,'$1\u2018$2'],[/([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_0-9])'([a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ])/ig,'$1\u2019$2'],[/(\u2018)([0-9]{2}[^\u2019]*)(\u2018([^0-9]|$)|$|\u2019[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ])/ig,'\u2019$2$3'],[/((\u2018[^']*)|[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ])'([^0-9]|$)/ig,'$1\u2019$3'],[/(\B|^)\u2018(?=([^\u2018\u2019]*\u2019\b)*([^\u2018\u2019]*\B[^a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_0-9][\u2018\u2019]\b|[^\u2018\u2019]*$))/ig,'$1\u2019'],[/"/g,'\u2033'],[/'/g,'\u2032'],[/([0-9])-([0-9])/g,'$1\u200A\u2013\u200A$2'],[/([0-9]) -([0-9])/g,'$1\u200A\u2013\u200A$2'],[/([0-9])- ([0-9])/g,'$1\u200A\u2013\u200A$2'],[/([0-9]) - ([0-9])/g,'$1\u200A\u2013\u200A$2'],[/([0-9]) – ([0-9])/g,'$1\u200A\u2013\u200A$2'],[/([0-9])– ([0-9])/g,'$1\u200A\u2013\u200A$2'],[/([0-9]) –([0-9])/g,'$1\u200A\u2013\u200A$2'],[/(.)\u2013(.)/g,'$1\u200A\u2013\u200A$2'],[/(\s)-(\s)/g,'$1\u2013$2'],[/(.)-(\d)/g,'$1\u2013$2'],[/(\d)-(.)/g,'$1\u200A\u2013\u200A$2'],[/([0-9])x(\s)/g,'$1\xD7$2'],[/(\s)x([0-9])/g,'$1\xD7$2'],[/([0-9])X(\s)/g,'$1\xD7$2'],[/(\s)X([0-9])/g,'$1\xD7$2'],[/(\s)x(\s)/g,'$1\xD7$2'],[/(\s)X(\s)/g,'$1\xD7$2'],[/(\d)cm/g,'$1 cm'],[/(\d)CM/g,'$1 cm'],[/(\d)mm/g,'$1 mm'],[/(\d)MM/g,'$1 mm'],[/(CO2)/g,'CO\u2082'],[/1\/2/g,'\xBD'],[/1\/3/g,'\u2153'],[/2\/3/g,'\u2154'],[/1\/4/g,'\xBC'],[/3\/4/g,'\xBE'],[/1\/5/g,'\u2155'],[/2\/5/g,'\u2156'],[/3\/5/g,'\u2157'],[/4\/5/g,'\u2158'],[/1\/6/g,'\u2159'],[/5\/6/g,'\u215A'],[/1\/8/g,'\u215B'],[/3\/8/g,'\u215C'],[/5\/8/g,'\u215D'],[/7\/8/g,'\u215E'],[/(\.\.\.)/g,'\u2026']]},function(a,b,c){'use strict';function d(a){if(-1===['CODE','PRE','SCRIPT','STYLE','NOSCRIPT'].indexOf(a.nodeName.toUpperCase())){var b,c,h,i='',j=a.childNodes,k=[];for(b=0;b<j.length;b++)c=j[b],c.nodeType===g||'#text'===c.nodeName?(k.push([c,i.length]),i+=c.nodeValue||c.value):c.childNodes&&c.childNodes.length&&(i+=d(c));for(b in i=f(i,{retainLength:!0}),k)h=k[b],h[0].nodeValue?h[0].nodeValue=e(i,h[0].nodeValue,h[1]):h[0].value&&(h[0].value=e(i,h[0].value,h[1]));return i}}function e(a,b,c){return a.substr(c,b.length).replace('\u2063','')}var f=c(0),g='undefined'!=typeof Element&&Element.TEXT_NODE||3;a.exports=function(a){return d(a),a}},function(a,b,c){'use strict';function d(a){return'undefined'!=typeof document&&'undefined'==typeof a?(g.runOnReady(function(){return f(document.body)}),d):'string'==typeof a?h(a):f(a)}var e=c(1),f=c(2),g=c(4),h=c(0);a.exports=d,a.exports.string=h,a.exports.element=f,a.exports.replacements=e,a.exports.listen=g},function(a,b,c){'use strict';function d(a){var b=new MutationObserver(function(a){a.forEach(function(a){var b,c=!0,d=!1;try{for(var f,g,h=a.addedNodes[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,e(g)}catch(a){d=!0,b=a}finally{try{!c&&h.return&&h.return()}finally{if(d)throw b}}})});return d.runOnReady(function(){b.observe(a||document.body,{childList:!0,subtree:!0})}),b}var e=c(2),f=c(0);d.runOnReady=function(a){if('loading'!==document.readyState)a();else if(document.addEventListener)document.addEventListener('DOMContentLoaded',a,!1);else var b=setInterval(function(){'loading'!==document.readyState&&(clearInterval(b),a())},10)},a.exports=d}])});
//# sourceMappingURL=smartquotes.js.map