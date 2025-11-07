<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <section class="relative pt-24 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-gray-800 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
          <span class="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></span>
          Join Our Team
        </div>
        <h1 class="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Shape the Future of
          <span class="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Consulting
          </span>
        </h1>
        <p class="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
          Join a team of exceptional professionals who are passionate about delivering excellence 
          and making a meaningful impact for clients across Asia-Pacific.
        </p>
      </div>
    </section>

    <!-- Why Join Us -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Why Choose SolStrategy?</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer more than just a job – we provide a platform for growth, innovation, and meaningful impact.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Career Growth</h3>
            <p class="text-gray-600">Accelerated career progression with mentorship from industry leaders and continuous learning opportunities.</p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
            <p class="text-gray-600">Work on projects that span across 50+ countries and make a real difference in organizations worldwide.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Collaborative Culture</h3>
            <p class="text-gray-600">Join a diverse, inclusive team where every voice matters and collaboration drives innovation.</p>
          </div>

          <div class="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Competitive Benefits</h3>
            <p class="text-gray-600">Comprehensive benefits package including health insurance, retirement plans, and performance bonuses.</p>
          </div>

          <div class="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Innovation Focus</h3>
            <p class="text-gray-600">Work with cutting-edge technologies and methodologies at the forefront of consulting innovation.</p>
          </div>

          <div class="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
            <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Work-Life Balance</h3>
            <p class="text-gray-600">Flexible working arrangements, wellness programs, and generous vacation policies to support your well-being.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Open Positions -->
    <section class="py-24 bg-gradient-to-br from-gray-50 to-purple-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore current opportunities to join our growing team of exceptional professionals.
          </p>
        </div>

        <div class="space-y-6">
          <!-- Job Position 1 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div class="flex-1">
                <div class="flex items-center space-x-4 mb-4">
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-600 text-sm font-medium">
                    Investment Advisory
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    Full-time
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                    Singapore
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Senior Investment Consultant</h3>
                <p class="text-gray-600 mb-4">
                  Lead investment advisory projects for Fortune 500 clients across Asia-Pacific. 
                  Requires 5+ years experience in investment banking or consulting.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Financial Analysis</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Portfolio Management</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Client Relations</span>
                </div>
              </div>
              <div class="mt-6 lg:mt-0 lg:ml-8">
                <button 
                  @click="openApplicationModal(allPositions[0])"
                  class="w-full lg:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <!-- Job Position 2 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div class="flex-1">
                <div class="flex items-center space-x-4 mb-4">
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    Security Consulting
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    Full-time
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                    Singapore
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Cybersecurity Analyst</h3>
                <p class="text-gray-600 mb-4">
                  Conduct security assessments and develop cybersecurity strategies for enterprise clients. 
                  Strong background in information security and risk management required.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Penetration Testing</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Risk Assessment</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Compliance</span>
                </div>
              </div>
              <div class="mt-6 lg:mt-0 lg:ml-8">
                <button 
                  @click="openApplicationModal(allPositions[1])"
                  class="w-full lg:w-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <!-- Job Position 3 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div class="flex-1">
                <div class="flex items-center space-x-4 mb-4">
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                    Public Relations
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    Full-time
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                    Singapore
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">PR Strategy Manager</h3>
                <p class="text-gray-600 mb-4">
                  Develop and execute comprehensive PR strategies for multinational clients. 
                  Experience in crisis communication and media relations essential.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Media Relations</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Crisis Management</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Content Strategy</span>
                </div>
              </div>
              <div class="mt-6 lg:mt-0 lg:ml-8">
                <button 
                  @click="openApplicationModal(allPositions[2])"
                  class="w-full lg:w-auto px-6 py-3 bg-purple-600 text-white font-semibold rounded-full hover:bg-purple-700 transition-colors duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>

          <!-- Job Position 4 -->
          <div class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div class="flex-1">
                <div class="flex items-center space-x-4 mb-4">
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
                    Technology
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    Full-time
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                    Singapore
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-gray-900 mb-2">Data Analytics Specialist</h3>
                <p class="text-gray-600 mb-4">
                  Leverage data analytics to drive insights for client projects. 
                  Strong skills in Python, R, and machine learning frameworks required.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Python</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Machine Learning</span>
                  <span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full">Data Visualization</span>
                </div>
              </div>
              <div class="mt-6 lg:mt-0 lg:ml-8">
                <button 
                  @click="openApplicationModal(allPositions[3])"
                  class="w-full lg:w-auto px-6 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>

        <div class="text-center mt-12">
          <p class="text-gray-600 mb-6">Don't see a position that fits? We're always looking for exceptional talent.</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              @click="openApplicationModal()"
              class="px-8 py-4 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              Submit General Application
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Employee Testimonials -->
    <section class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">What Our Team Says</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our employees about their experience working at SolStrategy.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">AL</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Alice Lim</h4>
                <p class="text-sm text-gray-600">Senior Consultant</p>
              </div>
            </div>
            <p class="text-gray-700 italic">
              "The learning opportunities here are incredible. I've grown more in 2 years at SolStrategy 
              than I did in 5 years at my previous company. The mentorship and project diversity are unmatched."
            </p>
          </div>

          <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">RK</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Raj Kumar</h4>
                <p class="text-sm text-gray-600">Security Analyst</p>
              </div>
            </div>
            <p class="text-gray-700 italic">
              "Working on cutting-edge cybersecurity projects with Fortune 500 clients has been a dream come true. 
              The team is supportive and the work is challenging in the best way possible."
            </p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <div class="flex items-center mb-6">
              <div class="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                <span class="text-white font-bold">MT</span>
              </div>
              <div>
                <h4 class="font-semibold text-gray-900">Maria Torres</h4>
                <p class="text-sm text-gray-600">PR Manager</p>
              </div>
            </div>
            <p class="text-gray-700 italic">
              "The work-life balance here is exceptional. SolStrategy truly cares about employee well-being 
              while still delivering outstanding results for clients. It's the perfect environment to thrive."
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Process -->
    <section class="py-24 bg-gradient-to-br from-purple-50 to-blue-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">Application Process</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Our streamlined process ensures we find the right fit for both you and our team.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-white font-bold text-xl">1</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Apply Online</h3>
            <p class="text-gray-600">Submit your application through our online portal with your resume and cover letter.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-white font-bold text-xl">2</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Initial Screening</h3>
            <p class="text-gray-600">Our HR team will review your application and conduct an initial phone screening.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-white font-bold text-xl">3</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Technical Interview</h3>
            <p class="text-gray-600">Meet with our team leads for a technical discussion and case study evaluation.</p>
          </div>

          <div class="text-center">
            <div class="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span class="text-white font-bold text-xl">4</span>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-4">Final Interview</h3>
            <p class="text-gray-600">Final interview with senior leadership and team members you'll be working with.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- All Positions Modal/Section -->
    <section v-if="showAllPositions" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-6">All Available Positions</h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our complete range of career opportunities across all departments.
          </p>
        </div>

        <div class="space-y-8">
          <div 
            v-for="position in allPositions" 
            :key="position.id"
            class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
          >
            <div class="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div class="flex-1">
                <div class="flex items-center space-x-4 mb-4">
                  <div :class="`inline-flex items-center px-3 py-1 rounded-full bg-${position.color}-100 text-${position.color}-600 text-sm font-medium`">
                    {{ position.department }}
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-600 text-sm font-medium">
                    {{ position.type }}
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-600 text-sm font-medium">
                    {{ position.location }}
                  </div>
                  <div class="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                    {{ position.salary }}
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ position.title }}</h3>
                <p class="text-gray-600 mb-6">{{ position.description }}</p>
                
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-gray-900 mb-3">Requirements:</h4>
                  <ul class="space-y-2">
                    <li v-for="req in position.requirements" :key="req" class="flex items-start space-x-2">
                      <svg class="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                      </svg>
                      <span class="text-gray-600">{{ req }}</span>
                    </li>
                  </ul>
                </div>
                
                <div class="flex flex-wrap gap-2 mb-6">
                  <span 
                    v-for="skill in position.skills" 
                    :key="skill"
                    class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                  >
                    {{ skill }}
                  </span>
                </div>
              </div>
              
              <div class="mt-6 lg:mt-0 lg:ml-8">
                <button 
                  @click="openApplicationModal(position)"
                  :class="`w-full lg:w-auto px-6 py-3 text-white font-semibold rounded-full transition-colors duration-300 ${getColorClasses(position.color)}`"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Success Message -->
    <div 
      v-if="showSuccessMessage"
      class="fixed top-4 right-4 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg z-50 animate-fade-in"
    >
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
        </svg>
        <span>Application submitted successfully! Please check your email client.</span>
      </div>
    </div>

    <!-- Application Modal -->
    <div 
      v-if="showApplicationModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      @click.self="closeApplicationModal"
    >
      <div class="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div class="p-8">
          <div class="flex items-center justify-between mb-6">
            <h3 class="text-2xl font-bold text-gray-900">
              {{ currentJob ? `Apply for ${currentJob.title}` : 'General Application' }}
            </h3>
            <button 
              @click="closeApplicationModal"
              class="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>

          <form @submit.prevent="submitApplication" class="space-y-6">
            <!-- Personal Information -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                <input 
                  v-model="applicationForm.firstName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                <input 
                  v-model="applicationForm.lastName"
                  type="text" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input 
                  v-model="applicationForm.email"
                  type="email" 
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input 
                  v-model="applicationForm.phone"
                  type="tel"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+65 1234 5678"
                />
              </div>
            </div>

            <!-- Position -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Position</label>
              <input 
                v-model="applicationForm.position"
                type="text" 
                readonly
                class="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50"
              />
            </div>

            <!-- Additional Links -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                <input 
                  v-model="applicationForm.linkedIn"
                  type="url"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label class="block text-sm font-medium text-gray-700 mb-2">Portfolio/Website</label>
                <input 
                  v-model="applicationForm.portfolio"
                  type="url"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="https://yourportfolio.com"
                />
              </div>
            </div>

            <!-- Resume Upload -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
              <div class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input 
                  type="file" 
                  @change="handleFileUpload"
                  accept=".pdf,.doc,.docx"
                  class="hidden"
                  id="resume-upload"
                  required
                />
                <label for="resume-upload" class="cursor-pointer">
                  <svg class="w-12 h-12 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
                  </svg>
                  <p class="text-gray-600">
                    {{ applicationForm.resume ? applicationForm.resume.name : 'Click to upload your resume' }}
                  </p>
                  <p class="text-sm text-gray-400 mt-2">PDF, DOC, or DOCX (Max 10MB)</p>
                </label>
              </div>
            </div>

            <!-- Cover Letter -->
            <div>
              <label class="block text-sm font-medium text-gray-700 mb-2">Cover Letter</label>
              <textarea 
                v-model="applicationForm.coverLetter"
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div class="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {{ isSubmitting ? 'Submitting...' : 'Submit Application' }}
              </button>
              <button 
                type="button"
                @click="closeApplicationModal"
                class="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-lg hover:bg-gray-300 transition-colors duration-300"
              >
                Cancel
              </button>
            </div>
          </form>

          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <p class="text-sm text-blue-700">
              <strong>Note:</strong> Your application will be sent to hr@solstrategy.com. 
              Please ensure your email client is configured to send emails.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <section class="py-24 bg-gradient-to-r from-purple-600 to-blue-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Ready to Start Your Journey?
        </h2>
        <p class="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Join a team that values excellence, innovation, and making a meaningful impact. 
          Your next career milestone awaits at SolStrategy.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            @click="toggleAllPositions"
            class="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          >
            {{ showAllPositions ? 'Hide All Positions' : 'View All Positions' }}
          </button>
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
import { ref, reactive } from 'vue';

