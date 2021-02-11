import swal from 'sweetalert';

const refs = {    
    backdrop: document.querySelector('.backdrop'),
    closeBtn: document.querySelector('.backdrop-icon__close'),
    startBtn: document.querySelector('.header-info__button'),    
    plansSct: document.querySelector('.plans'),
    buttonContainer: document.querySelector('.button-container'),
    form: document.querySelector('.backdrop-form'),
    
}
const {backdrop, closeBtn, startBtn, plansSct, buttonContainer } = refs;
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
    if (evt.target.tagName === 'BUTTON') {
        backdrop.classList.remove('is-hided');
    }
})




const onFormSubmit = function (evt) {
    evt.preventDefault();         
    let adress = refs.form.elements[0].value;
    let mail = refs.form.elements[1].value;
    let phone = refs.form.elements[2].value;      
    fetch(`https://api.telegram.org/bot1496496640:AAF3PMrDLWTFuFw8lSgV3kFJnWWq2G9l6is/sendMessage?chat_id=-1001466766392&text=Адрес-сайта: ${adress}, Имейл: ${mail}, Телефон: ${phone}`).then(res => {
    return res.json();
    }).then(data => data);
    backdrop.classList.add('is-hided');
    swal("Отлично!", "Заявка была успешно отправлена!", "success");
}

refs.form.addEventListener('submit', onFormSubmit);




