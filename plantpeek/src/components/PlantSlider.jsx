import React, { useEffect, useState } from 'react';

const PlantSlider = () => {
    const slides = [
        {
            image: 'https://plus.unsplash.com/premium_photo-1673969608591-2403f690a989?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNuYWtlJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
            title: '🌿 Did You Know?',
            info: 'Snake plants convert CO₂ into oxygen even at night — perfect for bedrooms!',
        },
        {
            image: 'https://media.istockphoto.com/id/1156537866/photo/man-gardening-background.jpg?s=2048x2048&w=is&k=20&c=rZhpysRmwD5ZZbgcfgriC3HviGuGwr3KMLKxzY_1728=',
            title: '🌼 Plant Fact',
            info: 'Marigolds are natural pest repellents and often used in companion gardening.',
        },
        {
            image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kb29yJTIwcGxhbnR8ZW58MHx8MHx8fDA%3D',
            title: '🪴 Indoor Tip',
            info: 'Pothos is a low-maintenance indoor plant that thrives in indirect light.',
        },
        {
            image: 'https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fHBsYW50fGVufDB8fDB8fHww',
            title: '🌍 Green Fact',
            info: 'Plants absorb CO₂ and reduce urban heat — essential for climate control.',
        },
        {
            image: 'https://plus.unsplash.com/premium_photo-1678457828450-54e677ff2f9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fG91dGRvb3IlMjBwbGFudHxlbnwwfHwwfHx8MA%3D%3D',
            title: '☀️ Outdoor Favorite',
            info: 'Aloe Vera loves the sun and offers healing gel for cuts and burns.',
        },
        {
            image: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800',
            title: '🍃 Air Purifier',
            info: 'The ZZ Plant is drought-tolerant and great for office spaces with low light.',
        },
    ];

    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (
        <div className="w-full max-w-7xl py-4 mx-auto relative">
            <img
                src={slides[current].image}
                alt={slides[current].title}
                className="w-full h-64 object-cover rounded-lg"
            />
            <div className="bg-white p-2 shadow rounded-b-lg text-center">
                <h3 className="text-lg font-bold">{slides[current].title}</h3>
                <p className="text-sm text-gray-600">{slides[current].info}</p>
            </div>

            {/* Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
            >
                ❮
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-1 rounded-full shadow"
            >
                ❯
            </button>
        </div>
    );
};

export default PlantSlider;
