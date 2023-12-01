<template>
  <footer class="digital-laboratory">
    <GradientColor :gradientStyle="gradientStyle"></GradientColor>
    <h2 class="digital-laboratory__title">
      ПСБ цифровая <br />
      лаборатория
    </h2>
  </footer>
</template>

<script setup>
const gradientStyle = ref({
  height: '20rem',
  top: '0rem',
  transform: 'rotate(0deg)',
});
</script>

<style lang="scss" scoped>
.digital-laboratory {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  color: var(--white);

  &__title {
    position: absolute;
    width: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 4.8rem;
    line-height: 90%;
    letter-spacing: -0.288rem;
    text-align: center;
    margin: 0;

    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
    }

    @include mq(1200) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
  }
}
</style>
