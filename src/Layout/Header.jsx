import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/helloSheLogo.jpg'
import { Button } from 'react-bootstrap';
// import Hero from '../Components/Hero';
// import About from '../Components/About';



const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>

                <Navbar.Brand href="/">
                    <img src={logo} className='mx-2 w-20 rounded-full' alt="hello She logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">

                    <Nav className="ms-auto items-center justify-center ">
                        <Nav.Link href='../Components/Hero' >Home</Nav.Link>
                        <Nav.Link href='../Components/About'>About</Nav.Link>
                        <Nav.Link href='../Components/About'>Impact</Nav.Link>
                        <Nav.Link href='../Components/About'>Mission</Nav.Link>
                        <Nav.Link href='../Components/About'>Fields</Nav.Link>
                        <Nav.Link href='../Components/About'>Testimonials</Nav.Link>
                        <Nav.Link href='../Components/About'>Stay Updated</Nav.Link>
                        <Nav.Link href='../Components/About'>Supporting Partner</Nav.Link>
                        <Nav.Link href='../Components/About'>
                            <Button>Join us</Button>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;



