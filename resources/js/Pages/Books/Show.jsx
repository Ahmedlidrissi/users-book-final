import React, {useState} from "react";
import { usePage } from "@inertiajs/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './books.css';
import '../../../css/app.css';
function Show() {
    const { book } = usePage().props;
    const [descOpen, setDescOpen] = useState(false);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    // Combine cover image and gallery images for the slider
    const sliderImages = [
        { id: 'cover', image_path: book.cover_image }
    ].concat(book.gallery_images || []);

    return (
        <form className="Book-show">
            <h1 className="book-title text-5xl font-bold justify-self-center p-3">{book.title}</h1>
            <div className="h-lg">
                <Slider className="slider" {...settings} >
                    {sliderImages.map((image) => (
                        <div key={image.id} className="content-Image">
                            <img src={`/${image.image_path}`} alt={book.title} className="slider-image" />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="Book-details p-3">
                <h2 className="text-3xl font-bold p-3">
                    Author: <span className="font-semibold">{book.author}</span>
                </h2>
                <h2 className="text-3xl font-bold p-3">
                    Description:
                    <button
                        type="button"
                        onClick={() => setDescOpen((open) => !open)}
                        style={{
                            marginLeft: 10,
                            fontSize: 18,
                            background: "none",
                            border: "none",
                            color: "#007bff",
                            cursor: "pointer",
                        }}
                    >
                        {descOpen ? "Hide" : "Show"}
                    </button>
                </h2>
                {descOpen && (
                    <p className="text-lg p-3 w-[470px] h-[130px] overflow-auto">
                        {book.description}
                    </p>
                )}
                <p className="text-lg p-3">
                    <strong>Publish Date:</strong> {book.publish_date}
                </p>
                <p className="text-lg p-3">
                    <strong>Price:</strong> ${book.price}
                </p>
            </div>
        </form>
    );
}
export default Show;