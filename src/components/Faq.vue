<script setup>
import { ref } from 'vue';

const activeIndex = ref(null);

const toggleFaq = (index) => {
    activeIndex.value = activeIndex.value === index ? null : index;
};

const faqCategories = [
    {
        name: "Orders & Payments",
        icon: "🛒",
        faqs: [
            {
                question: "How do I place an order?",
                answer: "To place an order, simply browse our collection, add items to your cart, and proceed to checkout. Follow the prompts to enter your shipping information and payment details. You'll receive an order confirmation email once your order is successfully placed."
            },
            {
                question: "What payment methods do you accept?",
                answer: "We accept major credit cards (Visa, MasterCard, American Express), PayPal, Google Pay, Apple Pay, and bank transfers. All payments are processed securely through encrypted connections."
            },
            {
                question: "Is it safe to use my credit card on your site?",
                answer: "Yes, absolutely! We use industry-standard SSL encryption to protect your personal and payment information. We never store your full credit card details on our servers."
            },
            {
                question: "Can I cancel or modify my order?",
                answer: "Orders can be cancelled or modified within 1 hour of placement. Please contact our support team immediately with your order number. Once an order is processed for shipping, changes cannot be made."
            }
        ]
    },
    {
        name: "Shipping & Delivery",
        icon: "📦",
        faqs: [
            {
                question: "How long does shipping take?",
                answer: "Domestic orders typically arrive within 3-7 business days. International orders may take 10-20 business days depending on your location and customs processing."
            },
            {
                question: "Do you ship internationally?",
                answer: "Yes, we ship worldwide! Shipping costs and delivery times vary by destination. You can calculate shipping costs at checkout before completing your purchase."
            },
            {
                question: "How can I track my order?",
                answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account and viewing your order history."
            },
            {
                question: "What are the shipping costs?",
                answer: "Shipping costs are calculated based on your location and order weight. Free shipping is available for orders over $50 within Cambodia and $100 for international orders."
            }
        ]
    },
    {
        name: "Returns & Refunds",
        icon: "🔄",
        faqs: [
            {
                question: "What is your return policy?",
                answer: "We accept returns within 30 days of purchase for unused items in original packaging. Digital products and downloadable content are non-refundable once accessed."
            },
            {
                question: "How do I initiate a return?",
                answer: "Contact our support team with your order number and reason for return. We'll provide you with a return authorization and shipping instructions."
            },
            {
                question: "When will I receive my refund?",
                answer: "Refunds are processed within 5-10 business days after we receive and inspect your returned item. The refund will be issued to your original payment method."
            },
            {
                question: "Do you offer exchanges?",
                answer: "Yes, we offer exchanges for defective or damaged items. Please contact our support team within 7 days of receiving your order to arrange an exchange."
            }
        ]
    },
    {
        name: "Products & Downloads",
        icon: "🎵",
        faqs: [
            {
                question: "What format are digital downloads?",
                answer: "Our digital music is available in high-quality MP3 (320kbps) and FLAC formats. You can choose your preferred format at checkout."
            },
            {
                question: "How do I download my purchased music?",
                answer: "After purchase, you'll receive a download link via email. You can also access your downloads from your account dashboard under 'My Downloads'."
            },
            {
                question: "Can I download my purchases multiple times?",
                answer: "Yes, you can download your purchases up to 5 times from your account. We recommend saving a backup copy to your device or cloud storage."
            },
            {
                question: "Are your products officially licensed?",
                answer: "Yes, all our products are 100% officially licensed from record labels and artists. We guarantee authentic, high-quality content."
            }
        ]
    },
    {
        name: "Account & Security",
        icon: "🔐",
        faqs: [
            {
                question: "How do I create an account?",
                answer: "Click the 'Sign Up' button at the top of our website. Enter your email address and create a password. You can also sign up using Google or Facebook for faster registration."
            },
            {
                question: "I forgot my password. What should I do?",
                answer: "Click 'Forgot Password' on the login page. Enter your email address, and we'll send you a link to reset your password securely."
            },
            {
                question: "How do I delete my account?",
                answer: "Contact our support team to request account deletion. Please note that this action is permanent and will remove your order history and saved preferences."
            },
            {
                question: "Is my personal information secure?",
                answer: "We take security seriously. All personal information is encrypted and protected. We never share your data with third parties without your consent."
            }
        ]
    }
];
</script>

<template>
    <div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
                    Frequently Asked Questions
                </h1>
                <p class="text-gray-600 text-lg">
                    Find answers to common questions about our products and services
                </p>
            </div>

       

            <!-- FAQ Categories -->
            <div class="space-y-8">
                <div 
                    v-for="(category, catIndex) in faqCategories" 
                    :key="catIndex"
                    class="bg-white rounded-2xl shadow-lg overflow-hidden"
                >
                    <!-- Category Header -->
                    <div class="bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 border-b border-gray-200">
                        <h2 class="text-xl font-bold text-gray-800 flex items-center gap-2">
                            <span class="text-2xl">{{ category.icon }}</span>
                            {{ category.name }}
                        </h2>
                    </div>

                    <!-- FAQ Items -->
                    <div class="divide-y divide-gray-100">
                        <div 
                            v-for="(faq, idx) in category.faqs" 
                            :key="idx"
                            class="faq-item"
                        >
                            <button 
                                @click="toggleFaq(`${catIndex}-${idx}`)"
                                class="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                            >
                                <span class="font-medium text-gray-800">{{ faq.question }}</span>
                                <svg 
                                    class="w-5 h-5 text-gray-500 transition-transform duration-300"
                                    :class="{ 'rotate-180': activeIndex === `${catIndex}-${idx}` }"
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            
                            <div 
                                v-show="activeIndex === `${catIndex}-${idx}`"
                                class="px-6 pb-4 text-gray-600 leading-relaxed animate-fadeIn"
                            >
                                <div class="pt-2">
                                    {{ faq.answer }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Still Have Questions -->
            <div class="mt-12 text-center bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white">
                <h3 class="text-2xl font-bold mb-3">Still Have Questions?</h3>
                <p class="mb-6 opacity-90">Can't find the answer you're looking for? We're here to help!</p>
                <RouterLink 
                    to="/contact" 
                    class="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                    Contact Support
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                    </svg>
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fadeIn {
    animation: fadeIn 0.3s ease-out;
}
</style>