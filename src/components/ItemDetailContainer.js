import react, { useEffect, useState } from "react";
import { getProducto } from "./Producto";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = ()=>{
    const [productos, setProductos] = useState ({});
    const [loading, setLoading] = useState(true);
    const {itemId} = useParams();

    useEffect(()=>{
        getProducto(itemId).then((respuesta)=> {
            setProductos(respuesta);
        })
        .catch((error)=>{
            console.log('error', error);
        })
        .finally (()=>{
            setLoading(false);
        });
        
        return () => {
            setProductos([]);
            setLoading(true);
        }
    },[itemId]);

    return(
        <>{loading ? <h1>Cargando...</h1> : <ItemDetail producto={productos} />}</>
    )
}

export default ItemDetailContainer;