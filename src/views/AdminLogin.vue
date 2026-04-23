<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const username = ref('');
const password = ref('');
const error = ref('');
const loading = ref(false);
const accessDenied = ref(false);
const currentDomain = ref('');

// Your allowed domains/IPs (CHANGE THESE!)
const ALLOWED_DOMAINS = [
    'localhost',
        'chncam.netlify.app',     // ← ADD THIS
    'cheahun.netlify.app', 
    'www.chncam.site',
    'chncam.site',
    '127.0.0.1',
    'yourdomain.com',        // Add your production domain
    'www.yourdomain.com',     // Add your www domain
    '192.168.1.100',          // Add your local IP if needed
];

// Your allowed IP addresses
const ALLOWED_IPS = [
    '127.0.0.1',
    '::1',
    '192.168.1.100',          // Add your local network IP
    // Add your home/office public IP
];

// Your secure credentials
const ADMIN_USER = 'cheahun';
const ADMIN_PASS = 'abc123';

// Check if access is allowed
const isAccessAllowed = () => {
    const hostname = window.location.hostname;
    currentDomain.value = hostname;
    
    // Check if domain is allowed
    if (ALLOWED_DOMAINS.includes(hostname)) {
        return true;
    }
    
    // Check if IP is allowed
    if (ALLOWED_IPS.includes(hostname)) {
        return true;
    }
    
    return false;
};

// Get client IP from external API
const getClientIP = async () => {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (err) {
        console.error('Could not get IP');
        return null;
    }
};

onMounted(async () => {
    // Check access on page load
    if (!isAccessAllowed()) {
        accessDenied.value = true;
        
        // Log unauthorized access attempt
        const clientIP = await getClientIP();
        console.warn(`🚨 Unauthorized admin access attempt from: ${currentDomain.value} (IP: ${clientIP})`);
        
        // Optional: Send alert to your server
        // await fetch('/api/security/log', { method: 'POST', body: JSON.stringify({ domain: currentDomain.value, ip: clientIP }) });
    }
});

const handleLogin = async () => {
    // Double-check access on login
    if (!isAccessAllowed()) {
        error.value = 'Access denied from this domain/IP';
        return;
    }
    
    loading.value = true;
    error.value = '';
    
    // Check credentials
    if (username.value === ADMIN_USER && password.value === ADMIN_PASS) {
        // Store login info
        localStorage.setItem('adminToken', 'authenticated');
        localStorage.setItem('adminLoginTime', Date.now().toString());
        localStorage.setItem('adminUser', username.value);
        localStorage.setItem('adminDomain', currentDomain.value);
        
        router.push('/admin/dashboard');
    } else {
        error.value = 'Invalid username or password';
        
        // Log failed attempt
        const clientIP = await getClientIP();
        console.warn(`🚨 Failed login attempt from: ${currentDomain.value} (IP: ${clientIP})`);
    }
    
    loading.value = false;
};
</script>

<template>
    <div class="admin-login-full">
        <div class="login-background"></div>
        
        <!-- Access Denied Page -->
        <div v-if="accessDenied" class="access-denied-card">
            <div class="denied-icon">🚫</div>
            <h1 class="denied-title">Access Denied</h1>
            <p class="denied-message">You don't have permission to access this page.</p>
            <p class="denied-detail">Access from <strong>{{ currentDomain }}</strong> is not allowed.</p>
            <p class="denied-info">This area is restricted to authorized administrators only.</p>
            <a href="/" class="back-home-btn">← Return to Home</a>
        </div>
        
        <!-- Normal Login Page -->
        <div v-else class="login-card">
            <div class="login-header">
                <div class="login-icon">🔐</div>
                <h1 class="login-title">Admin Portal</h1>
                <p class="login-subtitle">Secure Music Management System</p>
                <p class="access-info">Access from: <strong>{{ currentDomain }}</strong></p>
            </div>
            
            <form @submit.prevent="handleLogin">
                <div class="input-group">
                    <label>Username</label>
                    <input type="text" v-model="username" placeholder="Enter username" required />
                </div>
                
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" v-model="password" placeholder="Enter password" required />
                </div>
                
                <div v-if="error" class="error-message">{{ error }}</div>
                
                <button type="submit" :disabled="loading" class="login-btn">
                    {{ loading ? 'Authenticating...' : 'Login' }}
                </button>
            </form>
            
            <div class="login-footer">
                <p>🔒 Restricted Access • Authorized Personnel Only</p>
                <a href="/" class="back-link">← Back to Store</a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.admin-login-full {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Inter', system-ui, sans-serif;
    z-index: 9999;
}

.login-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
    z-index: -2;
}

.login-card {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    border-radius: 32px;
    padding: 48px 40px;
    width: 100%;
    max-width: 440px;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    animation: fadeInUp 0.6s ease-out;
}

/* Access Denied Card */
.access-denied-card {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(10px);
    border-radius: 32px;
    padding: 48px 40px;
    width: 100%;
    max-width: 500px;
    text-align: center;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    animation: shake 0.5s ease-out;
}

@keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
}

.denied-icon {
    font-size: 64px;
    margin-bottom: 20px;
}

.denied-title {
    font-size: 28px;
    font-weight: 700;
    color: #dc2626;
    margin-bottom: 16px;
}

.denied-message {
    font-size: 16px;
    color: #374151;
    margin-bottom: 12px;
}

.denied-detail {
    font-size: 14px;
    color: #6b7280;
    margin-bottom: 8px;
}

.denied-info {
    font-size: 12px;
    color: #9ca3af;
    margin-bottom: 24px;
}

.back-home-btn {
    display: inline-block;
    background: #3b82f6;
    color: white;
    padding: 10px 24px;
    border-radius: 40px;
    text-decoration: none;
    transition: all 0.3s;
}

.back-home-btn:hover {
    background: #2563eb;
    transform: translateY(-2px);
}

.access-info {
    font-size: 11px;
    color: #9ca3af;
    margin-top: 8px;
    padding: 4px 8px;
    background: #f3f4f6;
    border-radius: 20px;
    display: inline-block;
}

.login-header {
    text-align: center;
    margin-bottom: 32px;
}

.login-icon { font-size: 56px; margin-bottom: 16px; }
.login-title { font-size: 28px; font-weight: 700; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px; }
.login-subtitle { font-size: 14px; color: #6b7280; }

.input-group { margin-bottom: 20px; }
.input-group label { display: block; font-size: 13px; font-weight: 600; color: #374151; margin-bottom: 8px; }
.input-group input { width: 100%; padding: 12px 16px; border: 2px solid #e5e7eb; border-radius: 16px; font-size: 14px; transition: all 0.3s; }
.input-group input:focus { outline: none; border-color: #667eea; box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1); }

.error-message { background: #fee2e2; border-left: 4px solid #ef4444; padding: 12px; border-radius: 12px; font-size: 13px; color: #b91c1c; margin-bottom: 20px; }

.login-btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; border-radius: 40px; font-size: 15px; font-weight: 600; cursor: pointer; transition: all 0.3s; }
.login-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 25px -5px rgba(102, 126, 234, 0.5); }

.login-footer { margin-top: 32px; text-align: center; font-size: 11px; color: #6b7280; }
.back-link { display: inline-block; margin-top: 12px; color: #667eea; text-decoration: none; }

@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
</style>