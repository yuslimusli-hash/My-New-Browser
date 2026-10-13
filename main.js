const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: false, // Bütün sitelerin iframe / güvenlik engellerini komple kaldırır!
      webviewTag: true    // HTML içinde webview kullanabilmemizi sağlar
    }
  });

  // Wikipedia yerine kendi hazırladığımız index.html dosyasını yüklüyoruz!
  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();
});