<template>
  <div class="home">
    <AboutPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AboutPage from '@/components/AboutPage.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'AboutView',
  components: {
    AboutPage,
  },
});
</script>

<style scoped></style>
