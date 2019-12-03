'use strict';

var $ = function(documentObject) {
  try {
    if (typeof documentObject === 'object') {
      this.ready = function(callback) {
        if (documentObject.readyState !== 'loading') {
          callback();
        } else if (
          documentObject.addEventListener !== null &&
          documentObject.addEventListener !== undefined
        ) {
          documentObject.addEventListener('DOMContentLoaded', callback, false);
        } else {
          documentObject.attachEvent('onreadystatechange', function() {
            if (documentObject.readyState === 'complete') {
              callback();
            }
          });
        }
      };
      return this;
    } else {
      (function ready(callback) {
        if (document.readyState !== 'loading') {
          callback();
        } else if (
          document.addEventListener !== null &&
          document.addEventListener !== undefined
        ) {
          document.addEventListener('DOMContentLoaded', callback, false);
        } else {
          document.attachEvent('onreadystatechange', function() {
            if (document.readyState === 'complete') {
              callback();
            }
          });
        }
      })(documentObject);
    }
  } catch (err) {
    throw err;
  }
};
