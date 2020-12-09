$(function () {
    $('.slider').slick({
        // nextArrow: document.querySelector('.next'),
        // prevArrow: document.querySelector('.previous'),
        prevArrow: '<button class="slick-arrow slick-prev"><img src="img/slider/previous.svg" alt=""></button>',
        nextArrow: '<button class="slick-arrow slick-next"><img src="img/slider/next.svg" alt=""></button>',
        asNavFor: '.slider__nav'
    });
    $('.slider__nav').slick({
        arrows: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.slider',
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 965,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 830,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 700,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 550,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 396,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            },
        ]
    });

    $('.header__menu-btn').on('click', function () {
        $('.header__menu > ul').slideToggle();
    });
});