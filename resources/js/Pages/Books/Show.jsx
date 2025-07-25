import React from "react";
import { usePage } from "@inertiajs/react";

function Show() {
    const { book } = usePage().props;

    return (
        <div className="Book-details">
            <h1>{book.title}</h1>
            <img src={`/${book.cover_image}`} alt={book.title} style={{maxWidth: 200}} />
            <p><strong>Author:</strong> {book.author}</p>
            <p><strong>Genre:</strong> {book.genre}</p>
            <p><strong>Description:</strong> {book.description}</p>
            <p><strong>Publish Date:</strong> {book.publish_date}</p>
            <p><strong>Price:</strong> ${book.price}</p>
        </div>
    );
}
export default Show;