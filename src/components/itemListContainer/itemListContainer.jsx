import ItemCount from "./ItemCount";
import React, { useState, useEffect } from 'react';
import getProductos from "../services/handMadePromice";
import ItemList from './ItemList'



const ItemListConteiner = ({greeting}) =>{
 

    const [producto, setProducto] = useState([])

    useEffect(() => {
        getProductos
        .then(res =>{
           setProducto(res)
        })
        .catch(err => alert("ocurrio un error", err))
    }, [])

    
    .

    return(
        <>
        <h1>Producto</h1>
        <h3>{greeting}</h3>
        <ItemCount stock={5} initial={1}/>
        <ItemList producto={producto}/>
        </>
    )
}

export default ItemListConteiner;