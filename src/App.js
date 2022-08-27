import './App.css';
import NavBar from './components/Navigation/NavBar/NavBar.js';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
