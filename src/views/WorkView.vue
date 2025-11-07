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
          <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Our Portfolio
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Transformative
          <span class="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Solutions
          </span>
        </h1>
        <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Discover how we've helped organizations across Asia-Pacific achieve their strategic objectives 
          through innovative consulting solutions and expert guidance.
        </p>
      </div>
    </section>

    <!-- Portfolio Stats -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div class="text-4xl font-bold text-blue-600 mb-2">200+</div>
            <div class="text-gray-600 font-medium">Projects Completed</div>
          </div>
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div class="text-4xl font-bold text-green-600 mb-2">50+</div>
            <div class="text-gray-600 font-medium">Countries Served</div>
          </div>
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <div class="text-4xl font-bold text-purple-600 mb-2">98%</div>
            <div class="text-gray-600 font-medium">Client Satisfaction</div>
          </div>
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8">
            <div class="text-4xl font-bold text-orange-600 mb-2">15+</div>
            <div class="text-gray-600 font-medium">Years Experience</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Third-Party Credibility Section -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Industry Recognition & Credibility</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expertise is validated by leading industry bodies, media outlets, and independent research organizations.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <!-- Awards & Certifications -->
          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Awards & Certifications</h3>
            </div>
            <div class="space-y-4">
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="font-semibold text-gray-900">Asia-Pacific Consulting Excellence Award 2023</h4>
                  <p class="text-sm text-gray-600">Financial Times & McKinsey Institute</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="font-semibold text-gray-900">ISO 27001:2013 Information Security Certification</h4>
                  <p class="text-sm text-gray-600">British Standards Institution (BSI)</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="font-semibold text-gray-900">Top 50 Investment Advisory Firms - Singapore</h4>
                  <p class="text-sm text-gray-600">Monetary Authority of Singapore (MAS)</p>
                </div>
              </div>
              <div class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 class="font-semibold text-gray-900">Cybersecurity Excellence Award 2022</h4>
                  <p class="text-sm text-gray-600">Cybersecurity & Infrastructure Security Agency</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Media Coverage -->
          <div class="bg-white rounded-3xl p-8 shadow-xl">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Media Coverage</h3>
            </div>
            <div class="space-y-4">
              <div class="border-l-4 border-blue-600 pl-4">
                <blockquote class="text-gray-700 italic mb-2">
                  "SolStrategy has emerged as a leading force in Asia-Pacific's consulting landscape, 
                  delivering exceptional results for Fortune 500 clients."
                </blockquote>
                <cite class="text-sm font-semibold text-gray-900">— Financial Times, March 2024</cite>
              </div>
              <div class="border-l-4 border-green-600 pl-4">
                <blockquote class="text-gray-700 italic mb-2">
                  "Their innovative approach to cybersecurity consulting has set new industry standards 
                  across the region."
                </blockquote>
                <cite class="text-sm font-semibold text-gray-900">— Reuters Technology, January 2024</cite>
              </div>
              <div class="border-l-4 border-purple-600 pl-4">
                <blockquote class="text-gray-700 italic mb-2">
                  "A trusted partner for crisis communication, SolStrategy's expertise has proven 
                  invaluable during challenging times."
                </blockquote>
                <cite class="text-sm font-semibold text-gray-900">— Bloomberg Business, November 2023</cite>
              </div>
            </div>
          </div>
        </div>

        <!-- Client Testimonials -->
        <div class="bg-white rounded-3xl p-12 shadow-xl">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Client Testimonials</h3>
            <p class="text-lg text-gray-600">What our clients say about working with us</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Testimonial 1 -->
            <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-bold">DBS</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Sarah Chen</h4>
                  <p class="text-sm text-gray-600">Chief Digital Officer, DBS Bank</p>
                </div>
              </div>
              <blockquote class="text-gray-700 italic">
                "SolStrategy's digital transformation expertise helped us achieve a 40% improvement 
                in operational efficiency. Their strategic approach is unmatched."
              </blockquote>
              <div class="flex items-center mt-4">
                <div class="flex text-yellow-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                </div>
                <span class="ml-2 text-sm text-gray-600">5.0/5.0</span>
              </div>
            </div>

            <!-- Testimonial 2 -->
            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-bold">MS</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Michael Rodriguez</h4>
                  <p class="text-sm text-gray-600">VP Security, Microsoft Asia</p>
                </div>
              </div>
              <blockquote class="text-gray-700 italic">
                "Their cybersecurity framework implementation reduced our security incidents by 85%. 
                The team's expertise is world-class."
              </blockquote>
              <div class="flex items-center mt-4">
                <div class="flex text-yellow-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                </div>
                <span class="ml-2 text-sm text-gray-600">5.0/5.0</span>
              </div>
            </div>

            <!-- Testimonial 3 -->
            <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
              <div class="flex items-center mb-4">
                <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span class="text-white font-bold">BMW</span>
                </div>
                <div>
                  <h4 class="font-semibold text-gray-900">Dr. Anna Weber</h4>
                  <p class="text-sm text-gray-600">Director of Communications, BMW Group Asia</p>
                </div>
              </div>
              <blockquote class="text-gray-700 italic">
                "During our recent crisis, SolStrategy's communication strategy helped us restore 
                95% positive sentiment within just 6 months."
              </blockquote>
              <div class="flex items-center mt-4">
                <div class="flex text-yellow-400">
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                  <svg class="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
                </div>
                <span class="ml-2 text-sm text-gray-600">5.0/5.0</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Industry Reports & Research -->
        <div class="mt-16 bg-white rounded-3xl p-12 shadow-xl">
          <div class="text-center mb-12">
            <h3 class="text-3xl font-bold text-gray-900 mb-4">Industry Research & Reports</h3>
            <p class="text-lg text-gray-600">Independent validation of our methodologies and results</p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">McKinsey Global Institute Report</h4>
                <p class="text-gray-600 mb-3">
                  "Asia-Pacific Consulting Market Analysis 2024" - SolStrategy ranked among top 10 
                  consulting firms for digital transformation expertise.
                </p>
                <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Report →
                </a>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Deloitte Cybersecurity Study</h4>
                <p class="text-gray-600 mb-3">
                  "Best Practices in Enterprise Security" - Our security framework methodology 
                  cited as industry best practice for Fortune 500 implementations.
                </p>
                <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  View Study →
                </a>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">Harvard Business Review Case Study</h4>
                <p class="text-gray-600 mb-3">
                  "Crisis Communication Excellence in Asia-Pacific" - Our BMW crisis management 
                  case featured as exemplary crisis response strategy.
                </p>
                <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Read Case Study →
                </a>
              </div>
            </div>
            
            <div class="flex items-start space-x-4">
              <div class="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
                </svg>
              </div>
              <div>
                <h4 class="text-lg font-semibold text-gray-900 mb-2">PwC Investment Advisory Benchmark</h4>
                <p class="text-gray-600 mb-3">
                  "Alternative Investment Strategies Report 2024" - Our ESG integration approach 
                  recognized as leading practice in sustainable investing.
                </p>
                <a href="#" class="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  Download Report →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Service Details -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Our Service Expertise</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dive into our comprehensive service offerings and discover how we deliver exceptional results.
          </p>
        </div>

        <!-- Public Relations Detail -->
        <div id="pr" class="mb-20 scroll-mt-20">
          <div class="bg-gradient-to-br from-pink-50 to-rose-50 rounded-3xl p-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-pink-100 text-pink-600 text-sm font-medium mb-6">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                  </svg>
                  Public Relations
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-6">Strategic Communication Excellence</h3>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our public relations expertise spans crisis management, brand positioning, and stakeholder engagement. 
                  We craft compelling narratives that resonate with your target audiences and build lasting trust.
                </p>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Crisis Communication</h4>
                      <p class="text-gray-600 text-sm">24/7 crisis response with strategic messaging and stakeholder management</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Media Relations</h4>
                      <p class="text-gray-600 text-sm">Building relationships with key media outlets and securing strategic coverage</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Brand Positioning</h4>
                      <p class="text-gray-600 text-sm">Developing compelling brand narratives that differentiate and engage</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-2xl p-8 shadow-lg">
                <h4 class="text-xl font-bold text-gray-900 mb-6">Recent Success Metrics</h4>
                <div class="space-y-6">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Crisis Response Time</span>
                    <span class="text-2xl font-bold text-pink-600">< 2 Hours</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Media Coverage Increase</span>
                    <span class="text-2xl font-bold text-pink-600">340%</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Sentiment Improvement</span>
                    <span class="text-2xl font-bold text-pink-600">95%</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Stakeholder Engagement</span>
                    <span class="text-2xl font-bold text-pink-600">+180%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Investment Advisory Detail -->
        <div id="investment" class="mb-20 scroll-mt-20">
          <div class="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl p-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="order-2 lg:order-1">
                <div class="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 class="text-xl font-bold text-gray-900 mb-6">Portfolio Performance</h4>
                  <div class="space-y-6">
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Average Annual Return</span>
                      <span class="text-2xl font-bold text-blue-600">12.8%</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Risk-Adjusted Return</span>
                      <span class="text-2xl font-bold text-blue-600">1.85</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Assets Under Management</span>
                      <span class="text-2xl font-bold text-blue-600">$2.4B</span>
                    </div>
                    <div class="flex justify-between items-center">
                      <span class="text-gray-600">Client Retention Rate</span>
                      <span class="text-2xl font-bold text-blue-600">98.5%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-1 lg:order-2">
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                  Investment Advisory
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-6">Intelligent Investment Solutions</h3>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our investment advisory services combine deep market expertise with advanced analytics to deliver 
                  superior risk-adjusted returns. We provide comprehensive portfolio management and strategic investment guidance.
                </p>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Portfolio Optimization</h4>
                      <p class="text-gray-600 text-sm">Advanced quantitative models for optimal asset allocation and risk management</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Alternative Investments</h4>
                      <p class="text-gray-600 text-sm">Access to private equity, hedge funds, and alternative investment strategies</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">ESG Integration</h4>
                      <p class="text-gray-600 text-sm">Sustainable investing strategies that align with your values and objectives</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Security Consulting Detail -->
        <div id="security" class="mb-20 scroll-mt-20">
          <div class="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-12">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  Security Consulting
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-6">Comprehensive Security Solutions</h3>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  Our security consulting services protect your organization from evolving threats through advanced 
                  cybersecurity frameworks, risk assessments, and compliance strategies tailored to your industry.
                </p>
                <div class="space-y-4">
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Cybersecurity Assessment</h4>
                      <p class="text-gray-600 text-sm">Comprehensive security audits and vulnerability assessments</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Threat Intelligence</h4>
                      <p class="text-gray-600 text-sm">Real-time threat monitoring and intelligence-driven security strategies</p>
                    </div>
                  </div>
                  <div class="flex items-start space-x-3">
                    <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                    </div>
                    <div>
                      <h4 class="font-semibold text-gray-900 mb-1">Compliance Management</h4>
                      <p class="text-gray-600 text-sm">Regulatory compliance and certification support (ISO 27001, SOC 2, etc.)</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="bg-white rounded-2xl p-8 shadow-lg">
                <h4 class="text-xl font-bold text-gray-900 mb-6">Security Impact</h4>
                <div class="space-y-6">
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Threat Detection Rate</span>
                    <span class="text-2xl font-bold text-green-600">99.7%</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Incident Reduction</span>
                    <span class="text-2xl font-bold text-green-600">85%</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Compliance Success</span>
                    <span class="text-2xl font-bold text-green-600">100%</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-gray-600">Response Time</span>
                    <span class="text-2xl font-bold text-green-600">< 15 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Case Studies -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Featured Case Studies</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real clients. See how our strategic approach delivers measurable impact.
          </p>
        </div>

        <div class="space-y-16">
          <!-- Case Study 1 -->
          <div class="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-4">
                  Investment Advisory
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-6">
                  Regional Bank Digital Transformation
                </h3>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  Guided a leading Southeast Asian bank through a comprehensive digital transformation, 
                  resulting in 40% improved operational efficiency and $50M in cost savings over two years.
                </p>
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <div class="text-2xl font-bold text-blue-600 mb-1">40%</div>
                    <div class="text-sm text-gray-600">Efficiency Increase</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-green-600 mb-1">$50M</div>
                    <div class="text-sm text-gray-600">Cost Savings</div>
                  </div>
                </div>
              </div>
              <div class="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 text-center">
                <svg class="w-24 h-24 mx-auto text-blue-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
                <div class="text-lg font-semibold text-gray-700">Financial Services</div>
                <div class="text-sm text-gray-600">Southeast Asia</div>
              </div>
            </div>
          </div>

          <!-- Case Study 2 -->
          <div class="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div class="order-2 lg:order-1">
                <div class="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 text-center">
                  <svg class="w-24 h-24 mx-auto text-green-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                  </svg>
                  <div class="text-lg font-semibold text-gray-700">Cybersecurity</div>
                  <div class="text-sm text-gray-600">Technology Sector</div>
                </div>
              </div>
              <div class="order-1 lg:order-2">
                <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-4">
                  Security Consulting
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-6">
                  Multinational Tech Security Overhaul
                </h3>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  Implemented comprehensive cybersecurity framework for a Fortune 500 technology company, 
                  reducing security incidents by 85% and achieving ISO 27001 certification.
                </p>
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <div class="text-2xl font-bold text-green-600 mb-1">85%</div>
                    <div class="text-sm text-gray-600">Incident Reduction</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-blue-600 mb-1">ISO 27001</div>
                    <div class="text-sm text-gray-600">Certification</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Case Study 3 -->
          <div class="bg-white rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-4">
                  Public Relations
                </div>
                <h3 class="text-3xl font-bold text-gray-900 mb-6">
                  Global Brand Crisis Management
                </h3>
                <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                  Successfully managed a complex crisis communication strategy for an international brand, 
                  restoring public trust and achieving 95% positive sentiment recovery within 6 months.
                </p>
                <div class="grid grid-cols-2 gap-6">
                  <div>
                    <div class="text-2xl font-bold text-purple-600 mb-1">95%</div>
                    <div class="text-sm text-gray-600">Sentiment Recovery</div>
                  </div>
                  <div>
                    <div class="text-2xl font-bold text-orange-600 mb-1">6 Months</div>
                    <div class="text-sm text-gray-600">Recovery Time</div>
                  </div>
                </div>
              </div>
              <div class="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-8 text-center">
                <svg class="w-24 h-24 mx-auto text-purple-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
                </svg>
                <div class="text-lg font-semibold text-gray-700">Crisis Management</div>
                <div class="text-sm text-gray-600">Global Brand</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Industries We Serve -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Trusted by Industry Leaders</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with world-class organizations across diverse sectors, delivering strategic solutions 
            that drive growth and innovation.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Financial Services -->
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Financial Services</h3>
            <p class="text-gray-600 mb-6">Digital transformation and risk management for leading financial institutions.</p>
            
            <!-- Client Examples -->
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/dbs_logo.svg" alt="DBS Bank" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">DBS Bank</span>
                </div>
                <span class="text-xs text-gray-500">Digital Strategy</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/UOB_Logo.svg" alt="UOB Group" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">UOB Group</span>
                </div>
                <span class="text-xs text-gray-500">Risk Management</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/Gic-logo.svg" alt="GIC Private" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">GIC Private</span>
                </div>
                <span class="text-xs text-gray-500">Investment Advisory</span>
              </div>
            </div>
          </div>

          <!-- Technology -->
          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Technology</h3>
            <p class="text-gray-600 mb-6">Cybersecurity and digital innovation for global tech leaders.</p>
            
            <!-- Client Examples -->
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/Microsoft_logo.svg" alt="Microsoft" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Microsoft</span>
                </div>
                <span class="text-xs text-gray-500">Cloud Security</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/Amazon_Web_Services_Logo.svg" alt="Amazon Web Services" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Amazon Web Services</span>
                </div>
                <span class="text-xs text-gray-500">Infrastructure</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/Oracle_logo.svg" alt="Oracle" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Oracle</span>
                </div>
                <span class="text-xs text-gray-500">Enterprise Solutions</span>
              </div>
            </div>
          </div>

          <!-- Healthcare -->
          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Healthcare</h3>
            <p class="text-gray-600 mb-6">Regulatory compliance and digital health solutions for pharmaceutical giants.</p>
            
            <!-- Client Examples -->
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/Pfizer_(2021).svg" alt="Pfizer" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Pfizer</span>
                </div>
                <span class="text-xs text-gray-500">Regulatory Affairs</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/Johnson_and_Johnson_Logo.svg" alt="Johnson & Johnson" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Johnson & Johnson</span>
                </div>
                <span class="text-xs text-gray-500">Digital Health</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/Novartis-Logo-2023.svg" alt="Novartis" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Novartis</span>
                </div>
                <span class="text-xs text-gray-500">Market Access</span>
              </div>
            </div>
          </div>

          <!-- Energy -->
          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Energy & Utilities</h3>
            <p class="text-gray-600 mb-6">Sustainability strategies and energy transition planning for industry leaders.</p>
            
            <!-- Client Examples -->
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/bp-logo.svg" alt="BP" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">BP</span>
                </div>
                <span class="text-xs text-gray-500">Energy Transition</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/shell.svg" alt="Shell" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Shell</span>
                </div>
                <span class="text-xs text-gray-500">Sustainability</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/totalenergies-seeklogo.svg" alt="TotalEnergies" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">TotalEnergies</span>
                </div>
                <span class="text-xs text-gray-500">Carbon Strategy</span>
              </div>
            </div>
          </div>

          <!-- Retail & Consumer -->
          <div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Retail & Consumer</h3>
            <p class="text-gray-600 mb-6">Brand strategy and digital commerce solutions for global consumer brands.</p>
            
            <!-- Client Examples -->
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/logo-animated.svg" alt="Unilever" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Unilever</span>
                </div>
                <span class="text-xs text-gray-500">Brand Strategy</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/Coke-company-logo-black.svg" alt="Coca-Cola" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Coca-Cola</span>
                </div>
                <span class="text-xs text-gray-500">Digital Marketing</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/P_G_Logo_RGB.svg" alt="P&G" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">Procter & Gamble</span>
                </div>
                <span class="text-xs text-gray-500">Innovation Strategy</span>
              </div>
            </div>
          </div>

          <!-- Manufacturing -->
          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Manufacturing</h3>
            <p class="text-gray-600 mb-6">Operational excellence and Industry 4.0 transformation for manufacturing leaders.</p>
            
            <!-- Client Examples -->
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/BMW_light.svg" alt="BMW" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">BMW Group</span>
                </div>
                <span class="text-xs text-gray-500">Smart Manufacturing</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                    <span class="text-white font-bold text-xs">SIE</span>
                  </div>
                  <span class="text-sm font-medium text-gray-700">Siemens</span>
                </div>
                <span class="text-xs text-gray-500">Digital Factory</span>
              </div>
              <div class="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                <div class="flex items-center space-x-3">
                  <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center p-1">
                    <img src="@/assets/logo/3m.svg" alt="3M" class="w-full h-full object-contain" />
                  </div>
                  <span class="text-sm font-medium text-gray-700">3M Company</span>
                </div>
                <span class="text-xs text-gray-500">Process Optimization</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Trust Indicators - Scrolling Logo Carousel -->
        <div class="mt-16 text-center">
          <p class="text-lg text-gray-600 mb-8">
            Trusted by Fortune 500 companies and industry leaders across 6 continents
          </p>
          
          <!-- Scrolling Logo Container -->
          <div class="relative overflow-hidden bg-gradient-to-r from-gray-50 via-white to-gray-50 rounded-2xl py-8">
            <!-- Gradient Overlays -->
            <div class="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div class="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            <!-- Scrolling Content -->
            <div class="flex animate-scroll">
              <!-- First Set of Logos -->
              <div class="flex items-center space-x-8 px-6">
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/dbs_logo.svg" alt="DBS Bank" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/Microsoft_logo.svg" alt="Microsoft" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/BMW_light.svg" alt="BMW" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/Coke-company-logo-black.svg" alt="Coca-Cola" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/3m.svg" alt="3M" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/shell.svg" alt="Shell" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/Johnson_and_Johnson_Logo.svg" alt="Johnson & Johnson" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/Oracle_logo.svg" alt="Oracle" class="h-6 w-auto object-contain" />
                </div>
              </div>
              
              <!-- Duplicate Set for Seamless Loop -->
              <div class="flex items-center space-x-8 px-6">
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/dbs_logo.svg" alt="DBS Bank" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/Microsoft_logo.svg" alt="Microsoft" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/BMW_light.svg" alt="BMW" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/Coke-company-logo-black.svg" alt="Coca-Cola" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/3m.svg" alt="3M" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/shell.svg" alt="Shell" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/Johnson_and_Johnson_Logo.svg" alt="Johnson & Johnson" class="h-6 w-auto object-contain" />
                </div>
                <div class="flex items-center space-x-3 bg-white rounded-xl px-4 py-3 shadow-sm min-w-max">
                  <img src="@/assets/logo/Oracle_logo.svg" alt="Oracle" class="h-6 w-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
          
          <!-- Statistics -->
          <div class="flex flex-wrap justify-center items-center gap-8 mt-8 opacity-60">
            <div class="text-lg font-semibold text-gray-400">Fortune 500</div>
            <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div class="text-lg font-semibold text-gray-400">Global 2000</div>
            <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div class="text-lg font-semibold text-gray-400">FTSE 100</div>
            <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
            <div class="text-lg font-semibold text-gray-400">Nikkei 225</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-blue-600 to-purple-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join our portfolio of successful clients. Let's discuss how we can help you achieve 
          your strategic objectives and drive measurable results.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link 
            to="/#contact"
            class="px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            Start Your Project
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
// Work page component
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

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-scroll {
  animation: scroll 30s linear infinite;
  width: 200%;
}

.animate-scroll:hover {
  animation-play-state: paused;
}

.animation-delay-2000 {
  animation-delay: 2s;
}
</style>