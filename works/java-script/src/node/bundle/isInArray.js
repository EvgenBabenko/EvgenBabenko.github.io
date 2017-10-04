var isInArray = function isInArray(arr) {
  for (var i = 1; i < arguments.length; i++) {
    if (arr.indexOf(arguments[i]) === -1) return false;
  }
  return true;
};

var task_isInArray = {
  "taskURL": "http://jscourse.com/task/is-in-array",
  "name": "Проверить вхождение элементов в массив",
  "task": "Реализовать функцию isInArray , проверяющую вхождение элементов в массив. Первый аргумент функции - массив, последующие - элементы, вхождение в массив которых проверяется. Функция возвращает true, если все аргументы, кроме первого являются элементами массива. Пример работы:",
  "examples": " \n\
    isInArray([1], 1); // true \n\
    isInArray([1], 1, 2); // false \n\
    isInArray([1, 2], 1, 2); // true \n\
    ",
  "solutions": {
    "for loop": isInArray.toString()
  }
};module.exports.task_isInArray = task_isInArray;