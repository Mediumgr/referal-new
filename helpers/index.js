import { scrollTriggerRefresh } from '~/helpers/gsap.js'

const heightVH = () => {
  // Добавление 1vh (использование: height: 100vh; height: calc(var(--vh, 1vh) * 100);) для фикса 100vh на мобилках
  let vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', vh + 'px')
  window.addEventListener('resize', function () {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', vh + 'px')
  })
}

function refreshScrollTriggerByElement(element) {
  const options = {
    rootMargin: '200px 0px 200px 0px',
    // threshold: 1.0,
  }
  const callback = function (entries) {
    /* Content excerpted, show below */
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        scrollTriggerRefresh()
        console.log(
          `Refreshing ScrollTrigger on [${Array.from(element.classList).join(',')}]`,
        )
      }
    })
  }

  const observer = new IntersectionObserver(callback, options)
  observer.observe(element)
}

const isMobile = () => {
  return window.matchMedia(`(min-width: 0px) and (max-width: 767px)`).matches
}

const isTablet = () => {
  return window.matchMedia(`(min-width: 768px) and (max-width: 1199px)`).matches
}
const isDesktop = () => {
  return window.matchMedia(`(min-width: 1200px)`).matches
}

export {
  heightVH,
  isMobile,
  isTablet,
  isDesktop,
  refreshScrollTriggerByElement,
}
