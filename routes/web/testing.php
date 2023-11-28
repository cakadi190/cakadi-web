<?php

use Illuminate\Support\Facades\Route;

Route::prefix('testing')->middleware('mode:local,production')->group(function() {
    Route::get('email', [\App\Http\Controllers\home\HomeController::class, 'testEmail'])->name('testing.email');
});
