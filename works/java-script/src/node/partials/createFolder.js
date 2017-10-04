/*jshint esversion: 6 */

function createFolder(pathToDir) {
  'use strict';

  let fs = require('fs');

  if (!fs.existsSync(pathToDir)) {
    fs.mkdirSync(pathToDir);
  }
  console.log('Empty folder was created');
}

module.exports = createFolder;