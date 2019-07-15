// preloader
jQuery(document).ready(function($) {
    $(window).load(function() {
        setTimeout(function() {
            $('.preloader').fadeOut('slow', function() {});
        }, 500);

    });
});
// responsive burger menu
$(document).ready(function () {
    $('.menu__burger, .menu__burger-list').click(function () {
        var x = $('.menu__burger').offset();
        var activeMenu = $('.menu__burger-list');
        console.log(x);
        activeMenu.toggleClass('menu-active');
    });

    $(document).click(function (event) {
        if ($(event.target).closest('.menu__burger').length) return;
        $('.menu__burger-list').removeClass('menu-active');
        event.stopPropagation();
    });
});

// responsive slick slider
$(function(){
    $('.responsive').slick({
        // dots: true,
        // cssEase: 'linear',
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        //arrows: true,
        prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""></button>',
        nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""></button>',
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true
                    // dots: true
                }
            },
            {
                breakpoint: 1090,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                    // dots: true
                }
            },
            {
                breakpoint: 740,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                    // arrows: false
                }
            }
        ]
    });
});

// top button
$(window).scroll(function() {
    if ($(this).scrollTop() > $(this).height()) {
        $('.top').addClass('active');
    } else {
        $('.top').removeClass('active');
    }
});
$('.top').click(function() {
    $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
});
