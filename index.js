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

let BtnPlus = document.querySelector ('#iachat2')
let nbr = document.querySelector('#iachat')
let BtnMoins = document.querySelector('#iachat1')

BtnPlus?.addEventListener('click', ()=>{
    nbr.textContent = parseInt(nbr.textContent) +1
})

BtnMoins?.addEventListener('click', ()=>{
    nbr.textContent = parseInt(nbr.textContent)
    
    if(nbr.textContent > 0 ){
        nbr.textContent = parseInt(nbr.textContent) -1
    }
})

let BtnSidalPlus = document.querySelector('#sidal-achat2')
let BtnSidalnbr = document.querySelector('#sidal-iachat')
let BtnSidalMoins = document.querySelector('#sidal-achact1')

BtnSidalPlus?.addEventListener('click', ()=>{
    BtnSidalnbr.textContent = parseInt(BtnSidalnbr.textContent) +1
})

BtnSidalMoins?.addEventListener('click', ()=>{
    BtnSidalnbr.textContent = parseInt(BtnSidalnbr.textContent) 

    if(BtnSidalnbr.textContent> 0){
        BtnSidalnbr.textContent = parseInt(BtnSidalnbr.textContent) -1
    }
})

let BtnTarmakplus = document.querySelector('#TARMAK-iachat2')
let BtnTarmaknbr = document.querySelector('#TARMAK-iachat')
let BtnTarmakMoins = document.querySelector('#TARMAK-iachat1')

BtnTarmakplus?.addEventListener('click', ()=>{
    BtnTarmaknbr.textContent = parseInt(BtnTarmaknbr.textContent) +1
})

BtnTarmakMoins?.addEventListener('click', ()=>{
    BtnTarmaknbr.textContent = parseInt(BtnTarmaknbr.textContent)
    
    if( BtnTarmaknbr.textContent> 0){
        BtnTarmaknbr.textContent = parseInt(BtnTarmaknbr.textContent)-1
    }
})

let BtnSpadingplus = document.querySelector('#SPADING-iachat2')
let BtnSapdingnbr = document.querySelector('#SPADING-iachat')
let BtnSpadingMoins = document.querySelector('#SPADING-iachat1')

BtnSpadingplus?.addEventListener('click', ()=>{
    BtnSapdingnbr.textContent = parseInt(BtnSapdingnbr.textContent) +1
})

BtnSpadingMoins?.addEventListener('click', ()=>{
    BtnSapdingnbr.textContent = parseInt(BtnSapdingnbr.textContent)
    
    if(BtnSapdingnbr.textContent > 0){
        BtnSapdingnbr.textContent = parseInt(BtnSapdingnbr.textContent) -1
    }

})

let BtnKyrieplus = document.querySelector('#KYRIE-iachat2')
let BtnKyrienbr = document.querySelector('#KYRIE-iachat')
let BtnKyrieMoins = document.querySelector('#KYRIE-iachat1')

BtnKyrieplus?.addEventListener('click', ()=>{
    BtnKyrienbr.textContent = parseInt(BtnKyrienbr.textContent) +1
})

BtnKyrieMoins?.addEventListener('click', ()=>{
    BtnKyrienbr.textContent = parseInt(BtnKyrienbr.textContent)
    
    if(BtnKyrienbr.textContent > 0){
        BtnKyrienbr.textContent = parseInt(BtnKyrienbr.textContent) -1
    }
} )

let BtnKyrie1plus = document.querySelector('#KYRIE1-iachat2')
let BtnKyrie1nbr = document.querySelector('#KYRIE1-iachat')
let BtnKyrie1Moins = document.querySelector('#KYRIE1-iachat1')

BtnKyrie1plus?.addEventListener('click', ()=>{
    BtnKyrie1nbr.textContent = parseInt(BtnKyrie1nbr.textContent) +1
})

BtnKyrie1Moins?.addEventListener('click', ()=>{
    BtnKyrie1nbr.textContent = parseInt(BtnKyrie1nbr.textContent)
    
    if(BtnKyrie1nbr.textContent > 0){
        BtnKyrie1nbr.textContent = parseInt(BtnKyrie1nbr.textContent) -1
    }
} )


let BtnKyrie2plus = document.querySelector('#KYRIE2-iachat2')
let BtnKyrie2nbr = document.querySelector('#KYRIE2-iachat')
let BtnKyrie2Moins = document.querySelector('#KYRIE2-iachat1')

BtnKyrie2plus?.addEventListener('click', ()=>{
    BtnKyrie2nbr.textContent = parseInt(BtnKyrie2nbr.textContent) +1
})

BtnKyrie2Moins?.addEventListener('click', ()=>{
    BtnKyrie2nbr.textContent = parseInt(BtnKyrie2nbr.textContent)
    
    if(BtnKyrie2nbr.textContent > 0){
        BtnKyrie2nbr.textContent = parseInt(BtnKyrie2nbr.textContent) -1
    }
})

let BtnKyrie3plus = document.querySelector('#KYRIE3-iachat2')
let BtnKyrie3nbr = document.querySelector('#KYRIE3-iachat')
let BtnKyrie3Moins = document.querySelector('#KYRIE3-iachat1')

BtnKyrie3plus?.addEventListener('click', ()=>{
    BtnKyrie3nbr.textContent = parseInt(BtnKyrie3nbr.textContent) +1
})

