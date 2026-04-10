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
                <p class="text-gray-600">Last updated: April 10, 2026</p>
            </div>

            <!-- Content -->
            <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">1. Information We Collect</h2>
                    <p class="text-gray-600 leading-relaxed mb-3">We collect information you provide directly to us, such as:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Name and email address when you create an account</li>
                        <li>Payment information for purchases (processed securely via third-party providers)</li>
                        <li>Shipping address for physical product deliveries</li>
                        <li>Communications you send to us</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">2. How We Use Your Information</h2>
                    <p class="text-gray-600 leading-relaxed mb-3">We use your information to:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Process and fulfill your orders</li>
                        <li>Send you order confirmations and updates</li>
                        <li>Respond to your customer service requests</li>
                        <li>Improve our website and services</li>
                        <li>Send promotional emails (with your consent)</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">3. Information Sharing</h2>
                    <p class="text-gray-600 leading-relaxed">We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
                        <li>Service providers who assist with payment processing and order fulfillment</li>
                        <li>Law enforcement when required by law</li>
                        <li>With your explicit consent</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">4. Data Security</h2>
                    <p class="text-gray-600 leading-relaxed">We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using SSL technology. However, no method of transmission over the Internet is 100% secure.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">5. Your Rights</h2>
                    <p class="text-gray-600 leading-relaxed mb-3">You have the right to:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li>Access your personal information</li>
                        <li>Correct inaccurate information</li>
                        <li>Request deletion of your information</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">6. Children's Privacy</h2>
                    <p class="text-gray-600 leading-relaxed">Our website is not intended for children under 13. We do not knowingly collect information from children under 13.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">7. Changes to This Policy</h2>
                    <p class="text-gray-600 leading-relaxed">We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">8. Contact Us</h2>
                    <p class="text-gray-600 leading-relaxed">If you have questions about this Privacy Policy, please contact us at: <a href="mailto:cheahun2016@gmail.com" class="text-blue-600 hover:underline">cheahun2016@gmail.com</a></p>
                </div>

                <div class="pt-4 text-center text-sm text-gray-500 border-t border-gray-100">
                    <RouterLink to="/" class="hover:text-blue-600">← Back to Home</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>