<template>
  <transition name="slide-up">
    <div 
      v-if="showBanner" 
      class="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-2xl"
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div class="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <!-- Content -->
          <div class="flex-1">
            <div class="flex items-start space-x-4">
              <!-- Cookie Icon -->
              <div class="flex-shrink-0">
                <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"/>
                </svg>
              </div>
              
              <!-- Text Content -->
              <div>
                <h3 id="cookie-consent-title" class="text-lg font-semibold text-gray-900 mb-2">
                  🍪 We Value Your Privacy
                </h3>
                <p id="cookie-consent-description" class="text-sm text-gray-600 leading-relaxed">
                  We use cookies and similar technologies to enhance your browsing experience, analyze site traffic, 
                  and personalize content. By clicking "Accept All", you consent to our use of cookies. 
                  You can manage your preferences or learn more in our 
                  <button @click="showDetails = true" class="text-blue-600 hover:text-blue-800 underline font-medium">
                    Cookie Policy
                  </button>.
                </p>
                
                <!-- Cookie Categories (when expanded) -->
                <div v-if="showPreferences" class="mt-4 space-y-3">
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div class="flex-1">
                      <h4 class="font-medium text-gray-900">Essential Cookies</h4>
                      <p class="text-xs text-gray-600">Required for the website to function properly</p>
                    </div>
                    <div class="flex items-center">
                      <span class="text-xs text-gray-500 mr-2">Always Active</span>
                      <div class="w-10 h-6 bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div class="flex-1">
                      <h4 class="font-medium text-gray-900">Analytics Cookies</h4>
                      <p class="text-xs text-gray-600">Help us understand how visitors interact with our website</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        v-model="preferences.analytics" 
                        type="checkbox" 
                        class="sr-only peer"
                      >
                      <div class="w-10 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                  
                  <div class="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div class="flex-1">
                      <h4 class="font-medium text-gray-900">Marketing Cookies</h4>
                      <p class="text-xs text-gray-600">Used to deliver personalized advertisements</p>
                    </div>
                    <label class="relative inline-flex items-center cursor-pointer">
                      <input 
                        v-model="preferences.marketing" 
                        type="checkbox" 
                        class="sr-only peer"
                      >
                      <div class="w-10 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button
              v-if="!showPreferences"
              @click="showPreferences = true"
              class="px-6 py-3 bg-gray-100 text-gray-700 font-medium rounded-lg hover:bg-gray-200 transition-colors duration-200 whitespace-nowrap"
            >
              Customize
            </button>
            <button
              v-if="showPreferences"
              @click="savePreferences"
              class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap"
            >
              Save Preferences
            </button>
            <button
              @click="acceptEssential"
              class="px-6 py-3 bg-gray-600 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors duration-200 whitespace-nowrap"
            >
              Essential Only
            </button>
            <button
              @click="acceptAll"
              class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200 whitespace-nowrap shadow-lg"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
      
      <!-- Cookie Policy Modal -->
      <div 
        v-if="showDetails"
        class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        @click.self="showDetails = false"
      >
        <div class="bg-white rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8">
          <div class="flex items-center justify-between mb-6">
            <h2 class="text-2xl font-bold text-gray-900">Cookie Policy</h2>
            <button 
              @click="showDetails = false"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <div class="prose prose-sm max-w-none">
            <h3>What are cookies?</h3>
            <p>
              Cookies are small text files that are placed on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              understanding how you use our site.
            </p>
            
            <h3>Types of cookies we use:</h3>
            
            <h4>1. Essential Cookies (Required)</h4>
            <p>
              These cookies are necessary for the website to function properly. They enable basic 
              functions like page navigation and access to secure areas. The website cannot function 
              properly without these cookies.
            </p>
            <ul>
              <li>Session management</li>
              <li>Security features</li>
              <li>Load balancing</li>
            </ul>
            
            <h4>2. Analytics Cookies (Optional)</h4>
            <p>
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. This helps us improve our website's performance 
              and user experience.
            </p>
            <ul>
              <li>Google Analytics</li>
              <li>Page view tracking</li>
              <li>User behavior analysis</li>
            </ul>
            
            <h4>3. Marketing Cookies (Optional)</h4>
            <p>
              These cookies are used to track visitors across websites. The intention is to display 
              ads that are relevant and engaging for individual users.
            </p>
            <ul>
              <li>Advertising platforms</li>
              <li>Social media integration</li>
              <li>Retargeting campaigns</li>
            </ul>
            
            <h3>Your Rights</h3>
            <p>
              Under GDPR and other privacy regulations, you have the right to:
            </p>
            <ul>
              <li>Know what cookies we use and why</li>
              <li>Accept or reject non-essential cookies</li>
              <li>Change your cookie preferences at any time</li>
              <li>Request deletion of your data</li>
            </ul>
            
            <h3>Managing Cookies</h3>
            <p>
              You can manage your cookie preferences at any time by clicking the "Cookie Settings" 
              link in the footer of our website. You can also configure your browser to refuse all 
              cookies or to indicate when a cookie is being sent.
            </p>
            
            <h3>Contact Us</h3>
            <p>
              If you have any questions about our use of cookies, please contact us at:
              <br>
              <strong>Email:</strong> privacy@solstrategy.com
              <br>
              <strong>Address:</strong> Singapore Financial District
            </p>
            
            <p class="text-sm text-gray-600 mt-6">
              Last updated: {{ new Date().toLocaleDateString() }}
            </p>
          </div>
          
          <div class="mt-6 flex justify-end">
            <button
              @click="showDetails = false"
              class="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const showBanner = ref(false);
