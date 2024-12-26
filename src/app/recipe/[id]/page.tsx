import { recipes } from "@/app/data/recipe";
import React from "react";
import { RecipeInstruction } from "@/app/component/recipeInstruction";

// Correctly typed `generateStaticParams` for Next.js 13+
export async function generateStaticParams(): Promise<{ id: string }[]> {
  // Return a promise for each `id` wrapped in an array
  const promises = recipes.map((recipe) => {
    return Promise.resolve({
      id: recipe.id.toString(), // Ensure id is a string
    });
  });

  // Use Promise.all to resolve the array of promises
  return Promise.all(promises);
}


interface RecipePageProps {
  params: Promise<{ id: string }>
}

const RecipeInstructionsPage: React.FC<RecipePageProps> = async ({params}) => {
  const { id } = await params;

  // Parse the id to a number
  const recipeId = id ? parseInt(id, 10) : NaN;

  // Find the recipe based on the parsed id
  const recipe = recipes.find((recipe) => recipe.id === recipeId);

  if (recipe) {
    return <RecipeInstruction recipe={recipe} />;
  }

  return <div>No recipe found</div>;
};

export default RecipeInstructionsPage;