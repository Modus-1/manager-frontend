import "./DetailsOverview.css";
import React, { useEffect, useState } from "react";
import { getAllCategories } from "../../services/MenuService";

export default function MenuItemDetailsOverview(props) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const [category, setCategory] = useState(props.item.categoryId);

  function close(value) {
    props.onCloseButtonClick(value);
  }

  function getCategoryNameById(id) {
    const category = categories.find((category) => category.id === id);
    return category ? category.name : null;
  }

  async function updateMenuItem() {
    let id = props.menuItem.id;
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let desc = document.getElementById("desc").value;
    let ldesc = document.getElementById("ldesc").value;
    let iurl = document.getElementById("iurl").value;
    let burl = document.getElementById("burl").value;

    // let ingredients = selectedIngredients.map((item) => {
    //   return {
    //     menuItemId: id,
    //     ingredientId: item.id,
    //     amount: item.count,
    //   };
    // });

    let menuItem = {
      id: id,
      name: name,
      iconUrl: iurl,
      bannerUrl: burl,
      longDescription: ldesc,
      shortDescription: desc,
      price: price,
      categoryId: category.id,
      // ingredients: ingredients,
    };
    await updateMenuItem(menuItem);

    window.location.href = "/menu-item-list";
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
        <select
          name="ingredients"
          value={getCategoryNameById(props.item.categoryId)}
          onChange={(setCategory.bind = this)}
        >
          {""}
          {categories?.map((category) => (
            <option key={category.id}>
              {
                category.name
                /* TODO: dit moet NAAM worden, ipv Id,
                                hier moet een andere API endpoint voor geraadpleegd worden. */
              }
            </option>
          ))}
        </select>
        <button className="edit-ingredients">&#128221;</button>
      </div>
      <div className="confirmation">
        <button id="apply">Apply</button>
        <button id="cancel" onClick={() => close(true)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
