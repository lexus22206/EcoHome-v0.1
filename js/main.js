// pc or touch
const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/OperaMini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return (
      isMobile.Android() ||
      isMobile.BlackBerry() ||
      isMobile.iOS() ||
      isMobile.Opera() ||
      isMobile.Windows()
    );
  }
};

if (isMobile.any()) {
  document.body.classList.add('_touch');

  // footer menu
  const menuBtns = document.querySelectorAll('.footer__menu-title')

  menuBtns.forEach.call(menuBtns, function (menuBtns) {
    menuBtns.addEventListener('click', function () {

      const menuList = menuBtns.parentElement.querySelector('.footer__submenu-list')

      menuBtns.classList.toggle('_active')
      menuList.classList.toggle('_active')

      if (menuList.classList.contains('_visible')) {
        menuList.style.maxHeight = menuList.scrollHeight + 'px'
      } else {
        menuList.style.maxHeight = null
      }
    })
  })

} else {
  document.body.classList.add('_pc');
}

// burger menu
const burger = document.querySelector('.menu__burger');
if (burger) {
  const menu = document.querySelector('.menu__list');
  burger.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    burger.classList.toggle('_active');
    menu.classList.toggle('_active');
  });
}

// video
$(document).on('click','.btn__video',function(){
  var video = $(this).closest(".block__video").find(".video")[0];
  if (video.paused) {
    video.play();
    $('.btn__video').css('opacity', '0');
  } else {
    video.pause();
    $('.btn__video').css('opacity', '1');
  }
});

// swiper project
const swiper = new Swiper('.projects__slider', {
  spaceBetween: 10,
  slidesPerView: 2,
  centeredSlides: true,
  loop: true,

  breakpoints: {
    640: {
      slidesPerView: "auto",
      spaceBetween: 16,
    },
    1440: {
      slidesPerView: 4,
      spaceBetween: 24,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

const swiperIn = new Swiper('.images__slider', {
  slideClass: 'images__slider-item',
  slidesPerView: 1,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

});

// construction swiper
const swiperTabs = new Swiper(".slider__tabs",  {
  direction: 'horizontal',
  slidesPerView: 5,
  watchSlidesProgress: true,
  breakpoints: {
    992: {
      direction: 'vertical',
    }
  },
});

const swiperTab = new Swiper(".construction__gallery",  {
  effect: "coverflow",
  allowTouchMove: false,
  centeredSlides: true,
  slidesPerView: 1.2,
  coverflowEffect: {
    slideShadows: true,
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },
  thumbs: {
    swiper: swiperTabs,
  },
});

// categories tabs
$('.categories__item').on('click',function(){
  var currTab = $(this).index();

  $('.categories__item').removeClass('active');
  $(this).addClass('active');

  $('.categories__content').removeClass('active');
  $('.categories__content').eq(currTab).addClass('active');
});





