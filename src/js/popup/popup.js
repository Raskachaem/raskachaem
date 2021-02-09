const refs = {
    backdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('.backdrop-icon__close'),
    startBtn: document.querySelector('.header-info__button'),
    orderBtn1: document.querySelector('.js-first'),
    orderBtn2: document.querySelector('.js-second'),
    orderBtn3: document.querySelector('.js-third'),
    plansSct: document.querySelector('.plans'),
    buttonContainer: document.querySelector('.button-container'),
}
const {backdrop, closeBtn, startBtn, orderBtn1, orderBtn2, orderBtn3, plansSct, buttonContainer } = refs;
backdrop.addEventListener('click', evt => {    
    if (evt.target === closeBtn) {
        backdrop.classList.add('is-hided');
    }
    if (evt.target === backdrop) {
        backdrop.classList.add('is-hided');
    }
})
buttonContainer.addEventListener('click', evt => {    
    if (evt.target === startBtn) {
        backdrop.classList.remove('is-hided');
    }
})
window.addEventListener('keydown', evt => {
    if (!backdrop.classList.contains('is-hided')) {
    if (evt.code === 'Escape') {
        backdrop.classList.add('is-hided');
    }
    }    
})
plansSct.addEventListener('click', evt => {    
    if (evt.target === orderBtn1 || evt.target === orderBtn2 || evt.target === orderBtn3) {
        backdrop.classList.remove('is-hided');
    }
})