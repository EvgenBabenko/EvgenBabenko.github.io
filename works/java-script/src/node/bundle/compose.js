var compose = function compose() {
  var args = [].slice.call(arguments);
  return function() {
    args.forEach(function(e) {
      e();
    });
  };
};

var task_compose = {
  "taskURL": "http://jscourse.com/task/compose",
  "name": "Объединить несколько функций в одну",
  "task": "Реализовать функцию compose, которая принимает аргументами любое количество функций, и возвращает функцию, которая при вызове вызовет все функции, которые compose получила аргументом.",
  "examples": " \n\
    function log1() {console.log(111)}; \n\
    function log2() {console.log(222)}; \n\
    function log3() {console.log(333)}; \n\
    var logAll = compose(log1, log2, log3); \n\
    logAll(); // 111 \n\
              // 222 \n\
              // 333 \n\
    ",
  "solutions": {
    "": compose.toString()
  }
};module.exports.task_compose = task_compose;