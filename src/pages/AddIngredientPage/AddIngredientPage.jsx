import "../MenuItemIngredient.css";
import Popup from "reactjs-popup";
import React, { useState, useEffect } from "react";
import { createIngredient } from "../../services/MenuService";

export default function AddIngredientPage() {
  async function submitIngredient() {
    console.log("Submitted menu item");
    let name = document.getElementById("name").value;
    let stock = document.getElementById("stock").value;
    let weight = document.getElementById("weight").value;
    let allergens = document.getElementById("allergens").value;

    let ingredient = {
      name: name,
      stock: Number(stock),
      weight: Number(weight),
      allergens: allergens,
    };

    console.log(ingredient);

    await createIngredient(ingredient);

    window.location.href = "/ingredient-list";
  }

  return (
    <div className="mii-page-container">
      <div className="mii-input-fields-header">
        <h1>Add Ingredient</h1>
      </div>

      <div className="mii-input-fields-body">
        <div className="mii-input-field">
          <label>Name: </label>
          <input id="name"></input>
        </div>
        <div className="mii-input-field">
          <label>Stock: </label>
          <input type="number" id="stock"></input>
        </div>
        <div className="mii-input-field">
          <label>Weight: </label>
          <input type="number" id="weight"></input>
        </div>
        <div className="mii-input-field">
          <label>Allergens: </label>
          <input id="allergens"></input>
        </div>
      </div>

      <button className="mii-submit-btn" onClick={submitIngredient}>
        Submit new ingredient
      </button>
    </div>
  );
}
