#!/bin/bash

# B&B Tax Website Development Build Script
# Quick setup script for local development

echo "🏗️  Setting up B&B Tax Website for development..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if we're in the Laravel directory
if [ ! -f "artisan" ]; then
    print_error "Please run this script from the Laravel project root directory"
    exit 1
fi

# 1. Copy environment file if it doesn't exist
if [ ! -f ".env" ]; then
    print_status "Creating environment file..."
    cp .env.example .env
else
    print_warning ".env file already exists - skipping"
fi

# 2. Install Composer dependencies
print_status "Installing PHP dependencies..."
if command -v composer &> /dev/null; then
    composer install
else
    print_error "Composer not found. Please install Composer first."
    exit 1
fi

# 3. Generate application key
print_status "Generating application key..."
php artisan key:generate

# 4. Install Node.js dependencies
print_status "Installing Node.js dependencies..."
if command -v npm &> /dev/null; then
    npm install
else
    print_error "npm not found. Please install Node.js first."
    exit 1
fi

# 5. Build assets for development
print_status "Building development assets..."
npm run dev

# 6. Create storage link (if needed)
if [ ! -L "public/storage" ]; then
    print_status "Creating storage link..."
    php artisan storage:link
fi

# 7. Set up database (optional)
read -p "Do you want to set up the database? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    print_status "Running database migrations..."
    php artisan migrate
    
    read -p "Do you want to seed the database with sample data? (y/N): " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        print_status "Seeding database..."
        php artisan db:seed
    fi
fi

# 8. Clear caches
print_status "Clearing application caches..."
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan route:clear

print_status "Development setup completed!"
echo ""
echo "🎉 Your B&B Tax website is ready for development!"
echo ""
echo "Next steps:"
echo "1. Configure your database settings in .env"
echo "2. Run 'php artisan serve' to start the development server"
echo "3. Run 'npm run dev' in another terminal for asset watching"
echo ""
echo "Access your site at: http://localhost:8000"
echo ""
print_status "Happy coding! 🚀"
