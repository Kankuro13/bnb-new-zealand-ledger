<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\TeamMember;

class TeamMemberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $teamMembers = [
            [
                'name' => 'Sarah Chen',
                'position' => 'Senior Accountant & Tax Specialist',
                'qualifications' => 'CA, CPA, Tax Specialist',
                'experience' => '15+ years',
                'bio' => 'Sarah brings over 15 years of experience in tax planning and compliance. She specializes in complex tax structures and helps businesses optimize their tax positions while ensuring full compliance with IRD requirements.',
                'image_url' => 'https://images.unsplash.com/photo-1494790108755-2616c898834c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'specialties' => ['Tax Planning & Compliance', 'Business Advisory', 'IRD Representation'],
                'email' => 'sarah@bnbaccounting.co.nz',
                'phone' => '+64 9 123 4568',
                'linkedin_url' => 'https://linkedin.com/in/sarahchen',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'Marcus Rodriguez',
                'position' => 'Payroll & HR Consultant',
                'qualifications' => 'BComm, Payroll Specialist',
                'experience' => '12+ years',
                'bio' => 'Marcus is our payroll expert with extensive experience in New Zealand employment law and payroll systems. He ensures accurate payroll processing and helps businesses stay compliant with all employment obligations.',
                'image_url' => 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'specialties' => ['Payroll Management & KiwiSaver', 'Employment Law Compliance', 'HR Systems'],
                'email' => 'marcus@bnbaccounting.co.nz',
                'phone' => '+64 9 123 4569',
                'linkedin_url' => 'https://linkedin.com/in/marcusrodriguez',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'Emma Thompson',
                'position' => 'Business Advisor & Xero Specialist',
                'qualifications' => 'BComm, Xero Certified Advisor',
                'experience' => '10+ years',
                'bio' => 'Emma specializes in helping businesses streamline their financial processes through technology. As a Xero Certified Advisor, she provides comprehensive training and ongoing support to maximize your accounting software investment.',
                'image_url' => 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'specialties' => ['Business Systems & Training', 'Process Optimization', 'Financial Reporting'],
                'email' => 'emma@bnbaccounting.co.nz',
                'phone' => '+64 9 123 4570',
                'linkedin_url' => 'https://linkedin.com/in/emmathompson',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'name' => 'David Kim',
                'position' => 'Compliance & Bookkeeping Manager',
                'qualifications' => 'CA, Bookkeeping Specialist',
                'experience' => '14+ years',
                'bio' => 'David oversees our compliance and bookkeeping services, ensuring all client records are accurate and up-to-date. His attention to detail and deep understanding of New Zealand accounting standards makes him invaluable to our team.',
                'image_url' => 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
                'specialties' => ['GST, PAYE & Compliance', 'Financial Statements', 'Audit Preparation'],
                'email' => 'david@bnbaccounting.co.nz',
                'phone' => '+64 9 123 4571',
                'linkedin_url' => 'https://linkedin.com/in/davidkim',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 4,
            ],
        ];

        foreach ($teamMembers as $member) {
            TeamMember::create($member);
        }
    }
}
