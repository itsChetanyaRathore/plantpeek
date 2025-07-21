import React from 'react'

const SoilPotting = () => {
    return (
        <section className="bg-[#f7fdf7] rounded-[2rem] p-6 shadow-md max-w-7xl mx-auto mt-16 space-y-10">
            {/* Heading */}
            <div className="flex justify-center items-center gap-4 mb-15">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
                <h2 className="text-3xl font-bold text-green-900 font-serif">Soil & Potting Essentials</h2>
            </div>

            {/* Soil Guide */}
            <div className="grid grid-cols-1 md:grid-cols-2 p-2  items-start">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-green-800 ">Choosing the Right Soil</h3>
                    <ul className="space-y-5">
                        {[
                            {
                                title: "All-Purpose Potting Mix",
                                desc: "Good for most houseplants. Contains peat moss, perlite, and vermiculite.",
                            },
                            {
                                title: "Succulent/Cactus Mix",
                                desc: "Fast-draining with sand or grit. Prevents root rot in drought-loving plants.",
                            },
                            {
                                title: "Orchid Mix",
                                desc: "Chunky bark medium. Provides aeration for epiphytic roots.",
                            },
                            {
                                title: "African Violet Mix",
                                desc: "Light and fluffy with extra perlite. Slightly acidic pH.",
                            },
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4 items-start">
                                <span className="text-sm bg-green-100 text-green-800 font-bold w-7 h-7 rounded-full flex items-center justify-center">
                                    {i + 1}
                                </span>
                                <div>
                                    <h4 className="font-medium text-green-900">{item.title}</h4>
                                    <p className="text-sm text-gray-600">{item.desc}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Pot Selection */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-green-800 mt-0">Pot Selection Guide</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            {
                                title: "Terracotta",
                                desc: "Porous clay. Great for succulents and plants prone to overwatering.",
                                img: "https://images.unsplash.com/photo-1621512366232-0b7b78983782?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                tag: "Breathable",
                            },
                            {
                                title: "Glazed Ceramic",
                                desc: "Retains moisture. Ideal for tropical plants that like consistent dampness.",
                                img: "https://images.unsplash.com/photo-1590736637594-e0b41894b64a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D",
                                tag: "Decorative",
                            },
                            {
                                title: "Plastic",
                                desc: "Lightweight and inexpensive. Good for moisture-loving plants.",
                                img: "https://images.unsplash.com/photo-1706028695723-00cda0985335?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                                tag: "Economical",
                            },
                        ].map((pot, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow p-3  w-48 flex flex-col justify-between"
                            >
                                <img
                                    src={pot.img}
                                    alt={pot.title}
                                    className="rounded-xl h-42 object-cover w-full mb-4"
                                />
                                <div className="space-y-1">
                                    <h4 className="font-semibold text-green-900">{pot.title}</h4>
                                    <p className="text-sm text-gray-600">{pot.desc}</p>
                                    <span className="inline-block mt-2 text-xs px-3 py-1 bg-green-100 text-green-800 rounded-full">
                                        {pot.tag}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SoilPotting