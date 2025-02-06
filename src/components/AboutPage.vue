<template>
  <div class="about-container">
    <NavBar />
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'AboutPage',
  components: {
    NavBar,
  },
});
</script>

<style scoped>
.about-container {
  position: relative;
  width: 100%;
  height: 100vh;
  font-family: 'Raleway', sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: repeating-radial-gradient(circle at 0 0, transparent 0, #e5e5f7 30px),
    repeating-linear-gradient(#ffb5b58a, #ffb8b8);
}
</style>
