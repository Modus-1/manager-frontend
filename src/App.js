import "./App.css";
import SideBar from "./components/Sidebar/Sidebar";

import AddMenuItemForm from "./components/AddMenuItemForm/AddMenuItemForm";
import AddIngredientForm from "./components/AddIngredientForm/AddIngredientForm";
import MenuItemList from "./components/MenuItemList/MenuItemList";
import IngredientList from "./components/IngredientList/IngredientList";

import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuItemList/>}></Route>

          <Route path="add-ingredient-form" element={<AddIngredientForm/>}></Route>
          <Route path="add-menu-item-form" element={<AddMenuItemForm/>}></Route>
          <Route path="ingredient-list" element={<IngredientList/>}></Route>
          <Route path="menu-item-list" element={<MenuItemList/>}></Route>

          <Route path="*" element={<div>404 Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
