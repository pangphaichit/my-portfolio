<template>
  <div class="project-container"><NavBar /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'ProjectsPage',
  components: {
    NavBar,
  },
});
</script>

<style scoped>
.project-container {
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(255, 245, 254);
  background: linear-gradient(180deg, rgb(174, 193, 227), rgb(246, 206, 218));
}
</style>
