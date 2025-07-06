<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Partner;

class PartnerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $partners = [
            [
                'name' => 'Xero',
                'logo_url' => 'https://www.xero.com/content/dam/xero/images/logos/xero-logo.svg',
                'website_url' => 'https://www.xero.com',
                'description' => 'Cloud-based accounting software',
                'partnership_type' => 'Technology Partner',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 1,
            ],
            [
                'name' => 'IRD New Zealand',
                'logo_url' => 'https://www.ird.govt.nz/-/media/project/ir/home/images/logos/ird-logo.png',
                'website_url' => 'https://www.ird.govt.nz',
                'description' => 'Inland Revenue Department',
                'partnership_type' => 'Government Agency',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 2,
            ],
            [
                'name' => 'NZICA',
                'logo_url' => 'https://www.charteredaccountantsanz.com/-/media/caa/images/logos/ca-anz-logo.svg',
                'website_url' => 'https://www.charteredaccountantsanz.com',
                'description' => 'Chartered Accountants Australia and New Zealand',
                'partnership_type' => 'Professional Body',
                'is_featured' => true,
                'is_active' => true,
                'sort_order' => 3,
            ],
            [
                'name' => 'KiwiSaver',
                'logo_url' => 'https://www.kiwisaver.govt.nz/assets/images/logo.png',
                'website_url' => 'https://www.kiwisaver.govt.nz',
                'description' => 'New Zealand retirement savings scheme',
                'partnership_type' => 'Government Scheme',
                'is_featured' => false,
                'is_active' => true,
                'sort_order' => 4,
            ],
        ];

        foreach ($partners as $partner) {
            Partner::create($partner);
        }
    }
}
