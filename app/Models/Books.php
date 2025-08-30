<?php

namespace App\Models;

use App\Models\BookImgs;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

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
    public function galleryImages()
    {
        return $this->hasMany(\App\Models\BookImgs::class, 'book_id');
    }

}
