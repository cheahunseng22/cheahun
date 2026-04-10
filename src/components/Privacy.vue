<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    
    <div class="max-w-4xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Privacy Policy
        </h1>
        <p class="text-gray-600">Last updated: April 2026</p>
      </div>

      <!-- Content -->
      <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8">

        <!-- 1 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">1. Information We Collect</h2>
          <p class="text-gray-600 leading-relaxed">
            CHNCAM Music is a music information and entertainment platform. We do not require users to create accounts to browse content.
            However, we may collect limited information such as:
          </p>
          <ul class="list-disc list-inside text-gray-600 mt-3 space-y-1">
            <li>Basic usage data (pages visited, time spent)</li>
            <li>Device and browser information</li>
            <li>Cookies for improving user experience</li>
          </ul>
        </section>

        <!-- 2 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">2. How We Use Information</h2>
          <p class="text-gray-600 leading-relaxed">
            We use collected information to improve website performance, enhance user experience, analyze traffic, 
            and provide better music content and recommendations.
          </p>
        </section>

        <!-- 3 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">3. Cookies</h2>
          <p class="text-gray-600 leading-relaxed">
            This website uses cookies to understand how users interact with our content and to improve performance.
            You can disable cookies in your browser settings at any time.
          </p>
        </section>

        <!-- 4 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">4. Third-Party Services</h2>
          <p class="text-gray-600 leading-relaxed">
            We may use third-party services such as YouTube embeds, analytics tools, and advertising networks.
            These services may collect data according to their own privacy policies.
          </p>
        </section>

        <!-- 5 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">5. Embedded Content</h2>
          <p class="text-gray-600 leading-relaxed">
            Our website includes embedded music videos from platforms such as YouTube. 
            We do not host or store any video or audio content on our servers.
          </p>
        </section>

        <!-- 6 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">6. Data Security</h2>
          <p class="text-gray-600 leading-relaxed">
            We take reasonable measures to protect user data. However, no online system is 100% secure, 
            and we cannot guarantee absolute security of information transmitted online.
          </p>
        </section>

        <!-- 7 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">7. Children's Privacy</h2>
          <p class="text-gray-600 leading-relaxed">
            This website is not intended for children under the age of 13. We do not knowingly collect personal data from children.
          </p>
        </section>

        <!-- 8 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">8. Changes to This Policy</h2>
          <p class="text-gray-600 leading-relaxed">
            We may update this Privacy Policy at any time. Changes will be posted on this page with an updated date.
          </p>
        </section>

        <!-- 9 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">9. Contact Us</h2>
          <p class="text-gray-600 leading-relaxed">
            If you have any questions, please contact us at:
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