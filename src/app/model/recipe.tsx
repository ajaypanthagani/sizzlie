// model/recipe.ts
export default interface Recipe {
    id: number;
    imgSrc: string;
    title: string;
    description: string;
    currency: string;
    price: number;
    rating: number;
    isAvailable: boolean;
    instructions: { videoUrl: string; description: string; time?: number }[];  // New instructions field
  }
  