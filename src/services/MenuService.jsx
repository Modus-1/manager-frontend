import axios from "axios";
const config = require("./config.json");

//MenuItem Endpoints
async function getAllMenuItems() {
  const response = await axios.get(
    config.menuApi.baseUrl + config.menuApi.endpoints.getAllMenuItems
  );
  return response.data;
}

async function getMenuItemByID(id) {
  const response = await axios.get(
    config.menuApi.baseUrl + config.menuApi.endpoints.getMenuItemById + id
  );
  return response.data;
}

async function createMenuItem(menuItem) {
  const response = await axios.post(
    config.menuApi.baseUrl + config.menuApi.endpoints.createMenuItem,
    menuItem
  );
  return response.data;
}

async function updateMenuItem(menuItem) {
  const response = await axios.patch(
    config.menuApi.baseUrl + config.menuApi.endpoints.updateMenuItem,
    menuItem
  );
  return response.data;
}

//Category Endpoints
async function getAllCategories() {
  const response = await axios.get(
    config.menuApi.baseUrl + config.menuApi.endpoints.getAllCategories
  );
  return response.data;
}

//Ingredient Endpoints
async function getAllIngredients() {
  const response = await axios.get(
    config.menuApi.baseUrl + config.menuApi.endpoints.getAllIngredients
  );
  return response.data;
}

async function getIngredientByID(id) {
  const response = await axios.get(
    config.menuApi.baseUrl + config.menuApi.endpoints.getIngredientById + id
  );
  return response.data;
}

async function updateIngredient(ingredient) {
  const response = await axios.patch(
    config.menuApi.baseUrl + config.menuApi.endpoints.updateIngredient,
    ingredient
  );
  return response.data;
}

async function createIngredient(ingredient) {
  const response = await axios.post(
    config.menuApi.baseUrl + config.menuApi.endpoints.createIngredient,
    ingredient
  );
  return response.data;
}

export {
  getAllMenuItems,
  getMenuItemByID,
  getAllCategories,
  getAllIngredients,
  getIngredientByID,
  createMenuItem,
  updateIngredient,
  updateMenuItem,
  createIngredient,
};
