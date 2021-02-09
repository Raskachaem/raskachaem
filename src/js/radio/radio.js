const radio = {
    radio1: document.getElementById('radio-1'),
    radio2: document.getElementById('radio-2'),
    radio3: document.getElementById('radio-3'),
    radio4: document.getElementById('radio-4'),
    radio5: document.getElementById('radio-5'),
    radio6: document.getElementById('radio-6'),
}
const sections = {
    aboutSec: document.getElementById('about'),
    servicesSec: document.getElementById('services'),
    portfolioSec: document.getElementById('portfolio'),
    plansSec: document.getElementById('plans'),
    teamSec: document.getElementById('team'),   
    header: document.querySelector('.js-header'),
}
const { header, aboutSec, servicesSec, portfolioSec, plansSec, teamSec } = sections;
    const {radio1, radio2, radio3, radio4, radio5, radio6 } = radio;
const moveSections = function (section) {
     section.scrollIntoView({
	behavior: 'smooth',
	block: 'start',
        });
}
document.querySelector('.js-form').addEventListener('click', evt => {    
    
    if (evt.target === radio1) {
        moveSections(header);
    }
    if (evt.target === radio2) {
        moveSections(aboutSec);
    }
    if (evt.target === radio3) {
        moveSections(servicesSec);
    }
    if (evt.target === radio4) {
        moveSections(portfolioSec);
    }
    if (evt.target === radio5) {
        moveSections(plansSec);
    }
    if (evt.target === radio6) {
        moveSections(teamSec);
    }
}
)


const loadNextPage = function () { 	    
    if (window.scrollY - header.scrollHeight < 0) {
		radio1.checked = true;		
	}
	if (window.scrollY - header.scrollHeight >0) {
		radio2.checked = true;		
	}
	if (window.scrollY - (header.scrollHeight + aboutSec.scrollHeight) >= 0) {
		radio3.checked = true;		
	}
	if (window.scrollY - (header.scrollHeight + aboutSec.scrollHeight + servicesSec.scrollHeight) >= 0) {
		radio4.checked = true;		
    }
    if (window.scrollY - (header.scrollHeight + aboutSec.scrollHeight + servicesSec.scrollHeight + portfolioSec.scrollHeight) >= 0) {
		radio5.checked = true;		
    }
    if (window.scrollY - (header.scrollHeight + aboutSec.scrollHeight + servicesSec.scrollHeight + portfolioSec.scrollHeight + plansSec.scrollHeight) >= 0) {
		radio6.checked = true;		
	}
	      
}

window.addEventListener('scroll', loadNextPage)