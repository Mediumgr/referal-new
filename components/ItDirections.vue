<template>
  <section id="it-direction" class="it-direction">
    <h2 class="it-direction__title heading-h2" v-html="title"></h2>

    <div class="it-direction__container">
      <div
        class="it-direction__wrapper"
        v-for="(item, index) in items"
        :key="item"
        :style="getFlex(item)"
        @click.stop="show(index)"
      >
        <div class="it-direction__select">
          <p class="it-direction__name" v-html="item.name"></p>
          <svg-icon
            :class="['it-direction__arrow', { active: checked[index] }]"
            name="it_arrow"
          ></svg-icon>
        </div>

        <div
          class="it-direction__hidden-wrapper"
          :style="getPadding(item, index)"
          ref="hiddenWrapper"
        >
          <div class="it-direction__hidden_elements" ref="hiddenElements">
            <template v-for="stack in item.stack" :key="stack">
              <div class="it-direction__hidden-el" ref="el">
                <p class="it-direction__text">
                  {{ stack }}
                </p>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import itDirections from '@/assets/data/it-directions.json'

const { title, items } = itDirections

const hiddenWrapper = ref(null)
const hiddenElements = ref(null)
const el = ref(null)
const checked = ref({})
const desktop = ref(null)

for (let i = 0; i < items.length; i++) {
  checked.value[i] = false
}

const show = (index) => {
  if (!desktop.value) {
    checked.value[index] = !checked.value[index]
    let hiddenWrap = hiddenWrapper.value[index]
    if (hiddenWrap.clientHeight) {
      hiddenWrap.style.height = ''
    } else {
      let hiddenBlock = hiddenElements.value[index].clientHeight
      let borderWidth = +window
        .getComputedStyle(el.value[index])
        .getPropertyValue('border-right-width')
        .split('px')[0]
      hiddenWrap.style.height = hiddenBlock + borderWidth + 'px'
    }
  }
}

const getPadding = (el, index) => {
  let isPadding = !!el.settings.padding
  let padding = isPadding ? el.settings.padding : null
  if ((index === 0 || index === 3) && desktop.value) {
    return { 'padding-right': '2rem' }
  } else if (padding && !desktop.value) {
    return { 'padding-right': el.settings.padding }
  }
}

const getFlex = (el) => {
  let isSettings = !!el.settings
  let grow = isSettings ? el.settings['flex-grow'] : null
  let basis = isSettings ? el.settings['flex-basis'] : null
  if (isSettings && grow && basis && desktop.value) {
    return { flex: `${grow} 0 ${basis}` }
  }
}

const onResizeListener = () => {
  window.addEventListener('resize', () => {
    desktop.value = window.matchMedia(`(min-width: 1200px)`).matches
    items.forEach((item) => {
      getFlex(item)
    })
  })
}

onMounted(() => {
  desktop.value = window.matchMedia(`(min-width: 1200px)`).matches
  onResizeListener()
})
</script>

<style lang="scss" scoped>
.it-direction {
  background: var(
    --2,
    radial-gradient(
      82% 24.78% at 50% 57.3%,
      #fc9b5a 0%,
      rgba(245, 111, 80, 0) 100%
    ),
    radial-gradient(
      153.53% 46.39% at 50% 53.61%,
      #f46d51 23%,
      rgba(186, 69, 131, 0) 65.61%
    ),
    radial-gradient(
      157.08% 47.47% at 50% 52.53%,
      #9c3a9a 44.73%,
      rgba(22, 21, 79, 0) 92.22%
    ),
    radial-gradient(
      158.63% 47.94% at 50% 47.94%,
      #702e9a 51.93%,
      rgba(91, 19, 180, 0) 100%
    ),
    #13144b
  );
  padding: 12rem 2rem 14rem;
  @include mq(768) {
    padding: 12rem 4rem 14rem;
  }
  @include mq(1024) {
    background: var(
      --1,
      radial-gradient(
        31.25% 24.78% at 50% 57.3%,
        #fc9b5a 0%,
        rgba(245, 111, 80, 0) 100%
      ),
      radial-gradient(
        58.51% 46.39% at 50% 53.61%,
        #f46d51 23%,
        rgba(186, 69, 131, 0) 65.61%
      ),
      radial-gradient(
        78.06% 47.47% at 50% 52.53%,
        #9c3a9a 44.73%,
        rgba(22, 21, 79, 0) 92.22%
      ),
      radial-gradient(
        77.38% 47.94% at 50% 47.94%,
        #702e9a 51.93%,
        rgba(91, 19, 180, 0) 100%
      ),
      #13144b
    );
    padding: 12rem calc(50% - 34.8rem) 14rem;
  }
  @include mq(1200) {
    padding: 25rem calc(50% - 64rem) 25rem;
  }

  &__title {
    padding-bottom: 10rem;
    color: var(--color-white);
    font-size: 4.5rem;
    line-height: 100%;
  }

  &__wrapper {
    margin-bottom: 0.8rem;
    border-radius: 2rem;
    background: rgba(20, 20, 82, 0.6);
    padding: 1.6rem;
    @include mq(1200) {
      display: flex;
      flex-basis: 30.5rem;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 0rem;
      padding: 2rem;
      min-height: 22rem;
    }
  }

  &__container {
    @include mq(1200) {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      grid-gap: 2rem;
    }
  }

  &__hidden-wrapper {
    transition: height 0.5s ease;
    height: 0;
    overflow: hidden;

    @include mq(1200) {
      display: flex;
      justify-content: flex-start;
      align-items: flex-end;
      height: auto;
    }
  }

  &__hidden_elements {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    grid-gap: 1rem;
    padding-top: 2rem;

    @include mq(1200) {
      padding-top: 0;
    }
  }

  &__select {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__arrow {
    transform: rotate(0deg);
    transition: transform 0.4s linear;
    border-color: rgba(255, 255, 255, 0.2);
    border-radius: 2.32rem;
    padding: 0.093rem;
    width: 3.2rem;
    height: 3.2rem;

    @include mq(1200) {
      display: none;
    }

    &.active {
      transform: rotate(180deg);
    }
  }

  &__name {
    color: rgb(255, 255, 255);
    font-size: 1.8rem;
    line-height: 2.2rem;
    letter-spacing: -0.02rem;
    @include mq(1200) {
      font-size: 3.2rem;
      line-height: 3.84rem;
    }
  }

  &__text {
    @include mq(1200) {
      font-size: 1.6rem;
      line-height: 2.24rem;
    }
  }

  &__hidden-el {
    border: 0.1rem solid rgba(255, 255, 255, 0.2);
    border-radius: 5rem;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: rgb(255, 255, 255);
  }
}
</style>
