/*
Реализовать класс на прототипах
Реализовать класс Sequence(arr). Конструктор принимает аргументом массив элементов. 
Имеет методы (описанные в прототипе) go, next, prev. Запоминает на каком элементе 
из массива сейчас находится "указатель".

Метод go(index) возвращает элемент из массива с индексом index, или последний 
элемент массива, если index больше длины массива. Запоминает индекс возвращенного 
элемента. Метод next() возвращает следующий элемент из массива идущий за запомненным 
индексом, или первый элемент массива, если последний запомненный индекс - индекс 
последнего элемента. Метод prev() возвращает предыдущий элемент из массива идущий 
перед запомненным индексом, или последний элемент массива, если последний запомненный 
индекс - индекс первого элемента.

var s1 = new Sequence(['one', 'two', 'three'])
s1.go(2);  // 'three'
s1.next(); // 'one'
s1.next(); // 'two'

var s2 = new Sequence([{name: 'Manya'}, {name:'Valya'}]);
s2.go(100500); // {name: 'Valya'} последний элемент, так как индекс выходит 
за границы максимального
s2.prev(); // {name: 'Manya'}
s2.prev(); // {name: 'Valya'}
*/

function Sequence(arr) {
	this.arr = arr;
	this.index = 0;
}

Sequence.prototype.go = function(index) {
	this.index = index;
	if (this.index >= this.arr.length - 1) {
		this.index = this.arr.length - 1;
		return this.arr[this.index];
	} else {
		return this.arr[length];
	}
};

Sequence.prototype.next = function() {
	if (this.index + 1 > this.arr.length - 1) {
		this.index = 0;
		return this.arr[0];
	} else {
		this.index = this.index + 1;
		return this.arr[this.index];
	}
};

Sequence.prototype.prev = function() {
	if (this.index - 1 < 0) {
		this.index = this.arr.length - 1;
		return this.arr[this.arr.length - 1];
	} else {
		this.index = this.index - 1;
		return this.arr[this.index];
	}
};