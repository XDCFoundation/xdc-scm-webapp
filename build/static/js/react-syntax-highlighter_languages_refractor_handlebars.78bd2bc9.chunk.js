(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[79,126],{1394:function(e,n,a){"use strict";var t=a(229);function s(e){e.register(t),function(e){e.languages.handlebars={comment:/\{\{![\s\S]*?\}\}/,delimiter:{pattern:/^\{\{\{?|\}\}\}?$/i,alias:"punctuation"},string:/(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,boolean:/\b(?:true|false)\b/,block:{pattern:/^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,lookbehind:!0,alias:"keyword"},brackets:{pattern:/\[[^\]]+\]/,inside:{punctuation:/\[|\]/,variable:/[\s\S]+/}},punctuation:/[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,variable:/[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"handlebars",/\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"handlebars")})),e.languages.hbs=e.languages.handlebars}(e)}e.exports=s,s.displayName="handlebars",s.aliases=["hbs"]},229:function(e,n,a){"use strict";function t(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(a,t,s,o){if(a.language===t){var r=a.tokenStack=[];a.code=a.code.replace(s,(function(e){if("function"===typeof o&&!o(e))return e;for(var s,i=r.length;-1!==a.code.indexOf(s=n(t,i));)++i;return r[i]=e,s})),a.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(a,t){if(a.language===t&&a.tokenStack){a.grammar=e.languages[t];var s=0,o=Object.keys(a.tokenStack);!function r(i){for(var l=0;l<i.length&&!(s>=o.length);l++){var u=i[l];if("string"===typeof u||u.content&&"string"===typeof u.content){var c=o[s],p=a.tokenStack[c],g="string"===typeof u?u:u.content,d=n(t,c),f=g.indexOf(d);if(f>-1){++s;var b=g.substring(0,f),k=new e.Token(t,e.tokenize(p,a.grammar),"language-"+t,p),m=g.substring(f+d.length),h=[];b&&h.push.apply(h,r([b])),h.push(k),m&&h.push.apply(h,r([m])),"string"===typeof u?i.splice.apply(i,[l,1].concat(h)):u.content=h}}else u.content&&r(u.content)}return i}(a.tokens)}}}})}(e)}e.exports=t,t.displayName="markupTemplating",t.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_handlebars.78bd2bc9.chunk.js.map