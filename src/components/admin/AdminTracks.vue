<script setup>
import { ref, onMounted } from 'vue';
import { getAllTracks, createTrack, updateTrack, deleteTrack, addTrackDetail, updateTrackDetail } from '../../api/api';

const tracks = ref([]);
const loading = ref(false);
const showModal = ref(false);
const editingTrack = ref(null);
const showDetailModal = ref(false);
const currentTrack = ref(null);

const formData = ref({
    title: '',
    cover_image: '',
    duration: '',
    release_date: '',
    category_id: null,
    artist_group_id: null,
    is_published: true
});

const detailData = ref({
    youtube_link: '',
    full_description: '',
    lyrics: '',
    producer: '',
    writer: '',
    bpm: null,
    key_signature: ''
});

const fetchTracks = async () => {
    loading.value = true;
    try {
        tracks.value = await getAllTracks();
    } catch (error) {
        console.error('Error fetching tracks:', error);
        alert('Failed to fetch tracks');
    } finally {
        loading.value = false;
    }
};

const openCreateModal = () => {
    editingTrack.value = null;
    formData.value = {
        title: '',
        cover_image: '',
        duration: '',
        release_date: '',
        category_id: null,
        artist_group_id: null,
        is_published: true
    };
    showModal.value = true;
};

const openEditModal = (track) => {
    editingTrack.value = track;
    formData.value = { ...track };
    showModal.value = true;
};

const openDetailModal = (track) => {
    currentTrack.value = track;
    detailData.value = {
        youtube_link: track.youtube_link || '',
        full_description: track.full_description || '',
        lyrics: track.lyrics || '',
        producer: track.producer || '',
        writer: track.writer || '',
        bpm: track.bpm || null,
        key_signature: track.key_signature || ''
    };
    showDetailModal.value = true;
};

const saveTrack = async () => {
    try {
        if (editingTrack.value) {
            await updateTrack(editingTrack.value.id, formData.value);
            alert('Track updated successfully');
        } else {
            const result = await createTrack(formData.value);
            if (result.id) {
                alert('Track created successfully');
            }
        }
        showModal.value = false;
        fetchTracks();
    } catch (error) {
        console.error('Error saving track:', error);
        alert('Failed to save track');
    }
};

const saveTrackDetail = async () => {
    try {
        if (currentTrack.value.detail_exists) {
            await updateTrackDetail(currentTrack.value.id, detailData.value);
            alert('Track details updated successfully');
        } else {
            await addTrackDetail(currentTrack.value.id, detailData.value);
            alert('Track details added successfully');
        }
        showDetailModal.value = false;
        fetchTracks();
    } catch (error) {
        console.error('Error saving details:', error);
        alert('Failed to save track details');
    }
};

const deleteTrackItem = async (id) => {
    if (confirm('Are you sure you want to delete this track?')) {
        try {
            await deleteTrack(id);
            alert('Track deleted successfully');
            fetchTracks();
        } catch (error) {
            console.error('Error deleting track:', error);
            alert('Failed to delete track');
        }
    }
};

onMounted(() => {
    fetchTracks();
});
</script>

<template>
    <div>
        <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold">Manage Tracks</h2>
            <button 
                @click="openCreateModal"
                class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
            >
                + Add New Track
            </button>
        </div>
        
        <div v-if="loading" class="text-center py-10">
            <div class="animate-pulse">Loading...</div>
        </div>
        
        <div v-else class="overflow-x-auto bg-white rounded-lg shadow">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Cover</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Artist</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Category</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="track in tracks" :key="track.id">
                        <td class="px-6 py-4 text-sm">{{ track.id }}</td>
                        <td class="px-6 py-4">
                            <img :src="track.cover_image" class="w-10 h-10 object-cover rounded" />
                        </td>
                        <td class="px-6 py-4 text-sm font-medium">{{ track.title }}</td>
                        <td class="px-6 py-4 text-sm">{{ track.artist_name }}</td>
                        <td class="px-6 py-4 text-sm">{{ track.category }}</td>
                        <td class="px-6 py-4 text-sm">{{ track.duration }}</td>
                        <td class="px-6 py-4 text-sm space-x-2">
                            <button 
                                @click="openDetailModal(track)"
                                class="text-green-600 hover:text-green-800"
                                title="Edit Details"
                            >
                                📝 Details
                            </button>
                            <button 
                                @click="openEditModal(track)"
                                class="text-blue-600 hover:text-blue-800"
                                title="Edit"
                            >
                                ✏️ Edit
                            </button>
                            <button 
                                @click="deleteTrackItem(track.id)"
                                class="text-red-600 hover:text-red-800"
                                title="Delete"
                            >
                                🗑️ Delete
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Track Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
                <h3 class="text-xl font-bold mb-4">{{ editingTrack ? 'Edit Track' : 'Add Track' }}</h3>
                
                <div class="space-y-3">
                    <input v-model="formData.title" placeholder="Title" class="w-full p-2 border rounded" />
                    <input v-model="formData.cover_image" placeholder="Cover Image URL" class="w-full p-2 border rounded" />
                    <input v-model="formData.duration" placeholder="Duration (e.g., 3:45)" class="w-full p-2 border rounded" />
                    <input v-model="formData.release_date" type="date" class="w-full p-2 border rounded" />
                    <input v-model="formData.category_id" type="number" placeholder="Category ID" class="w-full p-2 border rounded" />
                    <input v-model="formData.artist_group_id" type="number" placeholder="Artist ID" class="w-full p-2 border rounded" />
                    
                    <div class="flex gap-2">
                        <label class="flex items-center gap-2">
                            <input v-model="formData.is_published" type="checkbox" />
                            Published
                        </label>
                    </div>
                </div>
                
                <div class="flex justify-end gap-2 mt-6">
                    <button @click="showModal = false" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button @click="saveTrack" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
                </div>
            </div>
        </div>
        
        <!-- Detail Modal -->
        <div v-if="showDetailModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <h3 class="text-xl font-bold mb-4">Track Details: {{ currentTrack?.title }}</h3>
                
                <div class="space-y-3">
                    <input v-model="detailData.youtube_link" placeholder="YouTube URL" class="w-full p-2 border rounded" />
                    <textarea v-model="detailData.full_description" placeholder="Full Description" rows="3" class="w-full p-2 border rounded"></textarea>
                    <textarea v-model="detailData.lyrics" placeholder="Lyrics" rows="3" class="w-full p-2 border rounded"></textarea>
                    <input v-model="detailData.producer" placeholder="Producer" class="w-full p-2 border rounded" />
                    <input v-model="detailData.writer" placeholder="Writer" class="w-full p-2 border rounded" />
                    <input v-model="detailData.bpm" type="number" placeholder="BPM" class="w-full p-2 border rounded" />
                    <input v-model="detailData.key_signature" placeholder="Key Signature (e.g., Am)" class="w-full p-2 border rounded" />
                </div>
                
                <div class="flex justify-end gap-2 mt-6">
                    <button @click="showDetailModal = false" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button @click="saveTrackDetail" class="px-4 py-2 bg-green-600 text-white rounded">Save Details</button>
                </div>
            </div>
        </div>
    </div>
</template>