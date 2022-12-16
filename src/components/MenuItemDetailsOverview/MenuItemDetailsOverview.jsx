import "./MenuItemsDetailsOverview.css";

export default function MenuItemDetailsOverview(menuItem) {
    return (
        <div className="details">
            <div className="detail" id="picture">
                <img src={menuItem.iconUrl} alt={menuItem.name} />
                <label htmlFor="url">Picture URL:</label>
                <input type="text" name="url" value={menuItem.iconUrl} disabled={true}/>
            </div>
            <div className="detail" id="name">
                <label htmlFor="name">Item Name:</label>
                <input type="text" name="name" value={menuItem.name} disabled={true}/>
            </div>
            <div className="detail" id="short-description">
                <label htmlFor="name">Short Description:</label>
                <input type="text" name="name" value={menuItem.shortDescription} disabled={true}/>
            </div>
            <div className="detail" id="long-description">
                <label htmlFor="name">Long Description:</label>
                <textarea rows="5" name="name" value={menuItem.longDescription} disabled={true}/>
            </div>
            <div className="detail" id="price">
                <label htmlFor="name">Long Description:</label>
                <input type="number" name="name" value={menuItem.longDescription} disabled={true}/>
            </div>
        </div>
    );
}