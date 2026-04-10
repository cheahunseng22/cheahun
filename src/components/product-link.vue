<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { 
    getAllCategories, 
    getAllArtists, 
    getTracksByCategory,
    getTracksByArtist,
    getNewReleases 
} from '../api/api';

// Add this with your other refs
const showCategoryModal = ref(false);

// Add this with your other refs (near showCategoryModal and showArtistModal)
const showNewReleaseModal = ref(false);

// Add this with your other refs (near the top where showCategoryModal is)
const showArtistModal = ref(false);

const router = useRouter();
const categories = ref([]);
const artists = ref([]);
const newReleases = ref([]);
const selectedCategory = ref(null);
const selectedArtist = ref(null);
const selectedArtistData = ref(null);
const categoryTracks = ref([]);
const artistTracks = ref([]);
const loading = ref({
    categories: false,
    artists: false,
    newReleases: false,
    categoryTracks: false,
    artistTracks: false
});

// Navigate to track detail page
const goToTrack = (trackId) => {
    router.push(`/product/${trackId}`);
};

const fetchCategories = async () => {
    loading.value.categories = true;
    try {
        const data = await getAllCategories();
        categories.value = data;
    } catch (error) {
        console.error("Error fetching categories:", error);
    } finally {
        loading.value.categories = false;
    }
};

const fetchArtists = async () => {
    loading.value.artists = true;
    try {
        const data = await getAllArtists();
        artists.value = data;
    } catch (error) {
        console.error("Error fetching artists:", error);
    } finally {
        loading.value.artists = false;
    }
};

const fetchNewReleases = async () => {
    loading.value.newReleases = true;
    try {
        const data = await getNewReleases();
        newReleases.value = data;
    } catch (error) {
        console.error("Error fetching new releases:", error);
    } finally {
        loading.value.newReleases = false;
    }
};

const fetchTracksByCategory = async (slug) => {
    loading.value.categoryTracks = true;
    try {
        const data = await getTracksByCategory(slug);
        categoryTracks.value = data;
        selectedCategory.value = slug;
        selectedArtist.value = null;
        selectedArtistData.value = null;
        artistTracks.value = [];
    } catch (error) {
        console.error("Error fetching tracks by category:", error);
    } finally {
        loading.value.categoryTracks = false;
    }
};

const fetchTracksByArtist = async (artistId) => {
    loading.value.artistTracks = true;
    try {
        // Find the selected artist data
        const artist = artists.value.find(a => a.id === artistId);
        selectedArtistData.value = artist;
        
        const data = await getTracksByArtist(artistId);
        artistTracks.value = data;
        selectedArtist.value = artistId;
        selectedCategory.value = null;
        categoryTracks.value = [];
    } catch (error) {
        console.error("Error fetching tracks by artist:", error);
    } finally {
        loading.value.artistTracks = false;
    }
};

const clearSelections = () => {
    selectedCategory.value = null;
    selectedArtist.value = null;
    selectedArtistData.value = null;
    categoryTracks.value = [];
    artistTracks.value = [];
};

// Get artist icon based on name
const getArtistIcon = (artistName) => {
    if (artistName?.toLowerCase().includes('burning')) return '🔥';
    if (artistName?.toLowerCase().includes('jazzy')) return '🎷';
    if (artistName?.toLowerCase().includes('beat')) return '🎧';
    if (artistName?.toLowerCase().includes('rock')) return '🤘';
    return '🎤';
};

onMounted(() => {
    fetchCategories();
    fetchArtists();
    fetchNewReleases();
});
</script>

<template>
    <div class="space-y-8 p-4">
        
