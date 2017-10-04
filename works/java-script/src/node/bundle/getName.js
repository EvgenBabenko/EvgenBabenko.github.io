var getName = function getName(path) {
  var pathSequence = path.split('/');
  for (var i = pathSequence.length - 1; i > 0;) {
    if (pathSequence[i] === '') {
      i--;
    } else {
      return pathSequence[i];
    }
  }
};

var task_getName = {
  "taskURL": "http://jscourse.com/task/get-name-from-path",
  "name": "Получить название файла или папки из пути",
  "task": "Реализовать функцию getName(path), которая возвращает название папки или файла из строки пути. Разделители сегментов путей - юниксовые ('/'). Примеры путей:",
  "examples": " \n\
    '/users/dmitry/Dropbox/' //Dropbox \n\
    '/users/dmitry/Dropbox' // Dropbox \n\
    '/users/dmitry/Dropbox/main.js' // main.js \n\
    ",
  "solutions": {
    "for loop": getName.toString()
  }
};module.exports.task_getName = task_getName;