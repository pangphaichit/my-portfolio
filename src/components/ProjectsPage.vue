<template>
  <div class="projects-container" ref="projectContainer">
    <div class="projects-card animate-element fade-in">
      <ProjectCard v-for="project in projects" :key="project.name" v-bind="project" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
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

const projectContainer = ref(null);

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
      'Text-based search for tourist attractions.',
      'URL copy for tourist attraction pages.',
      'Search by clicking on tags',
    ],
    techStack: ['JavaScript', 'Node.js', 'React.js', 'Tailwind CSS'],
    vercelLink: '',
    githubLink: 'https://github.com/pangphaichit/react-tourist-attraction-mini-project',
  },
]);

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  document.querySelectorAll('.animate-element').forEach((el) => {
    observer.observe(el);
  });
  if (projectContainer.value) observer.observe(projectContainer.value);
});
</script>

<style scoped>
.projects-container {
  display: flex;
  position: relative;
  width: 100%;
  overflow: hidden;
  background: linear-gradient(180deg, rgb(174, 193, 227), rgb(246, 206, 218));
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

.animate-element {
  opacity: 0;
  transform: translateY(20px);
  transition:
    opacity 2s ease,
    transform 2s ease;
}

.animate-element.visible {
  opacity: 1;
  transform: translateY(0);
}

.fade-in.visible {
  transform: translateY(0);
}

@media screen and (min-width: 768px) {
  .projects-card {
    margin-top: 8.5%;
    flex-direction: row;
    margin-left: 50px;
    margin-right: 50px;
    gap: 50px;
  }
}
</style>
