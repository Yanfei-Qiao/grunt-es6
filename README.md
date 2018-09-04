# grunt-es6
A demo of compiling es6 with grunt

##运行步骤

1. 全局安装grunt-cli

npm install grunt-cli -g

2. 进入项目目录，在命令行中安装依赖项

npm install

3. 运行grunt命令即可编译js文件

4. 如要使用watch功能，运行grunt watcher

注意：如果要看到reload效果，需要在服务器运行index.html，可安装http-server

npm install http-server -g

然后在项目目录运行http-server，此时同时开启watcher功能即可实施编译刷新。