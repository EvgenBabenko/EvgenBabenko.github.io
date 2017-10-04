var execFunctions = function execFunctions(arrOfFunctions) {
  return arrOfFunctions.map(function(elem) {
    return elem();
  });
};

var task_execFunctions = {
  "taskURL": "http://jscourse.com/task/exec-each-function-in-array",
  "name": "Выполнить функции из массива",
  "task": "Релизовать функцию execFunctions(arrOfFunctions), которая получает аргументом массив функций arrOfFunctions, и возвращает массив, где каждый элемент это результат вызова функции стоящей на индексе, что и элемент. Пример работы:",
  "examples": " \n\
    function return10() { \n\
      return 10; \n\
    } \n\
 \n\
    function returnUser() { \n\
      return {name: 'Evgen'}; \n\
    } \n\
 \n\
    function empty() {} \n\
    execFunctions([return10, returnUser, empty]); // [10, {name: 'Evgen'}, undefined] \n\
    ",
  "solutions": {
    "map method": execFunctions.toString()
  }
};