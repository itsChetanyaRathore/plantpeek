import React from 'react';
import HeroSection from '../components/HeroSection';
import PlantCategory from '../components/PlantCategory';
import blogData from "../data/blogData.json";
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const benefits = [
        {
            id: 1,
            title: "Breath of Fresh Air",
            desc: "Indoor plants help purify the air and reduce toxins naturally.",
        },
        {
            id: 2,
            title: "Spreads Positivity",
            desc: "They enhance mood, reduce stress, and create a positive vibe.",
        },
        {
            id: 3,
            title: "Promotes Recovery",
            desc: "Studies show faster healing and recovery in the presence of plants.",
        },
        {
            id: 4,
            title: "Therapeutic to Care For",
            desc: "Caring for plants offers a sense of calm and mindfulness.",
        },
    ];
    const navigate = useNavigate();
    return (
        <>
            <style>{`
                .soft-blob {
                  border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
                }
            `}</style>

            <HeroSection />

            <div className="flex flex-row -mt-20 m-20 ">
                <h2 className="text-4xl w-1/3  px-4 font-semibold font-serif">
                    Nature’s wisdom, <br />right at your <br />fingertips.
                </h2>
                <p className="text-lg text-justify w-2/3">
                    Knowing your plants means nurturing them better. Whether you’re creating a calm indoor oasis or planning a thriving garden, our encyclopedia equips you with everything you need to grow with confidence.
                </p>
            </div >
            <div className="flex flex-row w-full justify-center gap-6 mb-20">
                <img
                    src="https://media.istockphoto.com/id/1248915720/photo/farmers-hand-watering-a-young-plant.webp?a=1&b=1&s=612x612&w=0&k=20&c=GAk9e4eAqS0Iwl3mcUsf7cXbN9HoeviLzKFLUWrtsAk="
                    alt="img1"
                    className="h-70 shadow-xl rounded-xl"
                />
                <img
                    src="https://media.istockphoto.com/id/1277110293/photo/close-up-of-woman-caring-for-and-watering-house-plants-with-spray.jpg?s=612x612&w=0&k=20&c=H7bAbbL8xFePigxnlmleSJhN4YHtVxm4AbDkckkKZ2A="
                    alt="img2"
                    className="h-70 shadow-xl rounded-xl"
                />
                <img
                    src="https://images.pexels.com/photos/793012/pexels-photo-793012.jpeg"
                    alt="img3"
                    className="h-70 shadow-xl rounded-xl"
                />
            </div>
            <PlantCategory />
            <div className="bg-[#f2faf1] py-16 px-4 mt-25">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font- text-center text-gray-800 mb-12">
                    Why You Should Keep <span className="text-green-700 font-bold">Indoor Plants </span> ?
                </h2>
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    {/* Left Column */}
                    <div className="flex flex-col gap-16 items-end text-right">
                        {benefits.slice(0, 2).map((item) => (
                            <div key={item.id} className="flex items-center gap-4 max-w-xs">
                                <div className="flex flex-col items-end">
                                    <h4 className="text-xl underline font-semibold text-gray-800 mb-1 uppercase">
                                        {item.title}
                                    </h4>
                                    <p className="text-md text-gray-600">{item.desc}</p>
                                </div>
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white text-sm font-bold shrink-0">
                                    {item.id}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Image */}
                    <div className="flex justify-center">
                        <img
                            src="/whyindoor.png"
                            alt="Indoor Plant"
                            className="h-90 w-full "
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-16 items-start text-left">
                        {benefits.slice(2).map((item) => (
                            <div key={item.id} className="flex items-center gap-4 max-w-xs">
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-700 text-white text-sm font-bold shrink-0">
                                    {item.id}
                                </div>
                                <div>
                                    <h4 className="text-xl underline font-semibold text-gray-800 mb-1 uppercase">
                                        {item.title}
                                    </h4>
                                    <p className="text-smd text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center py-10 px-4 mt-10">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-green-800">
                        Steps To Start Your Plants Off Right.
                    </h2>
                    <p className="text-sm text-gray-600 mt-2">Follow instructions for more</p>
                </div>
            </div>
            <div className="flex justify-center gap-12 py-4 mb-10 ">
                <div className="text-center">
                    <div className="relative w-28 h-28 mx-auto">
                        <div className="absolute inset-0 bg-green-100 soft-blob"></div>
                        <div className="relative flex items-center justify-center w-full h-full">
                            <img src="/inoculate.png" alt="Sow The Seeds" className="w-30 h-30" />

                        </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">Inoculate</h3>
                    <p className="text-sm w-80 text-gray-600 px-2 py-2">
                        Introduce helpful microbes like bacteria or fungi to the soil or seed to boost plant health.                    </p>
                </div>

                <div className="text-center">
                    <div className="relative w-28 h-28 mx-auto">
                        <div className="absolute inset-0 bg-green-100 soft-blob"></div>
                        <div className="relative flex items-center justify-center w-full h-full">
                            <img src="/seed.png" alt="Sow The Seeds" className="w-30 h-30" />

                        </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">Sow The Seeds</h3>
                    <p className="text-sm w-80 text-gray-600 px-2 py-2">
                        Plant seeds at proper depth and spacing. Cover with soil and water gently to keep it moist.                    </p>
                </div>

                <div className="text-center">
                    <div className="relative w-28 h-28 mx-auto">
                        <div className="absolute inset-0 bg-green-100 soft-blob"></div>
                        <div className="relative flex items-center justify-center w-full h-full">
                            <img src="/puntplant.png" alt="Sow The Seeds" className="w-30 h-30" />

                        </div>
                    </div>
                    <h3 className="mt-4 font-semibold text-lg">Punt The Pots</h3>
                    <p className="text-sm w-80 text-gray-600 px-2 py-2">
                        Clear weeds, mix in compost if needed, and ensure loose, well-draining soil for strong roots.                    </p>
                </div>
            </div>

            <div className="w-full min-h-1/2 text-gray-800 font-sans px-10 pt-10 relative bg-gray overflow-hidden mb-20">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
                    {/* Left Section */}
                    <div className="w-full lg:w-1/2 space-y-10">
                        <h1 className="text-6xl font-serif font-light text-black">
                            Proper care of
                            <span className="text-green-900 font-medium ">  Plants</span>
                        </h1>
                        <p className="text-lg text-gray-700 w-3xl">
                            Looking for an easier way to care for your plants?
                            <br />
                            <br />
                            Explore the world of greenery with our plant encyclopedia — Start
                            now and show your plants the love they need!
                        </p>
                    </div>

                    {/* Image */}
                    <img
                        src="https://imgs.search.brave.com/t1IReKRwuXsQcFG3HrwcZhgYLdwUMSn3c2lBBeYhPAc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9oaXBz/LmhlYXJzdGFwcHMu/Y29tL2htZy1wcm9k/L2ltYWdlcy90aGUt/c2lsbC1hbG9jYXNp/YS10aW55LWRhbmNl/ci1tZWRpdW0tZ3Jh/bnQtY3JlYW0tdmFy/aWFudC02NzY0NTU0/M2M5ZjQ4LmpwZWc_/Y3JvcD0xLjAweHc6/MC43NzR4aDswLDAu/MDU1M3hoJnJlc2l6/ZT05ODA6Kg"
                        alt="care"
                        className="w-90 rounded-tl-4xl rounded-br-4xl shadow-lg"
                    />
                </div>
            </div>

            {/* Blog Preview Section */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl font-bold mb-8 text-center text-green-900">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogData.slice(0, 3).map((post, idx) => (
                        <div
                            key={idx}
                            className="rounded-tl-3xl rounded-br-3xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                            onClick={() => navigate("/blog-detail", { state: { blog: post } })}
                        >
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-5 space-y-2">
                                <div className="text-sm text-gray-500">{post.date}</div>
                                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                                <p className="text-sm text-gray-600 line-clamp-3 whitespace-pre-line">
                                    {post.desc || post.content?.slice(0, 150) + "..."}
                                </p>
                                <span className="text-green-700 font-semibold hover:underline">Read more →</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Button to View All Blogs */}
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => navigate("/blog")}
                        className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-full text-md shadow-md"
                    >
                        View All Blogs
                    </button>
                </div>
            </div>
        </>
    );
};

export default HomePage;
