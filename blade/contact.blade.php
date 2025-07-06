@extends('app')

@section('title', 'Contact Us - B&B Tax')

@section('content')
<div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 pt-32 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Get in Touch
            </h1>
            <p class="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business finances? Contact us today for a free consultation and discover how we can help your business thrive.
            </p>
        </div>
    </section>

    <!-- Contact Content -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <!-- Contact Form -->
                <div class="bg-card rounded-2xl p-8 shadow-lg border border-border">
                    <h2 class="text-2xl font-bold text-card-foreground mb-6">Send us a Message</h2>
                    
                    <form action="#" method="POST" class="space-y-6">
                        @csrf
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label for="first_name" class="block text-sm font-medium text-card-foreground mb-2">First Name *</label>
                                <input type="text" id="first_name" name="first_name" required class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                            </div>
                            <div>
                                <label for="last_name" class="block text-sm font-medium text-card-foreground mb-2">Last Name *</label>
                                <input type="text" id="last_name" name="last_name" required class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                            </div>
                        </div>
                        
                        <div>
                            <label for="email" class="block text-sm font-medium text-card-foreground mb-2">Email Address *</label>
                            <input type="email" id="email" name="email" required class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                        </div>
                        
                        <div>
                            <label for="phone" class="block text-sm font-medium text-card-foreground mb-2">Phone Number</label>
                            <input type="tel" id="phone" name="phone" class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                        </div>
                        
                        <div>
                            <label for="company" class="block text-sm font-medium text-card-foreground mb-2">Company Name</label>
                            <input type="text" id="company" name="company" class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                        </div>
                        
                        <div>
                            <label for="service" class="block text-sm font-medium text-card-foreground mb-2">Service Interest</label>
                            <select id="service" name="service" class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background">
                                <option value="">Select a service</option>
                                <option value="payroll">Payroll Management</option>
                                <option value="accounts-receivable">Accounts Receivable</option>
                                <option value="gst-filing">GST Filing & Compliance</option>
                                <option value="xero-training">Xero Training</option>
                                <option value="tax-planning">Tax Planning</option>
                                <option value="general">General Inquiry</option>
                            </select>
                        </div>
                        
                        <div>
                            <label for="message" class="block text-sm font-medium text-card-foreground mb-2">Message *</label>
                            <textarea id="message" name="message" rows="4" required class="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background" placeholder="Tell us about your business and how we can help..."></textarea>
                        </div>
                        
                        <button type="submit" class="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105">
                            Send Message
                        </button>
                    </form>
                </div>

                <!-- Contact Information -->
                <div class="space-y-8">
                    <!-- Contact Details -->
                    <div class="bg-card rounded-2xl p-8 shadow-lg border border-border">
                        <h2 class="text-2xl font-bold text-card-foreground mb-6">Contact Information</h2>
                        
                        <div class="space-y-6">
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="map-pin" class="w-6 h-6 text-primary"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-card-foreground mb-2">Office Address</h3>
                                    <p class="text-muted-foreground">
                                        123 Queen Street<br>
                                        Auckland 1010<br>
                                        New Zealand
                                    </p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="phone" class="w-6 h-6 text-primary"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-card-foreground mb-2">Phone</h3>
                                    <p class="text-muted-foreground">+64 9 123 4567</p>
                                    <p class="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 5:00 PM</p>
                                </div>
                            </div>
                            
                            <div class="flex items-start space-x-4">
                                <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="mail" class="w-6 h-6 text-primary"></i>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-card-foreground mb-2">Email</h3>
                                    <p class="text-muted-foreground">info@bbtax.co.nz</p>
                                    <p class="text-sm text-muted-foreground">We'll respond within 24 hours</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Business Hours -->
                    <div class="bg-card rounded-2xl p-8 shadow-lg border border-border">
                        <h2 class="text-2xl font-bold text-card-foreground mb-6">Business Hours</h2>
                        
                        <div class="space-y-3">
                            @php
                                $hours = [
                                    ['day' => 'Monday - Friday', 'time' => '9:00 AM - 5:00 PM'],
                                    ['day' => 'Saturday', 'time' => '10:00 AM - 2:00 PM'],
                                    ['day' => 'Sunday', 'time' => 'Closed'],
                                    ['day' => 'Public Holidays', 'time' => 'Closed']
                                ];
                            @endphp

                            @foreach($hours as $hour)
                                <div class="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                                    <span class="font-medium text-card-foreground">{{ $hour['day'] }}</span>
                                    <span class="text-muted-foreground">{{ $hour['time'] }}</span>
                                </div>
                            @endforeach
                        </div>
                        
                        <div class="mt-6 p-4 bg-primary/10 rounded-lg">
                            <div class="flex items-center space-x-2">
                                <i data-lucide="clock" class="w-5 h-5 text-primary"></i>
                                <span class="text-sm text-primary font-medium">
                                    Emergency Support Available 24/7
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- Quick Actions -->
                    <div class="bg-card rounded-2xl p-8 shadow-lg border border-border">
                        <h2 class="text-2xl font-bold text-card-foreground mb-6">Quick Actions</h2>
                        
                        <div class="space-y-4">
                            <a href="tel:+6491234567" class="flex items-center space-x-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                                <i data-lucide="phone" class="w-5 h-5 text-primary"></i>
                                <span class="font-medium text-primary">Call Us Now</span>
                            </a>
                            
                            <a href="mailto:info@bbtax.co.nz" class="flex items-center space-x-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                                <i data-lucide="mail" class="w-5 h-5 text-primary"></i>
                                <span class="font-medium text-primary">Send Email</span>
                            </a>
                            
                            <a href="{{ route('services') }}" class="flex items-center space-x-3 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors">
                                <i data-lucide="briefcase" class="w-5 h-5 text-primary"></i>
                                <span class="font-medium text-primary">View Services</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Frequently Asked Questions
                </h2>
                <p class="text-lg text-muted-foreground">
                    Quick answers to common questions
                </p>
            </div>

            <div class="space-y-6">
                @php
                    $faqs = [
                        [
                            'question' => 'How quickly can you respond to my inquiry?',
                            'answer' => 'We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.'
                        ],
                        [
                            'question' => 'Do you offer free consultations?',
                            'answer' => 'Yes, we offer a free initial consultation to discuss your needs and how we can help your business.'
                        ],
                        [
                            'question' => 'What areas of New Zealand do you serve?',
                            'answer' => 'We serve clients throughout New Zealand. Many of our services can be provided remotely, and we can arrange in-person meetings as needed.'
                        ],
                        [
                            'question' => 'How do you ensure data security?',
                            'answer' => 'We use bank-level security measures including encrypted communications, secure file transfer, and strict confidentiality protocols.'
                        ]
                    ];
                @endphp

                @foreach($faqs as $index => $faq)
                    <div class="bg-card rounded-xl border border-border">
                        <button class="w-full px-6 py-4 text-left font-semibold text-card-foreground hover:bg-secondary/50 transition-colors rounded-xl faq-toggle" data-target="faq-{{ $index }}">
                            <div class="flex justify-between items-center">
                                <span>{{ $faq['question'] }}</span>
                                <i data-lucide="chevron-down" class="w-5 h-5 transition-transform duration-300"></i>
                            </div>
                        </button>
                        <div id="faq-{{ $index }}" class="faq-content hidden px-6 pb-4">
                            <p class="text-muted-foreground">{{ $faq['answer'] }}</p>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-primary">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Get Started?
            </h2>
            <p class="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Don't wait to transform your business finances. Contact us today and take the first step towards better financial management.
            </p>
            <a href="#contact-form" class="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                Send Message Now
                <i data-lucide="arrow-up" class="ml-2 w-5 h-5"></i>
            </a>
        </div>
    </section>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        // FAQ Toggle
        const faqToggles = document.querySelectorAll('.faq-toggle');
        
        faqToggles.forEach(toggle => {
            toggle.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const content = document.getElementById(targetId);
                const icon = this.querySelector('[data-lucide="chevron-down"]');
                
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.style.transform = 'rotate(180deg)';
                } else {
                    content.classList.add('hidden');
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });
    });
</script>
@endsection
