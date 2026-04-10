<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { 
    getAllTracks, createTrack, updateTrack, deleteTrack, addTrackDetail, updateTrackDetail,
    getAllCategories, createCategory, updateCategory, deleteCategory,
    getAllArtists, createArtist, updateArtist, deleteArtist,
    getNewReleases, addToNewReleases, updateReleaseStatus, removeFromNewReleases
} from '../api/api';

const router = useRouter();
const activeTab = ref('tracks');

// Data stores
const tracks = ref([]);
const categories = ref([]);
const artists = ref([]);
const releases = ref([]);
const allTracksForRelease = ref([]);

// Loading states
const loading = ref({ tracks: false, categories: false, artists: false, releases: false });

// Modal states
const showTrackModal = ref(false);
const showCategoryModal = ref(false);
const showArtistModal = ref(false);
const showReleaseModal = ref(false);
const showDetailModal = ref(false);

// Editing states
const editingTrack = ref(null);
const editingCategory = ref(null);
const editingArtist = ref(null);
const currentTrack = ref(null);

// Form data
const trackForm = ref({
    title: '', cover_image: '', duration: '', release_date: '', category_id: null, artist_group_id: null, is_published: true
});

const categoryForm = ref({ name: '', slug: '', description: '' });
const artistForm = ref({ name: '', bio: '', avatar_image: '', website_url: '' });
const releaseForm = ref({ track_id: null, release_status: 'upcoming', is_featured: false });
const detailForm = ref({ youtube_link: '', full_description: '', lyrics: '', producer: '', writer: '', bpm: null, key_signature: '' });

// Check auth
onMounted(() => {
    const token = localStorage.getItem('adminToken');
    if (!token) router.push('/admin/login');
    fetchAllData();
});

const fetchAllData = async () => {
    await Promise.all([fetchTracks(), fetchCategories(), fetchArtists(), fetchReleases()]);
};

const fetchTracks = async () => {
    loading.value.tracks = true;
    try {
        tracks.value = await getAllTracks();
    } catch (error) { console.error(error); alert('Failed to fetch tracks'); }
    finally { loading.value.tracks = false; }
};

const fetchCategories = async () => {
    loading.value.categories = true;
    try {
        categories.value = await getAllCategories();
    } catch (error) { console.error(error); alert('Failed to fetch categories'); }
    finally { loading.value.categories = false; }
};

const fetchArtists = async () => {
    loading.value.artists = true;
    try {
        artists.value = await getAllArtists();
        allTracksForRelease.value = tracks.value;
    } catch (error) { console.error(error); alert('Failed to fetch artists'); }
    finally { loading.value.artists = false; }
};

const fetchReleases = async () => {
    loading.value.releases = true;
    try {
        releases.value = await getNewReleases();
    } catch (error) { console.error(error); alert('Failed to fetch releases'); }
    finally { loading.value.releases = false; }
};

// ============ TRACK CRUD ============
const openTrackModal = (track = null) => {
    editingTrack.value = track;
    if (track) {
        trackForm.value = { ...track };
    } else {
        trackForm.value = { title: '', cover_image: '', duration: '', release_date: '', category_id: null, artist_group_id: null, is_published: true };
    }
    showTrackModal.value = true;
};

const saveTrack = async () => {
    try {
        if (editingTrack.value) {
            await updateTrack(editingTrack.value.id, trackForm.value);
            alert('Track updated successfully');
        } else {
            await createTrack(trackForm.value);
            alert('Track created successfully');
        }
        showTrackModal.value = false;
        fetchTracks();
    } catch (error) { alert('Failed to save track'); }
};

const deleteTrackItem = async (id) => {
    if (confirm('Delete this track? This will also delete its details and new release status.')) {
        try {
            await deleteTrack(id);
            alert('Track deleted');
            fetchTracks();
            fetchReleases();
        } catch (error) { alert('Failed to delete track'); }
    }
};

