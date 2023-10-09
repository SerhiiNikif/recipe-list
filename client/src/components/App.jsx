import RecipeItem from "./recipe-item/RecipeItem";
import Header from './header/Header';

function App() {
  return (
    <section className="bg-gray-900 text-base min-h-screen text-white p-5">
      <Header />
      <div>
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
    </section>
  );
}

export default App;
