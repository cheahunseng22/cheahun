<script setup>
import { ref, onMounted, computed } from "vue";

const footer = ref(null);

onMounted(() => {
  // Footer loaded
});
</script>

<template>
  <footer class="footer-glass">
    <div class="footer-container">
      <!-- Main Footer Content -->
      <div class="footer-grid">
        <!-- Column 2: About Store -->
        <div class="footer-col">
          <h3 class="footer-title">
            <span class="title-icon">📖</span>
            About Store
          </h3>
          <div class="footer-description">
            <p>
              CHNCAM Music was founded with a passion for bringing the best
              K-pop and Asian music to fans worldwide. We started as a small
              community of music lovers and have grown into a trusted platform
              for discovering and purchasing authentic music from your favorite
              artists.
            </p>
          </div>
        </div>

        <!-- Column 3: Contact -->
        <div class="footer-col">
          <h3 class="footer-title">
            <span class="title-icon">📧</span>
            Contact Us
          </h3>
          <div class="footer-contact">
            <p class="contact-item">
              <i class="fa-regular fa-envelope"></i>
              cheahun2016@gmail.com
            </p>
            <p class="contact-item">
              <i class="fa-solid fa-phone"></i>
              +855 96 7551 111
            </p>
            <p class="contact-item">
              <i class="fa-solid fa-location-dot"></i>
              Phnom Penh, Cambodia
            </p>
          </div>
        </div>

        <!-- Column 1: privacy  -->
        <div class="footer-col">
          <h3 class="footer-title">
            <span class="title-icon">🛡️</span>
            Privacy
          </h3>
          <ul class="footer-links">
            <li><a href="/faq" class="footer-link">FAQ</a></li>
            <li><a href="/contact" class="footer-link">Contact Support</a></li>
          </ul>
        </div>
      </div>

      <!-- Copyright Only -->
      <div class="copyright-section">
        <div class="copyright-content">
          <i class="fa-regular fa-copyright"></i>
          <span>2026 chnmusic. All rights reserved.</span>
        </div>
        <div class="copyright-links">
          <a href="/privacy">Privacy</a>
          <span>•</span>
          <a href="/terms">Terms</a>
          <span>•</span>
          <a href="/cookies">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-glass {
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
  border-top: 1px solid rgba(59, 130, 246, 0.2);
  margin-top: 3rem;
  position: relative;
}

.footer-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 2rem 1rem;
}

.footer-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  .footer-container {
    padding: 1.5rem 1.5rem 1rem;
  }
}

@media (max-width: 480px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
}

.footer-col {
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.footer-title {
  font-size: 0.9rem;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  letter-spacing: 0.5px;
  position: relative;
  padding-bottom: 0.4rem;
}

.footer-title::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 35px;
  height: 2px;
  background: linear-gradient(90deg, #3b82f6, #60a5fa);
  border-radius: 2px;
}

.title-icon {
  font-size: 1rem;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.footer-link {
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  font-size: 0.7rem;
  transition: all 0.3s ease;
  display: inline-block;
}

.footer-link:hover {
  color: #60a5fa;
  transform: translateX(4px);
}

.footer-description {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.65rem;
  line-height: 1.5;
  margin-bottom: 0.8rem;
}

.social-links {
  display: flex;
  gap: 0.6rem;
  margin-top: 0.8rem;
}

.social-link {
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.75rem;
}

.social-link:hover {
  transform: translateY(-3px);
}

.social-link.fb:hover {
  background: #1877f2;
}
.social-link.ig:hover {
  background: radial-gradient(circle at 30% 110%, #fdf497, #fd5949, #d6249f);
}
.social-link.yt:hover {
  background: #ff0000;
}
.social-link.tw:hover {
  background: #1da1f2;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.contact-item {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.65rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0;
}

.contact-item i {
  width: 20px;
  color: #60a5fa;
  font-size: 0.7rem;
}

.subscribe-btn {
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  border: none;
  padding: 0.45rem 0.8rem;
  border-radius: 2rem;
  font-size: 0.6rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  width: 100%;
  margin-top: 0.3rem;
}

.subscribe-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.4);
  gap: 0.6rem;
}

.copyright-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.45);
}

.copyright-content {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.copyright-links {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.copyright-links a {
  color: rgba(255, 255, 255, 0.45);
  text-decoration: none;
  transition: color 0.3s ease;
}

.copyright-links a:hover {
  color: #60a5fa;
}

@media (max-width: 768px) {
  .copyright-section {
    flex-direction: column;
    text-align: center;
    gap: 0.3rem;
  }
}
</style>
