<script setup>
import { ref, onMounted } from 'vue';
import { getAllCategories, createCategory, updateCategory, deleteCategory } from '../../api/api';

const categories = ref([]);
const loading = ref(false);
const showModal = ref(false);
const editingItem = ref(null);

const formData = ref({
    name: '',
    slug: '',
    description: ''
});

const fetchData = async () => {
    loading.value = true;
    try {
        categories.value = await getAllCategories();
    } catch (error) {
        console.error('Error fetching categories:', error);
        alert('Failed to fetch categories');
    } finally {
        loading.value = false;
    }
};

const openCreateModal = () => {
    editingItem.value = null;
    formData.value = { name: '', slug: '', description: '' };
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
            await updateCategory(editingItem.value.id, formData.value);
            alert('Category updated successfully');
        } else {
            await createCategory(formData.value);
            alert('Category created successfully');
        }
        showModal.value = false;
        fetchData();
    } catch (error) {
        console.error('Error saving category:', error);
        alert('Failed to save category');
    }
};

const deleteItem = async (id) => {
    if (confirm('Are you sure you want to delete this category?')) {
        try {
            await deleteCategory(id);
            alert('Category deleted successfully');
            fetchData();
        } catch (error) {
            console.error('Error deleting category:', error);
            alert('Failed to delete category');
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
            <h2 class="text-2xl font-bold">Manage Categories</h2>
            <button @click="openCreateModal" class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                + Add Category
            </button>
        </div>
        
        <div v-if="loading" class="text-center py-10">Loading...</div>
        
        <div v-else class="overflow-x-auto bg-white rounded-lg shadow">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Slug</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200">
                    <tr v-for="cat in categories" :key="cat.id">
                        <td class="px-6 py-4 text-sm">{{ cat.id }}</td>
                        <td class="px-6 py-4 text-sm font-medium">{{ cat.name }}</td>
                        <td class="px-6 py-4 text-sm">{{ cat.slug }}</td>
                        <td class="px-6 py-4 text-sm">{{ cat.description }}</td>
                        <td class="px-6 py-4 text-sm space-x-2">
                            <button @click="openEditModal(cat)" class="text-blue-600 hover:text-blue-800">✏️ Edit</button>
                            <button @click="deleteItem(cat.id)" class="text-red-600 hover:text-red-800">🗑️ Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white rounded-lg p-6 w-full max-w-md">
                <h3 class="text-xl font-bold mb-4">{{ editingItem ? 'Edit Category' : 'Add Category' }}</h3>
                
                <div class="space-y-3">
                    <input v-model="formData.name" placeholder="Name" class="w-full p-2 border rounded" />
                    <input v-model="formData.slug" placeholder="Slug (e.g., hip-hop)" class="w-full p-2 border rounded" />
                    <textarea v-model="formData.description" placeholder="Description" rows="3" class="w-full p-2 border rounded"></textarea>
                </div>
                
                <div class="flex justify-end gap-2 mt-6">
                    <button @click="showModal = false" class="px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button @click="saveItem" class="px-4 py-2 bg-blue-600 text-white rounded">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>