<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return inertia('Home');
});

Route::middleware(['guest'])->group(function () {
    Route::get('/register', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'showRegisterForm'])
        ->name('register');
    Route::post('/register', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'register'])
        ->name('register.store');

    Route::get('/login', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'showLoginForm'])
        ->name('login');
    Route::post('/login', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'login'])
        ->name('login.store');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [App\Http\Controllers\DashboardController::class, 'index'])
        ->name('dashboard.index');
    Route::get('/dashboard/{id}', [App\Http\Controllers\DashboardController::class, 'show'])
        ->name('dashboard.show');

    Route::post('/logout', [App\Http\Controllers\Auth\AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');
});