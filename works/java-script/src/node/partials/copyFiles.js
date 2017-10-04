/*jshint esversion: 6 */
'use strict';

const fs = require('fs');


function readFile(file) {
  return fs.readFileSync(file, 'utf8');
}

function writeFile(file, content) {
  return fs.writeFileSync(file, content, 'utf8', handleError);
}

function handleError(err) {
  if (err) {
    return console.log('ahhhhh!');
  }
  return console.log('Saved');
}

function copyFile(src, dest) {
  writeFile(dest, readFile(src));
}

module.exports = copyFile;