const openDetailModal = (track) => {
    currentTrack.value = track;
    detailForm.value = {
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



const saveDetail = async () => {
    try {
        // Always use PUT (it works for both create and update in FastAPI)
        await updateTrackDetail(currentTrack.value.id, detailForm.value);
        alert('Details saved successfully');
        
        showDetailModal.value = false;
        await fetchTracks();
        
    } catch (error) { 
        console.error("Error saving details:", error);
        
        // If PUT fails, try POST
        try {
            await addTrackDetail(currentTrack.value.id, detailForm.value);
            alert('Details added successfully');
            showDetailModal.value = false;
            await fetchTracks();
        } catch (postError) {
            alert('Failed to save details: ' + (error.message || 'Unknown error'));
        }
    }
};

// ============ CATEGORY CRUD ============
const openCategoryModal = (cat = null) => {
    editingCategory.value = cat;
    categoryForm.value = cat ? { ...cat } : { name: '', slug: '', description: '' };
    showCategoryModal.value = true;
};

const saveCategory = async () => {
    try {
        if (editingCategory.value) {
            await updateCategory(editingCategory.value.id, categoryForm.value);
            alert('Category updated');
        } else {
            await createCategory(categoryForm.value);
            alert('Category created');
        }
        showCategoryModal.value = false;
        fetchCategories();
    } catch (error) { alert('Failed to save category'); }
};

const deleteCategoryItem = async (id) => {
    if (confirm('Delete this category?')) {
        try {
            await deleteCategory(id);
            alert('Category deleted');
            fetchCategories();
        } catch (error) { alert('Failed to delete category'); }
    }
};

// ============ ARTIST CRUD ============
const openArtistModal = (artist = null) => {
    editingArtist.value = artist;
    artistForm.value = artist ? { ...artist } : { name: '', bio: '', avatar_image: '', website_url: '' };
    showArtistModal.value = true;
};

const saveArtist = async () => {
    try {
        if (editingArtist.value) {
            await updateArtist(editingArtist.value.id, artistForm.value);
            alert('Artist updated');
        } else {
            await createArtist(artistForm.value);
            alert('Artist created');
        }
        showArtistModal.value = false;
        fetchArtists();
    } catch (error) { alert('Failed to save artist'); }
};

const deleteArtistItem = async (id) => {
    if (confirm('Delete this artist?')) {
        try {
            await deleteArtist(id);
            alert('Artist deleted');
            fetchArtists();
        } catch (error) { alert('Failed to delete artist'); }
    }
};

// ============ NEW RELEASES CRUD ============
const openReleaseModal = () => {
    releaseForm.value = { track_id: null, release_status: 'upcoming', is_featured: false };
    showReleaseModal.value = true;
};

const saveRelease = async () => {
    if (!releaseForm.value.track_id) { 
        alert('Select a track'); 
        return; 
    }
    try {
        const trackId = parseInt(releaseForm.value.track_id);
        
        // Find the selected track
        const selectedTrack = tracks.value.find(t => t.id === trackId);
        
        // Use track's release_date or today's date
        const releaseDate = selectedTrack?.release_date || new Date().toISOString().split('T')[0];
        
        const params = new URLSearchParams();
        params.append('track_id', trackId);
        params.append('release_status', releaseForm.value.release_status);
        params.append('is_featured', releaseForm.value.is_featured);
        params.append('release_date', releaseDate);
        
        const url = `https://music-api-a78l.onrender.com/api/admin/new-releases?${params.toString()}`;
        
        console.log("Sending to URL:", url);
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
        });
        
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP ${response.status}: ${errorText}`);
        }
        
        const data = await response.json();
        console.log("Success:", data);
        
        alert('Added to new releases successfully!');
        showReleaseModal.value = false;
        await fetchReleases();
        
    } catch (error) { 
        console.error("Error:", error);
        alert('Failed to add release: ' + error.message); 
    }
};

const updateRelease = async (trackId, status) => {
    try {
        const url = new URL(`https://music-api-a78l.onrender.com/api/admin/new-releases/${trackId}`);
        url.searchParams.append('release_status', status);
        
        console.log("Update URL:", url.toString());
        
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
            },
        });
        
        console.log("Update response status:", response.status);
        
        if (!response.ok) {
            const errorText = await response.text();
            console.error("Update error:", errorText);
            throw new Error('Failed to update status');
        }
        
        const data = await response.json();
        console.log("Update success:", data);
        
        alert('Status updated successfully!');
        await fetchReleases();
        
    } catch (error) { 
        console.error("Update error:", error);
        alert('Failed to update status: ' + error.message); 
    }
};

