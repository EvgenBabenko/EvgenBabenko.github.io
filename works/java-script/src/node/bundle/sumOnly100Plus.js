var sumOnly100Plus = function sumOnly100Plus(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] > 100) {
      result += arr[i];
    }
  }
  return result;
};

var task_sumOnly100Plus = {
  "taskURL": "http://jscourse.com/task/summ-numbers-by-condition",
  "name": "Просуммировать числа из массива, которые больше 100",
  "task": "Реализовать функцию sumOnly100Plus, которая принимает аргументом массив, и возвращает сумму всех чисел массива, которые больше 100. В массиве могут быть не только числовые данные, их никак не учитывать. Пример работы:",
  "examples": "\n\
    sumOnly100Plus([150, '200', ' ', 30, 300]); // 450\n\
    ",
  "solutions": {
    "for loop": sumOnly100Plus.toString()
  }
};

var description = 'with reduce method';

var sumOnly100Plus = function sumOnly100Plus(arr) {
  return arr.reduce(function(accu, current) {
    if (typeof current === 'number' && current > 100) {
      return accu + current;
    }
    return accu;
  }, 0);
};

task_sumOnly100Plus.solutions[description] = sumOnly100Plus.toString();

var description = 'with reduce and filter method';

var sumOnly100Plus = function sumOnly100Plus(arr) {
  return arr.filter(function(value) {
      return value > 100 && typeof value === 'number';
    })
    .reduce(function(res, value) {
      return res + value;
    }, 0);
};

task_sumOnly100Plus.solutions[description] = sumOnly100Plus.toString();module.exports.task_sumOnly100Plus = task_sumOnly100Plus;