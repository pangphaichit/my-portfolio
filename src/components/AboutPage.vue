<template>
  <div class="about-container">
    <NavBar />

    <div class="profile-container">
      <div class="date-time-container">
        <span class="vertical-text-date">{{ formattedDate }}</span>
        <span class="vertical-text-time">{{ formattedTime }}</span>
      </div>

      <h1 class="about-heading" v-if="profileInfo === 'Greeting'">Greeting</h1>
      <h1 class="about-heading" v-if="profileInfo === 'Experience'">EXPERIENCE</h1>
      <h1 class="about-heading" v-if="profileInfo === 'Education'">EDUCATION</h1>
      <h1 class="about-heading" v-if="profileInfo === 'Skills'">SKILLS</h1>

      <div class="profile-content">
        <div v-if="profileInfo === 'Greeting'" class="greeting-container">
          <p
            v-for="(line, index) in lines"
            :key="index"
            :class="['typing-line', { 'emphasis-line': index === 1 || index === 2 }]"
          >
            <span class="typed-text">{{ typedText[index] }}</span>
            <span class="cursor" :class="{ typing: isTyping[index] }"></span>
          </p>
          <div v-if="isGreetingComplete" class="arrow-down">
            <img class="arrow-down-icon" alt="Arrow Down" src="arrow-down.svg" width="70" />
          </div>
        </div>

        <div v-if="profileInfo === 'Education'" class="education-container">
          <div class="timeline">
            <div class="timeline-line"></div>
            <div v-for="(item, index) in educationItems" :key="index" class="timeline-item">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <div class="timeline-year">{{ item.year }}</div>
                <h3 class="timeline-title">{{ item.title }}</h3>
                <h3 class="timeline-school">{{ item.school }}</h3>
              </div>
            </div>
          </div>
        </div>
        <div v-if="profileInfo === 'Skills'" class="tech-stack-list-container">
          <ul v-for="(tech, index) in techStack" :key="index" class="tech-item">
            <Li>{{ tech }}</Li>
          </ul>
        </div>
        <div v-if="profileInfo === 'Experience'" class="experience-container">
          <p>
            With five years of HR experience at multinational companies and managing my own clothing
            brand, I’ve transitioned into software development. I use my business and
            problem-solving skills to build intuitive applications. <br /><br />
            Check out my projects below.
          </p>
          <button type="button" class="floating-element-button" @click="goToProjectsPage">
            <projects>PROJECTS</projects>
            <div id="container-stars">
              <div id="stars"></div>
            </div>

            <div id="glow">
              <div class="circle-element"></div>
              <div class="circle-element"></div>
            </div>
          </button>
        </div>
      </div>

      <div class="button-group">
        <button
          @click="updateProfile('Education')"
          :class="{ active: profileInfo === 'Education' }"
          class="bottom-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="button-group-icons"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="
    M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904
    a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347
    m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493
    a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814
    m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342
    M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5
    Z
  "
            />
          </svg>

          <span class="group-button-text">Education</span>
        </button>
        <button
          @click="updateProfile('Skills')"
          :class="{ active: profileInfo === 'Skills' }"
          class="bottom-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="button-group-icons"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="
    M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25
    m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25
    m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25
    m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25
  "
            />
          </svg>

          <span class="group-button-text">Skills</span>
        </button>
        <button
          @click="updateProfile('Experience')"
          :class="{ active: profileInfo === 'Experience' }"
          class="bottom-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="button-group-icons"
            width="20"
            height="20"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="
    M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0
    A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>

          <span class="group-button-text">Experience</span>
        </button>
      </div>
      <div class="circle">
        <button
          class="button"
          @click="updateProfile('Greeting')"
          :class="{ active: profileInfo === 'Greeting' }"
        >
          <p class="button__text">
            <span style="--index: 0">S</span>
            <span style="--index: 1">O</span>
            <span style="--index: 2">F</span>
            <span style="--index: 3">T</span>
            <span style="--index: 4">W</span>
            <span style="--index: 5">A</span>
            <span style="--index: 6">R</span>
            <span style="--index: 7">E</span>
            <span style="--index: 8"> </span>
            <span style="--index: 9">D</span>
            <span style="--index: 10">E</span>
            <span style="--index: 11">V</span>
            <span style="--index: 12">E</span>
            <span style="--index: 13">L</span>
            <span style="--index: 14">O</span>
            <span style="--index: 15">P</span>
            <span style="--index: 16">E</span>
            <span style="--index: 17">R</span>
          </p>

          <div class="button__circle" :class="{ 'button__circle--desktop': isDesktop }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              :stroke-width="isDesktop ? 1.5 : 2"
              stroke="currentColor"
              :class="['button__icon', { 'button__icon--desktop': isDesktop }]"
              :style="{ width: iconSize, height: iconSize }"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'AboutPage',
  components: {
    NavBar,
  },
  setup() {
    const router = useRouter();
    const formattedDate = ref('');
    const formattedTime = ref('');

    const updateDateTime = () => {
      const now = new Date();
      formattedDate.value = now.toLocaleDateString();
      formattedTime.value = now.toLocaleTimeString();
    };

    onMounted(() => {
      updateDateTime();
      setInterval(updateDateTime, 1000);
    });

    const goToProjectsPage = () => {
      router.push('/projects');
    };

    return { goToProjectsPage, formattedDate, formattedTime };
  },
  data() {
    return {
      profileInfo: 'Greeting',
      lines: [
        'Hi, I am Phaichit P.',
        'a Junior Software Developer.',
        'What would you like to know more about me?',
      ],
      typedText: ['', '', ''],
      isTyping: [true, false, false],
      currentLine: 0,
      isDesktop: false,
      isGreetingComplete: false,
      techStack: [
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
      ],
      educationItems: [
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
      ],
    };
  },
  computed: {
    iconSize(): string {
      return this.isDesktop ? '40px' : '25px';
    },
  },
  methods: {
    updateProfile(info: string) {
      this.profileInfo = info;
      if (info === 'Greeting') {
        this.resetTyping();
      }
    },
    checkScreenSize() {
      this.isDesktop = window.innerWidth >= 768;
    },
    typeText() {
      if (this.currentLine < this.lines.length) {
        const line = this.lines[this.currentLine];
        const typedLine = this.typedText[this.currentLine];

        if (typedLine.length < line.length) {
          this.typedText[this.currentLine] += line[typedLine.length];
          setTimeout(this.typeText, 50);
        } else {
          this.isTyping[this.currentLine] = false;
          this.currentLine += 1;
          if (this.currentLine < this.lines.length) {
            this.isTyping[this.currentLine] = true;
            setTimeout(this.typeText, 500);
          } else {
            this.isGreetingComplete = true;
          }
        }
      }
    },
    resetTyping() {
      this.typedText = Array(this.lines.length).fill('');
      this.isTyping = Array(this.lines.length).fill(false);
      this.isTyping[0] = true;
      this.currentLine = 0;
      this.isGreetingComplete = false;
      this.typeText();
    },
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
    this.typeText();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
});
</script>

