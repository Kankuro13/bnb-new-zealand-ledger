@extends('app')

@section('title', 'Our Services - B&B Tax')

@section('content')
<div class="min-h-screen bg-background">
    <!-- Jumbotron Section -->
    <section class="relative py-20 pt-32 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-accent/90"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Professional Accounting Services
            </h1>
            <p class="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Comprehensive financial solutions designed to help your New Zealand business thrive. From payroll management to tax compliance, we've got you covered.
            </p>
        </div>
    </section>

    <!-- Services Grid -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Complete Business Solutions
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Expert services tailored to meet the unique needs of New Zealand businesses
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $services = [
                        [
                            'icon' => 'users',
                            'title' => 'Payroll Management',
                            'description' => 'Accurate payroll processing, payslip preparation, leave management, and KiwiSaver compliance, ensuring your employees are paid correctly and on time.',
                            'color' => 'bg-blue-600',
                            'link' => route('services.payroll-management')
                        ],
                        [
                            'icon' => 'file-text',
                            'title' => 'Accounts Receivable (AR)',
                            'description' => 'We manage your invoicing, follow up on outstanding payments, and help maintain a healthy cash flow for your business.',
                            'color' => 'bg-green-600',
                            'link' => route('services.accounts-receivable')
                        ],
                        [
                            'icon' => 'credit-card',
                            'title' => 'Accounts Payable (AP)',
                            'description' => 'Efficient handling of supplier invoices, payments, and expense tracking to keep your accounts up to date.',
                            'color' => 'bg-purple-600',
                            'link' => route('services.accounts-receivable')
                        ],
                        [
                            'icon' => 'dollar-sign',
                            'title' => 'Credit Control',
                            'description' => 'Proactive monitoring and management of your customer debts to reduce overdue accounts and improve cash collection.',
                            'color' => 'bg-red-600',
                            'link' => route('services.accounts-receivable')
                        ],
                        [
                            'icon' => 'trending-up',
                            'title' => 'Payroll Data Entry',
                            'description' => 'Fast and accurate data entry of payroll information to ensure smooth payroll runs and easy reporting.',
                            'color' => 'bg-indigo-600',
                            'link' => route('services.payroll-management')
                        ],
                        [
                            'icon' => 'building',
                            'title' => 'GST Filing & Compliance',
                            'description' => 'Preparation and filing of Goods and Services Tax (GST) returns with IRD, so you never miss a deadline.',
                            'color' => 'bg-orange-600',
                            'link' => route('services.gst-filing')
                        ],
                        [
                            'icon' => 'bookmark',
                            'title' => 'PAYE Services',
                            'description' => 'Complete PAYE management including calculations, deductions, and timely submissions to IRD.',
                            'color' => 'bg-teal-600',
                            'link' => route('services.gst-filing')
                        ],
                        [
                            'icon' => 'file-check',
                            'title' => 'Income Tax Returns',
                            'description' => 'Professional preparation and filing of individual and business income tax returns for maximum efficiency.',
                            'color' => 'bg-pink-600',
                            'link' => route('services.gst-filing')
                        ],
                        [
                            'icon' => 'graduation-cap',
                            'title' => 'Xero Training',
                            'description' => 'Comprehensive training programs to help you and your team master Xero accounting software for optimal business management.',
                            'color' => 'bg-cyan-600',
                            'link' => route('services.xero-training')
                        ]
                    ];
                @endphp

                @foreach($services as $service)
                    <div class="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group border border-border hover:border-primary/20">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 {{ $service['color'] }} rounded-2xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="{{ $service['icon'] }}" class="w-8 h-8"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-card-foreground">{{ $service['title'] }}</h3>
                        </div>
                        <p class="text-muted-foreground mb-6 leading-relaxed">{{ $service['description'] }}</p>
                        <a href="{{ $service['link'] }}" class="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-all duration-300 group-hover:translate-x-2">
                            Learn More
                            <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Why Choose B&B Tax?
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We provide more than just accounting services – we're your trusted business partners
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                @php
                    $benefits = [
                        [
                            'icon' => 'award',
                            'title' => 'Certified Professionals',
                            'description' => 'Our team consists of qualified accountants with extensive experience in New Zealand tax law.'
                        ],
                        [
                            'icon' => 'clock',
                            'title' => 'Timely Service',
                            'description' => 'We ensure all deadlines are met and your business stays compliant with IRD requirements.'
                        ],
                        [
                            'icon' => 'shield-check',
                            'title' => 'Secure & Confidential',
                            'description' => 'Your financial data is protected with bank-level security and strict confidentiality protocols.'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => '24/7 Support',
                            'description' => 'Get help when you need it with our responsive customer support team.'
                        ]
                    ];
                @endphp

                @foreach($benefits as $benefit)
                    <div class="text-center p-6 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                        <div class="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="{{ $benefit['icon'] }}" class="w-8 h-8 text-primary"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-card-foreground mb-3">{{ $benefit['title'] }}</h3>
                        <p class="text-muted-foreground text-sm leading-relaxed">{{ $benefit['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-primary">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Streamline Your Business Finances?
            </h2>
            <p class="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Get started with professional accounting services that grow with your business. Contact us today for a free consultation.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('contact') }}" class="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    Get Free Consultation
                    <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                </a>
                <a href="{{ route('about') }}" class="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                    Learn About Us
                </a>
            </div>
        </div>
    </section>
</div>
@endsection
