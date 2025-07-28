<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class BookImgs extends Model
{
    /** @use HasFactory<\Database\Factories\BookImgsFactory> */
    use HasFactory;
    protected $fillable = [
        'book_id',
        'image_path',
    ];
}
