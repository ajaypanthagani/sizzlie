"use client";

import { recipes } from "@/app/data/recipe";
import { useParams } from "next/navigation";
import React from "react";
import Slider from "react-slick"; // For carousel

const RecipeInstructionsPage: React.FC = () => {
  const { id } = useParams();

  // Parse the id to a number
  const recipeId = id ? parseInt(id.toString(), 10) : NaN;

  // Find the recipe based on the parsed id
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

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
    centerMode: false,  // Ensure no extra space on sides
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
              <div className="instruction-description flex justify-center items-center w-full p-4 bg-black bg-opacity-60 text-white rounded-md mt-auto">
                <div className="w-full">
                  <h2 className="text-lg text-red-300">{`Step ${index + 1}:`}</h2>
                  <h3 className="text-lg">{instruction.description}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RecipeInstructionsPage;
