<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreBooksRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
        'title' => 'required|string',
        'genre' => 'required|string',
        'description' => 'required',
        'publish_date' => 'required|string|date',
        'author' => 'required|string',
        'price' => 'required|numeric',
        'cover_image' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        'book_imgs' => 'required|array|min:1', // Require at least one image
        'book_imgs.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048', // Each must be an image
        ];
    }
}
