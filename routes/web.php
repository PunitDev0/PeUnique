<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome');
});
Route::get('/login', function () {
    return Inertia::render('Auth/Login');
});
Route::get('/signup', function () {
    return Inertia::render('Auth/Register');
});
Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});
Route::get('/ecommerce', function () {
    return Inertia::render('Ecommerce');
});
Route::get('/education', function () {
    return Inertia::render('Education');
});
Route::get('/blog', function () {
    return Inertia::render('Blog');
});


