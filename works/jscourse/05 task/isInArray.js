/*
http://jscourse.com/task/is-in-array
*/

/*
Проверить вхождение элементов в массив
Реализовать функцию isInArray , проверяющую вхождение элементов в массив. Первый аргумент функции - массив, последующие - элементы, вхождение в массив которых проверяется. Функция возвращает true, если все аргументы, кроме первого являются элементами массива.

Пример работы:

isInArray([1], 1); // true
isInArray([1], 1, 2); // false
isInArray([1, 2], 1, 2); // true
*/

function isInArray(arr) {
	for (var i = 1; i < arguments.length; i++) {
		if (arr.indexOf(arguments[i]) === -1) return false;
	}
	return true;
}