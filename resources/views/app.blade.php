<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <title> Best Payment Gateway API Provider in Noida </title> -->
    <meta name="keywords" content="Payment Gateway in India, E-Commerce and Education Payment Gateway">
    <link rel="canonical" href="https://www.peunique.com"/>
    <link rel="alternate" href="https://www.peunique.com"/>
    <meta name="Geography" content="Peunique Payment Solution Pvt Ltd , A 43, A Block, Sector 63 Road,
Sector 63- UP 201301"/>
    <meta name="Language" content="English"/>
    <meta name="author" content="Peunique Payment Solution Pvt Ltd"/>
    <meta https-equiv="Expires" content="never"/>
    <meta https-equiv="CACHE-CONTROL" content="PUBLIC"/>
    <meta https-equiv="PRAGMA" content="NO-CACHE"/>
    <meta name="Copyright" content="https://www.peunique.com"/>
    <meta name="Designer" content="https://www.peunique.com"/>
    <meta name="Publisher" content="https://www.peunique.com"/>
    <meta name="Revisit-After" content="perday/everyday/allday"/>
    <meta name="distribution" content="Global"/>
    <meta name="Robots" content="INDEX,FOLLOW"/>
    <meta name="YahooSeeker" content="INDEX, FOLLOW"/>
    <meta name="msnbot" content="INDEX, FOLLOW"/>
    <meta name="googlebot" content="INDEX, FOLLOW"/>
    <link rel="shortcut icon" href="https://www.peunique.com/assets/img/logo.png" type="image/x-icon">
   
        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
