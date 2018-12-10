/*
http://jscourse.com/task/summ-all-arguments
*/

/*
Сложить все аргументы
Реализуй функцию sum(), которая суммирует все передаваемые ей аргументы. В аргументах могут быть любые данные. Пример работы:

sum(10, 20); // 30
*/

function sum() {
	args = [].slice.call(arguments);
	return args.reduce(function(res, elem) {
		return res + elem;
	});
}
