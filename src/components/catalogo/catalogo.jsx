import { Component } from 'react';
import TitleComponent from './title';

class Catalogo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "The Last Of Us"
         }
    }
    render() { 
        return ( 
            <div>
                <TitleComponent  name={this.state.name} />
            </div>
         );
    }
}
 
export default Catalogo;