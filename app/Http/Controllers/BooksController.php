<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Books;
use App\Http\Requests\StoreBooksRequest;
use App\Http\Requests\UpdateBooksRequest;

class BooksController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // $book = Books::latest()->get();
        // If you want to include related images, you can use eager loading
        $book = Books::with('bookImgs')->latest()->get();
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
        ddd($request->all());
        $validated = $request->validated();

        // Handle cover image upload
        if ($request->hasFile('cover_image')) {
            $validated['cover_image'] = $request->file('cover_image')->store('covers', 'public');
        }
        if ($request->hasFile('book_imgs')) {
            foreach ($request->file('book_imgs') as $image) {
                $path = $image->store('book_images', 'public');
                \App\Models\BookImgs::create([
                    'book_id' => $book->id,
                    'image_path' => $path,
                ]);
            }
        }
        $book = Books::create($validated);

        return Inertia::location(route('books.index'));
        dd($request->all());
    }

    /**
     * Display the specified resource.
     */
    public function show(Books $book)
    {
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
