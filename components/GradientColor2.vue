<template>
  <div class="gradient" ref="container">
    <div class="gradient__wrapper">
      <div class="gradient__bg gradient__bg--yellow"></div>
      <div class="gradient__bg gradient__bg--yellow2"></div>
      <div class="gradient__red-purple"></div>
    </div>

    <div class="gradient__grey" :style="gradientStyle"></div>
  </div>
</template>

<script setup>
const container = ref(null)
const size = ref('max(100vw, 100vh)')

const props = defineProps({
  gradientStyle: {
    type: Object,
    required: false,
  },
  colorBack: {
    type: String,
    default: '#733ff5',
  },
})

function observer() {
  let options = {
    rootMargin: '0px 0px -250px 0px',
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry
      if (isIntersecting) {
        //active
        target.classList.remove('_paused')
      } else {
        //paused
        target.classList.add('_paused')
      }
    })
  }, options)

  observer.observe(container.value)
}

onMounted(() => {
  size.value =
    Math.max(container.value.offsetHeight, container.value.offsetWidth) + 'px'

  setTimeout(() => {
    observer()
  }, 1500)
  // const pageWidth = document.documentElement.offsetWidth / 10;
  // document.documentElement.style.setProperty("--page-size", pageWidth + "rem");
})
</script>

