'use strict';
// jshint esversion: 6 

const src = './tasks';
const dest = './bundle/';
const json = './bundle.json';
const dir = './partials/';

const createFolder = require(dir + 'createFolder');
createFolder(dest);

const createFile = require(dir + 'createFile');
createFile(json);

const putFilesToArray = require(dir + 'putFilesToArray');
putFilesToArray(src);
const arrayOfFiles = putFilesToArray.arrayOfFiles;

const copyFile = require(dir + 'copyFiles');
const append = require(dir + 'append');
arrayOfFiles.forEach(srcFile => {
  const path = require('path');
  let fileName = path.basename(srcFile);
  copyFile(srcFile, dest + fileName);
  append(srcFile, dest + fileName);
});



setTimeout(function() {
  const fs = require('fs');
  const path = require('path');

  fs.readFile(json, 'utf8', function(err, data) {
    if (err) throw data;

    let arrayOfObject = JSON.parse(data);

    arrayOfFiles.forEach(srcFile => {

      let file = path.basename(srcFile);
      let bundle = require(dest + file);
      let fileName = path.parse(srcFile);
      fileName = fileName.name;
      let taskName = "task_" + fileName;
      let object = bundle[taskName];
      arrayOfObject.taskList.push(object);
    });
    fs.writeFile(json, JSON.stringify(arrayOfObject, null, '  '), 'utf8', function(err) {
      if (err) throw err;
      console.log('Bundle file was updated');
    });
  });
}, 0);