<template>
  <div class="music-blog-component">
    
    <!-- ========== SECTION 1: Weekly Charts & Editorials ========== -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          <h2 class="text-2xl md:text-3xl font-black text-gray-800">
            <i class="fa-solid fa-chart-simple text-purple-500 mr-2"></i>
            WEEKLY CHARTS
          </h2>
        </div>
        <span class="text-xs bg-gray-100 px-3 py-1 rounded-full">
          <i class="fa-regular fa-calendar mr-1"></i> Updated Weekly
        </span>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Top 5 Chart -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition">
          <div class="bg-gradient-to-r from-purple-500 to-pink-500 px-5 py-3">
            <h3 class="text-white font-bold flex items-center gap-2">
              <i class="fa-solid fa-crown text-yellow-300"></i>
              Top 5 Most Played This Week
            </h3>
          </div>
          <div class="divide-y divide-gray-100">
            <div v-for="(track, index) in topTracks" :key="index" class="flex items-center gap-4 p-4 hover:bg-purple-50 transition group">
              <div class="w-8 h-8 rounded-full bg-gray-100 group-hover:bg-purple-200 flex items-center justify-center font-bold text-gray-600 group-hover:text-purple-700 transition">
                {{ index + 1 }}
              </div>
              <div class="flex-1">
                <p class="font-semibold text-gray-800 text-sm">{{ track.name }}</p>
                <p class="text-xs text-gray-500">{{ track.artist }}</p>
              </div>
              <div class="text-right">
                <div class="flex items-center gap-1 text-xs text-gray-500">
                  <i class="fa-solid fa-headphones text-purple-500 text-xs"></i>
                  <span>{{ track.plays }}K plays</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Editor's Pick -->
        <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition">
          <div class="bg-gradient-to-r from-pink-500 to-orange-500 px-5 py-3">
            <h3 class="text-white font-bold flex items-center gap-2">
              <i class="fa-regular fa-star text-yellow-300"></i>
              Editor's Pick of the Week
            </h3>
          </div>
          <div class="p-5">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
                <i class="fa-solid fa-microphone-alt text-white text-2xl"></i>
              </div>
              <div>
                <p class="font-bold text-gray-800">"Aliens"</p>
                <p class="text-sm text-gray-500">BTS • 2026</p>
                <div class="flex items-center gap-1 mt-1">
                  <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                  <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                  <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                  <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                  <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                </div>
              </div>
            </div>
            <p class="text-sm text-gray-600 leading-relaxed">"A groundbreaking track that pushes musical boundaries. BTS delivers an otherworldly experience with 'Aliens' - blending futuristic sounds with emotional depth. This week's most played track deserves the crown!"</p>
            <div class="mt-3 flex items-center gap-2 text-xs text-gray-500">
              <i class="fa-solid fa-sliders-h text-purple-500"></i>
              <span>Producer: Pdogg</span>
              <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
              <i class="fa-regular fa-clock"></i>
              <span>3:52 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ========== SECTION 2: Artist Spotlight (Featuring Your Artists) ========== -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        <h2 class="text-2xl md:text-3xl font-black text-gray-800">
          <i class="fa-solid fa-microphone-alt text-purple-500 mr-2"></i>
          ARTIST SPOTLIGHT
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <!-- BTS Spotlight -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">
          <div class="h-32 bg-gradient-to-br from-purple-400 to-pink-400 relative flex items-center justify-center">
            <i class="fa-solid fa-users text-white text-5xl opacity-50"></i>
          </div>
          <div class="p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">Top Artist</span>
              <span class="text-xs text-gray-400">
                <i class="fa-regular fa-calendar"></i> Active 2026
              </span>
            </div>
            <h3 class="font-bold text-gray-800 mb-2">BTS</h3>
            <p class="text-sm text-gray-600">With hits like "Aliens" and "Hooligan", BTS continues to dominate the charts. Their unique sound and powerful performances have earned them the #1 spot this week.</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span class="text-xs bg-gray-100 px-2 py-1 rounded-full">🎵 Aliens</span>
              <span class="text-xs bg-gray-100 px-2 py-1 rounded-full">🎵 Hooligan</span>
            </div>
          </div>
        </div>

        <!-- G-Devith Spotlight -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">
          <div class="h-32 bg-gradient-to-br from-blue-400 to-purple-400 relative flex items-center justify-center">
            <i class="fa-solid fa-microphone text-white text-5xl opacity-50"></i>
          </div>
          <div class="p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">Rising Star</span>
              <span class="text-xs text-gray-400">
                <i class="fa-regular fa-calendar"></i> Fresh Track
              </span>
            </div>
            <h3 class="font-bold text-gray-800 mb-2">G-Devith</h3>
            <p class="text-sm text-gray-600">"Don't Flex" is taking over the airwaves! This emerging artist brings raw energy and authentic lyrics that resonate with listeners worldwide.</p>
            <div class="mt-3">
              <span class="text-xs bg-gray-100 px-2 py-1 rounded-full">🎵 Don't Flex</span>
            </div>
          </div>
        </div>

        <!-- TXT & Vannda Spotlight -->
        <div class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition group">
          <div class="h-32 bg-gradient-to-br from-green-400 to-teal-400 relative flex items-center justify-center">
            <i class="fa-solid fa-music text-white text-5xl opacity-50"></i>
          </div>
          <div class="p-5">
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Trending</span>
              <span class="text-xs text-gray-400">
                <i class="fa-regular fa-calendar"></i> Fan Favorites
              </span>
            </div>
            <h3 class="font-bold text-gray-800 mb-2">TXT & Vannda</h3>
            <p class="text-sm text-gray-600">"Stick With You" by TXT and "Baby Mama" by Vannda are climbing the charts rapidly. These artists are defining the sound of 2026.</p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span class="text-xs bg-gray-100 px-2 py-1 rounded-full">🎵 Stick With You</span>
              <span class="text-xs bg-gray-100 px-2 py-1 rounded-full">🎵 Baby Mama</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ========== SECTION 3: Genre Guides ========== -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        <h2 class="text-2xl md:text-3xl font-black text-gray-800">
          <i class="fa-solid fa-book-open text-purple-500 mr-2"></i>
          EXPLORE BY GENRE
        </h2>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer shadow-lg">
          <i class="fa-solid fa-drum text-white text-2xl mb-2"></i>
          <h4 class="font-bold text-white text-sm">K-Pop</h4>
          <p class="text-xs text-white/80 mt-1">BTS • TXT • More</p>
        </div>
        <div class="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer shadow-lg">
          <i class="fa-solid fa-microphone-alt text-white text-2xl mb-2"></i>
          <h4 class="font-bold text-white text-sm">Hip Hop</h4>
          <p class="text-xs text-white/80 mt-1">G-Devith • Vannda</p>
        </div>
        <div class="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer shadow-lg">
          <i class="fa-solid fa-headphones text-white text-2xl mb-2"></i>
          <h4 class="font-bold text-white text-sm">R&B</h4>
          <p class="text-xs text-white/80 mt-1">Smooth Vibes</p>
        </div>
        <div class="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-4 text-center hover:scale-105 transition-transform cursor-pointer shadow-lg">
          <i class="fa-solid fa-guitar text-white text-2xl mb-2"></i>
          <h4 class="font-bold text-white text-sm">Indie</h4>
          <p class="text-xs text-white/80 mt-1">Alternative Sounds</p>
        </div>
      </div>
    </div>

    <!-- ========== SECTION 4: Music Production Tips ========== -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="bg-gradient-to-r from-gray-900 to-purple-900 rounded-3xl overflow-hidden shadow-xl">
        <div class="p-6 md:p-8">
          <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <i class="fa-solid fa-sliders-h text-purple-400 text-xl"></i>
                <span class="text-purple-400 text-sm font-mono">PRODUCER TIPS</span>
              </div>
              <h3 class="text-2xl md:text-3xl font-black text-white">Behind the Hits</h3>
              <p class="text-gray-300 text-sm mt-1">How top tracks like "Aliens" are made</p>
            </div>
            <router-link to="/faq" class="bg-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-purple-700 transition flex items-center gap-2">
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </router-link>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="bg-white/10 backdrop-blur rounded-xl p-4">
              <i class="fa-solid fa-computer text-purple-400 text-2xl mb-2 block"></i>
              <h4 class="text-white font-bold mb-1">Vocal Production</h4>
              <p class="text-gray-300 text-xs">How BTS achieves their signature layered harmonies.</p>
            </div>
            <div class="bg-white/10 backdrop-blur rounded-xl p-4">
              <i class="fa-solid fa-waveform text-purple-400 text-2xl mb-2 block"></i>
              <h4 class="text-white font-bold mb-1">Beat Making</h4>
              <p class="text-gray-300 text-xs">The secret behind G-Devith's "Don't Flex" beat.</p>
            </div>
            <div class="bg-white/10 backdrop-blur rounded-xl p-4">
              <i class="fa-solid fa-chart-line text-purple-400 text-2xl mb-2 block"></i>
              <h4 class="text-white font-bold mb-1">Mixing Secrets</h4>
              <p class="text-gray-300 text-xs">Industry techniques used by top producers in 2026.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ========== SECTION 5: Community Spotlight ========== -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        <h2 class="text-2xl md:text-3xl font-black text-gray-800">
          <i class="fa-solid fa-heart text-purple-500 mr-2"></i>
          FAN TESTIMONIALS
        </h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-quote-left text-purple-300 text-2xl"></i>
            <div>
              <p class="text-gray-600 italic text-sm">"Been following BTS since their debut. 'Aliens' is their best work yet! Love how this platform showcases all the producer credits."</p>
              <div class="flex items-center gap-2 mt-3">
                <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <i class="fa-solid fa-user text-purple-600 text-sm"></i>
                </div>
                <div>
                  <p class="text-xs font-semibold text-gray-800">ARMY4Life</p>
                  <div class="flex gap-0.5 mt-0.5">
                    <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-quote-left text-pink-300 text-2xl"></i>
            <div>
              <p class="text-gray-600 italic text-sm">"Discovered G-Devith through this platform. 'Don't Flex' is on repeat! The embed feature lets me share tracks with friends easily."</p>
              <div class="flex items-center gap-2 mt-3">
                <div class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                  <i class="fa-solid fa-user text-pink-600 text-sm"></i>
                </div>
                <div>
                  <p class="text-xs font-semibold text-gray-800">MusicLover_KH</p>
                  <div class="flex gap-0.5 mt-0.5">
                    <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                    <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
                    <i class="fa-regular fa-star text-gray-300 text-xs"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- ========== SECTION 6: Upcoming Releases ========== -->
    <div class="max-w-7xl mx-auto px-4 mt-12 mb-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        <h2 class="text-2xl md:text-3xl font-black text-gray-800">
          <i class="fa-regular fa-calendar-alt text-purple-500 mr-2"></i>
          COMING SOON
        </h2>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div class="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
              <i class="fa-solid fa-calendar-week text-purple-600"></i>
            </div>
            <div>
              <p class="text-xs text-purple-600 font-bold">JAN 28, 2026</p>
              <p class="font-semibold text-gray-800 text-sm">New BTS Single</p>
            </div>
          </div>
          <p class="text-xs text-gray-500">Untitled track • Coming soon</p>
        </div>
        <div class="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
              <i class="fa-solid fa-calendar-week text-pink-600"></i>
            </div>
            <div>
              <p class="text-xs text-pink-600 font-bold">FEB 1, 2026</p>
              <p class="font-semibold text-gray-800 text-sm">G-Devith EP</p>
            </div>
          </div>
          <p class="text-xs text-gray-500">5 new tracks • Hip Hop</p>
        </div>
        <div class="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <i class="fa-solid fa-calendar-week text-blue-600"></i>
            </div>
            <div>
              <p class="text-xs text-blue-600 font-bold">FEB 5, 2026</p>
              <p class="font-semibold text-gray-800 text-sm">TXT Mini Album</p>
            </div>
          </div>
          <p class="text-xs text-gray-500">"Stick With You" + more</p>
        </div>
        <div class="bg-white rounded-xl p-4 border border-gray-100 hover:shadow-lg transition">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
              <i class="fa-solid fa-calendar-week text-green-600"></i>
            </div>
            <div>
              <p class="text-xs text-green-600 font-bold">FEB 10, 2026</p>
              <p class="font-semibold text-gray-800 text-sm">Vannda Album</p>
            </div>
          </div>
          <p class="text-xs text-gray-500">"Baby Mama" + New Hits</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// YOUR REAL TOP 5 TRACKS
const topTracks = ref([
  { name: "Aliens", artist: "BTS", plays: 45.2 },
  { name: "Don't Flex", artist: "G-Devith", plays: 38.7 },
  { name: "Stick With You", artist: "TXT", plays: 32.1 },
  { name: "Hooligan", artist: "BTS", plays: 28.5 },
  { name: "Baby Mama", artist: "Vannda", plays: 24.3 }
])
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>