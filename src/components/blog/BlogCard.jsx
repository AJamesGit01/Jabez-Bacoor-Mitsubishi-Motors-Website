import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ img, title, description }) => {
  return (
    <Link
      to="/"
      className="w-full h-auto rounded-xl overflow-hidden hover:bg-zinc-700 transition-colors duration-300"
    >
      {/* Image without background */}
      <img
        src={img}
        alt={title}
        className="w-full aspect-video object-cover"
      />

      {/* Text container with background */}
      <div className="space-y-2 bg-zinc-800 p-4">
        <h1 className="text-2xl text-zinc-100 font-medium line-clamp-1">
          {title}
        </h1>
        <p className="text-zinc-400 font-normal mt-4 line-clamp-2">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default BlogCard;
