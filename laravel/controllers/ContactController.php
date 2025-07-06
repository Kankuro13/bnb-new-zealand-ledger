<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactSubmission;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Display the contact page
     */
    public function index()
    {
        return view('contact');
    }

    /**
     * Store a new contact submission
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'company' => 'nullable|string|max:255',
            'service_interest' => 'nullable|string|max:255',
            'message' => 'required|string|max:2000',
        ]);

        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $contactSubmission = ContactSubmission::create([
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'company' => $request->company,
            'service_interest' => $request->service_interest,
            'message' => $request->message,
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        // Send notification email to admin
        $this->sendAdminNotification($contactSubmission);

        // Send confirmation email to customer
        $this->sendCustomerConfirmation($contactSubmission);

        return redirect()->back()
            ->with('success', 'Thank you for your message! We will get back to you within 24 hours.');
    }

    /**
     * Send notification email to admin
     */
    private function sendAdminNotification(ContactSubmission $submission)
    {
        // Implementation would depend on your mail setup
        // Mail::to(config('mail.admin_email'))->send(new ContactSubmissionNotification($submission));
    }

    /**
     * Send confirmation email to customer
     */
    private function sendCustomerConfirmation(ContactSubmission $submission)
    {
        // Implementation would depend on your mail setup
        // Mail::to($submission->email)->send(new ContactSubmissionConfirmation($submission));
    }
}
