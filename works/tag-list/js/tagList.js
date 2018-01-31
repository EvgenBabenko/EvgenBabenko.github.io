// jshint esversion: 6

/*
Создать виджет TagList

Может переключаться из режима “редактирования” в режим “просмотра”. Для переключения используется 1 кнопка. Кнопка меняет свой текст в зависимости от режима.
TagList может быть инициализирован с предопределенным списком тегов, который передается опциональным аргументом.
В режиме просмотра теги выглядят как список тегов (каждый - колбаской). На странице должно мочь быть сколько угодно TagList.
В режиме редактирования теги можно удалять (рядом с тегами появляется крестик удаления, при клике на который тег удаляется из списка).
В режиме редактирования теги можно добавлять. Для этого используется инпут с кнопкой. После добавления тега (при клике на кнопку или по enter, при фокусе в инпуте) инпут очищается. Добавить уже добавленный тег нельзя. Пробелы с концов строки не должны влиять на тег (" mama " и “mama” считается одним и тем же тегом, добавляется в список “mama”).

Делать на jQuery
Опционально - добавить кнопку удаления всех тегов
Опционально - делать на верстке Bootstrap’a
*/

$(function() {
  class TagList {
    constructor(node, tagList = []) {
      this.$root = $(node);
      this.tagList = tagList;

      this.buildHTML(this.$root);

      this.edited = false;
    }


    _isUnique(elem) {
      return this.tagList.indexOf(elem) === -1;
    }


    updateView() {
      this.tagList.forEach(tagItem => {
        this.createItem(tagItem);
      });
    }


    removeAllTags() {
      this.tagList = [];
      this.$root.find('.list').empty();
    }


    buildHTML(node) {
      let HTML = `
        <div class="container well">
          <div class="row col-md-12">
            <div class="control col-md-2 col-xs-3">
              <button class='control__edit btn btn-primary'>Edit</button>
              <div class='control__close btn btn-warning'>X</div>
            </div>
            <div class="list col-md-10 col-xs-9"></div>
          </div>
          <div class='form col-md-8-offset-0 hidden'> 
            <div class="from__container col-md-6 col-xs-4">
              <input class='form__input form-control' type="text" placeholder='New tag' />
            </div>
            <button class='form__button btn btn-primary' type='submit'>Add</button>
          </div>
        </div>
      `;

      node.append(HTML);

      this.bindEvents();
      this.updateView();
    }


    createItem(name) {
      let HTML = `
        <div class='list__item'>
          <input class='list__content btn btn-default' type='button' value='${name}'>
          <div class='list__button btn btn-warning hidden'>X</div>
        </div> 
      `;

      this.$root.find('.list').append(HTML);
    }


    isEdit() {
      if (this.edited) {
        this.$root.find('.list__button').removeClass('hidden');
      } else {
        this.$root.find('.list__button').addClass('hidden');
      }
    }


    checkUservalue() {
      let userInput = this.$root.find('.form__input').val();
      let trimmed = $.trim(userInput);

      if (this._isUnique(trimmed) && trimmed) {
        this.tagList.push(trimmed);
        this.createItem(trimmed);
        this.$root.find('.form__input').val('');
        this.$root.find('.form__input').focus();
        this.isEdit();
      } else {
        this.$root.find('.form__input').parent().addClass('has-error');
      }
    }


    bindEvents() {
      this.$root.on('click', '.list__button', (e) => {
        let index = this.$root.find('.list__button').index($(e.target));
        this.tagList.splice(index, 1);

        $(e.target).closest('.list__item').remove();
      });


      this.$root.on('click', '.form__button', (e) => {
        e.preventDefault();

        this.checkUservalue();
      });


      this.$root.on('click', '.control__edit', () => {
        let node = this.$root.find('.control__edit');

        if (node.text() === 'Edit') {
          node.text('Close');
          this.edited = true;
        } else {
          node.text('Edit');
          this.edited = false;
        }

        this.$root.find('.form').toggleClass('hidden');

        this.isEdit();
      });


      this.$root.on('focus', '.form__input', (e) => {
        $(e.target).parent().removeClass('has-error');
      });


      this.$root.on('click', '.control__close', () => {
        this.removeAllTags();
      });


      this.$root.find('.form__input').keyup((e) => {
        const KEY_ENTER = 'Enter';

        if (e.key === KEY_ENTER) {
          this.checkUservalue();
        }
      });


      // this.$root.on('click', '.list__content', (e) => {
      //   if (!this.edited) return;
      //   $(e.target).attr({'type': 'text'});
      // })
      // .focusout((e) => {
      //   $(e.target).attr({'type': 'button'});
      // });
    }
  }


  window.TagList = TagList;


}());