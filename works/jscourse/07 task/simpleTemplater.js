/*
http://jscourse.com/task/simple-templater
*/

/*
Реализовать простейший templater
Описать функцию templater(templateString, dataObj). Функция, принимает аргументом строку и объект. Заменяет все вхождения подстрок вида ${STRING} значениями из объекта с ключом STRING. Пример использования:

templater('${who} ${action} ${what}', {
 who: 'mama',
 action: 'mila',
 what: 'ramu'
}); // 'mama mila ramu'
*/


function templater(templateString, dataObj) {
	var stringToReplace;
	var dataToReplace;
	for (var key in dataObj) {
		stringToReplace = '${' + key + '}';
		dataToReplace = dataObj[key];
		while (templateString.indexOf(stringToReplace) !== -1) {
			templateString = templateString.replace(stringToReplace, dataToReplace);
		}
	}
	return templateString;
}

templater('${who} ${action} ${what}', {
	who: 'mama',
	action: 'mila',
	what: 'ramu'
}); // 'mama mila ramu'