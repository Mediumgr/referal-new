<template>
  <footer class="digital-laboratory">
    <GradientColor2 :gradientStyle="gradientStyle"></GradientColor2>

    <h2 class="digital-laboratory__title heading-h2">
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
})
</script>

<style lang="scss" scoped>
.digital-laboratory {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: flex-end;
  z-index: 1;
  width: 100%;
  min-height: calc(var(--vh, 1vh) * 100);
  color: var(--white);

  &__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    width: 100%;
  }
}
</style>
