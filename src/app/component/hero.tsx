import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative rounded-lg shadow-md h-full overflow-hidden flex-grow">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero-1.mp4" // Replace with your video path
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="relative z-0 bg-gradient-to-r from-black/50 to-transparent text-white p-6 h-full flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Welcome to Sizzlie</h1>
        <p className="text-sm md:text-lg">
          Explore trending recipes, snacks, and your favorite meals. Dive into the world of food!
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
