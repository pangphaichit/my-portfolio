<template>
  <div class="project-container">
    <NavBar />
    <div class="project-cards-container">
      <project-card
        v-for="(project, index) in projectsData"
        :key="index"
        :name="project.name"
        :details="project.details"
        :image="project.image"
        :work-type="project.workType"
        :features="project.features"
        :tech-stack="project.techStack"
        :vercel-link="project.vercelLink"
        :github-link="project.githubLink"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import ProjectCard from './ProjectCard.vue';

export default defineComponent({
  name: 'ProjectsPage',
  components: {
    NavBar,
    ProjectCard,
  },
  data() {
    return {
      projectsData: [
        {
          name: 'Project 1',
          details: 'A brief description of Project 1',
          image: '/placeholder.svg?height=150&width=350',
          workType: 'Full-stack Development',
          features: ['Feature 1', 'Feature 2', 'Feature 3'],
          techStack: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
          vercelLink: 'https://vercel.com',
          githubLink: 'https://github.com',
        },
        {
          name: 'Project 2',
          details: 'A brief description of Project 2',
          image: '/placeholder.svg?height=150&width=350',
          workType: 'Frontend Development',
          features: ['Feature A', 'Feature B', 'Feature C'],
          techStack: ['Vue.js', 'Vuex', 'SCSS'],
          vercelLink: 'https://vercel.com',
          githubLink: 'https://github.com',
        },
        {
          name: 'Project 2',
          details: 'A brief description of Project 2',
          image: '/placeholder.svg?height=150&width=350',
          workType: 'Frontend Development',
          features: ['Feature A', 'Feature B', 'Feature C'],
          techStack: ['Vue.js', 'Vuex', 'SCSS'],
          vercelLink: 'https://vercel.com',
          githubLink: 'https://github.com',
        },
      ],
    };
  },
});
</script>

<style scoped>
.project-container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgb(174, 193, 227), rgb(246, 206, 218));
  gap: 50px;
}

.project-cards-container {
  position: relative;
  display: flex;
  flex-direction: column;
  user-select: none;
  justify-content: center;
  align-items: center;
  padding-bottom: 30px;
}

@media screen and (min-width: 768px) {
  .project-cards-container {
    flex-direction: row;
  }
}
</style>
