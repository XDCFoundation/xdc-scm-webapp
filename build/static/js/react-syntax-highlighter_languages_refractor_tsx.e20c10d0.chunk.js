(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[210,109,214],{1512:function(e,t,n){"use strict";var a=n(628),s=n(360);function i(e){e.register(a),e.register(s),function(e){var t=e.util.clone(e.languages.typescript);e.languages.tsx=e.languages.extend("jsx",t);var n=e.languages.tsx.tag;n.pattern=RegExp(/(^|[^\w$]|(?=<\/))/.source+"(?:"+n.pattern.source+")",n.pattern.flags),n.lookbehind=!0}(e)}e.exports=i,i.displayName="tsx",i.aliases=[]},360:function(e,t,n){"use strict";function a(e){!function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|as|declare|implements|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter;var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(e)}e.exports=a,a.displayName="typescript",a.aliases=["ts"]},628:function(e,t,n){"use strict";function a(e){!function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,a=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,s=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function i(e,t){return e=e.replace(/<S>/g,(function(){return n})).replace(/<BRACES>/g,(function(){return a})).replace(/<SPREAD>/g,(function(){return s})),RegExp(e,t)}s=i(s).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=i(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:i(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:i(/=<BRACES>/.source),inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var r=function e(t){return t?"string"===typeof t?t:"string"===typeof t.content?t.content:t.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||function t(n){for(var a=[],s=0;s<n.length;s++){var i=n[s],o=!1;if("string"!==typeof i&&("tag"===i.type&&i.content[0]&&"tag"===i.content[0].type?"</"===i.content[0].content[0].content?a.length>0&&a[a.length-1].tagName===r(i.content[0].content[1])&&a.pop():"/>"===i.content[i.content.length-1].content||a.push({tagName:r(i.content[0].content[1]),openedBraces:0}):a.length>0&&"punctuation"===i.type&&"{"===i.content?a[a.length-1].openedBraces++:a.length>0&&a[a.length-1].openedBraces>0&&"punctuation"===i.type&&"}"===i.content?a[a.length-1].openedBraces--:o=!0),(o||"string"===typeof i)&&a.length>0&&0===a[a.length-1].openedBraces){var c=r(i);s<n.length-1&&("string"===typeof n[s+1]||"plain-text"===n[s+1].type)&&(c+=r(n[s+1]),n.splice(s+1,1)),s>0&&("string"===typeof n[s-1]||"plain-text"===n[s-1].type)&&(c=r(n[s-1])+c,n.splice(s-1,1),s--),n[s]=new e.Token("plain-text",c,null,c)}i.content&&"string"!==typeof i.content&&t(i.content)}}(t.tokens)}))}(e)}e.exports=a,a.displayName="jsx",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_tsx.e20c10d0.chunk.js.map