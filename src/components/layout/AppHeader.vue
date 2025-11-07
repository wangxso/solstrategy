<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
            <img 
              src="/logo.svg" 
              alt="SolStrategy Logo" 
              class="h-10 w-10 transition-all duration-300"
              :class="isScrolled ? 'brightness-100' : 'brightness-0 invert'"
            />
            <h1 
              class="text-2xl font-bold transition-colors duration-300"
              :class="isScrolled ? 'text-gray-900' : 'text-white'"
            >
              SolStrategy
            </h1>
          </router-link>
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-8">
          <template v-for="item in navigationItems" :key="item.path">
            <router-link 
              v-if="!item.path.startsWith('#')"
              :to="item.path"
              class="relative group transition-colors duration-300 font-medium"
              :class="[
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              ]"
            >
              {{ item.label }}
              <span 
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
              ></span>
            </router-link>
            <a 
              v-else
              :href="item.path"
              class="relative group transition-colors duration-300 font-medium"
              :class="[
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white/90 hover:text-white'
              ]"
              @click="scrollToSection(item.path)"
            >
              {{ item.label }}
              <span 
                class="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"
              ></span>
            </a>
          </template>
        </nav>

        <!-- CTA Button -->
        <div class="hidden lg:flex items-center space-x-4">
          <button 
            class="px-6 py-2.5 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
            :class="[
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' 
                : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
            ]"
            @click="scrollToSection('#contact')"
          >
            Get Started
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          class="lg:hidden p-2 rounded-lg transition-colors duration-300"
          :class="[
            isScrolled 
              ? 'text-gray-700 hover:bg-gray-100' 
              : 'text-white hover:bg-white/10'
          ]"
          @click="toggleMobileMenu"
          aria-label="Toggle mobile menu"
        >
          <svg 
            class="w-6 h-6 transition-transform duration-300" 
            :class="{ 'rotate-90': isMobileMenuOpen }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              v-if="!isMobileMenuOpen"
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path 
              v-else
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      class="lg:hidden transition-all duration-300 overflow-hidden"
      :class="[
        isMobileMenuOpen 
          ? 'max-h-96 opacity-100' 
          : 'max-h-0 opacity-0'
      ]"
    >
      <div class="bg-white/95 backdrop-blur-md border-t border-gray-100">
        <div class="max-w-7xl mx-auto px-4 py-6">
          <nav class="flex flex-col space-y-4">
            <template v-for="item in navigationItems" :key="item.path">
              <router-link 
                v-if="!item.path.startsWith('#')"
                :to="item.path"
                class="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                @click="isMobileMenuOpen = false"
              >
                {{ item.label }}
              </router-link>
              <a 
                v-else
                :href="item.path"
                class="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors duration-300"
                @click="handleMobileNavClick(item.path)"
              >
                {{ item.label }}
              </a>
            </template>
            <button 
              class="mt-4 px-6 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 text-center"
              @click="handleMobileNavClick('#contact')"
            >
              Get Started
            </button>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

interface NavigationItem {
  label: string;
  path: string;
}

const navigationItems: NavigationItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Work', path: '/work' },
  { label: 'Community', path: '/community' },
  { label: 'Careers', path: '/careers' },
  { label: 'Contact', path: '#contact' }
];

const router = useRouter();
const route = useRoute();

const isScrolled = ref(false);
const isMobileMenuOpen = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const scrollToSection = (sectionId: string) => {
  // If we're not on the home page, navigate to home first
  if (route.path !== '/') {
    router.push('/' + sectionId);
    return;
  }
  
  const element = document.querySelector(sectionId) as HTMLElement;
  if (element) {
    const headerHeight = 80; // Height of fixed header
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

const handleMobileNavClick = (path: string) => {
  scrollToSection(path);
  isMobileMenuOpen.value = false;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
/* Additional styles for smooth animations */
.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
</style>