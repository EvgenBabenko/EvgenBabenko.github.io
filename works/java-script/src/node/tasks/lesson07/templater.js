var templater = function templater(templateString, dataObj) {
  var stringToReplace;
  var dataToReplace;
  for (var key in dataObj) {
    stringToReplace = '${' + key + '}';
    dataToReplace = dataObj[key];
    while (templateString.indexOf(stringToReplace) !== -1) {
      templateString = templateString.replace(stringToReplace, dataToReplace);
    }
  }
  return templateString;
};

var task_templater = {
  "taskURL": "http://jscourse.com/task/simple-templater",
  "name": "Реализовать простейший templater",
  "task": "Описать функцию templater(templateString, dataObj). Функция, принимает аргументом строку и объект. Заменяет все вхождения подстрок вида ${STRING} значениями из объекта с ключом STRING. Пример использования:",
  "examples": " \n\
    templater('${who} ${action} ${what}', { \n\
      who: 'mama', \n\
      action: 'mila', \n\
      what: 'ramu' \n\
    }); // 'mama mila ramu' \n\
    ",
  "solutions": {
    "": templater.toString()
  }
};