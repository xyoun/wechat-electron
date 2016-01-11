const shell = require('electron').shell;

var injectCSS = [
  'div.main {height: 100% !important;padding-top: 0 !important;};',
  'div.main_inner {max-width: 100% !important;min-width: 100% !important};',
  'p.copyright {display: none !important};',
  'a.web_wechat_screencut {display: none !important}'
];

function getParameterByName(url, name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(url);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

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
  });

  webview.addEventListener('new-window', function (e) {
    var url = getParameterByName(e.url, 'requrl');
    if (url.length > 1) {
      shell.openExternal(url);
    } else {
      shell.openExternal(e.url);
    }
  })
};