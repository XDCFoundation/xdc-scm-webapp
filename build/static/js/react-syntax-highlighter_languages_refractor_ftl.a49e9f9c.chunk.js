(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[67,126],{1431:function(e,t,n){"use strict";var a=n(233);function r(e){e.register(a),function(e){for(var t=/[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source,n=0;n<2;n++)t=t.replace(/<expr>/g,(function(){return t}));t=t.replace(/<expr>/g,/[^\s\S]/.source);var a={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(/<expr>/g,(function(){return t}))),greedy:!0,inside:{interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(/<expr>/g,(function(){return t}))),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:true|false)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\b\w+(?=\s*\()/,number:/\b\d+(?:\.\d+)?\b/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};a.string[1].inside.interpolation.inside.rest=a,e.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:a}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:a}}}},e.hooks.add("before-tokenize",(function(n){var a=RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g,(function(){return t})),"gi");e.languages["markup-templating"].buildPlaceholders(n,"ftl",a)})),e.hooks.add("after-tokenize",(function(t){e.languages["markup-templating"].tokenizePlaceholders(t,"ftl")}))}(e)}e.exports=r,r.displayName="ftl",r.aliases=[]},233:function(e,t,n){"use strict";function a(e){!function(e){function t(e,t){return"___"+e.toUpperCase()+t+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(n,a,r,i){if(n.language===a){var o=n.tokenStack=[];n.code=n.code.replace(r,(function(e){if("function"===typeof i&&!i(e))return e;for(var r,s=o.length;-1!==n.code.indexOf(r=t(a,s));)++s;return o[s]=e,r})),n.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(n,a){if(n.language===a&&n.tokenStack){n.grammar=e.languages[a];var r=0,i=Object.keys(n.tokenStack);!function o(s){for(var p=0;p<s.length&&!(r>=i.length);p++){var u=s[p];if("string"===typeof u||u.content&&"string"===typeof u.content){var l=i[r],c=n.tokenStack[l],g="string"===typeof u?u:u.content,f=t(a,l),d=g.indexOf(f);if(d>-1){++r;var k=g.substring(0,d),b=new e.Token(a,e.tokenize(c,n.grammar),"language-"+a,c),m=g.substring(d+f.length),h=[];k&&h.push.apply(h,o([k])),h.push(b),m&&h.push.apply(h,o([m])),"string"===typeof u?s.splice.apply(s,[p,1].concat(h)):u.content=h}}else u.content&&o(u.content)}return s}(n.tokens)}}}})}(e)}e.exports=a,a.displayName="markupTemplating",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ftl.a49e9f9c.chunk.js.map