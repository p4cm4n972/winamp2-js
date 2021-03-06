import {
  play,
  pause,
  stop,
  adjustVolume,
  toggleRepeat,
  toggleShuffle,
  openFileDialog
} from './actionCreators';

module.exports = function(winamp, store) {
  let keylog = [];
  const trigger = [
    78, // N
    85, // U
    76, // L
    76, // L
    83, // S
    79, // O
    70, // F
    84  // T
  ];
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey) { // Is CTRL depressed?
      switch (e.keyCode) {
        case 68: // CTRL+D
          store.dispatch({type: 'TOGGLE_DOUBLESIZE_MODE'});
          break;
        case 76: // CTRL+L FIXME
          break;
        case 84: // CTRL+T
          store.dispath({type: 'TOGGLE_TIME_MODE'});
          break;
      }
    } else {
      switch (e.keyCode) {
        case 37: // left arrow
          winamp.seekForwardBy(-5);
          break;
        case 38: // up arrow
          store.dispatch(adjustVolume(winamp.media, 1));
          break;
        case 39: // right arrow
          winamp.seekForwardBy(5);
          break;
        case 40: // down arrow
          store.dispatch(adjustVolume(winamp.media, -1));
          break;
        case 66: // B
          winamp.next();
          break;
        case 67: // C
          store.dispatch(pause(winamp.media));
          break;
        case 76: // L
          openFileDialog(winamp);
          break;
        case 82: // R
          store.dispatch(toggleRepeat(winamp.media));
          break;
        case 83: // S
          store.dispatch(toggleShuffle(winamp.media));
          break;
        case 86: // V
          store.dispatch(stop(winamp.media));
          break;
        case 88: // X
          store.dispatch(play(winamp.media));
          break;
        case 90: // Z
          winamp.previous();
          break;
        case 96: // numpad 0
          openFileDialog(winamp);
          break;
        case 97: // numpad 1
          winamp.previous(10);
          break;
        case 98: // numpad 2
          store.dispatch(adjustVolume(winamp.media, -1));
          break;
        case 99: // numpad 3
          winamp.next(10);
          break;
        case 100: // numpad 4
          winamp.previous();
          break;
        case 101: // numpad 5
          store.dispatch(play(winamp.media));
          break;
        case 102: // numpad 6
          winamp.next();
          break;
        case 103: // numpad 7
          winamp.seekForwardBy(-5);
          break;
        case 104: // numpad 8
          store.dispatch(adjustVolume(winamp.media, 1));
          break;
        case 105: // numpad 9
          winamp.seekForwardBy(5);
          break;
      }
    }

    // Easter Egg
    keylog.push(e.keyCode);
    keylog = keylog.slice(-10);
    if (keylog.toString() === trigger.toString()) {
      store.dispatch({type: 'TOGGLE_LLAMA_MODE'});
    }
  });
};
