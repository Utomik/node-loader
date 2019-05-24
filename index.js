/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
const path = require('path');

module.exports = function() {
  // Is now a hardcoded file. Can be extended in future if necessary.
  function getResourceRelative(resourcePath) {
    return JSON.stringify('./addon.node');
  }

  return (
    'try {global.process.dlopen(module, ' +
    getResourceRelative(this.resourcePath) +
    '); } catch(e) {' +
    "throw new Error('Cannot open ' + " +
    getResourceRelative(this.resourcePath) +
    " + ': ' + e);}"
  );
};
