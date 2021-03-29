// active wow js
new WOW().init();

// remove placeholder on focus
$('input,textarea').focus(function () {
    $(this).data('placeholder', $(this).attr('placeholder'))
        .attr('placeholder', '');
}).blur(function () {
    $(this).attr('placeholder', $(this).data('placeholder'));
});

// Clients Carousel slider js
$('.clients-carousel').owlCarousel({
    loop: true,
    margin: 15,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 6
        },
        1000: {
            items: 6
        }
    }
});


// counter on Scroll
var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                    countNum: countTo
                },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }

});