<template>
  <div class="project-card">
    <div class="card-inner">
      <div class="card-front">
        <div>
          <div class="card-front-image">
            <img :src="image" alt="Project image" class="project-image" />
          </div>
          <div class="card-front-details">
            <div class="card-front-name">
              <h1 class="project-name">{{ name }}</h1>
              <div class="work-type-container">
                <div class="dot"></div>
                <p class="work-type">{{ workType }}</p>
              </div>
            </div>
            <h2 class="project-details">{{ details }}</h2>
          </div>
          <div class="tech-stack-container">
            <h3>Tech Stack</h3>
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
        <div>
          <h2>Project Details</h2>
          <div class="features">
            <h3>Features</h3>
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
        </div>
        <div>
          <div class="button-container">
            <a :href="githubLink" target="_blank" rel="noopener noreferrer" class="card-attachment">
              <button class="btn btn-github">
                <img
                  class="github-icon"
                  alt="Github Icon"
                  src="/assets/projects/github-light.svg"
                />View on GitHub
              </button>
            </a>
            <a :href="vercelLink" target="_blank" rel="noopener noreferrer" class="card-attachment">
              <button class="btn btn-vercel">
                <img
                  class="vercel-icon"
                  alt="Vercel Icon"
                  src="/assets/projects/vercel-icon-dark.svg"
                />View on Vercel
              </button>
            </a>
          </div>
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
  min-height: 520px;
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1s;
}

.project-card:hover .card-inner {
  transform: rotateY(-180deg);
}

.card-front,
.card-back {
  font-family: 'Raleway', sans-serif;
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.card-front {
  display: flex;
  background-color: rgb(235, 235, 235);
  border-radius: 15px;
  transform: rotateY(0deg);
  padding: 15px;
  justify-content: space-between;
}

.card-front-name {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.project-name {
  font-size: 0.85rem;
  text-align: left;
  font-weight: 600;
  color: rgb(183, 133, 201);
}

.work-type-container {
  display: flex;
  flex-direction: row;
  border-radius: 99px;
  color: rgb(158, 155, 155);
  border: 2px solid white;
  align-items: center;
  justify-content: center;
  padding: 0px 10px;
}

.work-type {
  font-size: 0.75rem;
  font-weight: 400;
  list-style-type: none;
  padding: 5px;
  text-align: center;
  font-weight: 500;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: rgb(152, 86, 176);
  border-radius: 50%;
  margin-left: 3px;
}

.card-front-image {
  position: relative;
  height: 40%;
  padding: 5px;
  margin-bottom: 10px;
}

.card-front-details {
  display: flex;
  flex-direction: column;
  padding: 5px;
}

.project-details {
  font-size: 0.9rem;
  text-align: left;
  font-weight: 500;
  color: rgb(158, 155, 155);
  line-height: 1.4;
  height: 110px;
}

.tech-stack-container h3 {
  font-size: 0.85rem;
  text-align: left;
  font-weight: 600;
  color: rgb(183, 133, 201);
  margin-top: 19px;
  margin-bottom: 20px;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
}

.tech-stack-grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.tech-item {
  font-size: 0.75rem;
  font-weight: 400;
  list-style-type: none;
  border-radius: 99px;
  padding: 5px;
  color: rgb(158, 155, 155);
  border: 2px solid white;
  text-align: center;
  font-weight: 500;
}

.card-back {
  background: rgba(135, 39, 225, 0.8);
  color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  font-size: 24px;
  transform: rotateY(180deg);
  padding: 15px;
  justify-content: space-between;
}

.card-back h2 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  color: rgb(255, 255, 255);
  margin-bottom: 20px;
}
.features {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
}
h3 {
  font-size: 1.5rem;
  font-weight: 700;
}
.feature-item {
  list-style-type: none;
  text-align: left;
}

.button-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
}

.btn-github,
.btn-vercel {
  width: 100%;
  border-radius: 99px;
  padding: 10px;
}

.btn-github {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
}

.btn-vercel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  border: white;
}

.vercel-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.github-icon {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}
.card-attachment {
}

a {
  text-decoration: none;
}

@media screen and (min-width: 768px) {
  .project-card {
    width: 100%;
    height: 520px;
  }
}
</style>
