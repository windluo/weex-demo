## 准备工作
**开发app必须的Android/IOS环境一定要安装，不然没法模拟和打包！**

这一点weex的官方文档真是简陋，对于没用过Android/IOS开发环境的非常之不友好。可以参考[react native的官方文档](https://reactnative.cn/docs/0.43/getting-started.html)

### JDK

这个是Android环境必须的前置，下载最新的JDK1.8安装、配好环境变量即可。

### Android

目前只尝试了Windows下的Android，做些说明：Android Studio的安装可以到[中文社区](http://www.androiddevtools.cn/)安装，我安装的是[这个版本]([android-studio-ide-181.4763614-windows.zip](https://dl.google.com/dl/android/studio/ide-zips/3.2.0.13/android-studio-ide-181.4763614-windows.zip?utm_source=androiddevtools&utm_medium=website) )。

> 安装步骤就照着react native那边的文档来，有的地方说*SDK Tools*这一步的*Android SDK Build-Tools 23.0.1*，weex需要的是23.0.2版本，未验证，两个版本都勾选了。
>
> 安装过程会把需要的SDK、模拟器都装上，无需操心。
>
> Android Studio装好后，注意**不要升级！！！**会有弹框提示升级到3.x版本，千万不要乱升级！！！*不慎升级了又解决不了各种报错，把各种android目录文件删掉重装咯，环境变量可以不删*
>
> 之后的怎么打包生成apk、怎么改图标跟名字，网上一搜一大把。

装好Android Studio后，Android SDK也已经装到了对应的目录，配置好ANDROID_HOME环境变量即可。

### weex-toolkit

这个是[官方](http://weex.apache.org/cn/guide/)提供的工具，可以生成vue项目

> npm install weex-toolkit -g  // 安装工具
>
> weex create awesome-app // 创建项目

## Weex

### 常用命令

> npm start // 启动服务
>
> weex platform add android // 添加android代码
>
> weex platform remove android // 删除android代码
>
> npm run build // 打包vue项目
>
> weex run android //官方说是那么说，我实在没跑出什么结果来，弃用
>
> npm run pack:android  // 据说可以打包apk，没跑出来

### 遇到的坑

weex内置的组件不要乱嵌套，样式或错乱

> list 组件外只能套一层div组件，不然样式会错乱

### 打包apk

npm run build后，把dist目录下的js（目前只跑了demo的，只生成了js）手动拷贝到*weex-project\platforms\android\app\src\main\assets*目录下，然后跑起Android Studio的打包，即可生成apk。

开始见证奇迹吧！

