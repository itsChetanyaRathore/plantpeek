import React from "react";

const BlogPage = () => {
    const posts = [
        {
            title: "The Peace Lily: NASA's Little Air-Purifying Superstar",
            date: "September 1, 2023",
            image: "https://plus.unsplash.com/premium_photo-1708769592969-9f42825496a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVhY2UlMjBsaWx5fGVufDB8fDB8fHww",
            desc: "You've probably heard about the Peace Lily being crowned as the air-purifying champion of the plant world. But did you know it's not just your average houseplant? ",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-garden-plants-for-your-collection"
        },
        {
            title: "Meet Sanjeevani: A Plant That's as Legendary as Ramayana itself",
            date: "August 26, 2023",
            image: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Selaginella_bryopteris_480x480.jpg?v=1687784522",
            desc: "Ever heard of a plant so legendary, it's said to bring back the dead? No, we're not talking about a prop from a sci-fi movie. We're talking about the real deal—Sanjeevani, also known as Selaginella.",
            url: "https://nurserylive.com/blogs/top-10-plants/meet-sanjeevani-a-plant-thats-as-legendary-as-ramayana-itself"
        },
        {
            title: "Top 10 Fragrant Flowering Plants For Ultimate Garden Bliss",
            date: "March 18, 2021 ",
            image: "https://images.unsplash.com/photo-1537691237913-3d0e4d444de4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            desc: "The right scent can transform a space, creating a relaxing atmosphere, boosting mood, and leaving a lasting impression on anyone who visits. ",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-fragrant-flowering-plants-for-ultimate-garden-bliss"
        },
        {
            title: "The Mighty Tulsi Plant: Unveiling Its Healing Powers and Growing Tips",
            date: "June 26, 2023",
            image: "https://images.unsplash.com/photo-1724913172641-e528a0cc9ec6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            desc: "In a world that’s increasingly reliant on modern medicine, the ancient wisdom of herbs is often overlooked.But fear not! One herb that is absolutely deserving of the spotlight is the mighty Tulsi plant.",
            url: "https://nurserylive.com/blogs/top-10-plants/the-mighty-tulsi-plant-unveiling-its-healing-powers-and-growing-tips"
        },
        {
            title: "Survivors of the Arid: Exploring Drought Tolerant Plants!",
            date: "May 27, 2023",
            image: "https://images.unsplash.com/photo-1651312166126-151f9f6810cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHJvdWdodCUyMHRvbGVyYW50JTIwcGxhbnR8ZW58MHwwfDB8fHww",
            desc: "Ah, the world of drought- tolerant plant, where resilience meets style, and survival is as trendy as ever! Brace yourself for a witty, fact-filled journey into the realm of these water-saving superheroes.",
            url: "https://nurserylive.com/blogs/top-10-plants/survivors-of-the-arid-exploring-drought-tolerant-plants"
        },
        {
            title: "Top 10 Indoor Flowering Plants for Add Colors In Your Interiors",
            date: "March 30, 2020",
            image: "https://plus.unsplash.com/premium_photo-1664391914821-29ee0b3d98ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kb29yJTIwZmxvd2VyJTIwdmFzZXN8ZW58MHwwfDB8fHww",
            desc: "A green ambience fills your home with positivity and tranquillity. And who doesn't like that? The fresh fragrance of grass and flowers are soothing to the eyes and refreshing to the mind. ",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-indoor-flowering-plants-for-add-colors-in-your-interiors"
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            <div div className="relative w-full h-70 " >
                <img
                    src="https://images.pexels.com/photos/31825260/pexels-photo-31825260.png"
                    alt="Background"
                    className="w-full h-full object-cover absolute inset-0 z-0 "
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
                    {posts.map((post, idx) => (
                        <div key={idx} className=" rounded-tr-4xl rounded-bl-4xl overflow-hidden bg-gray-50 shadow-lg hover:shadow-xl transition">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-60 object-cover p-2 rounded-tr-4xl rounded-bl-4xl"
                            />
                            <div className="p-4 space-y-2">
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{post.date}</span>
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
        </div >
    );
};

export default BlogPage;
