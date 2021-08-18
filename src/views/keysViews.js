'use strict';

import { createDOMElement, getDOMElement } from '../utils/DOMUtils.js';

export const addHTMLElementsForEachKey = (dataArray) => {
  const containerEle = getDOMElement('user-interface');
  dataArray.forEach((sound) => {
    const keyELe = createDOMElement('div');
    keyELe.classList.add('key');
    keyELe.setAttribute('data-key', sound.data_key);
    const letter = createDOMElement('kbd');
    letter.textContent = sound.keyboard_key;
    const soundName = createDOMElement('span');
    soundName.textContent = sound.sound_name;
    const audioEle = createDOMElement('audio');
    audioEle.src = sound.audio_source;
    audioEle.setAttribute('data-key', sound.data_key);
    keyELe.append(letter, soundName, audioEle);

    containerEle.appendChild(keyELe);
  });
};
