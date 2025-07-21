import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="w-full bg-base-100 shadow-md sticky top-0 z-50 px-4 py-2">
            <div className="flex items-center justify-between max-w-7xl mx-auto">
                <img
                    src="src/assets/PlantPeek_logo.png"
                    alt="PlantPeek Logo"
                    className="w-28 h-22 border-gray-500"
                />
                <div role="tablist" className="tabs text-black font-semibold gap-10">
                    <div className={`tab ${isActive("/") ? "tab-active" : ""}`} onClick={() => navigate("/")}>
                        Home
                    </div>
                    <div className={`tab ${isActive("/categories") ? "tab-active" : ""}`} onClick={() => navigate("/categories")}>
                        Categories
                    </div>
                    <div className={`tab ${isActive("/care-tips") ? "tab-active" : ""}`} onClick={() => navigate("/care-tips")}>
                        Care Tips
                    </div>
                    <div className={`tab ${isActive("/about") ? "tab-active" : ""}`} onClick={() => navigate("/about")}>
                        About Us
                    </div>
                    <div className={`tab ${isActive("/blog") ? "tab-active" : ""}`} onClick={() => navigate("/blog")}>
                        Blog
                    </div>
                    <div className={`tab ${isActive("/faq") ? "tab-active" : ""}`} onClick={() => navigate("/faq")}>
                        FAQ
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
