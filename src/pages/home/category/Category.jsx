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
            <span className="text-white">ABOUT OUR </span>
            <span className="text-red-600">BRAND</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed">
            For decades, we’ve been driven by passion for performance and
            precision engineering. Our vehicles are designed to push the limits
            of innovation while ensuring comfort, safety, and reliability.
          </p>

          {/* Category Highlights */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6">
            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md hover:bg-red-600 hover:text-white transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold">Luxury</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Experience elegance with our premium car lineup.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md hover:bg-red-600 hover:text-white transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold">SUVs</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Power and space designed for every adventure.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md hover:bg-red-600 hover:text-white transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold">Affordable</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                Reliable and budget-friendly vehicles for daily life.
              </p>
            </div>

            <div className="bg-zinc-900 p-4 sm:p-6 rounded-xl shadow-md hover:bg-red-600 hover:text-white transition-colors">
              <h3 className="text-lg sm:text-xl font-semibold">Sports</h3>
              <p className="text-xs sm:text-sm text-zinc-400">
                High-performance cars built for thrill seekers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
