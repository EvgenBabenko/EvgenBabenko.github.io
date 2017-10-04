var fixStruct = function fixStruct(struct) {
  for (var i = 1; i < struct.length - 1; i++) { //not first and last
    if (struct[i].delta !== struct[i].value - struct[i - 1].value) {
      break;
    }
  }
  struct[i].value = struct[i + 1].value - struct[i + 1].delta;
  struct[i].delta = struct[i].value - struct[i - 1].value;
  return struct;
};

var task_fixStruct = {
  "taskURL": "http://jscourse.com/task/fix-object-in-sequence",
  "name": "Найти и исправить объект в структуре",
  "task": "Есть структура вида:\
    [{\
        delta: 5,\
        value: 5\
    }, {\
        delta: -3,\
        value: 2\
    }, {\
        delta: 5,\
        value: 7\
    }, {\
        delta: 0,\
        value: 7\
    }]\
    Она подчиняется следющему правилу: каждый последующий объект массива содержит объект со свойствами delta и value. delta - разница значений value с предыдущим объектом.\
\
    У тебя есть экземпляр структуры, и достоверно известно, что один (и только один) из элементов имеет неверное значение delta и value, и что этот элемент не является ни первым, ни последним. Необходимо написать функцию fixStruct(struct), которая изменяет неверное значение таким образом, чтобы его delta и value снова подчинялись правилу, описанному выше. Пример работы:",
  "examples": " \n\
    var struct = [{ \n\
        delta: 0, \n\
        value: 1 \n\
    }, { \n\
        delta: 0, \n\
        value: 0 \n\
    }, { \n\
        delta: 3, \n\
        value: 5 \n\
    }]; \n\
    console.log(fixStruct(struct)); \n\
    [{ \n\
        delta: 0, \n\
        value: 1 \n\
    }, { \n\
        delta: 1, \n\
        value: 2 \n\
    }, { \n\
        delta: 3, \n\
        value: 5 \n\
    }] \n\
    ",
  "solutions": {
    "for loop": fixStruct.toString()
  }
};