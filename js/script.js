$(function () {

    'use strict'

    //banner slider start

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // vidoe part
    $('.venobox').venobox();

    // Team part Start
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [{
            breakpoint: 1199.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Testimonial part Start
    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 992.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
    });

      // Member part Start
      $('.member_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    // Counter Up js

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //logo slider start

    $('.logo_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right next_arrow"></i>',
        responsive: [{
            breakpoint: 1199.98,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },
        {
            breakpoint: 767.98,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        }
    ]
    });

    // venobox js part
    $('.veno').venobox();


    //  Back to Top

    $('.back_to_top').click(function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 4000)
    });

    $(window).scroll(function () {

        var abc = $(this).scrollTop();

        if (abc > 200) {
            $('.back_to_top').fadeIn();

        } else {
            $('.back_to_top').fadeOut();
        }

    });


    // Menubar Fix Js

    var navoff = $('.main_menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();

        if (scrolling > navoff) {
            $('.main_menu').addClass('menu_fix');

        } else {
            $('.main_menu').removeClass('menu_fix');
        }

    });





});