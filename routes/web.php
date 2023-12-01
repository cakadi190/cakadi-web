<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

require __DIR__.'/web/testing.php';
require __DIR__.'/web/dashboard/home.php';
require __DIR__.'/web/dashboard/profile.php';
require __DIR__.'/web/auth.php';

Route::get('/', [\App\Http\Controllers\home\HomeController::class, 'index'])->name('home');
Route::get('/about', [\App\Http\Controllers\home\HomeController::class, 'about'])->name('about');
Route::get('/contact', [\App\Http\Controllers\home\ContactController::class, 'index'])->name('contact');
Route::get('/sitemap', [\App\Http\Controllers\home\HomeController::class, 'sitemap'])->name('sitemap');

Route::prefix('/portofolio')->group(function() {
    Route::get('/', [\App\Http\Controllers\home\PortofolioController::class, 'index'])->name('portofolio.index');
    Route::get('/{slug}', [\App\Http\Controllers\home\PortofolioController::class, 'show'])->name('portofolio.show');
});

