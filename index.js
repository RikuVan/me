import { TimelineMax } from 'gsap'

window.onload = animateInPersonData

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
