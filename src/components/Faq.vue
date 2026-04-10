<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index;
};

const faqCategories = [
  {
    name: "Music & Videos",
    icon: "🎵",
    faqs: [
      {
        question: "What is this website about?",
        answer: "This platform is designed for discovering music, exploring song meanings, and watching embedded music videos in one place. It focuses on creating a simple and enjoyable music experience."
      },
      {
        question: "Do you host the music videos?",
        answer: "No, we do not host videos. All videos are embedded from official YouTube sources to ensure proper rights and quality content."
      },
      {
        question: "Can I listen to music here?",
        answer: "Yes, you can listen to music through embedded YouTube videos directly on the page without leaving the website."
      },
      {
        question: "Is this free to use?",
        answer: "Yes, the website is completely free for users to explore music and enjoy content."
      }
    ]
  },
  {
    name: "Fun & Experience",
    icon: "🎧",
    faqs: [
      {
        question: "Why do some songs feel emotional?",
        answer: "Music triggers emotions based on melody, lyrics, and personal memory. Slow tempo songs often create a deep emotional connection with listeners."
      },
      {
        question: "Why do people listen to the same song repeatedly?",
        answer: "Repetition creates emotional comfort. When a song connects with someone’s feelings, the brain enjoys replaying that emotional experience."
      },
      {
        question: "What makes a song popular?",
        answer: "A song becomes popular through a mix of melody, lyrics, trend influence, social media exposure, and emotional connection with listeners."
      },
      {
        question: "Can music change your mood?",
        answer: "Yes, music can influence mood by affecting brain activity. Fast songs can increase energy, while slow songs can make you feel calm or emotional."
      }
    ]
  },
  {
    name: "Platform Info",
    icon: "📱",
    faqs: [
      {
        question: "Do you own the songs or videos?",
        answer: "No, all music and videos belong to their respective owners. We only provide embedded content and information for educational and entertainment purposes."
      },
      {
        question: "Is this site legal?",
        answer: "Yes, because we only use official YouTube embeds and do not download or re-upload copyrighted content."
      },
      {
        question: "Can I request a song?",
        answer: "Yes, users can suggest songs to be added to the platform for future updates."
      },
      {
        question: "Will more features be added?",
        answer: "Yes, the platform will continue to grow with more songs, better design, and improved music discovery features."
      }
    ]
  }
];
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
    
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
        Music FAQ & Fun Zone 🎧
      </h1>
      <p class="text-gray-600 mt-3">
        Learn more about music, videos, and how this platform works
      </p>
    </div>

    <!-- Categories -->
    <div class="space-y-8 max-w-4xl mx-auto">
      
      <div 
        v-for="(category, catIndex) in faqCategories"
        :key="catIndex"
        class="bg-white rounded-2xl shadow-lg overflow-hidden"
      >
        
        <!-- Header -->
        <div class="px-6 py-4 bg-gradient-to-r from-blue-50 to-indigo-50 border-b">
          <h2 class="text-xl font-bold flex items-center gap-2">
            <span class="text-2xl">{{ category.icon }}</span>
            {{ category.name }}
          </h2>
        </div>

        <!-- FAQ -->
        <div class="divide-y">
          <div 
            v-for="(faq, idx) in category.faqs"
            :key="idx"
          >
            <button
              @click="toggleFaq(`${catIndex}-${idx}`)"
              class="w-full px-6 py-4 flex justify-between items-center hover:bg-gray-50 transition"
            >
              <span class="font-medium text-left">{{ faq.question }}</span>
              
              <svg 
                class="w-5 h-5 transition-transform"
                :class="{ 'rotate-180': activeIndex === `${catIndex}-${idx}` }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>

            <div 
              v-show="activeIndex === `${catIndex}-${idx}`"
              class="px-6 pb-4 text-gray-600 animate-fadeIn"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Footer CTA -->
    <div class="text-center mt-12">
      <p class="text-gray-600">Enjoy music and explore more songs 🎵</p>
    </div>

  </div>
</template>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.25s ease-out;
}
</style>