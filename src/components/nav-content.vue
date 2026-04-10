<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { getAllTracks, getFeaturedTracks, getAllCategories } from '../api/api';
import SearchModal from './SearchModal.vue';
import AllTracksModal from './AllTracksModal.vue';
import FeaturedModal from './FeaturedModal.vue';

const showSearchModal = ref(false);
const showAllTracksModal = ref(false);
const showFeaturedModal = ref(false);
const featuredTracks = ref([]);
const allTracks = ref([]);
const categories = ref([]);  // ADD THIS
const activeFilter = ref('all');

// Fetch categories from API
const fetchCategories = async () => {
    try {
        const data = await getAllCategories();
        categories.value = data;
        console.log("Categories loaded:", categories.value);
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
};

// Fetch featured tracks
const fetchFeaturedTracks = async () => {
    try {
        const tracks = await getFeaturedTracks();
        featuredTracks.value = tracks;
        console.log("Featured tracks updated:", featuredTracks.value);
    } catch (error) {
        console.error("Error fetching featured tracks:", error);
    }
};

// Fetch all tracks for filtering
const fetchAllTracks = async () => {
    try {
        allTracks.value = await getAllTracks();
    } catch (error) {
        console.error("Error fetching tracks:", error);
    }
};

// Filter by category
const filterByCategory = (categorySlug) => {
    activeFilter.value = categorySlug;
    window.dispatchEvent(new CustomEvent('filter-tracks', { detail: { category: categorySlug } }));
};

// Open search modal
const openSearch = () => {
    showSearchModal.value = true;
};

// Close search modal
const closeSearch = () => {
    showSearchModal.value = false;
};

// Open featured modal
const openFeaturedModal = () => {
    console.log("Opening featured modal, tracks:", featuredTracks.value);
    showFeaturedModal.value = true;
};

// Close featured modal
const closeFeaturedModal = () => {
    showFeaturedModal.value = false;
};

// Open all tracks modal
const openAllTracksModal = () => {
    console.log("Opening all tracks modal, tracks:", allTracks.value);
    showAllTracksModal.value = true;
};

// Close all tracks modal
const closeAllTracksModal = () => {
    showAllTracksModal.value = false;
};

// Auto refresh every 30 seconds
let refreshInterval;
const startAutoRefresh = () => {
    refreshInterval = setInterval(() => {
        fetchFeaturedTracks();
        fetchAllTracks();
        fetchCategories();
    }, 30000);
};

onMounted(() => {
    fetchCategories();  // ADD THIS
    fetchFeaturedTracks();
    fetchAllTracks();
    startAutoRefresh();
});

onUnmounted(() => {
    if (refreshInterval) {
        clearInterval(refreshInterval);
    }
});
</script>

<template>
    <div>
        <!-- Featured Tracks Banner -->
        <div v-if="featuredTracks.length > 0" class="featured-banner bg-gradient-to-r from-blue-500/70 to-blue-200 text-white p-3 m-4 rounded-lg shadow-lg">
            <div class="flex items-center justify-between">
                <div class="flex-1">
                    <div class="flex items-center gap-2">
                        <span class="font-bold text-sm"><i class="fa-regular fa-star"></i> FEATURED TRACKS </span>
                        <span class="text-xs text-green-500 bg-white bg-opacity-20 px-2 py-0.5 rounded">{{ featuredTracks.length }} tracks</span>
                        <span class="text-xs bg-green-400 bg-opacity-30 px-2 py-0.5 rounded">Live</span>
                    </div>
                    <div class="flex gap-4 mt-1 flex-wrap items-center">
                        <span v-for="track in featuredTracks.slice(0, 3)" :key="track.id" class="text-xs ">
                            <i class="fa-solid fa-drum"></i> {{ track.title }} - {{ track.artist_name }}
                        </span>
                        <!-- See More button inside banner - shows FEATURED tracks -->
                        <button 
                            @click="openFeaturedModal" 
                            class="text-xs bg-white text-blue-600 cursor-pointer px-2 py-0.5 rounded font-semibold hover:bg-opacity-90 transition-all"
                        >
                            See More ({{ featuredTracks.length }}) →
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="topic text-2xl mt-10 ml-4 font-bold">
            <h1>OVERVIEWS TRACKS</h1>
        </div>
        
<div class="wrap-navbar text-[0.7rem] wrapper-bar-top ml-4 mt-2 flex justify-between">
    
    <div class="right-side-bar text-[0.7rem] bg-blue-400/50 backdrop-blur-md opacity-80 w-full text-center rounded-sm cursor-pointer p-[0.4rem] mr-4" @click="openSearch">
        <i class="fa-solid fa-magnifying-glass"></i>
        <span class="text-[0.7rem] ml-1">Find Your Favorite Tracks</span>
    </div>
</div>
        
        <!-- Search Modal -->
        <SearchModal v-if="showSearchModal" @close="closeSearch" />
        
        <!-- All Tracks Modal (from navigation See More) -->
        <AllTracksModal v-if="showAllTracksModal" :tracks="allTracks" @close="closeAllTracksModal" />
        
        <!-- Featured Modal (from banner See More) -->
        <FeaturedModal v-if="showFeaturedModal" :tracks="featuredTracks" @close="closeFeaturedModal" />
    </div>
</template>