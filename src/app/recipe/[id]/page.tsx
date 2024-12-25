"use client";

import { recipes } from "@/app/data/recipe";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import Slider from "react-slick"; // For carousel
import { FaClock } from "react-icons/fa"; // For clock icon

const RecipeInstructionsPage: React.FC = () => {
  const { id } = useParams();

  // Parse the id to a number
  const recipeId = id ? parseInt(id.toString(), 10) : NaN;

  // Find the recipe based on the parsed id
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  // State to manage the active timer
  const [activeTimer, setActiveTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // Function to start the timer
  const startTimer = (seconds: number, index: number) => {
    setActiveTimer(index);
    setTimeLeft(seconds);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev && prev > 1) {
          return prev - 1;
        } else {
          clearInterval(interval);
          setActiveTimer(null);
          return null;
        }
      });
    }, 1000);
  };

  // If no recipe is found, display a not found message
  if (!recipe) {
    return (
      <div>
        <h1>Recipe with id: {id} not found</h1>
      </div>
    );
  }

  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
  };

  return (
    <div className="z-0 p-4 fixed inset-0 bg-gray-100 overflow-y-auto">
      <div className="recipe-instructions-page mt-32 lg:mt-16 md:mt-16 p-5">
        {/* Carousel to render the instructions */}
        <Slider
          {...carouselSettings}
          className="carousel-container"
        >
          {recipe.instructions.map((instruction, index) => (
            <div
              key={index}
              className="carousel-item flex flex-col justify-center items-center relative"
            >
              {/* Display Video */}
              <div className="instruction-video flex justify-center items-center mb-4 w-full">
                <video
                  controls
                  className="w-full sm:max-w-[60%] object-contain"
                  src={instruction.videoUrl}
                />
              </div>

              {/* Display Description */}
              <div className="instruction-description flex justify-between items-center w-full p-4 bg-black bg-opacity-60 text-white rounded-md mt-auto">
                <div className="flex-1">
                  <h2 className="text-lg text-red-300">{`Step ${index + 1}`}</h2>
                  <h3 className="text-lg">{instruction.description}</h3>
                </div>
                {instruction.time && (
                  <button
                    onClick={() => startTimer(instruction.time || 0, index)}
                    disabled={activeTimer === index}
                    className="ml-4 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full disabled:bg-gray-400"
                  >
                    {activeTimer === index ? (
                      <span>
                        {Math.floor(timeLeft! / 60)
                          .toString()
                          .padStart(2, "0")}
                        :
                        {(timeLeft! % 60).toString().padStart(2, "0")}
                      </span>
                    ) : (
                      <FaClock className="text-xl" />
                    )}
                  </button>
                )}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecipeInstructionsPage;
