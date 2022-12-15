import "./Sidebar.css";

export default function Sidebar(){
    return(
        <div className="sidebar-container">
            <div className="all-menu-items">
                <strong>All Menu Items</strong>
            </div>
            <div className="all-ingredients">
                <strong>All Ingredients</strong>
            </div>
            <div className="add-ingredient">
                <strong>Add Ingredient</strong>
            </div>
            <div className="add-menu-item">
                <strong>Add Menu Item</strong>
            </div>
        </div>
    )
}