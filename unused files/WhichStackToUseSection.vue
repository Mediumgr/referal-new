<template>
  <section class="which-stack-to-use js-stack-use">
    <GradientColor2 :gradientStyle="gradientStyle" colorBack="#424ED1"></GradientColor2>

    <h2 class="which-stack-to-use__title heading-h2" v-html="whichStackToUse.title"></h2>

    <div class="cards-stack">
      <div v-for="stack in whichStackToUse.items" :key="stack.name" class="cards-stack__wrapper-item">
        <span class="cards-stack__label heading-h6">{{ stack.name }}</span>

        <div class="cards-stack__item">
          <div class="cards-stack__name heading-h3">{{ stack.name }}</div>
          <ul class="cards-stack__stack-list">
            <li v-for="item in stack.stack" :key="item" class="cards-stack__stack-item">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <div class="which-stack-to-use-bg"></div>

</template>

<script setup>
import whichStackToUse from '@/assets/data/which-stack-to-use.json';
import { gsap, GSAP_EASE } from "@/helpers/gsap";
import { isDesktop } from "@/helpers";
import cloneDeep from 'clone-deep'

const gradientStyle = {
  height: '20rem',
  top: '0rem',
  transform: 'rotate(0deg)',
}

let timeline = null

function init() {
  const LEFT_ClASS = '_stack-left';
  const RIGHT_ClASS = '_stack-right';
  const ACTIVE_ClASS = '_stack-active';

  const classes = [
    LEFT_ClASS, RIGHT_ClASS, ACTIVE_ClASS
  ]

  const stackContainerEl = document.querySelector('.js-stack-use');
  if (!stackContainerEl) {
    return;
  }

  const titleEl = stackContainerEl.querySelector('.which-stack-to-use__title')
  const gradientEl = stackContainerEl.querySelector('.gradient')

  const cardsStackContainerEl = stackContainerEl.querySelector('.cards-stack')
  const cardsEl = stackContainerEl.querySelectorAll('.cards-stack__wrapper-item');
  const cardsStackWrapperEl = Array.from(stackContainerEl.querySelectorAll('.cards-stack__wrapper-item'))

  function animationAppearance() {
    gsap.from(gradientEl, {
      autoAlpha: 0.2,
      scrollTrigger: {
        trigger: stackContainerEl,
        start: "top 80%",
        end: "clamp(center +=300px)",
        scrub: 1,
        // markers: true,
      },
    })

    // заголовки
    gsap.from(titleEl, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: stackContainerEl,
        start: "top 50%",
        end: "clamp(center +=300px)",
        scrub: true,
        // markers: true,
      },
    })

    gsap.from(cardsStackContainerEl, {
      autoAlpha: 0,
      scrollTrigger: {
        trigger: stackContainerEl,
        start: "top 50%",
        end: "clamp(center +=300px)",
        scrub: true,
        // markers: true,
      },
    })
  }

  function stackAnimate({ current, left = null, right = null, leftElementsWrapper = [], rightElementsWrapper = [] }) {
    if (timeline) {
      timeline.totalDuration(0.08)
    }

    const duration = 0.3
    const backgroundColorActive = '#424ed1'
    const backgroundColorDefault = '#13144b'
    const currentCard = getCardItems(current)
    let optionsOrigin;

    if (isDesktop()) {
      //desktop options
      optionsOrigin = {
        setLeftPositionCard: {
          left: 0,
          right: 'auto',
          transformPerspective: '60rem',
          transformOrigin: "left",
        },
        setRightPositionCard: {
          left: 'auto',
          right: 0,
          transformPerspective: '60rem',
          transformOrigin: "right",
        },
        currentSize: {
          width: '60rem',
          duration,
        },
        currentCard: {
          rotateY: 0,
          backgroundColor: backgroundColorActive,
          autoAlpha: 1,
          duration,
        },
        leftActiveSize: {
          width: '15rem',
          duration,
        },
        rightActiveSize: {
          width: '15rem',
          duration,
        },
        leftRightOpacityCard: {
          autoAlpha: 0.8,
          duration,
        },
        leftRightWrapperSize: {
          width: '9rem',
          duration,
        },
        rotateLeftAnimation: {
          rotateY: 28,
          backgroundColor: backgroundColorDefault,
          duration: duration / 2
        },
        rotateRightAnimation: {
          rotateY: -28,
          backgroundColor: backgroundColorDefault,
          duration: duration / 2
        },
      }
    } else {
      //mobile options
      optionsOrigin = {
        setLeftPositionCard: {
          top: 0,
          bottom: 'auto',
          transformOrigin: 'top',
          transformPerspective: '62rem',
          borderTopLeftRadius: '2rem 3.5rem',
          borderTopRightRadius: '2rem 3.5rem',
        },
        setRightPositionCard: {
          top: 'auto',
          bottom: 0,
          transformOrigin: 'bottom',
          borderBottomLeftRadius: '2rem 3.5rem',
          borderBottomRightRadius: '2rem 3.5rem',
          transformPerspective: '62rem',
        },
        currentSize: {
          height: () => {
            return currentCard[0].clientHeight
          },
          duration,
        },
        currentCard: {
          rotateX: 0,
          backgroundColor: backgroundColorActive,
          autoAlpha: 1,
          duration,
        },
        leftActiveSize: {
          height: '5.3rem',
          duration,
        },
        rightActiveSize: {
          height: '5.3rem',
          duration,
        },
        leftRightOpacityCard: {
          autoAlpha: 0.8,
          duration,
        },
        leftRightWrapperSize: {
          height: '4.7rem',
          duration,
        },
        rotateLeftAnimation: {
          rotateX: -52,
          backgroundColor: backgroundColorDefault,
          duration: duration / 2
        },
        rotateRightAnimation: {
          rotateX: 52,
          backgroundColor: backgroundColorDefault,
          duration: duration / 2
        },
      }
    }

    // этот код нужен из-за того что gsap мутирует объект переданный в него как параметр
    const options = cloneDeep(optionsOrigin);

    timeline = gsap.timeline({ ease: GSAP_EASE })

    function getCardItems(wrapper) {
      let elements = Array.from(wrapper)

      if (wrapper instanceof HTMLElement) {
        elements = [wrapper]
      }

      return elements.map((wrapper) => {
        return wrapper.querySelector('.cards-stack__item')
      })
    }

    const setLeftPositionCard = (elements) => {
      gsap.set(elements, options.setLeftPositionCard)
    }
    const setRightPositionCard = (elements) => {
      gsap.set(elements, options.setRightPositionCard)
    }

    const setOpacity = (elements) => {
      elements.forEach((item, index) => {
        let opacity = 0.5 - (index) / 10
        if (opacity < 0.1) {
          opacity = 0.1
        }

        gsap.set(item, {
          autoAlpha: opacity.toString(),
          overwrite: true,
        })
      })
    }

    const animateRotate = (elements, options) => {
      timeline.to(elements, options, 0)
    }

    const setProperty = (elements, key) => {
      let newOptions = { ...optionsOrigin[key] }
      delete newOptions.duration
      gsap.set(elements, { ...newOptions, overwrite: true })
    }

    const animateLeftRotation = (elements, fast = false) => {
      if (fast) {
        setProperty(elements, 'rotateLeftAnimation')
      }
      animateRotate(elements, options.rotateLeftAnimation)
    }

    const animateRightRotation = (elements, fast = false) => {
      if (fast) {
        setProperty(elements, 'rotateRightAnimation')
      } else {
        animateRotate(elements, options.rotateRightAnimation)
      }
    }

    gsap.set(current, { zIndex: 2 })
    timeline.to(current, options.currentSize, 0)

    !isDesktop() && gsap.set(currentCard, { borderRadius: '2rem' })
    timeline.to(currentCard, options.currentCard, 0)

    const leftRightWrapActive = [left, right].filter(Boolean)
    gsap.set(leftRightWrapActive, { zIndex: 1 })

    if (left) {
      const leftCard = getCardItems(left)
      setLeftPositionCard(leftCard)
      animateLeftRotation(leftCard)

      timeline.to(leftCard, options.leftRightOpacityCard, 0)

      timeline.to(left, options.leftActiveSize, 0)
    }

    if (right) {
      const rightCard = getCardItems(right)
      setRightPositionCard(rightCard)
      animateRightRotation(rightCard)

      timeline.to(rightCard, options.leftRightOpacityCard, 0)

      timeline.to(right, options.rightActiveSize, 0)
    }

    timeline.to([...leftElementsWrapper, ...rightElementsWrapper], options.leftRightWrapperSize, 0)

    const leftCards = getCardItems(leftElementsWrapper)
    if (leftCards.length) {
      setLeftPositionCard(leftCards)
      animateLeftRotation(leftCards, true)
      setOpacity(leftCards.reverse())
    }

    const rightCards = getCardItems(rightElementsWrapper)
    if (rightCards.length) {
      setRightPositionCard(rightCards)
      animateRightRotation(rightCards, true)
      setOpacity(rightCards)
    }
  }

  function handleClick(event) {
    const card = event.target

    if (card.classList.contains('_stack-active')) {
      return true
    }

    const index = getNodeIndex(card)

    cardsStackWrapperEl.forEach((item) => {
      item.classList.remove(...classes)
    })
    card.classList.add(ACTIVE_ClASS)

    changeClassesByIndex(index)
  }

  function changeClassesByIndex(centerIndex) {
    const current = cardsStackWrapperEl[centerIndex]
    const left = cardsStackWrapperEl[centerIndex - 1]
    const right = cardsStackWrapperEl[centerIndex + 1]

    cardsStackWrapperEl.forEach((item, index) => {
      // lefts
      if (index < centerIndex) {
        item.classList.add(LEFT_ClASS)
      }

      // rights
      if (index > centerIndex) {
        item.classList.add(RIGHT_ClASS)
      }
    })

    console.log('index::: ', centerIndex)

    // правые карточки без активных классов
    const rightElementsWrapper = cardsStackWrapperEl.slice(centerIndex + 2)

    // левые карточки без активных классов
    const leftElementsWrapper = centerIndex - 1 > 0 ? cardsStackWrapperEl.slice(0, centerIndex - 1) : []


    stackAnimate({ current, left, right, leftElementsWrapper, rightElementsWrapper })
  }

  function getNodeIndex(element) {
    return [...element.parentNode.children].indexOf(element)
  }

  cardsEl[1] && cardsEl[1].classList.add(ACTIVE_ClASS)
  changeClassesByIndex(1)
  timeline.totalProgress(1)

  const eventType = isDesktop() ? 'mouseover' : 'click'
  cardsEl.forEach(card => {
    card.addEventListener(eventType, handleClick)
  })

  animationAppearance()
}

onMounted(() => {
  init()
});
</script>

<style lang="scss" scoped>
@import "~/assets/styles/components/which-stack-to-use";
@import "~/assets/styles/components/cards-stack";
</style>
