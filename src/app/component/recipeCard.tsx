"use client";

import React from "react";
import Recipe from "../model/recipe";
import Link from "next/link";
import Image from "next/image";

const MAX_DESCRIPTION_LENGTH = 100; // Maximum characters for description

const extractVideoId = (url: string): string | null => {
  const youtubeUrlRegex =
    /(?:youtube\.com\/(?:[^/]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(youtubeUrlRegex);
  return match ? match[1] : null;
};

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = (props: RecipeCardProps) => {
  const recipe = props.recipe

  // Truncate the description
  const truncatedDescription =
    recipe.description.length > MAX_DESCRIPTION_LENGTH
      ? `${recipe.description.slice(0, MAX_DESCRIPTION_LENGTH)}...`
      : recipe.description;
  
      const videoId = extractVideoId(recipe.videoSrc);
      const thumbnailUrl = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : "";
    

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex flex-col h-full">
    <Link href={`/recipe/${recipe.id}`}>
      {/* Video Section */}
      <div className="relative w-full h-0 pb-[56.25%]">  {/* 16:9 aspect ratio */}
      <Image
              src={thumbnailUrl}
              alt={recipe.title}
              layout="fill"
              objectFit="cover"
              className="rounded-t-lg"
            />
      </div>
    </Link>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Title and Price */}
        <div className="flex justify-between items-start">
          <h2 className="font-bold text-lg text-gray-800">{recipe.title}</h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2 flex-grow">{truncatedDescription}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
