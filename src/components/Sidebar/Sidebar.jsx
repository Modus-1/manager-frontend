import { Navigate, useNavigate, Router } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar-container">
      <a href="menu-item-list">
        <div className="sidebar-item">
          <strong className="sidebar-item-text">menu item list</strong>
        </div>
      </a>

      <a href="ingredient-list">
        <div className="sidebar-item">
          <strong className="sidebar-item-text">ingredient list</strong>
        </div>
      </a>

      <a href="add-menu-item">
        <div className="sidebar-item">
          <strong className="sidebar-item-text">Add menu items</strong>
        </div>
      </a>

      <a href="add-ingredient">
        <div className="sidebar-item">
          <strong className="sidebar-item-text">Add Ingredients</strong>
        </div>
      </a>
    </div>
  );
}
