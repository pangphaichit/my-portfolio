<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/" class="portfolio" data-text="Awesome">
        <span class="actual-text">&nbsp;Portfolio&nbsp;</span>
        <span aria-hidden="true" class="hover-text">&nbsp;Portfolio&nbsp;</span>
      </router-link>
    </div>

    <ul class="links">
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
    </ul>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
};
</script>

<style scoped>
.navbar {
  position: relative;
  z-index: 99;
  font-family: 'Raleway', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 3rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom-right-radius: 70px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-right: 5rem;
  border-bottom: 1px solid white;
  border-right: 1px solid white;
}

.navbar .logo,
.navbar .links {
  display: flex;
  list-style: none;
}

.navbar .logo a {
  text-decoration: none;
  font-weight: 400;
  text-decoration: none;
  color: rgb(255, 255, 255);
  font-size: 2rem;
}

.navbar a {
  margin: 0 1.5rem;
  text-decoration: none;
  font-weight: 400;
  text-decoration: none;
  color: rgb(174, 193, 227);
  font-size: 1.5rem;
}

.navbar a:hover {
  color: rgb(255, 210, 223);
}

.navbar a.router-link-active {
  text-decoration: none;
  position: relative;
  pointer-events: none;
  cursor: default;
}

.navbar .links a.router-link-active::after {
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
  --fs-size: 2em;
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
</style>
