一、用工具压缩图片
压缩png
node-pngquant-native

压缩jpg
jpegtran
使用jpegtran -copy none -optimize -outfile out.jpg in.jpg

压缩gif
优化级别设置为不小于2,1的话基本不压缩 gifsicle --optimize=3 -o out.gif in.gif
将透明部分截取gifsicle --optimize=3 --crop-transparency -o out.gif in.gif

在不同网络环境下，加载不同尺寸和像素的图片，通过在图片URL后缀添加不同参数来改变

一、响应式图片
javascript绑定事件检测窗口大小
css媒体查询
img标签属性  srcset这个属性
<img srcset="img-320w.jpg, img-640w.jpg 2x img-960w.jpg 3x" src="img-960w.jpg" alt="img">
x表示图像的设备像素比

二、逐步加载图像（其实都是占位符）
1、使用统一占位符
2、使用LQIP(low quality image placeholders)
安装npm install lqip

3、使用SQIP（SVG quality image placeholder）
安装npm install sqip

三、真的需要图片吗
web font代替图片
使用Data URL代替图片
采用image spriting(雪碧图)



