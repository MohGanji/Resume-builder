<script setup lang="ts">
import StackoverflowSmall from '@/components/StackoverflowSmall.vue';
import LinkedinRecoms from '@/components/LinkedinRecoms.vue';
</script>

<template>
  <div class="honors">
    <h2 class="section-title">Honors</h2>
    <StackoverflowWidget />
    <div class="mt-75">
      <StackoverflowSmall />
      <LinkedinRecoms />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
