<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Testimonial;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $testimonials = [
            [
                'client_name' => 'Michael Thompson',
                'client_company' => 'Thompson Construction Ltd',
                'client_position' => 'Managing Director',
                'testimonial' => 'B&B Tax has transformed our financial management. Their payroll services are exceptional, and we never have to worry about compliance issues. Sarah and her team are always responsive and professional.',
                'rating' => 5,
                'client_image' => 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'service_related' => 'Payroll Management',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'client_name' => 'Sarah Mitchell',
                'client_company' => 'Mitchell Marketing Agency',
                'client_position' => 'CEO',
                'testimonial' => 'Working with B&B Tax has been a game-changer for our business. Their accounts receivable management helped us improve our cash flow by 40%. Highly recommended!',
                'rating' => 5,
                'client_image' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'service_related' => 'Accounts Receivable',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'client_name' => 'David Park',
                'client_company' => 'Park Family Restaurant',
                'client_position' => 'Owner',
                'testimonial' => 'The team at B&B Tax made GST filing so much easier for us. We used to stress about deadlines, but now everything is handled professionally and on time.',
                'rating' => 5,
                'client_image' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'service_related' => 'GST Filing',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'client_name' => 'Emma Wilson',
                'client_company' => 'Wilson Tech Solutions',
                'client_position' => 'Founder',
                'testimonial' => 'Emma from B&B Tax provided excellent Xero training for our team. We now use the software much more efficiently, and our financial reporting has improved significantly.',
                'rating' => 5,
                'client_image' => 'https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'service_related' => 'Xero Training',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 4,
            ],
            [
                'client_name' => 'James Rodriguez',
                'client_company' => 'Rodriguez Consulting',
                'client_position' => 'Principal Consultant',
                'testimonial' => 'Professional, reliable, and always available when we need them. B&B Tax handles all our accounting needs so we can focus on growing our business.',
                'rating' => 5,
                'client_image' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'service_related' => 'Full Service Accounting',
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 5,
            ],
            [
                'client_name' => 'Lisa Chen',
                'client_company' => 'Chen Medical Practice',
                'client_position' => 'Practice Manager',
                'testimonial' => 'The specialized healthcare accounting services have been invaluable for our medical practice. They understand our unique requirements and compliance needs.',
                'rating' => 5,
                'client_image' => 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
                'service_related' => 'Healthcare Accounting',
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 6,
            ],
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }
    }
}
