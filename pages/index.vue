<template>
  <LandingContent />
</template>

<script setup>
import { heightVH } from '@/helpers';
onMounted(() => {
  heightVH();
});
</script>

<style lang="scss">
@use  '~/assets/styles/main.scss';
</style>
