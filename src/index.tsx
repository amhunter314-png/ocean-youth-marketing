import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Enable CORS for API endpoints
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// Thank you page
app.get('/thank-you', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Ocean Youth Academy</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  ocean: {
                    50: '#f0f9ff',
                    500: '#0891b2',
                    600: '#0e7490',
                    900: '#164e63'
                  }
                }
              }
            }
          }
        </script>
    </head>
    <body class="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen">
        <div class="max-w-4xl mx-auto px-4 py-16">
            <div class="bg-white rounded-2xl shadow-2xl p-8 text-center">
                <div class="mb-6">
                    <i class="fas fa-check-circle text-green-500 text-6xl mb-4"></i>
                    <h1 class="text-4xl font-bold text-gray-800 mb-4">Thank You!</h1>
                    <p class="text-xl text-gray-600 mb-8">
                        We've received your inquiry about the Polar Oceans Course.
                    </p>
                </div>
                
                <div class="bg-ocean-50 border border-ocean-200 rounded-lg p-6 mb-8">
                    <h2 class="text-2xl font-semibold text-ocean-900 mb-4">What Happens Next?</h2>
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="text-center">
                            <i class="fas fa-clock text-ocean-500 text-2xl mb-2"></i>
                            <h3 class="font-semibold text-gray-800">Within 2 Hours</h3>
                            <p class="text-sm text-gray-600">Detailed course information & pricing sent to your email</p>
                        </div>
                        <div class="text-center">
                            <i class="fas fa-phone text-ocean-500 text-2xl mb-2"></i>
                            <h3 class="font-semibold text-gray-800">Within 24 Hours</h3>
                            <p class="text-sm text-gray-600">Personal consultation call to answer questions</p>
                        </div>
                        <div class="text-center">
                            <i class="fas fa-rocket text-ocean-500 text-2xl mb-2"></i>
                            <h3 class="font-semibold text-gray-800">Get Started</h3>
                            <p class="text-sm text-gray-600">Enroll and begin your polar expedition!</p>
                        </div>
                    </div>
                </div>
                
                <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                    <p class="text-lg font-medium text-yellow-800 mb-2">
                        <i class="fas fa-gift mr-2"></i>Special Early Bird Pricing Available!
                    </p>
                    <p class="text-yellow-700">
                        Ask about our 40% discount for the first 50 enrollments this month.
                    </p>
                </div>
            </div>
        </div>
    </body>
    </html>
  `)
})

// Main landing page
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Polar Oceans Course - Ocean Youth Academy | Standards-Aligned STEM Education</title>
        <meta name="description" content="Transform K-12 students into ocean and climate advocates with our expert-led, standards-aligned 10-session polar oceans course. Perfect for schools, homeschool, and enrichment programs.">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <script>
          tailwind.config = {
            theme: {
              extend: {
                colors: {
                  ocean: {
                    50: '#f0f9ff',
                    100: '#e0f2fe',
                    500: '#0891b2',
                    600: '#0e7490',
                    700: '#0f766e',
                    900: '#164e63'
                  }
                }
              }
            }
          }
        </script>
    </head>
    <body class="bg-white">
        <!-- Navigation Header -->
        <nav class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
            <div class="max-w-7xl mx-auto px-4 py-3">
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <img src="https://page.gensparksite.com/v1/base64_upload/d1a49f4e07f40336667580b24ba9fbe4" alt="Ocean Youth Academy" class="h-12 w-auto" style="mix-blend-mode: lighten;">
                    </div>
                    <div class="hidden md:flex items-center space-x-8">
                        <a href="#pricing" class="text-gray-700 hover:text-ocean-600 font-medium transition-colors">Pricing</a>
                        <a href="#curriculum" class="text-gray-700 hover:text-ocean-600 font-medium transition-colors">Curriculum</a>
                        <button onclick="openEnrollmentForm('individual')" class="bg-ocean-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-ocean-700 transition-colors">
                            Get Started
                        </button>
                    </div>
                    <div class="md:hidden">
                        <button onclick="openEnrollmentForm('individual')" class="bg-ocean-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                            Enroll
                        </button>
                    </div>
                </div>
            </div>
        </nav>
        
        <!-- Hero Section -->
        <section class="relative text-white overflow-hidden" style="background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://page.gensparksite.com/v1/base64_upload/a53f7058e5cb594e2102d410d2a06807'); background-size: cover; background-position: center; background-attachment: fixed;">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-teal-800/20 to-blue-700/40"></div>
            <div class="relative max-w-7xl mx-auto px-4 pt-32 pb-20 lg:pt-40 lg:pb-32">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block font-bold mb-6">
                            🔥 LIMITED TIME: 40% OFF First 50 Enrollments!
                        </div>
                        <h1 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Polar Oceans<br>
                            <span class="text-yellow-400">Virtual Expedition</span>
                        </h1>
                        <p class="text-xl lg:text-2xl mb-8 leading-relaxed">
                            Transform your students into ocean and climate advocates with our expert-led, 
                            <strong>standards-aligned</strong> 10-session polar oceans course.
                        </p>
                        
                        <div class="grid grid-cols-2 gap-4 mb-8">
                            <div class="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                                <div class="text-2xl font-bold">10</div>
                                <div class="text-sm">Expert Sessions</div>
                            </div>
                            <div class="bg-white bg-opacity-20 rounded-lg p-4 text-center">
                                <div class="text-2xl font-bold">K-12</div>
                                <div class="text-sm">Grade Levels</div>
                            </div>
                        </div>
                        
                        <div class="flex flex-col sm:flex-row gap-4">
                            <button onclick="scrollToEnrollment()" class="bg-yellow-400 text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors flex items-center justify-center">
                                <i class="fas fa-rocket mr-2"></i>
                                Limited Time: 40% OFF - Enroll Today!
                            </button>
                            <button onclick="scrollToPricing()" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-ocean-600 transition-colors">
                                View All Pricing
                            </button>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <div class="bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm">
                            <h3 class="text-2xl font-bold mb-6 text-center">What Students Will Experience:</h3>
                            <div class="space-y-4">
                                <div class="flex items-start">
                                    <i class="fas fa-whale text-yellow-400 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold">Exceptional Content</div>
                                        <div class="text-sm text-ocean-100">Earth's largest animals, apex predators & ancient penguins</div>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <i class="fas fa-user-graduate text-yellow-400 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold">Expert Instructors</div>
                                        <div class="text-sm text-ocean-100">Field scientists & naturalists with global polar experience</div>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <i class="fas fa-certificate text-yellow-400 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold">Standards-Aligned (STEM, NGSS, GCSE, IB)</div>
                                        <div class="text-sm text-ocean-100">Earn credit within your educational institution</div>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <i class="fas fa-leaf text-yellow-400 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold">Conservation Focus</div>
                                        <div class="text-sm text-ocean-100">Methods for protecting vital polar ecosystems</div>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <i class="fas fa-plug text-yellow-400 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold">Easy Integration</div>
                                        <div class="text-sm text-ocean-100">Single sign-on & API integration with school platforms</div>
                                    </div>
                                </div>
                                <div class="flex items-start">
                                    <i class="fas fa-users text-yellow-400 text-xl mr-4 mt-1"></i>
                                    <div>
                                        <div class="font-semibold">Three Levels: Elementary, Middle, and High School</div>
                                        <div class="text-sm text-ocean-100">Grade-appropriate content & activities for all learners</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Social Proof Section -->
        <section class="bg-gradient-to-b from-blue-50 to-gray-50 py-12 relative">
            <div class="max-w-6xl mx-auto px-4 text-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-8">Trusted by Educators Worldwide</h2>
                <div class="grid md:grid-cols-4 gap-8">
                    <div class="bg-white rounded-lg p-6 shadow-md">
                        <i class="fas fa-school text-ocean-500 text-3xl mb-4"></i>
                        <div class="text-2xl font-bold text-gray-800">500+</div>
                        <div class="text-gray-600">Schools Served</div>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-md">
                        <i class="fas fa-users text-ocean-500 text-3xl mb-4"></i>
                        <div class="text-2xl font-bold text-gray-800">12,000+</div>
                        <div class="text-gray-600">Students Educated</div>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-md">
                        <i class="fas fa-star text-yellow-400 text-3xl mb-4"></i>
                        <div class="text-2xl font-bold text-gray-800">4.9/5</div>
                        <div class="text-gray-600">Educator Rating</div>
                    </div>
                    <div class="bg-white rounded-lg p-6 shadow-md">
                        <i class="fas fa-globe text-ocean-500 text-3xl mb-4"></i>
                        <div class="text-2xl font-bold text-gray-800">25+</div>
                        <div class="text-gray-600">Countries</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="py-20 bg-white">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-4xl font-bold text-center text-gray-800 mb-4">
                    Choose Your Polar Expedition Package
                </h2>
                <p class="text-xl text-center text-gray-600 mb-12">
                    Standards-aligned curriculum designed for immediate implementation
                </p>
                
                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Individual/Homeschool -->
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-ocean-500 transition-colors">
                        <div class="text-center">
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">Individual Student</h3>
                            <p class="text-gray-600 mb-6">Perfect for homeschool families</p>
                            <div class="mb-6">
                                <span class="text-sm text-gray-500 line-through">$149</span>
                                <div class="text-4xl font-bold text-ocean-600">$99</div>
                                <div class="text-sm text-gray-500">per student</div>
                            </div>
                            
                            <ul class="text-left space-y-3 mb-8">
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    10 interactive sessions
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    Digital workbook & activities
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    Certificate of completion
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    Parent/teacher resources
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    6 months access
                                </li>
                            </ul>
                            
                            <button onclick="openEnrollmentForm('individual')" class="w-full bg-ocean-600 text-white py-3 rounded-lg font-semibold hover:bg-ocean-700 transition-colors">
                                Enroll Now
                            </button>
                        </div>
                    </div>
                    
                    <!-- School Classroom -->
                    <div class="bg-gradient-to-br from-ocean-500 to-teal-600 text-white rounded-2xl p-8 transform scale-105 shadow-2xl">
                        <div class="text-center">
                            <div class="bg-yellow-400 text-black px-3 py-1 rounded-full inline-block text-sm font-bold mb-4">
                                MOST POPULAR
                            </div>
                            <h3 class="text-2xl font-bold mb-2">School Classroom</h3>
                            <p class="text-ocean-100 mb-6">Up to 30 students</p>
                            <div class="mb-6">
                                <span class="text-sm text-ocean-200 line-through">$899</span>
                                <div class="text-4xl font-bold">$539</div>
                                <div class="text-sm text-ocean-200">per classroom</div>
                            </div>
                            
                            <ul class="text-left space-y-3 mb-8">
                                <li class="flex items-center">
                                    <i class="fas fa-check text-yellow-400 mr-3"></i>
                                    Everything in Individual plan
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-yellow-400 mr-3"></i>
                                    Teacher training session
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-yellow-400 mr-3"></i>
                                    Lesson plans & assessments
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-yellow-400 mr-3"></i>
                                    Standards alignment guide
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-yellow-400 mr-3"></i>
                                    Live virtual field trip
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-yellow-400 mr-3"></i>
                                    Priority support
                                </li>
                            </ul>
                            
                            <button onclick="openEnrollmentForm('classroom')" class="w-full bg-yellow-400 text-black py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors">
                                Get Started
                            </button>
                        </div>
                    </div>
                    
                    <!-- District/Enterprise -->
                    <div class="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-ocean-500 transition-colors">
                        <div class="text-center">
                            <h3 class="text-2xl font-bold text-gray-800 mb-2">District License</h3>
                            <p class="text-gray-600 mb-6">Unlimited students & schools</p>
                            <div class="mb-6">
                                <span class="text-sm text-gray-500 line-through">$4,999</span>
                                <div class="text-4xl font-bold text-ocean-600">$2,999</div>
                                <div class="text-sm text-gray-500">per district</div>
                            </div>
                            
                            <ul class="text-left space-y-3 mb-8">
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    Everything in Classroom plan
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    Unlimited student access
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    Teacher PD workshops
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    Custom implementation
                                </li>
                                <li class="flex items-center">
                                    <i class="fas fa-check text-green-500 mr-3"></i>
                                    Dedicated success manager
                                </li>
                            </ul>
                            
                            <button onclick="openEnrollmentForm('district')" class="w-full bg-ocean-600 text-white py-3 rounded-lg font-semibold hover:bg-ocean-700 transition-colors">
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
                
                <div class="text-center mt-12">
                    <p class="text-lg text-gray-600 mb-4">
                        <i class="fas fa-clock text-yellow-500 mr-2"></i>
                        <strong>Limited Time:</strong> 40% discount expires in <span id="countdown" class="font-bold text-red-600"></span>
                    </p>
                    <p class="text-gray-500">
                        <i class="fas fa-shield-alt text-green-500 mr-2"></i>
                        30-day money-back guarantee • Instant access • No contracts
                    </p>
                </div>
            </div>
        </section>

        <!-- Course Content -->
        <section id="curriculum" class="py-20 bg-gray-50">
            <div class="max-w-6xl mx-auto px-4">
                <h2 class="text-4xl font-bold text-center text-gray-800 mb-12">
                    Complete 10-Session Curriculum
                </h2>
                
                <div class="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 class="text-2xl font-bold text-ocean-600 mb-6">Sessions 1-5</h3>
                        <div class="space-y-4">
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                                <h4 class="font-semibold text-gray-800">1. Migration</h4>
                                <p class="text-gray-600 text-sm">Explore epic journeys like the Arctic tern. Students track migrations and create their own maps or projects.</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-teal-500">
                                <h4 class="font-semibold text-gray-800">2. Whales of the Polar Regions</h4>
                                <p class="text-gray-600 text-sm">Dive into polar whales! Learn about baleen and toothed whales, behaviors, and climate change impacts.</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-600">
                                <h4 class="font-semibold text-gray-800">3. Polar Bears</h4>
                                <p class="text-gray-600 text-sm">Investigate the Arctic's apex predator. Explore adaptations, survival strategies, and conservation issues.</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-cyan-500">
                                <h4 class="font-semibold text-gray-800">4. Penguins</h4>
                                <p class="text-gray-600 text-sm">Meet Antarctica's iconic residents. Learn about species, adaptations, and human activity impacts.</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-700">
                                <h4 class="font-semibold text-gray-800">5. Pinnipeds</h4>
                                <p class="text-gray-600 text-sm">Discover seals, sea lions, and walruses. Explore their biology and challenges in a warming world.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-2xl font-bold text-ocean-600 mb-6">Sessions 6-10</h3>
                        <div class="space-y-4">
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-teal-600">
                                <h4 class="font-semibold text-gray-800">6. Polar Food Webs</h4>
                                <p class="text-gray-600 text-sm">Unpack energy flow through polar ecosystems. Students build food webs and understand ecosystem balance.</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-500">
                                <h4 class="font-semibold text-gray-800">7. Polar Adaptations</h4>
                                <p class="text-gray-600 text-sm">Learn survival in extreme cold. Hands-on activities include engineering "blubber gloves" and simulations.</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-cyan-600">
                                <h4 class="font-semibold text-gray-800">8. Polar Ice</h4>
                                <p class="text-gray-600 text-sm">Understand ice science! Study sea ice, glaciers, icebergs, and conduct melting/sea level experiments.</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-600">
                                <h4 class="font-semibold text-gray-800">9. Polar Conservation</h4>
                                <p class="text-gray-600 text-sm">Explore protection efforts from global treaties to local action. Students create conservation plans.</p>
                            </div>
                            <div class="bg-white rounded-lg p-4 shadow-sm border-l-4 border-red-500">
                                <h4 class="font-semibold text-gray-800">10. Climate Change</h4>
                                <p class="text-gray-600 text-sm">Examine polar regions' role in climate. Learn about greenhouse gases and develop awareness campaigns.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lead Capture Form Modal -->
        <div id="enrollmentModal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50 flex items-center justify-center p-4">
            <div class="bg-white rounded-2xl p-8 max-w-md w-full max-h-screen overflow-y-auto">
                <div class="flex justify-between items-center mb-6">
                    <h3 class="text-2xl font-bold text-gray-800">Get Started Today!</h3>
                    <button onclick="closeEnrollmentForm()" class="text-gray-400 hover:text-gray-600">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>
                
                <form id="enrollmentForm" action="https://formspree.io/f/xblkvnjy" method="POST" onsubmit="submitEnrollment(event)">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                            <input type="text" name="name" required class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ocean-500 focus:border-transparent">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                            <input type="email" name="email" required class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ocean-500 focus:border-transparent">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" name="phone" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ocean-500 focus:border-transparent">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">I am a: *</label>
                            <select name="role" required class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ocean-500 focus:border-transparent">
                                <option value="">Select your role</option>
                                <option value="teacher">Teacher</option>
                                <option value="administrator">School Administrator</option>
                                <option value="parent">Parent/Homeschool</option>
                                <option value="coordinator">Curriculum Coordinator</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">School/Organization</label>
                            <input type="text" name="organization" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ocean-500 focus:border-transparent">
                        </div>
                        
                        <div>
                            <label class="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
                            <textarea name="message" rows="3" class="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-ocean-500 focus:border-transparent" placeholder="Number of students, timeline, special requirements..."></textarea>
                        </div>
                    </div>
                    
                    <div class="mt-6">
                        <button type="submit" class="w-full bg-ocean-600 text-white py-3 rounded-lg font-semibold hover:bg-ocean-700 transition-colors">
                            <span id="submitText">Get Instant Access & Pricing</span>
                            <i id="submitSpinner" class="fas fa-spinner fa-spin hidden ml-2"></i>
                        </button>
                        
                        <!-- Fallback Email Option -->
                        <div class="mt-4 text-center">
                            <p class="text-sm text-gray-500 mb-2">Having trouble with the form?</p>
                            <button type="button" onclick="sendFallbackEmail()" class="text-ocean-600 hover:text-ocean-700 underline text-sm font-medium">
                                Email us directly instead
                            </button>
                        </div>
                    </div>
                    
                    <p class="text-xs text-gray-500 mt-4 text-center">
                        We'll send you detailed course information and special pricing within 2 hours. 
                        No spam, unsubscribe anytime.<br>
                        Questions? Email us at <a href="mailto:info@oceanyouthacademy.com" class="text-ocean-600 hover:text-ocean-700">info@oceanyouthacademy.com</a>
                    </p>
                </form>
            </div>
        </div>

        <!-- Footer -->
        <footer class="bg-gray-900 text-white py-12">
            <div class="max-w-6xl mx-auto px-4">
                <div class="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <img src="https://page.gensparksite.com/v1/base64_upload/d1a49f4e07f40336667580b24ba9fbe4" alt="Ocean Youth Academy" class="h-16 w-auto mb-4">
                        <p class="text-gray-300 text-sm">
                            Transforming students into ocean and climate advocates through expert-led education.
                        </p>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Contact Information</h4>
                        <div class="space-y-2 text-sm text-gray-300">
                            <div class="flex items-center">
                                <i class="fas fa-envelope text-cyan-400 mr-3"></i>
                                <a href="mailto:info@oceanyouthacademy.com" class="hover:text-cyan-400 transition-colors">
                                    info@oceanyouthacademy.com
                                </a>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-globe text-cyan-400 mr-3"></i>
                                <a href="https://oceanyouthacademy.org" class="hover:text-cyan-400 transition-colors">
                                    oceanyouthacademy.org
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
                        <div class="space-y-2 text-sm text-gray-300">
                            <div><a href="#pricing" class="hover:text-cyan-400 transition-colors">Pricing</a></div>
                            <div><a href="#curriculum" class="hover:text-cyan-400 transition-colors">Curriculum</a></div>
                            <div><button onclick="openEnrollmentForm('individual')" class="hover:text-cyan-400 transition-colors text-left">Get Started</button></div>
                        </div>
                    </div>
                </div>
                
                <div class="border-t border-gray-700 pt-8 text-center">
                    <p class="text-gray-400 text-sm">
                        © 2024 Ocean Youth Academy. All rights reserved. | 
                        <span class="text-cyan-400">🔥 Limited Time: 40% Off - First 50 Enrollments Only!</span>
                    </p>
                </div>
            </div>
        </footer>

        <!-- JavaScript -->
        <script>
            let selectedPlan = 'individual';
            
            // Countdown timer
            function updateCountdown() {
                const endDate = new Date();
                endDate.setDate(endDate.getDate() + 7); // 7 days from now
                
                const now = new Date();
                const timeLeft = endDate - now;
                
                if (timeLeft > 0) {
                    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
                    
                    document.getElementById('countdown').textContent = days + 'd ' + hours + 'h ' + minutes + 'm';
                } else {
                    document.getElementById('countdown').textContent = 'EXPIRED';
                }
            }
            
            // Update countdown every minute
            updateCountdown();
            setInterval(updateCountdown, 60000);
            
            // Smooth scrolling functions
            function scrollToEnrollment() {
                openEnrollmentForm('individual');
            }
            
            function scrollToPricing() {
                document.getElementById('pricing').scrollIntoView({ behavior: 'smooth' });
            }
            
            // Modal functions
            function openEnrollmentForm(plan) {
                selectedPlan = plan;
                document.getElementById('enrollmentModal').classList.remove('hidden');
                document.body.style.overflow = 'hidden';
            }
            
            function closeEnrollmentForm() {
                document.getElementById('enrollmentModal').classList.add('hidden');
                document.body.style.overflow = 'auto';
            }
            
            // Form submission with Formspree
            async function submitEnrollment(event) {
                event.preventDefault();
                
                const submitBtn = document.getElementById('submitText');
                const spinner = document.getElementById('submitSpinner');
                
                // Show loading state
                submitBtn.textContent = 'Processing...';
                spinner.classList.remove('hidden');
                
                const formData = new FormData(event.target);
                
                // Add the selected plan to form data
                formData.append('selectedPlan', selectedPlan);
                formData.append('timestamp', new Date().toISOString());
                
                try {
                    const response = await fetch('https://formspree.io/f/xblkvnjy', {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        // Success - redirect to thank you page
                        window.location.href = '/thank-you';
                    } else {
                        const data = await response.json();
                        if (data.errors) {
                            alert('Form validation error: ' + data.errors.map(e => e.message).join(', '));
                        } else {
                            alert('Something went wrong. Please try again.');
                        }
                    }
                } catch (error) {
                    console.error('Error:', error);
                    alert('Network error. Please check your connection and try again.');
                } finally {
                    // Reset button state
                    submitBtn.textContent = 'Get Instant Access & Pricing';
                    spinner.classList.add('hidden');
                }
            }
            
            // Close modal on escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeEnrollmentForm();
                }
            });
            
            // Close modal on background click
            document.getElementById('enrollmentModal').addEventListener('click', function(event) {
                if (event.target === this) {
                    closeEnrollmentForm();
                }
            });
            
            // Fallback email function
            function sendFallbackEmail() {
                const form = document.getElementById('enrollmentForm');
                const formData = new FormData(form);
                
                const name = formData.get('name') || '';
                const email = formData.get('email') || '';
                const phone = formData.get('phone') || '';
                const role = formData.get('role') || '';
                const organization = formData.get('organization') || '';
                const message = formData.get('message') || '';
                
                const subject = encodeURIComponent('Polar Oceans Course Enrollment - ' + selectedPlan + ' Plan');
                const body = encodeURIComponent(
                    'Hi! I\\'m interested in enrolling in the Polar Oceans Course.\\n\\n' +
                    'Plan Selected: ' + selectedPlan + '\\n' +
                    'Name: ' + name + '\\n' +
                    'Email: ' + email + '\\n' +
                    'Phone: ' + phone + '\\n' +
                    'Role: ' + role + '\\n' +
                    'School/Organization: ' + organization + '\\n' +
                    'Additional Info: ' + message + '\\n\\n' +
                    'Please send me pricing and enrollment details.\\n\\n' +
                    'Thanks!'
                );
                
                window.location.href = 'mailto:info@oceanyouthacademy.com?subject=' + subject + '&body=' + body;
            }
        </script>
    </body>
    </html>
  `)
})

export default app
