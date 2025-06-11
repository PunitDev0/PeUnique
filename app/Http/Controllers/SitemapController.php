<?php

namespace App\Http\Controllers;

use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;

class SitemapController extends Controller
{
    public function index()
    {
        $sitemap = Sitemap::create()
            ->add(Url::create('https://www.peunique.com/')
                ->setLastModificationDate(now()->subDays(30))
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(1.0))
            ->add(Url::create('https://www.peunique.com/ecommerce')
                ->setLastModificationDate(now()->subDays(15))
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.8))
            ->add(Url::create('https://www.peunique.com/education')
                ->setLastModificationDate(now()->subDays(15))
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
                ->setPriority(0.8))
            ->add(Url::create('https://www.peunique.com/about')
                ->setLastModificationDate(now()->subDays(30))
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
                ->setPriority(0.6))
            ->add(Url::create('https://www.peunique.com/careers')
                ->setLastModificationDate(now()->subDays(7))
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.7))
            ->add(Url::create('https://www.peunique.com/contact')
                ->setLastModificationDate(now()->subDays(30))
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
                ->setPriority(0.6))
            ->add(Url::create('https://www.peunique.com/blog')
                ->setLastModificationDate(now()->subDays(7))
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_WEEKLY)
                ->setPriority(0.9))
            ->add(Url::create('https://www.peunique.com/login')
                ->setLastModificationDate(now()->subDays(30))
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
                ->setPriority(0.5))
            ->add(Url::create('https://www.peunique.com/signup')
                ->setLastModificationDate(now()->subDays(30))
                ->setChangeFrequency(Url::CHANGE_FREQUENCY_YEARLY)
                ->setPriority(0.5));

        return $sitemap->toResponse(request());
    }
}