<style scoped>
.about-container {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, rgb(174, 193, 227), rgb(246, 206, 218));
}

.date-time-container {
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  top: 17%;
  left: 5%;
}

.vertical-text-date,
.vertical-text-time {
  display: none;
  font-family: 'Orbitron', sans-serif;
  writing-mode: vertical-lr;
  text-orientation: mixed;
  font-size: 1.5rem;
  color: rgba(250, 250, 250, 0.8);
  font-weight: 500;
  padding-top: 15px;
  border-radius: 10px;
  transform: rotate(180deg);
}

.vertical-text-time {
  height: 50px;
  padding-bottom: 80px;
}

.profile-container {
  position: relative;
  flex-grow: 1;
  background-color: rgba(255, 255, 255, 0.5);
  border: 2px solid rgb(255, 255, 255);
  border-radius: 60px 60px 30px 30px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 25px;
  margin: 30px;
  overflow-y: auto;
  z-index: 20;
  display: flex;
  flex-direction: column;
  user-select: none;
}

.about-heading {
  font-family: 'Doto', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  margin-top: 40px;
  color: rgb(174, 193, 227);
}

.profile-content {
  font-family: 'Doto', sans-serif;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  overflow-x: hidden;
  padding-bottom: 40px;
}

.profile-content p {
  font-size: 0.8rem;
}

.profile-content > div {
  width: 100%;
  text-align: center;
}

.typing-line {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.emphasis-line {
  margin-top: 40px;
}

.typed-text {
  display: inline-block;
}

.arrow-down {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }

  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
}

.experience-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.timeline {
  position: relative;
  max-width: 350px;
  margin: 0 auto;
  padding: 1rem;
}

