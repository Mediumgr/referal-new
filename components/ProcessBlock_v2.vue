<template>
  <div class="process">
    <div class="process-wrapper">
      <div class="process_item_wrapper">
        <div class="process_item process_item_1 process_item_video show">
          <video poster="/images/process/process-b1.jpg" id="background-video" autoplay loop muted playsinline>
            <source src="/video/process/process-b1.webm" type="video/webm"/>
            <source src="/video/process/process-b1.mp4" type="video/mp4"/>
          </video>
          <div class="process_item-overlay50"></div>
          <div class="process_item_video-header">
            <div class="process_item_video-text">
              Как получить<br/>бонус
            </div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_2">
          <div class="process_item_header-num">01</div>
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              Заполните форму заявки<br/>на&nbsp;сайте вместе с&nbsp;другом
            </div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_3">
          <div class="process_item_header-num">02</div>
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              На&nbsp;ваши электронные адреса придет подтверждение.
            </div>

            <div class="process_item_header heading-h4">
              Заявки рассматриваются до&nbsp;5&nbsp;рабочих дней
            </div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_4">
          <div class="process_item_header-num">03</div>
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              Если опыт в&nbsp;резюме друга будет релевантным, ему назначат одно
              техническое собеседование
            </div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_5">
          <div class="process_item_header-num">04</div>
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              В&nbsp;случае успешного собеседования друг получит оффер
            </div>
          </div>
        </div>
      </div>

      <div class="process_item_wrapper">
        <div class="process_item process_item_6">
          <div class="process_item_header-num">05</div>
          <div class="process_item_description">
            <div class="process_item_header heading-h4">
              Когда друг пройдет испытательный срок, мы&nbsp;вышлем тебе электронный
              договор.
            </div>

            <div class="process_item_header heading-h4">
              В&nbsp;течение 7&nbsp;рабочих дней после подписания договора ты&nbsp;получишь
              выплату
            </div>
          </div>
          <BaseButton class="process_item_button" @click.stop="scrollTo()">
            <span class="process_item_button_text">Заполнить заявку</span>
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
  const cardsArray = Array.from(document.querySelectorAll(".process_item_wrapper"))
  const lastItem = cardsArray[cardsArray.length - 1].querySelector('.process_item')

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
        const previousCards = cardsArray.slice(0, index).reverse()

        console.log('onEnter')
        previousCards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: 1 - (idx + 1) / 10,
            duration: 0.15
          })
        })
      },
      onLeaveBack: () => {
        if (index < 1) return;
        const previousCards = cardsArray.slice(0, index).reverse()

        previousCards.forEach((card, idx) => {
          gsap.to(card, {
            opacity: 1 - idx / 10,
            duration: 0.15
          })
        })
      },
      onComplete: (self) => {
        console.log(self)
      }
    });

    if (index !== cardsArray.length - 1) {
      let options = {}

      if (isDesktop()) {
        options = {
          scaleX: 1 - (0.02 * (cardsArray.length - (index + 1))),
          y: `-=${cardsArray.length - index}rem`,
        }
      } else {
        options = {
          scaleX: 1 - (0.05 * (cardsArray.length - (index + 1))),
          y: `-=${(cardsArray.length - index)}rem`,
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
        }
      });

    }
  });

  scrollTriggerRefresh()
}

onMounted(() => {
  initAnimation()
});
</script>

<style lang="scss" scoped>
@import "@/assets/styles/components/process";
</style>
