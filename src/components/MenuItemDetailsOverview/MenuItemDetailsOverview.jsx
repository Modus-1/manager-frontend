import "./MenuItemsDetailsOverview.css";

export default function MenuItemDetailsOverview(props) {

    function close(value) {
        props.onCloseButtonClick(value);
    }

    return (
        <div className="details">
            <div className="detail" id="picture">
                <img src={props.item.iconUrl} alt={props.item.name} />
                <label htmlFor="url">Picture URL:</label>
                <input type="text" name="url" value={props.item.iconUrl} disabled={true}/>
                <button className="edit-picture">&#128221;</button>
            </div>
            <div className="detail" id="name">
                <label htmlFor="name">Item Name:</label>
                <input type="text" name="name" value={props.item.name} disabled={true}/>
                <button className="edit-name">&#128221;</button>
            </div>
            <div className="detail" id="short-description">
                <label htmlFor="short-desc">Short Description:</label>
                <input type="text" name="short-desc" value={props.item.shortDescription} disabled={true}/>
                <button className="edit-s-desc">&#128221;</button>
            </div>
            <div className="detail" id="long-description">
                <label htmlFor="long-desc">Long Description:</label>
                <textarea rows="5" name="long-desc" value={props.item.longDescription} disabled={true}/>
                <button className="edit-l-desc">&#128221;</button>
            </div>
            <div className="detail" id="price">
                <label htmlFor="price">Price:</label>
                <input type="number" inputMode="decimal" min="0" step="0.01" name="price"
                       value={props.item.price} disabled={true}
                />
                <button className="edit-price">&#128221;</button>
            </div>
            <div className="detail" id="ingredients">
                <label htmlFor="ingredients">Ingredients:</label>
                <select name="ingredients"> {
                    props.item.ingredients?.map((ingredient) => (
                        <option key={ingredient.ingredientId}>{ingredient.ingredientId
                            /* TODO: dit moet NAAM worden, ipv Id,
                                hier moet een andere API endpoint voor geraadpleegd worden. */}</option>
                    ))
                }
                </select>
                <button className="edit-ingredients">&#128221;</button>
            </div>
            <div className="confirmation">
                <button id="apply">Apply</button>
                <button id="cancel" onClick={() => close(true)}>Cancel</button>
            </div>
        </div>
    );
}