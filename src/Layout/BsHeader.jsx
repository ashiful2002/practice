import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/helloSheLogo.jpg";
import { NAVIGATION } from "../constants";

function BsHeader() {
  return (
    <Navbar collapseOnSelect  expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className="flex justify-center items-center">
          <img
            src={logo}
            className="mx-2 w-20 rounded-full"
            alt="hello She"
          /> 
          {/* <h1 className="btn text-3xl ml-3  shadow  px-2 text-violet-500 font-sans font-extrabold">HELLO SHE</h1> */}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {NAVIGATION.map((item) => (
              <Nav.Link className="block text-center p-3 capitalize" key={item.id} href={item.url}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BsHeader;