<!-- Categories Section -->
<!-- Categories Section -->
<div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 shadow-sm">
    <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
            <span class="text-2xl"><i class="fa-solid fa-layer-group"></i></span>
            <h2 class="text-xl font-bold text-blue-800">Categories</h2>
        </div>
    </div>
    
    <div v-if="loading.categories" class="text-center py-4">
        <div class="animate-pulse text-gray-500">Loading categories...</div>
    </div>
    
    <div v-else>
        <!-- Show only first 3 categories -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
            <div 
                v-for="cat in categories.slice(0, 3)" 
                :key="cat.id"
                @click="router.push(`/category/${cat.slug}`)"  
                class="bg-white rounded-lg p-3 cursor-pointer border border-gray-200 hover:border-blue-500 transition-all hover:scale-105"
            >
                <div class="text-center">
                    <div class="text-2xl mb-1">
                        {{ cat.name === 'Hip Hop' ? '🎤' : 
                           cat.name === 'Jazz' ? '🎷' : 
                           cat.name === 'Electronic' ? '🎧' : 
                           cat.name === 'Lo-fi' ? '🎹' : '🎵' }}
                    </div>
                    <div class="font-semibold text-sm">{{ cat.name }}</div>
                </div>
            </div>
        </div>
        
        <!-- See More Button for Categories -->
        <div v-if="categories.length > 3" class="flex justify-center mt-4">
            <button
                @click="showCategoryModal = true"
                class="group px-4 py-2 bg-white rounded-full border border-blue-300 text-blue-600 font-medium hover:bg-blue-50 transition-all duration-300 text-sm"
            >
                <span class="flex items-center gap-1">
                    See More ({{ categories.length - 3 }} more)
                    <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
    
    <!-- Category Tracks - Clean UI for multiple songs -->
    <div v-if="selectedCategory" class="mt-4 p-4 bg-white rounded-xl shadow-md">
        <!-- ... keep existing category tracks code ... -->
        <div class="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
            <div class="flex items-center gap-2">
                <span class="text-xl">🎵</span>
                <h3 class="font-semibold text-blue-600">
                    {{ categoryTracks.length }} {{ categoryTracks.length === 1 ? 'Track' : 'Tracks' }} in {{ selectedCategory }}
                </h3>
            </div>
            <button 
                @click="clearSelections" 
                class="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-full transition"
            >
                ✕ Clear
            </button>
        </div>
        
        <div v-if="categoryTracks.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div 
                v-for="track in categoryTracks" 
                :key="track.id" 
                @click="goToTrack(track.id)"
                class="group bg-gray-50 rounded-lg p-3 cursor-pointer transition-all hover:shadow-lg hover:-translate-y-1 border border-gray-100"
            >
                <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center text-white text-xl shadow-md">
                        🎵
                    </div>
                    <div class="flex-1 min-w-0">
                        <h4 class="font-semibold text-gray-800 text-sm truncate group-hover:text-blue-600 transition">
                            {{ track.title }}
                        </h4>
                        <p class="text-xs text-gray-500 truncate">{{ track.artist_name }}</p>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-xs text-gray-400">{{ track.duration }}</span>
                            <span v-if="track.category" class="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
                                {{ track.category }}
                            </span>
                        </div>
                    </div>
                    <div class="opacity-0 group-hover:opacity-100 transition text-blue-500">
                        ▶
                    </div>
                </div>
            </div>
        </div>
        
        <div v-else class="text-center py-10">
            <div class="text-5xl mb-3">📭</div>
            <p class="text-gray-500 font-medium">No tracks available in this category yet</p>
            <p class="text-gray-400 text-sm mt-1">Check back later for new releases</p>
        </div>
        
        <div v-if="categoryTracks.length > 0" class="mt-4 pt-3 border-t border-gray-200 text-center">
            <span class="text-xs text-gray-400">{{ categoryTracks.length }} tracks available</span>
        </div>
    </div>
</div>

