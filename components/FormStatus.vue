<template>
  <div>
    <template
      v-if="status.server.failure === false && status.connection === true"
    >
      <div class="success__container">
        <img src="~/assets/images/formData/status_good.svg" alt="status ok" />
        <p class="success__text">
          Спасибо за&nbsp;заявку, мы&nbsp;с&nbsp;тобой свяжемся
        </p>
      </div>
    </template>

    <template
      v-if="status.server.failure === false && status.connection === false"
    >
      <div class="error__container">
        <div class="error__connection">
          <img
            src="~/assets/images/formData/status_bad.svg"
            alt="status Nok"
          />
          <p class="error__text">Похоже, проблемы с&nbsp;соединением.</p>
          <p class="error__text_again">Попробуй еще раз</p>
        </div>
        <BaseButton class="resendBtn" @click="$emit('resend')">
          <span>Отправить еще раз</span>
        </BaseButton>
      </div>
    </template>

    <template v-if="status.server.failure && status.connection === true">
      <div class="success__container">
        <img src="~/assets/images/formData/status_bad.svg" alt="status bad" />
        <p class="success__text">
          {{ status.server.message }}
        </p>
      </div>
    </template>
  </div>
</template>

<script setup>
/* eslint-disable */
const emit = defineEmits(['resend']);
const props = defineProps({
  status: {
    type: Object,
    default: () => {},
  },
});
</script>

<style lang="scss" scoped>
.error {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 50rem;
    max-height: 750px;
    row-gap: 4rem;
    padding: 2rem;
    border-radius: 2rem;
    background: var(--color-white);
    box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

    @include mq(768) {
      height: 60rem;
      width: 68.8rem;
      padding: 4rem;
    }

    @include mq(1024) {
      height: auto;
      max-height: none;
    }

    @include mq(1440) {
      height: 78.7rem;
      width: 128rem;
      row-gap: 6rem;
    }
  }

  &__connection {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 2rem;

    @include mq(1024) {
      row-gap: 4rem;
    }
  }

  &__text {
    color: var(--eggplant);
    font-size: 2.4rem;
    line-height: 110%;
    letter-spacing: -0.048rem;
    padding-top: 2rem;
    text-align: center;

    @include mq(768) {
      font-size: 3.6rem;
      letter-spacing: -0.072rem;
      width: 40rem;
    }
    @include mq(1024) {
      font-size: 4.8rem;
      line-height: 110%;
      letter-spacing: -0.144rem;
      width: auto;
    }
    @include mq(1440) {
      padding-top: 0;
    }

    &_again {
      color: var(--eggplant);
      font-size: 2.4rem;
      line-height: 110%;
      letter-spacing: -0.048rem;
      text-align: center;

      @include mq(768) {
        font-size: 3.6rem;
        letter-spacing: -0.072rem;
        width: 40rem;
      }

      @include mq(1024) {
        font-size: 4.8rem;
        line-height: 110%;
        letter-spacing: -0.144rem;
        width: auto;
      }
    }
  }
}

.success {
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    row-gap: 4rem;
    padding: 2rem;
    border-radius: 2rem;
    background: var(--color-white);
    box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);

    @include mq(768) {
      padding: 4rem;
      max-height: none;
      height: 60rem;
      width: 68.8rem;
    }

    @include mq(1024) {
      height: auto;
      row-gap: 6rem;
    }

    @include mq(1440) {
      padding: 6rem;
      height: 78.7rem;
      width: 128rem;
    }
  }

  &__text {
    color: var(--eggplant);
    font-size: 2.4rem;
    line-height: 110%;
    letter-spacing: -0.048rem;
    text-align: center;

    @include mq(768) {
      font-size: 3.6rem;
      letter-spacing: -0.072rem;
      width: 40rem;
    }

    @include mq(1024) {
      font-size: 4.8rem;
      line-height: 110%;
      letter-spacing: -0.144rem;
      width: auto;
    }

    @include mq(1440) {
      width: 50rem;
    }
  }
}

.resendBtn {
  width: 100%;
  > span {
    position: relative;
  }
}
</style>
