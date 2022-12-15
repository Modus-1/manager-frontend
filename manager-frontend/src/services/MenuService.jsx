import axios from 'axios';
const config = require('./config.json');

const ENDPOINT_BASE = "not implemented";

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