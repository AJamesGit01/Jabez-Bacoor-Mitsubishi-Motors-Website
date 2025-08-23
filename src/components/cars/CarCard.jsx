import React from "react";
import { FaCogs, FaGasPump, FaShieldAlt, FaCarSide} from "react-icons/fa"; // icons

const CarCard = ({ car }) => {
  // Function to choose icon based on keyword
  const getIcon = (line) => {
    if (line.toLowerCase().includes("engine") || line.toLowerCase().includes("transmission")) {
      return <FaCogs className="text-red-500 mr-2" />;
    }
    if (line.toLowerCase().includes("fuel") || line.toLowerCase().includes("km")) {
      return <FaGasPump className="text-green-500 mr-2" />;
    }
    if (line.toLowerCase().includes("safety") || line.toLowerCase().includes("airbag") || line.toLowerCase().includes("abs")) {
      return <FaShieldAlt className="text-blue-500 mr-2" />;
    }
    return <FaCarSide className="text-yellow-500 mr-2" />;
  };

  return (
    <div className="border border-zinc-700 bg-zinc-900 p-4 rounded-xl hover:shadow-lg transition">
      {/* Car Image */}
      <div className="h-48 w-full rounded-md mb-3 bg-zinc-800 flex items-center justify-center overflow-hidden">
        {car.image ? (
          <img
            src={car.image}
            alt={car.name}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <span className="text-zinc-500">No image</span>
        )}
      </div>

      {/* Price + Year */}
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-zinc-100">
          {car.price || "Price not available"}
        </span>
        <span className="text-sm text-zinc-500">
          {car.year || "Year not specified"}
        </span>
      </div>

      {/* Car Name */}
      <h3 className="text-lg font-semibold text-zinc-100">{car.name}</h3>

      {/* Car Description */}
      <div className="mt-2 space-y-2">
        {Array.isArray(car.description) ? (
          car.description.map((line, index) => (
            <div key={index} className="flex items-start text-sm text-zinc-400">
              {getIcon(line)}
              <span>{line}</span>
            </div>
          ))
        ) : (
          <p className="text-sm text-zinc-400">{car.description}</p>
        )}
      </div>
    </div>
  );
};

export default CarCard;
