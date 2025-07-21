import React from 'react'
const LightRequirements = () => {
    const imageUrls = [
        "https://plus.unsplash.com/premium_photo-1663088890337-2556706667d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHBsYW50JTIwbGlnaHQlMjBjYXJlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1632741265066-643517e057e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fHBsYW50JTIwbGlnaHQlMjBjYXJlfGVufDB8fDB8fHww",
        "https://images.unsplash.com/photo-1741509029330-fcde1aa68a00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fHBsYW50JTIwbGlnaHQlMjBjYXJlfGVufDB8fDB8fHww"
    ];
    return (
        <>
            {/* Light Requirement */}
            <div className="card bg-white shadow-lg mb-8 mt-20 max-w-7xl mx-auto rounded-3xl">
                <div className="card-body px-6 md:px-10 py-10">

                    {/* Title */}
                    <h2 className="text-3xl mb-8 font-serif font-bold text-center flex items-center justify-center text-green-900">
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
        </>
    )
}

export default LightRequirements