!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.querySelector("menu"),t=function(){e.classList.toggle("active-menu")};document.body.addEventListener("click",(function(n){var o=n.target;if(o.closest(".menu"))t();else if(!o.closest("menu")&&e.classList.contains("active-menu"))t();else if(o.closest("menu"))if(o.classList.contains("close-btn"))t();else if(o.closest('a[href^="#"]')){o=o.closest('a[href^="#"]'),n.preventDefault();var r=o.getAttribute("href");document.querySelector(r).scrollIntoView({behavior:"smooth",block:"start"}),t()}}))},r=function(){var e=document.querySelector(".popup"),t=document.querySelectorAll(".popup-btn"),n=document.querySelector(".popup-content");n.style.left="0";var o,r=0,a=function e(){o=requestAnimationFrame(e),r++,n.style.left=r+"%",38===r&&cancelAnimationFrame(o)};t.forEach((function(t){t.addEventListener("click",(function(){e.style.display="block",document.documentElement.clientWidth>768?o=requestAnimationFrame(a):n.removeAttribute("style")}))})),e.addEventListener("click",(function(t){var n=t.target;n.classList.contains("popup-close")?(e.style.display="none",r=0):(n=n.closest(".popup-content"))||(e.style.display="none",r=0)}))},a=function(){var e=document.querySelector('a[href="#service-block"]');e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href");document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}))},c=function(){var e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),n=document.querySelectorAll(".service-tab");e.addEventListener("click",(function(e){var o=e.target;(o=o.closest(".service-header-tab"))&&t.forEach((function(e,r){e===o&&function(e){for(var o=0;o<n.length;o++)e===o?(t[o].classList.add("active"),n[o].classList.remove("d-none")):(t[o].classList.remove("active"),n[o].classList.add("d-none"))}(r)}))}))},i=function(){var e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item");!function(){for(var e=document.querySelector(".portfolio-dots"),n=0;n<t.length;n++){var o=document.createElement("li");o.classList.add("dot"),e.append(o)}}();var n,o=document.querySelectorAll(".dot"),r=0,a=function(e,t,n){e[t].classList.remove(n)},c=function(e,t,n){e[t].classList.add(n)},i=function(){a(t,r,"portfolio-item-active"),a(o,r,"dot-active"),++r>=t.length&&(r=0),c(t,r,"portfolio-item-active"),c(o,r,"dot-active")},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2e3;n=setInterval(i,e)};e.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.matches(".portfolio-btn, .dot")&&(a(t,r,"portfolio-item-active"),a(o,r,"dot-active"),n.matches("#arrow-right")?r++:n.matches("#arrow-left")?r--:n.matches(".dot")&&o.forEach((function(e,t){e===n&&(r=t)})),r>=t.length?r=0:r<0&&(r=t.length-1),c(t,r,"portfolio-item-active"),c(o,r,"dot-active"))})),e.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),e.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(1500)},u=function(){var e=document.getElementById("command");e.addEventListener("mouseover",(function(e){if(e.target.matches(".command__photo")){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}})),e.addEventListener("mouseout",(function(e){if(e.target.matches(".command__photo")){var t=e.target.src;e.target.src=e.target.dataset.img,e.target.dataset.img=t}}))},l=function(){document.querySelector(".calc-block").addEventListener("input",(function(e){(e.target.matches(".calc-square")||e.target.matches(".calc-count")||e.target.matches(".calc-day"))&&(e.target.value=e.target.value.replace(/\D/g,""))}))},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),r=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),c=document.getElementById("total"),i=function(e){var t=e.duration,n=e.draw,o=e.timing,r=performance.now();requestAnimationFrame((function e(a){var c=(a-r)/t;c>1&&(c=1);var i=o(c);n(i),c<1&&requestAnimationFrame(e)}))},u=function(){var t=0,u=1,l=1,s=n.options[n.selectedIndex].value,d=+o.value;a.value>1&&(u+=(a.value-1)/10),r.value<5&&r.value?l*=2:r<10&&r.value&&(l*=1.5),s&&d&&(t=e*s*d*u*l),i({duration:1e3,timing:function(e){return e},draw:function(e){c.textContent=Math.floor(e*t)}})};t.addEventListener("change",(function(e){var t=e.target;(t.matches("select")||t.matches("input"))&&u()}))},d=function(){var e=document.querySelectorAll("form"),t=document.createElement("div");t.style.cssText="font-size: 2rem; color: #fff",e.forEach((function(e){e.querySelector(".form-phone").setAttribute("maxlength",15),e.addEventListener("input",(function(e){e.target.matches(".form-phone")?e.target.value=e.target.value.replace(/^[^+\d]*(\+|\d)|\D/g,"$1"):(e.target.matches(".mess")||e.target.matches('input[name="user_name"]'))&&(e.target.value=e.target.value.replace(/[^А-ЯЁа-яё\s]/,""))}))}));e.forEach((function(e){e.addEventListener("submit",(function(n){var o;(n.preventDefault(),e.querySelector(".form-phone").value.length>=11)?(e.querySelector(".form-phone").style.boxShadow="none",e.appendChild(t),(o=document.createElement("style")).textContent="\n    .sk-rotating-plane {\n      width: 2rem;\n      height: 2rem;\n      margin: auto;\n      margin-top: 10px;\n      background-color: #19b5fe;\n      animation: sk-rotating-plane 1.2s infinite ease-in-out;\n    }\n\n    @keyframes sk-rotating-plane {\n      0% {\n        transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n      }\n      50% {\n        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n      }\n      100% {\n        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n      }\n    }\n\n\n    input:invalid {\n      box-shadow: none;\n    }\n    ",document.head.appendChild(o),t.textContent="",t.classList.add("sk-rotating-plane"),function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:e})}(new FormData(e)).then((function(e){if(200!==e.status)throw new Error("status network not 200");t.classList.remove("sk-rotating-plane"),t.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){t.textContent=""}),4e3)})).catch((function(e){t.classList.remove("sk-rotating-plane"),t.textContent="Что-то пошло не так...",console.error(e),setTimeout((function(){t.textContent=""}),4e3)})),e.querySelectorAll("input").forEach((function(e){e.value=""}))):e.querySelector(".form-phone").style.boxShadow="inset 0 0 5px red"}))}))};(function(e){var t=document.querySelector("#timer-hours"),n=document.querySelector("#timer-minutes"),o=document.querySelector("#timer-seconds");setInterval((function r(){var a,c,i,u,l=(a=(new Date(e).getTime()-(new Date).getTime())/1e3,c=Math.floor(a%60),i=Math.floor(a/60%60),u=Math.floor(a/3600),{timeRemaining:a,seconds:c=c<10?"0"+c:c,minutes:i=i<10?"0"+i:i,hours:u=u<10?"0"+u:u});if(t.textContent=l.hours,n.textContent=l.minutes,o.textContent=l.seconds,l.timeRemaining<=0){var s=setInterval(r,1e3);clearInterval(s),t.textContent="00",n.textContent="00",o.textContent="00"}}),1e3)})("20 july 2020"),o(),r(),a(),c(),i(),u(),l(),s(100),d()}]);