$(function () {
    $('[data-slider]').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow:
            '<button class="slick-prev slick-arrow" aria-label="Previous" type="button">назад</button>',
        nextArrow:
            '<button class="slick-next slick-arrow" aria-label="Next" type="button">вперёд</button>',
    });
});

