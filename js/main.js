// scroll
function scrollToSecondSection() {
  const secondSection = document.getElementById('about');  
  if (secondSection) {
    secondSection.scrollIntoView({ behavior: 'smooth' });
  }
}
document.getElementById('scrollButton').addEventListener('click', scrollToSecondSection);

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

  menuBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {

      const menuList = btn.parentElement.querySelector('.footer__submenu-list')

      btn.classList.toggle('_active')
      menuList.classList.toggle('_active')

      if (menuList.classList.contains('_active')) {
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
  slidesPerView: 'auto',
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
  direction: 'vertical',
  slidesPerView: 5,
  watchSlidesProgress: true,
  preventInteractionOnTransition: true,
  cssMode: true,
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

// form price swiper
const swiperForm = new Swiper('.price__slider', {
  slidesPerView: 1,
  centeredSlides: true,
  autoHeight: true,
  allowTouchMove: false,
  navigation: {
    nextEl: ".swiper-button-next",
    
  },
  pagination: {
    el: ".swiper-pagination",
    type: 'progressbar',
  },
  ignoreLastSwiperSlide: true,
  on: {
    slideChange: function () {
      const currentSlide = this.activeIndex;
      const swiper = this;
      if (currentSlide === swiper.slides.length - 1) { 
        swiper.pagination.el.style.display = 'none';
        swiper.navigation.nextEl.style.display = 'none'; 
      } else {
        swiper.pagination.el.style.display = '';
        swiper.navigation.nextEl.style.display = '';        
      }
    },  
  },
  breakpoints: {
    481: {
      autoHeight: false,
    },
  },
  
});

let mySliderAllSliders = document.querySelector('.price__slider-total');
let mySliderCurrentSlide = document.querySelector('.price__slider-current');

swiperForm.on('slideChange', function (){
  let currentSlide = (++swiperForm.realIndex).toString().padStart(2, '0');
  mySliderCurrentSlide.innerHTML = currentSlide; 

  let totalSlides = (swiperForm.slides.length - 1).toString().padStart(2, '0');
  mySliderAllSliders.innerHTML = totalSlides;

  if (swiperForm.isEnd) {
    document.querySelector('.price__slider-fraction').style.display = 'none';
  } else {
    document.querySelector('.price__slider-fraction').style.display = 'flex';
  }
  
  let progressBar = document.querySelector('.swiper-pagination-progressbar .swiper-pagination-progressbar-fill');
  let progressValue = (currentSlide / totalSlides) * 100;
  progressBar.style.transform = `translate(0, 0) scaleX(${progressValue / 100})`;
});

let totalSlides = (swiperForm.slides.length - 1).toString().padStart(2, '0');
mySliderAllSliders.innerHTML = totalSlides;


