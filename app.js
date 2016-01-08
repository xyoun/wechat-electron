const electron = require('electron');
const app = electron.app;
const BrowserWindow = require('browser-window');
const ipcMain = electron.ipcMain;

var mainWindow = null;

app.on('ready', function () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
});

// RPC to listen any badge change events. events sent from webview.
ipcMain.on('badge-changed', function (event, num) {
  // num shoud be a string.
  app.dock.setBadge(num);
});
