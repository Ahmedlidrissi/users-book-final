<?php

namespace App\Http\Controllers;

use App\Models\BookImgs;
use App\Http\Requests\StoreBookImgsRequest;
use App\Http\Requests\UpdateBookImgsRequest;

class BookImgsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
public function store(Request $request, $bookId)
{
    $request->validate([
        'images.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',
    ]);

    foreach ($request->file('images') as $image) {
        $path = $image->store('book_images', 'public');

        BookImg::create([
            'book_id' => $bookId,
            'image_path' => $path,
        ]);
    }
    return redirect()->back()->with('success', 'Images uploaded successfully.');
}


    /**
     * Display the specified resource.
     */
    public function show(BookImgs $bookImgs)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(BookImgs $bookImgs)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBookImgsRequest $request, BookImgs $bookImgs)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(BookImgs $bookImgs)
    {
        //
    }
}
