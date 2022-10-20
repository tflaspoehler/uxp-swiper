
const hero_swiper = new Swiper('.swiper-container.hero-swiper', {
// Optional parameters
direction: 'horizontal',
loop: false,

// Navigation arrows
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: true,
},

// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

breakpoints: {
    slidesPerView: 1,
    spaceBetween: 0,
},


});

const first_swiper = new Swiper('.swiper-container.first-swiper', {
// Optional parameters
direction: 'horizontal',
loop: false,

// Navigation arrows
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: true,
},

// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

breakpoints: {
    slidesPerView: 1,
    spaceBetween: 25,
    // when window width is >= 10px
    10: {
        slidesPerView: 1,
        spaceBetween: 12.5,
    },
    // when window width is >= 600px
    600: {
        slidesPerView: 2,
        spaceBetween: 12.5,
    },
    // when window width is >= 992px
    992: {
        slidesPerView: 3,
        spaceBetween: 25,
    }
},


});

const second_swiper = new Swiper('.swiper-container.second-swiper', {
// Optional parameters
direction: 'horizontal',
loop: false,

// Navigation arrows
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: true,
},

// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

breakpoints: {
    slidesPerView: 1,
    spaceBetween: 25,
    // when window width is >= 10px
    10: {
        slidesPerView: 1,
        spaceBetween: 12.5,
    },
    // when window width is >= 600px
    600: {
        slidesPerView: 2,
        spaceBetween: 12.5,
    },
    // when window width is >= 992px
    992: {
        slidesPerView: 3,
        spaceBetween: 25,
    }
},


});

const third_swiper = new Swiper('.swiper-container.third-swiper', {
// Optional parameters
direction: 'horizontal',
loop: false,

// Navigation arrows
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    enabled: true,
},

// If we need pagination
pagination: {
    el: '.swiper-pagination',
    clickable: true,
},

breakpoints: {
    slidesPerView: 1,
    spaceBetween: 12.5,
    // when window width is >= 10px
    10: {
        slidesPerView: 1,
        spaceBetween: 12.5,
    },
    // when window width is >= 600px
    600: {
        slidesPerView: 2,
        spaceBetween: 12.5,
    },
    // when window width is >= 992px
    992: {
        slidesPerView: 4,
        spaceBetween: 25,
    }
},


});