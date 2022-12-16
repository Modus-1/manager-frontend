import axios from 'axios';
const config = require('./config.json');

async function getAllMenuItems() {
    const response = await axios.get(
        config.menuApi.baseUrl + 
        config.menuApi.endpoints.getAllMenuItems
    );
    return response.data;
}

async function getMenuItemByID(id) {
    const response = await axios.get(
        config.menuApi.baseUrl + 
        config.menuApi.endpoints.getMenuItemById + 
        id
    );
    return response.data;
}

async function getAllCategories() {
    const response = await axios.get(
        config.menuApi.baseUrl +
        config.menuApi.endpoints.getAllCategories
    );
    return response.data;
}

async function getAllIngredients(){
    const response = await axios.get(
        config.menuApi.baseUrl + 
        config.menuApi.endpoints.getAllIngredients
    );
    return response.data;
}

async function getIngredientByID(id){
    const response = await axios.get(
        config.menuApi.baseUrl + 
        config.menuApi.endpoints.getIngredientById +
        id
    );
    return response.data;
}

export { getAllMenuItems, getMenuItemByID, getAllCategories, getAllIngredients, getIngredientByID }