import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Cart from './Cart';

const NavBar = () => {
    const [show, setShow] = useState(false)
    const handleClose =()=> {
       setShow(false)
    }
    return (
        <>
    <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">E-COMMERCE</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/purchases">Purchases</Nav.Link>
            <Nav.Link
            onClick={()=> setShow(true)}
            >🛒</Nav.Link>
        </Nav>
        </Container>
    </Navbar>
<Cart
show={show}
handleClose={handleClose}
/>
        </>
   
    );
};
export default NavBar;