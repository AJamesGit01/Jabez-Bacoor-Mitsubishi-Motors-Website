// Blogs.jsx
import React from "react";
import Layout from "../../../components/layout/Layout";
import BlogCard from "../../../components/blog/BlogCard";

const Blogs = () => {
  return (
    <Layout className="space-y-12">
      {/* Header */}
      <div className="w-full flex flex-col items-center text-center space-y-3">
        <h6 className="text-sm md:text-base text-red-500 uppercase font-medium tracking-wide">
          What's new on our blog?
        </h6>
        <h1 className="md:text-5xl text-2xl font-extrabold text-zinc-50 uppercase tracking-wide">
          Latest <span className="text-red-600">Insights</span>
        </h1>
        <p className="text-zinc-400 max-w-xl text-sm md:text-base">
          Stay updated with our automotive news, tips, and in-depth features — straight from Mitsubishi.
        </p>
      </div>

      {/* Blog grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        <BlogCard
          img="https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/articles/2025/august/flood-assistsance/Mitsubishi%20SOS%20Flood%20Assistance%20Program.jpg?width=2160&auto=webp&quality=70"
          title="MMPC Eases Repair Cost Through Flood Assistance Program | Mitsubishi Motors Philippines Corporation"
          description="Mitsubishi Motors PH eases Repair Costs through Support On Standby Flood Assistance Program"
          date="August 2025"
          category="MMPC Flood Assistance Program"
          link="https://www.mitsubishi-motors.com.ph/articles/mmpc-support-on-standby/"
        />
        <BlogCard
          img="https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/service-campaigns/prepaid-maintenance-package/PR%201.png?width=2160&auto=webp&quality=70"
          title="MMPC launches Prepaid Maintenance Parts Package Program | Mitsubishi Motors Philippines Corporation"
          description="Mitsubishi Motors Philippines launches Prepaid Maintenance Parts Package Program"
          date="July 2025"
          category="MMPC Maintenance Program"
          link="https://www.mitsubishi-motors.com.ph/articles/mmpc-launches-prepaid-maintenance-package-program/"
        />
        <BlogCard
          img="https://www.mitsubishi-motors.com.ph/content/dam/mitsubishi-motors-ph/images/site-images/articles/2025/may/new-mirage-g4-launch/Mitsubishi%20Mirage%20G4%20%20with%20Logo.jpg?width=2160&auto=webp&quality=70"
          title="MMPC Introduces Updated Mirage G4 | Mitsubishi Motors Philippines Corporation"
          description="Mitsubishi Motors Philippines Corporation (MMPC) is officially introducing the updated Mitsubishi Mirage G4, continuing its legacy as a practical, stylish, and easy-to-drive sedan that is built for everyday Filipino journeys."
          date="June 2025"
          category="MMPC Introduced Mirage G4"
          link="https://www.mitsubishi-motors.com.ph/articles/mmpc_introduces_updated_mirageG4/"
        />
      </div>
    </Layout>
  );
};

export default Blogs;
