'use strict';
import { playSound, removeTransition } from '../handlers/keysHandlers.js';

export const pressTheKey = (e) => {
  playSound(e);
};
export const stopAnimation = (e) => {
  removeTransition(e);
};