BtnKyrie3Moins?.addEventListener('click', ()=>{
    BtnKyrie3nbr.textContent = parseInt(BtnKyrie3nbr.textContent)
    
    if(BtnKyrie3nbr.textContent > 0){
        BtnKyrie3nbr.textContent = parseInt(BtnKyrie3nbr.textContent) -1
    }
} )


let BtnJerseyplus = document.querySelector('#T-iachat2')
let BtnJerseynbr = document.querySelector('#T-iachat')
let BtnJerseyMoins = document.querySelector('#T-iachat1')

BtnJerseyplus?.addEventListener('click', ()=>{
    BtnJerseynbr.textContent = parseInt(BtnJerseynbr.textContent) +1
})

BtnJerseyMoins?.addEventListener('click', ()=>{
    BtnJerseynbr.textContent = parseInt(BtnJerseynbr.textContent)

    if(BtnJerseynbr.textContent > 0){
        BtnJerseynbr.textContent = parseInt(BtnJerseynbr.textContent) -1
    }
})


let BtnJersey1plus = document.querySelector('#T1-iachat2')
let BtnJersey1nbr = document.querySelector('#T1-iachat')
let BtnJersey1Moins = document.querySelector('#T1-iachat1')

BtnJersey1plus?.addEventListener('click', ()=>{
    BtnJersey1nbr.textContent = parseInt(BtnJersey1nbr.textContent) +1
})

BtnJersey1Moins?.addEventListener('click', ()=>{
    BtnJersey1nbr.textContent = parseInt(BtnJersey1nbr.textContent)

    if(BtnJersey1nbr.textContent > 0){
        BtnJersey1nbr.textContent = parseInt(BtnJersey1nbr.textContent) -1
    }
})


let BtnJersey2plus = document.querySelector('#T2-iachat2')
let BtnJersey2nbr = document.querySelector('#T2-iachat')
let BtnJersey2Moins = document.querySelector('#T2-iachat1')

BtnJersey2plus?.addEventListener('click', ()=>{
    BtnJersey2nbr.textContent = parseInt(BtnJersey2nbr.textContent) +1
})

BtnJersey2Moins?.addEventListener('click', ()=>{
    BtnJersey2nbr.textContent = parseInt(BtnJersey2nbr.textContent)

    if(BtnJersey2nbr.textContent > 0){
        BtnJersey2nbr.textContent = parseInt(BtnJersey2nbr.textContent) -1
    }
})


let BtnJersey3plus = document.querySelector('#T3-iachat2')
let BtnJersey3nbr = document.querySelector('#T3-iachat')
let BtnJersey3Moins = document.querySelector('#T3-iachat1')

BtnJersey3plus?.addEventListener('click', ()=>{
    BtnJersey3nbr.textContent = parseInt(BtnJersey3nbr.textContent) +1
})

BtnJersey3Moins?.addEventListener('click', ()=>{
    BtnJersey3nbr.textContent = parseInt(BtnJersey3nbr.textContent)

    if(BtnJersey3nbr.textContent > 0){
        BtnJersey3nbr.textContent = parseInt(BtnJersey3nbr.textContent) -1
    }
})


let btnHplus = document.querySelector('#h-iachat2')
let btnHnbr = document.querySelector('#h-iachat')
let btnHmoins = document.querySelector('#h-iachat1')

btnHplus?.addEventListener('click', ()=>{
    btnHnbr.textContent = parseInt(btnHnbr.textContent) +1
})

btnHmoins?.addEventListener('click', ()=>{
    btnHnbr.textContent = parseInt(btnHnbr.textContent)

    if(btnHnbr.textContent > 0){
        btnHnbr.textContent = parseInt(btnHnbr.textContent) -1
    }
})


let btnH1plus = document.querySelector('#h1-iachat2')
let btnH1nbr = document.querySelector('#h1-iachat')
let btnH1moins = document.querySelector('#h1-iachat1')

btnH1plus?.addEventListener('click', ()=>{
    btnH1nbr.textContent = parseInt(btnH1nbr.textContent) +1
})

btnH1moins?.addEventListener('click', ()=>{
    btnH1nbr.textContent = parseInt(btnH1nbr.textContent)

    if(btnH1nbr.textContent > 0){
        btnH1nbr.textContent = parseInt(btnH1nbr.textContent) -1
    }
})


let btnH2plus = document.querySelector('#h2-iachat2')
let btnH2nbr = document.querySelector('#h2-iachat')
let btnH2moins = document.querySelector('#h2-iachat1')

btnH2plus?.addEventListener('click', ()=>{
    btnH2nbr.textContent = parseInt(btnH2nbr.textContent) +1
})

btnH2moins?.addEventListener('click', ()=>{
    btnH2nbr.textContent = parseInt(btnH2nbr.textContent)

    if(btnH2nbr.textContent > 0){
        btnH2nbr.textContent = parseInt(btnH2nbr.textContent) -1
    }
})


let btnH3plus = document.querySelector('#h3-iachat2')
let btnH3nbr = document.querySelector('#h3-iachat')
let btnH3moins = document.querySelector('#h3-iachat1')

btnH3plus?.addEventListener('click', ()=>{
    btnH3nbr.textContent = parseInt(btnH3nbr.textContent) +1
})

btnH3moins?.addEventListener('click', ()=>{
    btnH3nbr.textContent = parseInt(btnH3nbr.textContent)

    if(btnH3nbr.textContent > 0){
        btnH3nbr.textContent = parseInt(btnH3nbr.textContent) -1
    }
})








