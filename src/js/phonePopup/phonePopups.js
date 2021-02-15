const links = {
    popup: document.querySelector('.js-phone-popup'),  
    iconClose: document.querySelector('.js-popup-close'),
}

window.addEventListener('load', evt => {
    if (evt) {
        links.popup.classList.add('is-active');
    }
})

export default links;