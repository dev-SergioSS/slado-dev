gsap.registerPlugin(ScrollTrigger)
let widthWindow = document.body.clientWidth

// -- secret__slides
if (widthWindow < 768) {
  gsap.from('.secret__slide div', {
    scrollTrigger: {
      trigger: '.secret__list',
      start: 'top 80%',
    },

    opacity: 0,
    stagger: 0.3,
    duration: 0.4,
    ease: 'power2.out',
  })
  gsap.from('.secret__slide span', {
    scrollTrigger: {
      trigger: '.secret__list',
      start: 'top 80%',
    },

    opacity: 0,
    stagger: 0.3,
    duration: 0.4,
    ease: 'power2.out',
  })
  gsap.from('.secret__slide h3', {
    scrollTrigger: {
      trigger: '.secret__list',
      start: 'top 80%',
    },

    opacity: 0,
    stagger: 0.3,
    duration: 0.4,
    ease: 'power2.out',
  })
}
// -- bagels
if (widthWindow > 1200) {
  let elemBagelAnimate = document.querySelector('.hero__image-bagel_animate')
  let elemBagelFixed = document.querySelector('.hero__image-bagel_fixed')

  let myScrollHandler = () => {
    let style = window.getComputedStyle(elemBagelAnimate)
    let matrix = new WebKitCSSMatrix(style.transform)
    let translateY = matrix.m42

    if (translateY >= 410) {
      window.removeEventListener('scroll', myScrollHandler)
      elemBagelAnimate.style.display = 'none'
      elemBagelFixed.style.display = 'block'
      animateLabels()
    }
  }

  window.addEventListener('scroll', myScrollHandler)

  gsap.to('.hero__image-bagel_animate', {
    y: 420,
    scale: 0.9,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.hero__image-bagel_animate',

      start: 'top 10%',
      end: 'top -40%',
      // markers: true,
      id: 'bagel',
      scrub: 1,

      onUpdate: function (self) {},
    },
  })

  function animateLabels() {
    gsap.fromTo(
      '.new-trend__label-1',
      {
        ease: 'power2.out',
        duration: 0.8,
        y: 0,
        scaleX: 0,
        xPercent: 50,
      },
      {
        scaleX: 1,
        xPercent: 0,
      }
    )
    gsap.fromTo(
      '.new-trend__label-2',
      {
        ease: 'power2.out',
        duration: 0.8,
        y: 0,
        scaleX: 0,
        xPercent: -50,
      },
      {
        scaleX: 1,
        xPercent: 0,
      }
    )
    gsap.from('.new-trend__label > *', {
      opacity: 0,
      delay: 0.6,
      duration: 0.4,
    })
  }
}

gsap.from('.solution__items li', {
  scrollTrigger: {
    trigger: '.solution__items',
    start: 'top 90%',
  },

  opacity: 0,
  stagger: 0.4,
  duration: 0.4,
  ease: 'power2.out',
})

gsap.to('.piece-sol-1', {
  rotation: 30,
  y: -50,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-sol-1',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-sol-2', {
  y: 20,
  ease: 'power1.out',
  scale: 1,
  scrollTrigger: {
    trigger: '.piece-sol-2',
    start: 'top center',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-sol-3', {
  y: -30,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-sol-3',
    start: 'top center',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-sol-4', {
  y: -40,
  rotation: -20,

  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-sol-4',
    start: 'top center',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-sol-5', {
  y: -30,
  ease: 'power1.out',
  scale: 1,
  scrollTrigger: {
    trigger: '.piece-sol-5',
    start: 'top center',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-sol-6', {
  y: -20,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-sol-6',
    start: 'top center',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-sol-7', {
  y: -30,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-sol-7',
    start: 'top center',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-sol-8', {
  y: -40,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-sol-8',
    start: 'top center',
    end: 'top 0%',
    scrub: 1,
  },
})

gsap.to('.piece-products-1', {
  y: -50,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-products-1',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-products-2', {
  rotation: 30,
  y: -40,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-products-2',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-products-3', {
  rotation: -10,
  y: -30,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-products-3',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-products-4', {
  y: -50,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-products-4',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-products-5', {
  rotation: 10,
  y: -50,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-products-5',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-products-7', {
  rotation: 10,
  y: -20,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-products-7',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-products-9', {
  y: -50,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-products-9',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})

gsap.to('.piece-feedback-1', {
  rotation: 30,
  y: -50,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-feedback-1',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-feedback-2', {
  y: -40,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-feedback-2',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-feedback-3', {
  y: -30,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-feedback-3',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-feedback-4', {
  y: -50,
  rotation: -10,

  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-feedback-4',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,

    scale: 0.9,
  },
})

gsap.from('.piece-process-1', {
  rotation: 30,
  y: -50,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-process-1',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-process-2', {
  y: -40,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-process-2',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})

gsap.to('.piece-secret-1', {
  rotation: 20,
  y: 30,
  x: -20,
  ease: 'power1.out',
  scale: 0.9,
  scrollTrigger: {
    trigger: '.piece-secret-1',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-secret-2', {
  y: -30,
  rotation: 20,
  scale: 1.1,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-secret-2',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})
gsap.to('.piece-secret-3', {
  y: -20,
  ease: 'power1.out',
  scrollTrigger: {
    trigger: '.piece-secret-3',
    start: 'top 80%',
    end: 'top 0%',
    scrub: 1,
  },
})

gsap.to('.presentation__icon', {
  y: -20,
  ease: 'power1.out',
  scale: 0.95,
  scrollTrigger: {
    trigger: '.presentation__icon',
    start: 'top center',
    end: 'top 0%',
    scrub: 1,
  },
})
