<template>
  <div class="original-content-component">
    
    <!-- Hero Section - Glassmorphism Style -->
    <div class="max-w-7xl mx-auto px-4 mt-6">
      <div class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-900 via-purple-800 to-pink-800 p-8 md:p-12">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div class="absolute bottom-0 left-0 w-48 h-48 bg-pink-500/20 rounded-full blur-2xl"></div>
        
        <div class="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div class="flex items-center gap-2 mb-3">
              <i class="fa-solid fa-bolt text-yellow-400 text-xl"></i>
              <span class="text-white/80 text-sm font-mono">EST. 2026</span>
            </div>
            <h1 class="text-3xl md:text-5xl font-black text-white mb-3">
              INDEPENDENT<br>
              <span class="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">MUSIC HUB</span>
            </h1>
            <p class="text-white/80 text-sm md:text-base max-w-md">Discover original songs from talented artists. Each track includes producer credits and authentic song stories.</p>
            <div class="flex flex-wrap gap-3 mt-5">
              <div class="bg-white/10 backdrop-blur rounded-full px-4 py-1.5">
                <i class="fa-solid fa-headphones text-purple-300 mr-2"></i>
                <span class="text-white text-sm">500+ Songs</span>
              </div>
              <div class="bg-white/10 backdrop-blur rounded-full px-4 py-1.5">
                <i class="fa-solid fa-users text-purple-300 mr-2"></i>
                <span class="text-white text-sm">100+ Artists</span>
              </div>
              <div class="bg-white/10 backdrop-blur rounded-full px-4 py-1.5">
                <i class="fa-solid fa-sliders-h text-purple-300 mr-2"></i>
                <span class="text-white text-sm">50+ Producers</span>
              </div>
            </div>
          </div>
          <div class="text-right">
            <div class="bg-white/10 backdrop-blur rounded-2xl p-4 inline-block">
              <i class="fa-regular fa-copyright text-white/60 text-sm"></i>
              <span class="text-white/60 text-sm ml-1">2026 All Rights Reserved</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Artist Spotlight - Unique Card Design -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          <h2 class="text-2xl md:text-3xl font-black text-gray-800">ARTIST SPOTLIGHT</h2>
        </div>
        <i class="fa-solid fa-arrow-right text-gray-400 text-xl"></i>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Card 1 - Neon Border -->
        <div class="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
          <div class="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative bg-white m-0.5 rounded-2xl p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <i class="fa-solid fa-microphone-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 text-lg">Behind The Beat</h3>
                  <p class="text-xs text-gray-500">
                    <i class="fa-regular fa-clock mr-1"></i> Exclusive Interview
                  </p>
                </div>
              </div>
              <i class="fa-solid fa-quote-right text-3xl text-gray-200"></i>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">"Every song on this platform has its own story. From the first demo to final mastering, we work closely with producers to bring authentic sounds to listeners. The creative process is what makes independent music so special."</p>
            <div class="flex justify-between items-center pt-3 border-t border-gray-100">
              <span class="text-xs text-purple-600">
                <i class="fa-solid fa-sliders-h mr-1"></i> Producer: Marcus Chen
              </span>
              <router-link to="/contact" class="text-xs font-semibold text-gray-800 group-hover:text-purple-600 transition">
                Read Story <i class="fa-solid fa-arrow-right ml-1"></i>
              </router-link>
            </div>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02]">
          <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div class="relative bg-white m-0.5 rounded-2xl p-6">
            <div class="flex items-start justify-between mb-4">
              <div class="flex items-center gap-3">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center">
                  <i class="fa-solid fa-headphones text-white text-xl"></i>
                </div>
                <div>
                  <h3 class="font-bold text-gray-800 text-lg">Track of The Week</h3>
                  <p class="text-xs text-gray-500">
                    <i class="fa-regular fa-star mr-1"></i> Editor's Choice
                  </p>
                </div>
              </div>
              <div class="bg-yellow-100 px-2 py-1 rounded-full text-xs font-bold text-yellow-700">
                HOT <i class="fa-solid fa-fire ml-1"></i>
              </div>
            </div>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">"Midnight Echoes" combines emotional lyrics with atmospheric production. The artist spent 6 months perfecting this single, working with Grammy-nominated producers to create something truly unique and memorable.</p>
            <div class="flex justify-between items-center pt-3 border-t border-gray-100">
              <span class="text-xs text-pink-600">
                <i class="fa-solid fa-play-circle mr-1"></i> "Midnight Echoes" - Sarah J.
              </span>
              <router-link to="/faq" class="text-xs font-semibold text-gray-800 group-hover:text-pink-600 transition">
                Listen Now <i class="fa-solid fa-arrow-right ml-1"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Stats Section - Animated Numbers -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div class="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
          <i class="fa-solid fa-music text-3xl text-purple-500 mb-2"></i>
          <div class="text-3xl font-black text-gray-800">500+</div>
          <div class="text-xs text-gray-500 mt-1">Original Tracks</div>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
          <i class="fa-solid fa-users text-3xl text-pink-500 mb-2"></i>
          <div class="text-3xl font-black text-gray-800">100+</div>
          <div class="text-xs text-gray-500 mt-1">Independent Artists</div>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
          <i class="fa-solid fa-sliders-h text-3xl text-purple-500 mb-2"></i>
          <div class="text-3xl font-black text-gray-800">50+</div>
          <div class="text-xs text-gray-500 mt-1">Producers</div>
        </div>
        <div class="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
          <i class="fa-solid fa-chart-line text-3xl text-pink-500 mb-2"></i>
          <div class="text-3xl font-black text-gray-800">24/7</div>
          <div class="text-xs text-gray-500 mt-1">Fresh Music</div>
        </div>
      </div>
    </div>

    <!-- Producer Corner - Grid Layout -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        <h2 class="text-2xl md:text-3xl font-black text-gray-800">PRODUCER CORNER</h2>
        <i class="fa-solid fa-sliders-h text-purple-500"></i>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div class="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
              <i class="fa-solid fa-user-astronaut text-white"></i>
            </div>
            <div>
              <p class="font-bold text-gray-800 text-sm">Alex Rivera</p>
              <p class="text-xs text-gray-500">Senior Producer</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 italic">"Working with independent artists allows creative freedom you don't get anywhere else. Every track is a unique journey."</p>
          <div class="mt-3 flex gap-2">
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
          </div>
        </div>
        
        <div class="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
              <i class="fa-solid fa-guitar text-white"></i>
            </div>
            <div>
              <p class="font-bold text-gray-800 text-sm">Maya Kumar</p>
              <p class="text-xs text-gray-500">Music Producer</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 italic">"The embed system makes it easy for artists to share their music anywhere on the web. It's a game-changer for exposure."</p>
          <div class="mt-3 flex gap-2">
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-regular fa-star text-gray-300 text-xs"></i>
          </div>
        </div>
        
        <div class="bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
          <div class="flex items-center gap-3 mb-3">
            <div class="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center">
              <i class="fa-solid fa-headphones text-white"></i>
            </div>
            <div>
              <p class="font-bold text-gray-800 text-sm">James Wilson</p>
              <p class="text-xs text-gray-500">Sound Engineer</p>
            </div>
          </div>
          <p class="text-sm text-gray-600 italic">"Quality over quantity. Every track here has been carefully mixed and mastered to industry standards."</p>
          <div class="mt-3 flex gap-2">
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
            <i class="fa-solid fa-star text-yellow-400 text-xs"></i>
          </div>
        </div>
      </div>
    </div>

    <!-- WORKING EMAIL FORM - Using mailto fallback (No CORS) -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="rounded-3xl overflow-hidden shadow-2xl">
        <div class="bg-gradient-to-r from-purple-900 to-pink-900 p-8 md:p-12">
          <div class="text-center text-white mb-8">
            <i class="fa-regular fa-paper-plane text-4xl mb-3 inline-block"></i>
            <h3 class="text-2xl md:text-3xl font-black mb-2">Join The Community</h3>
            <p class="text-white/80 max-w-md mx-auto">Get weekly updates about new artists, producer interviews, and exclusive content</p>
          </div>
          
          <form @submit.prevent="sendEmail" class="max-w-lg mx-auto">
            <div class="bg-white/10 backdrop-blur rounded-2xl p-1 flex flex-col sm:flex-row gap-3">
              <div class="flex-1 flex items-center gap-2 px-4">
                <i class="fa-regular fa-envelope text-white/60"></i>
                <input 
                  type="email" 
                  v-model="formEmail"
                  required
                  placeholder="Your email address" 
                  class="w-full bg-transparent text-white placeholder-white/50 outline-none py-3 text-sm"
                >
              </div>
              <button 
                type="submit"
                class="bg-white text-purple-700 px-6 py-3 rounded-xl font-bold text-sm hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
              >
                <i class="fa-regular fa-paper-plane"></i>
                Subscribe
              </button>
            </div>
            <p class="text-center text-white/60 text-xs mt-4">
              <i class="fa-regular fa-bell mr-1"></i> No spam. Unsubscribe anytime.
            </p>
          </form>
          
          <!-- Success/Error Toast Messages -->
          <div v-if="showSuccess" class="fixed bottom-5 right-5 bg-green-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 z-50 animate-slide-up">
            <i class="fa-solid fa-check-circle"></i>
            <span>Subscribed successfully! Check your email.</span>
          </div>
          <div v-if="showError" class="fixed bottom-5 right-5 bg-red-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2 z-50 animate-slide-up">
            <i class="fa-solid fa-exclamation-circle"></i>
            <span>{{ errorMessage }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- FAQ Accordion Section -->
    <div class="max-w-7xl mx-auto px-4 mt-12">
      <div class="flex items-center gap-3 mb-6">
        <div class="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
        <h2 class="text-2xl md:text-3xl font-black text-gray-800">FAQs</h2>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-2xl p-5 border border-gray-100 hover:shadow-lg transition">
          <div class="flex items-start gap-3">
            <i class="fa-solid fa-circle-question text-purple-500 text-xl mt-0.5"></i>
            <div>
              <h4 class="font-bold text-gray-800 mb-2">{{ faq.question }}</h4>
              <p class="text-sm text-gray-600">{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center mt-6">
        <router-link to="/faq" class="inline-flex items-center gap-2 text-purple-600 font-semibold text-sm hover:gap-3 transition-all">
          View All Questions <i class="fa-solid fa-arrow-right"></i>
        </router-link>
      </div>
    </div>

    <!-- Footer Links (Fixed copyright route) -->
    <div class="max-w-7xl mx-auto px-4 mt-12 mb-8">
      <div class="border-t border-gray-200 pt-8">
        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 text-center">
          <router-link to="/contact" class="text-gray-500 hover:text-purple-600 transition text-sm flex items-center justify-center gap-2">
            <i class="fa-regular fa-envelope"></i> Contact
          </router-link>
          <router-link to="/faq" class="text-gray-500 hover:text-purple-600 transition text-sm flex items-center justify-center gap-2">
            <i class="fa-regular fa-circle-question"></i> FAQ
          </router-link>
          <router-link to="/privacy" class="text-gray-500 hover:text-purple-600 transition text-sm flex items-center justify-center gap-2">
            <i class="fa-solid fa-shield-haltered"></i> Privacy
          </router-link>
          <router-link to="/terms" class="text-gray-500 hover:text-purple-600 transition text-sm flex items-center justify-center gap-2">
            <i class="fa-solid fa-file-lines"></i> Terms
          </router-link>
          <router-link to="/cookies" class="text-gray-500 hover:text-purple-600 transition text-sm flex items-center justify-center gap-2">
            <i class="fa-solid fa-cookie-bite"></i> Cookies
          </router-link>
          <router-link to="/copyright" class="text-gray-500 hover:text-purple-600 transition text-sm flex items-center justify-center gap-2">
            <i class="fa-regular fa-copyright"></i> Copyright
          </router-link>
        </div>
        
        <div class="text-center mt-8 pt-6 border-t border-gray-100">
          <p class="text-xs text-gray-400">
            <i class="fa-regular fa-copyright mr-1"></i> 2026 Independent Music Hub. All original content protected.
          </p>
          <p class="text-xs text-gray-400 mt-1">
            <i class="fa-solid fa-music mr-1"></i> Each track includes embed URL, song description, and producer credits
          </p>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

// Email form data
const formEmail = ref('')
const showSuccess = ref(false)
const showError = ref(false)
const errorMessage = ref('')

// FAQ Data
const faqs = ref([
  {
    question: 'How do I submit my music?',
    answer: 'Artists can submit their original tracks through our artist portal. Each submission is reviewed within 5-7 business days.'
  },
  {
    question: 'Is the music copyright protected?',
    answer: 'Yes, all tracks are protected under copyright law. Each artist retains ownership of their work. © 2026'
  },
  {
    question: 'Can I embed tracks on my website?',
    answer: 'Yes, each track comes with an embed URL that you can share anywhere on the web.'
  },
  {
    question: 'Who are the producers?',
    answer: 'Each track includes full producer credits and studio information.'
  }
])

// Send email - Opens email client (No CORS, works everywhere)
const sendEmail = () => {
  if (!formEmail.value) return
  
  const subject = encodeURIComponent('Music Platform Newsletter Subscription')
  const body = encodeURIComponent(`Hello,\n\nI would like to subscribe to the music platform newsletter.\n\nMy email: ${formEmail.value}\n\nThank you!`)
  
  // Open default email client
  window.location.href = `mailto:cheahun2016@gmail.com?subject=${subject}&body=${body}`
  
  // Show success message
  showSuccess.value = true
  setTimeout(() => { showSuccess.value = false }, 3000)
  
  // Clear input
  formEmail.value = ''
}
</script>

<style scoped>
/* Custom animations */
@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}

.group:hover .group-hover\:opacity-100 {
  opacity: 1;
}
</style>