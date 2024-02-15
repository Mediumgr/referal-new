<template>
  <div class="working__section">
    <h2 ref="title" class="working__title">Наши проекты</h2>
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
  </div>
</template>

<script setup>
const frame = ref(null);
const title = ref(null);

const intersectionWrapper = () => {
  let options = {
    rootMargin: "0px 0px -50px 0px",
    threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { boundingClientRect } = entry;
      const frameViewportTop = boundingClientRect.top;
      console.log("frameViewportTop", frameViewportTop);
      if (frameViewportTop > 270) {
        title.value.style.opacity = "";
      } else if (frameViewportTop > 170 && frameViewportTop <= 270) {
        title.value.style.opacity = "0.4";
      } else if (frameViewportTop <= 170) {
        title.value.style.opacity = "0";
      }
    });
  }, options);

  observer.observe(frame.value);
};

const intersectionElements = () => {
  let options = {
    rootMargin: "0px 0px -250px 0px",
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const { target, isIntersecting } = entry;
      if (isIntersecting) {
        target.classList.add("active");
      }
    });
  }, options);

  let commonStyle = document.querySelectorAll(".commonStyle");
  commonStyle.forEach((el) => observer.observe(el));
  observer.observe(title.value);
};

onMounted(() => {
  intersectionElements();
  intersectionWrapper();
});
</script>

<style lang="scss" scoped>
.frame__wrapper {
  color: var(--eggplant);
  grid-row-gap: 1.5rem;
  justify-items: center;
  align-items: center;
  display: grid;
  grid-template-columns: 18rem auto;
  grid-template-areas:
    "projects eco"
    "bank bank"
    "microServices microServices"
    "substitution services"
    "credit credit";

  @include mq(768) {
    margin: 0 auto;
    width: 56rem;
    grid-template-columns: 30rem auto;
  }
  @include mq(1440) {
    width: 120rem;
    grid-row-gap: 1rem;
    grid-template-columns: repeat(3, auto);
    grid-template-areas:
      "bank eco projects"
      "microServices substitution services"
      "credit  credit credit";
  }
}

.commonStyle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 1.4rem;
  border-radius: 12rem;
  text-align: center;
  box-sizing: border-box;
  background: var(--color-white);
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
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
    line-height: 2.88rem;
  }
}

.working {
  &__section {
    padding: 20rem 2rem 12rem;

    @include mq(768) {
      padding: 22rem 2rem 12rem;
    }
    @include mq(1440) {
      padding: 28rem 2rem 16rem;
    }
  }
  &__title {
    position: sticky;
    top: 25rem;
    opacity: 0;
    transition: opacity 0.2s ease-out;
    font-weight: 500;
    color: #13144b;
    text-align: center;
    font-size: 4.8rem;
    font-style: normal;
    line-height: 90%;
    letter-spacing: -0.288rem;
    padding: 0 0 3rem;

    @include mq(768) {
      font-size: 8rem;
    }
    @include mq(1440) {
      font-size: 15rem;
    }
  }

  &__bank {
    grid-area: bank;
    @include mq(1440) {
      position: relative;
      left: 9rem;
    }
  }

  &__microServices {
    grid-area: microServices;
    position: relative;
    left: 2rem;
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

    @include mq(1440) {
      position: relative;
      left: -4.5rem;
    }
  }

  &__eco {
    grid-area: eco;
    position: relative;
    left: 1rem;
    @include mq(768) {
      left: 1.5rem;
    }
  }

  &__substitution {
    grid-area: substitution;
  }

  &__projects {
    min-width: 19.3rem;
    position: relative;
    left: 2rem;
    grid-area: projects;

    @include mq(768) {
      min-width: 32rem;
      left: 2.5rem;
    }
    @include mq(1440) {
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
