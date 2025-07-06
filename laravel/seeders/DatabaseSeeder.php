<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            ServiceSeeder::class,
            TeamMemberSeeder::class,
            IndustrySeeder::class,
            TestimonialSeeder::class,
            HeroSlideSeeder::class,
            PartnerSeeder::class,
            ResourceSeeder::class,
        ]);
    }
}
