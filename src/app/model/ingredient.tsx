// model/ingredient.ts
export default interface Ingredient {
    id: number;
    imgSrc: string;
    title: string;
    description: string;
    currency: string;
    price: number;
    quantity: string;
    isAvailable: boolean;
}
