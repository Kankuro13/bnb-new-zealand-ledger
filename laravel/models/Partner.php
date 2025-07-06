<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Partner extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'logo_url',
        'website_url',
        'description',
        'category',
        'is_featured',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    /**
     * Partner categories
     */
    const CATEGORY_SOFTWARE = 'software';
    const CATEGORY_FINANCIAL = 'financial';
    const CATEGORY_CERTIFICATION = 'certification';
    const CATEGORY_BANKING = 'banking';

    /**
     * Get all available categories
     */
    public static function getCategories(): array
    {
        return [
            self::CATEGORY_SOFTWARE => 'Software',
            self::CATEGORY_FINANCIAL => 'Financial',
            self::CATEGORY_CERTIFICATION => 'Certification',
            self::CATEGORY_BANKING => 'Banking',
        ];
    }

    /**
     * Scope for active partners only
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for featured partners only
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope for partners by category
     */
    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
    }

    /**
     * Scope for ordering by sort_order
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('name');
    }

    /**
     * Get formatted category
     */
    public function getFormattedCategoryAttribute(): string
    {
        return self::getCategories()[$this->category] ?? ucfirst($this->category);
    }

    /**
     * Get partner logo HTML
     */
    public function getLogoHtmlAttribute(): string
    {
        $html = sprintf(
            '<img src="%s" alt="%s logo" class="max-h-10 max-w-[130px] object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">',
            $this->logo_url,
            $this->name
        );

        $html .= sprintf(
            '<div class="text-center hidden items-center justify-center w-full h-full"><div class="text-sm font-semibold text-slate-700">%s</div></div>',
            $this->name
        );

        return $html;
    }

    /**
     * Get partner link HTML
     */
    public function getLinkHtmlAttribute(): string
    {
        if (!$this->website_url) {
            return $this->logo_html;
        }

        return sprintf(
            '<a href="%s" target="_blank" rel="noopener noreferrer" class="block">%s</a>',
            $this->website_url,
            $this->logo_html
        );
    }
}
