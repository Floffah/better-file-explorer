let {app, BrowserWindow} = require('electron'),
    fs = require('fs'),
    path = require('path');

app.on('ready', () => {
    if(fs.existsSync(path.resolve(app.getPath("userData"), 'data', 'settings.json'))) {
        explorer("%quick%");
    } else {
        setup();
    }
});

function explorer(path) {

}

function setup() {
    let setup = new BrowserWindow({
        frame: false,
        show: false,
        minWidth: 600,
        minHeight: 600,
        resizable: false,
        minimizable: false,
        fullscreenable: false,
        maximizable: false,
        transparent: true,
        vibrancy: "light",
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            experimentalFeatures: true
        }
    });

    setup.loadFile(path.resolve(__dirname, '../assets/views', 'setup.html'));

    setup.on('ready-to-show', () => {
        setup.show();
    });
}
