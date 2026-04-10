<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { getAllTracks, getFeaturedTracks } from '../api/api';
import productCart from '../components/product-cart.vue';
import productLink from '../components/product-link.vue';
import navContent from '../components/nav-content.vue';

const tracks = ref([]);
const allTracks = ref([]);
const loading = ref(true);
const featuredTracks = ref([]);
const showModal = ref(false);

// Show only first 5 tracks
const displayedTracks = computed(() => {
  return tracks.value.slice(0, 5);
});

const hasMoreTracks = computed(() => {
  return tracks.value.length > 5;
});

// Fetch all tracks
const fetchTracks = async () => {
    try {
        loading.value = true;
        const data = await getAllTracks();
        allTracks.value = data;
        tracks.value = data;
    } catch (error) {
        console.error("Error loading tracks:", error);
    } finally {
        loading.value = false;
    }
};

// Fetch featured tracks
const fetchFeatured = async () => {
    try {
        featuredTracks.value = await getFeaturedTracks();
    } catch (error) {
        console.error("Error loading featured tracks:", error);
    }
};

// Filter tracks by group
const filterTracks = (event) => {
    const { group } = event.detail;
    
    if (group === 'all') {
        tracks.value = allTracks.value;
    } else {
        tracks.value = allTracks.value.filter(track => 
            track.category?.toLowerCase().includes(group.toLowerCase()) ||
            track.artist_name?.toLowerCase().includes(group.toLowerCase())
        );
    }
};

const showAllProducts = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};

onMounted(() => {
    fetchTracks();
    fetchFeatured();
    window.addEventListener('filter-tracks', filterTracks);
});

onUnmounted(() => {
    window.removeEventListener('filter-tracks', filterTracks);
});
</script>

<template>
    <div class="min-h-screen bg-gray-50">
        <navContent />
        
        <!-- All Tracks Section -->
        <div class="all-tracks-section mt-8 px-4 pb-10 max-w-7xl mx-auto">
            <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl"><i class="fa-solid fa-headphones"></i></span>
                <h2 class="text-xl font-bold text-gray-800">ALL TRACKS</h2>
                <span class="text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-0.5 rounded-full">{{ tracks.length }} songs</span>
            </div>
            
            <!-- Loading State -->
            <div v-if="loading" class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div v-for="i in 5" :key="i" class="animate-pulse">
                    <div class="bg-gray-200 rounded-xl h-[180px] w-full"></div>
                    <div class="mt-2 h-3 bg-gray-200 rounded w-3/4"></div>
                    <div class="mt-1 h-2 bg-gray-200 rounded w-1/2"></div>
                </div>
            </div>
            
            <!-- Empty State -->
            <div v-else-if="tracks.length === 0" class="text-center py-10 bg-white rounded-lg border border-dashed border-gray-300">
                <span class="text-6xl block mb-3">🎵</span>
                <h3 class="text-lg font-medium text-gray-700">No tracks available</h3>
                <p class="text-sm text-gray-500 mt-1">Check back later for new music</p>
            </div>
            
            <!-- Tracks Grid - Shows only first 5 items -->
            <div v-else>
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <productCart v-for="item in displayedTracks" :key="item.id" :product="item" />
                </div>
                
                <!-- Single "See More" Button - Only shows if more than 5 tracks -->
                <div v-if="hasMoreTracks" class="flex justify-center mt-8">
                    <button
                        @click="showAllProducts"
                        class="group px-6 md:px-8 py-2 md:py-3 bg-white rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-purple-400 transition-all duration-300 hover:scale-105 shadow-sm text-[0.7rem] md:text-base"
                    >
                        <span class="flex items-center gap-2">
                            See More ({{ tracks.length - 5 }} more)
                            <svg class="w-4 h-4 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13l-7 7-7-7"></path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Modal for All Products -->
        <Teleport to="body">
            <div 
                v-if="showModal" 
                class="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4"
                @click.self="closeModal"
            >
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"></div>
                
                <!-- Modal Content -->
                <div class="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-modalSlideUp">
                    
                    <!-- Modal Header -->
                    <div class="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 p-3 md:p-4 flex justify-between items-center z-20">
                        <div>
                            <h3 class="text-lg md:text-xl font-bold text-white">All Tracks</h3>
                            <p class="text-white/80 text-xs md:text-sm">{{ tracks.length }} songs available</p>
                        </div>
                        <button 
                            @click="closeModal"
                            class="text-white/80 hover:text-white transition-colors p-1.5 md:p-2 hover:bg-white/10 rounded-full"
                        >
                            <svg class="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    
                    <!-- Modal Body - Scrollable Grid -->
                    <div class="p-4 md:p-6 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
                        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
                            <productCart v-for="item in tracks" :key="item.id" :product="item" />
                        </div>
                    </div>
                </div>
            </div>
        </Teleport>

        <!-- Categories, Artists, New Releases -->
        <div class="product-link-container mt-6">
            <productLink />
        </div>
    </div>
</template>

<style scoped>
@keyframes modalSlideUp {
    from {
        opacity: 0;
        transform: translateY(50px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.animate-modalSlideUp {
    animation: modalSlideUp 0.3s ease-out;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 10px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
}

.all-tracks-section {
    animation: slideUp 0.5s ease-out;
}

@keyframes slideUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes pulse {
    0%, 100% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
}

.animate-pulse {
    animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>