const deleteRelease = async (trackId) => {
    if (confirm('Remove from new releases?')) {
        try {
            const url = ` https://music-api-a78l.onrender.com/api/admin/new-releases/${trackId}`;
            
            console.log("Delete URL:", url);
            
            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                },
            });
            
            console.log("Delete response status:", response.status);
            
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Delete error:", errorText);
                throw new Error('Failed to remove');
            }
            
            const data = await response.json();
            console.log("Delete success:", data);
            
            alert('Removed successfully!');
            await fetchReleases();
            
        } catch (error) { 
            console.error("Delete error:", error);
            alert('Failed to remove: ' + error.message); 
        }
    }
};


const logout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
};
</script>

<template>
    <div class="admin-full-page">
        <aside class="admin-sidebar">
            <div class="sidebar-logo">
                <div class="logo-icon">🎵</div>
                <div class="logo-text">Admin Panel</div>
                <div class="logo-sub">Music Management</div>
            </div>
            <nav class="sidebar-nav">
                <button @click="activeTab = 'tracks'" :class="['nav-item', { active: activeTab === 'tracks' }]">
                    <span class="nav-icon">🎵</span><span>Tracks</span>
                </button>
                <button @click="activeTab = 'categories'" :class="['nav-item', { active: activeTab === 'categories' }]">
                    <span class="nav-icon">📁</span><span>Categories</span>
                </button>
                <button @click="activeTab = 'artists'" :class="['nav-item', { active: activeTab === 'artists' }]">
                    <span class="nav-icon">🎤</span><span>Artists</span>
                </button>
                <button @click="activeTab = 'releases'" :class="['nav-item', { active: activeTab === 'releases' }]">
                    <span class="nav-icon">🆕</span><span>New Releases</span>
                </button>
            </nav>
            <button @click="logout" class="logout-btn">🚪 Logout</button>
        </aside>

        <main class="admin-main">
            <div class="admin-header">
                <h1 class="page-title">{{ activeTab.toUpperCase() }} Management</h1>
                <div class="admin-badge">⚡ Admin Mode</div>
            </div>

            <!-- TRACKS TAB -->
            <div v-if="activeTab === 'tracks'" class="content-card">
                <div class="card-header">
                    <h2>All Tracks</h2>
                    <button @click="openTrackModal()" class="btn-primary">+ Add Track</button>
                </div>
                <div v-if="loading.tracks" class="loading">Loading tracks...</div>
                <div v-else-if="tracks.length === 0" class="empty-state">📭 No tracks yet. Click "Add Track" to create one.</div>
                <div v-else class="table-wrapper">
                    <table class="data-table">
                        <thead><tr><th>ID</th><th>Cover</th><th>Title</th><th>Artist</th><th>Category</th><th>Duration</th><th>Actions</th></tr></thead>
                        <tbody>
                            <tr v-for="track in tracks" :key="track.id">
                                <td>{{ track.id }}</td>
                                <td><img :src="track.cover_image" class="table-avatar" /></td>
                                <td class="font-bold">{{ track.title }}</td>
                                <td>{{ track.artist_name }}</td>
                                <td>{{ track.category }}</td>
                                <td>{{ track.duration }}</td>
                                <td class="actions">
                                    <button @click="openDetailModal(track)" class="btn-detail" title="Details">📝</button>
                                    <button @click="openTrackModal(track)" class="btn-edit" title="Edit">✏️</button>
                                    <button @click="deleteTrackItem(track.id)" class="btn-delete" title="Delete">🗑️</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- CATEGORIES TAB -->
            <div v-if="activeTab === 'categories'" class="content-card">
                <div class="card-header">
                    <h2>All Categories</h2>
                    <button @click="openCategoryModal()" class="btn-primary">+ Add Category</button>
                </div>
                <div v-if="loading.categories" class="loading">Loading categories...</div>
                <div v-else-if="categories.length === 0" class="empty-state">📁 No categories yet.</div>
                <div v-else class="table-wrapper">
                    <table class="data-table">
                        <thead><tr><th>ID</th><th>Name</th><th>Slug</th><th>Description</th><th>Actions</th></tr></thead>
                        <tbody>
                            <tr v-for="cat in categories" :key="cat.id">
                                <td>{{ cat.id }}</td>
                                <td class="font-bold">{{ cat.name }}</td>
                                <td>{{ cat.slug }}</td>
                                <td>{{ cat.description }}</td>
                                <td class="actions">
                                    <button @click="openCategoryModal(cat)" class="btn-edit">✏️</button>
                                    <button @click="deleteCategoryItem(cat.id)" class="btn-delete">🗑️</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- ARTISTS TAB -->
            <div v-if="activeTab === 'artists'" class="content-card">
                <div class="card-header">
                    <h2>All Artists</h2>
                    <button @click="openArtistModal()" class="btn-primary">+ Add Artist</button>
                </div>
                <div v-if="loading.artists" class="loading">Loading artists...</div>
                <div v-else-if="artists.length === 0" class="empty-state">🎤 No artists yet.</div>
                <div v-else class="table-wrapper">
                    <table class="data-table">
                        <thead><tr><th>ID</th><th>Avatar</th><th>Name</th><th>Bio</th><th>Website</th><th>Actions</th></tr></thead>
                        <tbody>
                            <tr v-for="artist in artists" :key="artist.id">
                                <td>{{ artist.id }}</td>
                                <td><img :src="artist.avatar_image" class="table-avatar rounded-full" /></td>
                                <td class="font-bold">{{ artist.name }}</td>
                                <td>{{ artist.bio?.slice(0, 50) }}...</td>
                                <td><a :href="artist.website_url" target="_blank" class="link">Visit</a></td>
                                <td class="actions">
                                    <button @click="openArtistModal(artist)" class="btn-edit">✏️</button>
                                    <button @click="deleteArtistItem(artist.id)" class="btn-delete">🗑️</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <!-- NEW RELEASES TAB -->
            <div v-if="activeTab === 'releases'" class="content-card">
                <div class="card-header">
                    <h2>New Releases</h2>
                    <button @click="openReleaseModal()" class="btn-primary">+ Add Release</button>
                </div>
                <div v-if="loading.releases" class="loading">Loading releases...</div>
                <div v-else-if="releases.length === 0" class="empty-state">🆕 No new releases yet.</div>
                <div v-else class="grid-releases">
                    <div v-for="release in releases" :key="release.id" class="release-card">
                        <img :src="release.cover_image" class="release-img" />
                        <div class="release-info">
                            <h3>{{ release.title }}</h3>
                            <p>{{ release.artist_name }}</p>
                            <span :class="['status-badge', release.release_status]">{{ release.release_status }}</span>
                        </div>
                        <div class="release-actions">
                            <select @change="updateRelease(release.track_id, $event.target.value)" class="status-select">
                                <option value="upcoming" :selected="release.release_status === 'upcoming'">Upcoming</option>
                                <option value="just_released" :selected="release.release_status === 'just_released'">Just Released</option>
                                <option value="new" :selected="release.release_status === 'new'">New</option>
                            </select>
                           <button @click="deleteRelease(release.track_id)" class="btn-delete-sm">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- TRACK MODAL -->
        <div v-if="showTrackModal" class="modal-overlay" @click.self="showTrackModal = false">
            <div class="modal">
                <h3>{{ editingTrack ? 'Edit Track' : 'Add Track' }}</h3>
                <input v-model="trackForm.title" placeholder="Title" />
                <input v-model="trackForm.cover_image" placeholder="Cover Image URL" />
                <input v-model="trackForm.duration" placeholder="Duration (e.g., 3:45)" />
                <input v-model="trackForm.release_date" type="date" />
                <input v-model="trackForm.category_id" type="number" placeholder="Category ID" />
                <input v-model="trackForm.artist_group_id" type="number" placeholder="Artist ID" />
                <label><input v-model="trackForm.is_published" type="checkbox" /> Published</label>
                <div class="modal-buttons">
                    <button @click="showTrackModal = false" class="btn-cancel">Cancel</button>
                    <button @click="saveTrack" class="btn-save">Save</button>
                </div>
            </div>
        </div>

        <!-- DETAIL MODAL -->
        <div v-if="showDetailModal" class="modal-overlay" @click.self="showDetailModal = false">
            <div class="modal large">
                <h3>Track Details: {{ currentTrack?.title }}</h3>
                <input v-model="detailForm.youtube_link" placeholder="YouTube URL" />
                <textarea v-model="detailForm.full_description" placeholder="Full Description" rows="3"></textarea>
                <textarea v-model="detailForm.lyrics" placeholder="Lyrics" rows="3"></textarea>
                <input v-model="detailForm.producer" placeholder="Producer" />
                <input v-model="detailForm.writer" placeholder="Writer" />
                <input v-model="detailForm.bpm" type="number" placeholder="BPM" />
                <input v-model="detailForm.key_signature" placeholder="Key Signature" />
                <div class="modal-buttons">
                    <button @click="showDetailModal = false" class="btn-cancel">Cancel</button>
                    <button @click="saveDetail" class="btn-save">Save Details</button>
                </div>
            </div>
        </div>

        <!-- CATEGORY MODAL -->
        <div v-if="showCategoryModal" class="modal-overlay" @click.self="showCategoryModal = false">
            <div class="modal">
                <h3>{{ editingCategory ? 'Edit Category' : 'Add Category' }}</h3>
                <input v-model="categoryForm.name" placeholder="Name" />
                <input v-model="categoryForm.slug" placeholder="Slug (e.g., hip-hop)" />
                <textarea v-model="categoryForm.description" placeholder="Description"></textarea>
                <div class="modal-buttons">
                    <button @click="showCategoryModal = false" class="btn-cancel">Cancel</button>
                    <button @click="saveCategory" class="btn-save">Save</button>
                </div>
            </div>
        </div>

        <!-- ARTIST MODAL -->
        <div v-if="showArtistModal" class="modal-overlay" @click.self="showArtistModal = false">
            <div class="modal">
                <h3>{{ editingArtist ? 'Edit Artist' : 'Add Artist' }}</h3>
                <input v-model="artistForm.name" placeholder="Name" />
                <textarea v-model="artistForm.bio" placeholder="Bio"></textarea>
                <input v-model="artistForm.avatar_image" placeholder="Avatar Image URL" />
                <input v-model="artistForm.website_url" placeholder="Website URL" />
                <div class="modal-buttons">
                    <button @click="showArtistModal = false" class="btn-cancel">Cancel</button>
                    <button @click="saveArtist" class="btn-save">Save</button>
                </div>
            </div>
        </div>

        <!-- RELEASE MODAL -->
        <div v-if="showReleaseModal" class="modal-overlay" @click.self="showReleaseModal = false">
            <div class="modal">
                <h3>Add to New Releases</h3>
                <select v-model="releaseForm.track_id">
                    <option :value="null">Select a track</option>
                    <option v-for="track in tracks" :key="track.id" :value="track.id">{{ track.title }} - {{ track.artist_name }}</option>
                </select>
                <select v-model="releaseForm.release_status">
                    <option value="upcoming">Upcoming</option>
                    <option value="just_released">Just Released</option>
                    <option value="new">New</option>
                </select>
                <label><input v-model="releaseForm.is_featured" type="checkbox" /> Featured</label>
                <div class="modal-buttons">
                    <button @click="showReleaseModal = false" class="btn-cancel">Cancel</button>
                    <button @click="saveRelease" class="btn-save">Add</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.admin-full-page {
    display: flex;
    min-height: 100vh;
    background: #0a0a0f;
    font-family: 'Inter', system-ui, sans-serif;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
}

