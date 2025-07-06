<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class HeroSlide extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'subtitle',
        'description',
        'background_image_url',
        'featured_image_url',
        'features',
        'primary_cta_text',
        'primary_cta_url',
        'secondary_cta_text',
        'secondary_cta_url',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'features' => 'array',
        'is_active' => 'boolean',
    ];

    /**
     * Scope for active slides only
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for ordering by sort_order
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order');
    }

    /**
     * Get the slide's primary CTA button HTML
     */
    public function getPrimaryCTAButtonAttribute(): string
    {
        if (!$this->primary_cta_text || !$this->primary_cta_url) {
            return '';
        }

        return sprintf(
            '<a href="%s" class="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 inline-flex items-center justify-center group">%s<i data-lucide="arrow-right" class="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"></i></a>',
            $this->primary_cta_url,
            $this->primary_cta_text
        );
    }

    /**
     * Get the slide's secondary CTA button HTML
     */
    public function getSecondaryCTAButtonAttribute(): string
    {
        if (!$this->secondary_cta_text || !$this->secondary_cta_url) {
            return '';
        }

        return sprintf(
            '<a href="%s" class="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold px-8 py-4 rounded-full transition-all duration-300 inline-flex items-center justify-center">%s</a>',
            $this->secondary_cta_url,
            $this->secondary_cta_text
        );
    }

    /**
     * Get features as HTML list
     */
    public function getFeaturesListAttribute(): string
    {
        if (!$this->features || !is_array($this->features)) {
            return '';
        }

        $html = '';
        foreach ($this->features as $feature) {
            if (isset($feature['icon']) && isset($feature['text'])) {
                $html .= sprintf(
                    '<div class="flex items-center space-x-3 text-white"><div class="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0"><i data-lucide="%s" class="w-4 h-4 text-accent"></i></div><span class="text-sm font-medium">%s</span></div>',
                    $feature['icon'],
                    $feature['text']
                );
            }
        }

        return $html;
    }

    /**
     * Get slide background style
     */
    public function getBackgroundStyleAttribute(): string
    {
        return sprintf(
            'background-image: url(\'%s\'); background-size: cover; background-position: center; background-repeat: no-repeat;',
            $this->background_image_url
        );
    }
}
