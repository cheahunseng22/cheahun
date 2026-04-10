import { createApp } from 'vue';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser, faCoffee, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './route';
import './views/style.css';  // Changed from '../src/views/style.css'

const app = createApp(App);

// Register router before mounting the app
app.use(router);

// Register global components
app.component('font-awesome-icon', FontAwesomeIcon);

// Add Font Awesome icons to the library
library.add(faUser, faCoffee, faHeart, faHeartRegular);

// Mount the app after router is set up
app.mount('#app');

console.log('Router initialized:', router);