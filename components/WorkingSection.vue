<template>
  <section class="working__section">
    <h2 ref="title" class="working__title heading-h2">Наши проекты</h2>

    <div ref="frame" class="frame__wrapper">
      <!-- <div class="commonStyle working__divisions">Поддержка подразделений</div> -->
      <div class="commonStyle working__eco">
        Экосистема <br />
        сервисов
      </div>
      <div class="commonStyle working__projects">
        Проекты для оборонно-<br />промышленного комплекса
      </div>
      <!--
      <div class="commonStyle working__commonWealth">
        Образовательная платформа «Содружество»
      </div>
      -->
      <div class="commonStyle working__bank">
        Интернет-банк корпоративных <br />
        клиентов
      </div>
      <div class="commonStyle working__substitution">Импортозамещение ПО</div>
      <div class="commonStyle working__microServices">
        Микросервисы&nbsp;для&nbsp;среднего <br />и&nbsp;малого бизнеса
      </div>
      <div class="commonStyle working__services">
        Сервисы для <br />
        розничных клиентов
      </div>
      <div class="commonStyle working__credit">Сервисы оформления кредитов</div>
    </div>
  </section>
</template>

<script setup>
const frame = ref(null)
const title = ref(null)

const intersectionWrapper = () => {
  let options = {
    rootMargin: '0px 0px -50px 0px',
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { boundingClientRect } = entry
      const frameViewportTop = boundingClientRect.top
      console.log('frameViewportTop', frameViewportTop)
      if (frameViewportTop > 270) {
        title.value.style.opacity = ''
      } else if (frameViewportTop > 170 && frameViewportTop <= 270) {
        title.value.style.opacity = '0.4'
      } else if (frameViewportTop <= 170) {
        title.value.style.opacity = '0'
      }
    })
  }, options)

  observer.observe(frame.value)
}

const intersectionElements = () => {
  let options = {
    rootMargin: '0px 0px -250px 0px',
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry
      if (isIntersecting) {
        target.classList.add('active')
      }
    })
  }, options)

  let commonStyle = document.querySelectorAll('.commonStyle')
  commonStyle.forEach((el) => observer.observe(el))
  observer.observe(title.value)
}

onMounted(() => {
  intersectionElements()
  intersectionWrapper()
})
</script>

<style lang="scss" scoped>
.frame__wrapper {
  color: var(--eggplant);
  grid-row-gap: 1.5rem;
  display: grid;
  grid-template-columns: 18rem auto;
  grid-template-areas:
    'projects eco'
    'bank bank'
    'microServices microServices'
    'substitution services'
    'credit credit';
  align-items: center;
  justify-items: center;

  @include mq(768) {
    grid-template-columns: 30rem auto;
    margin: 0 auto;
    width: 56rem;
  }
  @include mq(1200) {
    width: 120rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(3, auto);
    grid-template-areas:
      'bank eco projects'
      'microServices substitution services'
      'credit  credit credit';
  }
}

.commonStyle {
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  opacity: 0;
  z-index: 1;
  transition: opacity 0.5s ease;
  box-sizing: border-box;
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
  border-radius: 12rem;
  background: var(--color-white);
  padding: 1.5rem 1.4rem;
  color: #13144b;
  letter-spacing: -0.048rem;
  text-align: center;

  @include mq(768) {
    padding: 2rem 3rem;
    width: auto;
    font-size: 2rem;
    letter-spacing: -0.06rem;
  }
  @include mq(1200) {
    padding: 4rem;
    font-size: 2.4rem;
    line-height: 2.88rem;
    letter-spacing: -0.096rem;
  }
}

.working {
  &__section {
    padding: 20rem 2rem 12rem;

    @include mq(768) {
      padding: 22rem 2rem 12rem;
    }
    @include mq(1200) {
      padding: 28rem 2rem 16rem;
    }
  }

  &__title {
    position: sticky;
    top: 25rem;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    padding-bottom: 3rem;
    color: var(--eggplant);
    font-weight: 500;
  }

  &__bank {
    grid-area: bank;
    @include mq(1200) {
      position: relative;
      left: 9rem;
    }
  }

  &__microServices {
    position: relative;
    left: 2rem;
    grid-area: microServices;
  }

  &__commonWealth {
    grid-area: commonWealth;
  }

  &__divisions {
    grid-area: divisions;
  }

  &__services {
    grid-area: services;
    min-width: 15rem;

    @include mq(1200) {
      position: relative;
      left: -4.5rem;
    }
  }

  &__eco {
    position: relative;
    left: 1rem;
    grid-area: eco;
    @include mq(768) {
      left: 1.5rem;
    }
  }

  &__substitution {
    grid-area: substitution;
  }

  &__projects {
    position: relative;
    left: 2rem;
    grid-area: projects;
    min-width: 19.3rem;

    @include mq(768) {
      left: 2.5rem;
      min-width: 32rem;
    }
    @include mq(1200) {
      left: -5.7rem;
    }
  }

  &__credit {
    grid-area: credit;
  }
}

.active {
  opacity: 1;
}
</style>
