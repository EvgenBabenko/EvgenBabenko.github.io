var createSummator = function createSummator(initialValue) {
  initialValue = initialValue || 0;
  var result = initialValue;
  return {
    inc: function(num) {
      num = num || 1;
      return result += num;
    },

    dec: function(num) {
      num = num || 1;
      return result -= num;
    },

    get: function() {
      return result;
    }
  };
};

var task_createSummator = {
  "taskURL": "http://jscourse.com/task/incapsulated-counter",
  "name": "Реализовать счетчик, сокрыв детали реализации",
  "task": "Написать функцию createSummator(initialValue), с опциональным (необязательным) первым параметром, который является точкой отчета счетчика. Если аргумент initialValue не передан, то отчет начинается с 0. При каждом вызове функция возвращает объект с методами inc(num), dec(num), get(). Объектов, которые возвращает функция createSummator(initialValue), может быть любое количество. \n\
 \n\
    Реализация должна позволять манипуляции со значением счетчика только с использованием этих методов. \n\
 \n\
    Вызов метода inc(num) увеличивает значение счетчика на значение аргумента num. Если метод вызван без аргумента, то значение счетчика увеличивается на 1. \n\
    Вызов метода dec(num) уменьшает значение счетчика на значение num, если метод вызван с аргументом. Если метод вызван без аргумента, то значение счетчика уменьшается на 1. \n\
    Вызов метода get() возвращает текущее значение счетчика. \n\
    Примеры использования:",
  "examples": " \n\
    var s1 = createSummator(); \n\
    s1.inc(); \n\
    s1.inc(); \n\
    s1.inc(); \n\
    console.log(s1.get()); // 3 \n\
 \n\
    var s2 = createSummator(10); \n\
    s2.inc(2); \n\
    s2.inc(3); \n\
    s2.inc(4); \n\
    console.log(s2.get()); // 19 \n\
 \n\
    var s3 = createSummator(5); \n\
    s3.inc(5); \n\
    s3.dec(10); \n\
    console.log(s3.get()); // 0 \n\
    ",
  "solutions": {
    "": createSummator.toString()
  }
};