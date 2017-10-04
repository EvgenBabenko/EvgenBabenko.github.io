var getUnique = function getUnique(list) {
  var res = [];
  for (var i = 0; i < list.length; i++) {
    if (res.indexOf(list[i]) === -1) res.push(list[i]);
  }
  return res;
};

var task_getUnique = {
  "taskURL": "http://jscourse.com/task/get-unique",
  "name": "Сформировать список без повторений",
  "task": "Реализовать функцию getUnique(arr), которая принимает аргументом массив или массивоподоный объект, и возвращает массив таких элементов, которые входят в массив аргумента, и встречаются только раз в массиве результата. Аргумент не должен изменяться. Порядок элементов результирующего массива должен совпадать с порядком, в котором они встречаются в оригинальной структуре.",
  "examples": " \n\
    var a = {}; \n\
    var b = {}; \n\
    var u = getUnique([a,b,b,a]); \n\
    console.log(u[0] === a); // true \n\
    console.log(u[1] === b); // true \n\
    console.log(u.length === 2); // true \n\
    ",
  "solutions": {
    "for loop": getUnique.toString()
  }
};