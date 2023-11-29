<template>
  <div class="working__section">
    <h2 ref="title" class="working__title">
      Какие направления у&nbsp;нас есть
    </h2>
    <div ref="frame" class="frame__wrapper">
      <div class="commonStyle working__mobile">Мобильный и интернет-банк</div>
      <div class="commonStyle working__services">
        Микросервисы для среднего и&nbsp;малого бизнеса
      </div>
      <div class="commonStyle working__commonWealth">
        Образовательная платформа «Содружество»
      </div>
      <div class="commonStyle working__divisions">Поддержка подразделений</div>
      <div class="commonStyle working__factory">Продуктовая фабрика РБ</div>
      <div class="commonStyle working__eco">
        Экосистема и&nbsp;небанковские сервисы
      </div>
      <div class="commonStyle working__substitution">Импортозамещение</div>
      <div class="commonStyle working__projects">Проекты ОПК</div>
      <div class="commonStyle working__credit" v-show="show">
        Кредитный конвейер
      </div>
      <div class="commonStyle working__products" v-show="show">
        Безрисковые продукты <br />
        ДБО КБ
      </div>
    </div>
  </div>
</template>

<script setup>
const frame = ref(null);
const title = ref(null);
const show = ref(false);

const handleScroll = () => {
  const viewportTop = frame.value.getBoundingClientRect().top;
  if (viewportTop > 400 && viewportTop < 500) {
    title.value.style.opacity = '1';
  } else if (viewportTop > 300 && viewportTop <= 400) {
    title.value.style.opacity = '0.4';
  } else if (viewportTop <= 300) {
    title.value.style.opacity = '0';
    setTimeout(() => {
      title.value.style.visibility = 'hidden';
    }, 1000);
  }
};

const intersection = () => {
  let options = {
    rootMargin: '0px 0px -50px 0px',
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        target.classList.add('active');
      }
    });
    setTimeout(() => {
      handleScroll();
    }, 500);
  }, options);

  let commonStyle = document.querySelectorAll('.commonStyle');
  observer.observe(title.value);
  commonStyle.forEach((el) => observer.observe(el));
};

const showMoreBlocks = () => {
  let width = document.documentElement.clientWidth;
  if (width >= 768) {
    show.value = true;
  } else {
    show.value = false;
  }
};

onMounted(() => {
  intersection();
  showMoreBlocks();
  window.addEventListener('resize', () => showMoreBlocks());
});
</script>

<style lang="scss" scoped>
.activeFrame {
  position: relative;
  z-index: 1;
  transform: translateY(-15rem) !important;
  @include mq(768) {
    transform: translateY(-20rem) !important;
  }
  @include mq(1440) {
    transform: translateY(-40rem) !important;
  }
}
.frame__wrapper {
  color: var(--eggplant);
  grid-gap: 0.5rem;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  transform: translateY(1210px);
  transition: all 2s ease;
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-areas:
    'mobile mobile'
    'services services'
    'commonWealth commonWealth'
    'divisions factory'
    'eco eco'
    'substitution substitution'
    'projects projects';

  @include mq(768) {
    width: 76.8rem;
    margin: 0 auto;
    grid-template-columns: 43rem auto;
    grid-row-gap: 2.5rem;
    grid-column-gap: 2.8rem;
    grid-template-areas:
      'mobile services'
      'commonWealth divisions'
      'factory eco'
      'substitution projects'
      'credit products';
  }
  @include mq(1440) {
    width: 144rem;
    grid-gap: 2.8rem;
    grid-template-columns: repeat(3, auto);
    grid-template-areas:
      'mobile services services'
      'commonWealth divisions factory'
      'eco substitution projects'
      'credit products products';
  }
}

.commonStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 2rem;
  border-radius: 12rem;
  text-align: center;
  box-sizing: border-box;
  background: var(--color-white);
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
  font-size: 1.6rem;
  letter-spacing: -0.048rem;
  color: #13144b;
  position: relative;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.5s ease;

  @include mq(768) {
    font-size: 2rem;
    letter-spacing: -0.06rem;
    padding: 2rem 3rem;
    width: auto;
  }
  @include mq(1440) {
    font-size: 2.4rem;
    letter-spacing: -0.096rem;
    padding: 4rem;
  }
}

