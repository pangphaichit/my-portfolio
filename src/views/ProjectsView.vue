<template>
  <div class="home">
    <ProjectsPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProjectsPage from '@/components/ProjectsPage.vue';

export default defineComponent({
  name: 'ProjectsView',
  components: {
    ProjectsPage,
  },
});
</script>

<style scoped></style>
