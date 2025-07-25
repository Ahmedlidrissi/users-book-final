import { Link } from "@inertiajs/react";
import React from "react";
import NaveBar from "./Layouts/Menu";
import Footer from "./Layouts/Footer";
function DefaultLayout({ children}) {
    return (
        <>
            <NaveBar />
            <article>
                { children }
            </article>
            <Footer />
        </>
    );
}

export default DefaultLayout;