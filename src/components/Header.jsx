import React from 'react';

const Header = () => {
    return (
        <>
            <div className="w-full bg-base-100 shadow-md sticky top-0 z-50 px-4 py-2">
                <div className="flex items-center justify-between max-w-7xl mx-auto">
                    <img
                        src="src/assets/plantpeek_Logo.png"
                        alt="PlantPeek Logo"
                        className="h-16 w-auto"
                    />
                    <div role="tablist" className="tabs text-black font-semibold gap-10">
                        <a role="tab" className="tab tab-active">Home</a>
                        <a role="tab" className="tab">Plant Finder</a>
                        <a role="tab" className="tab">Blog</a>
                        <a role="tab" className="tab">About Us</a>
                        <a role="tab" className="tab">FAQ</a>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;