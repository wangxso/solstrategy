<script setup lang="ts">
import AppHeader from './components/layout/AppHeader.vue';
import AppFooter from './components/layout/AppFooter.vue';
</script>

<template>
  <div id="app" class="min-h-screen bg-white">
    <!-- Header Navigation -->
    <AppHeader />

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style>
/* Global styles for smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #3b82f6;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #2563eb;
}

/* Ensure proper spacing for fixed header */
body {
  padding-top: 0;
}
</style>
