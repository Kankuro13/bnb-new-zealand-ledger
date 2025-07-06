<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\Attribute;

class Resource extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'slug',
        'description',
        'icon',
        'file_type',
        'file_size',
        'file_path',
        'download_url',
        'category',
        'color_class',
        'download_count',
        'is_featured',
        'is_active',
        'sort_order',
        'meta_title',
        'meta_description',
    ];

    protected $casts = [
        'download_count' => 'integer',
        'is_featured' => 'boolean',
        'is_active' => 'boolean',
    ];

    /**
     * Scope for active resources only
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Scope for featured resources only
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
        return $query->orderBy('sort_order', 'asc')->orderBy('created_at', 'desc');
    }

    /**
     * Scope for filtering by category
     */
    public function scopeByCategory($query, $category)
    {
        return $query->where('category', $category);
    }

    /**
     * Get the download URL for this resource
     */
    public function getDownloadUrlAttribute($value)
    {
        if ($value) {
            return $value;
        }
        
        if ($this->file_path) {
            return asset('storage/' . $this->file_path);
        }
        
        return null;
    }

    /**
     * Increment download count
     */
    public function incrementDownloadCount()
    {
        $this->increment('download_count');
    }

    /**
     * Get all available categories
     */
    public static function getCategories()
    {
        return [
            'Tax & Compliance',
            'Templates',
            'Guides',
            'Training'
        ];
    }

    /**
     * Get formatted file size
     */
    public function getFormattedFileSizeAttribute()
    {
        return $this->file_size;
    }

    /**
     * Check if resource has file
     */
    public function hasFile()
    {
        return !empty($this->file_path) || !empty($this->download_url);
    }
}