.timeline-line {
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: rgb(191, 219, 254);
  transform: translateX(-50%);
}

.timeline-item {
  position: relative;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}

.timeline-item:hover {
  cursor: pointer;
  transform: scale(1.05);
}

.timeline-dot {
  position: absolute;
  display: none;
  left: 50%;
  width: 1rem;
  height: 1rem;
  background-color: rgb(168, 85, 247);
  border-radius: 50%;
  transform: translate(-50%, 50%);
}

.timeline-content {
  background-color: white;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
}

.timeline-year {
  font-weight: bold;
  font-size: 0.9em;
  color: rgb(147, 51, 234);
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
  color: rgb(75, 85, 99);
}

.timeline-school {
  font-size: 0.9rem;
  font-weight: 400;
}

.tech-stack-list-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
  padding: 25px 10px 10px 10px;
}

.tech-item {
  font-family: 'Raleway', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  list-style-type: none;
  border-radius: 10px;
  padding: 10px;
  color: rgb(172, 91, 248);
  background-color: white;
  text-align: center;
  cursor: pointer;
}

.tech-item:hover {
  background: linear-gradient(125deg, rgba(174, 193, 227, 0.8), rgba(246, 206, 218, 0.8));
  color: white;
}

.experience-container {
  line-height: 20px;
}

.floating-element-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  overflow: hidden;
  height: 45px;
  background-size: 300% 300%;
  cursor: pointer;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
  transition: 0.5s;
  animation: gradient_301 5s ease infinite;
  border: double 4px transparent;
  background-image: white,
    linear-gradient(137.48deg, #ffdd55 10%, #ff66aa 45%, #788dff 67%, #5598ff 87%);
  background-origin: border-box;
  background-clip: content-box, border-box;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.1);
}

#container-stars {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  transition: 0.5s;
  backdrop-filter: blur(1rem);
  border-radius: 5rem;
}

projects {
  z-index: 2;
  font-family: 'Raleway', sans-serif;
  font-size: 0.7rem;
  letter-spacing: 5px;
  color: #ffffff;
  text-shadow: 0 0 4px white;
}

#glow {
  position: absolute;
  display: flex;
  width: 12rem;
}

.circle-element {
  width: 100%;
  height: 30px;
  filter: blur(2rem);
  animation: pulse_3011 4s infinite;
  z-index: -1;
}

.circle-element:nth-of-type(1) {
  background: rgba(254, 83, 186, 0.636);
}

.circle-element:nth-of-type(2) {
  background: rgba(142, 81, 234, 0.704);
}

.floating-element-button:hover #container-stars {
  z-index: 1;
  background-color: rgba(252, 182, 203, 0.6);
}

.floating-element-button:active {
  border: double 4px #fe53bb;
  background-origin: border-box;
  background-clip: content-box, border-box;
  animation: none;
}

.floating-element-button:active .circle-element {
  background: #fe53bb;
}

#stars {
  position: relative;
  background: transparent;
  width: 200rem;
  height: 200rem;
}

#stars::after {
  content: '';
  position: absolute;
  top: -10rem;
  left: -100rem;
  width: 100%;
  height: 100%;
  animation: animStarRotate 90s linear infinite;
}

#stars::after {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
}

#stars::before {
  content: '';
  position: absolute;
  top: 0;
  left: -50%;
  width: 170%;
  height: 500%;
  animation: animStar 60s linear infinite;
}

#stars::before {
  background-image: radial-gradient(#ffffff 1px, transparent 1%);
  background-size: 50px 50px;
  opacity: 0.5;
}

@keyframes animStar {
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(-135rem);
  }
}

@keyframes animStarRotate {
  from {
    transform: rotate(360deg);
  }

  to {
    transform: rotate(0);
  }
}

@keyframes gradient_301 {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}

