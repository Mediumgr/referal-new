<template>
  <div class="gradient">
    <div class="gradient__blue"></div>
    <div class="gradient__purple"></div>
    <div class="gradient__red"></div>
    <div class="gradient__yellow"></div>
    <div class="gradient__grey" :style="gradientStyle"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  gradientStyle: {
    type: Object,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.gradient {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  pointer-events: none;
  height: inherit;

  &__grey {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 38rem;
    transform: rotate(180deg);
    background: linear-gradient(
      180deg,
      #f7f7f7 0%,
      rgba(247, 247, 247, 0.99) 11.79%,
      rgba(247, 247, 247, 0.97) 21.38%,
      rgba(247, 247, 247, 0.93) 29.12%,
      rgba(247, 247, 247, 0.88) 35.34%,
      rgba(247, 247, 247, 0.82) 40.37%,
      rgba(247, 247, 247, 0.75) 44.56%,
      rgba(247, 247, 247, 0.67) 48.24%,
      rgba(247, 247, 247, 0.59) 51.76%,
      rgba(247, 247, 247, 0.5) 55.44%,
      rgba(247, 247, 247, 0.41) 59.63%,
      rgba(247, 247, 247, 0.33) 64.66%,
      rgba(247, 247, 247, 0.24) 70.88%,
      rgba(247, 247, 247, 0.15) 78.62%,
      rgba(247, 247, 247, 0.07) 88.21%,
      rgba(247, 247, 247, 0) 100%
    );

    @include mq(1440) {
      height: 30rem;
    }
  }

  &__blue {
    background-color: #733ff5;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0 auto;
    animation: gradientBlue 1.5s ease forwards;
  }

  &__purple {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(143, 20, 186) 0%,
      rgba(143, 20, 186, 0.99) 11.79%,
      rgba(143, 20, 186, 0.97) 21.38%,
      rgba(143, 20, 186, 0.93) 29.12%,
      rgba(143, 20, 186, 0.88) 35.34%,
      rgba(143, 20, 186, 0.82) 40.37%,
      rgba(143, 20, 186, 0.75) 44.56%,
      rgba(143, 20, 186, 0.67) 48.24%,
      rgba(143, 20, 186, 0.59) 51.76%,
      rgba(143, 20, 186, 0.5) 55.44%,
      rgba(143, 20, 186, 0.41) 59.63%,
      rgba(143, 20, 186, 0.33) 64.66%,
      rgba(143, 20, 186, 0.24) 70.88%,
      rgba(143, 20, 186, 0.15) 78.62%,
      rgba(143, 20, 186, 0.07) 88.21%,
      rgba(143, 20, 186, 0) 100%
    );
    border-radius: 13rem;
    position: absolute;
    height: 130rem;
    width: 130rem;
    top: -40rem;
    left: -40rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientPurple_375 8s ease infinite;

    @include mq(375) {
      height: 130rem;
      width: 130rem;
      top: -40rem;
      left: -40rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientPurple_375 8s ease infinite;
    }

    @include mq(768) {
      height: 160rem;
      width: 160rem;
      top: -40rem;
      left: -35rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientPurple_768 8s ease infinite;
    }

    @include mq(1024) {
      height: 200rem;
      width: 200rem;
      top: -70rem;
      left: -35rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientPurple_1024 8s ease infinite;
    }

    @include mq(1440) {
      height: 250rem;
      width: 250rem;
      top: -80rem;
      left: -50rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientPurple_1440 8s ease infinite;
    }
  }

  &__red {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(255, 80, 48) 0%,
      rgba(254.66, 79.88, 48.43, 0.99) 11.3%,
      rgba(253.67, 79.55, 49.67, 0.97) 21.16%,
      rgba(252.1, 79.01, 51.63, 0.93) 29.76%,
      rgba(250.01, 78.3, 54.24, 0.89) 37.27%,
      rgba(247.46, 77.43, 57.42, 0.83) 43.87%,
      rgba(244.53, 76.43, 61.09, 0.76) 49.76%,
      rgba(241.26, 75.32, 65.17, 0.69) 55.1%,
      rgba(237.73, 74.11, 69.58, 0.61) 60.08%,
      rgba(234.01, 72.84, 74.24, 0.52) 64.88%,
      rgba(230.14, 71.53, 79.07, 0.44) 69.68%,
      rgba(226.21, 70.18, 83.99, 0.35) 74.66%,
      rgba(222.26, 68.84, 88.92, 0.26) 80%,
      rgba(218.37, 67.51, 93.79, 0.17) 85.88%,
      rgba(214.59, 66.22, 98.51, 0.08) 92.49%,
      rgba(211, 65, 103, 0) 100%
    );
    border-radius: 13rem;
    position: absolute;
    width: 85rem;
    height: 85rem;
    top: -25rem;
    left: -15rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientRed_375 8s ease infinite;

    @include mq(375) {
      width: 85rem;
      height: 85rem;
      top: -25rem;
      left: -15rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientRed_375 8s ease infinite;
    }

    @include mq(768) {
      width: 110rem;
      height: 110rem;
      top: -30rem;
      left: 5rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientRed_768 8s ease infinite;
    }

    @include mq(1024) {
      width: 150rem;
      height: 150rem;
      top: -35rem;
      left: 0;
      animation: slideInGradient 1.5s ease forwards,
        gradientRed_1024 8s ease infinite;
    }

    @include mq(1440) {
      top: -45rem;
      left: 35rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientRed_1440 8s ease infinite;
    }
  }

  &__yellow {
    background: radial-gradient(
      50% 50% at 50% 50%,
      rgb(255, 168, 72) 0%,
      rgba(255, 167.23, 71.79, 0.99) 11.31%,
      rgba(255, 165.19, 71.23, 0.97) 21.19%,
      rgba(255, 162, 70.36, 0.93) 29.81%,
      rgba(255, 157.8, 69.22, 0.88) 37.35%,
      rgba(255, 152.71, 67.83, 0.83) 44%,
      rgba(255, 146.84, 66.23, 0.76) 49.92%,
      rgba(255, 140.33, 64.45, 0.69) 55.29%,
      rgba(255, 133.3, 62.54, 0.61) 60.3%,
      rgba(255, 125.88, 60.51, 0.52) 65.12%,
      rgba(255, 118.18, 58.41, 0.43) 69.92%,
      rgba(255, 110.34, 56.27, 0.34) 74.89%,
      rgba(255, 102.47, 54.13, 0.26) 80.21%,
      rgba(255, 94.71, 52.01, 0.17) 86.05%,
      rgba(255, 87.18, 49.96, 0.08) 92.59%,
      rgba(255, 80, 48, 0) 100%
    );
    border-radius: 13rem;
    position: absolute;
    width: 40rem;
    height: 40rem;
    top: 40rem;
    left: 18rem;
    animation: slideInGradient 1.5s ease forwards,
      gradientYellow_375 8s ease infinite;

    @include mq(375) {
      width: 40rem;
      height: 40rem;
      top: 40rem;
      left: 18rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientYellow_375 8s ease infinite;
    }

    @include mq(768) {
      width: 70rem;
      height: 70rem;
      top: 45rem;
      left: 35rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientYellow_768 8s ease infinite;
    }

    @include mq(1024) {
      width: 80rem;
      height: 80rem;
      top: 35rem;
      left: 55rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientYellow_1024 8s ease infinite;
    }

    @include mq(1440) {
      width: 100rem;
      height: 100rem;
      top: 20rem;
      left: 95rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientYellow_1440 8s ease infinite;
    }

    @include mq(2560) {
      top: 30rem;
      left: 170rem;
      animation: slideInGradient 1.5s ease forwards,
        gradientYellow_2560 8s ease infinite;
    }
  }
}

