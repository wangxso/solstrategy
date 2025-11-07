<template>
  <section id="services" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-20">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
          Our Expertise
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Comprehensive Solutions for
          <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Modern Challenges
          </span>
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We provide integrated consulting services that drive growth, mitigate risks, 
          and enhance your organization's strategic positioning in today's dynamic market.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        <div 
          v-for="(service, index) in services" 
          :key="service.id"
          class="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
          :class="[
            index === 1 ? 'lg:scale-105 lg:shadow-xl bg-gradient-to-br from-blue-50 to-purple-50' : ''
          ]"
        >
          <!-- Icon -->
          <div class="relative mb-8">
            <div 
              class="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              :class="service.iconBg"
            >
              <component :is="service.icon" class="w-8 h-8" :class="service.iconColor" />
            </div>
            <div class="absolute -top-2 -right-2 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
              </svg>
            </div>
          </div>

          <!-- Content -->
          <h3 class="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {{ service.title }}
          </h3>
          <p class="text-gray-600 mb-6 leading-relaxed">
            {{ service.description }}
          </p>

          <!-- Features -->
          <ul class="space-y-3 mb-8">
            <li 
              v-for="feature in service.features" 
              :key="feature"
              class="flex items-center text-sm text-gray-600"
            >
              <svg class="w-4 h-4 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
              {{ feature }}
            </li>
          </ul>

          <!-- CTA -->
          <button 
            class="w-full py-3 px-6 bg-gray-50 hover:bg-blue-600 text-gray-700 hover:text-white rounded-xl font-medium transition-all duration-300 group-hover:shadow-lg"
            @click="navigateToService(service.id)"
          >
            Learn More
          </button>

          <!-- Decorative element -->
          <div class="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-150"></div>
        </div>
      </div>

      <!-- Bottom CTA -->
      <div class="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12">
        <h3 class="text-3xl font-bold text-gray-900 mb-4">
          Ready to Transform Your Business?
        </h3>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Let's discuss how our expertise can help you achieve your strategic objectives 
          and navigate complex challenges with confidence.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
            @click="scrollToSection('#contact')"
          >
            Schedule Consultation
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue';
import { useRouter } from 'vue-router';

const services = [
  {
    id: 'pr',
    title: 'Public Relations',
    description: 'Strategic communication and brand management that builds trust, enhances reputation, and drives meaningful engagement with your stakeholders.',
    icon: () => h('svg', { 
      fill: 'none', 
      stroke: 'currentColor', 
      viewBox: '0 0 24 24' 
    }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        'stroke-width': '2', 
        d: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z' 
      })
    ]),
    iconBg: 'bg-gradient-to-br from-pink-100 to-rose-100',
    iconColor: 'text-pink-600',
    features: [
      'Crisis Communication Management',
      'Media Relations & Press Coverage',
      'Brand Positioning & Messaging',
      'Stakeholder Engagement Strategy'
    ]
  },
  {
    id: 'investment',
    title: 'Investment Advisory',
    description: 'Comprehensive investment solutions and portfolio management services designed to optimize returns while managing risk in volatile markets.',
    icon: () => h('svg', { 
      fill: 'none', 
      stroke: 'currentColor', 
      viewBox: '0 0 24 24' 
    }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        'stroke-width': '2', 
        d: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' 
      })
    ]),
    iconBg: 'bg-gradient-to-br from-blue-100 to-indigo-100',
    iconColor: 'text-blue-600',
    features: [
      'Portfolio Optimization & Analysis',
      'Risk Assessment & Management',
      'Market Research & Due Diligence',
      'Alternative Investment Strategies'
    ]
  },
  {
    id: 'security',
    title: 'Security Consulting',
    description: 'Advanced security solutions and risk mitigation strategies that protect your assets, data, and operations from emerging threats.',
    icon: () => h('svg', { 
      fill: 'none', 
      stroke: 'currentColor', 
      viewBox: '0 0 24 24' 
    }, [
      h('path', { 
        'stroke-linecap': 'round', 
        'stroke-linejoin': 'round', 
        'stroke-width': '2', 
        d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' 
      })
    ]),
    iconBg: 'bg-gradient-to-br from-green-100 to-emerald-100',
    iconColor: 'text-green-600',
    features: [
      'Cybersecurity Assessment',
      'Physical Security Planning',
      'Threat Intelligence Analysis',
      'Compliance & Regulatory Support'
    ]
  }
];

const scrollToSection = (sectionId: string) => {
  const element = document.querySelector(sectionId) as HTMLElement;
  if (element) {
    const headerHeight = 80;
    const elementPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
      top: elementPosition,
      behavior: 'smooth'
    });
  }
};

const router = useRouter();

const navigateToService = (serviceId: string) => {
  // Navigate to work page with service anchor
  router.push({ path: '/work', hash: `#${serviceId}` });
};
</script>