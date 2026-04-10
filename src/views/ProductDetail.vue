<script setup>
import { ref, onMounted, watch, computed } from "vue";
import { useRoute, RouterLink, useRouter } from "vue-router";
import { getTrackById, getYouTubeEmbedUrl, getAllTracks } from "../api/api";
import productCart from "../components/product-cart.vue";
import footerContent from "../components/footer-content.vue";

const route = useRoute();
const router = useRouter();
const product = ref(null);
const loading = ref(true);
const error = ref(null);
const relatedTracks = ref([]);

// Get product ID from route
const productId = computed(() => route.params.id);

// Fetch product details from API
const fetchProductDetail = async () => {
  try {
    loading.value = true;
    error.value = null;
    const data = await getTrackById(productId.value);

    // Check if data is empty or doesn't have required fields
    if (!data || Object.keys(data).length === 0 || !data.id) {
      throw new Error("Track not found");
    }

    product.value = data;
    console.log("Product from API:", product.value);
  } catch (err) {
    error.value = err.message;
    console.error("Error fetching product:", err);

    // Auto redirect to home after 2 seconds if track not found
    if (err.message === "Track not found" || err.message.includes("404")) {
      setTimeout(() => {
        router.push("/");
      }, 2000);
    }
  } finally {
    loading.value = false;
  }
};

// Fetch related tracks
const fetchRelatedTracks = async () => {
  try {
    const tracks = await getAllTracks();
    // Filter out current product and get first 7
    const currentId = parseInt(productId.value);
    relatedTracks.value = tracks.filter((t) => t.id !== currentId).slice(0, 7);
  } catch (err) {
    console.error("Error fetching related tracks:", err);
  }
};

// Get YouTube embed URL
const getYoutubeUrl = () => {
  if (product.value?.youtube_link) {
    return getYouTubeEmbedUrl(product.value.youtube_link);
  }
  return "";
};

// Check if YouTube link exists
const hasYoutube = computed(() => {
  return getYoutubeUrl() !== "";
});

// Go back to home manually
const goBackToHome = () => {
  router.push("/");
};

// Watch for route changes
watch(productId, () => {
  fetchProductDetail();
  fetchRelatedTracks();
  window.scrollTo(0, 0);
});

onMounted(() => {
  fetchProductDetail();
  fetchRelatedTracks();
});
</script>

