window.addEventListener('load', function () {
  const preloader = document.querySelector('.preloader')
  const wrapper = document.querySelector('.wrapper')
  const body = document.querySelector('body')

  preloader.style.display = 'none'
  wrapper.classList.remove('hidden')
  body.classList.remove('lock')
})
