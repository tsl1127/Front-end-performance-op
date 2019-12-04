1、不同的场景用不同的图片格式
jepg
png
gif
webp

2
压缩png
node-pngquant-native
安装npm install node-pngquant-native


3压缩jpg
使用jpegtran

安装 npm install jpegtran
npm config ls

npm config get prefix


$ npm config get prefix
C:\Users\tsl\AppData\Roaming\npm

npm config set prefix D:\node\node_modules\npm


jpegtran -copy none -optimize -outfile out.jpg 2.jpg


prefix='D:\Program Files\nodejs\node_modules\npm'

prefix='C:\Users\tsl\AppData\Roaming\npm'

https://registry.npm.taobao.org/

$ where node
D:\Program Files\nodejs\node.exe


安装了nvm可能在git bash里 输入nvm list会不识别
可以在cmd里选择管理员身份进入，然后就可以运行了
nvm list available

git bash也可以以管理员身份运行


C:\Users\tsl\AppData\Roaming\npm

C:\Program Files\nodejs\node_modules\npm


C:\Program Files\nodejs\
C:\Program Files\nodejs\node_modules\npm


npm cache clean --force

