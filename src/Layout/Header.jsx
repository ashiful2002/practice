import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/helloSheLogo.jpg'
import { Button } from 'react-bootstrap';


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
                        <Nav.Link href='/home'>Home</Nav.Link>
                        <Nav.Link href='/about'>About</Nav.Link>
                        <Nav.Link href='/impact'>Impact</Nav.Link>
                        <Nav.Link href='/missioin'>Mission</Nav.Link>
                        <Nav.Link href='/fields'>Fields</Nav.Link>
                        <Nav.Link href='/testimonials'>Testimonials</Nav.Link>
                        <Nav.Link href='/stay_updatd'>Stay Updated</Nav.Link>
                        <Nav.Link href='/partners'>Supporting Partner</Nav.Link>
                        <Nav.Link href='/join_us'>
                            <a href='https://forms.gle/Vc3tZHcxq3xixSgF6' download="true" target='_blank'>
                                <Button >Join Us</Button>
                            </a>
                        </Nav.Link>

                       

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;