.working {
  &__title {
    position: sticky;
    top: 10rem;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    font-weight: 500;
    color: #13144b;
    text-align: center;
    font-size: 4.8rem;
    font-style: normal;
    line-height: 90%;
    letter-spacing: -0.288rem;
    padding-bottom: 2rem;

    @include mq(375) {
      margin: 0 auto;
      width: 33.5rem;
    }
    @include mq(768) {
      width: 72.8rem;
      font-size: 9.6rem;
      font-weight: 500;
      letter-spacing: -0.576rem;
      padding-bottom: 4rem;
    }
    @include mq(1440) {
      width: 90rem;
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
  }

  &__mobile {
    height: 6rem;
    grid-area: mobile;

    @include mq(768) {
      justify-self: end;
    }
    @include mq(1440) {
      height: auto;
      position: relative;
      right: -15rem;
    }
  }

  &__services {
    width: 17.2rem;
    height: 9.7rem;
    grid-area: services;

    @include mq(768) {
      width: 22.5rem;
      height: 11.2rem;
      justify-self: start;
    }
    @include mq(1440) {
      width: 42.6rem;
      height: auto;
      position: relative;
      right: -15rem;
    }
  }

  &__commonWealth {
    width: 26rem;
    height: 9rem;
    grid-area: commonWealth;

    @include mq(768) {
      width: 32.5rem;
      height: 8.8rem;
      justify-self: end;
    }
    @include mq(1440) {
      width: 40.4rem;
      height: 11.8rem;
      position: relative;
      right: -10rem;
    }
  }

  &__divisions {
    width: 16rem;
    height: 7.8rem;
    justify-self: end;
    grid-area: divisions;

    @include mq(768) {
      width: 20.6rem;
      height: 8.8rem;
      justify-self: start;
    }
    @include mq(1440) {
      width: 25.2rem;
      height: 11.8rem;
      justify-self: center;
    }
  }

  &__factory {
    width: 14rem;
    height: 7.8rem;
    justify-self: start;
    grid-area: factory;

    @include mq(768) {
      width: 18.3rem;
      height: 8.8rem;
      justify-self: center;
      position: relative;
      right: -3rem;
    }
    @include mq(1440) {
      width: 22.5rem;
      height: 11.8rem;
      justify-self: start;
      right: 10rem;
    }
  }

  &__eco {
    width: 21.6rem;
    height: 7.8rem;
    grid-area: eco;

    @include mq(768) {
      width: 29.3rem;
      height: 7.8rem;
      position: relative;
      right: 10rem;
    }
    @include mq(1440) {
      right: -4.5rem;
      justify-self: end;
      width: 35.4rem;
      height: 11.8rem;
    }
  }

  &__substitution {
    height: 6rem;
    grid-area: substitution;

    @include mq(768) {
      justify-self: end;
      height: 6.4rem;
    }
    @include mq(1440) {
      height: 11rem;
      justify-self: center;
      position: relative;
      left: -3rem;
    }
  }

  &__projects {
    height: 6rem;
    grid-area: projects;

    @include mq(768) {
      height: 6.4rem;
      justify-self: start;
    }
    @include mq(1440) {
      height: 11rem;
      position: relative;
      left: -10.5rem;
    }
  }
  &__credit {
    grid-area: credit;

    @include mq(768) {
      position: relative;
      left: 2rem;
      height: 6.4rem;
      justify-self: center;
    }
    @include mq(1440) {
      justify-self: end;
      height: 11rem;
      left: 12rem;
    }
  }
  &__products {
    grid-area: products;

    @include mq(768) {
      position: relative;
      left: -6.5rem;
      height: 8.8rem;
      justify-self: start;
    }
    @include mq(1440) {
      height: 13.8rem;
      left: 12rem;
    }
  }
}

.active {
  opacity: 1;
}
</style>
