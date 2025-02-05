import { createApp } from 'vue';
import App from './App.vue';
import '../../frontend/src/views/style.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './route';
import { RouterLink, RouterView } from 'vue-router';

const app = createApp(App);

// Register router before mounting the app
app.use(router);

// Register global components
app.component('RouterLink', RouterLink);
app.component('RouterView', RouterView);
app.component('font-awesome-icon', FontAwesomeIcon);

// Add Font Awesome icons to the library
library.add(faUser, faCoffee);

// Mount the app after router is set up
app.mount('#app');

console.log('Router initialized:', router);
