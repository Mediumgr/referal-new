<template>
  <p class="title">Часто задаваемые вопросы</p>
  <section class="section">
    <div
      class="wrapper-dropdown"
      v-for="(n, index) in data"
      :key="n"
      @click.stop="showHiddenText(index)"
    >
      <div class="wrapper-dropdown_select">
        <p class="wrapper-dropdown_title">{{ data[index].title }}</p>
        <svg-icon
          :class="['wrapper-dropdown_arrow', { active: checked[index] }]"
          name="dropdown_arrow"
        ></svg-icon>
      </div>
      <div class="wrapper-dropdown_hidden" ref="hiddenWrapper">
        <p class="wrapper-dropdown_text" ref="hiddenText">
          {{ data[index].text }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import options from "~/assets/data/select-option.json";
const data = options.content;

const hiddenWrapper = ref(null);
const hiddenText = ref(null);
const checked = ref({});

for (let i = 0; i < data.length; i++) {
  checked.value[i] = false;
}

const showHiddenText = (index) => {
  checked.value[index] = !checked.value[index];
  let hiddenNode = hiddenWrapper.value[index];
  if (hiddenNode.clientHeight) {
    hiddenNode.style.height = 0 + "rem";
  } else {
    let hiddenTextHeight = hiddenText.value[index].clientHeight;
    hiddenNode.style.height = hiddenTextHeight / 10 + "rem";
  }
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--eggplant);
  font-size: 4.8rem;
  line-height: 90%;
  letter-spacing: -0.288rem;
  padding: 8rem 0 6rem;

  @include mq(768) {
    font-size: 9.6rem;
    letter-spacing: -0.576rem;
  }
  @include mq(1024) {
    padding: 12rem 18rem 8rem;
  }
  @include mq(1440) {
    font-size: 15rem;
    letter-spacing: -0.9rem;
    padding: 30rem 10rem 8rem;
  }
}
.section {
  @include mq(375) {
    padding: 0 calc(50% - 17.7rem) 12rem;
  }
  @include mq(768) {
    padding: 0 calc(50% - 34.4rem) 16rem;
  }
  @include mq(1440) {
    padding: 0 calc(50% - 53rem) 16rem;
  }
}

.wrapper-dropdown {
  background: #fff;
  cursor: pointer;
  outline: none;
  border-radius: 2rem;
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
  padding: 2.2rem 2rem;

  &:not(:last-child) {
    margin-bottom: 2rem;
  }

  @include mq(768) {
    padding: 2rem 2rem;
  }

  &_select {
    display: grid;
    grid-template-columns: 1fr 4rem;
    grid-column-gap: 2rem;
    align-items: center;

    @include mq(768) {
      grid-template-columns: 1fr 7rem;
    }
  }

  &_title {
    display: flex;
    align-items: center;
    color: var(--eggplant);
    font-size: 1.8rem;
    letter-spacing: -0.036rem;

    @include mq(768) {
      font-size: 2.4rem;
      letter-spacing: -0.048rem;
    }
    @include mq(1440) {
      font-size: 3.2rem;
      letter-spacing: -0.096rem;
      line-height: 120%;
    }
  }

  &_arrow {
    display: flex;
    align-items: center;
    transform: rotate(0deg);
    transition: transform 0.4s linear;
    width: 4rem;
    height: 4rem;

    &.active {
      transform: rotate(-180deg);
    }
    @include mq(768) {
      width: 7rem;
      height: 7rem;
    }
  }

  &_hidden {
    background: #fff;
    overflow: hidden;
    height: 0;
    transition: height 0.5s ease;
  }

  &_text {
    color: #1b232f;
    font-weight: 400;
    padding-top: 1rem;
    font-size: 1.3rem;

    @include mq(768) {
      font-size: 1.8rem;
      padding: 1rem 6.5rem 0 0;
    }

    @include mq(1440) {
      font-size: 2.4rem;
      line-height: 120%;
    }
  }
}
</style>
