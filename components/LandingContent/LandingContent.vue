<template>
  <div class="well" id="well">
    <HeaderBlock class="panel" />
    <ParticipationConditions class="panel" />
    <WorkingSection class="panel" />
    <FormRecommender class="panel" />
    <SelectOption class="panel" />
    <FooterSection class="panel" />
  </div>
</template>

<script setup>
onMounted(() => {
  scrollInit();
});
</script>

<style lang="scss" scoped>
.well {
  position: relative;
  overflow: hidden;
  transition: 1s cubic-bezier(0.5, 0, 0.5, 1);
}

.panel {
  position: relative;
  z-index: 1;
  height: 100vh;
  overflow: hidden;
  box-sizing: border-box;
  cursor: default;
}

.panel:nth-child(2),
.panel:nth-child(3) {
  background: var(--bg);
}
.active {
  opacity: 1;
}
</style>
