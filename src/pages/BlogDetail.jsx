import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const BlogDetail = () => {
    const { state } = useLocation();
    const blog = state?.blog;
    const navigate = useNavigate();

    if (!blog) {
        return (
            <div className="p-6 text-center text-red-500">
                No blog data found. Please go back and select a blog.
                <br />
                <button onClick={() => navigate(-1)} className="text-blue-600 underline mt-4">
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8 relative">
            <button
                onClick={() => navigate(-1)}
                className="absolute top-4 left-4 flex items-center text-green-600 hover:text-green-800 transition-colors"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                        fillRule="evenodd"
                        d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                        clipRule="evenodd"
                    />
                </svg>
                Back to Blogs
            </button>

            <div className="mt-10">
                <h1 className="text-4xl font-bold text-green-700 mb-2">{blog.title}</h1>
                <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-96 object-cover rounded mb-6"
                />
                <p className="text-gray-800 leading-relaxed whitespace-pre-line text-justify">
                    {blog.content || blog.desc}
                </p>
            </div>
        </div>
    );
};

export default BlogDetail;