<style lang="scss" scoped>
%fullscreen {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

@function getBGSizePercent($size-block) {
  // 3744 - размер врапера для фона на экране 1440
  $size: calc($size-block / 3744) * 100%;
  @return $size $size;
}

.gradient {
  @extend %fullscreen;
  overflow: hidden;
  --page-size: v-bind(size);
  --size-wrapper: calc(var(--page-size) * 2.6);
  --animation--function: cubic-bezier(0.6, 0, 0.4, 1);
  animation: appearance 1.5s ease forwards;
  //animation-fill-mode: forwards;
  //animation-iteration-count: 1;
  pointer-events: none;

  &._paused {
    .gradient__red-purple,
    .gradient__bg {
      animation-play-state: paused;
      will-change: background;
    }
  }

  //&__blue {
  //  @extend %fullscreen;
  //  background-color: v-bind(colorBack);
  //  //animation-iteration-count: 1;
  //  animation: appearance 1.5s ease forwards;
  //}

  &__wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: v-bind(colorBack);
    width: var(--size-wrapper);
    height: var(--size-wrapper);
  }

  &__bg {
    @extend %fullscreen;
    animation-duration: 8s;
    animation-timing-function: var(--animation--function);
    animation-iteration-count: infinite;
    background-repeat: no-repeat;
    //animation-delay: 1.5s;
    //animation: none !important;

    &--purple {
      z-index: 1;
      animation-name: gradientPurple;
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        #8f14ba 0%,
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
      background-size: getBGSizePercent(2800);
      background-position-x: 38.6653%;
      background-position-y: 32.839%;

      .state2 & {
        background-size: getBGSizePercent(1800);
        background-position-x: 59.2593%;
        background-position-y: 64.4033%;
      }

      .state3 & {
        background-size: getBGSizePercent(1800);
        background-position-x: 38.6831%;
        background-position-y: 51.8519%;
      }

      .state4 & {
        background-size: getBGSizePercent(1800);
        background-position-x: 38.6831%;
        background-position-y: 51.8519%;
      }
    }

    &--red {
      z-index: 2;
      animation-name: gradientRed;
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        #ff5030 0%,
        rgba(255, 80, 48, 0.99) 11.3%,
        rgba(254, 80, 50, 0.97) 21.16%,
        rgba(252, 79, 52, 0.93) 29.76%,
        rgba(250, 78, 54, 0.89) 37.27%,
        rgba(247, 77, 57, 0.83) 43.87%,
        rgba(245, 76, 61, 0.76) 49.76%,
        rgba(241, 75, 65, 0.69) 55.1%,
        rgba(238, 74, 70, 0.61) 60.08%,
        rgba(234, 73, 74, 0.52) 64.88%,
        rgba(230, 72, 79, 0.44) 69.68%,
        rgba(226, 70, 84, 0.35) 74.66%,
        rgba(222, 69, 89, 0.26) 80%,
        rgba(218, 68, 94, 0.17) 85.88%,
        rgba(215, 66, 99, 0.08) 92.49%,
        rgba(211, 65, 103, 0) 100%
      );
      background-size: getBGSizePercent(2400);
      background-position-x: 79.2411%;
      background-position-y: 31.25%;

      .state2 & {
        background-size: getBGSizePercent(2000);
        background-position-x: 43.1193%;
        background-position-y: 31.6514%;
      }

      .state3 & {
        background-size: getBGSizePercent(2000);
        background-position-x: 37.3853%;
        background-position-y: 45.9862%;
      }

      .state4 & {
        background-size: getBGSizePercent(2490);
        background-position-x: 48.4051%;
        background-position-y: 44.4179%;
      }
    }

    &--yellow {
      z-index: 3;
      animation-name: gradientYellow;
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgb(255, 168, 72) 0%,
        rgba(255, 167, 72, 0.99) 11.31%,
        rgba(255, 165, 71, 0.97) 21.19%,
        rgba(255, 162, 70, 0.93) 29.81%,
        rgba(255, 158, 69, 0.88) 37.35%,
        rgba(255, 153, 68, 0.83) 44%,
        rgba(255, 147, 66, 0.76) 49.92%,
        rgba(255, 140, 64, 0.69) 55.29%,
        rgba(255, 133, 63, 0.61) 60.3%,
        rgba(255, 126, 61, 0.52) 65.12%,
        rgba(255, 118, 58, 0.43) 69.92%,
        rgba(255, 110, 56, 0.34) 74.89%,
        rgba(255, 102, 54, 0.26) 80.21%,
        rgba(255, 95, 52, 0.17) 86.05%,
        rgba(255, 87, 50, 0.08) 92.59%,
        rgba(255, 80, 48, 0) 100%
      );
      background-size: getBGSizePercent(1500);
      background-position-x: 78.0749%;
      background-position-y: 58.0214%;

      .state2 & {
        opacity: 0;
        background-size: getBGSizePercent(1500);
      }

      .state3 & {
        opacity: 1;
        background-size: getBGSizePercent(1200);
        background-position-x: 25.6289%;
        background-position-y: 49.2138%;
      }

      .state4 & {
        opacity: 0;
        background-size: getBGSizePercent(1000);
      }
    }

    &--yellow2 {
      opacity: 0;
      z-index: 4;
      animation-name: gradientYellow2;
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgb(255, 168, 72) 0%,
        rgba(255, 167, 72, 0.99) 11.31%,
        rgba(255, 165, 71, 0.97) 21.19%,
        rgba(255, 162, 70, 0.93) 29.81%,
        rgba(255, 158, 69, 0.88) 37.35%,
        rgba(255, 153, 68, 0.83) 44%,
        rgba(255, 147, 66, 0.76) 49.92%,
        rgba(255, 140, 64, 0.69) 55.29%,
        rgba(255, 133, 63, 0.61) 60.3%,
        rgba(255, 126, 61, 0.52) 65.12%,
        rgba(255, 118, 58, 0.43) 69.92%,
        rgba(255, 110, 56, 0.34) 74.89%,
        rgba(255, 102, 54, 0.26) 80.21%,
        rgba(255, 95, 52, 0.17) 86.05%,
        rgba(255, 87, 50, 0.08) 92.59%,
        rgba(255, 80, 48, 0) 100%
      );
      background-size: getBGSizePercent(1500);
      background-position-x: 78.0749%;
      background-position-y: 58.0214%;

      .state2 & {
        opacity: 1;
        background-size: getBGSizePercent(1664);
        background-position-x: 73.6058%;
        background-position-y: 21.1538%;
      }

      .state3 & {
        opacity: 0;
        background-size: getBGSizePercent(1200);
      }

      .state4 & {
        opacity: 1;
        background-size: getBGSizePercent(1200);
        background-position-x: 50%;
        background-position-y: 54.717%;
      }
    }
  }

  &__bg-all2 {
    background-image: //yellow2
      radial-gradient(
        50% 50% at 50% 50%,
        rgb(255, 168, 72) 0%,
        rgba(255, 167, 72, 0.99) 11.31%,
        rgba(255, 165, 71, 0.97) 21.19%,
        rgba(255, 162, 70, 0.93) 29.81%,
        rgba(255, 158, 69, 0.88) 37.35%,
        rgba(255, 153, 68, 0.83) 44%,
        rgba(255, 147, 66, 0.76) 49.92%,
        rgba(255, 140, 64, 0.69) 55.29%,
        rgba(255, 133, 63, 0.61) 60.3%,
        rgba(255, 126, 61, 0.52) 65.12%,
        rgba(255, 118, 58, 0.43) 69.92%,
        rgba(255, 110, 56, 0.34) 74.89%,
        rgba(255, 102, 54, 0.26) 80.21%,
        rgba(255, 95, 52, 0.17) 86.05%,
        rgba(255, 87, 50, 0.08) 92.59%,
        rgba(255, 80, 48, 0) 100%
      ),
      //yellow
      radial-gradient(
          50% 50% at 50% 50%,
          rgb(255, 168, 72) 0%,
          rgba(255, 167, 72, 0.99) 11.31%,
          rgba(255, 165, 71, 0.97) 21.19%,
          rgba(255, 162, 70, 0.93) 29.81%,
          rgba(255, 158, 69, 0.88) 37.35%,
          rgba(255, 153, 68, 0.83) 44%,
          rgba(255, 147, 66, 0.76) 49.92%,
          rgba(255, 140, 64, 0.69) 55.29%,
          rgba(255, 133, 63, 0.61) 60.3%,
          rgba(255, 126, 61, 0.52) 65.12%,
          rgba(255, 118, 58, 0.43) 69.92%,
          rgba(255, 110, 56, 0.34) 74.89%,
          rgba(255, 102, 54, 0.26) 80.21%,
          rgba(255, 95, 52, 0.17) 86.05%,
          rgba(255, 87, 50, 0.08) 92.59%,
          rgba(255, 80, 48, 0) 100%
        );
  }

  &__red-purple {
    //will-change: background;
    @extend %fullscreen;

    animation-duration: 8s;
    animation-timing-function: var(--animation--function);
    animation-iteration-count: infinite;
    animation-name: gradientRedPurple;
    background-image: // red
      radial-gradient(
        50% 50% at 50% 50%,
        #ff5030 0%,
        rgba(255, 80, 48, 0.99) 11.3%,
        rgba(254, 80, 50, 0.97) 21.16%,
        rgba(252, 79, 52, 0.93) 29.76%,
        rgba(250, 78, 54, 0.89) 37.27%,
        rgba(247, 77, 57, 0.83) 43.87%,
        rgba(245, 76, 61, 0.76) 49.76%,
        rgba(241, 75, 65, 0.69) 55.1%,
        rgba(238, 74, 70, 0.61) 60.08%,
        rgba(234, 73, 74, 0.52) 64.88%,
        rgba(230, 72, 79, 0.44) 69.68%,
        rgba(226, 70, 84, 0.35) 74.66%,
        rgba(222, 69, 89, 0.26) 80%,
        rgba(218, 68, 94, 0.17) 85.88%,
        rgba(215, 66, 99, 0.08) 92.49%,
        rgba(211, 65, 103, 0) 100%
      ),
      //Purple
      radial-gradient(
          50% 50% at 50% 50%,
          #8f14ba 0%,
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
    //background-position-x: 38.6653%;
    //background-position-y: 32.839%;
    background-position:
      79.2411% 31.25%,
      38.6653% 32.839%;
    background-size: getBGSizePercent(2400), getBGSizePercent(2800);
    background-repeat: no-repeat;
    //animation-delay: 1.5s;
    //animation: none !important;

    &--purple {
      z-index: 1;
      animation-name: gradientPurple;

      .state2 & {
        background-size: getBGSizePercent(1800);
        background-position-x: 59.2593%;
        background-position-y: 64.4033%;
      }

      .state3 & {
        background-size: getBGSizePercent(1800);
        background-position-x: 38.6831%;
        background-position-y: 51.8519%;
      }

      .state4 & {
        background-size: getBGSizePercent(1800);
        background-position-x: 38.6831%;
        background-position-y: 51.8519%;
      }
    }

    &--red {
      z-index: 2;
      animation-name: gradientRed;
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        #ff5030 0%,
        rgba(255, 80, 48, 0.99) 11.3%,
        rgba(254, 80, 50, 0.97) 21.16%,
        rgba(252, 79, 52, 0.93) 29.76%,
        rgba(250, 78, 54, 0.89) 37.27%,
        rgba(247, 77, 57, 0.83) 43.87%,
        rgba(245, 76, 61, 0.76) 49.76%,
        rgba(241, 75, 65, 0.69) 55.1%,
        rgba(238, 74, 70, 0.61) 60.08%,
        rgba(234, 73, 74, 0.52) 64.88%,
        rgba(230, 72, 79, 0.44) 69.68%,
        rgba(226, 70, 84, 0.35) 74.66%,
        rgba(222, 69, 89, 0.26) 80%,
        rgba(218, 68, 94, 0.17) 85.88%,
        rgba(215, 66, 99, 0.08) 92.49%,
        rgba(211, 65, 103, 0) 100%
      );
      background-size: getBGSizePercent(2400);
      background-position-x: 79.2411%;
      background-position-y: 31.25%;

      .state2 & {
        background-size: getBGSizePercent(2000);
        background-position-x: 43.1193%;
        background-position-y: 31.6514%;
      }

      .state3 & {
        background-size: getBGSizePercent(2000);
        background-position-x: 37.3853%;
        background-position-y: 45.9862%;
      }

      .state4 & {
        background-size: getBGSizePercent(2490);
        background-position-x: 48.4051%;
        background-position-y: 44.4179%;
      }
    }

    &--yellow {
      z-index: 3;
      animation-name: gradientYellow;
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgb(255, 168, 72) 0%,
        rgba(255, 167, 72, 0.99) 11.31%,
        rgba(255, 165, 71, 0.97) 21.19%,
        rgba(255, 162, 70, 0.93) 29.81%,
        rgba(255, 158, 69, 0.88) 37.35%,
        rgba(255, 153, 68, 0.83) 44%,
        rgba(255, 147, 66, 0.76) 49.92%,
        rgba(255, 140, 64, 0.69) 55.29%,
        rgba(255, 133, 63, 0.61) 60.3%,
        rgba(255, 126, 61, 0.52) 65.12%,
        rgba(255, 118, 58, 0.43) 69.92%,
        rgba(255, 110, 56, 0.34) 74.89%,
        rgba(255, 102, 54, 0.26) 80.21%,
        rgba(255, 95, 52, 0.17) 86.05%,
        rgba(255, 87, 50, 0.08) 92.59%,
        rgba(255, 80, 48, 0) 100%
      );
      background-size: getBGSizePercent(1500);
      background-position-x: 78.0749%;
      background-position-y: 58.0214%;

      .state2 & {
        opacity: 0;
        background-size: getBGSizePercent(1500);
      }

      .state3 & {
        opacity: 1;
        background-size: getBGSizePercent(1200);
        background-position-x: 25.6289%;
        background-position-y: 49.2138%;
      }

      .state4 & {
        opacity: 0;
        background-size: getBGSizePercent(1000);
      }
    }

    &--yellow2 {
      opacity: 0;
      z-index: 4;
      animation-name: gradientYellow2;
      background-image: radial-gradient(
        50% 50% at 50% 50%,
        rgb(255, 168, 72) 0%,
        rgba(255, 167, 72, 0.99) 11.31%,
        rgba(255, 165, 71, 0.97) 21.19%,
        rgba(255, 162, 70, 0.93) 29.81%,
        rgba(255, 158, 69, 0.88) 37.35%,
        rgba(255, 153, 68, 0.83) 44%,
        rgba(255, 147, 66, 0.76) 49.92%,
        rgba(255, 140, 64, 0.69) 55.29%,
        rgba(255, 133, 63, 0.61) 60.3%,
        rgba(255, 126, 61, 0.52) 65.12%,
        rgba(255, 118, 58, 0.43) 69.92%,
        rgba(255, 110, 56, 0.34) 74.89%,
        rgba(255, 102, 54, 0.26) 80.21%,
        rgba(255, 95, 52, 0.17) 86.05%,
        rgba(255, 87, 50, 0.08) 92.59%,
        rgba(255, 80, 48, 0) 100%
      );
      background-size: getBGSizePercent(1500);
      background-position-x: 78.0749%;
      background-position-y: 58.0214%;

      .state2 & {
        opacity: 1;
        background-size: getBGSizePercent(1664);
        background-position-x: 73.6058%;
        background-position-y: 21.1538%;
      }

      .state3 & {
        opacity: 0;
        background-size: getBGSizePercent(1200);
      }

      .state4 & {
        opacity: 1;
        background-size: getBGSizePercent(1200);
        background-position-x: 50%;
        background-position-y: 54.717%;
      }
    }
  }

  &__grey {
    position: absolute;
    right: 0;
    bottom: -0.1rem;
    left: 0;
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
    height: 38rem;

    @include mq(1440) {
      height: 30rem;
    }
  }
}

