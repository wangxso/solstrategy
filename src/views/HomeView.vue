<template>
  <div>
    <!-- Hero Section -->
    <HeroSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- Contact Section -->
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/layout/HeroSection.vue';
import AboutSection from '@/components/business/AboutSection.vue';
import ServicesSection from '@/components/business/ServicesSection.vue';
import ContactSection from '@/components/business/ContactSection.vue';
</script>