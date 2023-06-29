$(function(){

$('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false
});

// $('select').style();

$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
});

});

const SERVICE_ID = "service_a736poh";
const TEMPLATE_ID = "template_r9hcfq6";
const USER_ID = "WSRBV5ZOthSftBlU0";

function handleOnSubmit(){
    console.log("salom");
    var templateParams = {
        to_name: document.getElementById('name').value,
        from_name: document.getElementById('from_name').value,
        message: document.getElementById('contact_name').value
    };

    let sendForm = document.querySelector('#hidden-content')
    let text = document.createElement('h4')

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
        .then(function(response) {
            sendForm.innerHTML = ''
            
            text.innerText = "Qabul qilindi!"
            sendForm.appendChild(text)
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            
            text.innerText = "FAILED!"
            sendForm.appendChild(text)
             console.log('FAILED...', error);
        });
}