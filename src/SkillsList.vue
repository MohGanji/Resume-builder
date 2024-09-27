<script setup lang="ts">
import type { Skill } from '@/models/skill';
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';

// prettier-ignore
const otherSkills: string[] = [
  'Node.js',
  'MongoDB',
  'Bash',
  'CI/CD', 
  'Python',
  'Docker',
  'ChromaDB', 'MilvusDB',
  'Redis', 'PostgreSQL', //'SQLite', 
  // 'Java',
  // 'CI/CD', 
  'AWS', //'Cloud Storage', //'Github-Actions',
  // 'MongoDB', 
  // 'Linux', 'Bash', 
  // 'Cloud Deployment', 
  // 'IDP', 'DRM',
  // 'Object Oriented Design', 'Functional Programming',
  'MQTT', 'WebSocket', //'RTSP', 'On-prem deployment', 
  'Nginx', 'Sentry', // 'Metabase',
  'Grafana', 
  'Django', 
  // 'Rest API', 
  'Microservices',  
  'HTML', 'CSS', 'JS', 'TS', 'GraphQL',
  'React', // 'JQuery', 
  // 'ExpressJS', 'Mongoose',
  // 'Jest', 'PyTest', 'Mocha', 'Node Tap',
];

function calculateYears(year: number) {
  return new Date().getFullYear() - year;
}
</script>

<template>
  <div class="skills-list-wrapper">
    <h2 class="section-title">Skills</h2>
    <ul class="other-skills">
      <li v-for="s of otherSkills" :key="s">
        <span>{{ s }}</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.skills-list-wrapper {
  @media print {
    break-inside: avoid;
  }
}

.other-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem 0.5rem;
  list-style: none;
  margin: 0.5rem 0 0;
  padding: 0;
  line-height: 12px;
  font-family: var(--font-title);
  color: var(--text-2);
  > li {
    padding: 0;
    margin: 0;
  }
}
</style>
