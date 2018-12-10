/*
http://jscourse.com/task/get-unique
*/

/*
Сформировать список без повторений
Реализовать функцию getUnique(arr), которая принимает аргументом массив или массивоподоный объект, и возвращает массив таких элементов, которые входят в массив аргумента, и встречаются только раз в массиве результата. Аргумент не должен изменяться. Порядок элементов результирующего массива должен совпадать с порядком, в котором они встречаются в оригинальной структуре.

var a = {};
var b = {};
var u = getUnique([a,b,b,a]);
console.log(u[0] === a); // true
console.log(u[1] === b); // true
console.log(u.length === 2); // true
*/

function getUnique(list) {
	var res = [];
	for (var i = 0; i < list.length; i++) {
		if (res.indexOf(list[i]) === -1) res.push(list[i]);
	}
	return res;
}

//with methods filter and indexOf

function getUnique(arr) {
  var array = [].slice.call(arr);
  var res = [];
  array.filter(function(elem) {
    if (res.indexOf(elem) === -1) {
      res.push(elem);
    }
  });
  return res;
}