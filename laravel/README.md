# Laravel Models and Migrations for B&B Tax Website

This folder contains all the necessary Laravel models, migrations, controllers, and seeders to handle the database structure for the B&B Tax and Accounting Service website.

## File Structure

```
laravel/
├── migrations/
│   ├── 2025_07_07_000001_create_services_table.php
│   ├── 2025_07_07_000002_create_team_members_table.php
│   ├── 2025_07_07_000003_create_industries_table.php
│   ├── 2025_07_07_000004_create_testimonials_table.php
│   ├── 2025_07_07_000005_create_contact_submissions_table.php
│   ├── 2025_07_07_000006_create_hero_slides_table.php
│   ├── 2025_07_07_000007_create_partners_table.php
│   └── 2025_07_07_000008_create_resources_table.php
├── models/
│   ├── Service.php
│   ├── TeamMember.php
│   ├── Industry.php
│   ├── Testimonial.php
│   ├── ContactSubmission.php
│   ├── HeroSlide.php
│   ├── Partner.php
│   └── Resource.php
├── controllers/
│   ├── HomeController.php
│   ├── ContactController.php
│   └── Api/
│       └── ApiController.php
├── seeders/
│   ├── DatabaseSeeder.php
│   ├── ServiceSeeder.php
│   ├── TeamMemberSeeder.php
│   ├── IndustrySeeder.php
│   ├── TestimonialSeeder.php
│   ├── HeroSlideSeeder.php
│   ├── PartnerSeeder.php
│   └── ResourceSeeder.php
└── routes.php
```

### 8. Resources Table
Stores downloadable resources like templates, guides, and tools.
- **Fields**: title, slug, description, icon, file_type, file_size, file_path, download_url, category, color_class, download_count, is_featured, is_active, sort_order, meta_title, meta_description

## Database Tables

### 1. Services Table
Stores all accounting services offered by the company.
- **Fields**: title, slug, description, short_description, icon, color_class, features (JSON), benefits (JSON), price_from, price_unit, duration, level, is_featured, is_active, sort_order, meta_title, meta_description

### 2. Team Members Table
Stores information about team members.
- **Fields**: name, position, qualifications, experience, bio, image_url, specialties (JSON), email, phone, linkedin_url, is_featured, is_active, sort_order

### 3. Industries Table
Stores industry-specific information.
- **Fields**: name, slug, description, icon, color_class, services_offered (JSON), is_featured, is_active, sort_order

### 4. Testimonials Table
Stores client testimonials and reviews.
- **Fields**: client_name, client_company, client_position, testimonial, rating, client_image, service_related, is_featured, is_active, sort_order

### 5. Contact Submissions Table
Stores contact form submissions from website visitors.
- **Fields**: first_name, last_name, email, phone, company, service_interest, message, status, admin_notes, contacted_at, ip_address, user_agent

### 6. Hero Slides Table
Stores homepage slider content.
- **Fields**: title, subtitle, description, image_url, background_image, button_text, button_link, features (JSON), is_active, sort_order

### 7. Partners Table
Stores information about business partners and certifications.
- **Fields**: name, logo_url, website_url, description, partnership_type, is_featured, is_active, sort_order

## Installation Instructions

### 1. Copy Files to Laravel Project

Copy the files to their respective locations in your Laravel project:

```bash
# Copy migrations
cp laravel/migrations/* database/migrations/

# Copy models
cp laravel/models/* app/Models/

# Copy controllers
cp laravel/controllers/* app/Http/Controllers/
mkdir -p app/Http/Controllers/Api
cp laravel/controllers/Api/* app/Http/Controllers/Api/

# Copy seeders
cp laravel/seeders/* database/seeders/

# Copy routes (merge with your existing routes/web.php)
cat laravel/routes.php >> routes/web.php
```

### 2. Run Migrations

```bash
php artisan migrate
```

### 3. Seed the Database

```bash
php artisan db:seed
```

Or run individual seeders:

```bash
php artisan db:seed --class=ServiceSeeder
php artisan db:seed --class=TeamMemberSeeder
php artisan db:seed --class=IndustrySeeder
php artisan db:seed --class=TestimonialSeeder
php artisan db:seed --class=HeroSlideSeeder
php artisan db:seed --class=PartnerSeeder
php artisan db:seed --class=ResourceSeeder
```

### 4. Update Routes

The `routes.php` file contains all the necessary web routes. Merge these with your existing `routes/web.php` file.

## Model Features

### Scopes
All models include useful query scopes:
- `active()` - Filter only active records
- `featured()` - Filter only featured records
- `ordered()` - Order by sort_order field

### Relationships
Models are designed to be easily extensible with relationships as needed.

### Casts
JSON fields are automatically cast to arrays for easy manipulation.

## Controller Features

### HomeController
Handles all main website pages:
- Homepage with dynamic content
- Services listing and individual service pages
- About, team, industries, testimonials, and resources pages

### ContactController
Handles contact form submissions with validation and email notifications.

### ApiController
Provides JSON endpoints for AJAX requests and front-end integrations.

### Get Resource by Category
```php
$resources = Resource::active()->byCategory('Templates')->ordered()->get();
```

### Handle Resource Download
```php
$resource = Resource::where('slug', 'gst-calculator-template')->firstOrFail();
$resource->incrementDownloadCount();
```

## Usage Examples

### Get Featured Services
```php
$featuredServices = Service::active()->featured()->ordered()->get();
```

### Get Team Members for Homepage
```php
$teamMembers = TeamMember::active()->featured()->ordered()->take(4)->get();
```

### Handle Contact Form
```php
$contact = ContactSubmission::create($validatedData);
```

### Get Service by Slug
```php
$service = Service::where('slug', 'payroll-management')->firstOrFail();
```

## Customization

### Adding New Fields
To add new fields to any model:
1. Create a new migration: `php artisan make:migration add_field_to_table`
2. Update the model's `$fillable` array
3. Update the seeder if needed

### Adding New Models
To add new models:
1. Create migration: `php artisan make:migration create_new_table`
2. Create model: `php artisan make:model NewModel`
3. Create seeder: `php artisan make:seeder NewSeeder`
4. Add to `DatabaseSeeder.php`

## Admin Panel Integration

These models are designed to work seamlessly with Laravel admin packages like:
- Laravel Nova
- FilamentPHP
- Laravel Backpack

## Security Considerations

- Contact submissions store IP address and user agent for security tracking
- All models include `is_active` fields for soft filtering
- JSON fields are properly cast and validated
- Email addresses are validated in contact forms

## Performance Optimizations

- Database indexes on commonly queried fields
- Eager loading relationships where appropriate
- Pagination ready for large datasets
- Efficient scopes for filtering

## API Endpoints

The following API endpoints are available:

- `GET /api/services` - All active services
- `GET /api/team` - All active team members  
- `GET /api/testimonials` - All active testimonials
- `GET /api/industries` - All active industries
- `GET /api/hero-slides` - All active hero slides
- `GET /api/partners` - All active partners
- `GET /api/resources` - All active resources
- `GET /api/resources/category/{category}` - Resources by category

## Support

For any questions about implementing these models and migrations, please refer to the Laravel documentation or contact the development team.
