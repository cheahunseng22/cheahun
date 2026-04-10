<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-4xl mx-auto">

      <!-- Header -->
      <div class="text-center mb-10">
        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
          Terms of Service
        </h1>
        <p class="text-gray-600">
          Last updated: April 2026
        </p>
      </div>

      <!-- Content -->
      <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-8">

        <!-- 1 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">1. Acceptance of Terms</h2>
          <p class="text-gray-600 leading-relaxed">
            By accessing and using CHNCAM Music, you agree to follow these Terms of Service. 
            If you do not agree, please stop using the website.
          </p>
        </section>

        <!-- 2 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">2. Website Purpose</h2>
          <p class="text-gray-600 leading-relaxed">
            CHNCAM Music is a music information and entertainment platform that provides song pages, 
            music explanations, emotional analysis, and embedded music videos from official sources such as YouTube.
            We do not host or store any audio or video files on our servers.
          </p>
        </section>

        <!-- 3 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">3. Embedded Content</h2>
          <p class="text-gray-600 leading-relaxed">
            This website may display embedded videos from third-party platforms such as YouTube. 
            We do not own or control these external videos and are not responsible for their content, availability, or accuracy.
          </p>
        </section>

        <!-- 4 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">4. User Responsibilities</h2>
          <ul class="list-disc list-inside text-gray-600 space-y-1">
            <li>Use the website in a legal and respectful manner</li>
            <li>Do not attempt to hack, damage, or disrupt the website</li>
            <li>Do not copy or reuse content without permission</li>
            <li>Respect intellectual property rights of artists and owners</li>
          </ul>
        </section>

        <!-- 5 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">5. Intellectual Property</h2>
          <p class="text-gray-600 leading-relaxed">
            All original content on CHNCAM Music (including design, layout, and text) belongs to the website owner unless stated otherwise. 
            All music, videos, and related media belong to their respective copyright holders.
          </p>
        </section>

        <!-- 6 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">6. Third-Party Services</h2>
          <p class="text-gray-600 leading-relaxed">
            This website may use third-party services such as YouTube embeds, analytics tools, or advertising networks. 
            These services operate under their own privacy and terms policies.
          </p>
        </section>

        <!-- 7 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">7. Limitation of Liability</h2>
          <p class="text-gray-600 leading-relaxed">
            CHNCAM Music is provided “as is”. We are not responsible for any damages, errors, or issues arising from the use of this website 
            or external embedded content.
          </p>
        </section>

        <!-- 8 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">8. Changes to Terms</h2>
          <p class="text-gray-600 leading-relaxed">
            We may update these Terms of Service at any time. Continued use of the website means you accept any updated terms.
          </p>
        </section>

        <!-- 9 -->
        <section>
          <h2 class="text-xl font-bold text-gray-800 mb-3">9. Contact</h2>
          <p class="text-gray-600 leading-relaxed">
            If you have any questions, contact us at: 
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