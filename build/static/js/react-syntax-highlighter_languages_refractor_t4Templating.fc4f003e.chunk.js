(window["webpackJsonpscm-web-app"]=window["webpackJsonpscm-web-app"]||[]).push([[204],{376:function(e,t,a){"use strict";function n(e){!function(e){function t(e,t,a){return{pattern:RegExp("<#"+e+"[\\s\\S]*?#>"),alias:"block",inside:{delimiter:{pattern:RegExp("^<#"+e+"|#>$"),alias:"important"},content:{pattern:/[\s\S]+/,inside:t,alias:a}}}}e.languages["t4-templating"]=Object.defineProperty({},"createT4",{value:function(a){var n=e.languages[a],i="language-"+a;return{block:{pattern:/<#[\s\S]+?#>/,inside:{directive:t("@",{"attr-value":{pattern:/=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">=]+)/,inside:{punctuation:/^=|^["']|["']$/}},keyword:/\b\w+(?=\s)/,"attr-name":/\b\w+/}),expression:t("=",n,i),"class-feature":t("\\+",n,i),standard:t("",n,i)}}}}})}(e)}e.exports=n,n.displayName="t4Templating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_t4Templating.fc4f003e.chunk.js.map