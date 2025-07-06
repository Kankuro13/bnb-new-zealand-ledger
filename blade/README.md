# B&B Tax - Laravel Blade Application

This folder contains the Laravel Blade templates converted from the original React application. The application provides professional accounting services for New Zealand businesses.

## 📁 File Structure

```
blade/
├── app.blade.php                          # Main layout template
├── partials/
│   ├── navbar.blade.php                   # Navigation component
│   └── footer.blade.php                   # Footer component
├── index.blade.php                        # Home page
├── services.blade.php                     # Services overview page
├── services/
│   ├── payroll-management.blade.php       # Payroll services page
│   ├── accounts-receivable.blade.php      # AR services page
│   ├── gst-filing.blade.php              # GST & tax filing page
│   └── xero-training.blade.php           # Xero training page
├── about.blade.php                        # About us page
├── contact.blade.php                      # Contact page
├── team.blade.php                         # Team page
├── industries.blade.php                   # Industries page
└── web.php                               # Laravel routes file
```

## 🚀 Setup Instructions

### 1. Laravel Installation

First, create a new Laravel project:

```bash
composer create-project laravel/laravel bbtax-laravel
cd bbtax-laravel
```

### 2. Copy Blade Files

Copy all the blade files from this folder to your Laravel project:

```bash
# Copy main layout and pages
cp blade/app.blade.php resources/views/layouts/
cp blade/*.blade.php resources/views/
cp -r blade/partials resources/views/
cp -r blade/services resources/views/

# Copy routes
cp blade/web.php routes/
```

### 3. Update Laravel Configuration

#### Update the main layout reference

In your blade files, update the extends directive:

```blade
@extends('layouts.app')
```

#### Configure Tailwind CSS

Add Tailwind CSS to your Laravel project:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```javascript
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Add Tailwind directives to `resources/css/app.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4. Add Required Dependencies

Add the CDN links to your layout or install packages:

```html
<!-- Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

<!-- Tailwind CSS -->
<script src="https://cdn.tailwindcss.com"></script>

<!-- Lucide Icons -->
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
```

### 5. Start Development Server

```bash
php artisan serve
```

Visit `http://localhost:8000` to see your application.

## 🎨 Features Included

### Pages
- **Home Page** - Hero slider with services overview
- **Services** - Complete services listing with detailed pages
- **About** - Company information and values
- **Contact** - Contact form and business information
- **Team** - Team member profiles
- **Industries** - Industry-specific solutions

### Service Pages
- **Payroll Management** - Comprehensive payroll services
- **Accounts Receivable** - AR management and cash flow optimization
- **GST Filing & Compliance** - Tax filing and compliance services
- **Xero Training** - Software training and support

### Components
- **Responsive Navigation** - Mobile-friendly navbar with active states
- **Footer** - Complete footer with partner logos and links
- **Hero Sliders** - Interactive image carousels
- **Contact Forms** - Ready-to-use contact forms
- **Service Cards** - Professional service presentation
- **Team Profiles** - Staff member showcase

## 🛠 Customization

### Colors and Styling
The application uses a custom color scheme defined in CSS variables. Update the colors in the `<style>` section of `app.blade.php`:

```css
:root {
    --primary: 30 45% 35%;
    --primary-foreground: 45 15% 97%;
    /* Add more custom colors */
}
```

### Content Management
All content is defined in PHP arrays within the blade templates. You can easily:
- Update service information
- Modify team member details
- Change company information
- Add new testimonials

### Route Configuration
Routes are defined in `web.php`. Add new routes as needed:

```php
Route::get('/new-page', function () {
    return view('new-page');
})->name('new-page');
```

## 📱 Responsive Design

The application is fully responsive with:
- Mobile-first design approach
- Flexible grid layouts
- Mobile navigation menu
- Optimized images and content

## 🔧 Additional Recommendations

### 1. Database Integration
Consider adding database models for:
- Contact form submissions
- Team members
- Services
- Testimonials

### 2. Form Handling
Implement proper form validation and email sending:

```php
// In a controller
public function submitContact(Request $request)
{
    $validated = $request->validate([
        'name' => 'required|max:255',
        'email' => 'required|email',
        'message' => 'required',
    ]);
    
    // Send email logic here
    
    return back()->with('success', 'Message sent successfully!');
}
```

### 3. SEO Optimization
- Add meta descriptions to each page
- Implement structured data
- Add XML sitemap
- Optimize images with alt tags

### 4. Performance
- Optimize images
- Implement caching
- Minify CSS/JS
- Use Laravel Mix for asset compilation

## 📞 Support

For any questions or customization needs, refer to the Laravel documentation at [laravel.com/docs](https://laravel.com/docs).

## 📄 License

This template is provided as-is for conversion from React to Laravel Blade. Customize as needed for your specific requirements.
