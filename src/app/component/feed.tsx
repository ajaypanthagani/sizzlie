import Recipe from "../model/recipe";
import RecipeCard from "./recipeCard";

interface FeedProps {
    recipes: Recipe[]
  }
  

const Feed: React.FC<FeedProps> = ({recipes}) => {
    return (
        <div>
            <h1 className="text-black text-lg font-extrabold border-t-2 pt-6">Trending Recipes</h1>
            <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:px-5">
                {recipes.map((recipe, index) => (
                <RecipeCard
                key={index}
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
        </div>
    );
}

export default Feed