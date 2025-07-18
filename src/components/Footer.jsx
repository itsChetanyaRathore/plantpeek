import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
    const navigate = useNavigate();

    return (
        <>
            <footer className="bg-base-200 w-screen text-base-content py-10">
                <div className="mt-2 flex flex-col items-center">
                    <img
                        src="src/assets/PlantPeek_logo.png"
                        alt="PlantPeek Logo"
                        className="h-30 w-40"
                    />
                    <p className="text-sm mb-1">Discover the beauty of plants</p>
                </div>

                <div className="w-md h-0.5 bg-gray-300 mx-auto my-4 rounded-full"></div>

                <nav className="flex flex-col sm:flex-row justify-center items-center gap-10 flex-wrap text-sm font-medium py-5">
                    <button className="link link-hover" onClick={() => navigate("/")}>Home</button>
                    <button className="link link-hover" onClick={() => navigate("/categories")}>Categories</button>
                    <button className="link link-hover" onClick={() => navigate("/blog")}>Blog</button>
                    <button className="link link-hover" onClick={() => navigate("/about")}>About Us</button>
                    <button className="link link-hover" onClick={() => navigate("/faq")}>FAQ</button>
                </nav>

                <p className="text-xs text-gray-500 mt-2 flex flex-col items-center">
                    © {new Date().getFullYear()} PlantPeek. All rights reserved.
                </p>
            </footer>
        </>
    );
};

export default Footer;
