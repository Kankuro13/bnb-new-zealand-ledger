<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Testimonial extends Model
{
    use HasFactory;

    protected $fillable = [
        'client_name',
        'client_position',
        'company_name',
        'testimonial',
        'rating',
        'client_image_url',
        'company_logo_url',
        'industry',
        'is_featured',
        'is_active',
        'testimonial_date',
    ];

    protected $casts = [
        'rating' => 'integer',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
        'testimonial_date' => 'date',
    ];

    /**
     * Scope for active testimonials only
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for featured testimonials only
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope for testimonials by rating
     */
    public function scopeByRating($query, $rating)
    {
        return $query->where('rating', '>=', $rating);
    }

    /**
     * Scope for testimonials by industry
     */
    public function scopeByIndustry($query, $industry)
    {
        return $query->where('industry', $industry);
    }

    /**
     * Get the client's full details
     */
    public function getClientFullDetailsAttribute(): string
    {
        $details = $this->client_name;
        
        if ($this->client_position && $this->company_name) {
            $details .= ', ' . $this->client_position . ' at ' . $this->company_name;
        } elseif ($this->client_position) {
            $details .= ', ' . $this->client_position;
        } elseif ($this->company_name) {
            $details .= ', ' . $this->company_name;
        }
        
        return $details;
    }

    /**
     * Get star rating as HTML
     */
    public function getStarRatingAttribute(): string
    {
        $stars = '';
        for ($i = 1; $i <= 5; $i++) {
            if ($i <= $this->rating) {
                $stars .= '<i class="text-yellow-400 fill-current">★</i>';
            } else {
                $stars .= '<i class="text-gray-300">★</i>';
            }
        }
        return $stars;
    }

    /**
     * Get shortened testimonial
     */
    public function getShortTestimonialAttribute(): string
    {
        return \Str::limit($this->testimonial, 150);
    }

    /**
     * Get the client's image URL or default
     */
    public function getClientImageAttribute(): string
    {
        return $this->client_image_url ?: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
    }
}
