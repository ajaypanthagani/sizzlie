"use client";

import React, { useEffect, useState } from "react";
import Recipe from '../model/recipe';
import {useSearchParams } from "next/navigation";
import { recipes } from "../data/recipe";
import RecipeCard from "../component/recipeCard";


const SearchPage: React.FC = () => {
  const searchParams = useSearchParams(); // Extract search parameters (query) from URL
  const query = searchParams.get("query"); // Get the search query from URL params

  const [filteredResults, setFilteredResults] = useState<Recipe[]>([]);

  useEffect(() => {
    if (query && typeof query === "string") {
      // Filter search results based on query
      const results = recipes.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredResults(results);
    }
  }, [query]);

  return (
    <div className="z-0 p-4 fixed inset-0 h-screen bg-gray-100 overflow-y-auto">
        <div className="mt-32 lg:mt-16 md:mt-16">
        {filteredResults.length === 0 ? (
            <h1 className="text-m font-bold mb-6 text-gray-500">No results for &quot;{query}&quot;</h1>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredResults.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    id={recipe.id}
                    imgSrc={recipe.imgSrc}
                    title={recipe.title}
                    description={recipe.description}
                    currency={recipe.currency}
                    price={recipe.price}
                    rating={recipe.rating}
                    isAvailable={recipe.isAvailable}
                />
            ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default SearchPage;
