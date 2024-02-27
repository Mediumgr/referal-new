<template>
  <button
    type="submit"
    ref="buttonRef"
    @mousemove="mousemove($event)"
    @touchmove.passive="mousemove($event)"
  >
    <slot></slot>
  </button>
</template>

<script setup>
const buttonRef = ref(null)

const mousemove = (e) => {
  const btn = buttonRef.value
  let x = e.pageX - btn.offsetLeft
  let y = e.pageY - btn.offsetTop
  btn.style.setProperty('--x', x / 10 + 'rem')
  btn.style.setProperty('--y', y / 1000 + 'rem')
}
</script>

<style lang="scss" scoped>
button {
  transition: all 200ms ease;
  position: relative;
  overflow: hidden;
  width: auto;
  height: 6rem;
  padding: 1rem 1rem 1rem 2rem;
  border-radius: 7.3rem;
  border: none;
  outline: none;
  color: var(--color-white);
  background: #4958ff;
  cursor: pointer;

  @include mq(768) {
    height: 8.9rem;
    padding: 1rem 2rem 1rem 3rem;
  }
  @include mq(1440) {
    height: 10.1rem;
    padding: 1.6rem 1.6rem 1.6rem 3.6rem;
  }

  &:hover {
    box-shadow: 0 1.1rem 3rem rgba(25, 25, 25, 0.25);
    background: #424ed1;

    &::before {
      --size: 70vw;
    }
  }

  &::before {
    --size: 0;
    content: '';
    position: absolute;
    left: var(--x);
    top: var(--y);
    width: var(--size);
    height: var(--size);
    background: radial-gradient(
        15% 88.6% at 40.5% 80.85%,
        #ff4236 0%,
        rgba(142, 84, 245, 0) 155%
      ),
      #424ed1;
    transform: translate(-50%, -50%);
  }
}
</style>
