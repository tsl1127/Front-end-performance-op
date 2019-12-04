提升css渲染性能
1、谨慎使用expensive属性
    如nth-child伪类 position:fixed定位
2、尽量减少样式层级数

3、尽量避免使用占用过多CPU和内存的属性
如text-indnt

4、尽量避免使用耗电量大的属性
css3 transitions transforms opcity 

合适使用css选择器
1、尽量避免使用css表达式
2、尽量避免使用通配选择器
3、尽量避免类正则的属性选择器


提升CSS文件加载性能
1、使用外链的css
2、尽量避免使用@import


精简CSS代码
    使用缩写语句
    删除不必要的0
    删除不必要的单位
    删除过多分号
    删除空格和注释
    尽量减少样式表的大小

合理使用web fonts
    将字体部署在CDN上
    将字体以base64形式保存在css中并通过localstorage进行缓存
    google字体库最好使用国内托管服务

css动画优化
    尽量避免同时动画
    延迟动画初始化
    结合SVG
    



