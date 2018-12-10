/*
http://jscourse.com/task/extract-odd-items
Отфильтровать элементы массива с нечетным индексом
Реализовать функцию extractOddItems(arr), которая возвращает новый массив, в котором содержатся только те элементы, которые обладали нечетным индексом в массиве, переданном в качестве аргумента. Пример работы:

extractOddItems([0,1,0,1,0,1]); // [1,1,1]
extractOddItems([1,2,3,4,5]); [2, 4]
*/

function extractOddItems(arr) {
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		if (i % 2 !== 0) {
			res.push(arr[i]);
		}
	}
	return res;
}

//with filter method

function extractOddItems(arr) {
	return arr.filter(function(elem, index) {
		return index % 2 !== 0;
	});
}