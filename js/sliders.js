// -- sliders

let processSlider = new Swiper('.process__slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 24,
  speed: 4700,
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
  speed: 5000,
  loop: true,
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

// ------- popup products

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
    nextEl: '.products__slider-btn-next',
    prevEl: '.products__slider-btn-prev',
  },

  breakpoints: {
    768: {},
  },

  on: {
    slideChange: function () {
      let activeSlide = this.slides[this.activeIndex]
      if (activeSlide) setCurrentPopupProduct(activeSlide)
    },
  },
})

function setCurrentPopupProduct(activeSlide) {
  let { color, folder } = activeSlide.dataset
  popupProducts.style.setProperty('--productPopupColor', color)
  productsPieces.style.backgroundImage = `url(img/product/${folder}/pieces.png)`

  productsPieces.classList.add('animated')
  setTimeout(function () {
    productsPieces.classList.remove('animated')
  }, 400)
}

let btnPopupNext = document.querySelector('.popup-products__slider-btn-next')
let btnPopupPrev = document.querySelector('.popup-products__slider-btn-prev')

btnPopupNext.addEventListener('click', () =>
  document.querySelector('.products__slider-btn-next').click()
)
btnPopupPrev.addEventListener('click', () =>
  document.querySelector('.products__slider-btn-prev').click()
)

// ------- products

const sectionProducts = document.querySelector('.products')
const productsPiece = document.querySelector('.products__piece')
const btnColorPopup = document.querySelector('.products__btn-color')

const productsWrapper = document.querySelector(
  '.products__slider .swiper-wrapper'
)
const productsSlides = productsWrapper.querySelectorAll('.swiper-slide')

let clonedSlides = []

for (let i = 0; i < 5; i++) {
  productsSlides.forEach(function (slide) {
    var clone = slide.cloneNode(true)
    clonedSlides.push(clone)
  })
}

clonedSlides.forEach(function (clone) {
  productsWrapper.appendChild(clone)
})

let productSlider = new Swiper('.products__slider', {
  spaceBetween: 40,
  slidesPerView: 2.3,
  loop: true,
  centeredSlides: true,
  allowTouchMove: true,

  loopAdditionalSlides: 4,

  navigation: {
    nextEl: '.products__slider-btn-next',
    prevEl: '.products__slider-btn-prev',
  },

  breakpoints: {
    480: {
      slidesPerView: 3,
    },
    720: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
    768: {
      allowTouchMove: false,
      slidesPerView: 6,
    },
    1600: {
      slidesPerView: 6,
      spaceBetween: 100,
    },
  },

  on: {
    slideChange: function () {
      let activeSlide = this.slides[this.activeIndex]
      if (activeSlide) setCurrentProduct(activeSlide)
    },
  },
})

// * ----- init product slider

function setCurrentProduct(activeSlide) {
  let { color, btnColor, folder } = activeSlide.dataset
  sectionProducts.style.setProperty('--productColor', color)
  productsPiece.style.backgroundImage = `url(img/product/${folder}/piece.png)`
  btnColorPopup.style.color = btnColor

  productsPiece.classList.add('animated')
  setTimeout(function () {
    productsPiece.classList.remove('animated')
  }, 400)
}
