var contains = function contains(where, what) {
  for (var i = 0; i < what.length; i++) {
    if (where.indexOf(what[i]) === -1)
      return false;
  }
  return true;
};

var task_contains = {
  "taskURL": "http://jscourse.com/task/contains",
  "name": "Проверить является ли один массив подмножеством второго",
  "task": "Дописать функцию contains(where, what). Если все элементы массива what содержатся в массиве where, функция должна возвращать true. Пустой массив является подмножеством любого массива. Порядок вхождения элементов в массив не имеет значения. Примеры:",
  "examples": " \n\
    contains([1,2,3], [3,2]); // true \n\
    contains([1,2,3], [3,2,1,2,3]); // true \n\
    ",
  "solutions": {
    "for loop": contains.toString()
  }
};

var description = 'with filter method';

var contains = function contains(where, what) {
  var result = true;
  what.filter(function(elem) {
    if (where.indexOf(elem) === -1)
      result = false;
  });
  return result;
};

task_contains.solutions[description] = contains.toString();