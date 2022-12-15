import { Navigate, useNavigate } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-item">
        <a href="menu-item-list">
          <strong>menu item list</strong>
        </a>
      </div>
      <div className="sidebar-item">
        <a href="ingredient-list">
          <strong>ingredient list</strong>
        </a>
      </div>

      <div className="sidebar-item">
        <a href="add-menu-item">
          <strong>Add menu items</strong>
        </a>
      </div>
      <div className="sidebar-item">
        <a href="add-ingredient">
          <strong>Add Ingredients</strong>
        </a>
      </div>
    </div>
  );
}
