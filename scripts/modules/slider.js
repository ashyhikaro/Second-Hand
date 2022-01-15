import Swiper from './swiper-bundle.esm.browser.min.js';

const slider = ({selectorSlider, pagination, bulletClass, bulletActiveClass, selectorParentSlider}) => {

  const swiper = new Swiper (selectorSlider, {
    init: false,
    autoplay: true,
    loop: true,
    effect: 'flip',
    coverflowEffect: {
      rotate: 30,
    },
    pagination: {
      el: pagination,
      type: 'bullets',
      bulletClass,
      bulletActiveClass,
      clickable: true,
    },
    on: {
      init() {
        this.el.addEventListener('mouseenter', () => {
          this.autoplay.stop();
        });
        this.el.addEventListener('mouseleave', () => {
          this.autoplay.start();
        });
      }
    }
  });

  const checkSlider = () => {
    const href = location.href;
    if (href.includes('?')) {
      swiper.disable();
      document.querySelector(selectorParentSlider) ?.remove();
    } else {
      swiper.init();
    }
  };

  checkSlider();

  return checkSlider;
};

export default slider;
