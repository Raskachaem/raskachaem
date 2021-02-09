import './anchors/header-logic';
import './radio/radio';
import './popup/popup';
import Splide from '@splidejs/splide';
const splideContainer = document.querySelector('.splide');
const sliderContainer = document.getElementById('slider');
new Splide(splideContainer, { autoplay: true, pauseOnHover: true, interval: 5000 }).mount();
new Splide(sliderContainer, { autoplay: true, pauseOnHover: true, interval: 5000 }).mount();
if (window.matchMedia('(min-width: 768px)').matches) {	
	new Splide( sliderContainer, { autoplay: true, pauseOnHover: false, interval: 5000, gap: '10px', perPage: 2} ).mount();
}
if (window.matchMedia('(min-width: 1280px)').matches) {	
	new Splide( sliderContainer, { autoplay: false, pauseOnHover: false, interval: 5000, gap: '37px', perPage: 3} ).mount();
}