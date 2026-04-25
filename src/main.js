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

// When creating an image element for a search result:
const img = document.createElement('img');
img.src = songData.imageUrl; // the URL from your search

// THIS IS THE FIX - ensures image loads even if URL is broken or slow
img.onload = () => {
  // Image loaded successfully - it will show
  console.log('Icon loaded:', songData.imageUrl);
};
img.onerror = () => {
  // If URL fails, show a fallback icon
  img.src = 'https://png.pngtree.com/png-clipart/20230509/ourmid/pngtree-pixar-ai-3d-goat-png-image_7090810.png';
  img.style.objectFit = 'cover';
};