<template>
  <div class="project-card">
    <div class="card-inner">
      <div class="card-front">
        <div class="card-front-image">
          <img :src="image" alt="Project image" class="project-image" />
        </div>
        <div class="card-front-details">
          <h1 class="project-name">{{ name }}</h1>
          <h2 class="project-details">{{ details }}</h2>
          <div class="tech-stack-container">
            <h3>Tech Stack:</h3>
            <ul class="tech-stack-grid-container">
              <li
                v-for="(tech, techIndex) in techStack"
                :key="`tech-${techIndex}`"
                class="tech-item"
              >
                {{ tech }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="card-back">
        <h2>Project Details</h2>
        <p class="work-type">{{ workType }}</p>
        <div class="features">
          <h3>Features:</h3>
          <ul>
            <li
              v-for="(feature, featureIndex) in features"
              :key="`feature-${featureIndex}`"
              class="feature-item"
            >
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="button-container">
          <a :href="vercelLink" target="_blank" rel="noopener noreferrer" class="card-attachment">
            <button class="btn btn-vercel"><Icon icon="logos:vercel-icon" /> View on Vercel</button>
          </a>
          <a :href="githubLink" target="_blank" rel="noopener noreferrer" class="card-attachment">
            <button class="btn btn-github"><Icon icon="mdi:github" /> View on GitHub</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    details: String,
    image: String,
    workType: String,
    features: Array,
    techStack: Array,
    vercelLink: String,
    githubLink: String,
  },
};
</script>

<style scoped>
.project-card {
  width: 100%;
  height: 400px;
  padding: 0px 10px 20px 10px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.999s;
}

.project-card:hover .card-inner {
  transform: rotateY(-180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

.card-front {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(235, 235, 235);
  color: #fff;
  border-radius: 10px;
  font-size: 24px;
  transform: rotateY(0deg);
  width: 100%;
  padding: 15px;
}

.card-front-image {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.card-front-details {
  width: 50%;
}

.project-name {
  font-size: 1rem;
}

.project-details {
  font-size: 0.5rem;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tech-stack-container h3 {
  font-weight: 400;
  font-size: 0.5rem;
}

.tech-stack-grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.tech-item {
  font-family: 'Raleway', sans-serif;
  font-size: 0.5rem;
  font-weight: 400;
  list-style-type: none;
  border-radius: 10px;
  padding: 10px;
  color: rgb(172, 91, 248);
  background-color: white;
  text-align: center;
}

.card-back {
  background: rgba(135, 39, 225, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  justify-content: center;
  font-size: 24px;
  transform: rotateY(180deg);
}

@media screen and (min-width: 768px) {
  .project-card {
    width: 100%;
    height: 520px;
    padding: 0px 20px 20px 20px;
  }

  .card-front-image {
    height: 50%;
  }

  .card-front-details {
    height: 50%;
  }
}
</style>
