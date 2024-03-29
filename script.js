const cursor = document.querySelector('.cursor')
const borderCursor = document.querySelector('.border-cursor')
const services = document.querySelectorAll('.services')
const header = document.querySelector('.header')

let mousePosition = { x: 0, y: 0 }
let titleBtnHovered = false

// services accordion
services.forEach((service, i) => {
  const title = service.querySelector('.service-title')
  title.addEventListener('click', () => {
    services.forEach((service, j) => {
      if (service.classList.contains('active') && i !== j) {
        service.classList.remove('active')
      }
    })
    service.classList.toggle('active')
  })

  console.log(borderCursor.style)
  const titleBtn = service.querySelector('i')

  titleBtn.addEventListener('mouseenter', (e) => {
    titleBtnHovered = true
    const top = titleBtn.getBoundingClientRect().top
    const left = titleBtn.getBoundingClientRect().left
    const width = titleBtn.getBoundingClientRect().width
    const height = titleBtn.getBoundingClientRect().height
    borderCursor.style.top = `${top + width / 2}px`
    borderCursor.style.left = `${left + width / 2}px`
    borderCursor.style.width = `${width}px`
    borderCursor.style.height = `${width}px`
  })

  titleBtn.addEventListener('mouseleave', (e) => {
    const borderCursorSize = 30
    titleBtnHovered = false
    borderCursor.style.width = `${borderCursorSize}px`
    borderCursor.style.height = `${borderCursorSize}px`
  })
})

// cursor trail
window.addEventListener('mousemove', (e) => {
  mousePosition.x = e.clientX
  mousePosition.y = e.clientY
  cursorTrail()
})

const cursorTrail = () => {
  if (!titleBtnHovered) {
    borderCursor.style.top = `${mousePosition.y}px`
    borderCursor.style.left = `${mousePosition.x}px`
  }
  cursor.style.top = `${mousePosition.y}px`
  cursor.style.left = `${mousePosition.x}px`
}

// sticky header
window.onscroll = () => {
  if (window.pageYOffset > 200) {
    header.classList.add('header-sticky')
  } else {
    header.classList.remove('header-sticky')
  }
}
