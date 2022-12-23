import "./DetailsOverview.css";

export default function MenuItemDetailsOverview(props) {
  function close(value) {
    props.onCloseButtonClick(value);
  }

  async function updateMenuItem() {}

  return (
    <div className="details">
      <div className="detail" id="picture">
        <img
          src={props.item.iconUrl ?? "https://via.placeholder.com/150"}
          alt={props.item.name}
        />
        <label htmlFor="url">Picture URL:</label>
        <input
          type="text"
          name="url"
          value={props.item.iconUrl ?? "unknown"}
          disabled={true}
        />
        <button className="edit-picture">&#128221;</button>
      </div>
      <div className="detail">
        <label htmlFor="name">Item Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={props.item.name ?? "unknown"}
          disabled={true}
        />
        <button className="edit-name">&#128221;</button>
      </div>
      <div className="detail">
        <label htmlFor="short-desc">Short Description:</label>
        <input
          id="short-description"
          type="text"
          name="short-desc"
          value={props.item.shortDescription ?? "unknown"}
          disabled={true}
        />
        <button className="edit-s-desc">&#128221;</button>
      </div>
      <div className="detail">
        <label htmlFor="long-desc">Long Description:</label>
        <textarea
          id="long-description"
          rows="5"
          name="long-desc"
          value={props.item.longDescription ?? "unknown"}
          disabled={true}
        />
        <button className="edit-l-desc">&#128221;</button>
      </div>
      <div className="detail">
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          inputMode="decimal"
          min="0"
          step="0.01"
          name="price"
          value={props.item.price ?? "unknown"}
          disabled={true}
        />
        <button className="edit-price">&#128221;</button>
      </div>
      <div className="detail" id="ingredients">
        <label htmlFor="ingredients">Ingredients:</label>
        <select name="ingredients" disabled={true}>
          {" "}
          {props.item.ingredients?.map((ingredient) => (
            <option key={ingredient.ingredientId}>
              {
                ingredient.ingredientId
                /* TODO: dit moet NAAM worden, ipv Id,
                                hier moet een andere API endpoint voor geraadpleegd worden. */
              }
            </option>
          ))}
        </select>
        <button className="edit-ingredients">&#128221;</button>
      </div>
      <div className="confirmation">
        <button id="apply">Apply</button>
        <button id="cancel" onClick={() => close(true)}>
          Cancel
        </button>
      </div>
    </div>
  );
}