/* Sidebar */
.admin-sidebar {
    width: 280px;
    background: linear-gradient(180deg, #12121a 0%, #0a0a0f 100%);
    display: flex;
    flex-direction: column;
    border-right: 1px solid rgba(255,255,255,0.05);
}

.sidebar-logo {
    padding: 32px 24px;
    border-bottom: 1px solid rgba(255,255,255,0.08);
    margin-bottom: 24px;
}

.logo-icon { font-size: 40px; margin-bottom: 12px; }
.logo-text { font-size: 20px; font-weight: 700; color: white; }
.logo-sub { font-size: 11px; color: #6b7280; margin-top: 4px; }

.sidebar-nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 0 16px;
}

.nav-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px 16px;
    border-radius: 12px;
    background: transparent;
    border: none;
    color: #9ca3af;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
}

.nav-item:hover, .nav-item.active {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.logout-btn {
    margin: 24px 16px 32px;
    padding: 12px;
    border-radius: 12px;
    background: rgba(239,68,68,0.15);
    border: 1px solid rgba(239,68,68,0.3);
    color: #f87171;
    cursor: pointer;
}

/* Main Content */
.admin-main {
    flex: 1;
    overflow-y: auto;
    padding: 24px 32px;
}

.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
}

.page-title {
    font-size: 24px;
    font-weight: 700;
    color: white;
}

