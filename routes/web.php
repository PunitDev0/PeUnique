<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome',[
        'meta' => [
            'title' => 'Best Payment Gateway API Provider in Noida',
            'description' => 'Your trusted partner for online payments in Noida.',
        ],
    ]);
});
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});
Route::get('/signup', function () {
    return Inertia::render('Auth/Register');
});
Route::get('/about', function () {
    return Inertia::render('About',[
        'meta' => [
            'title' => 'Best Payment Gateway Provider in India | About Us',
            'description' => 'PeUnique offers secure, seamless payment solutions for businesses with UPI, cards, QR payments, and more. Fast and hassle-free transactions.',
        ],
    ]);
});
Route::get('/contact', function () {
    return Inertia::render('Contact',[
        'meta' => [
            'title' => 'PeUnique Support',
            'description' => 'We are here to assist you with all your payment-related needs. Contact our dedicated support team for a smooth and hassle-free experience.',
        ],
    ]);
});
Route::get('/ecommerce', function () {
    return Inertia::render('Ecommerce',[
        'meta' => [
            'title' => 'Best E-Commerce Payment Gateway System Provider in India',
            'description' => 'Simplify Digital Payments With An Advanced E-Commerce Payment Gateway, Supporting credit cards, UPI, Banking and Wallets for Smooth Transactions.',
        ],
    ]);
});
Route::get('/education', function () {
    return Inertia::render('Education',[
        'meta' => [
            'title' => 'Best Payment Gateway Solution For Education Sector in India',
            'description' => '"Online fee Payment Solutions for schools, colleges, and educational institutions with 150+ Payment Modes including UPI, cards, net banking, and wallets.',
        ],
    ]);
});
Route::get('/blog', function () {
    return Inertia::render('Blog',[
        'meta' => [
            'title' => '',
            'description' => '',
        ],
    ]);
});


