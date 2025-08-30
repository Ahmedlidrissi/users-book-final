import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import './books.css';

function CreateBook() {
    const [form, setForm] = useState({
        title: '',
        genre: '',
        description: '',
        publish_date: '',
        author: '',
        price: '',
        cover_image: null,
        book_images: [],
    });

    const handleCoverChange = (e) => {
        setForm({ ...form, cover_image: e.target.files[0] });
    };

    const handleGalleryChange = (e) => {
        const files = Array.from(e.target.files);
        setForm({ ...form, book_images: files });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('title', form.title);
        formData.append('genre', form.genre);
        formData.append('description', form.description);
        formData.append('publish_date', form.publish_date);
        formData.append('author', form.author);
        formData.append('price', form.price);
        formData.append('cover_image', form.cover_image);

        form.book_images.forEach((file, index) => {
            formData.append(`book_images[${index}]`, file);
        });

        Inertia.post('/books', formData, {
            forceFormData: true,
        });
    };

    return (
        <form className='create-book-form' onSubmit={handleSubmit} encType="multipart/form-data">
            <h1 className='text-xl font-bold'>Add Book</h1>

            <input type='text' name='title' placeholder='Title'
                onChange={(e) => setForm({ ...form, title: e.target.value })} />

            <input type='text' name='genre' placeholder='Genre'
                onChange={(e) => setForm({ ...form, genre: e.target.value })} />

            <textarea name="description" placeholder="Description" className="description-input"
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                value={form.description} />

            <input name='publish_date' type='date' placeholder='Publish Date'
                onChange={(e) => setForm({ ...form, publish_date: e.target.value })} />

            <input type='text' name='author' placeholder='Author'
                onChange={(e) => setForm({ ...form, author: e.target.value })} />

            <input type='text' name='price' placeholder='Price'
                onChange={(e) => setForm({ ...form, price: e.target.value })} />

            {/* Cover Image Upload */}
            <div className="upload">
                <label htmlFor="cover_image" className="btn-warning" style={{ cursor: "pointer" }}>
                    <i className="fa fa-upload"></i> {form.cover_image ? form.cover_image.name : "Upload Cover"}
                    <input
                        id="cover_image"
                        name="cover_image"
                        type="file"
                        style={{ display: "none" }}
                        onChange={handleCoverChange}
                    />
                </label>
            </div>

            {/* Gallery Images Upload */}
            <div className="upload">
                <label htmlFor="book_images" className="btn-warning" style={{ cursor: "pointer" }}>
                    <i className="fa fa-upload"></i> Upload Gallery Images
                    <input
                        id="book_images"
                        name="book_images"
                        type="file"
                        multiple
                        style={{ display: "none" }}
                        onChange={handleGalleryChange}
                    />
                </label>
            </div>

            <input type="submit" value="Create Book" />
        </form>
    );
}

export default CreateBook;
