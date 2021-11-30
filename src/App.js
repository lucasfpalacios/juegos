import './App.css';
import NavBar from './components/navbar/navbar';
import Catalogo from './components/catalogo/catalogo';
import CartWidget from './components/cartwidget/cartwidget';
import TitleComponent from './components/catalogo/title';
import Contador from './components/contador/contador'
//import ItemCount from './components/contador/contador';


function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Catalogo/>
      <CartWidget/>   
      <Contador/>
      
    </div>
  );
}

export default App;
