var createObject = function createObject(arrOfKeys, arrOfData) {
  var res = {};
  for (var i = 0; i < arrOfKeys.length; i++) {
    res[arrOfKeys[i]] = arrOfData[i];
  }
  return res;
};

var task_createObject = {
  "taskURL": "http://jscourse.com/task/create-object-from-arrays",
  "name": "Создать объект из массивов данных",
  "task": "Реализовать функцию createObject(arrOfKeys, arrOfData), которая принимает аргументами два массива, и возвращает объект, в котором названия ключей это строки из массива arrOfKeys, а значения - элементы из массива arrOfData. В ключ, стоящий на первом месте массива arrOfKeys должно быть записано значение, стоящее на первом месте arrOfData. Если данных меньше, чем ключей, заполняй значения ключей как undefined. Пример работы:",
  "examples": " \n\
    createObject(['foo'], ['bar']); // {foo: 'bar'}, \n\
    createObject(['foo', 'extra'], ['bar']); // {foo: 'bar', extra: undefined} \n\
    ",
  "solutions": {
    "for loop": createObject.toString()
  }
};

var description = 'with reduce method';

var createObject = function createObject(arrOfKeys, arrOfData) {
  return arrOfKeys.reduce(function(res, elem, index) {
    res[arrOfKeys[index]] = arrOfData[index];
    return res;
  }, {});
};

task_createObject.solutions[description] = createObject.toString();