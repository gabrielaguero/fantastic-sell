import react, { useEffect, useState } from "react";
import { getProductos } from "./Productos";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"


const ItemListContainer = ({greeting})=>{
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const {categoryId} = useParams();

    useEffect(()=>{
        getProductos(categoryId)
        .then((respuesta)=>{
            setProductos(respuesta);
        })
        .catch((error)=>{
            console.log('error',error);
        })
        .finally(()=>{
            setLoading(false);
        });

        return() => {
            setProductos([]);
            setLoading(true);
        };
    },[categoryId]);

    return (
        <>
        {loading ? (
            <h1>Cargando...</h1>
        ) : (
            <>
                <h1>{greeting}</h1>
                <ItemList productos={productos} />
            </>
        )}
    </>
    );
}

export default ItemListContainer;