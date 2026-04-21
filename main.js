const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const window = new BrowserWindow({
    width: 1560,
    height: 1100,
    minWidth: 980,
    minHeight: 760,
    backgroundColor: "#181818",
    autoHideMenuBar: true,
    title: "Turbo CPS Tester",
    webPreferences: {
      contextIsolation: true,
      sandbox: true
    }
  });

  window.loadFile(path.join(__dirname, "index.html"));
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
