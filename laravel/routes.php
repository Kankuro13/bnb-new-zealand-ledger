<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Homepage
Route::get('/', [HomeController::class, 'index'])->name('home');

// About page
Route::get('/about', [HomeController::class, 'about'])->name('about');

// Services pages
Route::get('/services', [HomeController::class, 'services'])->name('services');
Route::get('/services/{slug}', [HomeController::class, 'service'])->name('service.show');

// Specific service routes for SEO
Route::get('/services/payroll-management', [HomeController::class, 'service'])
    ->defaults('slug', 'payroll-management')->name('services.payroll-management');
Route::get('/services/accounts-receivable', [HomeController::class, 'service'])
    ->defaults('slug', 'accounts-receivable')->name('services.accounts-receivable');
Route::get('/services/accounts-payable', [HomeController::class, 'service'])
    ->defaults('slug', 'accounts-payable')->name('services.accounts-payable');
Route::get('/services/credit-control', [HomeController::class, 'service'])
    ->defaults('slug', 'credit-control')->name('services.credit-control');
Route::get('/services/payroll-data-entry', [HomeController::class, 'service'])
    ->defaults('slug', 'payroll-data-entry')->name('services.payroll-data-entry');
Route::get('/services/gst-filing', [HomeController::class, 'service'])
    ->defaults('slug', 'gst-filing')->name('services.gst-filing');
Route::get('/services/paye-services', [HomeController::class, 'service'])
    ->defaults('slug', 'paye-services')->name('services.paye-services');
Route::get('/services/income-tax-returns', [HomeController::class, 'service'])
    ->defaults('slug', 'income-tax-returns')->name('services.income-tax-returns');
Route::get('/services/xero-training', [HomeController::class, 'service'])
    ->defaults('slug', 'xero-training')->name('services.xero-training');

// Industries page
Route::get('/industries', [HomeController::class, 'industries'])->name('industries');

// Team page
Route::get('/team', [HomeController::class, 'team'])->name('team');

// Testimonials page
Route::get('/testimonials', [HomeController::class, 'testimonials'])->name('testimonials');

// Resources page
Route::get('/resources', [HomeController::class, 'resources'])->name('resources');
Route::get('/resources/download/{slug}', [HomeController::class, 'downloadResource'])->name('resources.download');

// Contact pages
Route::get('/contact', [ContactController::class, 'index'])->name('contact');
Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

// API routes for AJAX requests (optional)
Route::prefix('api')->group(function () {
    Route::get('/services', function () {
        return response()->json(\App\Models\Service::active()->get());
    });
    
    Route::get('/team', function () {
        return response()->json(\App\Models\TeamMember::active()->get());
    });
    
    Route::get('/testimonials', function () {
        return response()->json(\App\Models\Testimonial::active()->get());
    });
    
    Route::get('/industries', function () {
        return response()->json(\App\Models\Industry::active()->get());
    });
    
    Route::get('/resources', function () {
        return response()->json(\App\Models\Resource::active()->get());
    });
    
    Route::get('/resources/category/{category}', function ($category) {
        return response()->json(\App\Models\Resource::active()->byCategory($category)->get());
    });
});
