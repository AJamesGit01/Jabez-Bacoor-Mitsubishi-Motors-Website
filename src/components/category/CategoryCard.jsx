import React from 'react';
import { SiMitsubishi } from 'react-icons/si';
import { Link } from 'react-router-dom';

const CategoryCard = ({ img, description }) => {
  return (
    <Link
      to="/"
      className="w-72 px-6 py-6 bg-zinc-900 hover:bg-zinc-950 border-2 border-zinc-800 rounded-2xl flex flex-col items-center text-center gap-4 ease-in-out duration-300"
    >
      <SiMitsubishi className="text-4xl text-red-600" />
      <img src={img} alt="Category" className="h-20 w-auto" />
      {description && (
        <p className="text-sm text-zinc-400">{description}</p>
      )}
    </Link>
  );
};

export default CategoryCard;
