<!-- Valued Partners Section -->
<section class="bg-slate-50 py-12 overflow-hidden">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
            <h2 class="text-2xl font-bold text-slate-900 mb-2">Valued Partners</h2>
            <p class="text-slate-600">Trusted by industry leaders and integrated with the best platforms</p>
        </div>
        
        <!-- Marquee Container -->
        <div class="relative">
            <div class="flex animate-marquee space-x-12 items-center">
                <!-- Partners logos -->
                @php
                    $partners = [
                        ['name' => 'Xero', 'logo' => 'https://cdn.worldvectorlogo.com/logos/xero-2.svg'],
                        ['name' => 'MYOB', 'logo' => 'https://cdn.worldvectorlogo.com/logos/myob-1.svg'],
                        ['name' => 'QuickBooks', 'logo' => 'https://cdn.worldvectorlogo.com/logos/quickbooks-1.svg'],
                        ['name' => 'IRD', 'logo' => 'https://www.ird.govt.nz/-/media/project/ir/home/images/logos/ird-logo-colour.svg'],
                        ['name' => 'NZICA', 'logo' => 'https://www.charteredaccountantsanz.com/-/media/caa/images/logos/ca-anz-logo-stacked.svg'],
                        ['name' => 'CPA Australia', 'logo' => 'https://cdn.worldvectorlogo.com/logos/cpa-australia.svg'],
                        ['name' => 'ASB Bank', 'logo' => 'https://cdn.worldvectorlogo.com/logos/asb-bank.svg'],
                        ['name' => 'ANZ Bank', 'logo' => 'https://cdn.worldvectorlogo.com/logos/anz-2.svg'],
                        ['name' => 'Westpac', 'logo' => 'https://cdn.worldvectorlogo.com/logos/westpac-1.svg'],
                        ['name' => 'BNZ', 'logo' => 'https://cdn.worldvectorlogo.com/logos/bank-of-new-zealand-bnz.svg']
                    ];
                @endphp
                
                @foreach($partners as $partner)
                    <div class="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px] h-20 group">
                        <img 
                            src="{{ $partner['logo'] }}" 
                            alt="{{ $partner['name'] }} logo"
                            class="max-h-10 max-w-[130px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                        />
                        <div class="text-center hidden items-center justify-center w-full h-full">
                            <div class="text-sm font-semibold text-slate-700">{{ $partner['name'] }}</div>
                        </div>
                    </div>
                @endforeach
                
                <!-- Duplicate set for seamless loop -->
                @foreach($partners as $partner)
                    <div class="flex-shrink-0 flex items-center justify-center bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow min-w-[160px] h-20 group">
                        <img 
                            src="{{ $partner['logo'] }}" 
                            alt="{{ $partner['name'] }} logo"
                            class="max-h-10 max-w-[130px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
                        />
                        <div class="text-center hidden items-center justify-center w-full h-full">
                            <div class="text-sm font-semibold text-slate-700">{{ $partner['name'] }}</div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</section>

<!-- Footer Section -->
<footer class="bg-slate-900 text-slate-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <!-- Company Info -->
            <div class="lg:col-span-1">
                <div class="flex items-center space-x-3 mb-6">
                    <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center animate-glow">
                        <i data-lucide="zap" class="h-6 w-6 text-primary-foreground"></i>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold text-white">B&B Tax</h1>
                        <p class="text-xs text-slate-400 font-mono">ACCOUNTING.NZ</p>
                    </div>
                </div>
                <p class="text-slate-300 mb-6 leading-relaxed">
                    Professional accounting services for New Zealand businesses. We help you navigate complex financial requirements with confidence and expertise.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors">
                        <i data-lucide="linkedin" class="h-5 w-5"></i>
                    </a>
                    <a href="#" class="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors">
                        <i data-lucide="twitter" class="h-5 w-5"></i>
                    </a>
                    <a href="#" class="bg-slate-800 hover:bg-slate-700 p-3 rounded-lg transition-colors">
                        <i data-lucide="mail" class="h-5 w-5"></i>
                    </a>
                </div>
            </div>

            <!-- Services -->
            <div>
                <h3 class="text-lg font-semibold mb-6 text-white">Services</h3>
                <ul class="space-y-3">
                    <li><a href="{{ route('services.payroll-management') }}" class="text-slate-300 hover:text-white transition-colors">Payroll Management</a></li>
                    <li><a href="{{ route('services.accounts-receivable') }}" class="text-slate-300 hover:text-white transition-colors">Accounts Receivable</a></li>
                    <li><a href="{{ route('services.gst-filing') }}" class="text-slate-300 hover:text-white transition-colors">GST Filing</a></li>
                    <li><a href="{{ route('services.xero-training') }}" class="text-slate-300 hover:text-white transition-colors">Xero Training</a></li>
                    <li><a href="{{ route('services') }}" class="text-slate-300 hover:text-white transition-colors">View All Services</a></li>
                </ul>
            </div>

            <!-- Company -->
            <div>
                <h3 class="text-lg font-semibold mb-6 text-white">Company</h3>
                <ul class="space-y-3">
                    <li><a href="{{ route('about') }}" class="text-slate-300 hover:text-white transition-colors">About Us</a></li>
                    <li><a href="{{ route('team') }}" class="text-slate-300 hover:text-white transition-colors">Our Team</a></li>
                    <li><a href="{{ route('testimonials') }}" class="text-slate-300 hover:text-white transition-colors">Testimonials</a></li>
                    <li><a href="{{ route('resources') }}" class="text-slate-300 hover:text-white transition-colors">Resources</a></li>
                    <li><a href="{{ route('contact') }}" class="text-slate-300 hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>

            <!-- Contact Info -->
            <div>
                <h3 class="text-lg font-semibold mb-6 text-white">Contact Info</h3>
                <div class="space-y-4">
                    <div class="flex items-start space-x-3">
                        <i data-lucide="map-pin" class="h-5 w-5 text-slate-400 mt-1 flex-shrink-0"></i>
                        <div>
                            <p class="text-slate-300">123 Queen Street</p>
                            <p class="text-slate-300">Auckland 1010, New Zealand</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i data-lucide="phone" class="h-5 w-5 text-slate-400 flex-shrink-0"></i>
                        <p class="text-slate-300">+64 9 123 4567</p>
                    </div>
                    <div class="flex items-center space-x-3">
                        <i data-lucide="mail" class="h-5 w-5 text-slate-400 flex-shrink-0"></i>
                        <p class="text-slate-300">info@bbtax.co.nz</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p class="text-slate-400 text-sm">
                © {{ date('Y') }} B&B Tax. All rights reserved.
            </p>
            <div class="flex space-x-6 mt-4 md:mt-0">
                <a href="#" class="text-slate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" class="text-slate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
                <a href="#" class="text-slate-400 hover:text-white text-sm transition-colors">Cookie Policy</a>
            </div>
        </div>
    </div>
</footer>
