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