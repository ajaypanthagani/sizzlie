// pages/index.tsx
import React from 'react';
import Feed from './component/feed';
import Hero from './component/hero';
import AdSection from './component/adsection';
import { recipes } from './data/recipe';

const Home: React.FC = () => {
  return (
        <div className="z-0 p-4 fixed inset-0 h-screen bg-gray-100 overflow-y-auto">
        <div className="mt-32 lg:mt-16 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4 h-80">
          <div className="lg:col-span-2 flex flex-grow">
            <Hero />
          </div>
          <div className="lg:col-span-1 flex">
            <AdSection />
          </div>
        </div>
        <div className='mt-5'>
          <Feed recipes={recipes}/>
        </div>
        <div className="h-40"></div>
      </div>
  );
};

export default Home;
