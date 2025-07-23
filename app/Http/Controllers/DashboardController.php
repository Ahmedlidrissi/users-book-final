<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Dashboard/Index', ['user' => $user]);
    }
    public function show(Request $request, $id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('Dashboard/Show', ['user' => $user]);
    }
}
    
