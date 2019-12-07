/**
 * @callback callback
 * @returns {void} Nothing.
 */

/**
 * @var
 * @class
 * @name $
 * @summary Document ready function
 * @description Waits for the page to load before executing main code.
 * @param {Document} documentObject The browser's document object or a callback function.
 * @returns {void | { ready: ready }} An object literal with a ready property or void (nothing).
 */
var $ = function(documentObject) {
  try {
    /**
     * @var
     * @function
     * @name ready
     * @summary Ready function.
     * @description Waits for page to finish loading, then executes callback function.
     * @param {callback | Document} callback The callback function to execute after page loads.
     * @returns {void} Nothing.
     */
    var ready = function(callback) {
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
    if (typeof documentObject === 'object') {
      return {
        ready: ready
      };
    } else {
      ready(documentObject);
    }
  } catch (err) {
    throw err;
  }
};
