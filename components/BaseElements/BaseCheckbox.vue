<template>
  <div class="wrapper">
    <input
      type="checkbox"
      :id="id"
      :checked="modelValue"
      @change="(event) => emit('update:modelValue', event.target.checked)"
    />
    <label
      :for="id"
      :class="['checkboxLabel', { errorCheckbox: error === 'error' }]"
    >
    </label>
    <label :for="id" :class="['textLabel', { errorText: error === 'error' }]">
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  modelValue: {
    type: [Boolean, Object],
    default: false,
  },
  id: {
    type: String,
    required: true,
  },
  error: {
    type: String,
    required: false,
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;

  &:not(:last-child) {
    padding-bottom: 1rem;
  }
}

input {
  position: relative;
  z-index: -100;
  width: 0;
  height: 0;
  opacity: 0;
  visibility: hidden;
  &:checked ~ .checkboxLabel {
    background: url('/assets/images/formData/checked.svg') no-repeat center
      center/1rem 0.8rem;
  }
}
.checkboxLabel {
  position: relative;
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  padding-right: 2rem;
  display: block;
  border-radius: 25%;
  text-align: center;
  outline: 0.1rem solid var(--eggplant);
  cursor: pointer;
}
.textLabel {
  color: var(--eggplant);
  font-size: 1.3rem;
  line-height: 140%;
  letter-spacing: -0.026rem;
  opacity: 0.5;

  @include mq(768) {
    font-size: 1.6rem;
    letter-spacing: -0.032rem;
  }
}
.errorCheckbox {
  outline: 0.1rem solid red;
}
.errorText {
  color: #f00;
}
</style>
