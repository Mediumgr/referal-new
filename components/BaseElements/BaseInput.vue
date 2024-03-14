<template>
  <div class="wrapper-input">
    <input
      class="input"
      ref="input"
      :value="modelValue.text"
      :type="type"
      :class="{ errorClass: error === 'error' }"
      @input="onInput($event)"
      @focus="onFocus()"
      @blur="onBlur()"
    />
    <label ref="label" :class="labelClasses">{{ placeholder }}</label>
  </div>
</template>

<script setup>
const input = ref(null)
const label = ref(null)

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: Object,
    default: () => ({}),
  },
  placeholder: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    required: false,
  },
})

let formattedDigits = ref('')

const onInput = (event) => {
  let value = event.target.value
  let type = event.target.type
  if (type === 'tel') {
    let numbers = value.replace(/\D/g, '')
    let length = numbers.length
    console.log(event.inputType)
    if (length < 12 && event.inputType !== 'deleteContentBackward') {
      formattedDigits.value =
        '+7 ' +
        numbers.slice(1, 4) +
        ' ' +
        numbers.slice(4, 7) +
        ' ' +
        numbers.slice(7, 9) +
        ' ' +
        numbers.slice(9, 11)

      emit('update:modelValue', {
        text: formattedDigits.value,
        textLength: length,
      })
    } else if (event.inputType === 'deleteContentBackward') {
      formattedDigits.value = formattedDigits.value.slice(0, -1)
      emit('update:modelValue', {
        text: value,
        textLength: value.length,
      })
      console.log({
        text: value,
        textLength: value.length,
      })
    } else {
      event.target.value = formattedDigits.value
    }
  } else {
    emit('update:modelValue', {
      text: value.trimLeft(),
    })
  }
}

const onFocus = () => {
  input.value.classList.add('focus')
}
const onBlur = () => {
  input.value.classList.remove('focus')
}

const labelClasses = computed(() => {
  return [
    'placeholder-label',
    {
      errorLabel: props.error === 'error',
      hidden: props.modelValue.text.length > 0,
    },
  ]
})
</script>

<style lang="scss" scoped>
/* disable iphone zoom */
/* input:active {
  font-size: 16px;
} */

.wrapper-input {
  position: relative;
}
.focus {
  border: 0.2rem solid rgba(19, 20, 75, 0.2) !important;
}

.input {
  box-sizing: border-box;
  margin-top: 1rem;
  outline: none;
  border: 0.1rem solid rgba(19, 20, 75, 0.2);
  border-radius: 2rem;
  padding: 2rem;
  width: 100%;
  max-height: 5.4rem;
  color: #13144b;
  font-style: normal;
  font-weight: 500;
  font-size: 1.3rem;
  font-family: Onest, Helvetica, serif;
  letter-spacing: -0.026rem;

  @include mq(768) {
    // height: 4.9rem;
    font-size: 1.6rem;
  }

  @include mq(1440) {
    padding: 1.5rem 2rem;
    height: 5.2rem;
  }
}

.placeholder-label {
  position: absolute;
  top: 2.8rem;
  left: 2rem;
  opacity: 0.5;
  transition: all 0.3s ease-out;
  pointer-events: none;
  color: #13144b;
  font-size: 1.4rem;
  line-height: 140%;
  font-family: Onest, Helvetica, serif;
  letter-spacing: -0.064rem;

  @include mq(768) {
    letter-spacing: -0.032rem;
  }
  @include mq(1440) {
    top: 2.6rem;
    font-size: 1.6rem;
    letter-spacing: -0.064rem;
  }
  &.hidden {
    opacity: 0;
  }
}
.errorClass {
  border: 0.1rem solid #f00;
  color: #f00;
}

.errorLabel {
  color: #f00;
}
</style>
