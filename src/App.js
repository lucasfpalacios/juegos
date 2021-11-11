import './App.css';
import NavBar from './components/navbar/navbar';
import Catalogo from './components/catalogo/catalogo';
import CartWidget from './components/cartwidget/cartwidget';
import TitleComponent from './components/catalogo/title';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <Catalogo />
      <CartWidget/>
    </div>
  );
}

export default App;
