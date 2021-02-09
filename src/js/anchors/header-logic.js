const buttons = {
    aboutBtn: document.querySelector('.js-about'),
    servicesBtn: document.querySelector('.js-services'),
    portfolioBtn: document.querySelector('.js-portfolio'),
    plansBtn: document.querySelector('.js-plans'),
    teamBtn: document.querySelector('.js-team'),    
}
const sections = {
    aboutSec: document.getElementById('about'),
    servicesSec: document.getElementById('services'),
    portfolioSec: document.getElementById('portfolio'),
    plansSec: document.getElementById('plans'),
    teamSec: document.getElementById('team'),   
    header: document.querySelector('.js-header'),
}
const refs = {
    menuButton: document.querySelector('.js-menu'),
    closeButton: document.querySelector('.js-close'),
    header: document.querySelector('.js-header'),
    nav: document.querySelector('.js-nav'),
}

const anchorsSlide = function (section) {
    section.scrollIntoView({
	behavior: 'smooth',
	block: 'start',
        });
}


sections.header.addEventListener('click', evt => {    
    evt.preventDefault();        
    const { menuButton, closeButton, header, nav } = refs;
    const { aboutBtn, servicesBtn, portfolioBtn, plansBtn, teamBtn } = buttons;
    const { aboutSec, servicesSec, portfolioSec, plansSec, teamSec } = sections;
    if (evt.target === menuButton) {
        nav.classList.add('is-open')
    }
    if (evt.target === closeButton) {
        nav.classList.remove('is-open')
    }
    if (evt.target === aboutBtn) {
        anchorsSlide(aboutSec);
    }
    if (evt.target === servicesBtn) {
        anchorsSlide(servicesSec);
    }
    if (evt.target === portfolioBtn) {
        anchorsSlide(portfolioSec);
    }
    if (evt.target === plansBtn) {
        anchorsSlide(plansSec);
    }
    if (evt.target === teamBtn) {
        anchorsSlide(teamSec);
    }
})
