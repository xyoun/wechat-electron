
### WeChat Electron

#### 功能

* 通知
* 声音
* dock 未读数量提醒
* 你可以在 OSX 上随意拖动它，再也不会闪闪闪跳跳跳了
* 可以直接被屏蔽的 url，譬如淘宝
* 支持拖拽发送，直接粘贴图片等
* 退出、或者重启电脑，甚至回到家用另外一台电脑，还可以保持登录的状态。再也不用傻呆呆的对着电脑扫码了
* 可以多终端同时登录，不会相互踢下线。


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

* 不要截图之后把图片粘到 QQ 的输入框，然后拖拽图片到 WeChat Electron，会导致 WeChat Electron 跳转，暂无解决方法。
* 多终端下各终端不会自己同步消息，但是会同步自己在手机上发送的消息，譬如：
  1. A 机器上自己发的消息，手机能同步到，但在 B 机器上不会自动同步到；
  2. 别人发过来的消息，会自动同步到所有终端；
  3. 自己手机发出去的消息，会自动同步到所有终端。

#### 已知 Bugs 或未做的 Feature：
* cmd + R 无效（欢迎 PR）；
* cmd + W 不会自动隐藏（欢迎 PR）；
* cmd + F 不会聚焦到搜索（欢迎 PR）；
* 点击左上角的 X 会直接退出（欢迎 PR）；
* 输入第一个字的时候拼音候选框可能不是在输入框附近（欢迎 PR）；
* 点击通知不会默认聚焦到输入框（欢迎 PR）；
* 某些图片在某些情况下拖拽到 WeChat Electron 会导致 WeChat Electron 整个页面的跳转去显示那一张图片（欢迎 PR）；
