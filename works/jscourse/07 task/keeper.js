/*
http://jscourse.com/task/keeper
*/

/*
Ключник
Релизовать функцию createKeeper(), которая возвращает объект с 2 методами put(key, value) и get(key). Метод get(key) должен возвращать данные, которые были сохранены с помощью метода put, если вызывается с тем-же значением key, что и put.Ключами могут быть как объекты, так и примитивы, про NaN не задумываться.Если put был вызван с таким ключом, с которым уже был вызван ранее, старое значение перезатирается новым. Доступ к ключам и значениями должен быть возможен только через методы put и get.

var keeper = createKeeper();
var key1 = {};
var key2 = {};
var key1Copy = key1;

keeper.put(key1, 999)
keeper.put(key2, [1,2,3])
console.log(keeper.get(key1)); // 999
console.log(keeper.get(key2)); // [1,2,3]
console.log(keeper.get(key1Copy)); // 999
console.log(keeper.get({})); // null
keeper.put(key1, key2);
console.log(keeper.get(key1Copy) === key2); // true
*/

function createKeeper() {
	var buffer = []; //where even index is a key and odd index is a value

	return {
		put: function(key, value) {
			if (buffer.indexOf(key) !== -1) {
				buffer[buffer.indexOf(key) + 1] = value;
			} else {
				buffer.push(key, value);
			}
		},

		get: function(key) {
			if (buffer.indexOf(key) !== -1) {
				return buffer[buffer.indexOf(key) + 1];
			} else {
				return null;
			}
		}
	};
}

var keeper = createKeeper();
var key1 = {};
var key2 = {};
var key1Copy = key1;

keeper.put(key1, 999);
keeper.put(key2, [1, 2, 3]);
console.log(keeper.get(key1)); // 999
console.log(keeper.get(key2)); // [1,2,3]
console.log(keeper.get(key1Copy)); // 999
console.log(keeper.get({})); // null
keeper.put(key1, key2);
console.log(keeper.get(key1Copy) === key2); // true