<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    /** @use HasFactory<\Database\Factories\BooksFactory> */
    use HasFactory;
    protected $fillable = [
        'title',
        'genre',
        'description',
        'publish_date',
        'author',
        'price',
        'cover_image',
    ];
    function bookImgs()
    {
        return $this->hasMany(BookImgs::class, 'book_id');
    }

}
