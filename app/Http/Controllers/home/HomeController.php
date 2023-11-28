<?php

namespace App\Http\Controllers\home;

use App\Http\Controllers\Controller;
use App\Models\Portofolio;
use Illuminate\Support\Facades\Mail;

class HomeController extends Controller
{
    /**
     * Show the home page.
     *
     * @return \Inertia\Response
     */
    public function index(): \Inertia\Response
    {
        $portofolio = Portofolio::with('category', 'gallery')->latest()
            ->take(6)->get();

        return inertia('index',
            compact('portofolio')
        )->withViewData([
            'title' => 'Fullstack Developer',
            'pageDescription' => 'Halo rek! Kenalin, namaku Cak Adi yang mana merupakan seorang Full Stack Website Developer yang berdomisili di Kota Ngawi, Jawa Timur.',
        ]);
    }

    /**
     * Test the email functionality.
     *
     * @return void | string
     */
    public function testEmail(): string
    {
        $user = \App\Models\User::find(1);
        Mail::to($user->email ?? 'cakadi190@gmail.com')->send(new \App\Mail\TestEmail());
        return "Test email sent!";
    }
}
