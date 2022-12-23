import "./DetailsOverview.css";
import {updateIngredient} from "../../services/MenuService"
import { useEffect, useState } from "react";

export default function IngredientsDetailsOverview(props) {

    function close(value) {
        props.onCloseButtonClick(value);
    }

    //The ingredient that changes when the user updates values in the form
    const [newIngredient, setNewIngredient] = useState(props.ingredient);

    //Applies newIngredient as the actual 
    async function updateNewIngredient(){
        await updateIngredient()
    }

    useEffect(() => {
        testEndpoint();
      }, []);

    async function testEndpoint(){
        const ingredient = {
            id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
            name: "HAHAHAHAH HET WERKT JAJA",
            stock: 0,
            weight: 0,
            allergens: "HAHA HET WERKT"
          }
        await updateIngredient(ingredient)
    }

    return (
        <div className="details">
            {console.log(newIngredient)}
            <div className="detail" id="name">
                <label htmlFor="name">Ingredient Name:</label>
                <input type="text" name="name" value={props.ingredient.name ?? "unknown"} disabled={true}/>
                <button className="edit-name">&#128221;</button>
            </div>
            <div className="detail" id="amount">
                <label htmlFor="amount">Amount:</label>
                <input type="number" min="0" name="amount" value={props.ingredient.stock ?? "unknown"} disabled={true}/>
                <button className="edit-amount">&#128221;</button>
            </div>
            <div className="detail" id="weight">
                <label htmlFor="weight">Weight:</label>
                <input type="number" inputMode="decimal" min="0" step="0.001" name="weight"
                       value={props.ingredient.weight ?? "unknown"} disabled={true}
                />
                <button className="edit-weight">&#128221;</button>
            </div>
            <div className="detail" id="allergens">
                <label htmlFor="allergens">Allergens:</label>
                <textarea rows="5" name="allergens" value={props.ingredient.allergens ?? "unknown"} disabled={true}/>
                <button className="edit-allergens">&#128221;</button>
            </div>
            <div className="confirmation">
                <button id="apply">Apply</button>
                <button id="cancel" onClick={() => close(true)}>Cancel</button>
            </div>
        </div>
    );
}