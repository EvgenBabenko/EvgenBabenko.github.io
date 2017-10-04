var queryStringToObject = function queryStringToObject(queryString) {
  var pairsKeyValue = queryString.split('&');
  var key;
  var value;
  var res = {};

  if (!queryString) return res;

  for (var i = 0; i < pairsKeyValue.length; i++) {
    key = pairsKeyValue[i].split('=')[0];
    value = decodeURIComponent(pairsKeyValue[i].split('=')[1]);
    if (value === 'true') {
      value = true;
    } else if (value === 'false') {
      value = false;
    } else if (!isNaN(value)) {
      value = parseInt(value, 10);
    } else {
      value = value;
    }
    res[key] = value;
  }
  return res;
};

var task_queryStringToObject = {
  "taskURL": "http://jscourse.com/task/query-string-to-object",
  "name": "Преобразовать строку запроса (query string) в объект",
  "task": "Реализуй функцию queryStringToObject(queryString), которая возвращает объект. Распознавать следующие типы данных: числа, строки, булевы. Помни, что некоторые символы query string могут быть закодированы. Пример работы:",
  "examples": " \n\
    queryStringToObject('user=true'); // {user: true} \n\
    queryStringToObject('user=true&age=29'); // {user: true, age: 29} \n\
    queryStringToObject('user=true&age=29&name=Evgen'); // {user: true, age: 29, name: 'Evgen'} \n\
    ",
  "solutions": {
    "for loop": queryStringToObject.toString()
  }
};