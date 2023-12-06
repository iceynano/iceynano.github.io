(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{398:function(e,t,a){"use strict";a.r(t);var s=a(10),n=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"how-to-do-statistics-on-item-drop-rate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#how-to-do-statistics-on-item-drop-rate"}},[e._v("#")]),e._v(" How to do statistics on item drop rate")]),e._v(" "),t("p",[e._v("This document will show how to use "),t("code",[e._v("dev_tools/item_statistics.py")])]),e._v(" "),t("h2",{attrs:{id:"enable-statistics-in-alas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#enable-statistics-in-alas"}},[e._v("#")]),e._v(" Enable statistics in alas")]),e._v(" "),t("p",[e._v("In alas GUI,")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("set "),t("code",[e._v("enable_drop_screenshot")]),e._v(" to "),t("code",[e._v("yes")]),e._v(", if enabled, alas will add a 1s sleep before screenshot, to avoid capture the flash. There's a flash light when item shows up.")])]),e._v(" "),t("li",[t("p",[e._v("set "),t("code",[e._v("drop_screenshot_folder")]),e._v(" to be the folder you want to save. It is recommended to save it in SSD.")])]),e._v(" "),t("li",[t("p",[e._v("Run Alas few hours or few days, and you will get a folder structure like:")]),e._v(" "),t("p",[e._v("(Screenshots are named after millisecond timestamp.)")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<your_folder>\n    campaign_7_2\n        get_items\n            158323xxxxxxx.png\n            158323xxxxxxx.png\n            158323xxxxxxx.png\n        get_mission\n        get_ship\n        mystery\n        status\n    campaign_10_4_HARD\n        get_items\n        get_mission\n        get_ship\n        status\n    d3\n        get_items\n        get_mission\n        get_ship\n        status\n")])])]),t("h2",{attrs:{id:"prepare-a-new-environment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prepare-a-new-environment"}},[e._v("#")]),e._v(" Prepare a new environment")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Prepare another virtual environment, accoring to "),t("code",[e._v("requirements.txt")]),e._v(". But use the GPU version of "),t("code",[e._v("mxnet")]),e._v(".")]),e._v(" "),t("p",[e._v("I am using GTX1080Ti, and I installed "),t("code",[e._v("mxnet-cu101==1.6.0")]),e._v(", "),t("code",[e._v("CUDA10.1")]),e._v(", "),t("code",[e._v("cuDNN")]),e._v(". Google  "),t("code",[e._v("mxnet gpu install")]),e._v(", and see how to do in details. You may intall other version of CUDA, and mxnet for that CUDA, because you are using another graphic card.")])]),e._v(" "),t("li",[t("p",[e._v("Goto module/ocr/al_ocr.py line 21, replace")])])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("context='cpu',\n")])])]),t("p",[e._v("to be:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("context='gpu',\n")])])]),t("p",[e._v("Now cnocr will run on GPU.")]),e._v(" "),t("p",[e._v("You can skip this procedure anyway, and use the same environment as alas, but the OCR will run really slow.")]),e._v(" "),t("h2",{attrs:{id:"first-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#first-run"}},[e._v("#")]),e._v(" First Run")]),e._v(" "),t("p",[e._v("Before any actual statistics, you need to extract templates first.")]),e._v(" "),t("ol",[t("li",[e._v("Change your server in line 8:")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("server.server = 'cn'  # Edit your server here.\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("Set your "),t("code",[e._v("FOLDER")]),e._v(" and "),t("code",[e._v("CSV_FILE")]),e._v(" at the bottom of the file.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\"\"\"\nArgs:\n    FOLDER:   Alas drop screenshot folder.\n              Examples: '<your_drop_screenshot_folder>/campaign_7_2'\n    CSV_FILE: Csv file to save.\n              Examples: 'c72.csv'\n\"\"\"\nFOLDER = ''\nCSV_FILE = ''\ndrop = DropStatistics(FOLDER)\n")])])]),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Uncomment the this and run.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("# drop.extract_template()\n")])])]),t("p",[e._v("You will get some new templates named in number under folder "),t("code",[e._v("item_template")]),e._v(". Here's an example log:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("  1%|          | 107/12668 [00:05<10:24, 20.10it/s]2020-06-03 10:39:42.609 | INFO | New item template: 50\n  1%|          | 158/12668 [00:07<10:42, 19.47it/s]2020-06-03 10:39:45.098 | INFO | New item template: 51\n  2%|▏         | 207/12668 [00:10<10:33, 19.66it/s]2020-06-03 10:39:47.772 | INFO | New item template: 52\n  2%|▏         | 215/12668 [00:10<11:20, 18.29it/s]2020-06-03 10:39:48.304 | INFO | New item template: 53\n100%|██████████| 12668/12668 [10:33<00:00, 19.99it/s]\n")])])]),t("ol",{attrs:{start:"4"}},[t("li",[t("p",[e._v("Rename new templates with Camel-Case, such as "),t("code",[e._v("PlateGeneralT3")]),e._v(". Suffix in name will be ignore.")]),e._v(" "),t("p",[e._v("For example, "),t("code",[e._v("Javelin")]),e._v(" and "),t("code",[e._v("Javelin_2")]),e._v(" are different templates, but have same output name 'Javelin'.")])])]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("Why extract templates before every stats, why not provide ready-made templates")])]),e._v(" "),t("ul",[t("li",[e._v("There are too many items in game, can't collect them all.")]),e._v(" "),t("li",[e._v("If it find new templates during actual run, may give unexpected result.")]),e._v(" "),t("li",[e._v("If some of your accounts used All-Skin, ship icons will be different.")]),e._v(" "),t("li",[e._v("Too many templates will make it slow.")])])]),e._v(" "),t("h2",{attrs:{id:"second-run"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#second-run"}},[e._v("#")]),e._v(" Second Run")]),e._v(" "),t("ol",[t("li",[e._v("Comment the code in first run.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("drop.extract_template()\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[e._v("uncomment this, and run.")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("import csv\nwith open(CSV_FILE, 'a', newline='') as csv_file:\n    writer = csv.writer(csv_file)\n    for d in drop.generate_data():\n        writer.writerows(d)\n")])])]),t("p",[e._v("Here's an example log:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("2020-06-03 12:23:55.355 | INFO | [ENEMY_GENRE 0.007s] 中型侦查舰队\n2020-06-03 12:23:55.363 | INFO | [Amount_ocr 0.009s] [1, 1, 22]\n100%|█████████▉| 14916/14919 [20:32<00:00, 13.20it/s]2020-06-03 12:23:55.442 | INFO | [ENEMY_GENRE 0.007s] 大型航空舰队\n2020-06-03 12:23:55.455 | INFO | [Amount_ocr 0.013s] [1, 1, 1, 17]\n2020-06-03 12:23:55.539 | INFO | [ENEMY_GENRE 0.007s] 敌方旗舰\n2020-06-03 12:23:55.549 | INFO | [Amount_ocr 0.010s] [1, 2, 1, 63]\n100%|█████████▉| 14918/14919 [20:33<00:00, 12.35it/s]2020-06-03 12:23:55.623 | INFO | [ENEMY_GENRE 0.007s] 精英舰队\n2020-06-03 12:23:55.633 | INFO | [Amount_ocr 0.010s] [1, 1, 1, 17]\n100%|██████████| 14919/14919 [20:33<00:00, 12.10it/s]\n")])])]),t("p",[e._v("Now you have a csv file, formated to be:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<get_item_timestamp>, <battle_status_timestamp>, <enemy_name>, <item_name>, <item_amount>\n")])])]),t("p",[e._v("like this:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("1590271317900,1590271315841,中型主力舰队,主炮部件T3,1\n1590271317900,1590271315841,中型主力舰队,物资,23\n1590271359374,1590271357251,小型侦查舰队,通用部件T1,1\n1590271359374,1590271357251,小型侦查舰队,鱼雷部件T2,1\n1590271359374,1590271357251,小型侦查舰队,物资,13\n1590271415308,1590271413207,敌方旗舰,彗星,1\n1590271415308,1590271413207,敌方旗舰,通用部件T3,1\n1590271415308,1590271413207,敌方旗舰,科技箱T1,1\n1590271415308,1590271413207,敌方旗舰,物资,42\n1590271415308,1590271413207,敌方旗舰,_比萨研发物资,1\n1590271415308,1590271413207,敌方旗舰,_鸢尾之印,1\n")])])]),t("p",[e._v("You can open it in Excel or load it into database.")]),e._v(" "),t("h2",{attrs:{id:"improvement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#improvement"}},[e._v("#")]),e._v(" Improvement")]),e._v(" "),t("p",[e._v("These code is running on single thread, you can try adding multiprocess to speed up. I didn't do that because it's still acceptable (25it/s without ocr, 15it/s with ocr)")])])}),[],!1,null,null,null);t.default=n.exports}}]);