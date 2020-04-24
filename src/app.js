let {app, BrowserWindow} = require('electron'),
    fs = require('fs'),
    path = require('path');

app.on('ready', () => {
    explorer("%quick%");
});

function explorer(pth) {

    let evib = require('electron-vibrancy-fixforlatest');
    let setup = new BrowserWindow({
        frame: false,
        show: false,
        minWidth: 800,
        minHeight: 600,
        width: 800,
        height: 600,
        fullscreenable: false,
        transparent: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            experimentalFeatures: true
        }
    });

    setup.loadFile(path.resolve(__dirname, '../assets/views', 'ui.html'));

    setup.on('ready-to-show', () => {
        evib.SetVibrancy(setup, 0);
        setup.show();
    });
}
