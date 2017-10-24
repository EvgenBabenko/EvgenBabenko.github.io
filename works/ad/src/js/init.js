// jshint esversion: 6

function init() {
  'use strict';

  function ready() {
    let iframe = document.createElement('iframe');
  
    iframe.style.width = '970px';
    iframe.style.height = '250px';
    iframe.style.border = 'none';
    iframe.src = '../index.html';
    iframe.style.display = 'block';
    iframe.style.position = 'absolute';
    iframe.style.top = '20px';
    iframe.style.left = '50px';
    // iframe.style.zIndex = '9999';


    document.body.appendChild(iframe);
  }

  document.addEventListener("DOMContentLoaded", ready);
}

init();