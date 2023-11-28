<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
Route::get('/', [\App\Http\Controllers\home\HomeController::class, 'index'])->name('home');
Route::get('/about', [\App\Http\Controllers\home\HomeController::class, 'about'])->name('about');
Route::get('/contact', [\App\Http\Controllers\home\ContactController::class, 'index'])->name('contact');

Route::prefix('/portofolio')->group(function() {
    Route::get('/', [\App\Http\Controllers\home\PortofolioController::class, 'index'])->name('portofolio.index');
    Route::get('/{slug}', [\App\Http\Controllers\home\PortofolioController::class, 'show'])->name('portofolio.show');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/web/testing.php';
require __DIR__.'/web/auth.php';

