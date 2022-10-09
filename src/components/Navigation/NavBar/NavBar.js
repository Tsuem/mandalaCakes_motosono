import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import logo from "../../../logomandala.jpg";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <Navbar bg="secondary" variant="light" expand="lg">
      <Container>
        <Link to={'/'}>
          <img src={logo} width="85px" alt="mandala-logo" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to={'/'} style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} className="nav-link">Home</NavLink>
            <NavDropdown id="nav-dropdown-dark-example" title="Category" variant="secondary">
              <NavDropdown.Item as={Link} to={'category/Classic'}>Classic</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'category/Premium'}>Premium</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'category/Vegan'}>Vegan</NavDropdown.Item>
            </NavDropdown>
            <NavLink to={'/about'} style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} className="nav-link">About Us</NavLink>
            <NavLink to={'/contact'} style={({ isActive }) => isActive ? { fontWeight: 'bold' } : {}} className="nav-link">Contact</NavLink>
          </Nav>
          <CartWidget />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
