var toArray = function toArray(obj) {
  var res = [];
  for (var i = 0; i < obj.length; i++) {
    res.push(obj[i]);
  }
  return res;
};

var task_toArray = {
  "taskURL": "http://jscourse.com/task/array-like-object-to-array",
  "name": "Создать массив из массивоподобного объекта",
  "task": "Реализовать функцию toArray(obj), которая принимает аргументом массивоподобный объект (например arguments), и возвращает массив из тех же элементов, которые входили в массивоподобный объект. Пример работы:",
  "examples": " \n\
    function someFunc() { \n\
      var args = toArray(arguments); \n\
      console.log(arguments.forEach); // undefined, метод есть только у массивов. \n\
      console.log(args.forEach); // [function], метод есть только у массивов. \n\
    } \n\
 \n\
    someFunc(1,2,3,4); \n\
    ",
  "solutions": {
    "for loop": toArray.toString()
  }
};module.exports.task_toArray = task_toArray;