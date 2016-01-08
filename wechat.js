const ipcRenderer = require('electron').ipcRenderer;

var injectCSS = [
  'div.main {height: 100% !important;padding-top: 0 !important;};',
  'div.main_inner {max-width: 100% !important;min-width: 100% !important};',
  'p.copyright {display: none !important};',
  'a.web_wechat_screencut {display: none !important}'
]

onload = function () {
  var webview = document.getElementById("wechat");
  console.log(webview);
  webview.addEventListener('dom-ready', function () {
    // overwrite css style. make it fullscreen.
    for (var css in injectCSS) {
      webview.insertCSS(injectCSS[css]);
    }
    // inject js to trigger if there is new message in.
    webview.executeJavaScript('injectJS.getBadge()');
  })
}


