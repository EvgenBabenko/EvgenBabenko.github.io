
(function(){

    class Gallery{
        constructor(data) {
            this.workList = data;

            
            this.gallery = document.querySelector('.gallery');
            this.galleryFilter = document.querySelector('.gallery-filter');

            let ff = this.getUnique(this.collectAllTags());
            ff.unshift('All');
            this.filterNavigation = this.createList(ff);
            // this.filterNavigation.unshift('All');
            this.galleryFilter.appendChild(this.filterNavigation);
            let activeDefault = this.galleryFilter.getElementsByTagName('li')[0];
            activeDefault.className = 'active';


            this.workList.forEach(workItem => this.buildGallery(workItem));
            // this.getUnique(this.collectAllTags());


            this.galleryFilter.addEventListener('click', (e) => {
                console.log(e.target);
                if (e.target.tagName !== 'LI') return;
                this.removeAll();
                if (e.target.parentNode.querySelector('.active')) {
                    e.target.parentNode.querySelector('.active').classList.remove('active');
                }
                e.target.classList.add('active');

                let filteredArr = this.filterD(this.workList, e.target.innerText);
                
                if (e.target.innerText === 'All') {
                    filteredArr = this.workList;
                    console.log(filteredArr);
                }
                // console.log(filteredArr);
                filteredArr.forEach(workItem => this.buildGallery(workItem));
            });


        }


        removeAll() {
            while (this.gallery.firstElementChild) {
                this.gallery.firstElementChild.remove();
            }
        }


        collectAllTags() {
           return this.workList.reduce((result, workItem) => {
                return result.concat(workItem.tags);
            }, []);
        }


        getUnique(array) {
            let result = [];

            array.filter(elem => {
                if (result.indexOf(elem) === -1) {
                    result.push(elem);
                }
            });

            return result;
        }


        filterD(data, item) {
            return data.filter(elem => {
                return this.contain(item, elem.tags);
            });
        }


        contain(item, arr) {
            if (arr.indexOf(item) === -1) {
                return false;
            }
            return true;
        }


        createList(listData, listContainer, itemContainer) {
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


        buildGallery(item) {
            const image = this.createNode('img', {src: item.image});
            const linkImage = this.createNode('a', {href: item.link}, image);
            const linkTitle = this.createNode('a', {href: item.link}, item.title);
            const description = this.createNode('p', {}, item.description);

            const linkCode = this.createNode('a', {href: item.linkCode}, 'GitHub');

            const galleryContentTitle = this.createNode('div', {className: 'gallery-content-title'}, linkTitle, linkCode);
            const galleryContent = this.createNode('div', {className: 'gallery-content'}, galleryContentTitle, description);
            const galleryItm = this.createNode('div', {className: 'gallery-itm'}, linkImage, galleryContent);

            this.gallery.appendChild(galleryItm);
        }


        createNode(tag, props, ...children) {
            // debugger
            let element = document.createElement(tag);

            Object.keys(props).forEach(key => element[key] = props[key]);

            children.forEach(child => {
                if (typeof child === 'string') {
                    child = document.createTextNode(child);
                }

                element.appendChild(child);
            });

            return element;
        }


    }


    window.gallery = new Gallery(data);

    
}());