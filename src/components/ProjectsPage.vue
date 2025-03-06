<template>
  <div class="projects-container">
    <div class="projects-card">
      <ProjectCard v-for="project in projects" :key="project.name" v-bind="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
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
    name: 'PET SITTER',
    details:
      'A pet sitter platform connecting pet owners with trusted sitters. Users can search by name, rating, pet type, experience, and location, manage profiles, bookings, and chat. Pet owners can also become sitters and earn money!',
    image: '/assets/projects/petsitter.png',
    workType: 'Full-stack',
    features: [
      'Interactive map for searching pet sitters.',
      'Pet sitter info',
      'Pet owners profile',
      'Payout Management',
    ],
    techStack: [' TypeScript', 'Next.js', 'React.js', 'Tailwind CSS', 'MUI', 'Supabase'],
    vercelLink: 'https://pet-sitter-two.vercel.app/',
    githubLink: 'https://github.com/werapolJa/pet-sitter',
  },
  {
    name: 'PERSONAL BLOG',
    details:
      'A responsive personal blog designed for cat lovers. Visitors can search for content using text input or by category and share their favorite articles on social media.',
    image: '/assets/projects/personal-blog.png',
    workType: 'Frontend',
    features: ['Responsive design', 'Text-based search for blog content', 'Social media sharing'],
    techStack: ['JavaScript', 'Node.js', 'React.js', 'Tailwind CSS'],
    vercelLink: 'https://personal-blog-pangphaichit.vercel.app/',
    githubLink: 'https://github.com/pangphaichit/personal-blog-pangphaichit',
  },
  {
    name: 'TOURIST ATTRACTION FINDER',
    details:
      'A responsive tourist attraction search feature that allows users to search by text input, filter results by tag categories, and copy links to share attractions.',
    image: '/assets/projects/tourist-attraction-finder.png',
    workType: 'Frontend',
    features: [
      'Search feature.',
      'URL copy for tourist attraction pages',
      'Search by clicking tags',
    ],
    techStack: ['JavaScript', 'Node.js', 'React.js', 'Tailwind CSS'],
    vercelLink: 'https://vercel.com',
    githubLink: 'https://github.com/pangphaichit/react-tourist-attraction-mini-project',
  },
]);
</script>

<style scoped>
.projects-container {
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  background: rgb(174, 193, 227);
  user-select: none;
}

.projects-card {
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-top: 30%;
  margin-left: 16px;
  margin-right: 16px;
  gap: 16px;
}

@media screen and (min-width: 768px) {
  .projects-card {
    margin-top: 10%;
    flex-direction: row;
  }
}
</style>
