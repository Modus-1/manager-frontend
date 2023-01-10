import "../ListPage.css";
import { useEffect, useState } from "react";
import { getAllCategories, getAllMenuItems } from "../../services/MenuService";
import MenuItemDetailsOverview from "../../components/Overviews/MenuItemDetailsOverview";

export default function MenuItemListPage() {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentMenuItem, setCurrentMenuItem] = useState({});

  useEffect(() => {
    getAllMenuItems().then((response) => {
      setMenuItems(response);
    });
    getAllCategories().then((response) => {
      setCategories(response);
    });
  }, []);

  let closeInfo = (value) => {
    if (value === true) {
      setCurrentMenuItem({});
    }
  };

  function showInfo(menuItem) {
    return (
      <div
        className={
          "single-item-container " +
          (Object.keys(currentMenuItem).length === 0 ? "disabled" : "")
        }
      >
        <MenuItemDetailsOverview
          item={menuItem}
          onCloseButtonClick={closeInfo}
        ></MenuItemDetailsOverview>
      </div>
    );
  }

  return (
    <div className="main-container">
      {showInfo(currentMenuItem)}
      <div className="rows-container">
        <div className="row header">
          <span>Naam</span>
          <span id="category">Categorie</span>
          <div className="controls"></div>
          <div className="controls"></div>
        </div>{" "}
        {menuItems.map((menuItem) => (
          <div className="row" key={menuItem.id}>
            <span>{menuItem.name ?? "unknown"}</span>
            <span id="category">
              {categories.find((c) => c.id === menuItem.categoryId)?.name ??
                "unknown"}
            </span>
            <button className="controls" id="delete">
              &#10006;
            </button>
            <button
              className="controls"
              id="info"
              onClick={() => setCurrentMenuItem(menuItem)}
            >
              &#129094;
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
