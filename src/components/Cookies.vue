<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const cookiePreferences = ref({
  necessary: true,
  functional: false,
  analytics: false,
  marketing: false
});

const savePreferences = () => {
  localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences.value));
  alert('Cookie preferences saved!');
};
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-4xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Cookie Policy
        </h1>
        <p class="text-gray-600">Last updated: April 2026</p>
      </div>

      <!-- Content -->
      <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8">

        <!-- 1 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">What Are Cookies?</h2>
          <p class="text-gray-600 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They help improve your browsing experience and allow basic website functionality.
          </p>
        </section>

        <!-- 2 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">How We Use Cookies</h2>
          <p class="text-gray-600 leading-relaxed">
            CHNCAM Music uses cookies only to improve website performance, understand user interaction, and enhance the music browsing experience. 
            We do not collect sensitive personal or financial data through cookies.
          </p>
        </section>

        <!-- 3 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">Types of Cookies We Use</h2>
          
          <div class="space-y-4">

            <div class="p-4 border rounded-lg">
              <h3 class="font-semibold text-gray-800">Necessary Cookies</h3>
              <p class="text-gray-600 text-sm mt-1">
                Required for basic website functionality such as page navigation and embedded video playback.
              </p>
              <span class="text-green-600 text-sm font-medium">Always Active</span>
            </div>

            <div class="p-4 border rounded-lg flex justify-between items-center">
              <div>
                <h3 class="font-semibold text-gray-800">Functional Cookies</h3>
                <p class="text-gray-600 text-sm mt-1">Remember your preferences and settings</p>
              </div>
              <input type="checkbox" v-model="cookiePreferences.functional" />
            </div>

            <div class="p-4 border rounded-lg flex justify-between items-center">
              <div>
                <h3 class="font-semibold text-gray-800">Analytics Cookies</h3>
                <p class="text-gray-600 text-sm mt-1">Help us improve website performance</p>
              </div>
              <input type="checkbox" v-model="cookiePreferences.analytics" />
            </div>

            <div class="p-4 border rounded-lg flex justify-between items-center">
              <div>
                <h3 class="font-semibold text-gray-800">Marketing Cookies</h3>
                <p class="text-gray-600 text-sm mt-1">Used for general ad relevance (if enabled)</p>
              </div>
              <input type="checkbox" v-model="cookiePreferences.marketing" />
            </div>

          </div>
        </section>

        <!-- 4 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">Third-Party Cookies</h2>
          <p class="text-gray-600 leading-relaxed">
            We may use third-party services such as YouTube embeds and analytics tools. These services may set their own cookies according to their policies.
          </p>
        </section>

        <!-- 5 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">Managing Cookies</h2>
          <p class="text-gray-600 leading-relaxed">
            You can disable or manage cookies through your browser settings. However, some features such as video playback may not work properly if cookies are disabled.
          </p>
        </section>

        <!-- Save Button -->
        <section>
          <button 
            @click="savePreferences"
            class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition"
          >
            Save Preferences
          </button>
        </section>

        <!-- 6 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">Updates to This Policy</h2>
          <p class="text-gray-600 leading-relaxed">
            We may update this Cookie Policy from time to time. All changes will be posted on this page.
          </p>
        </section>

        <!-- 7 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
          <p class="text-gray-600 leading-relaxed">
            If you have questions about cookies, contact us at:
            <a href="mailto:cheahun2016@gmail.com" class="text-blue-600 hover:underline">
              cheahun2016@gmail.com
            </a>
          </p>
        </section>

        <!-- Back -->
        <div class="pt-4 text-center border-t border-gray-100">
          <RouterLink to="/" class="text-blue-600 hover:underline">
            ← Back to Home
          </RouterLink>
        </div>

      </div>
    </div>
  </div>
</template>