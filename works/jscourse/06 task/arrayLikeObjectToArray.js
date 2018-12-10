/*
http://jscourse.com/task/array-like-object-to-array
*/

/*
Создать массив из массивоподобного объекта
Реализовать функцию toArray(obj), которая принимает аргументом массивоподобный объект (например arguments), и возвращает массив из тех же элементов, которые входили в массивоподобный объект.

Пример работы:

function someFunc() {
    var args = toArray(arguments);
    console.log(arguments.forEach); // undefined, метод есть только у массивов.
    console.log(args.forEach); // [function], метод есть только у массивов.
}

someFunc(1,2,3,4);
*/

function toArray(obj) {
	var res = [];
	for (var i = 0; i < obj.length; i++) {
		res.push(obj[i]);
	}
	return res;
}


var obj = {
  0: 'one',
  1: 'two',
  2: 'three',
  length: 3
};

function toArray(obj) {
  var key = Object.keys(obj);
  var result = [];
  key.forEach(function(element) {
    if (element !== 'length') {
      result.push(obj[element]);
    }
  });
  return result;
}

toArray(obj);



//with method call

function toArray(obj) {
  var res = [].slice.call(obj);
  return res;
}