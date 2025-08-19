import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

// Enable CORS for API endpoints
app.use('/api/*', cors())

// Lead capture API endpoint
app.post('/api/lead', async (c) => {
  try {
    const { name, email, phone, role, organization, message } = await c.req.json()
    
    // Log the lead (in production, save to database)
    console.log('New Lead Captured:', { name, email, phone, role, organization, message, timestamp: new Date().toISOString() })
    
    return c.json({ 
      success: true, 
      message: 'Thank you! We\'ll contact you within 24 hours with enrollment details.',
    })
  } catch (error) {
    console.error('Lead capture error:', error)
    return c.json({ success: false, message: 'Something went wrong. Please try again.' }, 400)
  }
})

// Main page
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
    <body class="bg-gradient-to-br from-blue-50 to-cyan-50 min-h-screen">
        <!-- Header -->
        <header class="bg-white shadow-lg">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div class="flex items-center justify-between">
                    <div class="flex items-center space-x-3">
                        <div class="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                            <i class="fas fa-wave-square text-white text-xl"></i>
                        </div>
                        <div>
                            <h1 class="text-2xl font-bold text-gray-900">Ocean Youth Academy</h1>
                            <p class="text-sm text-gray-600">Standards-Aligned Polar Oceans Course</p>
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
        <section class="py-20 px-4">
            <div class="max-w-4xl mx-auto text-center">
                <h2 class="text-5xl font-bold text-gray-900 mb-6">
                    Transform Your Students Into
                    <span class="text-blue-600">Ocean Scientists</span>
                </h2>
                <p class="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                    Our comprehensive Polar Oceans course engages 6th-12th grade students with real Antarctic research, 
                    interactive lessons, and standards-aligned curriculum that brings marine science to life.
                </p>
                <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button onclick="document.getElementById('enrollment').scrollIntoView({behavior: 'smooth'})" 
                            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg">
                        <i class="fas fa-graduation-cap mr-2"></i>
                        Start Enrollment - 40% OFF
                    </button>
                    <button onclick="document.getElementById('curriculum').scrollIntoView({behavior: 'smooth'})" 
                            class="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
                        <i class="fas fa-book-open mr-2"></i>
                        View Curriculum
                    </button>
                </div>
            </div>
        </section>

        <!-- Enrollment Form -->
        <section id="enrollment" class="py-16 bg-white">
            <div class="max-w-2xl mx-auto px-4">
                <div class="text-center mb-12">
                    <h3 class="text-3xl font-bold text-gray-900 mb-4">Enroll Your Students Today</h3>
                    <p class="text-lg text-gray-600">Get instant access to our complete Polar Oceans curriculum</p>
                </div>
                
                <form id="enrollmentForm" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                            <input type="text" name="name" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                            <input type="email" name="email" required 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" name="phone" 
                                   class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-2">Role *</label>
                            <select name="role" required 
                                    class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                                <option value="">Select your role</option>
                                <option value="teacher">Teacher</option>
                                <option value="administrator">Administrator</option>
                                <option value="homeschool_parent">Homeschool Parent</option>
                                <option value="curriculum_coordinator">Curriculum Coordinator</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">School/Organization</label>
                        <input type="text" name="organization" 
                               class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    </div>
                    
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Questions or Special Requirements</label>
                        <textarea name="message" rows="4" 
                                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                  placeholder="Tell us about your students, timeline, or any specific needs..."></textarea>
                    </div>
                    
                    <button type="submit" 
                            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-200 shadow-lg">
                        <i class="fas fa-paper-plane mr-2"></i>
                        Submit Enrollment Request
                    </button>
                </form>
            </div>
        </section>

        <script>
        document.getElementById('enrollmentForm').addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            
            try {
                const response = await fetch('/api/lead', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data)
                });
                
                const result = await response.json();
                
                if (result.success) {
                    alert(result.message);
                    e.target.reset();
                } else {
                    alert(result.message);
                }
            } catch (error) {
                alert('Something went wrong. Please try again.');
            }
        });
        </script>
    </body>
    </html>
  `)
})

export default app
