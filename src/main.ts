import { createApp } from 'vue';
import Toast, { PluginOptions } from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

library.add(faGithub, faLinkedin);

const options: PluginOptions = {
  position: 'bottom-right' as PluginOptions['position'],
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);

app.use(router);
app.use(Toast, options);
app.mount('#app');
