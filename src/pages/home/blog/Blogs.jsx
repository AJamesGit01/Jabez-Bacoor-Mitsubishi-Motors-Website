import React from "react";
import Layout from "../../../components/layout/Layout";
import BlogCard from "../../../components/blog/BlogCard";

const Blogs = () => {
  return (
    <Layout className="space-y-10">
      <div className="w-full flex items-center justify-center text-center space-y-3 flex-col">
        <h6 className="text-lg text-zinc-300 uppercase font-medium">
          What's new on our blog?
        </h6>
        <h1 className="md:text-5xl text-xl font-bold text-zinc-50 uppercase tracking-wide">
          Latest <span className="text-red-600">Blogs</span>
        </h1>
      </div>

      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-12 py-5">
        <BlogCard
          img="https://www.mitsubishi-motors.com/en/products/img/pajero_sport.jpg"
          title="The Evolution of the Pajero Sport"
          description="Discover how the Pajero Sport blends power, luxury, and technology to create the ultimate SUV experience."
        />
        <BlogCard
          img="https://www.group1mitsubishi.co.za/blog/wp-content/uploads/next-gen-Mitsubishi-Triton.png"
          title="Next-Gen Mitsubishi Triton Unveiled"
          description="Explore the design, features, and capabilities of the all-new Mitsubishi Triton — built tough for every terrain."
        />
        <BlogCard
          img="https://www.redondomitsubishi.com/blogs/5661/wp-content/uploads/2025/06/Week-4.jpg"
          title="Top 5 Maintenance Tips for Mitsubishi Owners"
          description="Keep your Mitsubishi in top shape with these essential maintenance tips from our certified technicians."
        />
      </div>
    </Layout>
  );
};

export default Blogs;
