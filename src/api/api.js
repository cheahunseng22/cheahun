// Base URL - change this to your production URL when deploying
// const BASE_URL = 'https://music-api-a78l.onrender.com/api';
const BASE_URL = 'http://139.59.253.179:8000/api';


// Helper function for handling fetch requests
async function handleRequest(url, options = {}) {
    try {
        const response = await fetch(url, {
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.detail || 'Something went wrong');
        }

        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        throw error;
    }
}

// ============================================
// PUBLIC ROUTES
// ============================================

// 1. Get all tracks (for homepage cards)
export async function getAllTracks() {
    return handleRequest(`${BASE_URL}/tracks`);
}

// 2. Get single track with all details
export async function getTrackById(id) {
    return handleRequest(`${BASE_URL}/tracks/${id}`);
}

// 3. Get tracks by category
export async function getTracksByCategory(slug) {
    return handleRequest(`${BASE_URL}/categories/${slug}/tracks`);
}

// 4. Get all categories
export async function getAllCategories() {
    return handleRequest(`${BASE_URL}/categories`);
}

// 5. Get all artist groups
export async function getAllArtists() {
    return handleRequest(`${BASE_URL}/artists`);
}

// 6. Get tracks by artist
export async function getTracksByArtist(artistId) {
    return handleRequest(`${BASE_URL}/artists/${artistId}/tracks`);
}

// 7. Get new releases
// 7. Get new releases
export async function getNewReleases() {
    return handleRequest(`${BASE_URL}/admin/new-releases`);
}

// 8. Search tracks
export async function searchTracks(query) {
    return handleRequest(`${BASE_URL}/tracks/search?q=${encodeURIComponent(query)}`);
}

// 9. Get featured tracks
export async function getFeaturedTracks() {
    return handleRequest(`${BASE_URL}/tracks/featured`);
}

// ============================================
// ADMIN ROUTES (TRACKS)
// ============================================

// Create track
export async function createTrack(trackData) {
    return handleRequest(`${BASE_URL}/admin/tracks`, {
        method: 'POST',
        body: JSON.stringify(trackData),
    });
}

// Update track
export async function updateTrack(id, trackData) {
    return handleRequest(`${BASE_URL}/admin/tracks/${id}`, {
        method: 'PUT',
        body: JSON.stringify(trackData),
    });
}

// Delete track
export async function deleteTrack(id) {
    return handleRequest(`${BASE_URL}/admin/tracks/${id}`, {
        method: 'DELETE',
    });
}

// ============================================
// ADMIN ROUTES (TRACK DETAILS)
// ============================================

// Add track details
export async function addTrackDetail(trackId, detailData) {
    return handleRequest(`${BASE_URL}/admin/tracks/${trackId}/detail`, {
        method: 'POST',
        body: JSON.stringify(detailData),
    });
}

// Update track details
export async function updateTrackDetail(trackId, detailData) {
    return handleRequest(`${BASE_URL}/admin/tracks/${trackId}/detail`, {
        method: 'PUT',
        body: JSON.stringify(detailData),
    });
}

// ============================================
// ADMIN ROUTES (CATEGORIES)
// ============================================

// Create category
export async function createCategory(categoryData) {
    return handleRequest(`${BASE_URL}/admin/categories`, {
        method: 'POST',
        body: JSON.stringify(categoryData),
    });
}

// Update category
export async function updateCategory(id, categoryData) {
    return handleRequest(`${BASE_URL}/admin/categories/${id}`, {
        method: 'PUT',
        body: JSON.stringify(categoryData),
    });
}

// Delete category
export async function deleteCategory(id) {
    return handleRequest(`${BASE_URL}/admin/categories/${id}`, {
        method: 'DELETE',
    });
}

// ============================================
// ADMIN ROUTES (ARTISTS)
// ============================================

// Create artist
export async function createArtist(artistData) {
    return handleRequest(`${BASE_URL}/admin/artists`, {
        method: 'POST',
        body: JSON.stringify(artistData),
    });
}

// Update artist
export async function updateArtist(id, artistData) {
    return handleRequest(`${BASE_URL}/admin/artists/${id}`, {
        method: 'PUT',
        body: JSON.stringify(artistData),
    });
}

// Delete artist
export async function deleteArtist(id) {
    return handleRequest(`${BASE_URL}/admin/artists/${id}`, {
        method: 'DELETE',
    });
}

// ============================================
// ADMIN ROUTES (NEW RELEASES)
// ============================================

// Add to new releases
export async function addToNewReleases(data) {
    return handleRequest(`${BASE_URL}/admin/new-releases`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
}

// Update release status
export async function updateReleaseStatus(trackId, releaseStatus) {
    return handleRequest(`${BASE_URL}/admin/new-releases/${trackId}?release_status=${releaseStatus}`, {
        method: 'PUT',
    });
}

// Remove from new releases
export async function removeFromNewReleases(trackId) {
    return handleRequest(`${BASE_URL}/admin/new-releases/${trackId}`, {
        method: 'DELETE',
    });
}

// ============================================
// HELPER: Get full YouTube embed URL
// ============================================
export function getYouTubeEmbedUrl(url) {
    if (!url) return '';
    
    // Handle different YouTube URL formats
    if (url.includes('youtube.com/embed/')) {
        return url;
    }

    if (url.includes('youtu.be/')) {
        const videoId = url.split('youtu.be/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    
    if (url.includes('watch?v=')) {
        const videoId = url.split('watch?v=')[1].split('&')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    
    if (url.includes('youtube.com/shorts/')) {
        const videoId = url.split('shorts/')[1].split('?')[0];
        return `https://www.youtube.com/embed/${videoId}`;
    }
    
    return url;
}



// ============================================
// DEFAULT EXPORT (optional)
// ============================================
export default {
    // Public
    getAllTracks,
    getTrackById,
    getTracksByCategory,
    getAllCategories,
    getAllArtists,
    getTracksByArtist,
    getNewReleases,
    searchTracks,
    getFeaturedTracks,
    // Admin Tracks
    createTrack,
    updateTrack,
    deleteTrack,
    // Admin Track Details
    addTrackDetail,
    updateTrackDetail,
    // Admin Categories
    createCategory,
    updateCategory,
    deleteCategory,
    // Admin Artists
    createArtist,
    updateArtist,
    deleteArtist,
    // Admin New Releases
    addToNewReleases,
    updateReleaseStatus,
    removeFromNewReleases,
    // Helpers
    getYouTubeEmbedUrl,
};