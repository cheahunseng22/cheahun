<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Contact Us
                </h1>
                <p class="text-gray-600 text-lg max-w-2xl mx-auto">
                    Get in touch with us. We're here to help!
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-8">
                <!-- Contact Information -->
                <div class="space-y-6">
                    <div class="grid sm:grid-cols-2 gap-6">
                        <!-- Email Card -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div class="text-4xl mb-3">📧</div>
                            <h3 class="font-semibold text-gray-800 mb-2">Email Us</h3>
                            <p class="text-gray-600 text-sm">cheahun2016@gmail.com</p>
                            <p class="text-xs text-gray-400 mt-3">Response within 24 hours</p>
                        </div>

                        <!-- Phone Card -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div class="text-4xl mb-3">📞</div>
                            <h3 class="font-semibold text-gray-800 mb-2">Call Us</h3>
                            <p class="text-gray-600 text-sm">+855 96 7551 111</p>
                            <p class="text-xs text-gray-400 mt-3">Mon-Fri, 9am-6pm</p>
                        </div>

                        <!-- Hours Card -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div class="text-4xl mb-3">⏰</div>
                            <h3 class="font-semibold text-gray-800 mb-2">Business Hours</h3>
                            <p class="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p class="text-gray-600 text-sm">Saturday: 10:00 AM - 4:00 PM</p>
                            <p class="text-gray-600 text-sm">Sunday: Closed</p>
                        </div>

                        <!-- Location Card -->
                        <div class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div class="text-4xl mb-3">📍</div>
                            <h3 class="font-semibold text-gray-800 mb-2">Our Location</h3>
                            <p class="text-gray-600 text-sm">Phnom Penh, Cambodia</p>
                            <p class="text-gray-600 text-sm">Coordinates: 11.5459, 104.9399</p>
                            <p class="text-xs text-gray-400 mt-3">By appointment only</p>
                        </div>
                    </div>
                </div>

                <!-- Google Map -->
                <div class="bg-white rounded-2xl p-6 shadow-lg">
                    <h3 class="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <span class="text-xl">🗺️</span> Find Us Here
                    </h3>
                    <div class="rounded-xl overflow-hidden h-96">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15636.999999999998!2d104.9398868!3d11.5458963!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDMzJzQ1LjIiTiAxMDTCsDU2JzIzLjYiRQ!5e0!3m2!1sen!2skh!4v1700000000000!5m2!1sen!2skh" 
                            width="100%" 
                            height="100%" 
                            style="border:0;" 
                            allowfullscreen="" 
                            loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <div class="mt-4 text-center">
                        <a 
                            href="https://www.google.com/maps/dir//11.5458963,104.9398868/@11.5502283,104.9394849,3580m/data=!3m1!1e3!4m2!4m1!3e9?entry=ttu&g_ep=EgoyMDI2MDQwNy4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            class="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                        >
                            Get Directions on Google Maps
                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <!-- About Me Section -->
            <div class="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <div class="flex items-center gap-3 mb-4">
                    <div class="text-3xl">🎵</div>
                    <h2 class="text-xl font-bold text-gray-800">About CHNCAM Music</h2>
                </div>
                <div class="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">Our Story</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            CHNCAM Music was founded with a passion for bringing the best K-pop and Asian music to fans worldwide. 
                            We started as a small community of music lovers and have grown into a trusted platform for discovering 
                            and purchasing authentic music from your favorite artists.
                        </p>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">Our Mission</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            To provide music fans with easy access to high-quality, officially licensed music while supporting 
                            artists and creators. We believe music brings people together, and we're committed to making that 
                            connection seamless and enjoyable.
                        </p>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">Why Choose Us</h3>
                        <ul class="text-gray-600 text-sm space-y-1 list-disc list-inside">
                            <li>100% Officially Licensed Music</li>
                            <li>High-Quality Audio (320kbps MP3 & FLAC)</li>
                            <li>Secure Payment Processing</li>
                            <li>Fast & Reliable Downloads</li>
                            <li>24/7 Customer Support</li>
                        </ul>
                    </div>
                    <div>
                        <h3 class="font-semibold text-gray-800 mb-2">Our Promise</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Every purchase directly supports the artists you love. We work directly with record labels 
                            and distributors to ensure all content is properly licensed and royalty payments are made.
                            Your satisfaction is our top priority.
                        </p>
                    </div>
                </div>
            </div>

            <!-- FAQ Link -->
            <div class="mt-8 text-center">
                <p class="text-gray-600">
                    Have questions? Check our 
                    <RouterLink to="/faq" class="text-blue-600 hover:underline font-medium">FAQ page</RouterLink>
                    for quick answers.
                </p>
            </div>
        </div>
    </div>
</template>