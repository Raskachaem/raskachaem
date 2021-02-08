const refs = {
    menuButton: document.querySelector('.js-menu'),
    closeButton: document.querySelector('.js-close'),
    header: document.querySelector('.js-header'),
    nav: document.querySelector('.js-nav'),
}


refs.header.addEventListener('click', evt => {
    const { menuButton, closeButton, header, nav } = refs;
    evt.preventDefault();    
    if (evt.target === menuButton) {
        nav.classList.add('is-open')
    }
    if (evt.target === closeButton) {
        nav.classList.remove('is-open')
    }
})