import { Component } from 'react';

const TitleComponent = (props)=> { 
    return (
        <div>
            <h1>El Juego #1 es {props.name}</h1>
        </div>
    );
}

 
export default TitleComponent;