<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="social-links">
        <a
          href="https://github.com/pangphaichit"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
        >
          <font-awesome-icon :icon="['fab', 'github']" class="github-icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/phaichit-phosi/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Profile"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" class="linkedin-icon" />
        </a>
      </div>
      <p>&copy; {{ currentYear }} Phaichit P. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
.footer {
  height: 15vh;
  background-color: white;
  color: rgb(174, 193, 227);
  padding: 10px 0;
  text-align: center;
  font-family: 'Raleway', sans-serif;
  user-select: none;
}

.footer-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer p {
  margin: 5px 0 0;
  font-size: 0.8rem;
}

.social-links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-bottom: 10px;
  gap: 10px;
}

.linkedin-icon {
  color: rgb(174, 193, 227);
  font-size: 25px;
}

.github-icon {
  color: rgb(174, 193, 227);
  font-size: 23px;
}

.github-icon:hover,
.linkedin-icon:hover {
  color: rgb(246, 206, 218);
}

@media screen and (min-width: 768px) {
  .social-links {
    gap: 15px;
  }

  .linkedin-icon {
    color: rgb(174, 193, 227);
    font-size: 27px;
  }

  .github-icon {
    color: rgb(174, 193, 227);
    font-size: 25px;
  }

  .footer p {
    font-size: 0.9rem;
  }
}
</style>
