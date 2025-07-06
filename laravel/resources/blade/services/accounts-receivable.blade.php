@extends('app')

@section('title', 'Accounts Receivable Services - B&B Tax')

@section('content')
<div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 pt-32 bg-gradient-to-br from-green-600 via-green-700 to-green-800 overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Accounts Receivable Management
                    </h1>
                    <p class="text-lg md:text-xl text-green-100 mb-8 leading-relaxed">
                        Optimize your cash flow with professional accounts receivable management. We handle invoicing, collections, and payment tracking to keep your business financially healthy.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="{{ route('contact') }}" class="bg-white text-green-600 font-semibold px-8 py-4 rounded-full hover:bg-green-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                            Improve Cash Flow
                            <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                        </a>
                        <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                            View All Services
                        </a>
                    </div>
                </div>
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Accounts Receivable Management" class="rounded-2xl shadow-2xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Service Features -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Complete AR Management Solutions
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    From invoice creation to payment collection, we manage your entire accounts receivable process
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $features = [
                        [
                            'icon' => 'file-text',
                            'title' => 'Invoice Management',
                            'description' => 'Professional invoice creation, formatting, and timely delivery to ensure prompt payment.'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => 'Payment Follow-up',
                            'description' => 'Systematic follow-up on overdue accounts with professional communication and documentation.'
                        ],
                        [
                            'icon' => 'trending-up',
                            'title' => 'Cash Flow Optimization',
                            'description' => 'Strategic approaches to improve payment terms and reduce outstanding receivables.'
                        ],
                        [
                            'icon' => 'chart-bar',
                            'title' => 'Aging Reports',
                            'description' => 'Detailed aging analysis to identify collection priorities and payment patterns.'
                        ],
                        [
                            'icon' => 'shield-check',
                            'title' => 'Credit Management',
                            'description' => 'Credit assessment and monitoring to minimize bad debt risk and protect your business.'
                        ],
                        [
                            'icon' => 'database',
                            'title' => 'Record Keeping',
                            'description' => 'Comprehensive documentation of all customer communications and payment activities.'
                        ]
                    ];
                @endphp

                @foreach($features as $feature)
                    <div class="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                        <div class="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center text-white mb-6">
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
                    Our AR Management Process
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    A systematic approach to maximize your collections and maintain customer relationships
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                @php
                    $steps = [
                        [
                            'step' => '01',
                            'title' => 'Invoice Creation',
                            'description' => 'Generate and send professional invoices with clear payment terms.'
                        ],
                        [
                            'step' => '02',
                            'title' => 'Payment Tracking',
                            'description' => 'Monitor payment status and maintain accurate records.'
                        ],
                        [
                            'step' => '03',
                            'title' => 'Follow-up Actions',
                            'description' => 'Systematic collection efforts for overdue accounts.'
                        ],
                        [
                            'step' => '04',
                            'title' => 'Resolution',
                            'description' => 'Payment collection or escalation to appropriate next steps.'
                        ]
                    ];
                @endphp

                @foreach($steps as $step)
                    <div class="text-center">
                        <div class="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
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
                        Impact on Your Business
                    </h2>
                    <div class="space-y-6">
                        @php
                            $benefits = [
                                'Improved cash flow and working capital',
                                'Reduced days sales outstanding (DSO)',
                                'Lower bad debt write-offs',
                                'Enhanced customer relationships',
                                'More time to focus on core business activities',
                                'Professional collection communications'
                            ];
                        @endphp

                        @foreach($benefits as $benefit)
                            <div class="flex items-center space-x-3">
                                <div class="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                </div>
                                <span class="text-muted-foreground">{{ $benefit }}</span>
                            </div>
                        @endforeach
                    </div>
                    
                    <div class="mt-8 p-6 bg-green-50 rounded-xl border border-green-200">
                        <div class="flex items-center space-x-3 mb-3">
                            <i data-lucide="info" class="w-6 h-6 text-green-600"></i>
                            <h3 class="text-lg font-semibold text-green-800">Did You Know?</h3>
                        </div>
                        <p class="text-green-700 text-sm">
                            Effective accounts receivable management can improve cash flow by up to 25% and reduce collection time by 40%.
                        </p>
                    </div>
                </div>
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Cash Flow Benefits" class="rounded-2xl shadow-xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Industries Section -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Industries We Serve
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Specialized AR solutions for various business sectors
                </p>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                @php
                    $industries = [
                        ['icon' => 'building', 'name' => 'Construction'],
                        ['icon' => 'stethoscope', 'name' => 'Healthcare'],
                        ['icon' => 'shopping-cart', 'name' => 'Retail'],
                        ['icon' => 'truck', 'name' => 'Manufacturing'],
                        ['icon' => 'briefcase', 'name' => 'Professional Services'],
                        ['icon' => 'wrench', 'name' => 'Trades & Services']
                    ];
                @endphp

                @foreach($industries as $industry)
                    <div class="text-center p-4 bg-card rounded-xl border border-border hover:shadow-lg transition-all duration-300">
                        <div class="w-12 h-12 bg-green-600/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                            <i data-lucide="{{ $industry['icon'] }}" class="w-6 h-6 text-green-600"></i>
                        </div>
                        <h3 class="text-sm font-medium text-card-foreground">{{ $industry['name'] }}</h3>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-green-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
                Improve Your Cash Flow Today
            </h2>
            <p class="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Don't let outstanding invoices impact your business growth. Let our experts optimize your accounts receivable process.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('contact') }}" class="bg-white text-green-600 font-semibold px-8 py-4 rounded-full hover:bg-green-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    Start Improving Cash Flow
                    <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                </a>
                <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-green-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                    View Other Services
                </a>
            </div>
        </div>
    </section>
</div>
@endsection
