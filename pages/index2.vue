<template>
  <HeaderBlock />
  <ParticipationConditions />
  <ProcessBlock_v2 />
  <WorkingSection />
  <WhichStackToUseSection />
  <FormData />
  <SelectOption />
  <FooterSection />
</template>

<script setup>
import { heightVH } from '@/helpers';
import ProcessBlock_v2 from "~/components/ProcessBlock_v2.vue";
onMounted(() => {
  heightVH();
});
</script>

<style lang="scss">
@use  '~/assets/styles/main.scss';
</style>
