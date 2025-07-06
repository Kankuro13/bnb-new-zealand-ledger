@extends('app')

@section('title', 'Xero Training & Software Support - B&B Tax')

@section('content')
<div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 pt-32 bg-gradient-to-br from-cyan-600 via-cyan-700 to-cyan-800 overflow-hidden">
        <div class="absolute inset-0 bg-black/20"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Xero Training & Support
                    </h1>
                    <p class="text-lg md:text-xl text-cyan-100 mb-8 leading-relaxed">
                        Master Xero accounting software with our comprehensive training programs. From basic setup to advanced features, we'll help you and your team become Xero experts.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a href="{{ route('contact') }}" class="bg-white text-cyan-600 font-semibold px-8 py-4 rounded-full hover:bg-cyan-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                            Start Learning
                            <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                        </a>
                        <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                            View All Services
                        </a>
                    </div>
                </div>
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Xero Training" class="rounded-2xl shadow-2xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Training Programs -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Comprehensive Xero Training Programs
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Choose from our range of training options designed to suit different skill levels and business needs
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $programs = [
                        [
                            'icon' => 'play-circle',
                            'title' => 'Xero Basics',
                            'duration' => '4 hours',
                            'level' => 'Beginner',
                            'description' => 'Perfect for new users. Learn navigation, basic setup, and essential features.',
                            'topics' => ['Chart of accounts setup', 'Invoice creation', 'Basic reporting', 'Bank reconciliation']
                        ],
                        [
                            'icon' => 'trending-up',
                            'title' => 'Intermediate Xero',
                            'duration' => '6 hours',
                            'level' => 'Intermediate',
                            'description' => 'Build on basics with advanced features for growing businesses.',
                            'topics' => ['Inventory management', 'Projects & tracking', 'Advanced reporting', 'Multi-currency']
                        ],
                        [
                            'icon' => 'star',
                            'title' => 'Xero Advanced',
                            'duration' => '8 hours',
                            'level' => 'Advanced',
                            'description' => 'Master complex features and optimization for power users.',
                            'topics' => ['Custom reports', 'API integrations', 'Workflow automation', 'Performance optimization']
                        ]
                    ];
                @endphp

                @foreach($programs as $program)
                    <div class="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border">
                        <div class="flex items-center justify-between mb-6">
                            <div class="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center text-white">
                                <i data-lucide="{{ $program['icon'] }}" class="w-6 h-6"></i>
                            </div>
                            <div class="text-right">
                                <span class="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-xs font-medium">{{ $program['level'] }}</span>
                                <p class="text-sm text-muted-foreground mt-1">{{ $program['duration'] }}</p>
                            </div>
                        </div>
                        
                        <h3 class="text-xl font-semibold text-card-foreground mb-4">{{ $program['title'] }}</h3>
                        <p class="text-muted-foreground mb-6 leading-relaxed">{{ $program['description'] }}</p>
                        
                        <div class="space-y-2 mb-6">
                            <h4 class="text-sm font-semibold text-card-foreground">What you'll learn:</h4>
                            @foreach($program['topics'] as $topic)
                                <div class="flex items-center space-x-2">
                                    <i data-lucide="check-circle" class="w-4 h-4 text-cyan-600 flex-shrink-0"></i>
                                    <span class="text-sm text-muted-foreground">{{ $topic }}</span>
                                </div>
                            @endforeach
                        </div>
                        
                        <a href="{{ route('contact') }}" class="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 text-center block">
                            Book Training
                        </a>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Training Formats -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Flexible Training Options
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Choose the training format that works best for your schedule and learning style
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                @php
                    $formats = [
                        [
                            'icon' => 'users',
                            'title' => 'In-Person Training',
                            'description' => 'Face-to-face training at your office or our location for hands-on learning.',
                            'benefits' => ['Direct interaction', 'Customized content', 'Team building']
                        ],
                        [
                            'icon' => 'video',
                            'title' => 'Online Training',
                            'description' => 'Live virtual sessions with screen sharing and interactive demonstrations.',
                            'benefits' => ['Remote access', 'Recorded sessions', 'Cost effective']
                        ],
                        [
                            'icon' => 'user',
                            'title' => 'One-on-One',
                            'description' => 'Personalized training sessions tailored to your specific business needs.',
                            'benefits' => ['Individual attention', 'Custom pace', 'Specific focus']
                        ],
                        [
                            'icon' => 'clock',
                            'title' => 'Self-Paced',
                            'description' => 'Access training materials and resources at your own convenience.',
                            'benefits' => ['Flexible timing', 'Repeat access', 'Learn at own pace']
                        ]
                    ];
                @endphp

                @foreach($formats as $format)
                    <div class="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 text-center">
                        <div class="w-12 h-12 bg-cyan-600/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="{{ $format['icon'] }}" class="w-6 h-6 text-cyan-600"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-card-foreground mb-3">{{ $format['title'] }}</h3>
                        <p class="text-muted-foreground text-sm mb-4">{{ $format['description'] }}</p>
                        <ul class="space-y-1">
                            @foreach($format['benefits'] as $benefit)
                                <li class="text-xs text-cyan-600 flex items-center justify-center">
                                    <i data-lucide="check" class="w-3 h-3 mr-1"></i>
                                    {{ $benefit }}
                                </li>
                            @endforeach
                        </ul>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Training Benefits -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                        Why Invest in Xero Training?
                    </h2>
                    <div class="space-y-6">
                        @php
                            $benefits = [
                                'Increase efficiency and save time on bookkeeping',
                                'Reduce errors and improve financial accuracy',
                                'Access real-time financial data for better decisions',
                                'Streamline invoice and payment processes',
                                'Better cash flow management and forecasting',
                                'Reduce dependency on external bookkeepers'
                            ];
                        @endphp

                        @foreach($benefits as $benefit)
                            <div class="flex items-center space-x-3">
                                <div class="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                </div>
                                <span class="text-muted-foreground">{{ $benefit }}</span>
                            </div>
                        @endforeach
                    </div>
                    
                    <div class="mt-8 p-6 bg-cyan-50 rounded-xl border border-cyan-200">
                        <div class="flex items-center space-x-3 mb-3">
                            <i data-lucide="lightbulb" class="w-6 h-6 text-cyan-600"></i>
                            <h3 class="text-lg font-semibold text-cyan-800">Training ROI</h3>
                        </div>
                        <p class="text-cyan-700 text-sm">
                            Businesses that invest in proper Xero training typically save 5-10 hours per week on financial management tasks.
                        </p>
                    </div>
                </div>
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Xero Training Benefits" class="rounded-2xl shadow-xl">
                </div>
            </div>
        </div>
    </section>

    <!-- Support Services -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Ongoing Xero Support
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Training is just the beginning. We provide ongoing support to ensure you get the most from Xero
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                @php
                    $supportServices = [
                        [
                            'icon' => 'settings',
                            'title' => 'Xero Setup & Migration',
                            'description' => 'Complete setup of your Xero account and migration from existing systems.'
                        ],
                        [
                            'icon' => 'phone',
                            'title' => 'Ongoing Support',
                            'description' => 'Phone and email support for Xero questions and troubleshooting.'
                        ],
                        [
                            'icon' => 'refresh-cw',
                            'title' => 'Software Updates',
                            'description' => 'Stay current with Xero updates and new feature training.'
                        ],
                        [
                            'icon' => 'puzzle',
                            'title' => 'Add-on Integration',
                            'description' => 'Help with connecting third-party apps and add-ons to Xero.'
                        ],
                        [
                            'icon' => 'file-text',
                            'title' => 'Custom Reports',
                            'description' => 'Create custom reports and dashboards for your business needs.'
                        ],
                        [
                            'icon' => 'graduation-cap',
                            'title' => 'Refresher Training',
                            'description' => 'Follow-up training sessions to reinforce learning and cover new features.'
                        ]
                    ];
                @endphp

                @foreach($supportServices as $service)
                    <div class="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300">
                        <div class="w-12 h-12 bg-cyan-600/10 rounded-xl flex items-center justify-center mb-4">
                            <i data-lucide="{{ $service['icon'] }}" class="w-6 h-6 text-cyan-600"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-card-foreground mb-3">{{ $service['title'] }}</h3>
                        <p class="text-muted-foreground text-sm">{{ $service['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-cyan-600">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6">
                Ready to Master Xero?
            </h2>
            <p class="text-lg text-cyan-100 mb-8 max-w-2xl mx-auto">
                Transform your business finances with expert Xero training. Get started today and unlock the full potential of cloud accounting.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('contact') }}" class="bg-white text-cyan-600 font-semibold px-8 py-4 rounded-full hover:bg-cyan-50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    Book Training Now
                    <i data-lucide="arrow-right" class="ml-2 w-5 h-5"></i>
                </a>
                <a href="{{ route('services') }}" class="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">
                    View Other Services
                </a>
            </div>
        </div>
    </section>
</div>
@endsection
