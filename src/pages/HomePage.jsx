import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'
import WateringCard from '../components/WateringCard'

const HomePage = () => {
    return (
        <>
            <Header />
            {/* <PlantSlider /> */}
            <HeroSection />

            <div className="flex flex-row -mt-12 m-20">
                <h2 className="text-4xl w-1/2  px-4 font-semibold font-serif">
                    Nature’s wisdom, <br />right at your <br />fingertips.
                </h2>
                <p className="text-lg text-justify w-2/3">
                    Knowing your plants means nurturing them better. Whether you’re creating a calm indoor oasis or planning a thriving garden, our encyclopedia equips you with everything you need to grow with confidence.
                </p>
            </div >
            <div className="flex flex-row w-full justify-center gap-6">
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
            <WateringCard />
            <Footer />
        </>
    )
}

export default HomePage