<script setup lang="ts">
import type { Skill } from '@/models/skill';
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';

// prettier-ignore
const otherSkills: string[] = [
  'Python', 
  'Node.js', 
  'Django',
  'Redis',
  'AWS', // 'Azure',
  'NoSQL',
  'Docker',
  
  // 'Express', 
  'PostgreSQL', //'MySQL', //'SQLite', 
  'GraphQL', 'REST', // 'Linux',
  'CI/CD', 
  // 'VectorDB', // 'ChromaDB', 'MilvusDB',
  
  'Bash',
  'WebSocket', //'RTSP', 'On-prem deployment', 
  'Java',
  'Gitlab CI',
  // 'Django',
  // 'Instructor',  
  // 'Label Studio',
  // 'GitHub Actions', 
  
  //'Cloud Storage', //'Github-Actions',
  
  // 'NoSQL', 
  // 'MongoDB',
  // 'DevOps',
  
  
  // 'Nginx',
  
  // 'Java',
  // 'MongoDB', 
  // 'Linux', 'Bash', 
  // 'IDP', 'DRM',
  // 'Object Oriented Design', 'Functional Programming',
  // 'Microservices',  
  // 'Sentry', // 'Metabase',
  'Cloud Deployment', 
  'Documentation',
  'MQTT', 
  'Distributed Systems',
  
  // 'Grafana',
  
  // 'Grafana', 
  
  // 'HTML', 'CSS', 
  'Test',
  'TS',
  'JS', 
  'React', 
  // 'TypeScript',
  // 'Express', 
  // 'Mongoose',
  // 'Jest', 
  // 'PyTest',
  // 'Mocha', 'Node Tap',
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
