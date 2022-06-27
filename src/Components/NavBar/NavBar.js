import logo from '../../assets/simbolo-masonico-escuadra-brujula-mistica-ocultista-esoterica-sociedad-sagrada_1284-41383.jpg'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './Components/CartWidget/CartWidget'

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container style={styles.container}>
                <Navbar.Brand href="#home">
                    <img
                        alt=""
                        src={logo}
                        width='30'
                        height='30'
                        className="d-inline-block align-top"
                    />{' '}
                    Tienda
                </Navbar.Brand>
                <Navbar.Brand href="#home">Inicio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Contactos</Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>
                        <NavDropdown title="Catalogo" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Producto1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Producto2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Producto3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        <CartWidget />
    </Navbar>

    );
}

export default CollapsibleExample

const styles = {
    imgStyle: {
        width: '10%',
    },

    container: {
        display: 'flex',
        justifyContent: 'spaceBetween',
        alignItems: 'center',
    },
} 