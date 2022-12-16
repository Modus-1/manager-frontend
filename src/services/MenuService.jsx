import axios from 'axios';
const config = require('./config.json');

async function getAllMenuItems() {
    const response = await axios.get(
        config.menuApi.baseUrl + 
        config.menuApi.endpoints.getAllMenuItems
    ).catch(() => console.log('getAllMenuItems error'));
    return response.data;
}

async function getMenuItemByID(id) {
    const response = await axios.get(
        config.menuApi.baseUrl + 
        config.menuApi.endpoints.getMenuItemById + 
        id
    ).catch(() => console.log('getMenuItemByID error'));
    return response.data;
}

async function getAllCategories() {
    const response = await axios.get(
        config.menuApi.baseUrl +
        config.menuApi.endpoints.getAllCategories
    ).catch(() => console.log('getAllCategories error'));
    return response.data;
}

export { getAllMenuItems, getMenuItemByID, getAllCategories }