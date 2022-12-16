import { useEffect, useState } from "react";
import {getAllIngredients} from "../../services/MenuService";
import "./IngredientListPage.css";

export default function IngredientListPage() {
  const [Ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const fetchAllIngredients = async () => {
      const data = await getAllIngredients();
      return data;
    };
    fetchAllIngredients().then((res) => {
      setIngredients(res);
    });
  }, []);

  return (
    <table class="ingredient-list-container">
      <tr class="row-header">
        <th>Ingredient Name</th>
        <th>Amount in stock</th>
        <th>Amount in weight (kg)</th>
        <th>Allergens</th>
      </tr>
      {Ingredients.map((ingredient) => (
        <tr class="ingredient-row" key={ingredient.id}>
          <td>{ingredient.name}</td>
          <td>{ingredient.stock}</td>
          <td>{ingredient.weight}</td>
          <td>{ingredient.allergens}</td>
        </tr>
      ))}
    </table>
  );
}
