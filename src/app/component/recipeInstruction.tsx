"use client";

import React from "react";
import Recipe from "../model/recipe";

export const RecipeInstruction: React.FC<{ recipe: Recipe }> = ({ recipe }) => {
  return (
    <div className="z-0 p-4 fixed inset-0 h-screen bg-gray-100 overflow-y-auto">
      <div className="mt-32 lg:mt-16 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:p-10">
        {/* Video container spans two columns on large screens */}
        <div className="relative w-full col-span-1 lg:col-span-2 pb-[56.25%]"> {/* 16:9 aspect ratio (56.25%) */}
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-md"
            src={recipe.videoSrc}
            title="YouTube video player"
            allow="clipboard-write; encrypted-media; gyroscope;"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
