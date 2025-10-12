import "./Main.css";
import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientsList";
import { getRecipeFromMistral } from "../ai.js";

export default function Main() {
  const [ingredients, setIngredients] = useState([]);
  const [recipe, setRecipe] = useState("");

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => {
      return [...prevIngredients, newIngredient];
    });
  }

  // const [recipeShown, setRecipeShown] = useState(false);

  async function getRecipe() {
    let suggestedRecipe = await getRecipeFromMistral(ingredients);
    await setRecipe(suggestedRecipe);
  }
  return (
    <>
      <main>
        <form action={addIngredients} className="ingredient-form">
          <input
            type="text"
            aria-label="Add ingredient"
            placeholder="e.g Oregano"
            name="ingredient"
          />
          <button>+ Add Ingredient</button>
        </form>
        {ingredients.length > 0 && (
          <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
        )}

        {recipe !== "" ? <ClaudeRecipe recipe={recipe} /> : null}
      </main>
    </>
  );
}
