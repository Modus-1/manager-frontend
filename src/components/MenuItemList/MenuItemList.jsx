import {useEffect, useState} from "react";
import {getAllMenuItems} from "../../services/MenuService";

export default function MenuItemList() {

    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        setMenuItems([]);
        getAllMenuItems().then((response) => { setMenuItems(response) })
        console.log(menuItems);
    }, []);


  return (
    <div>
      <p>test</p>
    </div>
  );
}
