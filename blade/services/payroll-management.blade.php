@extends('app')

@section('title', 'Payroll Management Services - B&B Tax')

@section('content')
<div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 pt-32 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Payroll Management Services
                    </h1>
                    <p class="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
                        Streamline your payroll processes with our comprehensive payroll management services. From accurate calculations to timely submissions, we handle it all.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="{{ route('contact') }}" class="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                            Get Started Today
                            <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                        </a>
                        <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                            View All Services
                        </a>
                    </div>
                </div>
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Payroll Management" class="rounded-2xl shadow-2xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Service Features -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Comprehensive Payroll Solutions
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Everything you need to manage payroll efficiently and stay compliant with New Zealand employment law
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $features = [
                        [
                            'icon' => 'calculator',
                            'title' => 'Accurate Calculations',
                            'description' => 'Precise salary, wage, and overtime calculations with automatic tax deductions and KiwiSaver contributions.'
                        ],
                        [
                            'icon' => 'file-text',
                            'title' => 'Payslip Generation',
                            'description' => 'Professional payslips delivered electronically or printed, including all required statutory information.'
                        ],
                        [
                            'icon' => 'calendar',
                            'title' => 'Leave Management',
                            'description' => 'Track annual leave, sick leave, and other statutory entitlements with automated accrual calculations.'
                        ],
                        [
                            'icon' => 'shield',
                            'title' => 'KiwiSaver Compliance',
                            'description' => 'Automatic KiwiSaver deductions and employer contributions, with direct submission to scheme providers.'
                        ],
                        [
                            'icon' => 'clock',
                            'title' => 'Timely Processing',
                            'description' => 'Regular payroll runs scheduled to meet your payment cycles and employee expectations.'
                        ],
                        [
                            'icon' => 'building',
                            'title' => 'IRD Compliance',
                            'description' => 'PAYE submissions, employer monthly schedules, and annual filing requirements handled professionally.'
                        ]
                    ];
                @endphp

                @foreach($features as $feature)
                    <div class="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                        <div class="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white mb-6">
                            <i data-lucide="{{ $feature['icon'] }}" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-card-foreground mb-4">{{ $feature['title'] }}</h3>
                        <p class="text-muted-foreground leading-relaxed">{{ $feature['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Our Payroll Process
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    A streamlined approach that ensures accuracy and compliance at every step
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                @php
                    $steps = [
                        [
                            'step' => '01',
                            'title' => 'Data Collection',
                            'description' => 'Gather timesheet data, employee changes, and leave requests.'
                        ],
                        [
                            'step' => '02',
                            'title' => 'Processing',
                            'description' => 'Calculate wages, taxes, and deductions using current rates and rules.'
                        ],
                        [
                            'step' => '03',
                            'title' => 'Review & Approval',
                            'description' => 'Thorough review of all calculations before final processing.'
                        ],
                        [
                            'step' => '04',
                            'title' => 'Payment & Reporting',
                            'description' => 'Generate payslips and submit required reports to IRD.'
                        ]
                    ];
                @endphp

                @foreach($steps as $step)
                    <div class="text-center">
                        <div class="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                            {{ $step['step'] }}
                        </div>
                        <h3 class="text-lg font-semibold text-foreground mb-3">{{ $step['title'] }}</h3>
                        <p class="text-muted-foreground text-sm">{{ $step['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Why Choose Our Payroll Services?
                    </h2>
                    <div class="space-y-6">
                        @php
                            $benefits = [
                                'Save time and focus on growing your business',
                                'Reduce errors with professional processing',
                                'Ensure compliance with NZ employment law',
                                'Access to expert advice and support',
                                'Secure handling of confidential data',
                                'Cost-effective solution for businesses of all sizes'
                            ];
                        @endphp

                        @foreach($benefits as $benefit)
                            <div class="flex items-center space-x-3">
                                <div class="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                </div>
                                <span class="text-muted-foreground">{{ $benefit }}</span>
                            </div>
                        @endforeach
                    </div>
                </div>
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Payroll Benefits" class="rounded-2xl shadow-xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-blue-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Simplify Your Payroll?
            </h2>
            <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Let us handle your payroll so you can focus on what matters most – growing your business.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('contact') }}" class="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    Get Free Quote
                    <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                </a>
                <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                    View Other Services
                </a>
            </div>
        </div>
    </section>
</div>
@endsection
