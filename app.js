const electron = require('electron');
const app = electron.app;
const BrowserWindow = require('browser-window');
const ipcMain = electron.ipcMain;

var mainWindow = null;

app.on('ready', function () {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 900, height: 750});

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/index.html');
  mainWindow.webContents.on('will-navigate', ev => {
    ev.preventDefault();
  })

  //mainWindow.webContents.openDevTools();

  app.dock.setBadge("");
  app.on('window-all-closed', function () {
    mainWindow = null;
    app.quit();
  });
});

// RPC to listen any badge change events. events sent from webview.
ipcMain.on('badge-changed', function (event, num) {
  // num should be a string.
  app.dock.setBadge(num);
});

ipcMain.on('logging', function (event, log) {
  // num should be a string.
  console.log(log);
});
