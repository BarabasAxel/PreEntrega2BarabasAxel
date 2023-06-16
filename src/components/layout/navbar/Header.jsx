import "./Header.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Counter from "../../common/cartWidget/Counter";
import { Link } from "react-router-dom";



const Header = () => {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container className="container-fluid px-4">
                    <Link to="/" className="navbar-brand col-xl-4"><img src="https://res.cloudinary.com/dcfsspuhw/image/upload/v1686063053/e-commerce%20CODERHOUSE/LevelOne_n7wdf7.png" alt="logo" width={60}/></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav col-xl-8">
                        <Nav className="navbar-nav me-auto">
                            <Link to="/" className="text-white nav-item mx-lg-4 fs-5">Inicio</Link>
                            <Link to="/category/PC" className="text-white nav-item mx-lg-4 fs-5">PC</Link>
                            <Link to="/category/PS5" className="text-white nav-item mx-lg-4 fs-5">PS5</Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Link to="/cart" className="text-white">
                        <Counter />
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header 