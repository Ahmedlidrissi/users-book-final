<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Books;
use App\Models\BookImgs;
use App\Http\Requests\StoreBooksRequest;
use App\Http\Requests\UpdateBooksRequest;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $book = Books::latest()->get();
        // If you want to include related images, you can use eager loading
        // $book = Books::with('images')->latest()->get();
        return Inertia::render('Books/Index', ['books' =>$book]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Books/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
public function store(StoreBooksRequest $request)
{
    $validated = $request->validated();

    // Handle cover image
    if ($request->hasFile('cover_image')) {
        $path = $request->file('cover_image')->store('covers', 'public');
        $validated['cover_image'] = $path;
    }

    // Create the book
    $book = Books::create($validated);

    // Handle gallery images
    if ($request->hasFile('book_images')) {
        foreach ($request->file('book_images') as $image) {
            $imagePath = $image->store('book_images', 'public');
            \App\Models\BookImgs::create([
                'book_id' => $book->id,
                'image_path' => $imagePath,
            ]);
        }
    }

    return Inertia::location(route('books.index'));
}


    /**
     * Display the specified resource.
     */
    public function show(Books $book)
    {
        $book->load('galleryImages');
        // Format images for frontend
        $book->image_path = $book->galleryImages->map(function($img) {
            return [
                'id' => $img->id,
                'image_path' => 'storage/' . $img->image_path,
            ];
        })->toArray();

        return Inertia::render('Books/Show', ['book' => $book]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Books $book)
    {
        return Inertia::render('Books/Edit', ['book' => $book]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateBooksRequest $request, Books $book)
    {
        $validated = $request->validated();
        if ($request->hasFile('cover_image')) {
            $path = $request->file('cover_image')->store('covers', 'public');
            $validated['cover_image'] = $path;
        }
        $book->update($validated);
        return Inertia::location(route('books.index'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Books $book)
    {
        $book->delete();
        return Inertia::location(route('books.index'));
    }
}