<template>
  <div
    class="wrap bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen w-full"
  >
    <!-- Loading State -->
    <div v-if="loading" class="flex justify-center items-center h-screen">
      <div class="text-center">
        <div
          class="animate-spin rounded-full h-16 w-16 border-4 border-blue-600 border-t-transparent mx-auto mb-4"
        ></div>
        <p class="text-lg text-gray-600">Loading track...</p>
      </div>
    </div>

    <!-- Error State - Track Not Found -->
    <div
      v-else-if="error"
      class="flex justify-center items-center h-screen px-4"
    >
      <div
        class="text-center max-w-md mx-auto p-8 bg-white rounded-2xl shadow-xl border border-red-100"
      >
        <div class="text-7xl mb-4">😢</div>
        <p class="text-xl text-red-600 font-semibold mb-2">Track Not Found</p>
        <p class="text-gray-600 mb-4">{{ error }}</p>
        <p class="text-sm text-gray-500 mb-6">
          The track you're looking for doesn't exist or has been removed.
        </p>
        <button
          @click="goBackToHome"
          class="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
        >
          ← Back to Home
        </button>
      </div>
    </div>

    <!-- Product Detail -->
    <div v-else class="max-w-7xl mx-auto px-4 py-6 md:py-10">
      <!-- Breadcrumb -->
      <div class="mb-6">
        <div class="flex items-center gap-2 text-sm text-gray-500">
          <RouterLink to="/" class="hover:text-blue-600 transition"
            >Home</RouterLink
          >
          <span>›</span>
          <span class="text-gray-800">{{ product.category || "Music" }}</span>
          <span>›</span>
          <span class="text-blue-600 font-medium">{{ product.title }}</span>
        </div>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Left Column - Images & Video -->
        <div class="space-y-6">
          <!-- Main Image Card -->
          <div
            class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <img
              :src="product.cover_image"
              :alt="product.title"
              class="w-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <!-- YouTube Embed Card -->
          <div
            v-if="hasYoutube"
            class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3">
              <h3 class="font-semibold text-white flex items-center gap-2">
                <span class="text-xl"
                  ><i class="fa-brands fa-youtube"></i
                ></span>
                Music Video
              </h3>
            </div>
            <div class="relative pb-[56.25%] h-0">
              <iframe
                :src="getYoutubeUrl()"
                class="absolute top-0 left-0 w-full h-full"
                frameborder="0"
                allow="
                  accelerometer;
                  autoplay;
                  clipboard-write;
                  encrypted-media;
                  gyroscope;
                  picture-in-picture;
                "
                allowfullscreen
              >
              </iframe>
            </div>
          </div>

          <!-- No YouTube message -->
          <div
            v-else
            class="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div class="bg-gradient-to-r from-gray-600 to-gray-700 px-5 py-3">
              <h3 class="font-semibold text-white flex items-center gap-2">
                <span class="text-xl"
                  ><i class="fa-solid fa-compact-disc"></i
                ></span>
                Music Video
              </h3>
            </div>
            <div class="p-8 text-center">
              <div class="text-5xl mb-3">
                <i class="fa-solid fa-compact-disc"></i>
              </div>
              <p class="text-gray-500">
                No music video available for this track
              </p>
            </div>
          </div>
        </div>

        <!-- Right Column - Details -->
        <div class="space-y-6">
          <!-- Title & Artist Card -->
          <div
            class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          >
            <div class="mb-2">
              <span
                class="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full"
              >
                {{ product.category || "Single" }}
              </span>
            </div>
            <h1 class="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              {{ product.title }}
            </h1>
            <div class="flex items-center gap-3 mb-4">
              <div
                class="w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold"
              >
                {{ (product.artist_name || "A").charAt(0).toUpperCase() }}
              </div>
              <p class="text-xl text-gray-600 font-medium">
                {{ product.artist_name }}
              </p>
            </div>
          </div>

          <!-- Description Card -->
          <div
            class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          >
            <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span class="text-xl"
                ><i class="fa-solid fa-notes-medical"></i
              ></span>
              Description
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{
                product.full_description ||
                product.description ||
                "No description available"
              }}
            </p>
          </div>

          <!-- Lyrics Card - Modern Design -->
          <div
            class="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <!-- Header with decorative accent -->
            <div class="relative">
              <div
                class="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500"
              ></div>
              <div class="p-5 md:p-6">
                <h3
                  class="font-bold text-gray-800 mb-4 flex items-center gap-2 text-lg md:text-xl"
                >
                  <div
                    class="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-md"
                  >
                    <i class="fa-solid fa-music text-sm"></i>
                  </div>
                  <span>Lyrics</span>
                  <span
                    class="text-xs font-normal text-gray-400 ml-2 hidden sm:inline"
                    >— let the music speak</span
                  >
                </h3>

                <!-- Lyrics Content with better readability -->
                <div class="relative">
                  <!-- Decorative quote marks for large screens -->
                  <div
                    class="hidden lg:block absolute -top-2 -left-2 text-6xl text-gray-200 font-serif select-none"
                  >
                    "
                  </div>

                  <div class="relative z-10">
                    <p
                      class="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg lg:text-base xl:text-lg whitespace-pre-line font-light italic"
                    >
                      {{ product.lyrics || "No lyrics available" }}
                    </p>
                  </div>

                  <!-- Decorative quote marks for large screens -->
                  <div
                    class="hidden lg:block absolute -bottom-6 -right-2 text-6xl text-gray-200 font-serif select-none"
                  >
                    "
                  </div>
                </div>

                <!-- Optional: Audio wave decoration at bottom -->
                <div
                  class="mt-6 flex justify-center gap-1 opacity-30"
                  v-if="product.lyrics"
                >
                  <div
                    class="w-1 h-2 bg-purple-500 rounded-full animate-pulse"
                    style="animation-delay: 0s"
                  ></div>
                  <div
                    class="w-1 h-3 bg-purple-500 rounded-full animate-pulse"
                    style="animation-delay: 0.2s"
                  ></div>
                  <div
                    class="w-1 h-4 bg-purple-500 rounded-full animate-pulse"
                    style="animation-delay: 0.4s"
                  ></div>
                  <div
                    class="w-1 h-3 bg-purple-500 rounded-full animate-pulse"
                    style="animation-delay: 0.6s"
                  ></div>
                  <div
                    class="w-1 h-2 bg-purple-500 rounded-full animate-pulse"
                    style="animation-delay: 0.8s"
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <!-- Production Info Card -->
          <div
            class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          >
            <h3 class="font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span class="text-xl"
                ><i class="fa-solid fa-circle-info"></i
              ></span>
              Production Details
            </h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div v-if="product.producer" class="bg-gray-50 rounded-xl p-3">
                <p class="text-xs text-gray-500 mb-1">Producer</p>
                <p class="font-semibold text-gray-800">
                  {{ product.producer }}
                </p>
              </div>
              <div v-if="product.writer" class="bg-gray-50 rounded-xl p-3">
                <p class="text-xs text-gray-500 mb-1">Writer</p>
                <p class="font-semibold text-gray-800">{{ product.writer }}</p>
              </div>
              <div v-if="product.bpm" class="bg-gray-50 rounded-xl p-3">
                <p class="text-xs text-gray-500 mb-1">BPM</p>
                <p class="font-semibold text-gray-800">{{ product.bpm }}</p>
              </div>
              <div
                v-if="product.key_signature"
                class="bg-gray-50 rounded-xl p-3"
              >
                <p class="text-xs text-gray-500 mb-1">Key</p>
                <p class="font-semibold text-gray-800">
                  {{ product.key_signature }}
                </p>
              </div>
            </div>
          </div>

          <!-- Category Card -->
          <div
            class="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
          >
            <h3 class="font-bold text-gray-800 mb-3 flex items-center gap-2">
              <span class="text-xl"
                ><i class="fa-solid fa-layer-group"></i
              ></span>
              Category
            </h3>
            <div class="flex flex-wrap gap-2">
              <span
                class="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-medium"
              >
                {{ product.category }}
              </span>
            </div>
          </div>

          <!-- Back Button -->
          <div class="flex gap-3">
            <RouterLink
              to="/"
              class="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center font-semibold"
            >
              ← Back to Home
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Related Products Section -->
      <div class="mt-16">
        <div class="flex items-center justify-between mb-6">
          <div class="flex items-center gap-3">
            <div
              class="w-1 h-8 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full"
            ></div>
            <h1 class="text-2xl font-bold text-gray-800">YOU MAY ALSO LIKE</h1>
          </div>
          <RouterLink
            to="/"
            class="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center gap-1"
          >
            View All
            <svg
              class="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </RouterLink>
        </div>

        <div
          v-if="relatedTracks.length === 0"
          class="text-center py-12 bg-white rounded-2xl shadow-md"
        >
          <div class="text-5xl mb-3">
            <i class="fa-solid fa-compact-disc"></i>
          </div>
          <p class="text-gray-500">No related tracks found</p>
        </div>
        <div
          v-else
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <productCart
            v-for="item in relatedTracks"
            :key="item.id"
            :product="item"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Custom scrollbar for modern look */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #c7d2fe;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #818cf8;
}
</style>
