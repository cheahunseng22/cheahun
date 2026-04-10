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
                'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg',
                'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg',
                'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg',
                'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
                'https://images.pexels.com/photos/210922/pexels-photo-210922.jpeg',
                
                // Pixabay (Free for commercial use)
                'https://cdn.pixabay.com/photo/2015/12/10/16/39/shutterstock-1086435_1280.jpg',
                'https://cdn.pixabay.com/photo/2013/07/18/20/26/concert-164721_1280.jpg',
                'https://cdn.pixabay.com/photo/2016/11/22/19/08/audience-1850119_1280.jpg',
                
                // Placeholder gradient (Built-in fallback)
                'https://via.placeholder.com/1920x1080/4a0080/ffffff?text=Music+Concert'
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