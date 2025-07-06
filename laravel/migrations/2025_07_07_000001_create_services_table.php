<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('services', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('slug')->unique();
            $table->text('description');
            $table->text('short_description')->nullable();
            $table->string('icon');
            $table->string('color_class')->default('bg-blue-600');
            $table->json('features')->nullable(); // Array of service features
            $table->json('benefits')->nullable(); // Array of service benefits
            $table->decimal('price_from', 10, 2)->nullable();
            $table->string('price_unit')->nullable(); // e.g., 'per month', 'per hour'
            $table->string('duration')->nullable(); // e.g., '4 hours', 'ongoing'
            $table->string('level')->nullable(); // e.g., 'Beginner', 'Advanced'
            $table->boolean('is_featured')->default(false);
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->string('meta_title')->nullable();
            $table->text('meta_description')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('services');
    }
};
