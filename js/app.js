// -- mobileMenu

const btnMenu = document.querySelector('.header__btn-menu')
const menu = document.querySelector('.menu')
const menuLink = document.querySelectorAll('.menu__link')
const header = document.querySelector('.header')
const body = document.querySelector('body')

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

// -- preloader

// document.addEventListener('DOMContentLoaded', function () {
//   // var progressBar = document.getElementById('progressBar')
//   // var percent = document.getElementById('percent')
//   var preloader = document.querySelector('.preloader')

//   window.addEventListener('load', function () {
//     preloader.style.display = 'none'
//   })

//   var totalLoadResources = 10 // Загальна кількість ресурсів, які слід завантажити

//   function updateProgressBar(currentLoad) {
//     var progress = (currentLoad / totalLoadResources) * 100
//     progressBar.style.width = progress + '%'
//     percent.innerText = Math.round(progress) + '%'
//   }

//   // Симулюємо завантаження ресурсів
//   var currentLoadedResources = 0
//   var interval = setInterval(function () {
//     currentLoadedResources++
//     updateProgressBar(currentLoadedResources)

//     if (currentLoadedResources === totalLoadResources) {
//       clearInterval(interval)
//     }
//   }, 1000)
// })

window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader')
  const wrapper = document.querySelector('.wrapper')
  preloader.style.display = 'none'
  wrapper.style.display = 'flex'
  body.classList.remove('lock')
})
