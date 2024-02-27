<template>
  <div class="container2">
    <GradientColor2 />

    <div class="container">
      <header>
        <div class="logo">
          <picture>
            <source srcset="/header/logo.svg" media="(min-width: 768px)" />
            <img
              class="logo__img"
              src="/header/logo-mobile.svg"
              alt="logo"
              width="141"
              height="37"
            />
          </picture>
        </div>
        <div class="recommend__content">
          <h1 class="recommend__title heading-h1">
            <span class="recommend__title">Получи 100&nbsp;000&nbsp;₽</span>
            <span class="recommend__sub-title">Рекомендуй друга в IT</span>
          </h1>

          <BaseButton @click.stop="scrollTo()" class="btn">
            <span class="recommend__button_container">
              <span class="recommend__button_text">Заполнить заявку</span>
              <svg-icon
                class="recommend__button_img"
                name="arrow_right"
              ></svg-icon>
            </span>
          </BaseButton>
        </div>
      </header>
    </div>
  </div>
</template>

<script setup>
const scrollTo = () => {
  document.querySelector('.form-section').scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped>
.container2 {
  position: relative;
  height: 66.7rem;
  box-sizing: border-box;
  padding: 4rem 0 0;

  @include mq(768) {
    height: 102.4rem;
    padding-top: 2rem;
  }
  @include mq(1440) {
    padding-top: 4rem;
  }
}

.logo {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 1;
  opacity: 0;
  animation: appearance 1s ease-out forwards;

  &__img {
    display: block;
    width: 14.1rem;
    height: auto;

    @include mq(768) {
      width: 17.6rem;
    }
  }
}

@keyframes appearance {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.recommend {
  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /*   width: 27rem; */
    // не использовать т.к. отпадет ховер у кнопки
    margin: 0 auto;
    padding: 14rem 0 0;
    @include mq(768) {
      padding: 24rem 0 12rem;
    }
    @include mq(1024) {
      padding: 14rem 40rem 12rem;
    }
    @include mq(1440) {
      padding: 18rem 35rem 0;
    }
    @include mq(2560) {
      padding: 4rem 60rem 0;
    }
  }

  &__title {
    color: var(--color-white);
    padding-bottom: 1rem;

    @include mq(768) {
      padding-bottom: 3rem;
    }

    @include mq(1200) {
      padding-bottom: 4rem;
    }
  }

  &__sub-title {
    color: var(--color-white);
    text-align: center;
    font-size: 2rem;
    line-height: 2.4rem;
    opacity: 0.6;
    margin: 0;
    padding-bottom: 4rem;

    @include mq(768) {
      font-size: 3.6rem;
      letter-spacing: -0.072rem;
      padding-bottom: 8rem;
    }
    @include mq(1440) {
      font-size: 4.8rem;
      line-height: 5.28rem;
      letter-spacing: -0.0144rem;
      opacity: 0.7;
    }
  }

  &__button {
    &_container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    &_text {
      text-align: center;
      letter-spacing: -0.036rem;
      white-space: nowrap;
      font-size: 2.4rem;
      line-height: 2.88rem;

      @include mq(768) {
        font-size: 2.4rem;
        letter-spacing: -0.048rem;
        padding-right: 2rem;
      }
      @include mq(1440) {
        font-size: 3.2rem;
        letter-spacing: -0.096rem;
      }
    }

    &_img {
      width: 7rem;
      height: 7rem;
    }
  }
}

.btn {
  min-width: 32.4rem;
  min-height: 8.5rem;
}
</style>
