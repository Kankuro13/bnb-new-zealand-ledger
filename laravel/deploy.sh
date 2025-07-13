#!/bin/bash

# B&B Tax Website Deployment Script
# This script automates the deployment process for the Laravel application

echo "🚀 Starting B&B Tax Website Deployment..."

# Exit on any error
set -e

# Configuration
PROJECT_DIR="/var/www/bnbtax"
BACKUP_DIR="/var/backups/bnbtax"
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if running as correct user
if [ "$EUID" -eq 0 ]; then 
    print_error "Please do not run this script as root"
    exit 1
fi

print_status "Deployment started at $(date)"

# 1. Create backup directory if it doesn't exist
print_status "Creating backup directory..."
mkdir -p $BACKUP_DIR

# 2. Backup current installation
if [ -d "$PROJECT_DIR" ]; then
    print_status "Creating backup of current installation..."
    sudo tar -czf "$BACKUP_DIR/backup_$TIMESTAMP.tar.gz" -C "$PROJECT_DIR" . || {
        print_error "Backup failed"
        exit 1
    }
    print_status "Backup created: backup_$TIMESTAMP.tar.gz"
fi

# 3. Pull latest changes from repository
print_status "Pulling latest changes from repository..."
cd $PROJECT_DIR
git pull origin main || {
    print_error "Git pull failed"
    exit 1
}

# 4. Install/Update Composer dependencies
print_status "Installing Composer dependencies..."
composer install --no-dev --optimize-autoloader || {
    print_error "Composer install failed"
    exit 1
}

# 5. Install/Update Node.js dependencies
print_status "Installing Node.js dependencies..."
npm ci || {
    print_error "npm install failed"
    exit 1
}

# 6. Build assets
print_status "Building production assets..."
npm run build || {
    print_error "Asset build failed"
    exit 1
}

# 7. Clear and cache Laravel configurations
print_status "Optimizing Laravel application..."
php artisan config:clear
php artisan config:cache || {
    print_error "Config cache failed"
    exit 1
}

php artisan route:clear
php artisan route:cache || {
    print_error "Route cache failed"
    exit 1
}

php artisan view:clear
php artisan view:cache || {
    print_error "View cache failed"
    exit 1
}

# 8. Run database migrations (if any)
print_status "Running database migrations..."
php artisan migrate --force || {
    print_warning "Migration failed - continuing deployment"
}

# 9. Clear application cache
print_status "Clearing application cache..."
php artisan cache:clear

# 10. Set proper permissions
print_status "Setting file permissions..."
sudo chown -R www-data:www-data storage bootstrap/cache
sudo chmod -R 775 storage bootstrap/cache

# 11. Restart services
print_status "Restarting services..."
sudo systemctl reload nginx || print_warning "Failed to reload Nginx"
sudo systemctl reload php8.1-fpm || print_warning "Failed to reload PHP-FPM"

# 12. Verify deployment
print_status "Verifying deployment..."
if curl -sSf http://localhost > /dev/null; then
    print_status "Website is responding correctly"
else
    print_error "Website verification failed"
    exit 1
fi

# 13. Clean up old backups (keep last 10)
print_status "Cleaning up old backups..."
cd $BACKUP_DIR
ls -t backup_*.tar.gz | tail -n +11 | xargs -r rm --

print_status "Deployment completed successfully at $(date)"
print_status "Backup location: $BACKUP_DIR/backup_$TIMESTAMP.tar.gz"

echo ""
echo "🎉 Deployment Summary:"
echo "   - Code updated from repository"
echo "   - Dependencies installed"
echo "   - Assets compiled"
echo "   - Laravel optimized"
echo "   - Permissions set"
echo "   - Services restarted"
echo ""
print_status "B&B Tax website is now live!"
