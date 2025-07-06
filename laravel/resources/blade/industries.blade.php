@extends('app')

@section('title', 'Industries We Serve - B&B Tax')

@section('content')
<div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 pt-32 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Industries We Serve
            </h1>
            <p class="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Specialized accounting solutions tailored to the unique needs of diverse New Zealand business sectors.
            </p>
        </div>
    </section>

    <!-- Industries Grid -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Expertise Across Multiple Sectors
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our team understands the specific challenges and opportunities in various industries
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $industries = [
                        [
                            'icon' => 'building',
                            'title' => 'Construction & Building',
                            'description' => 'Navigate complex project accounting, progress billing, and subcontractor management.',
                            'services' => ['Project Cost Tracking', 'Progress Billing', 'Subcontractor Management', 'Cash Flow Optimization'],
                            'color' => 'bg-orange-600'
                        ],
                        [
                            'icon' => 'stethoscope',
                            'title' => 'Healthcare & Medical',
                            'description' => 'Specialized accounting for medical practices, clinics, and healthcare providers.',
                            'services' => ['Practice Management', 'Patient Billing', 'Insurance Claims', 'Compliance Reporting'],
                            'color' => 'bg-blue-600'
                        ],
                        [
                            'icon' => 'shopping-cart',
                            'title' => 'Retail & E-commerce',
                            'description' => 'Inventory management, point-of-sale integration, and multi-channel sales tracking.',
                            'services' => ['Inventory Management', 'POS Integration', 'Multi-channel Sales', 'GST Compliance'],
                            'color' => 'bg-green-600'
                        ],
                        [
                            'icon' => 'truck',
                            'title' => 'Manufacturing',
                            'description' => 'Cost accounting, production tracking, and supply chain financial management.',
                            'services' => ['Cost Accounting', 'Production Tracking', 'Supply Chain Finance', 'Inventory Valuation'],
                            'color' => 'bg-purple-600'
                        ],
                        [
                            'icon' => 'briefcase',
                            'title' => 'Professional Services',
                            'description' => 'Time billing, project profitability, and client account management.',
                            'services' => ['Time & Billing', 'Project Profitability', 'Client Management', 'Fee Structure'],
                            'color' => 'bg-indigo-600'
                        ],
                        [
                            'icon' => 'home',
                            'title' => 'Real Estate & Property',
                            'description' => 'Property management accounting, rental income tracking, and investment analysis.',
                            'services' => ['Property Management', 'Rental Income', 'Investment Analysis', 'Depreciation'],
                            'color' => 'bg-red-600'
                        ],
                        [
                            'icon' => 'utensils',
                            'title' => 'Hospitality & Food',
                            'description' => 'Restaurant accounting, cost control, and seasonal revenue management.',
                            'services' => ['Cost Control', 'Inventory Tracking', 'Seasonal Planning', 'Staff Management'],
                            'color' => 'bg-yellow-600'
                        ],
                        [
                            'icon' => 'car',
                            'title' => 'Automotive & Transport',
                            'description' => 'Fleet management, parts inventory, and service department accounting.',
                            'services' => ['Fleet Management', 'Parts Inventory', 'Service Tracking', 'Route Optimization'],
                            'color' => 'bg-teal-600'
                        ],
                        [
                            'icon' => 'computer',
                            'title' => 'Technology & IT',
                            'description' => 'Software revenue recognition, R&D credits, and subscription billing.',
                            'services' => ['Revenue Recognition', 'R&D Credits', 'Subscription Billing', 'IP Valuation'],
                            'color' => 'bg-cyan-600'
                        ]
                    ];
                @endphp

                @foreach($industries as $industry)
                    <div class="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group">
                        <div class="flex items-center mb-6">
                            <div class="w-16 h-16 {{ $industry['color'] }} rounded-2xl flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300">
                                <i data-lucide="{{ $industry['icon'] }}" class="w-8 h-8"></i>
                            </div>
                            <h3 class="text-xl font-semibold text-card-foreground">{{ $industry['title'] }}</h3>
                        </div>
                        
                        <p class="text-muted-foreground mb-6 leading-relaxed">{{ $industry['description'] }}</p>
                        
                        <div class="space-y-3">
                            <h4 class="text-sm font-semibold text-card-foreground">Specialized Services:</h4>
                            <ul class="space-y-2">
                                @foreach($industry['services'] as $service)
                                    <li class="flex items-center space-x-2">
                                        <i data-lucide="check-circle" class="w-4 h-4 text-primary flex-shrink-0"></i>
                                        <span class="text-sm text-muted-foreground">{{ $service }}</span>
                                    </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Industry Insights -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Industry-Specific Expertise
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    We understand that each industry has unique accounting requirements and challenges
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                @php
                    $insights = [
                        [
                            'icon' => 'trending-up',
                            'title' => 'Growth Planning',
                            'description' => 'Industry-specific strategies for sustainable business growth and expansion.'
                        ],
                        [
                            'icon' => 'shield-check',
                            'title' => 'Compliance',
                            'description' => 'Stay compliant with industry regulations and reporting requirements.'
                        ],
                        [
                            'icon' => 'bar-chart',
                            'title' => 'Benchmarking',
                            'description' => 'Compare your performance against industry standards and best practices.'
                        ],
                        [
                            'icon' => 'lightbulb',
                            'title' => 'Strategic Advice',
                            'description' => 'Expert guidance on industry trends and financial optimization.'
                        ]
                    ];
                @endphp

                @foreach($insights as $insight)
                    <div class="bg-card rounded-xl p-6 shadow-lg border border-border text-center hover:shadow-xl transition-all duration-300">
                        <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="{{ $insight['icon'] }}" class="w-6 h-6 text-primary"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-card-foreground mb-3">{{ $insight['title'] }}</h3>
                        <p class="text-muted-foreground text-sm">{{ $insight['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Success Stories -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Industry Success Stories
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    How we've helped businesses across different sectors achieve their goals
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $stories = [
                        [
                            'industry' => 'Construction',
                            'challenge' => 'Complex project accounting and cash flow management',
                            'solution' => 'Implemented project-based accounting system with real-time cost tracking',
                            'result' => '30% improvement in project profitability tracking'
                        ],
                        [
                            'industry' => 'Healthcare',
                            'challenge' => 'Managing multiple revenue streams and insurance billing',
                            'solution' => 'Streamlined billing processes and automated insurance claim tracking',
                            'result' => '25% reduction in accounts receivable days'
                        ],
                        [
                            'industry' => 'Retail',
                            'challenge' => 'Multi-location inventory and sales tracking',
                            'solution' => 'Integrated POS systems with centralized inventory management',
                            'result' => '40% improvement in inventory accuracy'
                        ]
                    ];
                @endphp

                @foreach($stories as $story)
                    <div class="bg-card rounded-xl p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300">
                        <div class="mb-4">
                            <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">{{ $story['industry'] }}</span>
                        </div>
                        
                        <div class="space-y-4">
                            <div>
                                <h4 class="text-sm font-semibold text-red-600 mb-2">Challenge:</h4>
                                <p class="text-sm text-muted-foreground">{{ $story['challenge'] }}</p>
                            </div>
                            
                            <div>
                                <h4 class="text-sm font-semibold text-blue-600 mb-2">Solution:</h4>
                                <p class="text-sm text-muted-foreground">{{ $story['solution'] }}</p>
                            </div>
                            
                            <div>
                                <h4 class="text-sm font-semibold text-green-600 mb-2">Result:</h4>
                                <p class="text-sm text-muted-foreground font-medium">{{ $story['result'] }}</p>
                            </div>
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
                Ready to Transform Your Industry Operations?
            </h2>
            <p class="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Let our industry experts help you optimize your financial operations and achieve your business goals.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('contact') }}" class="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    Discuss Your Industry Needs
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
