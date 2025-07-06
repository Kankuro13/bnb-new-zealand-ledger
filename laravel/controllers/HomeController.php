<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Service;
use App\Models\TeamMember;
use App\Models\Industry;
use App\Models\Testimonial;
use App\Models\HeroSlide;
use App\Models\Partner;
use App\Models\Resource;
use Illuminate\Support\Facades\Storage;

class HomeController extends Controller
{
    /**
     * Display the homepage
     */
    public function index()
    {
        $data = [
            'heroSlides' => HeroSlide::active()->ordered()->get(),
            'featuredServices' => Service::active()->featured()->ordered()->take(9)->get(),
            'teamMembers' => TeamMember::active()->featured()->ordered()->take(4)->get(),
            'industries' => Industry::active()->ordered()->take(6)->get(),
            'testimonials' => Testimonial::active()->featured()->take(6)->get(),
            'partners' => Partner::active()->ordered()->get(),
        ];

        return view('index', $data);
    }

    /**
     * Display the about page
     */
    public function about()
    {
        $data = [
            'teamMembers' => TeamMember::active()->ordered()->get(),
            'partners' => Partner::active()->ordered()->get(),
        ];

        return view('about', $data);
    }

    /**
     * Display the services page
     */
    public function services()
    {
        $data = [
            'services' => Service::active()->ordered()->get(),
        ];

        return view('services', $data);
    }

    /**
     * Display individual service page
     */
    public function service($slug)
    {
        $service = Service::where('slug', $slug)->where('is_active', true)->firstOrFail();
        $relatedServices = Service::active()
            ->where('id', '!=', $service->id)
            ->ordered()
            ->take(3)
            ->get();

        return view('services.show', compact('service', 'relatedServices'));
    }

    /**
     * Display the industries page
     */
    public function industries()
    {
        $data = [
            'industries' => Industry::active()->ordered()->get(),
        ];

        return view('industries', $data);
    }

    /**
     * Display the team page
     */
    public function team()
    {
        $data = [
            'teamMembers' => TeamMember::active()->ordered()->get(),
        ];

        return view('team', $data);
    }

    /**
     * Display the testimonials page
     */
    public function testimonials()
    {
        $data = [
            'testimonials' => Testimonial::active()->get(),
        ];

        return view('testimonials', $data);
    }

    /**
     * Display the resources page
     */
    public function resources(Request $request)
    {
        $category = $request->get('category', 'All');
        
        $resources = Resource::active()->ordered();
        
        if ($category && $category !== 'All') {
            $resources = $resources->byCategory($category);
        }
        
        $data = [
            'resources' => $resources->get(),
            'categories' => ['All'] + Resource::getCategories(),
            'selectedCategory' => $category,
        ];

        return view('resources', $data);
    }

    /**
     * Handle resource download
     */
    public function downloadResource($slug)
    {
        $resource = Resource::where('slug', $slug)->where('is_active', true)->firstOrFail();
        
        // Increment download count
        $resource->incrementDownloadCount();
        
        if ($resource->download_url) {
            return redirect($resource->download_url);
        }
        
        if ($resource->file_path && Storage::exists($resource->file_path)) {
            return Storage::download($resource->file_path, $resource->title . '.' . strtolower($resource->file_type));
        }
        
        abort(404, 'File not found');
    }
}
