@extends('app')

@section('title', 'Our Team - B&B Tax')

@section('content')
<div class="min-h-screen bg-background">
    <!-- Hero Section -->
    <section class="relative py-20 pt-32 bg-gradient-to-br from-primary via-primary/90 to-accent overflow-hidden">
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Meet Our Team
            </h1>
            <p class="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Experienced professionals dedicated to your financial success. Get to know the experts behind B&B Tax.
            </p>
        </div>
    </section>

    <!-- Team Members -->
    <section class="py-20 bg-background">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                @php
                    $teamMembers = [
                        [
                            'name' => 'Sarah Johnson',
                            'position' => 'Managing Director & Senior Tax Advisor',
                            'qualifications' => 'CA, CPA',
                            'experience' => '15+ years',
                            'image' => 'https://images.unsplash.com/photo-1494790108755-2616b612b776?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                            'bio' => 'Sarah leads our team with extensive experience in tax planning and business advisory services. She specializes in helping SMEs optimize their tax strategies.',
                            'specialties' => ['Tax Planning', 'Business Advisory', 'SME Support']
                        ],
                        [
                            'name' => 'Michael Chen',
                            'position' => 'Senior Accountant',
                            'qualifications' => 'CA ANZ',
                            'experience' => '12+ years',
                            'image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                            'bio' => 'Michael brings deep expertise in financial reporting and compliance. He ensures our clients stay on top of their regulatory obligations.',
                            'specialties' => ['Financial Reporting', 'Compliance', 'GST Returns']
                        ],
                        [
                            'name' => 'Emma Williams',
                            'position' => 'Payroll Specialist',
                            'qualifications' => 'Certified Payroll Professional',
                            'experience' => '8+ years',
                            'image' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                            'bio' => 'Emma is our payroll expert, ensuring accurate and timely payroll processing for businesses of all sizes.',
                            'specialties' => ['Payroll Management', 'KiwiSaver', 'PAYE']
                        ],
                        [
                            'name' => 'David Brown',
                            'position' => 'Xero Certified Advisor',
                            'qualifications' => 'Xero Platinum Partner',
                            'experience' => '10+ years',
                            'image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                            'bio' => 'David helps businesses leverage cloud accounting technology for improved efficiency and real-time financial insights.',
                            'specialties' => ['Xero Training', 'Cloud Accounting', 'System Integration']
                        ],
                        [
                            'name' => 'Lisa Thompson',
                            'position' => 'Accounts Receivable Manager',
                            'qualifications' => 'Advanced Diploma in Accounting',
                            'experience' => '9+ years',
                            'image' => 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                            'bio' => 'Lisa specializes in optimizing cash flow through effective accounts receivable management and collection strategies.',
                            'specialties' => ['AR Management', 'Cash Flow', 'Credit Control']
                        ],
                        [
                            'name' => 'James Wilson',
                            'position' => 'Junior Accountant',
                            'qualifications' => 'Bachelor of Commerce',
                            'experience' => '3+ years',
                            'image' => 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
                            'bio' => 'James provides support across various accounting functions and is committed to delivering excellent client service.',
                            'specialties' => ['Bookkeeping', 'Data Entry', 'Client Support']
                        ]
                    ];
                @endphp

                @foreach($teamMembers as $member)
                    <div class="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border group">
                        <div class="text-center mb-6">
                            <img src="{{ $member['image'] }}" alt="{{ $member['name'] }}" class="w-24 h-24 rounded-full mx-auto mb-4 object-cover">
                            <h3 class="text-xl font-bold text-card-foreground mb-2">{{ $member['name'] }}</h3>
                            <p class="text-primary font-semibold mb-1">{{ $member['position'] }}</p>
                            <p class="text-sm text-muted-foreground">{{ $member['qualifications'] }} • {{ $member['experience'] }}</p>
                        </div>
                        
                        <p class="text-muted-foreground text-sm leading-relaxed mb-6">{{ $member['bio'] }}</p>
                        
                        <div class="space-y-2">
                            <h4 class="text-sm font-semibold text-card-foreground">Specialties:</h4>
                            <div class="flex flex-wrap gap-2">
                                @foreach($member['specialties'] as $specialty)
                                    <span class="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">{{ $specialty }}</span>
                                @endforeach
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Team Values -->
    <section class="py-20 bg-secondary/20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    What Drives Our Team
                </h2>
                <p class="text-lg text-muted-foreground max-w-3xl mx-auto">
                    Our shared commitment to excellence and client success
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                @php
                    $values = [
                        [
                            'icon' => 'target',
                            'title' => 'Client Focus',
                            'description' => 'Every decision we make is centered around delivering value to our clients.'
                        ],
                        [
                            'icon' => 'book-open',
                            'title' => 'Continuous Learning',
                            'description' => 'We stay current with industry changes and continuously develop our skills.'
                        ],
                        [
                            'icon' => 'users',
                            'title' => 'Collaboration',
                            'description' => 'We work together as a team to provide comprehensive solutions.'
                        ],
                        [
                            'icon' => 'heart',
                            'title' => 'Integrity',
                            'description' => 'We operate with the highest ethical standards in everything we do.'
                        ]
                    ];
                @endphp

                @foreach($values as $value)
                    <div class="bg-card rounded-xl p-6 shadow-lg border border-border text-center">
                        <div class="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                            <i data-lucide="{{ $value['icon'] }}" class="w-6 h-6 text-primary"></i>
                        </div>
                        <h3 class="text-lg font-semibold text-card-foreground mb-3">{{ $value['title'] }}</h3>
                        <p class="text-muted-foreground text-sm">{{ $value['description'] }}</p>
                    </div>
                @endforeach
            </div>
        </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-primary">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 class="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
                Ready to Work with Our Expert Team?
            </h2>
            <p class="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Connect with our experienced professionals and discover how we can help your business succeed.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="{{ route('contact') }}" class="bg-white text-primary font-semibold px-8 py-4 rounded-full hover:bg-slate-100 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center">
                    Contact Our Team
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