.admin-badge {
    padding: 6px 14px;
    background: rgba(16,185,129,0.15);
    border-radius: 40px;
    color: #10b981;
    font-size: 12px;
}

.content-card {
    background: rgba(255,255,255,0.03);
    border-radius: 20px;
    padding: 24px;
    border: 1px solid rgba(255,255,255,0.05);
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.card-header h2 { color: #e5e7eb; font-size: 18px; }

.btn-primary {
    padding: 8px 16px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
}

.table-wrapper { overflow-x: auto; }
.data-table { width: 100%; border-collapse: collapse; }
.data-table th { text-align: left; padding: 12px; color: #9ca3af; font-size: 12px; border-bottom: 1px solid rgba(255,255,255,0.08); }
.data-table td { padding: 12px; color: #d1d5db; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.05); }
.table-avatar { width: 32px; height: 32px; object-fit: cover; border-radius: 8px; }

.actions { display: flex; gap: 8px; }
.btn-detail, .btn-edit, .btn-delete { background: none; border: none; cursor: pointer; font-size: 16px; padding: 4px; }
.btn-detail { color: #60a5fa; }
.btn-edit { color: #fbbf24; }
.btn-delete { color: #f87171; }

.empty-state, .loading { text-align: center; padding: 40px; color: #6b7280; }

.grid-releases { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
.release-card { background: rgba(255,255,255,0.05); border-radius: 12px; padding: 12px; display: flex; gap: 12px; align-items: center; }
.release-img { width: 60px; height: 60px; object-fit: cover; border-radius: 8px; }
.release-info { flex: 1; }
.release-info h3 { color: white; font-size: 14px; }
.release-info p { color: #9ca3af; font-size: 12px; }
.status-badge { font-size: 10px; padding: 2px 8px; border-radius: 20px; }
.status-badge.upcoming { background: #fbbf24; color: #000; }
.status-badge.just_released { background: #10b981; color: #fff; }
.status-badge.new { background: #3b82f6; color: #fff; }

.modal-overlay {
    position: fixed; top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 1000;
}
.modal {
    background: #1a1a2e; border-radius: 20px; padding: 24px; width: 90%; max-width: 500px;
}
.modal.large { max-width: 600px; }
.modal h3 { color: white; margin-bottom: 20px; }
.modal input, .modal textarea, .modal select {
    width: 100%; padding: 10px; margin-bottom: 12px; background: rgba(255,255,255,0.1);
    border: 1px solid rgba(255,255,255,0.2); border-radius: 8px; color: white;
}
.modal label { color: #9ca3af; display: flex; align-items: center; gap: 8px; margin-bottom: 12px; }
.modal-buttons { display: flex; justify-content: flex-end; gap: 12px; margin-top: 20px; }
.btn-cancel { padding: 8px 16px; background: rgba(255,255,255,0.1); border: none; border-radius: 8px; color: white; cursor: pointer; }
.btn-save { padding: 8px 16px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border: none; border-radius: 8px; color: white; cursor: pointer; }
.btn-delete-sm { padding: 4px 8px; background: rgba(239,68,68,0.2); border: none; border-radius: 6px; color: #f87171; cursor: pointer; font-size: 11px; }
.status-select { padding: 4px 8px; background: rgba(255,255,255,0.1); border: none; border-radius: 6px; color: white; font-size: 11px; }
.link { color: #60a5fa; text-decoration: none; }
.font-bold { font-weight: 600; }
.rounded-full { border-radius: 50%; }
</style>