<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TeamMember extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'position',
        'qualifications',
        'experience',
        'bio',
        'image_url',
        'specialties',
        'email',
        'phone',
        'linkedin_url',
        'is_featured',
        'is_active',
        'sort_order',
    ];

    protected $casts = [
        'specialties' => 'array',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    /**
     * Scope for active team members only
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for featured team members only
     */
    public function scopeFeatured($query)
    {
        return $query->where('is_featured', true);
    }

    /**
     * Scope for ordering by sort_order
     */
    public function scopeOrdered($query)
    {
        return $query->orderBy('sort_order')->orderBy('name');
    }

    /**
     * Get the team member's full name with position
     */
    public function getFullTitleAttribute(): string
    {
        return $this->name . ($this->position ? ' - ' . $this->position : '');
    }

    /**
     * Get the team member's image URL or default
     */
    public function getImageAttribute(): string
    {
        return $this->image_url ?: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80';
    }

    /**
     * Get formatted qualifications and experience
     */
    public function getCredentialsAttribute(): string
    {
        $parts = array_filter([$this->qualifications, $this->experience]);
        return implode(' • ', $parts);
    }
}
