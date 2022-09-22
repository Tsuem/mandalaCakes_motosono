import './App.css';
import 'bootswatch/dist/minty/bootstrap.min.css';
import NavBar from './components/Navigation/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomProvider } from './context/CartContext';

function App() {

  return (
    <div className="App">
      <CustomProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={"Welcome to Mandala Cakes"} />} />
            <Route path="category/:id" element={<ItemListContainer />} />
            <Route path="item/:id" element={<ItemDetailContainer />} />
            <Route path="/about" element={<h1 className="mt-4"> About us</h1>} />
            <Route path="/contact" element={<h1 className="mt-4">Contact us</h1>} />
            <Route path="*" element={<h1 className="mt-4"> 404 - Not found... </h1>} />
            <Route path="/cart" element={<h1 className="mt-4">Cart</h1>} />
          </Routes>
          {/* Footer */}
        </BrowserRouter>
      </CustomProvider>

    </div>
  );
}

export default App;