@keyframes pulse_3011 {
  0% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    transform: scale(0.75);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.circle {
  position: absolute;
  top: 5%;
  right: 8%;
}

.button {
  cursor: pointer;
  border: none;
  color: #fff;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  display: grid;
  place-content: center;
  transition:
    background 300ms,
    transform 200ms;
  font-weight: 400;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  background: rgb(255, 245, 254);
  background: radial-gradient(
    circle,
    rgba(255, 245, 254, 1) 3%,
    rgba(174, 193, 227, 1) 49%,
    rgba(249, 241, 252, 1) 100%
  );
}

.button__text {
  font-size: 10px;
  position: absolute;
  inset: 0;
  animation: text-rotation 8s linear infinite;
}

.button__text > span {
  position: absolute;
  transform: rotate(calc(19deg * var(--index)));
  inset: 7px;
}

.button__circle {
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  background: #fff;
  color: rgb(216, 216, 216);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.button__circle--desktop {
  width: 50%;
  height: 50%;
}

.button__icon {
  transition: all 0.3s ease;
  width: 50%;
  height: 50%;
}

.button__icon--desktop {
  stroke-width: 1.5;
  width: 60%;
  height: 60%;
}

.button__icon--copy {
  position: absolute;
  transform: translate(-150%, 150%);
}

.button:hover {
  background: rgb(255, 245, 254);
  background: radial-gradient(
    circle,
    rgba(255, 245, 254, 1) 3%,
    rgba(246, 206, 218, 1) 49%,
    rgba(249, 241, 252, 1) 100%
  );
}

.button.active {
  background: rgb(255, 245, 254);
  background: radial-gradient(
    circle,
    rgba(255, 245, 254, 1) 3%,
    rgba(174, 193, 227, 1) 49%,
    rgba(249, 241, 252, 1) 100%
  );
  cursor: default;
}

.button.active .button__icon {
  color: rgb(246, 206, 218);
}

@keyframes text-rotation {
  to {
    rotate: 360deg;
  }
}

.button-group {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  gap: 25px;
  padding: 10px;
  background: rgb(255, 245, 254);
  width: 100%;
}

.group-button-text {
  margin: 4px 0px 0px 0px;
  font-size: 0.6rem;
}

.bottom-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  width: 62px;
  height: 62px;
  cursor: pointer;
  transition: all 300ms;
  border: none;
}

.bottom-button .button-group-icons {
  stroke: rgb(189, 188, 188);
  transition: all 300ms;
}

.bottom-button .group-button-text {
  color: rgb(189, 188, 188);
  transition: all 300ms;
}

.bottom-button:hover {
  background-color: rgba(252, 182, 203, 0.8);
  box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.5);
}

.bottom-button.active {
  cursor: default;
  background-color: rgba(174, 193, 227, 0.8);
  box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.5);
}

.bottom-button:hover .button-group-icons {
  stroke: rgb(255, 255, 255);
}

.bottom-button.active .button-group-icons {
  stroke: rgb(255, 255, 255);
}

.bottom-button:hover .group-button-text {
  color: rgb(255, 255, 255);
}

.bottom-button.active .group-button-text {
  color: rgb(255, 255, 255);
}

@media screen and (min-width: 768px) {
  .about-heading {
    text-align: center;
    font-size: 3.5rem;
    margin-top: 10px;
  }

  .vertical-text-date,
  .vertical-text-time {
    display: block;
    top: 10%;
  }

  .profile-content p {
    font-size: 1.25rem;
  }

  .tech-stack-list-container {
    grid-template-columns: repeat(3, 1fr);
    padding: 30px 150px 20px 150px;
  }

  .tech-item {
    font-size: 1rem;
  }

  .circle {
    right: 5%;
    top: 5%;
  }

  .profile-container {
    border-radius: 90px;
    margin: 40px auto;
    padding: 40px;
    width: 950px;
  }

  .button {
    width: 150px;
    height: 150px;
  }

  .circle {
    top: 7%;
  }

  .button__circle {
    width: 80px;
    height: 80px;
  }
  .button__text {
    font-size: 0.75rem;
    margin: 3px;
  }

  .button-group {
    padding: 20px;
    gap: 100px;
  }

  .timeline-item {
    padding-left: 0;
    padding-right: calc(50% + 1rem);
  }

  .timeline {
    max-width: 550px;
  }

  .timeline-year {
    font-size: 1rem;
  }

  .timeline-title {
    font-size: 1rem;
  }

  .timeline-school {
    font-size: 1rem;
  }

  .timeline-item:nth-child(even) {
    padding-left: calc(50% + 1rem);
    padding-right: 0;
  }

  .timeline-dot {
    display: block;
  }

  .experience-container p {
    padding: 0px 100px 0px 100px;
    font-size: 1rem;
  }

  .floating-element-button {
    width: 280px;
    height: 50px;
  }

  projects {
    font-size: 0.8rem;
    letter-spacing: 8px;
  }
}
</style>
