<template>
  <section class="select-option container">
    <h2 class="title heading-h2">Часто задаваемые вопросы</h2>

    <div
      class="wrapper-dropdown"
      v-for="(n, index) in data"
      :key="n"
      @click.stop="showHiddenText(index)"
    >
      <div class="wrapper-dropdown_select">
        <p class="wrapper-dropdown_title heading-h5">{{ data[index].title }}</p>
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
import options from '~/assets/data/select-option.json'

const data = options.content

const hiddenWrapper = ref(null)
const hiddenText = ref(null)
const checked = ref({})

for (let i = 0; i < data.length; i++) {
  checked.value[i] = false
}

const showHiddenText = (index) => {
  checked.value[index] = !checked.value[index]
  let hiddenNode = hiddenWrapper.value[index]
  if (hiddenNode.clientHeight) {
    hiddenNode.style.height = 0 + 'rem'
  } else {
    let hiddenTextHeight = hiddenText.value[index].clientHeight
    hiddenNode.style.height = hiddenTextHeight / 10 + 'rem'
  }
}
</script>

<style lang="scss" scoped>
.select-option {
  color: var(--eggplant);
  @include mq(375) {
    padding-bottom: 12rem;
  }

  @include mq(768) {
    padding-bottom: 16rem;
  }
}

.title {
  padding-top: 8rem;
  padding-bottom: 6rem;
  color: var(--eggplant);

  @include mq(1024) {
    padding-top: 21rem;
    padding-bottom: 8rem;
  }

  @include mq(1200) {
    padding-top: 30rem;
  }
}

.wrapper-dropdown {
  cursor: pointer;
  outline: none;
  box-shadow: 0 0.5rem 2rem 0 rgba(0, 0, 0, 0.07);
  border-radius: 2rem;
  background: #fff;
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
    text-align: left;
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
    transition: height 0.5s ease;
    background: #fff;
    height: 0;
    overflow: hidden;
  }

  &_text {
    padding-top: 1rem;
    color: #1b232f;
    font-weight: 400;
    font-size: 1.3rem;

    @include mq(768) {
      padding: 1rem 6.5rem 0 0;
      font-size: 1.8rem;
    }

    @include mq(1200) {
      font-size: 2.4rem;
      line-height: 120%;
    }
  }
}
</style>
