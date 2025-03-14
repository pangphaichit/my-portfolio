<template>
  <nav class="navbar-container">
    <div class="navbar">
      <div class="logo">
        <a href="#home-section" class="portfolio" data-text="Awesome">
          <span class="actual-text">&nbsp;Portfolio&nbsp;</span>
          <span aria-hidden="true" class="hover-text">&nbsp;Portfolio&nbsp;</span>
        </a>
      </div>

      <button
        class="menu-toggle"
        @click="toggleMenu"
        @keydown.enter="toggleMenu"
        aria-label="Toggle menu"
        :aria-expanded="isMenuOpen"
      >
        <span class="menu-icon" :class="{ open: isMenuOpen }">
          <span v-for="n in 3" :key="n"></span>
        </span>
      </button>

      <div
        class="menu-overlay"
        v-if="isMenuOpen"
        @click="closeMenu"
        @keydown.enter="closeMenu"
        tabindex="0"
        role="button"
        aria-label="Close menu"
      ></div>

      <ul ref="menu" class="links" :class="{ active: isMenuOpen }">
        <li><a href="#home-section" data-section="home" @click="closeMenu">Home</a></li>
        <li><a href="#about-section" data-section="about" @click="closeMenu">About</a></li>
        <li><a href="#projects-section" data-section="projects" @click="closeMenu">Projects</a></li>
        <li><a href="#contact-section" data-section="contact" @click="closeMenu">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  name: 'NavBar',
  setup() {
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
      document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
      document.body.style.overflow = '';
    };

    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMenuOpen.value) {
        closeMenu();
      }
    };

    const setActiveLink = (sectionId: string) => {
      document.querySelectorAll('.links a').forEach((link) => {
        const href = link.getAttribute('href');
        if (href === `#${sectionId}`) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    };

    const updateActiveLink = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const navHeight = document.querySelector('.navbar')?.getBoundingClientRect().height || 0;

      // Special case for top of page - select home section
      if (scrollPosition < 50) {
        setActiveLink('home-section');
        return;
      }

      // Track which section has the most visibility
      let maxVisibility = 0;
      let currentSectionId = '';

      sections.forEach((section) => {
        const sectionId = section.id;
        if (!sectionId) return;

        const sectionElement = section as HTMLElement;

        const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
        const sectionHeight = sectionElement.offsetHeight;

        // Calculate how much of the section is visible
        const viewportTop = scrollPosition + navHeight;
        const viewportBottom = scrollPosition + windowHeight;

        // If we're at the top of a section (accounting for navbar height)
        if (Math.abs(viewportTop - sectionTop) < 100) {
          currentSectionId = sectionId;
          maxVisibility = Infinity; // Prioritize this section
          return;
        }

        // Calculate visible portion
        const visibleTop = Math.max(sectionTop, viewportTop);
        const visibleBottom = Math.min(sectionTop + sectionHeight, viewportBottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);

        // Calculate visibility as a percentage of section height
        const visibility = visibleHeight / sectionHeight;

        // If this section has more visibility than previous max, update
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          currentSectionId = sectionId;
        }
      });

      // Set active link based on current section
      if (currentSectionId) {
        setActiveLink(currentSectionId);
      }
    };

    onMounted(() => {
      document.addEventListener('keydown', handleEscKey);
      window.addEventListener('scroll', updateActiveLink);
      setTimeout(updateActiveLink, 200);
      document.querySelectorAll('.links a').forEach((link) => {
        link.addEventListener('click', function (this: HTMLAnchorElement) {
          const sectionId = this.getAttribute('href')?.substring(1);
          if (sectionId) {
            setTimeout(() => setActiveLink(sectionId), 100);
          }
        });
      });
    });

    onUnmounted(() => {
      document.removeEventListener('keydown', handleEscKey);
      window.removeEventListener('scroll', updateActiveLink);
    });

    return {
      isMenuOpen,
      toggleMenu,
      closeMenu,
    };
  },
};
</script>

<style scoped>
.navbar {
  position: fixed;
  width: 100vw;
  top: 0;
  user-select: none;
  z-index: 1000;
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid white;
}

.navbar .logo {
  display: flex;
  list-style: none;
}

.navbar .logo a {
  text-decoration: none;
  font-weight: 400;
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  width: 30px;
  height: 40px;
}

.menu-toggle:hover .menu-icon span {
  background-color: rgb(255, 210, 223);
}

.menu-icon {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
}

.menu-icon span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: rgb(174, 193, 227);
  transition: all 0.3s ease;
}

.menu-icon.open span:first-child {
  transform: translateY(9px) rotate(45deg);
}

.menu-icon.open span:nth-child(2) {
  opacity: 0;
}

.menu-icon.open span:last-child {
  transform: translateY(-9px) rotate(-45deg);
}

.menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

.links {
  position: fixed;
  top: 0;
  right: -100%;
  height: 100%;
  width: 80%;
  max-width: 300px;
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  padding: 2rem;
  transition: right 0.3s ease;
  z-index: 999;
  list-style: none;
}

.links.active {
  right: 0;
}

.links li {
  margin: 1rem 0;
}

.navbar a {
  text-decoration: none;
  font-weight: 400;
  color: rgb(174, 193, 227);
  font-size: 1.2rem;
}

.navbar a:hover {
  color: rgb(255, 210, 223);
}

.navbar a.active {
  text-decoration: none;
  position: relative;
  pointer-events: none;
  cursor: default;
}

.navbar .links a.active::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: rgb(255, 210, 223);
}

.navbar a.router-link-active:hover {
  color: inherit;
  background: none;
}

.navbar .logo a.router-link-active {
  text-decoration: none;
}

.portfolio {
  margin: 0;
  height: auto;
  background: transparent;
  padding: 0;
  border: none;
}

.portfolio {
  --border-right: 4px;
  --text-stroke-color: rgba(174, 193, 227, 0.6);
  --animation-color: rgb(255, 210, 223);
  --fs-size: 1.5em;
  letter-spacing: 3px;
  text-decoration: none;
  font-size: var(--fs-size);
  position: relative;
  text-transform: uppercase;
  color: transparent;
  -webkit-text-stroke: 1px var(--text-stroke-color);
}

.hover-text {
  position: absolute;
  box-sizing: border-box;
  content: attr(data-text);
  color: var(--animation-color);
  width: 0%;
  inset: 0;
  border-right: var(--border-right) solid var(--animation-color);
  overflow: hidden;
  transition: 0.5s;
  -webkit-text-stroke: 1px var(--animation-color);
}

.portfolio:hover .hover-text {
  width: 100%;
  filter: drop-shadow(0 0 15px var(--animation-color));
}

@media (min-width: 768px) {
  .navbar {
    width: 90vw;
    padding: 2rem 3rem;
    border-bottom-right-radius: 70px;
    margin-right: 5rem;
    border-right: 1px solid white;
    background-color: rgb(255, 255, 255);
  }

  .menu-toggle {
    display: none;
  }

  .links {
    list-style: none;
    position: static;
    flex-direction: row;
    background-color: transparent;
    padding: 0;
    width: auto;
    max-width: none;
    height: auto;
  }

  .links li {
    margin: 0 1.5rem;
  }

  .navbar .logo a {
    font-size: 2rem;
  }

  .navbar a {
    font-size: 1.5rem;
  }

  .portfolio {
    --fs-size: 2em;
  }
}
</style>
