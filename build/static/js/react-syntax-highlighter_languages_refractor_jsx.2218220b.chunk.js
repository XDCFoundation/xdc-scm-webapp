(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[130],{654:function(n,t,e){"use strict";function a(n){!function(n){var t=n.util.clone(n.languages.javascript),e=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function o(n,t){return n=n.replace(/<S>/g,(function(){return e})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(n,t)}s=o(s).source,n.languages.jsx=n.languages.extend("markup",t),n.languages.jsx.tag.pattern=o(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),n.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,n.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,n.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,n.languages.jsx.tag.inside.comment=t.comment,n.languages.insertBefore("inside","attr-name",{spread:{pattern:o(/<SPREAD>/.source),inside:n.languages.jsx}},n.languages.jsx.tag),n.languages.insertBefore("inside","special-attr",{script:{pattern:o(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:n.languages.jsx}}},n.languages.jsx.tag);var g=function n(t){return t?"string"===typeof t?t:"string"===typeof t.content?t.content:t.content.map(n).join(""):""};n.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||function t(e){for(var a=[],s=0;s<e.length;s++){var o=e[s],c=!1;if("string"!==typeof o&&("tag"===o.type&&o.content[0]&&"tag"===o.content[0].type?"</"===o.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===g(o.content[0].content[1])&&a.pop():"/>"===o.content[o.content.length-1].content||a.push({tagName:g(o.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===o.type&&"{"===o.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===o.type&&"}"===o.content?a[a.length-1].openedBraces--:c=!0),(c||"string"===typeof o)&&a.length>0&&0===a[a.length-1].openedBraces){var i=g(o);s<e.length-1&&("string"===typeof e[s+1]||"plain-text"===e[s+1].type)&&(i+=g(e[s+1]),e.splice(s+1,1)),s>0&&("string"===typeof e[s-1]||"plain-text"===e[s-1].type)&&(i=g(e[s-1])+i,e.splice(s-1,1),s--),e[s]=new n.Token("plain-text",i,null,i)}o.content&&"string"!==typeof o.content&&t(o.content)}}(t.tokens)}))}(n)}n.exports=a,a.displayName="jsx",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jsx.2218220b.chunk.js.map