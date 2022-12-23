import "./DetailsOverview.css";
import { updateIngredient } from "../../services/MenuService";
import Popup from "reactjs-popup";
import { useEffect, useState } from "react";

export default function IngredientsDetailsOverview(props) {
  function close(value) {
    props.onCloseButtonClick(value);
  }

  useEffect(() => {}, []);

  async function updateSelectedIngredient() {
    let name = document.getElementById("name").value;
    let stock = document.getElementById("stock").value;
    let weight = document.getElementById("weight").value;
    let allergens = document.getElementById("allergens").value;
    console.log(document.getElementById("name").value);

    let ingredient = {
      id: props.ingredient.id,
      name: name,
      stock: Number(stock),
      weight: Number(weight),
      allergens: allergens,
    };

    console.log(ingredient);
    await updateIngredient(ingredient);

    window.location.href = "/ingredient-list";
  }

  return (
    <div className="details">
      <div className="detail">
        <label htmlFor="name">Ingredient Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          defaultValue={props.ingredient.name}
        />
      </div>
      <div className="detail">
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="stock"
          min="0"
          name="amount"
          defaultValue={props.ingredient.stock}
        />
      </div>
      <div className="detail">
        <label htmlFor="weight">Weight:</label>
        <input
          type="number"
          id="weight"
          inputMode="decimal"
          min="0"
          step="0.001"
          name="weight"
          defaultValue={props.ingredient.weight}
        />
      </div>
      <div className="detail">
        <label htmlFor="allergens">Allergens:</label>
        <textarea
          id="allergens"
          rows="5"
          name="allergens"
          defaultValue={props.ingredient.allergens}
        />
      </div>
      <div className="confirmation">
        {/* <button id="apply" onClick={() => updateSelectedIngredient()}>
          Apply
        </button> */}

        <Popup trigger={<button id="apply">Apply</button>} modal={true}>
          {(close) => (
            <div className="confirmation-popup">
              <p>Are you sure you want to update this ingredient?</p>
              <button onClick={() => updateSelectedIngredient()}>
                Confirm
              </button>

              <button
                className="closePopupButton"
                onClick={() => {
                  close();
                }}
              >
                Cancel
              </button>
            </div>
          )}
        </Popup>
        <button id="cancel" onClick={() => close(true)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