const showPreferences = ref(false);
const showDetails = ref(false);

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
}

const preferences = ref<CookiePreferences>({
  essential: true,
  analytics: false,
  marketing: false
});

const COOKIE_CONSENT_KEY = 'solstrategy_cookie_consent';
const COOKIE_PREFERENCES_KEY = 'solstrategy_cookie_preferences';

onMounted(() => {
  checkCookieConsent();
});

const checkCookieConsent = () => {
  const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
  if (!consent) {
    // Show banner after a short delay for better UX
    setTimeout(() => {
      showBanner.value = true;
    }, 1000);
  } else {
    // Load saved preferences
    const savedPreferences = localStorage.getItem(COOKIE_PREFERENCES_KEY);
    if (savedPreferences) {
      preferences.value = JSON.parse(savedPreferences);
    }
  }
};

const acceptAll = () => {
  preferences.value = {
    essential: true,
    analytics: true,
    marketing: true
  };
  saveConsent();
};

const acceptEssential = () => {
  preferences.value = {
    essential: true,
    analytics: false,
    marketing: false
  };
  saveConsent();
};

const savePreferences = () => {
  saveConsent();
};

const saveConsent = () => {
  localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
  localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences.value));
  localStorage.setItem(COOKIE_CONSENT_KEY + '_date', new Date().toISOString());
  
  // Initialize analytics if accepted
  if (preferences.value.analytics) {
    initializeAnalytics();
  }
  
  // Initialize marketing if accepted
  if (preferences.value.marketing) {
    initializeMarketing();
  }
  
  showBanner.value = false;
  showPreferences.value = false;
};

const initializeAnalytics = () => {
  // Initialize Google Analytics or other analytics tools
  console.log('Analytics initialized');
  // Example: gtag('config', 'GA_MEASUREMENT_ID');
};

const initializeMarketing = () => {
  // Initialize marketing tools
  console.log('Marketing tools initialized');
  // Example: Facebook Pixel, LinkedIn Insight Tag, etc.
};

// Expose method to reopen cookie settings
defineExpose({
  openSettings: () => {
    showBanner.value = true;
    showPreferences.value = true;
  }
});
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-up-enter-from {
  transform: translateY(100%);
  opacity: 0;
}

.slide-up-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

/* Custom scrollbar for modal */
.overflow-y-auto::-webkit-scrollbar {
  width: 8px;
}

.overflow-y-auto::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.overflow-y-auto::-webkit-scrollbar-thumb:hover {
  background: #555;
}

/* Prose styles for cookie policy */
.prose h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  color: #111827;
}

.prose h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: #374151;
}

.prose p {
  margin-bottom: 1rem;
  line-height: 1.6;
  color: #4b5563;
}

.prose ul {
  margin-left: 1.5rem;
  margin-bottom: 1rem;
  list-style-type: disc;
}

.prose li {
  margin-bottom: 0.5rem;
  color: #4b5563;
}
</style>
