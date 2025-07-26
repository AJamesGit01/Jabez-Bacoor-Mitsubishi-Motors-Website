import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="border border-zinc-700 bg-zinc-900 p-4 rounded-xl hover:shadow-lg transition">
      <div className="h-48 w-full rounded-md mb-3 bg-zinc-800 flex items-center justify-center overflow-hidden">
        {car.image ? (
          <img src={car.image} alt={car.name} className="w-full h-full object-contain" />
        ) : (
          <span className="text-zinc-500">No image</span>
        )}
      </div>
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-bold text-zinc-100">{car.price || "Price not available"}</span>
        <span className="text-sm text-zinc-500">{car.year || "Year not specified"}</span>
      </div>
      <h3 className="text-lg font-semibold text-zinc-100">{car.name}</h3>
      <p className="text-sm text-zinc-400">{car.description}</p>
    </div>
  );
};

export default CarCard;
