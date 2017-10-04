var every = function every(arr, func) {
  for (var i = 1; i < arr.length; i++) {
    if (func(arr[i], i, arr) !== true) return false;
  }
  return true;
};

var task_every = {
  "taskURL": "http://jscourse.com/task/every",
  "name": "Проверить каждый элемент массива на удовлетворение условию",
  "task": "Реализовать функцию every(arr, func), которая принимает аргументами массив arr и функцию func. Возвращает true, если функция func вернет для каждого элемента массива true. В функцию func нужно передавать аргументами элемет массива, индекс элемента массива и сам массив. Пример как должен работать код:",
  "examples": " \n\
    Проверка на то, что все элементы массива - строки \n\
      every(['mama', 'mila', 'ramu'], function (arrayItem) { \n\
        return typeof arrayItem === 'string'; \n\
      });; // true \n\
    Проверка на то, что все элементы массива больше своих индексов \n\
      every([4, 8, 1], function (arrayItem, itemIndex) { \n\
        return arrayItem > itemIndex \n\
      });; // false \n\
    ",
  "solutions": {
    "for loop": every.toString()
  }
};

var description = 'with filter method';

var every = function every(arr, func) {
  var res = true;
  arr.filter(function(e, i, array) {
    if (func(e, i, array) !== true) res = false;
  });
  return res;
};

task_every.solutions[description] = every.toString();module.exports.task_every = task_every;