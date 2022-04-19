(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{2298:function(a,t,s){"use strict";s.r(t);var n=s(75),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,n=a._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[n("h1",{attrs:{id:"命令行模式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#命令行模式"}},[a._v("#")]),a._v(" 命令行模式")]),a._v(" "),n("p",[a._v("在PHP的配置文件 php.ini 中，有一个与PHP执行相关的参数配置 "),n("code",[a._v("register_argc_argv")]),a._v(", 其中主要存在两种模式来进行参数传递，一种是CLI模式，另一种为Web模式")]),a._v(" "),n("p",[n("img",{attrs:{src:s(926),alt:"image-20220419194933306"}})]),a._v(" "),n("p",[a._v("首先我们先使用代码了解CLI模式下的参数传递, 根据文档我们看到变量传递主要是参数 "),n("code",[a._v("$argc")]),a._v(" 与 "),n("code",[a._v("$argv")])]),a._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("var_dump")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$argc")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("var_dump")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$argv")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:s(927),alt:"image-20220419195635050"}})]),a._v(" "),n("table",[n("thead",[n("tr",[n("th",[a._v("函数")]),a._v(" "),n("th",[a._v("类型/值")]),a._v(" "),n("th",[a._v("说明")])])]),a._v(" "),n("tbody",[n("tr",[n("td",[a._v("register_argc_argv")]),a._v(" "),n("td",[a._v("boolean")]),a._v(" "),n("td",[a._v("Tells PHP whether to declare the argv & argc variables (that would contain the GET information). See also command line.")])]),a._v(" "),n("tr",[n("td",[a._v("register_argc_argv")]),a._v(" "),n("td",[a._v("TRUE")]),a._v(" "),n("td",[a._v('Setting this to TRUE means that scripts executed via the CLI SAPI always have access to argc (number of arguments passed to the application) and argv (array of the actual arguments).The PHP variables $argc and $argv are automatically set to the appropriate values when using the CLI SAPI. These values can also be found in the $_SERVER array, for example: $_SERVER["argv"].')])])])]),a._v(" "),n("p",[a._v("这里是对 "),n("code",[a._v("register_argc_argv")]),a._v(" 配置开启与不开启的一个描述，当我们想要从 Url中赋值给参数 "),n("code",[a._v("$_SERVER['argv']")]),a._v("时，就需要在配置文件中打开选项")]),a._v(" "),n("p",[n("img",{attrs:{src:s(928),alt:"image-20220419200828079"}})]),a._v(" "),n("p",[a._v("我们对比下配置打开与不打开参数传入的变化")]),a._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("var_dump")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_SERVER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("var_dump")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_SERVER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"argv"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br")])]),n("p",[n("img",{attrs:{src:s(929),alt:"image-20220419201924602"}})]),a._v(" "),n("p",[n("img",{attrs:{src:s(930),alt:"image-20220419202019194"}})]),a._v(" "),n("p",[a._v("这里可以发现只有当该配置打开时，"),n("code",[a._v("$_SERVER")]),a._v(" 才会通过Web中的请求进行 "),n("code",[a._v("argv 参数")]),a._v("的赋值，我们在源码中看一下 "),n("code",[a._v("argv参数")]),a._v("的处理方法")]),a._v(" "),n("p",[n("img",{attrs:{src:s(931),alt:"image-20220419211706158"}})]),a._v(" "),n("p",[a._v("我们可以注意到实际参数传递过程为 "),n("code",[a._v("+号")]),a._v(" 分割，测试参数传递 "),n("code",[a._v("argv[0]=a, argv[1]=b, argv[2]=c")])]),a._v(" "),n("p",[n("img",{attrs:{src:s(932),alt:"image-20220419211857588"}})]),a._v(" "),n("p",[a._v("例如如下的代码，当"),n("code",[a._v("$_SERVER['argv']")]),a._v("可控时，我们就可以通过参数传递来达到变量的控制")]),a._v(" "),n("div",{staticClass:"language-php line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-php"}},[n("code",[n("span",{pre:!0,attrs:{class:"token php language-php"}},[n("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("<?php")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_SERVER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[a._v("'argv'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("switch")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$a")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"echo"')]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"abc"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("case")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"ping"')]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$b")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$_SERVER")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"argv"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("echo")]),a._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[a._v("shell_exec")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),n("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[a._v('"/sbin/ping -c 1 '),n("span",{pre:!0,attrs:{class:"token interpolation"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$b")])]),a._v('"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("break")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),n("span",{pre:!0,attrs:{class:"token delimiter important"}},[a._v("?>")])]),a._v("\n")])]),a._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[a._v("1")]),n("br"),n("span",{staticClass:"line-number"},[a._v("2")]),n("br"),n("span",{staticClass:"line-number"},[a._v("3")]),n("br"),n("span",{staticClass:"line-number"},[a._v("4")]),n("br"),n("span",{staticClass:"line-number"},[a._v("5")]),n("br"),n("span",{staticClass:"line-number"},[a._v("6")]),n("br"),n("span",{staticClass:"line-number"},[a._v("7")]),n("br"),n("span",{staticClass:"line-number"},[a._v("8")]),n("br"),n("span",{staticClass:"line-number"},[a._v("9")]),n("br"),n("span",{staticClass:"line-number"},[a._v("10")]),n("br"),n("span",{staticClass:"line-number"},[a._v("11")]),n("br"),n("span",{staticClass:"line-number"},[a._v("12")]),n("br"),n("span",{staticClass:"line-number"},[a._v("13")]),n("br"),n("span",{staticClass:"line-number"},[a._v("14")]),n("br")])]),n("p",[a._v("正常使用逻辑应为PHP文件调用执行 ping 命令")]),a._v(" "),n("p",[n("img",{attrs:{src:s(933),alt:"image-20220419213530625"}})]),a._v(" "),n("p",[n("code",[a._v("register_argc_argv")]),a._v(" 配置为 On，可从Web请求控制 "),n("code",[a._v("argv参数")]),a._v(" 时")]),a._v(" "),n("p",[n("img",{attrs:{src:s(934),alt:"image-20220419213630109"}})])])}),[],!1,null,null,null);t.default=e.exports},926:function(a,t,s){a.exports=s.p+"assets/img/image-20220419194933306.1c47d5e7.png"},927:function(a,t,s){a.exports=s.p+"assets/img/image-20220419195635050.79c3bcd6.png"},928:function(a,t,s){a.exports=s.p+"assets/img/image-20220419200828079.ee0edcac.png"},929:function(a,t,s){a.exports=s.p+"assets/img/image-20220419201924602.1044b60e.png"},930:function(a,t,s){a.exports=s.p+"assets/img/image-20220419202019194.36f62e36.png"},931:function(a,t,s){a.exports=s.p+"assets/img/image-20220419211706158.18c4cd8a.png"},932:function(a,t,s){a.exports=s.p+"assets/img/image-20220419211857588.0574b225.png"},933:function(a,t,s){a.exports=s.p+"assets/img/image-20220419213530625.1ee51956.png"},934:function(a,t,s){a.exports=s.p+"assets/img/image-20220419213630109.038a3713.png"}}]);