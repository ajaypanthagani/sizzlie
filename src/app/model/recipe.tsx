import Ingredient from "./ingredient";

// model/recipe.ts
export default interface Recipe {
    id: number;
    videoSrc: string;
    title: string;
    description: string;
    currency: string;
    price: number;
    rating: number;
    ingredients: Ingredient[];  // New instructions field
}
  