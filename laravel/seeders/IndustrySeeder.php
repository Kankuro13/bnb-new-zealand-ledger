<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Industry;

class IndustrySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $industries = [
            [
                'name' => 'Construction & Trades',
                'slug' => 'construction-trades',
                'description' => 'Specialized accounting services for construction companies, contractors, and tradespeople including project cost tracking, GST compliance, and payroll management.',
                'icon' => 'Building',
                'color_class' => 'bg-orange-600',
                'services_offered' => [
                    'Project cost accounting',
                    'Progress billing',
                    'Subcontractor management',
                    'Equipment depreciation',
                    'Cash flow forecasting'
                ],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Retail & E-commerce',
                'slug' => 'retail-ecommerce',
                'description' => 'Comprehensive financial services for retail businesses and online stores including inventory management, POS integration, and multi-channel sales tracking.',
                'icon' => 'CreditCard',
                'color_class' => 'bg-blue-600',
                'services_offered' => [
                    'Inventory valuation',
                    'POS system integration',
                    'Online sales tracking',
                    'Seasonal planning',
                    'Customer analytics'
                ],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Professional Services',
                'slug' => 'professional-services',
                'description' => 'Tailored accounting solutions for consultants, lawyers, architects, and other professional service providers including time tracking and project profitability analysis.',
                'icon' => 'GraduationCap',
                'color_class' => 'bg-indigo-600',
                'services_offered' => [
                    'Time and billing systems',
                    'Project profitability',
                    'Client trust accounting',
                    'Professional indemnity',
                    'Partnership accounting'
                ],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'name' => 'Healthcare & Medical',
                'slug' => 'healthcare-medical',
                'description' => 'Specialized financial services for medical practices, clinics, and healthcare providers including patient billing, equipment financing, and compliance management.',
                'icon' => 'Stethoscope',
                'color_class' => 'bg-green-600',
                'services_offered' => [
                    'Medical billing systems',
                    'Equipment financing',
                    'Practice management',
                    'Insurance claims',
                    'Regulatory compliance'
                ],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 4,
            ],
            [
                'name' => 'Technology & Startups',
                'slug' => 'technology-startups',
                'description' => 'Modern accounting solutions for tech companies and startups including R&D tax credits, investor reporting, and scalable financial systems.',
                'icon' => 'Zap',
                'color_class' => 'bg-purple-600',
                'services_offered' => [
                    'R&D tax incentives',
                    'Investor reporting',
                    'Equity management',
                    'Scalable systems',
                    'Growth planning'
                ],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 5,
            ],
            [
                'name' => 'Hospitality & Tourism',
                'slug' => 'hospitality-tourism',
                'description' => 'Comprehensive financial management for restaurants, hotels, and tourism operators including seasonal analysis, tip management, and cost control.',
                'icon' => 'MapPin',
                'color_class' => 'bg-yellow-600',
                'services_offered' => [
                    'Seasonal reporting',
                    'Tip and gratuity management',
                    'Food cost analysis',
                    'Tourism levies',
                    'Multi-location reporting'
                ],
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 6,
            ],
        ];

        foreach ($industries as $industry) {
            Industry::create($industry);
        }
    }
}
