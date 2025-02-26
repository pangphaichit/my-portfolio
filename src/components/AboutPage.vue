<template>
  <div class="about-container">
    <img class="pastel-saturn-image" alt="Pastel Saturn Image" src="pastel-saturn.png" />

    <section class="profile-section">
      <div class="content">
        <div class="profile">
          <h1>Profile</h1>
          <p>
            With five years of HR experience at multinational companies and managing my own clothing
            brand, I've transitioned into software development. I use my business and
            problem-solving skills to build intuitive applications.
          </p>

          <div class="education">
            <p v-for="(item, index) in educationItems" :key="index">
              {{ item.year }} - {{ item.title }}, {{ item.school }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="content">
        <h1>Skills</h1>
        <ul class="skills-list">
          <li v-for="(tech, index) in techStack" :key="index" class="tech-item">
            {{ tech }}
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const techStack = ref([
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'CSS3',
  'HTML5',
  'Node.js',
  'Express.js',
  'MongoDB',
  'PostgreSQL',
  'Supabase',
  'Git',
]);

const educationItems = ref([
  {
    year: '2010-2013',
    title: 'Bachelor of Arts in Psychology',
    school: 'Silpakorn University',
  },
  {
    year: '2024-2025',
    title: 'Fullstack Software Development',
    school: 'TechUp Bootcamp',
  },
]);
</script>

<style scoped>
.about-container {
  font-family: 'Raleway', sans-serif;
  position: relative;
  width: 100%;
  height: 200vh;
  background: white;
}

.pastel-saturn-image {
  display: none;
  pointer-events: none;
  user-select: none;
  position: absolute;
  z-index: 1;
  top: 5%;
  left: -10%;
  width: 600px;
}

.profile-section {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  width: 100%;
}

.profile {
  margin: 20px;
}

h1 {
  font-weight: 700;
  font-size: 4rem;
  color: rgb(183, 133, 201);
  margin-bottom: 15px;
}

p {
  font-weight: 400;
  line-height: 2;
  font-size: 1.25rem;
  color: rgb(183, 133, 201);
  margin-bottom: 15px;
}

.skills-section {
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
}

.skills-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  padding: 50px 70px;
}

.tech-item {
  font-family: 'Raleway', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  border-radius: 10px;
  padding: 10px;
  color: rgb(172, 91, 248);
  border: 2px solid rgb(206, 206, 206);
  background-color: white;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tech-item:hover {
  background: linear-gradient(125deg, rgba(174, 193, 227, 0.8), rgba(246, 206, 218, 0.8));
  color: white;
  border: none;
}

@media screen and (min-width: 768px) {
  .pastel-saturn-image {
    display: block;
  }

  .content {
    padding: 0 2rem;
  }

  .profile {
    margin-left: 30%;
    margin-right: 10%;
  }

  .skills-section {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .skills-list {
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 300px 20px 300px;
    gap: 30px 70px;
  }

  .tech-item {
    font-size: 1rem;
  }
}
</style>
