@extends('app')

@section('title', 'GST Filing & PAYE Services - B&B Tax')

@section('content')
<div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 pt-32 bg-gradient-to-br from-orange-600 via-orange-700 to-orange-800 overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        GST Filing & Tax Compliance
                    </h1>
                    <p class="text-lg md:text-xl text-orange-100 mb-8 leading-relaxed">
                        Stay compliant with New Zealand tax obligations. We handle GST returns, PAYE submissions, and income tax filing to keep your business on track with IRD requirements.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="{{ route('contact') }}" class="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                            Ensure Compliance
                            <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                        </a>
                        <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                            View All Services
                        </a>
                    </div>
                </div>
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="GST Filing Services" class="rounded-2xl shadow-2xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Service Features -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Complete Tax Compliance Services
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    From GST returns to income tax filing, we ensure your business meets all IRD requirements
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $services = [
                        [
                            'icon' => 'file-check',
                            'title' => 'GST Returns',
                            'description' => 'Accurate preparation and timely filing of GST returns for monthly, 2-monthly, or 6-monthly periods.',
                            'color' => 'bg-orange-600'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'PAYE Services',
                            'description' => 'Complete PAYE management including calculations, deductions, and employer monthly schedule submissions.',
                            'color' => 'bg-blue-600'
                        ],
                        [
                            'icon' => 'bookmark',
                            'title' => 'Income Tax Returns',
                            'description' => 'Professional preparation of individual and business income tax returns for optimal tax efficiency.',
                            'color' => 'bg-green-600'
                        ],
                        [
                            'icon' => 'calendar',
                            'title' => 'Filing Deadlines',
                            'description' => 'Never miss a deadline with our comprehensive deadline management and reminder system.',
                            'color' => 'bg-purple-600'
                        ],
                        [
                            'icon' => 'shield-check',
                            'title' => 'Compliance Review',
                            'description' => 'Regular review of your tax position to ensure ongoing compliance and identify opportunities.',
                            'color' => 'bg-red-600'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => 'IRD Liaison',
                            'description' => 'Professional communication with IRD on your behalf for queries, audits, and dispute resolution.',
                            'color' => 'bg-indigo-600'
                        ]
                    ];
                @endphp

                @foreach($services as $service)
                    <div class="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                        <div class="w-12 h-12 {{ $service['color'] }} rounded-xl flex items-center justify-center text-white mb-6">
                            <i data-lucide="{{ $service['icon'] }}" class="w-6 h-6"></i>
                        </div>
                        <h3 class="text-xl font-semibold text-card-foreground mb-4">{{ $service['title'] }}</h3>
                        <p class="text-muted-foreground leading-relaxed">{{ $service['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Tax Calendar Section -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    New Zealand Tax Calendar
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Key tax deadlines and obligations throughout the year
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                @php
                    $taxDates = [
                        [
                            'period' => 'Monthly',
                            'deadline' => '20th of following month',
                            'obligations' => ['GST Returns (monthly filers)', 'PAYE Returns', 'Employer Monthly Schedule']
                        ],
                        [
                            'period' => 'Bi-Monthly',
                            'deadline' => '28th of following month',
                            'obligations' => ['GST Returns (2-monthly filers)', 'FBT Returns (if applicable)']
                        ],
                        [
                            'period' => 'Quarterly',
                            'deadline' => 'Various dates',
                            'obligations' => ['Provisional Tax', 'ACC Levies', 'Student Loan Deductions']
                        ],
                        [
                            'period' => 'Annual',
                            'deadline' => '31 March / 7 July',
                            'obligations' => ['Income Tax Returns', 'Annual GST (6-monthly)', 'IR3/IR4 Returns']
                        ]
                    ];
                @endphp

                @foreach($taxDates as $date)
                    <div class="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                        <div class="text-center mb-4">
                            <h3 class="text-lg font-semibold text-orange-600 mb-2">{{ $date['period'] }}</h3>
                            <p class="text-sm text-muted-foreground font-medium">{{ $date['deadline'] }}</p>
                        </div>
                        <ul class="space-y-2">
                            @foreach($date['obligations'] as $obligation)
                                <li class="text-sm text-muted-foreground flex items-center">
                                    <i data-lucide="check-circle" class="w-4 h-4 text-orange-600 mr-2 flex-shrink-0"></i>
                                    {{ $obligation }}
                                </li>
                            @endforeach
                        </ul>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Compliance Benefits -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Tax Compliance Benefits" class="rounded-2xl shadow-xl">
                </div>
                <div>
                    <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Benefits of Professional Tax Services
                    </h2>
                    <div class="space-y-6">
                        @php
                            $benefits = [
                                'Avoid penalties and interest charges',
                                'Maximize legitimate tax deductions',
                                'Reduce risk of IRD audits and investigations',
                                'Professional representation in tax matters',
                                'Peace of mind with expert compliance',
                                'Time savings to focus on business growth'
                            ];
                        @endphp

                        @foreach($benefits as $benefit)
                            <div class="flex items-center space-x-3">
                                <div class="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                </div>
                                <span class="text-muted-foreground">{{ $benefit }}</span>
                            </div>
                        @endforeach
                    </div>
                    
                    <div class="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
                        <div class="flex items-center space-x-3 mb-3">
                            <i data-lucide="alert-triangle" class="w-6 h-6 text-orange-600"></i>
                            <h3 class="text-lg font-semibold text-orange-800">Important Notice</h3>
                        </div>
                        <p class="text-orange-700 text-sm">
                            IRD penalties for late filing can be significant. Our professional service ensures you never miss a deadline and stay fully compliant.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Our Tax Filing Process
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    A systematic approach to ensure accuracy and timely submission
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                @php
                    $steps = [
                        [
                            'step' => '01',
                            'title' => 'Data Collection',
                            'description' => 'Gather all necessary financial records and documents.'
                        ],
                        [
                            'step' => '02',
                            'title' => 'Review & Analysis',
                            'description' => 'Thorough review of transactions and tax implications.'
                        ],
                        [
                            'step' => '03',
                            'title' => 'Preparation',
                            'description' => 'Accurate preparation of tax returns and calculations.'
                        ],
                        [
                            'step' => '04',
                            'title' => 'Quality Check',
                            'description' => 'Multiple reviews to ensure accuracy and completeness.'
                        ],
                        [
                            'step' => '05',
                            'title' => 'Filing & Follow-up',
                            'description' => 'Electronic filing and confirmation of receipt by IRD.'
                        ]
                    ];
                @endphp

                @foreach($steps as $step)
                    <div class="text-center">
                        <div class="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                            {{ $step['step'] }}
                        </div>
                        <h3 class="text-lg font-semibold text-foreground mb-3">{{ $step['title'] }}</h3>
                        <p class="text-muted-foreground text-sm">{{ $step['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-orange-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
                Stay Compliant with Professional Tax Services
            </h2>
            <p class="text-lg text-orange-100 mb-8 max-w-2xl mx-auto">
                Don't risk penalties or compliance issues. Let our tax experts handle your obligations professionally and efficiently.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('contact') }}" class="bg-white text-orange-600 font-semibold px-8 py-4 rounded-full hover:bg-orange-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    Get Tax Support
                    <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                </a>
                <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-orange-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                    View Other Services
                </a>
            </div>
        </div>
    </section>
</div>
@endsection
