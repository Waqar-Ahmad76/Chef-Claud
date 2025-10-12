import "./ClaudeRecipe.css";
import ReactMarkDown from "react-markdown";

export default function ClaudeRecipe(props) {
  return (
    <>
      <section className="suggested-recipe-container">
        <ReactMarkDown >{props.recipe}</ReactMarkDown>
      </section>
    </>
  );
}
