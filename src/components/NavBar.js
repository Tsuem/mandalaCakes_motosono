import logo from '../logomandala.jpg';

const NavBar = () => {
    return (
        <div className="navbar-container" >
            <div className="logo-container">
                <img src={logo} className="navbar-logo" alt="mandala-logo" />
                <p className="brand"> Mandala Cakes</p>
            </div>
            <ul className="list-container">
                <li>
                    <a href="#">Inicio</a>
                </li>
                <li>
                    <a href="#">Productos</a>
                </li>
                <li>
                    <a href="#">Favoritos</a>
                </li>
            </ul>
            <div className="button-container">
                <button>Carrito</button>
            </div>    
        </div>
    )
}

export default NavBar;