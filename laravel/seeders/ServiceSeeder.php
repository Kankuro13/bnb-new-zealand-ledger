<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Service;

class ServiceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $services = [
            [
                'title' => 'Payroll Management',
                'slug' => 'payroll-management',
                'description' => 'Comprehensive payroll processing services including payslip preparation, leave management, and KiwiSaver compliance. We ensure your employees are paid correctly and on time, every time.',
                'short_description' => 'Accurate payroll processing and KiwiSaver compliance',
                'icon' => 'Users',
                'color_class' => 'bg-blue-600',
                'features' => [
                    'Weekly, fortnightly, and monthly payroll runs',
                    'Payslip generation and distribution',
                    'Leave management and calculations',
                    'KiwiSaver enrollment and contributions',
                    'Holiday pay calculations',
                    'Timesheet processing',
                    'PAYE and ACC levy calculations',
                    'IRD filing and payments'
                ],
                'benefits' => [
                    'Save time on payroll administration',
                    'Ensure 100% compliance with NZ employment law',
                    'Reduce payroll errors',
                    'Free up staff for core business activities'
                ],
                'price_from' => 150.00,
                'price_unit' => 'per month',
                'duration' => 'ongoing',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'title' => 'Accounts Receivable',
                'slug' => 'accounts-receivable',
                'description' => 'Professional accounts receivable management to optimize your cash flow. We handle invoice creation, payment tracking, and debt collection processes.',
                'short_description' => 'Invoice management and payment follow-up',
                'icon' => 'FileText',
                'color_class' => 'bg-green-600',
                'features' => [
                    'Invoice preparation and sending',
                    'Payment tracking and reconciliation',
                    'Overdue account management',
                    'Customer credit checks',
                    'Debt collection processes',
                    'Cash flow reporting',
                    'Customer communication',
                    'Bad debt provisioning'
                ],
                'benefits' => [
                    'Improve cash flow management',
                    'Reduce outstanding debts',
                    'Professional customer communication',
                    'Detailed financial reporting'
                ],
                'price_from' => 200.00,
                'price_unit' => 'per month',
                'duration' => 'ongoing',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'title' => 'Accounts Payable',
                'slug' => 'accounts-payable',
                'description' => 'Efficient accounts payable management ensuring timely payments to suppliers while maintaining optimal cash flow for your business.',
                'short_description' => 'Supplier invoice and payment management',
                'icon' => 'CreditCard',
                'color_class' => 'bg-purple-600',
                'features' => [
                    'Supplier invoice processing',
                    'Payment scheduling and execution',
                    'Purchase order matching',
                    'Expense tracking and categorization',
                    'Supplier statement reconciliation',
                    'Cash flow forecasting',
                    'Early payment discount optimization',
                    'Vendor management'
                ],
                'benefits' => [
                    'Never miss payment deadlines',
                    'Optimize cash flow timing',
                    'Take advantage of early payment discounts',
                    'Maintain good supplier relationships'
                ],
                'price_from' => 180.00,
                'price_unit' => 'per month',
                'duration' => 'ongoing',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'title' => 'Credit Control',
                'slug' => 'credit-control',
                'description' => 'Proactive credit control services to minimize bad debts and optimize your cash collection processes.',
                'short_description' => 'Debt monitoring and cash collection',
                'icon' => 'DollarSign',
                'color_class' => 'bg-red-600',
                'features' => [
                    'Credit limit assessment',
                    'Overdue debt monitoring',
                    'Professional debt collection',
                    'Customer payment plan setup',
                    'Legal action coordination',
                    'Credit reporting',
                    'Risk assessment',
                    'Collection strategy development'
                ],
                'benefits' => [
                    'Reduce bad debt write-offs',
                    'Improve cash collection rates',
                    'Professional debt recovery',
                    'Protect customer relationships'
                ],
                'price_from' => 250.00,
                'price_unit' => 'per month',
                'duration' => 'ongoing',
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 4,
            ],
            [
                'title' => 'GST Filing & Compliance',
                'slug' => 'gst-filing',
                'description' => 'Complete GST filing and compliance services ensuring your business meets all IRD requirements and deadlines.',
                'short_description' => 'GST returns and IRD compliance',
                'icon' => 'Building',
                'color_class' => 'bg-orange-600',
                'features' => [
                    'Monthly and bi-monthly GST returns',
                    'GST calculation and reconciliation',
                    'IRD filing and payments',
                    'Input tax credit optimization',
                    'GST compliance reviews',
                    'Record keeping systems',
                    'IRD correspondence handling',
                    'GST registration assistance'
                ],
                'benefits' => [
                    'Never miss GST filing deadlines',
                    'Maximize input tax credits',
                    'Ensure full IRD compliance',
                    'Avoid penalties and interest'
                ],
                'price_from' => 120.00,
                'price_unit' => 'per return',
                'duration' => 'monthly/bi-monthly',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 5,
            ],
            [
                'title' => 'Xero Training',
                'slug' => 'xero-training',
                'description' => 'Comprehensive Xero training programs to help you and your team master this powerful accounting software.',
                'short_description' => 'Comprehensive Xero system training',
                'icon' => 'GraduationCap',
                'color_class' => 'bg-indigo-600',
                'features' => [
                    'Basic Xero setup and navigation',
                    'Chart of accounts configuration',
                    'Invoice and bill management',
                    'Bank reconciliation processes',
                    'Reporting and analytics',
                    'Payroll integration',
                    'Add-on applications',
                    'Best practice workflows'
                ],
                'benefits' => [
                    'Maximize your Xero investment',
                    'Improve data accuracy',
                    'Streamline accounting processes',
                    'Gain real-time financial insights'
                ],
                'price_from' => 300.00,
                'price_unit' => 'per session',
                'duration' => '2-4 hours',
                'level' => 'Beginner to Advanced',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 6,
            ],
        ];

        foreach ($services as $service) {
            Service::create($service);
        }
    }
}
