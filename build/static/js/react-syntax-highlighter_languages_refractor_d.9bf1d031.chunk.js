(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[44],{1359:function(e,t,r){"use strict";function a(e){e.languages.d=e.languages.extend("clike",{comment:[{pattern:/^\s*#!.+/,greedy:!0},{pattern:RegExp(/(^|[^\\])/.source+"(?:"+[/\/\+(?:\/\+(?:[^+]|\+(?!\/))*\+\/|(?!\/\+)[\s\S])*?\+\//.source,/\/\/.*/.source,/\/\*[\s\S]*?\*\//.source].join("|")+")"),lookbehind:!0,greedy:!0}],string:[{pattern:RegExp([/\b[rx]"(?:\\[\s\S]|[^\\"])*"[cwd]?/.source,/\bq"(?:\[[\s\S]*?\]|\([\s\S]*?\)|<[\s\S]*?>|\{[\s\S]*?\})"/.source,/\bq"((?!\d)\w+)$[\s\S]*?^\1"/.source,/\bq"(.)[\s\S]*?\2"/.source,/'(?:\\(?:\W|\w+)|[^\\])'/.source,/(["`])(?:\\[\s\S]|(?!\3)[^\\])*\3[cwd]?/.source].join("|"),"m"),greedy:!0},{pattern:/\bq\{(?:\{[^{}]*\}|[^{}])*\}/,greedy:!0,alias:"token-string"}],keyword:/\$|\b(?:abstract|alias|align|asm|assert|auto|body|bool|break|byte|case|cast|catch|cdouble|cent|cfloat|char|class|const|continue|creal|dchar|debug|default|delegate|delete|deprecated|do|double|else|enum|export|extern|false|final|finally|float|for|foreach|foreach_reverse|function|goto|idouble|if|ifloat|immutable|import|inout|int|interface|invariant|ireal|lazy|long|macro|mixin|module|new|nothrow|null|out|override|package|pragma|private|protected|public|pure|real|ref|return|scope|shared|short|static|struct|super|switch|synchronized|template|this|throw|true|try|typedef|typeid|typeof|ubyte|ucent|uint|ulong|union|unittest|ushort|version|void|volatile|wchar|while|with|__(?:(?:FILE|MODULE|LINE|FUNCTION|PRETTY_FUNCTION|DATE|EOF|TIME|TIMESTAMP|VENDOR|VERSION)__|gshared|traits|vector|parameters)|string|wstring|dstring|size_t|ptrdiff_t)\b/,number:[/\b0x\.?[a-f\d_]+(?:(?!\.\.)\.[a-f\d_]*)?(?:p[+-]?[a-f\d_]+)?[ulfi]{0,4}/i,{pattern:/((?:\.\.)?)(?:\b0b\.?|\b|\.)\d[\d_]*(?:(?!\.\.)\.[\d_]*)?(?:e[+-]?\d[\d_]*)?[ulfi]{0,4}/i,lookbehind:!0}],operator:/\|[|=]?|&[&=]?|\+[+=]?|-[-=]?|\.?\.\.|=[>=]?|!(?:i[ns]\b|<>?=?|>=?|=)?|\bi[ns]\b|(?:<[<>]?|>>?>?|\^\^|[*\/%^~])=?/}),e.languages.insertBefore("d","keyword",{property:/\B@\w*/}),e.languages.insertBefore("d","function",{register:{pattern:/\b(?:[ABCD][LHX]|E[ABCD]X|E?(?:BP|SP|DI|SI)|[ECSDGF]S|CR[0234]|DR[012367]|TR[3-7]|X?MM[0-7]|R[ABCD]X|[BS]PL|R[BS]P|[DS]IL|R[DS]I|R(?:[89]|1[0-5])[BWD]?|XMM(?:[89]|1[0-5])|YMM(?:1[0-5]|\d))\b|\bST(?:\([0-7]\)|\b)/,alias:"variable"}})}e.exports=a,a.displayName="d",a.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_d.9bf1d031.chunk.js.map