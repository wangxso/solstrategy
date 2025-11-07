<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 bg-gradient-to-br from-green-900 via-blue-900 to-gray-800 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Community Impact
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Building a Better
          <span class="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Tomorrow
          </span>
        </h1>
        <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          At SolStrategy, we believe in giving back to the communities that have supported our growth. 
          Discover our initiatives, partnerships, and commitment to social responsibility.
        </p>
      </div>
    </section>

    <!-- Impact Stats -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div class="text-4xl font-bold text-green-600 mb-2">$2M+</div>
            <div class="text-gray-600 font-medium">Community Investment</div>
          </div>
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div class="text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div class="text-gray-600 font-medium">Partner Organizations</div>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <div class="text-4xl font-bold text-purple-600 mb-2">10K+</div>
            <div class="text-gray-600 font-medium">Lives Impacted</div>
          </div>
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <div class="text-4xl font-bold text-orange-600 mb-2">500+</div>
            <div class="text-gray-600 font-medium">Volunteer Hours</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Initiatives -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-green-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Community Initiatives</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We focus on education, sustainability, and economic empowerment to create lasting positive change.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Education Initiative -->
          <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">SolStrategy Scholars</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              Our scholarship program supports underprivileged students in Singapore and across Southeast Asia, 
              providing educational opportunities and mentorship in business and technology fields.
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                100+ scholarships awarded annually
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Mentorship from industry experts
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Internship opportunities
              </div>
            </div>
          </div>

          <!-- Sustainability Initiative -->
          <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Green Future Initiative</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              We're committed to environmental sustainability through carbon offset programs, 
              renewable energy adoption, and supporting green technology startups across the region.
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Carbon neutral operations by 2025
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Supporting 20+ green startups
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Tree planting partnerships
              </div>
            </div>
          </div>

          <!-- Economic Empowerment Initiative -->
          <div class="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-4">Entrepreneur Support</h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              We provide pro-bono consulting services to small businesses and startups, 
              helping entrepreneurs build sustainable enterprises and create local employment.
            </p>
            <div class="space-y-3">
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                200+ hours of free consulting
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Startup incubator partnerships
              </div>
              <div class="flex items-center text-sm text-gray-600">
                <svg class="w-4 h-4 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                Microfinance support programs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Partner Organizations -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Community Partners</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with leading organizations to maximize our community impact.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">UN</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">United Nations</h3>
            <p class="text-sm text-gray-600">Sustainable Development Goals Partnership</p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">NUS</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">NUS Business School</h3>
            <p class="text-sm text-gray-600">Education & Research Collaboration</p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">WWF</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">WWF Singapore</h3>
            <p class="text-sm text-gray-600">Environmental Conservation</p>
          </div>

          <div class="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg">RC</span>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 mb-2">Red Cross</h3>
            <p class="text-sm text-gray-600">Humanitarian Aid & Disaster Relief</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Volunteer Program -->
    <section class="py-24 bg-gradient-to-br from-blue-50 to-green-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl font-bold text-gray-900 mb-6">
              Join Our Volunteer Program
            </h2>
            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              Every SolStrategy employee is encouraged to contribute 40 hours annually to community service. 
              Our volunteer program offers diverse opportunities to make a meaningful impact.
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Education Mentoring</h3>
                  <p class="text-gray-600">Mentor students in business skills, career guidance, and professional development.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Environmental Projects</h3>
                  <p class="text-gray-600">Participate in beach cleanups, tree planting, and sustainability workshops.</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-900 mb-2">Community Outreach</h3>
                  <p class="text-gray-600">Support elderly care centers, food banks, and local community events.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="text-center mb-8">
              <h3 class="text-2xl font-bold text-gray-900 mb-4">2024 Impact Report</h3>
              <p class="text-gray-600">Our community contributions this year</p>
            </div>
            
            <div class="space-y-6">
              <div class="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                <span class="text-gray-700 font-medium">Volunteer Hours</span>
                <span class="text-2xl font-bold text-blue-600">1,250</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-green-50 rounded-xl">
                <span class="text-gray-700 font-medium">Students Mentored</span>
                <span class="text-2xl font-bold text-green-600">150</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                <span class="text-gray-700 font-medium">Trees Planted</span>
                <span class="text-2xl font-bold text-purple-600">500</span>
              </div>
              <div class="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
                <span class="text-gray-700 font-medium">Startups Supported</span>
                <span class="text-2xl font-bold text-orange-600">25</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-green-600 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Partner With Us for Impact
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Whether you're a nonprofit organization, educational institution, or community group, 
          we'd love to explore partnership opportunities.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/#contact"
            class="px-8 py-4 bg-white text-green-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Get In Touch
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
// Community page component
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