@keyframes gradientYellow {
  0% {
    opacity: 1;
    background-position: 78.0749% 58.0214%;
    background-size: getBGSizePercent(1500);
  }
  25% {
    opacity: 0;
    background-position: 73.6058% 21.1538%;
    background-size: getBGSizePercent(1500);
  }
  50% {
    opacity: 1;
    background-position: 25.6289% 49.2138%;
    background-size: getBGSizePercent(1200);
  }
  75% {
    opacity: 0;
    background-position: 50% 54.717%;
    background-size: getBGSizePercent(1000);
  }
  100% {
    opacity: 1;
    background-position: 78.0749% 58.0214%;
    background-size: getBGSizePercent(1500);
  }
}

@keyframes gradientYellow2 {
  0% {
    opacity: 0;
    background-position: 78.0749% 58.0214%;
    background-size: getBGSizePercent(1500);
  }
  25% {
    opacity: 1;
    background-position: 73.6058% 21.1538%;
    background-size: getBGSizePercent(1664);
  }
  50% {
    opacity: 0;
    background-position: 25.6289% 49.2138%;
    background-size: getBGSizePercent(1200);
  }
  75% {
    opacity: 1;
    background-position: 50% 54.717%;
    background-size: getBGSizePercent(1200);
  }
  100% {
    opacity: 0;
    background-position: 78.0749% 58.0214%;
    background-size: getBGSizePercent(1500);
  }
}

