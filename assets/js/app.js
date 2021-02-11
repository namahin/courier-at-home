// remove placeholder on focus
$('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
        .attr('placeholder', '');
}).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
});

// Clients Carousel slider js
$('.clients-carousel').owlCarousel({
    loop:true,
    margin:15,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:6
        },
        1000:{
            items:6
        }
    }
});
