
### WeChat Electron.

#### 功能

* 通知
* 声音
* dock 未读数量提醒
* 可以直接被屏蔽的 url，譬如淘宝。
* 支持拖拽发送，直接粘贴图片等。
* 退出、或者重启电脑，甚至回到家用另外一台电脑，还可以保持登录的状态。再也不用傻呆呆的对着电脑扫码了，方法如下


#### 编译方法：

```
cd wechat-electron
npm install && npm start

or 

electron app.js
```

#### 打包 (only tested on OSX)

```
cd wechat-electron
npm install -g electron-packager
electron-packager . WeChat --platform=darwin --arch=x64 --version=0.36.3  --icon=wechat.icns
```

#### 保存会话

```
ln ~/Dropbox/wechat-electron ~/Library/Application\ Support/wechat-electron
```

是的…… 就是把 Local Storage，Cookie 等信息存下来就好了。。。


#### 注意

* 不要截图之后把图片粘到 QQ 的输入框，然后拖拽图片到 WeChat，会导致 WeChat 跳转，暂无解决方法。
