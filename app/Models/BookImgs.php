<?php

namespace App\Models;

use App\Models\Books;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class BookImgs extends Model
{
    /** @use HasFactory<\Database\Factories\BookImgsFactory> */
    use HasFactory;
    protected $fillable = [
        'book_id',
        'image_path',
    ];
    function book()
    {
        return $this->belongsTo(Books::class, 'book_id');
    }
}
