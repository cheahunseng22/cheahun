<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getTracksByCategory, getAllCategories } from '../api/api';

const route = useRoute();
const router = useRouter();
const categorySlug = ref('');
const categoryName = ref('');
const tracks = ref([]);
const loading = ref(true);
const searchQuery = ref('');

// Filter tracks by search
const filteredTracks = computed(() => {
    if (!searchQuery.value) return tracks.value;
    const query = searchQuery.value.toLowerCase();
    return tracks.value.filter(track => 
        track.title?.toLowerCase().includes(query) ||
        track.artist_name?.toLowerCase().includes(query)
    );
});

// Get unique gradient for each category
const getCategoryGradient = (name) => {
    const gradients = {
        'Hip Hop': 'from-purple-600 to-pink-500',
        'Jazz': 'from-amber-600 to-orange-500',
        'Electronic': 'from-cyan-600 to-blue-500',
        'Lo-fi': 'from-emerald-600 to-teal-500',
        'Rock': 'from-red-700 to-rose-600',
        'Pop': 'from-fuchsia-600 to-pink-500',
        'Classical': 'from-indigo-700 to-purple-600',
        'R&B': 'from-slate-700 to-gray-600'
    };
    return gradients[name] || 'from-blue-600 to-purple-600';
};

const getCategoryIcon = (name) => {
    const icons = {
        'Hip Hop': 'fa-microphone-alt',
        'Jazz': 'fa-music',
        'Electronic': 'fa-headphones',
        'Lo-fi': 'fa-guitar',
        'Rock': 'fa-drum',
        'Pop': 'fa-star',
        'Classical': 'fa-violin',
        'R&B': 'fa-heart'
    };
    return icons[name] || 'fa-music';
};

const fetchCategoryTracks = async () => {
    loading.value = true;
    try {
        const slug = route.params.slug;
        categorySlug.value = slug;
        
        const categories = await getAllCategories();
        const category = categories.find(c => c.slug === slug);
        categoryName.value = category?.name || slug;
        
        const data = await getTracksByCategory(slug);
        tracks.value = data;
    } catch (error) {
        console.error("Error fetching category tracks:", error);
        tracks.value = [];
    } finally {
        loading.value = false;
    }
};

const goToTrack = (trackId) => {
    router.push(`/product/${trackId}`);
};

const goBack = () => {
    router.push('/');
};

onMounted(() => {
    fetchCategoryTracks();
});
</script>

<template>
    <div class="min-h-screen bg-gray-900">
        <!-- Hero Section -->
        <div :class="`bg-gradient-to-r ${getCategoryGradient(categoryName)}`" class="relative">
            <div class="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <!-- Back Button -->
                <button 
                    @click="goBack" 
                    class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 mb-8 transition-all duration-300 text-white text-sm"
                >
                    <i class="fas fa-arrow-left text-xs"></i>
                    Back to Home
                </button>
                
                <!-- Category Header -->
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center">
                        <i :class="`fas ${getCategoryIcon(categoryName)} text-3xl md:text-4xl text-white`"></i>
                    </div>
                    <div>
                        <h1 class="text-3xl md:text-5xl font-bold text-white">{{ categoryName }}</h1>
                        <p class="text-white/70 text-sm mt-1">
                            <i class="fas fa-headphones mr-1"></i>
                            {{ filteredTracks.length }} {{ filteredTracks.length === 1 ? 'track' : 'tracks' }} available
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Content Section -->
        <div class="max-w-7xl mx-auto px-4 py-8">
            <!-- Search Bar -->
            <div class="mb-8">
                <div class="relative max-w-md">
                    <i class="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
                    <input 
                        type="text" 
                        v-model="searchQuery"
                        placeholder="Search by song or artist..."
                        class="w-full pl-10 pr-10 py-2.5 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none text-white placeholder-gray-400 text-sm transition-all"
                    >
                    <button v-if="searchQuery" @click="searchQuery = ''" class="absolute right-3 top-1/2 transform -translate-y-1/2">
                        <i class="fas fa-times text-gray-400 hover:text-white text-xs transition"></i>
                    </button>
                </div>
            </div>

            <!-- Loading State -->
            <div v-if="loading" class="text-center py-16">
                <i class="fas fa-circle-notch fa-spin text-4xl text-purple-500 mb-3"></i>
                <p class="text-gray-400 text-sm">Loading tracks...</p>
            </div>

            <!-- No Results -->
            <div v-else-if="filteredTracks.length === 0" class="text-center py-16 bg-gray-800/30 rounded-xl">
                <i class="fas fa-music text-5xl text-gray-600 mb-3"></i>
                <h3 class="text-lg font-medium text-white mb-1">No tracks found</h3>
                <p class="text-gray-400 text-sm">Try searching with different keywords</p>
                <button 
                    v-if="searchQuery"
                    @click="searchQuery = ''"
                    class="mt-4 text-purple-400 hover:text-purple-300 text-sm transition"
                >
                    <i class="fas fa-undo-alt mr-1"></i>Clear search
                </button>
            </div>

            <!-- Track Grid -->
            <div v-else>
                <!-- Results Info -->
                <div v-if="searchQuery" class="mb-4 text-sm text-gray-400">
                    <i class="fas fa-filter mr-1"></i> Found {{ filteredTracks.length }} result{{ filteredTracks.length !== 1 ? 's' : '' }} for "{{ searchQuery }}"
                </div>

                <!-- Grid -->
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    <div 
                        v-for="track in filteredTracks" 
                        :key="track.id"
                        @click="goToTrack(track.id)"
                        class="group bg-gray-800 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-purple-500"
                    >
                        <!-- Image -->
                        <div class="relative h-36 overflow-hidden bg-gray-700">
                            <img 
                                :src="track.cover_image || 'https://images.pexels.com/photos/167491/pexels-photo-167491.jpeg?w=200'" 
                                :alt="track.title"
                                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <!-- Play Overlay -->
                            <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div class="bg-purple-500 rounded-full p-2">
                                    <i class="fas fa-play text-white text-sm ml-0.5"></i>
                                </div>
                            </div>
                        </div>

                        <!-- Info -->
                        <div class="p-3">
                            <h3 class="font-medium text-white text-sm truncate group-hover:text-purple-400 transition">
                                {{ track.title }}
                            </h3>
                            <p class="text-xs text-gray-400 truncate mt-1">
                                {{ track.artist_name || 'Unknown Artist' }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
    width: 6px;
    height: 6px;
}

::-webkit-scrollbar-track {
    background: #1f2937;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb {
    background: #8b5cf6;
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: #7c3aed;
}
</style>