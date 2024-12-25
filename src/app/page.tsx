// pages/index.tsx
import React from 'react';
import Feed from './component/feed';
import Hero from './component/hero';
import AdSection from './component/adsection';

const recipes = [{
  id: 1,
  title: "Truffle Pasta",
  imgSrc: "/truffle-pasta.jpg",
  description: "A luxurious pasta dish with freshly shaved truffles.",
  currency: "$",
  price: 10.5,
  rating: 4.8,
  isAvailable: true,
},
{
  id: 2,
  title: "Chicken Tikka",
  imgSrc: "/chicken-tikka.jpg",
  description: "A flavorful Indian dish of marinated chicken pieces grilled to perfection.",
  currency: "$",
  price: 10.20,
  rating: 4.8,
  isAvailable: true,
},
{
  id: 3,
  title: "Lasagna",
  imgSrc: "/lasagna.jpg",
  description: "A layered Italian dish made with pasta, meat, cheese, and marinara sauce, baked to perfection.",
  currency: "$",
  price: 8.99,
  rating: 4.8,
  isAvailable: true,
},
{
  id: 4,
  title: "Momo - steamed",
  imgSrc: "/momo.jpg",
  description: "A steamed dumpling filled with meat or vegetables, popular in Tibetan and Nepalese cuisine",
  currency: "$",
  price: 5,
  rating: 4.8,
  isAvailable: false,
}]

const Home: React.FC = () => {
  return (
        <div className="z-0 p-4 fixed inset-0 h-screen bg-gray-100 overflow-y-auto">
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4 h-80">
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
      </div>
  );
};

export default Home;
