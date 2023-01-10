import "./DetailsOverview.css";
import { updateMenuItem } from "../../services/MenuService";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../services/MenuService";
import Select from "react-select";
import Popup from "reactjs-popup";

export default function MenuItemDetailsOverview(props) {
  const [categories, setCategories] = useState([]);
  const [options, setOptions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
      const o = getOptions(res);
      setOptions(o);
    });
  }, []);

  function getOptions(res) {
    const result = [];
    res.map((category) => {
      result.push({ value: category.id, label: category.name });
    });

    return result;
  }

  const [categoryId, setCategoryId] = useState(props.item.categoryId);
  function close(value) {
    props.onCloseButtonClick(value);
  }

  function getCategoryNameById(id) {
    const category = categories.find((category) => category.id === id);
    return category ? category.name : null;
  }

  async function updateSelectedMenuItem() {
    let id = props.item.id;

    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let sDesc = document.getElementById("short-description").value;
    let lDesc = document.getElementById("long-description").value;
    let iurl = document.getElementById("iurl").value;
    // let burl = document.getElementById("burl").value;
    let burl = props.item.bannerUrl;
    let category = selectedCategory;

    // let ingredients = selectedIngredients.map((item) => {
    //   return {
    //     menuItemId: id,
    //     ingredientId: item.id,
    //     amount: item.count,
    //   };
    // });

    let ingredients = props.item.ingredients;

    console.log(category);

    let menuItem = {
      id: id,
      name: name,
      iconUrl: iurl,
      bannerUrl: burl,
      longDescription: lDesc,
      shortDescription: sDesc,
      price: price,
      categoryId: category,
      ingredients: ingredients,
    };
    console.log(menuItem);
    await updateMenuItem(menuItem);

    //window.location.href = "/menu-item-list";
  }

  return (
    <div className="details">
      <div className="detail" id="picture">
        <img
          src={props.item.iconUrl ?? "https://via.placeholder.com/150"}
          alt={props.item.name}
        />
        <label htmlFor="url">Picture URL:</label>
        <input
          id="iurl"
          type="text"
          name="url"
          defaultValue={props.item.iconUrl}
          // disabled={true}
        />
        <button className="edit-picture">&#128221;</button>
      </div>
      <div className="detail">
        <label htmlFor="name">Item Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          defaultValue={props.item.name}
          // disabled={true}
        />
        <button className="edit-name">&#128221;</button>
      </div>
      <div className="detail">
        <label htmlFor="short-desc">Short Description:</label>
        <input
          id="short-description"
          type="text"
          name="short-desc"
          defaultValue={props.item.shortDescription}
          // disabled={true}
        />
        <button className="edit-s-desc">&#128221;</button>
      </div>
      <div className="detail">
        <label htmlFor="long-desc">Long Description:</label>
        <textarea
          id="long-description"
          rows="5"
          name="long-desc"
          defaultValue={props.item.longDescription}
          // disabled={true}
        />
        <button className="edit-l-desc">&#128221;</button>
      </div>
      <div className="detail">
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          inputMode="decimal"
          min="0"
          step="0.01"
          name="price"
          defaultValue={props.item.price}
          // disabled={true}
        />
        <button className="edit-price">&#128221;</button>
      </div>
      <div className="detail" id="categories">
        <label htmlFor="categories">Category:</label>
        <span>(Currently: {getCategoryNameById(props.item.categoryId)})</span>
        <Select
          id="category"
          value={options.value}
          options={options}
          defaultValue={options[0]}
          // onClick={setSelectedCategory(options.value)}
        />
        <button className="edit-ingredients">&#128221;</button>
      </div>
      <div className="confirmation">
        <Popup
          trigger={
            <button id="apply" disabled={true}>
              Apply
            </button>
          }
          modal={true}
        >
          {(close) => (
            <div className="confirmation-popup">
              <p>Are you sure you want to update this menu item?</p>
              <button onClick={() => updateSelectedMenuItem()}>Confirm</button>

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
