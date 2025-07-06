<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Service;
use App\Models\TeamMember;
use App\Models\Industry;
use App\Models\Testimonial;
use App\Models\HeroSlide;
use App\Models\Partner;
use App\Models\Resource;
use Illuminate\Http\JsonResponse;

class ApiController extends Controller
{
    /**
     * Get all active services
     */
    public function services(): JsonResponse
    {
        $services = Service::active()->ordered()->get();
        return response()->json($services);
    }

    /**
     * Get all active team members
     */
    public function teamMembers(): JsonResponse
    {
        $teamMembers = TeamMember::active()->ordered()->get();
        return response()->json($teamMembers);
    }

    /**
     * Get all active industries
     */
    public function industries(): JsonResponse
    {
        $industries = Industry::active()->ordered()->get();
        return response()->json($industries);
    }

    /**
     * Get all active testimonials
     */
    public function testimonials(): JsonResponse
    {
        $testimonials = Testimonial::active()->get();
        return response()->json($testimonials);
    }

    /**
     * Get all active hero slides
     */
    public function heroSlides(): JsonResponse
    {
        $heroSlides = HeroSlide::active()->ordered()->get();
        return response()->json($heroSlides);
    }

    /**
     * Get all active partners
     */
    public function partners(): JsonResponse
    {
        $partners = Partner::active()->ordered()->get();
        return response()->json($partners);
    }

    /**
     * Get featured services for homepage
     */
    public function featuredServices(): JsonResponse
    {
        $services = Service::active()->featured()->ordered()->take(9)->get();
        return response()->json($services);
    }

    /**
     * Get featured team members for homepage
     */
    public function featuredTeamMembers(): JsonResponse
    {
        $teamMembers = TeamMember::active()->featured()->ordered()->take(4)->get();
        return response()->json($teamMembers);
    }

    /**
     * Get featured testimonials for homepage
     */
    public function featuredTestimonials(): JsonResponse
    {
        $testimonials = Testimonial::active()->featured()->take(6)->get();
        return response()->json($testimonials);
    }

    /**
     * Get all active resources
     */
    public function resources(): JsonResponse
    {
        $resources = Resource::active()->ordered()->get();
        return response()->json($resources);
    }

    /**
     * Get resources by category
     */
    public function resourcesByCategory($category): JsonResponse
    {
        $resources = Resource::active()->byCategory($category)->ordered()->get();
        return response()->json($resources);
    }

    /**
     * Get featured resources for homepage
     */
    public function featuredResources(): JsonResponse
    {
        $resources = Resource::active()->featured()->ordered()->take(6)->get();
        return response()->json($resources);
    }

    /**
     * Get resource categories
     */
    public function resourceCategories(): JsonResponse
    {
        $categories = Resource::getCategories();
        return response()->json($categories);
    }
}
