<script setup lang="ts">
import type { EducationModel } from '@/models/experience';
import Education from '@/components/Education.vue';
import { EDUCATION_EXPERIENCES } from '@/resume-data';

const educationExperiences: EducationModel[] = EDUCATION_EXPERIENCES;
</script>

<template>
  <h2 class="section-title">Education</h2>
  <Education
    v-for="e in educationExperiences"
    :work="e"
    v-bind:key="e.name"
    v-bind:class="e.hideInResume ? 'print-hide' : ''"
  />
</template>

<!-- <style scoped lang="scss"></style> -->
