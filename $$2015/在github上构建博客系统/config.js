var SLIDE_VERSION = [1,1,1];  // ver 1.1.1
var language_ = (navigator.browserLanguage || navigator.language).toLowerCase();

if (language_ == 'zh-cn') {
  PINP_SLIDE_FONT = "'Microsoft YaHei','微软雅黑','SimHei','黑体','SimSun','宋体','Arial','Helvetica','sans-serif'";
  PINP_SOURCECODE_FONT = "'Courier New','Verdana','monospace'";
  PINP_CONTENT_FONT = "微软雅黑;黑体;宋体;新宋体;幼圆;隶书;楷体_GB2312;方正姚体;方正舒体;Arial;Helvetica;sans-serif;Arial Narrow;Comic Sans MS;STHeiti;Courier New;monospace;Verdana;Georgia;Lucida Sans Unicode;Lucida Grande;Tahoma;Geneva;Times New Roman;Trebuchet MS";
  PINP_EXTEND_STYLE = "";
}
else {
  PINP_SLIDE_FONT = "'Arial','Helvetica','sans-serif','Microsoft YaHei','SimHei','SimSun'";
  PINP_SOURCECODE_FONT = "'Courier New','Verdana','monospace'";
  PINP_CONTENT_FONT = "Arial;Helvetica;sans-serif;Arial Narrow;Comic Sans MS;STHeiti;Courier New;monospace;Verdana;Georgia;serif;Lucida Sans Unicode;Lucida Grande;Tahoma;Geneva;Times New Roman;Trebuchet MS;Microsoft YaHei;SimHei;SimSun";
  PINP_EXTEND_STYLE = "";
}
