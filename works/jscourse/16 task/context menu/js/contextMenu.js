/*
Реализовать ContextMenu

-первый аргумент - узел на котором будет работать контекстное меню
-второй аргумент - описание структуры меню. Пример описания прикладывается. Структура может быть любой по вложенности и количеству элементов меню. (рекурсивно генерировать DOM будет ок)
-подменю может содержать вложенные подменю
-при правом клике по узлу, для которого было создано ContextMenu показывать меню прямо под местом клика.
-при клике по пункту меню должна выполняться соответствующая функция
каждый элемент, содержащий подменю, должен быть отмечен ">" символом
подменю открывается при наведении на пункт подменю, и закрывается при уходе мышки с подменю или пункта подменю (смотри события mouseenter и mouseleave)
-с позиционированием (чтобы все меню и подменю вмещались в видимую часть экрана) можно не заморачиваться
-стилизовать меню можно на свой вкус (главное - видимые границы элементов)

Пример объекта-структуры меню:

const menu2 = [{
            title: 'Open',
            action: function () { console.log('open file') }
        }, {
            title: 'Edit',
            action: function () { console.log('edit content') }
        }, {
            title: 'More stuff',
            submenu: [{
                title: 'Send by email',
                action: function () { console.log('emailed') }
            }, {
                title: 'Send via skype',
                action: function () { console.log('skyped') }
            }]
        }];
*/

// jshint esversion:6

(function() {
    class ContextMenu {
        constructor(structure, targetNode) {
            this.structure = structure;
            this.targetNode = targetNode;
    
            this.init();
        }
    
        init() {
            this.treeDOM = this._buildMarkup(this.structure);
            this.treeDOM.className = 'context-menu';
            this.targetNode.appendChild(this.treeDOM);
    
            this.targetNode.addEventListener('contextmenu', this._handlerContextMenu.bind(this));
            document.documentElement.addEventListener('click', this._handlerClick.bind(this));
        }
    
        _handlerContextMenu(e) {
            e.preventDefault();
            console.log(e);
            
            this.treeDOM.classList.add('on');
            this.treeDOM.style.top = `${e.pageY}px`;
            this.treeDOM.style.left = `${e.pageX}px`;
        }
    
        _handlerClick(e) {
            let contextmenu = this.treeDOM;
            if (e.target.classList.contains('context-menu') || e.target.classList.contains('submenu')) {
                return;
            }
    
            if (contextmenu.classList.contains('on')) {
                contextmenu.classList.remove('on');
            }
        }
    
        _buildMarkup(listData, listContainer = 'ul', itemContainer = 'li') {
            let container = document.createElement(listContainer);
            let item;
    
            listData.forEach(elem => {
                item = document.createElement(itemContainer);
                container.appendChild(item);
    
                for (let key in elem) {
                    let values = elem[key];
                    if (Array.isArray(values)) {
                        item.innerHTML = `${elem.title} >`;
                        item.className = 'submenu';
    
                        item.addEventListener('mouseenter', this._handlerEnter);
                        item.addEventListener('mouseleave', this._handlerLeave);
    
                        item.appendChild(this._buildMarkup(values));
                    } else {
                        item.innerText = `${elem.title}`;
                        item.addEventListener('click', elem.action);
                    }
                }
            });
    
            return container;
        }
    
        _handlerEnter({target}) {
            target.firstElementChild.style.display = 'block';
        }
    
    
        _handlerLeave({target}) {
            target.firstElementChild.style.display = 'none';
        }
    }

    window.ContextMenu = ContextMenu;
}());