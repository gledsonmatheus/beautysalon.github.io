/* quando clicar mostra ou esconde o menu*/
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

/* quando clicar remove o menu*/
const links = document.querySelectorAll('nav ul li a')
for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}
/* mudar header da pagina quando der scroll*/
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navheight = header.offsetHeight
  if (window.scrollY >= navheight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* testmonials carousel slider swiper */
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },

  keyboard: true
})
/* scroll reavel: mostrar elementos quando der scroll na pag*/
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '50px'
})
scrollReveal.reveal(
  `
#home .image, #home .text,
#about .image, #about .text,
#services header,#services .card,
#testimonials header,#testimonials .testimonials,
#contact .text, #contact .links,
footer .brand, footer .social
`,
  { interval: 100 }
)

/* back to top*/
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')
  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
