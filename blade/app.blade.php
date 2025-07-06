<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>@yield('title', 'B&B Tax - Professional Accounting Services')</title>
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
    
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Lucide Icons -->
    <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
    
    <!-- Custom CSS -->
    <style>
        :root {
            --background: 45 15% 97%;
            --foreground: 30 15% 15%;
            --card: 45 20% 95%;
            --card-foreground: 30 15% 15%;
            --popover: 45 20% 95%;
            --popover-foreground: 30 15% 15%;
            --primary: 30 45% 35%;
            --primary-foreground: 45 15% 97%;
            --secondary: 35 25% 85%;
            --secondary-foreground: 30 15% 25%;
            --muted: 35 15% 90%;
            --muted-foreground: 30 10% 45%;
            --accent: 40 65% 55%;
            --accent-foreground: 45 15% 97%;
            --destructive: 0 84% 60%;
            --destructive-foreground: 210 40% 98%;
            --border: 35 15% 85%;
            --input: 35 15% 88%;
            --ring: 30 45% 35%;
            --radius: 12px;
        }
        
        body {
            font-family: 'Space Grotesk', sans-serif;
            overflow-x: hidden;
            background: hsl(var(--background));
            color: hsl(var(--foreground));
        }
        
        .bg-background { background: hsl(var(--background)); }
        .text-foreground { color: hsl(var(--foreground)); }
        .bg-primary { background: hsl(var(--primary)); }
        .text-primary { color: hsl(var(--primary)); }
        .text-primary-foreground { color: hsl(var(--primary-foreground)); }
        .bg-secondary { background: hsl(var(--secondary)); }
        .text-secondary-foreground { color: hsl(var(--secondary-foreground)); }
        .text-muted-foreground { color: hsl(var(--muted-foreground)); }
        .border-border { border-color: hsl(var(--border)); }
        
        .animate-glow {
            animation: glow 2s ease-in-out infinite alternate;
        }
        
        @keyframes glow {
            from { box-shadow: 0 0 10px hsl(var(--primary)/0.5); }
            to { box-shadow: 0 0 20px hsl(var(--primary)/0.8), 0 0 30px hsl(var(--primary)/0.6); }
        }
        
        .animate-marquee {
            animation: marquee 60s linear infinite;
        }
        
        @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
        }
    </style>
    
    @stack('styles')
</head>
<body class="min-h-screen bg-background text-foreground">
    @include('partials.navbar')
    
    <main>
        @yield('content')
    </main>
    
    @include('partials.footer')
    
    <script>
        // Initialize Lucide icons
        lucide.createIcons();
    </script>
    
    @stack('scripts')
</body>
</html>
