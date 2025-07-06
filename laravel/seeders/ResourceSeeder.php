<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Resource;

class ResourceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $resources = [
            [
                'title' => 'Small Business Tax Guide 2024',
                'slug' => 'small-business-tax-guide-2024',
                'description' => 'Comprehensive guide covering all tax obligations and deadlines for small businesses in New Zealand. Includes GST, PAYE, and income tax requirements.',
                'icon' => 'FileText',
                'file_type' => 'PDF',
                'file_size' => '2.5 MB',
                'file_path' => 'resources/small-business-tax-guide-2024.pdf',
                'category' => 'Tax & Compliance',
                'color_class' => 'text-blue-600',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
                'meta_title' => 'Small Business Tax Guide 2024 - Free Download',
                'meta_description' => 'Download our comprehensive tax guide for New Zealand small businesses. Covers GST, PAYE, and income tax requirements.',
            ],
            [
                'title' => 'GST Calculator Template',
                'slug' => 'gst-calculator-template',
                'description' => 'Excel template to help calculate and track your GST obligations. Includes automated formulas and quarterly return summaries for easy compliance.',
                'icon' => 'Calculator',
                'file_type' => 'XLSX',
                'file_size' => '1.2 MB',
                'file_path' => 'resources/gst-calculator-template.xlsx',
                'category' => 'Templates',
                'color_class' => 'text-green-600',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
                'meta_title' => 'Free GST Calculator Template - Excel Download',
                'meta_description' => 'Free Excel GST calculator template with automated formulas for New Zealand businesses.',
            ],
            [
                'title' => 'Payroll Checklist & Templates',
                'slug' => 'payroll-checklist-templates',
                'description' => 'Complete payroll processing checklist with employee record templates, timesheet forms, and compliance tracking worksheets for small businesses.',
                'icon' => 'ClipboardList',
                'file_type' => 'ZIP',
                'file_size' => '3.8 MB',
                'file_path' => 'resources/payroll-checklist-templates.zip',
                'category' => 'Templates',
                'color_class' => 'text-purple-600',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
                'meta_title' => 'Payroll Checklist & Templates - Free Download',
                'meta_description' => 'Complete payroll processing templates and checklists for small business compliance.',
            ],
            [
                'title' => 'Annual Tax Calendar 2024',
                'slug' => 'annual-tax-calendar-2024',
                'description' => 'Important dates and deadlines for all New Zealand tax obligations. Never miss a filing deadline with this comprehensive annual tax calendar.',
                'icon' => 'BookOpen',
                'file_type' => 'PDF',
                'file_size' => '1.8 MB',
                'file_path' => 'resources/annual-tax-calendar-2024.pdf',
                'category' => 'Tax & Compliance',
                'color_class' => 'text-orange-600',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 4,
                'meta_title' => 'NZ Tax Calendar 2024 - Important Dates & Deadlines',
                'meta_description' => 'Free download of New Zealand tax calendar with all important dates and deadlines for 2024.',
            ],
            [
                'title' => 'Financial KPI Dashboard',
                'slug' => 'financial-kpi-dashboard',
                'description' => 'Excel dashboard template to track key financial performance indicators. Monitor cash flow, profit margins, and business growth metrics easily.',
                'icon' => 'TrendingUp',
                'file_type' => 'XLSX',
                'file_size' => '2.1 MB',
                'file_path' => 'resources/financial-kpi-dashboard.xlsx',
                'category' => 'Templates',
                'color_class' => 'text-red-600',
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 5,
                'meta_title' => 'Financial KPI Dashboard Template - Excel Download',
                'meta_description' => 'Track your business financial KPIs with this comprehensive Excel dashboard template.',
            ],
            [
                'title' => 'Expense Tracking Workbook',
                'slug' => 'expense-tracking-workbook',
                'description' => 'Organized expense tracking system with categories, receipt logging, and automated monthly summaries. Perfect for small business expense management.',
                'icon' => 'Shield',
                'file_type' => 'XLSX',
                'file_size' => '1.5 MB',
                'file_path' => 'resources/expense-tracking-workbook.xlsx',
                'category' => 'Templates',
                'color_class' => 'text-indigo-600',
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 6,
                'meta_title' => 'Expense Tracking Workbook - Free Excel Template',
                'meta_description' => 'Free Excel expense tracking workbook with automated summaries for small businesses.',
            ],
            [
                'title' => 'Xero Setup & Training Guide',
                'slug' => 'xero-setup-training-guide',
                'description' => 'Step-by-step guide to setting up Xero accounting software with best practices, chart of accounts setup, and essential reporting configuration.',
                'icon' => 'Zap',
                'file_type' => 'PDF',
                'file_size' => '4.2 MB',
                'file_path' => 'resources/xero-setup-training-guide.pdf',
                'category' => 'Training',
                'color_class' => 'text-amber-600',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 7,
                'meta_title' => 'Xero Setup & Training Guide - Free PDF Download',
                'meta_description' => 'Comprehensive Xero setup guide with best practices and training materials.',
            ],
            [
                'title' => 'Business Registration Kit',
                'slug' => 'business-registration-kit',
                'description' => 'Complete package for new business registration including company formation documents, IRD number application, and initial compliance requirements.',
                'icon' => 'FileText',
                'file_type' => 'ZIP',
                'file_size' => '5.1 MB',
                'file_path' => 'resources/business-registration-kit.zip',
                'category' => 'Guides',
                'color_class' => 'text-teal-600',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 8,
                'meta_title' => 'Business Registration Kit - Complete Setup Package',
                'meta_description' => 'Complete business registration package with all forms and guides for starting a business in NZ.',
            ],
        ];

        foreach ($resources as $resource) {
            Resource::create($resource);
        }
    }
}
