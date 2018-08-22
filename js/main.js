(function () {
  class Gallery {
    constructor(workList) {
      this.workList = workList;

      this.galleryNode = document.querySelector('.gallery');
      this.galleryTagsNode = document.querySelector('.gallery-tags');

      this.buildTagsList(this.workList, this.galleryTagsNode);
      this.buildGallery(this.workList, this.galleryNode);
    }

    buildTagsList(workList, node) {
      let tagList = [].concat('All', ...this.collectUniqueTags(workList));

      node.appendChild(this.createList(tagList));

      let [activeByDefault] = node.getElementsByTagName('li');
      activeByDefault.className = 'active';

      this.bindEvents();
    }

    bindEvents() {
      this.galleryTagsNode.addEventListener('click', ({ target }) => {
        if (target.tagName !== 'LI') return;

        if (target.parentNode.querySelector('.active')) {
          target.parentNode.querySelector('.active').classList.remove('active');
        }

        target.classList.add('active');

        this.buildGallery(this.filterByField(this.workList, target.innerText));
      });
    }

    buildGallery(workList) {
      this.clearGallery();

      workList.forEach(work => this.buildGalleryItem(work));
    }

    clearGallery() {
      this.galleryNode.innerHTML = '';
    }

    collectUniqueTags(works) {
      const uniqueList = works
        .reduce((result, work) => result.concat(work.tags), [])
        .reduce((res, work) => {
          res[work] = true;

          return res
        }, {})

      return Object.keys(uniqueList);
    }

    filterByField(works, field) {
      return field === 'All' ? works : works.filter(work => work.tags.includes(field));
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

    buildGalleryItem(item) {
      const image = this.createNode('img', { src: item.image || 'img/mock.jpg' });
      const linkTitle = this.createNode('a', { href: item.linkDemo || item.linkCode }, item.title);
      const linkDemo = item.linkDemo && this.createNode('a', { href: item.linkDemo }, 'Demo');
      const linkCode = this.createNode('a', { href: item.linkCode }, 'Code');
      const linkTemplate = item.linkTemplate && this.createNode('a', { href: item.linkTemplate }, 'Template');
      const description = this.createNode('p', {}, item.description);
      
      const linkContainer = this.createNode('div', {}, linkDemo, linkTemplate, linkCode);
      const galleryMask = this.createNode('div', { className: 'gallery-mask' }, description, linkContainer);

      const tags = this.createList(item.tags, 'div', 'span');
      const tagsImage = this.createNode('i', { className: 'fa fa-tags', ariaHidden: true });
      tags.insertBefore(tagsImage, tags.children[0]);
      tags.className = 'gallery-tags';

      const galleryDescription = this.createNode('div', { className: 'gallery-description' }, linkTitle, tags);
      const galleryImageWrapper = this.createNode('div', { className: 'gallery-image-wrapper' }, image, galleryMask);
      const galleryItem = this.createNode('div', { className: 'gallery-itm' }, galleryImageWrapper, galleryDescription);

      this.galleryNode.appendChild(galleryItem);
    }

    createNode(tag, props, ...children) {
      let element = document.createElement(tag);

      Object.keys(props).forEach(key => element[key] = props[key]);

      children.forEach(child => {
        if (!child) return;

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