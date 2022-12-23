import { useEffect, useState } from "react";
import {getAllIngredients} from "../../services/MenuService";
import "../ListPage.css";
import IngredientsDetailsOverview from "../../components/Overviews/IngredientsDetailsOverview";

export default function IngredientListPage() {
  const [Ingredients, setIngredients] = useState([]);
  const [currentIngredient, setCurrentIngredient] = useState({});


  useEffect(() => {
    setCurrentIngredient({});
    getAllIngredients().then((response) => {
      setIngredients(response);
    });
  }, []);

  let closeInfo = (value) => {
    if (value === true) {
      setCurrentIngredient({});
    }
  }

  function showInfo(ingredient) {
    return(
        <div className={"single-item-container " + (Object.keys(currentIngredient).length === 0 ? "disabled" : "")}>
          <IngredientsDetailsOverview ingredient={ingredient} onCloseButtonClick={closeInfo}></IngredientsDetailsOverview>
        </div>
    );
  }

  return (
      <div className="main-container">
        {showInfo(currentIngredient)}
        <div className="rows-container">
          <div className="row header">
            <span>Naam</span>
            <span id="amount">Amount</span>
            <span id="weight">Weight (kg)</span>
            <div className="controls"></div>
            <div className="controls"></div>
          </div> {
          Ingredients.map((ingredient) => (
              <div className="row" key={ingredient.id}>
                <span id="name">{ingredient.name ?? "unknown"}</span>
                <span id="amount">{ingredient.stock ?? "unknown"}</span>
                <span id="weight">{ingredient.weight ?? "unknown"}</span>
                <button className="controls" id="delete">&#10006;</button>
                <button className="controls"
                        id="info"
                        onClick={() => setCurrentIngredient(ingredient)}>
                  &#129094;
                </button>
              </div>
          ))}
        </div>
      </div>
  );
}
