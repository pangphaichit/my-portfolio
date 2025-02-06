<template>
  <div class="home"><ContactPage /></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ContactPage from '@/components/ContactPage.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'ContactView',
  components: {
    ContactPage,
  },
});
</script>

<style scoped></style>
