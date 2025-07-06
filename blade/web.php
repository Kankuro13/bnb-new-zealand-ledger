<?php

use Illuminate\Support\Facades\Route;

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

// Home page
Route::get('/', function () {
    return view('index');
})->name('home');

// Main pages
Route::get('/services', function () {
    return view('services');
})->name('services');

Route::get('/about', function () {
    return view('about');
})->name('about');

Route::get('/contact', function () {
    return view('contact');
})->name('contact');

Route::get('/team', function () {
    return view('team');
})->name('team');

Route::get('/testimonials', function () {
    return view('testimonials');
})->name('testimonials');

Route::get('/resources', function () {
    return view('resources');
})->name('resources');

Route::get('/industries', function () {
    return view('industries');
})->name('industries');

// Service specific pages
Route::get('/services/payroll-management', function () {
    return view('services.payroll-management');
})->name('services.payroll-management');

Route::get('/services/accounts-receivable', function () {
    return view('services.accounts-receivable');
})->name('services.accounts-receivable');

Route::get('/services/accounts-payable', function () {
    return view('services.accounts-receivable');
})->name('services.accounts-payable');

Route::get('/services/credit-control', function () {
    return view('services.accounts-receivable');
})->name('services.credit-control');

Route::get('/services/payroll-data-entry', function () {
    return view('services.payroll-management');
})->name('services.payroll-data-entry');

Route::get('/services/gst-filing', function () {
    return view('services.gst-filing');
})->name('services.gst-filing');

Route::get('/services/paye-services', function () {
    return view('services.gst-filing');
})->name('services.paye-services');

Route::get('/services/income-tax-returns', function () {
    return view('services.gst-filing');
})->name('services.income-tax-returns');

Route::get('/services/xero-training', function () {
    return view('services.xero-training');
})->name('services.xero-training');

// Contact form submission
Route::post('/contact', function () {
    // Handle contact form submission
    // You can add form validation and email sending logic here
    return back()->with('success', 'Thank you for your message. We will get back to you soon!');
})->name('contact.submit');

// 404 handler
Route::fallback(function () {
    return view('404');
});
