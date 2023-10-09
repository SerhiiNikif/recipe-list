import RecipeItem from "./recipe-item/RecipeItem";
import Header from './header/Header';
import { useGetRecipesQuery } from "../store/api/api";
import CreateRecipe from "./create-recipe/CreateRecipe";

export default function App() {
  const {isLoading, data} =  useGetRecipesQuery();
  
  return (
    <section className="bg-gray-900 text-base min-h-screen text-white p-5">
      <Header />
      <CreateRecipe />
      <div>
      {isLoading ? (
          <div>Loading...</div>
        ) : data ? (
          data.map(recipe => <RecipeItem key={recipe._id} recipe={recipe} />)
        ) : (
          <div>Not found</div>
        )}
      </div>
    </section>
  );
}
