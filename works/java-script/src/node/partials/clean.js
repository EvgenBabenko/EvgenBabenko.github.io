/*jshint esversion: 6 */

let clean = function(path) {
  'use strict';

  let fs = require('fs');

  fs.unlinkSync(path, function(err) {
    if (err) throw err;
    console.log(path + ' was deleted');
  });
};

module.exports = clean;