/*jshint esversion: 6 */

function putFilesToArray(path) {
  'use strict';

  const fs = require('fs');
  let arrayOfFiles = [];

  function gatheringFiles(path) {

    var arr = fs.readdirSync(path);

    arr.forEach(function(elem) {
      elem = path + '/' + elem;
      while (fs.lstatSync(elem).isDirectory()) {
        return gatheringFiles(elem);
      }
      arrayOfFiles.push(elem);
    });
  }
  gatheringFiles(path);

  arrayOfFiles.reverse();

  module.exports.arrayOfFiles = arrayOfFiles;

  return arrayOfFiles;
}

module.exports = putFilesToArray;