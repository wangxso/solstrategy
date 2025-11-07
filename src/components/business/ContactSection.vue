<template>
  <section id="contact" class="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Get In Touch
        </div>
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform
          <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Your Business?
          </span>
        </h2>
        <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Let's discuss how our expertise can help you achieve your strategic objectives. 
          Our team is ready to provide personalized solutions for your unique challenges.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Contact Form -->
        <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
          <h3 class="text-2xl font-bold text-white mb-8">Send us a message</h3>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-white/90 mb-2">
                  First Name *
                </label>
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="John"
                >
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-white/90 mb-2">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  required
                  class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  placeholder="Doe"
                >
              </div>
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-white/90 mb-2">
                Email Address *
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                placeholder="john@company.com"
              >
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-white/90 mb-2">
                Phone Number
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                placeholder="+65 1234 5678"
              >
            </div>

            <div>
              <label for="service" class="block text-sm font-medium text-white/90 mb-2">
                Service Interest
              </label>
              <select
                id="service"
                v-model="form.service"
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              >
                <option value="" class="text-gray-900">Select a service</option>
                <option value="pr" class="text-gray-900">Public Relations</option>
                <option value="investment" class="text-gray-900">Investment Advisory</option>
                <option value="security" class="text-gray-900">Security Consulting</option>
                <option value="other" class="text-gray-900">Other</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-white/90 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm resize-none"
                placeholder="Tell us about your project or how we can help..."
              ></textarea>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:transform-none disabled:shadow-none flex items-center justify-center space-x-2"
            >
              <span v-if="!isSubmitting">Send Message</span>
              <span v-else>Sending...</span>
              <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
              </svg>
              <svg v-else class="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </button>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Office Info -->
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 class="text-2xl font-bold text-white mb-6">Visit Our Office</h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-2">Address</h4>
                  <p class="text-white/80">
                    2 Central Boulevard, #25-08, IOI Central Boulevard Towers<br>
                    Republic of Singapore
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-2">Phone</h4>
                  <p class="text-white/80">+65 6530 0101</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h4 class="text-lg font-semibold text-white mb-2">Email</h4>
                  <p class="text-white/80">contact@solstrategy.com</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Business Hours -->
          <div class="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 class="text-2xl font-bold text-white mb-6">Business Hours</h3>
            
            <div class="space-y-3">
              <div class="flex justify-between items-center">
                <span class="text-white/80">Monday - Friday</span>
                <span class="text-white font-medium">9:00 AM - 6:00 PM</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-white/80">Saturday</span>
                <span class="text-white font-medium">10:00 AM - 2:00 PM</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-white/80">Sunday</span>
                <span class="text-white/60">Closed</span>
              </div>
            </div>

            <div class="mt-6 p-4 bg-green-500/20 rounded-xl border border-green-500/30">
              <div class="flex items-center space-x-2">
                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-green-300 font-medium">Available for urgent consultations 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';

const isSubmitting = ref(false);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  message: ''
});

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  // Simulate form submission
  try {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    Object.keys(form).forEach(key => {
      form[key as keyof typeof form] = '';
    });
    
    // Show success message (you can implement a toast notification here)
    alert('Thank you for your message! We will get back to you soon.');
  } catch (error) {
    alert('There was an error sending your message. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};
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

.backdrop-blur-md {
  backdrop-filter: blur(12px);
}
</style>