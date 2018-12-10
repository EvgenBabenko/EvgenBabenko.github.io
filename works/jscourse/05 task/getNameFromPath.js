/*
http://jscourse.com/task/get-name-from-path
*/

/*
Получить название файла или папки из пути
Реализовать функцию getName(path), которая возвращает название папки или файла из строки пути. Разделители сегментов путей - юниксовые ("/"). Примеры путей:

'/users/dmitry/Dropbox/'
'/users/dmitry/Dropbox'
'/users/dmitry/Dropbox/main.js'
*/

function getName(path) {
	var pathSequence = path.split('/');
	for (var i = pathSequence.length - 1; i > 0; ) {
		if (pathSequence[i] === '') {
			i--;
		} else {
			return pathSequence[i];
		}
	}
}
getName('/users/dmitry/Dropbox/');