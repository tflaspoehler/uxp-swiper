# uxp-swiper
[View Github Page Preview &rarr;](https://tflaspoehler.github.io/uxp-swiper/)
###### for demonstartion purposes only

This took as much time to build as explain what I wanted. I essentially copy and pasted section components on our live site and placed them into swiper slides. Then I linked to the **SWIPERJS** CDN css and js files (I also included **AtlantaMarket.com**'s css files so things display correctly).


## Hero Swiper

This is identical to the others on the page except I put it in a section that fills the width of the page and make it only show 1 slide per view no matter the screen size. The pagination is styled differently with some basic CSS to make it overlap the slides. The prev and next arrows are just off the screen so they could be repositioned/restyled if needed.

Here's the JS for it:
```
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
```


## Content Swipers

The next 3 swipers show use cases for more content-driven ones down a page. The only 2 inputs we need as content authors to achieve these are the *slidesPerView*, *spaceBetween* for each desktop (> 992px or 62rem), tablet (> 600px or 37.5rem), mobile views. I would also like inputs to add a className to the swiper container as well as the slide elements if possible so we can really take advantage of existing CSS on the sites. This isn't a huge deal if not.

Here's the JS for it:
```
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
```

to make these I would have a "Swiper" component that can be placed inside a "Section" component's placeholder. Then a "Slide" component would need to go inside the "Swiper" component placeholder. Then the "Slide" component's placeholder would need to except a "Seciton" component. The the above inputs on the swiper and this setup in Sitecore, we can build whatever content is necessary. I used HTML from the sites that are already sections inside grid columns. That way I could build a swiper like a grid and move hte content once these are built.