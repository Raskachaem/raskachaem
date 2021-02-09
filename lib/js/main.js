"use strict";

require("./menu/menu");

var _splide = _interopRequireDefault(require("@splidejs/splide"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var splideContainer = document.querySelector('.splide');
var sliderContainer = document.getElementById('slider');
new _splide["default"](splideContainer, {
  autoplay: true,
  pauseOnHover: true,
  interval: 5000
}).mount();
new _splide["default"](sliderContainer, {
  autoplay: true,
  pauseOnHover: true,
  interval: 5000
}).mount();

if (window.matchMedia('(min-width: 768px)').matches) {
  new _splide["default"](sliderContainer, {
    autoplay: true,
    pauseOnHover: false,
    interval: 5000,
    gap: '10px',
    perPage: 2
  }).mount();
}

if (window.matchMedia('(min-width: 1280px)').matches) {
  new _splide["default"](sliderContainer, {
    autoplay: false,
    pauseOnHover: false,
    interval: 5000,
    gap: '37px',
    perPage: 3
  }).mount();
}