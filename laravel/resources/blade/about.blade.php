@extends('app')

@section('title', 'About Us - B&B Tax')

@section('content')
<div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 pt-32 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                About B&B Tax
            </h1>
            <p class="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Your trusted accounting partner in New Zealand, providing professional financial services with integrity, expertise, and personalized attention.
            </p>
        </div>
    </section>

    <!-- Company Story -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Our Story
                    </h2>
                    <div class="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            Founded with a vision to provide exceptional accounting services to New Zealand businesses, B&B Tax has grown from a small practice to a trusted partner for hundreds of companies across the country.
                        </p>
                        <p>
                            With over 15 years of combined experience, our team understands the unique challenges faced by New Zealand businesses. We're committed to providing not just compliance services, but strategic financial guidance that helps businesses thrive.
                        </p>
                        <p>
                            Our approach is simple: we believe in building long-term relationships with our clients, understanding their business goals, and providing personalized solutions that drive growth and success.
                        </p>
                    </div>
                </div>
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Our Office" class="rounded-2xl shadow-xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Values -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Our Values
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    The principles that guide everything we do
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $values = [
                        [
                            'icon' => 'heart',
                            'title' => 'Integrity',
                            'description' => 'We operate with the highest ethical standards, ensuring transparency and honesty in all our dealings.'
                        ],
                        [
                            'icon' => 'star',
                            'title' => 'Excellence',
                            'description' => 'We strive for excellence in every service we provide, continuously improving our skills and knowledge.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Partnership',
                            'description' => 'We build genuine partnerships with our clients, working together towards their financial success.'
                        ],
                        [
                            'icon' => 'zap',
                            'title' => 'Innovation',
                            'description' => 'We embrace technology and innovative solutions to provide efficient and modern services.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'Reliability',
                            'description' => 'Our clients can depend on us for consistent, timely, and accurate financial services.'
                        ],
                        [
                            'icon' => 'compass',
                            'title' => 'Guidance',
                            'description' => 'We provide expert advice and strategic guidance to help businesses navigate financial challenges.'
                        ]
                    ];
                @endphp

                @foreach($values as $value)
                    <div class="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border text-center">
                        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                            <i data-lucide="{{ $value['icon'] }}" class="w-8 h-8 text-primary"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-card-foreground mb-4">{{ $value['title'] }}</h3>
                        <p class="text-muted-foreground leading-relaxed">{{ $value['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Stats -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Our Impact in Numbers
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Trusted by businesses across New Zealand
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
                @php
                    $stats = [
                        ['number' => '500+', 'label' => 'Happy Clients'],
                        ['number' => '15+', 'label' => 'Years Experience'],
                        ['number' => '10,000+', 'label' => 'Returns Filed'],
                        ['number' => '99.9%', 'label' => 'Accuracy Rate']
                    ];
                @endphp

                @foreach($stats as $stat)
                    <div class="text-center">
                        <div class="text-4xl lg:text-5xl font-bold text-primary mb-2">{{ $stat['number'] }}</div>
                        <div class="text-muted-foreground font-medium">{{ $stat['label'] }}</div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Why Choose Us" class="rounded-2xl shadow-xl">
                </div>
                <div>
                    <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Why Choose B&B Tax?
                    </h2>
                    <div class="space-y-6">
                        @php
                            $reasons = [
                                'Qualified professionals with extensive NZ tax knowledge',
                                'Personalized service tailored to your business needs',
                                'Proactive communication and regular updates',
                                'Advanced technology for secure and efficient service',
                                'Competitive pricing with transparent fee structure',
                                'Comprehensive range of accounting and tax services'
                            ];
                        @endphp

                        @foreach($reasons as $reason)
                            <div class="flex items-center space-x-3">
                                <div class="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="check" class="w-4 h-4 text-primary-foreground"></i>
                                </div>
                                <span class="text-muted-foreground">{{ $reason }}</span>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Certifications -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Professional Qualifications
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our team holds recognized qualifications and memberships
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                @php
                    $certifications = [
                        ['name' => 'CA ANZ', 'description' => 'Chartered Accountants'],
                        ['name' => 'CPA', 'description' => 'Certified Public Accountant'],
                        ['name' => 'Xero Partner', 'description' => 'Certified Xero Advisor'],
                        ['name' => 'MYOB', 'description' => 'Certified MYOB Partner'],
                        ['name' => 'QuickBooks', 'description' => 'ProAdvisor Certified'],
                        ['name' => 'IRD', 'description' => 'Tax Agent Registration']
                    ];
                @endphp

                @foreach($certifications as $cert)
                    <div class="text-center p-4 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                        <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <i data-lucide="award" class="w-6 h-6 text-primary"></i>
                        </div>
                        <h3 class="font-semibold text-card-foreground text-sm mb-1">{{ $cert['name'] }}</h3>
                        <p class="text-xs text-muted-foreground">{{ $cert['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-primary">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Partner with Us?
            </h2>
            <p class="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust us with their financial success. Let's discuss how we can help your business thrive.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('contact') }}" class="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    Get Started Today
                    <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                </a>
                <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                    View Our Services
                </a>
            </div>
        </div>
    </section>
</div>
@endsection
