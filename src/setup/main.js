let {getCurrentWindow} = require('electron').remote;

$(".close").on('click', () => {
    getCurrentWindow().close();
});

$(".maximize").on('click', () => {
    if(getCurrentWindow().isMaximized()) {
        getCurrentWindow().unmaximize()
        getCurrentWindow().setSize(800, 600);
    } else {
        getCurrentWindow().maximize();
    }
});

$(".minimize").on('click', () => {
    getCurrentWindow().minimize();
})
