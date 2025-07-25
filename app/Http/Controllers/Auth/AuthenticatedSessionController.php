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
        $validated = $request->validated();
        if ($request->hasFile('profilepicture')) {
            $validated['profilepicture'] = $request->file('profilepicture')->store('profile_pictures', 'public');
        }
        $validated['password'] = Hash::make($validated['password']);
        $user = User::create($validated);
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

    public function logout(Request $request) : RedirectResponse
    {
        Auth()->logout();

        return redirect('/');
    }
    public function destroy(Request $request) : RedirectResponse
    {
        $user = Auth::user();
        if ($user) {
            $user->delete();
            Auth::logout();
        }
        return redirect('/')->with('success', 'Your account has been deleted.');
        }

    public function Index(Request $request, $id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Dashboard/Show', ['user' => $user]);
    }
}