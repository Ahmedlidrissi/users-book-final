import React, { useState } from "react";
import { usePage } from '@inertiajs/react';
import { Inertia } from "@inertiajs/inertia";

function Edit() {
    const { book } = usePage().props;
    const [form, setForm] = useState({
        title: book.title,
        genre: book.genre,
        description: book.description,
        publish_date: book.publish_date,
        author: book.author,
        price: book.price,
        cover_image: null,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', form.title);
        formData.append('genre', form.genre);
        formData.append('description', form.description);
        formData.append('publish_date', form.publish_date);
        formData.append('author', form.author);
        formData.append('price', form.price);
        if (form.cover_image) {
            formData.append('cover_image', form.cover_image);
        }
        formData.append('_method', 'PUT');
        Inertia.post(`/books/${book.id}`, formData, {
            forceFormData: true,
        });
    };

    return (
        <form className="edit-book-form" onSubmit={handleSubmit}>
            <h1>Edit Book</h1>
            <input type="text" name="title" id="title" value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} />
            <input type="text" name="genre" id="genre" value={form.genre} onChange={e => setForm({ ...form, genre: e.target.value })} />
            <textarea name="description" id="description" value={form.description} onChange={e => setForm({ ...form, description: e.target.value })}></textarea>
            <input type="date" name='publish_date' id='publish_date' value={form.publish_date} onChange={e => setForm({ ...form, publish_date: e.target.value })} />
            <input type="text" name='author' id="author" value={form.author} onChange={e => setForm({ ...form, author: e.target.value })} />
            <input type="text" name="price" id="price" value={form.price} onChange={e => setForm({ ...form, price: e.target.value })} />
            <input
                type="file"
                name="cover_image"
                id="cover_image"
                onChange={e => setForm({ ...form, cover_image: e.target.files[0] })}
            />
            <input type="submit" value="Update Book" />
        </form>
    );
}

export default Edit;