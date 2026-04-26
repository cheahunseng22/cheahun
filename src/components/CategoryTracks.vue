<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { getTracksByCategory, getAllCategories } from '../api/api';
import { useTrackPlay } from '../composables/useTrackPlay';

const route = useRoute();
const router = useRouter();
const categoryName = ref('');
const tracks = ref([]);
const loading = ref(false);
const searchQuery = ref('');

const filteredTracks = computed(() => {
    if (!searchQuery.value) return tracks.value;
    const query = searchQuery.value.toLowerCase();
    return tracks.value.filter(track => 
        track.title?.toLowerCase().includes(query) ||
        track.artist_name?.toLowerCase().includes(query)
    );
});

const getCategoryGradient = (name) => {
    return 'from-purple-600 to-pink-500';
};

const getCategoryIcon = (name) => {
    return 'fa-music';
};

const loadData = async () => {
    const slug = route.params.slug;
    console.log('Loading category for slug:', slug);
    if (!slug) return;
    
    loading.value = true;
    try {
        const categories = await getAllCategories();
        const category = categories.find(c => c.slug === slug);
        categoryName.value = category?.name || slug;
        
        const data = await getTracksByCategory(slug);
        tracks.value = data;
        console.log('Tracks loaded:', data.length);
    } catch (error) {
        console.error('Error:', error);
        tracks.value = [];
    } finally {
        loading.value = false;
    }
};

const { handleTrackClick } = useTrackPlay();

const goToTrack = (trackId) => {
    handleTrackClick(trackId, `/product/${trackId}`);
};

const goBack = () => {
    router.push('/');
};

// Reload when slug changes (works for back button)
watch(() => route.params.slug, () => {
    loadData();
}, { immediate: true });
</script>

<template>
    <div class="min-h-screen bg-gray-900">
        <div class="bg-gradient-to-r from-purple-600 to-pink-500 relative">
            <div class="max-w-7xl mx-auto px-4 py-12 md:py-16">
                <button 
                    @click="goBack" 
                    class="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-lg px-4 py-2 mb-8 text-white text-sm"
                >
                    ← Back to Home
                </button>
                
                <div class="flex items-center gap-4">
                    <div class="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                        <i class="fas fa-music text-3xl text-white"></i>
                    </div>
                    <div>
                        <h1 class="text-3xl md:text-5xl font-bold text-white">{{ categoryName }}</h1>
                        <p class="text-white/70 text-sm mt-1">
                            {{ filteredTracks.length }} tracks available
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div class="max-w-7xl mx-auto px-4 py-8">
            <div class="mb-8">
                <input 
                    type="text" 
                    v-model="searchQuery"
                    placeholder="Search by song or artist..."
                    class="w-full max-w-md px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
                >
            </div>

            <div v-if="loading" class="text-center py-16 text-gray-400">
                Loading...
            </div>

            <div v-else-if="filteredTracks.length === 0" class="text-center py-16 bg-gray-800/30 rounded-xl">
                <i class="fas fa-music text-5xl text-gray-600 mb-3"></i>
                <h3 class="text-lg font-medium text-white mb-1">No tracks found</h3>
            </div>

            <div v-else class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                <div 
                    v-for="track in filteredTracks" 
                    :key="track.id"
                    @click="goToTrack(track.id)"
                    class="group bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-all border border-gray-700 hover:border-purple-500"
                >
                    <div class="relative h-36 overflow-hidden bg-gray-700">
                        <img 
                            :src="track.cover_image" 
                            :alt="track.title"
                            class="w-full h-full object-cover group-hover:scale-110 transition"
                        >
                        <div class="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                            <div class="bg-purple-500 rounded-full p-2">
                                <i class="fas fa-play text-white text-sm"></i>
                            </div>
                        </div>
                    </div>
                    <div class="p-3">
                        <h3 class="font-medium text-white text-sm truncate">{{ track.title }}</h3>
                        <p class="text-xs text-gray-400 truncate">{{ track.artist_name }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>