<script setup>
import { ref, onMounted } from 'vue';
import { getNewReleases, addToNewReleases, updateReleaseStatus, removeFromNewReleases, getAllTracks } from '../../api/api';

const releases = ref([]);
const tracks = ref([]);
const loading = ref(false);
const showModal = ref(false);
const formData = ref({
    track_id: null,
    release_status: 'upcoming',
    is_featured: false
});

const fetchData = async () => {
    loading.value = true;
    try {
        releases.value = await getNewReleases();
        tracks.value = await getAllTracks();
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data');
    } finally {
        loading.value = false;
    }
};

const openCreateModal = () => {
    formData.value = { track_id: null, release_status: 'upcoming', is_featured: false };
    showModal.value = true;
};

const addRelease = async () => {
    if (!formData.value.track_id) {
        alert('Please select a track');
        return;
    }
    
    try {
        await addToNewReleases(formData.value);
        alert('Added to new releases successfully');
        showModal.value = false;
        fetchData();
    } catch (error) {
        console.error('Error adding release:', error);
        alert('Failed to add to new releases');
    }
};

const updateStatus = async (trackId, status) => {
    try {
        await updateReleaseStatus(trackId, status);
        alert('Status updated successfully');
        fetchData();
    } catch (error) {
        console.error('Error updating status:', error);
        alert('Failed to update status');
    }
};

const removeRelease = async (trackId) => {
    if (confirm('Remove this track from new releases?')) {
        try {
            await removeFromNewReleases(trackId);
            alert('Removed successfully');
            fetchData();
        } catch (error) {
            console.error('Error removing release:', error);
            alert('Failed to remove');
        }
    }
};

onMounted(() => {
    fetchData();
});
</script>

<template>
    <div>
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">Manage New Releases</h2>
            <button @click="openCreateModal" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                + Add to New Releases
            </button>
        </div>
        
        <div v-if="loading" class="text-center py-10">Loading...</div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div v-for="release in releases" :key="release.id" class="bg-white rounded-lg shadow p-4">
                <img :src="release.cover_image" class="w-full h-32 object-cover rounded mb-3" />
                <h3 class="font-bold">{{ release.title }}</h3>
                <p class="text-sm text-gray-600">{{ release.artist_name }}</p>
                
                <div class="mt-3 flex items-center gap-2">
                    <span 
                        :class="[
                            'text-xs px-2 py-1 rounded-full',
                            release.release_status === 'just_released' ? 'bg-green-100 text-green-700' :
                            release.release_status === 'upcoming' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-blue-100 text-blue-700'
                        ]"
                    >
                        {{ release.release_status }}
                    </span>
                    <span class="text-xs text-gray-500">{{ release.release_date }}</span>
                </div>
                
                <div class="mt-3 flex gap-2">
                    <select @change="updateStatus(release.id, $event.target.value)" class="text-xs border rounded p-1">
                        <option value="upcoming" :selected="release.release_status === 'upcoming'">Upcoming</option>
                        <option value="just_released" :selected="release.release_status === 'just_released'">Just Released</option>
                        <option value="new" :selected="release.release_status === 'new'">New</option>
                    </select>
                    <button @click="removeRelease(release.id)" class="text-red-600 text-sm">Remove</button>
                </div>
            </div>
        </div>
        
        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 class="text-xl font-bold mb-4">Add to New Releases</h3>
                
                <div class="space-y-3">
                    <select v-model="formData.track_id" class="w-full p-2 border rounded">
                        <option :value="null">Select a track</option>
                        <option v-for="track in tracks" :key="track.id" :value="track.id">
                            {{ track.title }} - {{ track.artist_name }}
                        </option>
                    </select>
                    
                    <select v-model="formData.release_status" class="w-full p-2 border rounded">
                        <option value="upcoming">Upcoming</option>
                        <option value="just_released">Just Released</option>
                        <option value="new">New</option>
                    </select>
                    
                    <label class="flex items-center gap-2">
                        <input v-model="formData.is_featured" type="checkbox" />
                        Featured
                    </label>
                </div>
                
                <div class="flex justify-end gap-2 mt-6">
                    <button @click="showModal = false" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button @click="addRelease" class="px-4 py-2 bg-blue-600 text-white rounded">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>