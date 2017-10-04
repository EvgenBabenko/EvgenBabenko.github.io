/*jshint esversion: 6 */

function append(src, dest) {
  'use strict';

  const fs = require('fs');
  const path = require('path');

  let taskName;
  let data;

  let fileName = path.parse(src);
  fileName = fileName.name;

  taskName = "task_" + fileName;
  data = 'module.exports.' + taskName + " = " + taskName + ";";
  fs.appendFileSync(dest, data, function(err) {
    if (err) throw err;
    console.log(fileName + ' updated and saved!');
  });
}

module.exports = append;


// 'use strict';

// const fs = require('fs');


// function readFile(file) {
//   return fs.readFileSync(file, 'utf8');
// }

// function writeFile(file, content) {
//   return fs.writeFileSync(file, content, 'utf8', handleError);
// }

// function handleError(err) {
//   if (err) {
//     return console.log('ahhhhh!');
//   }
//   return console.log('Saved');
// }

// function copyFile(dest, src) {
//   writeFile(dest, readFile(src));
// }

// module.exports = copyFile;

// function append(src, dest) {
//   'use strict';

//   var arrayFileName = [];
//   var arr;
//   var fileName;
//   var fileDir;
//   var destDir;
//   var taskName;
//   var data;

//   fs.readdirSync(src).forEach(function(file) {
//     arr = file.split('');
//     arr.splice(-3, 3);
//     fileName = arr.join('');
//     taskName = "task_" + fileName;
//     arrayFileName.push(taskName);
//     data = 'module.exports.' + taskName + " = " + taskName + ";";
//     fileDir = src + file;
//     destDir = dest + file;
//     copyFile(destDir, fileDir);
//     fs.appendFileSync(destDir, data, function(err) {
//       if (err) throw err;
//       console.log(file + ' updated and saved!');
//     });
//   });
//   module.exports.arrayFileName = arrayFileName;
// }