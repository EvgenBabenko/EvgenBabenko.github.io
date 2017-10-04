/*jshint esversion: 6 */

function putDataToJson(json, object) {
  const fs = require('fs');
  fs.readFile(json, 'utf8', function(err, data) {
    if (err) throw data;

    let arrayOfObject = JSON.parse(data);

    arrayOfObject.taskList.push(object);
    console.log(arrayOfObject);

    fs.writeFileSync(json, JSON.stringify(arrayOfObject, null, '\t'), 'utf8', function(err) {
      if (err) throw err;
      console.log('Bundle file was updated');
    });
  });
}

module.exports = putDataToJson;