import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

const BlogCard = ({ img, title, description, date, category, link }) => {
  const isExternal = link?.startsWith("http");

  const Wrapper = ({ children }) =>
    isExternal ? (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group w-full h-auto rounded-2xl overflow-hidden shadow-lg bg-zinc-900 block"
      >
        {children}
      </a>
    ) : (
      <Link
        to={link || "/"}
        className="group w-full h-auto rounded-2xl overflow-hidden shadow-lg bg-zinc-900"
      >
        {children}
      </Link>
    );

  return (
    <Wrapper>
      {/* Image with overlay */}
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition" />
        
        {/* Category tag */}
        <span className="absolute top-3 left-3 bg-red-600 text-xs text-white px-3 py-1 rounded-full uppercase tracking-wide">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        <h1 className="text-xl font-semibold text-zinc-100 group-hover:text-red-500 transition line-clamp-1">
          {title}
        </h1>

        <p className="text-zinc-400 text-sm line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-zinc-500 mt-3">
          <div className="flex items-center gap-2">
            <Calendar size={14} />
            <span>{date}</span>
          </div>
          <span className="text-red-500 font-medium group-hover:underline">
            Read More →
          </span>
        </div>
      </div>
    </Wrapper>
  );
};

export default BlogCard;
