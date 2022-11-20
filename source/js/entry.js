'use strict';

import glitch from './modules/glitch';
import main from './modules/main';
import modal from './modules/modal-innerHTML';
import navigator from './modules/navigator';
import message from './modules/message';

window.addEventListener('DOMContentLoaded', () => {
  navigator();
  main();
  glitch();
  modal();
  message();
});
