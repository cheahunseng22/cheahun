<script setup>
import { RouterLink } from 'vue-router';
import { ref, onMounted, onUnmounted } from 'vue';

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

// Add event listener
onMounted(() => {
    document.addEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'hidden';
});

// Remove event listener
onUnmounted(() => {
    document.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = 'auto';
});
</script>

<template>
    <div class="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4" @click.self="emit('close')">
        <div class="bg-white rounded-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden shadow-2xl animate-modal">
            <!-- Header -->
            <div class="bg-gradient-to-r from-blue-200/60 to-blue-500/70 p-4 backdrop-blur-md flex justify-between items-center">
                <div class="flex items-center gap-2">
                    <span class="text-sm text-blue-500"><i class="fa-regular fa-star"></i></span>
                    <h2 class="text-xl font-bold text-white">All Featured Tracks</h2>
                    <span class="text-xs  bg-white bg-opacity-20 text-green-500 px-2 py-1 rounded">{{ tracks.length }} tracks</span>
                </div>
                <button @click="emit('close')" class="text-white text-2xl cursor-pointer hover:bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center">
                    ✕
                </button>
            </div>
            
            <!-- Body - Scrollable -->
            <div class="p-4 overflow-y-auto max-h-[calc(80vh-80px)]">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <RouterLink 
                        v-for="track in tracks" 
                        :key="track.id"
                        :to="`/product/${track.id}`"
                        @click="emit('close')"
                        class="bg-gray-50 rounded-lg p-3 flex items-center gap-3 hover:shadow-md transition-all hover:scale-105 cursor-pointer border border-gray-200"
                    >
                        <img :src="track.cover_image" class="w-16 h-16 object-cover rounded-lg" :alt="track.title" />
                        <div class="flex-1">
                            <h3 class="font-semibold text-sm text-gray-800">{{ track.title }}</h3>
                            <p class="text-xs text-gray-500">{{ track.artist_name }}</p>
                            <p class="text-xs text-gray-400 mt-1">{{ track.category }}</p>
                        </div>
                        <div class="text-blue-500 text-xs">▶</div>
                    </RouterLink>
                </div>
                
                <!-- Empty state -->
                <div v-if="tracks.length === 0" class="text-center py-10 text-gray-500">
                    No featured tracks available
                </div>
            </div>
            
            <!-- Footer -->
            <div class="border-t p-3 bg-gray-50 text-center text-xs text-gray-500">
                Click on any track to view details
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
</style>