<template>
  <div class="main-container">
    <div v-if="loading" class="loading-container" :class="{ 'fade-out': !loading }">
      <div class="pyramid-loader">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>
      </div>
    </div>
    <div v-show="!loading" class="homepage-container" :class="{ 'fade-in': !loading }">
      <NavBar />
      <div class="content">
        <div class="greeting-text">
          <h1>Bringing ideas to life.</h1>
          <p>In a universe where creativity knows no bounds,</p>
          <p>
            I turn concepts into real-world solutions. With a focus on user experience and business
            needs, my portfolio showcases the limitless potential of thoughtful innovation.
          </p>
          <button class="about-button" @click="goToAboutPage">About Me</button>
        </div>
        <img class="saturn-image" alt="Saturn Image" src="saturn.png" />
        <img class="sphere-pastel" alt="Sphere Pastel Image" src="sphere-pastel.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/components/NavBar.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    NavBar,
  },
  setup() {
    const loading = ref(true);
    const router = useRouter();

    const goToAboutPage = () => {
      router.push('/about');
    };

    onMounted(() => {
      setTimeout(() => {
        loading.value = false;
      }, 1500);
    });

    return { loading, goToAboutPage };
  },
});
</script>

<style scoped>
.main-container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

.homepage-container {
  position: relative;
  font-family: 'Raleway', sans-serif;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: rgb(255, 245, 254);
  background: linear-gradient(180deg, rgb(174, 193, 227), rgb(246, 206, 218));
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.homepage-container.fade-in {
  opacity: 1;
}

.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
}

.greeting-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  left: 35%;
  top: 55%;
  transform: translate(-50%, -50%);
}

h1,
p {
  margin: 0;
  color: rgb(255, 255, 255);
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
h1 {
  font-weight: 700;
  font-size: 4rem;
  margin-bottom: 15px;
  animation: fadeInDown 3s ease-out;
  opacity: 1;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

p {
  font-weight: 400;
  word-wrap: break-word;
  word-break: break-word;
  line-height: 1.5;
  max-width: 48%;
  font-size: 1.25rem;
  animation: fadeIn 4s ease-out;
  opacity: 1;
}

.about-button {
  border: 2px solid white;
  background: transparent;
  color: white;
  font-size: 1.2rem;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  width: 200px;
  height: 50px;
  border-radius: 8px;
  margin-top: 25px;
  animation: fadeIn 2s ease-out;
  opacity: 1;
}

.about-button:hover {
  background: white;
  color: rgb(174, 193, 227);
}

@keyframes fadeInFromRight {
  0% {
    opacity: 0;
    transform: translateX(10%) rotate(-10deg);
  }
  100% {
    opacity: 1;
    transform: translateX(0) rotate(-10deg);
  }
}

.sphere-pastel {
  position: absolute;
  top: 8%;
  left: 5%;
  width: 120px;
  transform: rotate(5deg);
  animation: fadeIn 2s ease-out;
}

.saturn-image {
  position: absolute;
  top: 25%;
  right: 5%;
  width: 750px;
  transform: rotate(-10deg);
  opacity: 0;
}

.homepage-container.fade-in .saturn-image {
  animation: fadeInFromRight 2s ease-out 0.5s forwards;
}

/* pyramid-loader */

.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, rgb(168, 178, 189), #ffffff);
  z-index: 9999;
  transition: opacity 1s ease-in-out;
}

.loading-container.fade-out {
  opacity: 0;
}

.pyramid-loader {
  position: relative;
  width: 300px;
  height: 300px;
  display: block;
  transform-style: preserve-3d;
  transform: rotateX(-20deg);
}

.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: spin 4s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotateY(360deg);
  }
}

.pyramid-loader .wrapper .side {
  width: 70px;
  height: 70px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform-origin: center top;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
}

.pyramid-loader .wrapper .side1 {
  transform: rotateZ(-30deg) rotateY(90deg);
  background: conic-gradient(#ffe5e5, #e5ffe5, #e5e5ff, #ffe5ff);
}

.pyramid-loader .wrapper .side2 {
  transform: rotateZ(30deg) rotateY(90deg);
  background: conic-gradient(#ffe5ff, #e5e5ff, #e5ffe5, #ffe5e5);
}

.pyramid-loader .wrapper .side3 {
  transform: rotateX(30deg);
  background: conic-gradient(#e5ffe5, #e5e5ff, #ffe5ff, #ffe5e5);
}

.pyramid-loader .wrapper .side4 {
  transform: rotateX(-30deg);
  background: conic-gradient(#e5e5ff, #ffe5ff, #ffe5e5, #e5ffe5);
}

.pyramid-loader .wrapper .shadow {
  width: 60px;
  height: 60px;
  background: rgba(252, 230, 243, 0.98);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  transform: rotateX(90deg) translateZ(-40px);
  filter: blur(12px);
}
</style>
