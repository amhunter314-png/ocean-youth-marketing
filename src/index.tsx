import { Hono } from 'hono'

const app = new Hono()

// Main page with complete marketing site
app.get('/', (c) => {
  return c.html(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ocean Youth Academy - Polar Oceans Course Enrollment</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
    </head>
    <body class="bg-gray-50">
        <!-- Header -->
        <header class="bg-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                            <i class="fas fa-water text-white text-xl"></i>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold text-gray-900">Ocean Youth Academy</h1>
                            <p class="text-sm text-gray-600">Polar Oceans Course</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <div class="text-2xl font-bold text-red-600">40% OFF</div>
                        <div class="text-sm text-gray-600">Limited Time</div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Hero Section -->
        <section class="bg-gradient-to-br from-blue-600 to-cyan-600 py-20 px-4 text-white">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-5xl font-bold mb-6">Transform Your Students Into Ocean Scientists</h2>
                <p class="text-xl mb-8">
                    Comprehensive Polar Oceans course with real Antarctic research, 
                    interactive lessons, and standards-aligned curriculum.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                    <button onclick="document.getElementById('enrollment').scrollIntoView({behavior: 'smooth'})" 
                            class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg">
                        <i class="fas fa-graduation-cap mr-2"></i>
                        Enroll Now - 40% OFF
                    </button>
                    <button onclick="document.getElementById('pricing').scrollIntoView({behavior: 'smooth'})" 
                            class="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-4 px-8 rounded-lg text-lg">
                        <i class="fas fa-dollar-sign mr-2"></i>
                        View Pricing
                    </button>
                </div>
            </div>
        </section>

        <!-- Pricing Section -->
        <section id="pricing" class="py-16 bg-white">
            <div class="max-w-6xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h3 class="text-4xl font-bold text-gray-900 mb-6">40% Off All Packages</h3>
                    <p class="text-xl text-gray-600">Choose the perfect option for your classroom</p>
                </div>

                <div class="grid md:grid-cols-3 gap-8">
                    <!-- Individual Teacher -->
                    <div class="bg-gray-50 rounded-xl p-8 shadow-lg">
                        <h4 class="text-2xl font-bold text-gray-900 mb-4">Individual Teacher</h4>
                        <div class="text-center mb-6">
                            <div class="text-gray-500 line-through">$499</div>
                            <div class="text-4xl font-bold text-blue-600">$299</div>
                            <div class="text-gray-600">One-time payment</div>
                        </div>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Complete curriculum</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Lesson plans</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>3D visualizations</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Real research data</li>
                        </ul>
                        <button onclick="selectPackage('individual')" 
                                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg">
                            Choose Individual
                        </button>
                    </div>

                    <!-- School License -->
                    <div class="bg-orange-50 rounded-xl p-8 shadow-lg border-2 border-orange-400">
                        <div class="text-center mb-4">
                            <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">Most Popular</span>
                        </div>
                        <h4 class="text-2xl font-bold text-gray-900 mb-4">School License</h4>
                        <div class="text-center mb-6">
                            <div class="text-gray-500 line-through">$1,499</div>
                            <div class="text-4xl font-bold text-orange-500">$899</div>
                            <div class="text-gray-600">One-time payment</div>
                        </div>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Everything in Individual</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Unlimited teachers</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Training materials</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Priority support</li>
                        </ul>
                        <button onclick="selectPackage('school')" 
                                class="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg">
                            Choose School
                        </button>
                    </div>

                    <!-- District License -->
                    <div class="bg-gray-50 rounded-xl p-8 shadow-lg">
                        <h4 class="text-2xl font-bold text-gray-900 mb-4">District License</h4>
                        <div class="text-center mb-6">
                            <div class="text-gray-500 line-through">$4,999</div>
                            <div class="text-4xl font-bold text-purple-600">$2,999</div>
                            <div class="text-gray-600">One-time payment</div>
                        </div>
                        <ul class="space-y-3 mb-8">
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Everything in School</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Unlimited schools</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>District training</li>
                            <li class="flex items-center"><i class="fas fa-check text-green-500 mr-2"></i>Dedicated manager</li>
                        </ul>
                        <button onclick="selectPackage('district')" 
                                class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <!-- Enrollment Form -->
        <section id="enrollment" class="py-16 bg-gray-50">
            <div class="max-w-2xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">Get Instant Access</h3>
                    <p class="text-lg text-gray-600">Fill out the form below and we'll contact you within 24 hours</p>
                </div>
                
                <!-- Working Formspree Form -->
<!-- Working Formspree Form -->
<form action="https://formspree.io/f/xpzgkqal" method="POST" class="bg-white rounded-xl p-8 shadow-lg space-y-6">
    <input type="hidden" name="_to" value="info@oceanyouthacademy.com">
    <input type="hidden" name="_subject" value="New Ocean Youth Academy Enrollment Request">
    <input type="hidden" name="_next" value="https://33930382.ocean-youth-marketing.pages.dev/">
    <input type="hidden" name="_captcha" value="false">
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
            <input type="text" name="name" required 
                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
            <input type="email" name="_replyto" required 
                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
        </div>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <input type="tel" name="phone" 
                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
        </div>
        <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Role *</label>
            <select name="role" required 
                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                <option value="">Select your role</option>
                <option value="teacher">Teacher</option>
                <option value="administrator">Administrator</option>
                <option value="curriculum_coordinator">Curriculum Coordinator</option>
                <option value="homeschool_parent">Homeschool Parent</option>
                <option value="other">Other</option>
            </select>
        </div>
    </div>
    
    <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">School/Organization *</label>
        <input type="text" name="organization" required
               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
    </div>
    
    <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Package Interest</label>
        <select name="package" 
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
            <option value="">Select package type</option>
            <option value="individual">Individual Teacher ($299)</option>
            <option value="school">School License ($899)</option>
            <option value="district">District License ($2,999)</option>
            <option value="not_sure">Not sure yet</option>
        </select>
    </div>
    
    <div>
        <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
        <textarea name="message" rows="4" 
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us about your needs, timeline, or any questions..."></textarea>
    </div>
    
    <button type="submit" 
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg">
        <i class="fas fa-paper-plane mr-2"></i>
        Submit Enrollment Request
    </button>
</form>
                    <input type="hidden" name="_to" value="info@oceanyouthacademy.com">
                    <input type="hidden" name="_subject" value="New Ocean Youth Academy Enrollment">
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input type="text" name="name" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input type="email" name="email" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" name="phone" 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Role *</label>
                            <select name="role" required 
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                                <option value="">Select your role</option>
                                <option value="teacher">Teacher</option>
                                <option value="administrator">Administrator</option>
                                <option value="curriculum_coordinator">Curriculum Coordinator</option>
                                <option value="homeschool_parent">Homeschool Parent</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">School/Organization *</label>
                        <input type="text" name="organization" required
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Package Interest</label>
                        <select name="package" 
                                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500">
                            <option value="">Select package type</option>
                            <option value="individual">Individual Teacher ($299)</option>
                            <option value="school">School License ($899)</option>
                            <option value="district">District License ($2,999)</option>
                            <option value="not_sure">Not sure yet</option>
                        </select>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea name="message" rows="4" 
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                                  placeholder="Tell us about your needs, timeline, or any questions..."></textarea>
                    </div>
                    
                    <button type="submit" 
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg">
                        <i class="fas fa-paper-plane mr-2"></i>
                        Submit Enrollment Request
                    </button>
                </form>

                <div class="text-center mt-8">
                    <p class="text-sm text-gray-500">
                        Questions? Email us at 
                        <a href="mailto:info@oceanyouthacademy.com" class="text-blue-600 hover:underline">
                            info@oceanyouthacademy.com
                        </a>
                    </p>
                </div>
            </div>
        </section>

        <script>
        // Package selection
        function selectPackage(type) {
            const packageSelect = document.querySelector('select[name="package"]');
            if (type === 'individual') packageSelect.value = 'individual';
            if (type === 'school') packageSelect.value = 'school';
            if (type === 'district') packageSelect.value = 'district';
            
            document.getElementById('enrollment').scrollIntoView({ behavior: 'smooth' });
        }

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
