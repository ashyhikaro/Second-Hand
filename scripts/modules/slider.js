import Swiper from './swiper-bundle.esm.browser.min.js';

const slider = ({selectorSlider, pagination, bulletClass, bulletActiveClass}) => {
  new Swiper (selectorSlider, {
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
};

export default slider;
