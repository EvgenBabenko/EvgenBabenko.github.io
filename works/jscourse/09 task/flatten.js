/*
Упростить массив
Реализовать функцию flatten(arr), которая принимает аргументом массив. 
Элементами массива могут быть как простые типы данных (числа, строки), 
так и массивы. Функция должна вернуть массив, состоящий из всех элементов 
вложенных массивов. Глубина вложенности массивов может быть любая. Примеры:

flatten([1, 2, 3, [1, 2, 3]]); // [1, 2, 3, 1, 2, 3]
flatten(['mama', ['mila'], [], [['ramu']]]); // ['mama', 'mila', 'ramu']
*/


function flatten(array) {
	return array.reduce(function(res, elem) {
		while (Array.isArray(elem)) {
			return res.concat(flatten(elem));
		}
		return res.concat(elem);
	}, []);
}