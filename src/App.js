import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import 'bootswatch/dist/minty/bootstrap.min.css';
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <nav className="App">
      <NavBar/>
      <div>
        {/* <ItemListContainer welcome={"Welcome to Mandala Cakes!"} /> */}
        <ItemDetailContainer />
      </div>
    </nav> 
  );
}

export default App;
