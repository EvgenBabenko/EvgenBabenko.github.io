/*
Реализовать функцию getExternalLinks, которая возвращает массив ссылок, ведущих на внешние ресурсы (то есть не на тот домен, где запускается скрипт)
*/

/*jshint esversion: 6 */

function getExternalLinks() {
  var arrTags = [...document.getElementsByTagName('a')];
  var curentHostname = window.location.hostname;
  return arrTags.reduce((res, elem) => {
    if (res.indexOf(elem.hostname) === -1 && elem.hostname !== curentHostname && elem.hostname) {
      res.push(elem.hostname);
    }
    return res;
  }, []);
}

getExternalLinks();