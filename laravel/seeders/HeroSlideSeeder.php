<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\HeroSlide;

class HeroSlideSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $heroSlides = [
            [
                'title' => 'Uncover business value in volatility with B&B Tax',
                'subtitle' => 'Professional Accounting Excellence',
                'description' => 'Our audit, tax, and consulting specialists help organizations like yours navigate today\'s accelerating rate of change and unlock new opportunities for growth.',
                'image_url' => '/lovable-uploads/183a6bc8-df45-4d4c-b13d-a992110190ac.png',
                'background_image' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                'button_text' => 'Get Started Today',
                'button_link' => '/contact',
                'features' => [
                    ['icon' => 'CheckCircle', 'text' => '15+ Years Experience'],
                    ['icon' => 'TrendingUp', 'text' => '500+ Happy Clients'],
                    ['icon' => 'Sparkles', 'text' => 'Complete Solutions'],
                    ['icon' => 'CheckCircle', 'text' => '100% IRD Compliant']
                ],
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Professional Tax Excellence for New Zealand Businesses',
                'subtitle' => 'Strategic Tax Planning',
                'description' => 'Navigate complex tax requirements with confidence. Our qualified professionals provide strategic tax planning and compliance services to optimize your business performance.',
                'image_url' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                'background_image' => 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                'button_text' => 'Learn More',
                'button_link' => '/services',
                'features' => [
                    ['icon' => 'Calculator', 'text' => 'Strategic Tax Planning'],
                    ['icon' => 'FileText', 'text' => 'GST & PAYE Filing'],
                    ['icon' => 'Shield', 'text' => 'Audit Protection'],
                    ['icon' => 'TrendingUp', 'text' => 'Tax Optimization']
                ],
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Transform your financial management with digital solutions',
                'subtitle' => 'Modern Technology Solutions',
                'description' => 'Leverage cutting-edge cloud technology and real-time insights to streamline operations, enhance accuracy, and drive informed business decisions.',
                'image_url' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                'background_image' => 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
                'button_text' => 'Explore Technology',
                'button_link' => '/services/xero-training',
                'features' => [
                    ['icon' => 'Zap', 'text' => 'Cloud-Based Systems'],
                    ['icon' => 'BookOpen', 'text' => 'Real-Time Reporting'],
                    ['icon' => 'Users', 'text' => '24/7 Access'],
                    ['icon' => 'DollarSign', 'text' => 'Cost-Effective']
                ],
                'is_active' => true,
                'sort_order' => 3,
            ],
        ];

        foreach ($heroSlides as $slide) {
            HeroSlide::create($slide);
        }
    }
}
