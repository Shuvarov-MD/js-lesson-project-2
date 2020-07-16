'use srtict';

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
