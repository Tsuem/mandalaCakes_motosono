import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import 'bootswatch/dist/minty/bootstrap.min.css'; 

function App() {
  return (
    <nav className="App">
      <NavBar/>
      <div>
        <ItemListContainer welcome={"Bienvenido a Mandala Cakes!"} />
      </div>
    </nav> 
  );
}

export default App;
