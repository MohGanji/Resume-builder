<script setup lang="ts">
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
import IconStackoverflow from '@/components/icons/IconStackoverflow.vue';
import IconGithub from '@/components/icons/IconGithub.vue';

interface SocialMedia {
  link: string;
  icon?: string;
  iconComponent?: any;
  ariaLabel?: string;
  class?: string;
}

const socialMedia: SocialMedia[] = [
  { link: 'https://ganji.blog', icon: 'language', class: 'contacts-contact-info' },
  {
    link: 'https://www.linkedin.com/in/mohganji/',
    iconComponent: IconLinkedin,
    ariaLabel: 'LinkedIn',
    class: 'contacts-social-media',
  },
  {
    link: 'https://stackoverflow.com/users/7025986/ganjim',
    iconComponent: IconStackoverflow,
    ariaLabel: 'StackOverFlow',
    class: 'contacts-social-media',
  },
  {
    link: 'https://github.com/mohganji',
    iconComponent: IconGithub,
    ariaLabel: 'GitHub',
    class: 'contacts-social-media',
  },
];

const yearsOfExperience = (
  ((Date.now() - new Date('2017-05-01').getTime()) /
  (1000 * 60 * 60 * 24 * 365.25)) - 2
).toFixed();
</script>

<template>
  <header>
    <div class="avatar-wrapper">
      <img alt="Avatar" class="avatar" src="./assets/avatar.png" width="100" height="100" />
    </div>

    <h1 class="resume-name">Mohammad Ganji</h1>

    <div class="contact-info">
      <a href="mailto:mo@ganji.blog" class="contacts-contact-info">
        <span class="material-symbols-outlined">mail</span><span>mo@ganji.blog</span>
      </a>
      <a href="tel:+17789575657" class="contacts-contact-info">
        <span class="material-symbols-outlined">call</span><span>+17789575657</span>
      </a>
    </div>
    <!--    <div class="contacts">-->

    <!--    </div>-->
    <div class="social-media">
      <a v-for="s of socialMedia" :key="s.link" :href="s.link" :class="s.class" target="_blank">
        <span v-if="s.icon" class="material-symbols-outlined">{{ s.icon }}</span>
        <span v-else><component v-bind:is="s.iconComponent"></component></span>
      </a>
    </div>

    <div class="summary">
      <p>
        Well-rounded software engineer with {{ yearsOfExperience }} years of experience in build,
        deployment, scale, and maintenance of reliable software systems.
      </p>
    </div>
  </header>
</template>

<style scoped lang="scss">
$size-lg: 1024px;
$size-md: 800px;
$size-sm: 540px;
$size-xs: 500px;
header {
  display: grid;
  grid-template-areas: 'avatar name contacts social' 'avatar summary summary summary';
  grid-template-rows: auto 1fr;
  grid-template-columns: auto auto 1fr;
  margin: 0 0 1.5rem;
  @media (max-width: $size-lg) {
    grid-template-areas: 'avatar name contacts contacts' 'avatar summary summary social';
    grid-template-rows: auto 1fr;
    grid-template-columns: auto auto 1fr auto;
  }
  @media (max-width: $size-md) {
    grid-template-areas: 'avatar name social' 'avatar contacts contacts' 'avatar summary summary';
    grid-template-rows: auto auto 1fr;
    grid-template-columns: auto auto 1fr;
    margin: 0 0 1rem;
  }
  @media (max-width: $size-sm) {
    grid-template-areas: 'avatar name' 'avatar contacts' 'avatar social' 'summary summary';
    grid-template-rows: auto auto auto 1fr;
    grid-template-columns: auto 1fr;
    margin: 0 0 0.5rem;
  }
  @media (max-width: $size-xs) {
    grid-template-areas: 'avatar name' 'avatar social' 'contacts contacts' 'summary summary';
    grid-template-rows: auto auto auto 1fr;
    grid-template-columns: auto 1fr;
    margin: 0 0 0.5rem;
  }
  @media print {
    margin-bottom: 0.5rem;
  }
}

.avatar-wrapper {
  grid-area: avatar;
  margin-inline-end: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  align-self: start;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    // box-shadow: inset 0 0 0 3px rgb(0 0 0 / 3%);
    border-radius: 4px;
  }
  .avatar {
    display: block;
    border-radius: 4px;
    position: relative;
    @media (max-width: $size-md) {
      width: 64px;
      height: 64px;
    }
  }
}

.social-media,
.contact-info {
  display: flex;
  justify-self: end;
  align-items: center;
  gap: 0.5rem;

  > a {
    flex: 0 0 auto;
    display: inline-flex;
    justify-content: center;
    align-content: center;
    color: var(--text-3);
    line-height: 20px;

    > span:first-child {
      width: 18px;
      height: 18px;
      font-size: 20px;
    }
  }
}
.social-media {
  grid-area: social;
  gap: 0.6rem;
  @media (min-width: ($size-lg + 1px)) {
    margin-inline-start: 0.5rem;
  }
  @media (max-width: $size-lg) {
    margin-inline-start: 1rem;
    align-self: start;
    margin-top: 0.5rem;
    flex-wrap: wrap;
  }
  @media (max-width: $size-md) {
    margin-inline-start: 0;
  }
  @media (max-width: $size-sm) {
    justify-self: start;
  }
}
.contact-info {
  grid-area: contacts;
  @media (max-width: $size-md) {
    justify-self: start;
    margin-top: 0.25rem;
  }
  @media (max-width: $size-sm) {
    flex-wrap: wrap;
  }
  > a {
    > span:last-child {
      margin-inline-start: 0.3rem;
    }
  }
}

.material-symbols-outlined {
  font-variation-settings: 'FILL' 1, 'wght' 500, 'GRAD' 0, 'opsz' 48;
}

.summary {
  grid-area: summary;
  margin-top: 0.25rem;
}

.resume-name {
  font-family: var(--font-title);
  align-self: center;
  font-weight: bold;
  font-size: 1.5rem;
  white-space: nowrap;
  line-height: 1.25rem;
  margin-top: 0.25rem;
  margin-inline-end: 1rem;
  @media (max-width: $size-md) {
    font-size: 1.25rem;
  }
}
</style>
