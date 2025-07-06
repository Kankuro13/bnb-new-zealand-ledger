@extends('app')

@section('title', 'B&B Tax - Professional Accounting Services for New Zealand Businesses')

@section('content')
<div class="min-h-screen bg-background overflow-x-hidden">
    <!-- Hero Section with Slider -->
    <section id="home" class="pt-16 sm:pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div class="w-full relative">
            <!-- Hero Slider -->
            <div id="hero-slider" class="relative">
                @php
                    $heroSlides = [
                        [
                            'title' => 'Uncover business value in volatility with B&B Tax',
                            'subtitle' => '',
                            'description' => 'Our audit, tax, and consulting specialists help organizations like yours navigate today\'s accelerating rate of change.',
                            'backgroundImage' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                            'image' => '/lovable-uploads/183a6bc8-df45-4d4c-b13d-a992110190ac.png',
                            'features' => [
                                ['icon' => 'check-circle', 'text' => '15+ Years Experience'],
                                ['icon' => 'trending-up', 'text' => '500+ Happy Clients'],
                                ['icon' => 'sparkles', 'text' => 'Complete Solutions'],
                                ['icon' => 'check-circle', 'text' => '100% IRD Compliant']
                            ]
                        ],
                        [
                            'title' => 'Professional Tax Excellence for New Zealand Businesses',
                            'subtitle' => '',
                            'description' => 'Navigate complex tax requirements with confidence. Our qualified professionals provide strategic tax planning and compliance services to optimize your business performance.',
                            'backgroundImage' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                            'image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                            'features' => [
                                ['icon' => 'calculator', 'text' => 'Strategic Tax Planning'],
                                ['icon' => 'file-text', 'text' => 'GST & PAYE Filing'],
                                ['icon' => 'shield', 'text' => 'Audit Protection'],
                                ['icon' => 'trending-up', 'text' => 'Tax Optimization']
                            ]
                        ],
                        [
                            'title' => 'Transform your financial management with digital solutions',
                            'subtitle' => '',
                            'description' => 'Leverage cutting-edge cloud technology and real-time insights to streamline operations, enhance accuracy, and drive informed business decisions.',
                            'backgroundImage' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                            'image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                            'features' => [
                                ['icon' => 'zap', 'text' => 'Cloud-Based Systems'],
                                ['icon' => 'book-open', 'text' => 'Real-Time Reporting'],
                                ['icon' => 'users', 'text' => '24/7 Access'],
                                ['icon' => 'dollar-sign', 'text' => 'Cost-Effective']
                            ]
                        ]
                    ];
                @endphp

                @foreach($heroSlides as $index => $slide)
                    <div class="hero-slide {{ $index === 0 ? 'active' : '' }}" data-slide="{{ $index }}">
                        <!-- Full-screen background image -->
                        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat" style="background-image: url('{{ $slide['backgroundImage'] }}');">
                            <div class="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
                        </div>
                        
                        <!-- Content -->
                        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
                            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[70vh]">
                                <!-- Text Content -->
                                <div class="text-left">
                                    @if($slide['subtitle'])
                                        <p class="text-accent font-semibold mb-4 tracking-wide uppercase text-sm">{{ $slide['subtitle'] }}</p>
                                    @endif
                                    
                                    <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                        {{ $slide['title'] }}
                                    </h1>
                                    
                                    <p class="text-lg sm:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl">
                                        {{ $slide['description'] }}
                                    </p>
                                    
                                    <!-- Feature highlights -->
                                    <div class="grid grid-cols-2 gap-4 mb-8">
                                        @foreach($slide['features'] as $feature)
                                            <div class="flex items-center space-x-3 text-white">
                                                <div class="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <i data-lucide="{{ $feature['icon'] }}" class="w-4 h-4 text-accent"></i>
                                                </div>
                                                <span class="text-sm font-medium">{{ $feature['text'] }}</span>
                                            </div>
                                        @endforeach
                                    </div>
                                    
                                    <!-- CTA Buttons -->
                                    <div class="flex flex-col sm:flex-row gap-4">
                                        <a href="{{ route('services') }}" class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group">
                                            Explore Services
                                            <i data-lucide="arrow-right" class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                                        </a>
                                        <a href="{{ route('contact') }}" class="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                                            Get Free Consultation
                                        </a>
                                    </div>
                                </div>
                                
                                <!-- Image -->
                                <div class="relative">
                                    <div class="relative z-10">
                                        <img 
                                            src="{{ $slide['image'] }}" 
                                            alt="B&B Tax Professional Services"
                                            class="w-full h-auto rounded-2xl shadow-2xl border-4 border-white/20 backdrop-blur-sm"
                                        />
                                    </div>
                                    <!-- Decorative elements -->
                                    <div class="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
                                    <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                @endforeach

                <!-- Slider Navigation -->
                <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <div class="flex space-x-3">
                        @foreach($heroSlides as $index => $slide)
                            <button class="slider-dot w-3 h-3 rounded-full transition-all duration-300 {{ $index === 0 ? 'bg-white' : 'bg-white/40' }}" data-slide="{{ $index }}"></button>
                        @endforeach
                    </div>
                </div>

                <!-- Slider Controls -->
                <button class="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300" onclick="previousSlide()">
                    <i data-lucide="chevron-left" class="w-6 h-6"></i>
                </button>
                <button class="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300" onclick="nextSlide()">
                    <i data-lucide="chevron-right" class="w-6 h-6"></i>
                </button>
            </div>
        </div>
    </section>

    <!-- Services Overview -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Our Professional Services
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Comprehensive accounting solutions tailored to meet your business needs
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $services = [
                        [
                            'icon' => 'users',
                            'title' => 'Payroll Management',
                            'description' => 'Accurate payroll processing, payslip preparation, leave management, and KiwiSaver compliance.',
                            'color' => 'bg-blue-600',
                            'link' => route('services.payroll-management')
                        ],
                        [
                            'icon' => 'file-text',
                            'title' => 'Accounts Receivable',
                            'description' => 'We manage your invoicing, follow up on outstanding payments, and help maintain healthy cash flow.',
                            'color' => 'bg-green-600',
                            'link' => route('services.accounts-receivable')
                        ],
                        [
                            'icon' => 'building',
                            'title' => 'GST Filing & Compliance',
                            'description' => 'Preparation and filing of Goods and Services Tax returns with IRD, so you never miss a deadline.',
                            'color' => 'bg-orange-600',
                            'link' => route('services.gst-filing')
                        ],
                        [
                            'icon' => 'graduation-cap',
                            'title' => 'Xero Training',
                            'description' => 'Comprehensive training programs to help you master Xero accounting software.',
                            'color' => 'bg-purple-600',
                            'link' => route('services.xero-training')
                        ],
                        [
                            'icon' => 'calculator',
                            'title' => 'Tax Planning',
                            'description' => 'Strategic tax planning to optimize your business performance and ensure compliance.',
                            'color' => 'bg-red-600',
                            'link' => route('services')
                        ],
                        [
                            'icon' => 'trending-up',
                            'title' => 'Business Advisory',
                            'description' => 'Expert advice to help grow your business and make informed financial decisions.',
                            'color' => 'bg-indigo-600',
                            'link' => route('services')
                        ]
                    ];
                @endphp

                @foreach($services as $service)
                    <div class="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-border">
                        <div class="flex items-center mb-6">
                            <div class="w-12 h-12 {{ $service['color'] }} rounded-xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="{{ $service['icon'] }}" class="w-6 h-6"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-card-foreground">{{ $service['title'] }}</h3>
                        </div>
                        <p class="text-muted-foreground mb-6 leading-relaxed">{{ $service['description'] }}</p>
                        <a href="{{ $service['link'] }}" class="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-all duration-300 group-hover:translate-x-2">
                            Learn More
                            <i data-lucide="arrow-right" class="ml-2 w-4 h-4"></i>
                        </a>
                    </div>
                @endforeach
            </div>

            <div class="text-center mt-12">
                <a href="{{ route('services') }}" class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center">
                    View All Services
                    <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                </a>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-primary">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Transform Your Business Finances?
            </h2>
            <p class="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Get expert accounting support that grows with your business. Contact us today for a free consultation.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('contact') }}" class="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    Get Free Consultation
                    <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                </a>
                <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                    Explore Services
                </a>
            </div>
        </div>
    </section>
</div>
@endsection

@push('scripts')
<script>
    let currentSlide = 0;
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.slider-dot');
    const totalSlides = slides.length;

    function showSlide(index) {
        // Hide all slides
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('bg-white'));
        dots.forEach(dot => dot.classList.add('bg-white/40'));

        // Show current slide
        slides[index].classList.add('active');
        dots[index].classList.remove('bg-white/40');
        dots[index].classList.add('bg-white');
        
        currentSlide = index;
    }

    function nextSlide() {
        const next = (currentSlide + 1) % totalSlides;
        showSlide(next);
    }

    function previousSlide() {
        const prev = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prev);
    }

    // Auto-play
    setInterval(nextSlide, 5000);

    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
</script>

<style>
    .hero-slide {
        display: none;
        position: relative;
        width: 100%;
        min-height: 100vh;
    }
    
    .hero-slide.active {
        display: block;
    }
    
    .hero-slide:first-child {
        display: block;
    }
</style>
@endpush
