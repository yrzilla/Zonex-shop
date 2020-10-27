import Swiper from '../libs/swiper.min';

const bannerSlider = new Swiper(document.querySelector('.banner-slider'), {
    loop: true,
    containerModifierClass: 'banner-slider-',
    slidesPerView: 1,
    pagination: {
        el: '.banner-page',
        type: 'bullets',
        clickable: true
    }
});
