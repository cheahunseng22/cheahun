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
                <p class="text-gray-600">Last updated: April 10, 2026</p>
            </div>

            <!-- Content -->
            <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 space-y-6">
                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">What Are Cookies?</h2>
                    <p class="text-gray-600 leading-relaxed">Cookies are small text files stored on your device when you visit websites. They help us remember your preferences and improve your browsing experience.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">How We Use Cookies</h2>
                    <p class="text-gray-600 leading-relaxed mb-3">We use cookies for the following purposes:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4">
                        <li><strong>Essential Cookies:</strong> Required for website functionality (shopping cart, login, checkout)</li>
                        <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
                        <li><strong>Marketing Cookies:</strong> Used to show relevant advertisements</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">Types of Cookies We Use</h2>
                    <div class="space-y-3">
                        <div class="border-b border-gray-100 pb-3">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h3 class="font-semibold text-gray-800">Necessary Cookies</h3>
                                    <p class="text-gray-500 text-sm">Required for basic site functionality</p>
                                </div>
                                <span class="text-green-600 text-sm">Always Active</span>
                            </div>
                        </div>
                        <div class="border-b border-gray-100 pb-3">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h3 class="font-semibold text-gray-800">Functional Cookies</h3>
                                    <p class="text-gray-500 text-sm">Remember your preferences</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" v-model="cookiePreferences.functional" class="sr-only peer">
                                    <div class="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                        <div class="border-b border-gray-100 pb-3">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h3 class="font-semibold text-gray-800">Analytics Cookies</h3>
                                    <p class="text-gray-500 text-sm">Help us improve our website</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" v-model="cookiePreferences.analytics" class="sr-only peer">
                                    <div class="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                        <div class="pb-3">
                            <div class="flex justify-between items-center">
                                <div>
                                    <h3 class="font-semibold text-gray-800">Marketing Cookies</h3>
                                    <p class="text-gray-500 text-sm">Show relevant advertisements</p>
                                </div>
                                <label class="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" v-model="cookiePreferences.marketing" class="sr-only peer">
                                    <div class="w-9 h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">Third-Party Cookies</h2>
                    <p class="text-gray-600 leading-relaxed">Some cookies are placed by third-party services we use, including:</p>
                    <ul class="list-disc list-inside text-gray-600 space-y-1 ml-4 mt-2">
                        <li>Google Analytics - for website traffic analysis</li>
                        <li>Payment processors - for secure checkout</li>
                        <li>Social media platforms - for sharing content</li>
                    </ul>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">Managing Cookies</h2>
                    <p class="text-gray-600 leading-relaxed">You can control and delete cookies through your browser settings. However, disabling certain cookies may affect website functionality.</p>
                    <div class="mt-3 flex flex-wrap gap-3">
                        <a href="#" class="text-blue-600 hover:underline text-sm">Chrome Instructions →</a>
                        <a href="#" class="text-blue-600 hover:underline text-sm">Firefox Instructions →</a>
                        <a href="#" class="text-blue-600 hover:underline text-sm">Safari Instructions →</a>
                    </div>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">Cookie Preferences</h2>
                    <button 
                        @click="savePreferences"
                        class="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all"
                    >
                        Save Preferences
                    </button>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">Updates to This Policy</h2>
                    <p class="text-gray-600 leading-relaxed">We may update this Cookie Policy periodically. Check this page for the latest information.</p>
                </div>

                <div>
                    <h2 class="text-xl font-bold text-gray-800 mb-3">Contact Us</h2>
                    <p class="text-gray-600 leading-relaxed">If you have questions about our use of cookies, contact: <a href="mailto:cheahun2016@gmail.com" class="text-blue-600 hover:underline">cheahun2016@gmail.com</a></p>
                </div>

                <div class="pt-4 text-center text-sm text-gray-500 border-t border-gray-100">
                    <RouterLink to="/" class="hover:text-blue-600">← Back to Home</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>