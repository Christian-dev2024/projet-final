var slideImag = document.getElementById('slideImag');

var imag = new Array (
    "img-home/slider1.jpg",
    "img-home/slider5.jpg",
    "img-home/slider3.jpg",
    "img-home/slider4.jpg"
);

var len = imag.length;
var i = 0

function slider () {
    if( i>len-1 ){
        i = 0 ;
    }
    slideImag.src = imag [i];
    i++;
    setTimeout("slider ()",5000)
}

ScrollReveal({ 
    reset: true,
    delay: 900,
    duration: 500,
    distance: '60px'
});
ScrollReveal().reveal('.image-welcom', { origin: 'top' });
ScrollReveal().reveal('.text-welcom', { origin: 'right' });
ScrollReveal().reveal('.title-product', { origin: 'top' });
ScrollReveal().reveal('.text-products', { origin: 'left' });
ScrollReveal().reveal('.image-products-ball', { origin: 'bottom' });
ScrollReveal().reveal('.image-products-jersey', { origin: 'bottom' });
ScrollReveal().reveal('.image-products-shoes', { origin: 'bottom' });
ScrollReveal().reveal('.text-service', { origin: 'right' });
ScrollReveal().reveal('.title-service', { origin: 'top' });
ScrollReveal().reveal('.ri-facebook-circle-fill', { origin: 'bottom' });
ScrollReveal().reveal('.ri-whatsapp-fill', { origin: 'bottom' });
ScrollReveal().reveal('.ri-telegram-fill', { origin: 'bottom' });
ScrollReveal().reveal('.ri-instagram-fill', { origin: 'bottom' });
ScrollReveal().reveal('.ri-visa-line', { origin: 'bottom' });
ScrollReveal().reveal('.ri-mastercard-fill', { origin: 'bottom' });
ScrollReveal().reveal('.ri-paypal-fill', { origin: 'bottom' });
ScrollReveal().reveal('.ri-lock-2-line', { origin: 'bottom' });
ScrollReveal().reveal('.ri-verified-badge-fill', { origin: 'bottom' });
ScrollReveal().reveal('#form-login', { origin: 'left' });
ScrollReveal().reveal('.text-container', { origin: 'left' });
ScrollReveal().reveal('.title-arcticl-product', { origin: 'top' });
ScrollReveal().reveal('.title-identity', { origin: 'top' });
ScrollReveal().reveal('.img-identity', { origin: 'right' });
ScrollReveal().reveal('.info-indentity', { origin: 'bottom' });
ScrollReveal().reveal('.title-work', { origin: 'top' });
ScrollReveal().reveal('.text-work', { origin: 'left' });
ScrollReveal().reveal('.icon-work', { origin: 'bottom' });
