<template>
  <section id="about" class="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Content -->
        <div class="order-2 lg:order-1">
          <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
            <span class="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            About SolStrategy
          </div>
          
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Pioneering Excellence in
            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Strategic Consulting
            </span>
          </h2>
          
          <p class="text-lg text-gray-600 mb-8 leading-relaxed">
            Founded in Singapore, SolStrategy has emerged as a leading consulting firm 
            specializing in public relations, investment advisory, and security services. 
            Our commitment to excellence and innovation has made us the trusted partner 
            for organizations across the Asia-Pacific region.
          </p>

          <!-- Key Points -->
          <div class="space-y-6 mb-10">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Strategic Innovation</h3>
                <p class="text-gray-600">We leverage cutting-edge methodologies and deep industry insights to deliver transformative solutions.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                <p class="text-gray-600">Over 15 years of successful partnerships with Fortune 500 companies and emerging market leaders.</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p class="text-gray-600">Our multidisciplinary team combines decades of experience with fresh perspectives and innovative thinking.</p>
              </div>
            </div>
          </div>

          <!-- CTA -->
          <div class="flex flex-col sm:flex-row gap-4">
            <button 
              class="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              @click="scrollToSection('#contact')"
            >
              Partner With Us
            </button>
            <router-link 
              to="/our-story"
              class="inline-block px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-full border border-gray-200 transition-all duration-300 transform hover:scale-105"
            >
              Our Story
            </router-link>
          </div>
        </div>

        <!-- Visual Content -->
        <div class="order-1 lg:order-2">
          <div class="relative">
            <!-- Main image placeholder -->
            <div class="relative bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
                <div class="grid grid-cols-2 gap-6 mb-8">
                  <div class="text-center">
                    <div class="text-3xl font-bold mb-2">200+</div>
                    <div class="text-sm opacity-80">Successful Projects</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold mb-2">50+</div>
                    <div class="text-sm opacity-80">Countries Served</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold mb-2">15+</div>
                    <div class="text-sm opacity-80">Years Experience</div>
                  </div>
                  <div class="text-center">
                    <div class="text-3xl font-bold mb-2">24/7</div>
                    <div class="text-sm opacity-80">Global Support</div>
                  </div>
                </div>
                
                <!-- Singapore HQ highlight -->
                <div class="bg-white/20 rounded-xl p-4 text-center">
                  <div class="flex items-center justify-center mb-2">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <span class="font-semibold">Headquarters</span>
                  </div>
                  <div class="text-sm opacity-90">Singapore Financial District</div>
                </div>
              </div>
            </div>

            <!-- Floating elements -->
            <div class="absolute -top-4 -left-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            <div class="absolute -bottom-6 -right-6 w-16 h-16 bg-pink-400 rounded-full opacity-60 animate-bounce"></div>
            <div class="absolute top-1/2 -left-8 w-12 h-12 bg-green-400 rounded-full opacity-70 animate-ping"></div>
          </div>
        </div>
      </div>

      <!-- Values Section -->
      <div class="mt-24 text-center">
        <h3 class="text-3xl font-bold text-gray-900 mb-12">Our Core Values</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-4">Integrity</h4>
            <p class="text-gray-600">We uphold the highest ethical standards in all our interactions and deliver on our commitments with transparency.</p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-4">Innovation</h4>
            <p class="text-gray-600">We continuously evolve our methodologies and embrace new technologies to deliver cutting-edge solutions.</p>
          </div>

          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h4 class="text-xl font-semibold text-gray-900 mb-4">Excellence</h4>
            <p class="text-gray-600">We strive for perfection in every project, ensuring our clients receive world-class service and results.</p>
          </div>
        </div>
      </div>

      <!-- Trust Indicators -->
      <div class="mt-20 bg-white rounded-3xl p-12 shadow-xl">
        <div class="text-center mb-12">
          <h3 class="text-3xl font-bold text-gray-900 mb-4">Recognized Excellence</h3>
          <p class="text-lg text-gray-600">Industry validation and third-party recognition</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Award 1 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">ISO 27001</h4>
            <p class="text-sm text-gray-600">Certified Information Security Management</p>
          </div>

          <!-- Award 2 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Top 50 Firms</h4>
            <p class="text-sm text-gray-600">MAS Investment Advisory Ranking</p>
          </div>

          <!-- Award 3 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">Featured in FT</h4>
            <p class="text-sm text-gray-600">Financial Times Excellence Report</p>
          </div>

          <!-- Award 4 -->
          <div class="text-center">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h4 class="font-semibold text-gray-900 mb-2">HBR Case Study</h4>
            <p class="text-sm text-gray-600">Harvard Business Review Featured</p>
          </div>
        </div>

        <!-- Client Quote -->
        <div class="mt-12 text-center">
          <blockquote class="text-xl text-gray-700 italic mb-4 max-w-3xl mx-auto">
            "SolStrategy's expertise and professionalism have been instrumental in our digital transformation journey. 
            Their strategic approach delivered measurable results that exceeded our expectations."
          </blockquote>
          <cite class="text-gray-600 font-medium">— Sarah Chen, Chief Digital Officer, DBS Bank</cite>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>