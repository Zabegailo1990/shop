     new Swiper('.slider__banner', {
         spaceBetween: 15,
         autoplay: {
             delay: 2500,
             disableOnInteraction: false,
         },
         keyboard: {
             enabled: true,
         },
     });

     new Swiper('.slider__goods', {
         spaceBetween: 20,
         slidesPerView: 1,
         spaceBetween: 20,
         navigation: {
             nextEl: ".slider__next--goods",
             prevEl: ".slider__prev--goods",
         },
         autoplay: {
             delay: 2500,
             disableOnInteraction: false,
         },
         keyboard: {
             enabled: true,
         },
         breakpoints: {
             1280: {
               slidesPerView: 4,
               spaceBetween: 20,
             }
         }
     });

     new Swiper('.slider__news', {
         spaceBetween: 20,
         pagination: {
             el: ".slider__pagination--news",
             type: "progressbar",
           },
           navigation: {
             nextEl: ".slider__next--news",
             prevEl: ".slider__prev--news",
           },
     });

     new Swiper('.slider__reviews', {
         spaceBetween: 20,
         navigation: {
            nextEl: ".slider__next--reviews",
            prevEl: ".slider__prev--reviews",
         },
     });

     new Swiper('.slider__location', {
         grid: {
           rows: 3,
           fill: "rows"
         },
         spaceBetween: 20,
         navigation: {
            nextEl: ".slider__next--location",
            prevEl: ".slider__prev--location",
        },
        pagination: {
            el: ".slider__pagination--location",
            type: "progressbar",
        },
     });

     $('.tabs').each(function() {
         var ths = $(this);
         ths.find('.tabs__content').not(':first').hide();
         ths.find('.tabs__item').click(function() {
             ths.find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
             ths.find('.tabs__content').hide().eq($(this).index()).fadeIn()
         }).eq(0).addClass('active');
     });

    $(".rating").rateYo({
        rating: 3,
        fullStar: true,
        starWidth: "11px",
        spacing: "2px",
        numStars: 5,
        normalFill: "#e2e2e2",
        ratedFill: "#ffc600",
        starSvg: '<svg viewBox="0 0 511 511" xmlns="http://www.w3.org/2000/svg"><path d="m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0"/></svg>'
    });