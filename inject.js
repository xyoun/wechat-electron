const ipcRenderer = require('electron').ipcRenderer;

injectJS = {
  getBadge: function () {
    // listen if the menu dom has changed. if changed, count all unread message and sent message to ipcMain.
    $(".panel").bind('DOMSubtreeModified', function (e) {
      if (e.target.innerHTML.length > 0) {
        var count = 0;
        $(".icon.web_wechat_reddot_middle").each(function () {
          count += parseInt(this.textContent);
        })
        if (count > 0) {
          ipcRenderer.send('badge-changed', count.toString());
        }
        else if (window.fluid.dockBadge !== 0 && window.fluid.dockBadge !== "") {
          ipcRenderer.send('badge-changed', "");
        }
      }
    })
  }
}

