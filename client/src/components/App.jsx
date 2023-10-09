import RecipeItem from "./recipe-item/RecipeItem";

function App() {
  return (
    <div className="bg-gray-900 text-base min-h-screen text-white p-5">
      <RecipeItem recipe={{
        id: 1,
        name: 'Lasagna'
      }} />
      <RecipeItem recipe={{
        id: 2,
        name: 'Porridge'
      }} />
      <RecipeItem recipe={{
        id: 3,
        name: 'Pasta'
      }} />
    </div>
  );
}

export default App;
