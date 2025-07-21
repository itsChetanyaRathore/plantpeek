import React from 'react'

const HumidityTemperature = () => {
    return (
        <section className="bg-white p-8 md:p-12 rounded-3xl shadow-xl max-w-6xl mx-auto mt-20 space-y-10 mb-20">
            {/* Heading and Subtext */}
            <div className="text-center space-y-2">
                <h2 className="text-3xl font-serif font-bold text-green-900">Humidity & Temperature</h2>
                <p className="text-gray-600 text-sm md:text-base">
                    Maintain ideal humidity and temperature for your plants to thrive in any season.
                </p>
            </div>

            {/* Main Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Image */}
                <div className="flex justify-center">
                    <img
                        src="https://imgs.search.brave.com/lp5nQLk4p-J3aDqYW10FRVUwaNGBe_v6J1_WnFsLcoM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9teXBs/YW50aW4uY29tL19u/ZXh0L2ltYWdlP3Vy/bD1odHRwczovL3N0/cmFwaS5teXBsYW50/aW4uY29tLzg3Njgz/MDg4LTlhNDItNDY5/YS1iZTBlLTQ3YmE0/MGZkYzgyOS53ZWJw/P2hlaWdodD01MDAm/d2lkdGg9NzUwJnc9/MTkyMCZxPTc1"
                        alt="Humidity and Temperature"
                        className="rounded-bl-4xl rounded-tr-4xl w-full max-w-md h-96 shadow-md"
                    />
                </div>

                {/* Right: Tips */}
                <div className="space-y-6">
                    {/* Humidity Card */}
                    <div className="bg-green-50 p-6 rounded-2xl shadow">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Managing Humidity</h3>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Group plants together to increase humidity naturally.</li>
                            <li>Use a pebble tray with water under the pot.</li>
                            <li>Mist plants occasionally—but avoid overdoing it.</li>
                            <li>Use a humidifier in dry indoor environments.</li>
                        </ul>
                    </div>

                    {/* Temperature Card */}
                    <div className="bg-green-100 p-6 rounded-2xl shadow">
                        <h3 className="text-lg font-semibold text-green-800 mb-2">Maintaining Ideal Temperature</h3>
                        <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                            <li>Keep indoor temperature between 18–24°C (65–75°F).</li>
                            <li>Avoid placing plants near heaters or AC vents.</li>
                            <li>Protect from sudden drafts or cold windows at night.</li>
                            <li>Use a room thermometer for consistency.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HumidityTemperature