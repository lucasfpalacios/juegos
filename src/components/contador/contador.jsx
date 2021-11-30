import { useState } from "react";

const ItemCount = ({stock, initial}) =>{

    const [count, setCount] = useState(initial)

    const addItem = () =>{
        const newValue = count + 1;
        if(newValue <= stock){
            setCount(newValue);
        }
    }

    const quitItem = () =>{
        const newValue = count - 1;
        if(newValue >= initial){
            setCount(newValue);
        }
    }

    const onAdd = () =>{
        if(count === 1){
            alert(`Se agrego ${count} producto al carrito`);
        }
        else{
            alert(`Se agregaron ${count} productos al carrito`);
        }
    }

    return(
        <>
        <div>
            <button onClick={addItem}>+</button>
            <h2>{count}</h2>
            <button onClick={quitItem}>-</button>
        </div>
        <button onClick={onAdd}>Agregar</button>
        </>
    )
}

export default ItemCount;