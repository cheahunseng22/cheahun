<script setup lang="js">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import navContent from "./components/nav-content.vue";
import footerContent from "./components/footer-content.vue";
import HeroHead from "./components/hero-head.vue";
import "./views/style.css";

const route = useRoute();

// Check if current page is admin page
const isAdminPage = computed(() => {
    return route.path.startsWith('/admin');
});
</script>

<template>
  <div class="relative">
    <!-- Only show on non-admin pages -->
    <template v-if="!isAdminPage">
      <!-- main first part -->
      <HeroHead />
   
      <!-- end main first part -->
    </template>

    <!-- main second part -->
    <div class="productLink mt-10">
      <!-- show route content here -->
      <RouterView />

      <!-- Only show footer on non-admin pages -->
      <footerContent v-if="!isAdminPage" />
    </div>
    <!-- end main second part -->
  </div>
</template>