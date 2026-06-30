export function createTypewriter(el, toRotate, period = 2000) {
  let loopNum = 0
  let txt = ''
  let isDeleting = false

  function tick() {
    const i = loopNum % toRotate.length
    const fullTxt = toRotate[i]

    if (isDeleting) {
      txt = fullTxt.substring(0, txt.length - 1)
    } else {
      txt = fullTxt.substring(0, txt.length + 1)
    }

    el.textContent = txt

    let delta = 200 - Math.random() * 100

    if (isDeleting) {
      delta /= 2
    }

    if (!isDeleting && txt === fullTxt) {
      delta = period
      isDeleting = true
    } else if (isDeleting && txt === '') {
      isDeleting = false
      loopNum++
      delta = 500
    }

    setTimeout(tick, delta)
  }

  tick()
}
