import React from 'react';
import Hero from './hero/Hero';
import Category from './category/Category';
import Search from './search/Search';
import Services from './services/Services';
import Cars from './cars/Cars'; 

const Home = () => {
  return (
    <div className='w-full space-y-16 pb-12'>
      {/* hero */}
      <Hero />

      {/* Car category */}
      <Category />

      {/* Cars */}
      <Cars />

      {/* Services */}
      <Services />      
      
      {/* Car Search */}
      <Search />



    </div>
  );
};

export default Home;
