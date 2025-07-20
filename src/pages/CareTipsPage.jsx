import React from 'react';
const PlantCareTips = () => {
    const imageUrls = [
        "https://plus.unsplash.com/premium_photo-1663088890337-2556706667d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBsYW50JTIwbGlnaHQlMjBjYXJlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1632741265066-643517e057e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBsYW50JTIwbGlnaHQlMjBjYXJlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1741509029330-fcde1aa68a00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBsYW50JTIwbGlnaHQlMjBjYXJlfGVufDB8fDB8fHww"
    ];
    return (
        <>
            <div className="font-sans">
                {/* Header Section */}
                <div className="bg-green-900 h-85  text-white px-20  pb-20 rounded-b-[80px] relative overflow-hidden">
                    <div className="max-w-7xl mx-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <h1 className="text-5xl font-bold font-serif leading-tight mb-6">
                                Essential Plant<br />Care Tips
                            </h1>
                            <p className="text-lg mb-6 max-w-lg">
                                Discover how to take care of your indoor and outdoor plants with practical tips that promote their healthy growth.
                            </p>
                        </div>
                        <div className="relative w-full flex justify-center items-center">
                            {/* Background Glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-10 rounded-tl-full rounded-br-full mt-20 z-0"></div>

                            {/* Plant Image */}
                            <img
                                src="./src/assets/plantcare3.png"
                                alt="Peace Lily"
                                className="relative z-10 w-[220px] md:w-[280px] h-auto object-contain mt-5"
                            />
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-40 opacity-30">
                        <img src="/assets/leaf-deco-left.png" alt="Decorative Leaf Left" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 opacity-30">
                        <img src="/assets/leaf-deco-right.png" alt="Decorative Leaf Right" />
                    </div>
                </div>
                {/* Content Section */}
                <div className="bg-white py-20 px-8 md:px-20 relative">
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-35 items-center">
                        <div className="relative">
                            <div className="bg-[#e6f2e6] rounded-4xl shadow-lg">
                                <img
                                    src="https://images.unsplash.com/photo-1606146350176-804f4c84fb30?q=80&w=1026&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    alt="Plant care"
                                    className="w-full rounded-xl "
                                />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-semibold mb-4">Care With Confidence</h2>
                            <p className="text-gray-700 mb-6">
                                From watering schedules and lighting needs to soil selection and pest prevention — learn the essentials to keep your plants happy and thriving.
                            </p>
                            <ul className="list-disc pl-5 text-gray-700 space-y-2">
                                <li>Know your plant's sunlight preference</li>
                                <li>Use well-draining soil and pots with holes</li>
                                <li>Water only when the topsoil is dry</li>
                                <li>Keep leaves clean from dust</li>
                                <li>Repot when roots outgrow the container</li>
                            </ul>
                        </div>
                    </div>
                    {/* Decorative bottom image */}
                    <div className="absolute -bottom-2 left-4/5 transform -translate-x-1/2 opacity-20">
                        <img src="./src/assets/plantcare2.png" alt="Decorative Plant" className="w-80 " />
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 m-20 py-10">
                    {/* Left: Intro */}
                    <div className="lg:col-span-2">
                        <div className="card-body">
                            <h2 className="card-title text-4xl font-serif mb-4">Fundamental Plant Care Guide</h2>
                            <p className="mb-4">
                                Whether you're a beginner or an experienced plant parent, these fundamental tips will help your plants thrive.
                                Proper care involves understanding light, water, soil, and environmental needs.
                            </p>

                            {/* Stats */}
                            <div className="stats shadow rounded-bl-4xl rounded-tr-4xl mt-2 mb-2 bg-green-50">
                                {/* Light */}
                                <div className="stat">
                                    <div className="stat-figure text-green-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                    </div>
                                    <div className="stat-title">Light</div>
                                    <div className="stat-value text-green-800">Essential</div>
                                    <div className="stat-desc">For photosynthesis</div>
                                </div>

                                {/* Water */}
                                <div className="stat">
                                    <div className="stat-figure text-blue-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                        </svg>
                                    </div>
                                    <div className="stat-title">Water</div>
                                    <div className="stat-value text-blue-800">Balance</div>
                                    <div className="stat-desc">Not too much or little</div>
                                </div>

                                {/* Nutrients */}
                                <div className="stat">
                                    <div className="stat-figure text-yellow-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="inline-block w-8 h-8 stroke-current" fill="none" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                        </svg>
                                    </div>
                                    <div className="stat-title">Nutrients</div>
                                    <div className="stat-value text-yellow-500">Regular</div>
                                    <div className="stat-desc">For healthy growth</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div>
                        <img
                            src="https://plus.unsplash.com/premium_photo-1679864497780-4deda119afdf?w=600&auto=format&fit=crop&q=60"
                            alt="Plant Care"
                            className="rounded-lg shadow-lg w-full h-auto object-cover mt-6"
                        />
                    </div>
                </div>

                <div className="w-screen h-24 bg-green-900 text-lg text-white flex flex-row gap-8 items-center justify-center mt-20" >
                    <img
                        src="https://images.unsplash.com/photo-1573283916394-c4b16178156b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGluZG9vciUyMHBsYW50JTIwcG90JTIwaW1hZ2VzfGVufDB8MHwwfHx8MA%3D%3D"
                        alt="care"
                        className="w-45 h-35"
                    />
                    <p>
                        Your complete guide to plant care — learn everything from sunlight
                        needs to watering tips and keep your plants thriving, the natural way.
                    </p>
                </div >
                {/* Light Requirement */}
                <div className="card bg-white shadow-lg mb-8 mt-20 max-w-7xl mx-auto rounded-3xl">
                    <div className="card-body px-6 md:px-10 py-10">

                        {/* Title */}
                        <h2 className="text-3xl mb-8 font-serif text-center flex items-center justify-center text-green-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            Light Requirements
                        </h2>

                        {/* Image Gallery */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
                            {imageUrls.map((url, index) => (
                                <img
                                    key={index}
                                    src={url}
                                    alt={`plant care ${index}`}
                                    className="rounded-xl object-cover h-56 w-full shadow"
                                />
                            ))}
                        </div>

                        {/* Accordion Section */}
                        <div className="space-y-4">
                            {/* Accordion 1 */}
                            <details className="bg-green-50 rounded-xl p-4 shadow cursor-pointer group">
                                <summary className="text-lg font-semibold text-green-900 group-open:text-green-800 transition">
                                    Understanding Light Levels
                                </summary>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                    {/* Card 1 */}
                                    <div className="bg-white rounded-bl-3xl rounded-tr-3xl shadow p-4 border-l-4 border-green-300">
                                        <h3 className="font-semibold text-green-800 mb-1">Low Light Plants</h3>
                                        <p className="text-sm text-gray-500 mb-2">(Snake Plant, ZZ Plant, Pothos)</p>
                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li>Thrives in north-facing windows</li>
                                            <li>Can survive with artificial light</li>
                                            <li>Avoid direct sunlight</li>
                                        </ul>
                                    </div>
                                    {/* Card 2 */}
                                    <div className="bg-white rounded-bl-3xl rounded-tr-3xl shadow p-4 border-l-4 border-green-300">
                                        <h3 className="font-semibold text-green-800 mb-1">Medium Light Plants</h3>
                                        <p className="text-sm text-gray-500 mb-2">(Philodendron, Peace Lily, Spider Plant)</p>
                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li>Bright, indirect sunlight</li>
                                            <li>East or west-facing windows</li>
                                            <li>4–6 hours of light daily</li>
                                        </ul>
                                    </div>
                                    {/* Card 3 */}
                                    <div className="bg-white rounded-bl-3xl rounded-tr-3xl shadow p-4 border-l-4 border-green-300">
                                        <h3 className="font-semibold text-green-800 mb-1">High Light Plants</h3>
                                        <p className="text-sm text-gray-500 mb-2">(Succulents, Fiddle Leaf Fig, Citrus Trees)</p>
                                        <ul className="text-sm list-disc pl-4 space-y-1">
                                            <li>Direct sunlight for 6+ hours</li>
                                            <li>South-facing windows ideal</li>
                                            <li>May need grow lights in winter</li>
                                        </ul>
                                    </div>
                                </div>
                            </details>

                            {/* Accordion 2 */}
                            <details className="bg-green-50 rounded-xl p-4 shadow cursor-pointer group">
                                <summary className="text-lg font-semibold text-green-900 group-open:text-green-800 transition">
                                    Signs of Light Stress
                                </summary>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                                    <div className="bg-white rounded-xl p-4 border-l-4 border-green-300">
                                        <h3 className="font-semibold text-green-800 mb-2">Too Much Light</h3>
                                        <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                                            <li>Bleached or scorched leaves</li>
                                            <li>Brown crispy edges</li>
                                            <li>Leaves curling inward</li>
                                            <li>Soil drying too quickly</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 border-l-4 border-green-300">
                                        <h3 className="font-semibold text-green-800 mb-2">Too Little Light</h3>
                                        <ul className="list-disc pl-4 text-sm text-gray-700 space-y-1">
                                            <li>Leggy, stretched growth</li>
                                            <li>Small or pale new leaves</li>
                                            <li>Leaning toward light source</li>
                                            <li>Slow or no growth</li>
                                        </ul>
                                    </div>
                                </div>
                            </details>

                            {/* Accordion 3 */}
                            <details className="bg-green-50 rounded-xl p-4 shadow cursor-pointer group">
                                <summary className="text-lg font-semibold text-green-900 group-open:text-green-800 transition">
                                    Understanding Natural Light for Plants
                                </summary>
                                <div className="space-y-4 mt-4">
                                    <div className="flex items-start gap-3">
                                        <span className="badge bg-green-200 text-green-800 font-medium">Fact 1</span>
                                        <p className="text-sm">South-facing windows usually receive the most sunlight, making them ideal for sun-loving plants.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="badge bg-green-200 text-green-800 font-medium">Fact 2</span>
                                        <p className="text-sm">East-facing windows provide soft morning light, which is perfect for delicate indoor plants like ferns or peace lilies.</p>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <span className="badge bg-green-200 text-green-800 font-medium">Fact 3</span>
                                        <p className="text-sm">West-facing windows offer strong afternoon light that can be intense, so it's best for succulents or cacti.</p>
                                    </div>
                                </div>
                            </details>
                        </div>
                    </div>
                </div >
                <div className="bg-green-900 text-white px-6 py-4 mt-20 rounded-full max-w-5xl mx-auto flex items-start justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-md leading-relaxed">Overwatering is the #1 killer of houseplants. When in doubt, wait a day or two before watering.</p>
                </div>

                {/* watering Techniques */}
                <section className="bg-white rounded-[1.5rem] p-10 shadow-md mt-20 space-y-12 relative">
                    {/* Heading with Image beside it */}
                    <div className="max-w-3xl mx-auto space-y-4 text-center relative flex flex-col items-center justify-center">
                        <h2 className="text-3xl font-bold text-green-900 flex items-center font-serif justify-center gap-4 relative">
                            <span>Watering Techniques</span>
                        </h2>
                        <p className="text-sm text-gray-600">Master watering with these simple and proven tips.</p>
                    </div>

                    {/* Main content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-60">
                        <div className="space-y-5 bg-green-900 p-10 rounded-bl-4xl rounded-tr-4xl shadow-sm h-60 w-96 mt-30">
                            <h3 className="text-xl font-bold text-white">How to Check Soil Moisture</h3>
                            <ul className="list-decimal pl-5 text-white space-y-3 text-sm">
                                <li>Insert finger 1–2 inches into soil.</li>
                                <li>Use a wooden chopstick – clean = dry.</li>
                                <li>Lift the pot – light = dry, heavy = moist.</li>
                                <li>Use a moisture meter for precision.</li>
                            </ul>
                        </div>

                        <div className="space-y-4 bg-green-900 p-10 rounded-br-4xl rounded-tl-4xl -mx-10">
                            <h3 className="text-xl font-semibold text-white">Watering Methods</h3>
                            <ul className="space-y-3 text-sm text-gray-700">
                                <li className="bg-green-50 px-4 py-3 rounded-lg shadow-sm">
                                    <strong className="block text-green-800 font-medium mb-1">Top Watering</strong>
                                    Water until it drains out the bottom. Ensures even moisture.
                                </li>
                                <li className="bg-green-50 px-4 py-3 rounded-lg shadow-sm">
                                    <strong className="block text-green-800 font-medium mb-1">Bottom Watering</strong>
                                    Place pot in tray for 15–30 minutes. Prevents root rot.
                                </li>
                                <li className="bg-green-50 px-4 py-3 rounded-lg shadow-sm">
                                    <strong className="block text-green-800 font-medium mb-1">Self-Watering Pots</strong>
                                    Keeps soil consistently moist. Ideal for fussy plants.
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className="max-w-5xl mx-auto space-y-8 mt-30">
                        <h3 className="text-2xl font-bold font-serif text-green-900 text-center">Signs of Watering Issues</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className=" rounded-2xl overflow-hidden shadow-sm">
                                <img src="https://imgs.search.brave.com/MxP_I0ld18gz6x66iRJ2pYdqMAB7AcX3s-R_6uuPJ8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuaG9tZW5ldHdv/cmsuY2Evd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDEvb3Zl/cndhdGVyaW5nLXBs/YW50cy11bmRlcndh/dGVyaW5nLWJyb3du/LWNyaXNweS1sZWF2/ZXMtMi5qcGc"
                                    alt="Overwatered plant"
                                    className="w-full h-70 object-cover" />
                                <div className="p-5">
                                    <h4 className="text-green-700 font-semibold mb-2">Overwatering Symptoms</h4>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                        <li>Yellowing lower leaves</li>
                                        <li>Mushy, blackened stems</li>
                                        <li>Musty smelling soil</li>
                                        <li>Fungus gnats around soil</li>
                                    </ul>
                                </div>
                            </div>

                            <div className=" rounded-2xl overflow-hidden shadow-sm">
                                <img src="https://imgs.search.brave.com/N3rPlx7OPjso5g1OUyVpI7FjFgMnMLuBz0JK6TXsaFg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/NDgvOTUwNS84MTc2/L2ZpbGVzL0JZX0ly/aW5hX1RpdW1lbnRz/ZXZhXzQ4MHg0ODAu/anBnP3Y9MTY4NjU1/NjEzMw"
                                    alt="Underwatered plant"
                                    className="w-full h-70 object-cover" />
                                <div className="p-5">
                                    <h4 className="text-green-700 font-semibold mb-2">Underwatering Symptoms</h4>
                                    <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                                        <li>Dry, crispy leaf edges</li>
                                        <li>Leaves curling or drooping</li>
                                        <li>Soil pulling away from pot edges</li>
                                        <li>Slow or stunted growth</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#f7fdf7] rounded-[2rem] p-6 shadow-md max-w-7xl mx-auto mt-16 space-y-10">
                    {/* Heading */}
                    <div className="flex items-center gap-4 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <h2 className="text-3xl font-bold text-green-900 font-serif">Soil & Potting Essentials</h2>
                    </div>

                    {/* Soil Guide */}
                    <div className="grid grid-cols-1 md:grid-cols-2 p-2  items-start">
                        <div className="space-y-6">
                            <h3 className="text-xl font-semibold text-green-800">Choosing the Right Soil</h3>
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
                            <h3 className="text-xl font-semibold text-green-800 mt-0">Pot Selection Guide</h3>
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

            </div >
        </>
    );
};

export default PlantCareTips;