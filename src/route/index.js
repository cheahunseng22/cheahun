import { createRouter, createWebHistory } from 'vue-router';

// Import components
// import  from '../views/Product.vue'; // Assuming you create a Product component for the details page
import ProductDetail from '../views/ProductDetail.vue';

const routes = [
  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetail, // ✅ Correct component
    props: true,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
