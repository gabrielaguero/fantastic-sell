import react, { useState } from "react";
import './ItemCount.css'

function ItemCount (stock, onAdd){
    const [count, setCount] = useState(1);

    const aumentar = () =>{
        count < stock && setCount(count + 1);
        }

    const disminuir = () => {
        count > 0 && setCount(count - 1);
       }

    return(
        <div className="containedor-boton">
            <div className="botones">
                <button onClick={disminuir}>-</button>
                <p>{count}</p>
                <button onClick={aumentar}>+</button>
            </div>
            <div>
                <button
                    disabled={count === 0}
                    className={count === 0 ? 'disabled' : 'add'}
                    onClick={() => onAdd(count)}
                >
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;