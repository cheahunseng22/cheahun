<script setup>
import { RouterLink } from 'vue-router';
import { useTrackPlay } from '../composables/useTrackPlay';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const { handleTrackClick } = useTrackPlay();

const handleCardClick = async (e) => {
  // Prevent default router-link behavior
  e.preventDefault();
  
  if (props.product?.id) {
    // This will increment play count AND navigate
    await handleTrackClick(props.product.id, `/product/${props.product.id}`);
  }
};
</script>

<template>
  <div class="group">
    <div 
      @click="handleCardClick"
      class="block cursor-pointer"
    >
      <!-- Modern Card Design -->
      <div class="relative overflow-hidden rounded-xl bg-white border border-gray-200 hover:border-purple-400 transition-all duration-300 hover:scale-105 hover:shadow-xl">
        
        <!-- Image Container -->
        <div class="relative h-[10rem] sm:h-[12rem] md:h-[14rem] overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20">
          <img 
            class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
            :src="props.product.cover_image" 
            :alt="props.product.title"
          >
          
          <!-- Overlay Gradient -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <!-- Play Button Overlay -->
          <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div class="bg-white/20 backdrop-blur-md rounded-full p-2 sm:p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
              <svg class="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>

          <!-- Music Note Badge -->
          <div class="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1 sm:p-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
            <svg class="w-2 h-2 sm:w-3 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
          </div>
        </div>

        <!-- Content -->
        <div class="p-2 sm:p-3">
          <h1 class="text-xs sm:text-sm font-semibold text-gray-800 truncate mb-1">{{ props.product.title }}</h1>
          <div class="flex items-center justify-between">
            <span class="text-[10px] sm:text-xs text-gray-500 truncate">{{ props.product.artist_name }}</span>
            <span class="text-[8px] sm:text-[10px] text-purple-500 bg-purple-50 px-1 sm:px-2 py-0.5 rounded-full whitespace-nowrap">Song</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>