@keyframes gradientRed {
  0% {
    background-position: 79.2411% 31.25%;
    background-size: getBGSizePercent(2400);
  }
  25% {
    background-position: 43.1193% 31.6514%;
    background-size: getBGSizePercent(2000);
  }
  50% {
    background-position: 37.3853% 45.9862%;
    background-size: getBGSizePercent(2000);
  }
  75% {
    background-position: 48.4051% 44.4179%;
    background-size: getBGSizePercent(2490);
  }
  100% {
    background-position: 79.2411% 31.25%;
    background-size: getBGSizePercent(2400);
  }
}

@keyframes gradientPurple {
  0% {
    background-position: 38.6653% 32.839%;
    background-size: getBGSizePercent(2800);
  }
  25% {
    background-position: 59.2593% 64.4033%;
    background-size: getBGSizePercent(1800);
  }
  50% {
    background-position: 38.6831% 51.8519%;
    background-size: getBGSizePercent(1800);
  }
  75% {
    background-position: 38.6831% 51.8519%;
    background-size: getBGSizePercent(1800);
  }
  100% {
    background-position: 38.6653% 32.839%;
    background-size: getBGSizePercent(2800);
  }
}

//Red
//Purple
@keyframes gradientRedPurple {
  0% {
    background-position:
      79.2411% 31.25%,
      38.6653% 32.839%;
    background-size: getBGSizePercent(2400), getBGSizePercent(2800);
  }
  25% {
    background-position:
      43.1193% 31.6514%,
      59.2593% 64.4033%;
    background-size: getBGSizePercent(2000), getBGSizePercent(1800);
  }
  50% {
    background-position:
      37.3853% 45.9862%,
      38.6831% 51.8519%;
    background-size: getBGSizePercent(2000), getBGSizePercent(1800);
  }
  75% {
    background-position:
      48.4051% 44.4179%,
      38.6831% 51.8519%;
    background-size: getBGSizePercent(2490), getBGSizePercent(1800);
  }
  100% {
    background-position:
      79.2411% 31.25%,
      38.6653% 32.839%;
    background-size: getBGSizePercent(2400), getBGSizePercent(2800);
  }
}

