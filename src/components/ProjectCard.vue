<template>
  <div class="project-card">
    <div class="card-inner">
      <div class="card-front">
        <div class="card-front__border"></div>
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
                <img class="saturn-icon" alt="Saturn Icon" src="/assets/projects/saturn.png" />
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
            <a
              v-if="vercelLink"
              :href="vercelLink"
              target="_blank"
              rel="noopener noreferrer"
              class="card-attachment"
            >
              <button class="btn btn-vercel">
                <img
                  class="vercel-icon"
                  alt="Vercel Icon"
                  src="/assets/projects/vercel-icon-dark.svg"
                />View on Vercel
              </button>
            </a>
            <button v-else class="no-link-message" disabled>No Link Available</button>
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
  margin-bottom: 20px;

  user-select: none;
}

.card-front {
  display: flex;
  border-radius: 15px;
  transform: rotateY(0deg);
  padding: 15px;
  justify-content: space-between;
  border: 2px solid white;
  --white: rgb(255, 255, 255);
  --black: rgb(21, 21, 29);
  --paragraph: rgb(80, 80, 100);
  --line: rgb(220, 220, 230);
  --primary: rgb(174, 193, 227);
  --blue: rgb(211, 204, 243);
  --pink: rgb(246, 206, 218);
  background-color: var(--blue);
  background-image: radial-gradient(at 88% 40%, rgba(211, 204, 243, 0.8) 0px, transparent 85%),
    radial-gradient(at 49% 30%, rgba(211, 204, 243, 0.8) 0px, transparent 85%),
    radial-gradient(at 14% 26%, rgba(211, 204, 243, 0.8) 0px, transparent 85%),
    radial-gradient(at 0% 64%, rgba(190, 180, 230, 0.9) 0px, transparent 85%),
    radial-gradient(at 41% 94%, rgba(200, 190, 240, 0.9) 0px, transparent 85%),
    radial-gradient(at 100% 99%, rgba(220, 210, 250, 0.9) 0px, transparent 85%);
  border-radius: 1rem;
  box-shadow:
    0px -16px 24px 0px rgba(255, 255, 255, 0.7) inset,
    4px 4px 15px rgba(255, 255, 255, 0.5);
}

.card-front .card-front__border {
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  z-index: -10;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% + 2px);
  height: calc(100% + 2px);
  background-image: linear-gradient(0deg, rgb(255, 255, 255) -50%, rgb(211, 204, 243) 100%);
  border-radius: 1rem;
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
  pointer-events: none;
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
  background: linear-gradient(180deg, rgb(211, 204, 243), rgb(214, 164, 164));
  opacity: 0.8;
  color: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  font-size: 24px;
  transform: rotateY(180deg);
  padding: 20px;
  justify-content: space-between;
  border: 2px solid white;
}

.card-back h2 {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: 10px;
  margin-bottom: 40px;
}

.features {
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
}

.card-back ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  list-style: none;
  padding: 0;
  margin-top: 5px;
}

.feature-item {
  font-size: 1.05rem;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  font-weight: 500;
}

.saturn-icon {
  pointer-events: none;
  width: 24px;
  height: 24px;
}

.card-back h3 {
  font-size: 1.3rem;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 5px;
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
.btn-vercel,
.no-link-message {
  font-size: 1rem;
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
  border: black;
  background-image: linear-gradient(0deg, rgb(30, 30, 30), rgb(60, 60, 60) 100%);
  color: white;
  box-shadow: inset 0 -2px 25px -4px rgba(255, 255, 255, 0.3);
  cursor: pointer;
}

.btn-vercel {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: black;
  border: white;
  cursor: pointer;
}

.no-link-message {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: gray;
  background-color: rgb(221, 221, 221);
  border: rgb(221, 221, 221);
}

.vercel-icon {
  pointer-events: none;
  width: 20px;
  height: 20px;
  margin-right: 10px;
}
.github-icon {
  pointer-events: none;
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
    min-height: 580px;
  }

  .card-front {
    padding: 20px;
  }

  .card-front-image {
    height: 43%;
  }

  .project-details {
    font-size: 1rem;
    height: 120px;
    line-height: 1.5;
  }

  .project-name {
    font-size: 1.1rem;
    font-weight: 700;
  }

  .work-type {
    font-size: 0.8rem;
  }

  .dot {
    width: 10px;
    height: 10px;
  }

  .tech-stack-container h3 {
    font-size: 1rem;
    font-weight: 500;
  }

  .tech-item {
    font-size: 0.8rem;
  }

  .card-back {
    padding: 30px;
  }

  .card-back ul {
    margin-top: 10px;
  }

  .button-container {
    gap: 20px;
  }

  .card-back ul {
    margin-top: 20px;
    gap: 10px;
  }

  .feature-item {
    gap: 15px;
  }
}
</style>
