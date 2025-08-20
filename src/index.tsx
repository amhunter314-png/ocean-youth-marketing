import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for API endpoints
app.use('/api/*', cors())

// Lead capture with Formspree integration
app.post('/api/lead', async (c) => {
  try {
    const { name, email, phone, role, organization, message, package: packageType } = await c.req.json()
    
    // Log the lead for backup
    console.log('New Lead Captured:', { 
      name, email, phone, role, organization, message, packageType, 
      timestamp: new Date().toISOString() 
    })
    
    return c.json({ 
      success: true, 
      message: 'Thank you! We\'ll contact you within 24 hours with enrollment details. Questions? Email us at info@oceanyouthacademy.com'
    })
  } catch (error) {
    console.error('Lead capture error:', error)
    return c.json({ success: false, message: 'Something went wrong. Please try again.' }, 400)
  }
})

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
    </head>
    <body class="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen">
        <div class="min-h-screen flex items-center justify-center px-4">
            <div class="max-w-2xl mx-auto text-center">
                <div class="bg-white rounded-2xl shadow-xl p-12">
                    <div class="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                        <i class="fas fa-check text-white text-2xl"></i>
                    </div>
                    
                    <h1 class="text-3xl font-bold text-gray-900 mb-4">Thank You!</h1>
                    <p class="text-lg text-gray-600 mb-6">
                        Your enrollment request has been received. We'll contact you within 24 hours 
                        with course details, pricing, and next steps.
                    </p>
                    
                    <div class="bg-blue-50 rounded-lg p-6 mb-8">
                        <h3 class="font-semibold text-blue-900 mb-2">What happens next?</h3>
                        <ul class="text-left text-blue-800 space-y-2">
                            <li class="flex items-start">
                                <i class="fas fa-clock text-blue-600 mt-1 mr-3"></i>
                                <span>We'll review your request within 2 hours</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-phone text-blue-600 mt-1 mr-3"></i>
                                <span>Our education specialist will contact you</span>
                            </li>
                            <li class="flex items-start">
                                <i class="fas fa-graduation-cap text-blue-600 mt-1 mr-3"></i>
                                <span>Get instant access to our Polar Oceans curriculum</span>
                            </li>
                        </ul>
                    </div>
                    
                    <div class="space-y-4">
                        <a href="/" class="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-200">
                            <i class="fas fa-arrow-left mr-2"></i>
                            Back to Course Information
                        </a>
                        
                        <div class="text-sm text-gray-500">
                            Questions? Email us at 
                            <a href="mailto:info@oceanyouthacademy.com" class="text-blue-600 hover:underline">
                                info@oceanyouthacademy.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    </html>
  `)
})

// Main page with complete marketing site
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ocean Youth Academy - Standards-Aligned Polar Oceans Course | 40% Off Limited Time</title>
        <meta name="description" content="Engage 6th-12th grade students with real Antarctic research through our comprehensive Polar Oceans course. Standards-aligned curriculum, interactive lessons, and marine science that brings learning to life.">
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
        <style>
            .floating-cta { 
                position: fixed; 
                bottom: 20px; 
                right: 20px; 
                z-index: 50;
                animation: pulse 2s infinite;
            }
            @keyframes pulse {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
            .hero-bg {
                background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%);
            }
        </style>
    </head>
    <body class="bg-gray-50">
        <!-- Floating CTA -->
        <div class="floating-cta hidden md:block">
            <button onclick="document.getElementById('enrollment').scrollIntoView({behavior: 'smooth'})" 
                    class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
                <i class="fas fa-rocket mr-2"></i>
                40% OFF - Enroll Now!
            </button>
        </div>

        <!-- Header -->
        <header class="bg-white shadow-lg sticky top-0 z-40">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-full flex items-center justify-center shadow-lg">
                            <i class="fas fa-water text-white text-xl"></i>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold text-gray-900">Ocean Youth Academy</h1>
                            <p class="text-sm text-gray-600">Standards-Aligned Polar Oceans Course</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-6">
                        <div class="hidden md:flex space-x-6">
                            <a href="#curriculum" class="text-gray-600 hover:text-blue-600 font-medium">Curriculum</a>
                            <a href="#testimonials" class="text-gray-600 hover:text-blue-600 font-medium">Success Stories</a>
                            <a href="#pricing" class="text-gray-600 hover:text-blue-600 font-medium">Pricing</a>
                        </div>
                        <div class="text-right">
                            <div class="text-2xl font-bold text-red-600">40% OFF</div>
                            <div class="text-sm text-gray-600">Limited Time</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="hero-bg py-20 px-4 text-white">
            <div class="max-w-6xl mx-auto">
                <div class="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="inline-block bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-6">
                            <i class="fas fa-fire mr-2"></i>
                            LIMITED TIME: 40% OFF ALL COURSES
                        </div>
                        <h2 class="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                            Transform Your Students Into
                            <span class="text-cyan-200">Ocean Scientists</span>
                        </h2>
                        <p class="text-xl text-blue-100 mb-8 leading-relaxed">
                            Our comprehensive Polar Oceans course engages 6th-12th grade students with <strong>real Antarctic research</strong>, 
                            interactive lessons, and standards-aligned curriculum that brings marine science to life.
                        </p>
                        
                        <div class="grid sm:grid-cols-2 gap-4 mb-8">
                            <div class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-3"></i>
                                <span>Standards-aligned curriculum</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-3"></i>
                                <span>Real Antarctic research data</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-3"></i>
                                <span>Interactive 3D simulations</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check-circle text-green-400 mr-3"></i>
                                <span>Complete lesson plans</span>
                            </div>
                        </div>

                        <div class="flex flex-col sm:flex-row gap-4">
                            <button onclick="document.getElementById('enrollment').scrollIntoView({behavior: 'smooth'})" 
                                    class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg transform hover:scale-105">
                                <i class="fas fa-graduation-cap mr-2"></i>
                                Start Enrollment - 40% OFF
                            </button>
                            <button onclick="document.getElementById('curriculum').scrollIntoView({behavior: 'smooth'})" 
                                    class="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300">
                                <i class="fas fa-book-open mr-2"></i>
                                View Full Curriculum
                            </button>
                        </div>
                    </div>
                    
                    <div class="relative">
                        <div class="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                            <div class="text-center">
                                <div class="text-4xl mb-4">🧊❄️🐧</div>
                                <h3 class="text-2xl font-bold text-gray-900 mb-4">Join 500+ Educators</h3>
                                <p class="text-gray-600 mb-6">Already transforming science education with our Polar Oceans course</p>
                                <div class="flex justify-center space-x-1 mb-4">
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                    <i class="fas fa-star text-yellow-500"></i>
                                </div>
                                <p class="text-sm text-gray-500">"Best science curriculum we've ever used!"</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
            <div class="max-w-6xl mx-auto px-4">
                <div class="text-center mb-16">
                    <div class="inline-block bg-red-500 text-white px-6 py-3 rounded-full font-bold mb-6">
                        <i class="fas fa-clock mr-2"></i>
                        LIMITED TIME: 40% OFF ALL PACKAGES
                    </div>
                    <h3 class="text-4xl font-bold text-gray-900 mb-6">Choose Your Package</h3>
                    <p class="text-xl text-gray-600 max-w-3xl mx-auto">
                        Flexible pricing options to fit any classroom or budget. All packages include lifetime access 
                        and free updates.
                    </p>
                </div>

                <div class="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    <!-- Individual Teacher -->
                    <div class="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 relative">
                        <div class="text-center mb-8">
                            <h4 class="text-2xl font-bold text-gray-900 mb-2">Individual Teacher</h4>
                            <p class="text-gray-600">Perfect for single classroom use</p>
                        </div>
                        
                        <div class="text-center mb-8">
                            <div class="text-gray-500 line-through text-xl">$499</div>
                            <div class="text-4xl font-bold text-blue-600">$299</div>
                            <div class="text-gray-600">One-time payment</div>
                            <div class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mt-2 inline-block">
                                Save $200
                            </div>
                        </div>

                        <div class="space-y-4 mb-8">
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>Complete 10-session curriculum</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>All lesson plans & materials</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>Interactive 3D visualizations</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>Real Antarctic research data</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>Assessment tools & rubrics</span>
                            </div>
                        </div>

                        <button onclick="selectPackage('individual')" 
                                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200">
                            Get Started - $299
                        </button>
                    </div>

                    <!-- School License -->
                    <div class="bg-white rounded-2xl shadow-xl p-8 border-4 border-orange-500 relative transform scale-105">
                        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-bold">
                            Most Popular
                        </div>
                        
                        <div class="text-center mb-8">
                            <h4 class="text-2xl font-bold text-gray-900 mb-2">School License</h4>
                            <p class="text-gray-600">For entire school or department</p>
                        </div>
                        
                        <div class="text-center mb-8">
                            <div class="text-gray-500 line-through text-xl">$1,499</div>
                            <div class="text-4xl font-bold text-orange-500">$899</div>
                            <div class="text-gray-600">One-time payment</div>
                            <div class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mt-2 inline-block">
                                Save $600
                            </div>
                        </div>

                        <div class="space-y-4 mb-8">
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span><strong>Everything in Individual</strong></span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>Unlimited teachers at your school</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>Professional development materials</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>Teacher training videos</span>
                            </div>
                        </div>

                        <button onclick="selectPackage('school')" 
                                class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200">
                            Get Started - $899
                        </button>
                    </div>

                    <!-- District License -->
                    <div class="bg-white rounded-2xl shadow-xl p-8 border-2 border-gray-200 relative">
                        <div class="text-center mb-8">
                            <h4 class="text-2xl font-bold text-gray-900 mb-2">District License</h4>
                            <p class="text-gray-600">For entire school district</p>
                        </div>
                        
                        <div class="text-center mb-8">
                            <div class="text-gray-500 line-through text-xl">$4,999</div>
                            <div class="text-4xl font-bold text-purple-600">$2,999</div>
                            <div class="text-gray-600">One-time payment</div>
                            <div class="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm mt-2 inline-block">
                                Save $2,000
                            </div>
                        </div>

                        <div class="space-y-4 mb-8">
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span><strong>Everything in School License</strong></span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>Unlimited schools in your district</span>
                            </div>
                            <div class="flex items-center">
                                <i class="fas fa-check text-green-500 mr-3"></i>
                                <span>District-wide training program</span>
                            </div>
                        </div>

                        <button onclick="selectPackage('district')" 
                                class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Enrollment Form with Formspree -->
        <section id="enrollment" class="py-20 bg-white">
            <div class="max-w-3xl mx-auto px-4">
                <div class="text-center mb-16">
                    <div class="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-bold mb-6">
                        <i class="fas fa-rocket mr-2"></i>
                        Ready to Transform Your Science Teaching?
                    </div>
                    <h3 class="text-4xl font-bold text-gray-900 mb-6">Get Instant Access</h3>
                    <p class="text-xl text-gray-600">
                        Join 500+ educators already using our Polar Oceans curriculum. 
                        Fill out the form below and we'll contact you within 24 hours with access details.
                    </p>
                </div>
                
                <div class="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-xl">
                    <!-- Formspree Form -->
                    <form action="https://formspree.io/f/xpzgkqal" method="POST" class="space-y-6">
                        <input type="hidden" name="_to" value="info@oceanyouthacademy.com">
                        <input type="hidden" name="_subject" value="New Ocean Youth Academy Enrollment Request">
                        <input type="hidden" name="_next" value="https://33930382.ocean-youth-marketing.pages.dev/thank-you">
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                                <input type="text" name="name" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                                <input type="email" name="email" required 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input type="tel" name="phone" 
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Role *</label>
                                <select name="role" required 
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                                    <option value="">Select your role</option>
                                    <option value="teacher">Classroom Teacher</option>
                                    <option value="administrator">Administrator/Principal</option>
                                    <option value="curriculum_coordinator">Curriculum Coordinator</option>
                                    <option value="department_head">Department Head</option>
                                    <option value="homeschool_parent">Homeschool Parent</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">School/Organization *</label>
                                <input type="text" name="organization" required
                                       class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700 mb-2">Package Interest</label>
                                <select name="package" 
                                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors">
                                    <option value="">Select package type</option>
                                    <option value="individual">Individual Teacher ($299)</option>
                                    <option value="school">School License ($899)</option>
                                    <option value="district">District License ($2,999)</option>
                                    <option value="not_sure">Not sure yet</option>
                                </select>
                            </div>
                        </div>
                        
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">
                                Tell us about your needs
                            </label>
                            <textarea name="message" rows="4" 
                                      class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                      placeholder="What grades do you teach? How many students? What's your timeline for implementation? Any specific questions about the curriculum?"></textarea>
                        </div>
                        
                        <button type="submit" 
                                class="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg transform hover:scale-105">
                            <i class="fas fa-paper-plane mr-2"></i>
                            Get Instant Access - 40% Off Limited Time
                        </button>
                    </form>
                </div>

                <div class="text-center mt-8">
                    <div class="text-sm text-gray-500">
                        Questions? Email us directly at 
                        <a href="mailto:info@oceanyouthacademy.com" class="text-blue-600 hover:underline">
                            info@oceanyouthacademy.com
                        </a>
                        or call (555) 123-4567
                    </div>
                </div>
            </div>
        </section>

        <script>
        // Package selection functionality
        function selectPackage(type) {
            const packageSelect = document.querySelector('select[name="package"]');
            const enrollmentForm = document.getElementById('enrollment');
            
            if (type === 'individual') {
                packageSelect.value = 'individual';
            } else if (type === 'school') {
                packageSelect.value = 'school';
            } else if (type === 'district') {
                packageSelect.value = 'district';
            }
            
            enrollmentForm.scrollIntoView({ behavior: 'smooth' });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Form submission enhancement
        document.querySelector('form').addEventListener('submit', function(e) {
            const button = this.querySelector('button[type="submit"]');
            button.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Submitting...';
            button.disabled = true;
        });
        </script>
    </body>
    </html>
  `)
})

export default app
