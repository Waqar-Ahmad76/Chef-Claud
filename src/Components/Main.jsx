import "./Main.css"


export default function Main() {
  return (
    <>
      <main>
        <form action="" className="ingredient-form">
          <input type="text" 
          aria-label="Add ingredient"
          placeholder="e.g Oregano"
          />
          <button>+ Add Ingredient</button>
        </form>
      </main>
    </>
  );
}
