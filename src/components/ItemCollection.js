import { async } from "@firebase/util";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import {db} from '../Utils/firebase '

export const ItemCollection = () =>{
    const [productos, setProductos] = useState([])

    const carrito = [
        {
            item:{
                id: 1,
                title: "librero",
                price: 2000
            },
            quantity: 5
        },
        {
            item:{
                id: 2,
                title: "pack de tazas",
                price: 250
            },
            quantity: 10
        },
        {
            item:{
                id: 3,
                title: "estante",
                price: 550
            },
            quantity: 5
        },
        {
            item:{
                id: 4,
                title: "sillon de cuero",
                price: 1600
            },
            quantity: 7
        },
        {
            item:{
                id: 5,
                title: "silla de madera",
                price: 250
            },
            quantity: 5
        }
    ]

   

    const sendOrder = (e) => {
        e.preventDefault();
        let orden = {
            buyer:{
                name: 'Gabriel',
                phone: '+541134656787',
                mail:'gabriel.12@gmail.com'
            },
            items:carrito,
            total: carrito.reduce((acc,i)=>(acc + (i.item.price * i.quantity)),0)
        }
    }

    return(
        <div>
            <form onSubmit={sendOrder}>
                <input type="text" placeholder="nombre"/>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )

    useEffect(()=>{
        const getData = async()=>{
            const query = collection(db, 'items');
            const response = await getDocs(query);
            const data = response.docs.map(doc=>{return {id: doc.od, ...doc.data()}});
            setProductos(data);
            const queryDoc = doc(db, 'items', 'iB2e48qMh8DY165TxhS5');
            const responseDoc = await getDoc(queryDoc);
            const dataDoc = responseDoc.data();
        }
        getData();
    })
}