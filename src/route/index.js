import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import ProductDetail from '../views/ProductDetail.vue';
import AdminLogin from '../views/AdminLogin.vue';
import AdminDashboard from '../views/AdminDashboard.vue';
import CategoryTracks from '../components/CategoryTracks.vue';
import ContactUs from '../components/ContactUs.vue';
import Faq from '../components/Faq.vue';
import Privacy from '../components/Privacy.vue';
import Terms from '../components/Terms.vue';
import Cookies from '../components/Cookies.vue';    


const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductDetail,
        props: true,
    },
    {
        path: '/cheahun/login',
        name: 'adminLogin',
        component: AdminLogin,
        meta: { requiresSecretToken: true }  // Changed from requiresIpCheck
    },
    {
        path: '/admin/dashboard',
        name: 'adminDashboard',
        component: AdminDashboard,
        meta: { requiresAuth: true, requiresSecretToken: true }
    },
    {
    path: '/category/:slug',
    name: 'CategoryTracks',
    component: CategoryTracks,
    props: true
},

{
    path: '/contact',
    name: 'Contact',
    component: ContactUs
},
{
    path: '/faq',
    name: 'Faq',
    component: Faq
},
{
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
},
{
    path: '/terms',
    name: 'Terms',
    component: Terms
},
{
    path: '/cookies',
    name: 'Cookies',
    component: Cookies
},
{
    path:'/copyright',
    name:'Copyright',
    component: () => import('../components/Copyright.vue')
}

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// YOUR SECRET TOKEN - CHANGE THIS TO SOMETHING RANDOM!
const SECRET_TOKEN = 'cheahun12345';  // Make this long and random

// Check if user has the secret token
const hasValidSecretToken = () => {
    // Check URL parameter first
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get('token');
    
    // Check localStorage
    const tokenFromStorage = localStorage.getItem('adminSecretToken');
    
    return tokenFromUrl === SECRET_TOKEN || tokenFromStorage === SECRET_TOKEN;
};

// Navigation guard with secret token check
router.beforeEach((to, from, next) => {
    // Check for secret token on admin routes
    if (to.meta.requiresSecretToken) {
        if (!hasValidSecretToken()) {
            console.warn(`🚨 Blocked admin access - no valid token`);
            next('/');  // Redirect to home
            return;
        }
        
        // If token is in URL, save it to localStorage for future use
        const urlParams = new URLSearchParams(window.location.search);
        const tokenFromUrl = urlParams.get('token');
        if (tokenFromUrl === SECRET_TOKEN && !localStorage.getItem('adminSecretToken')) {
            localStorage.setItem('adminSecretToken', SECRET_TOKEN);
            // Remove token from URL and redirect
            const newUrl = window.location.pathname;
            window.history.replaceState({}, document.title, newUrl);
        }
    }
    
    // Then check authentication for dashboard
    if (to.meta.requiresAuth) {
        const token = localStorage.getItem('adminToken');
        if (!token) {
            next('/cheahun/login?token=' + localStorage.getItem('adminSecretToken'));
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;