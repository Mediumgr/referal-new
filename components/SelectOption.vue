<template>
  <section class="section">
    <p class="section_title">Часто задаваемые вопросы</p>
    <div
      class="wrapper-dropdown"
      v-for="(n, index) in data"
      :key="n"
      @click.stop="showHiddenText(index)"
    >
      <div class="wrapper-dropdown_select">
        <p class="wrapper-dropdown_title">{{ data[index].title }}</p>
        <svg
          :class="['wrapper-dropdown_arrow', { active: checked[index] }]"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="40"
            height="40"
            rx="20"
            transform="matrix(1 0 0 -1 0 40)"
            fill="white"
          />
          <rect
            x="0.5"
            y="-0.5"
            width="39"
            height="39"
            rx="19.5"
            transform="matrix(1 0 0 -1 0 39)"
            stroke="#13144B"
            stroke-opacity="0.2"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.3776 27.2416C19.7222 27.5861 20.2809 27.5861 20.6254 27.2416L26.2407 21.6263C26.5853 21.2817 26.5853 20.723 26.2407 20.3785C25.8961 20.0339 25.3374 20.0339 24.9929 20.3785L20.8839 24.4875V13.3824C20.8839 12.895 20.4888 12.5 20.0015 12.5C19.5142 12.5 19.1192 12.895 19.1192 13.3824V24.4875L15.0102 20.3785C14.6656 20.0339 14.1069 20.0339 13.7623 20.3785C13.4178 20.723 13.4178 21.2817 13.7623 21.6263L19.3776 27.2416Z"
            fill="#13144B"
          />
        </svg>
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
import options from '~/assets/data/select-option.json';
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
    hiddenNode.style.height = 0 + 'rem';
  } else {
    let hiddenTextHeight = hiddenText.value[index].clientHeight;
    hiddenNode.style.height = hiddenTextHeight / 10 + 'rem';
  }
};
</script>

<style lang="scss" scoped>
.section {
  @include mq(375) {
    padding: 12rem calc(50% - 17.7rem) 12rem;
  }
  @include mq(768) {
    padding: 16rem calc(50% - 34.4rem) 16rem;
  }
  @include mq(1440) {
    padding: 20rem calc(50% - 53rem) 16rem;
  }

  &_title {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--eggplant);
    font-size: 4.8rem;
    line-height: 90%;
    letter-spacing: -0.288rem;
    padding-bottom: 6rem;

    @include mq(768) {
      font-size: 9.6rem;
      letter-spacing: -0.576rem;
    }
    @include mq(1440) {
      font-size: 15rem;
      letter-spacing: -0.9rem;
    }
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
    }
  }
}
</style>
