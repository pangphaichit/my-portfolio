<template>
  <div class="projects-container">
    <div class="wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
        <path fill="#ffffff" d="M0,80 C360,160 1080,0 1440,80 V120 H0Z"></path>
      </svg>
    </div>
    <div class="projects-grid">
      <ProjectCard v-for="project in projects" :key="project.name" v-bind="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import petSitterImage from '@/assets/projects/petsitter.png';
import personalBlogImage from '@/assets/projects/personal-blog.png';
import ProjectCard from './ProjectCard.vue';

interface Project {
  name: string;
  details: string;
  image: string;
  workType: string;
  features: string[];
  techStack: string[];
  vercelLink: string;
  githubLink: string;
}

const projects = ref<Project[]>([
  {
    name: 'Pet Sitter',
    details:
      'A pet sitter platform for pet owners to find trustworthy sitters who can take care of their beloved pets.',
    image: petSitterImage,
    workType: 'Full-stack Development',
    features: ['User profiles', 'Booking system', 'Reviews and ratings'],
    techStack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
    vercelLink: 'https://vercel.com',
    githubLink: 'https://github.com',
  },
  {
    name: 'Personal Blog',
    details: 'A minimalist blog platform with a focus on content and readability.',
    image: personalBlogImage,
    workType: 'Frontend Development',
    features: ['Responsive design', 'Dark mode', 'RSS feed'],
    techStack: ['Vue.js', 'Vuex', 'SCSS'],
    vercelLink: 'https://vercel.com',
    githubLink: 'https://github.com',
  },
  {
    name: 'Tourist Attraction Finder',
    details:
      'An interactive map-based application to discover local attractions and create custom itineraries.',
    image: '/placeholder.svg?height=150&width=350',
    workType: 'Frontend Development',
    features: ['Interactive map', 'Customizable itineraries', 'User reviews'],
    techStack: ['Vue.js', 'Leaflet', 'Tailwind CSS'],
    vercelLink: 'https://vercel.com',
    githubLink: 'https://github.com',
  },
]);
</script>

<style scoped>
.projects-container {
  position: relative;
  width: 100%;
  min-height: 100vh;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 160px;
}

.wave {
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  line-height: 0;
  transform: rotate(180deg);
}

.wave svg {
  width: 100%;
  height: auto;
  display: block;
}

@media (min-width: 768px) {
  .projects-grid {
  }
}
</style>
