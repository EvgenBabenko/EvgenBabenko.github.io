/*
http://jscourse.com/task/create-object-from-arrays
Создать объект из массивов данных
Реализовать функцию createObject(arrOfKeys, arrOfData), которая принимает аргументами два массива, и возвращает объект, в котором названия ключей это строки из массива arrOfKeys, а значения - элементы из массива arrOfData. В ключ, стоящий на первом месте массива arrOfKeys должно быть записано значение, стоящее на первом месте arrOfData. Если данных меньше, чем ключей, заполняй значения ключей как undefined. Пример работы:

createObject(['foo'], ['bar']); // {foo: 'bar'}
createObject(['foo', 'extra'], ['bar']); // {foo: 'bar', extra: undefined}
*/

function createObject(arrOfKeys, arrOfData) {
	var res = {};
	for (var i = 0; i < arrOfKeys.length; i++) {
		res[arrOfKeys[i]] = arrOfData[i];
	}
	return res;
}


//with reduce method

function createObject(arrOfKeys, arrOfData) {
	return arrOfKeys.reduce(function(res, elem, index) {
		res[arrOfKeys[index]] = arrOfData[index];
		return res;
	}, {});
}