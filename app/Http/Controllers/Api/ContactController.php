<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMail;
use Illuminate\Support\Facades\Validator;
use Inertia\Inertia;

class ContactController extends Controller
{
    public function sendMessage(Request $request)
    {
        // Validate request
        $validator = Validator::make($request->all(), [
            'name'    => 'required|string|max:255',
            'email'   => 'required|email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string|min:10',
        ]);

        if ($validator->fails()) {
            return back()->withErrors($validator)->withInput();
        }

        try {
            // Send email
            Mail::to(config('mail.from.address')) // admin email
                ->send(new ContactMail($request->all()));

            return back()->with('success', 'Message sent successfully!');

        } catch (\Exception $e) {
            return back()->withErrors([
                'mail' => 'Failed to send message: ' . $e->getMessage()
            ]);
        }
    }
}
