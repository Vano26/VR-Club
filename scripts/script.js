const swiper = new Swiper(".swiper-play", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    direction: "horizontal",

    slidesPerView: 3,

    effect: "coverflow",
});

const swiper2 = new Swiper(".swiper-gallery", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    pagination: {
        el: ".swiper-gallery-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return (
                '<span class="' +
                currentClass +
                '"></span>' +
                " | " +
                '<span class="' +
                totalClass +
                '"></span>'
            );
        },
    },
    spaceBetween: "24px",
    slidesPerView: 1,
});
