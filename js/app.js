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

const btnLang = document.querySelector('.menu__item-lang')
const listLang = document.querySelector('.menu__item-lang>div')
btnLang.addEventListener('click', () => listLang.classList.toggle('open'))

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
