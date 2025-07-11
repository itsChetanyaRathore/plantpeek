import React from "react";

const BlogPage = () => {
    const posts = [
        {
            title: "The Peace Lily: NASA's Little Air-Purifying Superstar",
            date: "31 Mar 2021",
            image: "https://via.placeholder.com/600x400?text=Garden+Plants",
            desc: "Explore a curated list of 10 stunning garden plants—from roses to crotons—that fit any garden size.",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-garden-plants-for-your-collection"
        },
        {
            title: "Top 10 Must-have Fruit Plants For Your Garden",
            date: "15 Mar 2021",
            image: "https://via.placeholder.com/600x400?text=Fruit+Plants",
            desc: "Grow your own fruits with these top 10 easy-to-grow fruit plants and their requirements.",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-must-have-fruit-plants-for-your-garden"
        },
        {
            title: "Top 10 Highest Oxygen Producing Indoor Plants",
            date: "25 Jan 2022",
            image: "https://via.placeholder.com/600x400?text=Oxygen+Plants",
            desc: "Discover indoor plants that generate the most oxygen and help purify your living spaces.",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-highest-oxygen-producing-indoor-plants"
        },
        {
            title: "Top 10 Plants to Bring Money And Prosperity",
            date: "18 Mar 2021",
            image: "https://via.placeholder.com/600x400?text=Lucky+Plants",
            desc: "Learn about the top 10 plants believed to bring prosperity and positive vibes into your home.",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-plants-to-bring-money-and-prosperity-in-your-life"
        },
        {
            title: "Top 10 Plants to Beautify Your Terrace Garden",
            date: "– Apr 2021",
            tag: "Terrace Garden",
            image: "https://via.placeholder.com/600x400?text=Terrace+Garden",
            desc: "These top 10 selections will transform your terrace into a vibrant, serene oasis.",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-plants-to-beautify-your-terrace-garden"
        },
        {
            title: "Top 10 Plants for Your Living Room Decor",
            date: "– 2021",
            tag: "Home Decor",
            image: "https://via.placeholder.com/600x400?text=Living+Room+Plants",
            desc: "Air-purifying, low-maintenance plants perfect for adding life to your living room interiors.",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-plants-for-your-living-room-decor"
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            {/* Banner */}
            <div className="flex flex-col md:flex-row w-full bg-green-50 h-96">
                <div className="md:w-1/2">
                    <img
                        src="https://imgs.search.brave.com/B4aZ9b8OcEQ0NhS-2r2ALGAEeq9_HGZuUAD4Wg7zgYc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YmhnLmNvbS90aG1i/L3FxdXFkVzl2cTZQ/bndiS1lqZEZ5QWlw/a3Z2QT0vMTUwMHgw/L2ZpbHRlcnM6bm9f/dXBzY2FsZSgpOnN0/cmlwX2ljYygpL2Rp/eS1oYW5naW5nLWlu/ZG9vci1wbGFudGVy/LTc4ODEzZDc1MWI3/ODRmODg5YzQyZWI4/NDQwOGQ3YTIwLmpw/Zw"
                        alt="Plant in Hand"
                        className="w-full h-full shadow-sm object-cover"
                    />
                </div>
                <div className="md:w-1/2 flex flex-col justify-center px-30 space-y-5">
                    <h1 className="text-7xl font-bold font-serif text-green-900">BLOG</h1>
                    <p className="text-lg text-gray-700">
                        Tips and insights every plant lover needs to grow and thrive.
                    </p>
                </div>
            </div>

            {/* Blog Cards */}
            <div className="max-w-7xl mx-auto px-6 py-15 mb-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
                    {posts.map((post, idx) => (
                        <div key={idx} className=" rounded-tl-4xl rounded-br-4xl overflow-hidden shadow-lg hover:shadow-xl transition">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-60 object-cover"
                            />
                            <div className="p-4 space-y-2">
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{post.date}</span>
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                                        {post.tag}
                                    </span>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                                <p className="text-sm text-gray-600">{post.desc}</p>
                                <a
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-green-700 font-semibold hover:underline"
                                >
                                    Read more →
                                </a>
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
