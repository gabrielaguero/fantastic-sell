import react, { useEffect } from "react";
import Item from "./Item";

const ItemList = ({ productos }) => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
            {productos.map((producto) => (
                <Item {...producto} key={producto.id} />
            ))}
        </div>
    );
};

export default ItemList;