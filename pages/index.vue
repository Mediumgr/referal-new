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
import { heightVH } from "@/helpers";
onMounted(() => {
  heightVH();
});
</script>

<style lang="scss">
@use "~/assets/styles/main";
</style>
