<template>
  <div class="about-container" ref="aboutContainer">
    <img
      class="pastel-saturn-image animate-element slide-in-left"
      alt="Pastel Saturn Image"
      src="pastel-saturn.png"
      ref="saturnImage"
    />

    <section class="profile-section">
      <div class="content">
        <div class="profile" ref="profileSection">
          <h1 class="profile-head animate-element fade-in">PROFILE</h1>
          <hr class="animate-element fade-in-up" />
          <p class="introduction animate-element fade-in-up">
            With five years of HR experience at multinational companies and managing my own clothing
            brand, I've transitioned into software development. I use my business and
            problem-solving skills to build intuitive applications.
          </p>

          <div class="education">
            <div
              v-for="(item, index) in educationItems"
              :key="index"
              class="education-item animate-element slide-in-right"
              :style="{ animationDelay: `${index * 0.5}s` }"
            >
              <p class="year">{{ item.year }}</p>
              <p class="title">{{ item.title }}</p>
              <p class="school">{{ item.school }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="skills-section">
      <div class="content" ref="skillsSection">
        <h1 class="animate-element fade-in">SKILLS</h1>
        <hr class="animate-element slide-in" />
        <div class="animate-element fade-in-up">
          <TechStackIcons />
        </div>
      </div>
    </section>
    <div class="go-to-projects-container">
      <h2 class="animate-element fade-in">Would you like to explore my projects?</h2>
      <div class="projects-button animate-element fade-in-up">
        <a href="#projects-section" class="go-to-projects-section">PROJECTS</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import TechStackIcons from '@/components/TechStackIcons.vue';

const aboutContainer = ref(null);
const saturnImage = ref(null);
const profileSection = ref(null);
const skillsSection = ref(null);

const educationItems = ref([
  {
    year: '2010 - 2013',
    title: 'Bachelor of Arts in Psychology',
    school: 'Silpakorn University',
  },
  {
    year: '2024 - 2025',
    title: 'Fullstack Software Development',
    school: 'TechUp Bootcamp',
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
  if (aboutContainer.value) observer.observe(aboutContainer.value);
  if (profileSection.value) observer.observe(profileSection.value);
  if (skillsSection.value) observer.observe(skillsSection.value);
});
</script>

<style scoped>
.about-container {
  position: relative;
  z-index: 2;
  font-family: 'Raleway', sans-serif;
  position: relative;
  width: 100%;
  background: white;
  overflow: hidden;
  background: linear-gradient(180deg, rgb(246, 206, 218), rgb(174, 193, 227));
  user-select: none;
}

.pastel-saturn-image {
  position: absolute;
  pointer-events: none;
  user-select: none;
  z-index: 1;
  top: 0%;
  right: 0%;
  width: 600px;
  opacity: 0.2;
}

.profile-section,
.skills-section {
  position: relative;
  z-index: 3;
}

.profile-section {
  display: flex;
  align-items: start;
  justify-content: center;
}

.content {
  width: 100%;
}

.profile h1 {
  font-weight: 700;
  font-size: 2rem;
  color: white;
  margin-bottom: 15px;
  text-align: start;
  margin-top: 100px;
  margin-left: 16px;
  margin-right: 16px;
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

.skills-section h1 {
  font-weight: 700;
  font-size: 2rem;
  color: white;
  margin-bottom: 15px;
  text-align: start;
  margin-top: 30px;
  margin-left: 16px;
  margin-right: 16px;
}

p {
  font-weight: 500;
  line-height: 2;
  font-size: 1.15rem;
  color: white;
  text-align: start;
}

.introduction {
  margin-top: 30px;
  margin-left: 16px;
  margin-right: 16px;
}

.fade-in-up {
  transform: translateY(50px);
}

.education {
  margin-top: 20px;
}

.education-item {
  border-left: 3px solid rgb(183, 133, 201);
  padding-left: 10px;
  margin-bottom: 20px;
  margin-left: 16px;
  margin-right: 16px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1);
}

.year {
  font-family: 'Arial', sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
  color: rgb(183, 133, 201);
}

.title {
  font-weight: 700;
  font-size: 0.9rem;
  color: rgb(130, 127, 127);
}

.school {
  font-weight: 400;
  font-size: 0.9rem;
  color: rgb(130, 127, 127);
}

.year {
  padding-top: 5px;
}

.school {
  padding-bottom: 5px;
}

.slide-in-right {
  transform: translateX(100px);
}

.slide-in-right.visible {
  transform: translateX(0);
}

.skills-section {
  display: flex;
  align-items: start;
  justify-content: center;
}

.skills-list {
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
}

hr {
  border: none;
  height: 3px;
  background-color: white;
  margin: 10px 16px;
}

.slide-in {
  transform: translateX(-40px);
}

.slide-in.visible {
  transform: translateX(0);
}

.go-to-projects-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.projects-button {
  user-select: none;
  border: 2px solid white;
  background: transparent;
  color: white;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 30vh;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
}

.projects-button:hover {
  background: white;
  color: rgb(183, 133, 201);
}

.projects-button a {
  text-decoration: none;
  color: inherit;
}

h2 {
  font-size: 1.1rem;
  margin-top: 20px;
  margin-bottom: 30px;
  color: white;
  justify-content: center;
  align-items: center;
  text-align: center;
}

@media screen and (min-width: 768px) {
  .pastel-saturn-image {
    top: 0%;
    left: -20%;
    width: 800px;
    opacity: 0.7;
  }

  .slide-in-left {
    transform: translateX(-100px);
    opacity: 0; /* Start with invisible */
    transition:
      opacity 0.8s ease,
      transform 0.8s ease;
  }

  .slide-in-left.visible {
    transform: translateX(0);
    opacity: 1; /* Make it fully visible */
  }

  .profile {
    margin-top: 10%;
  }

  .profile h1 {
    font-weight: 700;
    font-size: 3rem;
    margin-bottom: 15px;
    text-align: start;
    margin-top: 10%;
    margin-left: 35%;
    margin-right: 10%;
  }

  hr {
    margin-left: 35%;
    margin-right: 10%;
  }

  p {
    font-size: 1.5rem;
    color: white;
  }

  .education-item {
    margin-left: 35%;
    margin-right: 10%;
  }

  .introduction {
    margin-top: 25px;
    margin-left: 35%;
    margin-right: 10%;
    font-size: 1.45rem;
  }

  .year,
  .title,
  .school {
    font-size: 1.15rem;
    margin-left: 10px;
  }

  .year {
    padding-top: 10px;
  }

  .school {
    padding-bottom: 10px;
  }

  .education-item {
    margin-bottom: 25px;
  }

  .skills-section h1 {
    font-weight: 700;
    font-size: 3rem;
    text-align: start;
    margin-left: 10%;
    margin-right: 10%;
    margin-top: 8%;
  }

  .skills-section hr {
    margin-left: 10%;
    margin-right: 10%;
  }

  .skills-section {
    margin-bottom: 5%;
  }
  .skills-list {
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 300px 20px 300px;
    gap: 30px 70px;
  }

  .projects-button {
    font-size: 1rem;
  }

  h2 {
    font-size: 2rem;
    margin-top: 40px;
    margin-bottom: 50px;
  }
}
</style>
