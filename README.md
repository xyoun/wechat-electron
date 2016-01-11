
#### README

WeChat wrapped with Electron.

#### Feature

* Notification Banners
* Sounds
* Docker Badge Count
* can open taobao's url in chat window directly.
* keep your login status even you quit app, restart your Mac, even go back home using another Mac (showing below).


#### How to run:

```
cd wechat-electron
npm install && npm start

or 

electron app.js
```

#### Pack (only tested on OSX)

```
cd wechat-electron
npm install -g electron-packager
electron-packager . WeChat --platform=darwin --arch=x64 --version=0.36.3  --icon=wechat.icns
```

#### Share Cookie to Keep Login Status

```
ln ~/Dropbox/wechat-electron ~/Library/Application\ Support/wechat-electron
```

yes, sync your local storage and cookie with Dropbox or other tools. you can keep your status even you change your computer.


#### CAUTION

* do not paste image in QQ input field and then drag it into Wechat. it will cause Wechat navigation.
