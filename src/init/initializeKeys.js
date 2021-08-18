'use strict';
import { soundsData } from '../data.js';
import { pressTheKey, stopAnimation } from '../listeners/keysListeners.js';
import { addHTMLElementsForEachKey } from '../views/keysViews.js';

const initializeKeys = () => {
  addHTMLElementsForEachKey(soundsData);
  grabTheTransitionedKeys();
};
export const grabTheTransitionedKeys = () => {
  const keys = document.querySelectorAll('.key');
  keys.forEach((key) => key.addEventListener('transitionend', stopAnimation));
};

window.addEventListener('load', initializeKeys);
window.addEventListener('keydown', pressTheKey);
