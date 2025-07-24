import React from "react";
import { useNavigate } from "react-router-dom";
import blogData from "../data/blogData.json";

const BlogPage = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen">
            <div className="relative w-full h-70">
                <img
                    src="./public/assets/blog_bg.jpg"
                    alt="Background"
                    className="w-full h-full object-cover absolute inset-0 z-0"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="bg-white/30 backdrop-blur-sm p-8 rounded-xl shadow-md text-center w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white">BLOG</h1>
                        <p className="text-md text-white mt-4">
                            Tips and insights every plant lover needs to grow and thrive.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-15 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
                    {blogData.map((post, idx) => (
                        <div
                            key={idx}
                            className="rounded-tl-4xl rounded-br-4xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
                            onClick={() => navigate("/blog-detail", { state: { blog: post } })}
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4 space-y-2">
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                                <p className="text-sm text-gray-600 line-clamp-4 whitespace-pre-line">
                                    {post.desc || post.content?.slice(0, 150) + "..."}
                                </p>
                                <span className="text-green-700 font-semibold hover:underline">Read more →</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full bg-green-900 h-1"></div>
        </div>
    );
};

export default BlogPage;