
(function(){

    class Gallery{
        constructor(data) {
            this.workList = data;

            this.gallery = document.querySelector('.gallery');
            this.galleryFilter = document.querySelector('.gallery-filter');

            let uniqueList = this.getUnique(this.collectAllTags());
            uniqueList.unshift('All');
            this.filterNavigation = this.createList(uniqueList);
            this.galleryFilter.appendChild(this.filterNavigation);

            let activeByDefault = this.galleryFilter.getElementsByTagName('li')[0];
            activeByDefault.className = 'active';


            this.workList.forEach(workItem => this.buildGallery(workItem));


            this.galleryFilter.addEventListener('click', (e) => {
                if (e.target.tagName !== 'LI') return;
                this.removeGallery();

                if (e.target.parentNode.querySelector('.active')) {
                    e.target.parentNode.querySelector('.active').classList.remove('active');
                }

                e.target.classList.add('active');

                let filteredWorkList = this.filterByField(this.workList, e.target.innerText);
                
                if (e.target.innerText === 'All') {
                    filteredWorkList = this.workList;
                }

                filteredWorkList.forEach(filteredWorkItem => this.buildGallery(filteredWorkItem));
            });


        }


        removeGallery() {
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


        filterByField(data, item) {
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
            const linkTitle = this.createNode('a', {href: item.link}, item.title);
            const linkDemo = this.createNode('a', {href: item.link}, 'Demo');
            const description = this.createNode('p', {}, item.description);
            const linkCode = this.createNode('a', {href: item.linkCode}, 'GitHub');
            const linkContainer = this.createNode('div', {}, linkDemo, linkCode);
            const galleryMask = this.createNode('div', {className: 'gallery-mask'}, description, linkContainer);

            const tags = this.createList(item.tags, 'div', 'span');
            const tagsImage = this.createNode('i', {className: 'fa fa-tags', ariaHidden: true});
            tags.insertBefore(tagsImage, tags.children[0]);
            tags.className = 'gallery-tags';

            const galleryDescription = this.createNode('div', {className: 'gallery-description'}, linkTitle, tags);
            const galleryImageWrapper = this.createNode('div', {className: 'gallery-image-wrapper'}, image, galleryMask);
            const galleryItm = this.createNode('div', {className: 'gallery-itm'}, galleryImageWrapper, galleryDescription);

            this.gallery.appendChild(galleryItm);
        }


        createNode(tag, props, ...children) {
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