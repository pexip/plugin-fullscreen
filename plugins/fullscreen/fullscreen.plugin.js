(function () {
  var fullscreenState = false;

  function load(participants$, conferenceDetails$) {
    console.log('Fullscreen Plugin', 'Loaded');
  }

  function makeFullscreen(participant) {
    var docElm = document.documentElement;

    if (!fullscreenState) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen();
      }

      fullscreenState = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }

      fullscreenState = false;
    }
  }

  function unload() {
    console.log('Fullscreen Plugin', 'Unloaded');
  }

  PEX.pluginAPI.registerPlugin({
    id: 'fullscreen-plugin-1.0',
    load: load,
    unload: unload,
    makeFullscreen: makeFullscreen,
  });
})();
