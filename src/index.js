'use srtict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'es6-promise/auto';
import 'whatwg-fetch';

(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('append')) {
      return;
    }
    Object.defineProperty(item, 'append', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function append() {
        var argArr = Array.prototype.slice.call(arguments),
          docFrag = document.createDocumentFragment();

        argArr.forEach(function (argItem) {
          var isNode = argItem instanceof Node;
          docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
        });

        this.appendChild(docFrag);
      }
    });
  });
})([Element.prototype, Document.prototype, DocumentFragment.prototype]);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import scrollDown from './modules/scrollDown';
import tabs from './modules/tabs';
import slider from './modules/slider';
import replacePhoto from './modules/replacePhoto';
import validateCalc from './modules/validateCalc';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


//Таймер
countTimer('18 july 2020');

//Меню
toggleMenu();

//Модальное окно
togglePopup();

//Скролл на один экран
scrollDown();

//Табы
tabs();

//Слайдер
slider();

//Блок с фотографиями
replacePhoto();

//Валидация калькулятора
validateCalc();

//Калькулятор
calc(100);

//send-ajax-form
sendForm();
