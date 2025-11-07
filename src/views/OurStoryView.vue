<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
          Our Journey
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          The SolStrategy
          <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Story
          </span>
        </h1>
        <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          From humble beginnings in Singapore to becoming a trusted partner across Asia-Pacific, 
          discover the vision, values, and people that drive our success.
        </p>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Journey Through Time</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Every milestone tells a story of growth, innovation, and unwavering commitment to excellence.
          </p>
        </div>

        <!-- Timeline -->
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>

          <!-- Timeline items -->
          <div class="space-y-16">
            <!-- 2009 - Foundation -->
            <div class="relative flex items-center">
              <div class="flex-1 pr-8 text-right">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div class="text-blue-600 font-bold text-lg mb-2">2009</div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Foundation in Singapore</h3>
                  <p class="text-gray-600 leading-relaxed">
                    SolStrategy was founded with a vision to provide world-class consulting services 
                    in the heart of Asia's financial hub. Starting with a small team of experts, 
                    we focused on building trust and delivering exceptional results.
                  </p>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center z-10">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div class="flex-1 pl-8"></div>
            </div>

            <!-- 2012 - First Major Expansion -->
            <div class="relative flex items-center">
              <div class="flex-1 pr-8"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 rounded-full flex items-center justify-center z-10">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div class="flex-1 pl-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div class="text-green-600 font-bold text-lg mb-2">2012</div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Regional Expansion</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Our reputation for excellence led to expansion across Southeast Asia. 
                    We established partnerships in key markets and began serving multinational 
                    corporations with complex consulting needs.
                  </p>
                </div>
              </div>
            </div>

            <!-- 2015 - Security Division -->
            <div class="relative flex items-center">
              <div class="flex-1 pr-8 text-right">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div class="text-purple-600 font-bold text-lg mb-2">2015</div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Security Division Launch</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Recognizing the growing need for comprehensive security solutions, 
                    we launched our security consulting division, bringing together 
                    cybersecurity experts and risk management specialists.
                  </p>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center z-10">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                </svg>
              </div>
              <div class="flex-1 pl-8"></div>
            </div>

            <!-- 2018 - Digital Transformation -->
            <div class="relative flex items-center">
              <div class="flex-1 pr-8"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center z-10">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <div class="flex-1 pl-8">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div class="text-indigo-600 font-bold text-lg mb-2">2018</div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Digital Innovation</h3>
                  <p class="text-gray-600 leading-relaxed">
                    We embraced digital transformation, integrating AI and data analytics 
                    into our consulting methodologies. This innovation allowed us to provide 
                    more precise insights and strategic recommendations.
                  </p>
                </div>
              </div>
            </div>

            <!-- 2021 - Pandemic Resilience -->
            <div class="relative flex items-center">
              <div class="flex-1 pr-8 text-right">
                <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div class="text-orange-600 font-bold text-lg mb-2">2021</div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Pandemic Resilience</h3>
                  <p class="text-gray-600 leading-relaxed">
                    During global challenges, we demonstrated our resilience and adaptability. 
                    We helped clients navigate uncertainty while maintaining our commitment 
                    to excellence and expanding our remote consulting capabilities.
                  </p>
                </div>
              </div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center z-10">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
              </div>
              <div class="flex-1 pl-8"></div>
            </div>

            <!-- 2024 - Present -->
            <div class="relative flex items-center">
              <div class="flex-1 pr-8"></div>
              <div class="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center z-10">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div class="flex-1 pl-8">
                <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg border border-blue-200 hover:shadow-xl transition-shadow duration-300">
                  <div class="text-blue-600 font-bold text-lg mb-2">2024 - Present</div>
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">Leading the Future</h3>
                  <p class="text-gray-600 leading-relaxed">
                    Today, SolStrategy stands as a trusted partner to over 200 clients across 50 countries. 
                    We continue to innovate, setting new standards in consulting excellence while 
                    maintaining our core values of integrity, innovation, and client success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Mission -->
          <div class="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              To empower organizations with strategic insights, innovative solutions, and unwavering support 
              that drive sustainable growth and competitive advantage in an ever-evolving global marketplace.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Deliver exceptional value to every client
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Foster innovation and continuous improvement
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Build lasting partnerships based on trust
              </li>
            </ul>
          </div>

          <!-- Vision -->
          <div class="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </div>
            <h3 class="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p class="text-lg text-gray-600 leading-relaxed mb-6">
              To be the most trusted and innovative consulting partner in Asia-Pacific, recognized for 
              transforming businesses and creating lasting impact through strategic excellence and 
              unwavering commitment to client success.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Leading consulting firm in Asia-Pacific
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Pioneer in innovative consulting methodologies
              </li>
              <li class="flex items-center text-gray-600">
                <svg class="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Catalyst for business transformation
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Leadership Team Section -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the visionary leaders who guide SolStrategy's mission and drive our continued success.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- CEO -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span class="text-white text-2xl font-bold">JL</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">James Lim</h3>
            <p class="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
            <p class="text-gray-600 text-sm leading-relaxed">
              With over 20 years of experience in strategic consulting, James leads SolStrategy's 
              vision and growth across Asia-Pacific markets.
            </p>
          </div>

          <!-- CTO -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span class="text-white text-2xl font-bold">SC</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
            <p class="text-green-600 font-medium mb-4">Chief Technology Officer</p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Sarah drives our digital innovation initiatives and oversees the integration of 
              cutting-edge technology in our consulting methodologies.
            </p>
          </div>

          <!-- COO -->
          <div class="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
            <div class="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span class="text-white text-2xl font-bold">MR</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Michael Rodriguez</h3>
            <p class="text-purple-600 font-medium mb-4">Chief Operating Officer</p>
            <p class="text-gray-600 text-sm leading-relaxed">
              Michael ensures operational excellence and manages our global client relationships 
              with a focus on delivering exceptional service quality.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Ready to Write Your Success Story?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join the hundreds of organizations that have transformed their business with SolStrategy. 
          Let's create your next chapter together.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/#contact"
            class="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Your Journey
          </router-link>
          <router-link 
            to="/"
            class="px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
          >
            Back to Home
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
// Our Story page component
</script>

<style scoped>
@keyframes blob {
  0% {
    transform: translate(0px, 0px) scale(1);
  }
  33% {
    transform: translate(30px, -50px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
  100% {
    transform: translate(0px, 0px) scale(1);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>