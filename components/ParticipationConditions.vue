<template>
  <div class="participation">
    <p class="participation__title">Условия участия</p>
    <div class="participation__content">
      <div class="participation__section">
        <div class="participation__content_first">
          <p class="participation__content_number">01</p>
          <p class="participation__content_text">
            Твой друг&nbsp;&mdash; IT-специалист с&nbsp;опытом работы более
            2&nbsp;лет
          </p>
        </div>
        <div class="participation__content_second">
          <p class="participation__content_number">02</p>
          <p class="participation__content_text">
            Твой друг не&nbsp;проходил собеседования в&nbsp;ПСБ в&nbsp;течение
            6&nbsp;месяцев до&nbsp;рекомендации
          </p>
        </div>
      </div>
      <div class="participation__content_third">
        <p class="participation__content_number">03</p>
        <p class="participation__content_text">
          Ты&nbsp;не&nbsp;работаешь в&nbsp;ПСБ или в&nbsp;ПСБ Лаб
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.participation {
  padding: 1rem 2rem 4rem;
  @include mq(768) {
    padding: 6rem 2rem 6rem;
  }
  @include mq(1440) {
    padding: 10rem 8rem 8rem;
  }

  &__title {
    color: var(--eggplant);
    text-align: center;
    font-size: 4.8rem;
    line-height: 90%;
    letter-spacing: -0.0288rem;
    font-weight: 500;
    padding: 0 0 6rem;

    @include mq(768) {
      font-size: 8.6rem;
      letter-spacing: -0.0576rem;
      padding: 0 0 8rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
      padding: 0 0 10rem;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 2rem;

    @include mq(768) {
      width: 100%;
      margin: 0 auto;
    }
    @include mq(1024) {
      width: 57%;
    }
    @include mq(1440) {
      flex-direction: row;
      width: auto;
    }

    &_first {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 2rem;
      width: 33.5rem;
      border-radius: 2rem;
      background: var(--color-white);
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      grid-gap: 2rem;
      box-sizing: border-box;

      @include mq(768) {
        width: 34.3rem;
        align-items: flex-start;
        height: 21.6rem;
        padding: 3rem;
      }
      @include mq(1440) {
        width: 41.3rem;
        height: 27rem;
        padding: 4rem;
      }
    }
    &_second {
      width: 34.3rem;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 2rem;
      width: 33.5rem;
      border-radius: 2rem;
      background: var(--color-white);
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      grid-gap: 2rem;
      box-sizing: border-box;

      @include mq(768) {
        padding: 3rem;
        height: 21.6rem;
      }
      @include mq(1440) {
        width: 41.3rem;
        height: 27rem;
        padding: 4rem;
      }
    }
    &_third {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 2rem;
      width: 33.5rem;
      border-radius: 2rem;
      background: var(--color-white);
      box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
      grid-gap: 2rem;
      box-sizing: border-box;

      @include mq(768) {
        padding: 3rem;
        width: 97%;
      }
      @include mq(1440) {
        width: 41.3rem;
        height: 27rem;
        padding: 4rem;
      }
    }

    &_number {
      font-size: 2.4rem;
      line-height: 110%;
      letter-spacing: -0.048rem;
      background: var(
        --Gradient,
        linear-gradient(86deg, #8e54f5 1.34%, #ff4236 48.48%, #ffb55c 95.63%)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      @include mq(768) {
        font-size: 3.6rem;
        line-height: 110%;
        letter-spacing: -0.072rem;
      }
      @include mq(1440) {
        font-size: 4.8rem;
        font-weight: 700;
        letter-spacing: -0.144rem;
      }
    }
    &_text {
      color: var(--eggplant);
      font-size: 1.6rem;
      letter-spacing: -0.048rem;

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
  &__section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    grid-gap: 2rem;

    @include mq(768) {
      flex-direction: row;
      justify-content: space-between;
      width: 97%;
    }
    @include mq(1440) {
      width: auto;
    }
  }
}
</style>
