// -- sliders

// let secretSlider = new Swiper('.secret__slider', {
//   direction: 'vertical',
//   spaceBetween: 30,
//   slidesPerView: 'auto',

//   mousewheel: true,
//   freeMode: true,
//   releaseOnEdges: true,

//   breakpoints: {
//     576: {
//       spaceBetween: 80,
//     },
//   },
// })

let processSlider = new Swiper('.process__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,
  speed: 6000,
  loop: true,
  autoplay: {
    delay: 1,
  },
  allowTouchMove: false,

  breakpoints: {
    576: {
      spaceBetween: 42,
    },
  },
})

let partnersSlider = new Swiper('.partners__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  speed: 6000,
  loop: true,
  // loopAdditionalSlides: 10,
  autoplay: {
    delay: 1,
  },
  allowTouchMove: false,

  breakpoints: {
    576: {
      spaceBetween: 46,
    },
  },
})

let sectionProducts = document.querySelector('.products')
let productsPiece = document.querySelector('.products__piece')

let productSlider = new Swiper('.products__slider', {
  spaceBetween: -35,
  slidesPerView: 'auto',
  loop: true,
  centeredSlides: true,
  allowTouchMove: true,
  // initialSlide: 1,

  navigation: {
    nextEl: '.products__slider-btn-next',
    prevEl: '.products__slider-btn-prev',
  },

  breakpoints: {
    768: {
      // allowTouchMove: false,
      slidesPerView: 6,
      spaceBetween: 60,
    },
    // 998: {
    //   slidesPerView: 6,
    // },
  },

  on: {
    // init: function () {
    //   let activeSlide = this.slides[this.activeIndex]
    //   if (activeSlide) setCurrentProduct(activeSlide)
    // },
    slideChange: function () {
      let activeSlide = this.slides[this.activeIndex]
      if (activeSlide) setCurrentProduct(activeSlide)
    },
  },
})

function setCurrentProduct(activeSlide) {
  let { color, folder } = activeSlide.dataset
  sectionProducts.style.setProperty('--productColor', color)
  productsPiece.style.backgroundImage = `url(../img/product/${folder}/piece.png)`

  productsPiece.classList.add('animated')
  setTimeout(function () {
    productsPiece.classList.remove('animated')
  }, 400)
}

let popupProducts = document.querySelector('#popup-products')
let productsPieces = document.querySelector('.popup-products__pieces')

let popupProductSlider = new Swiper('.popup-products__slider', {
  spaceBetween: 60,
  slidesPerView: 1,
  loop: true,
  centeredSlides: true,
  allowTouchMove: true,
  initialSlide: 1,

  navigation: {
    // nextEl: '.popup-products__slider-btn-next',
    // prevEl: '.popup-products__slider-btn-prev',
    nextEl: '.products__slider-btn-next',
    prevEl: '.products__slider-btn-prev',
  },

  breakpoints: {
    768: {},
  },

  on: {
    // init: function () {
    //   let activeSlide = this.slides[this.activeIndex]
    //   if (activeSlide) setCurrentProduct(activeSlide)
    // },
    slideChange: function () {
      let activeSlide = this.slides[this.activeIndex]
      if (activeSlide) setCurrentPopupProduct(activeSlide)
    },
  },
})

function setCurrentPopupProduct(activeSlide) {
  let { color, folder } = activeSlide.dataset
  popupProducts.style.setProperty('--productPopupColor', color)
  productsPieces.style.backgroundImage = `url(../img/product/${folder}/pieces.png)`

  productsPieces.classList.add('animated')
  setTimeout(function () {
    productsPieces.classList.remove('animated')
  }, 400)
}

// productSlider.controller.control = popupProductSlider
// popupProductSlider.controller.control = productSlider

let btnPopupNext = document.querySelector('.popup-products__slider-btn-next')
let btnPopupPrev = document.querySelector('.popup-products__slider-btn-prev')

btnPopupNext.addEventListener('click', () =>
  document.querySelector('.products__slider-btn-next').click()
)
btnPopupPrev.addEventListener('click', () =>
  document.querySelector('.products__slider-btn-prev').click()
)
