(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[100],{1459:function(e,t,n){"use strict";function i(e){e.languages.jolie=e.languages.extend("clike",{string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},keyword:/\b(?:include|define|is_defined|undef|main|init|outputPort|inputPort|Location|Protocol|Interfaces|RequestResponse|OneWay|type|interface|extender|throws|cset|csets|forward|Aggregates|Redirects|embedded|courier|execution|sequential|concurrent|single|scope|install|throw|comp|cH|default|global|linkIn|linkOut|synchronized|this|new|for|if|else|while|in|Jolie|Java|Javascript|nullProcess|spawn|constants|with|provide|until|exit|foreach|instanceof|over|service)\b/,number:/(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?l?/i,operator:/-[-=>]?|\+[+=]?|<[<=]?|[>=*!]=?|&&|\|\||[:?\/%^]/,punctuation:/[,.]/,builtin:/\b(?:undefined|string|int|void|long|Byte|bool|double|float|char|any)\b/,symbol:/[|;@]/}),delete e.languages.jolie["class-name"],e.languages.insertBefore("jolie","keyword",{function:{pattern:/((?:\b(?:outputPort|inputPort|in|service|courier)\b|@)\s*)\w+/,lookbehind:!0},aggregates:{pattern:/(\bAggregates\s*:\s*)(?:\w+(?:\s+with\s+\w+)?\s*,\s*)*\w+(?:\s+with\s+\w+)?/,lookbehind:!0,inside:{"with-extension":{pattern:/\bwith\s+\w+/,inside:{keyword:/\bwith\b/}},function:{pattern:/\w+/},punctuation:{pattern:/,/}}},redirects:{pattern:/(\bRedirects\s*:\s*)(?:\w+\s*=>\s*\w+\s*,\s*)*(?:\w+\s*=>\s*\w+)/,lookbehind:!0,inside:{punctuation:{pattern:/,/},function:{pattern:/\w+/},symbol:{pattern:/=>/}}}})}e.exports=i,i.displayName="jolie",i.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_jolie.a20b9327.chunk.js.map