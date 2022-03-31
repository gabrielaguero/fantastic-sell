import react, {useState} from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

const ItemDetail = ({producto}) => {
    const [monto, setMonto] = useState(0);

    const onAdd = (cantidad) => {
        setMonto(cantidad);
    };
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center',border: '2px solid black',}}>
            <img width="400px" src={producto.img} alt={producto.name} />
            <div>
                <h3>{producto.name}</h3>
                <h3>{producto.price}</h3>

                {monto === 0 ? (
                    <CartContext.Provider>
                    <ItemCount stock={producto.stock} onAdd={onAdd} />
                    </CartContext.Provider>
                ) : (
                    <>
                        <Link style={{ margin: '5px' }} to="/cart">
                            Ir al carrito
                        </Link>
                    </>
                )}
                <Link style={{ margin: '5px' }} to="/">
                    Volver al Home
                </Link>
            </div>
        </div>
    )
}

export default ItemDetail;