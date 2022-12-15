import "./App.css";
import SideBar from "./components/Sidebar/Sidebar";

import AddMenuItemPage from "./pages/AddMenuItemPage/AddMenuItemPage";
import AddIngredientPage from "./pages/AddIngredientPage/AddIngredientPage";
import MenuItemListPage from "./pages/MenuItemListPage/MenuItemListPage";
import IngredientListPage from "./pages/IngredientListPage/IngredientListPage";

import { ReactDOM } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SideBar></SideBar>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MenuItemListPage/>}></Route>

          <Route path="add-ingredient-form" element={<AddIngredientPage/>}></Route>
          <Route path="add-menu-item-form" element={<AddMenuItemPage/>}></Route>
          <Route path="ingredient-list" element={<IngredientListPage/>}></Route>
          <Route path="menu-item-list" element={<MenuItemListPage/>}></Route>

          <Route path="*" element={<div>404 Page not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
