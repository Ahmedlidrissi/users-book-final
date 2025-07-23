<?php

namespace App\Http\Controllers\Auth;

use App\Models\User;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\RedirectResponse;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;


class AuthenticatedSessionController extends Controller
{
    public function showRegisterForm(Request $request) : Response
    {
        return Inertia::render('Auth/Register', [
            'user' => new User(),
            'errors' => session('errors'),
            'success' => session('success'),
        ]);
    }
    public function register(RegisterRequest $request) : RedirectResponse
    {
        $data = $request->validated();
        if ($request->hasFile('profilepicture')) {
            $data['profilepicture'] = $request->file('profilepicture')->store('profile_pictures', 'public');
        }
        $data['password'] = Hash::make($data['password']);
        $user = User::create($data);
        Auth::login($user);
        return redirect()->route('login')->with('success', 'Registration successful. Please log in.');
    }
    public function showLoginForm(Request $request) : Response
    {
        return Inertia::render('Auth/Login');
    }

    public function login(LoginRequest $request) : RedirectResponse
    {
        $request->validate([]);

        if (! auth()->attempt($request->only('email', 'password'))) {
            return back()->withErrors([
                'email' => 'The provided credentials do not match our records.',
            ]);
        }

        return redirect()->intended('/');
  }
  
    public function destroy(Request $request) : RedirectResponse
    {
        Auth()->logout();

        return redirect('/');
    }
}