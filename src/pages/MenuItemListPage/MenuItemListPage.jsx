import "./MenuItemListPage.css";
import {useEffect, useState} from "react";
import {getAllCategories, getAllMenuItems} from "../../services/MenuService";

export default function MenuItemListPage() {

    const [menuItems, setMenuItems] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setMenuItems([]);
        getAllMenuItems().then((response) => { setMenuItems(response) });
        setCategories([]);
        getAllCategories().then((response) => { setCategories(response) });
    }, []);

  return (
    <div className="main-container">
        <div className="row header">
            <span>Naam</span>
            <span id="category">Categorie</span>
            <div className="controls"></div>
            <div className="controls"></div>
        </div> {
            menuItems.map((menuItem) => (
                <div className="row" key={menuItem.id}>
                    <span>{menuItem.name}</span>
                    <span id="category">{categories.find(c => c.id === menuItem.categoryId)?.name}</span>
                    <button className="controls" id="delete">&#10006;</button>
                    <button className="controls" id="info">&#129094;</button>
                </div>
            ))
        }
    </div>
  );
}