<!-- Category Modal -->
<Teleport to="body">
    <div 
        v-if="showCategoryModal" 
        class="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4"
        @click.self="showCategoryModal = false"
    >
        <div class="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
        <div class="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-modalSlideUp">
            <div class="sticky top-0 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 flex justify-between items-center z-20">
                <div>
                    <h3 class="text-xl font-bold text-white">All Categories</h3>
                    <p class="text-white/80 text-sm">{{ categories.length }} categories available</p>
                </div>
                <button 
                    @click="showCategoryModal = false"
                    class="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    <div 
                        v-for="cat in categories" 
                        :key="cat.id"
                        @click="router.push(`/category/${cat.slug}`); showCategoryModal = false"  
                        class="bg-white rounded-lg p-4 cursor-pointer border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all hover:scale-105 text-center"
                    >
                        <div class="text-3xl mb-2">
                            {{ cat.name === 'Hip Hop' ? '🎤' : 
                               cat.name === 'Jazz' ? '🎷' : 
                               cat.name === 'Electronic' ? '🎧' : 
                               cat.name === 'Lo-fi' ? '🎹' : '🎵' }}
                        </div>
                        <div class="font-semibold text-gray-800">{{ cat.name }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Teleport>
        <!-- Artists Section with Avatar Images -->
<!-- Artists Section with Avatar Images -->
<div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 shadow-sm">
    <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
            <span class="text-2xl"><i class="fa-solid fa-microphone"></i></span>
            <h2 class="text-xl font-bold text-purple-800">Artists</h2>
        </div>
    </div>
    
    <div v-if="loading.artists" class="text-center py-4">
        <div class="animate-pulse text-gray-500">Loading artists...</div>
    </div>
    
    <div v-else>
        <!-- Show only first 3 artists -->
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-3">
            <div 
                v-for="artist in artists.slice(0, 3)" 
                :key="artist.id"
                @click="fetchTracksByArtist(artist.id)"
                class="bg-white rounded-lg p-3 cursor-pointer transition-all hover:shadow-md hover:scale-105 border-2"
                :class="selectedArtist === artist.id ? 'border-purple-500 bg-purple-50' : 'border-gray-200'"
            >
                <div class="text-center">
                    <!-- Artist Avatar Image -->
                    <div class="flex justify-center mb-2">
                        <img 
                            v-if="artist.avatar_image" 
                            :src="artist.avatar_image" 
                            class="w-12 h-12 rounded-full object-cover border-2 border-purple-300"
                            :alt="artist.name"
                        />
                        <div v-else class="w-12 h-12 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-2xl">
                            {{ getArtistIcon(artist.name) }}
                        </div>
                    </div>
                    <div class="font-semibold text-sm">{{ artist.name }}</div>
                    <div v-if="artist.bio" class="text-xs text-gray-500 mt-1 line-clamp-2">{{ artist.bio.slice(0, 40) }}...</div>
                </div>
            </div>
        </div>
        
        <!-- See More Button for Artists -->
        <div v-if="artists.length > 3" class="flex justify-center mt-4">
            <button
                @click="showArtistModal = true"
                class="group px-4 py-2 bg-white rounded-full border border-purple-300 text-purple-600 font-medium hover:bg-purple-50 transition-all duration-300 text-sm"
            >
                <span class="flex items-center gap-1">
                    See More ({{ artists.length - 3 }} more)
                    <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
    
    <!-- Artist Tracks with Avatar Header -->
    <div v-if="selectedArtist && artistTracks.length > 0" class="mt-4 p-3 bg-white rounded-lg">
        <div class="flex justify-between items-center mb-3">
            <div class="flex items-center gap-3">
                <!-- Selected Artist Avatar -->
                <img 
                    v-if="selectedArtistData?.avatar_image" 
                    :src="selectedArtistData.avatar_image" 
                    class="w-10 h-10 rounded-full object-cover border-2 border-purple-500"
                    :alt="selectedArtistData.name"
                />
                <div v-else class="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-xl">
                    {{ getArtistIcon(selectedArtistData?.name) }}
                </div>
                <div>
                    <h3 class="font-semibold text-purple-600">🎵 Tracks by {{ selectedArtistData?.name }}</h3>
                    <p v-if="selectedArtistData?.bio" class="text-xs text-gray-500">{{ selectedArtistData.bio.slice(0, 60) }}...</p>
                </div>
            </div>
            <button @click="clearSelections" class="text-xs text-red-500 hover:text-red-700">Clear</button>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            <div 
                v-for="track in artistTracks.slice(0, 6)" 
                :key="track.id"
                @click="goToTrack(track.id)"
                class="text-sm p-2 bg-gray-50 rounded hover:bg-purple-100 cursor-pointer transition-all flex items-center gap-2"
            >
                <span>🎵</span>
                <span>{{ track.title }}</span>
                <span class="text-xs text-gray-400 ml-auto">{{ track.duration }}</span>
            </div>
        </div>
    </div>
</div>

<!-- Artist Modal -->
<Teleport to="body">
    <div 
        v-if="showArtistModal" 
        class="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4"
        @click.self="showArtistModal = false"
    >
        <div class="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
        <div class="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-modalSlideUp">
            <div class="sticky top-0 bg-gradient-to-r from-purple-600 to-pink-600 p-4 flex justify-between items-center z-20">
                <div>
                    <h3 class="text-xl font-bold text-white">All Artists</h3>
                    <p class="text-white/80 text-sm">{{ artists.length }} artists available</p>
                </div>
                <button 
                    @click="showArtistModal = false"
                    class="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    <div 
                        v-for="artist in artists" 
                        :key="artist.id"
                        @click="fetchTracksByArtist(artist.id); showArtistModal = false"  
                        class="bg-white rounded-lg p-4 cursor-pointer border border-gray-200 hover:border-purple-500 hover:shadow-lg transition-all hover:scale-105 text-center"
                    >
                        <div class="flex justify-center mb-2">
                            <img 
                                v-if="artist.avatar_image" 
                                :src="artist.avatar_image" 
                                class="w-16 h-16 rounded-full object-cover border-2 border-purple-300"
                                :alt="artist.name"
                            />
                            <div v-else class="w-16 h-16 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-3xl">
                                {{ getArtistIcon(artist.name) }}
                            </div>
                        </div>
                        <div class="font-semibold text-gray-800">{{ artist.name }}</div>
                        <div v-if="artist.bio" class="text-xs text-gray-500 mt-1">{{ artist.bio.slice(0, 50) }}...</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Teleport>

        <!-- New Releases Section - Click to navigate -->
  <!-- New Releases Section - Click to navigate -->
<div class="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 shadow-sm">
    <div class="flex items-center justify-between mb-3">
        <div class="flex items-center gap-2">
            <span class="text-2xl"><i class="fa-solid fa-fire-flame-curved"></i></span>
            <h2 class="text-xl font-bold text-green-800">New Releases</h2>
        </div>
    </div>
    
    <div v-if="loading.newReleases" class="text-center py-4">
        <div class="animate-pulse text-gray-500">Loading new releases...</div>
    </div>
    
    <div v-else-if="newReleases.length === 0" class="text-center py-4 text-gray-500">
        No new releases at the moment
    </div>
    
    <div v-else>
        <!-- Show only first 3 new releases -->
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <div 
                v-for="release in newReleases.slice(0, 3)" 
                :key="release.id"
                @click="goToTrack(release.track_id)"
                class="bg-white rounded-lg p-3 shadow-sm border-l-4 cursor-pointer transition-all hover:shadow-md hover:scale-105"
                :class="{
                    'border-green-500': release.release_status === 'just_released',
                    'border-yellow-500': release.release_status === 'upcoming',
                    'border-blue-500': release.release_status === 'new'
                }"
            >
                <div class="flex items-center gap-3">
                    <img :src="release.cover_image" class="w-12 h-12 object-cover rounded" />
                    <div class="flex-1">
                        <div class="font-semibold text-sm">{{ release.title }}</div>
                        <div class="text-xs text-gray-600">{{ release.artist_name }}</div>
                        <div class="flex items-center gap-2 mt-1">
                            <span class="text-xs px-2 py-0.5 rounded-full" :class="{
                                'bg-green-100 text-green-700': release.release_status === 'just_released',
                                'bg-yellow-100 text-yellow-700': release.release_status === 'upcoming',
                                'bg-blue-100 text-blue-700': release.release_status === 'new'
                            }">
                                {{ release.release_status }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- See More Button for New Releases -->
        <div v-if="newReleases.length > 3" class="flex justify-center mt-4">
            <button
                @click="showNewReleaseModal = true"
                class="group px-4 py-2 bg-white rounded-full border border-green-300 text-green-600 font-medium hover:bg-green-50 transition-all duration-300 text-sm"
            >
                <span class="flex items-center gap-1">
                    See More ({{ newReleases.length - 3 }} more)
                    <svg class="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </span>
            </button>
        </div>
    </div>
</div>

<!-- New Releases Modal -->
<Teleport to="body">
    <div 
        v-if="showNewReleaseModal" 
        class="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-4"
        @click.self="showNewReleaseModal = false"
    >
        <div class="absolute inset-0 bg-black/80 backdrop-blur-md"></div>
        <div class="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-modalSlideUp">
            <div class="sticky top-0 bg-gradient-to-r from-green-600 to-emerald-600 p-4 flex justify-between items-center z-20">
                <div>
                    <h3 class="text-xl font-bold text-white">All New Releases</h3>
                    <p class="text-white/80 text-sm">{{ newReleases.length }} releases available</p>
                </div>
                <button 
                    @click="showNewReleaseModal = false"
                    class="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
                >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            <div class="p-6 overflow-y-auto max-h-[calc(90vh-80px)] custom-scrollbar">
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    <div 
                        v-for="release in newReleases" 
                        :key="release.id"
                        @click="goToTrack(release.track_id); showNewReleaseModal = false"  
                        class="bg-white rounded-lg p-3 shadow-sm border-l-4 cursor-pointer transition-all hover:shadow-md hover:scale-105"
                        :class="{
                            'border-green-500': release.release_status === 'just_released',
                            'border-yellow-500': release.release_status === 'upcoming',
                            'border-blue-500': release.release_status === 'new'
                        }"
                    >
                        <div class="flex items-center gap-3">
                            <img :src="release.cover_image" class="w-12 h-12 object-cover rounded" />
                            <div class="flex-1">
                                <div class="font-semibold text-sm">{{ release.title }}</div>
                                <div class="text-xs text-gray-600">{{ release.artist_name }}</div>
                                <div class="flex items-center gap-2 mt-1">
                                    <span class="text-xs px-2 py-0.5 rounded-full" :class="{
                                        'bg-green-100 text-green-700': release.release_status === 'just_released',
                                        'bg-yellow-100 text-yellow-700': release.release_status === 'upcoming',
                                        'bg-blue-100 text-blue-700': release.release_status === 'new'
                                    }">
                                        {{ release.release_status }}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</Teleport>
    </div>
</template>

<style scoped>
.category-card, .artist-card, .release-card {
    transition: all 0.2s ease;
}

.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>