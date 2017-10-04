var sum = function sum() {
  args = [].slice.call(arguments);
  return args.reduce(function(res, elem) {
    return res + elem;
  });
};

var task_sum = {
  "taskURL": "http://jscourse.com/task/summ-all-arguments",
  "name": "Сложить все аргументы",
  "task": "Реализуй функцию sum(), которая суммирует все передаваемые ей аргументы. В аргументах могут быть любые данные. Пример работы:",
  "examples": " \n\
    sum(10, 20); // 30 \n\
    ",
  "solutions": {
    "slice and call method": sum.toString()
  }
};module.exports.task_sum = task_sum;