<template>
  <div class="header-block">
    <GradientColor2 />

    <header class="container">
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
        <h1 class="recommend__title-wrapper">
          <span class="recommend__title heading-h1"
            >Получи 100&nbsp;000&nbsp;₽</span
          >
          <span class="recommend__sub-title heading-h4"
            >Рекомендуй друга в ИТ</span
          >
        </h1>

        <BaseButton @click.stop="scrollTo()" class="btn-wrapper">
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
</template>

<script setup>
const scrollTo = () => {
  document.querySelector('.form-section').scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<style lang="scss" scoped>
.header-block {
  position: relative;
  box-sizing: border-box;
  padding: 4rem 0 0;
  height: 66.7rem;
  color: var(--color-white);

  @include mq(768) {
    padding-top: 2rem;
    height: 102.4rem;
  }
  @include mq(1200) {
    padding-top: 4rem;
  }
}

.logo {
  display: flex;
  position: relative;
  justify-content: flex-start;
  align-items: center;
  opacity: 0;
  z-index: 1;
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
    display: flex;
    position: relative;
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
    @include mq(1200) {
      padding: 18rem 35rem 0;
    }
    @include mq(2560) {
      padding: 4rem 60rem 0;
    }
  }

  &__title-wrapper {
    margin: 0;
  }

  &__title {
    display: block;
    line-height: 100%;
  }

  &__sub-title {
    display: block;
    opacity: 0.6;
    margin-top: 1rem;

    @include mq(768) {
      margin-top: 3rem;
    }

    @include mq(1200) {
      margin-top: 3.9rem;
    }
  }

  &__button {
    &_container {
      display: flex;
      position: relative;
      justify-content: space-between;
      align-items: center;
    }

    &_text {
      padding-right: 1rem;
      font-size: 1.8rem;
      line-height: 120%;
      letter-spacing: -0.02em;
      text-align: center;
      white-space: nowrap;

      @include mq(768) {
        padding-right: 2rem;
        font-size: 2.4rem;
      }

      @include mq(1200) {
        font-size: 3.2rem;
        letter-spacing: -0.096rem;
      }
    }

    &_img {
      width: 4rem;
      height: 4rem;

      @include mq(768) {
        width: 6.9rem;
        height: 6.9rem;
      }
    }
  }
}

.btn-wrapper {
  margin-top: 4rem;
  min-width: auto;
  height: auto;
  min-height: auto;

  @include mq(768) {
    margin-top: 8rem;
  }
}
</style>
