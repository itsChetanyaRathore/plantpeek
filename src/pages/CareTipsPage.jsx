import React from 'react';
import LightRequirements from '../components/LightRequirements';
import WateringTechniques from '../components/WateringTechniques';
import SoilPotting from '../components/SoilPotting';
import HumidityTemperature from '../components/HumidityTemperature';
const PlantCareTips = () => {

    return (
        <>
            <div className="font-sans">
                {/* Header Section */}
                <div className="bg-green-900 h-85  text-white px-20 pb-20 rounded-b-[80px] relative overflow-hidden">
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
                                src="./public/assets/plantcare3.png"
                                alt="Peace Lily"
                                className="relative z-10 w-[220px] md:w-[280px] h-auto object-contain mt-5"
                            />
                        </div>
                    </div>
                    <div className="absolute -bottom-10 -left-10 w-40 opacity-30">
                        <img src="/public/assets/leaf-deco-left.png" alt="Decorative Leaf Left" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 opacity-30">
                        <img src="/public/assets/leaf-deco-right.png" alt="Decorative Leaf Right" />
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
                        <img src="./public/assets/plantcare2.png" alt="Decorative Plant" className="w-80 " />
                    </div>
                </div>
            </div>

            <div className="min-h-screen bg-gradient-to-b from-white to-green-50 pb-20">
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

                <LightRequirements />
                <WateringTechniques />
                <SoilPotting />
                <HumidityTemperature />
            </div >
        </>
    );
};

export default PlantCareTips;