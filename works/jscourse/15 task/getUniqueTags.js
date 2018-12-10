// Реализовать функцию getUniqueTags, которая возвращает массив названий тегов, присутствуещих на странице. В массиве каждого типа тег должен присутствовать в единственном экземпляре.

/*jshint esversion: 6 */

function getUniqueTags() {
  // var arrAllTags = Array.prototype.slice.call(document.getElementsByTagName('*'));
  var arrAllTags = [...document.getElementsByTagName('*')];
  console.log(arrAllTags);
  return arrAllTags.reduce((res, elem) => {
    if (res.indexOf(elem.tagName) === -1) {
      // console.log(elem);
      // console.log(res);
      res.push(elem.tagName);
    }
    return res;
  }, []);
}

function getUniqueTags() {
  var res = [];
  var elem = document.body;

  function gathering(elem) {
    // debugger
    var children = elem.children;
    for (var i = 0; i < children.length; i++) {
      if (elem.children.length !== 0) {
        gathering(children[i]);
      }
      // res.push(elem.tagName);
      // if (res.indexOf(elem.tagName) !== 0) {

      //   res.push(elem.tagName);
      // }
    }
    // res.push(elem.tagName);
    if (res.indexOf(elem.tagName) !== 0) {

      res.push(elem.tagName);
    }
  }
  gathering(elem);
  return res;
}

getUniqueTags();