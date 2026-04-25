<template>
    <div class="relative overflow-hidden">
        <!-- Sliding Background Images -->
        <div class="absolute inset-0 w-full h-full">
            <div 
                class="absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000"
                v-for="(image, index) in backgroundImages"
                :key="index"
                :style="{ backgroundImage: `url('${image}')`, opacity: currentIndex === index ? 1 : 0 }"
            ></div>
            <!-- Overlay for better text readability -->
            <div class="absolute inset-0 bg-black/40"></div>
        </div>

        <!-- Navigation Bar -->
        <div class="relative z-10 wrap-navbar text-white text-sm wrapper-bar-top p-3 h-[36rem]">
            <div class="left-side-bar text-center">
                <span class="bg-blue-900/30 p-2 rounded-lg backdrop-blur-md text-white font-bold inline-block">
                    CHNMUSIC
                </span>
            </div>
        </div>

        <!-- Hero Content - Centered -->
        <div class="absolute inset-0 z-10 flex justify-center items-center">
            <div class="text-white text-center px-5 md:px-10">
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 backdrop-blur-sm bg-black/20 p-4 rounded-2xl">
                    Find Your Love Music Artist
                </h1>
                <p class="text-sm md:text-base mt-2 max-w-md mx-auto backdrop-blur-sm bg-black/20 p-3 rounded-xl">
                    Discover the latest releases from your favorite boy groups
                </p>
            </div>
        </div>

        <!-- Slide Indicators -->
        <div class="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
            <button
                v-for="(_, index) in backgroundImages"
                :key="index"
                @click="currentIndex = index"
                class="transition-all duration-300 rounded-full bg-white/50 hover:bg-white/80"
                :class="currentIndex === index ? 'w-8 h-2 bg-white' : 'w-2 h-2'"
            ></button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeroSection',
    data() {
        return {
            currentIndex: 0,
backgroundImages: [
  // --- SAFE PEXELS (more stable sources) ---
  'https://images.pexels.com/photos/164821/pexels-photo-164821.jpeg',
  'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
  'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg',

  // --- PIXABAY (safe & reliable) ---
 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&fit=crop&w=1920&q=80',
  'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1920&q=80',
  
  'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1920&q=80',

'https://images.unsplash.com/photo-1506157786151-b8491531f063?auto=format&fit=crop&w=1920&q=80',

'https://images.unsplash.com/photo-1518972559570-7cc1309f3229?auto=format&fit=crop&w=1920&q=80',

],
            intervalId: null
        }
    },
    mounted() {
        this.startSlideshow();
    },
    beforeDestroy() {
        this.stopSlideshow();
    },
    methods: {
        startSlideshow() {
            this.intervalId = setInterval(() => {
                this.nextImage();
            }, 5000); // Change image every 5 seconds
        },
        stopSlideshow() {
            if (this.intervalId) {
                clearInterval(this.intervalId);
            }
        },
        nextImage() {
            this.currentIndex = (this.currentIndex + 1) % this.backgroundImages.length;
        }
    }
}
</script>

<style scoped>
/* Smooth transition for the background images */
.absolute {
    transition: opacity 1s ease-in-out;
}
</style>