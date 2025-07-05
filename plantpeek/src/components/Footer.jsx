import React from 'react';

const Footer = () => {
    return (
        <>
            <footer className="bg-base-200 w-screen text-base-content py-10  ">
                <nav className="flex flex-col sm:flex-row justify-center items-center gap-10 flex-wrap text-sm font-medium">
                    <a className="link link-hover" href="#">Home</a>
                    <a className="link link-hover" href="#">Plant Finder</a>
                    <a className="link link-hover" href="#">Blog</a>
                    <a className="link link-hover" href="#">About Us</a>
                    <a className="link link-hover" href="#">FAQ</a>
                </nav>
                <div className="mt-10  flex flex-col items-center">
                    <img
                        src="src/assets/plantpeek_Logo.png"
                        alt="PlantPeek Logo"
                        className="h-20 w-50"
                    />
                    <p className="text-sm mb-1">Discover the beauty of plants</p>
                    <p className="text-xs text-gray-500">
                        © {new Date().getFullYear()} PlantPeek. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
export default Footer;
