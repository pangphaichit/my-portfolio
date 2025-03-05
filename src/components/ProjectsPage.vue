<template>
  <div class="projects-container">
    <div class="projects-card">
      <ProjectCard v-for="project in projects" :key="project.name" v-bind="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import petSitterImage from '@/assets/projects/petsitter.png';
import personalBlogImage from '@/assets/projects/personal-blog.png';
import touristAttractionFinderImage from '@/assets/projects/tourist-attraction-finder.png';
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
    name: 'Personal Blog',
    details: 'A responsive personal blog for cat lovers.',
    image: personalBlogImage,
    workType: 'Frontend Development',
    features: ['Responsive design', 'Text-based search for blog content', 'Social media sharing'],
    techStack: ['JavaScript', 'Node.js', 'React.js', 'Tailwind CSS'],
    vercelLink: 'https://personal-blog-pangphaichit.vercel.app/',
    githubLink: 'https://github.com/pangphaichit/personal-blog-pangphaichit',
  },
  {
    name: 'Tourist Attraction Finder',
    details: 'A responsive tourist attraction search feature.',
    image: touristAttractionFinderImage,
    workType: 'Frontend Development',
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
  position: relative;
  width: 100%;
  overflow: hidden;
}

.projects-card {
  display: flex;
  width: 100%;
  flex-direction: column;
}

@media screen and (min-width: 768px) {
  .projects-card {
    flex-direction: row;
  }
}
</style>
