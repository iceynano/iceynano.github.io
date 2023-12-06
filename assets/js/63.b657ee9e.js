(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{430:function(t,v,_){"use strict";_.r(v);var e=_(10),a=Object(e.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"过滤器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过滤器"}},[t._v("#")]),t._v(" 过滤器")]),t._v(" "),v("p",[t._v("你可以使用 Alas 中的过滤器（filter）选择游戏内容，例如使用 "),v("code",[t._v("Q-0.5 > Drake-0.5 > D-2.5 > reset > shortest")]),t._v("  来选择科研项目。过滤器给予用户极大的自由来设置 Alas，同时在面对复杂情况时会比权重（weight）和优先级（priority）更直观和更便于理解。")]),t._v(" "),v("h3",{attrs:{id:"过滤器规则"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过滤器规则"}},[t._v("#")]),t._v(" 过滤器规则")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("用大于号 "),v("code",[t._v(">")]),t._v(" 连接每一个选择（selection），"),v("code",[t._v(">")]),t._v(" 两端的空格是可选的。例如 "),v("code",[t._v("selection1 > selection2 > selection3")]),t._v("。")]),t._v(" "),v("p",[t._v("Alas 将从前到后地查找符合选择要求的项目，一旦找到符合要求的项目，停止向后查找。当查找至末端时，仍未有符合要求的项目，Alas 什么也不会选择。")])]),t._v(" "),v("li",[v("p",[t._v("每个选择（selection）内用横杠 "),v("code",[t._v("-")]),t._v(" 连接需要选择的属性（property）。"),v("code",[t._v("-")]),t._v(" 是可选的，属性不区分大小写，属性也是可选的，并且可以自由组合，但你需要选择至少一项属性。例如 "),v("code",[t._v("Property1-Property2-Property3")]),t._v("，"),v("code",[t._v("property1property3")]),t._v("。")]),t._v(" "),v("p",[t._v("横杠、大小写和大于号两端的空格的作用只是方便阅读，换行也是允许的。Alas 使用正则表达式解析用户编写的过滤器，如果某个选择解析失败，将跳过这个选择。")])]),t._v(" "),v("li",[v("p",[t._v("存在一些内置名称（build-in names）可作为选择（selection）使用。例如科研过滤器中内置的 "),v("code",[t._v("shortest")]),t._v(" 代表时长最短的科研。")])]),t._v(" "),v("li",[v("p",[t._v("当过滤器和其他设置一起工作时，Alas 会寻找同时满足所有用户设置的项目。例如，你设置科研过滤器是 "),v("code",[t._v("H1 > D2.5 > shortest")]),t._v(" （包含消耗魔方的科研），但又设置了不允许消耗魔方，最终的结果是 Alas 不会选择消耗魔方的科研。")]),t._v(" "),v("p",[t._v("当你突然想切魔方的时候，只需打开消耗魔方，而不需要修改过滤器，这是比较方便的。")])])]),t._v(" "),v("h3",{attrs:{id:"例子"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),v("ul",[v("li",[t._v("在科研项目中选择任意 0.5 小时舰装解析，0.5 小时德雷克定向研发，任意 2.5 小时定向研发，刷新科研列表，时长最短的科研。"),v("code",[t._v("Q-0.5 > Drake-0.5 > D-2.5 > reset > shortest")])]),t._v(" "),v("li",[t._v("在委托列表选择 8 小时钻石委托，6 小时装备委托，任意每日委托，8 小时夜间石油委托，任意额外石油委托。"),v("code",[t._v("gem-8 > box-6 > daily > night-oil-8 > extra-oil")])])]),t._v(" "),v("h2",{attrs:{id:"科研过滤器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#科研过滤器"}},[t._v("#")]),t._v(" 科研过滤器")]),t._v(" "),v("h3",{attrs:{id:"属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("{series}-{genre}-{duration}\n")])])]),v("h3",{attrs:{id:"series"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#series"}},[t._v("#")]),t._v(" Series")]),t._v(" "),v("p",[t._v("科研期数")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Series")]),t._v(" "),v("th",[t._v("描述")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("S1")]),t._v(" "),v("td",[t._v("一期科研")])]),t._v(" "),v("tr",[v("td",[t._v("S2")]),t._v(" "),v("td",[t._v("二期科研")])]),t._v(" "),v("tr",[v("td",[t._v("S3")]),t._v(" "),v("td",[t._v("三期科研")])]),t._v(" "),v("tr",[v("td",[t._v("S4")]),t._v(" "),v("td",[t._v("四期科研")])]),t._v(" "),v("tr",[v("td",[t._v("S5")]),t._v(" "),v("td",[t._v("五期科研")])])])]),t._v(" "),v("h3",{attrs:{id:"genre"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#genre"}},[t._v("#")]),t._v(" Genre")]),t._v(" "),v("p",[t._v("以下三种格式中的一种：")]),t._v(" "),v("ul",[v("li",[t._v("科研类型")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Genre")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th",[t._v("消耗（条件）")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Q")]),t._v(" "),v("td",[t._v("舰装解析")]),t._v(" "),v("td",[t._v("强化部件")])]),t._v(" "),v("tr",[v("td",[t._v("H")]),t._v(" "),v("td",[t._v("魔方解析(心智补全)")]),t._v(" "),v("td",[t._v("心智魔方")])]),t._v(" "),v("tr",[v("td",[t._v("D")]),t._v(" "),v("td",[t._v("定向研发")]),t._v(" "),v("td",[t._v("物资")])]),t._v(" "),v("tr",[v("td",[t._v("G")]),t._v(" "),v("td",[t._v("资金募集")]),t._v(" "),v("td",[t._v("物资")])]),t._v(" "),v("tr",[v("td",[t._v("B")]),t._v(" "),v("td",[t._v("数据收集")]),t._v(" "),v("td",[t._v("通关主线")])]),t._v(" "),v("tr",[v("td",[t._v("C")]),t._v(" "),v("td",[t._v("基础研究")]),t._v(" "),v("td",[t._v("无")])]),t._v(" "),v("tr",[v("td",[t._v("E")]),t._v(" "),v("td",[t._v("试验品募集")]),t._v(" "),v("td",[t._v("分解装备")])]),t._v(" "),v("tr",[v("td",[t._v("T")]),t._v(" "),v("td",[t._v("研究委托")]),t._v(" "),v("td",[t._v("进行委托")])])])]),t._v(" "),v("ul",[v("li",[t._v("定向研发中的舰船稀有度，DR 表示彩科研船，PRY 表示金科研船。")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("DR|PRY\n")])])]),v("ul",[v("li",[t._v("定向研发中的舰船名称")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("S1Name")]),t._v(" "),v("th",[t._v("一期舰娘名称")]),t._v(" "),v("th",[t._v("S2Name")]),t._v(" "),v("th",[t._v("二期舰娘名称")]),t._v(" "),v("th",[t._v("S3Name")]),t._v(" "),v("th",[t._v("三期舰娘名称")]),t._v(" "),v("th",[t._v("S4Name")]),t._v(" "),v("th",[t._v("四期舰娘名称")]),t._v(" "),v("th",[t._v("S5Name")]),t._v(" "),v("th",[t._v("五期舰娘名称")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("Neptune")]),t._v(" "),v("td",[t._v("海王星")]),t._v(" "),v("td",[t._v("Seattle")]),t._v(" "),v("td",[t._v("西雅图")]),t._v(" "),v("td",[t._v("Champagne")]),t._v(" "),v("td",[t._v("香槟")]),t._v(" "),v("td",[t._v("Anchorage")]),t._v(" "),v("td",[t._v("安克雷奇")]),t._v(" "),v("td",[t._v("Plymouth")]),t._v(" "),v("td",[t._v("普利茅斯")])]),t._v(" "),v("tr",[v("td",[t._v("Monarch")]),t._v(" "),v("td",[t._v("君主")]),t._v(" "),v("td",[t._v("Georgia")]),t._v(" "),v("td",[t._v("佐治亚")]),t._v(" "),v("td",[t._v("Cheshire")]),t._v(" "),v("td",[t._v("柴郡")]),t._v(" "),v("td",[t._v("Hakuryu")]),t._v(" "),v("td",[t._v("白龙")]),t._v(" "),v("td",[t._v("Rupprecht")]),t._v(" "),v("td",[t._v("普鲁雷希特")])]),t._v(" "),v("tr",[v("td",[t._v("Ibuki")]),t._v(" "),v("td",[t._v("伊吹")]),t._v(" "),v("td",[t._v("Kitakaze")]),t._v(" "),v("td",[t._v("北风")]),t._v(" "),v("td",[t._v("Drake")]),t._v(" "),v("td",[t._v("德雷克")]),t._v(" "),v("td",[t._v("Agir")]),t._v(" "),v("td",[t._v("埃吉尔")]),t._v(" "),v("td",[t._v("Harbin")]),t._v(" "),v("td",[t._v("哈尔滨")])]),t._v(" "),v("tr",[v("td",[t._v("Izumo")]),t._v(" "),v("td",[t._v("出云")]),t._v(" "),v("td",[t._v("Azuma")]),t._v(" "),v("td",[t._v("吾妻")]),t._v(" "),v("td",[t._v("Mainz")]),t._v(" "),v("td",[t._v("美因茨")]),t._v(" "),v("td",[t._v("August")]),t._v(" "),v("td",[t._v("奥古斯特")]),t._v(" "),v("td",[t._v("Chkalov")]),t._v(" "),v("td",[t._v("契卡洛夫")])]),t._v(" "),v("tr",[v("td",[t._v("Roon")]),t._v(" "),v("td",[t._v("罗恩")]),t._v(" "),v("td",[t._v("Friedrich")]),t._v(" "),v("td",[t._v("腓特烈大帝")]),t._v(" "),v("td",[t._v("Odin")]),t._v(" "),v("td",[t._v("奥丁")]),t._v(" "),v("td",[t._v("MarcoPolo")]),t._v(" "),v("td",[t._v("马可波罗")]),t._v(" "),v("td",[t._v("Brest")]),t._v(" "),v("td",[t._v("布雷斯特")])]),t._v(" "),v("tr",[v("td",[t._v("SaintLouis")]),t._v(" "),v("td",[t._v("路易九世")]),t._v(" "),v("td",[t._v("Gascogne")]),t._v(" "),v("td",[t._v("加斯科涅")]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")])])]),t._v(" "),v("h3",{attrs:{id:"duration"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#duration"}},[t._v("#")]),t._v(" Duration")]),t._v(" "),v("p",[t._v("科研项目的时长，单位小时，整数或是小数")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("\\d.\\d|\\d\\d?\n")])])]),v("h3",{attrs:{id:"内置名称"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内置名称"}},[t._v("#")]),t._v(" 内置名称")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("reset")]),t._v(" 刷新科研列表。刷新后 Alas 将重新识别科研项目，并返回过滤器的头部重新查找。如果当天的刷新次数耗尽， Alas 将跳过 "),v("code",[t._v("reset")]),t._v("。")]),t._v(" "),v("li",[v("code",[t._v("shortest")]),t._v(" 时长最短的科研，相当于 "),v("code",[t._v("0.5 > 1 > 1.5 > 2 > 2.5 > 3 > 4 > 5 > 6 > 8 > 10 > 12")])]),t._v(" "),v("li",[v("code",[t._v("cheapest")]),t._v(" 消耗最低的科研，相当于 "),v("code",[t._v("Q1 > Q2 > T3 > T4 > Q4 > C6 > T6 > C8 > C12 > G1.5 > D2.5 > G2.5 > D5 > Q0.5 > G4 > D8 > H1 > H2 > H0.5 > D0.5 > H4")])])]),t._v(" "),v("p",[t._v("注意：shortest 和 cheapest 必然会选择一个科研项目，在它们之后的内容将不会被执行。因此，建议科研过滤器以 "),v("code",[t._v("> reset > shortest")]),t._v(" 或 "),v("code",[t._v("> reset > cheapest")]),t._v(" 结尾，以保证充分利用刷新和防止空选。")]),t._v(" "),v("h3",{attrs:{id:"例子-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#例子-2"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://github.com/LmeSzinc/AzurLaneAutoScript/blob/32e3fb9d8c86c2c065eb32e0c85b8146aa9519d6/module/research/preset.py#L46",target:"_blank",rel:"noopener noreferrer"}},[t._v("四期科研"),v("OutboundLink")],1)])]),t._v(" "),v("h2",{attrs:{id:"委托过滤器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#委托过滤器"}},[t._v("#")]),t._v(" 委托过滤器")]),t._v(" "),v("h3",{attrs:{id:"属性-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性-2"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("{category}-{genre}-{duration}\n")])])]),v("h3",{attrs:{id:"category"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#category"}},[t._v("#")]),t._v(" Category")]),t._v(" "),v("p",[t._v("这里指的是委托的总类别，主要委托（1000油/1200油），每日委托，额外委托（10个每日做完之后出现的），紧急委托，夜间委托")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Major|Daily|Extra|Urgent|Night\n")])])]),v("h3",{attrs:{id:"genre-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#genre-2"}},[t._v("#")]),t._v(" Genre")]),t._v(" "),v("p",[t._v("委托类型")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Resource|Chip|Event|Drill|Part|Cube|Oil|Book|Retrofit|Box|Gem|Ship\n")])])]),v("p",[v("strong",[t._v("Major")]),t._v(" 主要委托（1000油/1200油）")]),t._v(" "),v("p",[v("strong",[t._v("Daily")]),t._v(" 每日委托")]),t._v(" "),v("ul",[v("li",[t._v("Resource 日常资源开发")]),t._v(" "),v("li",[t._v("Chip 高阶战术研发")]),t._v(" "),v("li",[t._v("Event 活动委托（某些活动期间才有的委托，不占用同时进行委托的上限）")])]),t._v(" "),v("p",[v("strong",[t._v("Extra")]),t._v(" 额外委托（10个每日做完之后出现的）")]),t._v(" "),v("ul",[v("li",[t._v("Part 部件类")]),t._v(" "),v("li",[t._v("Drill 钻头类")]),t._v(" "),v("li",[t._v("Book 教材类")]),t._v(" "),v("li",[t._v("Oil 石油类")]),t._v(" "),v("li",[t._v("Cube 魔方类")])]),t._v(" "),v("p",[v("strong",[t._v("Urgent")]),t._v(" 紧急委托")]),t._v(" "),v("ul",[v("li",[t._v("Part 部件类")]),t._v(" "),v("li",[t._v("Drill 钻头类")]),t._v(" "),v("li",[t._v("Book 教材类")]),t._v(" "),v("li",[t._v("Box 装备箱类")]),t._v(" "),v("li",[t._v("Cube 魔方类")]),t._v(" "),v("li",[t._v("Gem 钻石类")]),t._v(" "),v("li",[t._v("Ship 观舰类")])]),t._v(" "),v("p",[v("strong",[t._v("Night")]),t._v(" 夜间委托")]),t._v(" "),v("ul",[v("li",[t._v("Part 部件类")]),t._v(" "),v("li",[t._v("Drill 钻头类")]),t._v(" "),v("li",[t._v("Book 教材类")]),t._v(" "),v("li",[t._v("Oil 石油类")]),t._v(" "),v("li",[t._v("Cube 魔方类")])]),t._v(" "),v("h3",{attrs:{id:"duration-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#duration-2"}},[t._v("#")]),t._v(" Duration")]),t._v(" "),v("p",[t._v("委托时长，以下两种格式中的一种：")]),t._v(" "),v("ul",[v("li",[t._v("单位小时，整数或者小数。时长除不尽的时候，仅取前两位，例如时长 "),v("code",[t._v("1:10:00")]),t._v(" 就是 "),v("code",[t._v("1.16")]),t._v("，时长 "),v("code",[t._v("2:40:00")]),t._v(" 就是 "),v("code",[t._v("2:66")]),t._v("，时长 "),v("code",[t._v("1:30:00")]),t._v(" 就是 "),v("code",[t._v("1.5")]),t._v("。，时长 "),v("code",[t._v("12:00:00")]),t._v(" 就是 "),v("code",[t._v("12")]),t._v("。")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("\\d\\d?.\\d\\d?|\\d\\d?\n")])])]),v("ul",[v("li",[v("code",[t._v("{hh}:{mm}")]),t._v("。例如时长 "),v("code",[t._v("1:10:00")]),t._v(" 就是 "),v("code",[t._v("1:10")]),t._v("，时长 "),v("code",[t._v("2:40:00")]),t._v(" 就是 "),v("code",[t._v("2:40")]),t._v("。")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("\\d\\d?:\\d\\d\n")])])]),v("h3",{attrs:{id:"内置名称-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内置名称-2"}},[t._v("#")]),t._v(" 内置名称")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("shortest")]),t._v(" 每日委托列表中，时长最短的委托。注意，是 "),v("strong",[t._v("每日")]),t._v(" 的列表，因为只有每日列表才会无限刷新。对于紧急列表中未被过滤器选择的委托，Alas 会任由它们过期。")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("0:30\n> 1 > 1:10 > 1:20 > 1:30 > 1:40 > 1:45\n> 2 > 2:15 > 2:30 > 2:40\n> 3 > 3:20\n> 4 > 5 > 5:20\n> 6 > 7 > 8 > 9 > 10 > 12\n")])])]),v("h3",{attrs:{id:"例子-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#例子-3"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),v("ul",[v("li",[t._v("默认的委托过滤器")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("DailyEvent\n> Gem-8 > Gem-4 > Gem-2\n> Box-6 > Box-3 > Box-1\n> DailyCube-0:30 > UrgentCube-1:30 > DailyCube-1:30 > UrgentCube-1:40 > UrgentCube-2:15\n> UrgentCube-3 > DailyCube-3 > UrgentCube-4 > UrgentCube-6\n> Major\n> DailyRescource > DailyChip\n> UrgentBook-2:30 > UrgentBook-2 > UrgentBook-1:20 > UrgentBook-1:40\n> Daily-0:20 > Daily-0:30 > Daily-1:00 > Daily-1:30 > Daily-2:00\n> NightOil > NightCube\n> shortest\n")])])]),v("h2",{attrs:{id:"战术学院过滤器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#战术学院过滤器"}},[t._v("#")]),t._v(" 战术学院过滤器")]),t._v(" "),v("h3",{attrs:{id:"属性-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#属性-3"}},[t._v("#")]),t._v(" 属性")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("{genre}-{tier}\n")])])]),v("h3",{attrs:{id:"genre-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#genre-3"}},[t._v("#")]),t._v(" Genre")]),t._v(" "),v("p",[t._v("技能书类型。"),v("code",[t._v("same")]),t._v(" 表示与要学的技能的类型相同的教材（使用可获得 150% 的技能经验）。")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Red|Blue|Yellow|Same\n")])])]),v("h3",{attrs:{id:"tier"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#tier"}},[t._v("#")]),t._v(" Tier")]),t._v(" "),v("p",[t._v("技能书等级")]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("T[123]\n")])])]),v("h3",{attrs:{id:"内置名称-3"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#内置名称-3"}},[t._v("#")]),t._v(" 内置名称")]),t._v(" "),v("ul",[v("li",[v("code",[t._v("first")]),t._v(" 第一本教材。")])]),t._v(" "),v("h3",{attrs:{id:"例子-4"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#例子-4"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),v("ul",[v("li",[t._v("默认的战术学院过滤器")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("SameT3 > SameT2 > SameT1\n> BlueT2 > YellowT2 > RedT2\n> BlueT3 > YellowT3 > RedT3\n> BlueT1 > YellowT1 > RedT1\n> first\n")])])]),v("h2",{attrs:{id:"强化舰船过滤器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#强化舰船过滤器"}},[t._v("#")]),t._v(" 强化舰船过滤器")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("舰种")]),t._v(" "),v("th",[t._v("描述")]),t._v(" "),v("th")])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("dd")]),t._v(" "),v("td",[t._v("驱逐")]),t._v(" "),v("td",[t._v("Destroyer")])]),t._v(" "),v("tr",[v("td",[t._v("ss")]),t._v(" "),v("td",[t._v("潜艇")]),t._v(" "),v("td",[t._v("Submarine")])]),t._v(" "),v("tr",[v("td",[t._v("cl")]),t._v(" "),v("td",[t._v("轻巡")]),t._v(" "),v("td",[t._v("Light Cruiser")])]),t._v(" "),v("tr",[v("td",[t._v("ca")]),t._v(" "),v("td",[t._v("重巡")]),t._v(" "),v("td",[t._v("Heavy Cruiser")])]),t._v(" "),v("tr",[v("td",[t._v("bb")]),t._v(" "),v("td",[t._v("战舰")]),t._v(" "),v("td",[t._v("Battleship")])]),t._v(" "),v("tr",[v("td",[t._v("cv")]),t._v(" "),v("td",[t._v("航母")]),t._v(" "),v("td",[t._v("Aircraft Carrier")])]),t._v(" "),v("tr",[v("td",[t._v("repair")]),t._v(" "),v("td",[t._v("维修舰")]),t._v(" "),v("td",[t._v("Repair Ship")])]),t._v(" "),v("tr",[v("td",[t._v("others")]),t._v(" "),v("td",[t._v("其他")]),t._v(" "),v("td",[t._v("-")])])])]),t._v(" "),v("h3",{attrs:{id:"例子-5"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#例子-5"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),v("p",[v("code",[t._v("dd > cl > ca > bb > ss > cv")])])])}),[],!1,null,null,null);v.default=a.exports}}]);