/*
Релизовать функцию createList(listData, listContainer, itemContainer), возвращаюшую узел списка. Использовать innerHTML нельзя. Второй и третий аргументы не обязательные. Значения по умолчанию для них - ul и li. listData - массив. listData Может содержать как элементы (текст), так и массивы элементов. Глубина вложенности массивов любая.

Примеры возвращаемых узлов:

createList(['мясо', 'рыба']) /* ->
<ul>
  <li>мясо</li>
  <li>рыба</li>
</ul>


createList(['мясо', ['яблоки', 'бананы']], 'ol') /*->
<ol>
  <li>мясо</li>
  <li>
    <ol>
      <li>яблоки</li>
      <li>бананы</li>
    </ol>
  </li>
</ol>


createList(['мясо', ['яблоки', 'бананы']], 'div', 'div') /*->
<div>
  <div>мясо</div>
  <div>
    <div>
      <div>яблоки</div>
      <div>бананы</div>
    </div>
  </div>
</div>

*/

/*jshint esversion: 6 */
function createList(listData, listContainer, itemContainer) {
  'use strict';
  listContainer = listContainer || 'ul';
  itemContainer = itemContainer || 'li';

  let res = document.createElement(listContainer);
  let item;

  listData.forEach(elem => {
    item = document.createElement(itemContainer);
    res.appendChild(item);
    if (Array.isArray(elem)) {
      item.appendChild(createList(elem, listContainer, itemContainer));
    } else {
      item.innerText = elem;
    }
  });

  return res;
}

createList(['мясо', ['яблоки', 'бананы'], 'asd',['ddd',['fff', []]]], 'ol');