// Modal states
const showApplicationModal = ref(false);
const showAllPositions = ref(false);
const showSuccessMessage = ref(false);
const isSubmitting = ref(false);

// Current job being applied for
const currentJob = ref<any>(null);

// Application form data
const applicationForm = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  position: '',
  coverLetter: '',
  resume: null as File | null,
  linkedIn: '',
  portfolio: ''
});

// All available positions
const allPositions = ref([
  {
    id: 1,
    title: 'Senior Investment Consultant',
    department: 'Investment Advisory',
    type: 'Full-time',
    location: 'Singapore',
    description: 'Lead investment advisory projects for Fortune 500 clients across Asia-Pacific. Requires 5+ years experience in investment banking or consulting.',
    requirements: [
      '5+ years in investment banking or financial consulting',
      'CFA or equivalent certification preferred',
      'Strong analytical and quantitative skills',
      'Experience with portfolio management',
      'Excellent client relationship management'
    ],
    skills: ['Financial Analysis', 'Portfolio Management', 'Client Relations'],
    salary: 'S$120,000 - S$180,000',
    color: 'blue'
  },
  {
    id: 2,
    title: 'Cybersecurity Analyst',
    department: 'Security Consulting',
    type: 'Full-time',
    location: 'Singapore',
    description: 'Conduct security assessments and develop cybersecurity strategies for enterprise clients. Strong background in information security and risk management required.',
    requirements: [
      'Bachelor\'s degree in Computer Science or related field',
      '3+ years in cybersecurity or information security',
      'CISSP, CISM, or equivalent certification',
      'Experience with penetration testing tools',
      'Knowledge of compliance frameworks (ISO 27001, SOC 2)'
    ],
    skills: ['Penetration Testing', 'Risk Assessment', 'Compliance'],
    salary: 'S$90,000 - S$130,000',
    color: 'green'
  },
  {
    id: 3,
    title: 'PR Strategy Manager',
    department: 'Public Relations',
    type: 'Full-time',
    location: 'Singapore',
    description: 'Develop and execute comprehensive PR strategies for multinational clients. Experience in crisis communication and media relations essential.',
    requirements: [
      'Bachelor\'s degree in Communications, PR, or Marketing',
      '4+ years in public relations or communications',
      'Experience in crisis communication management',
      'Strong media relationships in Asia-Pacific',
      'Excellent written and verbal communication skills'
    ],
    skills: ['Media Relations', 'Crisis Management', 'Content Strategy'],
    salary: 'S$80,000 - S$120,000',
    color: 'purple'
  },
  {
    id: 4,
    title: 'Data Analytics Specialist',
    department: 'Technology',
    type: 'Full-time',
    location: 'Singapore',
    description: 'Leverage data analytics to drive insights for client projects. Strong skills in Python, R, and machine learning frameworks required.',
    requirements: [
      'Master\'s degree in Data Science, Statistics, or related field',
      '3+ years in data analytics or data science',
      'Proficiency in Python, R, and SQL',
      'Experience with machine learning frameworks',
      'Strong data visualization skills'
    ],
    skills: ['Python', 'Machine Learning', 'Data Visualization'],
    salary: 'S$100,000 - S$150,000',
    color: 'orange'
  },
  {
    id: 5,
    title: 'Junior Management Consultant',
    department: 'Strategy Consulting',
    type: 'Full-time',
    location: 'Singapore',
    description: 'Support senior consultants in delivering strategic consulting projects. Perfect for recent graduates or early-career professionals.',
    requirements: [
      'Bachelor\'s degree from top-tier university',
      '0-2 years of consulting or business experience',
      'Strong analytical and problem-solving skills',
      'Excellent presentation and communication abilities',
      'Proficiency in Excel, PowerPoint, and data analysis tools'
    ],
    skills: ['Strategic Analysis', 'Presentation Skills', 'Project Management'],
    salary: 'S$70,000 - S$95,000',
    color: 'indigo'
  },
  {
    id: 6,
    title: 'Senior PR Director',
    department: 'Public Relations',
    type: 'Full-time',
    location: 'Singapore',
    description: 'Lead PR initiatives across multiple client accounts and manage a team of PR professionals. Strategic leadership role.',
    requirements: [
      '8+ years in senior PR or communications roles',
      'Experience managing teams of 5+ people',
      'Proven track record in crisis management',
      'Strong network of media contacts across Asia',
      'MBA or equivalent advanced degree preferred'
    ],
    skills: ['Team Leadership', 'Strategic Planning', 'Stakeholder Management'],
    salary: 'S$150,000 - S$220,000',
    color: 'pink'
  }
]);

