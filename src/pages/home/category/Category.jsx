import React, { useState, useEffect } from "react";
import Layout from "../../../components/layout/Layout";

// Example car images (replace with your real car assets)
import Car1 from "../../../assets/Mirage_G4_GLX.png";
import Car2 from "../../../assets/Mirage_G4_GLS_BLACK_SERIES.png";
import Car3 from "../../../assets/Montero_Sport_Black_Series.png";
import Car4 from "../../../assets/Montero_Sport_Black_Series_RALLIART.png";
import Car5 from "../../../assets/Triton_2.4D_GLX.png";
import Car6 from "../../../assets/Triton_2.4D_GLS.png";
import Car7 from "../../../assets/X-Force_GLS_CVT.png";
import Car8 from "../../../assets/X-Force_GT_CVT_WHITE.png";

const carImages = [Car1, Car2, Car3, Car4, Car5, Car6, Car7, Car8];

const Category = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // fade-out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % carImages.length);
        setFade(true); // fade-in
      }, 500);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left: Animated Car Image */}
        <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] flex justify-center">
          <img
            src={carImages[currentIndex]}
            alt="Car showcase"
            className={`rounded-2xl shadow-lg max-w-full max-h-full object-contain transition-opacity duration-500 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />
        </div>

        {/* Right: About Content */}
        <div className="space-y-6 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
            <span className="text-white">OUR BRAND </span>
            <span className="text-red-600">MODELS</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            For years, we’ve been driven by passion for performance and
            precision engineering. Our vehicles are designed to push the limits
            of innovation while ensuring comfort, safety, and reliability.
          </p>

          {/* Category Highlights */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Affordable Vehicles</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Our affordable Mitsubishi vehicles are built with your family in mind spacious interiors,advanced safety 
                features, and fuel-efficient engines ensure comfort and peace of mind without stretching your budget.
              </p>
            </div>
            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Sedan's Vehicles</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Drive smarter with our fuel-efficient sedans. Designed for long commutes and city driving, 
                they combine powerful performance with impressive mileage giving you more value with every trip.
              </p>
            </div>
            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Pick-Up's Vehicles</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Experience the perfect balance of strength and comfort. Equipped with modern technology, 
                spacious cabins, and premium features, our pick-ups prove that Mitsubishi's power is impressive.
              </p>
            </div>
            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Sport's Vehicles</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                With striking designs and performance that commands attention, Mitsubishi’s sports lineup 
                embodies speed, strength, and style.They are not just cars they are a statement of power and confidence.
              </p>
            </div>
            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">MPV's Vehicles</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Built for versatility, Mitsubishi MPVs combine fuel efficiency, reliable performance, and 
                advanced features to meet the demands of modern family life they ensure every trip is safer and more enjoyable.
              </p>
            </div>
            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">SUV's Vehicles</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                With bold design Mitsubishi SUVs, advanced safety, and versatile performance, they’re 
                ready for both urban roads and off-road challenges, giving you comfort and control at every turn.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
