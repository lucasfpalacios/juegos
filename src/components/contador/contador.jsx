/*import { SettingsCellOutlined } from "@mui/icons-material";
import { Component } from "react"

const ItemCount = ({stock, initial}) =>{

    const addItem = () =>{
        const newValue = count + 1;
        if(newValue <= stock){
            SettingsCellOutlined(newValue);
        }
    }
    const quitItem = () =>{
        const newValue = count - 1;
        if(newValue >= initial){
            SettingsCellOutlined(newValue)
        }
    }

    const onAdd = () =>{
        if(count === 1){
            alert(`Se agrego ${count} producto al carrito`);
        }
        else{
            alert(`Se agrego ${count} productos al carrito`);
        }
    }

    return(
        <>
        <div>
            <Button onClick={addItem}>+</Button>
            <h2>{count}</h2>
            <Button onClick={quitItem}>-</Button>
        </div>
        <Button onClick={onAdd}>Agregar</Button>
        </>
    )
}

export default ItemCount;*/