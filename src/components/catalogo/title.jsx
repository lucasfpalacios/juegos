import { Component } from 'react';

const TitleComponent = ({name, otroJuego})=> { 
    return (
        <div>
            <h1> The Last Of Us {name} {otroJuego}</h1>
        </div>
    );
}

 
export default TitleComponent;