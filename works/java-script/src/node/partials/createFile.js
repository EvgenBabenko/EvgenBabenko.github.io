/*jshint esversion: 6 */

function createFile(pathToFile) {
  'use strict';

  let emptyJSON = {
    taskList: []
  };

  let fs = require('fs');

  fs.writeFileSync(pathToFile, JSON.stringify(emptyJSON, null, '  '), 'utf8', function(err) {
    if (err) throw err;
    console.log('Empty bundle file was created! in same location.');
  });
}

module.exports = createFile;