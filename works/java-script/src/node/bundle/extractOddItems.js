var extractOddItems = function extractOddItems(arr) {
  var res = [];
  for (var i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      res.push(arr[i]);
    }
  }
  return res;
};

var task_extractOddItems = {
  "taskURL": "http://jscourse.com/task/extract-odd-items",
  "name": "Отфильтровать элементы массива с нечетным индексом",
  "task": "Реализовать функцию extractOddItems(arr), которая возвращает новый массив, в котором содержатся только те элементы, которые обладали нечетным индексом в массиве, переданном в качестве аргумента. Пример работы:",
  "examples": " \n\
    extractOddItems([0,1,0,1,0,1]); // [1,1,1], \n\
    extractOddItems([1,2,3,4,5]); [2, 4] \n\
    ",
  "solutions": {
    "for loop": extractOddItems.toString()
  }
};

var description = 'with filter method';

var extractOddItems = function extractOddItems(arr) {
  return arr.filter(function(elem, index) {
    return index % 2 !== 0;
  });
};

task_extractOddItems.solutions[description] = extractOddItems.toString();module.exports.task_extractOddItems = task_extractOddItems;