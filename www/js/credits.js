'use strict';

/**
 * @function
 * @name ready
 * @summary Ready
 * @description Document Ready function (JavaScript)
 * @param {function} callback Callback function.
 * @returns {void} Nothing.
 */
function ready(callback) {
  if (document.readyState !== 'loading') {
    callback();
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', callback);
  } else {
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState === 'complete') callback();
    });
  }
}

function insertIntro() {
  const intro = document.getElementById('intro');
  const iEl = document.createElement('i');
  const iElTxt = document.createTextNode('Sigh');
  iEl.append(iElTxt);
  intro.appendChild(iEl);
  const quadDotSpanEl = document.createElement('span');
  const quadDotSpanElTxt = document.createTextNode('....');
  quadDotSpanEl.append(quadDotSpanElTxt);
  intro.appendChild(quadDotSpanEl);
  const brEl = document.createElement('br');
  intro.appendChild(brEl);
  const infoSpanEl = document.createElement('span');
  const infoSpanElTxt = document.createTextNode(
    'I wish there were more people on this list, but unfortunately this project was made solely by me (for legal reasons).'
  );
  infoSpanEl.append(infoSpanElTxt);
  intro.appendChild(infoSpanEl);
}
ready(insertIntro);
