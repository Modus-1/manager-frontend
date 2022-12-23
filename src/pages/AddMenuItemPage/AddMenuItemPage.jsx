import "../MenuItemIngredient.css";
import Popup from "reactjs-popup";
import React, { useState, useEffect } from "react";
import {
  getAllCategories,
  getAllIngredients,
  createMenuItem,
} from "../../services/MenuService";

import { v4 } from "uuid";

export default function AddMenuItemPage() {
  const [categoryOpen, setCategoryOpen] = React.useState(false);

  const [category, setCategory] = useState({ name: "Select category" });
  const [categories, setCategories] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  async function submitMenuItem() {
    console.log("Submitted menu item");
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let desc = document.getElementById("desc").value;
    let ldesc = document.getElementById("ldesc").value;
    let iurl = document.getElementById("iurl").value;
    let burl = document.getElementById("burl").value;
    const id = v4();

    let ingredients = selectedIngredients.map((item) => {
      return {
        menuItemId: id,
        ingredientId: item.id,
        amount: item.count,
      };
    });

    let menuItem = {
      id: id,
      name: name,
      iconUrl: iurl,
      bannerUrl: burl,
      longDescription: ldesc,
      shortDescription: desc,
      price: price,
      categoryId: category.id,
      ingredients: ingredients,
    };
    await createMenuItem(menuItem);

    window.location.href = "/menu-item-list";
  }

  function addIngredient(ingredient) {
    if (ingredient.count === undefined) {
      ingredient.count = 1;
    }

    for (let i = 0; i < selectedIngredients.length; i++) {
      if (selectedIngredients[i].name === ingredient.name) {
        selectedIngredients[i].count += 1;
        setSelectedIngredients([...selectedIngredients]);
        return;
      }
    }
    setSelectedIngredients([...selectedIngredients, ingredient]);
  }

  function deleteIngredient(ingredient) {
    setSelectedIngredients(
      selectedIngredients.filter((item) => {
        return item !== ingredient;
      })
    );
  }

  function changeAmount(item, amount) {
    item.count += amount;
    setSelectedIngredients([...selectedIngredients]);
    if (item.count == 0) {
      deleteIngredient(item);
    }
  }

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
    });
    getAllIngredients().then((res) => {
      setIngredients(res);
    });
  }, []);

  const handleCategoryOpen = () => {
    setCategoryOpen(!categoryOpen);
  };

  return (
    <div className="mii-page-container">
      <div className="mii-input-fields-header">
        <h1>Add Menu Item</h1>
      </div>

      <div className="mii-input-fields-body">
        <div className="mii-input-field">
          <label>Name: </label>
          <input id="name"></input>
        </div>
        <div className="mii-input-field">
          <label>Price: </label>
          <input id="price"></input>
        </div>
        <div className="mii-input-field">
          <label>Description: </label>
          <input id="desc"></input>
        </div>
        <div className="mii-input-field">
          <label>Long description: </label>
          <input id="ldesc"></input>
        </div>
        <div className="mii-input-field">
          <label>Icon URL: </label>
          <input id="iurl"></input>
        </div>
        <div className="mii-input-field">
          <label>Banner URL: </label>
          <input id="burl"></input>
        </div>
        <div className="mii-input-field">
          <label>Category: </label>
          <div className="mii-dropdown">
            <div className="mii-dropdown-content">
              <label>{category.name}</label>
              <button onClick={handleCategoryOpen}>▼</button>
            </div>
            {categoryOpen ? (
              <div className="mii-dropdown-dropdown-container">
                <div className="mii-dropdown-dropdown">
                  {categories.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="mii-dropdown-dropdown-item"
                        onClick={() => {
                          setCategory(item);
                          handleCategoryOpen();
                        }}
                      >
                        {item.name}
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="mii-ingredients-body">
        <h3>Ingredients: </h3>
        <div className="mii-ingredients-container">
          <div className="mii-ingredient-list">
            {selectedIngredients.map((item, index) => {
              return (
                <div key={index} className="mii-ingredient-list-item">
                  <label>{item.name}</label>
                  <div className="mii-ingredient-count">
                    <label>Count:</label>
                    <button onClick={() => changeAmount(item, -1)}>-</button>
                    <div className="mii-ingredient-count-number">
                      {item.count}
                    </div>
                    <button onClick={() => changeAmount(item, 1)}>+</button>
                  </div>
                  <button onClick={() => deleteIngredient(item)}>🗑️</button>
                </div>
              );
            })}
          </div>

          <div className="mii-ingredient-add">
            <Popup trigger={<button>+</button>} modal>
              {(close) => (
                <div className="mii-ingredient-add-popup">
                  {ingredients.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="mii-ingredient-list-item"
                        onClick={() => {
                          addIngredient(item);
                          close();
                        }}
                      >
                        <label>{item.name}</label>
                      </div>
                    );
                  })}
                </div>
              )}
            </Popup>
          </div>
        </div>
      </div>
      <button className="mii-submit-btn" onClick={submitMenuItem}>
        Submit new menu item
      </button>
    </div>
  );
}
