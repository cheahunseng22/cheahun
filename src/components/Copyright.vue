<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
    <div class="max-w-4xl mx-auto px-4 py-12 md:py-16">
      
      <!-- Hero Section -->
      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg mb-6">
          <i class="fa-regular fa-copyright text-white text-3xl"></i>
        </div>
        <h1 class="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
          Copyright Notice
        </h1>
        <div class="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
        <p class="text-gray-500 mt-4 text-sm">Last updated: January 2026</p>
      </div>

      <!-- Main Content Card -->
      <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        
        <!-- Year Badge -->
        <div class="bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-4">
          <div class="flex items-center justify-between flex-wrap gap-3">
            <div class="flex items-center gap-3">
              <i class="fa-regular fa-copyright text-white text-xl"></i>
              <span class="text-white font-bold text-lg">2026 Independent Music Hub</span>
            </div>
            <div class="bg-white/20 backdrop-blur rounded-full px-4 py-1">
              <span class="text-white text-sm">
                <i class="fa-solid fa-shield-haltered mr-1"></i> All Rights Reserved
              </span>
            </div>
          </div>
        </div>

        <!-- Content Sections -->
        <div class="p-6 md:p-8 space-y-8">
          
          <!-- Ownership Section -->
          <div class="group">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition">
                <i class="fa-solid fa-music text-purple-600 text-xl"></i>
              </div>
              <div class="flex-1">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  Ownership
                  <span class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Section 1</span>
                </h2>
                <p class="text-gray-600 leading-relaxed">
                  All original music, song descriptions, producer credits, and artist content on this platform are protected under international copyright law. Unauthorized reproduction, distribution, or modification is strictly prohibited.
                </p>
              </div>
            </div>
          </div>

          <!-- Artist Rights Section -->
          <div class="group">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center group-hover:bg-pink-200 transition">
                <i class="fa-solid fa-users text-pink-600 text-xl"></i>
              </div>
              <div class="flex-1">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  Artist Rights
                  <span class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Section 2</span>
                </h2>
                <p class="text-gray-600 leading-relaxed">
                  Each artist retains <span class="font-semibold text-purple-600">100% ownership</span> of their original work. We respect artist intellectual property and provide full producer credits for every track. Any unauthorized use of artist content may result in legal action.
                </p>
                <div class="mt-3 flex flex-wrap gap-2">
                  <span class="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-full">
                    <i class="fa-solid fa-check-circle mr-1"></i> Full Ownership
                  </span>
                  <span class="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                    <i class="fa-solid fa-sliders-h mr-1"></i> Producer Credits
                  </span>
                  <span class="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded-full">
                    <i class="fa-solid fa-lock mr-1"></i> Legal Protection
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Embedded Content Section -->
          <div class="group">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-200 transition">
                <i class="fa-solid fa-code text-orange-600 text-xl"></i>
              </div>
              <div class="flex-1">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  Embedded Content
                  <span class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Section 3</span>
                </h2>
                <p class="text-gray-600 leading-relaxed">
                  Songs on this platform include <span class="bg-gray-100 px-1 py-0.5 rounded font-mono text-sm">embed URLs</span> for sharing across the web. When embedding content, you must maintain proper attribution to the original artist and producer. Embedded content may not be used for commercial purposes without explicit permission.
                </p>
                <div class="mt-3 bg-gray-50 rounded-xl p-3 border border-gray-200">
                  <p class="text-xs text-gray-500 flex items-center gap-2">
                    <i class="fa-solid fa-info-circle text-purple-500"></i>
                    Example embed code includes artist name, song title, and producer credits automatically
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- DMCA Compliance -->
          <div class="group">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition">
                <i class="fa-solid fa-gavel text-red-600 text-xl"></i>
              </div>
              <div class="flex-1">
                <h2 class="text-xl md:text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                  DMCA Compliance
                  <span class="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">Section 4</span>
                </h2>
                <p class="text-gray-600 leading-relaxed">
                  We comply with the Digital Millennium Copyright Act (DMCA). If you believe your copyrighted work has been used improperly, please submit a DMCA takedown notice to our designated agent.
                </p>
              </div>
            </div>
          </div>

          <!-- Contact Section -->
          <div class="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 mt-6">
            <div class="flex flex-col md:flex-row items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <i class="fa-regular fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800">Copyright Contact</h3>
                  <p class="text-sm text-gray-600">For all copyright inquiries and takedown notices</p>
                </div>
              </div>
              <a href="mailto:cheahun2016@gmail.com" class="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-xl font-semibold text-purple-600 hover:bg-purple-50 transition shadow-sm">
                <i class="fa-regular fa-paper-plane"></i>
                cheahun2016@gmail.com
              </a>
            </div>
          </div>

          <!-- Footer Note -->
          <div class="border-t border-gray-200 pt-6 mt-6">
            <div class="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
              <div class="flex items-center gap-3">
                <i class="fa-regular fa-clock text-gray-400"></i>
                <span class="text-gray-500">Effective: January 1, 2026</span>
              </div>
              <div class="flex items-center gap-3">
                <i class="fa-solid fa-globe text-gray-400"></i>
                <span class="text-gray-500">International Copyright Protection</span>
              </div>
              <div class="flex items-center gap-3">
                <i class="fa-regular fa-file-lines text-gray-400"></i>
                <router-link to="/terms" class="text-purple-500 hover:text-purple-700 transition">
                  View Terms of Use →
                </router-link>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Back to Home Button -->
      <div class="text-center mt-8">
        <router-link to="/" class="inline-flex items-center gap-2 text-gray-500 hover:text-purple-600 transition text-sm">
          <i class="fa-solid fa-arrow-left"></i>
          Back to Home
        </router-link>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Smooth transitions */
.group:hover .group-hover\:bg-purple-200 {
  transition: all 0.3s ease;
}

/* Custom animation for the hero icon */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.inline-flex.items-center.justify-center {
  animation: float 3s ease-in-out infinite;
}
</style>