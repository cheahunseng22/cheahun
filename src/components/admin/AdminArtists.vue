<script setup>
import { ref, onMounted } from 'vue';
import { getAllArtists, createArtist, updateArtist, deleteArtist } from '../../api/api';

const artists = ref([]);
const loading = ref(false);
const showModal = ref(false);
const editingItem = ref(null);

const formData = ref({
    name: '',
    bio: '',
    avatar_image: '',
    website_url: ''
});

const fetchData = async () => {
    loading.value = true;
    try {
        artists.value = await getAllArtists();
    } catch (error) {
        console.error('Error fetching artists:', error);
        alert('Failed to fetch artists');
    } finally {
        loading.value = false;
    }
};

const openCreateModal = () => {
    editingItem.value = null;
    formData.value = { name: '', bio: '', avatar_image: '', website_url: '' };
    showModal.value = true;
};

const openEditModal = (item) => {
    editingItem.value = item;
    formData.value = { ...item };
    showModal.value = true;
};

const saveItem = async () => {
    try {
        if (editingItem.value) {
            await updateArtist(editingItem.value.id, formData.value);
            alert('Artist updated successfully');
        } else {
            await createArtist(formData.value);
            alert('Artist created successfully');
        }
        showModal.value = false;
        fetchData();
    } catch (error) {
        console.error('Error saving artist:', error);
        alert('Failed to save artist');
    }
};

const deleteItem = async (id) => {
    if (confirm('Are you sure you want to delete this artist?')) {
        try {
            await deleteArtist(id);
            alert('Artist deleted successfully');
            fetchData();
        } catch (error) {
            console.error('Error deleting artist:', error);
            alert('Failed to delete artist');
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
            <h2 class="text-2xl font-bold">Manage Artists</h2>
            <button @click="openCreateModal" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                + Add Artist
            </button>
        </div>
        
        <div v-if="loading" class="text-center py-10">Loading...</div>
        
        <div v-else class="overflow-x-auto bg-white rounded-lg shadow">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avatar</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bio</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="artist in artists" :key="artist.id">
                        <td class="px-6 py-4 text-sm">{{ artist.id }}</td>
                        <td class="px-6 py-4">
                            <img :src="artist.avatar_image" class="w-8 h-8 object-cover rounded-full" />
                        </td>
                        <td class="px-6 py-4 text-sm font-medium">{{ artist.name }}</td>
                        <td class="px-6 py-4 text-sm">{{ artist.bio?.slice(0, 50) }}...</td>
                        <td class="px-6 py-4 text-sm space-x-2">
                            <button @click="openEditModal(artist)" class="text-blue-600 hover:text-blue-800">✏️ Edit</button>
                            <button @click="deleteItem(artist.id)" class="text-red-600 hover:text-red-800">🗑️ Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 class="text-xl font-bold mb-4">{{ editingItem ? 'Edit Artist' : 'Add Artist' }}</h3>
                
                <div class="space-y-3">
                    <input v-model="formData.name" placeholder="Name" class="w-full p-2 border rounded" />
                    <textarea v-model="formData.bio" placeholder="Bio" rows="3" class="w-full p-2 border rounded"></textarea>
                    <input v-model="formData.avatar_image" placeholder="Avatar Image URL" class="w-full p-2 border rounded" />
                    <input v-model="formData.website_url" placeholder="Website URL" class="w-full p-2 border rounded" />
                </div>
                
                <div class="flex justify-end gap-2 mt-6">
                    <button @click="showModal = false" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button @click="saveItem" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>