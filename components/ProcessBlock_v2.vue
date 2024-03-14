<template>
  <section class="process">
    <div class="process-wrapper">
      <div class="process_item_wrapper">
        <div class="process_item process_item_first process_item_video show">
          <video
            poster="/images/process/process-b1.jpg"
            id="background-video"
            autoplay
            loop
            muted
            playsinline
          >
            <source src="/video/process/process-b1.webm" type="video/webm" />
            <source src="/video/process/process-b1.mp4" type="video/mp4" />
          </video>
          <div class="process_item-overlay50"></div>
          <div class="process_item_video-header">
            <div class="process_item_video-text">Как получить<br />бонус</div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item">
          <div class="process_item_description">
            <div class="process_item_header heading-h4 process_item_style">
              Заполните форму <br />
              заявки на&nbsp;сайте вместе с&nbsp;другом
            </div>
            <div class="process_item_header-num">01</div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item">
          <div class="process_item_description">
            <div class="process_item_header heading-h4 process_item_style">
              На&nbsp;ваши электронные адреса придет подтверждение.
            </div>
            <ul class="process_item_header process_item_small">
              <li class="process_item_li">
                Заявки рассматриваются <br />
                до&nbsp;5&nbsp;рабочих дней
              </li>
            </ul>
            <div class="process_item_header-num">02</div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item">
          <div class="process_item_description">
            <div class="process_item_header heading-h4 process_item_style-2">
              Если опыт в&nbsp;резюме друга будет релевантным, ему назначат одно
              техническое собеседование
            </div>
            <div class="process_item_header-num">03</div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item">
          <div class="process_item_description">
            <div class="process_item_header heading-h4 process_item_style">
              В&nbsp;случае успешного собеседования друг получит оффер
            </div>
            <div class="process_item_header-num">04</div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_last-card">
          <div class="process_item_description">
            <svg-icon
              class="process_item_svg"
              name="process-checkmark"
            ></svg-icon>
            <div class="process_item_last-card-info heading-h3">
              Когда друг пройдет испытательный срок, ты&nbsp;получишь выплату
            </div>

            <div class="process_item_last-card-small">
              Мы вышлем тебе электронный договор. Выплата придет в течение 7
              рабочих дней после его подписания
            </div>
            <BaseButton @click.stop="scrollTo" class="process_item_button">
              <span class="process_item_button_text">Смотреть вакансии</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    <div class="process_end_element"></div>
  </section>
</template>

<script setup>
import { gsap, ScrollTrigger, scrollTriggerRefresh } from '@/helpers/gsap'
import { isDesktop } from '@/helpers'

const scrollTo = () => {
  document.querySelector('#it-direction').scrollIntoView({
    behavior: 'smooth',
  })
}

function initAnimation() {
  const cardsArray = Array.from(
    document.querySelectorAll('.process_item_wrapper'),
  )
  const lastItem =
    cardsArray[cardsArray.length - 1].querySelector('.process_item')

  cardsArray.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      // start: "top-=" + 10 * index + " 10%",
      start: 'top 10%',
      end: 'top bottom',
      endTrigger: '.process_end_element',
      // pin: true,
      // anticipatePin: 1,
      // markers: true,
      onEnter: () => {
        if (index < 1) return
        const previousCards = cardsArray.slice(0, index).reverse()

        console.log('onEnter')
        previousCards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: 1 - (idx + 1) / 10,
            duration: 0.15,
          })
        })
      },
      onLeaveBack: () => {
        if (index < 1) return
        const previousCards = cardsArray.slice(0, index).reverse()

        previousCards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: 1 - idx / 10,
            duration: 0.15,
          })
        })
      },
      onComplete: (self) => {
        console.log(self)
      },
    })

    if (index !== cardsArray.length - 1) {
      let options = {}

      if (isDesktop()) {
        options = {
          scaleX: 1 - 0.02 * (cardsArray.length - (index + 1)),
          y: `-=${cardsArray.length - index}rem`,
        }
      } else {
        options = {
          scaleX: 1 - 0.05 * (cardsArray.length - (index + 1)),
          y: `-=${cardsArray.length - index}rem`,
        }

        if (index === 0) {
          options.scaleX = 0.65
        }
      }

      const item = card.querySelector('.process_item')
      const itemNext = cardsArray[index + 1].querySelector('.process_item')

      gsap.to(item, {
        scaleX: options.scaleX,
        y: options.y,
        ease: 'none',
        immediateRender: true,
        scrollTrigger: {
          trigger: itemNext,
          start: 'top bottom',
          end: 'bottom bottom',
          endTrigger: lastItem,
          scrub: true,
          preventOverlaps: 'group1',
          // markers: { indent: 50 },
        },
      })
    }
  })

  scrollTriggerRefresh()
}

onMounted(() => {
  initAnimation()
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/components/process';
</style>
