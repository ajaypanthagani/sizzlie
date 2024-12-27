import Ingredient from "./ingredient";
import Instruction from "./instruction";

// model/recipe.ts
export default interface Recipe {
    id: number;
    videoSrc: string;
    title: string;
    description: string;
    currency: string;
    price: number;
    rating: number;
    ingredients: Ingredient[];
    instructions: Instruction[];
}
  