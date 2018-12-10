/*
http://jscourse.com/task/contains
Проверить является ли один массив подмножеством второго
Дописать функцию contains(where, what). Если все элементы массива what содержатся в массиве where, функция должна возвращать true. Пустой массив является подмножеством любого массива. Порядок вхождения элементов в массив не имеет значения. Примеры:

contains([1,2,3], [3,2]); // true
contains([1,2,3], [3,2,1,2,3]); // true
*/

function contains(where, what) {
	for (var i = 0; i < what.length; i++) {
		if (where.indexOf(what[i]) === -1) 
			return false;
	}
	return true;
}

//with filter method

function contains(where, what) {
	var result = true;
	what.filter(function(elem) {
		if (where.indexOf(elem) === -1)
			result = false;
	});
	return result;
}