//Yellow2
//Yellow
//Red
//Purple
@keyframes gradientAll2 {
  0% {
    background-position:
      78.0749% 58.0214%,
      78.0749% 58.0214%,
      79.2411% 31.25%,
      38.6653% 32.839%;
    background-size: getBGSizePercent(1500), getBGSizePercent(1500),
      getBGSizePercent(2400), getBGSizePercent(2800);
  }
  25% {
    background-position:
      73.6058% 21.1538%,
      78.0749% 58.0214%,
      43.1193% 31.6514%,
      59.2593% 64.4033%;
    background-size: getBGSizePercent(1664), getBGSizePercent(1500),
      getBGSizePercent(2000), getBGSizePercent(1800);
  }
  50% {
    background-position:
      73.6058% 21.1538%,
      25.6289% 49.2138%,
      37.3853% 45.9862%,
      38.6831% 51.8519%;
    background-size: getBGSizePercent(1200), getBGSizePercent(1200),
      getBGSizePercent(2000), getBGSizePercent(1800);
  }
  75% {
    background-position:
      50% 54.717%,
      25.6289% 49.2138%,
      48.4051% 44.4179%,
      38.6831% 51.8519%;
    background-size: getBGSizePercent(1200), getBGSizePercent(1000),
      getBGSizePercent(2490), getBGSizePercent(1800);
  }
  100% {
    background-position:
      78.0749% 58.0214%,
      78.0749% 58.0214%,
      79.2411% 31.25%,
      38.6653% 32.839%;
    background-size: getBGSizePercent(1500), getBGSizePercent(1500),
      getBGSizePercent(2400), getBGSizePercent(2800);
  }
}

@keyframes appearance {
  0% {
    opacity: 0.1;
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
    opacity: 0.9;
  }
  100% {
    opacity: 1;
  }
}
</style>
