import React from 'react';
import Layout from '../../../components/layout/Layout';
import CategoryCard from '../../../components/category/CategoryCard';

import CategoryImg from '../../../assets/hero2.png';

const Category = () => {
  return (
    <Layout>
      <div className="flex flex-wrap justify-center gap-6">
        <CategoryCard
          img={CategoryImg}
          description="Explore our latest luxury car models Explore our latest luxury car models Explore our latest luxury car models ." // Add more and change description
        />
        <CategoryCard
          img={CategoryImg}
          description="Find powerful SUVs perfect for your adventures Find powerful SUVs perfect for your adventures Find powerful SUVs perfect for your adventures." // Add more and change description
        />
        <CategoryCard
          img={CategoryImg}
          description="Browse affordable and reliable car options Browse affordable and reliable car options Browse affordable and reliable car options." // Add more and change description
        />
        <CategoryCard
          img={CategoryImg}
          description="Experience top performance with our sports cars Experience top performance with our sports cars Experience top performance with our sports cars." // Add more and change description
        />
      </div>
    </Layout>
  );
};

export default Category;
