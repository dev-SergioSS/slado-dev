// Отримати ширину та висоту вікна браузера
var windowWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth

window.addEventListener('beforeunload', function () {
  document.documentElement.style.scrollBehavior = 'auto'
  document.documentElement.scrollTop = 0
  document.documentElement.style.scrollBehavior = 'smooth'
})

// -- mobileMenu

const btnMenu = document.querySelector('.header__btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu__link')
const header = document.querySelector('.header')

if (btnMenu != null) {
  btnMenu.addEventListener('click', function () {
    btnMenu.classList.toggle('open')
    menu.classList.toggle('open')
    header.classList.toggle('hide-menu')
  })
}

window.addEventListener('click', (e) => {
  if (
    !e.target.closest('.menu') &&
    !e.target.closest('.header__btn-menu') &&
    menu.classList.contains('open')
  ) {
    btnMenu.classList.remove('open')
    menu.classList.remove('open')
    header.classList.remove('hide-menu')
  }
})

for (link of menuLink) {
  link.addEventListener('click', () => {
    btnMenu.classList.remove('open')
    menu.classList.remove('open')
    header.classList.remove('hide-menu')
  })
}

//-- lang

const itemLang = document.querySelector('.lang')
const listLang = document.querySelector('.lang__list')
itemLang.addEventListener('click', () => itemLang.classList.toggle('open'))

// -- textarea

document.addEventListener('DOMContentLoaded', function () {
  let textareas = document.querySelectorAll('textarea')
  textareas.forEach((el) => {
    el.addEventListener('input', function () {
      this.style.height = 'auto'
      this.style.height =
        this.scrollHeight + (this.offsetHeight - this.clientHeight) + 'px'
    })
  })
})

// -- float header

let scrolledPixels = 0

document.addEventListener('scroll', (e) => {
  scrolledPixels = window.scrollY

  if (scrolledPixels > 0) header.classList.add('float')
  else header.classList.remove('float')
})

// -- secret slicky position

if (windowWidth > 700) {
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight

  const secretText = document.querySelector('.secret__text')
  const secretTextHeight = secretText.offsetHeight
  let secretPaddingY = (windowHeight - secretTextHeight) / 2 - 50

  if (secretPaddingY < 0) secretPaddingY = 100

  secretText.style.top = secretPaddingY + 'px'
}

// -- partners

const partnersTextBlock = document.querySelector('.partners__text')
const partnersBenefits = document.querySelector('.partners__benefits')

window.addEventListener('resize', () => {
  let currentWindowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth

  if (
    currentWindowWidth > 1200 &&
    !partnersTextBlock.contains(partnersBenefits)
  ) {
    partnersTextBlock.appendChild(partnersBenefits)
  }
})

// init
if (windowWidth > 1200) {
  partnersTextBlock.appendChild(partnersBenefits)
}
