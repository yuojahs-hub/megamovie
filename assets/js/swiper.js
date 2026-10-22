var swiper = new Swiper(".hero", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper(".slider2", {
    slidesPerView: 1.4,
    spaceBetween: 24,
    // pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true,
    // },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        601: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        961: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
});
