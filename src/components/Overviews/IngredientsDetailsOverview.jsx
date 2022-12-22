import "./DetailsOverview.css";

export default function IngredientsDetailsOverview(props) {

    function close(value) {
        props.onCloseButtonClick(value);
    }

    return (
        <div className="details">
            <div className="detail" id="name">
                <label htmlFor="name">Ingredient Name:</label>
                <input type="text" name="name" value={props.ingredient.name} disabled={true}/>
                <button className="edit-name">&#128221;</button>
            </div>
            <div className="detail" id="amount">
                <label htmlFor="amount">Amount:</label>
                <input type="number" min="0" name="amount" value={props.ingredient.stock} disabled={true}/>
                <button className="edit-amount">&#128221;</button>
            </div>
            <div className="detail" id="weight">
                <label htmlFor="weight">Weight:</label>
                <input type="number" inputMode="decimal" min="0" step="0.001" name="weight"
                       value={props.ingredient.weight} disabled={true}
                />
                <button className="edit-weight">&#128221;</button>
            </div>
            <div className="detail" id="allergens">
                <label htmlFor="allergens">Allergens:</label>
                <textarea rows="5" name="allergens" value={props.ingredient.allergens} disabled={true}/>
                <button className="edit-allergens">&#128221;</button>
            </div>
            <div className="confirmation">
                <button id="apply">Apply</button>
                <button id="cancel" onClick={() => close(true)}>Cancel</button>
            </div>
        </div>
    );
}