// Functions
const openApplicationModal = (job: any = null) => {
  currentJob.value = job;
  applicationForm.position = job ? job.title : 'General Application';
  showApplicationModal.value = true;
};

const closeApplicationModal = () => {
  showApplicationModal.value = false;
  currentJob.value = null;
  resetForm();
};

const resetForm = () => {
  Object.assign(applicationForm, {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    resume: null,
    linkedIn: '',
    portfolio: ''
  });
};

const handleFileUpload = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.files && target.files[0]) {
    applicationForm.resume = target.files[0];
  }
};

const submitApplication = async () => {
  if (!applicationForm.firstName || !applicationForm.lastName || !applicationForm.email || !applicationForm.resume) {
    alert('Please fill in all required fields and upload your resume.');
    return;
  }

  isSubmitting.value = true;

  try {
    // Simulate API call - In real implementation, this would send to backend
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Create email content
    const emailSubject = `Job Application: ${applicationForm.position} - ${applicationForm.firstName} ${applicationForm.lastName}`;
    const emailBody = `
Dear HR Team,

I am submitting my application for the position of ${applicationForm.position}.

Applicant Details:
- Name: ${applicationForm.firstName} ${applicationForm.lastName}
- Email: ${applicationForm.email}
- Phone: ${applicationForm.phone}
- LinkedIn: ${applicationForm.linkedIn || 'Not provided'}
- Portfolio: ${applicationForm.portfolio || 'Not provided'}

Cover Letter:
${applicationForm.coverLetter}

Please find my resume attached.

Best regards,
${applicationForm.firstName} ${applicationForm.lastName}
    `.trim();

    // Create mailto link (in real implementation, this would be handled by backend)
    const mailtoLink = `mailto:hr@solstrategy.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    showSuccessMessage.value = true;
    closeApplicationModal();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccessMessage.value = false;
    }, 5000);
    
  } catch (error) {
    alert('There was an error submitting your application. Please try again.');
  } finally {
    isSubmitting.value = false;
  }
};

const toggleAllPositions = () => {
  showAllPositions.value = !showAllPositions.value;
};

const getColorClasses = (color: string) => {
  const colorMap: { [key: string]: string } = {
    blue: 'bg-blue-600 hover:bg-blue-700',
    green: 'bg-green-600 hover:bg-green-700',
    purple: 'bg-purple-600 hover:bg-purple-700',
    orange: 'bg-orange-600 hover:bg-orange-700',
    indigo: 'bg-indigo-600 hover:bg-indigo-700',
    pink: 'bg-pink-600 hover:bg-pink-700'
  };
  return colorMap[color] || 'bg-gray-600 hover:bg-gray-700';
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

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

/* Fix for dynamic color classes */
.bg-blue-100 { background-color: rgb(219 234 254); }
.text-blue-600 { color: rgb(37 99 235); }
.bg-green-100 { background-color: rgb(220 252 231); }
.text-green-600 { color: rgb(22 163 74); }
.bg-purple-100 { background-color: rgb(243 232 255); }
.text-purple-600 { color: rgb(147 51 234); }
.bg-orange-100 { background-color: rgb(254 215 170); }
.text-orange-600 { color: rgb(234 88 12); }
.bg-indigo-100 { background-color: rgb(224 231 255); }
.text-indigo-600 { color: rgb(79 70 229); }
.bg-pink-100 { background-color: rgb(252 231 243); }
.text-pink-600 { color: rgb(219 39 119); }
</style>