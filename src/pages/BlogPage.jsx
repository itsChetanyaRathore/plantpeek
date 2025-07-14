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
        {
            title: "The Zesty Beauty of Lemon Trees: A Refreshing Addition to Your Garden",
            date: "June 24, 2023",
            image: "https://images.unsplash.com/photo-1705616459154-c27e86bcd994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
            desc: "Welcome to the zesty world of lemon trees! If you’ve ever daydreamed of having a backyard oasis filled with vibrant, aromatic citrus, you’re in the right place. ",
            url: "https://nurserylive.com/blogs/top-10-plants/the-zesty-beauty-of-lemon-trees-a-refreshing-addition-to-your-garden"
        },
        {
            title: "Top 20 Plants associated with God in Hindu Mythology",
            date: "December 8, 2022",
            image: "https://plus.unsplash.com/premium_photo-1669042404473-8e75edb9d0d7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG90dXN8ZW58MHwwfDB8fHww",
            desc: "There are many plants that are associated with different gods and goddesses in Hindu mythology. Here are twenty plants that are particularly significant ",
            url: "https://nurserylive.com/blogs/top-10-plants/top-20-plants-associated-with-god-in-hindu-mythology"
        },
        {
            title: "Top 10 Plants Proven to Attract Butterflies",
            date: "March 24, 2021",
            image: "https://plus.unsplash.com/premium_photo-1733342513309-746512917a5e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
            desc: "Two of nature's most beautiful creations—butterflies and flowers—go hand in hand. 🌸 While city life may make it rare to spot butterflies, it’s entirely possible to create a butterfly paradise in your own garden. ",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-plants-proven-to-attract-butterflies"
        },
        {
            title: "Chameli Flowers: The Fragrant Blooms That Add Beauty and Serenity to Your Space",
            date: "April 20, 2023",
            image:"https://cdn.shopify.com/s/files/1/0918/8442/1427/files/HRr7aqI-W5LA8r8vHQSI0cR5Kx_JSGrWmj31QBHrr-h3Jo_l_iOm7pHtTR00SieE4iKULPzqgLL_FsrGo5sNsHbhUBvLw-3SBhqcUZZstVZb78XEuIBpi8FnmvK9l63UYoesHFrzYpTVrV8alw_dfaa0823-7bb8-420b-b142-afb05b24b9f0.jpg?v=1739792412",
            desc: "Chameli, also known as Jasmine, is a beautiful flowering plant that is popular for its exquisite fragrance and delicate blooms.It is widely grown in tropical and subtropical regions and is used for various purposes, including perfumery, medicine, and decoration. ",
            url: "https://nurserylive.com/blogs/top-10-plants/chameli-flowers-the-fragrant-blooms-that-add-beauty-and-serenity-to-your-space"
        },
        {
            title: "Money Plant Care: The Ultimate Guide",
            date: "April 3, 2023",
            image: "https://images.unsplash.com/photo-1652634769902-01a0258c104d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8",
            desc: "Welcome to the ultimate guide on money plant care! This article will provide you with comprehensive information about these popular houseplants. ",
            url: "https://nurserylive.com/blogs/top-10-plants/money-plant-care-the-ultimate-guide"
        },
        {
            title: "Top 10 medicinal plants in India",
            date: "December 5, 2022",
            image: "https://images.unsplash.com/photo-1631229049169-2ff2bd7256d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
            desc: "Here are ten medicinal plants that are commonly used in India for their therapeutic properties",
            url: "https://nurserylive.com/blogs/top-10-plants/top-10-medicinal-plants-in-india"
        },
    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="relative w-full h-70">
                <img
                    src="https://images.pexels.com/photos/31825260/pexels-photo-31825260.png"
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
        </div >
    );
};

export default BlogPage;
