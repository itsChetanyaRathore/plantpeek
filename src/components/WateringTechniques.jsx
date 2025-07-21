import React from 'react';

const WateringTechniques = () => {
    return (
        <section className="bg-white rounded-[1.5rem] p-10 shadow-md mt-20 space-y-12 relative overflow-hidden">
            {/* Decorative Plant 1 - Top Right */}
            {/* <div className="absolute -top-10 -right-10 opacity-20">
                <img src="./src/assets/plantcare2.png" alt="Decorative Plant" className="w-80" />
            </div> */}

            {/* Heading with Image beside it */}
            <div className="max-w-3xl mx-auto space-y-4 text-center relative flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold text-green-900 flex items-center font-serif justify-center gap-4 relative">
                    <span>Watering Techniques</span>
                </h2>
                <p className="text-sm text-gray-600">Master watering with these simple and proven tips.</p>
            </div>

            {/* Main content */}
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-60 relative">
                {/* Decorative Plant 2 - Bottom Left */}
                <div className="absolute -top-70 left-3 transform -translate-x-1/2 opacity-20">
                    <img src="./src/assets/decorplant.png" alt="Decorative Plant" className="w-80" />
                </div>

                <div className="space-y-5 bg-green-900 p-10 rounded-bl-4xl rounded-tr-4xl shadow-sm h-60 w-96 mt-30 relative z-10">
                    <h3 className="text-xl font-bold text-white">How to Check Soil Moisture</h3>
                    <ul className="list-decimal pl-5 text-white space-y-3 text-sm">
                        <li>Insert finger 1–2 inches into soil.</li>
                        <li>Use a wooden chopstick – clean = dry.</li>
                        <li>Lift the pot – light = dry, heavy = moist.</li>
                        <li>Use a moisture meter for precision.</li>
                    </ul>
                </div>

                <div className="space-y-4 bg-green-900 p-10 rounded-br-4xl rounded-tl-4xl -mx-10 relative z-10">
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
                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="https://imgs.search.brave.com/MxP_I0ld18gz6x66iRJ2pYdqMAB7AcX3s-R_6uuPJ8k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuaG9tZW5ldHdv/cmsuY2Evd3AtY29u/dGVudC91cGxvYWRz/LzIwMjEvMDEvb3Zl/cndhdGVyaW5nLXBs/YW50cy11bmRlcndh/dGVyaW5nLWJyb3du/LWNyaXNweS1sZWF2/ZXMtMi5qcGc"
                            alt="Overwatered plant"
                            className="w-full h-70 object-cover"
                        />
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

                    <div className="rounded-2xl overflow-hidden shadow-sm">
                        <img
                            src="https://imgs.search.brave.com/N3rPlx7OPjso5g1OUyVpI7FjFgMnMLuBz0JK6TXsaFg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/c2hvcGlmeS5jb20v/cy9maWxlcy8xLzA2/NDgvOTUwNS84MTc2/L2ZpbGVzL0JZX0ly/aW5hX1RpdW1lbnRz/ZXZhXzQ4MHg0ODAu/anBnP3Y9MTY4NjU1/NjEzMw"
                            alt="Underwatered plant"
                            className="w-full h-70 object-cover"
                        />
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
    );
};

export default WateringTechniques;