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
                <p class="text-gray-600">Last updated: April 10, 2026</p>
            </div>

            <!-- Content -->
            <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">1. Acceptance of Terms</h2>
                    <p class="text-gray-600 leading-relaxed">By accessing and using CHNCAM Music, you agree to be bound by these Terms of Service. If you disagree with any part, please do not use our website.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">2. Digital Products</h2>
                    <p class="text-gray-600 leading-relaxed mb-3">All digital music purchases are subject to the following:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Digital downloads are for personal, non-commercial use only</li>
                        <li>You may not redistribute, resell, or share downloaded files</li>
                        <li>Downloads are available up to 5 times from your account</li>
                        <li>We recommend backing up your purchases</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">3. User Accounts</h2>
                    <p class="text-gray-600 leading-relaxed mb-3">You are responsible for maintaining the confidentiality of your account credentials. You agree to:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Provide accurate account information</li>
                        <li>Notify us immediately of unauthorized access</li>
                        <li>Be responsible for all activities under your account</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">4. Payments and Refunds</h2>
                    <p class="text-gray-600 leading-relaxed mb-3">All payments are processed securely. Our refund policy:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Digital products are non-refundable once downloaded</li>
                        <li>Physical products may be returned within 30 days</li>
                        <li>Contact support for defective products</li>
                        <li>Refunds processed within 5-10 business days</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">5. Intellectual Property</h2>
                    <p class="text-gray-600 leading-relaxed">All content on this website, including music, images, logos, and text, is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without permission.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">6. Prohibited Conduct</h2>
                    <p class="text-gray-600 leading-relaxed mb-3">You agree not to:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Use the website for illegal purposes</li>
                        <li>Attempt to gain unauthorized access to our systems</li>
                        <li>Upload malicious code or viruses</li>
                        <li>Harass, abuse, or harm others</li>
                        <li>Scrape or copy content without permission</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">7. Limitation of Liability</h2>
                    <p class="text-gray-600 leading-relaxed">CHNCAM Music is not liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our total liability is limited to the amount you paid for the product.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">8. Termination</h2>
                    <p class="text-gray-600 leading-relaxed">We reserve the right to terminate or suspend accounts that violate these terms, without prior notice.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">9. Changes to Terms</h2>
                    <p class="text-gray-600 leading-relaxed">We may modify these terms at any time. Continued use of the website constitutes acceptance of the modified terms.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">10. Contact Information</h2>
                    <p class="text-gray-600 leading-relaxed">For questions about these Terms, contact: <a href="mailto:cheahun2016@gmail.com" class="text-blue-600 hover:underline">cheahun2016@gmail.com</a></p>
                </div>

                <div class="pt-4 text-center text-sm text-gray-500 border-t border-gray-100">
                    <RouterLink to="/" class="hover:text-blue-600">← Back to Home</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>