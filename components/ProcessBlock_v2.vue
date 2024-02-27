<template>
  <div class="process">
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
            <svg-icon class="process_item_svg" name="vector"></svg-icon>
            <div class="process_item_last-card-info">
              Когда друг пройдет испытательный срок, ты&nbsp;получишь выплату
            </div>

            <div class="process_item_last-card-small">
              Мы вышлем тебе электронный договор. Выплата придет в течение 7
              рабочих дней после его подписания
            </div>
            <BaseButton
              @click.stop="scrollTo('vacancy')"
              class="process_item_button"
            >
              <span class="process_item_button_text">Смотреть вакансии</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
    <div class="process_end_element"></div>
  </div>
</template>

<script setup>
import { gsap, ScrollTrigger, scrollTriggerRefresh } from '@/helpers/gsap'
import { isDesktop } from '@/helpers'

const scrollTo = () => {
  document.querySelector('.which-stack-to-use__title').scrollIntoView({
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
.process {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 2rem;
  position: relative;
  align-items: center;
  flex: 0 0 auto;
  background-color: rgba(247, 247, 247, 1);
  width: 100%;

  @include mq(768) {
    padding: 0 4rem;
  }
  @include mq(1440) {
    padding: 0 4rem 4rem;
  }

  &-wrapper {
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10rem;
    position: relative;
    flex: 0 0 auto;
    width: 33.5rem;
    /* --stack-cards-gap: calc(0.75 * 1em); */
    @include mq(768) {
      width: 68.8rem;
    }
    @include mq(1440) {
      width: 128rem;
      gap: 10rem;
    }
  }
  &_item {
    width: 100%;
    height: 43.7rem;
    min-height: 37rem;
    max-height: 37rem;
    // align-items: flex-start;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 4rem;
    overflow: hidden;
    box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
    /* position: sticky; */
    position: relative;
    /* top: calc(1.25 * 1em); */
    padding: 3rem;
    -webkit-transform-origin: center top;
    transform-origin: center top;
    margin: 0 auto;
    /* backdrop-filter: blur(40px); */
    // max-height: calc(var(--vh, 1vh) * 90);
    /* filter: blur(1px); */
    /* transition: all .2s linear;*/
    &:last-child {
      transform: translateY(-4rem);
      max-height: 100%;
    }

    @include mq(768) {
      min-height: 70rem;
      padding: 5rem;
      border-radius: 5rem;
    }
    @include mq(1440) {
      padding: 10rem;
    }
    @include mq(1920) {
      min-height: 65rem;
    }
    &_first {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &_small {
      padding-top: 2rem;
      padding-left: 1.2rem;

      @include mq(768) {
        font-size: 2rem;
      }
      @include mq(1440) {
        padding-top: 4rem;
        padding-left: 0;
      }
      @include mq(1920) {
        padding-top: 1rem;
      }
    }
    &_style {
      @include mq(768) {
        padding-right: 17.5rem;
      }
      @include mq(1440) {
        padding-right: 30rem;
      }
      &-2 {
        @include mq(768) {
          padding-right: 10.5rem;
        }
      }
    }
    &_description {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      width: 100%;
    }
    &_wrapper {
      width: 100%;
      top: 10rem;
      position: sticky;
      margin: 0 auto;
      /* transform: translateY(10rem); */
      &:nth-child(6) {
        transform: translateY(3.5rem);
        @include mq(768) {
          transform: translateY(1rem);
        }
      }
      @include mq(1440) {
        top: 9rem;
        //@for $i from 1 through 5 {
        //  &:nth-child(#{$i}) {
        //    transform: translateY(#{($i - 1)}rem);
        //  }
        //}
        &:nth-child(6) {
          transform: translateY(6.4rem);
        }
      }
      @include mq(1900) {
        top: 7rem;
        &:nth-child(6) {
          transform: translateY(7rem);
        }
      }
    }
    video {
      position: absolute;
      border-radius: 2rem;
      object-fit: cover;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      object-position: left;
    }
    &-overlay50 {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 100%;
      margin: 0;
      background: rgba(0, 0, 0, 0.5);
    }
    &_video-header {
      padding: 0;
      @include mq(1440) {
        padding: 0;
      }
    }
    &_video-text {
      font-size: 4.8rem;
      letter-spacing: -0.288rem;
      position: relative;
      align-self: stretch;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
      text-align: center;
      font-style: normal;
      line-height: 90%;

      @include mq(768) {
        font-size: 9.6rem;
        letter-spacing: -0.576rem;
      }

      @include mq(1440) {
        font-size: 15rem;
        letter-spacing: -0.9rem;
      }

      @include mq(1920) {
        letter-spacing: -1.2rem;
      }
    }
    &_header {
      position: relative;
      align-self: stretch;
      color: rgba(19, 20, 75, 1);
      font-style: normal;
      text-align: left;
      max-width: 98rem;

      @include mq(1440) {
        font-size: 6.4rem;
        line-height: 90%;
      }
    }
    &_header-num {
      position: absolute;
      bottom: -4rem;
      left: 2rem;
      height: 22rem;
      font-size: 17rem;
      font-style: normal;
      font-weight: 500;
      line-height: 120%;
      letter-spacing: -0.68rem;
      background: linear-gradient(
        177.1deg,
        #701bff 21.37%,
        rgba(255, 57, 44, 0.85) 46.08%,
        rgba(255, 158, 42, 0) 67.67%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @include mq(768) {
        bottom: -7rem;
        left: 3.6rem;
        height: 39rem;
        font-size: 30rem;
      }
      @include mq(1440) {
        bottom: -14rem;
        left: auto;
        height: 52rem;
        font-size: 40rem;
        letter-spacing: -1.6rem;
      }
    }
    &_button {
      width: 100%;
      padding: 2rem;
      margin-top: 2.7rem;
      border-radius: 4rem;
      background: rgb(255, 255, 255);
      flex-shrink: 0;

      @include mq(768) {
        height: 7.4rem;
        margin-top: 14rem;
        font-size: 2.4rem;
      }
      @include mq(1440) {
        padding: 2.6rem 3.6rem;
        height: auto;
        width: auto;
      }
      &:hover {
        .process_item_button_text {
          color: white;
          transition: 0.2s ease;
        }
      }
      &_text {
        position: relative;
        font-size: 1.6rem;
        letter-spacing: -0.032rem;
        color: var(--eggplant);
        font-weight: 500;
        line-height: 120%;

        @include mq(768) {
          font-size: 2rem;
          letter-spacing: -0.06rem;
        }
        @include mq(1440) {
          font-size: 2.4rem;
          letter-spacing: -0.072rem;
        }
      }
    }
    &_li {
      color: var(--eggplant);
      padding-left: 1rem;

      &:not(:last-child) {
        padding-bottom: 1rem;
      }

      @include mq(1440) {
        font-size: 2.4rem;
        line-height: 120%;
        opacity: 0.8;
        padding-left: 0;
      }

      &::marker {
        content: '•';
        font-size: 2rem;
        color: var(--eggplant);

        @include mq(1440) {
          content: '';
        }
      }
    }
    &_last-card {
      position: relative;
      background: radial-gradient(
        130.45% 100% at 100% 100%,
        #ffb55c 0%,
        #ff4236 28.77%,
        #9e22d2 62.81%,
        #2b268a 100%
      );
      @include mq(1440) {
        background: radial-gradient(
          82.66% 161.63% at 85.94% 97.15%,
          #ffb55c 0%,
          #ff4236 28.77%,
          #9e22d2 62.81%,
          #2b268a 100%
        );
      }
      &-info {
        padding-top: 7.4rem;
        color: rgb(255, 255, 255);
        font-size: 2.9rem;
        line-height: 100%;
        padding-bottom: 2rem;

        @include mq(768) {
          padding-top: 20rem;
          font-size: 3.6rem;
        }
        @include mq(1440) {
          padding-top: 0;
          font-size: 6.3rem;
          line-height: 5.76rem;
          padding-bottom: 4rem;
        }
      }
      &-small {
        color: rgb(255, 255, 255);
        font-size: 1.6rem;
        line-height: 120%;

        @include mq(768) {
          font-size: 2.2rem;
        }
        @include mq(1440) {
          font-size: 2.4rem;
          padding-right: 33rem;
        }
      }
    }
    &_svg {
      position: absolute;
      top: -5rem;
      left: 3rem;
      width: 14.9rem;
      height: 14.9rem;

      @include mq(768) {
        top: -10rem;
        left: 5rem;
        width: 30rem;
        height: 30rem;
      }
      @include mq(1440) {
        top: 25rem;
        left: 77rem;
        width: 52rem;
        height: 52rem;
      }
    }
  }
  &_end_element {
    width: 100%;
    height: 1px;
  }
}
</style>
