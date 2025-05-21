document.addEventListener("DOMContentLoaded", function(){
    let splide = new Splide( '.splide',{
    type    : 'loop',
    autoplay: true,
    interval: 2000,
        }, );
    splide.mount();
});