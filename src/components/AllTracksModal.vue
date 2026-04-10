
<script setup>
import { RouterLink } from 'vue-router';
import { ref,watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    tracks: {
        type: Array,
        required: true
    }
});

const emit = defineEmits(['close']);

// Close on escape key
const handleKeydown = (e) => {
    if (e.key === 'Escape') {
        emit('close');
    }
};

// Filter tracks by group
const filterGroup = ref('all');
const filteredTracks = ref([]);

const filterTracks = () => {
    if (filterGroup.value === 'all') {
        filteredTracks.value = props.tracks;
    } else {
        filteredTracks.value = props.tracks.filter(track => 
            track.category?.toLowerCase().includes(filterGroup.value.toLowerCase()) ||
            track.artist_name?.toLowerCase().includes(filterGroup.value.toLowerCase())
        );
    }
};

watch(filterGroup, () => {
    filterTracks();
});

onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';
    filterTracks();
});

onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'auto';
});
</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
        <div class="bg-white rounded-2xl max-w-5xl w-full max-h-[85vh] overflow-hidden shadow-2xl animate-modal">
            <!-- Header -->
            <div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4">
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="text-xl font-bold text-white">All Tracks</h2>
                        <p class="text-sm text-white text-opacity-80">{{ tracks.length }} tracks available</p>
                    </div>
                    <button @click="emit('close')" class="text-white text-2xl hover:bg-white hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center">
                        ✕
                    </button>
                </div>
                
  
            </div>
            
            <!-- Body - Scrollable -->
            <div class="p-4 overflow-y-auto max-h-[calc(85vh-120px)]">
                <div v-if="filteredTracks.length === 0" class="text-center py-10 text-gray-500">
                    No tracks found
                </div>
                <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <RouterLink 
                        v-for="track in filteredTracks" 
                        :key="track.id"
                        :to="`/product/${track.id}`"
                        @click="emit('close')"
                        class="bg-gray-50 rounded-lg p-3 flex items-center gap-3 hover:shadow-md transition-all hover:scale-102 cursor-pointer border border-gray-200 hover:border-blue-300"
                    >
                        <img :src="track.cover_image" class="w-14 h-14 object-cover rounded-lg" :alt="track.title" />
                        <div class="flex-1 min-w-0">
                            <h3 class="font-semibold text-sm text-gray-800 truncate">{{ track.title }}</h3>
                            <p class="text-xs text-gray-500 truncate">{{ track.artist_name }}</p>
                            <div class="flex items-center gap-2 mt-1">
                                <span class="text-xs text-gray-400">{{ track.category }}</span>
                                <span class="text-xs text-gray-400">{{ track.duration }}</span>
                            </div>
                        </div>
                        <div class="text-blue-500 text-xs">▶</div>
                    </RouterLink>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="border-t p-3 bg-gray-50 text-center text-xs text-gray-500">
                {{ filteredTracks.length }} tracks shown • Click any track to view details
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes modalPop {
    from {
        opacity: 0;
        transform: scale(0.95);
    }
    to {
        opacity: 1;
        transform: scale(1);
    }
}

.animate-modal {
    animation: modalPop 0.2s ease-out;
}

.hover\:scale-102:hover {
    transform: scale(1.02);
}
</style>