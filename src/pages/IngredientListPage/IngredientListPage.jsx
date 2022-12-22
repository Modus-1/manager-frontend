import { useEffect, useState } from "react";
import {getAllIngredients} from "../../services/MenuService";
import "../ListPage.css";

export default function IngredientListPage() {
  const [Ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchAllIngredients = async () => {
      return await getAllIngredients();
    };
    fetchAllIngredients().then((res) => {
      setIngredients(res);
    });
  }, []);

  return (
      <div className="main-container">
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
                <span id="name">{ingredient.name}</span>
                <span id="amount">{ingredient.stock}</span>
                <span id="weight">{ingredient.weight}</span>
                <button className="controls" id="delete">&#10006;</button>
                <button className="controls"
                        id="info"
                        onClick={() => {}}>
                  &#129094;
                </button>
              </div>
          ))}
        </div>
      </div>
  );
}