@keyframes slideInGradient {
  0% {
    transform: translateY(-400rem);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes gradientBlue {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 0.2;
  }
  40% {
    opacity: 0.4;
  }
  60% {
    opacity: 0.6;
  }
  80% {
    opacity: 0.8;
  }
  100% {
    opacity: 1;
  }
}

@keyframes gradientPurple_375 {
  0% {
    top: -30rem;
    left: -30rem;
  }
  25% {
    top: -50rem;
    left: -50rem;
  }
  50% {
    top: -30rem;
    left: -60rem;
  }
  75% {
    top: -40rem;
    left: -40rem;
  }
}
@keyframes gradientPurple_768 {
  0% {
    top: -40rem;
    left: -35rem;
  }
  25% {
    top: -65rem;
    left: -35rem;
  }
  50% {
    top: -55rem;
    left: -55rem;
  }
  75% {
    top: -45rem;
    left: -45rem;
  }
}
@keyframes gradientPurple_1024 {
  0% {
    top: -70rem;
    left: -35rem;
  }
  25% {
    top: -80rem;
    left: -35rem;
  }
  50% {
    top: -55rem;
    left: -65rem;
  }
  75% {
    top: -50rem;
    left: -50rem;
  }
}

@keyframes gradientPurple_1440 {
  0% {
    top: -90rem;
    left: -50rem;
  }
  25% {
    top: -140rem;
    left: -100rem;
  }
  50% {
    top: -110rem;
    left: -40rem;
  }
  75% {
    top: -80rem;
    left: -50rem;
  }
}

@keyframes gradientPurple_2560 {
  0% {
    top: -110rem;
    left: -60rem;
  }
  25% {
    top: -130rem;
    left: -40rem;
  }
  50% {
    top: -115rem;
    left: -26rem;
  }
  75% {
    top: -95rem;
    left: -20rem;
  }
}

@keyframes gradientRed_375 {
  0% {
    top: -25rem;
    left: -15rem;
  }
  25% {
    top: -20rem;
    left: -15rem;
  }
  50% {
    top: -7rem;
    left: -35rem;
  }
  75% {
    top: -10rem;
    left: -15rem;
  }
}
@keyframes gradientRed_768 {
  0% {
    top: -30rem;
    left: 5rem;
  }
  25% {
    top: -40rem;
    left: -20rem;
  }
  50% {
    top: -20rem;
    left: -35rem;
  }
  75% {
    top: -25rem;
    left: -15rem;
  }
}
@keyframes gradientRed_1024 {
  0% {
    top: -35rem;
    left: 0;
  }
  25% {
    top: -50rem;
    left: -28rem;
  }
  50% {
    top: -30rem;
    left: -45rem;
  }
  75% {
    top: -30rem;
    left: -23rem;
  }
}
@keyframes gradientRed_1440 {
  0% {
    top: -45rem;
    left: 35rem;
  }
  25% {
    top: -55rem;
    left: 0;
  }
  50% {
    top: -30rem;
    left: -35rem;
  }
  75% {
    top: -30rem;
    left: -5rem;
  }
}

@keyframes gradientRed_2560 {
  0% {
    top: -70rem;
    left: 80rem;
  }
  25% {
    top: -100rem;
    left: 30rem;
  }
  50% {
    top: -70rem;
    left: -30rem;
  }
  75% {
    top: -75rem;
    left: 20rem;
  }
}
@keyframes gradientYellow_375 {
  0% {
    top: 40rem;
    left: 18rem;
  }
  25% {
    top: -15rem;
    left: 18rem;
  }
  50% {
    top: 15rem;
    left: -25rem;
  }
  75% {
    top: 35rem;
    left: 5rem;
  }
}
@keyframes gradientYellow_768 {
  0% {
    top: 45rem;
    left: 35rem;
  }
  25% {
    top: -25rem;
    left: 35rem;
  }
  50% {
    top: 10rem;
    left: -35rem;
  }
  75% {
    top: 25rem;
    left: 15rem;
  }
}
@keyframes gradientYellow_1024 {
  0% {
    top: 35rem;
    left: 55rem;
  }
  25% {
    top: -20rem;
    left: 50rem;
  }
  50% {
    top: 7rem;
    left: -40rem;
  }
  75% {
    top: 17rem;
    left: 20rem;
  }
}

@keyframes gradientYellow_1440 {
  0% {
    top: 20rem;
    left: 95rem;
  }
  25% {
    top: -40rem;
    left: 85rem;
  }
  50% {
    top: -10rem;
    left: -60rem;
  }
  75% {
    top: 5rem;
    left: 35rem;
  }
}
@keyframes gradientYellow_2560 {
  0% {
    top: 30rem;
    left: 170rem;
  }
  25% {
    top: -50rem;
    left: 170rem;
  }
  50% {
    top: -10rem;
    left: -80rem;
  }
  75% {
    top: -10rem;
    left: 60rem;
  }
}
</style>
