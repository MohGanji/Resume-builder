<script setup lang="ts">
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';
</script>

<template>
  <a
    class="stackoverflow-profile"
    href="https://stackoverflow.com/users/7025986/ganjim?tab=profile"
  >
    <div class="stackoverflow-icon">
      <IconStackoverflow :is-colored="true" />
    </div>
    <div class="linkedin-recom-text">~1.5K Reputation on Stackoverflow</div>
    <div class="outside-link-icon"><span class="material-symbols-outlined">open_in_new</span></div>
  </a>
</template>

<style scoped lang="scss">
.stackoverflow-profile {
  display: flex;
  align-items: center;
  color: hsl(45,47%,37%);
  background: hsl(46,93%,78%);
  border-radius: 4px;
  padding: 0 0.5rem 0 0;
  margin: 0 0 0.5rem 0;

  &:hover {
    opacity: 0.9;
  }
}
.linkedin-recom-text {
  margin-inline-end: 0.25rem;
}
.stackoverflow-icon {
  width: 30px;
  height: 30px;
  background: hsl(28,59%,83%);
  color: hsl(210,1%,99%);
  border-radius: 4px 0 0 4px;
  padding: 0.25rem 0.5rem 0.5rem;
  margin-inline-end: 0.75rem;
}
.outside-link-icon {
  margin-inline-start: auto;
  opacity: 0.6;
  display: flex;
  align-items: center;
  > .material-symbols-outlined {
    font-size: 20px;
  }
}
</style>
