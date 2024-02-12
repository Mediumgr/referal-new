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
        <div class="process_item process_item_2">
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              Заполните форму заявки<br />на&nbsp;сайте вместе с&nbsp;другом
            </div>
            <div class="process_item_header-num">01</div>
          </div>
        </div>

        <!--   <div class="process_item_wrapper">
          <div class="process_item process_item_2">
            <div class="process_item_title">Оставь отклик</div>
            <div class="process_item_text">
              <ul class="process_item_header heading-h4">
                <li>
                  Посмотри актуальные вакансии на
                  <span class="process_item_active">&nbsp;Хабр Карьере</span>
                  или заполни
                  <span class="process_item_active">анкету </span>ниже
                </li>
                <li>Дождись нашего звонка</li>
              </ul>
            </div>
          </div>
        </div> -->
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_3">
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              На&nbsp;ваши электронные адреса придет подтверждение.
            </div>

            <div class="process_item_header process_item_small">
              Заявки рассматриваются <br />
              до&nbsp;5&nbsp;рабочих дней
            </div>
            <div class="process_item_header-num">02</div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_4">
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              Если опыт в&nbsp;резюме друга будет релевантным, ему назначат одно
              техническое собеседование
            </div>
            <div class="process_item_header-num">03</div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_5">
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              В&nbsp;случае успешного собеседования друг получит оффер
            </div>
            <div class="process_item_header-num">04</div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_6">
          <div class="process_item_header-num">05</div>
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              Когда друг пройдет испытательный срок, мы&nbsp;вышлем тебе
              электронный договор.
            </div>

            <div class="process_item_header heading-h4">
              В&nbsp;течение 7&nbsp;рабочих дней после подписания договора
              ты&nbsp;получишь выплату
            </div>
          </div>
          <BaseButton class="process_item_button" @click.stop="scrollTo()">
            <span class="process_item_button_text">Смотреть вакансии</span>
          </BaseButton>
        </div>
      </div>
    </div>

    <div class="process_end_element"></div>
  </div>
</template>

<script setup>
import { gsap, ScrollTrigger, scrollTriggerRefresh } from "@/helpers/gsap";
import { isDesktop } from "@/helpers";

const scrollTo = () => {
  document.querySelector(".form-section").scrollIntoView({
    behavior: "smooth",
  });
};

function initAnimation() {
  const cardsArray = Array.from(
    document.querySelectorAll(".process_item_wrapper")
  );
  const lastItem =
    cardsArray[cardsArray.length - 1].querySelector(".process_item");

  cardsArray.forEach((card, index) => {
    ScrollTrigger.create({
      trigger: card,
      // start: "top-=" + 10 * index + " 10%",
      start: "top 10%",
      end: "top bottom",
      endTrigger: ".process_end_element",
      // pin: true,
      // anticipatePin: 1,
      // markers: true,
      onEnter: () => {
        if (index < 1) return;
        const previousCards = cardsArray.slice(0, index).reverse();

        console.log("onEnter");
        previousCards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: 1 - (idx + 1) / 10,
            duration: 0.15,
          });
        });
      },
      onLeaveBack: () => {
        if (index < 1) return;
        const previousCards = cardsArray.slice(0, index).reverse();

        previousCards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: 1 - idx / 10,
            duration: 0.15,
          });
        });
      },
      onComplete: (self) => {
        console.log(self);
      },
    });

    if (index !== cardsArray.length - 1) {
      let options = {};

      if (isDesktop()) {
        options = {
          scaleX: 1 - 0.02 * (cardsArray.length - (index + 1)),
          y: `-=${cardsArray.length - index}rem`,
        };
      } else {
        options = {
          scaleX: 1 - 0.05 * (cardsArray.length - (index + 1)),
          y: `-=${cardsArray.length - index}rem`,
        };

        if (index === 0) {
          options.scaleX = 0.65;
        }
      }

      const item = card.querySelector(".process_item");
      const itemNext = cardsArray[index + 1].querySelector(".process_item");

      gsap.to(item, {
        scaleX: options.scaleX,
        y: options.y,
        ease: "none",
        immediateRender: true,
        scrollTrigger: {
          trigger: itemNext,
          start: "top bottom",
          end: "bottom bottom",
          endTrigger: lastItem,
          scrub: true,
          preventOverlaps: "group1",
          // markers: { indent: 50 },
        },
      });
    }
  });

  scrollTriggerRefresh();
}

onMounted(() => {
  initAnimation();
});
</script>

<style lang="scss" scoped>
.process {
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 1rem; */
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
    height: auto;
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
    @include mq(768) {
      min-height: 70rem;
      padding: 5rem;
      border-radius: 5rem;
    }
    @include mq(1440) {
      padding: 7rem;
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
      padding-top: 1rem;
    }
    &_description {
      display: flex;
      align-items: flex-end;
      flex-direction: column;
      /*    position: relative;
      flex: 1;
      align-self: stretch; */
      width: 100%;

      @include mq(1440) {
      }
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
      /*       display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem; */
      padding: 0 2rem 0;
      /*       position: relative; */
      /*       top: 18.3rem; */
      /*       margin-left: auto; */
      /*       margin-right: auto; */

      /*       @include mq(768) {
        gap: 3rem;
      } */
      @include mq(1440) {
        // gap: 5rem;
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

      @include mq(768) {
        font-size: 3.4rem;
      }

      @include mq(1440) {
        font-size: 4.4rem;
      }
    }
    &_header-num {
      position: absolute;
      bottom: -4rem;
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
        font-size: 30rem;
        letter-spacing: -1.2rem;
        background: linear-gradient(
          357deg,
          rgba(168, 182, 255, 0.1) 25%,
          #8e54f5 49.93%,
          #ff4236 67.57%,
          #ffb55c 84.91%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      @include mq(1440) {
        font-size: 40rem;
        letter-spacing: -1.6rem;
        background: linear-gradient(
          357deg,
          rgba(168, 182, 255, 0.1) 30.29%,
          #8e54f5 49.93%,
          #ff4236 67.57%,
          #ffb55c 84.91%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
    &_title {
      font-size: 3rem;
    }
    &_active {
      color: var(--active-color);
    }
    &_button {
      width: 100%;
      padding: 2rem;
      margin-top: 2.7rem;
      border-radius: 2rem;
      flex-shrink: 0;

      @include mq(768) {
        height: 6.4rem;
        margin-top: 6rem;
      }
      @include mq(1440) {
        height: 7rem;
      }
      @include mq(1920) {
        margin-top: 3rem;
      }
      &_text {
        position: relative;
        font-size: 1.6rem;
        letter-spacing: -0.032rem;

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
  }
  &_end_element {
    width: 100%;
    height: 1px;
  }
}

li {
  list-style: inside;
}

.process_item:last-child {
  /* transform: translateY(60px); */
  transform: translateY(-4rem);
  max-height: 100%;
}
</style>
