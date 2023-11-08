//^ popups

const popupLinks = document.querySelectorAll('.popup-link')
const popupCloseIcon = document.querySelectorAll('.popup__btn-close')

// якщо модалок багато
if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index]

    popupLink.addEventListener('click', function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '')
      const currentPopup = document.getElementById(popupName)
      popupOpen(currentPopup)
      e.preventDefault()
    })
  }
}

function popupOpen(currentPopup) {
  lockBody('lock')
  currentPopup.classList.add('open')

  currentPopup.addEventListener('click', function (e) {
    if (e.target.closest('.popup__overlay')) {
      popupClose(e.target.closest('.popup'))
    }
  })
}

function popupClose(activePopup) {
  lockBody('unlock')
  activePopup.classList.remove('open')
}

if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index]
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'))
      e.preventDefault()
    })
  }
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const activePopup = document.querySelector('.popup.open')
    popupClose(activePopup)
  }
})

// function need for 1)mobile menu 2) popup
function lockBody(action) {
  const body = document.querySelector('body')

  if (action == 'lock') {
    body.classList.toggle('lock')
  } else if (action == 'unlock') {
    body.classList.remove('lock')
  }
}

// -- thanks popups 1

let formFeedback = document.querySelectorAll('.feedback__form')
let popupThanks = document.querySelector('#popup-thanks')
let popupformFeedback = document.querySelector('#popup-feedback')

formFeedback.forEach((form) => {
  form.addEventListener('submit', function (e) {
    e.preventDefault()

    let isValid = true
    let inputs = form.querySelectorAll(
      '.feedback__form input, .feedback__form textarea'
    )

    inputs.forEach(function (element) {
      if (!element.value) {
        isValid = false
      }
    })

    if (isValid) {
      if (popupformFeedback.classList.contains('open')) {
        popupClose(popupformFeedback)
      }
      popupOpen(popupThanks)
    }
  })
})

// -- thanks popups 2

let formBox = document.querySelector('.popup__form')
let popupBox = document.querySelector('#popup-box')

formBox.addEventListener('submit', function (e) {
  e.preventDefault()

  let isValid = true
  let inputs = document.querySelectorAll('.popup__form input')

  inputs.forEach(function (element) {
    if (!element.value) {
      isValid = false
    }
  })

  if (isValid) {
    popupBox.classList.add('done')
  }
})
