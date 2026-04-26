<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue';
import { searchTracks } from '../api/api';
import { useTrackPlay } from '../composables/useTrackPlay';

const searchQuery = ref('');
const searchResults = ref([]);
const isLoading = ref(false);
const showResults = ref(false);

const emit = defineEmits(['close']);
const { handleTrackClick } = useTrackPlay();

const goToTrack = (trackId) => {
    handleTrackClick(trackId, `/product/${trackId}`);
    emit('close');
};

// Search function
const performSearch = async (query) => {
    if (!query.trim()) {
        searchResults.value = [];
        showResults.value = false;
        return;
    }

    isLoading.value = true;

    try {
        const results = await searchTracks(query);
        searchResults.value = results;
        showResults.value = true;
    } catch (error) {
        console.error("Search error:", error);
        searchResults.value = [];
    } finally {
        isLoading.value = false;
    }
};

// Auto search with debounce
let debounceTimer;
watch(searchQuery, (newVal) => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
        performSearch(newVal);
    }, 300);
});

// ESC close
const handleKeydown = (e) => {
    if (e.key === 'Escape') {
        emit('close');
    }
};

onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center" @click.self="emit('close')">
        <div class="bg-white rounded-lg w-full max-w-2xl mx-4">
            <!-- Search Header -->
            <div class="p-4 border-b flex justify-between items-center">
                <h2 class="text-xl font-bold">Search Tracks</h2>
                <button @click="emit('close')" class="text-gray-500 hover:text-gray-700 text-2xl cursor-pointer">&times;</button>
            </div>
            
            <!-- Search Input -->
            <div class="p-4">
                <input 
                    type="text"
                    v-model="searchQuery"
                    placeholder="Search by track name or artist..."
                    class="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autofocus
                />
            </div>
            
            <!-- Loading -->
            <div v-if="isLoading" class="p-4 text-center">
                <p>Searching...</p>
            </div>
            
            <!-- Results -->
            <div v-else-if="showResults && searchResults.length > 0" class="p-4 border-t max-h-96 overflow-y-auto">
                <div v-for="track in searchResults" :key="track.id" class="mb-4 p-3 hover:bg-gray-50 rounded-lg cursor-pointer" @click="goToTrack(track.id)">
                    <div class="flex items-center gap-4">
                        <img :src="track.cover_image" :alt="track.title" class="w-16 h-16 object-cover rounded">
                        <div class="flex-1">
                            <h3 class="font-semibold text-blue-600">{{ track.title }}</h3>
                            <p class="text-sm text-gray-600">{{ track.artist_name }}</p>
                            <p class="text-xs text-gray-500">{{ track.category }}</p>
                        </div>
                        <div class="text-sm text-gray-400">
                            {{ track.duration }}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- No Results -->
            <div v-else-if="showResults && searchResults.length === 0 && searchQuery" class="p-4 text-center text-gray-500">
                <p>No tracks found for "{{ searchQuery }}"</p>
            </div>
            
            <!-- Initial State -->
            <div v-else class="p-4 text-center text-gray-500">
                <p>Enter a track name or artist to search</p>
            </div>
        </div>
    </div>
</template>