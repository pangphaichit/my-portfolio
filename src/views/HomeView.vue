<template>
  <div class="home">
    <div class="navbar-sticky">
      <NavBar />
    </div>
    <section id="home-section">
      <HomePage />
    </section>
    <section id="about-section">
      <AboutPage />
    </section>
    <section id="projects-section">
      <ProjectsPage />
    </section>
    <section id="contact-section">
      <ContactPage />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from '@/components/NavBar.vue';
import HomePage from '@/components/HomePage.vue'; // @ is an alias to /src
import AboutPage from '@/components/AboutPage.vue';
import ProjectsPage from '@/components/ProjectsPage.vue';
import ContactPage from '@/components/ContactPage.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
    HomePage,
    AboutPage,
    ProjectsPage,
    ContactPage,
  },
});
</script>

<style scoped>
.home {
  background-color: rgb(174, 193, 227);
}
.navbar-sticky {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
</style>
