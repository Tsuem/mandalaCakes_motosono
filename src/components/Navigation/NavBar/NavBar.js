import logo from "../../../logomandala.jpg";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import { NavDropdown } from "react-bootstrap";

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to={'/'} className="navbar-brand">
          <img src={logo} className="d-inline-block align-text-top ms-4 me-1" width="85px" alt="mandala-logo" />
        </Link>
        <button className="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="navbar-collapse collapse" id="navbarColor02">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <NavLink to={'/'} style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} className="nav-link">Home</NavLink>
            </li>
            <NavDropdown id="nav-dropdown-dark-example" title="Category" variant="secondary">
              <NavDropdown.Item as={Link} to={'category/Classic'}>Classic</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'category/Premium'}>Premium</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'category/Vegan'}>Vegan</NavDropdown.Item>
            </NavDropdown>
            <li className="nav-item">
              <NavLink to={'/about'} style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/contact'} style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} className="nav-link">Contact</NavLink>
            </li>
          </ul>
          <CartWidget />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
