# B&B Tax Accounting Website - Laravel Version

This is a Laravel-based conversion of the React accounting website for B&B Tax and Accounting Service Limited. The project provides a modern, responsive website showcasing comprehensive accounting services for New Zealand businesses.

## Features

- **Modern Design**: Clean, professional design with a focus on user experience
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Components**: Hero carousel, animated cards, and smooth transitions
- **Service Pages**: Dedicated pages for each accounting service offered
- **Contact System**: Contact form with validation and email functionality
- **SEO Optimized**: Proper meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized images, lazy loading, and efficient CSS/JS

## Technology Stack

- **Backend**: Laravel 10.x
- **Frontend**: Blade templates with Alpine.js
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide icons
- **Build Tool**: Vite
- **Package Manager**: npm

## Services Covered

1. **Payroll Management** - Comprehensive payroll processing and compliance
2. **Accounts Receivable** - Invoice management and payment follow-up
3. **Accounts Payable** - Supplier invoice and payment management
4. **Credit Control** - Debt monitoring and cash collection
5. **Payroll Data Entry** - Accurate payroll data processing
6. **GST Filing** - GST returns and IRD compliance
7. **PAYE Services** - PAYE calculations and payments
8. **Income Tax Returns** - Tax return preparation and filing
9. **Xero Training** - Comprehensive Xero system training

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd laravel
   ```

2. **Install PHP dependencies**
   ```bash
   composer install
   ```

3. **Install Node.js dependencies**
   ```bash
   npm install
   ```

4. **Environment setup**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

5. **Configure database** (Edit .env file)
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=bnbtax_website
   DB_USERNAME=your_username
   DB_PASSWORD=your_password
   ```

6. **Run migrations**
   ```bash
   php artisan migrate
   ```

7. **Build assets**
   ```bash
   npm run dev
   # or for production
   npm run build
   ```

8. **Start the development server**
   ```bash
   php artisan serve
   ```

## Development

### File Structure

```
laravel/
├── app/
│   └── Http/
│       └── Controllers/          # Page controllers
├── resources/
│   ├── views/
│   │   ├── layouts/
│   │   │   └── app.blade.php     # Main layout
│   │   ├── components/           # Reusable components
│   │   ├── services/             # Service pages
│   │   ├── home.blade.php        # Homepage
│   │   ├── about.blade.php       # About page
│   │   └── contact.blade.php     # Contact page
│   ├── css/
│   │   └── app.css               # Main stylesheet
│   └── js/
│       └── app.js                # JavaScript functionality
├── routes/
│   └── web.php                   # Web routes
├── tailwind.config.js            # Tailwind configuration
├── vite.config.js                # Vite configuration
└── package.json                  # Node dependencies
```

### Key Components

- **Navbar**: Fixed navigation with mobile responsiveness
- **Footer**: Partner logos with marquee animation
- **Jumbotron**: Reusable hero section component
- **Hero Carousel**: Auto-playing image slider with navigation
- **Service Cards**: Interactive service showcases
- **Contact Form**: Validated contact form with error handling

### Styling System

The project uses a custom design system built on Tailwind CSS:

- **Colors**: Custom HSL color palette for consistent theming
- **Typography**: Space Grotesk and JetBrains Mono fonts
- **Animations**: Custom CSS animations for enhanced UX
- **Components**: Reusable CSS classes for common elements

### JavaScript Features

- **Alpine.js**: For reactive components and interactions
- **Lucide Icons**: Modern icon library
- **Form Validation**: Client-side validation with error handling
- **Smooth Scrolling**: Enhanced navigation experience
- **Intersection Observer**: Scroll-triggered animations
- **Image Lazy Loading**: Performance optimization

## Customization

### Adding New Services

1. Create a new controller method in `ServiceController`
2. Add the route in `routes/web.php`
3. Create a new Blade template in `resources/views/services/`
4. Update the services array in the relevant controllers

### Modifying Styles

1. Update the color palette in `resources/css/app.css`
2. Modify Tailwind configuration in `tailwind.config.js`
3. Add custom animations or components as needed

### Adding New Pages

1. Create a new controller
2. Define routes in `routes/web.php`
3. Create Blade templates
4. Update navigation components

## Deployment

### Production Build

```bash
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Environment Configuration

Update the following in your production `.env`:

```
APP_ENV=production
APP_DEBUG=false
APP_URL=https://your-domain.com

# Email configuration for contact forms
MAIL_DRIVER=smtp
MAIL_HOST=your-smtp-host
MAIL_PORT=587
MAIL_USERNAME=your-email
MAIL_PASSWORD=your-password
```

## SEO and Performance

- **Meta Tags**: Proper title, description, and OG tags
- **Structured Data**: JSON-LD markup for search engines
- **Image Optimization**: Responsive images with proper alt text
- **Core Web Vitals**: Optimized for Google's performance metrics
- **Accessibility**: WCAG 2.1 AA compliance

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary software developed for B&B Tax and Accounting Service Limited.

## Support

For technical support or questions about this project, please contact the development team.

---

**B&B Tax and Accounting Service Limited**  
Professional Accounting Services for New Zealand Businesses  
📧 hello@bnbtax.nz  
📞 +64 9 123 4567  
🏢 Level 15, Innovation Tower, Auckland 1010
