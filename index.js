import { TimelineMax, TweenLight } from 'gsap'

const BACKGROUND_IMG = './rick.jpg'

window.onload = function() {
  return loadImg(BACKGROUND_IMG)
    .then(({ path }) => {
      const main = document.getElementById('main')
      TweenMax.to(main, 0, { className: 'background' })
    })
    .finally(() => {
      animateInPersonData()
    })
}

function animateInPersonData() {
  const codeChildren = [...document.querySelectorAll('.key-value-pair')]
  const brackets = document.querySelectorAll('.bracket')
  const tl = new TimelineMax({ repeat: 0 })
  tl.staggerFromTo(codeChildren, 2, { opacity: 0 }, { opacity: 1 }, 0.1)
    .staggerTo(brackets, 0, {
      opacity: 1,
      color: 'white',
      fontWeight: 'bold'
    })
    .staggerTo(brackets, 1, {
      opacity: 1,
      color: 'hsl(0, 0%, 55%)',
      fontWeight: 'normal'
    })
}

function loadImg(path) {
  return new Promise(resolve => {
    const img = new Image()
    img.onload = () => resolve({ path, status: 'ok' })
    img.onerror = () => resolve({ path, status: 'error' })
    img.src = path
  })
}
