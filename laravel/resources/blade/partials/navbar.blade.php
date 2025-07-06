<nav class="fixed w-full z-50 backdrop-blur-xl bg-background/80 border-b border-border">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-20">
            <div class="flex items-center">
                <div class="flex-shrink-0 flex items-center space-x-3">
                    <div class="w-10 h-10 bg-primary rounded-xl flex items-center justify-center animate-glow">
                        <i data-lucide="zap" class="h-6 w-6 text-primary-foreground"></i>
                    </div>
                    <div>
                        <h1 class="text-xl font-bold text-primary">
                            B&B Tax
                        </h1>
                        <p class="text-xs text-muted-foreground font-mono">ACCOUNTING.NZ</p>
                    </div>
                </div>
            </div>
            
            <!-- Desktop menu -->
            <div class="hidden md:flex items-center space-x-1">
                <a href="{{ route('home') }}" class="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary/50 rounded-lg relative group {{ request()->routeIs('home') ? 'text-primary' : '' }}">
                    Home
                    <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full {{ request()->routeIs('home') ? 'w-3/4 -translate-x-1/2' : '' }}"></span>
                </a>
                <a href="{{ route('services') }}" class="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary/50 rounded-lg relative group {{ request()->routeIs('services*') ? 'text-primary' : '' }}">
                    Services
                    <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full {{ request()->routeIs('services*') ? 'w-3/4 -translate-x-1/2' : '' }}"></span>
                </a>
                <a href="{{ route('industries') }}" class="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary/50 rounded-lg relative group {{ request()->routeIs('industries') ? 'text-primary' : '' }}">
                    Industries
                    <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full {{ request()->routeIs('industries') ? 'w-3/4 -translate-x-1/2' : '' }}"></span>
                </a>
                <a href="{{ route('about') }}" class="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary/50 rounded-lg relative group {{ request()->routeIs('about') ? 'text-primary' : '' }}">
                    About
                    <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full {{ request()->routeIs('about') ? 'w-3/4 -translate-x-1/2' : '' }}"></span>
                </a>
                <a href="{{ route('team') }}" class="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary/50 rounded-lg relative group {{ request()->routeIs('team') ? 'text-primary' : '' }}">
                    Team
                    <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full {{ request()->routeIs('team') ? 'w-3/4 -translate-x-1/2' : '' }}"></span>
                </a>
                <a href="{{ route('testimonials') }}" class="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary/50 rounded-lg relative group {{ request()->routeIs('testimonials') ? 'text-primary' : '' }}">
                    Testimonials
                    <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full {{ request()->routeIs('testimonials') ? 'w-3/4 -translate-x-1/2' : '' }}"></span>
                </a>
                <a href="{{ route('resources') }}" class="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary/50 rounded-lg relative group {{ request()->routeIs('resources') ? 'text-primary' : '' }}">
                    Resources
                    <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full {{ request()->routeIs('resources') ? 'w-3/4 -translate-x-1/2' : '' }}"></span>
                </a>
                <a href="{{ route('contact') }}" class="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-secondary/50 rounded-lg relative group {{ request()->routeIs('contact') ? 'text-primary' : '' }}">
                    Contact
                    <span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full {{ request()->routeIs('contact') ? 'w-3/4 -translate-x-1/2' : '' }}"></span>
                </a>
                <a href="{{ route('contact') }}" class="ml-4 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:scale-105">
                    Get Started
                </a>
            </div>

            <!-- Mobile menu button -->
            <div class="md:hidden flex items-center">
                <button id="mobile-menu-button" class="text-muted-foreground hover:text-primary p-2 rounded-lg">
                    <i data-lucide="menu" class="h-6 w-6" id="menu-icon"></i>
                    <i data-lucide="x" class="h-6 w-6 hidden" id="close-icon"></i>
                </button>
            </div>
        </div>
    </div>

    <!-- Mobile menu -->
    <div id="mobile-menu" class="md:hidden hidden bg-background/95 backdrop-blur-xl border-t border-border">
        <div class="px-2 pt-2 pb-3 space-y-1">
            <a href="{{ route('home') }}" class="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300">Home</a>
            <a href="{{ route('services') }}" class="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300">Services</a>
            <a href="{{ route('industries') }}" class="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300">Industries</a>
            <a href="{{ route('about') }}" class="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300">About</a>
            <a href="{{ route('team') }}" class="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300">Team</a>
            <a href="{{ route('testimonials') }}" class="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300">Testimonials</a>
            <a href="{{ route('resources') }}" class="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300">Resources</a>
            <a href="{{ route('contact') }}" class="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-secondary/50 rounded-lg transition-all duration-300">Contact</a>
            <div class="px-4 py-3">
                <a href="{{ route('contact') }}" class="w-full block text-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-6 py-3 rounded-full transition-all duration-300">
                    Get Started
                </a>
            </div>
        </div>
    </div>
</nav>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const menuIcon = document.getElementById('menu-icon');
        const closeIcon = document.getElementById('close-icon');

        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            menuIcon.classList.toggle('hidden');
            closeIcon.classList.toggle('hidden');
        });
    });
</script>
