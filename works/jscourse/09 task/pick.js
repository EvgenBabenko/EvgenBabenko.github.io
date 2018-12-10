/*
Выбрать ключи-значения из объекта
Реализовать функцию pick(obj, keys), которая принимает аргументами объект 
и массив строк (названия ключей). Возвращает новый объект, куда вошли все ключи, 
указанные в массиве keys, и соответствующие значения из объекта obj. Если в объекте 
obj, нет ключа, указанного в массиве keys, в результирующем объекте этот ключ не 
должен присутствовать.

var user = {
	name: 'Sergey',
	age: 30,
	email: 'sergey@gmail.com',
	friends: ['Sveta', 'Artem']
}
pick(user, ['name']); // {name: 'Sergey'}
pick(user, ['name', 'second-name']); // {name: 'Sergey'}
pick(user, ['name', 'friends']); // {name: 'Sergey', friends:['Sveta', 'Artem']}
*/



function pick(obj, keys) {
	var arrOfKeys = Object.keys(obj);
	return keys.reduce(function(res, elem) {
		var findedIndex = arrOfKeys.indexOf(elem);
		if (findedIndex !== -1) {
			res[elem] = obj[arrOfKeys[findedIndex]];
		}
		return res;
	}, {});
}